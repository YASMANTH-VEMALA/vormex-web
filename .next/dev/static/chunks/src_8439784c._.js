(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/api/reels.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "audioApi",
    ()=>audioApi,
    "reelsApi",
    ()=>reelsApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/client.ts [app-client] (ecmascript)");
;
const reelsApi = {
    getFeed: (params)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/reels/feed', {
            params
        }),
    getFollowingFeed: (params)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/reels/feed/following', {
            params
        }),
    getTrending: (params)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/reels/trending', {
            params
        }),
    getReel: (reelId)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/reels/${reelId}`),
    getDrafts: (params)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/reels/drafts', {
            params
        }),
    getReelAudio: (reelId)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/reels/${reelId}/audio`),
    publishDraft: (reelId, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/reels/${reelId}/publish`, data || {}),
    getPreloadData: (reelId)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/reels/${reelId}/preload`),
    getUploadUrl: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/reels/upload-url'),
    createReel: (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/reels', data),
    onUploadComplete: (videoId, metadata)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/reels/upload-complete', {
            videoId,
            ...metadata
        }),
    updateReel: (reelId, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/reels/${reelId}`, data),
    deleteReel: (reelId)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/reels/${reelId}`),
    toggleLike: (reelId)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/reels/${reelId}/like`),
    toggleSave: (reelId)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/reels/${reelId}/save`),
    share: (reelId, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/reels/${reelId}/share`, data),
    shareInChat: (reelId, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/reels/${reelId}/share/chat`, data),
    trackView: (reelId, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/reels/${reelId}/view`, data),
    getComments: (reelId, params)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/reels/${reelId}/comments`, {
            params
        }),
    createComment: (reelId, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/reels/${reelId}/comments`, data),
    toggleCommentLike: (reelId, commentId)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/reels/${reelId}/comments/${commentId}/like`),
    deleteComment: (reelId, commentId)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/reels/${reelId}/comments/${commentId}`),
    heartComment: (reelId, commentId)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/reels/${reelId}/comments/${commentId}/heart`),
    votePoll: (reelId, optionId)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/reels/${reelId}/poll/vote`, {
            optionId
        }),
    answerQuiz: (reelId, optionId)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/reels/${reelId}/quiz/answer`, {
            optionId
        }),
    getByHashtag: (hashtag, params)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/reels/hashtag/${hashtag}`, {
            params
        }),
    getByAudio: (audioId, params)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/reels/audio/${audioId}`, {
            params
        }),
    getUserReels: (userId, params)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/reels/user/${userId}`, {
            params
        }),
    getUserLikedReels: (userId, params)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/reels/user/${userId}/liked`, {
            params
        }),
    getUserSavedReels: (userId, params)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/reels/user/${userId}/saved`, {
            params
        }),
    getResponses: (reelId, params)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/reels/${reelId}/responses`, {
            params
        }),
    getCreatorAnalytics: (params)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/reels/analytics/creator', {
            params
        }),
    getReelAnalytics: (reelId)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/reels/analytics/reel/${reelId}`),
    report: (reelId, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/reels/${reelId}/report`, data)
};
const audioApi = {
    getTrending: (params)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/audio/trending', {
            params
        }),
    search: (query, params)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/audio/search', {
            params: {
                q: query,
                ...params
            }
        }),
    getCategories: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/audio/categories'),
    getMoods: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/audio/moods'),
    getByGenre: (genre, params)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/audio/genre/${genre}`, {
            params
        }),
    getAudio: (audioId)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/audio/${audioId}`),
    getAudioReels: (audioId, params)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/audio/${audioId}/reels`, {
            params
        }),
    toggleSave: (audioId)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/audio/${audioId}/save`),
    getSaved: (params)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/audio/saved', {
            params
        })
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/reels/useReelsFeed.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAudioReels",
    ()=>useAudioReels,
    "useHashtagReels",
    ()=>useHashtagReels,
    "useReelsFeed",
    ()=>useReelsFeed,
    "useTrendingReels",
    ()=>useTrendingReels,
    "useUserReels",
    ()=>useUserReels
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/reels.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
'use client';
;
;
;
function useReelsFeed(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "971717ae59078fc1d52742c42d361b5a2035c2844f243cb48695801d403f3380") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "971717ae59078fc1d52742c42d361b5a2035c2844f243cb48695801d403f3380";
    }
    let t1;
    if ($[1] !== t0) {
        t1 = t0 === undefined ? {} : t0;
        $[1] = t0;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const { mode: t2, initialData, enabled: t3 } = t1;
    const mode = t2 === undefined ? "foryou" : t2;
    const enabled = t3 === undefined ? true : t3;
    let t4;
    let t5;
    if ($[3] !== mode) {
        t4 = [
            "reels-feed",
            mode
        ];
        t5 = async (t6)=>{
            const { pageParam } = t6;
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reelsApi"].getFeed({
                cursor: pageParam,
                limit: 10,
                mode
            });
            return response;
        };
        $[3] = mode;
        $[4] = t4;
        $[5] = t5;
    } else {
        t4 = $[4];
        t5 = $[5];
    }
    let t6;
    if ($[6] !== initialData) {
        t6 = initialData ? {
            pages: [
                {
                    reels: initialData,
                    nextCursor: null,
                    hasMore: false
                }
            ],
            pageParams: [
                undefined
            ]
        } : undefined;
        $[6] = initialData;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== enabled || $[9] !== t4 || $[10] !== t5 || $[11] !== t6) {
        t7 = {
            queryKey: t4,
            queryFn: t5,
            getNextPageParam: _temp,
            initialPageParam: undefined,
            staleTime: 300000,
            enabled,
            initialData: t6
        };
        $[8] = enabled;
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"])(t7);
    let t8;
    if ($[13] !== query.data?.pages) {
        t8 = query.data?.pages.flatMap(_useReelsFeedAnonymous) ?? [];
        $[13] = query.data?.pages;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    const reels = t8;
    let t9;
    if ($[15] !== query.error || $[16] !== query.fetchNextPage || $[17] !== query.hasNextPage || $[18] !== query.isError || $[19] !== query.isFetchingNextPage || $[20] !== query.isLoading || $[21] !== query.refetch || $[22] !== reels) {
        t9 = {
            reels,
            isLoading: query.isLoading,
            isError: query.isError,
            error: query.error,
            hasNextPage: query.hasNextPage,
            isFetchingNextPage: query.isFetchingNextPage,
            fetchNextPage: query.fetchNextPage,
            refetch: query.refetch
        };
        $[15] = query.error;
        $[16] = query.fetchNextPage;
        $[17] = query.hasNextPage;
        $[18] = query.isError;
        $[19] = query.isFetchingNextPage;
        $[20] = query.isLoading;
        $[21] = query.refetch;
        $[22] = reels;
        $[23] = t9;
    } else {
        t9 = $[23];
    }
    return t9;
}
_s(useReelsFeed, "QKY3LOkDwaDC54lsDx6NhhH/QCg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"]
    ];
});
function _useReelsFeedAnonymous(p) {
    return p.reels;
}
function _temp(lastPage) {
    return lastPage.nextCursor;
}
function useTrendingReels(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "971717ae59078fc1d52742c42d361b5a2035c2844f243cb48695801d403f3380") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "971717ae59078fc1d52742c42d361b5a2035c2844f243cb48695801d403f3380";
    }
    const hours = t0 === undefined ? 24 : t0;
    let t1;
    if ($[1] !== hours) {
        t1 = {
            queryKey: [
                "reels-trending",
                hours
            ],
            queryFn: async ()=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reelsApi"].getTrending({
                    hours,
                    limit: 20
                });
                return response;
            },
            getNextPageParam: _temp2,
            initialPageParam: undefined,
            staleTime: 300000
        };
        $[1] = hours;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"])(t1);
    let t2;
    if ($[3] !== query.data?.pages) {
        t2 = query.data?.pages.flatMap(_useTrendingReelsAnonymous) ?? [];
        $[3] = query.data?.pages;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const reels = t2;
    let t3;
    if ($[5] !== query.isError || $[6] !== query.isLoading || $[7] !== query.refetch || $[8] !== reels) {
        t3 = {
            reels,
            isLoading: query.isLoading,
            isError: query.isError,
            refetch: query.refetch
        };
        $[5] = query.isError;
        $[6] = query.isLoading;
        $[7] = query.refetch;
        $[8] = reels;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    return t3;
}
_s1(useTrendingReels, "QKY3LOkDwaDC54lsDx6NhhH/QCg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"]
    ];
});
function _useTrendingReelsAnonymous(p) {
    return p.reels;
}
function _temp2() {}
function useHashtagReels(hashtag) {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "971717ae59078fc1d52742c42d361b5a2035c2844f243cb48695801d403f3380") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "971717ae59078fc1d52742c42d361b5a2035c2844f243cb48695801d403f3380";
    }
    let t0;
    let t1;
    if ($[1] !== hashtag) {
        t0 = [
            "reels-hashtag",
            hashtag
        ];
        t1 = async (t2)=>{
            const { pageParam } = t2;
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reelsApi"].getByHashtag(hashtag, {
                cursor: pageParam,
                limit: 20
            });
            return response;
        };
        $[1] = hashtag;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    const t2 = !!hashtag;
    let t3;
    if ($[4] !== t0 || $[5] !== t1 || $[6] !== t2) {
        t3 = {
            queryKey: t0,
            queryFn: t1,
            getNextPageParam: _temp3,
            initialPageParam: undefined,
            staleTime: 300000,
            enabled: t2
        };
        $[4] = t0;
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"])(t3);
    let t4;
    if ($[8] !== query.data?.pages) {
        t4 = query.data?.pages.flatMap(_useHashtagReelsAnonymous) ?? [];
        $[8] = query.data?.pages;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const reels = t4;
    let t5;
    if ($[10] !== query.fetchNextPage || $[11] !== query.hasNextPage || $[12] !== query.isError || $[13] !== query.isFetchingNextPage || $[14] !== query.isLoading || $[15] !== query.refetch || $[16] !== reels) {
        t5 = {
            reels,
            isLoading: query.isLoading,
            isError: query.isError,
            hasNextPage: query.hasNextPage,
            isFetchingNextPage: query.isFetchingNextPage,
            fetchNextPage: query.fetchNextPage,
            refetch: query.refetch
        };
        $[10] = query.fetchNextPage;
        $[11] = query.hasNextPage;
        $[12] = query.isError;
        $[13] = query.isFetchingNextPage;
        $[14] = query.isLoading;
        $[15] = query.refetch;
        $[16] = reels;
        $[17] = t5;
    } else {
        t5 = $[17];
    }
    return t5;
}
_s2(useHashtagReels, "QKY3LOkDwaDC54lsDx6NhhH/QCg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"]
    ];
});
function _useHashtagReelsAnonymous(p) {
    return p.reels;
}
function _temp3(lastPage) {
    return lastPage.nextCursor;
}
function useAudioReels(audioId) {
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "971717ae59078fc1d52742c42d361b5a2035c2844f243cb48695801d403f3380") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "971717ae59078fc1d52742c42d361b5a2035c2844f243cb48695801d403f3380";
    }
    let t0;
    let t1;
    if ($[1] !== audioId) {
        t0 = [
            "reels-audio",
            audioId
        ];
        t1 = async (t2)=>{
            const { pageParam } = t2;
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reelsApi"].getByAudio(audioId, {
                cursor: pageParam,
                limit: 20
            });
            return response;
        };
        $[1] = audioId;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    const t2 = !!audioId;
    let t3;
    if ($[4] !== t0 || $[5] !== t1 || $[6] !== t2) {
        t3 = {
            queryKey: t0,
            queryFn: t1,
            getNextPageParam: _temp4,
            initialPageParam: undefined,
            staleTime: 300000,
            enabled: t2
        };
        $[4] = t0;
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"])(t3);
    let t4;
    if ($[8] !== query.data?.pages) {
        t4 = query.data?.pages.flatMap(_useAudioReelsAnonymous) ?? [];
        $[8] = query.data?.pages;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const reels = t4;
    let t5;
    if ($[10] !== query.fetchNextPage || $[11] !== query.hasNextPage || $[12] !== query.isError || $[13] !== query.isFetchingNextPage || $[14] !== query.isLoading || $[15] !== query.refetch || $[16] !== reels) {
        t5 = {
            reels,
            isLoading: query.isLoading,
            isError: query.isError,
            hasNextPage: query.hasNextPage,
            isFetchingNextPage: query.isFetchingNextPage,
            fetchNextPage: query.fetchNextPage,
            refetch: query.refetch
        };
        $[10] = query.fetchNextPage;
        $[11] = query.hasNextPage;
        $[12] = query.isError;
        $[13] = query.isFetchingNextPage;
        $[14] = query.isLoading;
        $[15] = query.refetch;
        $[16] = reels;
        $[17] = t5;
    } else {
        t5 = $[17];
    }
    return t5;
}
_s3(useAudioReels, "QKY3LOkDwaDC54lsDx6NhhH/QCg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"]
    ];
});
function _useAudioReelsAnonymous(p) {
    return p.reels;
}
function _temp4(lastPage) {
    return lastPage.nextCursor;
}
function useUserReels(userId) {
    _s4();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "971717ae59078fc1d52742c42d361b5a2035c2844f243cb48695801d403f3380") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "971717ae59078fc1d52742c42d361b5a2035c2844f243cb48695801d403f3380";
    }
    let t0;
    let t1;
    if ($[1] !== userId) {
        t0 = [
            "reels-user",
            userId
        ];
        t1 = async (t2)=>{
            const { pageParam } = t2;
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reelsApi"].getUserReels(userId, {
                cursor: pageParam,
                limit: 20
            });
            return response;
        };
        $[1] = userId;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    const t2 = !!userId;
    let t3;
    if ($[4] !== t0 || $[5] !== t1 || $[6] !== t2) {
        t3 = {
            queryKey: t0,
            queryFn: t1,
            getNextPageParam: _temp5,
            initialPageParam: undefined,
            staleTime: 300000,
            enabled: t2
        };
        $[4] = t0;
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"])(t3);
    let t4;
    if ($[8] !== query.data?.pages) {
        t4 = query.data?.pages.flatMap(_useUserReelsAnonymous) ?? [];
        $[8] = query.data?.pages;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const reels = t4;
    let t5;
    if ($[10] !== query.fetchNextPage || $[11] !== query.hasNextPage || $[12] !== query.isError || $[13] !== query.isFetchingNextPage || $[14] !== query.isLoading || $[15] !== query.refetch || $[16] !== reels) {
        t5 = {
            reels,
            isLoading: query.isLoading,
            isError: query.isError,
            hasNextPage: query.hasNextPage,
            isFetchingNextPage: query.isFetchingNextPage,
            fetchNextPage: query.fetchNextPage,
            refetch: query.refetch
        };
        $[10] = query.fetchNextPage;
        $[11] = query.hasNextPage;
        $[12] = query.isError;
        $[13] = query.isFetchingNextPage;
        $[14] = query.isLoading;
        $[15] = query.refetch;
        $[16] = reels;
        $[17] = t5;
    } else {
        t5 = $[17];
    }
    return t5;
}
_s4(useUserReels, "QKY3LOkDwaDC54lsDx6NhhH/QCg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"]
    ];
});
function _useUserReelsAnonymous(p) {
    return p.reels;
}
function _temp5(lastPage) {
    return lastPage.nextCursor;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/reels/useReelPlayer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReelPlayer",
    ()=>useReelPlayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hls.js/dist/hls.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function useReelPlayer(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "5c8bc6fec36fda64393b185a042c37e43f5605258b43c52d606a3ce9bab12acc") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5c8bc6fec36fda64393b185a042c37e43f5605258b43c52d606a3ce9bab12acc";
    }
    const { hlsUrl, mp4Url, autoPlay: t1, muted: t2, loop: t3 } = t0;
    const autoPlay = t1 === undefined ? false : t1;
    const muted = t2 === undefined ? true : t2;
    const loop = t3 === undefined ? true : t3;
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(muted);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t4;
    let t5;
    if ($[1] !== autoPlay || $[2] !== hlsUrl || $[3] !== loop || $[4] !== mp4Url) {
        t4 = ({
            "useReelPlayer[useEffect()]": ()=>{
                const video = videoRef.current;
                if (!video) {
                    return;
                }
                const initHls = {
                    "useReelPlayer[useEffect() > initHls]": ()=>{
                        if (hlsUrl && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isSupported()) {
                            const hls = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                                enableWorker: true,
                                lowLatencyMode: true,
                                backBufferLength: 90,
                                maxBufferLength: 30,
                                maxMaxBufferLength: 60,
                                startLevel: -1,
                                capLevelToPlayerSize: true
                            });
                            hls.loadSource(hlsUrl);
                            hls.attachMedia(video);
                            hls.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Events.MANIFEST_PARSED, {
                                "useReelPlayer[useEffect() > initHls > hls.on()]": ()=>{
                                    setIsLoaded(true);
                                    setError(null);
                                    if (autoPlay) {
                                        video.play().catch(_useReelPlayerUseEffectInitHlsHlsOnAnonymous);
                                    }
                                }
                            }["useReelPlayer[useEffect() > initHls > hls.on()]"]);
                            hls.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Events.ERROR, {
                                "useReelPlayer[useEffect() > initHls > hls.on()]": (_, data)=>{
                                    if (data.fatal) {
                                        console.error("HLS error:", data);
                                        setError(new Error("HLS playback failed"));
                                        video.src = mp4Url;
                                        video.load();
                                    }
                                }
                            }["useReelPlayer[useEffect() > initHls > hls.on()]"]);
                            hlsRef.current = hls;
                        } else {
                            if (hlsUrl && video.canPlayType("application/vnd.apple.mpegurl")) {
                                video.src = hlsUrl;
                            } else {
                                video.src = mp4Url;
                            }
                        }
                    }
                }["useReelPlayer[useEffect() > initHls]"];
                const handleLoadedMetadata = {
                    "useReelPlayer[useEffect() > handleLoadedMetadata]": ()=>{
                        setIsLoaded(true);
                        setDuration(video.duration);
                        if (autoPlay) {
                            video.play().catch(_useReelPlayerUseEffectHandleLoadedMetadataAnonymous);
                        }
                    }
                }["useReelPlayer[useEffect() > handleLoadedMetadata]"];
                const handleTimeUpdate = {
                    "useReelPlayer[useEffect() > handleTimeUpdate]": ()=>{
                        setCurrentTime(video.currentTime);
                        setProgress(video.duration > 0 ? video.currentTime / video.duration : 0);
                    }
                }["useReelPlayer[useEffect() > handleTimeUpdate]"];
                const handlePlay = {
                    "useReelPlayer[useEffect() > handlePlay]": ()=>setIsPlaying(true)
                }["useReelPlayer[useEffect() > handlePlay]"];
                const handlePause = {
                    "useReelPlayer[useEffect() > handlePause]": ()=>setIsPlaying(false)
                }["useReelPlayer[useEffect() > handlePause]"];
                const handleEnded = {
                    "useReelPlayer[useEffect() > handleEnded]": ()=>{
                        if (loop) {
                            video.currentTime = 0;
                            video.play().catch(_useReelPlayerUseEffectHandleEndedAnonymous);
                        }
                    }
                }["useReelPlayer[useEffect() > handleEnded]"];
                const handleError = {
                    "useReelPlayer[useEffect() > handleError]": ()=>{
                        setError(new Error("Video playback error"));
                    }
                }["useReelPlayer[useEffect() > handleError]"];
                video.addEventListener("loadedmetadata", handleLoadedMetadata);
                video.addEventListener("timeupdate", handleTimeUpdate);
                video.addEventListener("play", handlePlay);
                video.addEventListener("pause", handlePause);
                video.addEventListener("ended", handleEnded);
                video.addEventListener("error", handleError);
                initHls();
                return ()=>{
                    video.removeEventListener("loadedmetadata", handleLoadedMetadata);
                    video.removeEventListener("timeupdate", handleTimeUpdate);
                    video.removeEventListener("play", handlePlay);
                    video.removeEventListener("pause", handlePause);
                    video.removeEventListener("ended", handleEnded);
                    video.removeEventListener("error", handleError);
                    hlsRef.current?.destroy();
                    hlsRef.current = null;
                };
            }
        })["useReelPlayer[useEffect()]"];
        t5 = [
            hlsUrl,
            mp4Url,
            autoPlay,
            loop
        ];
        $[1] = autoPlay;
        $[2] = hlsUrl;
        $[3] = loop;
        $[4] = mp4Url;
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    let t7;
    if ($[7] !== isMuted) {
        t6 = ({
            "useReelPlayer[useEffect()]": ()=>{
                if (videoRef.current) {
                    videoRef.current.muted = isMuted;
                }
            }
        })["useReelPlayer[useEffect()]"];
        t7 = [
            isMuted
        ];
        $[7] = isMuted;
        $[8] = t6;
        $[9] = t7;
    } else {
        t6 = $[8];
        t7 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "useReelPlayer[play]": async ()=>{
                if (videoRef.current) {
                    await videoRef.current.play();
                }
            }
        })["useReelPlayer[play]"];
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    const play = t8;
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "useReelPlayer[pause]": ()=>{
                if (videoRef.current) {
                    videoRef.current.pause();
                }
            }
        })["useReelPlayer[pause]"];
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    const pause = t9;
    let t10;
    if ($[12] !== isPlaying) {
        t10 = ({
            "useReelPlayer[togglePlay]": ()=>{
                if (isPlaying) {
                    pause();
                } else {
                    play();
                }
            }
        })["useReelPlayer[togglePlay]"];
        $[12] = isPlaying;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    const togglePlay = t10;
    let t11;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "useReelPlayer[toggleMute]": ()=>{
                setIsMuted(_useReelPlayerToggleMuteSetIsMuted);
            }
        })["useReelPlayer[toggleMute]"];
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    const toggleMute = t11;
    let t12;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "useReelPlayer[seek]": (time)=>{
                if (videoRef.current) {
                    videoRef.current.currentTime = time;
                }
            }
        })["useReelPlayer[seek]"];
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    const seek = t12;
    let t13;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "useReelPlayer[setVolume]": (volume)=>{
                if (videoRef.current) {
                    videoRef.current.volume = Math.max(0, Math.min(1, volume));
                }
            }
        })["useReelPlayer[setVolume]"];
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    const setVolume = t13;
    let t14;
    if ($[17] !== currentTime || $[18] !== duration || $[19] !== error || $[20] !== isLoaded || $[21] !== isMuted || $[22] !== isPlaying || $[23] !== progress || $[24] !== togglePlay) {
        t14 = {
            videoRef: videoRef,
            isLoaded,
            isPlaying,
            isMuted,
            progress,
            duration,
            currentTime,
            error,
            play,
            pause,
            togglePlay,
            toggleMute,
            seek,
            setVolume
        };
        $[17] = currentTime;
        $[18] = duration;
        $[19] = error;
        $[20] = isLoaded;
        $[21] = isMuted;
        $[22] = isPlaying;
        $[23] = progress;
        $[24] = togglePlay;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    return t14;
}
_s(useReelPlayer, "NXsxuZV/1K7p2qcPEwyyfcItF5k=");
function _useReelPlayerToggleMuteSetIsMuted(prev) {
    return !prev;
}
function _useReelPlayerUseEffectHandleEndedAnonymous() {}
function _useReelPlayerUseEffectHandleLoadedMetadataAnonymous() {}
function _useReelPlayerUseEffectInitHlsHlsOnAnonymous() {}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/reels/useReelEngagement.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReelEngagement",
    ()=>useReelEngagement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/reels.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useReelEngagement(reel) {
    _s();
    const [isLiked, setIsLiked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(reel.isLiked);
    const [isSaved, setIsSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(reel.isSaved);
    const [likesCount, setLikesCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(reel.likesCount);
    const [savesCount, setSavesCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(reel.savesCount);
    const [isLiking, setIsLiking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSharing, setIsSharing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleLike = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useReelEngagement.useCallback[toggleLike]": async ()=>{
            if (isLiking) return;
            const prevLiked = isLiked;
            const prevCount = likesCount;
            setIsLiked(!prevLiked);
            setLikesCount(prevLiked ? prevCount - 1 : prevCount + 1);
            setIsLiking(true);
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reelsApi"].toggleLike(reel.id);
                setIsLiked(response.liked);
                setLikesCount(response.likesCount);
            } catch (error) {
                console.error('Failed to toggle like:', error);
                setIsLiked(prevLiked);
                setLikesCount(prevCount);
            } finally{
                setIsLiking(false);
            }
        }
    }["useReelEngagement.useCallback[toggleLike]"], [
        reel.id,
        isLiked,
        likesCount,
        isLiking
    ]);
    const toggleSave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useReelEngagement.useCallback[toggleSave]": async ()=>{
            if (isSaving) return;
            const prevSaved = isSaved;
            const prevCount_0 = savesCount;
            setIsSaved(!prevSaved);
            setSavesCount(prevSaved ? prevCount_0 - 1 : prevCount_0 + 1);
            setIsSaving(true);
            try {
                const response_0 = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reelsApi"].toggleSave(reel.id);
                setIsSaved(response_0.saved);
                setSavesCount(response_0.savesCount);
            } catch (error_0) {
                console.error('Failed to toggle save:', error_0);
                setIsSaved(prevSaved);
                setSavesCount(prevCount_0);
            } finally{
                setIsSaving(false);
            }
        }
    }["useReelEngagement.useCallback[toggleSave]"], [
        reel.id,
        isSaved,
        savesCount,
        isSaving
    ]);
    const share = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useReelEngagement.useCallback[share]": async (type = 'copy_link')=>{
            if (isSharing) return;
            setIsSharing(true);
            try {
                const url = `${window.location.origin}/reels/${reel.id}`;
                if (type === 'native' && navigator.share) {
                    await navigator.share({
                        title: reel.title || 'Check out this reel',
                        text: reel.caption || '',
                        url
                    });
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reelsApi"].share(reel.id, {
                        shareType: 'external'
                    });
                } else {
                    await navigator.clipboard.writeText(url);
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reelsApi"].share(reel.id, {
                        shareType: 'copy_link'
                    });
                }
            } catch (error_1) {
                if (error_1.name !== 'AbortError') {
                    console.error('Failed to share:', error_1);
                }
            } finally{
                setIsSharing(false);
            }
        }
    }["useReelEngagement.useCallback[share]"], [
        reel.id,
        reel.title,
        reel.caption,
        isSharing
    ]);
    return {
        isLiked,
        isSaved,
        likesCount,
        savesCount,
        toggleLike,
        toggleSave,
        share,
        isLiking,
        isSaving,
        isSharing
    };
}
_s(useReelEngagement, "5E8JjdoRbHYu3h1wkDmSI1y5c4M=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/reels/useReelPreload.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReelPreload",
    ()=>useReelPreload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/reels.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useReelPreload({ reels, activeIndex, preloadCount = 3 }) {
    _s();
    const preloadedUrls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const preloadedImages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const preloadHls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useReelPreload.useCallback[preloadHls]": async (url)=>{
            if (preloadedUrls.current.has(url)) return;
            try {
                await fetch(url, {
                    method: 'HEAD'
                });
                preloadedUrls.current.add(url);
            } catch (error) {
            // Ignore errors
            }
        }
    }["useReelPreload.useCallback[preloadHls]"], []);
    const preloadThumbnail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useReelPreload.useCallback[preloadThumbnail]": (url_0)=>{
            if (preloadedImages.current.has(url_0)) return;
            const img = new Image();
            img.src = url_0;
            img.onload = ({
                "useReelPreload.useCallback[preloadThumbnail]": ()=>{
                    preloadedImages.current.add(url_0);
                }
            })["useReelPreload.useCallback[preloadThumbnail]"];
        }
    }["useReelPreload.useCallback[preloadThumbnail]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useReelPreload.useEffect": ()=>{
            const reelsToPreload = reels.slice(activeIndex + 1, activeIndex + 1 + preloadCount);
            reelsToPreload.forEach({
                "useReelPreload.useEffect": (reel)=>{
                    if (reel.hlsUrl) {
                        preloadHls(reel.hlsUrl);
                    }
                    if (reel.thumbnailUrl) {
                        preloadThumbnail(reel.thumbnailUrl);
                    }
                }
            }["useReelPreload.useEffect"]);
        }
    }["useReelPreload.useEffect"], [
        activeIndex,
        reels,
        preloadCount,
        preloadHls,
        preloadThumbnail
    ]);
    const preloadReel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useReelPreload.useCallback[preloadReel]": async (reelId)=>{
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reelsApi"].getPreloadData(reelId);
                const preloadData = data;
                if (preloadData.hlsUrl) {
                    preloadHls(preloadData.hlsUrl);
                }
                if (preloadData.thumbnailUrl) {
                    preloadThumbnail(preloadData.thumbnailUrl);
                }
            } catch (error_0) {
            // Ignore errors
            }
        }
    }["useReelPreload.useCallback[preloadReel]"], [
        preloadHls,
        preloadThumbnail
    ]);
    const clearCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useReelPreload.useCallback[clearCache]": ()=>{
            preloadedUrls.current.clear();
            preloadedImages.current.clear();
        }
    }["useReelPreload.useCallback[clearCache]"], []);
    return {
        preloadReel,
        clearCache,
        preloadedCount: preloadedUrls.current.size
    };
}
_s(useReelPreload, "UII+xPWyz5rdu5ivVokBqnN5U9g=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/reels/useReelRealtime.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReelRealtime",
    ()=>useReelRealtime,
    "useReelsFeedRealtime",
    ()=>useReelsFeedRealtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/socket.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
function useReelRealtime(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "d29da5adc134233ffa75ac83b0d694c27518bfc592eb2858b0b2238a39931e91") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d29da5adc134233ffa75ac83b0d694c27518bfc592eb2858b0b2238a39931e91";
    }
    const { reelId, onEngagementUpdate, onNewComment, enabled: t1 } = t0;
    const enabled = t1 === undefined ? true : t1;
    let t2;
    if ($[1] !== onEngagementUpdate || $[2] !== onNewComment) {
        t2 = {
            onEngagementUpdate,
            onNewComment
        };
        $[1] = onEngagementUpdate;
        $[2] = onNewComment;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handlersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t2);
    let t3;
    let t4;
    if ($[4] !== onEngagementUpdate || $[5] !== onNewComment) {
        t3 = ({
            "useReelRealtime[useEffect()]": ()=>{
                handlersRef.current = {
                    onEngagementUpdate,
                    onNewComment
                };
            }
        })["useReelRealtime[useEffect()]"];
        t4 = [
            onEngagementUpdate,
            onNewComment
        ];
        $[4] = onEngagementUpdate;
        $[5] = onNewComment;
        $[6] = t3;
        $[7] = t4;
    } else {
        t3 = $[6];
        t4 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[8] !== enabled || $[9] !== reelId) {
        t5 = ({
            "useReelRealtime[useEffect()]": ()=>{
                if (!enabled || !reelId) {
                    return;
                }
                const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSocket"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeSocket"])();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinReelRoom"])(reelId);
                const handleEngagementUpdate = {
                    "useReelRealtime[useEffect() > handleEngagementUpdate]": (data)=>{
                        if (data.reelId !== reelId) {
                            return;
                        }
                        handlersRef.current.onEngagementUpdate?.(data);
                        if (data.type === "comment" && data.comment) {
                            handlersRef.current.onNewComment?.(data.comment);
                        }
                    }
                }["useReelRealtime[useEffect() > handleEngagementUpdate]"];
                socket?.on("reel:engagement_update", handleEngagementUpdate);
                return ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leaveReelRoom"])(reelId);
                    socket?.off("reel:engagement_update", handleEngagementUpdate);
                };
            }
        })["useReelRealtime[useEffect()]"];
        t6 = [
            reelId,
            enabled
        ];
        $[8] = enabled;
        $[9] = reelId;
        $[10] = t5;
        $[11] = t6;
    } else {
        t5 = $[10];
        t6 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
}
_s(useReelRealtime, "DfXc2Cl6tbom2MG/mEBxW3Q7kw0=");
function useReelsFeedRealtime(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "d29da5adc134233ffa75ac83b0d694c27518bfc592eb2858b0b2238a39931e91") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d29da5adc134233ffa75ac83b0d694c27518bfc592eb2858b0b2238a39931e91";
    }
    const { reelIds, onReelUpdate, enabled: t1 } = t0;
    const enabled = t1 === undefined ? true : t1;
    let t2;
    if ($[1] !== onReelUpdate) {
        t2 = {
            onReelUpdate
        };
        $[1] = onReelUpdate;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const handlersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t2);
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = new Set();
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const joinedRoomsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t3);
    let t4;
    let t5;
    if ($[4] !== onReelUpdate) {
        t4 = ({
            "useReelsFeedRealtime[useEffect()]": ()=>{
                handlersRef.current = {
                    onReelUpdate
                };
            }
        })["useReelsFeedRealtime[useEffect()]"];
        t5 = [
            onReelUpdate
        ];
        $[4] = onReelUpdate;
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    let t7;
    if ($[7] !== enabled || $[8] !== reelIds) {
        t6 = ({
            "useReelsFeedRealtime[useEffect()]": ()=>{
                if (!enabled || reelIds.length === 0) {
                    return;
                }
                const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSocket"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeSocket"])();
                reelIds.forEach({
                    "useReelsFeedRealtime[useEffect() > reelIds.forEach()]": (reelId)=>{
                        if (!joinedRoomsRef.current.has(reelId)) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinReelRoom"])(reelId);
                            joinedRoomsRef.current.add(reelId);
                        }
                    }
                }["useReelsFeedRealtime[useEffect() > reelIds.forEach()]"]);
                joinedRoomsRef.current.forEach({
                    "useReelsFeedRealtime[useEffect() > joinedRoomsRef.current.forEach()]": (reelId_0)=>{
                        if (!reelIds.includes(reelId_0)) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leaveReelRoom"])(reelId_0);
                            joinedRoomsRef.current.delete(reelId_0);
                        }
                    }
                }["useReelsFeedRealtime[useEffect() > joinedRoomsRef.current.forEach()]"]);
                const handleEngagementUpdate = {
                    "useReelsFeedRealtime[useEffect() > handleEngagementUpdate]": (data)=>{
                        if (!reelIds.includes(data.reelId)) {
                            return;
                        }
                        const updates = {};
                        if (data.type === "like" && data.likesCount !== undefined) {
                            updates.likesCount = data.likesCount;
                        }
                        if (data.type === "comment" && data.commentsCount !== undefined) {
                            updates.commentsCount = data.commentsCount;
                        }
                        if (data.type === "share" && data.sharesCount !== undefined) {
                            updates.sharesCount = data.sharesCount;
                        }
                        if (Object.keys(updates).length > 0) {
                            handlersRef.current.onReelUpdate?.(data.reelId, updates);
                        }
                    }
                }["useReelsFeedRealtime[useEffect() > handleEngagementUpdate]"];
                socket?.on("reel:engagement_update", handleEngagementUpdate);
                return ()=>{
                    joinedRoomsRef.current.forEach(_useReelsFeedRealtimeUseEffectAnonymousJoinedRoomsRefCurrentForEach);
                    joinedRoomsRef.current.clear();
                    socket?.off("reel:engagement_update", handleEngagementUpdate);
                };
            }
        })["useReelsFeedRealtime[useEffect()]"];
        t7 = [
            reelIds,
            enabled
        ];
        $[7] = enabled;
        $[8] = reelIds;
        $[9] = t6;
        $[10] = t7;
    } else {
        t6 = $[9];
        t7 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
}
_s1(useReelsFeedRealtime, "gLlReiPnOho3BTYytuC5g+MtVhY=");
function _useReelsFeedRealtimeUseEffectAnonymousJoinedRoomsRefCurrentForEach(reelId_1) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leaveReelRoom"])(reelId_1);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/reels/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$reels$2f$useReelsFeed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/reels/useReelsFeed.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$reels$2f$useReelPlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/reels/useReelPlayer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$reels$2f$useReelEngagement$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/reels/useReelEngagement.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$reels$2f$useReelPreload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/reels/useReelPreload.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$reels$2f$useReelRealtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/reels/useReelRealtime.ts [app-client] (ecmascript)");
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/reels/ReelPlayer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReelPlayer",
    ()=>ReelPlayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hls.js/dist/hls.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-x.js [app-client] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ReelPlayer(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(57);
    if ($[0] !== "e705543e29a22bcc87483d9c4ebf25dac1945b3e0ac392ba6abff26cbfc2f6d0") {
        for(let $i = 0; $i < 57; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e705543e29a22bcc87483d9c4ebf25dac1945b3e0ac392ba6abff26cbfc2f6d0";
    }
    const { hlsUrl, mp4Url, thumbnailUrl, isActive, isMuted, onProgress, onComplete, onTap, onDoubleTap, onMuteToggle } = t0;
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showControls, setShowControls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastTap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const watchTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const controlsTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[1] !== hlsUrl || $[2] !== isActive || $[3] !== mp4Url) {
        t1 = ({
            "ReelPlayer[useEffect()]": ()=>{
                const video = videoRef.current;
                if (!video) {
                    return;
                }
                const initHls = {
                    "ReelPlayer[useEffect() > initHls]": ()=>{
                        if (hlsUrl && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isSupported()) {
                            const hls = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                                enableWorker: true,
                                lowLatencyMode: true,
                                backBufferLength: 90,
                                maxBufferLength: 30,
                                maxMaxBufferLength: 60,
                                startLevel: -1,
                                capLevelToPlayerSize: true
                            });
                            hls.loadSource(hlsUrl);
                            hls.attachMedia(video);
                            hls.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Events.MANIFEST_PARSED, {
                                "ReelPlayer[useEffect() > initHls > hls.on()]": ()=>{
                                    setIsLoaded(true);
                                    if (isActive) {
                                        video.play().catch(_ReelPlayerUseEffectInitHlsHlsOnAnonymous);
                                    }
                                }
                            }["ReelPlayer[useEffect() > initHls > hls.on()]"]);
                            hls.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Events.ERROR, {
                                "ReelPlayer[useEffect() > initHls > hls.on()]": (_, data)=>{
                                    if (data.fatal) {
                                        console.error("HLS error:", data);
                                        setError(true);
                                        video.src = mp4Url;
                                        video.load();
                                    }
                                }
                            }["ReelPlayer[useEffect() > initHls > hls.on()]"]);
                            hlsRef.current = hls;
                        } else {
                            if (hlsUrl && video.canPlayType("application/vnd.apple.mpegurl")) {
                                video.src = hlsUrl;
                                video.addEventListener("loadedmetadata", {
                                    "ReelPlayer[useEffect() > initHls > video.addEventListener()]": ()=>{
                                        setIsLoaded(true);
                                        if (isActive) {
                                            video.play().catch(_ReelPlayerUseEffectInitHlsVideoAddEventListenerAnonymous);
                                        }
                                    }
                                }["ReelPlayer[useEffect() > initHls > video.addEventListener()]"]);
                            } else {
                                video.src = mp4Url;
                                video.addEventListener("loadedmetadata", {
                                    "ReelPlayer[useEffect() > initHls > video.addEventListener()]": ()=>{
                                        setIsLoaded(true);
                                        if (isActive) {
                                            video.play().catch(_ReelPlayerUseEffectInitHlsVideoAddEventListenerAnonymous2);
                                        }
                                    }
                                }["ReelPlayer[useEffect() > initHls > video.addEventListener()]"]);
                            }
                        }
                    }
                }["ReelPlayer[useEffect() > initHls]"];
                initHls();
                return ()=>{
                    hlsRef.current?.destroy();
                    hlsRef.current = null;
                };
            }
        })["ReelPlayer[useEffect()]"];
        $[1] = hlsUrl;
        $[2] = isActive;
        $[3] = mp4Url;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== hlsUrl || $[6] !== mp4Url) {
        t2 = [
            hlsUrl,
            mp4Url
        ];
        $[5] = hlsUrl;
        $[6] = mp4Url;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[8] !== isActive || $[9] !== isLoaded) {
        t3 = ({
            "ReelPlayer[useEffect()]": ()=>{
                const video_0 = videoRef.current;
                if (!video_0 || !isLoaded) {
                    return;
                }
                if (isActive) {
                    video_0.play().then({
                        "ReelPlayer[useEffect() > (anonymous)()]": ()=>setIsPlaying(true)
                    }["ReelPlayer[useEffect() > (anonymous)()]"]).catch(_ReelPlayerUseEffectAnonymous);
                } else {
                    video_0.pause();
                    video_0.currentTime = 0;
                    setIsPlaying(false);
                }
            }
        })["ReelPlayer[useEffect()]"];
        t4 = [
            isActive,
            isLoaded
        ];
        $[8] = isActive;
        $[9] = isLoaded;
        $[10] = t3;
        $[11] = t4;
    } else {
        t3 = $[10];
        t4 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[12] !== isMuted) {
        t5 = ({
            "ReelPlayer[useEffect()]": ()=>{
                if (videoRef.current) {
                    videoRef.current.muted = isMuted;
                }
            }
        })["ReelPlayer[useEffect()]"];
        t6 = [
            isMuted
        ];
        $[12] = isMuted;
        $[13] = t5;
        $[14] = t6;
    } else {
        t5 = $[13];
        t6 = $[14];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    let t8;
    if ($[15] !== onComplete || $[16] !== onProgress) {
        t7 = ({
            "ReelPlayer[useEffect()]": ()=>{
                const video_1 = videoRef.current;
                if (!video_1) {
                    return;
                }
                const handleTimeUpdate = {
                    "ReelPlayer[useEffect() > handleTimeUpdate]": ()=>{
                        const currentProgress = video_1.duration > 0 ? video_1.currentTime / video_1.duration : 0;
                        watchTimeRef.current = video_1.currentTime * 1000;
                        setProgress(currentProgress);
                        onProgress?.(currentProgress, watchTimeRef.current);
                    }
                }["ReelPlayer[useEffect() > handleTimeUpdate]"];
                const handleEnded = {
                    "ReelPlayer[useEffect() > handleEnded]": ()=>{
                        onComplete?.();
                        video_1.currentTime = 0;
                        video_1.play().catch(_ReelPlayerUseEffectHandleEndedAnonymous);
                    }
                }["ReelPlayer[useEffect() > handleEnded]"];
                const handlePlay = {
                    "ReelPlayer[useEffect() > handlePlay]": ()=>setIsPlaying(true)
                }["ReelPlayer[useEffect() > handlePlay]"];
                const handlePause = {
                    "ReelPlayer[useEffect() > handlePause]": ()=>setIsPlaying(false)
                }["ReelPlayer[useEffect() > handlePause]"];
                video_1.addEventListener("timeupdate", handleTimeUpdate);
                video_1.addEventListener("ended", handleEnded);
                video_1.addEventListener("play", handlePlay);
                video_1.addEventListener("pause", handlePause);
                return ()=>{
                    video_1.removeEventListener("timeupdate", handleTimeUpdate);
                    video_1.removeEventListener("ended", handleEnded);
                    video_1.removeEventListener("play", handlePlay);
                    video_1.removeEventListener("pause", handlePause);
                };
            }
        })["ReelPlayer[useEffect()]"];
        t8 = [
            onProgress,
            onComplete
        ];
        $[15] = onComplete;
        $[16] = onProgress;
        $[17] = t7;
        $[18] = t8;
    } else {
        t7 = $[17];
        t8 = $[18];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t9;
    if ($[19] !== onDoubleTap || $[20] !== onTap) {
        t9 = ({
            "ReelPlayer[handleTap]": (e)=>{
                e.stopPropagation();
                const now = Date.now();
                if (now - lastTap.current < 300) {
                    onDoubleTap?.();
                    lastTap.current = 0;
                } else {
                    lastTap.current = now;
                    setTimeout({
                        "ReelPlayer[handleTap > setTimeout()]": ()=>{
                            if (lastTap.current !== 0 && Date.now() - lastTap.current >= 300) {
                                onTap?.();
                                lastTap.current = 0;
                            }
                        }
                    }["ReelPlayer[handleTap > setTimeout()]"], 300);
                }
                setShowControls(true);
                if (controlsTimeoutRef.current) {
                    clearTimeout(controlsTimeoutRef.current);
                }
                controlsTimeoutRef.current = setTimeout({
                    "ReelPlayer[handleTap > setTimeout()]": ()=>{
                        setShowControls(false);
                    }
                }["ReelPlayer[handleTap > setTimeout()]"], 2000);
            }
        })["ReelPlayer[handleTap]"];
        $[19] = onDoubleTap;
        $[20] = onTap;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    const handleTap = t9;
    let t10;
    if ($[22] !== isPlaying) {
        t10 = ({
            "ReelPlayer[togglePlayPause]": (e_0)=>{
                e_0.stopPropagation();
                const video_2 = videoRef.current;
                if (!video_2) {
                    return;
                }
                if (isPlaying) {
                    video_2.pause();
                } else {
                    video_2.play().catch(_ReelPlayerTogglePlayPauseAnonymous);
                }
            }
        })["ReelPlayer[togglePlayPause]"];
        $[22] = isPlaying;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    const togglePlayPause = t10;
    let t11;
    if ($[24] !== onMuteToggle) {
        t11 = ({
            "ReelPlayer[handleMuteClick]": (e_1)=>{
                e_1.stopPropagation();
                onMuteToggle?.();
            }
        })["ReelPlayer[handleMuteClick]"];
        $[24] = onMuteToggle;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    const handleMuteClick = t11;
    let t12;
    if ($[26] !== isLoaded || $[27] !== thumbnailUrl) {
        t12 = !isLoaded && thumbnailUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: thumbnailUrl,
            alt: "",
            className: "absolute inset-0 w-full h-full object-contain"
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelPlayer.tsx",
            lineNumber: 316,
            columnNumber: 40
        }, this);
        $[26] = isLoaded;
        $[27] = thumbnailUrl;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== isLoaded) {
        t13 = !isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 flex items-center justify-center bg-black/50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "w-12 h-12 text-white animate-spin"
            }, void 0, false, {
                fileName: "[project]/src/components/reels/ReelPlayer.tsx",
                lineNumber: 325,
                columnNumber: 103
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelPlayer.tsx",
            lineNumber: 325,
            columnNumber: 24
        }, this);
        $[29] = isLoaded;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    const t14 = thumbnailUrl || undefined;
    let t15;
    if ($[31] !== isMuted || $[32] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
            ref: videoRef,
            className: "w-full h-full object-contain",
            playsInline: true,
            loop: true,
            muted: isMuted,
            poster: t14,
            preload: "metadata"
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelPlayer.tsx",
            lineNumber: 334,
            columnNumber: 11
        }, this);
        $[31] = isMuted;
        $[32] = t14;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    const t16 = `${progress * 100}%`;
    let t17;
    if ($[34] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 left-0 right-0 h-1 bg-white/20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full bg-white transition-all duration-100",
                style: {
                    width: t16
                }
            }, void 0, false, {
                fileName: "[project]/src/components/reels/ReelPlayer.tsx",
                lineNumber: 344,
                columnNumber: 74
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelPlayer.tsx",
            lineNumber: 344,
            columnNumber: 11
        }, this);
        $[34] = t16;
        $[35] = t17;
    } else {
        t17 = $[35];
    }
    let t18;
    if ($[36] !== isLoaded || $[37] !== isPlaying || $[38] !== showControls || $[39] !== togglePlayPause) {
        t18 = showControls && isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 flex items-center justify-center pointer-events-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: togglePlayPause,
                className: "w-16 h-16 rounded-full bg-black/50 flex items-center justify-center pointer-events-auto transition-opacity",
                children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                    className: "w-8 h-8 text-white",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/ReelPlayer.tsx",
                    lineNumber: 354,
                    columnNumber: 292
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                    className: "w-8 h-8 text-white ml-1",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/ReelPlayer.tsx",
                    lineNumber: 354,
                    columnNumber: 348
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/reels/ReelPlayer.tsx",
                lineNumber: 354,
                columnNumber: 126
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelPlayer.tsx",
            lineNumber: 354,
            columnNumber: 39
        }, this);
        $[36] = isLoaded;
        $[37] = isPlaying;
        $[38] = showControls;
        $[39] = togglePlayPause;
        $[40] = t18;
    } else {
        t18 = $[40];
    }
    let t19;
    if ($[41] !== isMuted) {
        t19 = isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelPlayer.tsx",
            lineNumber: 365,
            columnNumber: 21
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelPlayer.tsx",
            lineNumber: 365,
            columnNumber: 66
        }, this);
        $[41] = isMuted;
        $[42] = t19;
    } else {
        t19 = $[42];
    }
    let t20;
    if ($[43] !== handleMuteClick || $[44] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleMuteClick,
            className: "absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center",
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelPlayer.tsx",
            lineNumber: 373,
            columnNumber: 11
        }, this);
        $[43] = handleMuteClick;
        $[44] = t19;
        $[45] = t20;
    } else {
        t20 = $[45];
    }
    let t21;
    if ($[46] !== error) {
        t21 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-20 left-4 right-4 text-center text-white/70 text-sm",
            children: "Video playback error. Using fallback quality."
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelPlayer.tsx",
            lineNumber: 382,
            columnNumber: 20
        }, this);
        $[46] = error;
        $[47] = t21;
    } else {
        t21 = $[47];
    }
    let t22;
    if ($[48] !== handleTap || $[49] !== t12 || $[50] !== t13 || $[51] !== t15 || $[52] !== t17 || $[53] !== t18 || $[54] !== t20 || $[55] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 w-full h-full bg-black overflow-hidden flex items-center justify-center",
            onClick: handleTap,
            children: [
                t12,
                t13,
                t15,
                t17,
                t18,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/reels/ReelPlayer.tsx",
            lineNumber: 390,
            columnNumber: 11
        }, this);
        $[48] = handleTap;
        $[49] = t12;
        $[50] = t13;
        $[51] = t15;
        $[52] = t17;
        $[53] = t18;
        $[54] = t20;
        $[55] = t21;
        $[56] = t22;
    } else {
        t22 = $[56];
    }
    return t22;
}
_s(ReelPlayer, "b6DsExB4wTij+Wn3NPWj9zJwTq0=");
_c = ReelPlayer;
function _ReelPlayerTogglePlayPauseAnonymous() {}
function _ReelPlayerUseEffectHandleEndedAnonymous() {}
function _ReelPlayerUseEffectAnonymous() {}
function _ReelPlayerUseEffectInitHlsVideoAddEventListenerAnonymous2() {}
function _ReelPlayerUseEffectInitHlsVideoAddEventListenerAnonymous() {}
function _ReelPlayerUseEffectInitHlsHlsOnAnonymous() {}
var _c;
__turbopack_context__.k.register(_c, "ReelPlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/reels/ReelActions.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReelActions",
    ()=>ReelActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music-2.js [app-client] (ecmascript) <export default as Music2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scissors.js [app-client] (ecmascript) <export default as Scissors>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/reels.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ReelActions({ reel, onCommentClick, onShareClick, onLikeUpdate, onSaveUpdate }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isLiked, setIsLiked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(reel.isLiked);
    const [likesCount, setLikesCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(reel.likesCount);
    const [isSaved, setIsSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(reel.isSaved);
    const [savesCount, setSavesCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(reel.savesCount);
    const [isLikeAnimating, setIsLikeAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showMoreMenu, setShowMoreMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReelActions.useEffect": ()=>{
            const handleClickOutside = {
                "ReelActions.useEffect.handleClickOutside": (e)=>{
                    if (menuRef.current && !menuRef.current.contains(e.target)) {
                        setShowMoreMenu(false);
                    }
                }
            }["ReelActions.useEffect.handleClickOutside"];
            document.addEventListener('click', handleClickOutside);
            return ({
                "ReelActions.useEffect": ()=>document.removeEventListener('click', handleClickOutside)
            })["ReelActions.useEffect"];
        }
    }["ReelActions.useEffect"], []);
    const handleLike = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReelActions.useCallback[handleLike]": async ()=>{
            const newLiked = !isLiked;
            const newCount = newLiked ? likesCount + 1 : likesCount - 1;
            setIsLiked(newLiked);
            setLikesCount(newCount);
            if (newLiked) {
                setIsLikeAnimating(true);
                setTimeout({
                    "ReelActions.useCallback[handleLike]": ()=>setIsLikeAnimating(false)
                }["ReelActions.useCallback[handleLike]"], 400);
            }
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reelsApi"].toggleLike(reel.id);
                setIsLiked(response.liked);
                setLikesCount(response.likesCount);
                onLikeUpdate?.(response.liked, response.likesCount);
            } catch (error) {
                setIsLiked(!newLiked);
                setLikesCount(likesCount);
            }
        }
    }["ReelActions.useCallback[handleLike]"], [
        isLiked,
        likesCount,
        reel.id,
        onLikeUpdate
    ]);
    const handleSave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReelActions.useCallback[handleSave]": async ()=>{
            const newSaved = !isSaved;
            const newCount_0 = newSaved ? savesCount + 1 : savesCount - 1;
            setIsSaved(newSaved);
            setSavesCount(newCount_0);
            try {
                const response_0 = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reelsApi"].toggleSave(reel.id);
                setIsSaved(response_0.saved);
                setSavesCount(response_0.savesCount);
                onSaveUpdate?.(response_0.saved, response_0.savesCount);
            } catch (error_0) {
                setIsSaved(!newSaved);
                setSavesCount(savesCount);
            }
        }
    }["ReelActions.useCallback[handleSave]"], [
        isSaved,
        savesCount,
        reel.id,
        onSaveUpdate
    ]);
    const formatCount = (count)=>{
        if (count >= 1000000) {
            return `${(count / 1000000).toFixed(1)}M`;
        }
        if (count >= 1000) {
            return `${(count / 1000).toFixed(1)}K`;
        }
        return count.toString();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleLike,
                className: "flex flex-col items-center gap-1 group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center transition-transform", isLikeAnimating && "animate-bounce-once"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-7 h-7 transition-all", isLiked ? "text-red-500 fill-red-500 scale-110" : "text-white")
                        }, void 0, false, {
                            fileName: "[project]/src/components/reels/ReelActions.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelActions.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white text-xs font-medium",
                        children: formatCount(likesCount)
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelActions.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reels/ReelActions.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onCommentClick,
                className: "flex flex-col items-center gap-1 group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center group-active:scale-95 transition-transform",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                            className: "w-7 h-7 text-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/reels/ReelActions.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelActions.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white text-xs font-medium",
                        children: formatCount(reel.commentsCount)
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelActions.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reels/ReelActions.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onShareClick,
                className: "flex flex-col items-center gap-1 group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center group-active:scale-95 transition-transform",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                            className: "w-7 h-7 text-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/reels/ReelActions.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelActions.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white text-xs font-medium",
                        children: formatCount(reel.sharesCount)
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelActions.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reels/ReelActions.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleSave,
                className: "flex flex-col items-center gap-1 group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center group-active:scale-95 transition-transform",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-7 h-7 transition-all", isSaved ? "text-yellow-400 fill-yellow-400" : "text-white")
                        }, void 0, false, {
                            fileName: "[project]/src/components/reels/ReelActions.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelActions.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white text-xs font-medium",
                        children: formatCount(savesCount)
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelActions.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reels/ReelActions.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            reel.audio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "w-10 h-10 rounded-full overflow-hidden border-2 border-white animate-spin-slow",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: reel.audio.albumArt || '/audio-placeholder.png',
                    alt: reel.audio.title,
                    className: "w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/ReelActions.tsx",
                    lineNumber: 126,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/reels/ReelActions.tsx",
                lineNumber: 125,
                columnNumber: 22
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                ref: menuRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowMoreMenu(!showMoreMenu),
                        className: "flex flex-col items-center gap-1 group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center group-active:scale-95 transition-transform",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                className: "w-5 h-5 text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelActions.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/reels/ReelActions.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelActions.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    showMoreMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-full right-0 mb-2 w-48 bg-neutral-900 rounded-xl shadow-xl border border-white/10 py-2 z-50",
                        children: [
                            reel.allowDuets && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    router.push(`/reels/create?duet=${reel.id}`);
                                    setShowMoreMenu(false);
                                },
                                className: "w-full flex items-center gap-2 px-4 py-2 hover:bg-white/10 text-left text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelActions.tsx",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, this),
                                    "Duet"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelActions.tsx",
                                lineNumber: 137,
                                columnNumber: 33
                            }, this),
                            reel.allowStitch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    router.push(`/reels/create?stitch=${reel.id}`);
                                    setShowMoreMenu(false);
                                },
                                className: "w-full flex items-center gap-2 px-4 py-2 hover:bg-white/10 text-left text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelActions.tsx",
                                        lineNumber: 148,
                                        columnNumber: 17
                                    }, this),
                                    "Stitch"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelActions.tsx",
                                lineNumber: 144,
                                columnNumber: 34
                            }, this),
                            reel.audio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    router.push(`/reels/create?audio=${reel.audio.id}`);
                                    setShowMoreMenu(false);
                                },
                                className: "w-full flex items-center gap-2 px-4 py-2 hover:bg-white/10 text-left text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__["Music2"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelActions.tsx",
                                        lineNumber: 155,
                                        columnNumber: 17
                                    }, this),
                                    "Use this audio"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelActions.tsx",
                                lineNumber: 151,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reels/ReelActions.tsx",
                        lineNumber: 136,
                        columnNumber: 26
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reels/ReelActions.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/reels/ReelActions.tsx",
        lineNumber: 88,
        columnNumber: 10
    }, this);
}
_s(ReelActions, "eYSWbzY1KyGFBbzW8bDACeq/xYc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ReelActions;
var _c;
__turbopack_context__.k.register(_c, "ReelActions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/reels/ReelInfo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReelInfo",
    ()=>ReelInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ReelInfo(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(56);
    if ($[0] !== "b6ecf07aba0861086c13bd26faea6ab37fa6fb1de63f7848d3be5530c1042175") {
        for(let $i = 0; $i < 56; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b6ecf07aba0861086c13bd26faea6ab37fa6fb1de63f7848d3be5530c1042175";
    }
    const { reel, onAudioClick, onHashtagClick } = t0;
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const shouldTruncate = reel.caption && reel.caption.length > 100;
    let t1;
    if ($[1] !== isExpanded || $[2] !== reel.caption || $[3] !== shouldTruncate) {
        t1 = shouldTruncate && !isExpanded ? reel.caption?.slice(0, 100) + "..." : reel.caption;
        $[1] = isExpanded;
        $[2] = reel.caption;
        $[3] = shouldTruncate;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const displayCaption = t1;
    let t2;
    if ($[5] !== onHashtagClick) {
        const renderHashtags = {
            "ReelInfo[renderHashtags]": (text)=>{
                if (!text) {
                    return null;
                }
                const parts = text.split(/(#\w+)/g);
                return parts.map({
                    "ReelInfo[renderHashtags > parts.map()]": (part, index)=>{
                        if (part.startsWith("#")) {
                            const tag = part.slice(1);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "ReelInfo[renderHashtags > parts.map() > <button>.onClick]": (e)=>{
                                        e.stopPropagation();
                                        onHashtagClick?.(tag);
                                    }
                                }["ReelInfo[renderHashtags > parts.map() > <button>.onClick]"],
                                className: "text-white font-semibold hover:underline",
                                children: part
                            }, index, false, {
                                fileName: "[project]/src/components/reels/ReelInfo.tsx",
                                lineNumber: 51,
                                columnNumber: 22
                            }, this);
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: part
                        }, index, false, {
                            fileName: "[project]/src/components/reels/ReelInfo.tsx",
                            lineNumber: 58,
                            columnNumber: 20
                        }, this);
                    }
                }["ReelInfo[renderHashtags > parts.map()]"]);
            }
        }["ReelInfo[renderHashtags]"];
        t2 = ({
            "ReelInfo[renderMentions]": (text_0)=>{
                if (!text_0) {
                    return null;
                }
                const parts_0 = text_0.split(/(@\w+)/g);
                return parts_0.map({
                    "ReelInfo[renderMentions > parts_0.map()]": (part_0, index_0)=>{
                        if (part_0.startsWith("@")) {
                            const username = part_0.slice(1);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/profile/${username}`,
                                onClick: _ReelInfoRenderMentionsParts_0MapLinkOnClick,
                                className: "text-blue-400 font-semibold hover:underline",
                                children: part_0
                            }, index_0, false, {
                                fileName: "[project]/src/components/reels/ReelInfo.tsx",
                                lineNumber: 73,
                                columnNumber: 22
                            }, this);
                        }
                        return renderHashtags(part_0);
                    }
                }["ReelInfo[renderMentions > parts_0.map()]"]);
            }
        })["ReelInfo[renderMentions]"];
        $[5] = onHashtagClick;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const renderMentions = t2;
    const t3 = `/profile/${reel.author.id}`;
    const t4 = reel.author.profileImage || "/default-avatar.png";
    let t5;
    if ($[7] !== reel.author.name || $[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 rounded-full overflow-hidden border-2 border-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: t4,
                alt: reel.author.name,
                className: "w-full h-full object-cover"
            }, void 0, false, {
                fileName: "[project]/src/components/reels/ReelInfo.tsx",
                lineNumber: 90,
                columnNumber: 88
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelInfo.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[7] = reel.author.name;
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== reel.author.username) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-white font-semibold text-sm",
            children: reel.author.username
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelInfo.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[10] = reel.author.username;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== reel.author.headline) {
        t7 = reel.author.headline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-white/70 text-xs line-clamp-1",
            children: reel.author.headline
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelInfo.tsx",
            lineNumber: 107,
            columnNumber: 34
        }, this);
        $[12] = reel.author.headline;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== t6 || $[15] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/reels/ReelInfo.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[14] = t6;
        $[15] = t7;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: _ReelInfoButtonOnClick,
            className: "ml-2 px-4 py-1 bg-white text-black text-xs font-semibold rounded-full hover:bg-white/90 transition-colors",
            children: "Follow"
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelInfo.tsx",
            lineNumber: 124,
            columnNumber: 10
        }, this);
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== t3 || $[19] !== t5 || $[20] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t3,
            onClick: _ReelInfoLinkOnClick,
            className: "flex items-center gap-3",
            children: [
                t5,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/reels/ReelInfo.tsx",
            lineNumber: 131,
            columnNumber: 11
        }, this);
        $[18] = t3;
        $[19] = t5;
        $[20] = t8;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== reel.title) {
        t11 = reel.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-white font-semibold text-base",
            children: reel.title
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelInfo.tsx",
            lineNumber: 141,
            columnNumber: 25
        }, this);
        $[22] = reel.title;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== displayCaption || $[25] !== isExpanded || $[26] !== reel.caption || $[27] !== renderMentions || $[28] !== shouldTruncate) {
        t12 = reel.caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white text-sm leading-relaxed",
            children: [
                renderMentions(displayCaption),
                shouldTruncate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "ReelInfo[<button>.onClick]": (e_3)=>{
                            e_3.stopPropagation();
                            setIsExpanded(!isExpanded);
                        }
                    }["ReelInfo[<button>.onClick]"],
                    className: "ml-1 text-white/70 hover:text-white inline-flex items-center gap-0.5",
                    children: isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "less ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelInfo.tsx",
                                lineNumber: 154,
                                columnNumber: 142
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "more ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelInfo.tsx",
                                lineNumber: 154,
                                columnNumber: 188
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/ReelInfo.tsx",
                    lineNumber: 149,
                    columnNumber: 130
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/reels/ReelInfo.tsx",
            lineNumber: 149,
            columnNumber: 27
        }, this);
        $[24] = displayCaption;
        $[25] = isExpanded;
        $[26] = reel.caption;
        $[27] = renderMentions;
        $[28] = shouldTruncate;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    let t13;
    if ($[30] !== onHashtagClick || $[31] !== reel.hashtags) {
        t13 = reel.hashtags && reel.hashtags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2",
            children: reel.hashtags.map({
                "ReelInfo[reel.hashtags.map()]": (tag_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "ReelInfo[reel.hashtags.map() > <button>.onClick]": (e_4)=>{
                                e_4.stopPropagation();
                                onHashtagClick?.(tag_0);
                            }
                        }["ReelInfo[reel.hashtags.map() > <button>.onClick]"],
                        className: "text-white/90 text-sm hover:text-white",
                        children: [
                            "#",
                            tag_0
                        ]
                    }, tag_0, true, {
                        fileName: "[project]/src/components/reels/ReelInfo.tsx",
                        lineNumber: 167,
                        columnNumber: 51
                    }, this)
            }["ReelInfo[reel.hashtags.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelInfo.tsx",
            lineNumber: 166,
            columnNumber: 56
        }, this);
        $[30] = onHashtagClick;
        $[31] = reel.hashtags;
        $[32] = t13;
    } else {
        t13 = $[32];
    }
    let t14;
    if ($[33] !== reel.codeFileName || $[34] !== reel.codeLanguage || $[35] !== reel.codeSnippet || $[36] !== reel.repoUrl) {
        t14 = reel.codeSnippet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-white/80 text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/ReelInfo.tsx",
                    lineNumber: 182,
                    columnNumber: 94
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: reel.codeLanguage || "Code"
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/ReelInfo.tsx",
                    lineNumber: 182,
                    columnNumber: 122
                }, this),
                reel.codeFileName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white/60",
                    children: [
                        "• ",
                        reel.codeFileName
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/reels/ReelInfo.tsx",
                    lineNumber: 182,
                    columnNumber: 186
                }, this),
                reel.repoUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: reel.repoUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: _ReelInfoAOnClick,
                    className: "ml-1 hover:text-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                        className: "w-3 h-3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelInfo.tsx",
                        lineNumber: 182,
                        columnNumber: 391
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/ReelInfo.tsx",
                    lineNumber: 182,
                    columnNumber: 264
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/reels/ReelInfo.tsx",
            lineNumber: 182,
            columnNumber: 31
        }, this);
        $[33] = reel.codeFileName;
        $[34] = reel.codeLanguage;
        $[35] = reel.codeSnippet;
        $[36] = reel.repoUrl;
        $[37] = t14;
    } else {
        t14 = $[37];
    }
    let t15;
    if ($[38] !== reel.locationName) {
        t15 = reel.locationName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1 text-white/70 text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/ReelInfo.tsx",
                    lineNumber: 193,
                    columnNumber: 95
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: reel.locationName
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/ReelInfo.tsx",
                    lineNumber: 193,
                    columnNumber: 125
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/reels/ReelInfo.tsx",
            lineNumber: 193,
            columnNumber: 32
        }, this);
        $[38] = reel.locationName;
        $[39] = t15;
    } else {
        t15 = $[39];
    }
    let t16;
    if ($[40] !== onAudioClick || $[41] !== reel.audio) {
        t16 = reel.audio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "ReelInfo[<button>.onClick]": (e_6)=>{
                    e_6.stopPropagation();
                    onAudioClick?.();
                }
            }["ReelInfo[<button>.onClick]"],
            className: "flex items-center gap-2 text-white/90 text-sm hover:text-white overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 animate-marquee",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                        className: "w-4 h-4 flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelInfo.tsx",
                        lineNumber: 206,
                        columnNumber: 186
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "whitespace-nowrap",
                        children: [
                            reel.audio.title,
                            reel.audio.artist && ` • ${reel.audio.artist}`
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reels/ReelInfo.tsx",
                        lineNumber: 206,
                        columnNumber: 229
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reels/ReelInfo.tsx",
                lineNumber: 206,
                columnNumber: 129
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelInfo.tsx",
            lineNumber: 201,
            columnNumber: 25
        }, this);
        $[40] = onAudioClick;
        $[41] = reel.audio;
        $[42] = t16;
    } else {
        t16 = $[42];
    }
    let t17;
    if ($[43] !== reel.ctaText || $[44] !== reel.ctaType || $[45] !== reel.ctaUrl) {
        t17 = reel.ctaType && reel.ctaText && reel.ctaUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: reel.ctaUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            onClick: _ReelInfoAOnClick2,
            className: "inline-flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-colors w-fit",
            children: [
                reel.ctaText,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/ReelInfo.tsx",
                    lineNumber: 215,
                    columnNumber: 315
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/reels/ReelInfo.tsx",
            lineNumber: 215,
            columnNumber: 58
        }, this);
        $[43] = reel.ctaText;
        $[44] = reel.ctaType;
        $[45] = reel.ctaUrl;
        $[46] = t17;
    } else {
        t17 = $[46];
    }
    let t18;
    if ($[47] !== t10 || $[48] !== t11 || $[49] !== t12 || $[50] !== t13 || $[51] !== t14 || $[52] !== t15 || $[53] !== t16 || $[54] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3 max-w-[calc(100%-80px)]",
            children: [
                t10,
                t11,
                t12,
                t13,
                t14,
                t15,
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/reels/ReelInfo.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[47] = t10;
        $[48] = t11;
        $[49] = t12;
        $[50] = t13;
        $[51] = t14;
        $[52] = t15;
        $[53] = t16;
        $[54] = t17;
        $[55] = t18;
    } else {
        t18 = $[55];
    }
    return t18;
}
_s(ReelInfo, "FPNvbbHVlWWR4LKxxNntSxiIS38=");
_c = ReelInfo;
function _ReelInfoAOnClick2(e_7) {
    return e_7.stopPropagation();
}
function _ReelInfoAOnClick(e_5) {
    return e_5.stopPropagation();
}
function _ReelInfoButtonOnClick(e_2) {
    return e_2.stopPropagation();
}
function _ReelInfoLinkOnClick(e_1) {
    return e_1.stopPropagation();
}
function _ReelInfoRenderMentionsParts_0MapLinkOnClick(e_0) {
    return e_0.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "ReelInfo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/reels/MentionInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MentionInput",
    ()=>MentionInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function MentionInput({ value, onChange, placeholder = 'Write something...', className = '', autoFocus = false, onSubmit, maxLength }) {
    _s();
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showSuggestions, setShowSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mentionQuery, setMentionQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [mentionStart, setMentionStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const debounceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const extractMentions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MentionInput.useCallback[extractMentions]": (text)=>{
            const mentionRegex = /@(\w+)/g;
            const mentions = [];
            let match;
            while((match = mentionRegex.exec(text)) !== null){
                mentions.push(match[1]);
            }
            return [
                ...new Set(mentions)
            ];
        }
    }["MentionInput.useCallback[extractMentions]"], []);
    const searchUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MentionInput.useCallback[searchUsers]": async (query)=>{
            if (query.length < 1) {
                setSuggestions([]);
                setShowSuggestions(false);
                return;
            }
            setIsLoading(true);
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/users/search', {
                    params: {
                        q: query,
                        limit: 6
                    }
                });
                const users = response.data.users || response.data || [];
                setSuggestions(users);
                setShowSuggestions(users.length > 0);
                setSelectedIndex(0);
            } catch (error) {
                console.error('Failed to search users:', error);
                setSuggestions([]);
            } finally{
                setIsLoading(false);
            }
        }
    }["MentionInput.useCallback[searchUsers]"], []);
    const handleInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MentionInput.useCallback[handleInput]": (e)=>{
            const newValue = e.target.value;
            const cursorPos = e.target.selectionStart || 0;
            // Check if we're in a mention context
            const textBeforeCursor = newValue.slice(0, cursorPos);
            const mentionMatch = textBeforeCursor.match(/@(\w*)$/);
            if (mentionMatch) {
                const query_0 = mentionMatch[1];
                setMentionQuery(query_0);
                setMentionStart(cursorPos - query_0.length - 1);
                if (debounceRef.current) {
                    clearTimeout(debounceRef.current);
                }
                debounceRef.current = setTimeout({
                    "MentionInput.useCallback[handleInput]": ()=>{
                        searchUsers(query_0);
                    }
                }["MentionInput.useCallback[handleInput]"], 200);
            } else {
                setShowSuggestions(false);
                setMentionQuery('');
                setMentionStart(-1);
            }
            const mentions_0 = extractMentions(newValue);
            onChange(newValue, mentions_0);
        }
    }["MentionInput.useCallback[handleInput]"], [
        onChange,
        searchUsers,
        extractMentions
    ]);
    const insertMention = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MentionInput.useCallback[insertMention]": (user)=>{
            if (mentionStart === -1) return;
            const beforeMention = value.slice(0, mentionStart);
            const afterMention = value.slice(mentionStart + mentionQuery.length + 1);
            const newValue_0 = `${beforeMention}@${user.username} ${afterMention}`;
            const mentions_1 = extractMentions(newValue_0);
            onChange(newValue_0, mentions_1);
            setShowSuggestions(false);
            setMentionQuery('');
            setMentionStart(-1);
            // Focus and set cursor position
            setTimeout({
                "MentionInput.useCallback[insertMention]": ()=>{
                    if (textareaRef.current) {
                        const newCursorPos = mentionStart + user.username.length + 2;
                        textareaRef.current.focus();
                        textareaRef.current.setSelectionRange(newCursorPos, newCursorPos);
                    }
                }
            }["MentionInput.useCallback[insertMention]"], 0);
        }
    }["MentionInput.useCallback[insertMention]"], [
        value,
        mentionStart,
        mentionQuery,
        onChange,
        extractMentions
    ]);
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MentionInput.useCallback[handleKeyDown]": (e_0)=>{
            if (!showSuggestions) {
                if (e_0.key === 'Enter' && !e_0.shiftKey && onSubmit) {
                    e_0.preventDefault();
                    onSubmit();
                }
                return;
            }
            switch(e_0.key){
                case 'ArrowDown':
                    e_0.preventDefault();
                    setSelectedIndex({
                        "MentionInput.useCallback[handleKeyDown]": (prev_0)=>(prev_0 + 1) % suggestions.length
                    }["MentionInput.useCallback[handleKeyDown]"]);
                    break;
                case 'ArrowUp':
                    e_0.preventDefault();
                    setSelectedIndex({
                        "MentionInput.useCallback[handleKeyDown]": (prev)=>(prev - 1 + suggestions.length) % suggestions.length
                    }["MentionInput.useCallback[handleKeyDown]"]);
                    break;
                case 'Enter':
                case 'Tab':
                    e_0.preventDefault();
                    if (suggestions[selectedIndex]) {
                        insertMention(suggestions[selectedIndex]);
                    }
                    break;
                case 'Escape':
                    e_0.preventDefault();
                    setShowSuggestions(false);
                    break;
            }
        }
    }["MentionInput.useCallback[handleKeyDown]"], [
        showSuggestions,
        suggestions,
        selectedIndex,
        insertMention,
        onSubmit
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MentionInput.useEffect": ()=>{
            if (autoFocus && textareaRef.current) {
                textareaRef.current.focus();
            }
        }
    }["MentionInput.useEffect"], [
        autoFocus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MentionInput.useEffect": ()=>{
            return ({
                "MentionInput.useEffect": ()=>{
                    if (debounceRef.current) {
                        clearTimeout(debounceRef.current);
                    }
                }
            })["MentionInput.useEffect"];
        }
    }["MentionInput.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                ref: textareaRef,
                value: value,
                onChange: handleInput,
                onKeyDown: handleKeyDown,
                placeholder: placeholder,
                maxLength: maxLength,
                rows: 1,
                className: `w-full resize-none bg-transparent text-white placeholder-white/40 focus:outline-none ${className}`,
                style: {
                    minHeight: '24px'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/reels/MentionInput.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            showSuggestions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-full left-0 right-0 mb-2 bg-neutral-800 rounded-xl overflow-hidden shadow-xl border border-white/10 z-50",
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 text-center text-white/60 text-sm",
                    children: "Searching..."
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/MentionInput.tsx",
                    lineNumber: 167,
                    columnNumber: 24
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-64 overflow-y-auto",
                    children: suggestions.map((user_0, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>insertMention(user_0),
                            className: `w-full flex items-center gap-3 p-3 transition-colors ${index === selectedIndex ? 'bg-white/10' : 'hover:bg-white/5'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-full overflow-hidden bg-neutral-700 flex-shrink-0",
                                    children: user_0.profileImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: user_0.profileImage,
                                        alt: user_0.name,
                                        width: 40,
                                        height: 40,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/MentionInput.tsx",
                                        lineNumber: 172,
                                        columnNumber: 44
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            className: "w-5 h-5 text-neutral-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/MentionInput.tsx",
                                            lineNumber: 173,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/MentionInput.tsx",
                                        lineNumber: 172,
                                        columnNumber: 162
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/MentionInput.tsx",
                                    lineNumber: 171,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white font-medium truncate",
                                            children: user_0.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/MentionInput.tsx",
                                            lineNumber: 177,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/60 text-sm truncate",
                                            children: [
                                                "@",
                                                user_0.username
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/reels/MentionInput.tsx",
                                            lineNumber: 178,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/reels/MentionInput.tsx",
                                    lineNumber: 176,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, user_0.id, true, {
                            fileName: "[project]/src/components/reels/MentionInput.tsx",
                            lineNumber: 170,
                            columnNumber: 51
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/MentionInput.tsx",
                    lineNumber: 169,
                    columnNumber: 22
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/reels/MentionInput.tsx",
                lineNumber: 166,
                columnNumber: 27
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/reels/MentionInput.tsx",
        lineNumber: 161,
        columnNumber: 10
    }, this);
}
_s(MentionInput, "jO0XkKH/CjlnTpCtASgXsLRK85A=");
_c = MentionInput;
var _c;
__turbopack_context__.k.register(_c, "MentionInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/reels/ReelComments.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReelComments",
    ()=>ReelComments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pin.js [app-client] (ecmascript) <export default as Pin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/reels.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$MentionInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/MentionInput.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function ReelComments({ reelId, isOpen, onClose, authorId }) {
    _s();
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [nextCursor, setNextCursor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [newComment, setNewComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [commentMentions, setCommentMentions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [replyTo, setReplyTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [expandedReplies, setExpandedReplies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [repliesData, setRepliesData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fetchComments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReelComments.useCallback[fetchComments]": async (cursor)=>{
            try {
                setIsLoading(true);
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reelsApi"].getComments(reelId, {
                    cursor,
                    limit: 20
                });
                if (cursor) {
                    setComments({
                        "ReelComments.useCallback[fetchComments]": (prev)=>[
                                ...prev,
                                ...response.comments
                            ]
                    }["ReelComments.useCallback[fetchComments]"]);
                } else {
                    setComments(response.comments);
                }
                setNextCursor(response.nextCursor);
                setHasMore(response.hasMore);
            } catch (error) {
                console.error('Failed to fetch comments:', error);
            } finally{
                setIsLoading(false);
            }
        }
    }["ReelComments.useCallback[fetchComments]"], [
        reelId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReelComments.useEffect": ()=>{
            if (isOpen) {
                fetchComments();
            }
        }
    }["ReelComments.useEffect"], [
        isOpen,
        fetchComments
    ]);
    const fetchReplies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReelComments.useCallback[fetchReplies]": async (parentId)=>{
            try {
                const response_0 = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reelsApi"].getComments(reelId, {
                    parentId,
                    limit: 10
                });
                setRepliesData({
                    "ReelComments.useCallback[fetchReplies]": (prev_0)=>({
                            ...prev_0,
                            [parentId]: response_0.comments
                        })
                }["ReelComments.useCallback[fetchReplies]"]);
            } catch (error_0) {
                console.error('Failed to fetch replies:', error_0);
            }
        }
    }["ReelComments.useCallback[fetchReplies]"], [
        reelId
    ]);
    const handleSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReelComments.useCallback[handleSubmit]": async (e)=>{
            e?.preventDefault();
            if (!newComment.trim() || isSubmitting) return;
            try {
                setIsSubmitting(true);
                const response_1 = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reelsApi"].createComment(reelId, {
                    content: newComment.trim(),
                    parentId: replyTo?.id,
                    mentions: commentMentions
                });
                if (replyTo) {
                    setRepliesData({
                        "ReelComments.useCallback[handleSubmit]": (prev_1)=>({
                                ...prev_1,
                                [replyTo.id]: [
                                    response_1,
                                    ...prev_1[replyTo.id] || []
                                ]
                            })
                    }["ReelComments.useCallback[handleSubmit]"]);
                    setComments({
                        "ReelComments.useCallback[handleSubmit]": (prev_2)=>prev_2.map({
                                "ReelComments.useCallback[handleSubmit]": (c)=>c.id === replyTo.id ? {
                                        ...c,
                                        repliesCount: c.repliesCount + 1
                                    } : c
                            }["ReelComments.useCallback[handleSubmit]"])
                    }["ReelComments.useCallback[handleSubmit]"]);
                } else {
                    setComments({
                        "ReelComments.useCallback[handleSubmit]": (prev_3)=>[
                                response_1,
                                ...prev_3
                            ]
                    }["ReelComments.useCallback[handleSubmit]"]);
                }
                setNewComment('');
                setCommentMentions([]);
                setReplyTo(null);
            } catch (error_1) {
                console.error('Failed to create comment:', error_1);
            } finally{
                setIsSubmitting(false);
            }
        }
    }["ReelComments.useCallback[handleSubmit]"], [
        reelId,
        newComment,
        commentMentions,
        replyTo,
        isSubmitting
    ]);
    const handleCommentChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReelComments.useCallback[handleCommentChange]": (value, mentions)=>{
            setNewComment(value);
            setCommentMentions(mentions);
        }
    }["ReelComments.useCallback[handleCommentChange]"], []);
    const handleLike = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReelComments.useCallback[handleLike]": async (commentId)=>{
            try {
                const response_2 = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reelsApi"].toggleCommentLike(reelId, commentId);
                setComments({
                    "ReelComments.useCallback[handleLike]": (prev_4)=>prev_4.map({
                            "ReelComments.useCallback[handleLike]": (c_0)=>c_0.id === commentId ? {
                                    ...c_0,
                                    isLiked: response_2.liked,
                                    likesCount: response_2.likesCount
                                } : c_0
                        }["ReelComments.useCallback[handleLike]"])
                }["ReelComments.useCallback[handleLike]"]);
                Object.keys(repliesData).forEach({
                    "ReelComments.useCallback[handleLike]": (parentId_0)=>{
                        setRepliesData({
                            "ReelComments.useCallback[handleLike]": (prev_5)=>({
                                    ...prev_5,
                                    [parentId_0]: prev_5[parentId_0].map({
                                        "ReelComments.useCallback[handleLike]": (c_1)=>c_1.id === commentId ? {
                                                ...c_1,
                                                isLiked: response_2.liked,
                                                likesCount: response_2.likesCount
                                            } : c_1
                                    }["ReelComments.useCallback[handleLike]"])
                                })
                        }["ReelComments.useCallback[handleLike]"]);
                    }
                }["ReelComments.useCallback[handleLike]"]);
            } catch (error_2) {
                console.error('Failed to toggle like:', error_2);
            }
        }
    }["ReelComments.useCallback[handleLike]"], [
        reelId,
        repliesData
    ]);
    const handleReply = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReelComments.useCallback[handleReply]": (comment)=>{
            setReplyTo(comment);
            inputRef.current?.focus();
        }
    }["ReelComments.useCallback[handleReply]"], []);
    const toggleReplies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReelComments.useCallback[toggleReplies]": (commentId_0)=>{
            const newExpanded = new Set(expandedReplies);
            if (newExpanded.has(commentId_0)) {
                newExpanded.delete(commentId_0);
            } else {
                newExpanded.add(commentId_0);
                if (!repliesData[commentId_0]) {
                    fetchReplies(commentId_0);
                }
            }
            setExpandedReplies(newExpanded);
        }
    }["ReelComments.useCallback[toggleReplies]"], [
        expandedReplies,
        repliesData,
        fetchReplies
    ]);
    const formatTime = (dateString)=>{
        const date = new Date(dateString);
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);
        if (minutes < 1) return 'now';
        if (minutes < 60) return `${minutes}m`;
        if (hours < 24) return `${hours}h`;
        if (days < 7) return `${days}d`;
        return date.toLocaleDateString();
    };
    const renderComment = (comment_0, isReply = false)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex gap-3", isReply && "ml-12"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: `/profile/${comment_0.author.id}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: comment_0.author.profileImage || '/default-avatar.png',
                        alt: comment_0.author.name,
                        className: "w-8 h-8 rounded-full flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelComments.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/ReelComments.tsx",
                    lineNumber: 170,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 flex-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/profile/${comment_0.author.id}`,
                                    className: "font-semibold text-sm hover:underline",
                                    children: comment_0.author.username
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelComments.tsx",
                                    lineNumber: 176,
                                    columnNumber: 11
                                }, this),
                                comment_0.author.id === authorId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs bg-blue-500 text-white px-1.5 py-0.5 rounded",
                                    children: "Creator"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelComments.tsx",
                                    lineNumber: 179,
                                    columnNumber: 48
                                }, this),
                                comment_0.isPinned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pin$3e$__["Pin"], {
                                    className: "w-3 h-3 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelComments.tsx",
                                    lineNumber: 182,
                                    columnNumber: 34
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-500 text-xs",
                                    children: formatTime(comment_0.createdAt)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelComments.tsx",
                                    lineNumber: 183,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/reels/ReelComments.tsx",
                            lineNumber: 175,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm mt-1 break-words",
                            children: comment_0.content
                        }, void 0, false, {
                            fileName: "[project]/src/components/reels/ReelComments.tsx",
                            lineNumber: 188,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleLike(comment_0.id),
                                    className: "flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4", comment_0.isLiked && "fill-red-500 text-red-500")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelComments.tsx",
                                            lineNumber: 192,
                                            columnNumber: 13
                                        }, this),
                                        comment_0.likesCount > 0 && comment_0.likesCount
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/reels/ReelComments.tsx",
                                    lineNumber: 191,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleReply(comment_0),
                                    className: "text-xs text-gray-500 hover:text-gray-700",
                                    children: "Reply"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelComments.tsx",
                                    lineNumber: 196,
                                    columnNumber: 11
                                }, this),
                                comment_0.isAuthorHeart && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-red-500 flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            className: "w-3 h-3 fill-red-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelComments.tsx",
                                            lineNumber: 201,
                                            columnNumber: 15
                                        }, this),
                                        " by creator"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/reels/ReelComments.tsx",
                                    lineNumber: 200,
                                    columnNumber: 39
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/reels/ReelComments.tsx",
                            lineNumber: 190,
                            columnNumber: 9
                        }, this),
                        !isReply && comment_0.repliesCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>toggleReplies(comment_0.id),
                            className: "flex items-center gap-1 text-xs text-blue-500 mt-2 hover:underline",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 transition-transform", expandedReplies.has(comment_0.id) && "rotate-180")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelComments.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this),
                                expandedReplies.has(comment_0.id) ? 'Hide replies' : `View ${comment_0.repliesCount} ${comment_0.repliesCount === 1 ? 'reply' : 'replies'}`
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/reels/ReelComments.tsx",
                            lineNumber: 205,
                            columnNumber: 52
                        }, this),
                        expandedReplies.has(comment_0.id) && repliesData[comment_0.id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 space-y-4",
                            children: repliesData[comment_0.id].map((reply)=>renderComment(reply, true))
                        }, void 0, false, {
                            fileName: "[project]/src/components/reels/ReelComments.tsx",
                            lineNumber: 210,
                            columnNumber: 76
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/reels/ReelComments.tsx",
                    lineNumber: 174,
                    columnNumber: 7
                }, this)
            ]
        }, comment_0.id, true, {
            fileName: "[project]/src/components/reels/ReelComments.tsx",
            lineNumber: 169,
            columnNumber: 70
        }, this);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-end justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/50",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/components/reels/ReelComments.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-lg h-[70vh] bg-white dark:bg-gray-900 rounded-t-3xl flex flex-col animate-slide-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold",
                                children: "Comments"
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelComments.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelComments.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelComments.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reels/ReelComments.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: containerRef,
                        className: "flex-1 overflow-y-auto p-4 space-y-6",
                        children: isLoading && comments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center h-32",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "w-8 h-8 animate-spin text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelComments.tsx",
                                lineNumber: 229,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/reels/ReelComments.tsx",
                            lineNumber: 228,
                            columnNumber: 49
                        }, this) : comments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center h-32 text-gray-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "No comments yet"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelComments.tsx",
                                    lineNumber: 231,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: "Be the first to comment!"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelComments.tsx",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/reels/ReelComments.tsx",
                            lineNumber: 230,
                            columnNumber: 46
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                comments.map((comment_1)=>renderComment(comment_1)),
                                hasMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>fetchComments(nextCursor || undefined),
                                    disabled: isLoading,
                                    className: "w-full py-2 text-sm text-blue-500 hover:underline disabled:opacity-50",
                                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-4 h-4 animate-spin mx-auto"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelComments.tsx",
                                        lineNumber: 237,
                                        columnNumber: 32
                                    }, this) : 'Load more comments'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelComments.tsx",
                                    lineNumber: 236,
                                    columnNumber: 27
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelComments.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-gray-200 dark:border-gray-700 p-4",
                        children: [
                            replyTo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-sm text-gray-500 mb-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Replying to @",
                                            replyTo.author.username
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/reels/ReelComments.tsx",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setReplyTo(null),
                                        className: "text-gray-400 hover:text-gray-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelComments.tsx",
                                            lineNumber: 246,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelComments.tsx",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelComments.tsx",
                                lineNumber: 243,
                                columnNumber: 23
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$MentionInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MentionInput"], {
                                            value: newComment,
                                            onChange: handleCommentChange,
                                            placeholder: replyTo ? `Reply to @${replyTo.author.username}...` : "Add a comment...",
                                            className: "text-sm text-gray-900 dark:text-white",
                                            onSubmit: ()=>handleSubmit(),
                                            autoFocus: !!replyTo
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelComments.tsx",
                                            lineNumber: 252,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelComments.tsx",
                                        lineNumber: 251,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: !newComment.trim() || isSubmitting,
                                        className: "w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-5 h-5 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelComments.tsx",
                                            lineNumber: 255,
                                            columnNumber: 31
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelComments.tsx",
                                            lineNumber: 255,
                                            columnNumber: 78
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelComments.tsx",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelComments.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reels/ReelComments.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reels/ReelComments.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/reels/ReelComments.tsx",
        lineNumber: 216,
        columnNumber: 10
    }, this);
}
_s(ReelComments, "3OMxSBAnLiIB06HppaD8kNdK8UI=");
_c = ReelComments;
var _c;
__turbopack_context__.k.register(_c, "ReelComments");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/reels/ReelShareSheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReelShareSheet",
    ()=>ReelShareSheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link-2.js [app-client] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ReelShareSheet({ reel, isOpen, onClose }) {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [conversations, setConversations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [sendingTo, setSendingTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sentTo, setSentTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReelShareSheet.useEffect": ()=>{
            if (isOpen) {
                fetchConversations();
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'unset';
                setSearchQuery('');
                setSentTo(new Set());
                setMessage('');
            }
            return ({
                "ReelShareSheet.useEffect": ()=>{
                    document.body.style.overflow = 'unset';
                }
            })["ReelShareSheet.useEffect"];
        }
    }["ReelShareSheet.useEffect"], [
        isOpen
    ]);
    const fetchConversations = async ()=>{
        try {
            setIsLoading(true);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/chat/conversations');
            setConversations(response.data.conversations || []);
        } catch (error) {
            console.error('Failed to fetch conversations:', error);
        } finally{
            setIsLoading(false);
        }
    };
    const shareToUser = async (userId)=>{
        try {
            setSendingTo(userId);
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/reels/${reel.id}/share/chat`, {
                recipientId: userId,
                message: message || undefined
            });
            setSentTo((prev)=>new Set(prev).add(userId));
            setMessage('');
        } catch (error_0) {
            console.error('Failed to share reel:', error_0);
        } finally{
            setSendingTo(null);
        }
    };
    const copyLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReelShareSheet.useCallback[copyLink]": async ()=>{
            try {
                const url = `${window.location.origin}/reels/${reel.id}`;
                await navigator.clipboard.writeText(url);
                setCopied(true);
                setTimeout({
                    "ReelShareSheet.useCallback[copyLink]": ()=>setCopied(false)
                }["ReelShareSheet.useCallback[copyLink]"], 2000);
                // Track share
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/reels/${reel.id}/share`, {
                    shareType: 'copy_link'
                });
            } catch (error_1) {
                console.error('Failed to copy link:', error_1);
            }
        }
    }["ReelShareSheet.useCallback[copyLink]"], [
        reel.id
    ]);
    const filteredConversations = conversations.filter((conv)=>{
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();
        return conv.otherParticipant.name?.toLowerCase().includes(query) || conv.otherParticipant.username?.toLowerCase().includes(query);
    });
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-eab58dd69ff4ad62" + " " + "fixed inset-0 z-50 flex items-end justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onClose,
                className: "jsx-eab58dd69ff4ad62" + " " + "absolute inset-0 bg-black/60 backdrop-blur-sm"
            }, void 0, false, {
                fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-eab58dd69ff4ad62" + " " + "relative w-full max-w-lg bg-neutral-900 rounded-t-3xl max-h-[85vh] flex flex-col animate-slide-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-eab58dd69ff4ad62" + " " + "flex items-center justify-between p-4 border-b border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-eab58dd69ff4ad62" + " " + "text-lg font-semibold text-white",
                                children: "Share Reel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "jsx-eab58dd69ff4ad62" + " " + "w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-eab58dd69ff4ad62" + " " + "p-4 border-b border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-eab58dd69ff4ad62" + " " + "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-eab58dd69ff4ad62" + " " + "w-16 h-24 bg-neutral-800 rounded-lg overflow-hidden flex-shrink-0",
                                        children: reel.thumbnailUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: reel.thumbnailUrl,
                                            alt: "",
                                            width: 64,
                                            height: 96,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                            lineNumber: 114,
                                            columnNumber: 36
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-eab58dd69ff4ad62" + " " + "w-full h-full flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                className: "w-6 h-6 text-neutral-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                            lineNumber: 114,
                                            columnNumber: 141
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-eab58dd69ff4ad62" + " " + "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-eab58dd69ff4ad62" + " " + "text-white font-medium line-clamp-2",
                                                children: reel.title || reel.caption || 'Check out this reel!'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                                lineNumber: 119,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-eab58dd69ff4ad62" + " " + "text-white/60 text-sm mt-1",
                                                children: [
                                                    "by @",
                                                    reel.author.username
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: message,
                                onChange: (e)=>setMessage(e.target.value),
                                placeholder: "Add a message...",
                                className: "jsx-eab58dd69ff4ad62" + " " + "w-full mt-3 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30"
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-eab58dd69ff4ad62" + " " + "p-4 border-b border-white/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-eab58dd69ff4ad62" + " " + "flex gap-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: copyLink,
                                className: "jsx-eab58dd69ff4ad62" + " " + "flex flex-col items-center gap-2 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-eab58dd69ff4ad62" + " " + `w-14 h-14 rounded-full flex items-center justify-center transition-colors ${copied ? 'bg-green-500/20' : 'bg-white/10 hover:bg-white/20'}`,
                                        children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "w-6 h-6 text-green-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                            lineNumber: 137,
                                            columnNumber: 27
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                            className: "w-6 h-6 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                            lineNumber: 137,
                                            columnNumber: 74
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-eab58dd69ff4ad62" + " " + "text-white/80 text-xs",
                                        children: copied ? 'Copied!' : 'Copy Link'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-eab58dd69ff4ad62" + " " + "p-4 border-b border-white/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-eab58dd69ff4ad62" + " " + "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: searchQuery,
                                    onChange: (e_0)=>setSearchQuery(e_0.target.value),
                                    placeholder: "Search conversations...",
                                    className: "jsx-eab58dd69ff4ad62" + " " + "w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-eab58dd69ff4ad62" + " " + "flex-1 overflow-y-auto p-4",
                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-eab58dd69ff4ad62" + " " + "flex items-center justify-center py-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "w-8 h-8 text-white/60 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                lineNumber: 157,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                            lineNumber: 156,
                            columnNumber: 24
                        }, this) : filteredConversations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-eab58dd69ff4ad62" + " " + "text-center py-8 text-white/60",
                            children: searchQuery ? 'No conversations found' : 'No recent conversations'
                        }, void 0, false, {
                            fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                            lineNumber: 158,
                            columnNumber: 59
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-eab58dd69ff4ad62" + " " + "space-y-2",
                            children: filteredConversations.map((conv_0)=>{
                                const isSent = sentTo.has(conv_0.otherParticipant.id);
                                const isSending = sendingTo === conv_0.otherParticipant.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-eab58dd69ff4ad62" + " " + "flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-eab58dd69ff4ad62" + " " + "w-12 h-12 rounded-full overflow-hidden bg-neutral-800 flex-shrink-0",
                                            children: conv_0.otherParticipant.profileImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: conv_0.otherParticipant.profileImage,
                                                alt: conv_0.otherParticipant.name,
                                                width: 48,
                                                height: 48,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                                lineNumber: 166,
                                                columnNumber: 63
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-eab58dd69ff4ad62" + " " + "w-full h-full flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "w-6 h-6 text-neutral-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                                lineNumber: 166,
                                                columnNumber: 215
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                            lineNumber: 165,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-eab58dd69ff4ad62" + " " + "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-eab58dd69ff4ad62" + " " + "text-white font-medium truncate",
                                                    children: conv_0.otherParticipant.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-eab58dd69ff4ad62" + " " + "text-white/60 text-sm truncate",
                                                    children: [
                                                        "@",
                                                        conv_0.otherParticipant.username
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                            lineNumber: 171,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>shareToUser(conv_0.otherParticipant.id),
                                            disabled: isSending || isSent,
                                            className: "jsx-eab58dd69ff4ad62" + " " + `px-4 py-2 rounded-full font-medium text-sm transition-colors ${isSent ? 'bg-green-500/20 text-green-500' : 'bg-white text-black hover:bg-white/90'} disabled:opacity-50`,
                                            children: isSending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "w-4 h-4 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                                lineNumber: 181,
                                                columnNumber: 36
                                            }, this) : isSent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-eab58dd69ff4ad62" + " " + "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 27
                                                    }, this),
                                                    "Sent"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                                lineNumber: 181,
                                                columnNumber: 92
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-eab58dd69ff4ad62" + " " + "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 27
                                                    }, this),
                                                    "Send"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                                lineNumber: 184,
                                                columnNumber: 35
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                            lineNumber: 180,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, conv_0.id, true, {
                                    fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                                    lineNumber: 164,
                                    columnNumber: 20
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                            lineNumber: 160,
                            columnNumber: 22
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "eab58dd69ff4ad62",
                children: "@keyframes slide-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}.animate-slide-up.jsx-eab58dd69ff4ad62{animation:.3s ease-out slide-up}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/reels/ReelShareSheet.tsx",
        lineNumber: 98,
        columnNumber: 10
    }, this);
}
_s(ReelShareSheet, "YNvbi5W6tJ338IxPnpshNq3D6tE=");
_c = ReelShareSheet;
var _c;
__turbopack_context__.k.register(_c, "ReelShareSheet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/reels/ReelPoll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReelPoll",
    ()=>ReelPoll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/reels.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ReelPoll({ reelId, question, options: initialOptions, userVotedOption: initialVote, endsAt }) {
    _s();
    const [options, setOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialOptions);
    const [votedOption, setVotedOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialVote);
    const [isVoting, setIsVoting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const totalVotes = options.reduce((sum, opt)=>sum + opt.votes, 0);
    const isEnded = endsAt ? new Date(endsAt) < new Date() : false;
    const hasVoted = votedOption !== null;
    const handleVote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReelPoll.useCallback[handleVote]": async (optionId)=>{
            if (hasVoted || isVoting || isEnded) return;
            try {
                setIsVoting(true);
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reelsApi"].votePoll(reelId, optionId);
                setOptions(response.pollOptions);
                setVotedOption(response.userVotedOption);
            } catch (error) {
                console.error('Failed to vote:', error);
            } finally{
                setIsVoting(false);
            }
        }
    }["ReelPoll.useCallback[handleVote]"], [
        reelId,
        hasVoted,
        isVoting,
        isEnded
    ]);
    const getPercentage = (votes)=>{
        if (totalVotes === 0) return 0;
        return Math.round(votes / totalVotes * 100);
    };
    const formatTimeLeft = ()=>{
        if (!endsAt) return null;
        const end = new Date(endsAt);
        const now = new Date();
        const diff = end.getTime() - now.getTime();
        if (diff <= 0) return 'Ended';
        const hours = Math.floor(diff / 3600000);
        const minutes = Math.floor(diff % 3600000 / 60000);
        if (hours > 24) {
            return `${Math.floor(hours / 24)}d left`;
        }
        if (hours > 0) {
            return `${hours}h ${minutes}m left`;
        }
        return `${minutes}m left`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-black/60 backdrop-blur-md rounded-2xl p-4 space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-white font-semibold text-lg",
                children: question
            }, void 0, false, {
                fileName: "[project]/src/components/reels/ReelPoll.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: options.map((option)=>{
                    const percentage = getPercentage(option.votes);
                    const isSelected = votedOption === option.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleVote(option.id),
                        disabled: hasVoted || isVoting || isEnded,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative w-full p-3 rounded-xl text-left transition-all overflow-hidden", hasVoted || isEnded ? "bg-white/10" : "bg-white/20 hover:bg-white/30 active:scale-[0.98]", isSelected && "ring-2 ring-white"),
                        children: [
                            (hasVoted || isEnded) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 transition-all", isSelected ? "bg-blue-500/40" : "bg-white/10"),
                                style: {
                                    width: `${percentage}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelPoll.tsx",
                                lineNumber: 76,
                                columnNumber: 41
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-medium",
                                        children: option.text
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelPoll.tsx",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, this),
                                    (hasVoted || isEnded) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/80 font-semibold",
                                        children: [
                                            percentage,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/reels/ReelPoll.tsx",
                                        lineNumber: 82,
                                        columnNumber: 43
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelPoll.tsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this)
                        ]
                    }, option.id, true, {
                        fileName: "[project]/src/components/reels/ReelPoll.tsx",
                        lineNumber: 75,
                        columnNumber: 16
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/reels/ReelPoll.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between text-white/60 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            totalVotes,
                            " ",
                            totalVotes === 1 ? 'vote' : 'votes'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reels/ReelPoll.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    endsAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: formatTimeLeft()
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelPoll.tsx",
                        lineNumber: 92,
                        columnNumber: 20
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reels/ReelPoll.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/reels/ReelPoll.tsx",
        lineNumber: 68,
        columnNumber: 10
    }, this);
}
_s(ReelPoll, "IkAzNnFODPMTabl/6dXBfbvfof4=");
_c = ReelPoll;
var _c;
__turbopack_context__.k.register(_c, "ReelPoll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/reels/ReelQuiz.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReelQuiz",
    ()=>ReelQuiz
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/reels.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ReelQuiz({ reelId, question, options }) {
    _s();
    const [selectedOption, setSelectedOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [correctAnswer, setCorrectAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAnswered, setIsAnswered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleAnswer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReelQuiz.useCallback[handleAnswer]": async (optionId)=>{
            if (isAnswered || isSubmitting) return;
            try {
                setIsSubmitting(true);
                setSelectedOption(optionId);
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reelsApi"].answerQuiz(reelId, optionId);
                setCorrectAnswer(response.correctAnswer);
                setIsAnswered(true);
            } catch (error) {
                console.error('Failed to answer quiz:', error);
                setSelectedOption(null);
            } finally{
                setIsSubmitting(false);
            }
        }
    }["ReelQuiz.useCallback[handleAnswer]"], [
        reelId,
        isAnswered,
        isSubmitting
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-black/60 backdrop-blur-md rounded-2xl p-4 space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-white font-semibold text-lg",
                children: question
            }, void 0, false, {
                fileName: "[project]/src/components/reels/ReelQuiz.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: options.map((option)=>{
                    const isSelected = selectedOption === option.id;
                    const isCorrect = correctAnswer === option.id;
                    const isWrong = isAnswered && isSelected && !isCorrect;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleAnswer(option.id),
                        disabled: isAnswered || isSubmitting,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative w-full p-3 rounded-xl text-left transition-all", isAnswered ? isCorrect ? "bg-green-500/40 ring-2 ring-green-500" : isWrong ? "bg-red-500/40 ring-2 ring-red-500" : "bg-white/10" : "bg-white/20 hover:bg-white/30 active:scale-[0.98]", isSubmitting && isSelected && "animate-pulse"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white font-medium",
                                    children: option.text
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelQuiz.tsx",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, this),
                                isAnswered && isCorrect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "w-5 h-5 text-green-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelQuiz.tsx",
                                    lineNumber: 54,
                                    columnNumber: 45
                                }, this),
                                isWrong && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5 text-red-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelQuiz.tsx",
                                    lineNumber: 55,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/reels/ReelQuiz.tsx",
                            lineNumber: 52,
                            columnNumber: 15
                        }, this)
                    }, option.id, false, {
                        fileName: "[project]/src/components/reels/ReelQuiz.tsx",
                        lineNumber: 51,
                        columnNumber: 16
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/reels/ReelQuiz.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            isAnswered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-center py-2 rounded-lg font-medium", selectedOption === correctAnswer ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"),
                children: selectedOption === correctAnswer ? 'Correct! 🎉' : 'Wrong answer 😔'
            }, void 0, false, {
                fileName: "[project]/src/components/reels/ReelQuiz.tsx",
                lineNumber: 61,
                columnNumber: 22
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/reels/ReelQuiz.tsx",
        lineNumber: 43,
        columnNumber: 10
    }, this);
}
_s(ReelQuiz, "Qf7sbk9n9NlYUyBZE3gF8SnDpRE=");
_c = ReelQuiz;
var _c;
__turbopack_context__.k.register(_c, "ReelQuiz");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/reels/ReelCodeSnippet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReelCodeSnippet",
    ()=>ReelCodeSnippet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-code.js [app-client] (ecmascript) <export default as FileCode>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ReelCodeSnippet(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "300728d263bdb24105a02fa762f561c3d47054f684ed43a43466be897f4686c4") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "300728d263bdb24105a02fa762f561c3d47054f684ed43a43466be897f4686c4";
    }
    const { code, language, fileName } = t0;
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== code) {
        t1 = ({
            "ReelCodeSnippet[handleCopy]": async (e)=>{
                e.stopPropagation();
                ;
                try {
                    await navigator.clipboard.writeText(code);
                    setCopied(true);
                    setTimeout({
                        "ReelCodeSnippet[handleCopy > setTimeout()]": ()=>setCopied(false)
                    }["ReelCodeSnippet[handleCopy > setTimeout()]"], 2000);
                } catch (t2) {
                    const error = t2;
                    console.error("Failed to copy:", error);
                }
            }
        })["ReelCodeSnippet[handleCopy]"];
        $[1] = code;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleCopy = t1;
    const getLanguageColor = _ReelCodeSnippetGetLanguageColor;
    let t2;
    if ($[3] !== language) {
        t2 = getLanguageColor(language);
        $[3] = language;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const t3 = `w-4 h-4 ${t2}`;
    let t4;
    if ($[5] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__["FileCode"], {
            className: t3
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelCodeSnippet.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[5] = t3;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== fileName) {
        t5 = fileName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-white/70 text-sm font-mono",
            children: fileName
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelCodeSnippet.tsx",
            lineNumber: 69,
            columnNumber: 22
        }, this);
        $[7] = fileName;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== fileName || $[10] !== language) {
        t6 = language && !fileName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-white/70 text-sm",
            children: language
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelCodeSnippet.tsx",
            lineNumber: 77,
            columnNumber: 35
        }, this);
        $[9] = fileName;
        $[10] = language;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== t4 || $[13] !== t5 || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/reels/ReelCodeSnippet.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[12] = t4;
        $[13] = t5;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== copied) {
        t8 = copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/ReelCodeSnippet.tsx",
                    lineNumber: 96,
                    columnNumber: 21
                }, this),
                "Copied!"
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/ReelCodeSnippet.tsx",
                    lineNumber: 96,
                    columnNumber: 65
                }, this),
                "Copy"
            ]
        }, void 0, true);
        $[16] = copied;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== handleCopy || $[19] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleCopy,
            className: "flex items-center gap-1 text-white/60 hover:text-white text-sm transition-colors",
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelCodeSnippet.tsx",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[18] = handleCopy;
        $[19] = t8;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== t7 || $[22] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10",
            children: [
                t7,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/reels/ReelCodeSnippet.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[21] = t7;
        $[22] = t9;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] !== code) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
            className: "p-4 overflow-x-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                className: "text-sm font-mono text-white/90 whitespace-pre-wrap break-words",
                children: code
            }, void 0, false, {
                fileName: "[project]/src/components/reels/ReelCodeSnippet.tsx",
                lineNumber: 122,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelCodeSnippet.tsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[24] = code;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== t10 || $[27] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-black/80 backdrop-blur-md rounded-xl overflow-hidden",
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/reels/ReelCodeSnippet.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        $[26] = t10;
        $[27] = t11;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    return t12;
}
_s(ReelCodeSnippet, "NE86rL3vg4NVcTTWDavsT0hUBJs=");
_c = ReelCodeSnippet;
function _ReelCodeSnippetGetLanguageColor(lang) {
    const colors = {
        javascript: "text-yellow-400",
        typescript: "text-blue-400",
        python: "text-green-400",
        java: "text-red-400",
        kotlin: "text-purple-400",
        swift: "text-orange-400",
        rust: "text-orange-500",
        go: "text-cyan-400",
        cpp: "text-blue-500",
        c: "text-blue-600",
        csharp: "text-purple-500",
        ruby: "text-red-500",
        php: "text-indigo-400",
        html: "text-orange-400",
        css: "text-blue-400",
        sql: "text-yellow-500",
        shell: "text-green-500",
        bash: "text-green-500"
    };
    return lang ? colors[lang.toLowerCase()] || "text-gray-400" : "text-gray-400";
}
var _c;
__turbopack_context__.k.register(_c, "ReelCodeSnippet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/reels/ReelCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReelCard",
    ()=>ReelCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/ReelPlayer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelActions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/ReelActions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/ReelInfo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelComments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/ReelComments.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelShareSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/ReelShareSheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelPoll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/ReelPoll.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelQuiz$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/ReelQuiz.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelCodeSnippet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/ReelCodeSnippet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/reels.ts [app-client] (ecmascript)");
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
;
;
;
function ReelCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(76);
    if ($[0] !== "0b807dd8b04a8f033658786bcd7c7232629d4c2dbfd76710065d3cf29f8fa1be") {
        for(let $i = 0; $i < 76; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0b807dd8b04a8f033658786bcd7c7232629d4c2dbfd76710065d3cf29f8fa1be";
    }
    const { reel, isActive, isMuted, onMuteToggle } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [showComments, setShowComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showShare, setShowShare] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showHeart, setShowHeart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [localReel, setLocalReel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(reel);
    const viewTracked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const watchStartTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[1] !== reel) {
        t1 = ({
            "ReelCard[useEffect()]": ()=>{
                setLocalReel(reel);
            }
        })["ReelCard[useEffect()]"];
        t2 = [
            reel
        ];
        $[1] = reel;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[4] !== isActive) {
        t3 = ({
            "ReelCard[useEffect()]": ()=>{
                if (isActive && !viewTracked.current) {
                    watchStartTime.current = Date.now();
                } else {
                    if (!isActive && viewTracked.current) {
                        viewTracked.current = false;
                        watchStartTime.current = null;
                    }
                }
            }
        })["ReelCard[useEffect()]"];
        t4 = [
            isActive
        ];
        $[4] = isActive;
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[7] !== reel.id) {
        t5 = ({
            "ReelCard[handleProgress]": (progress, watchTimeMs)=>{
                if (!viewTracked.current && watchTimeMs >= 3000) {
                    viewTracked.current = true;
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reelsApi"].trackView(reel.id, {
                        watchTimeMs,
                        completed: false,
                        source: "feed"
                    }).catch(console.error);
                }
            }
        })["ReelCard[handleProgress]"];
        $[7] = reel.id;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const handleProgress = t5;
    let t6;
    if ($[9] !== reel.id) {
        t6 = ({
            "ReelCard[handleComplete]": ()=>{
                if (watchStartTime.current) {
                    const totalWatchTime = Date.now() - watchStartTime.current;
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reelsApi"].trackView(reel.id, {
                        watchTimeMs: totalWatchTime,
                        completed: true,
                        source: "feed"
                    }).catch(console.error);
                }
            }
        })["ReelCard[handleComplete]"];
        $[9] = reel.id;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const handleComplete = t6;
    const handleTap = _ReelCardHandleTap;
    let t7;
    if ($[11] !== localReel.isLiked || $[12] !== reel.id) {
        t7 = ({
            "ReelCard[handleDoubleTap]": async ()=>{
                if (!localReel.isLiked) {
                    setShowHeart(true);
                    setTimeout({
                        "ReelCard[handleDoubleTap > setTimeout()]": ()=>setShowHeart(false)
                    }["ReelCard[handleDoubleTap > setTimeout()]"], 800);
                    ;
                    try {
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reelsApi"].toggleLike(reel.id);
                        setLocalReel({
                            "ReelCard[handleDoubleTap > setLocalReel()]": (prev)=>({
                                    ...prev,
                                    isLiked: response.liked,
                                    likesCount: response.likesCount
                                })
                        }["ReelCard[handleDoubleTap > setLocalReel()]"]);
                    } catch (t8) {
                        const error = t8;
                        console.error("Failed to like:", error);
                    }
                }
            }
        })["ReelCard[handleDoubleTap]"];
        $[11] = localReel.isLiked;
        $[12] = reel.id;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    const handleDoubleTap = t7;
    let t8;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "ReelCard[handleCommentClick]": ()=>{
                setShowComments(true);
            }
        })["ReelCard[handleCommentClick]"];
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    const handleCommentClick = t8;
    let t9;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "ReelCard[handleShareClick]": ()=>{
                setShowShare(true);
            }
        })["ReelCard[handleShareClick]"];
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    const handleShareClick = t9;
    let t10;
    if ($[16] !== router) {
        t10 = ({
            "ReelCard[handleHashtagClick]": (hashtag)=>{
                router.push(`/reels/hashtag/${hashtag}`);
            }
        })["ReelCard[handleHashtagClick]"];
        $[16] = router;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    const handleHashtagClick = t10;
    let t11;
    if ($[18] !== reel.audio || $[19] !== router) {
        t11 = ({
            "ReelCard[handleAudioClick]": ()=>{
                if (reel.audio) {
                    router.push(`/reels/audio/${reel.audio.id}`);
                }
            }
        })["ReelCard[handleAudioClick]"];
        $[18] = reel.audio;
        $[19] = router;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    const handleAudioClick = t11;
    let t12;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "ReelCard[handleLikeUpdate]": (liked, count)=>{
                setLocalReel({
                    "ReelCard[handleLikeUpdate > setLocalReel()]": (prev_0)=>({
                            ...prev_0,
                            isLiked: liked,
                            likesCount: count
                        })
                }["ReelCard[handleLikeUpdate > setLocalReel()]"]);
            }
        })["ReelCard[handleLikeUpdate]"];
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    const handleLikeUpdate = t12;
    let t13;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "ReelCard[handleSaveUpdate]": (saved, count_0)=>{
                setLocalReel({
                    "ReelCard[handleSaveUpdate > setLocalReel()]": (prev_1)=>({
                            ...prev_1,
                            isSaved: saved,
                            savesCount: count_0
                        })
                }["ReelCard[handleSaveUpdate > setLocalReel()]"]);
            }
        })["ReelCard[handleSaveUpdate]"];
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    const handleSaveUpdate = t13;
    let t14;
    if ($[23] !== handleComplete || $[24] !== handleDoubleTap || $[25] !== handleProgress || $[26] !== isActive || $[27] !== isMuted || $[28] !== onMuteToggle || $[29] !== reel.hlsUrl || $[30] !== reel.thumbnailUrl || $[31] !== reel.videoUrl) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReelPlayer"], {
            hlsUrl: reel.hlsUrl,
            mp4Url: reel.videoUrl,
            thumbnailUrl: reel.thumbnailUrl,
            isActive: isActive,
            isMuted: isMuted,
            onProgress: handleProgress,
            onComplete: handleComplete,
            onTap: handleTap,
            onDoubleTap: handleDoubleTap,
            onMuteToggle: onMuteToggle
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelCard.tsx",
            lineNumber: 253,
            columnNumber: 11
        }, this);
        $[23] = handleComplete;
        $[24] = handleDoubleTap;
        $[25] = handleProgress;
        $[26] = isActive;
        $[27] = isMuted;
        $[28] = onMuteToggle;
        $[29] = reel.hlsUrl;
        $[30] = reel.thumbnailUrl;
        $[31] = reel.videoUrl;
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    let t15;
    if ($[33] !== showHeart) {
        t15 = showHeart && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 flex items-center justify-center pointer-events-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                className: "w-24 h-24 text-red-500 fill-red-500 animate-heart-burst"
            }, void 0, false, {
                fileName: "[project]/src/components/reels/ReelCard.tsx",
                lineNumber: 269,
                columnNumber: 111
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelCard.tsx",
            lineNumber: 269,
            columnNumber: 24
        }, this);
        $[33] = showHeart;
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    if ($[35] !== handleAudioClick || $[36] !== handleHashtagClick || $[37] !== localReel) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReelInfo"], {
            reel: localReel,
            onHashtagClick: handleHashtagClick,
            onAudioClick: handleAudioClick
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelCard.tsx",
            lineNumber: 277,
            columnNumber: 11
        }, this);
        $[35] = handleAudioClick;
        $[36] = handleHashtagClick;
        $[37] = localReel;
        $[38] = t16;
    } else {
        t16 = $[38];
    }
    let t17;
    if ($[39] !== localReel) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelActions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReelActions"], {
            reel: localReel,
            onCommentClick: handleCommentClick,
            onShareClick: handleShareClick,
            onLikeUpdate: handleLikeUpdate,
            onSaveUpdate: handleSaveUpdate
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelCard.tsx",
            lineNumber: 287,
            columnNumber: 11
        }, this);
        $[39] = localReel;
        $[40] = t17;
    } else {
        t17 = $[40];
    }
    let t18;
    if ($[41] !== t16 || $[42] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 left-0 right-0 p-4 pb-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-end justify-between gap-4",
                children: [
                    t16,
                    t17
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reels/ReelCard.tsx",
                lineNumber: 295,
                columnNumber: 130
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelCard.tsx",
            lineNumber: 295,
            columnNumber: 11
        }, this);
        $[41] = t16;
        $[42] = t17;
        $[43] = t18;
    } else {
        t18 = $[43];
    }
    let t19;
    if ($[44] !== localReel.pollEndsAt || $[45] !== localReel.pollOptions || $[46] !== localReel.pollQuestion || $[47] !== localReel.userVotedOption || $[48] !== reel.id) {
        t19 = localReel.pollQuestion && localReel.pollOptions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-1/2 left-4 right-20 -translate-y-1/2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelPoll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReelPoll"], {
                reelId: reel.id,
                question: localReel.pollQuestion,
                options: localReel.pollOptions,
                userVotedOption: localReel.userVotedOption,
                endsAt: localReel.pollEndsAt
            }, void 0, false, {
                fileName: "[project]/src/components/reels/ReelCard.tsx",
                lineNumber: 304,
                columnNumber: 129
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelCard.tsx",
            lineNumber: 304,
            columnNumber: 62
        }, this);
        $[44] = localReel.pollEndsAt;
        $[45] = localReel.pollOptions;
        $[46] = localReel.pollQuestion;
        $[47] = localReel.userVotedOption;
        $[48] = reel.id;
        $[49] = t19;
    } else {
        t19 = $[49];
    }
    let t20;
    if ($[50] !== localReel.quizOptions || $[51] !== localReel.quizQuestion || $[52] !== reel.id) {
        t20 = localReel.quizQuestion && localReel.quizOptions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-1/2 left-4 right-20 -translate-y-1/2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelQuiz$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReelQuiz"], {
                reelId: reel.id,
                question: localReel.quizQuestion,
                options: localReel.quizOptions
            }, void 0, false, {
                fileName: "[project]/src/components/reels/ReelCard.tsx",
                lineNumber: 316,
                columnNumber: 129
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelCard.tsx",
            lineNumber: 316,
            columnNumber: 62
        }, this);
        $[50] = localReel.quizOptions;
        $[51] = localReel.quizQuestion;
        $[52] = reel.id;
        $[53] = t20;
    } else {
        t20 = $[53];
    }
    let t21;
    if ($[54] !== localReel.codeFileName || $[55] !== localReel.codeLanguage || $[56] !== localReel.codeSnippet) {
        t21 = localReel.codeSnippet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-20 left-4 right-20 max-h-[40vh] overflow-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelCodeSnippet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReelCodeSnippet"], {
                code: localReel.codeSnippet,
                language: localReel.codeLanguage,
                fileName: localReel.codeFileName
            }, void 0, false, {
                fileName: "[project]/src/components/reels/ReelCard.tsx",
                lineNumber: 326,
                columnNumber: 112
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelCard.tsx",
            lineNumber: 326,
            columnNumber: 36
        }, this);
        $[54] = localReel.codeFileName;
        $[55] = localReel.codeLanguage;
        $[56] = localReel.codeSnippet;
        $[57] = t21;
    } else {
        t21 = $[57];
    }
    let t22;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = ({
            "ReelCard[<ReelComments>.onClose]": ()=>setShowComments(false)
        })["ReelCard[<ReelComments>.onClose]"];
        $[58] = t22;
    } else {
        t22 = $[58];
    }
    let t23;
    if ($[59] !== reel.author.id || $[60] !== reel.id || $[61] !== showComments) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelComments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReelComments"], {
            reelId: reel.id,
            isOpen: showComments,
            onClose: t22,
            authorId: reel.author.id
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelCard.tsx",
            lineNumber: 345,
            columnNumber: 11
        }, this);
        $[59] = reel.author.id;
        $[60] = reel.id;
        $[61] = showComments;
        $[62] = t23;
    } else {
        t23 = $[62];
    }
    let t24;
    if ($[63] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = ({
            "ReelCard[<ReelShareSheet>.onClose]": ()=>setShowShare(false)
        })["ReelCard[<ReelShareSheet>.onClose]"];
        $[63] = t24;
    } else {
        t24 = $[63];
    }
    let t25;
    if ($[64] !== localReel || $[65] !== showShare) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelShareSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReelShareSheet"], {
            reel: localReel,
            isOpen: showShare,
            onClose: t24
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelCard.tsx",
            lineNumber: 364,
            columnNumber: 11
        }, this);
        $[64] = localReel;
        $[65] = showShare;
        $[66] = t25;
    } else {
        t25 = $[66];
    }
    let t26;
    if ($[67] !== t14 || $[68] !== t15 || $[69] !== t18 || $[70] !== t19 || $[71] !== t20 || $[72] !== t21 || $[73] !== t23 || $[74] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-full w-full bg-black",
            children: [
                t14,
                t15,
                t18,
                t19,
                t20,
                t21,
                t23,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/reels/ReelCard.tsx",
            lineNumber: 373,
            columnNumber: 11
        }, this);
        $[67] = t14;
        $[68] = t15;
        $[69] = t18;
        $[70] = t19;
        $[71] = t20;
        $[72] = t21;
        $[73] = t23;
        $[74] = t25;
        $[75] = t26;
    } else {
        t26 = $[75];
    }
    return t26;
}
_s(ReelCard, "DFib20Gmww0DDA3Dq6PDjTS00FY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ReelCard;
function _ReelCardHandleTap() {}
var _c;
__turbopack_context__.k.register(_c, "ReelCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/reels/ReelsFeed.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReelsFeed",
    ()=>ReelsFeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/ReelCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/reels.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function ReelsFeed(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(45);
    if ($[0] !== "a7f5f8481f889b283c46242df3eff948c6cac1e78d37e8f443509ad8c3ac36be") {
        for(let $i = 0; $i < 45; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a7f5f8481f889b283c46242df3eff948c6cac1e78d37e8f443509ad8c3ac36be";
    }
    const { mode: t1, initialReels } = t0;
    const mode = t1 === undefined ? "foryou" : t1;
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = new Map();
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t2);
    let t3;
    let t4;
    if ($[2] !== mode) {
        t3 = [
            "reels-feed",
            mode
        ];
        t4 = async (t5)=>{
            const { pageParam } = t5;
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reelsApi"].getFeed({
                cursor: pageParam,
                limit: 10,
                mode
            });
            return response;
        };
        $[2] = mode;
        $[3] = t3;
        $[4] = t4;
    } else {
        t3 = $[3];
        t4 = $[4];
    }
    let t5;
    if ($[5] !== initialReels) {
        t5 = initialReels ? {
            pages: [
                {
                    reels: initialReels,
                    nextCursor: null,
                    hasMore: false
                }
            ],
            pageParams: [
                undefined
            ]
        } : undefined;
        $[5] = initialReels;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== t3 || $[8] !== t4 || $[9] !== t5) {
        t6 = {
            queryKey: t3,
            queryFn: t4,
            getNextPageParam: _temp,
            initialPageParam: undefined,
            staleTime: 300000,
            initialData: t5
        };
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"])(t6);
    let t7;
    if ($[11] !== data?.pages) {
        t7 = data?.pages.flatMap(_ReelsFeedAnonymous) ?? [];
        $[11] = data?.pages;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    const reels = t7;
    let t8;
    let t9;
    if ($[13] !== activeIndex || $[14] !== reels) {
        t8 = ({
            "ReelsFeed[useEffect()]": ()=>{
                const preloadReels = reels.slice(activeIndex + 1, activeIndex + 4);
                preloadReels.forEach(_ReelsFeedUseEffectPreloadReelsForEach);
            }
        })["ReelsFeed[useEffect()]"];
        t9 = [
            activeIndex,
            reels
        ];
        $[13] = activeIndex;
        $[14] = reels;
        $[15] = t8;
        $[16] = t9;
    } else {
        t8 = $[15];
        t9 = $[16];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t8, t9);
    let t10;
    if ($[17] !== activeIndex || $[18] !== fetchNextPage || $[19] !== hasNextPage || $[20] !== isFetchingNextPage || $[21] !== reels.length) {
        t10 = ({
            "ReelsFeed[handleScroll]": ()=>{
                const container = containerRef.current;
                if (!container) {
                    return;
                }
                const scrollTop = container.scrollTop;
                const itemHeight = container.clientHeight;
                const newIndex = Math.round(scrollTop / itemHeight);
                if (newIndex !== activeIndex) {
                    setActiveIndex(newIndex);
                    if (newIndex >= reels.length - 3 && hasNextPage && !isFetchingNextPage) {
                        fetchNextPage();
                    }
                }
            }
        })["ReelsFeed[handleScroll]"];
        $[17] = activeIndex;
        $[18] = fetchNextPage;
        $[19] = hasNextPage;
        $[20] = isFetchingNextPage;
        $[21] = reels.length;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    const handleScroll = t10;
    let t11;
    let t12;
    if ($[23] !== handleScroll) {
        t11 = ({
            "ReelsFeed[useEffect()]": ()=>{
                const container_0 = containerRef.current;
                if (!container_0) {
                    return;
                }
                container_0.addEventListener("scroll", handleScroll, {
                    passive: true
                });
                return ()=>container_0.removeEventListener("scroll", handleScroll);
            }
        })["ReelsFeed[useEffect()]"];
        t12 = [
            handleScroll
        ];
        $[23] = handleScroll;
        $[24] = t11;
        $[25] = t12;
    } else {
        t11 = $[24];
        t12 = $[25];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t11, t12);
    let t13;
    if ($[26] !== isMuted) {
        t13 = ({
            "ReelsFeed[handleFirstInteraction]": ()=>{
                if (isMuted) {
                    setIsMuted(false);
                }
            }
        })["ReelsFeed[handleFirstInteraction]"];
        $[26] = isMuted;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    const handleFirstInteraction = t13;
    let t14;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = ({
            "ReelsFeed[handleMuteToggle]": ()=>{
                setIsMuted(_ReelsFeedHandleMuteToggleSetIsMuted);
            }
        })["ReelsFeed[handleMuteToggle]"];
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    const handleMuteToggle = t14;
    if (isLoading) {
        let t15;
        if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-screen w-full flex items-center justify-center bg-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "w-12 h-12 text-white animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/ReelsFeed.tsx",
                    lineNumber: 210,
                    columnNumber: 88
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/reels/ReelsFeed.tsx",
                lineNumber: 210,
                columnNumber: 13
            }, this);
            $[29] = t15;
        } else {
            t15 = $[29];
        }
        return t15;
    }
    if (isError) {
        let t15;
        if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-screen w-full flex flex-col items-center justify-center bg-black text-white gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Failed to load reels"
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelsFeed.tsx",
                        lineNumber: 220,
                        columnNumber: 114
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: _ReelsFeedButtonOnClick,
                        className: "px-4 py-2 bg-white text-black rounded-full font-medium",
                        children: "Retry"
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelsFeed.tsx",
                        lineNumber: 220,
                        columnNumber: 141
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reels/ReelsFeed.tsx",
                lineNumber: 220,
                columnNumber: 13
            }, this);
            $[30] = t15;
        } else {
            t15 = $[30];
        }
        return t15;
    }
    if (reels.length === 0) {
        let t15;
        if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-screen w-full flex flex-col items-center justify-center bg-black text-white gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl",
                        children: "No reels yet"
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelsFeed.tsx",
                        lineNumber: 230,
                        columnNumber: 114
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: "Be the first to create one!"
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelsFeed.tsx",
                        lineNumber: 230,
                        columnNumber: 153
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reels/ReelsFeed.tsx",
                lineNumber: 230,
                columnNumber: 13
            }, this);
            $[31] = t15;
        } else {
            t15 = $[31];
        }
        return t15;
    }
    let t15;
    if ($[32] !== activeIndex || $[33] !== isMuted || $[34] !== reels) {
        let t16;
        if ($[36] !== activeIndex || $[37] !== isMuted) {
            t16 = ({
                "ReelsFeed[reels.map()]": (reel_0, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-screen w-full snap-start snap-always",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReelCard"], {
                            reel: reel_0,
                            isActive: index === activeIndex,
                            isMuted: isMuted,
                            onMuteToggle: handleMuteToggle
                        }, void 0, false, {
                            fileName: "[project]/src/components/reels/ReelsFeed.tsx",
                            lineNumber: 242,
                            columnNumber: 126
                        }, this)
                    }, reel_0.id, false, {
                        fileName: "[project]/src/components/reels/ReelsFeed.tsx",
                        lineNumber: 242,
                        columnNumber: 54
                    }, this)
            })["ReelsFeed[reels.map()]"];
            $[36] = activeIndex;
            $[37] = isMuted;
            $[38] = t16;
        } else {
            t16 = $[38];
        }
        t15 = reels.map(t16);
        $[32] = activeIndex;
        $[33] = isMuted;
        $[34] = reels;
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    let t16;
    if ($[39] !== isFetchingNextPage) {
        t16 = isFetchingNextPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen w-full flex items-center justify-center bg-black",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "w-12 h-12 text-white animate-spin"
            }, void 0, false, {
                fileName: "[project]/src/components/reels/ReelsFeed.tsx",
                lineNumber: 260,
                columnNumber: 108
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/reels/ReelsFeed.tsx",
            lineNumber: 260,
            columnNumber: 33
        }, this);
        $[39] = isFetchingNextPage;
        $[40] = t16;
    } else {
        t16 = $[40];
    }
    let t17;
    if ($[41] !== handleFirstInteraction || $[42] !== t15 || $[43] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: "h-screen w-full snap-y snap-mandatory overflow-y-scroll scrollbar-hide",
            onClick: handleFirstInteraction,
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/reels/ReelsFeed.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[41] = handleFirstInteraction;
        $[42] = t15;
        $[43] = t16;
        $[44] = t17;
    } else {
        t17 = $[44];
    }
    return t17;
}
_s(ReelsFeed, "WLpfr8ESUiVeWggMG6xlV0GiP8I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"]
    ];
});
_c = ReelsFeed;
function _ReelsFeedButtonOnClick() {
    return window.location.reload();
}
function _ReelsFeedHandleMuteToggleSetIsMuted(prev) {
    return !prev;
}
function _ReelsFeedUseEffectPreloadReelsForEach(reel) {
    if (reel.hlsUrl) {
        fetch(reel.hlsUrl).catch(_ReelsFeedUseEffectPreloadReelsForEachAnonymous);
    }
    if (reel.thumbnailUrl) {
        const img = new Image();
        img.src = reel.thumbnailUrl;
    }
}
function _ReelsFeedUseEffectPreloadReelsForEachAnonymous() {}
function _ReelsFeedAnonymous(p) {
    return p.reels;
}
function _temp(lastPage) {
    return lastPage.nextCursor;
}
var _c;
__turbopack_context__.k.register(_c, "ReelsFeed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/reels/ReelCreate.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReelCreate",
    ()=>ReelCreate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hash.js [app-client] (ecmascript) <export default as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/reels.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ReelCreate({ onClose, initialOriginalReelId, initialResponseType, initialAudioId }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [videoPreviewUrl, setVideoPreviewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [caption, setCaption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [hashtags, setHashtags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hashtagInput, setHashtagInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [visibility, setVisibility] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('public');
    const [allowComments, setAllowComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [allowDuets, setAllowDuets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [allowStitch, setAllowStitch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [allowDownload, setAllowDownload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [allowSharing, setAllowSharing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [saveAsDraft, setSaveAsDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scheduledAt, setScheduledAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [originalReelId, setOriginalReelId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialOriginalReelId || '');
    const [responseType, setResponseType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialResponseType || '');
    const [audioId, setAudioId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialAudioId || '');
    const [codeSnippet, setCodeSnippet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [codeLanguage, setCodeLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [codeFileName, setCodeFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [repoUrl, setRepoUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showCodeSection, setShowCodeSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAdvanced, setShowAdvanced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReelCreate.useEffect": ()=>{
            const duet = searchParams.get('duet');
            const stitch = searchParams.get('stitch');
            const audio = searchParams.get('audio');
            if (duet) {
                setOriginalReelId(duet);
                setResponseType('duet');
            }
            if (stitch) {
                setOriginalReelId(stitch);
                setResponseType('stitch');
            }
            if (audio) setAudioId(audio);
        }
    }["ReelCreate.useEffect"], [
        searchParams
    ]);
    const handleFileSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReelCreate.useCallback[handleFileSelect]": (e)=>{
            const file = e.target.files?.[0];
            if (!file) return;
            if (!file.type.startsWith('video/')) {
                setError('Please select a video file');
                return;
            }
            if (file.size > 150 * 1024 * 1024) {
                setError('Video must be less than 150MB');
                return;
            }
            setSelectedFile(file);
            setVideoPreviewUrl(URL.createObjectURL(file));
            setError(null);
        }
    }["ReelCreate.useCallback[handleFileSelect]"], []);
    const handleAddHashtag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReelCreate.useCallback[handleAddHashtag]": (e_0)=>{
            if (e_0.key === 'Enter' || e_0.key === ',') {
                e_0.preventDefault();
                const tag = hashtagInput.trim().replace(/^#/, '');
                if (tag && !hashtags.includes(tag) && hashtags.length < 10) {
                    setHashtags([
                        ...hashtags,
                        tag
                    ]);
                    setHashtagInput('');
                }
            }
        }
    }["ReelCreate.useCallback[handleAddHashtag]"], [
        hashtagInput,
        hashtags
    ]);
    const handleRemoveHashtag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReelCreate.useCallback[handleRemoveHashtag]": (tag_0)=>{
            setHashtags(hashtags.filter({
                "ReelCreate.useCallback[handleRemoveHashtag]": (t)=>t !== tag_0
            }["ReelCreate.useCallback[handleRemoveHashtag]"]));
        }
    }["ReelCreate.useCallback[handleRemoveHashtag]"], [
        hashtags
    ]);
    const handleUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReelCreate.useCallback[handleUpload]": async ()=>{
            if (!selectedFile) return;
            try {
                setIsUploading(true);
                setUploadProgress(10);
                const formData = new FormData();
                formData.append('video', selectedFile);
                formData.append('title', title);
                formData.append('caption', caption);
                formData.append('hashtags', JSON.stringify(hashtags));
                formData.append('visibility', visibility);
                formData.append('allowComments', String(allowComments));
                formData.append('allowDuets', String(allowDuets));
                formData.append('allowStitch', String(allowStitch));
                formData.append('allowDownload', String(allowDownload));
                formData.append('allowSharing', String(allowSharing));
                formData.append('saveAsDraft', String(saveAsDraft));
                if (scheduledAt) formData.append('scheduledAt', scheduledAt);
                if (originalReelId) formData.append('originalReelId', originalReelId);
                if (responseType) formData.append('responseType', responseType);
                if (audioId) formData.append('audioId', audioId);
                if (codeSnippet) {
                    formData.append('codeSnippet', codeSnippet);
                    formData.append('codeLanguage', codeLanguage);
                    formData.append('codeFileName', codeFileName);
                    formData.append('repoUrl', repoUrl);
                }
                setUploadProgress(30);
                const reel = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reelsApi"].createReel(formData);
                setUploadProgress(100);
                if (saveAsDraft) {
                    router.push('/reels/drafts');
                } else {
                    router.push(`/reels/${reel.id}`);
                }
            } catch (err) {
                console.error('Upload failed:', err);
                const msg = err?.response?.data?.message || err?.response?.data?.error || err?.message;
                setError(msg || 'Failed to upload video. Please try again.');
            } finally{
                setIsUploading(false);
            }
        }
    }["ReelCreate.useCallback[handleUpload]"], [
        selectedFile,
        title,
        caption,
        hashtags,
        visibility,
        allowComments,
        allowDuets,
        allowStitch,
        allowDownload,
        allowSharing,
        codeSnippet,
        codeLanguage,
        codeFileName,
        repoUrl,
        router
    ]);
    const handleClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReelCreate.useCallback[handleClose]": ()=>{
            if (videoPreviewUrl) {
                URL.revokeObjectURL(videoPreviewUrl);
            }
            onClose?.();
        }
    }["ReelCreate.useCallback[handleClose]"], [
        videoPreviewUrl,
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white dark:bg-gray-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl mx-auto p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold",
                            children: "Create Reel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this),
                        onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                lineNumber: 147,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                            lineNumber: 146,
                            columnNumber: 23
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this),
                !selectedFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: ()=>fileInputRef.current?.click(),
                    className: "border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-2xl p-12 text-center cursor-pointer hover:border-blue-500 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                            className: "w-16 h-16 mx-auto text-gray-400 mb-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg font-medium mb-2",
                            children: "Upload a video"
                        }, void 0, false, {
                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                            lineNumber: 153,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 text-sm mb-4",
                            children: "MP4, WebM, or MOV. Max 150MB. Recommended 9:16 aspect ratio."
                        }, void 0, false, {
                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                            lineNumber: 154,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-6 py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors",
                            children: "Select file"
                        }, void 0, false, {
                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                            lineNumber: 157,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: fileInputRef,
                            type: "file",
                            accept: "video/*",
                            onChange: handleFileSelect,
                            className: "hidden"
                        }, void 0, false, {
                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                            lineNumber: 160,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                    lineNumber: 151,
                    columnNumber: 26
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-48 flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aspect-[9/16] bg-black rounded-xl overflow-hidden relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                src: videoPreviewUrl || undefined,
                                                className: "w-full h-full object-cover",
                                                controls: true,
                                                muted: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setSelectedFile(null);
                                                    if (videoPreviewUrl) {
                                                        URL.revokeObjectURL(videoPreviewUrl);
                                                        setVideoPreviewUrl(null);
                                                    }
                                                },
                                                className: "absolute top-2 right-2 p-1 bg-black/50 rounded-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "w-4 h-4 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                lineNumber: 166,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                        lineNumber: 164,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium mb-1",
                                                    children: "Title (optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: title,
                                                    onChange: (e_1)=>setTitle(e_1.target.value),
                                                    placeholder: "Add a title...",
                                                    className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium mb-1",
                                                    children: "Caption"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: caption,
                                                    onChange: (e_2)=>setCaption(e_2.target.value),
                                                    placeholder: "Write a caption... Use @mentions and #hashtags",
                                                    rows: 3,
                                                    maxLength: 2200,
                                                    className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-right text-sm text-gray-500 mt-1",
                                                    children: [
                                                        caption.length,
                                                        "/2200"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"], {
                                                            className: "w-4 h-4 inline mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                            lineNumber: 194,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Hashtags"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2 mb-2",
                                                    children: hashtags.map((tag_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm flex items-center gap-1",
                                                            children: [
                                                                "#",
                                                                tag_1,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleRemoveHashtag(tag_1),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                                        lineNumber: 201,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                                    lineNumber: 200,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, tag_1, true, {
                                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 44
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: hashtagInput,
                                                    onChange: (e_3)=>setHashtagInput(e_3.target.value),
                                                    onKeyDown: handleAddHashtag,
                                                    placeholder: "Add hashtags (press Enter)",
                                                    disabled: hashtags.length >= 10,
                                                    className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                            className: "w-4 h-4 inline mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Visibility"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: visibility,
                                                    onChange: (e_4)=>setVisibility(e_4.target.value),
                                                    className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 outline-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "public",
                                                            children: "Public - Anyone can view"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "connections",
                                                            children: "Connections - Only connections can view"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "private",
                                                            children: "Private - Only you can view"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                            lineNumber: 216,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                            lineNumber: 208,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center gap-2 cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: saveAsDraft,
                                                            onChange: (e_5)=>setSaveAsDraft(e_5.target.checked),
                                                            className: "rounded"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Save as draft"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                            lineNumber: 224,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 19
                                                }, this),
                                                !saveAsDraft && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2 text-sm mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                                    lineNumber: 228,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Schedule for later"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                            lineNumber: 227,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "datetime-local",
                                                            value: scheduledAt,
                                                            onChange: (e_6)=>setScheduledAt(e_6.target.value),
                                                            min: new Date().toISOString().slice(0, 16),
                                                            className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 36
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                            lineNumber: 220,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                            lineNumber: 162,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowCodeSection(!showCodeSection),
                            className: "flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                    lineNumber: 238,
                                    columnNumber: 15
                                }, this),
                                showCodeSection ? 'Hide code snippet' : 'Add code snippet (for dev reels)',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 transition-transform", showCodeSection && "rotate-180")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                    lineNumber: 240,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                            lineNumber: 237,
                            columnNumber: 13
                        }, this),
                        showCodeSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            children: "Code"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                            lineNumber: 245,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: codeSnippet,
                                            onChange: (e_7)=>setCodeSnippet(e_7.target.value),
                                            placeholder: "Paste your code here...",
                                            rows: 6,
                                            className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 font-mono text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                            lineNumber: 246,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                    lineNumber: 244,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium mb-1",
                                                    children: "Language"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: codeLanguage,
                                                    onChange: (e_8)=>setCodeLanguage(e_8.target.value),
                                                    placeholder: "e.g., JavaScript",
                                                    className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                            lineNumber: 249,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium mb-1",
                                                    children: "File name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: codeFileName,
                                                    onChange: (e_9)=>setCodeFileName(e_9.target.value),
                                                    placeholder: "e.g., app.js",
                                                    className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                            lineNumber: 253,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                    lineNumber: 248,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            children: "Repository URL (optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                            lineNumber: 259,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "url",
                                            value: repoUrl,
                                            onChange: (e_10)=>setRepoUrl(e_10.target.value),
                                            placeholder: "https://github.com/...",
                                            className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                            lineNumber: 260,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                    lineNumber: 258,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                            lineNumber: 243,
                            columnNumber: 33
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowAdvanced(!showAdvanced),
                            className: "flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700",
                            children: [
                                "Advanced settings",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 transition-transform", showAdvanced && "rotate-180")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                    lineNumber: 266,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                            lineNumber: 264,
                            columnNumber: 13
                        }, this),
                        showAdvanced && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center justify-between cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 21
                                                }, this),
                                                "Allow comments"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                            lineNumber: 271,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: allowComments,
                                            onChange: (e_11)=>setAllowComments(e_11.target.checked),
                                            className: "w-5 h-5 rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                            lineNumber: 275,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                    lineNumber: 270,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center justify-between cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 21
                                                }, this),
                                                "Allow duets"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                            lineNumber: 278,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: allowDuets,
                                            onChange: (e_12)=>setAllowDuets(e_12.target.checked),
                                            className: "w-5 h-5 rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                            lineNumber: 282,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                    lineNumber: 277,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center justify-between cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 21
                                                }, this),
                                                "Allow stitch"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                            lineNumber: 285,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: allowStitch,
                                            onChange: (e_13)=>setAllowStitch(e_13.target.checked),
                                            className: "w-5 h-5 rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                            lineNumber: 289,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                    lineNumber: 284,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center justify-between cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 21
                                                }, this),
                                                "Allow download"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                            lineNumber: 292,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: allowDownload,
                                            onChange: (e_14)=>setAllowDownload(e_14.target.checked),
                                            className: "w-5 h-5 rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                            lineNumber: 296,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                    lineNumber: 291,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center justify-between cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 21
                                                }, this),
                                                "Allow sharing"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                            lineNumber: 299,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: allowSharing,
                                            onChange: (e_15)=>setAllowSharing(e_15.target.checked),
                                            className: "w-5 h-5 rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                            lineNumber: 303,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                    lineNumber: 298,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                            lineNumber: 269,
                            columnNumber: 30
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                            lineNumber: 307,
                            columnNumber: 23
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleClose,
                                    className: "flex-1 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                    lineNumber: 312,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleUpload,
                                    disabled: isUploading,
                                    className: "flex-1 px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                                    children: isUploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "w-5 h-5 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                                lineNumber: 317,
                                                columnNumber: 21
                                            }, this),
                                            "Uploading... ",
                                            uploadProgress,
                                            "%"
                                        ]
                                    }, void 0, true) : 'Post'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                                    lineNumber: 315,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/reels/ReelCreate.tsx",
                            lineNumber: 311,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/reels/ReelCreate.tsx",
                    lineNumber: 161,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/reels/ReelCreate.tsx",
            lineNumber: 143,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/reels/ReelCreate.tsx",
        lineNumber: 142,
        columnNumber: 10
    }, this);
}
_s(ReelCreate, "6SRq5kqx3AIAE8ILjt73webq0/g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = ReelCreate;
var _c;
__turbopack_context__.k.register(_c, "ReelCreate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/reels/ReelEdit.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReelEdit",
    ()=>ReelEdit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hash.js [app-client] (ecmascript) <export default as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/reels.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$MentionInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/MentionInput.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ReelEdit({ reel, isOpen, onClose, onSave }) {
    _s();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(reel.title || '');
    const [caption, setCaption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(reel.caption || '');
    const [mentions, setMentions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(reel.mentions || []);
    const [hashtags, setHashtags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(reel.hashtags || []);
    const [hashtagInput, setHashtagInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [visibility, setVisibility] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(reel.visibility || 'public');
    const [allowComments, setAllowComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(reel.allowComments);
    const [allowDuets, setAllowDuets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(reel.allowDuets);
    const [allowStitch, setAllowStitch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(reel.allowStitch);
    const [allowDownload, setAllowDownload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(reel.allowDownload);
    const [allowSharing, setAllowSharing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(reel.allowSharing);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReelEdit.useEffect": ()=>{
            if (isOpen) {
                setTitle(reel.title || '');
                setCaption(reel.caption || '');
                setMentions(reel.mentions || []);
                setHashtags(reel.hashtags || []);
                setVisibility(reel.visibility || 'public');
                setAllowComments(reel.allowComments);
                setAllowDuets(reel.allowDuets);
                setAllowStitch(reel.allowStitch);
                setAllowDownload(reel.allowDownload);
                setAllowSharing(reel.allowSharing);
                setError(null);
            }
        }
    }["ReelEdit.useEffect"], [
        isOpen,
        reel
    ]);
    const handleCaptionChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReelEdit.useCallback[handleCaptionChange]": (value, extractedMentions)=>{
            setCaption(value);
            setMentions(extractedMentions);
        }
    }["ReelEdit.useCallback[handleCaptionChange]"], []);
    const addHashtag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReelEdit.useCallback[addHashtag]": ()=>{
            const tag = hashtagInput.trim().replace(/^#/, '');
            if (tag && !hashtags.includes(tag)) {
                setHashtags([
                    ...hashtags,
                    tag
                ]);
                setHashtagInput('');
            }
        }
    }["ReelEdit.useCallback[addHashtag]"], [
        hashtagInput,
        hashtags
    ]);
    const removeHashtag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReelEdit.useCallback[removeHashtag]": (tag_0)=>{
            setHashtags(hashtags.filter({
                "ReelEdit.useCallback[removeHashtag]": (h)=>h !== tag_0
            }["ReelEdit.useCallback[removeHashtag]"]));
        }
    }["ReelEdit.useCallback[removeHashtag]"], [
        hashtags
    ]);
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReelEdit.useCallback[handleKeyDown]": (e)=>{
            if (e.key === 'Enter' || e.key === ',') {
                e.preventDefault();
                addHashtag();
            }
        }
    }["ReelEdit.useCallback[handleKeyDown]"], [
        addHashtag
    ]);
    const handleSave = async ()=>{
        try {
            setIsSaving(true);
            setError(null);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$reels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reelsApi"].updateReel(reel.id, {
                title: title || null,
                caption: caption || null,
                mentions,
                hashtags,
                visibility,
                allowComments,
                allowDuets,
                allowStitch,
                allowDownload,
                allowSharing
            });
            onSave(response.data);
            onClose();
        } catch (err) {
            console.error('Failed to update reel:', err);
            setError('Failed to save changes. Please try again.');
        } finally{
            setIsSaving(false);
        }
    };
    if (!isOpen) return null;
    const visibilityOptions = [
        {
            value: 'public',
            label: 'Public',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
            description: 'Anyone can see this reel'
        },
        {
            value: 'followers',
            label: 'Followers',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            description: 'Only your followers can see'
        },
        {
            value: 'private',
            label: 'Private',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
            description: 'Only you can see'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-2xl max-h-[90vh] bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden flex flex-col m-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-neutral-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-gray-900 dark:text-white",
                                children: "Edit Reel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-4 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-24 h-36 bg-neutral-800 rounded-lg overflow-hidden flex-shrink-0",
                                        children: reel.thumbnailUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: reel.thumbnailUrl,
                                            alt: "",
                                            width: 96,
                                            height: 144,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                            lineNumber: 128,
                                            columnNumber: 36
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                                                className: "w-8 h-8 text-neutral-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                lineNumber: 129,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                            lineNumber: 128,
                                            columnNumber: 142
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 dark:text-gray-400 mb-1",
                                                children: [
                                                    reel.viewsCount.toLocaleString(),
                                                    " views · ",
                                                    reel.likesCount.toLocaleString(),
                                                    " likes"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                lineNumber: 133,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 dark:text-gray-400",
                                                children: [
                                                    "Posted ",
                                                    new Date(reel.createdAt).toLocaleDateString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                lineNumber: 136,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-600 dark:text-red-400 text-sm",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                lineNumber: 142,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Title (optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: title,
                                        onChange: (e_0)=>setTitle(e_0.target.value),
                                        placeholder: "Add a title...",
                                        maxLength: 100,
                                        className: "w-full px-4 py-3 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Caption"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-3 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$MentionInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MentionInput"], {
                                            value: caption,
                                            onChange: handleCaptionChange,
                                            placeholder: "Write a caption... Use @ to mention people",
                                            className: "min-h-[100px] text-gray-900 dark:text-white",
                                            maxLength: 2200
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: [
                                            caption.length,
                                            "/2200"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Hashtags"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2 mb-2",
                                        children: hashtags.map((tag_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 19
                                                    }, this),
                                                    tag_1,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>removeHashtag(tag_1),
                                                        className: "ml-1 hover:text-blue-800 dark:hover:text-blue-300",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, tag_1, true, {
                                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                lineNumber: 171,
                                                columnNumber: 38
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                        lineNumber: 170,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: hashtagInput,
                                                onChange: (e_1)=>setHashtagInput(e_1.target.value),
                                                onKeyDown: handleKeyDown,
                                                placeholder: "Add hashtag...",
                                                className: "flex-1 px-4 py-2 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                lineNumber: 180,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: addHashtag,
                                                disabled: !hashtagInput.trim(),
                                                className: "px-4 py-2 bg-blue-500 text-white rounded-xl font-medium disabled:opacity-50 hover:bg-blue-600",
                                                children: "Add"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                lineNumber: 181,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Visibility"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                        lineNumber: 189,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: visibilityOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setVisibility(option.value),
                                                className: `w-full flex items-center gap-3 p-3 rounded-xl border transition-colors ${visibility === option.value ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-neutral-700 hover:border-gray-300 dark:hover:border-neutral-600'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(option.icon, {
                                                        className: `w-5 h-5 ${visibility === option.value ? 'text-blue-500' : 'text-gray-500'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-left",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `font-medium ${visibility === option.value ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'}`,
                                                                children: option.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                                lineNumber: 196,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-500",
                                                                children: option.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                                lineNumber: 199,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, option.value, true, {
                                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                lineNumber: 193,
                                                columnNumber: 48
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Interaction Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center justify-between p-3 bg-gray-50 dark:bg-neutral-800 rounded-xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                                className: "w-5 h-5 text-gray-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                                lineNumber: 213,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-900 dark:text-white",
                                                                children: "Allow comments"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                                lineNumber: 214,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: allowComments,
                                                        onChange: (e_2)=>setAllowComments(e_2.target.checked),
                                                        className: "w-5 h-5 text-blue-500 rounded focus:ring-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                lineNumber: 211,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center justify-between p-3 bg-gray-50 dark:bg-neutral-800 rounded-xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                                                                className: "w-5 h-5 text-gray-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                                lineNumber: 221,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-900 dark:text-white",
                                                                children: "Allow duets"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                                lineNumber: 222,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: allowDuets,
                                                        onChange: (e_3)=>setAllowDuets(e_3.target.checked),
                                                        className: "w-5 h-5 text-blue-500 rounded focus:ring-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                lineNumber: 219,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center justify-between p-3 bg-gray-50 dark:bg-neutral-800 rounded-xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                                                className: "w-5 h-5 text-gray-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                                lineNumber: 229,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-900 dark:text-white",
                                                                children: "Allow sharing"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                                lineNumber: 230,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: allowSharing,
                                                        onChange: (e_4)=>setAllowSharing(e_4.target.checked),
                                                        className: "w-5 h-5 text-blue-500 rounded focus:ring-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                lineNumber: 227,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center justify-between p-3 bg-gray-50 dark:bg-neutral-800 rounded-xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                className: "w-5 h-5 text-gray-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                                lineNumber: 237,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-900 dark:text-white",
                                                                children: "Allow downloads"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                                lineNumber: 238,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: allowDownload,
                                                        onChange: (e_5)=>setAllowDownload(e_5.target.checked),
                                                        className: "w-5 h-5 text-blue-500 rounded focus:ring-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                                lineNumber: 235,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-end gap-3 p-4 border-t border-gray-200 dark:border-neutral-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "px-6 py-2.5 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-xl transition-colors",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                lineNumber: 248,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSave,
                                disabled: isSaving,
                                className: "px-6 py-2.5 bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-600 disabled:opacity-50 flex items-center gap-2",
                                children: isSaving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-4 h-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                            lineNumber: 253,
                                            columnNumber: 17
                                        }, this),
                                        "Saving..."
                                    ]
                                }, void 0, true) : 'Save Changes'
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reels/ReelEdit.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reels/ReelEdit.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/reels/ReelEdit.tsx",
        lineNumber: 111,
        columnNumber: 10
    }, this);
}
_s(ReelEdit, "q9m/9tgj6CrNFAqKPZ4QoR9xFos=");
_c = ReelEdit;
var _c;
__turbopack_context__.k.register(_c, "ReelEdit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/reels/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelsFeed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/ReelsFeed.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/ReelCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/ReelPlayer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelActions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/ReelActions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/ReelInfo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelComments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/ReelComments.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelShareSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/ReelShareSheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelPoll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/ReelPoll.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelQuiz$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/ReelQuiz.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelCodeSnippet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/ReelCodeSnippet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelCreate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/ReelCreate.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelEdit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/ReelEdit.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$MentionInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/MentionInput.tsx [app-client] (ecmascript)");
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
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/reels/trending/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrendingReelsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$reels$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/hooks/reels/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$reels$2f$useReelsFeed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/reels/useReelsFeed.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/reels/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/ReelCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function TrendingReelsPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "d047b7c6720ad503a6be3cbce97687664db3b01cde6ea7fa4aa80c239988dec0") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d047b7c6720ad503a6be3cbce97687664db3b01cde6ea7fa4aa80c239988dec0";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { reels, isLoading, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$reels$2f$useReelsFeed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTrendingReels"])(24);
    let t0;
    if ($[1] !== activeIndex) {
        t0 = ({
            "TrendingReelsPage[handleScroll]": (e)=>{
                const container = e.currentTarget;
                const scrollTop = container.scrollTop;
                const itemHeight = container.clientHeight;
                const newIndex = Math.round(scrollTop / itemHeight);
                if (newIndex !== activeIndex) {
                    setActiveIndex(newIndex);
                }
            }
        })["TrendingReelsPage[handleScroll]"];
        $[1] = activeIndex;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const handleScroll = t0;
    if (isLoading) {
        let t1;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-screen w-full flex items-center justify-center bg-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "w-12 h-12 text-white animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/app/reels/trending/page.tsx",
                    lineNumber: 47,
                    columnNumber: 87
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/reels/trending/page.tsx",
                lineNumber: 47,
                columnNumber: 12
            }, this);
            $[3] = t1;
        } else {
            t1 = $[3];
        }
        return t1;
    }
    if (isError) {
        let t1;
        if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-screen w-full flex flex-col items-center justify-center bg-black text-white gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Failed to load trending reels"
                    }, void 0, false, {
                        fileName: "[project]/src/app/reels/trending/page.tsx",
                        lineNumber: 57,
                        columnNumber: 113
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: _TrendingReelsPageButtonOnClick,
                        className: "px-4 py-2 bg-white text-black rounded-full font-medium",
                        children: "Retry"
                    }, void 0, false, {
                        fileName: "[project]/src/app/reels/trending/page.tsx",
                        lineNumber: 57,
                        columnNumber: 149
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/reels/trending/page.tsx",
                lineNumber: 57,
                columnNumber: 12
            }, this);
            $[4] = t1;
        } else {
            t1 = $[4];
        }
        return t1;
    }
    if (reels.length === 0) {
        let t1;
        if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xl",
                children: "No trending reels"
            }, void 0, false, {
                fileName: "[project]/src/app/reels/trending/page.tsx",
                lineNumber: 67,
                columnNumber: 12
            }, this);
            $[5] = t1;
        } else {
            t1 = $[5];
        }
        let t2;
        if ($[6] !== router) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-screen w-full flex flex-col items-center justify-center bg-black text-white gap-4",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "TrendingReelsPage[<button>.onClick]": ()=>router.push("/reels")
                        }["TrendingReelsPage[<button>.onClick]"],
                        className: "px-6 py-2 bg-white text-black rounded-full font-medium",
                        children: "Go to Reels"
                    }, void 0, false, {
                        fileName: "[project]/src/app/reels/trending/page.tsx",
                        lineNumber: 74,
                        columnNumber: 117
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/reels/trending/page.tsx",
                lineNumber: 74,
                columnNumber: 12
            }, this);
            $[6] = router;
            $[7] = t2;
        } else {
            t2 = $[7];
        }
        return t2;
    }
    let t1;
    if ($[8] !== router) {
        t1 = ({
            "TrendingReelsPage[<button>.onClick]": ()=>router.back()
        })["TrendingReelsPage[<button>.onClick]"];
        $[8] = router;
        $[9] = t1;
    } else {
        t1 = $[9];
    }
    let t2;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/src/app/reels/trending/page.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    let t3;
    if ($[11] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t1,
            className: "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/app/reels/trending/page.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[11] = t1;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    let t4;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-white text-xl font-bold",
            children: "Trending Reels"
        }, void 0, false, {
            fileName: "[project]/src/app/reels/trending/page.tsx",
            lineNumber: 111,
            columnNumber: 10
        }, this);
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    let t5;
    if ($[14] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 left-0 right-0 z-20 pt-4 px-4 pb-2 bg-gradient-to-b from-black/80 to-transparent",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    t3,
                    t4
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/reels/trending/page.tsx",
                lineNumber: 118,
                columnNumber: 123
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/reels/trending/page.tsx",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        $[14] = t3;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    let t6;
    if ($[16] !== activeIndex || $[17] !== isMuted || $[18] !== reels) {
        let t7;
        if ($[20] !== activeIndex || $[21] !== isMuted) {
            t7 = ({
                "TrendingReelsPage[reels.map()]": (reel, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-screen w-full snap-start snap-always",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReelCard"], {
                            reel: reel,
                            isActive: index === activeIndex,
                            isMuted: isMuted,
                            onMuteToggle: {
                                "TrendingReelsPage[reels.map() > <ReelCard>.onMuteToggle]": ()=>setIsMuted(!isMuted)
                            }["TrendingReelsPage[reels.map() > <ReelCard>.onMuteToggle]"]
                        }, void 0, false, {
                            fileName: "[project]/src/app/reels/trending/page.tsx",
                            lineNumber: 129,
                            columnNumber: 130
                        }, this)
                    }, reel.id, false, {
                        fileName: "[project]/src/app/reels/trending/page.tsx",
                        lineNumber: 129,
                        columnNumber: 60
                    }, this)
            })["TrendingReelsPage[reels.map()]"];
            $[20] = activeIndex;
            $[21] = isMuted;
            $[22] = t7;
        } else {
            t7 = $[22];
        }
        t6 = reels.map(t7);
        $[16] = activeIndex;
        $[17] = isMuted;
        $[18] = reels;
        $[19] = t6;
    } else {
        t6 = $[19];
    }
    let t7;
    if ($[23] !== handleScroll || $[24] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen w-full snap-y snap-mandatory overflow-y-scroll scrollbar-hide",
            onScroll: handleScroll,
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/app/reels/trending/page.tsx",
            lineNumber: 149,
            columnNumber: 10
        }, this);
        $[23] = handleScroll;
        $[24] = t6;
        $[25] = t7;
    } else {
        t7 = $[25];
    }
    let t8;
    if ($[26] !== t5 || $[27] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-screen w-full bg-black",
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/reels/trending/page.tsx",
            lineNumber: 158,
            columnNumber: 10
        }, this);
        $[26] = t5;
        $[27] = t7;
        $[28] = t8;
    } else {
        t8 = $[28];
    }
    return t8;
}
_s(TrendingReelsPage, "PVwHqnce3sh6K2zkxolf19xUGbQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$reels$2f$useReelsFeed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTrendingReels"]
    ];
});
_c = TrendingReelsPage;
function _TrendingReelsPageButtonOnClick() {
    return window.location.reload();
}
var _c;
__turbopack_context__.k.register(_c, "TrendingReelsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_8439784c._.js.map