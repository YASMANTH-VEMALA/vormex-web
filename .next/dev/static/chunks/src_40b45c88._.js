(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/auth/ProtectedRoute.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProtectedRoute",
    ()=>ProtectedRoute
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
function ProtectedRoute(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "bd6a21a103eb5e12bf014a4a520d1ecf9e344f6d8afb098e6222be72278e1ae5") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bd6a21a103eb5e12bf014a4a520d1ecf9e344f6d8afb098e6222be72278e1ae5";
    }
    const { children } = t0;
    const { isAuthenticated, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    let t2;
    if ($[1] !== isAuthenticated || $[2] !== loading || $[3] !== router) {
        t1 = ({
            "ProtectedRoute[useEffect()]": ()=>{
                if (!loading && !isAuthenticated) {
                    router.push("/login");
                }
            }
        })["ProtectedRoute[useEffect()]"];
        t2 = [
            isAuthenticated,
            loading,
            router
        ];
        $[1] = isAuthenticated;
        $[2] = loading;
        $[3] = router;
        $[4] = t1;
        $[5] = t2;
    } else {
        t1 = $[4];
        t2 = $[5];
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect(t1, t2);
    if (loading) {
        let t3;
        if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center min-h-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/ProtectedRoute.tsx",
                            lineNumber: 50,
                            columnNumber: 104
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-gray-600",
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/ProtectedRoute.tsx",
                            lineNumber: 50,
                            columnNumber: 194
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/auth/ProtectedRoute.tsx",
                    lineNumber: 50,
                    columnNumber: 75
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/auth/ProtectedRoute.tsx",
                lineNumber: 50,
                columnNumber: 12
            }, this);
            $[6] = t3;
        } else {
            t3 = $[6];
        }
        return t3;
    }
    if (!isAuthenticated) {
        return null;
    }
    let t3;
    if ($[7] !== children) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
        $[7] = children;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    return t3;
}
_s(ProtectedRoute, "yuvxlLSfcenVuZm2PCzg/eNaH7s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProtectedRoute;
var _c;
__turbopack_context__.k.register(_c, "ProtectedRoute");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/more/games/startup/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StartupSimulatorPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-client] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$ProtectedRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/ProtectedRoute.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const INDUSTRIES = [
    {
        id: 'saas',
        name: 'SaaS',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"],
        color: 'text-blue-500',
        bg: 'bg-blue-100 dark:bg-blue-900/30'
    },
    {
        id: 'fintech',
        name: 'Fintech',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
        color: 'text-green-500',
        bg: 'bg-green-100 dark:bg-green-900/30'
    },
    {
        id: 'ai',
        name: 'AI/ML',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
        color: 'text-purple-500',
        bg: 'bg-purple-100 dark:bg-purple-900/30'
    },
    {
        id: 'security',
        name: 'Cybersecurity',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        color: 'text-red-500',
        bg: 'bg-red-100 dark:bg-red-900/30'
    }
];
const GAME_EVENTS = [
    {
        id: 'investor',
        title: 'Investor Interest',
        description: 'A VC firm wants to invest $500K for 15% equity. Do you accept?',
        type: 'opportunity',
        choices: [
            {
                id: 'accept',
                text: 'Accept the deal',
                effects: {
                    cash: 500000,
                    reputation: 10
                },
                xpReward: 20
            },
            {
                id: 'negotiate',
                text: 'Negotiate for better terms',
                effects: {
                    cash: 350000,
                    reputation: 15
                },
                xpReward: 30
            },
            {
                id: 'decline',
                text: 'Decline and bootstrap',
                effects: {
                    reputation: 5
                },
                xpReward: 10
            }
        ]
    },
    {
        id: 'competitor',
        title: 'Competitor Launches',
        description: 'A well-funded competitor just launched a similar product. How do you respond?',
        type: 'challenge',
        choices: [
            {
                id: 'innovate',
                text: 'Accelerate innovation',
                effects: {
                    cash: -50000,
                    techLevel: 2
                },
                xpReward: 25
            },
            {
                id: 'marketing',
                text: 'Double down on marketing',
                effects: {
                    cash: -30000,
                    marketingLevel: 2,
                    users: 5000
                },
                xpReward: 20
            },
            {
                id: 'niche',
                text: 'Focus on niche market',
                effects: {
                    users: 2000,
                    reputation: 10
                },
                xpReward: 15
            }
        ]
    },
    {
        id: 'viral',
        title: 'Viral Moment',
        description: 'Your product just went viral on social media! Quick, capitalize on it!',
        type: 'opportunity',
        choices: [
            {
                id: 'scale',
                text: 'Scale servers immediately',
                effects: {
                    cash: -100000,
                    users: 50000
                },
                xpReward: 40
            },
            {
                id: 'press',
                text: 'Hire PR firm',
                effects: {
                    cash: -50000,
                    reputation: 30,
                    users: 20000
                },
                xpReward: 30
            },
            {
                id: 'wait',
                text: 'Wait and see',
                effects: {
                    users: 10000
                },
                xpReward: 10
            }
        ]
    },
    {
        id: 'talent',
        title: 'Key Hire Available',
        description: 'A senior engineer from a FAANG company wants to join. Salary: $200K/year',
        type: 'opportunity',
        choices: [
            {
                id: 'hire',
                text: 'Make the hire',
                effects: {
                    cash: -200000,
                    employees: 1,
                    techLevel: 3
                },
                xpReward: 35
            },
            {
                id: 'equity',
                text: 'Offer more equity, less cash',
                effects: {
                    cash: -100000,
                    employees: 1,
                    techLevel: 2
                },
                xpReward: 25
            },
            {
                id: 'pass',
                text: 'Pass on this one',
                effects: {},
                xpReward: 5
            }
        ]
    },
    {
        id: 'bug',
        title: 'Critical Bug Found',
        description: 'Users discovered a major security vulnerability. How do you handle it?',
        type: 'challenge',
        choices: [
            {
                id: 'transparent',
                text: 'Be transparent, fix immediately',
                effects: {
                    cash: -50000,
                    reputation: 20
                },
                xpReward: 40
            },
            {
                id: 'quiet',
                text: 'Fix quietly',
                effects: {
                    cash: -20000,
                    reputation: -10
                },
                xpReward: 10
            },
            {
                id: 'downplay',
                text: 'Downplay the issue',
                effects: {
                    reputation: -30,
                    users: -10000
                },
                xpReward: 0
            }
        ]
    },
    {
        id: 'acquisition',
        title: 'Acquisition Offer',
        description: 'A big tech company wants to acquire you for $5M. Your current valuation is $3M.',
        type: 'opportunity',
        choices: [
            {
                id: 'sell',
                text: 'Accept the offer',
                effects: {
                    cash: 5000000
                },
                xpReward: 100
            },
            {
                id: 'counter',
                text: 'Counter with $8M',
                effects: {
                    reputation: 10
                },
                xpReward: 20
            },
            {
                id: 'decline',
                text: 'Decline, keep building',
                effects: {
                    reputation: 15,
                    techLevel: 1
                },
                xpReward: 30
            }
        ]
    }
];
const MILESTONES = [
    {
        id: 'first-revenue',
        title: 'First Revenue',
        description: 'Generate your first $1,000',
        requirement: (s)=>s.revenue >= 1000,
        xpReward: 50
    },
    {
        id: 'first-users',
        title: '1K Users',
        description: 'Reach 1,000 users',
        requirement: (s)=>s.users >= 1000,
        xpReward: 50
    },
    {
        id: 'team-growth',
        title: 'Growing Team',
        description: 'Hire 5 employees',
        requirement: (s)=>s.employees >= 5,
        xpReward: 75
    },
    {
        id: 'profitable',
        title: 'Profitable',
        description: 'Achieve positive cash flow',
        requirement: (s)=>s.revenue > 0 && s.cash > 100000,
        xpReward: 100
    },
    {
        id: 'unicorn',
        title: 'Unicorn Status',
        description: 'Reach $1B valuation',
        requirement: (s)=>s.valuation >= 1000000000,
        xpReward: 500
    }
];
function StartupSimulatorPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(80);
    if ($[0] !== "6ff67edb3efbef10cec1da4461a8a8e9e9a6eddf16d16365547f29e4f96e8330") {
        for(let $i = 0; $i < 80; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6ff67edb3efbef10cec1da4461a8a8e9e9a6eddf16d16365547f29e4f96e8330";
    }
    const [gamePhase, setGamePhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("setup");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            name: "",
            industry: "",
            cash: 50000,
            revenue: 0,
            users: 0,
            employees: 1,
            reputation: 50,
            techLevel: 1,
            marketingLevel: 1,
            month: 1,
            valuation: 50000
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [startup, setStartup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [selectedIndustry, setSelectedIndustry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [startupName, setStartupName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentEvent, setCurrentEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = MILESTONES.map(_StartupSimulatorPageMILESTONESMap);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [milestones, setMilestones] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [totalXpEarned, setTotalXpEarned] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [gameSpeed, setGameSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [achievedMilestone, setAchievedMilestone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t2;
    let t3;
    if ($[3] !== gamePhase || $[4] !== gameSpeed || $[5] !== isPaused) {
        t2 = ({
            "StartupSimulatorPage[useEffect()]": ()=>{
                if (gamePhase !== "playing" || isPaused) {
                    return;
                }
                const tickInterval = 3000 / gameSpeed;
                const interval = setInterval({
                    "StartupSimulatorPage[useEffect() > setInterval()]": ()=>{
                        setStartup(_StartupSimulatorPageUseEffectSetIntervalSetStartup);
                        if (Math.random() < 0.3) {
                            const randomEvent = GAME_EVENTS[Math.floor(Math.random() * GAME_EVENTS.length)];
                            setCurrentEvent(randomEvent);
                            setGamePhase("event");
                        }
                    }
                }["StartupSimulatorPage[useEffect() > setInterval()]"], tickInterval);
                return ()=>clearInterval(interval);
            }
        })["StartupSimulatorPage[useEffect()]"];
        t3 = [
            gamePhase,
            isPaused,
            gameSpeed
        ];
        $[3] = gamePhase;
        $[4] = gameSpeed;
        $[5] = isPaused;
        $[6] = t2;
        $[7] = t3;
    } else {
        t2 = $[6];
        t3 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[8] !== gamePhase || $[9] !== startup) {
        t4 = ({
            "StartupSimulatorPage[useEffect()]": ()=>{
                if (gamePhase !== "playing") {
                    return;
                }
                setMilestones({
                    "StartupSimulatorPage[useEffect() > setMilestones()]": (prev_0)=>{
                        const updated = prev_0.map({
                            "StartupSimulatorPage[useEffect() > setMilestones() > prev_0.map()]": (m_0)=>{
                                if (!m_0.achieved && m_0.requirement(startup)) {
                                    setAchievedMilestone(m_0);
                                    setTotalXpEarned({
                                        "StartupSimulatorPage[useEffect() > setMilestones() > prev_0.map() > setTotalXpEarned()]": (xp)=>xp + m_0.xpReward
                                    }["StartupSimulatorPage[useEffect() > setMilestones() > prev_0.map() > setTotalXpEarned()]"]);
                                    setGamePhase("milestone");
                                    return {
                                        ...m_0,
                                        achieved: true
                                    };
                                }
                                return m_0;
                            }
                        }["StartupSimulatorPage[useEffect() > setMilestones() > prev_0.map()]"]);
                        return updated;
                    }
                }["StartupSimulatorPage[useEffect() > setMilestones()]"]);
            }
        })["StartupSimulatorPage[useEffect()]"];
        t5 = [
            startup,
            gamePhase
        ];
        $[8] = gamePhase;
        $[9] = startup;
        $[10] = t4;
        $[11] = t5;
    } else {
        t4 = $[10];
        t5 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[12] !== gamePhase || $[13] !== startup.cash || $[14] !== startup.month) {
        t6 = ({
            "StartupSimulatorPage[useEffect()]": ()=>{
                if (gamePhase !== "playing") {
                    return;
                }
                if (startup.cash < -100000) {
                    setGamePhase("ended");
                } else {
                    if (startup.month >= 60) {
                        setGamePhase("ended");
                    }
                }
            }
        })["StartupSimulatorPage[useEffect()]"];
        $[12] = gamePhase;
        $[13] = startup.cash;
        $[14] = startup.month;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] !== gamePhase || $[17] !== startup) {
        t7 = [
            startup,
            gamePhase
        ];
        $[16] = gamePhase;
        $[17] = startup;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    if ($[19] !== selectedIndustry || $[20] !== startupName) {
        t8 = ({
            "StartupSimulatorPage[startGame]": ()=>{
                if (!selectedIndustry || !startupName.trim()) {
                    return;
                }
                setStartup({
                    "StartupSimulatorPage[startGame > setStartup()]": (prev_1)=>({
                            ...prev_1,
                            name: startupName,
                            industry: selectedIndustry
                        })
                }["StartupSimulatorPage[startGame > setStartup()]"]);
                setGamePhase("playing");
            }
        })["StartupSimulatorPage[startGame]"];
        $[19] = selectedIndustry;
        $[20] = startupName;
        $[21] = t8;
    } else {
        t8 = $[21];
    }
    const startGame = t8;
    let t9;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "StartupSimulatorPage[handleEventChoice]": (choice)=>{
                setStartup({
                    "StartupSimulatorPage[handleEventChoice > setStartup()]": (prev_2)=>({
                            ...prev_2,
                            ...Object.entries(choice.effects).reduce({
                                "StartupSimulatorPage[handleEventChoice > setStartup() > (anonymous)()]": (acc, t10)=>{
                                    const [key, value] = t10;
                                    const currentValue = prev_2[key];
                                    if (typeof currentValue === "number" && typeof value === "number") {
                                        return {
                                            ...acc,
                                            [key]: currentValue + value
                                        };
                                    }
                                    return {
                                        ...acc,
                                        [key]: value
                                    };
                                }
                            }["StartupSimulatorPage[handleEventChoice > setStartup() > (anonymous)()]"], {})
                        })
                }["StartupSimulatorPage[handleEventChoice > setStartup()]"]);
                setTotalXpEarned({
                    "StartupSimulatorPage[handleEventChoice > setTotalXpEarned()]": (prev_3)=>prev_3 + choice.xpReward
                }["StartupSimulatorPage[handleEventChoice > setTotalXpEarned()]"]);
                setCurrentEvent(null);
                setGamePhase("playing");
            }
        })["StartupSimulatorPage[handleEventChoice]"];
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    const handleEventChoice = t9;
    let t10;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "StartupSimulatorPage[continueMilestone]": ()=>{
                setAchievedMilestone(null);
                setGamePhase("playing");
            }
        })["StartupSimulatorPage[continueMilestone]"];
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    const continueMilestone = t10;
    let t11;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "StartupSimulatorPage[resetGame]": ()=>{
                setStartup({
                    name: "",
                    industry: "",
                    cash: 50000,
                    revenue: 0,
                    users: 0,
                    employees: 1,
                    reputation: 50,
                    techLevel: 1,
                    marketingLevel: 1,
                    month: 1,
                    valuation: 50000
                });
                setMilestones(MILESTONES.map(_StartupSimulatorPageResetGameMILESTONESMap));
                setTotalXpEarned(0);
                setSelectedIndustry(null);
                setStartupName("");
                setCurrentEvent(null);
                setAchievedMilestone(null);
                setGamePhase("setup");
            }
        })["StartupSimulatorPage[resetGame]"];
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    const resetGame = t11;
    let t12;
    if ($[25] !== startup.cash) {
        t12 = ({
            "StartupSimulatorPage[invest]": (area)=>{
                const costs = {
                    tech: 30000,
                    marketing: 20000,
                    hiring: 50000
                };
                if (startup.cash < costs[area]) {
                    return;
                }
                setStartup({
                    "StartupSimulatorPage[invest > setStartup()]": (prev_4)=>({
                            ...prev_4,
                            cash: prev_4.cash - costs[area],
                            ...area === "tech" && {
                                techLevel: prev_4.techLevel + 1
                            },
                            ...area === "marketing" && {
                                marketingLevel: prev_4.marketingLevel + 1
                            },
                            ...area === "hiring" && {
                                employees: prev_4.employees + 1
                            }
                        })
                }["StartupSimulatorPage[invest > setStartup()]"]);
            }
        })["StartupSimulatorPage[invest]"];
        $[25] = startup.cash;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    const invest = t12;
    const formatMoney = _StartupSimulatorPageFormatMoney;
    const formatNumber = _StartupSimulatorPageFormatNumber;
    let t13;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/more/games",
            className: "p-2 -ml-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                className: "w-5 h-5 text-gray-600 dark:text-gray-400"
            }, void 0, false, {
                fileName: "[project]/src/app/more/games/startup/page.tsx",
                lineNumber: 573,
                columnNumber: 128
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/more/games/startup/page.tsx",
            lineNumber: 573,
            columnNumber: 11
        }, this);
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    let t14;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
            className: "w-6 h-6 text-rose-500"
        }, void 0, false, {
            fileName: "[project]/src/app/more/games/startup/page.tsx",
            lineNumber: 580,
            columnNumber: 11
        }, this);
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    const t15 = gamePhase === "setup" ? "Startup Simulator" : startup.name;
    let t16;
    if ($[29] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2",
                    children: [
                        t14,
                        t15
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                    lineNumber: 588,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/more/games/startup/page.tsx",
            lineNumber: 588,
            columnNumber: 11
        }, this);
        $[29] = t15;
        $[30] = t16;
    } else {
        t16 = $[30];
    }
    let t17;
    if ($[31] !== totalXpEarned) {
        t17 = totalXpEarned > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                    className: "w-4 h-4 text-purple-600 dark:text-purple-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                    lineNumber: 596,
                    columnNumber: 136
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-semibold text-purple-600 dark:text-purple-400",
                    children: [
                        totalXpEarned,
                        " XP"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                    lineNumber: 596,
                    columnNumber: 200
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/more/games/startup/page.tsx",
            lineNumber: 596,
            columnNumber: 32
        }, this);
        $[31] = totalXpEarned;
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    let t18;
    if ($[33] !== t16 || $[34] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-3xl mx-auto px-4 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        t16,
                        t17
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                    lineNumber: 604,
                    columnNumber: 186
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/more/games/startup/page.tsx",
                lineNumber: 604,
                columnNumber: 141
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/more/games/startup/page.tsx",
            lineNumber: 604,
            columnNumber: 11
        }, this);
        $[33] = t16;
        $[34] = t17;
        $[35] = t18;
    } else {
        t18 = $[35];
    }
    let t19;
    if ($[36] !== gamePhase || $[37] !== selectedIndustry || $[38] !== startGame || $[39] !== startupName) {
        t19 = gamePhase === "setup" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: -20
            },
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                            className: "w-16 h-16 text-rose-500 mx-auto mb-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 622,
                            columnNumber: 64
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-gray-900 dark:text-white mb-2",
                            children: "Start Your Startup"
                        }, void 0, false, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 622,
                            columnNumber: 123
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500",
                            children: "Build your tech empire from scratch!"
                        }, void 0, false, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 622,
                            columnNumber: 216
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                    lineNumber: 622,
                    columnNumber: 30
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                            children: "Startup Name"
                        }, void 0, false, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 622,
                            columnNumber: 318
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: startupName,
                            onChange: {
                                "StartupSimulatorPage[<input>.onChange]": (e)=>setStartupName(e.target.value)
                            }["StartupSimulatorPage[<input>.onChange]"],
                            placeholder: "Enter your startup name...",
                            className: "w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                        }, void 0, false, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 622,
                            columnNumber: 410
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                    lineNumber: 622,
                    columnNumber: 291
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                            children: "Choose Your Industry"
                        }, void 0, false, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 624,
                            columnNumber: 313
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: INDUSTRIES.map({
                                "StartupSimulatorPage[INDUSTRIES.map()]": (industry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "StartupSimulatorPage[INDUSTRIES.map() > <button>.onClick]": ()=>setSelectedIndustry(industry.id)
                                        }["StartupSimulatorPage[INDUSTRIES.map() > <button>.onClick]"],
                                        className: `p-4 rounded-xl border-2 transition-all ${selectedIndustry === industry.id ? "border-rose-500 bg-rose-50 dark:bg-rose-900/20" : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-10 h-10 ${industry.bg} rounded-lg flex items-center justify-center mb-2`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(industry.icon, {
                                                    className: `w-5 h-5 ${industry.color}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                                    lineNumber: 627,
                                                    columnNumber: 399
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/more/games/startup/page.tsx",
                                                lineNumber: 627,
                                                columnNumber: 306
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium text-gray-900 dark:text-white",
                                                children: industry.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/more/games/startup/page.tsx",
                                                lineNumber: 627,
                                                columnNumber: 462
                                            }, this)
                                        ]
                                    }, industry.id, true, {
                                        fileName: "[project]/src/app/more/games/startup/page.tsx",
                                        lineNumber: 625,
                                        columnNumber: 67
                                    }, this)
                            }["StartupSimulatorPage[INDUSTRIES.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 624,
                            columnNumber: 413
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                    lineNumber: 624,
                    columnNumber: 286
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: startGame,
                    disabled: !selectedIndustry || !startupName.trim(),
                    className: "w-full py-4 bg-rose-600 hover:bg-rose-700 disabled:bg-gray-400 text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 628,
                            columnNumber: 316
                        }, this),
                        "Launch Startup"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                    lineNumber: 628,
                    columnNumber: 68
                }, this)
            ]
        }, "setup", true, {
            fileName: "[project]/src/app/more/games/startup/page.tsx",
            lineNumber: 613,
            columnNumber: 36
        }, this);
        $[36] = gamePhase;
        $[37] = selectedIndustry;
        $[38] = startGame;
        $[39] = startupName;
        $[40] = t19;
    } else {
        t19 = $[40];
    }
    let t20;
    if ($[41] !== gamePhase || $[42] !== gameSpeed || $[43] !== invest || $[44] !== isPaused || $[45] !== milestones || $[46] !== startup.cash || $[47] !== startup.employees || $[48] !== startup.marketingLevel || $[49] !== startup.month || $[50] !== startup.reputation || $[51] !== startup.revenue || $[52] !== startup.techLevel || $[53] !== startup.users || $[54] !== startup.valuation) {
        t20 = gamePhase === "playing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-gray-500",
                                    children: [
                                        "Month ",
                                        startup.month
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 645,
                                    columnNumber: 207
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-gray-400",
                                    children: [
                                        "(",
                                        Math.floor(startup.month / 12),
                                        " years, ",
                                        startup.month % 12,
                                        " months)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 645,
                                    columnNumber: 275
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 645,
                            columnNumber: 166
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "StartupSimulatorPage[<button>.onClick]": ()=>setIsPaused(!isPaused)
                                    }["StartupSimulatorPage[<button>.onClick]"],
                                    className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors",
                                    children: isPaused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                        className: "w-5 h-5 text-green-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/more/games/startup/page.tsx",
                                        lineNumber: 647,
                                        columnNumber: 154
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                        className: "w-5 h-5 text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/more/games/startup/page.tsx",
                                        lineNumber: 647,
                                        columnNumber: 200
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 645,
                                    columnNumber: 438
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "StartupSimulatorPage[<button>.onClick]": ()=>setGameSpeed(gameSpeed === 1 ? 2 : gameSpeed === 2 ? 3 : 1)
                                    }["StartupSimulatorPage[<button>.onClick]"],
                                    className: "px-2 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-700 rounded-lg",
                                    children: [
                                        gameSpeed,
                                        "x"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 647,
                                    columnNumber: 253
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 645,
                            columnNumber: 397
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                    lineNumber: 645,
                    columnNumber: 30
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                            className: "w-4 h-4 text-green-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                                            lineNumber: 649,
                                            columnNumber: 374
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-gray-500",
                                            children: "Cash"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                                            lineNumber: 649,
                                            columnNumber: 423
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 649,
                                    columnNumber: 328
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-lg font-bold ${startup.cash < 0 ? "text-red-500" : "text-gray-900 dark:text-white"}`,
                                    children: formatMoney(startup.cash)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 649,
                                    columnNumber: 480
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 649,
                            columnNumber: 226
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            className: "w-4 h-4 text-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                                            lineNumber: 649,
                                            columnNumber: 771
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-gray-500",
                                            children: "Users"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                                            lineNumber: 649,
                                            columnNumber: 814
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 649,
                                    columnNumber: 725
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-bold text-gray-900 dark:text-white",
                                    children: formatNumber(startup.users)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 649,
                                    columnNumber: 872
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 649,
                            columnNumber: 623
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            className: "w-4 h-4 text-purple-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                                            lineNumber: 649,
                                            columnNumber: 1122
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-gray-500",
                                            children: "Revenue/mo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                                            lineNumber: 649,
                                            columnNumber: 1172
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 649,
                                    columnNumber: 1076
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-bold text-gray-900 dark:text-white",
                                    children: formatMoney(startup.revenue)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 649,
                                    columnNumber: 1235
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 649,
                            columnNumber: 974
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                            className: "w-4 h-4 text-amber-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                                            lineNumber: 649,
                                            columnNumber: 1486
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-gray-500",
                                            children: "Valuation"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                                            lineNumber: 649,
                                            columnNumber: 1534
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 649,
                                    columnNumber: 1440
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-bold text-gray-900 dark:text-white",
                                    children: formatMoney(startup.valuation)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 649,
                                    columnNumber: 1596
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 649,
                            columnNumber: 1338
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                    lineNumber: 649,
                    columnNumber: 171
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-medium text-gray-900 dark:text-white mb-3",
                            children: "Company Stats"
                        }, void 0, false, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 649,
                            columnNumber: 1809
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                                    className: "w-4 h-4 text-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                                    lineNumber: 649,
                                                    columnNumber: 2009
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-600 dark:text-gray-400",
                                                    children: "Tech Level"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                                    lineNumber: 649,
                                                    columnNumber: 2051
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                                            lineNumber: 649,
                                            columnNumber: 1968
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: Array.from({
                                                length: 10
                                            }).map({
                                                "StartupSimulatorPage[(anonymous)()]": (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-2 h-4 rounded-sm ${i < startup.techLevel ? "bg-blue-500" : "bg-gray-200 dark:bg-gray-700"}`
                                                    }, i, false, {
                                                        fileName: "[project]/src/app/more/games/startup/page.tsx",
                                                        lineNumber: 652,
                                                        columnNumber: 66
                                                    }, this)
                                            }["StartupSimulatorPage[(anonymous)()]"])
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                                            lineNumber: 649,
                                            columnNumber: 2133
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 649,
                                    columnNumber: 1917
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"], {
                                                    className: "w-4 h-4 text-orange-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                                    lineNumber: 653,
                                                    columnNumber: 161
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-600 dark:text-gray-400",
                                                    children: "Marketing"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                                    lineNumber: 653,
                                                    columnNumber: 210
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                                            lineNumber: 653,
                                            columnNumber: 120
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: Array.from({
                                                length: 10
                                            }).map({
                                                "StartupSimulatorPage[(anonymous)()]": (__0, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-2 h-4 rounded-sm ${i_0 < startup.marketingLevel ? "bg-orange-500" : "bg-gray-200 dark:bg-gray-700"}`
                                                    }, i_0, false, {
                                                        fileName: "[project]/src/app/more/games/startup/page.tsx",
                                                        lineNumber: 656,
                                                        columnNumber: 70
                                                    }, this)
                                            }["StartupSimulatorPage[(anonymous)()]"])
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                                            lineNumber: 653,
                                            columnNumber: 291
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 653,
                                    columnNumber: 69
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    className: "w-4 h-4 text-amber-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                                    lineNumber: 657,
                                                    columnNumber: 161
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-600 dark:text-gray-400",
                                                    children: "Reputation"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                                    lineNumber: 657,
                                                    columnNumber: 204
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                                            lineNumber: 657,
                                            columnNumber: 120
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-gray-900 dark:text-white",
                                            children: [
                                                startup.reputation,
                                                "/100"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                                            lineNumber: 657,
                                            columnNumber: 286
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 657,
                                    columnNumber: 69
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                                    className: "w-4 h-4 text-purple-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                                    lineNumber: 657,
                                                    columnNumber: 483
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-600 dark:text-gray-400",
                                                    children: "Employees"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                                    lineNumber: 657,
                                                    columnNumber: 532
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                                            lineNumber: 657,
                                            columnNumber: 442
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-gray-900 dark:text-white",
                                            children: startup.employees
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                                            lineNumber: 657,
                                            columnNumber: 613
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 657,
                                    columnNumber: 391
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 649,
                            columnNumber: 1890
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                    lineNumber: 649,
                    columnNumber: 1707
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-3 gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "StartupSimulatorPage[<button>.onClick]": ()=>invest("tech")
                            }["StartupSimulatorPage[<button>.onClick]"],
                            disabled: startup.cash < 30000,
                            className: "p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                    className: "w-6 h-6 text-blue-500 mx-auto mb-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 659,
                                    columnNumber: 268
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-medium text-gray-900 dark:text-white",
                                    children: "Upgrade Tech"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 659,
                                    columnNumber: 323
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500",
                                    children: "$30K"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 659,
                                    columnNumber: 404
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 657,
                            columnNumber: 765
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "StartupSimulatorPage[<button>.onClick]": ()=>invest("marketing")
                            }["StartupSimulatorPage[<button>.onClick]"],
                            disabled: startup.cash < 20000,
                            className: "p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"], {
                                    className: "w-6 h-6 text-orange-500 mx-auto mb-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 661,
                                    columnNumber: 270
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-medium text-gray-900 dark:text-white",
                                    children: "Marketing"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 661,
                                    columnNumber: 332
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500",
                                    children: "$20K"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 661,
                                    columnNumber: 410
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 659,
                            columnNumber: 458
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "StartupSimulatorPage[<button>.onClick]": ()=>invest("hiring")
                            }["StartupSimulatorPage[<button>.onClick]"],
                            disabled: startup.cash < 50000,
                            className: "p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                    className: "w-6 h-6 text-purple-500 mx-auto mb-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 663,
                                    columnNumber: 270
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-medium text-gray-900 dark:text-white",
                                    children: "Hire"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 663,
                                    columnNumber: 328
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500",
                                    children: "$50K"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 663,
                                    columnNumber: 401
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 661,
                            columnNumber: 464
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                    lineNumber: 657,
                    columnNumber: 725
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                    className: "w-5 h-5 text-amber-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 663,
                                    columnNumber: 650
                                }, this),
                                "Milestones"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 663,
                            columnNumber: 563
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: milestones.map(_StartupSimulatorPageMilestonesMap)
                        }, void 0, false, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 663,
                            columnNumber: 710
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                    lineNumber: 663,
                    columnNumber: 461
                }, this)
            ]
        }, "playing", true, {
            fileName: "[project]/src/app/more/games/startup/page.tsx",
            lineNumber: 639,
            columnNumber: 38
        }, this);
        $[41] = gamePhase;
        $[42] = gameSpeed;
        $[43] = invest;
        $[44] = isPaused;
        $[45] = milestones;
        $[46] = startup.cash;
        $[47] = startup.employees;
        $[48] = startup.marketingLevel;
        $[49] = startup.month;
        $[50] = startup.reputation;
        $[51] = startup.revenue;
        $[52] = startup.techLevel;
        $[53] = startup.users;
        $[54] = startup.valuation;
        $[55] = t20;
    } else {
        t20 = $[55];
    }
    let t21;
    if ($[56] !== currentEvent || $[57] !== gamePhase) {
        t21 = gamePhase === "event" && currentEvent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                scale: 0.9
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            exit: {
                opacity: 0,
                scale: 0.9
            },
            className: "space-y-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `p-6 rounded-xl border-2 ${currentEvent.type === "opportunity" ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800" : currentEvent.type === "challenge" ? "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800" : "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-3",
                        children: [
                            currentEvent.type === "opportunity" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "w-6 h-6 text-green-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/more/games/startup/page.tsx",
                                lineNumber: 693,
                                columnNumber: 449
                            }, this) : currentEvent.type === "challenge" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-6 h-6 text-red-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/more/games/startup/page.tsx",
                                lineNumber: 693,
                                columnNumber: 539
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"], {
                                className: "w-6 h-6 text-blue-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/more/games/startup/page.tsx",
                                lineNumber: 693,
                                columnNumber: 590
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-gray-900 dark:text-white",
                                children: currentEvent.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/more/games/startup/page.tsx",
                                lineNumber: 693,
                                columnNumber: 638
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/more/games/startup/page.tsx",
                        lineNumber: 693,
                        columnNumber: 364
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 dark:text-gray-300 mb-6",
                        children: currentEvent.description
                    }, void 0, false, {
                        fileName: "[project]/src/app/more/games/startup/page.tsx",
                        lineNumber: 693,
                        columnNumber: 733
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: currentEvent.choices.map({
                            "StartupSimulatorPage[currentEvent.choices.map()]": (choice_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "StartupSimulatorPage[currentEvent.choices.map() > <button>.onClick]": ()=>handleEventChoice(choice_0)
                                    }["StartupSimulatorPage[currentEvent.choices.map() > <button>.onClick]"],
                                    className: "w-full p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-rose-500 transition-all text-left",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-gray-900 dark:text-white",
                                                children: choice_0.text
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/more/games/startup/page.tsx",
                                                lineNumber: 696,
                                                columnNumber: 289
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-purple-600",
                                                children: [
                                                    "+",
                                                    choice_0.xpReward,
                                                    " XP"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/more/games/startup/page.tsx",
                                                lineNumber: 696,
                                                columnNumber: 371
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/more/games/startup/page.tsx",
                                        lineNumber: 696,
                                        columnNumber: 238
                                    }, this)
                                }, choice_0.id, false, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 694,
                                    columnNumber: 77
                                }, this)
                        }["StartupSimulatorPage[currentEvent.choices.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/src/app/more/games/startup/page.tsx",
                        lineNumber: 693,
                        columnNumber: 816
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/more/games/startup/page.tsx",
                lineNumber: 693,
                columnNumber: 30
            }, this)
        }, "event", false, {
            fileName: "[project]/src/app/more/games/startup/page.tsx",
            lineNumber: 684,
            columnNumber: 52
        }, this);
        $[56] = currentEvent;
        $[57] = gamePhase;
        $[58] = t21;
    } else {
        t21 = $[58];
    }
    let t22;
    if ($[59] !== achievedMilestone || $[60] !== gamePhase) {
        t22 = gamePhase === "milestone" && achievedMilestone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                scale: 0.9
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            exit: {
                opacity: 0,
                scale: 0.9
            },
            className: "text-center py-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scale: 0
                    },
                    animate: {
                        scale: 1
                    },
                    transition: {
                        type: "spring",
                        bounce: 0.5
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                        className: "w-20 h-20 text-amber-500 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/more/games/startup/page.tsx",
                        lineNumber: 722,
                        columnNumber: 10
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                    lineNumber: 715,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-gray-900 dark:text-white mb-2",
                    children: "Milestone Achieved!"
                }, void 0, false, {
                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                    lineNumber: 722,
                    columnNumber: 83
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl text-rose-600 dark:text-rose-400 mb-2",
                    children: achievedMilestone.title
                }, void 0, false, {
                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                    lineNumber: 722,
                    columnNumber: 177
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 mb-6",
                    children: achievedMilestone.description
                }, void 0, false, {
                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                    lineNumber: 722,
                    columnNumber: 269
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                            className: "w-5 h-5 text-purple-600"
                        }, void 0, false, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 722,
                            columnNumber: 450
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold text-purple-600",
                            children: [
                                "+",
                                achievedMilestone.xpReward,
                                " XP"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 722,
                            columnNumber: 493
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                    lineNumber: 722,
                    columnNumber: 338
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                    lineNumber: 722,
                    columnNumber: 586
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: continueMilestone,
                    className: "px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-semibold transition-colors",
                    children: "Continue"
                }, void 0, false, {
                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                    lineNumber: 722,
                    columnNumber: 592
                }, this)
            ]
        }, "milestone", true, {
            fileName: "[project]/src/app/more/games/startup/page.tsx",
            lineNumber: 706,
            columnNumber: 61
        }, this);
        $[59] = achievedMilestone;
        $[60] = gamePhase;
        $[61] = t22;
    } else {
        t22 = $[61];
    }
    let t23;
    if ($[62] !== gamePhase || $[63] !== milestones || $[64] !== startup.cash || $[65] !== startup.month || $[66] !== startup.name || $[67] !== startup.users || $[68] !== startup.valuation || $[69] !== totalXpEarned) {
        t23 = gamePhase === "ended" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                scale: 0.9
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            exit: {
                opacity: 0,
                scale: 0.9
            },
            className: "text-center py-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-20 h-20 bg-gradient-to-br from-rose-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                        className: "w-10 h-10 text-white"
                    }, void 0, false, {
                        fileName: "[project]/src/app/more/games/startup/page.tsx",
                        lineNumber: 740,
                        columnNumber: 170
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                    lineNumber: 740,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-gray-900 dark:text-white mb-2",
                    children: startup.cash < -100000 ? "Game Over - Bankrupt!" : "Simulation Complete!"
                }, void 0, false, {
                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                    lineNumber: 740,
                    columnNumber: 222
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 mb-6",
                    children: [
                        startup.name,
                        " ran for ",
                        Math.floor(startup.month / 12),
                        " years and ",
                        startup.month % 12,
                        " months"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                    lineNumber: 740,
                    columnNumber: 372
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl font-bold text-gray-900 dark:text-white",
                                    children: formatMoney(startup.valuation)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 740,
                                    columnNumber: 667
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500",
                                    children: "Final Valuation"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 740,
                                    columnNumber: 767
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 740,
                            columnNumber: 565
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl font-bold text-gray-900 dark:text-white",
                                    children: formatNumber(startup.users)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 740,
                                    columnNumber: 931
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500",
                                    children: "Total Users"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 740,
                                    columnNumber: 1028
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 740,
                            columnNumber: 829
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl font-bold text-gray-900 dark:text-white",
                                    children: [
                                        milestones.filter(_StartupSimulatorPageMilestonesFilter).length,
                                        "/",
                                        milestones.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 740,
                                    columnNumber: 1188
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500",
                                    children: "Milestones"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 740,
                                    columnNumber: 1341
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 740,
                            columnNumber: 1086
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl font-bold text-purple-600",
                                    children: [
                                        "+",
                                        totalXpEarned
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 740,
                                    columnNumber: 1500
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500",
                                    children: "XP Earned"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 740,
                                    columnNumber: 1570
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 740,
                            columnNumber: 1398
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                    lineNumber: 740,
                    columnNumber: 503
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3 justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: resetGame,
                            className: "px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-medium transition-colors flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                                    lineNumber: 740,
                                    columnNumber: 1890
                                }, this),
                                "Play Again"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 740,
                            columnNumber: 1675
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/more/games",
                            className: "px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-medium transition-colors",
                            children: "Back to Games"
                        }, void 0, false, {
                            fileName: "[project]/src/app/more/games/startup/page.tsx",
                            lineNumber: 740,
                            columnNumber: 1942
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/more/games/startup/page.tsx",
                    lineNumber: 740,
                    columnNumber: 1632
                }, this)
            ]
        }, "ended", true, {
            fileName: "[project]/src/app/more/games/startup/page.tsx",
            lineNumber: 731,
            columnNumber: 36
        }, this);
        $[62] = gamePhase;
        $[63] = milestones;
        $[64] = startup.cash;
        $[65] = startup.month;
        $[66] = startup.name;
        $[67] = startup.users;
        $[68] = startup.valuation;
        $[69] = totalXpEarned;
        $[70] = t23;
    } else {
        t23 = $[70];
    }
    let t24;
    if ($[71] !== t19 || $[72] !== t20 || $[73] !== t21 || $[74] !== t22 || $[75] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto px-4 py-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: [
                    t19,
                    t20,
                    t21,
                    t22,
                    t23
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/more/games/startup/page.tsx",
                lineNumber: 755,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/more/games/startup/page.tsx",
            lineNumber: 755,
            columnNumber: 11
        }, this);
        $[71] = t19;
        $[72] = t20;
        $[73] = t21;
        $[74] = t22;
        $[75] = t23;
        $[76] = t24;
    } else {
        t24 = $[76];
    }
    let t25;
    if ($[77] !== t18 || $[78] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$ProtectedRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProtectedRoute"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gray-50 dark:bg-gray-900",
                children: [
                    t18,
                    t24
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/more/games/startup/page.tsx",
                lineNumber: 767,
                columnNumber: 27
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/more/games/startup/page.tsx",
            lineNumber: 767,
            columnNumber: 11
        }, this);
        $[77] = t18;
        $[78] = t24;
        $[79] = t25;
    } else {
        t25 = $[79];
    }
    return t25;
}
_s(StartupSimulatorPage, "nM40aQ5ZkhRp90fCEaaTu4unXwY=");
_c = StartupSimulatorPage;
function _StartupSimulatorPageMilestonesFilter(m_2) {
    return m_2.achieved;
}
function _StartupSimulatorPageMilestonesMap(milestone) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center justify-between p-2 rounded-lg ${milestone.achieved ? "bg-green-50 dark:bg-green-900/20" : "bg-gray-50 dark:bg-gray-700/50"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    milestone.achieved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "w-5 h-5 text-green-500"
                    }, void 0, false, {
                        fileName: "[project]/src/app/more/games/startup/page.tsx",
                        lineNumber: 780,
                        columnNumber: 254
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                        className: "w-5 h-5 text-gray-400"
                    }, void 0, false, {
                        fileName: "[project]/src/app/more/games/startup/page.tsx",
                        lineNumber: 780,
                        columnNumber: 308
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-sm ${milestone.achieved ? "text-green-700 dark:text-green-300" : "text-gray-600 dark:text-gray-400"}`,
                        children: milestone.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/more/games/startup/page.tsx",
                        lineNumber: 780,
                        columnNumber: 353
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/more/games/startup/page.tsx",
                lineNumber: 780,
                columnNumber: 191
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-purple-600 dark:text-purple-400",
                children: [
                    "+",
                    milestone.xpReward,
                    " XP"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/more/games/startup/page.tsx",
                lineNumber: 780,
                columnNumber: 509
            }, this)
        ]
    }, milestone.id, true, {
        fileName: "[project]/src/app/more/games/startup/page.tsx",
        lineNumber: 780,
        columnNumber: 10
    }, this);
}
function _StartupSimulatorPageFormatNumber(num) {
    if (num >= 1000000) {
        return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
        return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
}
function _StartupSimulatorPageFormatMoney(amount) {
    if (amount >= 1000000000) {
        return `$${(amount / 1000000000).toFixed(1)}B`;
    }
    if (amount >= 1000000) {
        return `$${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
        return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount.toFixed(0)}`;
}
function _StartupSimulatorPageResetGameMILESTONESMap(m_1) {
    return {
        ...m_1,
        achieved: false
    };
}
function _StartupSimulatorPageUseEffectSetIntervalSetStartup(prev) {
    const userGrowth = Math.floor(prev.users * 0.1 * prev.marketingLevel + prev.reputation * 2);
    const monthlyRevenue = Math.floor(prev.users * 0.5 * prev.techLevel);
    const monthlyCosts = prev.employees * 8000 + prev.marketingLevel * 5000 + prev.techLevel * 3000;
    const newCash = prev.cash + monthlyRevenue - monthlyCosts;
    const newValuation = Math.max(50000, prev.users * 100 + prev.revenue * 12 + prev.techLevel * 50000 + prev.reputation * 10000);
    return {
        ...prev,
        month: prev.month + 1,
        users: prev.users + userGrowth,
        revenue: monthlyRevenue,
        cash: newCash,
        valuation: newValuation
    };
}
function _StartupSimulatorPageMILESTONESMap(m) {
    return {
        ...m,
        achieved: false
    };
}
var _c;
__turbopack_context__.k.register(_c, "StartupSimulatorPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_40b45c88._.js.map