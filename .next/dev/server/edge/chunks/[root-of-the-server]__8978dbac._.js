(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__8978dbac._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
;
// Protected routes that require authentication
const protectedRoutes = [
    '/',
    '/profile',
    '/settings',
    '/feed'
];
// Auth routes that should redirect if already authenticated (except verify-email and forgot-password with token)
const authRoutes = [
    '/login',
    '/register'
];
// Public routes that don't require authentication and shouldn't redirect if authenticated
const publicRoutes = [
    '/forgot-password',
    '/verify-email',
    '/auth/google/callback'
];
// Routes that should be accessible during onboarding
const onboardingAllowedRoutes = [
    '/onboarding',
    '/api',
    '/login',
    '/register'
];
function middleware(request) {
    const { pathname } = request.nextUrl;
    // Get token from cookies or Authorization header
    const token = request.cookies.get('authToken')?.value || request.headers.get('Authorization')?.replace('Bearer ', '');
    // Check onboarding status from cookie
    const onboardingCompleted = request.cookies.get('onboardingCompleted')?.value === 'true';
    // Check if it's a public route (like verify-email with token query param)
    const isPublicRoute = publicRoutes.some((route)=>pathname.startsWith(route));
    // Check if accessing protected route without token
    const isProtectedRoute = protectedRoutes.some((route)=>route === '/' ? pathname === '/' : pathname.startsWith(route));
    if (isProtectedRoute && !token) {
        const loginUrl = new URL('/login', request.url);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(loginUrl);
    }
    // Check if accessing auth route with token (but allow public routes)
    const isAuthRoute = authRoutes.some((route)=>pathname.startsWith(route));
    if (isAuthRoute && token && !isPublicRoute) {
        const homeUrl = new URL('/', request.url);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(homeUrl);
    }
    // Onboarding redirect: if authenticated but onboarding not completed, redirect to onboarding
    // Only for protected routes (not for API, assets, onboarding itself)
    const isOnboardingAllowed = onboardingAllowedRoutes.some((route)=>pathname.startsWith(route));
    if (token && !onboardingCompleted && isProtectedRoute && !isOnboardingAllowed && !isPublicRoute) {
        const onboardingUrl = new URL('/onboarding', request.url);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(onboardingUrl);
    }
    // Allow request to proceed
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__8978dbac._.js.map