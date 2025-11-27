import { NextRequest, NextResponse } from 'next/server';

// Protected routes that require authentication
const protectedRoutes: string[] = ['/', '/profile', '/settings', '/feed'];

// Auth routes that should redirect if already authenticated
const authRoutes: string[] = ['/login', '/register'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get token from cookies or Authorization header
  const token =
    request.cookies.get('authToken')?.value ||
    request.headers.get('Authorization')?.replace('Bearer ', '');

  // Check if accessing protected route without token
  const isProtectedRoute = protectedRoutes.some((route) =>
    route === '/' ? pathname === '/' : pathname.startsWith(route)
  );

  if (isProtectedRoute && !token) {
    // Redirect to login if accessing protected route without token
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Check if accessing auth route with token
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  if (isAuthRoute && token) {
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

