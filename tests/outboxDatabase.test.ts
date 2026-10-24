import assert from 'node:assert/strict';
import test, { type TestContext } from 'node:test';
import { IDBFactory } from 'fake-indexeddb';
import { runOutboxTransaction } from '../src/lib/chat/outboxDatabase';

function fixture(context: TestContext) {
  const previous = Object.getOwnPropertyDescriptor(globalThis, 'indexedDB');
  const factory = new IDBFactory();
  Object.defineProperty(globalThis, 'indexedDB', { value: factory, configurable: true });
  context.after(() => {
    if (previous) Object.defineProperty(globalThis, 'indexedDB', previous);
    else Reflect.deleteProperty(globalThis, 'indexedDB');
  });
  return factory;
}

async function seed(factory: IDBFactory, version: number) {
  const database = await new Promise<IDBDatabase>((resolve, reject) => {
    const request = factory.open('vormex-chat-outbox', version);
    request.onupgradeneeded = () => {
      const store = request.result.createObjectStore('messages', { keyPath: 'clientMessageId' });
      if (version === 2) {
        store.createIndex('ownerId', 'ownerId');
        store.createIndex('ownerConversation', ['ownerId', 'conversationId']);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  await new Promise<void>((resolve, reject) => {
    const transaction = database.transaction('messages', 'readwrite');
    for (const ownerId of ['one', 'two'])
      transaction
        .objectStore('messages')
        .put({
          clientMessageId: ownerId,
          ownerId,
          conversationId: 'chat',
          content: 'Queued message',
        });
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
  database.close();
}

for (const version of [1, 2]) {
  test(`existing outbox version ${version} preserves queued messages and isolates owner reads`, async (context) => {
    const factory = fixture(context);
    await seed(factory, version);
    const messages = await runOutboxTransaction<{ ownerId: string; content: string }[]>(
      'readonly',
      (store, resolve, reject) => {
        const request = store.index('ownerId').getAll('one');
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      }
    );
    assert.equal(messages.length, 1);
    assert.equal(messages[0].ownerId, 'one');
    assert.equal(messages[0].content, 'Queued message');
  });
}

test('transaction failure after a successful request rolls back the queued write', async (context) => {
  fixture(context);
  await assert.rejects(
    runOutboxTransaction<void>('readwrite', (store, resolve, reject) => {
      const request = store.put({ clientMessageId: 'failed', ownerId: 'one' });
      request.onsuccess = () => {
        resolve();
        reject(new Error('Abort after request success'));
      };
    }),
    /Abort after request success/
  );
  const entry = await runOutboxTransaction<unknown>('readonly', (store, resolve) => {
    const request = store.get('failed');
    request.onsuccess = () => resolve(request.result);
  });
  assert.equal(entry, undefined);
});
