module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/utils/constants.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_URL",
    ()=>API_URL,
    "BACKEND_ORIGIN",
    ()=>BACKEND_ORIGIN,
    "GOOGLE_CLIENT_ID",
    ()=>GOOGLE_CLIENT_ID
]);
function normalizeApiUrl(input) {
    const trimmed = input.trim().replace(/\/+$/, '');
    return trimmed.endsWith('/api') ? trimmed : `${trimmed}/api`;
}
function resolveApiUrl() {
    const publicApiUrl = ("TURBOPACK compile-time value", "https://vormex-backend.onrender.com/api");
    if ("TURBOPACK compile-time truthy", 1) {
        return normalizeApiUrl(publicApiUrl);
    }
    //TURBOPACK unreachable
    ;
    const publicBackendUrl = undefined;
}
const API_URL = resolveApiUrl();
const BACKEND_ORIGIN = API_URL.replace(/\/api$/, '');
const GOOGLE_CLIENT_ID = ("TURBOPACK compile-time value", "562328294412-3qt2hj14q8c43nhjimqevhdopecvp04b.apps.googleusercontent.com") || '';
}),
"[project]/src/app/api/auth/google/callback/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/constants.ts [app-route] (ecmascript)");
;
;
const GOOGLE_CLIENT_ID = ("TURBOPACK compile-time value", "562328294412-3qt2hj14q8c43nhjimqevhdopecvp04b.apps.googleusercontent.com") || '';
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';
async function POST(request) {
    try {
        const body = await request.json();
        const { code, codeVerifier, redirectUri } = body;
        if (!code || !codeVerifier) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Code and code verifier are required'
            }, {
                status: 400
            });
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Build the request body
        const defaultFrontendOrigin = process.env.NEXT_PUBLIC_BASE_URL || request.nextUrl.origin || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BACKEND_ORIGIN"];
        const tokenParams = new URLSearchParams({
            code: code,
            client_id: GOOGLE_CLIENT_ID,
            redirect_uri: redirectUri || `${defaultFrontendOrigin}/auth/google/callback`,
            grant_type: 'authorization_code',
            code_verifier: codeVerifier
        });
        // Add client_secret only if it's configured (required for web applications)
        // For public clients with PKCE, some configurations might work without it
        // but Google typically requires it for authorization code flow
        if (GOOGLE_CLIENT_SECRET) {
            tokenParams.append('client_secret', GOOGLE_CLIENT_SECRET);
        }
        // Exchange authorization code for tokens using PKCE
        const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: tokenParams
        });
        if (!tokenResponse.ok) {
            const errorData = await tokenResponse.json().catch(()=>({}));
            const errorMessage = errorData.error_description || errorData.error || 'Failed to exchange authorization code';
            console.error('Google token exchange error:', {
                status: tokenResponse.status,
                error: errorData,
                hasClientSecret: !!GOOGLE_CLIENT_SECRET
            });
            // Provide helpful error message
            if (errorData.error === 'invalid_client' && !GOOGLE_CLIENT_SECRET) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Google Client Secret is required. Please set GOOGLE_CLIENT_SECRET in your environment variables. You can find it in Google Cloud Console under APIs & Services > Credentials.',
                    details: 'The authorization code flow requires a client_secret for security.'
                }, {
                    status: 500
                });
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: errorMessage
            }, {
                status: tokenResponse.status
            });
        }
        const tokens = await tokenResponse.json();
        if (!tokens.id_token) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'ID token not found in token response'
            }, {
                status: 500
            });
        }
        // Return the id_token to the frontend
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            idToken: tokens.id_token,
            accessToken: tokens.access_token
        });
    } catch (error) {
        console.error('Google OAuth token exchange error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || 'Internal server error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5f42376c._.js.map