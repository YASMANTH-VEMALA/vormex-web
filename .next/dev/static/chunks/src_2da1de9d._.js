(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_URL",
    ()=>API_URL,
    "BACKEND_ORIGIN",
    ()=>BACKEND_ORIGIN,
    "GOOGLE_CLIENT_ID",
    ()=>GOOGLE_CLIENT_ID
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function normalizeApiUrl(input) {
    const trimmed = input.trim().replace(/\/+$/, '');
    return trimmed.endsWith('/api') ? trimmed : `${trimmed}/api`;
}
function resolveApiUrl() {
    const publicApiUrl = ("TURBOPACK compile-time value", "https://vormex-backend.onrender.com/api");
    if ("TURBOPACK compile-time truthy", 1) {
        return normalizeApiUrl(publicApiUrl);
    }
    //TURBOPACK unreachable
    ;
    const publicBackendUrl = undefined;
}
const API_URL = resolveApiUrl();
const BACKEND_ORIGIN = API_URL.replace(/\/api$/, '');
const GOOGLE_CLIENT_ID = ("TURBOPACK compile-time value", "562328294412-3qt2hj14q8c43nhjimqevhdopecvp04b.apps.googleusercontent.com") || '';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/auth/authHelpers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPendingUser",
    ()=>getPendingUser,
    "getToken",
    ()=>getToken,
    "removeToken",
    ()=>removeToken,
    "setPendingUser",
    ()=>setPendingUser,
    "setToken",
    ()=>setToken
]);
const TOKEN_KEY = 'authToken';
const PENDING_USER_KEY = 'auth_user_pending';
function getToken() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return localStorage.getItem(TOKEN_KEY);
}
function setToken(token) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(TOKEN_KEY, token);
}
function removeToken() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.removeItem(TOKEN_KEY);
}
function setPendingUser(user) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        sessionStorage.setItem(PENDING_USER_KEY, JSON.stringify(user));
    } catch (_) {}
}
function getPendingUser() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = sessionStorage.getItem(PENDING_USER_KEY);
        if (!raw) return null;
        const user = JSON.parse(raw);
        sessionStorage.removeItem(PENDING_USER_KEY);
        return user;
    } catch (_) {
        return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$authHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/authHelpers.ts [app-client] (ecmascript)");
;
;
;
;
// Create axios instance with base configuration
const apiClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_URL"],
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});
// Request interceptor: Add auth token to requests
apiClient.interceptors.request.use((config)=>{
    // Get token from cookies (for backward compatibility) or localStorage
    if ("TURBOPACK compile-time truthy", 1) {
        const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('authToken') || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$authHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getToken"])();
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    // Remove Content-Type for FormData - let browser set it with boundary
    if (config.data instanceof FormData) {
        delete config.headers['Content-Type'];
    }
    return config;
}, (error)=>{
    return Promise.reject(error);
});
// Response interceptor: Handle responses and errors
apiClient.interceptors.response.use((response)=>{
    // Return response data directly
    return response.data;
}, (error)=>{
    const status = error.response?.status;
    const url = error.config?.url || '';
    // Handle 401 Unauthorized or 404 on auth/me (user not found after db reset)
    if (status === 401 || status === 404 && url.includes('/auth/me')) {
        // Remove token from both cookies and localStorage
        if ("TURBOPACK compile-time truthy", 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('authToken');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$authHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeToken"])();
            // Only redirect if not already on login page and not during auth request
            const currentPath = window.location.pathname;
            const isAuthPage = currentPath === '/login';
            const isAuthRequest = url.includes('/auth/login') || url.includes('/auth/register');
            if (!isAuthPage && !isAuthRequest) {
                window.location.href = '/login';
            }
        }
    }
    // Handle 403 Forbidden (email not verified)
    if (status === 403) {
    // Let the component handle this error
    }
    // Return rejected promise with error
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = apiClient;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api/auth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authAPI",
    ()=>authAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/client.ts [app-client] (ecmascript)");
;
const authAPI = {
    register: async (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/auth/register', data);
    },
    login: async (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/auth/login', data);
    },
    getCurrentUser: async ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/auth/me');
    },
    googleSignIn: async (idToken)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/auth/google', {
            idToken
        });
    },
    forgotPassword: async (email)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/auth/forgot-password', {
            email
        });
    },
    resetPassword: async (token, newPassword)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/auth/reset-password?token=${token}`, {
            newPassword
        });
    },
    verifyEmail: async (token)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/auth/verify-email?token=${token}`);
    },
    resendVerification: async (email)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/auth/resend-verification', {
            email
        });
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils/errorHandler.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleApiError",
    ()=>handleApiError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/axios/index.js [app-client] (ecmascript) <locals>");
