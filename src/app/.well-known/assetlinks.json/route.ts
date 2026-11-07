import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const PACKAGE_NAME = 'com.vormex.android';
const FINGERPRINT = /^([0-9A-F]{2}:){31}[0-9A-F]{2}$/;

/**
 * Digital Asset Links for Android App Links verification (autoVerify in the app manifest).
 * Set ANDROID_APP_SHA256_FINGERPRINTS to a comma-separated list of SHA-256 certificate
 * fingerprints: the Google Play app-signing key (Play Console > Setup > App signing) and,
 * optionally, the upload key. Without a valid value the file is not served.
 */
export function GET() {
  const fingerprints = (process.env.ANDROID_APP_SHA256_FINGERPRINTS ?? '')
    .split(',')
    .map((value) => value.trim().toUpperCase())
    .filter((value) => FINGERPRINT.test(value));

  if (fingerprints.length === 0) {
    return NextResponse.json({ error: 'Not configured' }, { status: 404 });
  }

  return NextResponse.json(
    [
      {
        relation: ['delegate_permission/common.handle_all_urls'],
        target: {
          namespace: 'android_app',
          package_name: PACKAGE_NAME,
          sha256_cert_fingerprints: fingerprints,
        },
      },
    ],
    { headers: { 'Cache-Control': 'public, max-age=3600' } }
  );
}
