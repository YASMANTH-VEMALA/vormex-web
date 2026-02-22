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
    "sharePostToUser",
    ()=>sharePostToUser,
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
    "uploadCertificate",
    ()=>uploadCertificate,
    "uploadProjectImage",
    ()=>uploadProjectImage,
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
async function sharePostToUser(postId, userId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/posts/${postId}/share`, {
        userId
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
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/mentions/search', {
        params: {
            q: query
        }
    });
    return res.users ?? [];
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
async function uploadCertificate(file) {
    const formData = new FormData();
    formData.append('image', file);
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/upload/certificate', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}
async function uploadProjectImage(file) {
    const formData = new FormData();
    formData.append('image', file);
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/upload/project', formData, {
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
"[project]/src/lib/api/saved.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkPostSaved",
    ()=>checkPostSaved,
    "getSavedPosts",
    ()=>getSavedPosts,
    "savePost",
    ()=>savePost,
    "toggleSavePost",
    ()=>toggleSavePost,
    "unsavePost",
    ()=>unsavePost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/client.ts [app-client] (ecmascript)");
;
const getSavedPosts = async (page = 1, limit = 10)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/saved', {
        params: {
            page,
            limit
        }
    });
    return response.data;
};
const toggleSavePost = async (postId)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/saved/${postId}/toggle`);
    return response.data;
};
const savePost = async (postId)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/saved/${postId}`);
    return response.data;
};
const unsavePost = async (postId)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/saved/${postId}`);
    return response.data;
};
const checkPostSaved = async (postId)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/saved/${postId}/check`);
    return response.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api/reports.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reportAPI",
    ()=>reportAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/client.ts [app-client] (ecmascript)");
;
const reportAPI = {
    // Get available report reasons
    getReasons: async ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/reports/reasons');
    },
    // Report a post
    reportPost: async (postId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/reports/post/${postId}`, data);
    },
    // Report a comment
    reportComment: async (commentId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/reports/comment/${commentId}`, data);
    },
    // Report a user in chat
    reportChatUser: async (conversationId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/reports/chat/${conversationId}`, data);
    },
    // Report a user profile
    reportUser: async (userId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/reports/user/${userId}`, data);
    },
    // Report a group
    reportGroup: async (groupId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/reports/group/${groupId}`, data);
    },
    // Get user's own reports
    getMyReports: async (page = 1, limit = 10)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/reports/my-reports?page=${page}&limit=${limit}`);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api/stories.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addStoryToHighlight",
    ()=>addStoryToHighlight,
    "archiveStory",
    ()=>archiveStory,
    "createHighlight",
    ()=>createHighlight,
    "createStory",
    ()=>createStory,
    "createStoryWithMedia",
    ()=>createStoryWithMedia,
    "deleteHighlight",
    ()=>deleteHighlight,
    "deleteStory",
    ()=>deleteStory,
    "getArchivedStories",
    ()=>getArchivedStories,
    "getHighlightStories",
    ()=>getHighlightStories,
    "getMyStories",
    ()=>getMyStories,
    "getStoriesFeed",
    ()=>getStoriesFeed,
    "getStory",
    ()=>getStory,
    "getStoryReplies",
    ()=>getStoryReplies,
    "getStoryViewers",
    ()=>getStoryViewers,
    "getUserHighlights",
    ()=>getUserHighlights,
    "getUserStories",
    ()=>getUserStories,
    "reactToStory",
    ()=>reactToStory,
    "removeReaction",
    ()=>removeReaction,
    "removeStoryFromHighlight",
    ()=>removeStoryFromHighlight,
    "replyToStory",
    ()=>replyToStory,
    "updateHighlight",
    ()=>updateHighlight,
    "viewStory",
    ()=>viewStory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/client.ts [app-client] (ecmascript)");
;
const createStory = async (data)=>{
    // apiClient interceptor already returns response.data
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/stories', data);
};
const createStoryWithMedia = async (formData)=>{
    // apiClient interceptor already returns response.data
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/stories', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};
const getStoriesFeed = async ()=>{
    try {
        // apiClient interceptor already returns response.data, so this IS the data
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/stories/feed');
        const data = response.data || response;
        console.log('📖 Stories API raw response:', data);
        // Ensure we always return the expected structure
        if (data && Array.isArray(data.storyGroups)) {
            return {
                storyGroups: data.storyGroups
            };
        }
        // If response is already an array, wrap it
        if (Array.isArray(data)) {
            return {
                storyGroups: data
            };
        }
        // Default empty array
        return {
            storyGroups: []
        };
    } catch (error) {
        console.error('📖 Stories API error:', error);
        throw error;
    }
};
const getStory = async (storyId)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/stories/${storyId}`);
};
const getMyStories = async (includeExpired = false)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/stories/me', {
        params: {
            includeExpired
        }
    });
};
const deleteStory = async (storyId)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/stories/${storyId}`);
};
const getUserStories = async (userId)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/stories/user/${userId}`);
};
const viewStory = async (storyId, duration)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/stories/${storyId}/view`, {
        duration
    });
};
const getStoryViewers = async (storyId, cursor, limit = 20)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/stories/${storyId}/viewers`, {
        params: {
            cursor,
            limit
        }
    });
};
const reactToStory = async (storyId, reactionType)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/stories/${storyId}/react`, {
        reactionType
    });
};
const removeReaction = async (storyId)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/stories/${storyId}/react`);
};
const replyToStory = async (storyId, content, mediaUrl)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/stories/${storyId}/reply`, {
        content,
        mediaUrl
    });
};
const getStoryReplies = async (storyId)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/stories/${storyId}/replies`);
};
const createHighlight = async (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/stories/highlights', data);
};
const getUserHighlights = async (userId)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/stories/highlights/user/${userId}`);
};
const getHighlightStories = async (highlightId)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/stories/highlights/${highlightId}`);
};
const updateHighlight = async (highlightId, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch(`/stories/highlights/${highlightId}`, data);
};
const deleteHighlight = async (highlightId)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/stories/highlights/${highlightId}`);
};
const addStoryToHighlight = async (highlightId, storyId)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/stories/highlights/${highlightId}/stories/${storyId}`);
};
const removeStoryFromHighlight = async (highlightId, storyId)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/stories/highlights/${highlightId}/stories/${storyId}`);
};
const archiveStory = async (storyId)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/stories/${storyId}/archive`);
};
const getArchivedStories = async ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/stories/archive');
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api/connections.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "acceptConnectionRequest",
    ()=>acceptConnectionRequest,
    "cancelConnectionRequest",
    ()=>cancelConnectionRequest,
    "getConnectionStatus",
    ()=>getConnectionStatus,
    "getConnections",
    ()=>getConnections,
    "getPendingRequests",
    ()=>getPendingRequests,
    "getSentRequests",
    ()=>getSentRequests,
    "getUserConnections",
    ()=>getUserConnections,
    "rejectConnectionRequest",
    ()=>rejectConnectionRequest,
    "removeConnection",
    ()=>removeConnection,
    "sendConnectionRequest",
    ()=>sendConnectionRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/client.ts [app-client] (ecmascript)");
