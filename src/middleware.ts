import { NextRequest, NextResponse } from 'next/server';

// Protected routes that require authentication
const protectedRoutes: string[] = ['/', '/profile', '/settings', '/feed'];

// Auth routes that should redirect if already authenticated (except verify-email and forgot-password with token)
const authRoutes: string[] = ['/login', '/register'];

// Public routes that don't require authentication and shouldn't redirect if authenticated
const publicRoutes: string[] = ['/forgot-password', '/verify-email', '/auth/google/callback'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get token from cookies or Authorization header
  const token =
    request.cookies.get('authToken')?.value ||
    request.headers.get('Authorization')?.replace('Bearer ', '');

  // Check if it's a public route (like verify-email with token query param)
  const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route));
  
  // Check if accessing protected route without token
  const isProtectedRoute = protectedRoutes.some((route) =>
    route === '/' ? pathname === '/' : pathname.startsWith(route)
  );

  if (isProtectedRoute && !token) {
    // Redirect to login if accessing protected route without token
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Check if accessing auth route with token (but allow public routes)
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  if (isAuthRoute && token && !isPublicRoute) {
    // Redirect to home if accessing auth route with token
    const homeUrl = new URL('/', request.url);
    return NextResponse.redirect(homeUrl);
  }

  // Allow request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

