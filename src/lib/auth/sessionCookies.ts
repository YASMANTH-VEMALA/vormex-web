import Cookies from 'js-cookie';

export function sessionCookieOptions(expiresAt?: string) {
  const expiry = expiresAt ? new Date(expiresAt) : undefined;
  return {
    expires: expiry && Number.isFinite(expiry.getTime()) ? expiry : 30,
    secure: typeof window !== 'undefined' && window.location.protocol === 'https:',
    sameSite: 'lax' as const,
    path: '/',
  };
}

export function persistBrowserSession(
  csrfToken?: string,
  expiresAt?: string,
  onboardingCompleted?: boolean
) {
  const options = sessionCookieOptions(expiresAt);
  if (csrfToken) Cookies.set('vx_csrf', csrfToken, options);
  Cookies.set('vx_auth_present', 'true', options);
  if (onboardingCompleted !== undefined) {
    Cookies.set('onboardingCompleted', String(onboardingCompleted), options);
  }
}