;
async function sendConnectionRequest(receiverId, message) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/connections/request', {
        receiverId,
        message
    });
}
async function acceptConnectionRequest(connectionId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/connections/${connectionId}/accept`);
}
async function rejectConnectionRequest(connectionId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/connections/${connectionId}/reject`);
}
async function cancelConnectionRequest(connectionId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/connections/${connectionId}/cancel`);
}
async function removeConnection(connectionId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/connections/${connectionId}`);
}
async function getConnections(page = 1, limit = 20) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/connections?page=${page}&limit=${limit}`);
}
async function getUserConnections(userId, page = 1, limit = 20) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/connections/user/${userId}?page=${page}&limit=${limit}`);
}
async function getPendingRequests(page = 1, limit = 20) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/connections/pending?page=${page}&limit=${limit}`);
    // Backend returns 'requests', normalize to 'connections'
    return {
        connections: response.connections || response.requests || [],
        total: response.total || 0,
        page: response.page || page,
        totalPages: response.totalPages || 1,
        hasMore: response.hasMore || false
    };
}
async function getSentRequests(page = 1, limit = 20) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/connections/sent?page=${page}&limit=${limit}`);
    // Backend returns 'requests', normalize to 'connections'
    return {
        connections: response.connections || response.requests || [],
        total: response.total || 0,
        page: response.page || page,
        totalPages: response.totalPages || 1,
        hasMore: response.hasMore || false
    };
}
async function getConnectionStatus(userId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/connections/status/${userId}`);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api/variable-rewards.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRewardData",
    ()=>getRewardData,
    "markRewardShown",
    ()=>markRewardShown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/client.ts [app-client] (ecmascript)");
;
async function getRewardData() {
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/feed/reward-data');
    return res.data.data;
}
async function markRewardShown(cardType, itemIds) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/feed/mark-shown', {
        cardType,
        itemIds
    });
}
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
"[project]/src/hooks/useRewards.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRewards",
    ()=>useRewards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$engagement$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/engagement.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
/**
 * useRewards - Hook that checks for milestone achievements and queues reward popups
 * Mirrors Android's FeedRewardRepository logic
 */ const REWARDS_SHOWN_KEY = 'vormex_rewards_shown';
function getShownRewards() {
    try {
        const stored = localStorage.getItem(REWARDS_SHOWN_KEY);
        return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch  {
        return new Set();
    }
}
function markRewardShown(id) {
    try {
        const shown = getShownRewards();
        shown.add(id);
        // Keep only last 100 to avoid localStorage bloat
        const arr = Array.from(shown).slice(-100);
        localStorage.setItem(REWARDS_SHOWN_KEY, JSON.stringify(arr));
    } catch  {
    // localStorage not available
    }
}
function useRewards(userId) {
    _s();
    const [rewards, setRewards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRewards.useEffect": ()=>{
            if (!userId) return;
            const checkMilestones = {
                "useRewards.useEffect.checkMilestones": async ()=>{
                    const shown = getShownRewards();
                    const newRewards = [];
                    try {
                        const [streakData, goalsData] = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$engagement$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStreaks"])().catch({
                                "useRewards.useEffect.checkMilestones": ()=>null
                            }["useRewards.useEffect.checkMilestones"]),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$engagement$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeeklyGoals"])().catch({
                                "useRewards.useEffect.checkMilestones": ()=>null
                            }["useRewards.useEffect.checkMilestones"])
                        ]);
                        // Streak milestones (3, 5, 7, 10, 14, 21, 30, 50, 100 days)
                        if (streakData) {
                            const milestones = [
                                3,
                                5,
                                7,
                                10,
                                14,
                                21,
                                30,
                                50,
                                100
                            ];
                            const streaks = [
                                {
                                    key: 'connection',
                                    value: streakData.connectionStreak,
                                    label: 'Networking'
                                },
                                {
                                    key: 'login',
                                    value: streakData.loginStreak,
                                    label: 'Login'
                                },
                                {
                                    key: 'posting',
                                    value: streakData.postingStreak,
                                    label: 'Posting'
                                },
                                {
                                    key: 'messaging',
                                    value: streakData.messagingStreak,
                                    label: 'Messaging'
                                }
                            ];
                            for (const s of streaks){
                                for (const m of milestones){
                                    if (s.value === m) {
                                        const id = `streak_${s.key}_${m}`;
                                        if (!shown.has(id)) {
                                            newRewards.push({
                                                id,
                                                type: 'streak_milestone',
                                                title: `${m}-Day ${s.label} Streak! 🔥`,
                                                message: `You've been consistent for ${m} days straight.`,
                                                value: `${m} days`,
                                                subtext: 'Keep it going!',
                                                showConfetti: m >= 7
                                            });
                                        }
                                    }
                                }
                            }
                        }
                        // Weekly goals completed
                        if (goalsData?.isCompleted) {
                            const weekId = `weekly_goals_${new Date().toISOString().slice(0, 10)}`;
                            if (!shown.has(weekId)) {
                                newRewards.push({
                                    id: weekId,
                                    type: 'weekly_goal_complete',
                                    title: 'Weekly Goals Complete! 🎯',
                                    message: 'You crushed all your goals this week.',
                                    subtext: 'New goals reset next Monday',
                                    showConfetti: true
                                });
                            }
                        }
                        // Limit to 2 popups per session
                        setRewards(newRewards.slice(0, 2));
                    } catch (error) {
                        console.error('Failed to check milestones:', error);
                    }
                }
            }["useRewards.useEffect.checkMilestones"];
            // Delay the check to not compete with feed loading
            const timer = setTimeout(checkMilestones, 3000);
            return ({
                "useRewards.useEffect": ()=>clearTimeout(timer)
            })["useRewards.useEffect"];
        }
    }["useRewards.useEffect"], [
        userId
    ]);
    const dismissReward = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRewards.useCallback[dismissReward]": (id_0)=>{
            markRewardShown(id_0);
            setRewards({
                "useRewards.useCallback[dismissReward]": (prev)=>prev.filter({
                        "useRewards.useCallback[dismissReward]": (r)=>r.id !== id_0
                    }["useRewards.useCallback[dismissReward]"])
            }["useRewards.useCallback[dismissReward]"]);
        }
    }["useRewards.useCallback[dismissReward]"], []);
    return {
        rewards,
        dismissReward
    };
}
_s(useRewards, "k87j1G02HBSaH81BAZe9HZQQp8M=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useVariableRewards.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVariableRewards",
    ()=>useVariableRewards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$variable$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/variable-rewards.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useVariableRewards(userId) {
    _s();
    const [rewardData, setRewardData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeCards, setActiveCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [shownCardTypes, setShownCardTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const fetchedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const fetchRewards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVariableRewards.useCallback[fetchRewards]": async ()=>{
            if (!userId || fetchedRef.current) return;
            fetchedRef.current = true;
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$variable$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRewardData"])();
                setRewardData(data);
                // Determine which cards to show (variable-ratio: not all at once)
                const available = [];
                if (data.hasNewMatches && data.matches.length > 0) available.push({
                    type: 'MATCH_BURST',
                    priority: 1
                });
                if (data.hasTrendingSpike && data.trendingData?.hasSpike) available.push({
                    type: 'TRENDING',
                    priority: 2
                });
                if (data.hasHiddenGems && data.hiddenGems.length > 0) available.push({
                    type: 'HIDDEN_GEM',
                    priority: 3
                });
                if (data.hasNewMilestones && data.milestones.length > 0) available.push({
                    type: 'MILESTONE',
                    priority: 0
                }); // highest priority
                if (data.hasNewOpportunities && data.opportunities.length > 0) available.push({
                    type: 'OPPORTUNITY',
                    priority: 5
                });
                if (data.hasNewViewers && data.viewers.length > 0) available.push({
                    type: 'SOCIAL_PROOF',
                    priority: 4
                });
                if (data.canGetSurpriseBoost && data.surpriseBoostData?.eligible) available.push({
                    type: 'SURPRISE_BOOST',
                    priority: 0
                });
                if (data.hasConnectionUpdates && data.connectionUpdates?.hasUpdates) available.push({
                    type: 'CONNECTION_UPDATE',
                    priority: 2
                });
                // Sort by priority, pick up to 3 cards per session (variable ratio)
                available.sort({
                    "useVariableRewards.useCallback[fetchRewards]": (a, b)=>a.priority - b.priority
                }["useVariableRewards.useCallback[fetchRewards]"]);
                const maxCards = Math.min(available.length, 3);
                const selected = available.slice(0, maxCards);
                // Assign positions: after post 3, 7, 12 (variable spacing)
                const positions = [
                    3,
                    7,
                    12
                ];
                const cards = selected.map({
                    "useVariableRewards.useCallback[fetchRewards].cards": (s, i)=>({
                            type: s.type,
                            data,
                            position: positions[i] || positions[positions.length - 1] + i * 4
                        })
                }["useVariableRewards.useCallback[fetchRewards].cards"]);
                // Check localStorage for already-shown deduplication
                const shownKey = `rewards_shown_${new Date().toISOString().slice(0, 10)}`;
                const alreadyShown = new Set(JSON.parse(localStorage.getItem(shownKey) || '[]'));
                const filtered = cards.filter({
                    "useVariableRewards.useCallback[fetchRewards].filtered": (c)=>!alreadyShown.has(c.type)
                }["useVariableRewards.useCallback[fetchRewards].filtered"]);
                setActiveCards(filtered);
                setShownCardTypes(alreadyShown);
            } catch (err) {
                console.error('Failed to fetch reward data:', err);
            }
        }
    }["useVariableRewards.useCallback[fetchRewards]"], [
        userId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVariableRewards.useEffect": ()=>{
            fetchRewards();
        }
    }["useVariableRewards.useEffect"], [
        fetchRewards
    ]);
    const dismissCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVariableRewards.useCallback[dismissCard]": async (type, itemIds = [])=>{
            setActiveCards({
                "useVariableRewards.useCallback[dismissCard]": (prev)=>prev.filter({
                        "useVariableRewards.useCallback[dismissCard]": (c_0)=>c_0.type !== type
                    }["useVariableRewards.useCallback[dismissCard]"])
            }["useVariableRewards.useCallback[dismissCard]"]);
            // Persist to localStorage
            const shownKey_0 = `rewards_shown_${new Date().toISOString().slice(0, 10)}`;
            const current = new Set(JSON.parse(localStorage.getItem(shownKey_0) || '[]'));
            current.add(type);
            localStorage.setItem(shownKey_0, JSON.stringify([
                ...current
            ]));
            // Notify backend
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$variable$2d$rewards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markRewardShown"])(type, itemIds);
            } catch  {
            // silent — non-critical
            }
        }
    }["useVariableRewards.useCallback[dismissCard]"], []);
    return {
        rewardData,
        activeCards,
        dismissCard
    };
}
_s(useVariableRewards, "zKspNAhF2ReZVWwC8u88vRofeZE=");
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
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$ProtectedRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/ProtectedRoute.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feed$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/feed/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feed$2f$Feed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/feed/Feed.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function Home() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "ba5daf6d09d6764b7ac8385c115d14f59cca05b9c146c715f9f7b2d281b0f269") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ba5daf6d09d6764b7ac8385c115d14f59cca05b9c146c715f9f7b2d281b0f269";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$ProtectedRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProtectedRoute"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gray-50 dark:bg-neutral-950",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feed$2f$Feed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Feed"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 16,
                    columnNumber: 87
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 16,
                columnNumber: 26
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 16,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e70d15ce._.js.map