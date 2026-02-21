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
    ()=>sendMessage,
    "uploadChatMedia",
    ()=>uploadChatMedia
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
async function uploadChatMedia(file, mediaType, onProgress) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('mediaType', mediaType);
    // Use axios with proper config for file uploads
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/chat/upload', formData, {
        timeout: 120000,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        onUploadProgress: (progressEvent)=>{
            if (onProgress && progressEvent.total) {
                const progress = Math.round(progressEvent.loaded / progressEvent.total * 100);
                onProgress(progress);
            }
        }
    });
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
                // Only show loading if we don't have any conversations yet
                if (conversations.length === 0) {
                    setLoading(true);
                }
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
    }["ChatList.useCallback[fetchConversations]"], [
        conversations.length
    ]);
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
                lineNumber: 120,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 119,
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
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 124,
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
                    lineNumber: 133,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "No conversations yet"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatList.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm mt-2",
                    children: "Start a chat with someone!"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatList.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 132,
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
                        lineNumber: 140,
                        columnNumber: 46
                    }, this)),
                hasMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: loadMore,
                    disabled: loading,
                    className: "w-full py-3 text-sm text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800",
                    children: loading ? 'Loading...' : 'Load more'
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatList.tsx",
                    lineNumber: 142,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 139,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/chat/ChatList.tsx",
        lineNumber: 138,
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
    if ($[0] !== "e72c5cc5b1acac6f1d58133b1c6c87c3f5b68ad4555168eb59dec0769d64f03f") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e72c5cc5b1acac6f1d58133b1c6c87c3f5b68ad4555168eb59dec0769d64f03f";
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
            lineNumber: 189,
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
            lineNumber: 198,
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
            lineNumber: 206,
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
            lineNumber: 214,
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
            lineNumber: 232,
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
            lineNumber: 241,
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
            lineNumber: 251,
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
                        lineNumber: 260,
                        columnNumber: 84
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm truncate", isUnread ? "text-gray-900 dark:text-white font-medium" : "text-gray-500 dark:text-gray-400"),
                        children: lastMessage.contentType === "image" ? "\uD83D\uDCF7 Photo" : lastMessage.contentType === "file" ? "\uD83D\uDCCE File" : lastMessage.contentType === "voice" ? "\uD83C\uDFA4 Voice message" : lastMessage.content
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatList.tsx",
                        lineNumber: 260,
                        columnNumber: 245
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-400 italic",
                children: "No messages yet"
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatList.tsx",
                lineNumber: 260,
                columnNumber: 596
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 260,
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
            lineNumber: 270,
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
                lineNumber: 279,
                columnNumber: 120
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatList.tsx",
            lineNumber: 279,
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
            lineNumber: 288,
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
"[project]/src/components/chat/MessageMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageQuickActions",
    ()=>MessageQuickActions,
    "default",
    ()=>MessageMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$reply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Reply$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/reply.js [app-client] (ecmascript) <export default as Reply>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Forward$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/forward.js [app-client] (ecmascript) <export default as Forward>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pin.js [app-client] (ecmascript) <export default as Pin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    '🙏',
    '🔥',
    '👏'
];
function MessageMenu({ isOpen, onClose, isOwn, messageId, messageContent, hasMedia, mediaUrl, onReply, onEdit, onDelete, onReact, onCopy, onForward, onPin, onStar, position, anchorPosition = 'right' }) {
    _s();
    const [showDeleteOptions, setShowDeleteOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showReactions, setShowReactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close menu when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessageMenu.useEffect": ()=>{
            const handleClickOutside = {
                "MessageMenu.useEffect.handleClickOutside": (event)=>{
                    if (menuRef.current && !menuRef.current.contains(event.target)) {
                        onClose();
                    }
                }
            }["MessageMenu.useEffect.handleClickOutside"];
            if (isOpen) {
                document.addEventListener('mousedown', handleClickOutside);
            }
            return ({
                "MessageMenu.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["MessageMenu.useEffect"];
        }
    }["MessageMenu.useEffect"], [
        isOpen,
        onClose
    ]);
    // Handle keyboard shortcuts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessageMenu.useEffect": ()=>{
            const handleKeyDown = {
                "MessageMenu.useEffect.handleKeyDown": (event_0)=>{
                    if (!isOpen) return;
                    if (event_0.key === 'Escape') {
                        onClose();
                    } else if (event_0.key === 'r' && !event_0.metaKey && !event_0.ctrlKey) {
                        onReply();
                        onClose();
                    } else if (event_0.key === 'c' && (event_0.metaKey || event_0.ctrlKey)) {
                        onCopy();
                        onClose();
                    }
                }
            }["MessageMenu.useEffect.handleKeyDown"];
            document.addEventListener('keydown', handleKeyDown);
            return ({
                "MessageMenu.useEffect": ()=>document.removeEventListener('keydown', handleKeyDown)
            })["MessageMenu.useEffect"];
        }
    }["MessageMenu.useEffect"], [
        isOpen,
        onClose,
        onReply,
        onCopy
    ]);
    const handleCopy = ()=>{
        navigator.clipboard.writeText(messageContent);
        onCopy();
        onClose();
    };
    const handleDownload = ()=>{
        if (mediaUrl) {
            const link = document.createElement('a');
            link.href = mediaUrl;
            link.download = '';
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        onClose();
    };
    const menuItems = [
        {
            id: 'reply',
            label: 'Reply',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$reply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Reply$3e$__["Reply"],
            onClick: ()=>{
                onReply();
                onClose();
            },
            shortcut: 'R'
        },
        {
            id: 'copy',
            label: 'Copy',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"],
            onClick: handleCopy,
            shortcut: '⌘C'
        },
        ...isOwn ? [
            {
                id: 'edit',
                label: 'Edit',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"],
                onClick: ()=>{
                    onEdit?.();
                    onClose();
                }
            }
        ] : [],
        ...hasMedia && mediaUrl ? [
            {
                id: 'download',
                label: 'Download',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"],
                onClick: handleDownload
            }
        ] : [],
        {
            id: 'forward',
            label: 'Forward',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Forward$3e$__["Forward"],
            onClick: ()=>{
                onForward?.();
                onClose();
            },
            disabled: true // Coming soon
        },
        {
            id: 'pin',
            label: 'Pin',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pin$3e$__["Pin"],
            onClick: ()=>{
                onPin?.();
                onClose();
            },
            disabled: true // Coming soon
        },
        {
            id: 'star',
            label: 'Star',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
            onClick: ()=>{
                onStar?.();
                onClose();
            },
            disabled: true // Coming soon
        },
        {
            id: 'delete',
            label: 'Delete',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"],
            onClick: ()=>setShowDeleteOptions(true),
            danger: true
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            ref: menuRef,
            initial: {
                opacity: 0,
                scale: 0.95,
                y: -10
            },
            animate: {
                opacity: 1,
                scale: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                scale: 0.95,
                y: -10
            },
            transition: {
                duration: 0.15
            },
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute z-50 min-w-[200px]', 'bg-white dark:bg-gray-800 rounded-xl shadow-xl', 'border border-gray-200 dark:border-gray-700', 'overflow-hidden'),
            style: position ? {
                top: position.y,
                left: anchorPosition === 'left' ? position.x : undefined,
                right: anchorPosition === 'right' ? position.x : undefined
            } : {
                top: '-8px',
                [anchorPosition === 'left' ? 'left' : 'right']: '100%',
                marginLeft: anchorPosition === 'left' ? '8px' : undefined,
                marginRight: anchorPosition === 'right' ? '8px' : undefined
            },
            children: [
                showReactions && !showDeleteOptions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-2 border-b border-gray-200 dark:border-gray-700",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: REACTION_EMOJIS.map((emoji)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    onReact(emoji);
                                    onClose();
                                },
                                className: "p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all hover:scale-125",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg",
                                    children: emoji
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/MessageMenu.tsx",
                                    lineNumber: 197,
                                    columnNumber: 21
                                }, this)
                            }, emoji, false, {
                                fileName: "[project]/src/components/chat/MessageMenu.tsx",
                                lineNumber: 193,
                                columnNumber: 47
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/MessageMenu.tsx",
                        lineNumber: 192,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/MessageMenu.tsx",
                    lineNumber: 191,
                    columnNumber: 51
                }, this),
                showDeleteOptions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400",
                            children: "Delete message?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/MessageMenu.tsx",
                            lineNumber: 204,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                onDelete(false);
                                onClose();
                            },
                            className: "w-full flex items-center gap-3 px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/MessageMenu.tsx",
                                    lineNumber: 211,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Delete for me"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/MessageMenu.tsx",
                                    lineNumber: 212,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/chat/MessageMenu.tsx",
                            lineNumber: 207,
                            columnNumber: 15
                        }, this),
                        isOwn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                onDelete(true);
                                onClose();
                            },
                            className: "w-full flex items-center gap-3 px-3 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/MessageMenu.tsx",
                                    lineNumber: 218,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Delete for everyone"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/MessageMenu.tsx",
                                    lineNumber: 219,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/chat/MessageMenu.tsx",
                            lineNumber: 214,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowDeleteOptions(false),
                            className: "w-full px-3 py-2 text-left text-sm text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/MessageMenu.tsx",
                            lineNumber: 221,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/chat/MessageMenu.tsx",
                    lineNumber: 203,
                    columnNumber: 32
                }, this) : /* Main menu items */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-1",
                    children: menuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: item.onClick,
                            disabled: item.disabled,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full flex items-center justify-between gap-3 px-3 py-2 text-left text-sm transition-colors', item.danger ? 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700', item.disabled && 'opacity-50 cursor-not-allowed'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/MessageMenu.tsx",
                                            lineNumber: 228,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/MessageMenu.tsx",
                                            lineNumber: 229,
                                            columnNumber: 21
                                        }, this),
                                        item.disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-gray-400",
                                            children: "(soon)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/MessageMenu.tsx",
                                            lineNumber: 230,
                                            columnNumber: 39
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/chat/MessageMenu.tsx",
                                    lineNumber: 227,
                                    columnNumber: 19
                                }, this),
                                item.shortcut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-gray-400",
                                    children: item.shortcut
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/MessageMenu.tsx",
                                    lineNumber: 232,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/src/components/chat/MessageMenu.tsx",
                            lineNumber: 226,
                            columnNumber: 38
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/MessageMenu.tsx",
                    lineNumber: 225,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/MessageMenu.tsx",
            lineNumber: 166,
            columnNumber: 18
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/chat/MessageMenu.tsx",
        lineNumber: 165,
        columnNumber: 10
    }, this);
}
_s(MessageMenu, "/pHt+v5uVczYOK/2LQZzyetiC5s=");
_c = MessageMenu;
function MessageQuickActions(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "45fe99633eac34315e6acbfc4e934975fa9167541b873999e31defb506e3ea75") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "45fe99633eac34315e6acbfc4e934975fa9167541b873999e31defb506e3ea75";
    }
    const { isVisible, isOwn, onReply, onReact, onMore } = t0;
    let t1;
    if ($[1] !== isOwn || $[2] !== isVisible || $[3] !== onMore || $[4] !== onReact || $[5] !== onReply) {
        t1 = isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 5
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: 5
            },
            transition: {
                duration: 0.1
            },
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute -top-8 flex items-center gap-0.5", "bg-white dark:bg-gray-800 rounded-lg shadow-lg", "border border-gray-200 dark:border-gray-700 p-0.5", isOwn ? "right-0" : "left-8"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onReact,
                    className: "p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors",
                    title: "Add reaction",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm",
                        children: "😀"
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/MessageMenu.tsx",
                        lineNumber: 275,
                        columnNumber: 333
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/MessageMenu.tsx",
                    lineNumber: 275,
                    columnNumber: 201
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onReply,
                    className: "p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors",
                    title: "Reply",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$reply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Reply$3e$__["Reply"], {
                        className: "w-4 h-4 text-gray-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/MessageMenu.tsx",
                        lineNumber: 275,
                        columnNumber: 502
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/MessageMenu.tsx",
                    lineNumber: 275,
                    columnNumber: 377
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onMore,
                    className: "p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors",
                    title: "More options",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                        className: "w-4 h-4 text-gray-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/MessageMenu.tsx",
                        lineNumber: 275,
                        columnNumber: 685
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/MessageMenu.tsx",
                    lineNumber: 275,
                    columnNumber: 554
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/MessageMenu.tsx",
            lineNumber: 264,
            columnNumber: 23
        }, this);
        $[1] = isOwn;
        $[2] = isVisible;
        $[3] = onMore;
        $[4] = onReact;
        $[5] = onReply;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/components/chat/MessageMenu.tsx",
            lineNumber: 287,
            columnNumber: 10
        }, this);
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c1 = MessageQuickActions;
var _c, _c1;
__turbopack_context__.k.register(_c, "MessageMenu");
__turbopack_context__.k.register(_c1, "MessageQuickActions");
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
        color: 'bg-gray-50 dark:bg-gray-900'
    },
    {
        id: 'gradient-1',
        name: 'Ocean',
        color: 'bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30'
    },
    {
        id: 'gradient-2',
        name: 'Sunset',
        color: 'bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30'
    },
    {
        id: 'gradient-3',
        name: 'Forest',
        color: 'bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30'
    },
    {
        id: 'gradient-4',
        name: 'Lavender',
        color: 'bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30'
    },
    {
        id: 'gradient-5',
        name: 'Rose',
        color: 'bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30'
    },
    {
        id: 'gradient-6',
        name: 'Midnight',
        color: 'bg-gradient-to-br from-slate-800 to-gray-900'
    },
    {
        id: 'gradient-7',
        name: 'Sky',
        color: 'bg-gradient-to-br from-sky-100 to-indigo-100 dark:from-sky-900/30 dark:to-indigo-900/30'
    },
    {
        id: 'gradient-8',
        name: 'Amber',
        color: 'bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30'
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
    if ($[0] !== "5d589eea71128b5d5c150dcca2fc8321a62ce29f109fef8d84608ffb6197b26b") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5d589eea71128b5d5c150dcca2fc8321a62ce29f109fef8d84608ffb6197b26b";
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$MessageMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/MessageMenu.tsx [app-client] (ecmascript)");
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
;
const REACTION_EMOJIS = [
    '❤️',
    '👍',
    '😂',
    '😮',
    '😢',
    '🙏'
];
function ChatMessages({ conversationId, currentUserId, otherUser, wallpaper = 'default', onReply, uploadingMessages = [] }) {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingMore, setLoadingMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [nextCursor, setNextCursor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [typingUser, setTypingUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [highlightedMessageId, setHighlightedMessageId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [viewingImage, setViewingImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [viewingVideo, setViewingVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const messagesContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const messageRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const [shouldAutoScroll, setShouldAutoScroll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Scroll to a specific message and highlight it
    const scrollToMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatMessages.useCallback[scrollToMessage]": (messageId)=>{
            const messageElement = messageRefs.current.get(messageId);
            if (messageElement) {
                messageElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                setHighlightedMessageId(messageId);
                // Remove highlight after 1.5 seconds
                setTimeout({
                    "ChatMessages.useCallback[scrollToMessage]": ()=>{
                        setHighlightedMessageId(null);
                    }
                }["ChatMessages.useCallback[scrollToMessage]"], 1500);
            }
        }
    }["ChatMessages.useCallback[scrollToMessage]"], []);
    // Register message ref
    const registerMessageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatMessages.useCallback[registerMessageRef]": (messageId_0, element)=>{
            if (element) {
                messageRefs.current.set(messageId_0, element);
            } else {
                messageRefs.current.delete(messageId_0);
            }
        }
    }["ChatMessages.useCallback[registerMessageRef]"], []);
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
                lineNumber: 291,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 290,
            columnNumber: 12
        }, this);
    }
    // Get wallpaper styles
    const wallpaperOption = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatSettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WALLPAPER_OPTIONS"].find((w)=>w.id === wallpaper) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatSettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WALLPAPER_OPTIONS"][0];
    const wallpaperClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(wallpaperOption.color, wallpaperOption.pattern);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            lineNumber: 301,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatMessages.tsx",
                        lineNumber: 300,
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
                                        lineNumber: 307,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                    lineNumber: 306,
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
                                        isHighlighted: highlightedMessageId === message_0.id,
                                        onScrollToReply: scrollToMessage,
                                        registerRef: (el)=>registerMessageRef(message_0.id, el),
                                        onReply: onReply ? ()=>onReply({
                                                id: message_0.id,
                                                content: message_0.content,
                                                senderName: message_0.senderId === currentUserId ? 'You' : otherUser.name
                                            }) : undefined,
                                        onViewImage: setViewingImage,
                                        onViewVideo: setViewingVideo
                                    }, message_0.id, false, {
                                        fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                        lineNumber: 316,
                                        columnNumber: 18
                                    }, this);
                                })
                            ]
                        }, dateKey_0, true, {
                            fileName: "[project]/src/components/chat/ChatMessages.tsx",
                            lineNumber: 304,
                            columnNumber: 75
                        }, this)),
                    uploadingMessages.map((uploadingMsg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end mb-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative max-w-[70%]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-br-sm",
                                    children: [
                                        uploadingMsg.preview && (uploadingMsg.type === 'image' || uploadingMsg.type === 'video') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative mb-2 rounded-lg overflow-hidden",
                                            children: [
                                                uploadingMsg.type === 'image' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: uploadingMsg.preview,
                                                    alt: "Uploading",
                                                    className: "max-w-full opacity-70",
                                                    style: {
                                                        maxHeight: '200px'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 52
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                    src: uploadingMsg.preview,
                                                    className: "max-w-full opacity-70",
                                                    style: {
                                                        maxHeight: '200px'
                                                    },
                                                    muted: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 flex items-center justify-center bg-black/30",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-12 h-12",
                                                                viewBox: "0 0 36 36",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                        cx: "18",
                                                                        cy: "18",
                                                                        r: "16",
                                                                        fill: "none",
                                                                        stroke: "rgba(255,255,255,0.3)",
                                                                        strokeWidth: "3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                                                        lineNumber: 339,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                        cx: "18",
                                                                        cy: "18",
                                                                        r: "16",
                                                                        fill: "none",
                                                                        stroke: "white",
                                                                        strokeWidth: "3",
                                                                        strokeDasharray: `${uploadingMsg.progress}, 100`,
                                                                        strokeLinecap: "round",
                                                                        transform: "rotate(-90 18 18)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                                                        lineNumber: 340,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                                                lineNumber: 338,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute inset-0 flex items-center justify-center text-white text-xs font-medium",
                                                                children: [
                                                                    uploadingMsg.progress,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                                                lineNumber: 342,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                            lineNumber: 329,
                                            columnNumber: 108
                                        }, this),
                                        (uploadingMsg.type === 'audio' || uploadingMsg.type === 'document') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative w-10 h-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-10 h-10",
                                                            viewBox: "0 0 36 36",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "18",
                                                                    cy: "18",
                                                                    r: "16",
                                                                    fill: "none",
                                                                    stroke: "rgba(255,255,255,0.3)",
                                                                    strokeWidth: "3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                                                    lineNumber: 353,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "18",
                                                                    cy: "18",
                                                                    r: "16",
                                                                    fill: "none",
                                                                    stroke: "white",
                                                                    strokeWidth: "3",
                                                                    strokeDasharray: `${uploadingMsg.progress}, 100`,
                                                                    strokeLinecap: "round",
                                                                    transform: "rotate(-90 18 18)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                                                    lineNumber: 354,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                                            lineNumber: 352,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute inset-0 flex items-center justify-center text-white text-xs",
                                                            children: uploadingMsg.type === 'audio' ? '🎤' : '📄'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                                            lineNumber: 356,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm truncate",
                                                            children: uploadingMsg.fileName || 'Uploading...'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                                            lineNumber: 361,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs opacity-70",
                                                            children: [
                                                                "Sending... ",
                                                                uploadingMsg.progress,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                                            lineNumber: 362,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                                    lineNumber: 360,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                            lineNumber: 350,
                                            columnNumber: 87
                                        }, this),
                                        (uploadingMsg.type === 'image' || uploadingMsg.type === 'video') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm",
                                            children: uploadingMsg.type === 'image' ? '📷 Sending photo...' : '🎥 Sending video...'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                            lineNumber: 367,
                                            columnNumber: 84
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                    lineNumber: 327,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                lineNumber: 326,
                                columnNumber: 11
                            }, this)
                        }, uploadingMsg.id, false, {
                            fileName: "[project]/src/components/chat/ChatMessages.tsx",
                            lineNumber: 325,
                            columnNumber: 46
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
                                        lineNumber: 377,
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
                                        lineNumber: 378,
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
                                        lineNumber: 381,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                lineNumber: 376,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    otherUser.name,
                                    " is typing..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/chat/ChatMessages.tsx",
                        lineNumber: 375,
                        columnNumber: 22
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: messagesEndRef
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatMessages.tsx",
                        lineNumber: 388,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                lineNumber: 299,
                columnNumber: 5
            }, this),
            viewingImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4",
                onClick: ()=>setViewingImage(null),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setViewingImage(null),
                        className: "absolute top-4 right-4 text-white hover:bg-white/10 p-2 rounded-full transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-8 w-8",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M6 18L18 6M6 6l12 12"
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                lineNumber: 395,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/ChatMessages.tsx",
                            lineNumber: 394,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatMessages.tsx",
                        lineNumber: 393,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: viewingImage,
                        alt: "Full size image",
                        className: "max-w-full max-h-full object-contain rounded-lg",
                        onClick: (e_0)=>e_0.stopPropagation()
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatMessages.tsx",
                        lineNumber: 398,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: viewingImage,
                        download: true,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: (e_1)=>e_1.stopPropagation(),
                        className: "absolute bottom-4 right-4 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                    lineNumber: 401,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                lineNumber: 400,
                                columnNumber: 11
                            }, this),
                            "Download"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/chat/ChatMessages.tsx",
                        lineNumber: 399,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                lineNumber: 392,
                columnNumber: 22
            }, this),
            viewingVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4",
                onClick: ()=>setViewingVideo(null),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setViewingVideo(null),
                        className: "absolute top-4 right-4 text-white hover:bg-white/10 p-2 rounded-full transition-colors z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-8 w-8",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M6 18L18 6M6 6l12 12"
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                lineNumber: 411,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/ChatMessages.tsx",
                            lineNumber: 410,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatMessages.tsx",
                        lineNumber: 409,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        src: viewingVideo,
                        controls: true,
                        autoPlay: true,
                        className: "max-w-full max-h-full rounded-lg",
                        style: {
                            maxHeight: '90vh',
                            maxWidth: '90vw'
                        },
                        onClick: (e_2)=>e_2.stopPropagation()
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatMessages.tsx",
                        lineNumber: 414,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: viewingVideo,
                        download: true,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: (e_3)=>e_3.stopPropagation(),
                        className: "absolute bottom-4 right-4 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                    lineNumber: 420,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                lineNumber: 419,
                                columnNumber: 11
                            }, this),
                            "Download"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/chat/ChatMessages.tsx",
                        lineNumber: 418,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                lineNumber: 408,
                columnNumber: 22
            }, this)
        ]
    }, void 0, true);
}
_s(ChatMessages, "PQGcfPzWUk2eJbbwyutsUNHGW1k=");
_c = ChatMessages;
function MessageBubble(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(141);
    if ($[0] !== "9dc0e1562a79b810a1848550e7ec54ca11c5088725776032d43537ad810bae9f") {
        for(let $i = 0; $i < 141; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9dc0e1562a79b810a1848550e7ec54ca11c5088725776032d43537ad810bae9f";
    }
    const { message, isOwn, showAvatar, otherUser, conversationId, isHighlighted: t1, onScrollToReply, registerRef, onReply, onViewImage, onViewVideo } = t0;
    const isHighlighted = t1 === undefined ? false : t1;
    const [showActions, setShowActions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showMenu, setShowMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showReactions, setShowReactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editContent, setEditContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(message.content);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    if ($[1] !== conversationId || $[2] !== message.id) {
        t2 = ({
            "MessageBubble[handleDelete]": (forEveryone)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteChatMessage"])(message.id, conversationId, forEveryone);
                setShowActions(false);
                setShowMenu(false);
            }
        })["MessageBubble[handleDelete]"];
        $[1] = conversationId;
        $[2] = message.id;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleDelete = t2;
    let t3;
    if ($[4] !== conversationId || $[5] !== editContent || $[6] !== message.content || $[7] !== message.id) {
        t3 = ({
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
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    const handleEdit = t3;
    let t4;
    if ($[9] !== conversationId || $[10] !== message.id) {
        t4 = ({
            "MessageBubble[handleReaction]": (emoji)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reactToChatMessage"])(message.id, conversationId, emoji);
                setShowReactions(false);
            }
        })["MessageBubble[handleReaction]"];
        $[9] = conversationId;
        $[10] = message.id;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    const handleReaction = t4;
    if (message.isDeleted) {
        const t5 = isOwn ? "justify-end" : "justify-start";
        let t6;
        if ($[12] !== t5) {
            t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2", t5);
            $[12] = t5;
            $[13] = t6;
        } else {
            t6 = $[13];
        }
        let t7;
        if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-100 dark:bg-gray-800 text-gray-500 italic px-4 py-2 rounded-lg text-sm",
                children: "This message was deleted"
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                lineNumber: 537,
                columnNumber: 12
            }, this);
            $[14] = t7;
        } else {
            t7 = $[14];
        }
        let t8;
        if ($[15] !== registerRef || $[16] !== t6) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: registerRef,
                className: t6,
                children: t7
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                lineNumber: 544,
                columnNumber: 12
            }, this);
            $[15] = registerRef;
            $[16] = t6;
            $[17] = t8;
        } else {
            t8 = $[17];
        }
        return t8;
    }
    const t5 = isOwn ? "justify-end" : "justify-start";
    const t6 = isHighlighted && "bg-yellow-100/50 dark:bg-yellow-900/30 -mx-2 px-2 py-1 rounded-lg";
    let t7;
    if ($[18] !== t5 || $[19] !== t6) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex gap-2 group transition-all duration-300", t5, t6);
        $[18] = t5;
        $[19] = t6;
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    let t8;
    let t9;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "MessageBubble[<div>.onMouseEnter]": ()=>setShowActions(true)
        })["MessageBubble[<div>.onMouseEnter]"];
        t9 = ({
            "MessageBubble[<div>.onMouseLeave]": ()=>{
                setShowActions(false);
                setShowReactions(false);
            }
        })["MessageBubble[<div>.onMouseLeave]"];
        $[21] = t8;
        $[22] = t9;
    } else {
        t8 = $[21];
        t9 = $[22];
    }
    let t10;
    if ($[23] !== isOwn || $[24] !== otherUser || $[25] !== showAvatar) {
        t10 = !isOwn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-8 h-8 flex-shrink-0", !showAvatar && "invisible"),
            children: showAvatar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm font-medium",
                children: otherUser.profileImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: otherUser.profileImage,
                    alt: otherUser.name,
                    className: "w-8 h-8 rounded-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                    lineNumber: 584,
                    columnNumber: 283
                }, this) : otherUser.name.charAt(0).toUpperCase()
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                lineNumber: 584,
                columnNumber: 109
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 584,
            columnNumber: 21
        }, this);
        $[23] = isOwn;
        $[24] = otherUser;
        $[25] = showAvatar;
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    const t11 = isOwn && "order-first";
    let t12;
    if ($[27] !== t11) {
        t12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("max-w-[70%] relative", t11);
        $[27] = t11;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== isOwn || $[30] !== message.replyTo || $[31] !== onScrollToReply) {
        t13 = message.replyTo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "MessageBubble[<button>.onClick]": ()=>onScrollToReply?.(message.replyTo.id)
            }["MessageBubble[<button>.onClick]"],
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs p-2 rounded-t-lg border-l-2 w-full text-left cursor-pointer hover:opacity-80 transition-opacity", isOwn ? "bg-blue-600/20 border-blue-400" : "bg-gray-100 dark:bg-gray-800 border-gray-400"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-500 text-[10px]",
                    children: "↩ Replying to"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                    lineNumber: 605,
                    columnNumber: 256
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "truncate text-gray-700 dark:text-gray-300",
                    children: message.replyTo.content
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                    lineNumber: 605,
                    columnNumber: 320
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 603,
            columnNumber: 30
        }, this);
        $[29] = isOwn;
        $[30] = message.replyTo;
        $[31] = onScrollToReply;
        $[32] = t13;
    } else {
        t13 = $[32];
    }
    const t14 = isOwn ? "bg-blue-600 text-white rounded-br-sm" : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-bl-sm";
    const t15 = message.replyTo && "rounded-t-none";
    let t16;
    if ($[33] !== t14 || $[34] !== t15) {
        t16 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4 py-2 rounded-2xl relative", t14, t15);
        $[33] = t14;
        $[34] = t15;
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    let t17;
    if ($[36] !== message.contentType || $[37] !== message.mediaUrl || $[38] !== onViewImage) {
        t17 = message.mediaUrl && message.contentType === "image" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "MessageBubble[<button>.onClick]": ()=>onViewImage?.(message.mediaUrl)
            }["MessageBubble[<button>.onClick]"],
            className: "block w-full text-left",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: message.mediaUrl,
                alt: "Shared image",
                className: "rounded-lg max-w-full mb-2 cursor-pointer hover:opacity-90 transition-opacity",
                style: {
                    maxHeight: "300px"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                lineNumber: 628,
                columnNumber: 78
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 626,
            columnNumber: 66
        }, this);
        $[36] = message.contentType;
        $[37] = message.mediaUrl;
        $[38] = onViewImage;
        $[39] = t17;
    } else {
        t17 = $[39];
    }
    let t18;
    if ($[40] !== message.contentType || $[41] !== message.mediaUrl || $[42] !== onViewVideo) {
        t18 = message.mediaUrl && message.contentType === "video" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative group cursor-pointer mb-2",
            onClick: {
                "MessageBubble[<div>.onClick]": ()=>onViewVideo?.(message.mediaUrl)
            }["MessageBubble[<div>.onClick]"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    src: message.mediaUrl,
                    className: "rounded-lg max-w-full",
                    style: {
                        maxHeight: "300px"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                    lineNumber: 642,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-14 h-14 rounded-full bg-white/90 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-8 w-8 text-gray-900 ml-1",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M8 5v14l11-7z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                lineNumber: 644,
                                columnNumber: 348
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/ChatMessages.tsx",
                            lineNumber: 644,
                            columnNumber: 229
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatMessages.tsx",
                        lineNumber: 644,
                        columnNumber: 144
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                    lineNumber: 644,
                    columnNumber: 12
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 640,
            columnNumber: 66
        }, this);
        $[40] = message.contentType;
        $[41] = message.mediaUrl;
        $[42] = onViewVideo;
        $[43] = t18;
    } else {
        t18 = $[43];
    }
    let t19;
    if ($[44] !== isOwn || $[45] !== message.contentType || $[46] !== message.mediaUrl) {
        t19 = message.mediaUrl && message.contentType === "audio" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 p-2 rounded-lg mb-2", isOwn ? "bg-blue-700/50" : "bg-gray-200 dark:bg-gray-700"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-10 h-10 rounded-full bg-green-500 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white text-lg",
                        children: "🎤"
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatMessages.tsx",
                        lineNumber: 654,
                        columnNumber: 278
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                    lineNumber: 654,
                    columnNumber: 192
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                    src: message.mediaUrl,
                    controls: true,
                    className: "flex-1 h-8",
                    style: {
                        maxWidth: "200px"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                    lineNumber: 654,
                    columnNumber: 330
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 654,
            columnNumber: 66
        }, this);
        $[44] = isOwn;
        $[45] = message.contentType;
        $[46] = message.mediaUrl;
        $[47] = t19;
    } else {
        t19 = $[47];
    }
    let t20;
    if ($[48] !== isOwn || $[49] !== message.contentType || $[50] !== message.fileName || $[51] !== message.fileSize || $[52] !== message.mediaUrl) {
        t20 = message.mediaUrl && message.contentType === "document" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: message.mediaUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 p-3 rounded-lg mb-2 transition-colors", isOwn ? "bg-blue-700/50 hover:bg-blue-700/70" : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white text-lg",
                        children: "📄"
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatMessages.tsx",
                        lineNumber: 666,
                        columnNumber: 421
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                    lineNumber: 666,
                    columnNumber: 339
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-medium truncate text-sm", isOwn ? "text-white" : "text-gray-900 dark:text-white"),
                            children: message.fileName || "Document"
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/ChatMessages.tsx",
                            lineNumber: 666,
                            columnNumber: 505
                        }, this),
                        message.fileSize && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs", isOwn ? "text-blue-200" : "text-gray-500"),
                            children: [
                                (message.fileSize / 1024).toFixed(1),
                                " KB"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/chat/ChatMessages.tsx",
                            lineNumber: 666,
                            columnNumber: 668
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                    lineNumber: 666,
                    columnNumber: 473
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 666,
            columnNumber: 69
        }, this);
        $[48] = isOwn;
        $[49] = message.contentType;
        $[50] = message.fileName;
        $[51] = message.fileSize;
        $[52] = message.mediaUrl;
        $[53] = t20;
    } else {
        t20 = $[53];
    }
    let t21;
    if ($[54] !== message.contentType || $[55] !== message.fileName || $[56] !== message.mediaUrl) {
        t21 = message.mediaUrl && message.contentType === "file" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: message.mediaUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 bg-white/10 p-2 rounded mb-2 hover:bg-white/20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "📎"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                    lineNumber: 678,
                    columnNumber: 217
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "truncate",
                    children: message.fileName || "File"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                    lineNumber: 678,
                    columnNumber: 232
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 678,
            columnNumber: 65
        }, this);
        $[54] = message.contentType;
        $[55] = message.fileName;
        $[56] = message.mediaUrl;
        $[57] = t21;
    } else {
        t21 = $[57];
    }
    let t22;
    if ($[58] !== editContent || $[59] !== handleEdit || $[60] !== isEditing || $[61] !== message.content) {
        t22 = isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    lineNumber: 688,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleEdit,
                    className: "text-xs",
                    children: "Save"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatMessages.tsx",
                    lineNumber: 699,
                    columnNumber: 48
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 688,
            columnNumber: 23
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "break-words whitespace-pre-wrap",
            children: message.content
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 699,
            columnNumber: 119
        }, this);
        $[58] = editContent;
        $[59] = handleEdit;
        $[60] = isEditing;
        $[61] = message.content;
        $[62] = t22;
    } else {
        t22 = $[62];
    }
    let t23;
    if ($[63] !== message.createdAt || $[64] !== message.isDeleted || $[65] !== message.updatedAt) {
        t23 = !message.isDeleted && (()=>{
            const created = new Date(message.createdAt).getTime();
            const updated = new Date(message.updatedAt).getTime();
            const diffSeconds = (updated - created) / 1000;
            return diffSeconds > 5;
        })() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs opacity-60 ml-1",
            children: "(edited)"
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 715,
            columnNumber: 13
        }, this);
        $[63] = message.createdAt;
        $[64] = message.isDeleted;
        $[65] = message.updatedAt;
        $[66] = t23;
    } else {
        t23 = $[66];
    }
    let t24;
    if ($[67] !== t16 || $[68] !== t17 || $[69] !== t18 || $[70] !== t19 || $[71] !== t20 || $[72] !== t21 || $[73] !== t22 || $[74] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t16,
            children: [
                t17,
                t18,
                t19,
                t20,
                t21,
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 725,
            columnNumber: 11
        }, this);
        $[67] = t16;
        $[68] = t17;
        $[69] = t18;
        $[70] = t19;
        $[71] = t20;
        $[72] = t21;
        $[73] = t22;
        $[74] = t23;
        $[75] = t24;
    } else {
        t24 = $[75];
    }
    let t25;
    if ($[76] !== handleReaction || $[77] !== isOwn || $[78] !== message.reactions) {
        t25 = message.reactions && message.reactions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                lineNumber: 747,
                                columnNumber: 204
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-500",
                                children: count
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatMessages.tsx",
                                lineNumber: 747,
                                columnNumber: 226
                            }, this)
                        ]
                    }, emoji_0, true, {
                        fileName: "[project]/src/components/chat/ChatMessages.tsx",
                        lineNumber: 745,
                        columnNumber: 18
                    }, this);
                }
            }["MessageBubble[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 740,
            columnNumber: 64
        }, this);
        $[76] = handleReaction;
        $[77] = isOwn;
        $[78] = message.reactions;
        $[79] = t25;
    } else {
        t25 = $[79];
    }
    const t26 = isOwn ? "justify-end" : "justify-start";
    let t27;
    if ($[80] !== t26) {
        t27 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs text-gray-500 mt-1 flex items-center gap-1", t26);
        $[80] = t26;
        $[81] = t27;
    } else {
        t27 = $[81];
    }
    let t28;
    if ($[82] !== message.createdAt) {
        t28 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(message.createdAt), "HH:mm");
        $[82] = message.createdAt;
        $[83] = t28;
    } else {
        t28 = $[83];
    }
    let t29;
    if ($[84] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t28
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 776,
            columnNumber: 11
        }, this);
        $[84] = t28;
        $[85] = t29;
    } else {
        t29 = $[85];
    }
    let t30;
    if ($[86] !== isOwn || $[87] !== message.status) {
        t30 = isOwn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(message.status === "READ" && "text-blue-500"),
            children: message.status === "READ" ? "\u2713\u2713" : message.status === "DELIVERED" ? "\u2713\u2713" : "\u2713"
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 784,
            columnNumber: 20
        }, this);
        $[86] = isOwn;
        $[87] = message.status;
        $[88] = t30;
    } else {
        t30 = $[88];
    }
    let t31;
    if ($[89] !== t27 || $[90] !== t29 || $[91] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t27,
            children: [
                t29,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 793,
            columnNumber: 11
        }, this);
        $[89] = t27;
        $[90] = t29;
        $[91] = t30;
        $[92] = t31;
    } else {
        t31 = $[92];
    }
    const t32 = showActions && !isEditing && !showMenu;
    let t33;
    if ($[93] !== onReply) {
        t33 = ({
            "MessageBubble[<MessageQuickActions>.onReply]": ()=>onReply?.()
        })["MessageBubble[<MessageQuickActions>.onReply]"];
        $[93] = onReply;
        $[94] = t33;
    } else {
        t33 = $[94];
    }
    let t34;
    if ($[95] !== showReactions) {
        t34 = ({
            "MessageBubble[<MessageQuickActions>.onReact]": ()=>setShowReactions(!showReactions)
        })["MessageBubble[<MessageQuickActions>.onReact]"];
        $[95] = showReactions;
        $[96] = t34;
    } else {
        t34 = $[96];
    }
    let t35;
    if ($[97] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = ({
            "MessageBubble[<MessageQuickActions>.onMore]": ()=>setShowMenu(true)
        })["MessageBubble[<MessageQuickActions>.onMore]"];
        $[97] = t35;
    } else {
        t35 = $[97];
    }
    let t36;
    if ($[98] !== isOwn || $[99] !== t32 || $[100] !== t33 || $[101] !== t34) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$MessageMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageQuickActions"], {
            isVisible: t32,
            isOwn: isOwn,
            onReply: t33,
            onReact: t34,
            onMore: t35
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 833,
            columnNumber: 11
        }, this);
        $[98] = isOwn;
        $[99] = t32;
        $[100] = t33;
        $[101] = t34;
        $[102] = t36;
    } else {
        t36 = $[102];
    }
    let t37;
    if ($[103] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = ({
            "MessageBubble[<MessageMenu>.onClose]": ()=>setShowMenu(false)
        })["MessageBubble[<MessageMenu>.onClose]"];
        $[103] = t37;
    } else {
        t37 = $[103];
    }
    const t38 = !!message.mediaUrl;
    let t39;
    if ($[104] !== onReply) {
        t39 = ({
            "MessageBubble[<MessageMenu>.onReply]": ()=>onReply?.()
        })["MessageBubble[<MessageMenu>.onReply]"];
        $[104] = onReply;
        $[105] = t39;
    } else {
        t39 = $[105];
    }
    let t40;
    if ($[106] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = ({
            "MessageBubble[<MessageMenu>.onEdit]": ()=>setIsEditing(true)
        })["MessageBubble[<MessageMenu>.onEdit]"];
        $[106] = t40;
    } else {
        t40 = $[106];
    }
    let t41;
    if ($[107] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = ({
            "MessageBubble[<MessageMenu>.onCopy]": ()=>{
                setCopied(true);
                setTimeout({
                    "MessageBubble[<MessageMenu>.onCopy > setTimeout()]": ()=>setCopied(false)
                }["MessageBubble[<MessageMenu>.onCopy > setTimeout()]"], 2000);
            }
        })["MessageBubble[<MessageMenu>.onCopy]"];
        $[107] = t41;
    } else {
        t41 = $[107];
    }
    const t42 = isOwn ? "right" : "left";
    let t43;
    if ($[108] !== handleDelete || $[109] !== handleReaction || $[110] !== isOwn || $[111] !== message.content || $[112] !== message.id || $[113] !== message.mediaUrl || $[114] !== showMenu || $[115] !== t38 || $[116] !== t39 || $[117] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$MessageMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isOpen: showMenu,
            onClose: t37,
            isOwn: isOwn,
            messageId: message.id,
            messageContent: message.content,
            hasMedia: t38,
            mediaUrl: message.mediaUrl,
            onReply: t39,
            onEdit: t40,
            onDelete: handleDelete,
            onReact: handleReaction,
            onCopy: t41,
            anchorPosition: t42
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 888,
            columnNumber: 11
        }, this);
        $[108] = handleDelete;
        $[109] = handleReaction;
        $[110] = isOwn;
        $[111] = message.content;
        $[112] = message.id;
        $[113] = message.mediaUrl;
        $[114] = showMenu;
        $[115] = t38;
        $[116] = t39;
        $[117] = t42;
        $[118] = t43;
    } else {
        t43 = $[118];
    }
    let t44;
    if ($[119] !== handleReaction || $[120] !== isOwn || $[121] !== showMenu || $[122] !== showReactions) {
        t44 = showReactions && !showMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        lineNumber: 906,
                        columnNumber: 60
                    }, this)
            }["MessageBubble[REACTION_EMOJIS.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 905,
            columnNumber: 41
        }, this);
        $[119] = handleReaction;
        $[120] = isOwn;
        $[121] = showMenu;
        $[122] = showReactions;
        $[123] = t44;
    } else {
        t44 = $[123];
    }
    let t45;
    if ($[124] !== copied) {
        t45 = copied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -top-8 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded",
            children: "Copied!"
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 920,
            columnNumber: 21
        }, this);
        $[124] = copied;
        $[125] = t45;
    } else {
        t45 = $[125];
    }
    let t46;
    if ($[126] !== t12 || $[127] !== t13 || $[128] !== t24 || $[129] !== t25 || $[130] !== t31 || $[131] !== t36 || $[132] !== t43 || $[133] !== t44 || $[134] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t12,
            children: [
                t13,
                t24,
                t25,
                t31,
                t36,
                t43,
                t44,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 928,
            columnNumber: 11
        }, this);
        $[126] = t12;
        $[127] = t13;
        $[128] = t24;
        $[129] = t25;
        $[130] = t31;
        $[131] = t36;
        $[132] = t43;
        $[133] = t44;
        $[134] = t45;
        $[135] = t46;
    } else {
        t46 = $[135];
    }
    let t47;
    if ($[136] !== registerRef || $[137] !== t10 || $[138] !== t46 || $[139] !== t7) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: registerRef,
            className: t7,
            onMouseEnter: t8,
            onMouseLeave: t9,
            children: [
                t10,
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatMessages.tsx",
            lineNumber: 944,
            columnNumber: 11
        }, this);
        $[136] = registerRef;
        $[137] = t10;
        $[138] = t46;
        $[139] = t7;
        $[140] = t47;
    } else {
        t47 = $[140];
    }
    return t47;
}
_s1(MessageBubble, "c2C0wmuPR/lL1g4RePJYjAgZHqE=");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/socket.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/chat.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript) <export default as Paperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smile.js [app-client] (ecmascript) <export default as Smile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
// File type configurations
const ALLOWED_FILE_TYPES = {
    image: [
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/webp'
    ],
    video: [
        'video/mp4',
        'video/webm',
        'video/quicktime'
    ],
    document: [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ],
    audio: [
        'audio/mpeg',
        'audio/wav',
        'audio/ogg',
        'audio/webm'
    ]
};
const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
const MAX_VIDEO_DURATION = 60; // 60 seconds
function ChatInput({ conversationId, replyTo, onCancelReply, disabled = false, onUploadingMessagesChange }) {
    _s();
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showEmoji, setShowEmoji] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAttachMenu, setShowAttachMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedFiles, setSelectedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recordingDuration, setRecordingDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [audioBlob, setAudioBlob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadingMessages, setUploadingMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const typingTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const attachMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioChunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const recordingIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Auto-resize textarea
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInput.useEffect": ()=>{
            if (inputRef.current) {
                inputRef.current.style.height = 'auto';
                inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 120)}px`;
            }
        }
    }["ChatInput.useEffect"], [
        message
    ]);
    // Close attachment menu when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInput.useEffect": ()=>{
            const handleClickOutside = {
                "ChatInput.useEffect.handleClickOutside": (event)=>{
                    if (attachMenuRef.current && !attachMenuRef.current.contains(event.target)) {
                        setShowAttachMenu(false);
                    }
                }
            }["ChatInput.useEffect.handleClickOutside"];
            if (showAttachMenu) {
                document.addEventListener('mousedown', handleClickOutside);
            }
            return ({
                "ChatInput.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["ChatInput.useEffect"];
        }
    }["ChatInput.useEffect"], [
        showAttachMenu
    ]);
    // Handle typing indicator
    const handleTyping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatInput.useCallback[handleTyping]": ()=>{
            if (!isTyping) {
                setIsTyping(true);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendChatTyping"])(conversationId, true);
            }
            // Clear existing timeout
            if (typingTimeoutRef.current) {
                clearTimeout(typingTimeoutRef.current);
            }
            // Set new timeout to stop typing indicator
            typingTimeoutRef.current = setTimeout({
                "ChatInput.useCallback[handleTyping]": ()=>{
                    setIsTyping(false);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendChatTyping"])(conversationId, false);
                }
            }["ChatInput.useCallback[handleTyping]"], 2000);
        }
    }["ChatInput.useCallback[handleTyping]"], [
        conversationId,
        isTyping
    ]);
    // Clean up typing timeout
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInput.useEffect": ()=>{
            return ({
                "ChatInput.useEffect": ()=>{
                    if (typingTimeoutRef.current) {
                        clearTimeout(typingTimeoutRef.current);
                    }
                }
            })["ChatInput.useEffect"];
        }
    }["ChatInput.useEffect"], []);
    // Get file type category
    const getFileType = (file)=>{
        for (const [type, mimes] of Object.entries(ALLOWED_FILE_TYPES)){
            if (mimes.includes(file.type)) {
                return type;
            }
        }
        return null;
    };
    // Check video duration
    const checkVideoDuration = (file_0)=>{
        return new Promise((resolve)=>{
            const video = document.createElement('video');
            video.preload = 'metadata';
            video.onloadedmetadata = ()=>{
                URL.revokeObjectURL(video.src);
                if (video.duration > MAX_VIDEO_DURATION) {
                    alert(`Video "${file_0.name}" is too long. Maximum duration is ${MAX_VIDEO_DURATION} seconds.`);
                    resolve(false);
                } else {
                    resolve(true);
                }
            };
            video.onerror = ()=>{
                URL.revokeObjectURL(video.src);
                resolve(true); // Allow if we can't check duration
            };
            video.src = URL.createObjectURL(file_0);
        });
    };
    // Handle file selection
    const handleFileSelect = async (e, filterType)=>{
        const files = Array.from(e.target.files || []);
        const validFiles = [];
        for (const file_1 of files){
            // Check file size
            if (file_1.size > MAX_FILE_SIZE) {
                alert(`File "${file_1.name}" is too large. Maximum size is 50MB.`);
                continue;
            }
            const fileType = getFileType(file_1);
            if (!fileType) {
                alert(`File type not supported: ${file_1.name}`);
                continue;
            }
            // Check video duration
            if (fileType === 'video') {
                const isValidDuration = await checkVideoDuration(file_1);
                if (!isValidDuration) {
                    continue;
                }
            }
            // Create preview URL
            let preview = '';
            if (fileType === 'image' || fileType === 'video') {
                preview = URL.createObjectURL(file_1);
            }
            validFiles.push({
                file: file_1,
                preview,
                type: fileType
            });
        }
        setSelectedFiles((prev)=>[
                ...prev,
                ...validFiles
            ]);
        setShowAttachMenu(false);
        // Reset file input
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    // Remove selected file
    const removeFile = (index)=>{
        setSelectedFiles((prev_0)=>{
            const newFiles = [
                ...prev_0
            ];
            // Revoke object URL to free memory
            if (newFiles[index].preview) {
                URL.revokeObjectURL(newFiles[index].preview);
            }
            newFiles.splice(index, 1);
            return newFiles;
        });
    };
    // Open file picker for specific type
    const openFilePicker = (accept)=>{
        if (fileInputRef.current) {
            fileInputRef.current.accept = accept;
            fileInputRef.current.click();
        }
        setShowAttachMenu(false);
    };
    // Voice recording functions
    const startRecording = async ()=>{
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            const mediaRecorder = new MediaRecorder(stream, {
                mimeType: 'audio/webm'
            });
            mediaRecorderRef.current = mediaRecorder;
            audioChunksRef.current = [];
            mediaRecorder.ondataavailable = (e_0)=>{
                if (e_0.data.size > 0) {
                    audioChunksRef.current.push(e_0.data);
                }
            };
            mediaRecorder.onstop = ()=>{
                const audioBlob_0 = new Blob(audioChunksRef.current, {
                    type: 'audio/webm'
                });
                setAudioBlob(audioBlob_0);
                stream.getTracks().forEach((track)=>track.stop());
            };
            mediaRecorder.start();
            setIsRecording(true);
            setRecordingDuration(0);
            // Update duration every second
            recordingIntervalRef.current = setInterval(()=>{
                setRecordingDuration((prev_1)=>prev_1 + 1);
            }, 1000);
        } catch (error) {
            console.error('Failed to start recording:', error);
            alert('Could not access microphone. Please grant permission.');
        }
    };
    const stopRecording = ()=>{
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
            if (recordingIntervalRef.current) {
                clearInterval(recordingIntervalRef.current);
                recordingIntervalRef.current = null;
            }
        }
    };
    const cancelRecording = ()=>{
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stream.getTracks().forEach((track_0)=>track_0.stop());
        }
        setIsRecording(false);
        setAudioBlob(null);
        setRecordingDuration(0);
        if (recordingIntervalRef.current) {
            clearInterval(recordingIntervalRef.current);
            recordingIntervalRef.current = null;
        }
    };
    const formatDuration = (seconds)=>{
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };
    // Sync uploading messages to parent via useEffect to avoid setState during render
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInput.useEffect": ()=>{
            onUploadingMessagesChange?.(uploadingMessages);
        }
    }["ChatInput.useEffect"], [
        uploadingMessages,
        onUploadingMessagesChange
    ]);
    const handleSend = async ()=>{
        const trimmedMessage = message.trim();
        const hasFiles = selectedFiles.length > 0;
        const hasAudio = audioBlob !== null;
        if (!trimmedMessage && !hasFiles && !hasAudio) return;
        // Immediately clear typing state and stop broadcasting
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
            typingTimeoutRef.current = null;
        }
        setIsTyping(false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendChatTyping"])(conversationId, false);
        // Clear input immediately for better UX
        const filesToUpload = [
            ...selectedFiles
        ];
        const audioToUpload = audioBlob;
        const textToSend = trimmedMessage;
        const currentReplyTo = replyTo;
        setMessage('');
        setSelectedFiles([]);
        setAudioBlob(null);
        setRecordingDuration(0);
        onCancelReply?.();
        inputRef.current?.focus();
        // Upload and send audio message if exists
        if (hasAudio && audioToUpload) {
            const uploadId = `upload-audio-${Date.now()}`;
            // Add optimistic uploading message
            setUploadingMessages((prev_2)=>[
                    ...prev_2,
                    {
                        id: uploadId,
                        type: 'audio',
                        fileName: 'Voice message',
                        progress: 0
                    }
                ]);
            try {
                const audioFile = new globalThis.File([
                    audioToUpload
                ], `voice-${Date.now()}.webm`, {
                    type: 'audio/webm'
                });
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadChatMedia"])(audioFile, 'audio', (progress)=>{
                    setUploadingMessages((prev_4)=>prev_4.map((m_0)=>m_0.id === uploadId ? {
                                ...m_0,
                                progress
                            } : m_0));
                });
                // Remove uploading message
                setUploadingMessages((prev_5)=>prev_5.filter((m_1)=>m_1.id !== uploadId));
                // Send actual message
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendChatMessage"])({
                    conversationId,
                    content: '🎤 Voice message',
                    contentType: 'audio',
                    mediaUrl: result.mediaUrl,
                    fileName: result.fileName,
                    fileSize: result.fileSize,
                    replyToId: currentReplyTo?.id
                });
            } catch (error_0) {
                console.error('Failed to upload audio:', error_0);
                setUploadingMessages((prev_3)=>prev_3.filter((m)=>m.id !== uploadId));
                alert('Failed to send voice message');
            }
        }
        // Upload files in parallel with optimistic UI
        if (hasFiles) {
            const uploadPromises = filesToUpload.map(async (filePreview, index_0)=>{
                const uploadId_0 = `upload-${Date.now()}-${index_0}`;
                // Add optimistic uploading message immediately
                setUploadingMessages((prev_6)=>[
                        ...prev_6,
                        {
                            id: uploadId_0,
                            type: filePreview.type,
                            preview: filePreview.preview,
                            fileName: filePreview.file.name,
                            progress: 0
                        }
                    ]);
                try {
                    const result_0 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadChatMedia"])(filePreview.file, filePreview.type, (progress_0)=>{
                        setUploadingMessages((prev_8)=>prev_8.map((m_3)=>m_3.id === uploadId_0 ? {
                                    ...m_3,
                                    progress: progress_0
                                } : m_3));
                    });
                    // Remove uploading message
                    setUploadingMessages((prev_9)=>prev_9.filter((m_4)=>m_4.id !== uploadId_0));
                    // Send actual message
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendChatMessage"])({
                        conversationId,
                        content: filePreview.type === 'image' ? '📷 Photo' : filePreview.type === 'video' ? '🎥 Video' : filePreview.type === 'document' ? `📄 ${filePreview.file.name}` : `📎 ${filePreview.file.name}`,
                        contentType: filePreview.type,
                        mediaUrl: result_0.mediaUrl,
                        fileName: result_0.fileName,
                        fileSize: result_0.fileSize,
                        replyToId: index_0 === 0 ? currentReplyTo?.id : undefined
                    });
                    // Clean up preview URL
                    if (filePreview.preview) {
                        URL.revokeObjectURL(filePreview.preview);
                    }
                } catch (error_1) {
                    console.error('Failed to upload file:', error_1);
                    setUploadingMessages((prev_7)=>prev_7.filter((m_2)=>m_2.id !== uploadId_0));
                    alert(`Failed to send ${filePreview.file.name}`);
                }
            });
            // Don't await - let uploads happen in background
            Promise.all(uploadPromises);
        }
        // Send text message immediately
        if (textToSend) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendChatMessage"])({
                conversationId,
                content: textToSend,
                contentType: 'text',
                replyToId: currentReplyTo?.id
            });
        }
    };
    const handleKeyDown = (e_1)=>{
        if (e_1.key === 'Enter' && !e_1.shiftKey) {
            e_1.preventDefault();
            handleSend();
        }
    };
    const handleChange = (e_2)=>{
        setMessage(e_2.target.value);
        handleTyping();
    };
    const handleEmojiClick = (emoji)=>{
        setMessage((prev_10)=>prev_10 + emoji);
        setShowEmoji(false);
        inputRef.current?.focus();
    };
    const commonEmojis = [
        '😀',
        '😂',
        '❤️',
        '👍',
        '🔥',
        '🎉',
        '😊',
        '🙏',
        '💯',
        '✨',
        '😍',
        '🤔',
        '👀',
        '🙌',
        '💪'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: fileInputRef,
                type: "file",
                multiple: true,
                onChange: handleFileSelect,
                className: "hidden"
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatInput.tsx",
                lineNumber: 432,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: selectedFiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        height: 0,
                        opacity: 0
                    },
                    animate: {
                        height: 'auto',
                        opacity: 1
                    },
                    exit: {
                        height: 0,
                        opacity: 0
                    },
                    className: "mb-3 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 overflow-x-auto py-2",
                        children: selectedFiles.map((file_2, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
                                children: [
                                    file_2.type === 'image' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: file_2.preview,
                                        alt: file_2.file.name,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                                        lineNumber: 448,
                                        columnNumber: 46
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full flex flex-col items-center justify-center p-1",
                                        children: [
                                            file_2.type === 'video' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                className: "w-6 h-6 text-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatInput.tsx",
                                                lineNumber: 449,
                                                columnNumber: 51
                                            }, this),
                                            file_2.type === 'document' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                className: "w-6 h-6 text-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatInput.tsx",
                                                lineNumber: 450,
                                                columnNumber: 54
                                            }, this),
                                            file_2.type === 'audio' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                                className: "w-6 h-6 text-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatInput.tsx",
                                                lineNumber: 451,
                                                columnNumber: 51
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-gray-500 truncate w-full text-center mt-1",
                                                children: [
                                                    file_2.file.name.slice(0, 10),
                                                    "..."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/chat/ChatInput.tsx",
                                                lineNumber: 452,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                                        lineNumber: 448,
                                        columnNumber: 139
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>removeFile(index_1),
                                        className: "absolute top-1 right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/ChatInput.tsx",
                                            lineNumber: 457,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                                        lineNumber: 456,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, index_1, true, {
                                fileName: "[project]/src/components/chat/ChatInput.tsx",
                                lineNumber: 447,
                                columnNumber: 55
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                        lineNumber: 446,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatInput.tsx",
                    lineNumber: 436,
                    columnNumber: 38
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatInput.tsx",
                lineNumber: 435,
                columnNumber: 7
            }, this),
            uploadProgress !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full bg-blue-600 transition-all duration-300",
                            style: {
                                width: `${uploadProgress}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/ChatInput.tsx",
                            lineNumber: 467,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                        lineNumber: 466,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 mt-1",
                        children: [
                            "Uploading... ",
                            uploadProgress,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                        lineNumber: 471,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/chat/ChatInput.tsx",
                lineNumber: 465,
                columnNumber: 35
            }, this),
            replyTo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1 h-8 bg-blue-500 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatInput.tsx",
                                lineNumber: 477,
                                columnNumber: 13
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
                                        lineNumber: 479,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400 truncate",
                                        children: replyTo.content
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                                        lineNumber: 482,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/chat/ChatInput.tsx",
                                lineNumber: 478,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                        lineNumber: 476,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCancelReply,
                        className: "p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/ChatInput.tsx",
                            lineNumber: 488,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                        lineNumber: 487,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/chat/ChatInput.tsx",
                lineNumber: 475,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-end gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        ref: attachMenuRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowAttachMenu(!showAttachMenu),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 rounded-full transition-colors", showAttachMenu ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"),
                                title: "Attach file",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/ChatInput.tsx",
                                    lineNumber: 497,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatInput.tsx",
                                lineNumber: 496,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: showAttachMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 10,
                                        scale: 0.95
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: 10,
                                        scale: 0.95
                                    },
                                    className: "absolute bottom-full left-0 mb-2 w-48 bg-white dark:bg-gray-800 shadow-xl rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>openFilePicker('image/*'),
                                                className: "w-full flex items-center gap-3 px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                            className: "w-4 h-4 text-purple-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chat/ChatInput.tsx",
                                                            lineNumber: 518,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                                                        lineNumber: 517,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Photos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                                                        lineNumber: 520,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/chat/ChatInput.tsx",
                                                lineNumber: 516,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>openFilePicker('video/*'),
                                                className: "w-full flex items-center gap-3 px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                            className: "w-4 h-4 text-red-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chat/ChatInput.tsx",
                                                            lineNumber: 525,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                                                        lineNumber: 524,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Videos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                                                        lineNumber: 527,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/chat/ChatInput.tsx",
                                                lineNumber: 523,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>openFilePicker('.pdf,.doc,.docx'),
                                                className: "w-full flex items-center gap-3 px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                            className: "w-4 h-4 text-blue-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chat/ChatInput.tsx",
                                                            lineNumber: 532,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                                                        lineNumber: 531,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Documents"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                                                        lineNumber: 534,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/chat/ChatInput.tsx",
                                                lineNumber: 530,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setShowAttachMenu(false);
                                                    startRecording();
                                                },
                                                className: "w-full flex items-center gap-3 px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                                            className: "w-4 h-4 text-orange-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chat/ChatInput.tsx",
                                                            lineNumber: 542,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                                                        lineNumber: 541,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Voice Mail"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                                                        lineNumber: 544,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/chat/ChatInput.tsx",
                                                lineNumber: 537,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                                        lineNumber: 515,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/ChatInput.tsx",
                                    lineNumber: 502,
                                    columnNumber: 32
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatInput.tsx",
                                lineNumber: 501,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                        lineNumber: 495,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowEmoji(!showEmoji),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 rounded-full transition-colors", showEmoji ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"),
                                title: "Add emoji",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__["Smile"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/ChatInput.tsx",
                                    lineNumber: 554,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatInput.tsx",
                                lineNumber: 553,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: showEmoji && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 10,
                                        scale: 0.95
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: 10,
                                        scale: 0.95
                                    },
                                    className: "absolute bottom-full left-0 mb-2 p-3 bg-white dark:bg-gray-800 shadow-xl rounded-xl border border-gray-200 dark:border-gray-700 z-20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-5 gap-1 w-[200px]",
                                        children: commonEmojis.map((emoji_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleEmojiClick(emoji_0),
                                                className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl transition-transform hover:scale-110",
                                                children: emoji_0
                                            }, emoji_0, false, {
                                                fileName: "[project]/src/components/chat/ChatInput.tsx",
                                                lineNumber: 573,
                                                columnNumber: 48
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                                        lineNumber: 572,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/ChatInput.tsx",
                                    lineNumber: 559,
                                    columnNumber: 27
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatInput.tsx",
                                lineNumber: 558,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                        lineNumber: 552,
                        columnNumber: 9
                    }, this),
                    isRecording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex items-center gap-3 px-4 py-2.5 bg-red-50 dark:bg-red-900/20 rounded-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 bg-red-500 rounded-full animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatInput.tsx",
                                lineNumber: 583,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-600 dark:text-red-400 font-medium",
                                children: formatDuration(recordingDuration)
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatInput.tsx",
                                lineNumber: 584,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-500 flex-1",
                                children: "Recording..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatInput.tsx",
                                lineNumber: 587,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: cancelRecording,
                                className: "p-2 text-gray-500 hover:text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-full transition-colors",
                                title: "Cancel",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/ChatInput.tsx",
                                    lineNumber: 589,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatInput.tsx",
                                lineNumber: 588,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: stopRecording,
                                className: "p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors",
                                title: "Stop recording",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/ChatInput.tsx",
                                    lineNumber: 592,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatInput.tsx",
                                lineNumber: 591,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                        lineNumber: 582,
                        columnNumber: 24
                    }, this) : audioBlob ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex items-center gap-3 px-4 py-2.5 bg-green-50 dark:bg-green-900/20 rounded-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                className: "w-5 h-5 text-green-600"
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatInput.tsx",
                                lineNumber: 595,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-green-700 dark:text-green-400 flex-1",
                                children: [
                                    "Voice message (",
                                    formatDuration(recordingDuration),
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/chat/ChatInput.tsx",
                                lineNumber: 596,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setAudioBlob(null);
                                    setRecordingDuration(0);
                                },
                                className: "p-1.5 text-gray-500 hover:text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-full transition-colors",
                                title: "Delete recording",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/ChatInput.tsx",
                                    lineNumber: 603,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatInput.tsx",
                                lineNumber: 599,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                        lineNumber: 594,
                        columnNumber: 32
                    }, this) : /* Text input */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            ref: inputRef,
                            value: message,
                            onChange: handleChange,
                            onKeyDown: handleKeyDown,
                            placeholder: "Type a message...",
                            disabled: disabled,
                            rows: 1,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full resize-none rounded-2xl px-4 py-2.5', 'bg-gray-100 dark:bg-gray-800', 'border border-transparent focus:border-blue-500', 'focus:outline-none focus:ring-2 focus:ring-blue-500/20', 'text-gray-900 dark:text-white placeholder-gray-500', 'disabled:opacity-50 disabled:cursor-not-allowed', 'max-h-32')
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/ChatInput.tsx",
                            lineNumber: 607,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                        lineNumber: 606,
                        columnNumber: 7
                    }, this),
                    !message.trim() && selectedFiles.length === 0 && !audioBlob && !isRecording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: startRecording,
                        disabled: disabled,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('p-3 rounded-full transition-all', 'bg-gray-200 dark:bg-gray-700 text-gray-500 hover:bg-gray-300 dark:hover:bg-gray-600', 'disabled:opacity-50 disabled:cursor-not-allowed'),
                        title: "Record voice message",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/ChatInput.tsx",
                            lineNumber: 612,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                        lineNumber: 611,
                        columnNumber: 88
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSend,
                        disabled: !message.trim() && selectedFiles.length === 0 && !audioBlob || disabled || isRecording,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('p-3 rounded-full transition-all', message.trim() || selectedFiles.length > 0 || audioBlob ? 'bg-blue-600 text-white hover:bg-blue-700 scale-100' : 'bg-gray-200 dark:bg-gray-700 text-gray-400 scale-95', 'disabled:opacity-50 disabled:cursor-not-allowed'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/ChatInput.tsx",
                            lineNumber: 614,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatInput.tsx",
                        lineNumber: 613,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/chat/ChatInput.tsx",
                lineNumber: 493,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/chat/ChatInput.tsx",
        lineNumber: 430,
        columnNumber: 10
    }, this);
}
_s(ChatInput, "kWEbthrc+SCVbeAHXE4U0Rn/pTE=");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatSettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/ChatSettingsPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$MessageMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/MessageMenu.tsx [app-client] (ecmascript)");
;
;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatSettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/ChatSettingsPanel.tsx [app-client] (ecmascript)");
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
    const [showSettings, setShowSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [wallpaper, setWallpaper] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('default');
    const [uploadingMessages, setUploadingMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Load wallpaper preference from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConversationPage.useEffect": ()=>{
            if (resolvedParams.conversationId) {
                const savedWallpaper = localStorage.getItem(`chat_wallpaper_${resolvedParams.conversationId}`);
                if (savedWallpaper) {
                    setWallpaper(savedWallpaper);
                }
            }
        }
    }["ConversationPage.useEffect"], [
        resolvedParams.conversationId
    ]);
    // Save wallpaper preference
    const handleWallpaperChange = (newWallpaper)=>{
        setWallpaper(newWallpaper);
        localStorage.setItem(`chat_wallpaper_${resolvedParams.conversationId}`, newWallpaper);
    };
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
                        // Only show loading spinner on initial load, not when switching conversations
                        if (!conversation) {
                            setLoading(true);
                        }
                        setError(null);
                        const conv = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConversation"])(resolvedParams.conversationId);
                        setConversation(conv);
                        // Clear reply and uploading messages when switching conversations
                        setReplyTo(null);
                        setUploadingMessages([]);
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
        // Use replace with scroll:false to prevent full page reload
        router.replace(`/messages/${conv_0.id}`, {
            scroll: false
        });
    };
    const otherUser = conversation?.otherParticipant;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$ProtectedRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProtectedRoute"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 dark:bg-gray-900",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatList$3e$__["ChatList"], {
                                        selectedConversationId: resolvedParams.conversationId,
                                        onSelectConversation: handleSelectConversation,
                                        currentUserId: user?.id
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex flex-col bg-white dark:bg-gray-900 pb-24",
                                children: [
                                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                                            lineNumber: 114,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 27
                                    }, this),
                                    !loading && (error || !conversation) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-red-500 mb-4",
                                                    children: error || 'Conversation not found'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleBack,
                                                    className: "text-blue-600 hover:underline",
                                                    children: "Go back to messages"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 56
                                    }, this),
                                    !loading && conversation && otherUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatHeader$3e$__["ChatHeader"], {
                                                user: otherUser,
                                                onBack: handleBack,
                                                onInfo: ()=>setShowSettings(true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                                                lineNumber: 130,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatMessages$3e$__["ChatMessages"], {
                                                conversationId: resolvedParams.conversationId,
                                                currentUserId: user.id,
                                                otherUser: otherUser,
                                                wallpaper: wallpaper,
                                                onReply: (msg)=>setReplyTo(msg),
                                                uploadingMessages: uploadingMessages
                                            }, resolvedParams.conversationId, false, {
                                                fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatInput$3e$__["ChatInput"], {
                                                conversationId: resolvedParams.conversationId,
                                                replyTo: replyTo || undefined,
                                                onCancelReply: ()=>setReplyTo(null),
                                                onUploadingMessagesChange: setUploadingMessages
                                            }, `input-${resolvedParams.conversationId}`, false, {
                                                fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                                                lineNumber: 136,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                conversation && otherUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatSettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    isOpen: showSettings,
                    onClose: ()=>setShowSettings(false),
                    conversationId: resolvedParams.conversationId,
                    otherUser: otherUser,
                    currentWallpaper: wallpaper,
                    onWallpaperChange: handleWallpaperChange
                }, void 0, false, {
                    fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                    lineNumber: 143,
                    columnNumber: 39
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
        lineNumber: 93,
        columnNumber: 10
    }, this);
}
_s(ConversationPage, "nE1DmeK4sNH3Eefp4y9B/ahso24=", false, function() {
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

//# sourceMappingURL=src_6a7f89ae._.js.map