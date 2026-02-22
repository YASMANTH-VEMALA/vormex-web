(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/api/onboarding.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "onboardingAPI",
    ()=>onboardingAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/client.ts [app-client] (ecmascript)");
;
const onboardingAPI = {
    getOnboarding: async ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/onboarding');
    },
    updateStep: async (step, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/onboarding/step', {
            step,
            data
        });
    },
    completeOnboarding: async ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/onboarding/complete');
    },
    getInitialMatches: async ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/onboarding/matches');
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/onboarding/steps/StepGoals.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StepGoals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const GOALS = [
    {
        id: 'learn_coding',
        label: 'Learn to Code',
        emoji: '💻',
        description: 'Master programming languages & build projects'
    },
    {
        id: 'web_dev',
        label: 'Web Development',
        emoji: '🌐',
        description: 'Build websites & web applications'
    },
    {
        id: 'mobile_dev',
        label: 'Mobile Development',
        emoji: '📱',
        description: 'Build Android/iOS apps'
    },
    {
        id: 'ai_ml',
        label: 'AI & Machine Learning',
        emoji: '🤖',
        description: 'Explore artificial intelligence & data'
    },
    {
        id: 'competitive_programming',
        label: 'Competitive Programming',
        emoji: '🏆',
        description: 'DSA, LeetCode & coding contests'
    },
    {
        id: 'start_business',
        label: 'Start a Business',
        emoji: '🚀',
        description: 'Build a startup & find co-founders'
    },
    {
        id: 'get_internship',
        label: 'Get an Internship',
        emoji: '💼',
        description: 'Land internships at top companies'
    },
    {
        id: 'design',
        label: 'UI/UX Design',
        emoji: '🎨',
        description: 'Create beautiful user experiences'
    },
    {
        id: 'data_science',
        label: 'Data Science',
        emoji: '📊',
        description: 'Analyze data & build insights'
    },
    {
        id: 'cybersecurity',
        label: 'Cybersecurity',
        emoji: '🔒',
        description: 'Ethical hacking & security'
    },
    {
        id: 'devops',
        label: 'DevOps & Cloud',
        emoji: '☁️',
        description: 'Deploy, scale & manage infrastructure'
    },
    {
        id: 'content_creation',
        label: 'Content Creation',
        emoji: '🎬',
        description: 'YouTube, blogging & tech content'
    },
    {
        id: 'research',
        label: 'Research & Academia',
        emoji: '🔬',
        description: 'Papers, publications & research'
    },
    {
        id: 'freelance',
        label: 'Freelancing',
        emoji: '💰',
        description: 'Build a freelance career'
    }
];
function StepGoals(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "1b286e3f7f0f0560c73b0207f0262ab9bd6efc5e3aff2b96deca89111c76f4c9") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1b286e3f7f0f0560c73b0207f0262ab9bd6efc5e3aff2b96deca89111c76f4c9";
    }
    const { initialData, onComplete, saving } = t0;
    const [primary, setPrimary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.primaryGoal || "");
    let t1;
    if ($[1] !== initialData?.secondaryGoals) {
        t1 = initialData?.secondaryGoals || [];
        $[1] = initialData?.secondaryGoals;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [secondary, setSecondary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] !== primary) {
        t2 = ({
            "StepGoals[toggleSecondary]": (id)=>{
                if (id === primary) {
                    return;
                }
                setSecondary({
                    "StepGoals[toggleSecondary > setSecondary()]": (prev)=>prev.includes(id) ? prev.filter({
                            "StepGoals[toggleSecondary > setSecondary() > prev.filter()]": (g)=>g !== id
                        }["StepGoals[toggleSecondary > setSecondary() > prev.filter()]"]) : prev.length < 3 ? [
                            ...prev,
                            id
                        ] : prev
                }["StepGoals[toggleSecondary > setSecondary()]"]);
            }
        })["StepGoals[toggleSecondary]"];
        $[3] = primary;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const toggleSecondary = t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "StepGoals[handlePrimarySelect]": (id_0)=>{
                setPrimary(id_0);
                setSecondary({
                    "StepGoals[handlePrimarySelect > setSecondary()]": (prev_0)=>prev_0.filter({
                            "StepGoals[handlePrimarySelect > setSecondary() > prev_0.filter()]": (g_0)=>g_0 !== id_0
                        }["StepGoals[handlePrimarySelect > setSecondary() > prev_0.filter()]"])
                }["StepGoals[handlePrimarySelect > setSecondary()]"]);
            }
        })["StepGoals[handlePrimarySelect]"];
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const handlePrimarySelect = t3;
    const canContinue = primary !== "";
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-sm text-neutral-500 dark:text-neutral-400",
            children: [
                "Select your ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-blue-500",
                    children: "primary goal"
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/steps/StepGoals.tsx",
                    lineNumber: 145,
                    columnNumber: 96
                }, this),
                ", then optionally pick up to 3 secondary interests"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/steps/StepGoals.tsx",
            lineNumber: 145,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== primary || $[8] !== secondary || $[9] !== toggleSecondary) {
        t5 = GOALS.map({
            "StepGoals[GOALS.map()]": (goal, i)=>{
                const isPrimary = primary === goal.id;
                const isSecondary = secondary.includes(goal.id);
                const isSelected = isPrimary || isSecondary;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: i * 0.03
                    },
                    onClick: {
                        "StepGoals[GOALS.map() > <motion.button>.onClick]": ()=>{
                            if (!primary || isPrimary) {
                                handlePrimarySelect(goal.id);
                            } else {
                                toggleSecondary(goal.id);
                            }
                        }
                    }["StepGoals[GOALS.map() > <motion.button>.onClick]"],
                    className: `relative p-4 rounded-2xl border-2 text-left transition-all duration-200 group ${isPrimary ? "border-blue-500 bg-blue-50 dark:bg-blue-950/40 shadow-lg shadow-blue-500/10" : isSecondary ? "border-purple-400 bg-purple-50 dark:bg-purple-950/30" : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 bg-white dark:bg-neutral-900"}`,
                    children: [
                        isPrimary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute -top-2 -right-2 bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full",
                            children: "PRIMARY"
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/steps/StepGoals.tsx",
                            lineNumber: 173,
                            columnNumber: 465
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-2xl block mb-1",
                            children: goal.emoji
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/steps/StepGoals.tsx",
                            lineNumber: 173,
                            columnNumber: 593
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `font-semibold text-sm block ${isSelected ? "text-blue-600 dark:text-blue-400" : "text-neutral-800 dark:text-neutral-200"}`,
                            children: goal.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/steps/StepGoals.tsx",
                            lineNumber: 173,
                            columnNumber: 650
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-neutral-500 dark:text-neutral-400 leading-tight block mt-0.5",
                            children: goal.description
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/steps/StepGoals.tsx",
                            lineNumber: 173,
                            columnNumber: 811
                        }, this)
                    ]
                }, goal.id, true, {
                    fileName: "[project]/src/components/onboarding/steps/StepGoals.tsx",
                    lineNumber: 157,
                    columnNumber: 16
                }, this);
            }
        }["StepGoals[GOALS.map()]"]);
        $[7] = primary;
        $[8] = secondary;
        $[9] = toggleSecondary;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-1 custom-scrollbar",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/onboarding/steps/StepGoals.tsx",
            lineNumber: 185,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== onComplete || $[14] !== primary || $[15] !== secondary) {
        t7 = ({
            "StepGoals[<motion.button>.onClick]": ()=>onComplete({
                    primaryGoal: primary,
                    secondaryGoals: secondary
                })
        })["StepGoals[<motion.button>.onClick]"];
        $[13] = onComplete;
        $[14] = primary;
        $[15] = secondary;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    const t8 = !canContinue || saving;
    const t9 = `w-full py-4 rounded-2xl font-semibold text-white transition-all duration-200 ${canContinue && !saving ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg shadow-blue-500/25" : "bg-neutral-300 dark:bg-neutral-700 cursor-not-allowed"}`;
    let t10;
    if ($[17] !== canContinue) {
        t10 = canContinue ? {
            scale: 0.98
        } : {};
        $[17] = canContinue;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== saving) {
        t11 = saving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center justify-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/steps/StepGoals.tsx",
                    lineNumber: 220,
                    columnNumber: 77
                }, this),
                "Saving..."
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/steps/StepGoals.tsx",
            lineNumber: 220,
            columnNumber: 20
        }, this) : "Continue";
        $[19] = saving;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== t10 || $[22] !== t11 || $[23] !== t7 || $[24] !== t8 || $[25] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            onClick: t7,
            disabled: t8,
            className: t9,
            whileTap: t10,
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/onboarding/steps/StepGoals.tsx",
            lineNumber: 228,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t11;
        $[23] = t7;
        $[24] = t8;
        $[25] = t9;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== t12 || $[28] !== t6) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t4,
                t6,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/steps/StepGoals.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[27] = t12;
        $[28] = t6;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    return t13;
}
_s(StepGoals, "M/oNmd8ieTEGKQmyOwpew2QxQVI=");
_c = StepGoals;
var _c;
__turbopack_context__.k.register(_c, "StepGoals");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/onboarding/steps/StepSkills.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StepSkills
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const SKILL_CATEGORIES = [
    {
        label: 'Programming Languages',
        skills: [
            'Python',
            'JavaScript',
            'TypeScript',
            'Java',
            'C++',
            'C',
            'Go',
            'Rust',
            'Kotlin',
            'Swift',
            'PHP',
            'Ruby',
            'Dart'
        ]
    },
    {
        label: 'Web & Frontend',
        skills: [
            'React',
            'Next.js',
            'Vue.js',
            'Angular',
            'HTML/CSS',
            'Tailwind CSS',
            'Node.js',
            'Express',
            'Django',
            'Flask',
            'Spring Boot'
        ]
    },
    {
        label: 'Mobile',
        skills: [
            'React Native',
            'Flutter',
            'Android (Kotlin)',
            'iOS (Swift)',
            'Jetpack Compose'
        ]
    },
    {
        label: 'Data & AI',
        skills: [
            'Machine Learning',
            'Deep Learning',
            'NLP',
            'Computer Vision',
            'Data Analysis',
            'TensorFlow',
            'PyTorch',
            'Pandas'
        ]
    },
    {
        label: 'DevOps & Cloud',
        skills: [
            'Docker',
            'Kubernetes',
            'AWS',
            'GCP',
            'Azure',
            'CI/CD',
            'Linux',
            'Terraform'
        ]
    },
    {
        label: 'Other',
        skills: [
            'Git',
            'SQL',
            'MongoDB',
            'PostgreSQL',
            'Redis',
            'GraphQL',
            'REST API',
            'Firebase',
            'Figma',
            'Blockchain',
            'Cybersecurity'
        ]
    }
];
const PROFICIENCY = [
    'Beginner',
    'Intermediate',
    'Advanced',
    'Expert'
];
function StepSkills(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39);
    if ($[0] !== "33182b5f9d764a7f49a490f1abafa689b17ffc160f094660180fc3f28654b70a") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "33182b5f9d764a7f49a490f1abafa689b17ffc160f094660180fc3f28654b70a";
    }
    const { initialData, onComplete, saving } = t0;
    let t1;
    if ($[1] !== initialData?.skills) {
        t1 = initialData?.skills || [];
        $[1] = initialData?.skills;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [expandedCategory, setExpandedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(SKILL_CATEGORIES[0].label);
    let t2;
    if ($[3] !== selected) {
        t2 = ({
            "StepSkills[isSelected]": (name)=>selected.some({
                    "StepSkills[isSelected > selected.some()]": (s)=>s.name === name
                }["StepSkills[isSelected > selected.some()]"])
        })["StepSkills[isSelected]"];
        $[3] = selected;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const isSelected = t2;
    let t3;
    if ($[5] !== selected) {
        t3 = ({
            "StepSkills[getSkill]": (name_0)=>selected.find({
                    "StepSkills[getSkill > selected.find()]": (s_0)=>s_0.name === name_0
                }["StepSkills[getSkill > selected.find()]"])
        })["StepSkills[getSkill]"];
        $[5] = selected;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const getSkill = t3;
    let t4;
    if ($[7] !== isSelected) {
        t4 = ({
            "StepSkills[toggleSkill]": (name_1, category)=>{
                if (isSelected(name_1)) {
                    setSelected({
                        "StepSkills[toggleSkill > setSelected()]": (prev)=>prev.filter({
                                "StepSkills[toggleSkill > setSelected() > prev.filter()]": (s_1)=>s_1.name !== name_1
                            }["StepSkills[toggleSkill > setSelected() > prev.filter()]"])
                    }["StepSkills[toggleSkill > setSelected()]"]);
                } else {
                    setSelected({
                        "StepSkills[toggleSkill > setSelected()]": (prev_0)=>[
                                ...prev_0,
                                {
                                    name: name_1,
                                    proficiency: "Beginner",
                                    category
                                }
                            ]
                    }["StepSkills[toggleSkill > setSelected()]"]);
                }
            }
        })["StepSkills[toggleSkill]"];
        $[7] = isSelected;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const toggleSkill = t4;
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "StepSkills[setProficiency]": (name_2, proficiency)=>{
                setSelected({
                    "StepSkills[setProficiency > setSelected()]": (prev_1)=>prev_1.map({
                            "StepSkills[setProficiency > setSelected() > prev_1.map()]": (s_2)=>s_2.name === name_2 ? {
                                    ...s_2,
                                    proficiency
                                } : s_2
                        }["StepSkills[setProficiency > setSelected() > prev_1.map()]"])
                }["StepSkills[setProficiency > setSelected()]"]);
            }
        })["StepSkills[setProficiency]"];
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const setProficiency = t5;
    const canContinue = selected.length >= 1;
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-sm text-neutral-500 dark:text-neutral-400",
            children: "Select skills you have and set your level. Pick at least 1."
        }, void 0, false, {
            fileName: "[project]/src/components/onboarding/steps/StepSkills.tsx",
            lineNumber: 134,
            columnNumber: 10
        }, this);
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== selected || $[12] !== toggleSkill) {
        t7 = selected.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2",
            children: selected.map({
                "StepSkills[selected.map()]": (skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-blue-700 dark:text-blue-300",
                                children: skill.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/onboarding/steps/StepSkills.tsx",
                                lineNumber: 142,
                                columnNumber: 224
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-blue-400 text-xs",
                                children: [
                                    "(",
                                    skill.proficiency,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/onboarding/steps/StepSkills.tsx",
                                lineNumber: 142,
                                columnNumber: 306
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "StepSkills[selected.map() > <button>.onClick]": ()=>toggleSkill(skill.name, skill.category)
                                }["StepSkills[selected.map() > <button>.onClick]"],
                                className: "ml-1 text-blue-400 hover:text-red-500 transition-colors",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/onboarding/steps/StepSkills.tsx",
                                lineNumber: 142,
                                columnNumber: 374
                            }, this)
                        ]
                    }, skill.name, true, {
                        fileName: "[project]/src/components/onboarding/steps/StepSkills.tsx",
                        lineNumber: 142,
                        columnNumber: 48
                    }, this)
            }["StepSkills[selected.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/onboarding/steps/StepSkills.tsx",
            lineNumber: 141,
            columnNumber: 33
        }, this);
        $[11] = selected;
        $[12] = toggleSkill;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== expandedCategory || $[15] !== getSkill || $[16] !== isSelected || $[17] !== toggleSkill) {
        t8 = SKILL_CATEGORIES.map({
            "StepSkills[SKILL_CATEGORIES.map()]": (cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "StepSkills[SKILL_CATEGORIES.map() > <button>.onClick]": ()=>setExpandedCategory(expandedCategory === cat.label ? null : cat.label)
                            }["StepSkills[SKILL_CATEGORIES.map() > <button>.onClick]"],
                            className: "w-full px-4 py-3 flex items-center justify-between bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium text-sm text-neutral-700 dark:text-neutral-300",
                                    children: cat.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/steps/StepSkills.tsx",
                                    lineNumber: 157,
                                    columnNumber: 228
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    animate: {
                                        rotate: expandedCategory === cat.label ? 180 : 0
                                    },
                                    className: "text-neutral-400",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m6 9 6 6 6-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/steps/StepSkills.tsx",
                                            lineNumber: 159,
                                            columnNumber: 141
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/steps/StepSkills.tsx",
                                        lineNumber: 159,
                                        columnNumber: 43
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/steps/StepSkills.tsx",
                                    lineNumber: 157,
                                    columnNumber: 323
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/onboarding/steps/StepSkills.tsx",
                            lineNumber: 155,
                            columnNumber: 162
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimateHeight, {
                            isOpen: expandedCategory === cat.label,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 pb-3 pt-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: cat.skills.map({
                                        "StepSkills[SKILL_CATEGORIES.map() > cat.skills.map()]": (skill_0)=>{
                                            const sel = isSelected(skill_0);
                                            const entry = getSkill(skill_0);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: {
                                                            "StepSkills[SKILL_CATEGORIES.map() > cat.skills.map() > <button>.onClick]": ()=>toggleSkill(skill_0, cat.label)
                                                        }["StepSkills[SKILL_CATEGORIES.map() > cat.skills.map() > <button>.onClick]"],
                                                        className: `px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${sel ? "bg-blue-500 text-white shadow-md shadow-blue-500/20" : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"}`,
                                                        children: skill_0
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/onboarding/steps/StepSkills.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 66
                                                    }, this),
                                                    sel && entry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-0.5 mt-1 justify-center",
                                                        children: PROFICIENCY.map({
                                                            "StepSkills[SKILL_CATEGORIES.map() > cat.skills.map() > PROFICIENCY.map()]": (p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: {
                                                                        "StepSkills[SKILL_CATEGORIES.map() > cat.skills.map() > PROFICIENCY.map() > <button>.onClick]": ()=>setProficiency(skill_0, p)
                                                                    }["StepSkills[SKILL_CATEGORIES.map() > cat.skills.map() > PROFICIENCY.map() > <button>.onClick]"],
                                                                    title: p,
                                                                    className: `w-5 h-1.5 rounded-full transition-colors ${PROFICIENCY.indexOf(entry.proficiency) >= i ? "bg-blue-500" : "bg-neutral-300 dark:bg-neutral-700"}`
                                                                }, p, false, {
                                                                    fileName: "[project]/src/components/onboarding/steps/StepSkills.tsx",
                                                                    lineNumber: 166,
                                                                    columnNumber: 112
                                                                }, this)
                                                        }["StepSkills[SKILL_CATEGORIES.map() > cat.skills.map() > PROFICIENCY.map()]"])
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/onboarding/steps/StepSkills.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 395
                                                    }, this)
                                                ]
                                            }, skill_0, true, {
                                                fileName: "[project]/src/components/onboarding/steps/StepSkills.tsx",
                                                lineNumber: 163,
                                                columnNumber: 26
                                            }, this);
                                        }
                                    }["StepSkills[SKILL_CATEGORIES.map() > cat.skills.map()]"])
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/steps/StepSkills.tsx",
                                    lineNumber: 159,
                                    columnNumber: 282
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/onboarding/steps/StepSkills.tsx",
                                lineNumber: 159,
                                columnNumber: 250
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/steps/StepSkills.tsx",
                            lineNumber: 159,
                            columnNumber: 195
                        }, this)
                    ]
                }, cat.label, true, {
                    fileName: "[project]/src/components/onboarding/steps/StepSkills.tsx",
                    lineNumber: 155,
                    columnNumber: 52
                }, this)
        }["StepSkills[SKILL_CATEGORIES.map()]"]);
        $[14] = expandedCategory;
        $[15] = getSkill;
        $[16] = isSelected;
        $[17] = toggleSkill;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2 max-h-[320px] overflow-y-auto pr-1 custom-scrollbar",
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/onboarding/steps/StepSkills.tsx",
            lineNumber: 183,
            columnNumber: 10
        }, this);
        $[19] = t8;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== onComplete || $[22] !== selected) {
        t10 = ({
            "StepSkills[<motion.button>.onClick]": ()=>onComplete({
                    skills: selected,
                    interests: selected.map(_StepSkillsMotionButtonOnClickSelectedMap)
                })
        })["StepSkills[<motion.button>.onClick]"];
        $[21] = onComplete;
        $[22] = selected;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    const t11 = !canContinue || saving;
    const t12 = `w-full py-4 rounded-2xl font-semibold text-white transition-all ${canContinue && !saving ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg shadow-blue-500/25" : "bg-neutral-300 dark:bg-neutral-700 cursor-not-allowed"}`;
    let t13;
    if ($[24] !== canContinue) {
        t13 = canContinue ? {
            scale: 0.98
        } : {};
        $[24] = canContinue;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== saving || $[27] !== selected.length) {
        t14 = saving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center justify-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/steps/StepSkills.tsx",
                    lineNumber: 217,
                    columnNumber: 77
                }, this),
                "Saving..."
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/steps/StepSkills.tsx",
            lineNumber: 217,
            columnNumber: 20
        }, this) : `Continue with ${selected.length} skill${selected.length !== 1 ? "s" : ""}`;
        $[26] = saving;
        $[27] = selected.length;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] !== t10 || $[30] !== t11 || $[31] !== t12 || $[32] !== t13 || $[33] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            onClick: t10,
            disabled: t11,
            className: t12,
            whileTap: t13,
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/components/onboarding/steps/StepSkills.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[29] = t10;
        $[30] = t11;
        $[31] = t12;
        $[32] = t13;
        $[33] = t14;
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    if ($[35] !== t15 || $[36] !== t7 || $[37] !== t9) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-5",
            children: [
                t6,
                t7,
                t9,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/steps/StepSkills.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[35] = t15;
        $[36] = t7;
        $[37] = t9;
        $[38] = t16;
    } else {
        t16 = $[38];
    }
    return t16;
}
_s(StepSkills, "iYnDQJ1uxD8UjFXhw7RFjBSln5M=");
_c = StepSkills;
function _StepSkillsMotionButtonOnClickSelectedMap(s_3) {
    return s_3.name;
}
function AnimateHeight(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "33182b5f9d764a7f49a490f1abafa689b17ffc160f094660180fc3f28654b70a") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "33182b5f9d764a7f49a490f1abafa689b17ffc160f094660180fc3f28654b70a";
    }
    const { isOpen, children } = t0;
    const t1 = isOpen ? "auto" : 0;
    const t2 = isOpen ? 1 : 0;
    let t3;
    if ($[1] !== t1 || $[2] !== t2) {
        t3 = {
            height: t1,
            opacity: t2
        };
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            duration: 0.25,
            ease: "easeInOut"
        };
        t5 = {
            overflow: "hidden"
        };
        $[4] = t4;
        $[5] = t5;
    } else {
        t4 = $[4];
        t5 = $[5];
    }
    let t6;
    if ($[6] !== children || $[7] !== t3) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: false,
            animate: t3,
            transition: t4,
            style: t5,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/onboarding/steps/StepSkills.tsx",
            lineNumber: 295,
            columnNumber: 10
        }, this);
        $[6] = children;
        $[7] = t3;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    return t6;
}
_c1 = AnimateHeight;
var _c, _c1;
__turbopack_context__.k.register(_c, "StepSkills");
__turbopack_context__.k.register(_c1, "AnimateHeight");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/onboarding/steps/StepLearnTeach.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StepLearnTeach
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const TOPICS = [
    'Python',
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'Java',
    'C++',
    'DSA',
    'System Design',
    'Machine Learning',
    'Deep Learning',
    'Web Development',
    'Mobile Dev',
    'Flutter',
    'React Native',
    'Android',
    'iOS',
    'Data Science',
    'SQL',
    'MongoDB',
    'PostgreSQL',
    'Docker',
    'Kubernetes',
    'AWS',
    'DevOps',
    'CI/CD',
    'Git',
    'Linux',
    'Cybersecurity',
    'UI/UX Design',
    'Figma',
    'Graphic Design',
    'Video Editing',
    'Business Strategy',
    'Marketing',
    'Sales',
    'Finance',
    'Product Management',
    'Public Speaking',
    'Communication',
    'Leadership',
    'Time Management',
    'Blockchain',
    'Web3',
    'Game Development',
    'Unity',
    'AR/VR',
    'Competitive Programming',
    'LeetCode',
    'Resume Building',
    'Interview Prep'
];
function StepLearnTeach(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(67);
    if ($[0] !== "30f2d66c49ad4370d1c9a3ef96b12b0e5e826f44d8ed4f4660b0cf02d5d93490") {
        for(let $i = 0; $i < 67; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "30f2d66c49ad4370d1c9a3ef96b12b0e5e826f44d8ed4f4660b0cf02d5d93490";
    }
    const { initialData, onComplete, saving } = t0;
    let t1;
    if ($[1] !== initialData?.wantToLearn) {
        t1 = initialData?.wantToLearn || [];
        $[1] = initialData?.wantToLearn;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [wantToLearn, setWantToLearn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] !== initialData?.canTeach) {
        t2 = initialData?.canTeach || [];
        $[3] = initialData?.canTeach;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const [canTeach, setCanTeach] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("learn");
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "StepLearnTeach[toggleItem]": (topic, list)=>{
                if (list === "learn") {
                    setWantToLearn({
                        "StepLearnTeach[toggleItem > setWantToLearn()]": (prev)=>prev.includes(topic) ? prev.filter({
                                "StepLearnTeach[toggleItem > setWantToLearn() > prev.filter()]": (t)=>t !== topic
                            }["StepLearnTeach[toggleItem > setWantToLearn() > prev.filter()]"]) : [
                                ...prev,
                                topic
                            ]
                    }["StepLearnTeach[toggleItem > setWantToLearn()]"]);
                } else {
                    setCanTeach({
                        "StepLearnTeach[toggleItem > setCanTeach()]": (prev_0)=>prev_0.includes(topic) ? prev_0.filter({
                                "StepLearnTeach[toggleItem > setCanTeach() > prev_0.filter()]": (t_0)=>t_0 !== topic
                            }["StepLearnTeach[toggleItem > setCanTeach() > prev_0.filter()]"]) : [
                                ...prev_0,
                                topic
                            ]
                    }["StepLearnTeach[toggleItem > setCanTeach()]"]);
                }
            }
        })["StepLearnTeach[toggleItem]"];
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const toggleItem = t3;
    let canContinue;
    let t10;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[6] !== activeTab || $[7] !== canTeach || $[8] !== search || $[9] !== wantToLearn) {
        const filtered = search ? TOPICS.filter({
            "StepLearnTeach[TOPICS.filter()]": (t_1)=>t_1.toLowerCase().includes(search.toLowerCase())
        }["StepLearnTeach[TOPICS.filter()]"]) : TOPICS;
        canContinue = wantToLearn.length >= 1;
        t6 = "space-y-5";
        if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-sm text-neutral-500 dark:text-neutral-400",
                children: [
                    "This powers our ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-blue-500",
                        children: "smart matching"
                    }, void 0, false, {
                        fileName: "[project]/src/components/onboarding/steps/StepLearnTeach.tsx",
                        lineNumber: 84,
                        columnNumber: 102
                    }, this),
                    " — we'll connect you with people who can teach what you want to learn."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/onboarding/steps/StepLearnTeach.tsx",
                lineNumber: 84,
                columnNumber: 12
            }, this);
            $[18] = t7;
        } else {
            t7 = $[18];
        }
        let t11;
        if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
            t11 = ({
                "StepLearnTeach[<button>.onClick]": ()=>setActiveTab("learn")
            })["StepLearnTeach[<button>.onClick]"];
            $[19] = t11;
        } else {
            t11 = $[19];
        }
        const t12 = `flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${activeTab === "learn" ? "bg-white dark:bg-neutral-900 text-blue-600 dark:text-blue-400 shadow-sm" : "text-neutral-500 dark:text-neutral-400"}`;
        let t13;
        if ($[20] !== t12 || $[21] !== wantToLearn.length) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t11,
                className: t12,
                children: [
                    "I want to learn (",
                    wantToLearn.length,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/onboarding/steps/StepLearnTeach.tsx",
                lineNumber: 101,
                columnNumber: 13
            }, this);
            $[20] = t12;
            $[21] = wantToLearn.length;
            $[22] = t13;
        } else {
            t13 = $[22];
        }
        let t14;
        if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = ({
                "StepLearnTeach[<button>.onClick]": ()=>setActiveTab("teach")
            })["StepLearnTeach[<button>.onClick]"];
            $[23] = t14;
        } else {
            t14 = $[23];
        }
        const t15 = `flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${activeTab === "teach" ? "bg-white dark:bg-neutral-900 text-purple-600 dark:text-purple-400 shadow-sm" : "text-neutral-500 dark:text-neutral-400"}`;
        let t16;
        if ($[24] !== canTeach.length || $[25] !== t15) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t14,
                className: t15,
                children: [
                    "I can teach (",
                    canTeach.length,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/onboarding/steps/StepLearnTeach.tsx",
                lineNumber: 120,
                columnNumber: 13
            }, this);
            $[24] = canTeach.length;
            $[25] = t15;
            $[26] = t16;
        } else {
            t16 = $[26];
        }
        if ($[27] !== t13 || $[28] !== t16) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex bg-neutral-100 dark:bg-neutral-800 rounded-xl p-1",
                children: [
                    t13,
                    t16
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/onboarding/steps/StepLearnTeach.tsx",
                lineNumber: 128,
                columnNumber: 12
            }, this);
            $[27] = t13;
            $[28] = t16;
            $[29] = t8;
        } else {
            t8 = $[29];
        }
        const t17 = `Search topics to ${activeTab}...`;
        let t18;
        if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
            t18 = ({
                "StepLearnTeach[<input>.onChange]": (e)=>setSearch(e.target.value)
            })["StepLearnTeach[<input>.onChange]"];
            $[30] = t18;
        } else {
            t18 = $[30];
        }
        if ($[31] !== search || $[32] !== t17) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: t17,
                value: search,
                onChange: t18,
                className: "w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/steps/StepLearnTeach.tsx",
                lineNumber: 146,
                columnNumber: 12
            }, this);
            $[31] = search;
            $[32] = t17;
            $[33] = t9;
        } else {
            t9 = $[33];
        }
        if ($[34] !== activeTab || $[35] !== canTeach || $[36] !== wantToLearn) {
            t10 = (activeTab === "learn" ? wantToLearn : canTeach).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-1.5",
                children: (activeTab === "learn" ? wantToLearn : canTeach).map({
                    "StepLearnTeach[(anonymous)()]": (t_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${activeTab === "learn" ? "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300" : "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300"}`,
                            children: [
                                t_2,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "StepLearnTeach[(anonymous)() > <button>.onClick]": ()=>toggleItem(t_2, activeTab)
                                    }["StepLearnTeach[(anonymous)() > <button>.onClick]"],
                                    className: "hover:opacity-70",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/steps/StepLearnTeach.tsx",
                                    lineNumber: 155,
                                    columnNumber: 333
                                }, this)
                            ]
                        }, t_2, true, {
                            fileName: "[project]/src/components/onboarding/steps/StepLearnTeach.tsx",
                            lineNumber: 155,
                            columnNumber: 51
                        }, this)
                }["StepLearnTeach[(anonymous)()]"])
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/steps/StepLearnTeach.tsx",
                lineNumber: 154,
                columnNumber: 76
            }, this);
            $[34] = activeTab;
            $[35] = canTeach;
            $[36] = wantToLearn;
            $[37] = t10;
        } else {
            t10 = $[37];
        }
        t4 = "flex flex-wrap gap-2 max-h-[220px] overflow-y-auto pr-1 custom-scrollbar";
        let t19;
        if ($[38] !== activeTab || $[39] !== canTeach || $[40] !== wantToLearn) {
            t19 = ({
                "StepLearnTeach[filtered.map()]": (topic_0, i)=>{
                    const isInLearn = wantToLearn.includes(topic_0);
                    const isInTeach = canTeach.includes(topic_0);
                    const isActive = activeTab === "learn" ? isInLearn : isInTeach;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: i * 0.01
                        },
                        onClick: {
                            "StepLearnTeach[filtered.map() > <motion.button>.onClick]": ()=>toggleItem(topic_0, activeTab)
                        }["StepLearnTeach[filtered.map() > <motion.button>.onClick]"],
                        className: `px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${isActive ? activeTab === "learn" ? "bg-blue-500 text-white shadow-md shadow-blue-500/20" : "bg-purple-500 text-white shadow-md shadow-purple-500/20" : isInLearn || isInTeach ? "bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 ring-1 ring-blue-300 dark:ring-blue-700" : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"}`,
                        children: topic_0
                    }, topic_0, false, {
                        fileName: "[project]/src/components/onboarding/steps/StepLearnTeach.tsx",
                        lineNumber: 174,
                        columnNumber: 18
                    }, this);
                }
            })["StepLearnTeach[filtered.map()]"];
            $[38] = activeTab;
            $[39] = canTeach;
            $[40] = wantToLearn;
            $[41] = t19;
        } else {
            t19 = $[41];
        }
        t5 = filtered.map(t19);
        $[6] = activeTab;
        $[7] = canTeach;
        $[8] = search;
        $[9] = wantToLearn;
        $[10] = canContinue;
        $[11] = t10;
        $[12] = t4;
        $[13] = t5;
        $[14] = t6;
        $[15] = t7;
        $[16] = t8;
        $[17] = t9;
    } else {
        canContinue = $[10];
        t10 = $[11];
        t4 = $[12];
        t5 = $[13];
        t6 = $[14];
        t7 = $[15];
        t8 = $[16];
        t9 = $[17];
    }
    let t11;
    if ($[42] !== t4 || $[43] !== t5) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/onboarding/steps/StepLearnTeach.tsx",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        $[42] = t4;
        $[43] = t5;
        $[44] = t11;
    } else {
        t11 = $[44];
    }
    let t12;
    if ($[45] !== canTeach || $[46] !== onComplete || $[47] !== wantToLearn) {
        t12 = ({
            "StepLearnTeach[<motion.button>.onClick]": ()=>onComplete({
                    wantToLearn,
                    canTeach
                })
        })["StepLearnTeach[<motion.button>.onClick]"];
        $[45] = canTeach;
        $[46] = onComplete;
        $[47] = wantToLearn;
        $[48] = t12;
    } else {
        t12 = $[48];
    }
    const t13 = !canContinue || saving;
    const t14 = `w-full py-4 rounded-2xl font-semibold text-white transition-all ${canContinue && !saving ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg shadow-blue-500/25" : "bg-neutral-300 dark:bg-neutral-700 cursor-not-allowed"}`;
    let t15;
    if ($[49] !== canContinue) {
        t15 = canContinue ? {
            scale: 0.98
        } : {};
        $[49] = canContinue;
        $[50] = t15;
    } else {
        t15 = $[50];
    }
    let t16;
    if ($[51] !== saving) {
        t16 = saving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center justify-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/steps/StepLearnTeach.tsx",
                    lineNumber: 253,
                    columnNumber: 77
                }, this),
                "Saving..."
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/steps/StepLearnTeach.tsx",
            lineNumber: 253,
            columnNumber: 20
        }, this) : "Continue";
        $[51] = saving;
        $[52] = t16;
    } else {
        t16 = $[52];
    }
    let t17;
    if ($[53] !== t12 || $[54] !== t13 || $[55] !== t14 || $[56] !== t15 || $[57] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            onClick: t12,
            disabled: t13,
            className: t14,
            whileTap: t15,
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/components/onboarding/steps/StepLearnTeach.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[53] = t12;
        $[54] = t13;
        $[55] = t14;
        $[56] = t15;
        $[57] = t16;
        $[58] = t17;
    } else {
        t17 = $[58];
    }
    let t18;
    if ($[59] !== t10 || $[60] !== t11 || $[61] !== t17 || $[62] !== t6 || $[63] !== t7 || $[64] !== t8 || $[65] !== t9) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t7,
                t8,
                t9,
                t10,
                t11,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/steps/StepLearnTeach.tsx",
            lineNumber: 273,
            columnNumber: 11
        }, this);
        $[59] = t10;
        $[60] = t11;
        $[61] = t17;
        $[62] = t6;
        $[63] = t7;
        $[64] = t8;
        $[65] = t9;
        $[66] = t18;
    } else {
        t18 = $[66];
    }
    return t18;
}
_s(StepLearnTeach, "3aNCXqy+ItPX3brPgm+Xh+tXz6c=");
_c = StepLearnTeach;
var _c;
__turbopack_context__.k.register(_c, "StepLearnTeach");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/onboarding/steps/StepLookingFor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StepLookingFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const OPTIONS = [
    {
        id: 'study_partner',
        label: 'Study Partner',
        emoji: '📚',
        description: 'Someone to study with regularly, share notes, and prepare for exams together'
    },
    {
        id: 'project_collaborator',
        label: 'Project Collaborator',
        emoji: '🛠️',
        description: 'A teammate to build projects, apps, or portfolios with'
    },
    {
        id: 'co_founder',
        label: 'Co-Founder',
        emoji: '🚀',
        description: 'A partner to start a business or side project with'
    },
    {
        id: 'mentor',
        label: 'Mentor',
        emoji: '🧭',
        description: 'An experienced person to guide you in your learning journey'
    },
    {
        id: 'mentee',
        label: 'Mentee',
        emoji: '🌱',
        description: 'Someone you can guide and help grow — teach what you know'
    },
    {
        id: 'accountability_buddy',
        label: 'Accountability Buddy',
        emoji: '🤝',
        description: 'A partner to keep each other on track with goals and deadlines'
    },
    {
        id: 'hackathon_team',
        label: 'Hackathon Teammate',
        emoji: '⚡',
        description: 'Find teammates for upcoming hackathons and coding competitions'
    }
];
function StepLookingFor(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "0e38788fd135d630760d1e4e817f3ddbae2b801f9817a906d08539b645fa6101") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0e38788fd135d630760d1e4e817f3ddbae2b801f9817a906d08539b645fa6101";
    }
    const { initialData, onComplete, saving } = t0;
    let t1;
    if ($[1] !== initialData?.lookingFor) {
        t1 = initialData?.lookingFor || [];
        $[1] = initialData?.lookingFor;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "StepLookingFor[toggle]": (id)=>{
                setSelected({
                    "StepLookingFor[toggle > setSelected()]": (prev)=>prev.includes(id) ? prev.filter({
                            "StepLookingFor[toggle > setSelected() > prev.filter()]": (s)=>s !== id
                        }["StepLookingFor[toggle > setSelected() > prev.filter()]"]) : [
                            ...prev,
                            id
                        ]
                }["StepLookingFor[toggle > setSelected()]"]);
            }
        })["StepLookingFor[toggle]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const toggle = t2;
    const canContinue = selected.length >= 1;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-sm text-neutral-500 dark:text-neutral-400",
            children: "What kind of connections would help you the most? Select all that apply."
        }, void 0, false, {
            fileName: "[project]/src/components/onboarding/steps/StepLookingFor.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== selected) {
        t4 = OPTIONS.map({
            "StepLookingFor[OPTIONS.map()]": (option, i)=>{
                const isActive = selected.includes(option.id);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    initial: {
                        opacity: 0,
                        x: -20
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        delay: i * 0.05
                    },
                    onClick: {
                        "StepLookingFor[OPTIONS.map() > <motion.button>.onClick]": ()=>toggle(option.id)
                    }["StepLookingFor[OPTIONS.map() > <motion.button>.onClick]"],
                    className: `w-full flex items-start gap-4 p-4 rounded-2xl border-2 text-left transition-all duration-200 ${isActive ? "border-blue-500 bg-blue-50 dark:bg-blue-950/30 shadow-lg shadow-blue-500/10" : "border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-3xl flex-shrink-0 mt-0.5",
                            children: option.emoji
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/steps/StepLookingFor.tsx",
                            lineNumber: 108,
                            columnNumber: 401
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `font-semibold block ${isActive ? "text-blue-600 dark:text-blue-400" : "text-neutral-800 dark:text-neutral-200"}`,
                                    children: option.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/steps/StepLookingFor.tsx",
                                    lineNumber: 108,
                                    columnNumber: 502
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed block mt-0.5",
                                    children: option.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/steps/StepLookingFor.tsx",
                                    lineNumber: 108,
                                    columnNumber: 655
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/onboarding/steps/StepLookingFor.tsx",
                            lineNumber: 108,
                            columnNumber: 470
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 transition-all ${isActive ? "border-blue-500 bg-blue-500" : "border-neutral-300 dark:border-neutral-600"}`,
                            children: isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                                initial: {
                                    scale: 0
                                },
                                animate: {
                                    scale: 1
                                },
                                width: "12",
                                height: "12",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "white",
                                strokeWidth: "3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M5 13l4 4L19 7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/steps/StepLookingFor.tsx",
                                    lineNumber: 112,
                                    columnNumber: 102
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/onboarding/steps/StepLookingFor.tsx",
                                lineNumber: 108,
                                columnNumber: 1002
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/steps/StepLookingFor.tsx",
                            lineNumber: 108,
                            columnNumber: 782
                        }, this)
                    ]
                }, option.id, true, {
                    fileName: "[project]/src/components/onboarding/steps/StepLookingFor.tsx",
                    lineNumber: 98,
                    columnNumber: 16
                }, this);
            }
        }["StepLookingFor[OPTIONS.map()]"]);
        $[5] = selected;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3 max-h-[380px] overflow-y-auto pr-1 custom-scrollbar",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/onboarding/steps/StepLookingFor.tsx",
            lineNumber: 122,
            columnNumber: 10
        }, this);
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== onComplete || $[10] !== selected) {
        t6 = ({
            "StepLookingFor[<motion.button>.onClick]": ()=>onComplete({
                    lookingFor: selected
                })
        })["StepLookingFor[<motion.button>.onClick]"];
        $[9] = onComplete;
        $[10] = selected;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    const t7 = !canContinue || saving;
    const t8 = `w-full py-4 rounded-2xl font-semibold text-white transition-all ${canContinue && !saving ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg shadow-blue-500/25" : "bg-neutral-300 dark:bg-neutral-700 cursor-not-allowed"}`;
    let t9;
    if ($[12] !== canContinue) {
        t9 = canContinue ? {
            scale: 0.98
        } : {};
        $[12] = canContinue;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== saving) {
        t10 = saving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center justify-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/steps/StepLookingFor.tsx",
                    lineNumber: 155,
                    columnNumber: 77
                }, this),
                "Saving..."
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/steps/StepLookingFor.tsx",
            lineNumber: 155,
            columnNumber: 20
        }, this) : "Continue";
        $[14] = saving;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== t10 || $[17] !== t6 || $[18] !== t7 || $[19] !== t8 || $[20] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            onClick: t6,
            disabled: t7,
            className: t8,
            whileTap: t9,
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/components/onboarding/steps/StepLookingFor.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[16] = t10;
        $[17] = t6;
        $[18] = t7;
        $[19] = t8;
        $[20] = t9;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== t11 || $[23] !== t5) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-5",
            children: [
                t3,
                t5,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/steps/StepLookingFor.tsx",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[22] = t11;
        $[23] = t5;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    return t12;
}
_s(StepLookingFor, "Uk6VvjyMittYg468psinyCbo++w=");
_c = StepLookingFor;
var _c;
__turbopack_context__.k.register(_c, "StepLookingFor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/onboarding/steps/StepAvailability.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StepAvailability
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const TIME_SLOTS = [
    {
        id: 'morning',
        label: 'Morning',
        time: '6am - 12pm',
        emoji: '🌅'
    },
    {
        id: 'afternoon',
        label: 'Afternoon',
        time: '12pm - 5pm',
        emoji: '☀️'
    },
    {
        id: 'evening',
        label: 'Evening',
        time: '5pm - 9pm',
        emoji: '🌆'
    },
    {
        id: 'night',
        label: 'Night Owl',
        time: '9pm - 2am',
        emoji: '🌙'
    },
    {
        id: 'flexible',
        label: 'Flexible',
        time: 'Anytime works',
        emoji: '🔄'
    }
];
const HOURS = [
    {
        id: 2,
        label: '1-2 hrs/week'
    },
    {
        id: 5,
        label: '3-5 hrs/week'
    },
    {
        id: 10,
        label: '5-10 hrs/week'
    },
    {
        id: 20,
        label: '10+ hrs/week'
    }
];
const COMM_PREFS = [
    {
        id: 'chat',
        label: 'Text Chat',
        emoji: '💬'
    },
    {
        id: 'voice',
        label: 'Voice Calls',
        emoji: '📞'
    },
    {
        id: 'video',
        label: 'Video Calls',
        emoji: '📹'
    },
    {
        id: 'in_person',
        label: 'In Person',
        emoji: '🤝'
    }
];
function StepAvailability(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(36);
    if ($[0] !== "70276253784dd636aa4766ff3e91a840d7cc33e144c7c0d9af8f998bfb7c0335") {
        for(let $i = 0; $i < 36; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "70276253784dd636aa4766ff3e91a840d7cc33e144c7c0d9af8f998bfb7c0335";
    }
    const { initialData, onComplete, saving } = t0;
    const [availability, setAvailability] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.availability || "");
    const [hours, setHours] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.hoursPerWeek || 0);
    const [commPref, setCommPref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.communicationPref || "");
    const canContinue = availability !== "";
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3",
            children: "When are you most active?"
        }, void 0, false, {
            fileName: "[project]/src/components/onboarding/steps/StepAvailability.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== availability) {
        t2 = TIME_SLOTS.map({
            "StepAvailability[TIME_SLOTS.map()]": (slot, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: i * 0.05
                    },
                    onClick: {
                        "StepAvailability[TIME_SLOTS.map() > <motion.button>.onClick]": ()=>setAvailability(slot.id)
                    }["StepAvailability[TIME_SLOTS.map() > <motion.button>.onClick]"],
                    className: `p-3 rounded-xl border-2 text-left transition-all ${availability === slot.id ? "border-blue-500 bg-blue-50 dark:bg-blue-950/30" : "border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300"} ${slot.id === "flexible" ? "col-span-2" : ""}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xl",
                            children: slot.emoji
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/steps/StepAvailability.tsx",
                            lineNumber: 104,
                            columnNumber: 363
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `block font-medium text-sm mt-1 ${availability === slot.id ? "text-blue-600 dark:text-blue-400" : "text-neutral-800 dark:text-neutral-200"}`,
                            children: slot.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/steps/StepAvailability.tsx",
                            lineNumber: 104,
                            columnNumber: 408
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-neutral-500",
                            children: slot.time
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/steps/StepAvailability.tsx",
                            lineNumber: 104,
                            columnNumber: 586
                        }, this)
                    ]
                }, slot.id, true, {
                    fileName: "[project]/src/components/onboarding/steps/StepAvailability.tsx",
                    lineNumber: 94,
                    columnNumber: 58
                }, this)
        }["StepAvailability[TIME_SLOTS.map()]"]);
        $[2] = availability;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-2",
                    children: t2
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/steps/StepAvailability.tsx",
                    lineNumber: 113,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/steps/StepAvailability.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3",
            children: "Time for networking & learning"
        }, void 0, false, {
            fileName: "[project]/src/components/onboarding/steps/StepAvailability.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== hours) {
        t5 = HOURS.map({
            "StepAvailability[HOURS.map()]": (h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "StepAvailability[HOURS.map() > <button>.onClick]": ()=>setHours(h.id)
                    }["StepAvailability[HOURS.map() > <button>.onClick]"],
                    className: `py-2.5 px-3 rounded-xl border-2 text-sm font-medium transition-all ${hours === h.id ? "border-blue-500 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400" : "border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:border-neutral-300"}`,
                    children: h.label
                }, h.id, false, {
                    fileName: "[project]/src/components/onboarding/steps/StepAvailability.tsx",
                    lineNumber: 129,
                    columnNumber: 45
                }, this)
        }["StepAvailability[HOURS.map()]"]);
        $[7] = hours;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-2",
                    children: t5
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/steps/StepAvailability.tsx",
                    lineNumber: 140,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/steps/StepAvailability.tsx",
            lineNumber: 140,
            columnNumber: 10
        }, this);
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3",
            children: "Preferred way to connect"
        }, void 0, false, {
            fileName: "[project]/src/components/onboarding/steps/StepAvailability.tsx",
            lineNumber: 148,
            columnNumber: 10
        }, this);
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== commPref) {
        t8 = COMM_PREFS.map({
            "StepAvailability[COMM_PREFS.map()]": (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "StepAvailability[COMM_PREFS.map() > <button>.onClick]": ()=>setCommPref(p.id)
                    }["StepAvailability[COMM_PREFS.map() > <button>.onClick]"],
                    className: `flex-1 py-2.5 rounded-xl border-2 text-center transition-all ${commPref === p.id ? "border-blue-500 bg-blue-50 dark:bg-blue-950/30" : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lg block",
                            children: p.emoji
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/steps/StepAvailability.tsx",
                            lineNumber: 158,
                            columnNumber: 286
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `text-xs font-medium block mt-0.5 ${commPref === p.id ? "text-blue-600 dark:text-blue-400" : "text-neutral-500"}`,
                            children: p.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/steps/StepAvailability.tsx",
                            lineNumber: 158,
                            columnNumber: 334
                        }, this)
                    ]
                }, p.id, true, {
                    fileName: "[project]/src/components/onboarding/steps/StepAvailability.tsx",
                    lineNumber: 156,
                    columnNumber: 50
                }, this)
        }["StepAvailability[COMM_PREFS.map()]"]);
        $[12] = commPref;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: t8
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/steps/StepAvailability.tsx",
                    lineNumber: 167,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/steps/StepAvailability.tsx",
            lineNumber: 167,
            columnNumber: 10
        }, this);
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== availability || $[17] !== commPref || $[18] !== hours || $[19] !== onComplete) {
        t10 = ({
            "StepAvailability[<motion.button>.onClick]": ()=>onComplete({
                    availability,
                    hoursPerWeek: hours || undefined,
                    communicationPref: commPref || undefined
                })
        })["StepAvailability[<motion.button>.onClick]"];
        $[16] = availability;
        $[17] = commPref;
        $[18] = hours;
        $[19] = onComplete;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    const t11 = !canContinue || saving;
    const t12 = `w-full py-4 rounded-2xl font-semibold text-white transition-all ${canContinue && !saving ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg shadow-blue-500/25" : "bg-neutral-300 dark:bg-neutral-700 cursor-not-allowed"}`;
    let t13;
    if ($[21] !== canContinue) {
        t13 = canContinue ? {
            scale: 0.98
        } : {};
        $[21] = canContinue;
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] !== saving) {
        t14 = saving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center justify-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/steps/StepAvailability.tsx",
                    lineNumber: 204,
                    columnNumber: 77
                }, this),
                "Finding your matches..."
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/steps/StepAvailability.tsx",
            lineNumber: 204,
            columnNumber: 20
        }, this) : "Find My Matches";
        $[23] = saving;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] !== t10 || $[26] !== t11 || $[27] !== t12 || $[28] !== t13 || $[29] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            onClick: t10,
            disabled: t11,
            className: t12,
            whileTap: t13,
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/components/onboarding/steps/StepAvailability.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[25] = t10;
        $[26] = t11;
        $[27] = t12;
        $[28] = t13;
        $[29] = t14;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] !== t15 || $[32] !== t3 || $[33] !== t6 || $[34] !== t9) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t3,
                t6,
                t9,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/steps/StepAvailability.tsx",
            lineNumber: 224,
            columnNumber: 11
        }, this);
        $[31] = t15;
        $[32] = t3;
        $[33] = t6;
        $[34] = t9;
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    return t16;
}
_s(StepAvailability, "kaaRk+uKoZd7CtWjo/SwedXWcDE=");
_c = StepAvailability;
var _c;
__turbopack_context__.k.register(_c, "StepAvailability");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/onboarding/steps/StepMatches.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StepMatches
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$onboarding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/onboarding.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function StepMatches({ onFinish }) {
    _s();
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [revealed, setRevealed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StepMatches.useEffect": ()=>{
            const fetchMatches = {
                "StepMatches.useEffect.fetchMatches": async ()=>{
                    try {
                        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$onboarding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onboardingAPI"].getInitialMatches();
                        setMatches(data.matches.slice(0, 5));
                    } catch (error) {
                        console.error('Failed to fetch matches:', error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["StepMatches.useEffect.fetchMatches"];
            fetchMatches();
        }
    }["StepMatches.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StepMatches.useEffect": ()=>{
            if (!loading && matches.length > 0 && revealed < matches.length) {
                const timer = setTimeout({
                    "StepMatches.useEffect.timer": ()=>setRevealed({
                            "StepMatches.useEffect.timer": (r)=>r + 1
                        }["StepMatches.useEffect.timer"])
                }["StepMatches.useEffect.timer"], 400);
                return ({
                    "StepMatches.useEffect": ()=>clearTimeout(timer)
                })["StepMatches.useEffect"];
            }
        }
    }["StepMatches.useEffect"], [
        loading,
        matches.length,
        revealed
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center py-16 space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-20 h-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute inset-0 rounded-full border-2 border-blue-500",
                            animate: {
                                scale: [
                                    1,
                                    1.5,
                                    1
                                ],
                                opacity: [
                                    1,
                                    0,
                                    1
                                ]
                            },
                            transition: {
                                duration: 2,
                                repeat: Infinity
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute inset-0 rounded-full border-2 border-purple-500",
                            animate: {
                                scale: [
                                    1,
                                    1.5,
                                    1
                                ],
                                opacity: [
                                    1,
                                    0,
                                    1
                                ]
                            },
                            transition: {
                                duration: 2,
                                repeat: Infinity,
                                delay: 0.5
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-3xl",
                                children: "🔍"
                            }, void 0, false, {
                                fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold text-neutral-800 dark:text-neutral-200",
                            children: "Finding your perfect matches..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-neutral-500 mt-1",
                            children: "Analyzing interests, skills & goals"
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
            lineNumber: 35,
            columnNumber: 12
        }, this);
    }
    if (matches.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center py-16 space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-5xl",
                    children: "🌱"
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-semibold text-neutral-800 dark:text-neutral-200",
                    children: "You're one of the first!"
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-neutral-500 text-center max-w-xs",
                    children: "As more students join from your campus, we'll match you with the right people. You're building the foundation."
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    onClick: onFinish,
                    className: "mt-4 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25",
                    whileTap: {
                        scale: 0.98
                    },
                    children: "Explore Vormex"
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
            lineNumber: 63,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scale: 0
                        },
                        animate: {
                            scale: 1
                        },
                        transition: {
                            type: 'spring',
                            damping: 10
                        },
                        className: "inline-block text-4xl mb-2",
                        children: "🎉"
                    }, void 0, false, {
                        fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-neutral-500 dark:text-neutral-400",
                        children: [
                            "We found ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-blue-500",
                                children: [
                                    matches.length,
                                    " great matches"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                                lineNumber: 89,
                                columnNumber: 20
                            }, this),
                            " for you!"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 max-h-[340px] overflow-y-auto pr-1 custom-scrollbar",
                children: matches.map((match, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 30,
                            scale: 0.9
                        },
                        animate: i < revealed ? {
                            opacity: 1,
                            y: 0,
                            scale: 1
                        } : {
                            opacity: 0,
                            y: 30,
                            scale: 0.9
                        },
                        transition: {
                            duration: 0.4,
                            ease: [
                                0.25,
                                0.46,
                                0.45,
                                0.94
                            ]
                        },
                        className: "flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center overflow-hidden",
                                        children: match.user.profileImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: match.user.profileImage,
                                            alt: match.user.name,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                                            lineNumber: 113,
                                            columnNumber: 44
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white font-bold text-lg",
                                            children: match.user.name.charAt(0).toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                                            lineNumber: 113,
                                            columnNumber: 145
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center border-2 border-white dark:border-neutral-900",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-bold text-white",
                                            children: [
                                                match.matchPercentage,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-neutral-900 dark:text-white text-sm truncate",
                                                children: match.user.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, this),
                                            match.user.githubConnected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-3.5 h-3.5 text-neutral-500",
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                                                lineNumber: 129,
                                                columnNumber: 48
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this),
                                    match.user.headline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-neutral-500 dark:text-neutral-400 truncate",
                                        children: match.user.headline
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                                        lineNumber: 133,
                                        columnNumber: 39
                                    }, this),
                                    match.user.college && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-neutral-400 dark:text-neutral-500 truncate",
                                        children: match.user.college
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                                        lineNumber: 134,
                                        columnNumber: 38
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1 mt-1.5",
                                        children: match.reasons.map((reason, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-medium",
                                                children: reason
                                            }, j, false, {
                                                fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                                                lineNumber: 137,
                                                columnNumber: 51
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        ]
                    }, match.user.id, true, {
                        fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                        lineNumber: 94,
                        columnNumber: 36
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                onClick: onFinish,
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: revealed >= matches.length ? 1 : 0.3
                },
                className: "w-full py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25 hover:from-blue-600 hover:to-purple-700 transition-all",
                whileTap: {
                    scale: 0.98
                },
                children: "Start Connecting"
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
        lineNumber: 76,
        columnNumber: 10
    }, this);
}
_s(StepMatches, "fm693CRTvIRt0yH+CSJX6pCnwnk=");
_c = StepMatches;
var _c;
__turbopack_context__.k.register(_c, "StepMatches");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/onboarding/OnboardingWizard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OnboardingWizard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$onboarding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/onboarding.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$authContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/authContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$steps$2f$StepGoals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/onboarding/steps/StepGoals.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$steps$2f$StepSkills$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/onboarding/steps/StepSkills.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$steps$2f$StepLearnTeach$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/onboarding/steps/StepLearnTeach.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$steps$2f$StepLookingFor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/onboarding/steps/StepLookingFor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$steps$2f$StepAvailability$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/onboarding/steps/StepAvailability.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$steps$2f$StepMatches$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/onboarding/steps/StepMatches.tsx [app-client] (ecmascript)");
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
const STEPS = [
    {
        id: 'goals',
        title: 'Your Goals',
        subtitle: 'What drives you?'
    },
    {
        id: 'skills',
        title: 'Your Skills',
        subtitle: 'What do you know?'
    },
    {
        id: 'learn-teach',
        title: 'Learn & Teach',
        subtitle: 'Exchange knowledge'
    },
    {
        id: 'looking-for',
        title: 'Your Circle',
        subtitle: 'Who do you need?'
    },
    {
        id: 'availability',
        title: 'Availability',
        subtitle: 'When are you free?'
    },
    {
        id: 'matches',
        title: 'Your Matches',
        subtitle: 'Meet your circle'
    }
];
function OnboardingWizard() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { updateUser, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$authContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthContext"])();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [stepData, setStepData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const handleStepComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OnboardingWizard.useCallback[handleStepComplete]": async (step, data)=>{
            setSaving(true);
            try {
                setStepData({
                    "OnboardingWizard.useCallback[handleStepComplete]": (prev)=>({
                            ...prev,
                            [step]: data
                        })
                }["OnboardingWizard.useCallback[handleStepComplete]"]);
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$onboarding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onboardingAPI"].updateStep(step, data);
                if (step < STEPS.length - 2) {
                    setDirection(1);
                    setCurrentStep(step + 1);
                } else if (step === STEPS.length - 2) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$onboarding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onboardingAPI"].completeOnboarding();
                    setDirection(1);
                    setCurrentStep(step + 1);
                }
            } catch (error) {
                console.error('Failed to save step:', error);
            } finally{
                setSaving(false);
            }
        }
    }["OnboardingWizard.useCallback[handleStepComplete]"], []);
    const handleBack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OnboardingWizard.useCallback[handleBack]": ()=>{
            if (currentStep > 0) {
                setDirection(-1);
                setCurrentStep(currentStep - 1);
            }
        }
    }["OnboardingWizard.useCallback[handleBack]"], [
        currentStep
    ]);
    const handleFinish = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OnboardingWizard.useCallback[handleFinish]": ()=>{
            if (user) {
                updateUser({
                    ...user,
                    onboardingCompleted: true
                });
            }
            router.replace('/');
        }
    }["OnboardingWizard.useCallback[handleFinish]"], [
        router,
        user,
        updateUser
    ]);
    const progress = (currentStep + 1) / STEPS.length * 100;
    const slideVariants = {
        enter: (dir)=>({
                x: dir > 0 ? 300 : -300,
                opacity: 0,
                scale: 0.95
            }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (dir_0)=>({
                x: dir_0 > 0 ? -300 : 300,
                opacity: 0,
                scale: 0.95
            })
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-blue-950 flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "px-6 pt-6 pb-2 flex items-center justify-between max-w-2xl mx-auto w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white font-bold text-sm",
                                    children: "V"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-neutral-500 dark:text-neutral-400 font-medium",
                                children: [
                                    currentStep + 1,
                                    " of ",
                                    STEPS.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    currentStep < STEPS.length - 1 && currentStep > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleBack,
                        className: "text-sm text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors",
                        children: "Back"
                    }, void 0, false, {
                        fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                        lineNumber: 115,
                        columnNumber: 63
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 max-w-2xl mx-auto w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full",
                        initial: {
                            width: 0
                        },
                        animate: {
                            width: `${progress}%`
                        },
                        transition: {
                            duration: 0.5,
                            ease: 'easeOut'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col items-center justify-center px-6 py-8 max-w-2xl mx-auto w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    custom: direction,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        custom: direction,
                        variants: slideVariants,
                        initial: "enter",
                        animate: "center",
                        exit: "exit",
                        transition: {
                            duration: 0.35,
                            ease: [
                                0.25,
                                0.46,
                                0.45,
                                0.94
                            ]
                        },
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                        className: "text-3xl font-bold text-neutral-900 dark:text-white mb-2",
                                        initial: {
                                            y: 10,
                                            opacity: 0
                                        },
                                        animate: {
                                            y: 0,
                                            opacity: 1
                                        },
                                        transition: {
                                            delay: 0.1
                                        },
                                        children: STEPS[currentStep].title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        className: "text-neutral-500 dark:text-neutral-400 text-lg",
                                        initial: {
                                            y: 10,
                                            opacity: 0
                                        },
                                        animate: {
                                            y: 0,
                                            opacity: 1
                                        },
                                        transition: {
                                            delay: 0.2
                                        },
                                        children: STEPS[currentStep].subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            currentStep === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$steps$2f$StepGoals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                initialData: stepData[0],
                                onComplete: (data_0)=>handleStepComplete(0, data_0),
                                saving: saving
                            }, void 0, false, {
                                fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                                lineNumber: 168,
                                columnNumber: 35
                            }, this),
                            currentStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$steps$2f$StepSkills$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                initialData: stepData[1],
                                onComplete: (data_1)=>handleStepComplete(1, data_1),
                                saving: saving
                            }, void 0, false, {
                                fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                                lineNumber: 169,
                                columnNumber: 35
                            }, this),
                            currentStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$steps$2f$StepLearnTeach$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                initialData: stepData[2],
                                onComplete: (data_2)=>handleStepComplete(2, data_2),
                                saving: saving
                            }, void 0, false, {
                                fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                                lineNumber: 170,
                                columnNumber: 35
                            }, this),
                            currentStep === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$steps$2f$StepLookingFor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                initialData: stepData[3],
                                onComplete: (data_3)=>handleStepComplete(3, data_3),
                                saving: saving
                            }, void 0, false, {
                                fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                                lineNumber: 171,
                                columnNumber: 35
                            }, this),
                            currentStep === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$steps$2f$StepAvailability$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                initialData: stepData[4],
                                onComplete: (data_4)=>handleStepComplete(4, data_4),
                                saving: saving
                            }, void 0, false, {
                                fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                                lineNumber: 172,
                                columnNumber: 35
                            }, this),
                            currentStep === 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$steps$2f$StepMatches$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onFinish: handleFinish
                            }, void 0, false, {
                                fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                                lineNumber: 173,
                                columnNumber: 35
                            }, this)
                        ]
                    }, currentStep, true, {
                        fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pb-8 flex justify-center gap-2",
                children: STEPS.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `h-1.5 rounded-full transition-all duration-300 ${i === currentStep ? 'w-8 bg-blue-500' : i < currentStep ? 'w-1.5 bg-blue-300 dark:bg-blue-700' : 'w-1.5 bg-neutral-300 dark:bg-neutral-700'}`
                    }, i, false, {
                        fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                        lineNumber: 180,
                        columnNumber: 30
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
        lineNumber: 104,
        columnNumber: 10
    }, this);
}
_s(OnboardingWizard, "2Np0dl9E2N2sk1o8aCH3VFPD2FU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$authContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthContext"]
    ];
});
_c = OnboardingWizard;
var _c;
__turbopack_context__.k.register(_c, "OnboardingWizard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/onboarding/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OnboardingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$authContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/authContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$OnboardingWizard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/onboarding/OnboardingWizard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function OnboardingPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "8fada4baaa75bf13abd9b6f5a75f5cfd8c26f71c95515e15d4a0bf53c8f9bdf0") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8fada4baaa75bf13abd9b6f5a75f5cfd8c26f71c95515e15d4a0bf53c8f9bdf0";
    }
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$authContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthContext"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] !== loading || $[2] !== router || $[3] !== user) {
        t0 = ({
            "OnboardingPage[useEffect()]": ()=>{
                if (!loading) {
                    if (!user) {
                        router.replace("/login");
                    } else {
                        if (user.onboardingCompleted) {
                            router.replace("/");
                        } else {
                            setReady(true);
                        }
                    }
                }
            }
        })["OnboardingPage[useEffect()]"];
        t1 = [
            user,
            loading,
            router
        ];
        $[1] = loading;
        $[2] = router;
        $[3] = user;
        $[4] = t0;
        $[5] = t1;
    } else {
        t0 = $[4];
        t1 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    if (!ready) {
        let t2;
        if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-blue-950",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/app/onboarding/page.tsx",
                    lineNumber: 54,
                    columnNumber: 189
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/onboarding/page.tsx",
                lineNumber: 54,
                columnNumber: 12
            }, this);
            $[6] = t2;
        } else {
            t2 = $[6];
        }
        return t2;
    }
    let t2;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$OnboardingWizard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/onboarding/page.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    return t2;
}
_s(OnboardingPage, "+jdjOEsXnRWnloMirkuAkfF3c2A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$authContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = OnboardingPage;
var _c;
__turbopack_context__.k.register(_c, "OnboardingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_4093821f._.js.map