;
function handleApiError(error) {
    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
        const apiError = error.response?.data;
        if (apiError?.error) {
            return apiError.error;
        }
        if (error.response?.status === 401) {
            return 'Unauthorized. Please login again.';
        }
        if (error.response?.status === 403) {
            return 'Email verification required. Please check your inbox.';
        }
        if (error.response?.status === 404) {
            return 'Resource not found.';
        }
        if (error.response?.status === 500) {
            return 'Server error. Please try again later.';
        }
        return error.message || 'An unexpected error occurred';
    }
    if (error instanceof Error) {
        return error.message;
    }
    return 'An unexpected error occurred';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/auth/authContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuthContext",
    ()=>useAuthContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$authHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/authHelpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/errorHandler.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [token, setTokenState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Initialize auth state from storage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const initAuth = {
                "AuthProvider.useEffect.initAuth": async ()=>{
                    try {
                        const storedToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('authToken') || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$authHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getToken"])();
                        if (storedToken) {
                            setTokenState(storedToken);
                            const pendingUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$authHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPendingUser"])();
                            if (pendingUser) {
                                setUser(pendingUser);
                                setLoading(false);
                                return;
                            }
                            try {
                                const userData = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authAPI"].getCurrentUser();
                                setUser(userData);
                            } catch (error_0) {
                                const status = error_0.response?.status;
                                if (status === 401 || status === 404 || status === 403) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('authToken');
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$authHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeToken"])();
                                    setTokenState(null);
                                    setUser(null);
                                }
                            }
                        }
                    } catch (error) {
                        console.error('Error initializing auth:', error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["AuthProvider.useEffect.initAuth"];
            initAuth();
        }
    }["AuthProvider.useEffect"], []);
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[login]": async (credentials)=>{
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authAPI"].login(credentials);
                // Store token in both cookie and localStorage
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set('authToken', response.token, {
                    expires: 7,
                    secure: ("TURBOPACK compile-time value", "development") === 'production',
                    sameSite: 'strict'
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$authHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setToken"])(response.token);
                setUser(response.user);
                setTokenState(response.token);
            } catch (error_1) {
                throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error_1));
            }
        }
    }["AuthProvider.useCallback[login]"], []);
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[register]": async (data)=>{
            try {
                const response_0 = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authAPI"].register(data);
                // Store token in both cookie and localStorage
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set('authToken', response_0.token, {
                    expires: 7,
                    secure: ("TURBOPACK compile-time value", "development") === 'production',
                    sameSite: 'strict'
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$authHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setToken"])(response_0.token);
                setUser(response_0.user);
                setTokenState(response_0.token);
                return response_0;
            } catch (error_2) {
                throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error_2));
            }
        }
    }["AuthProvider.useCallback[register]"], []);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[logout]": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('authToken');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$authHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeToken"])();
            setUser(null);
            setTokenState(null);
        }
    }["AuthProvider.useCallback[logout]"], []);
    const setAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[setAuth]": (response_1)=>{
            // Store token in both cookie and localStorage
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set('authToken', response_1.token, {
                expires: 7,
                secure: ("TURBOPACK compile-time value", "development") === 'production',
                sameSite: 'strict'
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$authHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setToken"])(response_1.token);
            setUser(response_1.user);
            setTokenState(response_1.token);
        }
    }["AuthProvider.useCallback[setAuth]"], []);
    const updateUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[updateUser]": (updatedUser)=>{
            setUser(updatedUser);
        }
    }["AuthProvider.useCallback[updateUser]"], []);
    const value = {
        user,
        token,
        loading,
        isAuthenticated: !!token && !!user,
        // Authenticated only when both token and user exist
        login,
        logout,
        register,
        setAuth,
        updateUser
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/lib/auth/authContext.tsx",
        lineNumber: 132,
        columnNumber: 10
    }, this);
}
_s(AuthProvider, "Ps5R11PpXOWj5TzLgQ4Kvxt1u/8=");
_c = AuthProvider;
function useAuthContext() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "da1121acad19994f5ad8926454d8471d7ea1e86083cadab995ae61f1e1d62af4") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "da1121acad19994f5ad8926454d8471d7ea1e86083cadab995ae61f1e1d62af4";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
}
_s1(useAuthContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ThemeProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
'use client';
;
;
;
function ThemeProvider(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "092a6aec5fe3956de1b2cdb1630f081eec5494b0d217a5de9409576ea3f4b2b2") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "092a6aec5fe3956de1b2cdb1630f081eec5494b0d217a5de9409576ea3f4b2b2";
    }
    let children;
    let props;
    if ($[1] !== t0) {
        ({ children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = props;
    } else {
        children = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== children || $[5] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ThemeProvider.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[4] = children;
        $[5] = props;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    return t1;
}
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/providers/QueryProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryProvider",
    ()=>QueryProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function QueryProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "c9c83acb715dad7987dc1cb744015bdb21d45316985a366ed6d567fe954a78d5") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c9c83acb715dad7987dc1cb744015bdb21d45316985a366ed6d567fe954a78d5";
    }
    const { children } = t0;
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(_QueryProviderUseState);
    let t1;
    if ($[1] !== children || $[2] !== queryClient) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
            client: queryClient,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/providers/QueryProvider.tsx",
            lineNumber: 20,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = queryClient;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    return t1;
}
_s(QueryProvider, "0C9cZBrJebEGOHgNahhDk1PI7/o=");
_c = QueryProvider;
function _QueryProviderUseState() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
        defaultOptions: {
            queries: {
                staleTime: 300000,
                gcTime: 600000
            }
        }
    });
}
var _c;
__turbopack_context__.k.register(_c, "QueryProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/socket.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Socket.IO Client for Real-time Features
__turbopack_context__.s([
    "createComment",
    ()=>createComment,
    "createReelComment",
    ()=>createReelComment,
    "default",
    ()=>__TURBOPACK__default__export__,
    "deleteChatMessage",
    ()=>deleteChatMessage,
    "disconnectSocket",
    ()=>disconnectSocket,
    "editChatMessage",
    ()=>editChatMessage,
    "getSocket",
    ()=>getSocket,
    "initializeSocket",
    ()=>initializeSocket,
    "joinChatRoom",
    ()=>joinChatRoom,
    "joinPostRoom",
    ()=>joinPostRoom,
    "joinReelRoom",
    ()=>joinReelRoom,
    "leaveChatRoom",
    ()=>leaveChatRoom,
    "leavePostRoom",
    ()=>leavePostRoom,
    "leaveReelRoom",
    ()=>leaveReelRoom,
    "likeComment",
    ()=>likeComment,
    "likePost",
    ()=>likePost,
    "likeReel",
    ()=>likeReel,
    "markChatAsRead",
    ()=>markChatAsRead,
    "reactToChatMessage",
    ()=>reactToChatMessage,
    "reactToPost",
    ()=>reactToPost,
    "removeSocketHandlers",
    ()=>removeSocketHandlers,
    "sendChatMessage",
    ()=>sendChatMessage,
    "sendChatTyping",
    ()=>sendChatTyping,
    "sendTypingIndicator",
    ()=>sendTypingIndicator,
    "updateLocation",
    ()=>updateLocation,
    "votePoll",
    ()=>votePoll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$authHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/authHelpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/constants.ts [app-client] (ecmascript)");
;
;
;
const SOCKET_URL = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BACKEND_ORIGIN"];
let socket = null;
function initializeSocket(handlers) {
    // If socket exists and is connected, just register new handlers
    if (socket?.connected) {
        console.log('Socket already connected, registering handlers');
        if (handlers) {
            registerSocketHandlers(socket, handlers);
        }
        return socket;
    }
    // If socket exists but disconnected, clean it up
    if (socket) {
        socket.removeAllListeners();
        socket.disconnect();
        socket = null;
    }
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$authHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getToken"])();
    if (!token) {
        console.warn('⚠️ No auth token found, socket connection may fail');
    }
    socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(SOCKET_URL, {
        auth: {
            token
        },
        transports: [
            'websocket',
            'polling'
        ],
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1000
    });
    // Register handlers if provided
    if (handlers) {
        registerSocketHandlers(socket, handlers);
    }
    return socket;
}
/**
 * Register event handlers on an existing socket connection
 */ function registerSocketHandlers(sock, handlers) {
    // Connection events
    if (handlers.onConnect) {
        sock.off('connect'); // Remove previous handler
        sock.on('connect', ()=>{
            console.log('✅ Socket connected:', sock?.id);
            handlers.onConnect?.();
        });
    }
    if (handlers.onDisconnect) {
        sock.off('disconnect');
        sock.on('disconnect', (reason)=>{
            console.log('❌ Socket disconnected:', reason);
            handlers.onDisconnect?.();
        });
    }
    sock.off('connect_error');
    sock.on('connect_error', (error)=>{
        console.error('Socket connection error:', error);
    });
    if (handlers.onError) {
        sock.off('error');
        sock.on('error', (error)=>{
            console.error('Socket error:', error);
            handlers.onError?.(error);
        });
    }
    // Post events - use addListener to allow multiple handlers
    if (handlers.onPostCreated) {
        sock.on('post:created', handlers.onPostCreated);
    }
    if (handlers.onPostLiked) {
        sock.on('post:liked', handlers.onPostLiked);
    }
    if (handlers.onPostReacted) {
        sock.on('post:reacted', handlers.onPostReacted);
    }
    // Comment events
    if (handlers.onCommentCreated) {
        sock.on('comment:created', handlers.onCommentCreated);
    }
    if (handlers.onCommentLiked) {
        sock.on('comment:liked', handlers.onCommentLiked);
    }
    // Poll events
    if (handlers.onPollUpdated) {
        sock.on('poll:updated', handlers.onPollUpdated);
    }
    // Notification events
    if (handlers.onNotificationComment) {
        sock.on('notification:comment', handlers.onNotificationComment);
    }
    if (handlers.onNotificationReaction) {
        sock.on('notification:reaction', handlers.onNotificationReaction);
    }
    if (handlers.onNotificationMention) {
        sock.on('notification:mention', handlers.onNotificationMention);
    }
    if (handlers.onNotificationLike) {
        sock.on('notification:like', handlers.onNotificationLike);
    }
    if (handlers.onNotificationCommentLike) {
        sock.on('notification:comment_like', handlers.onNotificationCommentLike);
    }
    // User events
    if (handlers.onUserOnline) {
        sock.on('user:online', handlers.onUserOnline);
    }
    if (handlers.onUserOffline) {
        sock.on('user:offline', handlers.onUserOffline);
    }
    if (handlers.onUserLocationChanged) {
        sock.on('user:location_changed', handlers.onUserLocationChanged);
    }
    // Location request
    if (handlers.onLocationRequest) {
        sock.on('location:request', handlers.onLocationRequest);
    }
    // Story events
    if (handlers.onStoryCreated) {
        sock.on('story:created', handlers.onStoryCreated);
    }
    if (handlers.onStoryDeleted) {
        sock.on('story:deleted', handlers.onStoryDeleted);
    }
    if (handlers.onStoryViewed) {
        sock.on('story:viewed', handlers.onStoryViewed);
    }
    if (handlers.onStoryReaction) {
        sock.on('story:reaction', handlers.onStoryReaction);
    }
    if (handlers.onStoryReply) {
        sock.on('story:reply', handlers.onStoryReply);
    }
    // Chat events
    if (handlers.onChatNewMessage) {
        sock.on('chat:new_message', handlers.onChatNewMessage);
    }
    if (handlers.onChatNotification) {
        sock.on('chat:notification', handlers.onChatNotification);
    }
    if (handlers.onChatUserTyping) {
        sock.on('chat:user_typing', handlers.onChatUserTyping);
    }
    if (handlers.onChatMessagesDelivered) {
        sock.on('chat:messages_delivered', handlers.onChatMessagesDelivered);
    }
    if (handlers.onChatMessagesRead) {
        sock.on('chat:messages_read', handlers.onChatMessagesRead);
    }
    if (handlers.onChatMessageDeleted) {
        sock.on('chat:message_deleted', handlers.onChatMessageDeleted);
    }
    if (handlers.onChatMessageEdited) {
        sock.on('chat:message_edited', handlers.onChatMessageEdited);
    }
    if (handlers.onChatMessageReaction) {
        sock.on('chat:message_reaction', handlers.onChatMessageReaction);
    }
    if (handlers.onChatMessageDelivered) {
        sock.on('chat:message_delivered', handlers.onChatMessageDelivered);
    }
    // Reel events
    if (handlers.onReelEngagementUpdate) {
        sock.on('reel:engagement_update', handlers.onReelEngagementUpdate);
    }
    // New notification event
    if (handlers.onNotificationNew) {
        sock.on('notification:new', handlers.onNotificationNew);
    }
}
function getSocket() {
    return socket;
}
function removeSocketHandlers(eventNames) {
    if (!socket) return;
    eventNames.forEach((event)=>{
        socket?.off(event);
    });
}
function disconnectSocket() {
    if (socket) {
        socket.disconnect();
        socket = null;
    }
}
function joinPostRoom(postId) {
    socket?.emit('post:join', {
        postId
    });
}
function leavePostRoom(postId) {
    socket?.emit('post:leave', {
        postId
    });
}
function likePost(postId) {
    socket?.emit('post:like', {
        postId
    });
}
function reactToPost(postId, reactionType) {
    socket?.emit('post:react', {
        postId,
        reactionType
    });
}
function createComment(postId, content, parentId, mentions) {
    socket?.emit('post:comment', {
        postId,
        content,
        parentId,
        mentions
    });
}
function likeComment(commentId, postId) {
    socket?.emit('comment:like', {
        commentId,
        postId
    });
}
function votePoll(postId, optionId) {
    socket?.emit('poll:vote', {
        postId,
        optionId
    });
}
function updateLocation(data) {
    socket?.emit('location:update', data);
}
function sendTypingIndicator(postId, isTyping) {
    socket?.emit('typing', {
        postId,
        isTyping
    });
}
function joinChatRoom(conversationId) {
    socket?.emit('chat:join', {
        conversationId
    });
}
function leaveChatRoom(conversationId) {
    socket?.emit('chat:leave', {
        conversationId
    });
}
function sendChatMessage(data) {
    socket?.emit('chat:send_message', data);
}
function sendChatTyping(conversationId, isTyping) {
    socket?.emit('chat:typing', {
        conversationId,
        isTyping
    });
}
function markChatAsRead(conversationId) {
    socket?.emit('chat:mark_read', {
        conversationId
    });
}
function deleteChatMessage(messageId, conversationId, forEveryone) {
    socket?.emit('chat:delete_message', {
        messageId,
        conversationId,
        forEveryone
    });
}
function editChatMessage(messageId, conversationId, content) {
    socket?.emit('chat:edit_message', {
        messageId,
        conversationId,
        content
    });
}
function reactToChatMessage(messageId, conversationId, emoji) {
    socket?.emit('chat:react', {
        messageId,
        conversationId,
        emoji
    });
}
function joinReelRoom(reelId) {
    socket?.emit('reel:join', {
        reelId
    });
}
function leaveReelRoom(reelId) {
    socket?.emit('reel:leave', {
        reelId
    });
}
function likeReel(reelId) {
    socket?.emit('reel:like', {
        reelId
    });
}
function createReelComment(reelId, content, parentId, mentions) {
    socket?.emit('reel:comment', {
        reelId,
        content,
        parentId,
        mentions
    });
}
const __TURBOPACK__default__export__ = {
    initializeSocket,
    getSocket,
    disconnectSocket,
    joinPostRoom,
    leavePostRoom,
    likePost,
    createComment,
    likeComment,
    votePoll,
    updateLocation,
    sendTypingIndicator,
    // Chat functions
    joinChatRoom,
    leaveChatRoom,
    sendChatMessage,
    sendChatTyping,
    markChatAsRead,
    deleteChatMessage,
    editChatMessage,
    reactToChatMessage,
    // Reel functions
    joinReelRoom,
    leaveReelRoom,
    likeReel,
    createReelComment
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/auth/useAuth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$authContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/authContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useAuth() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "270d87aa617a7098a541d1a4998b9f52c019fa0ce9f7b0d41b5787f62f1bc573") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "270d87aa617a7098a541d1a4998b9f52c019fa0ce9f7b0d41b5787f62f1bc573";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$authContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthContext"])();
    let t0;
    if ($[1] !== context.isAuthenticated || $[2] !== context.loading || $[3] !== context.login || $[4] !== context.logout || $[5] !== context.register || $[6] !== context.setAuth || $[7] !== context.updateUser || $[8] !== context.user) {
        t0 = {
            user: context.user,
            isAuthenticated: context.isAuthenticated,
            loading: context.loading,
            login: context.login,
            logout: context.logout,
            register: context.register,
            setAuth: context.setAuth,
            updateUser: context.updateUser
        };
        $[1] = context.isAuthenticated;
        $[2] = context.loading;
        $[3] = context.login;
        $[4] = context.logout;
        $[5] = context.register;
        $[6] = context.setAuth;
        $[7] = context.updateUser;
        $[8] = context.user;
        $[9] = t0;
    } else {
        t0 = $[9];
    }
    return t0;
}
_s(useAuth, "1d910uISNQj9XAEqBb1l4bu0m4s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$authContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthContext"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/notifications/NotificationToast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationToastProvider",
    ()=>NotificationToastProvider,
    "useNotificationToasts",
    ()=>useNotificationToasts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$at$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AtSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/at-sign.js [app-client] (ecmascript) <export default as AtSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [app-client] (ecmascript) <export default as ThumbsUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$party$2d$popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PartyPopper$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/party-popper.js [app-client] (ecmascript) <export default as PartyPopper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/socket.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/useAuth.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const ToastContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useNotificationToasts() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "8217d7af7b705a99af42c3df7d22be0cc68cc1ee97d4532bfe17988e697adde5") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8217d7af7b705a99af42c3df7d22be0cc68cc1ee97d4532bfe17988e697adde5";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ToastContext);
    if (!context) {
        throw new Error("useNotificationToasts must be used within NotificationToastProvider");
    }
    return context;
}
_s(useNotificationToasts, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
// Map reaction types to icons
const reactionIcons = {
    LIKE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"],
    CELEBRATE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$party$2d$popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PartyPopper$3e$__["PartyPopper"],
    SUPPORT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
    INSIGHTFUL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
    CURIOUS: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"]
};
const reactionColors = {
    LIKE: 'text-blue-500',
    CELEBRATE: 'text-green-500',
    SUPPORT: 'text-purple-500',
    INSIGHTFUL: 'text-amber-500',
    CURIOUS: 'text-pink-500'
};
function NotificationToastProvider(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "8217d7af7b705a99af42c3df7d22be0cc68cc1ee97d4532bfe17988e697adde5") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8217d7af7b705a99af42c3df7d22be0cc68cc1ee97d4532bfe17988e697adde5";
    }
    const { children } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "NotificationToastProvider[addToast]": (toast)=>{
                const id = `toast-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
                setToasts({
                    "NotificationToastProvider[addToast > setToasts()]": (prev)=>[
                            ...prev,
                            {
                                ...toast,
                                id,
                                createdAt: new Date()
                            }
                        ]
                }["NotificationToastProvider[addToast > setToasts()]"]);
                setTimeout({
                    "NotificationToastProvider[addToast > setTimeout()]": ()=>{
                        setToasts({
                            "NotificationToastProvider[addToast > setTimeout() > setToasts()]": (prev_0)=>prev_0.filter({
                                    "NotificationToastProvider[addToast > setTimeout() > setToasts() > prev_0.filter()]": (t)=>t.id !== id
                                }["NotificationToastProvider[addToast > setTimeout() > setToasts() > prev_0.filter()]"])
                        }["NotificationToastProvider[addToast > setTimeout() > setToasts()]"]);
                    }
                }["NotificationToastProvider[addToast > setTimeout()]"], 5000);
            }
        })["NotificationToastProvider[addToast]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const addToast = t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "NotificationToastProvider[removeToast]": (id_0)=>{
                setToasts({
                    "NotificationToastProvider[removeToast > setToasts()]": (prev_1)=>prev_1.filter({
                            "NotificationToastProvider[removeToast > setToasts() > prev_1.filter()]": (t_0)=>t_0.id !== id_0
                        }["NotificationToastProvider[removeToast > setToasts() > prev_1.filter()]"])
                }["NotificationToastProvider[removeToast > setToasts()]"]);
            }
        })["NotificationToastProvider[removeToast]"];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const removeToast = t3;
    let t4;
    let t5;
    if ($[4] !== user) {
        t4 = ({
            "NotificationToastProvider[useEffect()]": ()=>{
                if (!user) {
                    return;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeSocket"])({
                    onNotificationReaction: (data)=>{
                        addToast({
                            type: "reaction",
                            title: "New Reaction",
                            message: "Someone reacted to your post",
                            reactionType: data.reactionType,
                            postId: data.postId
                        });
                    },
                    onNotificationLike: (data_0)=>{
                        addToast({
                            type: "reaction",
                            title: "New Like",
                            message: "Someone liked your post",
                            reactionType: "LIKE",
                            postId: data_0.postId
                        });
                    },
                    onNotificationComment: (data_1)=>{
                        addToast({
                            type: "comment",
                            title: "New Comment",
                            message: "Someone commented on your post",
                            postId: data_1.postId
                        });
                    },
                    onNotificationMention: (data_2)=>{
                        addToast({
                            type: "mention",
                            title: "New Mention",
                            message: "You were mentioned in a comment",
                            postId: data_2.postId
                        });
                    },
                    onNotificationCommentLike: (data_3)=>{
                        addToast({
                            type: "comment_like",
                            title: "Comment Liked",
                            message: "Someone liked your comment",
                            postId: data_3.postId
                        });
                    }
                });
                return _temp;
            }
        })["NotificationToastProvider[useEffect()]"];
        t5 = [
            user,
            addToast
        ];
        $[4] = user;
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[7] !== toasts) {
        t6 = {
            toasts,
            addToast,
            removeToast
        };
        $[7] = toasts;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationToasts, {}, void 0, false, {
            fileName: "[project]/src/components/notifications/NotificationToast.tsx",
            lineNumber: 201,
            columnNumber: 10
        }, this);
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== children || $[11] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContext.Provider, {
            value: t6,
            children: [
                children,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/notifications/NotificationToast.tsx",
            lineNumber: 208,
            columnNumber: 10
        }, this);
        $[10] = children;
        $[11] = t6;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    return t8;
}
_s1(NotificationToastProvider, "IfLWxUTvGDR9TxCyvO58Rq6YsnI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = NotificationToastProvider;
function _temp() {}
function NotificationToasts() {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "8217d7af7b705a99af42c3df7d22be0cc68cc1ee97d4532bfe17988e697adde5") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8217d7af7b705a99af42c3df7d22be0cc68cc1ee97d4532bfe17988e697adde5";
    }
    const { toasts, removeToast } = useNotificationToasts();
    let t0;
    if ($[1] !== removeToast || $[2] !== toasts) {
        let t1;
        if ($[4] !== removeToast) {
            t1 = ({
                "NotificationToasts[toasts.map()]": (toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastItem, {
                        toast: toast,
                        onClose: {
                            "NotificationToasts[toasts.map() > <ToastItem>.onClose]": ()=>removeToast(toast.id)
                        }["NotificationToasts[toasts.map() > <ToastItem>.onClose]"]
                    }, toast.id, false, {
                        fileName: "[project]/src/components/notifications/NotificationToast.tsx",
                        lineNumber: 235,
                        columnNumber: 54
                    }, this)
            })["NotificationToasts[toasts.map()]"];
            $[4] = removeToast;
            $[5] = t1;
        } else {
            t1 = $[5];
        }
        t0 = toasts.map(t1);
        $[1] = removeToast;
        $[2] = toasts;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    let t1;
    if ($[6] !== t0) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-4 right-4 z-[100] flex flex-col gap-2 max-w-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "popLayout",
                children: t0
            }, void 0, false, {
                fileName: "[project]/src/components/notifications/NotificationToast.tsx",
                lineNumber: 253,
                columnNumber: 87
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/notifications/NotificationToast.tsx",
            lineNumber: 253,
            columnNumber: 10
        }, this);
        $[6] = t0;
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    return t1;
}
_s2(NotificationToasts, "wOr7UXpbD6fdGMjW4+Um9XghGGU=", false, function() {
    return [
        useNotificationToasts
    ];
});
_c1 = NotificationToasts;
function ToastItem(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "8217d7af7b705a99af42c3df7d22be0cc68cc1ee97d4532bfe17988e697adde5") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8217d7af7b705a99af42c3df7d22be0cc68cc1ee97d4532bfe17988e697adde5";
    }
    const { toast, onClose } = t0;
    let t1;
    if ($[1] !== toast.reactionType || $[2] !== toast.type) {
        t1 = ({
            "ToastItem[getIcon]": ()=>{
                switch(toast.type){
                    case "reaction":
                        {
                            if (toast.reactionType) {
                                const Icon = reactionIcons[toast.reactionType];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: `w-5 h-5 ${reactionColors[toast.reactionType]}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notifications/NotificationToast.tsx",
                                    lineNumber: 282,
                                    columnNumber: 24
                                }, this);
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"], {
                                className: "w-5 h-5 text-blue-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/notifications/NotificationToast.tsx",
                                lineNumber: 284,
                                columnNumber: 22
                            }, this);
                        }
                    case "comment":
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                className: "w-5 h-5 text-blue-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/notifications/NotificationToast.tsx",
                                lineNumber: 288,
                                columnNumber: 22
                            }, this);
                        }
                    case "mention":
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$at$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AtSign$3e$__["AtSign"], {
                                className: "w-5 h-5 text-purple-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/notifications/NotificationToast.tsx",
                                lineNumber: 292,
                                columnNumber: 22
                            }, this);
                        }
                    case "follow":
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                className: "w-5 h-5 text-green-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/notifications/NotificationToast.tsx",
                                lineNumber: 296,
                                columnNumber: 22
                            }, this);
                        }
                    case "comment_like":
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                className: "w-5 h-5 text-red-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/notifications/NotificationToast.tsx",
                                lineNumber: 300,
                                columnNumber: 22
                            }, this);
                        }
                    default:
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                className: "w-5 h-5 text-red-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/notifications/NotificationToast.tsx",
                                lineNumber: 304,
                                columnNumber: 22
                            }, this);
                        }
                }
            }
        })["ToastItem[getIcon]"];
        $[1] = toast.reactionType;
        $[2] = toast.type;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const getIcon = t1;
    let t2;
    if ($[4] !== toast.type) {
        t2 = ({
            "ToastItem[getBgColor]": ()=>{
                switch(toast.type){
                    case "reaction":
                        {
                            return "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800";
                        }
                    case "comment":
                        {
                            return "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800";
                        }
                    case "mention":
                        {
                            return "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800";
                        }
                    case "follow":
                        {
                            return "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800";
                        }
                    case "comment_like":
                        {
                            return "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800";
                        }
                    default:
                        {
                            return "bg-gray-50 dark:bg-neutral-800 border-gray-200 dark:border-neutral-700";
                        }
                }
            }
        })["ToastItem[getBgColor]"];
        $[4] = toast.type;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const getBgColor = t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            opacity: 0,
            y: 50,
            scale: 0.95
        };
        t4 = {
            opacity: 1,
            y: 0,
            scale: 1
        };
        t5 = {
            opacity: 0,
            x: 100,
            scale: 0.95
        };
        t6 = {
            type: "spring",
            damping: 25,
            stiffness: 400
        };
        $[6] = t3;
        $[7] = t4;
        $[8] = t5;
        $[9] = t6;
    } else {
        t3 = $[6];
        t4 = $[7];
        t5 = $[8];
        t6 = $[9];
    }
    const t7 = `relative flex items-start gap-3 p-4 rounded-xl border shadow-lg ${getBgColor()}`;
    let t8;
    if ($[10] !== getIcon) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-shrink-0 p-2 rounded-full bg-white dark:bg-neutral-900",
            children: getIcon()
        }, void 0, false, {
            fileName: "[project]/src/components/notifications/NotificationToast.tsx",
            lineNumber: 392,
            columnNumber: 10
        }, this);
        $[10] = getIcon;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== toast.title) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-gray-900 dark:text-white text-sm",
            children: toast.title
        }, void 0, false, {
            fileName: "[project]/src/components/notifications/NotificationToast.tsx",
            lineNumber: 400,
            columnNumber: 10
        }, this);
        $[12] = toast.title;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== toast.message) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-600 dark:text-neutral-400 truncate",
            children: toast.message
        }, void 0, false, {
            fileName: "[project]/src/components/notifications/NotificationToast.tsx",
            lineNumber: 408,
            columnNumber: 11
        }, this);
        $[14] = toast.message;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== t10 || $[17] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 min-w-0",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/notifications/NotificationToast.tsx",
            lineNumber: 416,
            columnNumber: 11
        }, this);
        $[16] = t10;
        $[17] = t9;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "w-4 h-4 text-gray-500 dark:text-neutral-400"
        }, void 0, false, {
            fileName: "[project]/src/components/notifications/NotificationToast.tsx",
            lineNumber: 425,
            columnNumber: 11
        }, this);
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== onClose) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "flex-shrink-0 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/notifications/NotificationToast.tsx",
            lineNumber: 432,
            columnNumber: 11
        }, this);
        $[20] = onClose;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
            className: "absolute bottom-0 left-0 h-1 bg-blue-500 rounded-b-xl"
        }, void 0, false, {
            fileName: "[project]/src/components/notifications/NotificationToast.tsx",
            lineNumber: 440,
            columnNumber: 11
        }, this);
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] !== t11 || $[24] !== t13 || $[25] !== t7 || $[26] !== t8) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            layout: true,
            initial: t3,
            animate: t4,
            exit: t5,
            transition: t6,
            className: t7,
            children: [
                t8,
                t11,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/notifications/NotificationToast.tsx",
            lineNumber: 454,
            columnNumber: 11
        }, this);
        $[23] = t11;
        $[24] = t13;
        $[25] = t7;
        $[26] = t8;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    return t15;
}
_c2 = ToastItem;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "NotificationToastProvider");
__turbopack_context__.k.register(_c1, "NotificationToasts");
__turbopack_context__.k.register(_c2, "ToastItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/BottomNavigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomNavigation",
    ()=>BottomNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function BottomNavigation(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "e3f25f5ad15494342dbecba0bc1dd4a03bb785437349b9498caba026940baae1") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e3f25f5ad15494342dbecba0bc1dd4a03bb785437349b9498caba026940baae1";
    }
    const { items, className } = t0;
    const handleVibrate = _BottomNavigationHandleVibrate;
    let t1;
    if ($[1] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50", "w-[calc(100vw-32px)] max-w-[400px]", "h-[72px]", "bg-[#1e1e1e]/90 backdrop-blur-md", "rounded-[28px]", "shadow-xl shadow-black/20", "flex items-center justify-between px-2", "safe-area-inset-bottom", className);
        $[1] = className;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== items) {
        let t3;
        if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = ({
                "BottomNavigation[items.map()]": (item, index)=>{
                    const isActive = item.isActive;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1 flex items-center justify-center h-full",
                        children: [
                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                layoutId: "active-pill",
                                className: "absolute bg-[#9EFF00] rounded-[24px]",
                                initial: false,
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30
                                },
                                style: {
                                    width: "64px",
                                    height: "48px",
                                    zIndex: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/BottomNavigation.tsx",
                                lineNumber: 48,
                                columnNumber: 128
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                onClick: {
                                    "BottomNavigation[items.map() > <Link>.onClick]": (e)=>{
                                        handleVibrate();
                                        if (item.onClick) {
                                            e.preventDefault();
                                            item.onClick();
                                        }
                                    }
                                }["BottomNavigation[items.map() > <Link>.onClick]"],
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-10 flex items-center justify-center w-full h-full", "transition-colors duration-300", isActive ? "text-[#1E1E1E]" : "text-white/60 hover:text-white"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileTap: {
                                        scale: 0.9
                                    },
                                    className: "flex flex-col items-center justify-center w-full h-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-6 h-6", isActive ? "text-[#1E1E1E]" : "text-current"),
                                                    children: item.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/BottomNavigation.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 112
                                                }, this),
                                                item.badge && item.badge > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute -top-1 -right-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white ring-2 ring-[#1E1E1E]",
                                                    children: item.badge > 9 ? "9+" : item.badge
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/BottomNavigation.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 239
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/BottomNavigation.tsx",
                                            lineNumber: 66,
                                            columnNumber: 86
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[10px] font-medium transition-all duration-300 mt-1", isActive ? "text-[#1E1E1E] font-bold" : "text-white/60"),
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/BottomNavigation.tsx",
                                            lineNumber: 66,
                                            columnNumber: 463
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/BottomNavigation.tsx",
                                    lineNumber: 64,
                                    columnNumber: 243
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/BottomNavigation.tsx",
                                lineNumber: 56,
                                columnNumber: 19
                            }, this)
                        ]
                    }, item.href + index, true, {
                        fileName: "[project]/src/components/ui/BottomNavigation.tsx",
                        lineNumber: 48,
                        columnNumber: 18
                    }, this);
                }
            })["BottomNavigation[items.map()]"];
            $[5] = t3;
        } else {
            t3 = $[5];
        }
        t2 = items.map(t3);
        $[3] = items;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[6] !== t1 || $[7] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/ui/BottomNavigation.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    return t3;
}
_c = BottomNavigation;
function _BottomNavigationHandleVibrate() {
    if (typeof navigator !== "undefined" && navigator.vibrate) {
        navigator.vibrate(10);
    }
}
var _c;
__turbopack_context__.k.register(_c, "BottomNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/dock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dock",
    ()=>Dock,
    "DockIcon",
    ()=>DockIcon,
    "DockItem",
    ()=>DockItem,
    "DockLabel",
    ()=>DockLabel,
    "VormexDock",
    ()=>VormexDock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HomeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as HomeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users-round.js [app-client] (ecmascript) <export default as UsersRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BottomNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/BottomNavigation.tsx [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
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
// Dynamically import CreatePostModal to avoid circular dependencies
const CreatePostModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/feed/CreatePostModal.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/feed/CreatePostModal.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = CreatePostModal;
const DOCK_HEIGHT = 128;
const DEFAULT_MAGNIFICATION = 80;
const DEFAULT_DISTANCE = 150;
const DEFAULT_PANEL_HEIGHT = 64;
const DockContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function DockProvider(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "6d178aed1913e2236aa262056bc364e3ed20b431d0cc7b7935b12cea97649bf1") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6d178aed1913e2236aa262056bc364e3ed20b431d0cc7b7935b12cea97649bf1";
    }
    const { children, value } = t0;
    let t1;
    if ($[1] !== children || $[2] !== value) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DockContext.Provider, {
            value: value,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dock.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = value;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    return t1;
}
_c1 = DockProvider;
function useDock() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "6d178aed1913e2236aa262056bc364e3ed20b431d0cc7b7935b12cea97649bf1") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6d178aed1913e2236aa262056bc364e3ed20b431d0cc7b7935b12cea97649bf1";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(DockContext);
    if (!context) {
        throw new Error("useDock must be used within a DockProvider");
    }
    return context;
}
_s(useDock, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function Dock(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "6d178aed1913e2236aa262056bc364e3ed20b431d0cc7b7935b12cea97649bf1") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6d178aed1913e2236aa262056bc364e3ed20b431d0cc7b7935b12cea97649bf1";
    }
    const { children, className, spring: t1, magnification: t2, distance: t3, panelHeight: t4 } = t0;
    let t5;
    if ($[1] !== t1) {
        t5 = t1 === undefined ? {
            mass: 0.1,
            stiffness: 150,
            damping: 12
        } : t1;
        $[1] = t1;
        $[2] = t5;
    } else {
        t5 = $[2];
    }
    const spring = t5;
    const magnification = t2 === undefined ? DEFAULT_MAGNIFICATION : t2;
    const distance = t3 === undefined ? DEFAULT_DISTANCE : t3;
    const panelHeight = t4 === undefined ? DEFAULT_PANEL_HEIGHT : t4;
    const mouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(Infinity);
    const isHovered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const maxHeight = Math.max(DOCK_HEIGHT, magnification + magnification / 2 + 4);
    let t6;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = [
            0,
            1
        ];
        $[3] = t6;
    } else {
        t6 = $[3];
    }
    let t7;
    if ($[4] !== maxHeight || $[5] !== panelHeight) {
        t7 = [
            panelHeight,
            maxHeight
        ];
        $[4] = maxHeight;
        $[5] = panelHeight;
        $[6] = t7;
    } else {
        t7 = $[6];
    }
    const heightRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(isHovered, t6, t7);
    const height = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(heightRow, spring);
    let t8;
    if ($[7] !== height) {
        t8 = {
            height,
            scrollbarWidth: "none"
        };
        $[7] = height;
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    let t10;
    let t9;
    if ($[9] !== isHovered || $[10] !== mouseX) {
        t9 = ({
            "Dock[<motion.div>.onMouseMove]": (t11)=>{
                const { pageX } = t11;
                isHovered.set(1);
                mouseX.set(pageX);
            }
        })["Dock[<motion.div>.onMouseMove]"];
        t10 = ({
            "Dock[<motion.div>.onMouseLeave]": ()=>{
                isHovered.set(0);
                mouseX.set(Infinity);
            }
        })["Dock[<motion.div>.onMouseLeave]"];
        $[9] = isHovered;
        $[10] = mouseX;
        $[11] = t10;
        $[12] = t9;
    } else {
        t10 = $[11];
        t9 = $[12];
    }
    let t11;
    if ($[13] !== className) {
        t11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mx-auto flex w-fit gap-4 rounded-2xl bg-gray-50 px-4 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800", className);
        $[13] = className;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] !== panelHeight) {
        t12 = {
            height: panelHeight
        };
        $[15] = panelHeight;
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    let t13;
    if ($[17] !== distance || $[18] !== magnification || $[19] !== mouseX || $[20] !== spring) {
        t13 = {
            mouseX,
            spring,
            distance,
            magnification
        };
        $[17] = distance;
        $[18] = magnification;
        $[19] = mouseX;
        $[20] = spring;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] !== children || $[23] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DockProvider, {
            value: t13,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dock.tsx",
            lineNumber: 220,
            columnNumber: 11
        }, this);
        $[22] = children;
        $[23] = t13;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] !== t10 || $[26] !== t11 || $[27] !== t12 || $[28] !== t14 || $[29] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            onMouseMove: t9,
            onMouseLeave: t10,
            className: t11,
            style: t12,
            role: "toolbar",
            "aria-label": "Application dock",
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dock.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[25] = t10;
        $[26] = t11;
        $[27] = t12;
        $[28] = t14;
        $[29] = t9;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] !== t15 || $[32] !== t8) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            style: t8,
            className: "mx-2 flex max-w-full items-end overflow-x-auto",
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dock.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[31] = t15;
        $[32] = t8;
        $[33] = t16;
    } else {
        t16 = $[33];
    }
    return t16;
}
_s1(Dock, "SdIscOIedtj979SJ73xJPQdg4GQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c2 = Dock;
function DockItem(t0) {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(35);
    if ($[0] !== "6d178aed1913e2236aa262056bc364e3ed20b431d0cc7b7935b12cea97649bf1") {
        for(let $i = 0; $i < 35; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6d178aed1913e2236aa262056bc364e3ed20b431d0cc7b7935b12cea97649bf1";
    }
    const { children, className, href, isActive } = t0;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { distance, magnification, mouseX, spring } = useDock();
    const isHovered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "DockItem[useTransform()]": (val)=>{
                const domRect = ref.current?.getBoundingClientRect() ?? {
                    x: 0,
                    width: 0
                };
                return val - domRect.x - domRect.width / 2;
            }
        })["DockItem[useTransform()]"];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const mouseDistance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(mouseX, t1);
    const t2 = -distance;
    let t3;
    if ($[2] !== distance || $[3] !== t2) {
        t3 = [
            t2,
            0,
            distance
        ];
        $[2] = distance;
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== magnification) {
        t4 = [
            40,
            magnification,
            40
        ];
        $[5] = magnification;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const widthTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(mouseDistance, t3, t4);
    const width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(widthTransform, spring);
    let t5;
    if ($[7] !== width) {
        t5 = {
            width
        };
        $[7] = width;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[9] !== isHovered) {
        t6 = ({
            "DockItem[<motion.div>.onHoverStart]": ()=>isHovered.set(1)
        })["DockItem[<motion.div>.onHoverStart]"];
        t7 = ({
            "DockItem[<motion.div>.onHoverEnd]": ()=>isHovered.set(0)
        })["DockItem[<motion.div>.onHoverEnd]"];
        t8 = ({
            "DockItem[<motion.div>.onFocus]": ()=>isHovered.set(1)
        })["DockItem[<motion.div>.onFocus]"];
        t9 = ({
            "DockItem[<motion.div>.onBlur]": ()=>isHovered.set(0)
        })["DockItem[<motion.div>.onBlur]"];
        $[9] = isHovered;
        $[10] = t6;
        $[11] = t7;
        $[12] = t8;
        $[13] = t9;
    } else {
        t6 = $[10];
        t7 = $[11];
        t8 = $[12];
        t9 = $[13];
    }
    const t10 = isActive && "ring-2 ring-blue-500 dark:ring-blue-400 rounded-full";
    let t11;
    if ($[14] !== className || $[15] !== t10) {
        t11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative inline-flex items-center justify-center", t10, className);
        $[14] = className;
        $[15] = t10;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] !== children || $[18] !== isHovered || $[19] !== width) {
        let t13;
        if ($[21] !== isHovered || $[22] !== width) {
            t13 = ({
                "DockItem[Children.map()]": (child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
                        width,
                        isHovered
                    })
            })["DockItem[Children.map()]"];
            $[21] = isHovered;
            $[22] = width;
            $[23] = t13;
        } else {
            t13 = $[23];
        }
        t12 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(children, t13);
        $[17] = children;
        $[18] = isHovered;
        $[19] = width;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[24] !== t11 || $[25] !== t12 || $[26] !== t5 || $[27] !== t6 || $[28] !== t7 || $[29] !== t8 || $[30] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            ref: ref,
            style: t5,
            onHoverStart: t6,
            onHoverEnd: t7,
            onFocus: t8,
            onBlur: t9,
            className: t11,
            tabIndex: 0,
            role: "button",
            "aria-haspopup": "true",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dock.tsx",
            lineNumber: 382,
            columnNumber: 11
        }, this);
        $[24] = t11;
        $[25] = t12;
        $[26] = t5;
        $[27] = t6;
        $[28] = t7;
        $[29] = t8;
        $[30] = t9;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    const content = t13;
    if (href) {
        let t14;
        if ($[32] !== content || $[33] !== href) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: href,
                className: "flex items-center justify-center",
                children: content
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dock.tsx",
                lineNumber: 398,
                columnNumber: 13
            }, this);
            $[32] = content;
            $[33] = href;
            $[34] = t14;
        } else {
            t14 = $[34];
        }
        return t14;
    }
    return content;
}
_s2(DockItem, "1lwjQOKKkwg/AGYAbzKLGt5T46A=", false, function() {
    return [
        useDock,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c3 = DockItem;
function DockLabel(t0) {
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "6d178aed1913e2236aa262056bc364e3ed20b431d0cc7b7935b12cea97649bf1") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6d178aed1913e2236aa262056bc364e3ed20b431d0cc7b7935b12cea97649bf1";
    }
    const { children, className, isHovered } = t0;
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] !== isHovered) {
        t1 = ({
            "DockLabel[useEffect()]": ()=>{
                if (!isHovered) {
                    return;
                }
                const unsubscribe = isHovered.on("change", {
                    "DockLabel[useEffect() > isHovered.on()]": (latest)=>{
                        setIsVisible(latest === 1);
                    }
                }["DockLabel[useEffect() > isHovered.on()]"]);
                return ()=>unsubscribe();
            }
        })["DockLabel[useEffect()]"];
        t2 = [
            isHovered
        ];
        $[1] = isHovered;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== children || $[5] !== className || $[6] !== isVisible) {
        t3 = isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 0
            },
            animate: {
                opacity: 1,
                y: -10
            },
            exit: {
                opacity: 0,
                y: 0
            },
            transition: {
                duration: 0.2
            },
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute -top-6 left-1/2 w-fit whitespace-pre rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white", className),
            role: "tooltip",
            style: {
                x: "-50%"
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dock.tsx",
            lineNumber: 450,
            columnNumber: 23
        }, this);
        $[4] = children;
        $[5] = className;
        $[6] = isVisible;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dock.tsx",
            lineNumber: 473,
            columnNumber: 10
        }, this);
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    return t4;
}
_s3(DockLabel, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c4 = DockLabel;
function DockIcon(t0) {
    _s4();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "6d178aed1913e2236aa262056bc364e3ed20b431d0cc7b7935b12cea97649bf1") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6d178aed1913e2236aa262056bc364e3ed20b431d0cc7b7935b12cea97649bf1";
    }
    const { children, className, width } = t0;
    const defaultWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(40);
    const widthValue = width || defaultWidth;
    const widthTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(widthValue, _DockIconUseTransform);
    let t1;
    if ($[1] !== widthTransform) {
        t1 = {
            width: widthTransform
        };
        $[1] = widthTransform;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center", className);
        $[3] = className;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== children || $[6] !== t1 || $[7] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            style: t1,
            className: t2,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dock.tsx",
            lineNumber: 517,
            columnNumber: 10
        }, this);
        $[5] = children;
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    return t3;
}
_s4(DockIcon, "3Lhpuss0u2N3CJ10XJtHEiVGOE4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c5 = DockIcon;
// Vormex Dock Navigation Component
function _DockIconUseTransform(val) {
    return val / 2;
}
function VormexDock() {
    _s5();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(51);
    if ($[0] !== "6d178aed1913e2236aa262056bc364e3ed20b431d0cc7b7935b12cea97649bf1") {
        for(let $i = 0; $i < 51; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6d178aed1913e2236aa262056bc364e3ed20b431d0cc7b7935b12cea97649bf1";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [showCreateModal, setShowCreateModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const authPages = [
        "/login",
        "/forgot-password",
        "/reset-password",
        "/verify-email"
    ];
    if (authPages.includes(pathname)) {
        return null;
    }
    let t0;
    if ($[1] !== user) {
        t0 = ({
            "VormexDock[ProfilePicture]": (t1)=>{
                const { size: t2 } = t1;
                const size = t2 === undefined ? "full" : t2;
                const sizeClass = size === "small" ? "w-6 h-6" : "h-full w-full";
                if (user?.profileImage) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: user.profileImage,
                        alt: user.name || "Profile",
                        className: `${sizeClass} rounded-full object-cover`
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dock.tsx",
                        lineNumber: 559,
                        columnNumber: 18
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${sizeClass} rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-white font-semibold ${size === "small" ? "text-xs" : "text-sm"}`,
                        children: user?.name?.charAt(0)?.toUpperCase() || "?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dock.tsx",
                        lineNumber: 561,
                        columnNumber: 140
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dock.tsx",
                    lineNumber: 561,
                    columnNumber: 16
                }, this);
            }
        })["VormexDock[ProfilePicture]"];
        $[1] = user;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const ProfilePicture = t0;
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HomeIcon$3e$__["HomeIcon"], {
            className: "h-full w-full text-neutral-600 dark:text-neutral-300"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dock.tsx",
            lineNumber: 572,
            columnNumber: 10
        }, this);
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let T0;
    let t2;
    let t3;
    let t4;
    if ($[4] !== ProfilePicture || $[5] !== pathname) {
        const navItems = [
            {
                title: "Home",
                href: "/",
                icon: t1
            },
            {
                title: "Reels",
                href: "/reels",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                    className: "h-full w-full text-neutral-600 dark:text-neutral-300"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dock.tsx",
                    lineNumber: 589,
                    columnNumber: 13
                }, this)
            },
            {
                title: "Find People",
                href: "/find-people",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                    className: "h-full w-full text-neutral-600 dark:text-neutral-300"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dock.tsx",
                    lineNumber: 593,
                    columnNumber: 13
                }, this)
            },
            {
                title: "Groups",
                href: "/groups",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__["UsersRound"], {
                    className: "h-full w-full text-neutral-600 dark:text-neutral-300"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dock.tsx",
                    lineNumber: 597,
                    columnNumber: 13
                }, this)
            },
            {
                title: "Create",
                href: "#create",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                    className: "h-full w-full text-neutral-600 dark:text-neutral-300"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dock.tsx",
                    lineNumber: 601,
                    columnNumber: 13
                }, this),
                isCreate: true
            },
            {
                title: "Messages",
                href: "/messages",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                    className: "h-full w-full text-neutral-600 dark:text-neutral-300"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dock.tsx",
                    lineNumber: 606,
                    columnNumber: 13
                }, this)
            },
            {
                title: "Notifications",
                href: "/notifications",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                    className: "h-full w-full text-neutral-600 dark:text-neutral-300"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dock.tsx",
                    lineNumber: 610,
                    columnNumber: 13
                }, this)
            },
            {
                title: "More",
                href: "/more",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                    className: "h-full w-full text-neutral-600 dark:text-neutral-300"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dock.tsx",
                    lineNumber: 614,
                    columnNumber: 13
                }, this)
            },
            {
                title: "Profile",
                href: "/profile",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfilePicture, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/dock.tsx",
                    lineNumber: 618,
                    columnNumber: 13
                }, this),
                isProfile: true
            }
        ];
        const isActive = {
            "VormexDock[isActive]": (href)=>{
                if (href === "/") {
                    return pathname === "/";
                }
                if (href === "#create") {
                    return false;
                }
                return pathname.startsWith(href);
            }
        }["VormexDock[isActive]"];
        t4 = "hidden lg:block fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md rounded-2xl px-4 py-2 shadow-lg border border-white/20 dark:border-neutral-800/50";
        T0 = Dock;
        t2 = "items-end pb-3";
        t3 = navItems.map({
            "VormexDock[navItems.map()]": (item)=>item.isCreate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: {
                        "VormexDock[navItems.map() > <div>.onClick]": ()=>setShowCreateModal(true)
                    }["VormexDock[navItems.map() > <div>.onClick]"],
                    className: "cursor-pointer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DockItem, {
                        isActive: false,
                        className: "aspect-square rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DockLabel, {
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dock.tsx",
                                lineNumber: 638,
                                columnNumber: 252
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DockIcon, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "h-full w-full text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/dock.tsx",
                                    lineNumber: 638,
                                    columnNumber: 297
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dock.tsx",
                                lineNumber: 638,
                                columnNumber: 287
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/dock.tsx",
                        lineNumber: 638,
                        columnNumber: 83
                    }, this)
                }, item.href, false, {
                    fileName: "[project]/src/components/ui/dock.tsx",
                    lineNumber: 636,
                    columnNumber: 61
                }, this) : item.isProfile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DockItem, {
                    href: item.href,
                    isActive: isActive(item.href),
                    className: `aspect-square rounded-full overflow-hidden ${isActive(item.href) ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-white dark:ring-offset-neutral-900" : "hover:ring-2 hover:ring-gray-300 dark:hover:ring-neutral-600"} transition-all`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DockLabel, {
                            children: item.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/dock.tsx",
                            lineNumber: 638,
                            columnNumber: 710
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DockIcon, {
                            children: item.icon
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/dock.tsx",
                            lineNumber: 638,
                            columnNumber: 745
                        }, this)
                    ]
                }, item.href, true, {
                    fileName: "[project]/src/components/ui/dock.tsx",
                    lineNumber: 638,
                    columnNumber: 390
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DockItem, {
                    href: item.href,
                    isActive: isActive(item.href),
                    className: "aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 hover:bg-gray-300 dark:hover:bg-neutral-700 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DockLabel, {
                            children: item.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/dock.tsx",
                            lineNumber: 638,
                            columnNumber: 998
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DockIcon, {
                            children: item.icon
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/dock.tsx",
                            lineNumber: 638,
                            columnNumber: 1033
                        }, this)
                    ]
                }, item.href, true, {
                    fileName: "[project]/src/components/ui/dock.tsx",
                    lineNumber: 638,
                    columnNumber: 791
                }, this)
        }["VormexDock[navItems.map()]"]);
        $[4] = ProfilePicture;
        $[5] = pathname;
        $[6] = T0;
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
    } else {
        T0 = $[6];
        t2 = $[7];
        t3 = $[8];
        t4 = $[9];
    }
    let t5;
    if ($[10] !== T0 || $[11] !== t2 || $[12] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            className: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dock.tsx",
            lineNumber: 654,
            columnNumber: 10
        }, this);
        $[10] = T0;
        $[11] = t2;
        $[12] = t3;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] !== t4 || $[15] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dock.tsx",
            lineNumber: 664,
            columnNumber: 10
        }, this);
        $[14] = t4;
        $[15] = t5;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    let t7;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HomeIcon$3e$__["HomeIcon"], {
            className: "w-full h-full"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dock.tsx",
            lineNumber: 673,
            columnNumber: 10
        }, this);
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    const t8 = pathname === "/";
    let t9;
    if ($[18] !== t8) {
        t9 = {
            title: "Home",
            href: "/",
            icon: t7,
            isActive: t8
        };
        $[18] = t8;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
            className: "w-full h-full"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dock.tsx",
            lineNumber: 694,
            columnNumber: 11
        }, this);
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== pathname) {
        t11 = pathname.startsWith("/reels");
        $[21] = pathname;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== t11) {
        t12 = {
            title: "Reels",
            href: "/reels",
            icon: t10,
            isActive: t11
        };
        $[23] = t11;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
            className: "w-full h-full"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dock.tsx",
            lineNumber: 722,
            columnNumber: 11
        }, this);
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = {
            title: "Create",
            href: "#create",
            icon: t13,
            isActive: false,
            onClick: ()=>setShowCreateModal(true)
        };
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
            className: "w-full h-full"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dock.tsx",
            lineNumber: 742,
            columnNumber: 11
        }, this);
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] !== pathname) {
        t16 = pathname.startsWith("/messages");
        $[28] = pathname;
        $[29] = t16;
    } else {
        t16 = $[29];
    }
    let t17;
    if ($[30] !== t16) {
        t17 = {
            title: "Messages",
            href: "/messages",
            icon: t15,
            isActive: t16
        };
        $[30] = t16;
        $[31] = t17;
    } else {
        t17 = $[31];
    }
    let t18;
    if ($[32] !== ProfilePicture) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfilePicture, {
            size: "small"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dock.tsx",
            lineNumber: 770,
            columnNumber: 11
        }, this);
        $[32] = ProfilePicture;
        $[33] = t18;
    } else {
        t18 = $[33];
    }
    let t19;
    if ($[34] !== pathname) {
        t19 = pathname.startsWith("/profile");
        $[34] = pathname;
        $[35] = t19;
    } else {
        t19 = $[35];
    }
    let t20;
    if ($[36] !== t18 || $[37] !== t19) {
        t20 = {
            title: "Profile",
            href: "/profile",
            icon: t18,
            isActive: t19
        };
        $[36] = t18;
        $[37] = t19;
        $[38] = t20;
    } else {
        t20 = $[38];
    }
    let t21;
    if ($[39] !== t12 || $[40] !== t17 || $[41] !== t20 || $[42] !== t9) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BottomNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomNavigation"], {
            className: "lg:hidden",
            items: [
                t9,
                t12,
                t14,
                t17,
                t20
            ]
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dock.tsx",
            lineNumber: 800,
            columnNumber: 11
        }, this);
        $[39] = t12;
        $[40] = t17;
        $[41] = t20;
        $[42] = t9;
        $[43] = t21;
    } else {
        t21 = $[43];
    }
    let t22;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = ({
            "VormexDock[<CreatePostModal>.onClose]": ()=>setShowCreateModal(false)
        })["VormexDock[<CreatePostModal>.onClose]"];
        $[44] = t22;
    } else {
        t22 = $[44];
    }
    let t23;
    if ($[45] !== showCreateModal) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CreatePostModal, {
            isOpen: showCreateModal,
            onClose: t22
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dock.tsx",
            lineNumber: 820,
            columnNumber: 11
        }, this);
        $[45] = showCreateModal;
        $[46] = t23;
    } else {
        t23 = $[46];
    }
    let t24;
    if ($[47] !== t21 || $[48] !== t23 || $[49] !== t6) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t6,
                t21,
                t23
            ]
        }, void 0, true);
        $[47] = t21;
        $[48] = t23;
        $[49] = t6;
        $[50] = t24;
    } else {
        t24 = $[50];
    }
    return t24;
}
_s5(VormexDock, "V81IvCi67XMmA1/9D+xzMQtAwqQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c6 = VormexDock;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "CreatePostModal");
__turbopack_context__.k.register(_c1, "DockProvider");
__turbopack_context__.k.register(_c2, "Dock");
__turbopack_context__.k.register(_c3, "DockItem");
__turbopack_context__.k.register(_c4, "DockLabel");
__turbopack_context__.k.register(_c5, "DockIcon");
__turbopack_context__.k.register(_c6, "VormexDock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/agent/AgentContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AgentProvider",
    ()=>AgentProvider,
    "useAgent",
    ()=>useAgent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const AgentContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AgentProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "9381c9116d6de2b21733b9c4392631b46822320884a431c0e7099b1448a523a6") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9381c9116d6de2b21733b9c4392631b46822320884a431c0e7099b1448a523a6";
    }
    const { children } = t0;
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "AgentProvider[openAgent]": ()=>setIsOpen(true)
        })["AgentProvider[openAgent]"];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const openAgent = t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "AgentProvider[closeAgent]": ()=>setIsOpen(false)
        })["AgentProvider[closeAgent]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const closeAgent = t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "AgentProvider[toggleAgent]": ()=>setIsOpen(_AgentProviderToggleAgentSetIsOpen)
        })["AgentProvider[toggleAgent]"];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const toggleAgent = t3;
    let t4;
    if ($[4] !== isOpen) {
        t4 = {
            isOpen,
            openAgent,
            closeAgent,
            toggleAgent
        };
        $[4] = isOpen;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== children || $[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AgentContext.Provider, {
            value: t4,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/agent/AgentContext.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[6] = children;
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    return t5;
}
_s(AgentProvider, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = AgentProvider;
function _AgentProviderToggleAgentSetIsOpen(prev) {
    return !prev;
}
function useAgent() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "9381c9116d6de2b21733b9c4392631b46822320884a431c0e7099b1448a523a6") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9381c9116d6de2b21733b9c4392631b46822320884a431c0e7099b1448a523a6";
    }
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AgentContext);
    if (!ctx) {
        let t0;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t0 = {
                isOpen: false,
                openAgent: _temp,
                closeAgent: _temp2,
                toggleAgent: _temp3
            };
            $[1] = t0;
        } else {
            t0 = $[1];
        }
        return t0;
    }
    return ctx;
}
_s1(useAgent, "/dMy7t63NXD4eYACoT93CePwGrg=");
function _temp3() {}
function _temp2() {}
function _temp() {}
var _c;
__turbopack_context__.k.register(_c, "AgentProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api/engagement.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getConnectionCelebration",
    ()=>getConnectionCelebration,
    "getConnectionLimit",
    ()=>getConnectionLimit,
    "getDailyMatches",
    ()=>getDailyMatches,
    "getEngagementDashboard",
    ()=>getEngagementDashboard,
    "getHiddenGem",
    ()=>getHiddenGem,
    "getLeaderboard",
    ()=>getLeaderboard,
    "getLiveActivity",
    ()=>getLiveActivity,
    "getNudges",
    ()=>getNudges,
    "getPublicStreaks",
    ()=>getPublicStreaks,
    "getRecentJoins",
    ()=>getRecentJoins,
    "getSessionSummary",
    ()=>getSessionSummary,
    "getStreakHistory",
    ()=>getStreakHistory,
    "getStreakLeaderboard",
    ()=>getStreakLeaderboard,
    "getStreaks",
    ()=>getStreaks,
    "getWeeklyGoals",
    ()=>getWeeklyGoals,
    "purchaseStreakFreeze",
    ()=>purchaseStreakFreeze,
    "recordLogin",
    ()=>recordLogin,
    "toggleStreakShield",
    ()=>toggleStreakShield,
    "toggleStreakVisibility",
    ()=>toggleStreakVisibility
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/client.ts [app-client] (ecmascript)");
;
const getEngagementDashboard = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/engagement/dashboard');
    return res.data;
};
const getStreaks = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/engagement/streaks');
    return res.data;
};
const recordLogin = async ()=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/engagement/login');
};
const getDailyMatches = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/engagement/daily-matches');
    return res.data;
};
const getHiddenGem = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/engagement/hidden-gem');
    return res.data;
};
const getLiveActivity = async (location)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/engagement/live-activity', {
        params: location ? {
            location
        } : {}
    });
    return res.data;
};
const getLeaderboard = async (period = 'weekly', limit = 10)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/engagement/leaderboard', {
        params: {
            period,
            limit
        }
    });
    // Backend returns { data: { period, leaderboard, updatedAt } }; apiClient returns response.data
    const payload = res.data ?? res;
    return payload;
};
const getNudges = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/engagement/nudges');
    return res.data;
};
const getWeeklyGoals = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/engagement/weekly-goals');
    return res.data;
};
const getConnectionLimit = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/engagement/connection-limit');
    return res.data;
};
const getSessionSummary = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/engagement/session-summary');
    return res.data;
};
const getConnectionCelebration = async (connectionId)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/engagement/celebration/${connectionId}`);
    return res.data;
};
const getRecentJoins = async (groupId)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/engagement/recent-joins', {
        params: groupId ? {
            groupId
        } : {}
    });
    return res.data;
};
const getPublicStreaks = async (userId)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/engagement/streaks/${userId}`);
    return res.data;
};
const purchaseStreakFreeze = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/engagement/streaks/freeze');
    return res.data;
};
const toggleStreakShield = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/engagement/streaks/shield');
    return res.data;
};
const getStreakHistory = async (limit = 20)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/engagement/streaks/history', {
        params: {
            limit
        }
    });
    return res.data;
};
const getStreakLeaderboard = async (type = 'connection', limit = 20)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/engagement/streaks/leaderboard', {
        params: {
            type,
            limit
        }
    });
    return res.data;
};
const toggleStreakVisibility = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/engagement/streaks/visibility');
    return res.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/engagement/ExitMessage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExitMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$engagement$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/engagement.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ExitMessage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "6cfc4de69aadfba222a3c891d67412db332dc81a7b6ad6bcaf8f4433d03bec81") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6cfc4de69aadfba222a3c891d67412db332dc81a7b6ad6bcaf8f4433d03bec81";
    }
    const [summary, setSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ExitMessage[showExitMessage]": async ()=>{
                ;
                try {
                    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$engagement$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionSummary"])();
                    setSummary(data);
                    setIsVisible(true);
                } catch (t1) {
                    const error = t1;
                    console.error("Failed to fetch session summary:", error);
                }
            }
        })["ExitMessage[showExitMessage]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const showExitMessage = t0;
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "ExitMessage[useEffect()]": ()=>{
                let inactivityTimer;
                const handleVisibilityChange = {
                    "ExitMessage[useEffect() > handleVisibilityChange]": ()=>{
                        if (document.visibilityState === "hidden") {
                            showExitMessage();
                        }
                    }
                }["ExitMessage[useEffect() > handleVisibilityChange]"];
                const resetInactivity = {
                    "ExitMessage[useEffect() > resetInactivity]": ()=>{
                        clearTimeout(inactivityTimer);
                        setIsVisible(false);
                        inactivityTimer = setTimeout({
                            "ExitMessage[useEffect() > resetInactivity > setTimeout()]": ()=>{
                                showExitMessage();
                            }
                        }["ExitMessage[useEffect() > resetInactivity > setTimeout()]"], 300000);
                    }
                }["ExitMessage[useEffect() > resetInactivity]"];
                document.addEventListener("visibilitychange", handleVisibilityChange);
                document.addEventListener("mousemove", resetInactivity);
                document.addEventListener("touchstart", resetInactivity);
                resetInactivity();
                return ()=>{
                    clearTimeout(inactivityTimer);
                    document.removeEventListener("visibilitychange", handleVisibilityChange);
                    document.removeEventListener("mousemove", resetInactivity);
                    document.removeEventListener("touchstart", resetInactivity);
                };
            }
        })["ExitMessage[useEffect()]"];
        t2 = [
            showExitMessage
        ];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    if (!summary) {
        return null;
    }
    const hasStats = summary.connectionsAccepted > 0 || summary.newPosts > 0 || summary.messagesCount > 0;
    let t3;
    if ($[4] !== hasStats || $[5] !== isVisible || $[6] !== summary.connectionsAccepted || $[7] !== summary.message || $[8] !== summary.messagesCount || $[9] !== summary.newPosts) {
        t3 = isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                y: 20
            },
            transition: {
                duration: 0.2
            },
            className: "fixed bottom-20 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-neutral-900 rounded-xl px-4 py-3.5 shadow-lg border border-gray-200 dark:border-neutral-700 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "ExitMessage[<button>.onClick]": ()=>setIsVisible(false)
                        }["ExitMessage[<button>.onClick]"],
                        className: "absolute top-2.5 right-2.5 p-0.5 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-3.5 h-3.5 text-gray-300 dark:text-neutral-500"
                        }, void 0, false, {
                            fileName: "[project]/src/components/engagement/ExitMessage.tsx",
                            lineNumber: 106,
                            columnNumber: 160
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/engagement/ExitMessage.tsx",
                        lineNumber: 104,
                        columnNumber: 219
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-900 dark:text-white pr-6 leading-relaxed",
                        children: summary.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/engagement/ExitMessage.tsx",
                        lineNumber: 106,
                        columnNumber: 234
                    }, this),
                    hasStats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 mt-2 text-xs text-gray-400 dark:text-neutral-500",
                        children: [
                            summary.connectionsAccepted > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    summary.connectionsAccepted,
                                    " connection",
                                    summary.connectionsAccepted > 1 ? "s" : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/engagement/ExitMessage.tsx",
                                lineNumber: 106,
                                columnNumber: 468
                            }, this),
                            summary.newPosts > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    summary.newPosts,
                                    " post",
                                    summary.newPosts > 1 ? "s" : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/engagement/ExitMessage.tsx",
                                lineNumber: 106,
                                columnNumber: 591
                            }, this),
                            summary.messagesCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    summary.messagesCount,
                                    " message",
                                    summary.messagesCount > 1 ? "s" : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/engagement/ExitMessage.tsx",
                                lineNumber: 106,
                                columnNumber: 691
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/engagement/ExitMessage.tsx",
                        lineNumber: 106,
                        columnNumber: 342
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/engagement/ExitMessage.tsx",
                lineNumber: 104,
                columnNumber: 84
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/engagement/ExitMessage.tsx",
            lineNumber: 93,
            columnNumber: 23
        }, this);
        $[4] = hasStats;
        $[5] = isVisible;
        $[6] = summary.connectionsAccepted;
        $[7] = summary.message;
        $[8] = summary.messagesCount;
        $[9] = summary.newPosts;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    let t4;
    if ($[11] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/engagement/ExitMessage.tsx",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[11] = t3;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    return t4;
}
_s(ExitMessage, "WZXll2FLMLRxHXDCMkj+SiZ94VU=");
_c = ExitMessage;
var _c;
__turbopack_context__.k.register(_c, "ExitMessage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/engagement/EngagementProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EngagementProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$engagement$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/engagement.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$engagement$2f$ExitMessage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/engagement/ExitMessage.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function EngagementProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "66fccff4554d8d147153d31d9e6422cf344f69359c1987eb1634f453bf6a823b") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "66fccff4554d8d147153d31d9e6422cf344f69359c1987eb1634f453bf6a823b";
    }
    const { children } = t0;
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const loginRecorded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    let t1;
    let t2;
    if ($[1] !== user) {
        t1 = ({
            "EngagementProvider[useEffect()]": ()=>{
                if (user && !loginRecorded.current) {
                    loginRecorded.current = true;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$engagement$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordLogin"])().catch(console.error);
                }
            }
        })["EngagementProvider[useEffect()]"];
        t2 = [
            user
        ];
        $[1] = user;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== user) {
        t3 = user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$engagement$2f$ExitMessage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/engagement/EngagementProvider.tsx",
            lineNumber: 53,
            columnNumber: 18
        }, this);
        $[4] = user;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== children || $[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                children,
                t3
            ]
        }, void 0, true);
        $[6] = children;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    return t4;
}
_s(EngagementProvider, "DDLeQYt6B8KvievVtps2a2TDLCU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = EngagementProvider;
var _c;
__turbopack_context__.k.register(_c, "EngagementProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/gifts/GiftCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GiftCard",
    ()=>GiftCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
;
const variantConfig = {
    original: {
        label: 'Profile Frame',
        title: 'Amber',
        description: 'Warm amber glow around your avatar.'
    },
    hue: {
        label: 'Profile Frame',
        title: 'Vibrant',
        description: 'Blue-to-purple gradient around your avatar.'
    }
};
function GiftCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(55);
    if ($[0] !== "250b7054be440e3d5020628122b83ec17b68981d1f738633b849d226ad063c9d") {
        for(let $i = 0; $i < 55; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "250b7054be440e3d5020628122b83ec17b68981d1f738633b849d226ad063c9d";
    }
    const { variant, onClick, isSelectable, selected, compact } = t0;
    const config = variantConfig[variant];
    if (compact) {
        const t1 = isSelectable ? onClick : undefined;
        let t2;
        if ($[1] !== isSelectable) {
            t2 = isSelectable ? {
                scale: 1.05
            } : undefined;
            $[1] = isSelectable;
            $[2] = t2;
        } else {
            t2 = $[2];
        }
        let t3;
        if ($[3] !== isSelectable) {
            t3 = isSelectable ? {
                scale: 0.95
            } : undefined;
            $[3] = isSelectable;
            $[4] = t3;
        } else {
            t3 = $[4];
        }
        const t4 = isSelectable ? "pointer" : "default";
        const t5 = selected ? "3px solid var(--gift-electric-border-color)" : undefined;
        let t6;
        if ($[5] !== t4 || $[6] !== t5) {
            t6 = {
                cursor: t4,
                outline: t5,
                outlineOffset: 2
            };
            $[5] = t4;
            $[6] = t5;
            $[7] = t6;
        } else {
            t6 = $[7];
        }
        let t7;
        if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gift-card-circle-inner"
            }, void 0, false, {
                fileName: "[project]/src/components/gifts/GiftCard.tsx",
                lineNumber: 85,
                columnNumber: 12
            }, this);
            $[8] = t7;
        } else {
            t7 = $[8];
        }
        let t8;
        if ($[9] !== config.title) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "gift-card-circle-label",
                children: config.title
            }, void 0, false, {
                fileName: "[project]/src/components/gifts/GiftCard.tsx",
                lineNumber: 92,
                columnNumber: 12
            }, this);
            $[9] = config.title;
            $[10] = t8;
        } else {
            t8 = $[10];
        }
        let t9;
        if ($[11] !== t1 || $[12] !== t2 || $[13] !== t3 || $[14] !== t6 || $[15] !== t8 || $[16] !== variant) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "gift-card-circle",
                "data-variant": variant,
                onClick: t1,
                whileHover: t2,
                whileTap: t3,
                style: t6,
                children: [
                    t7,
                    t8
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/gifts/GiftCard.tsx",
                lineNumber: 100,
                columnNumber: 12
            }, this);
            $[11] = t1;
            $[12] = t2;
            $[13] = t3;
            $[14] = t6;
            $[15] = t8;
            $[16] = variant;
            $[17] = t9;
        } else {
            t9 = $[17];
        }
        return t9;
    }
    const t1 = isSelectable ? onClick : undefined;
    let t2;
    if ($[18] !== isSelectable) {
        t2 = isSelectable ? {
            scale: 1.02
        } : undefined;
        $[18] = isSelectable;
        $[19] = t2;
    } else {
        t2 = $[19];
    }
    let t3;
    if ($[20] !== isSelectable) {
        t3 = isSelectable ? {
            scale: 0.98
        } : undefined;
        $[20] = isSelectable;
        $[21] = t3;
    } else {
        t3 = $[21];
    }
    const t4 = isSelectable ? "pointer" : "default";
    const t5 = selected ? "3px solid var(--gift-electric-border-color)" : undefined;
    let t6;
    if ($[22] !== t4 || $[23] !== t5) {
        t6 = {
            cursor: t4,
            outline: t5,
            outlineOffset: 2
        };
        $[22] = t4;
        $[23] = t5;
        $[24] = t6;
    } else {
        t6 = $[24];
    }
    const t7 = `gift-main-card gift-main-card-${variant}`;
    let t8;
    if ($[25] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "gift-border-outer",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t7
            }, void 0, false, {
                fileName: "[project]/src/components/gifts/GiftCard.tsx",
                lineNumber: 152,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/GiftCard.tsx",
            lineNumber: 152,
            columnNumber: 10
        }, this);
        $[25] = t7;
        $[26] = t8;
    } else {
        t8 = $[26];
    }
    let t10;
    let t9;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "gift-glow-layer-1"
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/GiftCard.tsx",
            lineNumber: 161,
            columnNumber: 10
        }, this);
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "gift-glow-layer-2"
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/GiftCard.tsx",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        $[27] = t10;
        $[28] = t9;
    } else {
        t10 = $[27];
        t9 = $[28];
    }
    let t11;
    if ($[29] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "gift-inner-container",
            children: [
                t8,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/gifts/GiftCard.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[29] = t8;
        $[30] = t11;
    } else {
        t11 = $[30];
    }
    let t12;
    let t13;
    let t14;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "gift-overlay-1"
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/GiftCard.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "gift-overlay-2"
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/GiftCard.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "gift-background-glow"
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/GiftCard.tsx",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[31] = t12;
        $[32] = t13;
        $[33] = t14;
    } else {
        t12 = $[31];
        t13 = $[32];
        t14 = $[33];
    }
    let t15;
    if ($[34] !== config.label) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "gift-scrollbar-glass",
            children: config.label
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/GiftCard.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[34] = config.label;
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    let t16;
    if ($[36] !== config.title) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "gift-title",
            children: config.title
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/GiftCard.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[36] = config.title;
        $[37] = t16;
    } else {
        t16 = $[37];
    }
    let t17;
    if ($[38] !== t15 || $[39] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "gift-content-top",
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/gifts/GiftCard.tsx",
            lineNumber: 210,
            columnNumber: 11
        }, this);
        $[38] = t15;
        $[39] = t16;
        $[40] = t17;
    } else {
        t17 = $[40];
    }
    let t18;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
            className: "gift-divider"
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/GiftCard.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[41] = t18;
    } else {
        t18 = $[41];
    }
    let t19;
    if ($[42] !== config.description) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "gift-content-bottom",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "gift-description",
                children: config.description
            }, void 0, false, {
                fileName: "[project]/src/components/gifts/GiftCard.tsx",
                lineNumber: 226,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/GiftCard.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[42] = config.description;
        $[43] = t19;
    } else {
        t19 = $[43];
    }
    let t20;
    if ($[44] !== t17 || $[45] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "gift-content-container",
            children: [
                t17,
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/gifts/GiftCard.tsx",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[44] = t17;
        $[45] = t19;
        $[46] = t20;
    } else {
        t20 = $[46];
    }
    let t21;
    if ($[47] !== t1 || $[48] !== t11 || $[49] !== t2 || $[50] !== t20 || $[51] !== t3 || $[52] !== t6 || $[53] !== variant) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "gift-card-container",
            "data-variant": variant,
            onClick: t1,
            whileHover: t2,
            whileTap: t3,
            style: t6,
            children: [
                t11,
                t12,
                t13,
                t14,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/gifts/GiftCard.tsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[47] = t1;
        $[48] = t11;
        $[49] = t2;
        $[50] = t20;
        $[51] = t3;
        $[52] = t6;
        $[53] = variant;
        $[54] = t21;
    } else {
        t21 = $[54];
    }
    return t21;
}
_c = GiftCard;
var _c;
__turbopack_context__.k.register(_c, "GiftCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api/profile.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Profile API - Complete API client for all profile endpoints
__turbopack_context__.s([
    "addSkill",
    ()=>addSkill,
    "claimWelcomeGift",
    ()=>claimWelcomeGift,
    "createAchievement",
    ()=>createAchievement,
    "createCertificate",
    ()=>createCertificate,
    "createEducation",
    ()=>createEducation,
    "createExperience",
    ()=>createExperience,
    "createProject",
    ()=>createProject,
    "deleteAchievement",
    ()=>deleteAchievement,
    "deleteCertificate",
    ()=>deleteCertificate,
    "deleteEducation",
    ()=>deleteEducation,
    "deleteExperience",
    ()=>deleteExperience,
    "deleteProject",
    ()=>deleteProject,
    "deleteSkill",
    ()=>deleteSkill,
    "disconnectGitHub",
    ()=>disconnectGitHub,
    "getActivityHeatmap",
    ()=>getActivityHeatmap,
    "getActivityYears",
    ()=>getActivityYears,
    "getGitHubStats",
    ()=>getGitHubStats,
    "getProfile",
    ()=>getProfile,
    "getUserAchievements",
    ()=>getUserAchievements,
    "getUserCertificates",
    ()=>getUserCertificates,
    "getUserEducation",
    ()=>getUserEducation,
    "getUserExperiences",
    ()=>getUserExperiences,
    "getUserFeed",
    ()=>getUserFeed,
    "getUserProjects",
    ()=>getUserProjects,
    "profileAPI",
    ()=>profileAPI,
    "searchSkills",
    ()=>searchSkills,
    "startGitHubOAuth",
    ()=>startGitHubOAuth,
    "syncGitHubStats",
    ()=>syncGitHubStats,
    "toggleProjectFeatured",
    ()=>toggleProjectFeatured,
    "updateAchievement",
    ()=>updateAchievement,
    "updateAvatar",
    ()=>updateAvatar,
    "updateBanner",
    ()=>updateBanner,
    "updateCertificate",
    ()=>updateCertificate,
    "updateEducation",
    ()=>updateEducation,
    "updateExperience",
    ()=>updateExperience,
    "updateProfile",
    ()=>updateProfile,
    "updateProject",
    ()=>updateProject,
    "updateSkill",
    ()=>updateSkill,
    "uploadCompanyLogo",
    ()=>uploadCompanyLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/client.ts [app-client] (ecmascript)");
;
async function uploadCompanyLogo(file) {
    const formData = new FormData();
    formData.append('image', file);
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/upload/logo', formData);
}
async function getProfile(usernameOrId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/users/${usernameOrId}/profile`);
}
async function updateProfile(data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put('/users/me', data);
}
async function updateAvatar(avatarUrl) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/users/me/avatar', {
        avatarUrl
    });
}
async function updateBanner(bannerUrl) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/users/me/banner', {
        bannerUrl
    });
}
async function claimWelcomeGift(profileRing) {
    const updated = await updateProfile({
        profileRing,
        hasClaimedWelcomeGift: true
    });
    return {
        profileRing: updated.profileRing ?? profileRing,
        hasClaimedWelcomeGift: updated.hasClaimedWelcomeGift ?? true
    };
}
async function getUserFeed(usernameOrId, page = 1, limit = 20, filter = 'all') {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/users/${usernameOrId}/feed`, {
        params: {
            page,
            limit,
            filter
        }
    });
}
async function getActivityHeatmap(userId, year) {
    const params = year ? {
        year
    } : {};
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/users/${userId}/activity`, {
        params
    });
}
async function getActivityYears(userId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/users/${userId}/activity/years`);
}
async function addSkill(data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/users/me/skills', data);
}
async function updateSkill(id, data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/users/me/skills/${id}`, data);
}
async function deleteSkill(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/users/me/skills/${id}`);
}
async function searchSkills(query) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/skills/search', {
        params: {
            q: query
        }
    });
}
async function createExperience(data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/users/me/experiences', data);
}
async function updateExperience(id, data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/users/me/experiences/${id}`, data);
}
async function deleteExperience(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/users/me/experiences/${id}`);
}
async function getUserExperiences(userId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/users/${userId}/experiences`);
}
async function createEducation(data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/users/me/education', data);
}
async function updateEducation(id, data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/users/me/education/${id}`, data);
}
async function deleteEducation(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/users/me/education/${id}`);
}
async function getUserEducation(userId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/users/${userId}/education`);
}
async function createProject(data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/users/me/projects', data);
}
async function updateProject(id, data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/users/me/projects/${id}`, data);
}
async function deleteProject(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/users/me/projects/${id}`);
}
async function toggleProjectFeatured(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/users/me/projects/${id}/feature`);
}
async function getUserProjects(userId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/users/${userId}/projects`);
}
async function createCertificate(data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/users/me/certificates', data);
}
async function updateCertificate(id, data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/users/me/certificates/${id}`, data);
}
async function deleteCertificate(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/users/me/certificates/${id}`);
}
async function getUserCertificates(userId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/users/${userId}/certificates`);
}
async function createAchievement(data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/users/me/achievements', data);
}
async function updateAchievement(id, data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/users/me/achievements/${id}`, data);
}
async function deleteAchievement(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/users/me/achievements/${id}`);
}
async function getUserAchievements(userId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/users/${userId}/achievements`);
}
async function startGitHubOAuth() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/integrations/github/start');
}
async function syncGitHubStats() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/integrations/github/sync');
}
async function disconnectGitHub() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/integrations/github/disconnect');
}
async function getGitHubStats() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/integrations/github/stats');
}
const profileAPI = {
    getProfile,
    updateProfile,
    updateAvatar,
    updateBanner,
    getUserFeed,
    getActivityHeatmap,
    getActivityYears,
    addSkill,
    updateSkill,
    deleteSkill,
    searchSkills,
    createExperience,
    updateExperience,
    deleteExperience,
    getUserExperiences,
    createEducation,
    updateEducation,
    deleteEducation,
    getUserEducation,
    createProject,
    updateProject,
    deleteProject,
    toggleProjectFeatured,
    getUserProjects,
    createCertificate,
    updateCertificate,
    deleteCertificate,
    getUserCertificates,
    createAchievement,
    updateAchievement,
    deleteAchievement,
    getUserAchievements,
    startGitHubOAuth,
    syncGitHubStats,
    disconnectGitHub,
    getGitHubStats
};
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
"[project]/src/components/gifts/GiftClaimModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GiftClaimModal",
    ()=>GiftClaimModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/canvas-confetti/dist/confetti.module.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gifts$2f$GiftCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/gifts/GiftCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/profile.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
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
function GiftClaimModal({ isOpen, onClose, onSuccess }) {
    _s();
    const { updateUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [selectedRing, setSelectedRing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [applying, setApplying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [confettiFired, setConfettiFired] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const firePartyConfetti = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GiftClaimModal.useCallback[firePartyConfetti]": ()=>{
            if (confettiFired) return;
            setConfettiFired(true);
            const duration = 2500;
            const end = Date.now() + duration;
            const frame = {
                "GiftClaimModal.useCallback[firePartyConfetti].frame": ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                        particleCount: 4,
                        angle: 60,
                        spread: 55,
                        origin: {
                            x: 0.2,
                            y: 0.8
                        },
                        colors: [
                            '#dd8448',
                            '#3b82f6',
                            '#22c55e',
                            '#eab308'
                        ]
                    });
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                        particleCount: 4,
                        angle: 120,
                        spread: 55,
                        origin: {
                            x: 0.8,
                            y: 0.8
                        },
                        colors: [
                            '#dd8448',
                            '#3b82f6',
                            '#22c55e',
                            '#eab308'
                        ]
                    });
                    if (Date.now() < end) {
                        requestAnimationFrame(frame);
                    }
                }
            }["GiftClaimModal.useCallback[firePartyConfetti].frame"];
            frame();
            setTimeout({
                "GiftClaimModal.useCallback[firePartyConfetti]": ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                        particleCount: 100,
                        spread: 70,
                        origin: {
                            y: 0.6
                        },
                        colors: [
                            '#dd8448',
                            '#3b82f6',
                            '#22c55e',
                            '#eab308',
                            '#ec4899'
                        ]
                    });
                }
            }["GiftClaimModal.useCallback[firePartyConfetti]"], 300);
        }
    }["GiftClaimModal.useCallback[firePartyConfetti]"], [
        confettiFired
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GiftClaimModal.useEffect": ()=>{
            if (isOpen) {
                firePartyConfetti();
            } else {
                setConfettiFired(false);
                setSelectedRing(null);
            }
        }
    }["GiftClaimModal.useEffect"], [
        isOpen,
        firePartyConfetti
    ]);
    const handleApply = async ()=>{
        if (!selectedRing) return;
        setApplying(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["claimWelcomeGift"])(selectedRing);
            updateUser({
                profileRing: selectedRing,
                hasClaimedWelcomeGift: true
            });
            onSuccess(selectedRing);
            onClose();
        } catch (err) {
            console.error('Failed to claim gift:', err);
        } finally{
            setApplying(false);
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "fixed inset-0 z-[100] flex items-center justify-center p-4",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-black/70 backdrop-blur-sm",
                    onClick: onClose
                }, void 0, false, {
                    fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-neutral-900 border border-neutral-700 shadow-2xl",
                    initial: {
                        scale: 0.9,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    exit: {
                        scale: 0.9,
                        opacity: 0
                    },
                    transition: {
                        type: 'spring',
                        damping: 25,
                        stiffness: 300
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "absolute w-0 h-0",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                        id: "gift-filter-original",
                                        colorInterpolationFilters: "sRGB",
                                        x: "-20%",
                                        y: "-20%",
                                        width: "140%",
                                        height: "140%",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                                                type: "turbulence",
                                                baseFrequency: "0.02",
                                                numOctaves: "10",
                                                result: "noise1",
                                                seed: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feOffset", {
                                                in: "noise1",
                                                dx: "0",
                                                dy: "0",
                                                result: "offsetNoise1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                                    attributeName: "dy",
                                                    values: "700; 0",
                                                    dur: "6s",
                                                    repeatCount: "indefinite",
                                                    calcMode: "linear"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                                                type: "turbulence",
                                                baseFrequency: "0.02",
                                                numOctaves: "10",
                                                result: "noise2",
                                                seed: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feOffset", {
                                                in: "noise2",
                                                dx: "0",
                                                dy: "0",
                                                result: "offsetNoise2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                                    attributeName: "dy",
                                                    values: "0; -700",
                                                    dur: "6s",
                                                    repeatCount: "indefinite",
                                                    calcMode: "linear"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                                                type: "turbulence",
                                                baseFrequency: "0.02",
                                                numOctaves: "10",
                                                result: "noise3",
                                                seed: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                                lineNumber: 131,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feOffset", {
                                                in: "noise3",
                                                dx: "0",
                                                dy: "0",
                                                result: "offsetNoise3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                                    attributeName: "dx",
                                                    values: "490; 0",
                                                    dur: "6s",
                                                    repeatCount: "indefinite",
                                                    calcMode: "linear"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                                                type: "turbulence",
                                                baseFrequency: "0.02",
                                                numOctaves: "10",
                                                result: "noise4",
                                                seed: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feOffset", {
                                                in: "noise4",
                                                dx: "0",
                                                dy: "0",
                                                result: "offsetNoise4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                                    attributeName: "dx",
                                                    values: "0; -490",
                                                    dur: "6s",
                                                    repeatCount: "indefinite",
                                                    calcMode: "linear"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                                in: "offsetNoise1",
                                                in2: "offsetNoise2",
                                                result: "part1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                                in: "offsetNoise3",
                                                in2: "offsetNoise4",
                                                result: "part2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                                in: "part1",
                                                in2: "part2",
                                                mode: "color-dodge",
                                                result: "combinedNoise"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                                lineNumber: 141,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDisplacementMap", {
                                                in: "SourceGraphic",
                                                in2: "combinedNoise",
                                                scale: "30",
                                                xChannelSelector: "R",
                                                yChannelSelector: "B"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                                lineNumber: 142,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                        id: "gift-filter-hue",
                                        colorInterpolationFilters: "sRGB",
                                        x: "-20%",
                                        y: "-20%",
                                        width: "140%",
                                        height: "140%",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                                                type: "turbulence",
                                                baseFrequency: "0.02",
                                                numOctaves: "7"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                                type: "hueRotate",
                                                result: "pt1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                                    attributeName: "values",
                                                    values: "0;360;",
                                                    dur: "0.6s",
                                                    repeatCount: "indefinite",
                                                    calcMode: "paced"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {}, void 0, false, {
                                                fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                                                type: "turbulence",
                                                baseFrequency: "0.03",
                                                numOctaves: "7",
                                                seed: "5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                                type: "hueRotate",
                                                result: "pt2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                                    attributeName: "values",
                                                    values: "0; 333; 199; 286; 64; 168; 256; 157; 360;",
                                                    dur: "5s",
                                                    repeatCount: "indefinite",
                                                    calcMode: "paced"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                                in: "pt1",
                                                in2: "pt2",
                                                mode: "normal",
                                                result: "combinedNoise"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDisplacementMap", {
                                                in: "SourceGraphic",
                                                in2: "combinedNoise",
                                                scale: "30",
                                                xChannelSelector: "R",
                                                yChannelSelector: "B"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold text-white",
                                            children: "Choose Profile Frame"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: onClose,
                                            className: "p-2 rounded-full hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                                lineNumber: 164,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-neutral-400 mb-6",
                                    children: "Choose one profile frame to apply to your avatar. It will be visible to everyone who visits your profile!"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row gap-8 justify-center items-end mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gifts$2f$GiftCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GiftCard"], {
                                            variant: "original",
                                            compact: true,
                                            isSelectable: true,
                                            selected: selectedRing === 'original',
                                            onClick: ()=>setSelectedRing('original')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gifts$2f$GiftCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GiftCard"], {
                                            variant: "hue",
                                            compact: true,
                                            isSelectable: true,
                                            selected: selectedRing === 'hue',
                                            onClick: ()=>setSelectedRing('hue')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            onClick: onClose,
                                            className: "border-neutral-600 text-neutral-300 hover:bg-neutral-800",
                                            children: "Maybe Later"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleApply,
                                            disabled: !selectedRing || applying,
                                            className: "bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50",
                                            children: applying ? 'Applying...' : 'Apply to Profile'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
            lineNumber: 97,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/gifts/GiftClaimModal.tsx",
        lineNumber: 96,
        columnNumber: 10
    }, this);
}
_s(GiftClaimModal, "vOndeaUTvj5WYoArBOb0W4k9Ymk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = GiftClaimModal;
var _c;
__turbopack_context__.k.register(_c, "GiftClaimModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/gifts/WelcomeGiftModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WelcomeGiftModal",
    ()=>WelcomeGiftModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gifts$2f$GiftCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/gifts/GiftCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gifts$2f$GiftClaimModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/gifts/GiftClaimModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
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
const VARIANTS = [
    'original',
    'hue'
];
function WelcomeGiftModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(48);
    if ($[0] !== "54980d73fe17f9a7d950fbdac4d8299a8accf3a1c46b9182e2c4dbe9a60ecdd5") {
        for(let $i = 0; $i < 48; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "54980d73fe17f9a7d950fbdac4d8299a8accf3a1c46b9182e2c4dbe9a60ecdd5";
    }
    const { isOpen, onClose, onClaimSuccess } = t0;
    const [showClaimModal, setShowClaimModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [previewVariant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(_WelcomeGiftModalUseState);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "WelcomeGiftModal[handleClaim]": ()=>{
                setShowClaimModal(true);
            }
        })["WelcomeGiftModal[handleClaim]"];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const handleClaim = t1;
    let t2;
    if ($[2] !== onClaimSuccess || $[3] !== onClose) {
        t2 = ({
            "WelcomeGiftModal[handleClaimSuccess]": (profileRing)=>{
                onClaimSuccess(profileRing);
                setShowClaimModal(false);
                onClose();
            }
        })["WelcomeGiftModal[handleClaimSuccess]"];
        $[2] = onClaimSuccess;
        $[3] = onClose;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const handleClaimSuccess = t2;
    if (!isOpen) {
        return null;
    }
    let t3;
    let t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            opacity: 0
        };
        t4 = {
            opacity: 1
        };
        t5 = {
            opacity: 0
        };
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
    } else {
        t3 = $[5];
        t4 = $[6];
        t5 = $[7];
    }
    let t6;
    if ($[8] !== onClose) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-black/70 backdrop-blur-sm",
            onClick: onClose
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[8] = onClose;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t10;
    let t7;
    let t8;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            scale: 0.9,
            opacity: 0,
            y: 20
        };
        t8 = {
            scale: 1,
            opacity: 1,
            y: 0
        };
        t9 = {
            scale: 0.9,
            opacity: 0,
            y: 20
        };
        t10 = {
            type: "spring",
            damping: 25,
            stiffness: 300
        };
        $[10] = t10;
        $[11] = t7;
        $[12] = t8;
        $[13] = t9;
    } else {
        t10 = $[10];
        t7 = $[11];
        t8 = $[12];
        t9 = $[13];
    }
    let t11;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
            type: "turbulence",
            baseFrequency: "0.02",
            numOctaves: "10",
            result: "noise1",
            seed: "1"
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    let t13;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feOffset", {
            in: "noise1",
            dx: "0",
            dy: "0",
            result: "offsetNoise1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                attributeName: "dy",
                values: "700; 0",
                dur: "6s",
                repeatCount: "indefinite",
                calcMode: "linear"
            }, void 0, false, {
                fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
                lineNumber: 136,
                columnNumber: 69
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
            type: "turbulence",
            baseFrequency: "0.02",
            numOctaves: "10",
            result: "noise2",
            seed: "1"
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[15] = t12;
        $[16] = t13;
    } else {
        t12 = $[15];
        t13 = $[16];
    }
    let t14;
    let t15;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feOffset", {
            in: "noise2",
            dx: "0",
            dy: "0",
            result: "offsetNoise2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                attributeName: "dy",
                values: "0; -700",
                dur: "6s",
                repeatCount: "indefinite",
                calcMode: "linear"
            }, void 0, false, {
                fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
                lineNumber: 147,
                columnNumber: 69
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
            type: "turbulence",
            baseFrequency: "0.02",
            numOctaves: "10",
            result: "noise3",
            seed: "2"
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[17] = t14;
        $[18] = t15;
    } else {
        t14 = $[17];
        t15 = $[18];
    }
    let t16;
    let t17;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feOffset", {
            in: "noise3",
            dx: "0",
            dy: "0",
            result: "offsetNoise3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                attributeName: "dx",
                values: "490; 0",
                dur: "6s",
                repeatCount: "indefinite",
                calcMode: "linear"
            }, void 0, false, {
                fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
                lineNumber: 158,
                columnNumber: 69
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
            type: "turbulence",
            baseFrequency: "0.02",
            numOctaves: "10",
            result: "noise4",
            seed: "2"
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[19] = t16;
        $[20] = t17;
    } else {
        t16 = $[19];
        t17 = $[20];
    }
    let t18;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
            id: "gift-filter-original",
            colorInterpolationFilters: "sRGB",
            x: "-20%",
            y: "-20%",
            width: "140%",
            height: "140%",
            children: [
                t11,
                t12,
                t13,
                t14,
                t15,
                t16,
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feOffset", {
                    in: "noise4",
                    dx: "0",
                    dy: "0",
                    result: "offsetNoise4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                        attributeName: "dx",
                        values: "0; -490",
                        dur: "6s",
                        repeatCount: "indefinite",
                        calcMode: "linear"
                    }, void 0, false, {
                        fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
                        lineNumber: 168,
                        columnNumber: 216
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
                    lineNumber: 168,
                    columnNumber: 158
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                    in: "offsetNoise1",
                    in2: "offsetNoise2",
                    result: "part1"
                }, void 0, false, {
                    fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
                    lineNumber: 168,
                    columnNumber: 326
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                    in: "offsetNoise3",
                    in2: "offsetNoise4",
                    result: "part2"
                }, void 0, false, {
                    fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
                    lineNumber: 168,
                    columnNumber: 393
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                    in: "part1",
                    in2: "part2",
                    mode: "color-dodge",
                    result: "combinedNoise"
                }, void 0, false, {
                    fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
                    lineNumber: 168,
                    columnNumber: 460
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDisplacementMap", {
                    in: "SourceGraphic",
                    in2: "combinedNoise",
                    scale: "30",
                    xChannelSelector: "R",
                    yChannelSelector: "B"
                }, void 0, false, {
                    fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
                    lineNumber: 168,
                    columnNumber: 536
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[21] = t18;
    } else {
        t18 = $[21];
    }
    let t19;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
            type: "turbulence",
            baseFrequency: "0.02",
            numOctaves: "7"
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[22] = t19;
    } else {
        t19 = $[22];
    }
    let t20;
    let t21;
    let t22;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
            type: "hueRotate",
            result: "pt1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                attributeName: "values",
                values: "0;360;",
                dur: "0.6s",
                repeatCount: "indefinite",
                calcMode: "paced"
            }, void 0, false, {
                fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
                lineNumber: 184,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {}, void 0, false, {
            fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
            type: "turbulence",
            baseFrequency: "0.03",
            numOctaves: "7",
            seed: "5"
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[23] = t20;
        $[24] = t21;
        $[25] = t22;
    } else {
        t20 = $[23];
        t21 = $[24];
        t22 = $[25];
    }
    let t23;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "absolute w-0 h-0",
            "aria-hidden": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    t18,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: "gift-filter-hue",
                        colorInterpolationFilters: "sRGB",
                        x: "-20%",
                        y: "-20%",
                        width: "140%",
                        height: "140%",
                        children: [
                            t19,
                            t20,
                            t21,
                            t22,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                type: "hueRotate",
                                result: "pt2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                    attributeName: "values",
                                    values: "0; 333; 199; 286; 64; 168; 256; 157; 360;",
                                    dur: "5s",
                                    repeatCount: "indefinite",
                                    calcMode: "paced"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
                                    lineNumber: 197,
                                    columnNumber: 247
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
                                lineNumber: 197,
                                columnNumber: 202
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                in: "pt1",
                                in2: "pt2",
                                mode: "normal",
                                result: "combinedNoise"
                            }, void 0, false, {
                                fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
                                lineNumber: 197,
                                columnNumber: 399
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDisplacementMap", {
                                in: "SourceGraphic",
                                in2: "combinedNoise",
                                scale: "30",
                                xChannelSelector: "R",
                                yChannelSelector: "B"
                            }, void 0, false, {
                                fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
                                lineNumber: 197,
                                columnNumber: 466
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
                        lineNumber: 197,
                        columnNumber: 75
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
                lineNumber: 197,
                columnNumber: 64
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[26] = t23;
    } else {
        t23 = $[26];
    }
    let t24;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-white mb-2",
                    children: "Welcome to Vormex!"
                }, void 0, false, {
                    fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
                    lineNumber: 204,
                    columnNumber: 45
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-neutral-400",
                    children: "You've received a profile frame — a glowing ring around your avatar."
                }, void 0, false, {
                    fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
                    lineNumber: 204,
                    columnNumber: 119
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[27] = t24;
    } else {
        t24 = $[27];
    }
    let t25;
    if ($[28] !== previewVariant) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gifts$2f$GiftCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GiftCard"], {
                variant: previewVariant,
                compact: true
            }, void 0, false, {
                fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
                lineNumber: 211,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[28] = previewVariant;
        $[29] = t25;
    } else {
        t25 = $[29];
    }
    let t26;
    if ($[30] !== onClose) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            onClick: onClose,
            className: "border-neutral-600 text-neutral-300 hover:bg-neutral-800",
            children: "Maybe Later"
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[30] = onClose;
        $[31] = t26;
    } else {
        t26 = $[31];
    }
    let t27;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: handleClaim,
            className: "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold",
            children: "Claim Gift"
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
            lineNumber: 227,
            columnNumber: 11
        }, this);
        $[32] = t27;
    } else {
        t27 = $[32];
    }
    let t28;
    if ($[33] !== t26) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row gap-3 justify-center",
            children: [
                t26,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[33] = t26;
        $[34] = t28;
    } else {
        t28 = $[34];
    }
    let t29;
    if ($[35] !== t25 || $[36] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "relative w-full max-w-md rounded-2xl bg-neutral-900 border border-neutral-700 shadow-2xl p-6",
            initial: t7,
            animate: t8,
            exit: t9,
            transition: t10,
            onClick: _WelcomeGiftModalMotionDivOnClick,
            children: [
                t23,
                t24,
                t25,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
            lineNumber: 242,
            columnNumber: 11
        }, this);
        $[35] = t25;
        $[36] = t28;
        $[37] = t29;
    } else {
        t29 = $[37];
    }
    let t30;
    if ($[38] !== t29 || $[39] !== t6) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "fixed inset-0 z-[100] flex items-center justify-center p-4",
                initial: t3,
                animate: t4,
                exit: t5,
                children: [
                    t6,
                    t29
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
                lineNumber: 251,
                columnNumber: 28
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
            lineNumber: 251,
            columnNumber: 11
        }, this);
        $[38] = t29;
        $[39] = t6;
        $[40] = t30;
    } else {
        t30 = $[40];
    }
    let t31;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = ({
            "WelcomeGiftModal[<GiftClaimModal>.onClose]": ()=>setShowClaimModal(false)
        })["WelcomeGiftModal[<GiftClaimModal>.onClose]"];
        $[41] = t31;
    } else {
        t31 = $[41];
    }
    let t32;
    if ($[42] !== handleClaimSuccess || $[43] !== showClaimModal) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gifts$2f$GiftClaimModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GiftClaimModal"], {
            isOpen: showClaimModal,
            onClose: t31,
            onSuccess: handleClaimSuccess
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/WelcomeGiftModal.tsx",
            lineNumber: 269,
            columnNumber: 11
        }, this);
        $[42] = handleClaimSuccess;
        $[43] = showClaimModal;
        $[44] = t32;
    } else {
        t32 = $[44];
    }
    let t33;
    if ($[45] !== t30 || $[46] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t30,
                t32
            ]
        }, void 0, true);
        $[45] = t30;
        $[46] = t32;
        $[47] = t33;
    } else {
        t33 = $[47];
    }
    return t33;
}
_s(WelcomeGiftModal, "4/7heTdDJyHXnWLCOR0/dnSUPRE=");
_c = WelcomeGiftModal;
function _WelcomeGiftModalMotionDivOnClick(e) {
    return e.stopPropagation();
}
function _WelcomeGiftModalUseState() {
    return VARIANTS[Math.floor(Math.random() * VARIANTS.length)];
}
var _c;
__turbopack_context__.k.register(_c, "WelcomeGiftModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/gifts/WelcomeGiftProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WelcomeGiftProvider",
    ()=>WelcomeGiftProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gifts$2f$WelcomeGiftModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/gifts/WelcomeGiftModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function WelcomeGiftProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "90edb0a198bfe5af7ec41dbc4cef51858b8f6d0129320e421bf8cff0f5eb40b8") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "90edb0a198bfe5af7ec41dbc4cef51858b8f6d0129320e421bf8cff0f5eb40b8";
    }
    const { children } = t0;
    const { user, isAuthenticated, loading, updateUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [showGift, setShowGift] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [, setHasChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] !== isAuthenticated || $[2] !== loading || $[3] !== user) {
        t1 = ({
            "WelcomeGiftProvider[useEffect()]": ()=>{
                if (loading || !isAuthenticated || !user) {
                    return;
                }
                if (user.hasClaimedWelcomeGift) {
                    setHasChecked(true);
                    return;
                }
                setShowGift(true);
                setHasChecked(true);
            }
        })["WelcomeGiftProvider[useEffect()]"];
        t2 = [
            user,
            isAuthenticated,
            loading
        ];
        $[1] = isAuthenticated;
        $[2] = loading;
        $[3] = user;
        $[4] = t1;
        $[5] = t2;
    } else {
        t1 = $[4];
        t2 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "WelcomeGiftProvider[handleClose]": ()=>{
                setShowGift(false);
            }
        })["WelcomeGiftProvider[handleClose]"];
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const handleClose = t3;
    let t4;
    if ($[7] !== updateUser || $[8] !== user) {
        t4 = ({
            "WelcomeGiftProvider[handleClaimSuccess]": (profileRing)=>{
                updateUser({
                    ...user,
                    profileRing,
                    hasClaimedWelcomeGift: true
                });
                setShowGift(false);
            }
        })["WelcomeGiftProvider[handleClaimSuccess]"];
        $[7] = updateUser;
        $[8] = user;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const handleClaimSuccess = t4;
    let t5;
    if ($[10] !== handleClaimSuccess || $[11] !== showGift) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gifts$2f$WelcomeGiftModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WelcomeGiftModal"], {
            isOpen: showGift,
            onClose: handleClose,
            onClaimSuccess: handleClaimSuccess
        }, void 0, false, {
            fileName: "[project]/src/components/gifts/WelcomeGiftProvider.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[10] = handleClaimSuccess;
        $[11] = showGift;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== children || $[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                children,
                t5
            ]
        }, void 0, true);
        $[13] = children;
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    return t6;
}
_s(WelcomeGiftProvider, "Sci9gl3ptXWT4qdq5urVg30Mj9o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = WelcomeGiftProvider;
var _c;
__turbopack_context__.k.register(_c, "WelcomeGiftProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_2da1de9d._.js.map