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
"[project]/src/lib/api/notifications.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Notifications API - Complete API client for Notifications endpoints
__turbopack_context__.s([
    "getNotifications",
    ()=>getNotifications,
    "getUnreadNotificationCount",
    ()=>getUnreadNotificationCount,
    "markAllNotificationsAsRead",
    ()=>markAllNotificationsAsRead,
    "markNotificationsAsRead",
    ()=>markNotificationsAsRead
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/client.ts [app-client] (ecmascript)");
;
async function getNotifications(cursor, limit = 20, unreadOnly = false) {
    const params = {
        limit
    };
    if (cursor) params.cursor = cursor;
    if (unreadOnly) params.unreadOnly = 'true';
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/notifications', {
        params
    });
}
async function getUnreadNotificationCount() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/notifications/unread-count');
}
async function markNotificationsAsRead(notificationIds) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/notifications/read', {
        notificationIds
    });
}
async function markAllNotificationsAsRead() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/notifications/read-all');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/notifications/Notifications.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationBell",
    ()=>NotificationBell,
    "Notifications",
    ()=>Notifications,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$at$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AtSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/at-sign.js [app-client] (ecmascript) <export default as AtSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check-check.js [app-client] (ecmascript) <export default as CheckCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$party$2d$popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PartyPopper$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/party-popper.js [app-client] (ecmascript) <export default as PartyPopper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HandHeart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hand-heart.js [app-client] (ecmascript) <export default as HandHeart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [app-client] (ecmascript) <export default as ThumbsUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/formatDistanceToNow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/notifications.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/socket.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
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
// Get icon for notification type
function getNotificationIcon(type, reactionType) {
    switch(type){
        case 'POST_REACTION':
            // Show specific reaction icon
            switch(reactionType){
                case 'CELEBRATE':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$party$2d$popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PartyPopper$3e$__["PartyPopper"], {
                        className: "w-5 h-5 text-yellow-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/notifications/Notifications.tsx",
                        lineNumber: 20,
                        columnNumber: 18
                    }, this);
                case 'SUPPORT':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HandHeart$3e$__["HandHeart"], {
                        className: "w-5 h-5 text-green-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/notifications/Notifications.tsx",
                        lineNumber: 22,
                        columnNumber: 18
                    }, this);
                case 'INSIGHTFUL':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                        className: "w-5 h-5 text-amber-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/notifications/Notifications.tsx",
                        lineNumber: 24,
                        columnNumber: 18
                    }, this);
                case 'CURIOUS':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                        className: "w-5 h-5 text-purple-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/notifications/Notifications.tsx",
                        lineNumber: 26,
                        columnNumber: 18
                    }, this);
                default:
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"], {
                        className: "w-5 h-5 text-blue-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/notifications/Notifications.tsx",
                        lineNumber: 28,
                        columnNumber: 18
                    }, this);
            }
        case 'POST_LIKE':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"], {
                className: "w-5 h-5 text-blue-500"
            }, void 0, false, {
                fileName: "[project]/src/components/notifications/Notifications.tsx",
                lineNumber: 31,
                columnNumber: 14
            }, this);
        case 'COMMENT':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                className: "w-5 h-5 text-green-500"
            }, void 0, false, {
                fileName: "[project]/src/components/notifications/Notifications.tsx",
                lineNumber: 33,
                columnNumber: 14
            }, this);
        case 'COMMENT_LIKE':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                className: "w-5 h-5 text-red-500"
            }, void 0, false, {
                fileName: "[project]/src/components/notifications/Notifications.tsx",
                lineNumber: 35,
                columnNumber: 14
            }, this);
        case 'MENTION':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$at$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AtSign$3e$__["AtSign"], {
                className: "w-5 h-5 text-purple-500"
            }, void 0, false, {
                fileName: "[project]/src/components/notifications/Notifications.tsx",
                lineNumber: 37,
                columnNumber: 14
            }, this);
        case 'CONNECTION_REQUEST':
        case 'CONNECTION_ACCEPTED':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                className: "w-5 h-5 text-blue-500"
            }, void 0, false, {
                fileName: "[project]/src/components/notifications/Notifications.tsx",
                lineNumber: 40,
                columnNumber: 14
            }, this);
        case 'GROUP_INVITE':
        case 'GROUP_JOIN_REQUEST':
        case 'GROUP_JOIN_APPROVED':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                className: "w-5 h-5 text-indigo-500"
            }, void 0, false, {
                fileName: "[project]/src/components/notifications/Notifications.tsx",
                lineNumber: 44,
                columnNumber: 14
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                className: "w-5 h-5 text-gray-500"
            }, void 0, false, {
                fileName: "[project]/src/components/notifications/Notifications.tsx",
                lineNumber: 46,
                columnNumber: 14
            }, this);
    }
}
// Get notification message
function getNotificationMessage(notification) {
    const actorName = notification.actor?.name || 'Someone';
    switch(notification.type){
        case 'POST_REACTION':
            const reactionLabels = {
                LIKE: 'liked',
                CELEBRATE: 'celebrated',
                SUPPORT: 'supported',
                INSIGHTFUL: 'found insightful',
                CURIOUS: 'is curious about'
            };
            const action = reactionLabels[notification.reactionType || 'LIKE'] || 'reacted to';
            return `${actorName} ${action} your post`;
        case 'POST_LIKE':
            return `${actorName} liked your post`;
        case 'COMMENT':
            return `${actorName} commented on your post`;
        case 'COMMENT_LIKE':
            return `${actorName} liked your comment`;
        case 'MENTION':
            return `${actorName} mentioned you`;
        case 'CONNECTION_REQUEST':
            return `${actorName} sent you a connection request`;
        case 'CONNECTION_ACCEPTED':
            return `${actorName} accepted your connection request`;
        case 'POLL_VOTE':
            return `${actorName} voted on your poll`;
        case 'POST_SHARE':
            return `${actorName} shared your post`;
        case 'GROUP_INVITE':
            return `${actorName} invited you to join ${notification.content || 'a group'}`;
        case 'GROUP_JOIN_REQUEST':
            return `${actorName} requested to join your group`;
        case 'GROUP_JOIN_APPROVED':
            return `Your request to join ${notification.content || 'the group'} was approved`;
        default:
            return `${actorName} interacted with your content`;
    }
}
function NotificationItem(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(48);
    if ($[0] !== "75d6b8d834fcc6c9489c3755b91d91b92a119d528d4bde796f1e40ebe0140436") {
        for(let $i = 0; $i < 48; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "75d6b8d834fcc6c9489c3755b91d91b92a119d528d4bde796f1e40ebe0140436";
    }
    const { notification, onMarkRead } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    if ($[1] !== notification.actor || $[2] !== notification.commentId || $[3] !== notification.id || $[4] !== notification.isRead || $[5] !== notification.postId || $[6] !== notification.type || $[7] !== onMarkRead || $[8] !== router) {
        t1 = ({
            "NotificationItem[handleClick]": ()=>{
                if (!notification.isRead) {
                    onMarkRead(notification.id);
                }
                if (notification.type === "GROUP_INVITE" || notification.type === "GROUP_JOIN_APPROVED") {
                    router.push("/groups?tab=invites");
                } else {
                    if (notification.postId) {
                        if (notification.commentId) {
                            router.push(`/post/${notification.postId}?comment=${notification.commentId}`);
                        } else {
                            router.push(`/post/${notification.postId}`);
                        }
                    } else {
                        if (notification.type === "CONNECTION_REQUEST" || notification.type === "CONNECTION_ACCEPTED") {
                            if (notification.actor) {
                                router.push(`/profile/${notification.actor.username}`);
                            }
                        }
                    }
                }
            }
        })["NotificationItem[handleClick]"];
        $[1] = notification.actor;
        $[2] = notification.commentId;
        $[3] = notification.id;
        $[4] = notification.isRead;
        $[5] = notification.postId;
        $[6] = notification.type;
        $[7] = onMarkRead;
        $[8] = router;
        $[9] = t1;
    } else {
        t1 = $[9];
    }
    const handleClick = t1;
    let t2;
    let t3;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 0,
            x: -20
        };
        t3 = {
            opacity: 1,
            x: 0
        };
        $[10] = t2;
        $[11] = t3;
    } else {
        t2 = $[10];
        t3 = $[11];
    }
    const t4 = `w-full flex items-start gap-3 p-4 text-left transition-colors ${notification.isRead ? "bg-transparent hover:bg-gray-50 dark:hover:bg-neutral-800/50" : "bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30"}`;
    let t5;
    if ($[12] !== notification.actor) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-neutral-700",
            children: notification.actor?.profileImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: notification.actor.profileImage,
                alt: notification.actor.name,
                width: 48,
                height: 48,
                className: "w-full h-full object-cover"
            }, void 0, false, {
                fileName: "[project]/src/components/notifications/Notifications.tsx",
                lineNumber: 166,
                columnNumber: 134
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full flex items-center justify-center font-bold text-gray-500",
                children: notification.actor?.name?.charAt(0).toUpperCase() || "?"
            }, void 0, false, {
                fileName: "[project]/src/components/notifications/Notifications.tsx",
                lineNumber: 166,
                columnNumber: 276
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/notifications/Notifications.tsx",
            lineNumber: 166,
            columnNumber: 10
        }, this);
        $[12] = notification.actor;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] !== notification.reactionType || $[15] !== notification.type) {
        t6 = getNotificationIcon(notification.type, notification.reactionType);
        $[14] = notification.reactionType;
        $[15] = notification.type;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    let t7;
    if ($[17] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -bottom-1 -right-1 p-1 rounded-full bg-white dark:bg-neutral-900",
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/components/notifications/Notifications.tsx",
            lineNumber: 183,
            columnNumber: 10
        }, this);
        $[17] = t6;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    let t8;
    if ($[19] !== t5 || $[20] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex-shrink-0",
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/notifications/Notifications.tsx",
            lineNumber: 191,
            columnNumber: 10
        }, this);
        $[19] = t5;
        $[20] = t7;
        $[21] = t8;
    } else {
        t8 = $[21];
    }
    let t9;
    if ($[22] !== notification) {
        t9 = getNotificationMessage(notification);
        $[22] = notification;
        $[23] = t9;
    } else {
        t9 = $[23];
    }
    let t10;
    if ($[24] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-900 dark:text-white",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/components/notifications/Notifications.tsx",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        $[24] = t9;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    let t11;
    if ($[26] !== notification.content) {
        t11 = notification.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500 dark:text-neutral-400 line-clamp-2 mt-1",
            children: [
                '"',
                notification.content,
                '"'
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/notifications/Notifications.tsx",
            lineNumber: 216,
            columnNumber: 35
        }, this);
        $[26] = notification.content;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] !== notification.content || $[29] !== notification.postPreview) {
        t12 = notification.postPreview && !notification.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500 dark:text-neutral-400 line-clamp-1 mt-1",
            children: notification.postPreview
        }, void 0, false, {
            fileName: "[project]/src/components/notifications/Notifications.tsx",
            lineNumber: 224,
            columnNumber: 64
        }, this);
        $[28] = notification.content;
        $[29] = notification.postPreview;
        $[30] = t12;
    } else {
        t12 = $[30];
    }
    let t13;
    if ($[31] !== notification.createdAt) {
        t13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDistanceToNow"])(new Date(notification.createdAt), {
            addSuffix: true
        });
        $[31] = notification.createdAt;
        $[32] = t13;
    } else {
        t13 = $[32];
    }
    let t14;
    if ($[33] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-400 dark:text-neutral-500 mt-1",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/components/notifications/Notifications.tsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[33] = t13;
        $[34] = t14;
    } else {
        t14 = $[34];
    }
    let t15;
    if ($[35] !== t10 || $[36] !== t11 || $[37] !== t12 || $[38] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 min-w-0",
            children: [
                t10,
                t11,
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/notifications/Notifications.tsx",
            lineNumber: 251,
            columnNumber: 11
        }, this);
        $[35] = t10;
        $[36] = t11;
        $[37] = t12;
        $[38] = t14;
        $[39] = t15;
    } else {
        t15 = $[39];
    }
    let t16;
    if ($[40] !== notification.isRead) {
        t16 = !notification.isRead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-2"
        }, void 0, false, {
            fileName: "[project]/src/components/notifications/Notifications.tsx",
            lineNumber: 262,
            columnNumber: 35
        }, this);
        $[40] = notification.isRead;
        $[41] = t16;
    } else {
        t16 = $[41];
    }
    let t17;
    if ($[42] !== handleClick || $[43] !== t15 || $[44] !== t16 || $[45] !== t4 || $[46] !== t8) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            initial: t2,
            animate: t3,
            onClick: handleClick,
            className: t4,
            children: [
                t8,
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/notifications/Notifications.tsx",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        $[42] = handleClick;
        $[43] = t15;
        $[44] = t16;
        $[45] = t4;
        $[46] = t8;
        $[47] = t17;
    } else {
        t17 = $[47];
    }
    return t17;
}
_s(NotificationItem, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = NotificationItem;
function Notifications({ isOpen = true, onClose, isDropdown = false }) {
    _s1();
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [unreadCount, setUnreadCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Fetch notifications
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Notifications.useEffect": ()=>{
            if (!isOpen) return;
            const fetchNotifications = {
                "Notifications.useEffect.fetchNotifications": async ()=>{
                    setLoading(true);
                    try {
                        const [notifResponse, countRes] = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNotifications"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnreadNotificationCount"])()
                        ]);
                        setNotifications(notifResponse.notifications);
                        setUnreadCount(countRes.count);
                    } catch (error) {
                        console.error('Error fetching notifications:', error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["Notifications.useEffect.fetchNotifications"];
            fetchNotifications();
        }
    }["Notifications.useEffect"], [
        isOpen
    ]);
    // Setup real-time notifications
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Notifications.useEffect": ()=>{
            const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeSocket"])({
                onNotificationMention: {
                    "Notifications.useEffect.socket": ()=>{
                        setUnreadCount({
                            "Notifications.useEffect.socket": (prev)=>prev + 1
                        }["Notifications.useEffect.socket"]);
                        // Refetch to get the new notification
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNotifications"])().then({
                            "Notifications.useEffect.socket": (res)=>setNotifications(res.notifications)
                        }["Notifications.useEffect.socket"]).catch(console.error);
                    }
                }["Notifications.useEffect.socket"],
                onNotificationComment: {
                    "Notifications.useEffect.socket": ()=>{
                        setUnreadCount({
                            "Notifications.useEffect.socket": (prev_0)=>prev_0 + 1
                        }["Notifications.useEffect.socket"]);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNotifications"])().then({
                            "Notifications.useEffect.socket": (res_0)=>setNotifications(res_0.notifications)
                        }["Notifications.useEffect.socket"]).catch(console.error);
                    }
                }["Notifications.useEffect.socket"],
                onNotificationLike: {
                    "Notifications.useEffect.socket": ()=>{
                        setUnreadCount({
                            "Notifications.useEffect.socket": (prev_1)=>prev_1 + 1
                        }["Notifications.useEffect.socket"]);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNotifications"])().then({
                            "Notifications.useEffect.socket": (res_1)=>setNotifications(res_1.notifications)
                        }["Notifications.useEffect.socket"]).catch(console.error);
                    }
                }["Notifications.useEffect.socket"],
                onNotificationReaction: {
                    "Notifications.useEffect.socket": ()=>{
                        setUnreadCount({
                            "Notifications.useEffect.socket": (prev_2)=>prev_2 + 1
                        }["Notifications.useEffect.socket"]);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNotifications"])().then({
                            "Notifications.useEffect.socket": (res_2)=>setNotifications(res_2.notifications)
                        }["Notifications.useEffect.socket"]).catch(console.error);
                    }
                }["Notifications.useEffect.socket"],
                onNotificationCommentLike: {
                    "Notifications.useEffect.socket": ()=>{
                        setUnreadCount({
                            "Notifications.useEffect.socket": (prev_3)=>prev_3 + 1
                        }["Notifications.useEffect.socket"]);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNotifications"])().then({
                            "Notifications.useEffect.socket": (res_3)=>setNotifications(res_3.notifications)
                        }["Notifications.useEffect.socket"]).catch(console.error);
                    }
                }["Notifications.useEffect.socket"]
            });
            return ({
                "Notifications.useEffect": ()=>{
                // Cleanup listeners if needed
                }
            })["Notifications.useEffect"];
        }
    }["Notifications.useEffect"], []);
    // Mark notification as read
    const handleMarkRead = async (id)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markNotificationsAsRead"])([
                id
            ]);
            setNotifications((prev_4)=>prev_4.map((n)=>n.id === id ? {
                        ...n,
                        isRead: true
                    } : n));
            setUnreadCount((prev_5)=>Math.max(0, prev_5 - 1));
        } catch (error_0) {
            console.error('Error marking notification as read:', error_0);
        }
    };
    // Mark all as read
    const handleMarkAllRead = async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markAllNotificationsAsRead"])();
            setNotifications((prev_6)=>prev_6.map((n_0)=>({
                        ...n_0,
                        isRead: true
                    })));
            setUnreadCount(0);
        } catch (error_1) {
            console.error('Error marking all as read:', error_1);
        }
    };
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-neutral-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                className: "w-5 h-5 text-gray-600 dark:text-neutral-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/notifications/Notifications.tsx",
                                lineNumber: 375,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-gray-900 dark:text-white",
                                children: "Notifications"
                            }, void 0, false, {
                                fileName: "[project]/src/components/notifications/Notifications.tsx",
                                lineNumber: 376,
                                columnNumber: 11
                            }, this),
                            unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 py-0.5 text-xs font-medium rounded-full bg-blue-500 text-white",
                                children: unreadCount
                            }, void 0, false, {
                                fileName: "[project]/src/components/notifications/Notifications.tsx",
                                lineNumber: 377,
                                columnNumber: 31
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/notifications/Notifications.tsx",
                        lineNumber: 374,
                        columnNumber: 9
                    }, this),
                    unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleMarkAllRead,
                        className: "flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__["CheckCheck"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/notifications/Notifications.tsx",
                                lineNumber: 383,
                                columnNumber: 13
                            }, this),
                            "Mark all read"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/notifications/Notifications.tsx",
                        lineNumber: 382,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/notifications/Notifications.tsx",
                lineNumber: 373,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `overflow-y-auto ${isDropdown ? 'max-h-96' : 'flex-1'}`,
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center py-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "w-8 h-8 animate-spin text-gray-400"
                    }, void 0, false, {
                        fileName: "[project]/src/components/notifications/Notifications.tsx",
                        lineNumber: 391,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/notifications/Notifications.tsx",
                    lineNumber: 390,
                    columnNumber: 20
                }, this) : notifications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12 px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                            className: "w-12 h-12 mx-auto text-gray-300 dark:text-neutral-600 mb-2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/notifications/Notifications.tsx",
                            lineNumber: 393,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 dark:text-neutral-400",
                            children: "No notifications yet"
                        }, void 0, false, {
                            fileName: "[project]/src/components/notifications/Notifications.tsx",
                            lineNumber: 394,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-400 dark:text-neutral-500",
                            children: "When someone interacts with your content, it will appear here"
                        }, void 0, false, {
                            fileName: "[project]/src/components/notifications/Notifications.tsx",
                            lineNumber: 395,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notifications/Notifications.tsx",
                    lineNumber: 392,
                    columnNumber: 49
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "divide-y divide-gray-100 dark:divide-neutral-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: notifications.map((notification)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationItem, {
                                notification: notification,
                                onMarkRead: handleMarkRead
                            }, notification.id, false, {
                                fileName: "[project]/src/components/notifications/Notifications.tsx",
                                lineNumber: 400,
                                columnNumber: 50
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/notifications/Notifications.tsx",
                        lineNumber: 399,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/notifications/Notifications.tsx",
                    lineNumber: 398,
                    columnNumber: 20
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notifications/Notifications.tsx",
                lineNumber: 389,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
    if (isDropdown) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-80 bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 shadow-xl overflow-hidden",
            children: content
        }, void 0, false, {
            fileName: "[project]/src/components/notifications/Notifications.tsx",
            lineNumber: 406,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 dark:bg-neutral-950",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl mx-auto bg-white dark:bg-neutral-900 min-h-screen border-x border-gray-200 dark:border-neutral-800",
            children: content
        }, void 0, false, {
            fileName: "[project]/src/components/notifications/Notifications.tsx",
            lineNumber: 411,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/notifications/Notifications.tsx",
        lineNumber: 410,
        columnNumber: 10
    }, this);
}
_s1(Notifications, "+4z8GGSHq79k7FQby+5nU653yo8=");
_c1 = Notifications;
function NotificationBell() {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "75d6b8d834fcc6c9489c3755b91d91b92a119d528d4bde796f1e40ebe0140436") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "75d6b8d834fcc6c9489c3755b91d91b92a119d528d4bde796f1e40ebe0140436";
    }
    const [unreadCount, setUnreadCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showDropdown, setShowDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "NotificationBell[useEffect()]": ()=>{
                const fetchCount = {
                    "NotificationBell[useEffect() > fetchCount]": async ()=>{
                        ;
                        try {
                            const { count } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnreadNotificationCount"])();
                            setUnreadCount(count);
                        } catch (t2) {
                            const error = t2;
                            console.error("Error fetching notification count:", error);
                        }
                    }
                }["NotificationBell[useEffect() > fetchCount]"];
                fetchCount();
                const interval = setInterval(fetchCount, 30000);
                return ()=>clearInterval(interval);
            }
        })["NotificationBell[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "NotificationBell[useEffect()]": ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeSocket"])({
                    onNotificationMention: ()=>setUnreadCount(_NotificationBellUseEffectAnonymousSetUnreadCount),
                    onNotificationComment: ()=>setUnreadCount(_NotificationBellUseEffectAnonymousSetUnreadCount2),
                    onNotificationLike: ()=>setUnreadCount(_NotificationBellUseEffectAnonymousSetUnreadCount3),
                    onNotificationReaction: ()=>setUnreadCount(_NotificationBellUseEffectAnonymousSetUnreadCount4),
                    onNotificationCommentLike: ()=>setUnreadCount(_NotificationBellUseEffectAnonymousSetUnreadCount5)
                });
            }
        })["NotificationBell[useEffect()]"];
        t3 = [];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[5] !== showDropdown) {
        t4 = ({
            "NotificationBell[<button>.onClick]": ()=>setShowDropdown(!showDropdown)
        })["NotificationBell[<button>.onClick]"];
        $[5] = showDropdown;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
            className: "w-6 h-6 text-gray-600 dark:text-neutral-400"
        }, void 0, false, {
            fileName: "[project]/src/components/notifications/Notifications.tsx",
            lineNumber: 494,
            columnNumber: 10
        }, this);
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== unreadCount) {
        t6 = unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs font-bold text-white bg-red-500 rounded-full",
            children: unreadCount > 9 ? "9+" : unreadCount
        }, void 0, false, {
            fileName: "[project]/src/components/notifications/Notifications.tsx",
            lineNumber: 501,
            columnNumber: 29
        }, this);
        $[8] = unreadCount;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t4 || $[11] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t4,
            className: "relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors",
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/notifications/Notifications.tsx",
            lineNumber: 509,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== showDropdown) {
        t8 = showDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-40",
                    onClick: {
                        "NotificationBell[<div>.onClick]": ()=>setShowDropdown(false)
                    }["NotificationBell[<div>.onClick]"]
                }, void 0, false, {
                    fileName: "[project]/src/components/notifications/Notifications.tsx",
                    lineNumber: 518,
                    columnNumber: 28
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute right-0 top-full mt-2 z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Notifications, {
                        isDropdown: true,
                        onClose: {
                            "NotificationBell[<Notifications>.onClose]": ()=>setShowDropdown(false)
                        }["NotificationBell[<Notifications>.onClose]"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/notifications/Notifications.tsx",
                        lineNumber: 520,
                        columnNumber: 100
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/notifications/Notifications.tsx",
                    lineNumber: 520,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true);
        $[13] = showDropdown;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t7 || $[16] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/notifications/Notifications.tsx",
            lineNumber: 530,
            columnNumber: 10
        }, this);
        $[15] = t7;
        $[16] = t8;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    return t9;
}
_s2(NotificationBell, "kXEFvvzF4FwGsBxsGCwLIo05YU8=");
_c2 = NotificationBell;
function _NotificationBellUseEffectAnonymousSetUnreadCount5(prev_3) {
    return prev_3 + 1;
}
function _NotificationBellUseEffectAnonymousSetUnreadCount4(prev_2) {
    return prev_2 + 1;
}
function _NotificationBellUseEffectAnonymousSetUnreadCount3(prev_1) {
    return prev_1 + 1;
}
function _NotificationBellUseEffectAnonymousSetUnreadCount2(prev_0) {
    return prev_0 + 1;
}
function _NotificationBellUseEffectAnonymousSetUnreadCount(prev) {
    return prev + 1;
}
const __TURBOPACK__default__export__ = Notifications;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "NotificationItem");
__turbopack_context__.k.register(_c1, "Notifications");
__turbopack_context__.k.register(_c2, "NotificationBell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/firebase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFirebaseApp",
    ()=>getFirebaseApp,
    "getFirebaseMessaging",
    ()=>getFirebaseMessaging,
    "onForegroundMessage",
    ()=>onForegroundMessage,
    "requestNotificationToken",
    ()=>requestNotificationToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$messaging$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/messaging/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$messaging$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/messaging/dist/esm/index.esm.js [app-client] (ecmascript)");
;
;
const firebaseConfig = {
    apiKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FIREBASE_APP_ID
};
let app = null;
let messaging = null;
function getFirebaseApp() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!firebaseConfig.apiKey || !firebaseConfig.projectId) return null;
    if (!app) {
        app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])().length === 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])()[0];
    }
    return app;
}
async function getFirebaseMessaging() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const supported = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$messaging$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupported"])();
    if (!supported) return null;
    const firebaseApp = getFirebaseApp();
    if (!firebaseApp) return null;
    if (!messaging) {
        messaging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$messaging$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMessaging"])(firebaseApp);
    }
    return messaging;
}
async function requestNotificationToken() {
    try {
        const permission = await Notification.requestPermission();
        if (permission !== 'granted') return null;
        const msg = await getFirebaseMessaging();
        if (!msg) return null;
        const vapidKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FIREBASE_VAPID_KEY;
        if (!vapidKey) {
            console.warn('NEXT_PUBLIC_FIREBASE_VAPID_KEY not set');
            return null;
        }
        const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$messaging$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getToken"])(msg, {
            vapidKey,
            serviceWorkerRegistration: await navigator.serviceWorker.register('/firebase-messaging-sw.js')
        });
        return token;
    } catch (err) {
        console.error('Failed to get notification token:', err);
        return null;
    }
}
function onForegroundMessage(callback) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    getFirebaseMessaging().then((msg)=>{
        if (!msg) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$messaging$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onMessage"])(msg, callback);
    });
    // Firebase onMessage doesn't return a clean unsubscribe for async init,
    // so we return a no-op. The listener is tied to page lifecycle.
    return ()=>{};
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/usePushNotifications.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePushNotifications",
    ()=>usePushNotifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/client.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function usePushNotifications(userId) {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isSupported: false,
        isPermissionGranted: false,
        isTokenRegistered: false,
        isLoading: false
    });
    const [foregroundNotification, setForegroundNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const registeredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Check support on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePushNotifications.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const supported = 'Notification' in window && 'serviceWorker' in navigator;
            const granted = supported && Notification.permission === 'granted';
            setState({
                "usePushNotifications.useEffect": (prev)=>({
                        ...prev,
                        isSupported: supported,
                        isPermissionGranted: granted
                    })
            }["usePushNotifications.useEffect"]);
            // If already granted + user logged in, register silently
            if (granted && userId && !registeredRef.current) {
                registerToken();
            }
        }
    }["usePushNotifications.useEffect"], [
        userId
    ]);
    // Listen for foreground messages
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePushNotifications.useEffect": ()=>{
            if (!state.isPermissionGranted) return;
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onForegroundMessage"])({
                "usePushNotifications.useEffect.unsubscribe": (payload)=>{
                    setForegroundNotification(payload);
                    // Auto-dismiss after 5s
                    setTimeout({
                        "usePushNotifications.useEffect.unsubscribe": ()=>setForegroundNotification(null)
                    }["usePushNotifications.useEffect.unsubscribe"], 5000);
                }
            }["usePushNotifications.useEffect.unsubscribe"]);
            return ({
                "usePushNotifications.useEffect": ()=>{
                    if (unsubscribe) unsubscribe();
                }
            })["usePushNotifications.useEffect"];
        }
    }["usePushNotifications.useEffect"], [
        state.isPermissionGranted
    ]);
    const registerToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePushNotifications.useCallback[registerToken]": async ()=>{
            if (registeredRef.current || state.isLoading) return;
            setState({
                "usePushNotifications.useCallback[registerToken]": (prev_0)=>({
                        ...prev_0,
                        isLoading: true
                    })
            }["usePushNotifications.useCallback[registerToken]"]);
            try {
                const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestNotificationToken"])();
                if (!token) {
                    setState({
                        "usePushNotifications.useCallback[registerToken]": (prev_2)=>({
                                ...prev_2,
                                isLoading: false
                            })
                    }["usePushNotifications.useCallback[registerToken]"]);
                    return;
                }
                // Register with backend
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/devices/register', {
                    token,
                    platform: 'web',
                    deviceId: `web-${navigator.userAgent.slice(0, 50)}`
                });
                registeredRef.current = true;
                setState({
                    "usePushNotifications.useCallback[registerToken]": (prev_3)=>({
                            ...prev_3,
                            isPermissionGranted: true,
                            isTokenRegistered: true,
                            isLoading: false
                        })
                }["usePushNotifications.useCallback[registerToken]"]);
                // Store in localStorage to avoid re-registering
                localStorage.setItem('push_token_registered', 'true');
            } catch (err) {
                console.error('Push notification registration failed:', err);
                setState({
                    "usePushNotifications.useCallback[registerToken]": (prev_1)=>({
                            ...prev_1,
                            isLoading: false
                        })
                }["usePushNotifications.useCallback[registerToken]"]);
            }
        }
    }["usePushNotifications.useCallback[registerToken]"], [
        state.isLoading
    ]);
    const requestPermission = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePushNotifications.useCallback[requestPermission]": async ()=>{
            if (!state.isSupported) return;
            setState({
                "usePushNotifications.useCallback[requestPermission]": (prev_4)=>({
                        ...prev_4,
                        isLoading: true
                    })
            }["usePushNotifications.useCallback[requestPermission]"]);
            try {
                const permission = await Notification.requestPermission();
                if (permission === 'granted') {
                    setState({
                        "usePushNotifications.useCallback[requestPermission]": (prev_6)=>({
                                ...prev_6,
                                isPermissionGranted: true
                            })
                    }["usePushNotifications.useCallback[requestPermission]"]);
                    await registerToken();
                } else {
                    setState({
                        "usePushNotifications.useCallback[requestPermission]": (prev_7)=>({
                                ...prev_7,
                                isLoading: false
                            })
                    }["usePushNotifications.useCallback[requestPermission]"]);
                }
            } catch  {
                setState({
                    "usePushNotifications.useCallback[requestPermission]": (prev_5)=>({
                            ...prev_5,
                            isLoading: false
                        })
                }["usePushNotifications.useCallback[requestPermission]"]);
            }
        }
    }["usePushNotifications.useCallback[requestPermission]"], [
        state.isSupported,
        registerToken
    ]);
    const dismissNotification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePushNotifications.useCallback[dismissNotification]": ()=>{
            setForegroundNotification(null);
        }
    }["usePushNotifications.useCallback[dismissNotification]"], []);
    return {
        ...state,
        foregroundNotification,
        requestPermission,
        dismissNotification
    };
}
_s(usePushNotifications, "7utYUEkErZ2uNVLlrTiq6EsmlEA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/notifications/NotificationPrompt.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationPrompt",
    ()=>NotificationPrompt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2d$ring$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BellRing$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell-ring.js [app-client] (ecmascript) <export default as BellRing>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePushNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePushNotifications.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function NotificationPrompt(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "9f78525901ad17851247facbd38ac529e796be44282f57469e18dfcfd3a81578") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9f78525901ad17851247facbd38ac529e796be44282f57469e18dfcfd3a81578";
    }
    const { userId } = t0;
    const { isSupported, isPermissionGranted, isLoading, foregroundNotification, requestPermission, dismissNotification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePushNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePushNotifications"])(userId);
    const [showPrompt, setShowPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] !== isPermissionGranted || $[2] !== isSupported || $[3] !== userId) {
        t1 = ({
            "NotificationPrompt[useEffect()]": ()=>{
                if (!isSupported || isPermissionGranted || !userId) {
                    return;
                }
                const dismissed = localStorage.getItem("push_prompt_dismissed");
                if (dismissed) {
                    return;
                }
                const visits = parseInt(localStorage.getItem("visit_count") || "0", 10) + 1;
                localStorage.setItem("visit_count", visits.toString());
                if (visits >= 3) {
                    const timer = setTimeout({
                        "NotificationPrompt[useEffect() > setTimeout()]": ()=>setShowPrompt(true)
                    }["NotificationPrompt[useEffect() > setTimeout()]"], 10000);
                    return ()=>clearTimeout(timer);
                }
            }
        })["NotificationPrompt[useEffect()]"];
        t2 = [
            isSupported,
            isPermissionGranted,
            userId
        ];
        $[1] = isPermissionGranted;
        $[2] = isSupported;
        $[3] = userId;
        $[4] = t1;
        $[5] = t2;
    } else {
        t1 = $[4];
        t2 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[6] !== requestPermission) {
        t3 = ({
            "NotificationPrompt[handleEnable]": async ()=>{
                await requestPermission();
                setShowPrompt(false);
            }
        })["NotificationPrompt[handleEnable]"];
        $[6] = requestPermission;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const handleEnable = t3;
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "NotificationPrompt[handleDismiss]": ()=>{
                setShowPrompt(false);
                localStorage.setItem("push_prompt_dismissed", new Date().toISOString());
            }
        })["NotificationPrompt[handleDismiss]"];
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const handleDismiss = t4;
    let t5;
    if ($[9] !== handleEnable || $[10] !== isLoading || $[11] !== showPrompt) {
        t5 = showPrompt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 50,
                scale: 0.9
            },
            animate: {
                opacity: 1,
                y: 0,
                scale: 1
            },
            exit: {
                opacity: 0,
                y: 50,
                scale: 0.9
            },
            className: "fixed bottom-24 left-4 right-4 md:left-auto md:right-6 md:w-96 z-50 bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-neutral-700 overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2d$ring$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BellRing$3e$__["BellRing"], {
                                    className: "w-5 h-5 text-blue-600 dark:text-blue-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notifications/NotificationPrompt.tsx",
                                    lineNumber: 111,
                                    columnNumber: 380
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/notifications/NotificationPrompt.tsx",
                                lineNumber: 111,
                                columnNumber: 264
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-gray-900 dark:text-white mb-1",
                                        children: "Stay in the loop 🔔"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notifications/NotificationPrompt.tsx",
                                        lineNumber: 111,
                                        columnNumber: 475
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 dark:text-neutral-400 leading-relaxed",
                                        children: "Get notified when someone views your profile, accepts your connection, or when your streak is at risk."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notifications/NotificationPrompt.tsx",
                                        lineNumber: 111,
                                        columnNumber: 572
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/notifications/NotificationPrompt.tsx",
                                lineNumber: 111,
                                columnNumber: 451
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleDismiss,
                                className: "p-1 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notifications/NotificationPrompt.tsx",
                                    lineNumber: 111,
                                    columnNumber: 882
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/notifications/NotificationPrompt.tsx",
                                lineNumber: 111,
                                columnNumber: 759
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/notifications/NotificationPrompt.tsx",
                        lineNumber: 111,
                        columnNumber: 224
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleDismiss,
                                className: "flex-1 py-2 px-4 rounded-lg text-sm font-medium text-gray-600 dark:text-neutral-400 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors",
                                children: "Not now"
                            }, void 0, false, {
                                fileName: "[project]/src/components/notifications/NotificationPrompt.tsx",
                                lineNumber: 111,
                                columnNumber: 969
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleEnable,
                                disabled: isLoading,
                                className: "flex-1 py-2 px-4 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notifications/NotificationPrompt.tsx",
                                        lineNumber: 111,
                                        columnNumber: 1407
                                    }, this),
                                    isLoading ? "Enabling..." : "Enable"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/notifications/NotificationPrompt.tsx",
                                lineNumber: 111,
                                columnNumber: 1175
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/notifications/NotificationPrompt.tsx",
                        lineNumber: 111,
                        columnNumber: 936
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/notifications/NotificationPrompt.tsx",
                lineNumber: 111,
                columnNumber: 203
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/notifications/NotificationPrompt.tsx",
            lineNumber: 99,
            columnNumber: 24
        }, this);
        $[9] = handleEnable;
        $[10] = isLoading;
        $[11] = showPrompt;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/notifications/NotificationPrompt.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== dismissNotification || $[16] !== foregroundNotification) {
        t7 = foregroundNotification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: -50,
                x: 50
            },
            animate: {
                opacity: 1,
                y: 0,
                x: 0
            },
            exit: {
                opacity: 0,
                y: -50
            },
            className: "fixed top-4 right-4 z-[100] w-80 bg-white dark:bg-neutral-900 rounded-xl shadow-2xl border border-gray-200 dark:border-neutral-700 overflow-hidden cursor-pointer",
            onClick: dismissNotification,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                    className: "w-4 h-4 text-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notifications/NotificationPrompt.tsx",
                                    lineNumber: 140,
                                    columnNumber: 387
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/notifications/NotificationPrompt.tsx",
                                lineNumber: 140,
                                columnNumber: 273
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-gray-900 dark:text-white truncate",
                                        children: foregroundNotification.notification?.title || "Vormex"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notifications/NotificationPrompt.tsx",
                                        lineNumber: 140,
                                        columnNumber: 467
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 dark:text-neutral-400 line-clamp-2 mt-0.5",
                                        children: foregroundNotification.notification?.body || ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notifications/NotificationPrompt.tsx",
                                        lineNumber: 140,
                                        columnNumber: 603
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/notifications/NotificationPrompt.tsx",
                                lineNumber: 140,
                                columnNumber: 435
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "NotificationPrompt[<button>.onClick]": (e)=>{
                                        e.stopPropagation();
                                        dismissNotification();
                                    }
                                }["NotificationPrompt[<button>.onClick]"],
                                className: "p-0.5 rounded hover:bg-gray-100 dark:hover:bg-neutral-800",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-3.5 h-3.5 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notifications/NotificationPrompt.tsx",
                                    lineNumber: 145,
                                    columnNumber: 124
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/notifications/NotificationPrompt.tsx",
                                lineNumber: 140,
                                columnNumber: 741
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/notifications/NotificationPrompt.tsx",
                        lineNumber: 140,
                        columnNumber: 233
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/notifications/NotificationPrompt.tsx",
                    lineNumber: 140,
                    columnNumber: 212
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        width: "100%"
                    },
                    animate: {
                        width: "0%"
                    },
                    transition: {
                        duration: 5,
                        ease: "linear"
                    },
                    className: "h-0.5 bg-blue-500"
                }, void 0, false, {
                    fileName: "[project]/src/components/notifications/NotificationPrompt.tsx",
                    lineNumber: 145,
                    columnNumber: 188
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/notifications/NotificationPrompt.tsx",
            lineNumber: 129,
            columnNumber: 36
        }, this);
        $[15] = dismissNotification;
        $[16] = foregroundNotification;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    let t8;
    if ($[18] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/notifications/NotificationPrompt.tsx",
            lineNumber: 161,
            columnNumber: 10
        }, this);
        $[18] = t7;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] !== t6 || $[21] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t6,
                t8
            ]
        }, void 0, true);
        $[20] = t6;
        $[21] = t8;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    return t9;
}
_s(NotificationPrompt, "1teMuyPSfjxPzmreac6liVZSGAY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePushNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePushNotifications"]
    ];
});
_c = NotificationPrompt;
var _c;
__turbopack_context__.k.register(_c, "NotificationPrompt");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/notifications/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notifications$2f$Notifications$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notifications/Notifications.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notifications$2f$NotificationPrompt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notifications/NotificationPrompt.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/notifications/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotificationsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$ProtectedRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/ProtectedRoute.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notifications$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/notifications/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notifications$2f$Notifications$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notifications/Notifications.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function NotificationsPage() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "dacf2f0bcd0918ed6255b88f5971dd85607ec6d1dd5f9b6af9c77ec62e1eb3f3") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dacf2f0bcd0918ed6255b88f5971dd85607ec6d1dd5f9b6af9c77ec62e1eb3f3";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$ProtectedRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProtectedRoute"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notifications$2f$Notifications$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Notifications"], {}, void 0, false, {
                fileName: "[project]/src/app/notifications/page.tsx",
                lineNumber: 16,
                columnNumber: 26
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/notifications/page.tsx",
            lineNumber: 16,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = NotificationsPage;
var _c;
__turbopack_context__.k.register(_c, "NotificationsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_b1842e1a._.js.map