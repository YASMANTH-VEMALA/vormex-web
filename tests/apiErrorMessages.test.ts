import assert from 'node:assert/strict';
import test from 'node:test';
import { AxiosError, type AxiosResponse } from 'axios';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { getStructuredApiError } from '../src/lib/api/errors';
import { handleApiError } from '../src/lib/utils/errorHandler';

function failure(data: unknown, status = 500): AxiosError {
  return new AxiosError('Request failed', undefined, undefined, undefined, {
    data,
    status,
  } as AxiosResponse);
}

test('a structured gateway error stays renderable after a failed Google login', () => {
  const error = failure({
    error: { code: 'FUNCTION_INVOCATION_FAILED', message: 'Service unavailable' },
  });
  assert.equal(handleApiError(error), 'Service unavailable');
  assert.equal(getStructuredApiError(error).message, 'Service unavailable');
  assert.equal(
    renderToStaticMarkup(createElement('p', null, handleApiError(error))),
    '<p>Service unavailable</p>'
  );
});

test('unexpected error objects use status fallback instead of rendering an object', () => {
  for (const data of [
    { error: { code: 'FAILED' } },
    { error: { message: {} } },
    null,
    '<html>Error</html>',
  ]) {
    assert.equal(handleApiError(failure(data)), 'Server error. Please try again later.');
    assert.equal(typeof getStructuredApiError(failure(data)).message, 'string');
  }
});

test('plain API errors and retry hints retain their messages', () => {
  assert.equal(handleApiError(failure({ error: 'Invalid token' }, 401)), 'Invalid token');
  assert.equal(
    handleApiError(failure({ error: 'Too many attempts', retryAfterSeconds: 90 }, 429)),
    'Too many attempts Try again in 2 minutes.'
  );
  assert.equal(handleApiError(failure({ message: 'Try again later' })), 'Try again later');
});
