(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/auth/google/callback/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GoogleCallbackPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$authContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/authContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/errorHandler.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function GoogleCallbackContent() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { setAuth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$authContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthContext"])();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleCallbackContent.useEffect": ()=>{
            const handleCallback = {
                "GoogleCallbackContent.useEffect.handleCallback": async ()=>{
                    try {
                        // Get authorization code and state from URL
                        const code = searchParams.get('code');
                        const state = searchParams.get('state');
                        const errorParam = searchParams.get('error');
                        // Check for OAuth errors
                        if (errorParam) {
                            setError(`Google OAuth error: ${errorParam}`);
                            setIsLoading(false);
                            setTimeout({
                                "GoogleCallbackContent.useEffect.handleCallback": ()=>router.push('/login')
                            }["GoogleCallbackContent.useEffect.handleCallback"], 3000);
                            return;
                        }
                        // Validate state (CSRF protection)
                        const storedState = sessionStorage.getItem('oauth_state');
                        if (!state || state !== storedState) {
                            setError('Invalid state parameter. Please try again.');
                            setIsLoading(false);
                            sessionStorage.removeItem('oauth_state');
                            sessionStorage.removeItem('oauth_code_verifier');
                            setTimeout({
                                "GoogleCallbackContent.useEffect.handleCallback": ()=>router.push('/login')
                            }["GoogleCallbackContent.useEffect.handleCallback"], 3000);
                            return;
                        }
                        if (!code) {
                            setError('Authorization code not found. Please try again.');
                            setIsLoading(false);
                            sessionStorage.removeItem('oauth_state');
                            sessionStorage.removeItem('oauth_code_verifier');
                            setTimeout({
                                "GoogleCallbackContent.useEffect.handleCallback": ()=>router.push('/login')
                            }["GoogleCallbackContent.useEffect.handleCallback"], 3000);
                            return;
                        }
                        // Exchange authorization code for tokens using PKCE via our API route
                        const redirectUri = `${window.location.origin}/auth/google/callback`;
                        const codeVerifier = sessionStorage.getItem('oauth_code_verifier');
                        if (!codeVerifier) {
                            throw new Error('Code verifier not found. Please try signing in again.');
                        }
                        // Use our API route to exchange code for tokens (server-side, secure)
                        const tokenResponse = await fetch('/api/auth/google/callback', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                code: code,
                                codeVerifier: codeVerifier,
                                redirectUri: redirectUri
                            })
                        });
                        if (!tokenResponse.ok) {
                            const errorData = await tokenResponse.json().catch({
                                "GoogleCallbackContent.useEffect.handleCallback": ()=>({})
                            }["GoogleCallbackContent.useEffect.handleCallback"]);
                            throw new Error(errorData.error || errorData.error_description || 'Failed to exchange authorization code');
                        }
                        const tokenData = await tokenResponse.json();
                        // Extract id_token from the response
                        const idToken = tokenData.idToken;
                        if (!idToken) {
                            throw new Error('ID token not found in token response');
                        }
                        // Send id_token to backend
                        const authResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authAPI"].googleSignIn(idToken);
                        // Update auth context with the response
                        setAuth(authResponse);
                        // Clean up
                        sessionStorage.removeItem('oauth_state');
                        sessionStorage.removeItem('oauth_code_verifier');
                        // Redirect to home
                        router.push('/');
                    } catch (err) {
                        console.error('Google OAuth callback error:', err);
                        setError((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(err));
                        setIsLoading(false);
                        sessionStorage.removeItem('oauth_state');
                        sessionStorage.removeItem('oauth_code_verifier');
                        setTimeout({
                            "GoogleCallbackContent.useEffect.handleCallback": ()=>router.push('/login')
                        }["GoogleCallbackContent.useEffect.handleCallback"], 3000);
                    }
                }
            }["GoogleCallbackContent.useEffect.handleCallback"];
            handleCallback();
        }
    }["GoogleCallbackContent.useEffect"], [
        searchParams,
        router,
        setAuth
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "auth-page-wrapper",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "main",
            style: {
                maxWidth: '500px',
                width: '100%'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "form_title title",
                        children: "Signing in with Google..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/google/callback/page.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this),
                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "description",
                        style: {
                            marginTop: '20px'
                        },
                        children: "Please wait while we complete your sign-in."
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/google/callback/page.tsx",
                        lineNumber: 114,
                        columnNumber: 25
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "error-message",
                                style: {
                                    marginTop: '20px'
                                },
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/app/auth/google/callback/page.tsx",
                                lineNumber: 120,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "description",
                                style: {
                                    marginTop: '10px'
                                },
                                children: "Redirecting to login page..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/auth/google/callback/page.tsx",
                                lineNumber: 125,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/auth/google/callback/page.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/auth/google/callback/page.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/auth/google/callback/page.tsx",
        lineNumber: 107,
        columnNumber: 10
    }, this);
}
_s(GoogleCallbackContent, "Ur2+sZNQW3pRRGcxwCdCA41bvIk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$authContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthContext"]
    ];
});
_c = GoogleCallbackContent;
function GoogleCallbackPage() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "5c1bf51e8b9dbe2fb996b423c255497118e5e645fc21085231c6b5213f730ee1") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5c1bf51e8b9dbe2fb996b423c255497118e5e645fc21085231c6b5213f730ee1";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            maxWidth: "500px",
            width: "100%"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "form_title title",
            children: "Signing in with Google..."
        }, void 0, false, {
            fileName: "[project]/src/app/auth/google/callback/page.tsx",
            lineNumber: 155,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "auth-page-wrapper",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "main",
                    style: t0,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form",
                        children: [
                            t1,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "description",
                                style: {
                                    marginTop: "20px"
                                },
                                children: "Loading..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/auth/google/callback/page.tsx",
                                lineNumber: 162,
                                columnNumber: 124
                            }, void 0)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/auth/google/callback/page.tsx",
                        lineNumber: 162,
                        columnNumber: 98
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/google/callback/page.tsx",
                    lineNumber: 162,
                    columnNumber: 65
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/src/app/auth/google/callback/page.tsx",
                lineNumber: 162,
                columnNumber: 30
            }, void 0),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoogleCallbackContent, {}, void 0, false, {
                fileName: "[project]/src/app/auth/google/callback/page.tsx",
                lineNumber: 164,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/auth/google/callback/page.tsx",
            lineNumber: 162,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c1 = GoogleCallbackPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "GoogleCallbackContent");
__turbopack_context__.k.register(_c1, "GoogleCallbackPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_auth_google_callback_page_tsx_9392d207._.js.map