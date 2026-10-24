const DATABASE_NAME = 'vormex-chat-outbox';
// Existing browser profiles may already have version 2 of this outbox.
// IndexedDB rejects opening a database with a lower version.
const DATABASE_VERSION = 2;
const STORE_NAME = 'messages';

function openDatabase(): Promise<IDBDatabase> {
  if (typeof indexedDB === 'undefined') {
    return Promise.reject(new Error('IndexedDB is unavailable'));
  }

  return new Promise((resolve, reject) => {
    let blocked = false;
    const request = indexedDB.open(DATABASE_NAME, DATABASE_VERSION);
    request.onupgradeneeded = () => {
      const database = request.result;
      const store = database.objectStoreNames.contains(STORE_NAME)
        ? request.transaction!.objectStore(STORE_NAME)
        : database.createObjectStore(STORE_NAME, { keyPath: 'clientMessageId' });
      if (!store.indexNames.contains('ownerId'))
        store.createIndex('ownerId', 'ownerId', { unique: false });
      if (!store.indexNames.contains('ownerConversation'))
        store.createIndex('ownerConversation', ['ownerId', 'conversationId'], { unique: false });
    };
    request.onsuccess = () => {
      const database = request.result;
      if (blocked) {
        database.close();
        return;
      }
      database.onversionchange = () => database.close();
      resolve(database);
    };
    request.onerror = () => reject(request.error ?? new Error('Could not open the chat outbox'));
    request.onblocked = () => {
      blocked = true;
      reject(new Error('Chat outbox database upgrade is blocked'));
    };
  });
}

export async function runOutboxTransaction<T>(
  mode: IDBTransactionMode,
  operation: (
    store: IDBObjectStore,
    resolve: (value: T) => void,
    reject: (reason?: unknown) => void
  ) => void
): Promise<T> {
  const database = await openDatabase();
  return new Promise<T>((resolve, reject) => {
    let transaction: IDBTransaction;
    try {
      transaction = database.transaction(STORE_NAME, mode);
    } catch (error) {
      database.close();
      reject(error);
      return;
    }
    const store = transaction.objectStore(STORE_NAME);
    let result: T;
    let hasResult = false;
    let settled = false;
    const captureResult = (value: T) => {
      result = value;
      hasResult = true;
    };
    const fail = (reason?: unknown) => {
      if (settled) return;
      settled = true;
      try {
        transaction.abort();
      } catch {
        // The transaction may already have aborted because of the request error.
      }
      database.close();
      reject(reason ?? transaction.error ?? new Error('Chat outbox transaction failed'));
    };

    transaction.onerror = () =>
      fail(transaction.error ?? new Error('Chat outbox transaction failed'));
    transaction.onabort = () =>
      fail(transaction.error ?? new Error('Chat outbox transaction was aborted'));
    transaction.oncomplete = () => {
      database.close();
      if (settled) return;
      settled = true;
      if (hasResult) {
        resolve(result!);
      } else {
        reject(new Error('Chat outbox transaction completed without a result'));
      }
    };
    try {
      operation(store, captureResult, fail);
    } catch (error) {
      fail(error);
    }
  });
}
