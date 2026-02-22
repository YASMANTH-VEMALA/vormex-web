(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/lib/api/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "activateItem",
    ()=>activateItem,
    "getMyInventory",
    ()=>getMyInventory,
    "getMyPurchases",
    ()=>getMyPurchases,
    "getPurchaseHistory",
    ()=>getPurchaseHistory,
    "getStoreCategories",
    ()=>getStoreCategories,
    "getStoreItem",
    ()=>getStoreItem,
    "getStoreItems",
    ()=>getStoreItems,
    "getXPBalance",
    ()=>getXPBalance,
    "purchaseItem",
    ()=>purchaseItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/client.ts [app-client] (ecmascript)");
;
const getStoreItems = async (category)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/store/items', {
        params: {
            category
        }
    });
    return response.data;
};
const getStoreItem = async (slug)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/store/items/${slug}`);
    return response.data;
};
const getStoreCategories = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/store/categories');
    return response.data;
};
const purchaseItem = async (itemSlug)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/store/purchase', {
        itemSlug
    });
    return response;
};
const getMyInventory = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/store/inventory');
    // Ensure we always return an array, even if backend returns null/undefined
    return Array.isArray(response.data) ? response.data : [];
};
const getMyPurchases = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/store/history');
    return response.data;
};
const activateItem = async (inventoryId)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/store/inventory/${inventoryId}/activate`);
    return response;
};
const getXPBalance = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/store/balance');
    return response.data?.balance ?? response.data ?? 0;
};
const getPurchaseHistory = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/store/purchases');
    return response.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/chat/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatMessages$3e$__ = __turbopack_context__.i("[project]/src/components/chat/ChatMessages.tsx [app-client] (ecmascript) <export default as ChatMessages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatInput$3e$__ = __turbopack_context__.i("[project]/src/components/chat/ChatInput.tsx [app-client] (ecmascript) <export default as ChatInput>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatHeader$3e$__ = __turbopack_context__.i("[project]/src/components/chat/ChatHeader.tsx [app-client] (ecmascript) <export default as ChatHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatSettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/ChatSettingsPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/chat.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/socket.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chat$2f$customization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/chat/customization.ts [app-client] (ecmascript)");
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
    const [optimisticMessages, setOptimisticMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [lastReceivedMessage, setLastReceivedMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [chatCustomization, setChatCustomization] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chat$2f$customization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CHAT_CUSTOMIZATION_ENTITLEMENTS"]);
    // Callback to track the last message received from other user
    const handleLastMessageUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ConversationPage.useCallback[handleLastMessageUpdate]": (message)=>{
            setLastReceivedMessage(message);
        }
    }["ConversationPage.useCallback[handleLastMessageUpdate]"], []);
    // Handle optimistic message - add to list for immediate display
    const handleOptimisticMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ConversationPage.useCallback[handleOptimisticMessage]": (message_0)=>{
            setOptimisticMessages({
                "ConversationPage.useCallback[handleOptimisticMessage]": (prev)=>[
                        ...prev,
                        message_0
                    ]
            }["ConversationPage.useCallback[handleOptimisticMessage]"]);
        }
    }["ConversationPage.useCallback[handleOptimisticMessage]"], []);
    // Remove optimistic messages when real messages arrive
    const handleMessageConfirmed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ConversationPage.useCallback[handleMessageConfirmed]": (confirmedContent)=>{
            // Remove the first optimistic message with matching content
            setOptimisticMessages({
                "ConversationPage.useCallback[handleMessageConfirmed]": (prev_0)=>{
                    const idx = prev_0.findIndex({
                        "ConversationPage.useCallback[handleMessageConfirmed].idx": (m)=>m.content === confirmedContent
                    }["ConversationPage.useCallback[handleMessageConfirmed].idx"]);
                    if (idx >= 0) {
                        const updated = [
                            ...prev_0
                        ];
                        updated.splice(idx, 1);
                        return updated;
                    }
                    return prev_0;
                }
            }["ConversationPage.useCallback[handleMessageConfirmed]"]);
        }
    }["ConversationPage.useCallback[handleMessageConfirmed]"], []);
    // Load wallpaper preference from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConversationPage.useEffect": ()=>{
            if (resolvedParams.conversationId) {
                const savedWallpaper = localStorage.getItem(`chat_wallpaper_${resolvedParams.conversationId}`);
                if (savedWallpaper) {
                    setWallpaper(savedWallpaper);
                } else {
                    setWallpaper('default');
                }
            }
        }
    }["ConversationPage.useEffect"], [
        resolvedParams.conversationId
    ]);
    // Load purchased chat customization packs from inventory
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConversationPage.useEffect": ()=>{
            const loadChatCustomization = {
                "ConversationPage.useEffect.loadChatCustomization": async ()=>{
                    if (!user?.id) return;
                    try {
                        const inventory = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMyInventory"]();
                        // Handle case where inventory is undefined or not an array
                        const ownedSlugs = Array.isArray(inventory) ? inventory.map({
                            "ConversationPage.useEffect.loadChatCustomization": (item)=>item.itemSlug
                        }["ConversationPage.useEffect.loadChatCustomization"]) : [];
                        setChatCustomization((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chat$2f$customization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildChatCustomizationEntitlements"])(ownedSlugs));
                    } catch (error_0) {
                        console.error('Failed to load chat customization packs:', error_0);
                        setChatCustomization(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chat$2f$customization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CHAT_CUSTOMIZATION_ENTITLEMENTS"]);
                    }
                }
            }["ConversationPage.useEffect.loadChatCustomization"];
            loadChatCustomization();
        }
    }["ConversationPage.useEffect"], [
        user?.id
    ]);
    // If current wallpaper is locked and user no longer owns required pack, fallback to default
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConversationPage.useEffect": ()=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chat$2f$customization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWallpaperUnlocked"])(wallpaper, chatCustomization.ownedThemePacks)) {
                setWallpaper('default');
                localStorage.setItem(`chat_wallpaper_${resolvedParams.conversationId}`, 'default');
            }
        }
    }["ConversationPage.useEffect"], [
        wallpaper,
        chatCustomization.ownedThemePacks,
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
                        setLoading(true);
                        setError(null);
                        const conv = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConversation"])(resolvedParams.conversationId);
                        setConversation(conv);
                        // Clear reply, uploading and optimistic messages when switching conversations
                        setReplyTo(null);
                        setUploadingMessages([]);
                        setOptimisticMessages([]);
                    } catch (err) {
                        setError(err instanceof Error ? err.message : 'Failed to load conversation');
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
    const otherUser = conversation?.otherParticipant;
    // Loading state
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
            }, void 0, false, {
                fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                lineNumber: 146,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
            lineNumber: 145,
            columnNumber: 12
        }, this);
    }
    // Error state
    if (error || !conversation || !otherUser) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-500 mb-4",
                        children: error || 'Conversation not found'
                    }, void 0, false, {
                        fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleBack,
                        className: "text-blue-600 hover:underline",
                        children: "Go back to messages"
                    }, void 0, false, {
                        fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                lineNumber: 153,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
            lineNumber: 152,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col h-full overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatHeader$3e$__["ChatHeader"], {
                        user: otherUser,
                        conversationId: resolvedParams.conversationId,
                        onBack: handleBack,
                        onInfo: ()=>setShowSettings(true)
                    }, void 0, false, {
                        fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatMessages$3e$__["ChatMessages"], {
                        conversationId: resolvedParams.conversationId,
                        currentUserId: user.id,
                        otherUser: otherUser,
                        wallpaper: wallpaper,
                        availableReactions: chatCustomization.availableReactions,
                        animatedBubbles: chatCustomization.animatedBubbles,
                        onReply: (msg)=>setReplyTo(msg),
                        uploadingMessages: uploadingMessages,
                        optimisticMessages: optimisticMessages,
                        onLastMessageUpdate: handleLastMessageUpdate,
                        onMessageConfirmed: handleMessageConfirmed
                    }, resolvedParams.conversationId, false, {
                        fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatInput$3e$__["ChatInput"], {
                        conversationId: resolvedParams.conversationId,
                        currentUserId: user.id,
                        replyTo: replyTo || undefined,
                        onCancelReply: ()=>setReplyTo(null),
                        onUploadingMessagesChange: setUploadingMessages,
                        onOptimisticMessage: handleOptimisticMessage,
                        otherUserId: otherUser.id,
                        otherUserName: otherUser.name,
                        lastReceivedMessage: lastReceivedMessage,
                        enabledMessageEffects: chatCustomization.messageEffects
                    }, `input-${resolvedParams.conversationId}`, false, {
                        fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatSettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showSettings,
                onClose: ()=>setShowSettings(false),
                conversationId: resolvedParams.conversationId,
                otherUser: otherUser,
                currentWallpaper: wallpaper,
                onWallpaperChange: handleWallpaperChange,
                ownedThemePacks: chatCustomization.ownedThemePacks,
                onOpenStore: ()=>router.push('/store')
            }, `settings-${resolvedParams.conversationId}`, false, {
                fileName: "[project]/src/app/messages/[conversationId]/page.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ConversationPage, "w5/qTONkqGw8XhPSQf/LHdwgpwE=", false, function() {
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

//# sourceMappingURL=src_3dc37fbd._.js.map