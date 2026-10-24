import assert from 'node:assert/strict';
import test from 'node:test';
import { profileFieldValue, mergeProfileDraft } from '../src/lib/utils/profileForm';

test('each academic-year select option is sent as a number', () => {
  for (const year of [1, 2, 3, 4, 5]) {
    const value = profileFieldValue('currentYear', String(year));
    assert.equal(value, year);
    assert.equal(JSON.stringify({ currentYear: value }), `{"currentYear":${year}}`);
  }
});

test('optional years stay omitted when empty and graduation years stay numeric', () => {
  assert.equal(profileFieldValue('currentYear', ''), undefined);
  assert.equal(profileFieldValue('graduationYear', ''), undefined);
  assert.equal(profileFieldValue('graduationYear', '2028'), 2028);
});

test('text fields and privacy selections keep their original strings', () => {
  assert.equal(profileFieldValue('degree', 'Bsc'), 'Bsc');
  assert.equal(profileFieldValue('headline', '2028'), '2028');
  assert.equal(profileFieldValue('profileVisibility', 'PUBLIC'), 'PUBLIC');
});

test('incoming profile data hydrates untouched fields without erasing an unsaved location', () => {
  assert.deepEqual(
    mergeProfileDraft(
      { location: 'Pune', headline: '' },
      { location: '', headline: '' },
      { location: 'Delhi', headline: 'Developer' }
    ),
    { location: 'Pune', headline: 'Developer' }
  );
});
