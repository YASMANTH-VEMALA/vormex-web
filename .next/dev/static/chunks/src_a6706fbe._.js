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
"[project]/src/lib/api/chat.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addReaction",
    ()=>addReaction,
    "deleteMessage",
    ()=>deleteMessage,
    "editMessage",
    ()=>editMessage,
    "getConversation",
    ()=>getConversation,
    "getConversations",
    ()=>getConversations,
    "getMessages",
    ()=>getMessages,
    "getOrCreateConversation",
    ()=>getOrCreateConversation,
    "getUnreadCount",
    ()=>getUnreadCount,
    "markAsRead",
    ()=>markAsRead,
    "searchMessages",
    ()=>searchMessages,
    "sendMessage",
    ()=>sendMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/client.ts [app-client] (ecmascript)");
;
async function getConversations(limit, cursor) {
    const params = new URLSearchParams();
    if (limit) params.append('limit', String(limit));
    if (cursor) params.append('cursor', cursor);
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/chat/conversations?${params.toString()}`);
}
async function getOrCreateConversation(participantId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/chat/conversations', {
        participantId
    });
}
async function getConversation(conversationId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/chat/conversations/${conversationId}`);
}
async function getMessages(conversationId, limit, cursor) {
    const params = new URLSearchParams();
    if (limit) params.append('limit', String(limit));
    if (cursor) params.append('cursor', cursor);
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/chat/conversations/${conversationId}/messages?${params.toString()}`);
}
async function sendMessage(conversationId, data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/chat/conversations/${conversationId}/messages`, data);
}
async function markAsRead(conversationId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/chat/conversations/${conversationId}/read`);
}
async function deleteMessage(messageId, forEveryone) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/chat/messages/${messageId}`, {
        data: {
            forEveryone
        }
    });
}
async function editMessage(messageId, content) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch(`/chat/messages/${messageId}`, {
        content
    });
}
async function addReaction(messageId, emoji) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/chat/messages/${messageId}/reactions`, {
        emoji
    });
}
async function getUnreadCount() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/chat/unread-count');
}
async function searchMessages(query, limit) {
    const params = new URLSearchParams();
    params.append('q', query);
    if (limit) params.append('limit', String(limit));
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/chat/search?${params.toString()}`);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/chat/ChatList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/chat.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/socket.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/formatDistanceToNow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
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
function ChatList({ selectedConversationId, onSelectConversation, currentUserId }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [conversations, setConversations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [nextCursor, setNextCursor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const fetchConversations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatList.useCallback[fetchConversations]": async (cursor)=>{
            try {
                setLoading(true);
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConversations"])(30, cursor);
                if (cursor) {
                    setConversations({
                        "ChatList.useCallback[fetchConversations]": (prev)=>[
                                ...prev,
                                ...result.conversations
                            ]
                    }["ChatList.useCallback[fetchConversations]"]);
                } else {
                    setConversations(result.conversations);
                }
                setHasMore(result.hasMore);
                setNextCursor(result.nextCursor);
            } catch (err) {
                setError(err.message || 'Failed to load conversations');
            } finally{
                setLoading(false);
            }
        }
    }["ChatList.useCallback[fetchConversations]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatList.useEffect": ()=>{
            fetchConversations();
        }
    }["ChatList.useEffect"], [
        fetchConversations
    ]);
    // Listen for new messages to update conversation list
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatList.useEffect": ()=>{
            const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSocket"])();
            if (!socket) return;
            const handleNewMessage = {
                "ChatList.useEffect.handleNewMessage": (data)=>{
                    setConversations({
                        "ChatList.useEffect.handleNewMessage": (prev_0)=>{
                            const existingIndex = prev_0.findIndex({
                                "ChatList.useEffect.handleNewMessage.existingIndex": (c)=>c.id === data.conversationId
                            }["ChatList.useEffect.handleNewMessage.existingIndex"]);
                            if (existingIndex >= 0) {
                                // Update existing conversation and move to top
                                const updated = [
                                    ...prev_0
                                ];
                                const conv = {
                                    ...updated[existingIndex]
                                };
                                conv.lastMessage = {
                                    id: data.message.id,
                                    content: data.message.content,
                                    contentType: data.message.contentType,
                                    senderId: data.message.senderId,
                                    status: data.message.status,
                                    createdAt: data.message.createdAt
                                };
                                conv.lastMessageAt = data.message.createdAt;
                                // Increment unread if not the sender
                                if (data.message.senderId !== currentUserId && data.conversationId !== selectedConversationId) {
                                    conv.unreadCount = (conv.unreadCount || 0) + 1;
                                }
                                updated.splice(existingIndex, 1);
                                return [
                                    conv,
                                    ...updated
                                ];
                            }
                            // Refresh to get new conversation
                            fetchConversations();
                            return prev_0;
                        }
                    }["ChatList.useEffect.handleNewMessage"]);
                }
            }["ChatList.useEffect.handleNewMessage"];
            const handleMessagesRead = {
                "ChatList.useEffect.handleMessagesRead": (data_0)=>{
                    setConversations({
                        "ChatList.useEffect.handleMessagesRead": (prev_1)=>prev_1.map({
                                "ChatList.useEffect.handleMessagesRead": (c_0)=>c_0.id === data_0.conversationId ? {
                                        ...c_0,
                                        unreadCount: 0
                                    } : c_0
                            }["ChatList.useEffect.handleMessagesRead"])
                    }["ChatList.useEffect.handleMessagesRead"]);
                }
            }["ChatList.useEffect.handleMessagesRead"];
            socket.on('chat:new_message', handleNewMessage);
            socket.on('chat:notification', handleNewMessage);
            socket.on('chat:messages_read', handleMessagesRead);
            return ({
                "ChatList.useEffect": ()=>{
                    socket.off('chat:new_message', handleNewMessage);
                    socket.off('chat:notification', handleNewMessage);
                    socket.off('chat:messages_read', handleMessagesRead);
                }
            })["ChatList.useEffect"];
        }
    }["ChatList.useEffect"], [
        currentUserId,
        selectedConversationId,
        fetchConversations
    ]);
    const handleSelectConversation = (conversation)=>{
        if (onSelectConversation) {
            onSelectConversation(conversation);
        } else {
            router.push(`/messages/${conversation.id}`);
        }
    };
    const loadMore = ()=>{
        if (hasMore && nextCursor) {
            fetchConversations(nextCursor);
        }
    };
    if (loading && conversations.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-64",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatList.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 116,
            columnNumber: 12
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 text-center text-red-500",
            children: [
                error,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>fetchConversations(),
                    className: "block mx-auto mt-2 text-blue-500 hover:underline",
                    children: "Retry"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatList.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 121,
            columnNumber: 12
        }, this);
    }
    if (conversations.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 text-center text-gray-500 dark:text-gray-400",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-4xl mb-4",
                    children: "💬"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatList.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "No conversations yet"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatList.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm mt-2",
                    children: "Start a chat with someone!"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatList.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 129,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto",
            children: [
                conversations.map((conversation_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConversationItem, {
                        conversation: conversation_0,
                        isSelected: selectedConversationId === conversation_0.id,
                        currentUserId: currentUserId,
                        onClick: ()=>handleSelectConversation(conversation_0)
                    }, conversation_0.id, false, {
                        fileName: "[project]/src/components/chat/ChatList.tsx",
                        lineNumber: 137,
                        columnNumber: 46
                    }, this)),
                hasMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: loadMore,
                    disabled: loading,
                    className: "w-full py-3 text-sm text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800",
                    children: loading ? 'Loading...' : 'Load more'
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatList.tsx",
                    lineNumber: 139,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 136,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/chat/ChatList.tsx",
        lineNumber: 135,
        columnNumber: 10
    }, this);
}
_s(ChatList, "/URgqMhZIQg+BR0DAPdR302n1pw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ChatList;
function ConversationItem(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "cfb19d2918bf0f4a1fac8f1fe18f961a6cee2c0b8890b5124f821aaae0e4b238") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cfb19d2918bf0f4a1fac8f1fe18f961a6cee2c0b8890b5124f821aaae0e4b238";
    }
    const { conversation, isSelected, currentUserId, onClick } = t0;
    const other = conversation.otherParticipant;
    const lastMessage = conversation.lastMessage;
    const isUnread = conversation.unreadCount > 0;
    const isSentByMe = lastMessage?.senderId === currentUserId;
    const t1 = isSelected ? "bg-blue-50 dark:bg-blue-900/20" : "hover:bg-gray-50 dark:hover:bg-gray-800/50";
    const t2 = isUnread && !isSelected && "bg-gray-50 dark:bg-gray-800/30";
    let t3;
    if ($[1] !== t1 || $[2] !== t2) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 p-3 cursor-pointer transition-colors border-b border-gray-100 dark:border-gray-800", t1, t2);
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== other.name || $[5] !== other.profileImage) {
        t4 = other.profileImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: other.profileImage,
            alt: other.name,
            className: "w-12 h-12 rounded-full object-cover"
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 186,
            columnNumber: 31
        }, this) : other.name.charAt(0).toUpperCase();
        $[4] = other.name;
        $[5] = other.profileImage;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 195,
            columnNumber: 10
        }, this);
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== other.isOnline) {
        t6 = other.isOnline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 203,
            columnNumber: 28
        }, this);
        $[9] = other.isOnline;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== t5 || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex-shrink-0",
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 211,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    const t8 = isUnread && "text-gray-900 dark:text-white font-semibold";
    let t9;
    if ($[14] !== t8) {
        t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-medium truncate", t8);
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== other.name || $[17] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t9,
            children: other.name
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[16] = other.name;
        $[17] = t9;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== lastMessage) {
        t11 = lastMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-gray-500 flex-shrink-0",
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDistanceToNow"])(new Date(lastMessage.createdAt), {
                addSuffix: false
            })
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 238,
            columnNumber: 26
        }, this);
        $[19] = lastMessage;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== t10 || $[22] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 248,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t11;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== isSentByMe || $[25] !== isUnread || $[26] !== lastMessage) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1",
            children: lastMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    isSentByMe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-400 text-sm",
                        children: lastMessage.status === "READ" ? "\u2713\u2713" : lastMessage.status === "DELIVERED" ? "\u2713\u2713" : "\u2713"
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatList.tsx",
                        lineNumber: 257,
                        columnNumber: 84
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm truncate", isUnread ? "text-gray-900 dark:text-white font-medium" : "text-gray-500 dark:text-gray-400"),
                        children: lastMessage.contentType === "image" ? "\uD83D\uDCF7 Photo" : lastMessage.contentType === "file" ? "\uD83D\uDCCE File" : lastMessage.contentType === "voice" ? "\uD83C\uDFA4 Voice message" : lastMessage.content
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatList.tsx",
                        lineNumber: 257,
                        columnNumber: 245
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-400 italic",
                children: "No messages yet"
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatList.tsx",
                lineNumber: 257,
                columnNumber: 596
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 257,
            columnNumber: 11
        }, this);
        $[24] = isSentByMe;
        $[25] = isUnread;
        $[26] = lastMessage;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    let t14;
    if ($[28] !== t12 || $[29] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 min-w-0",
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[28] = t12;
        $[29] = t13;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] !== conversation.unreadCount || $[32] !== isUnread) {
        t15 = isUnread && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-white font-medium",
                children: conversation.unreadCount > 9 ? "9+" : conversation.unreadCount
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatList.tsx",
                lineNumber: 276,
                columnNumber: 120
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 276,
            columnNumber: 23
        }, this);
        $[31] = conversation.unreadCount;
        $[32] = isUnread;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    let t16;
    if ($[34] !== onClick || $[35] !== t14 || $[36] !== t15 || $[37] !== t3 || $[38] !== t7) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: onClick,
            className: t3,
            children: [
                t7,
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 285,
            columnNumber: 11
        }, this);
        $[34] = onClick;
        $[35] = t14;
        $[36] = t15;
        $[37] = t3;
        $[38] = t7;
        $[39] = t16;
    } else {
        t16 = $[39];
    }
    return t16;
}
_c1 = ConversationItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "ChatList");
__turbopack_context__.k.register(_c1, "ConversationItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/chat/ChatSettingsPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WALLPAPER_OPTIONS",
    ()=>WALLPAPER_OPTIONS,
    "default",
    ()=>ChatSettingsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BellOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell-off.js [app-client] (ecmascript) <export default as BellOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ban.js [app-client] (ecmascript) <export default as Ban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flag.js [app-client] (ecmascript) <export default as Flag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// Default wallpaper options
const WALLPAPER_OPTIONS = [
    {
        id: 'default',
        name: 'Default',
        color: 'bg-gray-50 dark:bg-gray-900',
        preview: null
    },
    {
        id: 'gradient-1',
        name: 'Ocean',
        color: 'bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30',
        preview: null
    },
    {
        id: 'gradient-2',
        name: 'Sunset',
        color: 'bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30',
        preview: null
    },
    {
        id: 'gradient-3',
        name: 'Forest',
        color: 'bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30',
        preview: null
    },
    {
        id: 'gradient-4',
        name: 'Lavender',
        color: 'bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30',
        preview: null
    },
    {
        id: 'gradient-5',
        name: 'Rose',
        color: 'bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30',
        preview: null
    },
    {
        id: 'gradient-6',
        name: 'Midnight',
        color: 'bg-gradient-to-br from-slate-800 to-gray-900',
        preview: null
    },
    {
        id: 'gradient-7',
        name: 'Sky',
        color: 'bg-gradient-to-br from-sky-100 to-indigo-100 dark:from-sky-900/30 dark:to-indigo-900/30',
        preview: null
    },
    {
        id: 'gradient-8',
        name: 'Amber',
        color: 'bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30',
        preview: null
    },
    {
        id: 'pattern-1',
        name: 'Dots',
        color: 'bg-gray-100 dark:bg-gray-800',
        pattern: 'bg-[radial-gradient(circle,_#00000010_1px,_transparent_1px)] bg-[size:20px_20px]'
    },
    {
        id: 'pattern-2',
        name: 'Grid',
        color: 'bg-gray-100 dark:bg-gray-800',
        pattern: 'bg-[linear-gradient(#00000008_1px,_transparent_1px),linear-gradient(90deg,_#00000008_1px,_transparent_1px)] bg-[size:20px_20px]'
    }
];
function ChatSettingsPanel(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "8d138a405b4d6c6d6e9e80cdcb10d78829bf79b6eb112705c3ce2064cf1cbd33") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8d138a405b4d6c6d6e9e80cdcb10d78829bf79b6eb112705c3ce2064cf1cbd33";
    }
    const { isOpen, onClose, conversationId, otherUser, currentWallpaper, onWallpaperChange, mediaItems: t1, onClearChat, onBlockUser, onReportUser } = t0;
    const mediaItems = t1 === undefined ? [] : t1;
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("settings");
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mediaFilter, setMediaFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t2;
    let t3;
    if ($[1] !== conversationId) {
        t2 = ({
            "ChatSettingsPanel[useEffect()]": ()=>{
                const muted = localStorage.getItem(`chat_muted_${conversationId}`);
                setIsMuted(muted === "true");
            }
        })["ChatSettingsPanel[useEffect()]"];
        t3 = [
            conversationId
        ];
        $[1] = conversationId;
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[4] !== conversationId || $[5] !== isMuted) {
        t4 = ({
            "ChatSettingsPanel[handleMuteToggle]": ()=>{
                const newMuted = !isMuted;
                setIsMuted(newMuted);
                localStorage.setItem(`chat_muted_${conversationId}`, String(newMuted));
            }
        })["ChatSettingsPanel[handleMuteToggle]"];
        $[4] = conversationId;
        $[5] = isMuted;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const handleMuteToggle = t4;
    let t5;
    if ($[7] !== mediaFilter) {
        t5 = ({
            "ChatSettingsPanel[mediaItems.filter()]": (item)=>{
                if (mediaFilter === "all") {
                    return true;
                }
                if (mediaFilter === "images") {
                    return item.type === "image";
                }
                if (mediaFilter === "videos") {
                    return item.type === "video";
                }
                if (mediaFilter === "files") {
                    return item.type === "file" || item.type === "audio";
                }
                return true;
            }
        })["ChatSettingsPanel[mediaItems.filter()]"];
        $[7] = mediaFilter;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const filteredMedia = mediaItems.filter(t5);
    const T0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"];
    const t6 = isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                onClick: onClose,
                className: "fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                lineNumber: 177,
                columnNumber: 26
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    x: "100%"
                },
                animate: {
                    x: 0
                },
                exit: {
                    x: "100%"
                },
                transition: {
                    type: "spring",
                    damping: 25,
                    stiffness: 200
                },
                className: "fixed right-0 top-0 bottom-0 w-full max-w-md bg-white dark:bg-gray-900 shadow-xl z-50 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-gray-900 dark:text-white",
                                children: "Chat Info"
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                lineNumber: 193,
                                columnNumber: 221
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                    lineNumber: 193,
                                    columnNumber: 417
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                lineNumber: 193,
                                columnNumber: 303
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                        lineNumber: 193,
                        columnNumber: 120
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 border-b border-gray-200 dark:border-gray-700 flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-semibold mb-3",
                                children: otherUser.profileImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: otherUser.profileImage,
                                    alt: otherUser.name,
                                    className: "w-20 h-20 rounded-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                    lineNumber: 193,
                                    columnNumber: 735
                                }, this) : otherUser.name.charAt(0).toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                lineNumber: 193,
                                columnNumber: 551
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-semibold text-gray-900 dark:text-white",
                                children: otherUser.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                lineNumber: 193,
                                columnNumber: 888
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 dark:text-gray-400",
                                children: [
                                    "@",
                                    otherUser.username
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                lineNumber: 193,
                                columnNumber: 977
                            }, this),
                            otherUser.isOnline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-2 px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs rounded-full",
                                children: "Online"
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                lineNumber: 193,
                                columnNumber: 1073
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                        lineNumber: 193,
                        columnNumber: 457
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex border-b border-gray-200 dark:border-gray-700",
                        children: [
                            {
                                id: "settings",
                                label: "Settings"
                            },
                            {
                                id: "wallpaper",
                                label: "Wallpaper"
                            },
                            {
                                id: "media",
                                label: "Media"
                            }
                        ].map({
                            "ChatSettingsPanel[(anonymous)()]": (tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "ChatSettingsPanel[(anonymous)() > <button>.onClick]": ()=>setActiveTab(tab.id)
                                    }["ChatSettingsPanel[(anonymous)() > <button>.onClick]"],
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 py-3 text-sm font-medium transition-colors relative", activeTab === tab.id ? "text-blue-600 dark:text-blue-400" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"),
                                    children: [
                                        tab.label,
                                        activeTab === tab.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            layoutId: "activeTab",
                                            className: "absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                            lineNumber: 205,
                                            columnNumber: 304
                                        }, this)
                                    ]
                                }, tab.id, true, {
                                    fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                    lineNumber: 203,
                                    columnNumber: 54
                                }, this)
                        }["ChatSettingsPanel[(anonymous)()]"])
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                        lineNumber: 193,
                        columnNumber: 1218
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto",
                        children: [
                            activeTab === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleMuteToggle,
                                        className: "w-full flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BellOff$3e$__["BellOff"], {
                                                        className: "w-5 h-5 text-gray-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 368
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                        className: "w-5 h-5 text-gray-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 416
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-900 dark:text-white",
                                                        children: "Mute Notifications"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 459
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                                lineNumber: 206,
                                                columnNumber: 316
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-10 h-6 rounded-full transition-colors relative", isMuted ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-1 w-4 h-4 bg-white rounded-full transition-transform", isMuted ? "translate-x-5" : "translate-x-1")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 668
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                                lineNumber: 206,
                                                columnNumber: 538
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                        lineNumber: 206,
                                        columnNumber: 154
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "my-4 border-t border-gray-200 dark:border-gray-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                        lineNumber: 206,
                                        columnNumber: 819
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClearChat,
                                        className: "w-full flex items-center gap-3 p-3 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors text-red-600 dark:text-red-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                                lineNumber: 206,
                                                columnNumber: 1067
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Clear Chat History"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                                lineNumber: 206,
                                                columnNumber: 1097
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                        lineNumber: 206,
                                        columnNumber: 889
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onBlockUser,
                                        className: "w-full flex items-center gap-3 p-3 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors text-red-600 dark:text-red-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__["Ban"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                                lineNumber: 206,
                                                columnNumber: 1315
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Block ",
                                                    otherUser.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                                lineNumber: 206,
                                                columnNumber: 1342
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                        lineNumber: 206,
                                        columnNumber: 1137
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onReportUser,
                                        className: "w-full flex items-center gap-3 p-3 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors text-red-600 dark:text-red-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__["Flag"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                                lineNumber: 206,
                                                columnNumber: 1565
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Report"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                                lineNumber: 206,
                                                columnNumber: 1593
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                        lineNumber: 206,
                                        columnNumber: 1386
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                lineNumber: 206,
                                columnNumber: 123
                            }, this),
                            activeTab === "wallpaper" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500 dark:text-gray-400 mb-4",
                                        children: "Choose a wallpaper for this chat"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                        lineNumber: 206,
                                        columnNumber: 1679
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 gap-3",
                                        children: WALLPAPER_OPTIONS.map({
                                            "ChatSettingsPanel[WALLPAPER_OPTIONS.map()]": (wallpaper)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: {
                                                        "ChatSettingsPanel[WALLPAPER_OPTIONS.map() > <button>.onClick]": ()=>onWallpaperChange(wallpaper.id)
                                                    }["ChatSettingsPanel[WALLPAPER_OPTIONS.map() > <button>.onClick]"],
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("aspect-[3/4] rounded-xl overflow-hidden relative transition-all", wallpaper.color, wallpaper.pattern, currentWallpaper === wallpaper.id ? "ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-gray-900" : "hover:scale-105"),
                                                    children: [
                                                        wallpaper.preview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: wallpaper.preview,
                                                            alt: wallpaper.name,
                                                            className: "w-full h-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 343
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/50 to-transparent",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-white font-medium",
                                                                children: wallpaper.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                                                lineNumber: 209,
                                                                columnNumber: 535
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 435
                                                        }, this),
                                                        currentWallpaper === wallpaper.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-2 right-2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-3 h-3 text-white",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                stroke: "currentColor",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 3,
                                                                    d: "M5 13l4 4L19 7"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                                                    lineNumber: 209,
                                                                    columnNumber: 847
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                                                lineNumber: 209,
                                                                columnNumber: 757
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 651
                                                        }, this)
                                                    ]
                                                }, wallpaper.id, true, {
                                                    fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 74
                                                }, this)
                                        }["ChatSettingsPanel[WALLPAPER_OPTIONS.map()]"])
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                        lineNumber: 206,
                                        columnNumber: 1776
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                lineNumber: 206,
                                columnNumber: 1658
                            }, this),
                            activeTab === "media" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                                lineNumber: 210,
                                                columnNumber: 153
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: searchQuery,
                                                onChange: {
                                                    "ChatSettingsPanel[<input>.onChange]": (e)=>setSearchQuery(e.target.value)
                                                }["ChatSettingsPanel[<input>.onChange]"],
                                                placeholder: "Search media...",
                                                className: "w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg border-0 focus:ring-2 focus:ring-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                                lineNumber: 210,
                                                columnNumber: 238
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                        lineNumber: 210,
                                        columnNumber: 122
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 mb-4 overflow-x-auto pb-2",
                                        children: [
                                            {
                                                id: "all",
                                                label: "All",
                                                icon: null
                                            },
                                            {
                                                id: "images",
                                                label: "Images",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"]
                                            },
                                            {
                                                id: "videos",
                                                label: "Videos",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"]
                                            },
                                            {
                                                id: "files",
                                                label: "Files",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
                                            }
                                        ].map({
                                            "ChatSettingsPanel[(anonymous)()]": (filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: {
                                                        "ChatSettingsPanel[(anonymous)() > <button>.onClick]": ()=>setMediaFilter(filter.id)
                                                    }["ChatSettingsPanel[(anonymous)() > <button>.onClick]"],
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors", mediaFilter === filter.id ? "bg-blue-600 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"),
                                                    children: [
                                                        filter.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(filter.icon, {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 363
                                                        }, this),
                                                        filter.label
                                                    ]
                                                }, filter.id, true, {
                                                    fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 61
                                                }, this)
                                        }["ChatSettingsPanel[(anonymous)()]"])
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                        lineNumber: 212,
                                        columnNumber: 210
                                    }, this),
                                    filteredMedia.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 gap-2",
                                        children: filteredMedia.map(_ChatSettingsPanelFilteredMediaMap)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                        lineNumber: 232,
                                        columnNumber: 86
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-12 text-gray-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                className: "w-12 h-12 mx-auto mb-3 opacity-50"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                                lineNumber: 232,
                                                columnNumber: 239
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "No media shared yet"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                                lineNumber: 232,
                                                columnNumber: 298
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm",
                                                children: "Photos, videos, and files will appear here"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                                lineNumber: 232,
                                                columnNumber: 324
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                        lineNumber: 232,
                                        columnNumber: 190
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                                lineNumber: 210,
                                columnNumber: 101
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                        lineNumber: 206,
                        columnNumber: 54
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                lineNumber: 183,
                columnNumber: 88
            }, this)
        ]
    }, void 0, true);
    let t7;
    if ($[9] !== T0 || $[10] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
            lineNumber: 235,
            columnNumber: 10
        }, this);
        $[9] = T0;
        $[10] = t6;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    return t7;
}
_s(ChatSettingsPanel, "MZw+2GZD1kr0KXkn0/maqktqIco=");
_c = ChatSettingsPanel;
// Export wallpaper options for use in other components
function _ChatSettingsPanelFilteredMediaMap(item_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: item_0.url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 hover:opacity-80 transition-opacity relative group",
        children: item_0.type === "image" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: item_0.url,
            alt: "",
            className: "w-full h-full object-cover"
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
            lineNumber: 247,
            columnNumber: 249
        }, this) : item_0.type === "video" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                className: "w-8 h-8 text-gray-500"
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                lineNumber: 247,
                columnNumber: 441
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
            lineNumber: 247,
            columnNumber: 348
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full flex flex-col items-center justify-center p-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                    className: "w-8 h-8 text-gray-500 mb-1"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                    lineNumber: 247,
                    columnNumber: 570
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-gray-500 truncate w-full text-center",
                    children: item_0.fileName || "File"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
                    lineNumber: 247,
                    columnNumber: 621
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
            lineNumber: 247,
            columnNumber: 493
        }, this)
    }, item_0.id, false, {
        fileName: "[project]/src/components/chat/ChatSettingsPanel.tsx",
        lineNumber: 247,
        columnNumber: 10
    }, this);
}
;
var _c;
__turbopack_context__.k.register(_c, "ChatSettingsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/chat/ChatMessages.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatMessages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/chat.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/socket.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isToday.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isYesterday$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isYesterday.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatSettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/ChatSettingsPanel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const REACTION_EMOJIS = [
    '❤️',
    '👍',
    '😂',
    '😮',
    '😢',
    '🙏'
];
function ChatMessages({ conversationId, currentUserId, otherUser, wallpaper = 'default', onReply }) {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingMore, setLoadingMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [nextCursor, setNextCursor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [typingUser, setTypingUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const messagesContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [shouldAutoScroll, setShouldAutoScroll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Fetch messages
    const fetchMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatMessages.useCallback[fetchMessages]": async (cursor)=>{
            try {
                if (cursor) {
                    setLoadingMore(true);
                } else {
                    setLoading(true);
                }
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMessages"])(conversationId, 50, cursor);
                if (cursor) {
                    // Prepend older messages
                    setMessages({
                        "ChatMessages.useCallback[fetchMessages]": (prev)=>[
                                ...result.messages,
                                ...prev
                            ]
                    }["ChatMessages.useCallback[fetchMessages]"]);
                } else {
                    setMessages(result.messages);
                }
                setHasMore(result.hasMore);
                setNextCursor(result.nextCursor);
            } catch (err) {
                console.error('Failed to fetch messages:', err);
            } finally{
                setLoading(false);
                setLoadingMore(false);
            }
        }
    }["ChatMessages.useCallback[fetchMessages]"], [
        conversationId
    ]);
    // Initial load and join room
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatMessages.useEffect": ()=>{
            fetchMessages();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinChatRoom"])(conversationId);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markChatAsRead"])(conversationId);
            return ({
                "ChatMessages.useEffect": ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leaveChatRoom"])(conversationId);
                }
            })["ChatMessages.useEffect"];
        }
    }["ChatMessages.useEffect"], [
        conversationId,
        fetchMessages
    ]);
    // Socket event listeners
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatMessages.useEffect": ()=>{
            const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSocket"])();
            if (!socket) return;
            const handleNewMessage = {
                "ChatMessages.useEffect.handleNewMessage": (data)=>{
                    if (data.conversationId === conversationId) {
                        setMessages({
                            "ChatMessages.useEffect.handleNewMessage": (prev_0)=>[
                                    ...prev_0,
                                    data.message
                                ]
                        }["ChatMessages.useEffect.handleNewMessage"]);
                        setShouldAutoScroll(true);
                        // Mark as read if from other user
                        if (data.message.senderId !== currentUserId) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markChatAsRead"])(conversationId);
                        }
                    }
                }
            }["ChatMessages.useEffect.handleNewMessage"];
            const handleTyping = {
                "ChatMessages.useEffect.handleTyping": (data_0)=>{
                    if (data_0.conversationId === conversationId && data_0.userId !== currentUserId) {
                        setTypingUser(data_0.isTyping ? data_0.userId : null);
                    }
                }
            }["ChatMessages.useEffect.handleTyping"];
            const handleMessagesRead = {
                "ChatMessages.useEffect.handleMessagesRead": (data_1)=>{
                    if (data_1.conversationId === conversationId) {
                        setMessages({
                            "ChatMessages.useEffect.handleMessagesRead": (prev_1)=>prev_1.map({
                                    "ChatMessages.useEffect.handleMessagesRead": (m)=>m.senderId === currentUserId && m.status !== 'READ' ? {
                                            ...m,
                                            status: 'READ',
                                            readAt: new Date(data_1.readAt).toISOString()
                                        } : m
                                }["ChatMessages.useEffect.handleMessagesRead"])
                        }["ChatMessages.useEffect.handleMessagesRead"]);
                    }
                }
            }["ChatMessages.useEffect.handleMessagesRead"];
            const handleMessagesDelivered = {
                "ChatMessages.useEffect.handleMessagesDelivered": (data_2)=>{
                    if (data_2.conversationId === conversationId) {
                        setMessages({
                            "ChatMessages.useEffect.handleMessagesDelivered": (prev_2)=>prev_2.map({
                                    "ChatMessages.useEffect.handleMessagesDelivered": (m_0)=>m_0.senderId === currentUserId && m_0.status === 'SENT' ? {
                                            ...m_0,
                                            status: 'DELIVERED',
                                            deliveredAt: new Date(data_2.deliveredAt).toISOString()
                                        } : m_0
                                }["ChatMessages.useEffect.handleMessagesDelivered"])
                        }["ChatMessages.useEffect.handleMessagesDelivered"]);
                    }
                }
            }["ChatMessages.useEffect.handleMessagesDelivered"];
            const handleError = {
                "ChatMessages.useEffect.handleError": (data_3)=>{
                    console.error('Chat socket error:', data_3.message);
                }
            }["ChatMessages.useEffect.handleError"];
            const handleMessageDeleted = {
                "ChatMessages.useEffect.handleMessageDeleted": (data_4)=>{
                    if (data_4.conversationId === conversationId) {
                        if (data_4.forEveryone) {
                            setMessages({
                                "ChatMessages.useEffect.handleMessageDeleted": (prev_3)=>prev_3.map({
                                        "ChatMessages.useEffect.handleMessageDeleted": (m_1)=>m_1.id === data_4.messageId ? {
                                                ...m_1,
                                                isDeleted: true,
                                                content: 'This message was deleted'
                                            } : m_1
                                    }["ChatMessages.useEffect.handleMessageDeleted"])
                            }["ChatMessages.useEffect.handleMessageDeleted"]);
                        } else {
                            setMessages({
                                "ChatMessages.useEffect.handleMessageDeleted": (prev_4)=>prev_4.filter({
                                        "ChatMessages.useEffect.handleMessageDeleted": (m_2)=>m_2.id !== data_4.messageId
                                    }["ChatMessages.useEffect.handleMessageDeleted"])
                            }["ChatMessages.useEffect.handleMessageDeleted"]);
                        }
                    }
                }
            }["ChatMessages.useEffect.handleMessageDeleted"];
            const handleMessageEdited = {
                "ChatMessages.useEffect.handleMessageEdited": (data_5)=>{
                    if (data_5.conversationId === conversationId) {
                        setMessages({
                            "ChatMessages.useEffect.handleMessageEdited": (prev_5)=>prev_5.map({
                                    "ChatMessages.useEffect.handleMessageEdited": (m_3)=>m_3.id === data_5.messageId ? {
                                            ...m_3,
                                            content: data_5.content,
                                            updatedAt: String(data_5.editedAt)
                                        } : m_3
                                }["ChatMessages.useEffect.handleMessageEdited"])
                        }["ChatMessages.useEffect.handleMessageEdited"]);
                    }
                }
            }["ChatMessages.useEffect.handleMessageEdited"];
            const handleReaction = {
                "ChatMessages.useEffect.handleReaction": (data_6)=>{
                    if (data_6.conversationId === conversationId) {
                        setMessages({
                            "ChatMessages.useEffect.handleReaction": (prev_6)=>prev_6.map({
                                    "ChatMessages.useEffect.handleReaction": (m_4)=>{
                                        if (m_4.id !== data_6.messageId) return m_4;
                                        let reactions = [
                                            ...m_4.reactions || []
                                        ];
                                        if (data_6.action === 'removed') {
                                            reactions = reactions.filter({
                                                "ChatMessages.useEffect.handleReaction": (r)=>!(r.userId === data_6.userId)
                                            }["ChatMessages.useEffect.handleReaction"]);
                                        } else if (data_6.action === 'added') {
                                            reactions.push({
                                                id: `temp-${Date.now()}`,
                                                userId: data_6.userId,
                                                emoji: data_6.emoji,
                                                user: {
                                                    id: data_6.userId,
                                                    username: '',
                                                    name: ''
                                                }
                                            });
                                        } else if (data_6.action === 'updated') {
                                            const index = reactions.findIndex({
                                                "ChatMessages.useEffect.handleReaction.index": (r_0)=>r_0.userId === data_6.userId
                                            }["ChatMessages.useEffect.handleReaction.index"]);
                                            if (index >= 0) {
                                                reactions[index] = {
                                                    ...reactions[index],
                                                    emoji: data_6.emoji
                                                };
                                            }
                                        }
                                        return {
                                            ...m_4,
                                            reactions
                                        };
                                    }
                                }["ChatMessages.useEffect.handleReaction"])
                        }["ChatMessages.useEffect.handleReaction"]);
                    }
                }
            }["ChatMessages.useEffect.handleReaction"];
            socket.on('chat:new_message', handleNewMessage);
            socket.on('chat:user_typing', handleTyping);
            socket.on('chat:messages_read', handleMessagesRead);
            socket.on('chat:messages_delivered', handleMessagesDelivered);
            socket.on('chat:message_deleted', handleMessageDeleted);
            socket.on('chat:message_edited', handleMessageEdited);
            socket.on('chat:message_reaction', handleReaction);
            socket.on('error', handleError);
            return ({
                "ChatMessages.useEffect": ()=>{
                    socket.off('chat:new_message', handleNewMessage);
                    socket.off('chat:user_typing', handleTyping);
                    socket.off('chat:messages_read', handleMessagesRead);
                    socket.off('chat:messages_delivered', handleMessagesDelivered);
                    socket.off('chat:message_deleted', handleMessageDeleted);
                    socket.off('chat:message_edited', handleMessageEdited);
                    socket.off('chat:message_reaction', handleReaction);
                    socket.off('error', handleError);
                }
            })["ChatMessages.useEffect"];
        }
    }["ChatMessages.useEffect"], [
        conversationId,
        currentUserId,
        otherUser.id
    ]);
    // Auto-scroll to bottom
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatMessages.useEffect": ()=>{
            if (shouldAutoScroll && messagesEndRef.current) {
                messagesEndRef.current.scrollIntoView({
                    behavior: 'smooth'
                });
                setShouldAutoScroll(false);
            }
        }
    }["ChatMessages.useEffect"], [
        messages,
        shouldAutoScroll
    ]);
    // Scroll detection for loading more
    const handleScroll = (e)=>{
        const target = e.currentTarget;
        if (target.scrollTop < 100 && hasMore && !loadingMore) {
            fetchMessages(nextCursor);
        }
    };
    // Group messages by date
    const groupedMessages = messages.reduce((groups, message)=>{
        const date = new Date(message.createdAt);
        const dateKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'yyyy-MM-dd');
        if (!groups[dateKey]) {
            groups[dateKey] = [];
        }
        groups[dateKey].push(message);
        return groups;
    }, {});
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                lineNumber: 259,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 258,
            columnNumber: 12
        }, this);
    }
    // Get wallpaper styles
    const wallpaperOption = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatSettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WALLPAPER_OPTIONS"].find((w)=>w.id === wallpaper) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatSettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WALLPAPER_OPTIONS"][0];
    const wallpaperClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(wallpaperOption.color, wallpaperOption.pattern);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: messagesContainerRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 overflow-y-auto p-4 space-y-4", wallpaperClasses),
        onScroll: handleScroll,
        children: [
            loadingMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center py-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                    lineNumber: 268,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                lineNumber: 267,
                columnNumber: 23
            }, this),
            Object.entries(groupedMessages).map(([dateKey_0, dateMessages])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center my-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-xs text-gray-600 dark:text-gray-300",
                                children: formatDateSeparator(new Date(dateKey_0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                lineNumber: 274,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/ChatMessages.tsx",
                            lineNumber: 273,
                            columnNumber: 11
                        }, this),
                        dateMessages.map((message_0, index_0)=>{
                            const prevMessage = index_0 > 0 ? dateMessages[index_0 - 1] : null;
                            const showAvatar = !prevMessage || prevMessage.senderId !== message_0.senderId;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MessageBubble, {
                                message: message_0,
                                isOwn: message_0.senderId === currentUserId,
                                showAvatar: showAvatar,
                                otherUser: otherUser,
                                conversationId: conversationId,
                                onReply: onReply ? ()=>onReply({
                                        id: message_0.id,
                                        content: message_0.content,
                                        senderName: message_0.senderId === currentUserId ? 'You' : otherUser.name
                                    }) : undefined
                            }, message_0.id, false, {
                                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                lineNumber: 283,
                                columnNumber: 16
                            }, this);
                        })
                    ]
                }, dateKey_0, true, {
                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                    lineNumber: 271,
                    columnNumber: 75
                }, this)),
            typingUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-gray-500 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "animate-bounce",
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                lineNumber: 294,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "animate-bounce",
                                style: {
                                    animationDelay: '0.1s'
                                },
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                lineNumber: 295,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "animate-bounce",
                                style: {
                                    animationDelay: '0.2s'
                                },
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                lineNumber: 298,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/chat/ChatMessages.tsx",
                        lineNumber: 293,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            otherUser.name,
                            " is typing..."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/chat/ChatMessages.tsx",
                        lineNumber: 302,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                lineNumber: 292,
                columnNumber: 22
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: messagesEndRef
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                lineNumber: 305,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/chat/ChatMessages.tsx",
        lineNumber: 266,
        columnNumber: 10
    }, this);
}
_s(ChatMessages, "OqYQnuNEzTJ6qb1nQMifmRv1Xic=");
_c = ChatMessages;
function MessageBubble(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(94);
    if ($[0] !== "fdbae84eb9e66a197783c32a7f40e7984da160773ebb3e20e558d576c4a8ef99") {
        for(let $i = 0; $i < 94; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fdbae84eb9e66a197783c32a7f40e7984da160773ebb3e20e558d576c4a8ef99";
    }
    const { message, isOwn, showAvatar, otherUser, conversationId } = t0;
    const [showActions, setShowActions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [, setShowMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showReactions, setShowReactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editContent, setEditContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(message.content);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== conversationId || $[2] !== message.id) {
        t1 = ({
            "MessageBubble[handleDelete]": (forEveryone)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteChatMessage"])(message.id, conversationId, forEveryone);
                setShowActions(false);
                setShowMenu(false);
            }
        })["MessageBubble[handleDelete]"];
        $[1] = conversationId;
        $[2] = message.id;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleDelete = t1;
    let t2;
    if ($[4] !== conversationId || $[5] !== editContent || $[6] !== message.content || $[7] !== message.id) {
        t2 = ({
            "MessageBubble[handleEdit]": ()=>{
                if (editContent.trim() && editContent !== message.content) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editChatMessage"])(message.id, conversationId, editContent);
                }
                setIsEditing(false);
            }
        })["MessageBubble[handleEdit]"];
        $[4] = conversationId;
        $[5] = editContent;
        $[6] = message.content;
        $[7] = message.id;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    const handleEdit = t2;
    let t3;
    if ($[9] !== conversationId || $[10] !== message.id) {
        t3 = ({
            "MessageBubble[handleReaction]": (emoji)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reactToChatMessage"])(message.id, conversationId, emoji);
                setShowReactions(false);
            }
        })["MessageBubble[handleReaction]"];
        $[9] = conversationId;
        $[10] = message.id;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    const handleReaction = t3;
    if (message.isDeleted) {
        const t4 = isOwn ? "justify-end" : "justify-start";
        let t5;
        if ($[12] !== t4) {
            t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2", t4);
            $[12] = t4;
            $[13] = t5;
        } else {
            t5 = $[13];
        }
        let t6;
        if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-100 dark:bg-gray-800 text-gray-500 italic px-4 py-2 rounded-lg text-sm",
                children: "This message was deleted"
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                lineNumber: 406,
                columnNumber: 12
            }, this);
            $[14] = t6;
        } else {
            t6 = $[14];
        }
        let t7;
        if ($[15] !== t5) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t5,
                children: t6
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                lineNumber: 413,
                columnNumber: 12
            }, this);
            $[15] = t5;
            $[16] = t7;
        } else {
            t7 = $[16];
        }
        return t7;
    }
    const t4 = isOwn ? "justify-end" : "justify-start";
    let t5;
    if ($[17] !== t4) {
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex gap-2 group", t4);
        $[17] = t4;
        $[18] = t5;
    } else {
        t5 = $[18];
    }
    let t6;
    let t7;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "MessageBubble[<div>.onMouseEnter]": ()=>setShowActions(true)
        })["MessageBubble[<div>.onMouseEnter]"];
        t7 = ({
            "MessageBubble[<div>.onMouseLeave]": ()=>{
                setShowActions(false);
                setShowReactions(false);
            }
        })["MessageBubble[<div>.onMouseLeave]"];
        $[19] = t6;
        $[20] = t7;
    } else {
        t6 = $[19];
        t7 = $[20];
    }
    let t8;
    if ($[21] !== isOwn || $[22] !== otherUser || $[23] !== showAvatar) {
        t8 = !isOwn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-8 h-8 flex-shrink-0", !showAvatar && "invisible"),
            children: showAvatar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm font-medium",
                children: otherUser.profileImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: otherUser.profileImage,
                    alt: otherUser.name,
                    className: "w-8 h-8 rounded-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                    lineNumber: 450,
                    columnNumber: 282
                }, this) : otherUser.name.charAt(0).toUpperCase()
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                lineNumber: 450,
                columnNumber: 108
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 450,
            columnNumber: 20
        }, this);
        $[21] = isOwn;
        $[22] = otherUser;
        $[23] = showAvatar;
        $[24] = t8;
    } else {
        t8 = $[24];
    }
    const t9 = isOwn && "order-first";
    let t10;
    if ($[25] !== t9) {
        t10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("max-w-[70%] relative", t9);
        $[25] = t9;
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    let t11;
    if ($[27] !== isOwn || $[28] !== message.replyTo) {
        t11 = message.replyTo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs p-2 rounded-t-lg border-l-2", isOwn ? "bg-blue-600/20 border-blue-400" : "bg-gray-100 dark:bg-gray-800 border-gray-400"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-500",
                    children: "Replying to"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                    lineNumber: 469,
                    columnNumber: 180
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "truncate",
                    children: message.replyTo.content
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                    lineNumber: 469,
                    columnNumber: 230
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 469,
            columnNumber: 30
        }, this);
        $[27] = isOwn;
        $[28] = message.replyTo;
        $[29] = t11;
    } else {
        t11 = $[29];
    }
    const t12 = isOwn ? "bg-blue-600 text-white rounded-br-sm" : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-bl-sm";
    const t13 = message.replyTo && "rounded-t-none";
    let t14;
    if ($[30] !== t12 || $[31] !== t13) {
        t14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4 py-2 rounded-2xl relative", t12, t13);
        $[30] = t12;
        $[31] = t13;
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    let t15;
    if ($[33] !== message.contentType || $[34] !== message.mediaUrl) {
        t15 = message.mediaUrl && message.contentType === "image" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: message.mediaUrl,
            alt: "Shared image",
            className: "rounded-lg max-w-full mb-2"
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 489,
            columnNumber: 66
        }, this);
        $[33] = message.contentType;
        $[34] = message.mediaUrl;
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    let t16;
    if ($[36] !== message.contentType || $[37] !== message.fileName || $[38] !== message.mediaUrl) {
        t16 = message.mediaUrl && message.contentType === "file" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: message.mediaUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 bg-white/10 p-2 rounded mb-2 hover:bg-white/20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "📎"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                    lineNumber: 498,
                    columnNumber: 217
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "truncate",
                    children: message.fileName || "File"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                    lineNumber: 498,
                    columnNumber: 232
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 498,
            columnNumber: 65
        }, this);
        $[36] = message.contentType;
        $[37] = message.fileName;
        $[38] = message.mediaUrl;
        $[39] = t16;
    } else {
        t16 = $[39];
    }
    let t17;
    if ($[40] !== editContent || $[41] !== handleEdit || $[42] !== isEditing || $[43] !== message.content) {
        t17 = isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: editContent,
                    onChange: {
                        "MessageBubble[<input>.onChange]": (e)=>setEditContent(e.target.value)
                    }["MessageBubble[<input>.onChange]"],
                    className: "flex-1 bg-white/20 rounded px-2 py-1 text-sm",
                    autoFocus: true,
                    onKeyDown: {
                        "MessageBubble[<input>.onKeyDown]": (e_0)=>{
                            if (e_0.key === "Enter") {
                                handleEdit();
                            }
                            if (e_0.key === "Escape") {
                                setIsEditing(false);
                            }
                        }
                    }["MessageBubble[<input>.onKeyDown]"]
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                    lineNumber: 508,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleEdit,
                    className: "text-xs",
                    children: "Save"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                    lineNumber: 519,
                    columnNumber: 48
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 508,
            columnNumber: 23
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "break-words whitespace-pre-wrap",
            children: message.content
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 519,
            columnNumber: 119
        }, this);
        $[40] = editContent;
        $[41] = handleEdit;
        $[42] = isEditing;
        $[43] = message.content;
        $[44] = t17;
    } else {
        t17 = $[44];
    }
    let t18;
    if ($[45] !== message.createdAt || $[46] !== message.isDeleted || $[47] !== message.updatedAt) {
        t18 = !message.isDeleted && (()=>{
            const created = new Date(message.createdAt).getTime();
            const updated = new Date(message.updatedAt).getTime();
            const diffSeconds = (updated - created) / 1000;
            return diffSeconds > 5;
        })() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs opacity-60 ml-1",
            children: "(edited)"
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 535,
            columnNumber: 13
        }, this);
        $[45] = message.createdAt;
        $[46] = message.isDeleted;
        $[47] = message.updatedAt;
        $[48] = t18;
    } else {
        t18 = $[48];
    }
    let t19;
    if ($[49] !== t14 || $[50] !== t15 || $[51] !== t16 || $[52] !== t17 || $[53] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t14,
            children: [
                t15,
                t16,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 545,
            columnNumber: 11
        }, this);
        $[49] = t14;
        $[50] = t15;
        $[51] = t16;
        $[52] = t17;
        $[53] = t18;
        $[54] = t19;
    } else {
        t19 = $[54];
    }
    let t20;
    if ($[55] !== handleReaction || $[56] !== isOwn || $[57] !== message.reactions) {
        t20 = message.reactions && message.reactions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-wrap gap-1 mt-1", isOwn ? "justify-end" : "justify-start"),
            children: Array.from(new Set(message.reactions.map(_MessageBubbleMessageReactionsMap))).map({
                "MessageBubble[(anonymous)()]": (emoji_0)=>{
                    const count = message.reactions.filter({
                        "MessageBubble[(anonymous)() > message.reactions.filter()]": (r_0)=>r_0.emoji === emoji_0
                    }["MessageBubble[(anonymous)() > message.reactions.filter()]"]).length;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "MessageBubble[(anonymous)() > <button>.onClick]": ()=>handleReaction(emoji_0)
                        }["MessageBubble[(anonymous)() > <button>.onClick]"],
                        className: "bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full text-sm flex items-center gap-1 hover:bg-gray-200 dark:hover:bg-gray-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: emoji_0
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                lineNumber: 564,
                                columnNumber: 204
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-500",
                                children: count
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                lineNumber: 564,
                                columnNumber: 226
                            }, this)
                        ]
                    }, emoji_0, true, {
                        fileName: "[project]/src/components/chat/ChatMessages.tsx",
                        lineNumber: 562,
                        columnNumber: 18
                    }, this);
                }
            }["MessageBubble[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 557,
            columnNumber: 64
        }, this);
        $[55] = handleReaction;
        $[56] = isOwn;
        $[57] = message.reactions;
        $[58] = t20;
    } else {
        t20 = $[58];
    }
    const t21 = isOwn ? "justify-end" : "justify-start";
    let t22;
    if ($[59] !== t21) {
        t22 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs text-gray-500 mt-1 flex items-center gap-1", t21);
        $[59] = t21;
        $[60] = t22;
    } else {
        t22 = $[60];
    }
    let t23;
    if ($[61] !== message.createdAt) {
        t23 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(message.createdAt), "HH:mm");
        $[61] = message.createdAt;
        $[62] = t23;
    } else {
        t23 = $[62];
    }
    let t24;
    if ($[63] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t23
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 593,
            columnNumber: 11
        }, this);
        $[63] = t23;
        $[64] = t24;
    } else {
        t24 = $[64];
    }
    let t25;
    if ($[65] !== isOwn || $[66] !== message.status) {
        t25 = isOwn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(message.status === "READ" && "text-blue-500"),
            children: message.status === "READ" ? "\u2713\u2713" : message.status === "DELIVERED" ? "\u2713\u2713" : "\u2713"
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 601,
            columnNumber: 20
        }, this);
        $[65] = isOwn;
        $[66] = message.status;
        $[67] = t25;
    } else {
        t25 = $[67];
    }
    let t26;
    if ($[68] !== t22 || $[69] !== t24 || $[70] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t22,
            children: [
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 610,
            columnNumber: 11
        }, this);
        $[68] = t22;
        $[69] = t24;
        $[70] = t25;
        $[71] = t26;
    } else {
        t26 = $[71];
    }
    let t27;
    if ($[72] !== handleDelete || $[73] !== isEditing || $[74] !== isOwn || $[75] !== showActions || $[76] !== showReactions) {
        t27 = showActions && !isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-0 flex items-center gap-1 bg-white dark:bg-gray-900 shadow-lg rounded-lg p-1", isOwn ? "right-full mr-2" : "left-full ml-2"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "MessageBubble[<button>.onClick]": ()=>setShowReactions(!showReactions)
                    }["MessageBubble[<button>.onClick]"],
                    className: "p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded",
                    title: "React",
                    children: "😀"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                    lineNumber: 620,
                    columnNumber: 199
                }, this),
                isOwn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "MessageBubble[<button>.onClick]": ()=>setIsEditing(true)
                            }["MessageBubble[<button>.onClick]"],
                            className: "p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-sm",
                            title: "Edit",
                            children: "✏️"
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/ChatMessages.tsx",
                            lineNumber: 622,
                            columnNumber: 147
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "MessageBubble[<button>.onClick]": ()=>handleDelete(true)
                            }["MessageBubble[<button>.onClick]"],
                            className: "p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-sm",
                            title: "Delete for everyone",
                            children: "🗑️"
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/ChatMessages.tsx",
                            lineNumber: 624,
                            columnNumber: 144
                        }, this)
                    ]
                }, void 0, true),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "MessageBubble[<button>.onClick]": ()=>handleDelete(false)
                    }["MessageBubble[<button>.onClick]"],
                    className: "p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-sm",
                    title: "Delete for me",
                    children: "❌"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                    lineNumber: 626,
                    columnNumber: 164
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 620,
            columnNumber: 40
        }, this);
        $[72] = handleDelete;
        $[73] = isEditing;
        $[74] = isOwn;
        $[75] = showActions;
        $[76] = showReactions;
        $[77] = t27;
    } else {
        t27 = $[77];
    }
    let t28;
    if ($[78] !== handleReaction || $[79] !== isOwn || $[80] !== showReactions) {
        t28 = showReactions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute -top-10 flex items-center gap-1 bg-white dark:bg-gray-900 shadow-lg rounded-full px-2 py-1", isOwn ? "right-0" : "left-0"),
            children: REACTION_EMOJIS.map({
                "MessageBubble[REACTION_EMOJIS.map()]": (emoji_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "MessageBubble[REACTION_EMOJIS.map() > <button>.onClick]": ()=>handleReaction(emoji_1)
                        }["MessageBubble[REACTION_EMOJIS.map() > <button>.onClick]"],
                        className: "hover:scale-125 transition-transform p-1",
                        children: emoji_1
                    }, emoji_1, false, {
                        fileName: "[project]/src/components/chat/ChatMessages.tsx",
                        lineNumber: 641,
                        columnNumber: 60
                    }, this)
            }["MessageBubble[REACTION_EMOJIS.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 640,
            columnNumber: 28
        }, this);
        $[78] = handleReaction;
        $[79] = isOwn;
        $[80] = showReactions;
        $[81] = t28;
    } else {
        t28 = $[81];
    }
    let t29;
    if ($[82] !== t10 || $[83] !== t11 || $[84] !== t19 || $[85] !== t20 || $[86] !== t26 || $[87] !== t27 || $[88] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: [
                t11,
                t19,
                t20,
                t26,
                t27,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 654,
            columnNumber: 11
        }, this);
        $[82] = t10;
        $[83] = t11;
        $[84] = t19;
        $[85] = t20;
        $[86] = t26;
        $[87] = t27;
        $[88] = t28;
        $[89] = t29;
    } else {
        t29 = $[89];
    }
    let t30;
    if ($[90] !== t29 || $[91] !== t5 || $[92] !== t8) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            onMouseEnter: t6,
            onMouseLeave: t7,
            children: [
                t8,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 668,
            columnNumber: 11
        }, this);
        $[90] = t29;
        $[91] = t5;
        $[92] = t8;
        $[93] = t30;
    } else {
        t30 = $[93];
    }
    return t30;
}
_s1(MessageBubble, "T7zK3XJCvRichuETxJwcmjv0nnA=");
_c1 = MessageBubble;
// ============================================
// Utility Functions
// ============================================
function _MessageBubbleMessageReactionsMap(r) {
    return r.emoji;
}
function formatDateSeparator(date) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isToday"])(date)) return 'Today';
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isYesterday$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isYesterday"])(date)) return 'Yesterday';
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'MMMM d, yyyy');
}
var _c, _c1;
__turbopack_context__.k.register(_c, "ChatMessages");
__turbopack_context__.k.register(_c1, "MessageBubble");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/chat/ChatInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/socket.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ChatInput(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(69);
    if ($[0] !== "cb010f4c2fa043f97c9b34eee88ff406fb3e34aa76ead89c6c715c56a05d2366") {
        for(let $i = 0; $i < 69; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cb010f4c2fa043f97c9b34eee88ff406fb3e34aa76ead89c6c715c56a05d2366";
    }
    const { conversationId, replyTo, onCancelReply, disabled: t1 } = t0;
    const disabled = t1 === undefined ? false : t1;
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showEmoji, setShowEmoji] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const typingTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "ChatInput[useEffect()]": ()=>{
                if (inputRef.current) {
                    inputRef.current.style.height = "auto";
                    inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 120)}px`;
                }
            }
        })["ChatInput[useEffect()]"];
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== message) {
        t3 = [
            message
        ];
        $[2] = message;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[4] !== conversationId || $[5] !== isTyping) {
        t4 = ({
            "ChatInput[handleTyping]": ()=>{
                if (!isTyping) {
                    setIsTyping(true);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendChatTyping"])(conversationId, true);
                }
                if (typingTimeoutRef.current) {
                    clearTimeout(typingTimeoutRef.current);
                }
                typingTimeoutRef.current = setTimeout({
                    "ChatInput[handleTyping > setTimeout()]": ()=>{
                        setIsTyping(false);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendChatTyping"])(conversationId, false);
                    }
                }["ChatInput[handleTyping > setTimeout()]"], 2000);
            }
        })["ChatInput[handleTyping]"];
        $[4] = conversationId;
        $[5] = isTyping;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const handleTyping = t4;
    let t5;
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "ChatInput[useEffect()]": ()=>()=>{
                    if (typingTimeoutRef.current) {
                        clearTimeout(typingTimeoutRef.current);
                    }
                }
        })["ChatInput[useEffect()]"];
        t6 = [];
        $[7] = t5;
        $[8] = t6;
    } else {
        t5 = $[7];
        t6 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    if ($[9] !== conversationId || $[10] !== message || $[11] !== onCancelReply || $[12] !== replyTo?.id) {
        t7 = ({
            "ChatInput[handleSend]": ()=>{
                const trimmedMessage = message.trim();
                if (!trimmedMessage) {
                    return;
                }
                if (typingTimeoutRef.current) {
                    clearTimeout(typingTimeoutRef.current);
                    typingTimeoutRef.current = null;
                }
                setIsTyping(false);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendChatTyping"])(conversationId, false);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendChatMessage"])({
                    conversationId,
                    content: trimmedMessage,
                    contentType: "text",
                    replyToId: replyTo?.id
                });
                setMessage("");
                onCancelReply?.();
                inputRef.current?.focus();
            }
        })["ChatInput[handleSend]"];
        $[9] = conversationId;
        $[10] = message;
        $[11] = onCancelReply;
        $[12] = replyTo?.id;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    const handleSend = t7;
    let t8;
    if ($[14] !== handleSend) {
        t8 = ({
            "ChatInput[handleKeyDown]": (e)=>{
                if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                }
            }
        })["ChatInput[handleKeyDown]"];
        $[14] = handleSend;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    const handleKeyDown = t8;
    let t9;
    if ($[16] !== handleTyping) {
        t9 = ({
            "ChatInput[handleChange]": (e_0)=>{
                setMessage(e_0.target.value);
                handleTyping();
            }
        })["ChatInput[handleChange]"];
        $[16] = handleTyping;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    const handleChange = t9;
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t15;
    let t16;
    if ($[18] !== onCancelReply || $[19] !== replyTo || $[20] !== showEmoji) {
        const handleEmojiClick = {
            "ChatInput[handleEmojiClick]": (emoji)=>{
                setMessage({
                    "ChatInput[handleEmojiClick > setMessage()]": (prev)=>prev + emoji
                }["ChatInput[handleEmojiClick > setMessage()]"]);
                setShowEmoji(false);
                inputRef.current?.focus();
            }
        }["ChatInput[handleEmojiClick]"];
        const commonEmojis = [
            "\uD83D\uDE00",
            "\uD83D\uDE02",
            "\u2764\uFE0F",
            "\uD83D\uDC4D",
            "\uD83D\uDD25",
            "\uD83C\uDF89",
            "\uD83D\uDE0A",
            "\uD83D\uDE4F",
            "\uD83D\uDCAF",
            "\u2728"
        ];
        t15 = "border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4";
        if ($[28] !== onCancelReply || $[29] !== replyTo) {
            t16 = replyTo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1 h-8 bg-blue-500 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatInput.tsx",
                                lineNumber: 188,
                                columnNumber: 173
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-blue-600 dark:text-blue-400 font-medium",
                                        children: [
                                            "Replying to ",
                                            replyTo.senderName
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                                        lineNumber: 188,
                                        columnNumber: 250
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400 truncate",
                                        children: replyTo.content
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                                        lineNumber: 188,
                                        columnNumber: 354
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/chat/ChatInput.tsx",
                                lineNumber: 188,
                                columnNumber: 225
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                        lineNumber: 188,
                        columnNumber: 124
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCancelReply,
                        className: "p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded",
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                        lineNumber: 188,
                        columnNumber: 452
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/chat/ChatInput.tsx",
                lineNumber: 188,
                columnNumber: 24
            }, this);
            $[28] = onCancelReply;
            $[29] = replyTo;
            $[30] = t16;
        } else {
            t16 = $[30];
        }
        t13 = "flex items-end gap-2";
        if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors",
                title: "Attach file",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                        lineNumber: 197,
                        columnNumber: 267
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatInput.tsx",
                    lineNumber: 197,
                    columnNumber: 188
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatInput.tsx",
                lineNumber: 197,
                columnNumber: 13
            }, this);
            $[31] = t14;
        } else {
            t14 = $[31];
        }
        t10 = "relative";
        let t17;
        if ($[32] !== showEmoji) {
            t17 = ({
                "ChatInput[<button>.onClick]": ()=>setShowEmoji(!showEmoji)
            })["ChatInput[<button>.onClick]"];
            $[32] = showEmoji;
            $[33] = t17;
        } else {
            t17 = $[33];
        }
        let t18;
        if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatInput.tsx",
                    lineNumber: 215,
                    columnNumber: 92
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatInput.tsx",
                lineNumber: 215,
                columnNumber: 13
            }, this);
            $[34] = t18;
        } else {
            t18 = $[34];
        }
        if ($[35] !== t17) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t17,
                className: "p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors",
                title: "Add emoji",
                children: t18
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatInput.tsx",
                lineNumber: 221,
                columnNumber: 13
            }, this);
            $[35] = t17;
            $[36] = t11;
        } else {
            t11 = $[36];
        }
        t12 = showEmoji && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-full left-0 mb-2 p-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1 flex-wrap max-w-[200px]",
                children: commonEmojis.map({
                    "ChatInput[commonEmojis.map()]": (emoji_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "ChatInput[commonEmojis.map() > <button>.onClick]": ()=>handleEmojiClick(emoji_0)
                            }["ChatInput[commonEmojis.map() > <button>.onClick]"],
                            className: "p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-xl",
                            children: emoji_0
                        }, emoji_0, false, {
                            fileName: "[project]/src/components/chat/ChatInput.tsx",
                            lineNumber: 228,
                            columnNumber: 55
                        }, this)
                }["ChatInput[commonEmojis.map()]"])
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatInput.tsx",
                lineNumber: 227,
                columnNumber: 174
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatInput.tsx",
            lineNumber: 227,
            columnNumber: 24
        }, this);
        $[18] = onCancelReply;
        $[19] = replyTo;
        $[20] = showEmoji;
        $[21] = t10;
        $[22] = t11;
        $[23] = t12;
        $[24] = t13;
        $[25] = t14;
        $[26] = t15;
        $[27] = t16;
    } else {
        t10 = $[21];
        t11 = $[22];
        t12 = $[23];
        t13 = $[24];
        t14 = $[25];
        t15 = $[26];
        t16 = $[27];
    }
    let t17;
    if ($[37] !== t10 || $[38] !== t11 || $[39] !== t12) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatInput.tsx",
            lineNumber: 253,
            columnNumber: 11
        }, this);
        $[37] = t10;
        $[38] = t11;
        $[39] = t12;
        $[40] = t17;
    } else {
        t17 = $[40];
    }
    let t18;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full resize-none rounded-2xl px-4 py-2 pr-12", "bg-gray-100 dark:bg-gray-800", "border border-transparent focus:border-blue-500", "focus:outline-none focus:ring-2 focus:ring-blue-500/20", "text-gray-900 dark:text-white placeholder-gray-500", "disabled:opacity-50 disabled:cursor-not-allowed", "max-h-32");
        $[41] = t18;
    } else {
        t18 = $[41];
    }
    let t19;
    if ($[42] !== disabled || $[43] !== handleChange || $[44] !== handleKeyDown || $[45] !== message) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                ref: inputRef,
                value: message,
                onChange: handleChange,
                onKeyDown: handleKeyDown,
                placeholder: "Type a message...",
                disabled: disabled,
                rows: 1,
                className: t18
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatInput.tsx",
                lineNumber: 270,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatInput.tsx",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        $[42] = disabled;
        $[43] = handleChange;
        $[44] = handleKeyDown;
        $[45] = message;
        $[46] = t19;
    } else {
        t19 = $[46];
    }
    let t20;
    if ($[47] !== disabled || $[48] !== message) {
        t20 = !message.trim() || disabled;
        $[47] = disabled;
        $[48] = message;
        $[49] = t20;
    } else {
        t20 = $[49];
    }
    let t21;
    if ($[50] !== message) {
        t21 = message.trim() ? "bg-blue-600 text-white hover:bg-blue-700 scale-100" : "bg-gray-200 dark:bg-gray-700 text-gray-400 scale-95";
        $[50] = message;
        $[51] = t21;
    } else {
        t21 = $[51];
    }
    let t22;
    if ($[52] !== t21) {
        t22 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-3 rounded-full transition-all", t21, "disabled:opacity-50 disabled:cursor-not-allowed");
        $[52] = t21;
        $[53] = t22;
    } else {
        t22 = $[53];
    }
    let t23;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatInput.tsx",
                lineNumber: 306,
                columnNumber: 76
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatInput.tsx",
            lineNumber: 306,
            columnNumber: 11
        }, this);
        $[54] = t23;
    } else {
        t23 = $[54];
    }
    let t24;
    if ($[55] !== handleSend || $[56] !== t20 || $[57] !== t22) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleSend,
            disabled: t20,
            className: t22,
            children: t23
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatInput.tsx",
            lineNumber: 313,
            columnNumber: 11
        }, this);
        $[55] = handleSend;
        $[56] = t20;
        $[57] = t22;
        $[58] = t24;
    } else {
        t24 = $[58];
    }
    let t25;
    if ($[59] !== t13 || $[60] !== t14 || $[61] !== t17 || $[62] !== t19 || $[63] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t13,
            children: [
                t14,
                t17,
                t19,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatInput.tsx",
            lineNumber: 323,
            columnNumber: 11
        }, this);
        $[59] = t13;
        $[60] = t14;
        $[61] = t17;
        $[62] = t19;
        $[63] = t24;
        $[64] = t25;
    } else {
        t25 = $[64];
    }
    let t26;
    if ($[65] !== t15 || $[66] !== t16 || $[67] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t15,
            children: [
                t16,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatInput.tsx",
            lineNumber: 335,
            columnNumber: 11
        }, this);
        $[65] = t15;
        $[66] = t16;
        $[67] = t25;
        $[68] = t26;
    } else {
        t26 = $[68];
    }
    return t26;
}
_s(ChatInput, "Yb6xb3+s+fMcj5muBSUDctM8eY8=");
_c = ChatInput;
var _c;
__turbopack_context__.k.register(_c, "ChatInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/chat/ChatHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/formatDistanceToNow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/socket.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ChatHeader(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(44);
    if ($[0] !== "e25639a9273093e47c23f1bdf11915a3257b2f36cd1cb8e0d7761cbb9ed6f6a7") {
        for(let $i = 0; $i < 44; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e25639a9273093e47c23f1bdf11915a3257b2f36cd1cb8e0d7761cbb9ed6f6a7";
    }
    const { user, onBack, onInfo } = t0;
    const [isOnline, setIsOnline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(user.isOnline || false);
    const [lastActive, setLastActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(user.lastActiveAt);
    let t1;
    let t2;
    if ($[1] !== user.id) {
        t1 = ({
            "ChatHeader[useEffect()]": ()=>{
                const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSocket"])();
                if (!socket) {
                    return;
                }
                const handleOnline = {
                    "ChatHeader[useEffect() > handleOnline]": (data)=>{
                        if (data.userId === user.id) {
                            setIsOnline(true);
                        }
                    }
                }["ChatHeader[useEffect() > handleOnline]"];
                const handleOffline = {
                    "ChatHeader[useEffect() > handleOffline]": (data_0)=>{
                        if (data_0.userId === user.id) {
                            setIsOnline(false);
                            setLastActive(new Date().toISOString());
                        }
                    }
                }["ChatHeader[useEffect() > handleOffline]"];
                socket.on("user:online", handleOnline);
                socket.on("user:offline", handleOffline);
                return ()=>{
                    socket.off("user:online", handleOnline);
                    socket.off("user:offline", handleOffline);
                };
            }
        })["ChatHeader[useEffect()]"];
        t2 = [
            user.id
        ];
        $[1] = user.id;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[4] !== user.isOnline || $[5] !== user.lastActiveAt) {
        t3 = ({
            "ChatHeader[useEffect()]": ()=>{
                setIsOnline(user.isOnline || false);
                setLastActive(user.lastActiveAt);
            }
        })["ChatHeader[useEffect()]"];
        t4 = [
            user.isOnline,
            user.lastActiveAt
        ];
        $[4] = user.isOnline;
        $[5] = user.lastActiveAt;
        $[6] = t3;
        $[7] = t4;
    } else {
        t3 = $[6];
        t4 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[8] !== onBack) {
        t5 = onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onBack,
            className: "p-2 -ml-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full md:hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M15 19l-7-7 7-7"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatHeader.tsx",
                    lineNumber: 98,
                    columnNumber: 210
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatHeader.tsx",
                lineNumber: 98,
                columnNumber: 131
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatHeader.tsx",
            lineNumber: 98,
            columnNumber: 20
        }, this);
        $[8] = onBack;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const t6 = `/profile/${user.username}`;
    let t7;
    if ($[10] !== user.name || $[11] !== user.profileImage) {
        t7 = user.profileImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: user.profileImage,
            alt: user.name,
            className: "w-10 h-10 rounded-full object-cover"
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatHeader.tsx",
            lineNumber: 107,
            columnNumber: 30
        }, this) : user.name.charAt(0).toUpperCase();
        $[10] = user.name;
        $[11] = user.profileImage;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatHeader.tsx",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== isOnline) {
        t9 = isOnline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatHeader.tsx",
            lineNumber: 124,
            columnNumber: 22
        }, this);
        $[15] = isOnline;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== t6 || $[18] !== t8 || $[19] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t6,
            className: "relative flex-shrink-0",
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatHeader.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[17] = t6;
        $[18] = t8;
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    const t11 = `/profile/${user.username}`;
    let t12;
    if ($[21] !== t11 || $[22] !== user.name) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t11,
            className: "font-semibold text-gray-900 dark:text-white hover:underline truncate block",
            children: user.name
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatHeader.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[21] = t11;
        $[22] = user.name;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== isOnline || $[25] !== lastActive || $[26] !== user.username) {
        t13 = isOnline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-green-600 dark:text-green-400",
            children: "Online"
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatHeader.tsx",
            lineNumber: 152,
            columnNumber: 22
        }, this) : lastActive ? `Last seen ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDistanceToNow"])(new Date(lastActive), {
            addSuffix: true
        })}` : `@${user.username}`;
        $[24] = isOnline;
        $[25] = lastActive;
        $[26] = user.username;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    let t14;
    if ($[28] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500 dark:text-gray-400",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatHeader.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[28] = t13;
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    let t15;
    if ($[30] !== t12 || $[31] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 min-w-0",
            children: [
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatHeader.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[30] = t12;
        $[31] = t14;
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    let t16;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors",
            title: "Voice call (coming soon)",
            disabled: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatHeader.tsx",
                    lineNumber: 181,
                    columnNumber: 294
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatHeader.tsx",
                lineNumber: 181,
                columnNumber: 215
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatHeader.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[33] = t16;
    } else {
        t16 = $[33];
    }
    let t17;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors",
            title: "Video call (coming soon)",
            disabled: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatHeader.tsx",
                    lineNumber: 188,
                    columnNumber: 294
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatHeader.tsx",
                lineNumber: 188,
                columnNumber: 215
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatHeader.tsx",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] !== onInfo) {
        t18 = onInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onInfo,
            className: "p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors",
            title: "Chat info",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatHeader.tsx",
                    lineNumber: 195,
                    columnNumber: 290
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatHeader.tsx",
                lineNumber: 195,
                columnNumber: 211
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatHeader.tsx",
            lineNumber: 195,
            columnNumber: 21
        }, this);
        $[35] = onInfo;
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    let t19;
    if ($[37] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t16,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatHeader.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[37] = t18;
        $[38] = t19;
    } else {
        t19 = $[38];
    }
    let t20;
    if ($[39] !== t10 || $[40] !== t15 || $[41] !== t19 || $[42] !== t5) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900",
            children: [
                t5,
                t10,
                t15,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatHeader.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[39] = t10;
        $[40] = t15;
        $[41] = t19;
        $[42] = t5;
        $[43] = t20;
    } else {
        t20 = $[43];
    }
    return t20;
}
_s(ChatHeader, "lI/v0EragmvvCY16laYYGwI6UnI=");
_c = ChatHeader;
var _c;
__turbopack_context__.k.register(_c, "ChatHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/chat/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/ChatList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/ChatMessages.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/ChatInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/ChatHeader.tsx [app-client] (ecmascript)");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/chat/ChatList.tsx [app-client] (ecmascript) <export default as ChatList>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatList",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/ChatList.tsx [app-client] (ecmascript)");
}),
"[project]/src/components/chat/ChatMessages.tsx [app-client] (ecmascript) <export default as ChatMessages>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatMessages",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/ChatMessages.tsx [app-client] (ecmascript)");
}),
"[project]/src/components/chat/ChatInput.tsx [app-client] (ecmascript) <export default as ChatInput>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/ChatInput.tsx [app-client] (ecmascript)");
}),
"[project]/src/components/chat/ChatHeader.tsx [app-client] (ecmascript) <export default as ChatHeader>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatHeader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/ChatHeader.tsx [app-client] (ecmascript)");
}),
"[project]/src/app/messages/[conversationId]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConversationPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$ProtectedRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/ProtectedRoute.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/chat/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatList$3e$__ = __turbopack_context__.i("[project]/src/components/chat/ChatList.tsx [app-client] (ecmascript) <export default as ChatList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatMessages$3e$__ = __turbopack_context__.i("[project]/src/components/chat/ChatMessages.tsx [app-client] (ecmascript) <export default as ChatMessages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatInput$3e$__ = __turbopack_context__.i("[project]/src/components/chat/ChatInput.tsx [app-client] (ecmascript) <export default as ChatInput>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatHeader$3e$__ = __turbopack_context__.i("[project]/src/components/chat/ChatHeader.tsx [app-client] (ecmascript) <export default as ChatHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/chat.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/socket.ts [app-client] (ecmascript)");
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
function ConversationPage({ params }) {
    _s();
    const resolvedParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [conversation, setConversation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [replyTo, setReplyTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Initialize socket
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConversationPage.useEffect": ()=>{
            if (user?.id) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeSocket"])();
            }
        }
    }["ConversationPage.useEffect"], [
        user?.id
    ]);
    // Fetch conversation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConversationPage.useEffect": ()=>{
            const fetchConversation = {
                "ConversationPage.useEffect.fetchConversation": async ()=>{
                    try {
                        setLoading(true);
                        const conv = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConversation"])(resolvedParams.conversationId);
                        setConversation(conv);
                    } catch (err) {
                        setError(err.message || 'Failed to load conversation');
                    } finally{
                        setLoading(false);
                    }
                }
            }["ConversationPage.useEffect.fetchConversation"];
            if (resolvedParams.conversationId && user?.id) {
                fetchConversation();
            }
        }
    }["ConversationPage.useEffect"], [
        resolvedParams.conversationId,
        user?.id
    ]);
    const handleBack = ()=>{
        router.push('/messages');
    };
    const handleSelectConversation = (conv_0)=>{
        router.push(`/messages/${conv_0.id}`);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$ProtectedRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProtectedRoute"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
                }, void 0, false, {
                    fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
            lineNumber: 63,
            columnNumber: 12
        }, this);
    }
    if (error || !conversation) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$ProtectedRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProtectedRoute"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-500 mb-4",
                            children: error || 'Conversation not found'
                        }, void 0, false, {
                            fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleBack,
                            className: "text-blue-600 hover:underline",
                            children: "Go back to messages"
                        }, void 0, false, {
                            fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
            lineNumber: 70,
            columnNumber: 12
        }, this);
    }
    const otherUser = conversation.otherParticipant;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$ProtectedRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProtectedRoute"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 dark:bg-gray-900",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-screen",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex md:w-96 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 border-b border-gray-200 dark:border-gray-700",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-bold text-gray-900 dark:text-white",
                                            children: "Messages"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatList$3e$__["ChatList"], {
                                    selectedConversationId: resolvedParams.conversationId,
                                    onSelectConversation: handleSelectConversation,
                                    currentUserId: user?.id
                                }, void 0, false, {
                                    fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col bg-white dark:bg-gray-900 pb-24",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatHeader$3e$__["ChatHeader"], {
                                    user: otherUser,
                                    onBack: handleBack
                                }, void 0, false, {
                                    fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatMessages$3e$__["ChatMessages"], {
                                    conversationId: resolvedParams.conversationId,
                                    currentUserId: user.id,
                                    otherUser: otherUser
                                }, void 0, false, {
                                    fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatInput$3e$__["ChatInput"], {
                                    conversationId: resolvedParams.conversationId,
                                    replyTo: replyTo || undefined,
                                    onCancelReply: ()=>setReplyTo(null)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                    lineNumber: 85,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
        lineNumber: 82,
        columnNumber: 10
    }, this);
}
_s(ConversationPage, "1M+txXt3ZDdA4AQEMPsmPe1ZfiY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = ConversationPage;
var _c;
__turbopack_context__.k.register(_c, "ConversationPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_a6706fbe._.js.map