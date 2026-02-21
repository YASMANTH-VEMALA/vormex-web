(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/api/posts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Posts API - Complete API client for Posts & Feed endpoints
__turbopack_context__.s([
    "createComment",
    ()=>createComment,
    "createPost",
    ()=>createPost,
    "deletePost",
    ()=>deletePost,
    "deleteUpload",
    ()=>deleteUpload,
    "getComments",
    ()=>getComments,
    "getFeed",
    ()=>getFeed,
    "getMyLocation",
    ()=>getMyLocation,
    "getNearbyUsers",
    ()=>getNearbyUsers,
    "getPost",
    ()=>getPost,
    "getUnreadMentionCount",
    ()=>getUnreadMentionCount,
    "getUnreadMentions",
    ()=>getUnreadMentions,
    "markMentionsAsRead",
    ()=>markMentionsAsRead,
    "searchUsersForMention",
    ()=>searchUsersForMention,
    "toggleCommentLike",
    ()=>toggleCommentLike,
    "toggleLike",
    ()=>toggleLike,
    "trackImpression",
    ()=>trackImpression,
    "updateLocation",
    ()=>updateLocation,
    "updateLocationSettings",
    ()=>updateLocationSettings,
    "updatePost",
    ()=>updatePost,
    "uploadAvatar",
    ()=>uploadAvatar,
    "uploadBanner",
    ()=>uploadBanner,
    "votePoll",
    ()=>votePoll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/client.ts [app-client] (ecmascript)");
;
async function getFeed(cursor, limit = 20) {
    const params = {
        limit
    };
    if (cursor) params.cursor = cursor;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/posts/feed', {
        params
    });
}
async function getPost(postId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/posts/${postId}`);
}
async function createPost(formData) {
    // Content-Type is automatically handled by the request interceptor for FormData
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/posts', formData);
}
async function deletePost(postId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/posts/${postId}`);
}
async function updatePost(postId, data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/posts/${postId}`, data);
}
async function toggleLike(postId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/posts/${postId}/like`);
}
async function votePoll(postId, optionId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/posts/${postId}/poll/vote`, {
        optionId
    });
}
async function trackImpression(postId, locationData) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/posts/${postId}/impression`, locationData);
}
async function getComments(postId, parentId, page = 1, limit = 20) {
    const params = {
        page,
        limit
    };
    if (parentId) params.parentId = parentId;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/posts/${postId}/comments`, {
        params
    });
}
async function createComment(postId, content, parentId, mentions) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/posts/${postId}/comments`, {
        content,
        parentId,
        mentions
    });
}
async function toggleCommentLike(postId, commentId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/posts/${postId}/comments/${commentId}/like`);
}
async function searchUsersForMention(query) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/mentions/search', {
        params: {
            q: query
        }
    });
}
async function getUnreadMentions() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/mentions/unread');
}
async function getUnreadMentionCount() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/mentions/count');
}
async function markMentionsAsRead(mentionIds) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/mentions/read', {
        mentionIds
    });
}
async function uploadAvatar(file) {
    const formData = new FormData();
    formData.append('image', file);
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/upload/avatar', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}
async function uploadBanner(file) {
    const formData = new FormData();
    formData.append('image', file);
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/upload/banner', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}
async function deleteUpload(fileUrl, type) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete('/upload', {
        data: {
            fileUrl,
            type
        }
    });
}
async function updateLocation(lat, lng, accuracy, activity) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/location/update', {
        lat,
        lng,
        accuracy,
        activity
    });
}
async function getMyLocation() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/location/me');
}
async function getNearbyUsers(radius, limit) {
    const params = {};
    if (radius) params.radius = radius;
    if (limit) params.limit = limit;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/location/nearby', {
        params
    });
}
async function updateLocationSettings(settings) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put('/location/settings', settings);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/feed/CreatePostModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreatePostModal",
    ()=>CreatePostModal,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bold$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bold$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bold.js [app-client] (ecmascript) <export default as Bold>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$italic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Italic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/italic.js [app-client] (ecmascript) <export default as Italic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$at$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AtSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/at-sign.js [app-client] (ecmascript) <export default as AtSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$posts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/posts.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const POST_TYPES = [
    {
        type: 'TEXT',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        label: 'Text'
    },
    {
        type: 'IMAGE',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
        label: 'Image'
    },
    {
        type: 'VIDEO',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"],
        label: 'Video'
    },
    {
        type: 'LINK',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"],
        label: 'Link'
    },
    {
        type: 'POLL',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        label: 'Poll'
    },
    {
        type: 'ARTICLE',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        label: 'Article'
    },
    {
        type: 'CELEBRATION',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"],
        label: 'Celebration'
    }
];
const VISIBILITY_OPTIONS = [
    {
        value: 'PUBLIC',
        label: 'Anyone',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
    },
    {
        value: 'CONNECTIONS',
        label: 'Connections only',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        value: 'PRIVATE',
        label: 'Only me',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"]
    }
];
const CELEBRATION_TYPES = [
    {
        value: 'NEW_JOB',
        label: 'Started a new job',
        emoji: '🎉'
    },
    {
        value: 'PROMOTION',
        label: 'Got promoted',
        emoji: '🚀'
    },
    {
        value: 'GRADUATION',
        label: 'Graduated',
        emoji: '🎓'
    },
    {
        value: 'CERTIFICATION',
        label: 'Earned a certification',
        emoji: '📜'
    },
    {
        value: 'WORK_ANNIVERSARY',
        label: 'Work anniversary',
        emoji: '🎊'
    },
    {
        value: 'BIRTHDAY',
        label: 'Birthday',
        emoji: '🎂'
    }
];
function CreatePostModal({ isOpen, onClose, onPostCreated }) {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [postType, setPostType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('TEXT');
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [visibility, setVisibility] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('PUBLIC');
    const [showVisibilityDropdown, setShowVisibilityDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Image state
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [imagePreviews, setImagePreviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editingImageIndex, setEditingImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Video state
    const [video, setVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [videoPreview, setVideoPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Link state
    const [linkUrl, setLinkUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [linkPreview, setLinkPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fetchingLinkPreview, setFetchingLinkPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Poll state
    const [pollOptions, setPollOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        '',
        ''
    ]);
    const [pollDuration, setPollDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(24); // hours
    const [showResultsBeforeVote, setShowResultsBeforeVote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Article state
    const [articleTitle, setArticleTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [articleCoverImage, setArticleCoverImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [articleCoverPreview, setArticleCoverPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [articleTags, setArticleTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tagInput, setTagInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Celebration state
    const [celebrationType, setCelebrationType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Mention state
    const [mentionQuery, setMentionQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [mentionResults, setMentionResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showMentionDropdown, setShowMentionDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mentions, setMentions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Color picker state
    const [showColorPicker, setShowColorPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const colorPickerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Refs
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close color picker when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreatePostModal.useEffect": ()=>{
            const handleClickOutside = {
                "CreatePostModal.useEffect.handleClickOutside": (event)=>{
                    if (colorPickerRef.current && !colorPickerRef.current.contains(event.target)) {
                        setShowColorPicker(false);
                    }
                }
            }["CreatePostModal.useEffect.handleClickOutside"];
            if (showColorPicker) {
                document.addEventListener('mousedown', handleClickOutside);
            }
            return ({
                "CreatePostModal.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["CreatePostModal.useEffect"];
        }
    }["CreatePostModal.useEffect"], [
        showColorPicker
    ]);
    // Reset form when modal closes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreatePostModal.useEffect": ()=>{
            if (!isOpen) {
                resetForm();
            }
        }
    }["CreatePostModal.useEffect"], [
        isOpen
    ]);
    const resetForm = ()=>{
        setPostType('TEXT');
        setContent('');
        setVisibility('PUBLIC');
        setImages([]);
        setImagePreviews([]);
        setVideo(null);
        setVideoPreview(null);
        setLinkUrl('');
        setLinkPreview(null);
        setPollOptions([
            '',
            ''
        ]);
        setPollDuration(24);
        setShowResultsBeforeVote(false);
        setArticleTitle('');
        setArticleCoverImage(null);
        setArticleCoverPreview(null);
        setArticleTags([]);
        setCelebrationType(null);
        setMentions([]);
        setError(null);
    };
    // Handle image selection
    const handleImageSelect = (e)=>{
        const files = Array.from(e.target.files || []);
        if (images.length + files.length > 10) {
            setError('Maximum 10 images allowed');
            return;
        }
        const validFiles = files.filter((file)=>{
            if (file.size > 10 * 1024 * 1024) {
                setError('Image size must be under 10MB');
                return false;
            }
            return true;
        });
        setImages((prev)=>[
                ...prev,
                ...validFiles
            ]);
        validFiles.forEach((file_0)=>{
            const reader = new FileReader();
            reader.onload = (e_0)=>{
                setImagePreviews((prev_0)=>[
                        ...prev_0,
                        e_0.target?.result
                    ]);
            };
            reader.readAsDataURL(file_0);
        });
    };
    // Handle video selection
    const handleVideoSelect = (e_1)=>{
        const file_1 = e_1.target.files?.[0];
        if (!file_1) return;
        if (file_1.size > 500 * 1024 * 1024) {
            setError('Video size must be under 500MB');
            return;
        }
        setVideo(file_1);
        setVideoPreview(URL.createObjectURL(file_1));
    };
    // Remove image
    const removeImage = (index)=>{
        setImages((prev_1)=>prev_1.filter((_, i)=>i !== index));
        setImagePreviews((prev_2)=>prev_2.filter((__0, i_0)=>i_0 !== index));
    };
    // Handle edited image save
    const handleEditedImageSave = (blob)=>{
        if (editingImageIndex === null) return;
        // Create a new File from the blob
        const editedFile = new File([
            blob
        ], images[editingImageIndex].name, {
            type: 'image/jpeg'
        });
        // Update the images array
        setImages((prev_3)=>{
            const newImages = [
                ...prev_3
            ];
            newImages[editingImageIndex] = editedFile;
            return newImages;
        });
        // Update the preview
        const newPreviewUrl = URL.createObjectURL(blob);
        setImagePreviews((prev_4)=>{
            const newPreviews = [
                ...prev_4
            ];
            newPreviews[editingImageIndex] = newPreviewUrl;
            return newPreviews;
        });
        setEditingImageIndex(null);
    };
    // Handle poll option change
    const handlePollOptionChange = (index_0, value)=>{
        const newOptions = [
            ...pollOptions
        ];
        newOptions[index_0] = value;
        setPollOptions(newOptions);
    };
    // Add poll option
    const addPollOption = ()=>{
        if (pollOptions.length < 6) {
            setPollOptions([
                ...pollOptions,
                ''
            ]);
        }
    };
    // Remove poll option
    const removePollOption = (index_1)=>{
        if (pollOptions.length > 2) {
            setPollOptions(pollOptions.filter((__1, i_1)=>i_1 !== index_1));
        }
    };
    // Handle article tag add
    const handleAddTag = ()=>{
        if (tagInput.trim() && articleTags.length < 5) {
            setArticleTags([
                ...articleTags,
                tagInput.trim()
            ]);
            setTagInput('');
        }
    };
    // Search for mentions
    const searchMentions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CreatePostModal.useCallback[searchMentions]": async (query)=>{
            if (query.length < 2) {
                setMentionResults([]);
                setShowMentionDropdown(false);
                return;
            }
            try {
                const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$posts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchUsersForMention"])(query);
                setMentionResults(results);
                setShowMentionDropdown(results.length > 0);
            } catch (err) {
                console.error('Error searching mentions:', err);
            }
        }
    }["CreatePostModal.useCallback[searchMentions]"], []);
    // Handle content change with mention detection
    const handleContentChange = (e_2)=>{
        const value_0 = e_2.target.value;
        setContent(value_0);
        // Detect @mention
        const lastAtIndex = value_0.lastIndexOf('@');
        if (lastAtIndex !== -1) {
            const textAfterAt = value_0.slice(lastAtIndex + 1);
            const spaceIndex = textAfterAt.indexOf(' ');
            const query_0 = spaceIndex === -1 ? textAfterAt : textAfterAt.slice(0, spaceIndex);
            if (query_0 && !textAfterAt.includes(' ')) {
                setMentionQuery(query_0);
                searchMentions(query_0);
            } else {
                setShowMentionDropdown(false);
            }
        } else {
            setShowMentionDropdown(false);
        }
    };
    // Insert mention
    const insertMention = (user_0)=>{
        const lastAtIndex_0 = content.lastIndexOf('@');
        const newContent = content.slice(0, lastAtIndex_0) + `@${user_0.username} `;
        setContent(newContent);
        setMentions([
            ...mentions,
            user_0.id
        ]);
        setShowMentionDropdown(false);
        contentRef.current?.focus();
    };
    // Text formatting helper - wraps selected text or inserts at cursor
    const formatText = (prefix, suffix = prefix)=>{
        const textarea = contentRef.current;
        if (!textarea) return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = content.slice(start, end);
        let newContent_0;
        let newCursorPos;
        if (selectedText) {
            // Wrap selected text
            newContent_0 = content.slice(0, start) + prefix + selectedText + suffix + content.slice(end);
            newCursorPos = end + prefix.length + suffix.length;
        } else {
            // Insert placeholder at cursor
            newContent_0 = content.slice(0, start) + prefix + suffix + content.slice(end);
            newCursorPos = start + prefix.length;
        }
        setContent(newContent_0);
        // Restore focus and cursor position
        setTimeout(()=>{
            textarea.focus();
            textarea.setSelectionRange(newCursorPos, newCursorPos);
        }, 0);
    };
    // Format bold: **text**
    const handleBold = ()=>{
        formatText('**');
    };
    // Format italic: *text*
    const handleItalic = ()=>{
        formatText('*');
    };
    // Format code: `code`
    const handleCode = ()=>{
        formatText('`');
    };
    // Format list: add "- " at start of line
    const handleList = ()=>{
        const textarea_0 = contentRef.current;
        if (!textarea_0) return;
        const start_0 = textarea_0.selectionStart;
        const beforeCursor = content.slice(0, start_0);
        const afterCursor = content.slice(start_0);
        // Find the start of the current line
        const lineStart = beforeCursor.lastIndexOf('\n') + 1;
        const lineContent = beforeCursor.slice(lineStart);
        let newContent_1;
        let newCursorPos_0;
        // Check if line already starts with "- "
        if (lineContent.startsWith('- ')) {
            // Remove the list marker
            newContent_1 = content.slice(0, lineStart) + lineContent.slice(2) + afterCursor;
            newCursorPos_0 = start_0 - 2;
        } else {
            // Add the list marker
            newContent_1 = content.slice(0, lineStart) + '- ' + lineContent + afterCursor;
            newCursorPos_0 = start_0 + 2;
        }
        setContent(newContent_1);
        setTimeout(()=>{
            textarea_0.focus();
            textarea_0.setSelectionRange(newCursorPos_0, newCursorPos_0);
        }, 0);
    };
    // Trigger mention search
    const handleMentionClick = ()=>{
        const textarea_1 = contentRef.current;
        if (!textarea_1) return;
        const start_1 = textarea_1.selectionStart;
        const newContent_2 = content.slice(0, start_1) + '@' + content.slice(start_1);
        setContent(newContent_2);
        setTimeout(()=>{
            textarea_1.focus();
            textarea_1.setSelectionRange(start_1 + 1, start_1 + 1);
        }, 0);
    };
    // Color presets for the color picker
    const COLOR_PRESETS = [
        {
            name: 'Red',
            value: '#ef4444'
        },
        {
            name: 'Orange',
            value: '#f97316'
        },
        {
            name: 'Yellow',
            value: '#eab308'
        },
        {
            name: 'Green',
            value: '#22c55e'
        },
        {
            name: 'Teal',
            value: '#14b8a6'
        },
        {
            name: 'Blue',
            value: '#3b82f6'
        },
        {
            name: 'Purple',
            value: '#a855f7'
        },
        {
            name: 'Pink',
            value: '#ec4899'
        }
    ];
    // Insert color formatting: [color:#hex]text[/color]
    const handleColorInsert = (colorValue)=>{
        const textarea_2 = contentRef.current;
        if (!textarea_2) return;
        const start_2 = textarea_2.selectionStart;
        const end_0 = textarea_2.selectionEnd;
        const selectedText_0 = content.slice(start_2, end_0);
        const openTag = `[color:${colorValue}]`;
        const closeTag = '[/color]';
        let newContent_3;
        let newCursorPos_1;
        if (selectedText_0) {
            // Wrap selected text
            newContent_3 = content.slice(0, start_2) + openTag + selectedText_0 + closeTag + content.slice(end_0);
            newCursorPos_1 = start_2 + openTag.length + selectedText_0.length + closeTag.length;
        } else {
            // Insert placeholder and position cursor between tags
            newContent_3 = content.slice(0, start_2) + openTag + closeTag + content.slice(start_2);
            newCursorPos_1 = start_2 + openTag.length;
        }
        setContent(newContent_3);
        setShowColorPicker(false);
        setTimeout(()=>{
            textarea_2.focus();
            if (selectedText_0) {
                textarea_2.setSelectionRange(newCursorPos_1, newCursorPos_1);
            } else {
                textarea_2.setSelectionRange(newCursorPos_1, newCursorPos_1);
            }
        }, 0);
    };
    // Submit post
    const handleSubmit = async ()=>{
        if (isSubmitting) return;
        setError(null);
        setIsSubmitting(true);
        try {
            const formData = new FormData();
            formData.append('type', postType);
            formData.append('visibility', visibility);
            if (content) {
                formData.append('content', content);
            }
            if (mentions.length > 0) {
                formData.append('mentions', JSON.stringify(mentions));
            }
            switch(postType){
                case 'IMAGE':
                    if (images.length === 0) {
                        setError('Please add at least one image');
                        setIsSubmitting(false);
                        return;
                    }
                    images.forEach((img)=>{
                        formData.append('media', img);
                    });
                    break;
                case 'VIDEO':
                    if (!video) {
                        setError('Please add a video');
                        setIsSubmitting(false);
                        return;
                    }
                    formData.append('video', video);
                    break;
                case 'LINK':
                    if (!linkUrl) {
                        setError('Please add a link');
                        setIsSubmitting(false);
                        return;
                    }
                    formData.append('linkUrl', linkUrl);
                    break;
                case 'POLL':
                    const validOptions = pollOptions.filter((opt)=>opt.trim());
                    if (validOptions.length < 2) {
                        setError('Please add at least 2 poll options');
                        setIsSubmitting(false);
                        return;
                    }
                    validOptions.forEach((option)=>{
                        formData.append('pollOptions', option);
                    });
                    formData.append('pollDuration', String(pollDuration));
                    break;
                case 'ARTICLE':
                    if (!articleTitle) {
                        setError('Please add an article title');
                        setIsSubmitting(false);
                        return;
                    }
                    formData.append('articleTitle', articleTitle);
                    if (articleCoverImage) {
                        formData.append('articleCoverImage', articleCoverImage);
                    }
                    if (articleTags.length > 0) {
                        articleTags.forEach((tag)=>{
                            formData.append('articleTags', tag);
                        });
                    }
                    break;
                case 'CELEBRATION':
                    if (!celebrationType) {
                        setError('Please select a celebration type');
                        setIsSubmitting(false);
                        return;
                    }
                    formData.append('celebrationType', celebrationType);
                    break;
                case 'TEXT':
                default:
                    if (!content.trim()) {
                        setError('Please add some content');
                        setIsSubmitting(false);
                        return;
                    }
                    break;
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$posts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPost"])(formData);
            onPostCreated?.();
            onClose();
        } catch (err_0) {
            console.error('Error creating post:', err_0);
            setError(err_0.response?.data?.error || 'Failed to create post');
        } finally{
            setIsSubmitting(false);
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "fixed inset-0 z-50 flex items-center justify-center p-4",
            onClick: onClose,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-black/50 backdrop-blur-sm"
                }, void 0, false, {
                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                    lineNumber: 590,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scale: 0.9,
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        scale: 1,
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        scale: 0.9,
                        opacity: 0,
                        y: 20
                    },
                    transition: {
                        type: 'spring',
                        damping: 25,
                        stiffness: 300
                    },
                    onClick: (e_3)=>e_3.stopPropagation(),
                    className: "relative w-full max-w-3xl max-h-[92vh] overflow-hidden",
                    style: {
                        background: '#ecf0f3',
                        borderRadius: '24px',
                        boxShadow: '10px 10px 20px #d1d9e6, -10px -10px 20px #f9f9f9'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-5 border-b",
                            style: {
                                borderColor: '#d1d9e6'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-gray-800",
                                    children: "Create Post"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                    lineNumber: 618,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "p-2.5 rounded-full transition-all hover:scale-105",
                                    style: {
                                        background: '#ecf0f3',
                                        boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #f9f9f9'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-6 h-6 text-gray-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                        lineNumber: 623,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                    lineNumber: 619,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                            lineNumber: 615,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-14 h-14 rounded-full overflow-hidden",
                                    style: {
                                        boxShadow: 'inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #f9f9f9'
                                    },
                                    children: user?.profileImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: user.profileImage,
                                        alt: user.name,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                        lineNumber: 632,
                                        columnNumber: 37
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full flex items-center justify-center bg-gray-300 text-gray-600 font-bold",
                                        children: user?.name?.charAt(0).toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                        lineNumber: 632,
                                        columnNumber: 126
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                    lineNumber: 629,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-gray-800",
                                            children: user?.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                            lineNumber: 637,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setShowVisibilityDropdown(!showVisibilityDropdown),
                                                    className: "flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800 transition-colors",
                                                    children: (()=>{
                                                        const opt_0 = VISIBILITY_OPTIONS.find((o)=>o.value === visibility);
                                                        const Icon = opt_0?.icon || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"];
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                    lineNumber: 645,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: opt_0?.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                    lineNumber: 646,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                    lineNumber: 647,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true);
                                                    })()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 640,
                                                    columnNumber: 17
                                                }, this),
                                                showVisibilityDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-full left-0 mt-1 py-1 rounded-lg z-10",
                                                    style: {
                                                        background: '#ecf0f3',
                                                        boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #f9f9f9'
                                                    },
                                                    children: VISIBILITY_OPTIONS.map((opt_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setVisibility(opt_1.value);
                                                                setShowVisibilityDropdown(false);
                                                            },
                                                            className: "flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(opt_1.icon, {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                    lineNumber: 660,
                                                                    columnNumber: 25
                                                                }, this),
                                                                opt_1.label
                                                            ]
                                                        }, opt_1.value, true, {
                                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                            lineNumber: 656,
                                                            columnNumber: 54
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 652,
                                                    columnNumber: 44
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                            lineNumber: 639,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                    lineNumber: 636,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                            lineNumber: 628,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 px-4 pb-3 overflow-x-auto scrollbar-hide",
                            style: {
                                scrollbarWidth: 'none'
                            },
                            children: POST_TYPES.map(({ type, icon: Icon_0, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setPostType(type),
                                    className: `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${postType === type ? 'text-blue-600' : 'text-gray-600 hover:text-gray-800'}`,
                                    style: {
                                        background: '#ecf0f3',
                                        boxShadow: postType === type ? 'inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #f9f9f9' : '4px 4px 8px #d1d9e6, -4px -4px 8px #f9f9f9'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon_0, {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                            lineNumber: 680,
                                            columnNumber: 17
                                        }, this),
                                        label
                                    ]
                                }, type, true, {
                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                    lineNumber: 676,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                            lineNumber: 669,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5 overflow-y-auto",
                            style: {
                                maxHeight: 'calc(92vh - 280px)'
                            },
                            children: [
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 p-3 rounded-lg bg-red-100 text-red-700 text-sm",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                    lineNumber: 690,
                                    columnNumber: 23
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 p-2 mb-2 rounded-lg",
                                            style: {
                                                background: '#ecf0f3',
                                                boxShadow: 'inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: handleBold,
                                                    className: "p-2 rounded hover:bg-gray-200 transition-colors",
                                                    title: "Bold (**text**)",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bold$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bold$3e$__["Bold"], {
                                                        className: "w-4 h-4 text-gray-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                        lineNumber: 702,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 701,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: handleItalic,
                                                    className: "p-2 rounded hover:bg-gray-200 transition-colors",
                                                    title: "Italic (*text*)",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$italic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Italic$3e$__["Italic"], {
                                                        className: "w-4 h-4 text-gray-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                        lineNumber: 705,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 704,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: handleList,
                                                    className: "p-2 rounded hover:bg-gray-200 transition-colors",
                                                    title: "Bullet List",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                                        className: "w-4 h-4 text-gray-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                        lineNumber: 708,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 707,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: handleCode,
                                                    className: "p-2 rounded hover:bg-gray-200 transition-colors",
                                                    title: "Code (`code`)",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                                        className: "w-4 h-4 text-gray-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                        lineNumber: 711,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 710,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-px h-5 bg-gray-300 mx-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 713,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: handleMentionClick,
                                                    className: "p-2 rounded hover:bg-gray-200 transition-colors",
                                                    title: "Mention someone (@)",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$at$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AtSign$3e$__["AtSign"], {
                                                        className: "w-4 h-4 text-gray-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                        lineNumber: 715,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 714,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    ref: colorPickerRef,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setShowColorPicker(!showColorPicker),
                                                            className: "p-2 rounded hover:bg-gray-200 transition-colors",
                                                            title: "Text Color",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                                                className: "w-4 h-4 text-gray-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                lineNumber: 719,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                            lineNumber: 718,
                                                            columnNumber: 19
                                                        }, this),
                                                        showColorPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-full left-1/2 -translate-x-1/2 mt-2 p-3 rounded-xl z-30 min-w-[200px]",
                                                            style: {
                                                                background: '#ecf0f3',
                                                                boxShadow: '6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-medium text-gray-500 mb-2 text-center",
                                                                    children: "Choose Color"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                    lineNumber: 726,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-4 gap-2",
                                                                    children: COLOR_PRESETS.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>handleColorInsert(color.value),
                                                                            className: "group flex flex-col items-center gap-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-8 h-8 rounded-full border-2 border-white shadow-md hover:scale-110 hover:shadow-lg transition-all duration-200",
                                                                                    style: {
                                                                                        backgroundColor: color.value
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                                    lineNumber: 729,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[10px] text-gray-500 group-hover:text-gray-700",
                                                                                    children: color.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                                    lineNumber: 732,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, color.value, true, {
                                                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                            lineNumber: 728,
                                                                            columnNumber: 53
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                    lineNumber: 727,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                            lineNumber: 722,
                                                            columnNumber: 39
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 717,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                            lineNumber: 697,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    ref: contentRef,
                                                    value: content,
                                                    onChange: handleContentChange,
                                                    placeholder: "What do you want to share?",
                                                    className: "w-full min-h-[180px] p-5 rounded-xl text-gray-800 placeholder-gray-400 resize-none outline-none text-base leading-relaxed",
                                                    style: {
                                                        background: '#ecf0f3',
                                                        boxShadow: 'inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #f9f9f9',
                                                        fontFamily: "'Montserrat', sans-serif"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 741,
                                                    columnNumber: 17
                                                }, this),
                                                showMentionDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-full left-0 w-64 mb-2 py-2 rounded-lg max-h-48 overflow-y-auto z-20",
                                                    style: {
                                                        background: '#ecf0f3',
                                                        boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #f9f9f9'
                                                    },
                                                    children: mentionResults.map((user_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>insertMention(user_1),
                                                            className: "flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-8 h-8 rounded-full overflow-hidden bg-gray-300",
                                                                    children: user_1.profileImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: user_1.profileImage,
                                                                        alt: user_1.name,
                                                                        className: "w-full h-full object-cover"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                        lineNumber: 754,
                                                                        columnNumber: 51
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                    lineNumber: 753,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-left",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm font-medium text-gray-800",
                                                                            children: user_1.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                            lineNumber: 757,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: [
                                                                                "@",
                                                                                user_1.username
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                            lineNumber: 758,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                    lineNumber: 756,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, user_1.id, true, {
                                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                            lineNumber: 752,
                                                            columnNumber: 51
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 748,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                            lineNumber: 740,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                    lineNumber: 695,
                                    columnNumber: 13
                                }, this),
                                postType === 'IMAGE' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: fileInputRef,
                                            type: "file",
                                            accept: "image/*",
                                            multiple: true,
                                            onChange: handleImageSelect,
                                            className: "hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                            lineNumber: 767,
                                            columnNumber: 17
                                        }, this),
                                        imagePreviews.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                imagePreviews.map((preview, index_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative rounded-xl overflow-hidden bg-gray-100",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: preview,
                                                                alt: "",
                                                                className: "w-full max-h-[400px] object-contain mx-auto",
                                                                style: {
                                                                    display: 'block'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                lineNumber: 771,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute top-2 right-2 flex gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setEditingImageIndex(index_2),
                                                                        className: "p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors shadow-lg",
                                                                        title: "Edit image",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                            lineNumber: 776,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                        lineNumber: 775,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>removeImage(index_2),
                                                                        className: "p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors shadow-lg",
                                                                        title: "Remove image",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                            lineNumber: 779,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                        lineNumber: 778,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                lineNumber: 774,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute bottom-2 left-2 px-2 py-1 rounded-full bg-black/50 text-white text-xs",
                                                                children: [
                                                                    index_2 + 1,
                                                                    " / ",
                                                                    imagePreviews.length
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                lineNumber: 782,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, index_2, true, {
                                                        fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                        lineNumber: 770,
                                                        columnNumber: 62
                                                    }, this)),
                                                images.length < 10 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>fileInputRef.current?.click(),
                                                    className: "w-full py-8 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.01]",
                                                    style: {
                                                        background: '#ecf0f3',
                                                        boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #f9f9f9'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "w-6 h-6 text-gray-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                            lineNumber: 790,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-500",
                                                            children: "Add more images"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                            lineNumber: 791,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 786,
                                                    columnNumber: 44
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                            lineNumber: 769,
                                            columnNumber: 45
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>fileInputRef.current?.click(),
                                            className: "w-full py-12 rounded-xl flex flex-col items-center justify-center gap-2 transition-all hover:scale-[1.01]",
                                            style: {
                                                background: '#ecf0f3',
                                                boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #f9f9f9'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                    className: "w-12 h-12 text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 797,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-500",
                                                    children: "Click to add images (max 10)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 798,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-400",
                                                    children: "Up to 10MB each"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 799,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                            lineNumber: 793,
                                            columnNumber: 28
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                    lineNumber: 766,
                                    columnNumber: 38
                                }, this),
                                postType === 'VIDEO' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: videoInputRef,
                                            type: "file",
                                            accept: "video/*",
                                            onChange: handleVideoSelect,
                                            className: "hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                            lineNumber: 804,
                                            columnNumber: 17
                                        }, this),
                                        videoPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative rounded-xl overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                    src: videoPreview,
                                                    controls: true,
                                                    className: "w-full max-h-64 object-contain bg-black"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 807,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setVideo(null);
                                                        setVideoPreview(null);
                                                    },
                                                    className: "absolute top-2 right-2 p-2 rounded-full bg-red-500 text-white",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                        lineNumber: 812,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 808,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                            lineNumber: 806,
                                            columnNumber: 33
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>videoInputRef.current?.click(),
                                            className: "w-full py-12 rounded-xl flex flex-col items-center justify-center gap-2 transition-all hover:scale-[1.01]",
                                            style: {
                                                background: '#ecf0f3',
                                                boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #f9f9f9'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                    className: "w-12 h-12 text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 818,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-500",
                                                    children: "Click to add video"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 819,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-400",
                                                    children: "Up to 500MB"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 820,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                            lineNumber: 814,
                                            columnNumber: 28
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                    lineNumber: 803,
                                    columnNumber: 38
                                }, this),
                                postType === 'LINK' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl p-3",
                                            style: {
                                                background: '#ecf0f3',
                                                boxShadow: 'inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #f9f9f9'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "url",
                                                value: linkUrl,
                                                onChange: (e_4)=>setLinkUrl(e_4.target.value),
                                                placeholder: "https://example.com",
                                                className: "w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                lineNumber: 829,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                            lineNumber: 825,
                                            columnNumber: 17
                                        }, this),
                                        linkPreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 rounded-xl overflow-hidden",
                                            style: {
                                                boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #f9f9f9'
                                            },
                                            children: [
                                                linkPreview.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: linkPreview.image,
                                                    alt: "",
                                                    className: "w-full h-40 object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 835,
                                                    columnNumber: 43
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 bg-white/50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-semibold text-gray-800",
                                                            children: linkPreview.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                            lineNumber: 837,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-500 mt-1",
                                                            children: linkPreview.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                            lineNumber: 838,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-400 mt-2",
                                                            children: linkPreview.domain
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                            lineNumber: 839,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 836,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                            lineNumber: 832,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                    lineNumber: 824,
                                    columnNumber: 37
                                }, this),
                                postType === 'POLL' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 space-y-3",
                                    children: [
                                        pollOptions.map((option_0, index_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 rounded-xl p-3",
                                                        style: {
                                                            background: '#ecf0f3',
                                                            boxShadow: 'inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #f9f9f9'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: option_0,
                                                            onChange: (e_5)=>handlePollOptionChange(index_3, e_5.target.value),
                                                            placeholder: `Option ${index_3 + 1}`,
                                                            className: "w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                            lineNumber: 850,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                        lineNumber: 846,
                                                        columnNumber: 21
                                                    }, this),
                                                    pollOptions.length > 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>removePollOption(index_3),
                                                        className: "p-2 rounded-full text-red-500 hover:bg-red-50 transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                            lineNumber: 853,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                        lineNumber: 852,
                                                        columnNumber: 48
                                                    }, this)
                                                ]
                                            }, index_3, true, {
                                                fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                lineNumber: 845,
                                                columnNumber: 57
                                            }, this)),
                                        pollOptions.length < 6 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: addPollOption,
                                            className: "flex items-center gap-2 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 858,
                                                    columnNumber: 21
                                                }, this),
                                                "Add option"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                            lineNumber: 857,
                                            columnNumber: 44
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 pt-4 border-t",
                                            style: {
                                                borderColor: '#d1d9e6'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-sm text-gray-600",
                                                            children: "Poll duration"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                            lineNumber: 866,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: pollDuration,
                                                            onChange: (e_6)=>setPollDuration(Number(e_6.target.value)),
                                                            className: "w-full mt-1 p-2 rounded-lg bg-transparent text-gray-800 outline-none",
                                                            style: {
                                                                background: '#ecf0f3',
                                                                boxShadow: 'inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: 1,
                                                                    children: "1 hour"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                    lineNumber: 871,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: 6,
                                                                    children: "6 hours"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                    lineNumber: 872,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: 12,
                                                                    children: "12 hours"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                    lineNumber: 873,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: 24,
                                                                    children: "1 day"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                    lineNumber: 874,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: 72,
                                                                    children: "3 days"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                    lineNumber: 875,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: 168,
                                                                    children: "1 week"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                    lineNumber: 876,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                            lineNumber: 867,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 865,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center gap-2 cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: showResultsBeforeVote,
                                                            onChange: (e_7)=>setShowResultsBeforeVote(e_7.target.checked),
                                                            className: "w-4 h-4 rounded"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                            lineNumber: 881,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-600",
                                                            children: "Show results before voting"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                            lineNumber: 882,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 880,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                            lineNumber: 862,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                    lineNumber: 844,
                                    columnNumber: 37
                                }, this),
                                postType === 'ARTICLE' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl p-3",
                                            style: {
                                                background: '#ecf0f3',
                                                boxShadow: 'inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #f9f9f9'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: articleTitle,
                                                onChange: (e_8)=>setArticleTitle(e_8.target.value),
                                                placeholder: "Article title",
                                                className: "w-full bg-transparent outline-none text-gray-800 placeholder-gray-400 text-lg font-semibold"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                lineNumber: 892,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                            lineNumber: 888,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 flex-wrap",
                                            children: [
                                                articleTags.map((tag_0, index_4)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700",
                                                        children: [
                                                            tag_0,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setArticleTags((tags)=>tags.filter((__2, i_2)=>i_2 !== index_4)),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                    lineNumber: 899,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                                lineNumber: 898,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, index_4, true, {
                                                        fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                        lineNumber: 896,
                                                        columnNumber: 56
                                                    }, this)),
                                                articleTags.length < 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: tagInput,
                                                        onChange: (e_9)=>setTagInput(e_9.target.value),
                                                        onKeyDown: (e_10)=>e_10.key === 'Enter' && (e_10.preventDefault(), handleAddTag()),
                                                        placeholder: "Add tag",
                                                        className: "px-3 py-1 rounded-full text-sm bg-transparent outline-none text-gray-800 placeholder-gray-400",
                                                        style: {
                                                            boxShadow: 'inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                        lineNumber: 903,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 902,
                                                    columnNumber: 46
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                            lineNumber: 895,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                    lineNumber: 887,
                                    columnNumber: 40
                                }, this),
                                postType === 'CELEBRATION' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 grid grid-cols-2 gap-3",
                                    children: CELEBRATION_TYPES.map(({ value: value_1, label: label_0, emoji })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCelebrationType(value_1),
                                            className: `p-4 rounded-xl text-left transition-all ${celebrationType === value_1 ? 'ring-2 ring-blue-500' : ''}`,
                                            style: {
                                                background: '#ecf0f3',
                                                boxShadow: celebrationType === value_1 ? 'inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #f9f9f9' : '4px 4px 8px #d1d9e6, -4px -4px 8px #f9f9f9'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl",
                                                    children: emoji
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 919,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 text-sm font-medium text-gray-800",
                                                    children: label_0
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                    lineNumber: 920,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, value_1, true, {
                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                            lineNumber: 915,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                    lineNumber: 910,
                                    columnNumber: 44
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                            lineNumber: 686,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-5 border-t",
                            style: {
                                borderColor: '#d1d9e6'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setPostType('IMAGE'),
                                            className: "p-2.5 rounded-lg hover:bg-gray-100 transition-colors",
                                            title: "Add image",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                className: "w-6 h-6 text-green-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                lineNumber: 932,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                            lineNumber: 931,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setPostType('VIDEO'),
                                            className: "p-2.5 rounded-lg hover:bg-gray-100 transition-colors",
                                            title: "Add video",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                className: "w-6 h-6 text-purple-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                lineNumber: 935,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                            lineNumber: 934,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setPostType('POLL'),
                                            className: "p-2.5 rounded-lg hover:bg-gray-100 transition-colors",
                                            title: "Create poll",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                                className: "w-6 h-6 text-orange-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                                lineNumber: 938,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                            lineNumber: 937,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                    lineNumber: 929,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSubmit,
                                    disabled: isSubmitting,
                                    className: "px-8 py-2.5 rounded-full font-semibold text-white transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-base",
                                    style: {
                                        background: 'linear-gradient(145deg, #4B70E2, #3a5bc7)',
                                        boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #f9f9f9'
                                    },
                                    children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-5 h-5 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                        lineNumber: 946,
                                        columnNumber: 31
                                    }, this) : 'Post'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                                    lineNumber: 942,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                            lineNumber: 926,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/feed/CreatePostModal.tsx",
                    lineNumber: 593,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/feed/CreatePostModal.tsx",
            lineNumber: 582,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/feed/CreatePostModal.tsx",
        lineNumber: 581,
        columnNumber: 10
    }, this);
}
_s(CreatePostModal, "2cPP6+ZXp0iL2KPLTTuCt95+uKA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = CreatePostModal;
const __TURBOPACK__default__export__ = CreatePostModal;
var _c;
__turbopack_context__.k.register(_c, "CreatePostModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/feed/CreatePostModal.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/feed/CreatePostModal.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_b4aac442._.js.map