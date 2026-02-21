(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/validations/auth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "forgotPasswordSchema",
    ()=>forgotPasswordSchema,
    "loginSchema",
    ()=>loginSchema,
    "registerSchema",
    ()=>registerSchema,
    "resetPasswordSchema",
    ()=>resetPasswordSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
const loginSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email('Please enter a valid email address'),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Password is required')
});
const registerSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Name is required'),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email('Please enter a valid email address'),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(8, 'Password must be at least 8 characters long'),
    college: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    branch: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const forgotPasswordSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email('Please enter a valid email address')
});
const resetPasswordSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    newPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(8, 'Password must be at least 8 characters long'),
    confirmPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(8, 'Password must be at least 8 characters long')
}).refine((data)=>data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match',
    path: [
        'confirmPassword'
    ]
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/auth/GoogleSignInButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GoogleSignInButton",
    ()=>GoogleSignInButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/constants.ts [app-client] (ecmascript)");
'use client';
;
;
;
function GoogleSignInButton(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "ab67cecab48b15875d43025478621a35c78d7f1267dbc691b436dbb71cd35ddf") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ab67cecab48b15875d43025478621a35c78d7f1267dbc691b436dbb71cd35ddf";
    }
    const { onClick, disabled: t1, text: t2 } = t0;
    const disabled = t1 === undefined ? false : t1;
    const text = t2 === undefined ? "Sign in with Google" : t2;
    const t3 = disabled || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GOOGLE_CLIENT_ID"];
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "google-icon",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 48 48",
            width: "20px",
            height: "20px",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#FFC107",
                    d: "M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                }, void 0, false, {
                    fileName: "[project]/src/components/auth/GoogleSignInButton.tsx",
                    lineNumber: 29,
                    columnNumber: 121
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#FF3D00",
                    d: "M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                }, void 0, false, {
                    fileName: "[project]/src/components/auth/GoogleSignInButton.tsx",
                    lineNumber: 29,
                    columnNumber: 437
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#4CAF50",
                    d: "M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                }, void 0, false, {
                    fileName: "[project]/src/components/auth/GoogleSignInButton.tsx",
                    lineNumber: 29,
                    columnNumber: 626
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#1976D2",
                    d: "M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                }, void 0, false, {
                    fileName: "[project]/src/components/auth/GoogleSignInButton.tsx",
                    lineNumber: 29,
                    columnNumber: 811
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/auth/GoogleSignInButton.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[1] = t4;
    } else {
        t4 = $[1];
    }
    let t5;
    if ($[2] !== text) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "google-text",
            children: text
        }, void 0, false, {
            fileName: "[project]/src/components/auth/GoogleSignInButton.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[2] = text;
        $[3] = t5;
    } else {
        t5 = $[3];
    }
    let t6;
    if ($[4] !== onClick || $[5] !== t3 || $[6] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "google-btn",
            onClick: onClick,
            disabled: t3,
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/auth/GoogleSignInButton.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[4] = onClick;
        $[5] = t3;
        $[6] = t5;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    return t6;
}
_c = GoogleSignInButton;
var _c;
__turbopack_context__.k.register(_c, "GoogleSignInButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api/social-proof.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getActivityFeed",
    ()=>getActivityFeed,
    "getEventSocialStats",
    ()=>getEventSocialStats,
    "getGroupSocialStats",
    ()=>getGroupSocialStats,
    "getOnboardingStats",
    ()=>getOnboardingStats,
    "getProfileViewStats",
    ()=>getProfileViewStats,
    "getSocialProofLeaderboard",
    ()=>getSocialProofLeaderboard,
    "getSocialProofLiveStats",
    ()=>getSocialProofLiveStats,
    "getTrendingItems",
    ()=>getTrendingItems,
    "recordSocialActivity",
    ()=>recordSocialActivity,
    "sendHeartbeat",
    ()=>sendHeartbeat,
    "trackEventView",
    ()=>trackEventView,
    "trackProfileView",
    ()=>trackProfileView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/client.ts [app-client] (ecmascript)");
;
const getSocialProofLiveStats = async (city, college)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/social-proof/live-stats', {
        params: {
            ...city && {
                city
            },
            ...college && {
                college
            }
        }
    });
    return res.data.data;
};
const trackProfileView = async (viewedId, source)=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/social-proof/track-view', {
        viewedId,
        source
    });
};
const getProfileViewStats = async (userId)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/social-proof/profile-views/${userId}`);
    return res.data.data;
};
const getSocialProofLeaderboard = async (period = 'weekly', scope = 'global', limit = 10)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/social-proof/leaderboard', {
        params: {
            period,
            scope,
            limit
        }
    });
    return res.data.data;
};
const getGroupSocialStats = async (groupId)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/social-proof/group-stats/${groupId}`);
    return res.data.data;
};
const getEventSocialStats = async (eventId)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/social-proof/event-stats/${eventId}`);
    return res.data.data;
};
const trackEventView = async (eventId)=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/social-proof/track-event-view', {
        eventId
    });
};
const getActivityFeed = async (limit = 20, minutes = 10)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/social-proof/activity-feed', {
        params: {
            limit,
            minutes
        }
    });
    return res.data.data;
};
const getTrendingItems = async (type, city, limit = 10)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/social-proof/trending', {
        params: {
            ...type && {
                type
            },
            ...city && {
                city
            },
            limit
        }
    });
    return res.data.data;
};
const getOnboardingStats = async (college)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/social-proof/onboarding-stats', {
        params: {
            ...college && {
                college
            }
        }
    });
    return res.data.data;
};
const sendHeartbeat = async (currentPage)=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/social-proof/heartbeat', {
        currentPage
    });
};
const recordSocialActivity = async (activityType, metadata)=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/social-proof/record-activity', {
        activityType,
        metadata
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/auth/OnboardingSocialProof.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OnboardingSocialProof",
    ()=>OnboardingSocialProof
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$social$2d$proof$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/social-proof.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function OnboardingSocialProof() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(36);
    if ($[0] !== "353c713a9159ad62e42d0cc106281e489f4467f5ed67ffd6e9e975a1270ed70c") {
        for(let $i = 0; $i < 36; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "353c713a9159ad62e42d0cc106281e489f4467f5ed67ffd6e9e975a1270ed70c";
    }
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "OnboardingSocialProof[useEffect()]": ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$social$2d$proof$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOnboardingStats"])().then(setStats).catch(_OnboardingSocialProofUseEffectAnonymous);
            }
        })["OnboardingSocialProof[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    if (!stats) {
        return null;
    }
    const formatNumber = _OnboardingSocialProofFormatNumber;
    let t2;
    if ($[3] !== stats.activeToday) {
        t2 = stats.activeToday > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "social-proof-live",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "live-dot"
                }, void 0, false, {
                    fileName: "[project]/src/components/auth/OnboardingSocialProof.tsx",
                    lineNumber: 43,
                    columnNumber: 70
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "live-text",
                    children: [
                        formatNumber(stats.activeToday),
                        " active today"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/auth/OnboardingSocialProof.tsx",
                    lineNumber: 43,
                    columnNumber: 99
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/auth/OnboardingSocialProof.tsx",
            lineNumber: 43,
            columnNumber: 35
        }, this);
        $[3] = stats.activeToday;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "stat-icon",
            children: "👥"
        }, void 0, false, {
            fileName: "[project]/src/components/auth/OnboardingSocialProof.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== stats.totalUsers) {
        t4 = formatNumber(stats.totalUsers);
        $[6] = stats.totalUsers;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "stat-value",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/auth/OnboardingSocialProof.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "stat-label",
            children: "Students"
        }, void 0, false, {
            fileName: "[project]/src/components/auth/OnboardingSocialProof.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== t5) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "stat-pill",
            children: [
                t3,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/auth/OnboardingSocialProof.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "stat-icon",
            children: "🎓"
        }, void 0, false, {
            fileName: "[project]/src/components/auth/OnboardingSocialProof.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== stats.totalColleges) {
        t9 = formatNumber(stats.totalColleges);
        $[14] = stats.totalColleges;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "stat-value",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/components/auth/OnboardingSocialProof.tsx",
            lineNumber: 104,
            columnNumber: 11
        }, this);
        $[16] = t9;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "stat-label",
            children: "Colleges"
        }, void 0, false, {
            fileName: "[project]/src/components/auth/OnboardingSocialProof.tsx",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "stat-pill",
            children: [
                t8,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/auth/OnboardingSocialProof.tsx",
            lineNumber: 119,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "stat-icon",
            children: "🤝"
        }, void 0, false, {
            fileName: "[project]/src/components/auth/OnboardingSocialProof.tsx",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] !== stats.totalConnections) {
        t14 = formatNumber(stats.totalConnections);
        $[22] = stats.totalConnections;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "stat-value",
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/components/auth/OnboardingSocialProof.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[24] = t14;
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    let t16;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "stat-label",
            children: "Connections"
        }, void 0, false, {
            fileName: "[project]/src/components/auth/OnboardingSocialProof.tsx",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    let t17;
    if ($[27] !== t15) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "stat-pill",
            children: [
                t13,
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/auth/OnboardingSocialProof.tsx",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[27] = t15;
        $[28] = t17;
    } else {
        t17 = $[28];
    }
    let t18;
    if ($[29] !== t12 || $[30] !== t17 || $[31] !== t7) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "social-proof-stats",
            children: [
                t7,
                t12,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/auth/OnboardingSocialProof.tsx",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[29] = t12;
        $[30] = t17;
        $[31] = t7;
        $[32] = t18;
    } else {
        t18 = $[32];
    }
    let t19;
    if ($[33] !== t18 || $[34] !== t2) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "onboarding-social-proof",
            children: [
                t2,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/auth/OnboardingSocialProof.tsx",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[33] = t18;
        $[34] = t2;
        $[35] = t19;
    } else {
        t19 = $[35];
    }
    return t19;
}
_s(OnboardingSocialProof, "QHCAg5+sC7SrLiGx+x4h2IICBFk=");
_c = OnboardingSocialProof;
function _OnboardingSocialProofFormatNumber(n) {
    if (n >= 1000) {
        return `${(n / 1000).toFixed(1)}k`;
    }
    return n.toString();
}
function _OnboardingSocialProofUseEffectAnonymous() {}
var _c;
__turbopack_context__.k.register(_c, "OnboardingSocialProof");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/auth/LoginSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoginSection",
    ()=>LoginSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$GoogleSignInButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/GoogleSignInButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$OnboardingSocialProof$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/OnboardingSocialProof.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function LoginSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "bd41d3c299fdc75350eff0d2980c694311decadc8cd7d8f29dfbead76df9f35b") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bd41d3c299fdc75350eff0d2980c694311decadc8cd7d8f29dfbead76df9f35b";
    }
    const { email, password, onEmailChange, onPasswordChange, onSubmit, onGoogleLogin, isLoading, error, success } = t0;
    const swipeButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "LoginSection[useEffect()]": ()=>{
                const setupSwipeButton = _LoginSectionUseEffectSetupSwipeButton;
                if (swipeButtonRef.current) {
                    const cleanup = setupSwipeButton(swipeButtonRef.current);
                    return cleanup;
                }
            }
        })["LoginSection[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "LoginSection[resetSwipeButton]": ()=>{
                if (!swipeButtonRef.current) {
                    return;
                }
                const container_0 = swipeButtonRef.current;
                const slider_0 = container_0.querySelector(".swipe-button-slider");
                const text_0 = container_0.querySelector(".swipe-button-text");
                if (slider_0 && text_0) {
                    container_0.classList.remove("submitted", "active");
                    slider_0.style.left = "2px";
                    text_0.style.opacity = "1";
                }
            }
        })["LoginSection[resetSwipeButton]"];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const resetSwipeButton = t3;
    let t4;
    let t5;
    if ($[4] !== error) {
        t4 = ({
            "LoginSection[useEffect()]": ()=>{
                if (error) {
                    resetSwipeButton();
                }
            }
        })["LoginSection[useEffect()]"];
        t5 = [
            error
        ];
        $[4] = error;
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "form_title title",
            children: [
                "Sign in to ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "vorm",
                    children: "vorm"
                }, void 0, false, {
                    fileName: "[project]/src/components/auth/LoginSection.tsx",
                    lineNumber: 103,
                    columnNumber: 54
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "ex",
                    children: "ex"
                }, void 0, false, {
                    fileName: "[project]/src/components/auth/LoginSection.tsx",
                    lineNumber: 103,
                    columnNumber: 88
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/auth/LoginSection.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$OnboardingSocialProof$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OnboardingSocialProof"], {}, void 0, false, {
            fileName: "[project]/src/components/auth/LoginSection.tsx",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[7] = t6;
        $[8] = t7;
    } else {
        t6 = $[7];
        t7 = $[8];
    }
    let t8;
    if ($[9] !== isLoading || $[10] !== onGoogleLogin) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$GoogleSignInButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleSignInButton"], {
            onClick: onGoogleLogin,
            disabled: isLoading
        }, void 0, false, {
            fileName: "[project]/src/components/auth/LoginSection.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[9] = isLoading;
        $[10] = onGoogleLogin;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "form__span",
            children: "or use your email account"
        }, void 0, false, {
            fileName: "[project]/src/components/auth/LoginSection.tsx",
            lineNumber: 122,
            columnNumber: 10
        }, this);
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== onEmailChange) {
        t10 = ({
            "LoginSection[<input>.onChange]": (e_2)=>onEmailChange(e_2.target.value)
        })["LoginSection[<input>.onChange]"];
        $[13] = onEmailChange;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== email || $[16] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: "form__input",
            type: "email",
            placeholder: "Email",
            value: email,
            onChange: t10,
            onKeyDown: _LoginSectionInputOnKeyDown,
            required: true
        }, void 0, false, {
            fileName: "[project]/src/components/auth/LoginSection.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[15] = email;
        $[16] = t10;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== onPasswordChange) {
        t12 = ({
            "LoginSection[<input>.onChange]": (e_4)=>onPasswordChange(e_4.target.value)
        })["LoginSection[<input>.onChange]"];
        $[18] = onPasswordChange;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== password || $[21] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: "form__input",
            type: "password",
            placeholder: "Password",
            value: password,
            onChange: t12,
            onKeyDown: _LoginSectionInputOnKeyDown2,
            required: true
        }, void 0, false, {
            fileName: "[project]/src/components/auth/LoginSection.tsx",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[20] = password;
        $[21] = t12;
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            className: "form__link",
            href: "/forgot-password",
            children: "Forgot your password?"
        }, void 0, false, {
            fileName: "[project]/src/components/auth/LoginSection.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] !== error) {
        t15 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "error-message",
            children: error
        }, void 0, false, {
            fileName: "[project]/src/components/auth/LoginSection.tsx",
            lineNumber: 174,
            columnNumber: 20
        }, this);
        $[24] = error;
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    let t16;
    if ($[26] !== success) {
        t16 = success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "success-message",
            children: success
        }, void 0, false, {
            fileName: "[project]/src/components/auth/LoginSection.tsx",
            lineNumber: 182,
            columnNumber: 22
        }, this);
        $[26] = success;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "swipe-button-text",
            children: "SWIPE TO SIGN IN"
        }, void 0, false, {
            fileName: "[project]/src/components/auth/LoginSection.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[28] = t17;
    } else {
        t17 = $[28];
    }
    let t18;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "swipe-button-container",
            id: "swipe-btn-signin",
            ref: swipeButtonRef,
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "swipe-button-slider",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "24",
                        height: "24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fill: "none",
                                d: "M0 0h24v24H0z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/auth/LoginSection.tsx",
                                lineNumber: 197,
                                columnNumber: 219
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z",
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/src/components/auth/LoginSection.tsx",
                                lineNumber: 197,
                                columnNumber: 257
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/auth/LoginSection.tsx",
                        lineNumber: 197,
                        columnNumber: 136
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/auth/LoginSection.tsx",
                    lineNumber: 197,
                    columnNumber: 99
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/auth/LoginSection.tsx",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[29] = t18;
    } else {
        t18 = $[29];
    }
    let t19;
    if ($[30] !== onSubmit || $[31] !== t11 || $[32] !== t13 || $[33] !== t15 || $[34] !== t16 || $[35] !== t8) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container b-container",
            id: "b-container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                id: "b-form",
                className: "form",
                onSubmit: onSubmit,
                children: [
                    t6,
                    t7,
                    t8,
                    t9,
                    t11,
                    t13,
                    t14,
                    t15,
                    t16,
                    t18
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/auth/LoginSection.tsx",
                lineNumber: 204,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/auth/LoginSection.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[30] = onSubmit;
        $[31] = t11;
        $[32] = t13;
        $[33] = t15;
        $[34] = t16;
        $[35] = t8;
        $[36] = t19;
    } else {
        t19 = $[36];
    }
    return t19;
}
_s(LoginSection, "Oev54Dc/zCwLaM4qWckCN/Tmygs=");
_c = LoginSection;
function _LoginSectionInputOnKeyDown2(e_5) {
    if (e_5.key === "Enter") {
        e_5.preventDefault();
        const form_1 = document.getElementById("b-form");
        if (form_1) {
            form_1.requestSubmit();
        }
    }
}
function _LoginSectionInputOnKeyDown(e_3) {
    if (e_3.key === "Enter") {
        e_3.preventDefault();
        const form_0 = document.getElementById("b-form");
        if (form_0) {
            form_0.requestSubmit();
        }
    }
}
function _LoginSectionUseEffectSetupSwipeButton(container) {
    const slider = container.querySelector(".swipe-button-slider");
    const text = container.querySelector(".swipe-button-text");
    if (!slider || !text) {
        return;
    }
    let isDragging = false;
    let startX = 0;
    const onMouseDown = {
        "LoginSection[useEffect() > setupSwipeButton > onMouseDown]": (e)=>{
            if (container.classList.contains("submitted")) {
                return;
            }
            isDragging = true;
            const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
            startX = clientX - slider.offsetLeft;
            container.classList.add("active");
        }
    }["LoginSection[useEffect() > setupSwipeButton > onMouseDown]"];
    const onMouseMove = {
        "LoginSection[useEffect() > setupSwipeButton > onMouseMove]": (e_0)=>{
            if (!isDragging) {
                return;
            }
            e_0.preventDefault();
            const clientX_0 = "touches" in e_0 ? e_0.touches[0].clientX : e_0.clientX;
            const x = clientX_0 - startX;
            const maxMove = container.offsetWidth - slider.offsetWidth - 4;
            if (x >= 0 && x <= maxMove) {
                slider.style.left = `${x + 2}px`;
                text.style.opacity = (1 - x / maxMove).toString();
            } else {
                if (x > maxMove) {
                    slider.style.left = `${maxMove + 2}px`;
                    text.style.opacity = "0";
                }
            }
        }
    }["LoginSection[useEffect() > setupSwipeButton > onMouseMove]"];
    const onMouseUp = {
        "LoginSection[useEffect() > setupSwipeButton > onMouseUp]": (e_1)=>{
            if (!isDragging) {
                return;
            }
            isDragging = false;
            container.classList.remove("active");
            const clientX_1 = "changedTouches" in e_1 ? e_1.changedTouches[0].clientX : e_1.clientX;
            const x_0 = clientX_1 - startX;
            const maxMove_0 = container.offsetWidth - slider.offsetWidth - 4;
            if (x_0 >= maxMove_0 - 10) {
                container.classList.add("submitted");
                slider.style.left = "";
                const form = document.getElementById("b-form");
                if (form) {
                    if (!form.checkValidity()) {
                        container.classList.remove("submitted");
                        slider.style.left = "2px";
                        text.style.opacity = "1";
                        form.reportValidity();
                    } else {
                        form.requestSubmit();
                    }
                }
            } else {
                slider.style.left = "2px";
                text.style.opacity = "1";
            }
        }
    }["LoginSection[useEffect() > setupSwipeButton > onMouseUp]"];
    slider.addEventListener("mousedown", onMouseDown);
    slider.addEventListener("touchstart", onMouseDown);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchmove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("touchend", onMouseUp);
    return ()=>{
        slider.removeEventListener("mousedown", onMouseDown);
        slider.removeEventListener("touchstart", onMouseDown);
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("touchmove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        document.removeEventListener("touchend", onMouseUp);
    };
}
var _c;
__turbopack_context__.k.register(_c, "LoginSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/auth/SignupSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignupSection",
    ()=>SignupSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$GoogleSignInButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/GoogleSignInButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$OnboardingSocialProof$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/OnboardingSocialProof.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function SignupSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(42);
    if ($[0] !== "1634dcac97cdadaf51cb6c902bdc2a0d58f6d1253727a3aba428f3704ffca2ab") {
        for(let $i = 0; $i < 42; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1634dcac97cdadaf51cb6c902bdc2a0d58f6d1253727a3aba428f3704ffca2ab";
    }
    const { name, email, password, onNameChange, onEmailChange, onPasswordChange, onSubmit, onGoogleLogin, isLoading, error, success } = t0;
    const swipeButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "SignupSection[useEffect()]": ()=>{
                const setupSwipeButton = _SignupSectionUseEffectSetupSwipeButton;
                if (swipeButtonRef.current) {
                    const cleanup = setupSwipeButton(swipeButtonRef.current);
                    return cleanup;
                }
            }
        })["SignupSection[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "SignupSection[resetSwipeButton]": ()=>{
                if (!swipeButtonRef.current) {
                    return;
                }
                const container_0 = swipeButtonRef.current;
                const slider_0 = container_0.querySelector(".swipe-button-slider");
                const text_0 = container_0.querySelector(".swipe-button-text");
                if (slider_0 && text_0) {
                    container_0.classList.remove("submitted", "active");
                    slider_0.style.left = "2px";
                    text_0.style.opacity = "1";
                }
            }
        })["SignupSection[resetSwipeButton]"];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const resetSwipeButton = t3;
    let t4;
    let t5;
    if ($[4] !== error) {
        t4 = ({
            "SignupSection[useEffect()]": ()=>{
                if (error) {
                    resetSwipeButton();
                }
            }
        })["SignupSection[useEffect()]"];
        t5 = [
            error
        ];
        $[4] = error;
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "form_title title",
            children: "Create Account"
        }, void 0, false, {
            fileName: "[project]/src/components/auth/SignupSection.tsx",
            lineNumber: 107,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$OnboardingSocialProof$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OnboardingSocialProof"], {}, void 0, false, {
            fileName: "[project]/src/components/auth/SignupSection.tsx",
            lineNumber: 108,
            columnNumber: 10
        }, this);
        $[7] = t6;
        $[8] = t7;
    } else {
        t6 = $[7];
        t7 = $[8];
    }
    let t8;
    if ($[9] !== isLoading || $[10] !== onGoogleLogin) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$GoogleSignInButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleSignInButton"], {
            onClick: onGoogleLogin,
            disabled: isLoading,
            text: "Sign up with Google"
        }, void 0, false, {
            fileName: "[project]/src/components/auth/SignupSection.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, this);
        $[9] = isLoading;
        $[10] = onGoogleLogin;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "form__span",
            children: "or use email for registration"
        }, void 0, false, {
            fileName: "[project]/src/components/auth/SignupSection.tsx",
            lineNumber: 126,
            columnNumber: 10
        }, this);
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== onNameChange) {
        t10 = ({
            "SignupSection[<input>.onChange]": (e_2)=>onNameChange(e_2.target.value)
        })["SignupSection[<input>.onChange]"];
        $[13] = onNameChange;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== name || $[16] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: "form__input",
            type: "text",
            placeholder: "Name",
            value: name,
            onChange: t10,
            onKeyDown: _SignupSectionInputOnKeyDown,
            required: true
        }, void 0, false, {
            fileName: "[project]/src/components/auth/SignupSection.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[15] = name;
        $[16] = t10;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== onEmailChange) {
        t12 = ({
            "SignupSection[<input>.onChange]": (e_4)=>onEmailChange(e_4.target.value)
        })["SignupSection[<input>.onChange]"];
        $[18] = onEmailChange;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== email || $[21] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: "form__input",
            type: "email",
            placeholder: "Email",
            value: email,
            onChange: t12,
            onKeyDown: _SignupSectionInputOnKeyDown2,
            required: true
        }, void 0, false, {
            fileName: "[project]/src/components/auth/SignupSection.tsx",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        $[20] = email;
        $[21] = t12;
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] !== onPasswordChange) {
        t14 = ({
            "SignupSection[<input>.onChange]": (e_6)=>onPasswordChange(e_6.target.value)
        })["SignupSection[<input>.onChange]"];
        $[23] = onPasswordChange;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] !== password || $[26] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: "form__input",
            type: "password",
            placeholder: "Password",
            value: password,
            onChange: t14,
            onKeyDown: _SignupSectionInputOnKeyDown3,
            required: true,
            minLength: 8
        }, void 0, false, {
            fileName: "[project]/src/components/auth/SignupSection.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[25] = password;
        $[26] = t14;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] !== error) {
        t16 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "error-message",
            children: error
        }, void 0, false, {
            fileName: "[project]/src/components/auth/SignupSection.tsx",
            lineNumber: 190,
            columnNumber: 20
        }, this);
        $[28] = error;
        $[29] = t16;
    } else {
        t16 = $[29];
    }
    let t17;
    if ($[30] !== success) {
        t17 = success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "success-message",
            children: success
        }, void 0, false, {
            fileName: "[project]/src/components/auth/SignupSection.tsx",
            lineNumber: 198,
            columnNumber: 22
        }, this);
        $[30] = success;
        $[31] = t17;
    } else {
        t17 = $[31];
    }
    let t18;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "swipe-button-text",
            children: "SWIPE TO SIGN UP"
        }, void 0, false, {
            fileName: "[project]/src/components/auth/SignupSection.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[32] = t18;
    } else {
        t18 = $[32];
    }
    let t19;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "swipe-button-container",
            id: "swipe-btn-signup",
            ref: swipeButtonRef,
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "swipe-button-slider",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "24",
                        height: "24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fill: "none",
                                d: "M0 0h24v24H0z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/auth/SignupSection.tsx",
                                lineNumber: 213,
                                columnNumber: 219
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z",
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/src/components/auth/SignupSection.tsx",
                                lineNumber: 213,
                                columnNumber: 257
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/auth/SignupSection.tsx",
                        lineNumber: 213,
                        columnNumber: 136
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/auth/SignupSection.tsx",
                    lineNumber: 213,
                    columnNumber: 99
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/auth/SignupSection.tsx",
            lineNumber: 213,
            columnNumber: 11
        }, this);
        $[33] = t19;
    } else {
        t19 = $[33];
    }
    let t20;
    if ($[34] !== onSubmit || $[35] !== t11 || $[36] !== t13 || $[37] !== t15 || $[38] !== t16 || $[39] !== t17 || $[40] !== t8) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container a-container",
            id: "a-container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                id: "a-form",
                className: "form",
                onSubmit: onSubmit,
                children: [
                    t6,
                    t7,
                    t8,
                    t9,
                    t11,
                    t13,
                    t15,
                    t16,
                    t17,
                    t19
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/auth/SignupSection.tsx",
                lineNumber: 220,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/auth/SignupSection.tsx",
            lineNumber: 220,
            columnNumber: 11
        }, this);
        $[34] = onSubmit;
        $[35] = t11;
        $[36] = t13;
        $[37] = t15;
        $[38] = t16;
        $[39] = t17;
        $[40] = t8;
        $[41] = t20;
    } else {
        t20 = $[41];
    }
    return t20;
}
_s(SignupSection, "Oev54Dc/zCwLaM4qWckCN/Tmygs=");
_c = SignupSection;
function _SignupSectionInputOnKeyDown3(e_7) {
    if (e_7.key === "Enter") {
        e_7.preventDefault();
        const form_2 = document.getElementById("a-form");
        if (form_2) {
            form_2.requestSubmit();
        }
    }
}
function _SignupSectionInputOnKeyDown2(e_5) {
    if (e_5.key === "Enter") {
        e_5.preventDefault();
        const form_1 = document.getElementById("a-form");
        if (form_1) {
            form_1.requestSubmit();
        }
    }
}
function _SignupSectionInputOnKeyDown(e_3) {
    if (e_3.key === "Enter") {
        e_3.preventDefault();
        const form_0 = document.getElementById("a-form");
        if (form_0) {
            form_0.requestSubmit();
        }
    }
}
function _SignupSectionUseEffectSetupSwipeButton(container) {
    const slider = container.querySelector(".swipe-button-slider");
    const text = container.querySelector(".swipe-button-text");
    if (!slider || !text) {
        return;
    }
    let isDragging = false;
    let startX = 0;
    const onMouseDown = {
        "SignupSection[useEffect() > setupSwipeButton > onMouseDown]": (e)=>{
            if (container.classList.contains("submitted")) {
                return;
            }
            isDragging = true;
            const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
            startX = clientX - slider.offsetLeft;
            container.classList.add("active");
        }
    }["SignupSection[useEffect() > setupSwipeButton > onMouseDown]"];
    const onMouseMove = {
        "SignupSection[useEffect() > setupSwipeButton > onMouseMove]": (e_0)=>{
            if (!isDragging) {
                return;
            }
            e_0.preventDefault();
            const clientX_0 = "touches" in e_0 ? e_0.touches[0].clientX : e_0.clientX;
            const x = clientX_0 - startX;
            const maxMove = container.offsetWidth - slider.offsetWidth - 4;
            if (x >= 0 && x <= maxMove) {
                slider.style.left = `${x + 2}px`;
                text.style.opacity = (1 - x / maxMove).toString();
            } else {
                if (x > maxMove) {
                    slider.style.left = `${maxMove + 2}px`;
                    text.style.opacity = "0";
                }
            }
        }
    }["SignupSection[useEffect() > setupSwipeButton > onMouseMove]"];
    const onMouseUp = {
        "SignupSection[useEffect() > setupSwipeButton > onMouseUp]": (e_1)=>{
            if (!isDragging) {
                return;
            }
            isDragging = false;
            container.classList.remove("active");
            const clientX_1 = "changedTouches" in e_1 ? e_1.changedTouches[0].clientX : e_1.clientX;
            const x_0 = clientX_1 - startX;
            const maxMove_0 = container.offsetWidth - slider.offsetWidth - 4;
            if (x_0 >= maxMove_0 - 10) {
                container.classList.add("submitted");
                slider.style.left = "";
                const form = document.getElementById("a-form");
                if (form) {
                    if (!form.checkValidity()) {
                        container.classList.remove("submitted");
                        slider.style.left = "2px";
                        text.style.opacity = "1";
                        form.reportValidity();
                    } else {
                        form.requestSubmit();
                    }
                }
            } else {
                slider.style.left = "2px";
                text.style.opacity = "1";
            }
        }
    }["SignupSection[useEffect() > setupSwipeButton > onMouseUp]"];
    slider.addEventListener("mousedown", onMouseDown);
    slider.addEventListener("touchstart", onMouseDown);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchmove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("touchend", onMouseUp);
    return ()=>{
        slider.removeEventListener("mousedown", onMouseDown);
        slider.removeEventListener("touchstart", onMouseDown);
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("touchmove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        document.removeEventListener("touchend", onMouseUp);
    };
}
var _c;
__turbopack_context__.k.register(_c, "SignupSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function Button(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "58381d141a4f6f74248178c99140af6f5a7c1e008bf205eed38b0128ec843230") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "58381d141a4f6f74248178c99140af6f5a7c1e008bf205eed38b0128ec843230";
    }
    let children;
    let disabled;
    let props;
    let t1;
    let t2;
    let t3;
    let t4;
    if ($[1] !== t0) {
        ({ children, variant: t1, size: t2, isLoading: t3, disabled, className: t4, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = disabled;
        $[4] = props;
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        children = $[2];
        disabled = $[3];
        props = $[4];
        t1 = $[5];
        t2 = $[6];
        t3 = $[7];
        t4 = $[8];
    }
    const variant = t1 === undefined ? "primary" : t1;
    const size = t2 === undefined ? "default" : t2;
    const isLoading = t3 === undefined ? false : t3;
    const className = t4 === undefined ? "" : t4;
    let t5;
    if ($[9] !== className || $[10] !== size || $[11] !== variant) {
        const variantClasses = {
            primary: "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
            secondary: "bg-gray-600 text-white hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600",
            outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800",
            ghost: "hover:bg-gray-100 dark:hover:bg-gray-800"
        };
        const sizeClasses = {
            default: "px-4 py-2",
            icon: "h-9 w-9"
        };
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none", variantClasses[variant], sizeClasses[size], className);
        $[9] = className;
        $[10] = size;
        $[11] = variant;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    const t6 = disabled || isLoading;
    const t7 = isLoading ? "Loading..." : children;
    let t8;
    if ($[13] !== props || $[14] !== t5 || $[15] !== t6 || $[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t5,
            disabled: t6,
            ...props,
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Button.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[13] = props;
        $[14] = t5;
        $[15] = t6;
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    return t8;
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ThemeToggle() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "f1bcda69c8c12154c9cad42170830404fe6237764fd97b4d13a96c3460e7cab2") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f1bcda69c8c12154c9cad42170830404fe6237764fd97b4d13a96c3460e7cab2";
    }
    const { theme, setTheme, resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ThemeToggle[useEffect()]": ()=>{
                setMounted(true);
            }
        })["ThemeToggle[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] !== setTheme || $[4] !== theme) {
        t2 = ({
            "ThemeToggle[cycleTheme]": ()=>{
                if (theme === "light") {
                    setTheme("dark");
                } else {
                    if (theme === "dark") {
                        setTheme("system");
                    } else {
                        setTheme("light");
                    }
                }
            }
        })["ThemeToggle[cycleTheme]"];
        $[3] = setTheme;
        $[4] = theme;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const cycleTheme = t2;
    let t3;
    if ($[6] !== resolvedTheme || $[7] !== theme) {
        t3 = ({
            "ThemeToggle[getIcon]": ()=>{
                if (theme === "system") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/ThemeToggle.tsx",
                        lineNumber: 65,
                        columnNumber: 18
                    }, this);
                }
                return resolvedTheme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/ThemeToggle.tsx",
                    lineNumber: 67,
                    columnNumber: 43
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/ThemeToggle.tsx",
                    lineNumber: 67,
                    columnNumber: 73
                }, this);
            }
        })["ThemeToggle[getIcon]"];
        $[6] = resolvedTheme;
        $[7] = theme;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    const getIcon = t3;
    let t4;
    if ($[9] !== theme) {
        t4 = ({
            "ThemeToggle[getAriaLabel]": ()=>{
                if (theme === "system") {
                    return "System theme (click to switch to light)";
                }
                if (theme === "dark") {
                    return "Dark theme (click to switch to system)";
                }
                return "Light theme (click to switch to dark)";
            }
        })["ThemeToggle[getAriaLabel]"];
        $[9] = theme;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    const getAriaLabel = t4;
    if (!mounted) {
        let t5;
        if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                size: "icon",
                className: "h-9 w-9",
                "aria-label": "Toggle theme",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/ThemeToggle.tsx",
                    lineNumber: 99,
                    columnNumber: 94
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ThemeToggle.tsx",
                lineNumber: 99,
                columnNumber: 12
            }, this);
            $[11] = t5;
        } else {
            t5 = $[11];
        }
        return t5;
    }
    const t5 = getAriaLabel();
    const t6 = theme === "system" ? "System (Auto)" : theme === "dark" ? "Dark Mode" : "Light Mode";
    let t7;
    if ($[12] !== getIcon) {
        t7 = getIcon();
        $[12] = getIcon;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== cycleTheme || $[15] !== t5 || $[16] !== t6 || $[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "ghost",
            size: "icon",
            onClick: cycleTheme,
            className: "h-9 w-9",
            "aria-label": t5,
            title: t6,
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ThemeToggle.tsx",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        $[14] = cycleTheme;
        $[15] = t5;
        $[16] = t6;
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    return t8;
}
_s(ThemeToggle, "qj4yeJLweL5h7YX0rtr+sX2buWk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/auth/AuthPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthPage",
    ()=>AuthPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validations$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/validations/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/errorHandler.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$LoginSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/LoginSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$SignupSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/SignupSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ThemeToggle.tsx [app-client] (ecmascript)");
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
;
;
;
function AuthPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { login: loginUser, register: registerUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [isSignUp, setIsSignUp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Form state
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [college, setCollege] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [branch, setBranch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Helper function to reset swipe buttons by ID
    const resetSwipeButtonById = (buttonId)=>{
        const container = document.getElementById(buttonId);
        if (!container) return;
        const slider = container.querySelector('.swipe-button-slider');
        const text = container.querySelector('.swipe-button-text');
        if (slider && text) {
            // Reset immediately for better UX
            container.classList.remove('submitted', 'active');
            slider.style.left = '2px';
            text.style.opacity = '1';
        }
    };
    // Generate PKCE code verifier
    const generateCodeVerifier = ()=>{
        const array = new Uint8Array(32);
        crypto.getRandomValues(array);
        return btoa(String.fromCharCode(...array)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    };
    // Generate PKCE code challenge from verifier
    const generateCodeChallenge = async (verifier)=>{
        const encoder = new TextEncoder();
        const data = encoder.encode(verifier);
        const digest = await crypto.subtle.digest('SHA-256', data);
        const base64 = btoa(String.fromCharCode(...new Uint8Array(digest)));
        return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    };
    // Google OAuth2.0 redirect login with PKCE
    const handleGoogleLogin = async ()=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GOOGLE_CLIENT_ID"]) {
            setError('Google Client ID is not configured. Please check your environment variables.');
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            // Generate state for CSRF protection
            const state = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            sessionStorage.setItem('oauth_state', state);
            // Generate PKCE code verifier and challenge
            const codeVerifier = generateCodeVerifier();
            const codeChallenge = await generateCodeChallenge(codeVerifier);
            sessionStorage.setItem('oauth_code_verifier', codeVerifier);
            // Build Google OAuth URL with PKCE
            const redirectUri = `${window.location.origin}/auth/google/callback`;
            const scope = 'openid email profile';
            const responseType = 'code';
            const params = new URLSearchParams({
                client_id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GOOGLE_CLIENT_ID"],
                redirect_uri: redirectUri,
                response_type: responseType,
                scope: scope,
                state: state,
                code_challenge: codeChallenge,
                code_challenge_method: 'S256',
                access_type: 'offline',
                prompt: 'consent'
            });
            // Redirect to Google OAuth consent page
            window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
        } catch (err) {
            setError('Failed to initiate Google sign-in. Please try again.');
            setIsLoading(false);
        }
    };
    // Handle form switch animation
    const handleSwitch = ()=>{
        const switchCtn = document.getElementById('switch-cnt');
        const switchC1 = document.getElementById('switch-c1');
        const switchC2 = document.getElementById('switch-c2');
        const switchCircle = document.querySelectorAll('.switch__circle');
        const aContainer = document.getElementById('a-container');
        const bContainer = document.getElementById('b-container');
        if (!switchCtn || !switchC1 || !switchC2 || !aContainer || !bContainer) return;
        // Reset swipe buttons when switching
        resetSwipeButtonById('swipe-btn-signup');
        resetSwipeButtonById('swipe-btn-signin');
        switchCtn.classList.add('is-gx');
        setTimeout(()=>{
            switchCtn.classList.remove('is-gx');
        }, 1500);
        switchCtn.classList.toggle('is-txr');
        switchCircle.forEach((circle)=>circle.classList.toggle('is-txr'));
        switchC1.classList.toggle('is-hidden');
        switchC2.classList.toggle('is-hidden');
        aContainer.classList.toggle('is-txl');
        bContainer.classList.toggle('is-txl');
        bContainer.classList.toggle('is-z200');
        setIsSignUp(!isSignUp);
        setError(null);
        setSuccess(null);
        // Reset form fields when switching
        setPassword('');
    };
    // Handle form submission
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccess(null);
        const formId = e.currentTarget.id;
        const isSignUpForm = formId === 'a-form';
        try {
            if (isSignUpForm) {
                // Validate signup form
                const validationResult = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validations$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerSchema"].safeParse({
                    name,
                    email,
                    password,
                    college: college || undefined,
                    branch: branch || undefined
                });
                if (!validationResult.success) {
                    const firstError = validationResult.error.issues[0];
                    setError(firstError.message);
                    setIsLoading(false);
                    resetSwipeButtonById('swipe-btn-signup');
                    return;
                }
                const authResponse = await registerUser({
                    email,
                    password,
                    name,
                    college: college || undefined,
                    branch: branch || undefined
                });
                // Show success message about email verification
                setSuccess('Registration successful! Please check your email to verify your account.');
                // Reset swipe button after successful signup
                setTimeout(()=>{
                    resetSwipeButtonById('swipe-btn-signup');
                }, 1000);
                // Don't redirect immediately - user needs to verify email
                if (authResponse.user.isVerified) {
                    setTimeout(()=>router.push('/'), 2000);
                }
            } else {
                // Validate login form
                const validationResult_0 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validations$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginSchema"].safeParse({
                    email,
                    password
                });
                if (!validationResult_0.success) {
                    const firstError_0 = validationResult_0.error.issues[0];
                    setError(firstError_0.message);
                    setIsLoading(false);
                    resetSwipeButtonById('swipe-btn-signin');
                    return;
                }
                try {
                    await loginUser({
                        email,
                        password
                    });
                    // Check if email verification is required (this should be handled by the API)
                    // But we'll check the user state after login
                    // Redirect to home
                    router.push('/');
                } catch (loginErr) {
                    const errorMessage_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(loginErr);
                    setError(errorMessage_0);
                    setIsLoading(false);
                    resetSwipeButtonById('swipe-btn-signin');
                    return;
                }
            }
        } catch (err_0) {
            const errorMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(err_0);
            setError(errorMessage);
            setIsLoading(false);
            // Always reset swipe button on any error
            if (isSignUpForm) {
                resetSwipeButtonById('swipe-btn-signup');
            } else {
                resetSwipeButtonById('swipe-btn-signin');
            }
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "auth-page-wrapper",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-4 right-4 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                    fileName: "[project]/src/components/auth/AuthPage.tsx",
                    lineNumber: 228,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/auth/AuthPage.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$SignupSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignupSection"], {
                        name: name,
                        email: email,
                        password: password,
                        onNameChange: setName,
                        onEmailChange: setEmail,
                        onPasswordChange: setPassword,
                        onSubmit: handleSubmit,
                        onGoogleLogin: handleGoogleLogin,
                        isLoading: isLoading,
                        error: error,
                        success: success
                    }, void 0, false, {
                        fileName: "[project]/src/components/auth/AuthPage.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$LoginSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoginSection"], {
                        email: email,
                        password: password,
                        onEmailChange: setEmail,
                        onPasswordChange: setPassword,
                        onSubmit: handleSubmit,
                        onGoogleLogin: handleGoogleLogin,
                        isLoading: isLoading,
                        error: error,
                        success: success
                    }, void 0, false, {
                        fileName: "[project]/src/components/auth/AuthPage.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "switch",
                        id: "switch-cnt",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "switch__circle"
                            }, void 0, false, {
                                fileName: "[project]/src/components/auth/AuthPage.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "switch__circle switch__circle--t"
                            }, void 0, false, {
                                fileName: "[project]/src/components/auth/AuthPage.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "switch__container",
                                id: "switch-c1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "switch__title title",
                                        children: "Hello Friend !"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/auth/AuthPage.tsx",
                                        lineNumber: 242,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "switch__description description",
                                        children: "Enter your personal details and start journey with us"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/auth/AuthPage.tsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "switch__button button switch-btn",
                                        onClick: handleSwitch,
                                        children: "SIGN IN"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/auth/AuthPage.tsx",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/auth/AuthPage.tsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "switch__container is-hidden",
                                id: "switch-c2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "switch__title title",
                                        children: "Welcome Back !"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/auth/AuthPage.tsx",
                                        lineNumber: 251,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "switch__description description",
                                        children: "To keep connected with us please login with your personal info"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/auth/AuthPage.tsx",
                                        lineNumber: 252,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "switch__button button switch-btn",
                                        onClick: handleSwitch,
                                        children: "SIGN UP"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/auth/AuthPage.tsx",
                                        lineNumber: 255,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/auth/AuthPage.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/auth/AuthPage.tsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/auth/AuthPage.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "play-store-btn",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "play-store-icon",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m21.762,9.942L4.67.378c-.721-.466-1.635-.504-2.393-.099-.768.411-1.246,1.208-1.246,2.08v19.282c0,.872.477,1.668,1.246,2.079.755.404,1.668.37,2.393-.098l17.092-9.564c.756-.423,1.207-1.192,1.207-2.058s-.451-1.635-1.207-2.058Zm-5.746-1.413l-2.36,2.36L5.302,2.534l10.714,5.995ZM2.604,21.906V2.094l9.941,9.906L2.604,21.906Zm2.698-.439l8.355-8.355,2.36,2.36-10.714,5.995Zm15.692-8.78l-3.552,1.987-2.674-2.674,2.674-2.674,3.552,1.987c.363.203.402.548.402.686s-.039.483-.402.686Z"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/auth/AuthPage.tsx",
                                    lineNumber: 266,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/auth/AuthPage.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "play-store-btn-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "play-store-btn-small",
                                        children: "GET IT ON"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/auth/AuthPage.tsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "play-store-btn-large",
                                        children: "Google Play"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/auth/AuthPage.tsx",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/auth/AuthPage.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/auth/AuthPage.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "play-store-btn",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "play-store-icon",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M18.546,12.763c0.024-1.87,1.004-3.597,2.597-4.576c-1.009-1.442-2.64-2.323-4.399-2.378    c-1.851-0.194-3.645,1.107-4.588,1.107c-0.961,0-2.413-1.088-3.977-1.056C6.122,5.927,4.25,7.068,3.249,8.867    c-2.131,3.69-0.542,9.114,1.5,12.097c1.022,1.461,2.215,3.092,3.778,3.035c1.529-0.063,2.1-0.975,3.945-0.975    c1.828,0,2.364,0.975,3.958,0.938c1.64-0.027,2.674-1.467,3.66-2.942c0.734-1.041,1.299-2.191,1.673-3.408    C19.815,16.788,18.548,14.879,18.546,12.763z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/auth/AuthPage.tsx",
                                            lineNumber: 276,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M15.535,3.847C16.429,2.773,16.87,1.393,16.763,0c-1.366,0.144-2.629,0.797-3.535,1.829    c-0.895,1.019-1.349,2.351-1.261,3.705C13.352,5.548,14.667,4.926,15.535,3.847z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/auth/AuthPage.tsx",
                                            lineNumber: 277,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/auth/AuthPage.tsx",
                                    lineNumber: 275,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/auth/AuthPage.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "play-store-btn-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "play-store-btn-small",
                                        children: "Download on the"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/auth/AuthPage.tsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "play-store-btn-large",
                                        children: "App Store"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/auth/AuthPage.tsx",
                                        lineNumber: 282,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/auth/AuthPage.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/auth/AuthPage.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/auth/AuthPage.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/auth/AuthPage.tsx",
        lineNumber: 226,
        columnNumber: 10
    }, this);
}
_s(AuthPage, "UwKU4HeDVaWkxI/WtSp4KMgE/Js=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = AuthPage;
var _c;
__turbopack_context__.k.register(_c, "AuthPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/auth/AuthRedirect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthRedirect",
    ()=>AuthRedirect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/useAuth.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function AuthRedirect(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "9acaaa67ed8f2815ccf08c561a664889da04106a1218a08d7b84a31ff7bc2ed1") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9acaaa67ed8f2815ccf08c561a664889da04106a1218a08d7b84a31ff7bc2ed1";
    }
    const { children, redirectTo: t1 } = t0;
    const redirectTo = t1 === undefined ? "/" : t1;
    const { isAuthenticated, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t2;
    let t3;
    if ($[1] !== isAuthenticated || $[2] !== loading || $[3] !== redirectTo || $[4] !== router) {
        t2 = ({
            "AuthRedirect[useEffect()]": ()=>{
                if (!loading && isAuthenticated) {
                    router.push(redirectTo);
                }
            }
        })["AuthRedirect[useEffect()]"];
        t3 = [
            isAuthenticated,
            loading,
            router,
            redirectTo
        ];
        $[1] = isAuthenticated;
        $[2] = loading;
        $[3] = redirectTo;
        $[4] = router;
        $[5] = t2;
        $[6] = t3;
    } else {
        t2 = $[5];
        t3 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    if (loading) {
        let t4;
        if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center min-h-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/AuthRedirect.tsx",
                            lineNumber: 54,
                            columnNumber: 104
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-gray-600",
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/AuthRedirect.tsx",
                            lineNumber: 54,
                            columnNumber: 194
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/auth/AuthRedirect.tsx",
                    lineNumber: 54,
                    columnNumber: 75
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/auth/AuthRedirect.tsx",
                lineNumber: 54,
                columnNumber: 12
            }, this);
            $[7] = t4;
        } else {
            t4 = $[7];
        }
        return t4;
    }
    if (isAuthenticated) {
        return null;
    }
    let t4;
    if ($[8] !== children) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
        $[8] = children;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    return t4;
}
_s(AuthRedirect, "yuvxlLSfcenVuZm2PCzg/eNaH7s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthRedirect;
var _c;
__turbopack_context__.k.register(_c, "AuthRedirect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/login/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthRedirect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthRedirect.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function LoginPage() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "ffe744311223d5a55183eb7de21ef3f76d34dc7cf6f03b28a52274a55c3e4951") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ffe744311223d5a55183eb7de21ef3f76d34dc7cf6f03b28a52274a55c3e4951";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthRedirect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthRedirect"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthPage"], {}, void 0, false, {
                fileName: "[project]/src/app/login/page.tsx",
                lineNumber: 16,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/login/page.tsx",
            lineNumber: 16,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_bd2be2c7._.js.map