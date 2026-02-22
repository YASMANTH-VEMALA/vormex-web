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
"[project]/src/components/onboarding/steps/StepProfile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StepProfile
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
        label: 'Coding & Tech',
        emoji: '💻'
    },
    {
        id: 'start_business',
        label: 'Business & Startups',
        emoji: '🚀'
    },
    {
        id: 'design',
        label: 'Design & Creative',
        emoji: '🎨'
    },
    {
        id: 'get_internship',
        label: 'Career & Internships',
        emoji: '💼'
    },
    {
        id: 'competitive_programming',
        label: 'Competitive Coding',
        emoji: '🏆'
    },
    {
        id: 'ai_ml',
        label: 'AI & Data Science',
        emoji: '🤖'
    },
    {
        id: 'content_creation',
        label: 'Content Creation',
        emoji: '🎬'
    },
    {
        id: 'research',
        label: 'Research & Academics',
        emoji: '🔬'
    },
    {
        id: 'sports_fitness',
        label: 'Sports & Fitness',
        emoji: '⚽'
    },
    {
        id: 'music_arts',
        label: 'Music & Arts',
        emoji: '🎵'
    },
    {
        id: 'photography',
        label: 'Photography & Film',
        emoji: '📸'
    },
    {
        id: 'freelance',
        label: 'Freelancing',
        emoji: '💰'
    }
];
const LOOKING_FOR = [
    {
        id: 'study_partner',
        label: 'Study Partner'
    },
    {
        id: 'project_collaborator',
        label: 'Project Mate'
    },
    {
        id: 'mentor',
        label: 'Mentor'
    },
    {
        id: 'co_founder',
        label: 'Co-Founder'
    },
    {
        id: 'accountability_buddy',
        label: 'Accountability Buddy'
    },
    {
        id: 'hackathon_team',
        label: 'Hackathon Teammate'
    }
];
function StepProfile(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39);
    if ($[0] !== "535afc985227c1e757a57cf5b5100c465f660d3b2edd3317f2d9c7893adc4763") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "535afc985227c1e757a57cf5b5100c465f660d3b2edd3317f2d9c7893adc4763";
    }
    const { initialData, onComplete, saving, userCollege } = t0;
    const [college, setCollege] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.college || userCollege || "");
    const [primaryGoal, setPrimaryGoal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.primaryGoal || "");
    let t1;
    if ($[1] !== initialData?.lookingFor) {
        t1 = initialData?.lookingFor || [];
        $[1] = initialData?.lookingFor;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [lookingFor, setLookingFor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "StepProfile[toggleLookingFor]": (id)=>{
                setLookingFor({
                    "StepProfile[toggleLookingFor > setLookingFor()]": (prev)=>prev.includes(id) ? prev.filter({
                            "StepProfile[toggleLookingFor > setLookingFor() > prev.filter()]": (l)=>l !== id
                        }["StepProfile[toggleLookingFor > setLookingFor() > prev.filter()]"]) : [
                            ...prev,
                            id
                        ]
                }["StepProfile[toggleLookingFor > setLookingFor()]"]);
            }
        })["StepProfile[toggleLookingFor]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const toggleLookingFor = t2;
    let t3;
    if ($[4] !== college || $[5] !== primaryGoal) {
        t3 = college.trim().length >= 2 && primaryGoal !== "";
        $[4] = college;
        $[5] = primaryGoal;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const canContinue = t3;
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 block",
            children: "Your College / University *"
        }, void 0, false, {
            fileName: "[project]/src/components/onboarding/steps/StepProfile.tsx",
            lineNumber: 134,
            columnNumber: 10
        }, this);
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "StepProfile[<input>.onChange]": (e)=>setCollege(e.target.value)
        })["StepProfile[<input>.onChange]"];
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== college) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: "e.g. NIAT, VIT, IIT Bombay, JNTU...",
            value: college,
            onChange: t5,
            className: "w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/10 focus:border-neutral-400 transition-all placeholder:text-neutral-400",
            autoFocus: true
        }, void 0, false, {
            fileName: "[project]/src/components/onboarding/steps/StepProfile.tsx",
            lineNumber: 150,
            columnNumber: 10
        }, this);
        $[9] = college;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-neutral-400 mt-1.5",
            children: "We'll match you with students from your campus first"
        }, void 0, false, {
            fileName: "[project]/src/components/onboarding/steps/StepProfile.tsx",
            lineNumber: 158,
            columnNumber: 10
        }, this);
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/steps/StepProfile.tsx",
            lineNumber: 165,
            columnNumber: 10
        }, this);
        $[12] = t6;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 block",
            children: "What's your main focus right now? *"
        }, void 0, false, {
            fileName: "[project]/src/components/onboarding/steps/StepProfile.tsx",
            lineNumber: 173,
            columnNumber: 10
        }, this);
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== primaryGoal) {
        t10 = GOALS.map({
            "StepProfile[GOALS.map()]": (goal, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    initial: {
                        opacity: 0,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        delay: i * 0.02
                    },
                    onClick: {
                        "StepProfile[GOALS.map() > <motion.button>.onClick]": ()=>setPrimaryGoal(goal.id)
                    }["StepProfile[GOALS.map() > <motion.button>.onClick]"],
                    className: `p-3 rounded-xl border text-center transition-all text-xs font-medium ${primaryGoal === goal.id ? "border-black dark:border-white bg-black dark:bg-white text-white dark:text-black" : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 text-neutral-700 dark:text-neutral-300"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lg block mb-0.5",
                            children: goal.emoji
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/steps/StepProfile.tsx",
                            lineNumber: 191,
                            columnNumber: 400
                        }, this),
                        goal.label
                    ]
                }, goal.id, true, {
                    fileName: "[project]/src/components/onboarding/steps/StepProfile.tsx",
                    lineNumber: 181,
                    columnNumber: 48
                }, this)
        }["StepProfile[GOALS.map()]"]);
        $[15] = primaryGoal;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-3 gap-2",
                    children: t10
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/steps/StepProfile.tsx",
                    lineNumber: 200,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/steps/StepProfile.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[17] = t10;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 block",
            children: [
                "I'm looking for ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-neutral-400 font-normal",
                    children: "(optional)"
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/steps/StepProfile.tsx",
                    lineNumber: 208,
                    columnNumber: 116
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/steps/StepProfile.tsx",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== lookingFor) {
        t13 = LOOKING_FOR.map({
            "StepProfile[LOOKING_FOR.map()]": (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "StepProfile[LOOKING_FOR.map() > <button>.onClick]": ()=>toggleLookingFor(item.id)
                    }["StepProfile[LOOKING_FOR.map() > <button>.onClick]"],
                    className: `px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${lookingFor.includes(item.id) ? "bg-black dark:bg-white text-white dark:text-black" : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"}`,
                    children: item.label
                }, item.id, false, {
                    fileName: "[project]/src/components/onboarding/steps/StepProfile.tsx",
                    lineNumber: 216,
                    columnNumber: 49
                }, this)
        }["StepProfile[LOOKING_FOR.map()]"]);
        $[20] = lookingFor;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: t13
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/steps/StepProfile.tsx",
                    lineNumber: 227,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/steps/StepProfile.tsx",
            lineNumber: 227,
            columnNumber: 11
        }, this);
        $[22] = t13;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] !== college || $[25] !== lookingFor || $[26] !== onComplete || $[27] !== primaryGoal) {
        t15 = ({
            "StepProfile[<button>.onClick]": ()=>onComplete({
                    college,
                    primaryGoal,
                    lookingFor,
                    secondaryGoals: []
                })
        })["StepProfile[<button>.onClick]"];
        $[24] = college;
        $[25] = lookingFor;
        $[26] = onComplete;
        $[27] = primaryGoal;
        $[28] = t15;
    } else {
        t15 = $[28];
    }
    const t16 = !canContinue || saving;
    const t17 = `w-full py-3.5 rounded-xl font-semibold text-sm transition-all ${canContinue && !saving ? "bg-black dark:bg-white text-white dark:text-black hover:opacity-90 active:scale-[0.98]" : "bg-neutral-200 dark:bg-neutral-800 text-neutral-400 cursor-not-allowed"}`;
    const t18 = saving ? "Saving..." : "Continue";
    let t19;
    if ($[29] !== t15 || $[30] !== t16 || $[31] !== t17 || $[32] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-auto pt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t15,
                disabled: t16,
                className: t17,
                children: t18
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/steps/StepProfile.tsx",
                lineNumber: 256,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/onboarding/steps/StepProfile.tsx",
            lineNumber: 256,
            columnNumber: 11
        }, this);
        $[29] = t15;
        $[30] = t16;
        $[31] = t17;
        $[32] = t18;
        $[33] = t19;
    } else {
        t19 = $[33];
    }
    let t20;
    if ($[34] !== t11 || $[35] !== t14 || $[36] !== t19 || $[37] !== t8) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col gap-6",
            children: [
                t8,
                t11,
                t14,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/steps/StepProfile.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[34] = t11;
        $[35] = t14;
        $[36] = t19;
        $[37] = t8;
        $[38] = t20;
    } else {
        t20 = $[38];
    }
    return t20;
}
_s(StepProfile, "QWjSrFdMKRvE7w47l30ljs5iNfo=");
_c = StepProfile;
var _c;
__turbopack_context__.k.register(_c, "StepProfile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/onboarding/steps/StepInterests.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StepInterests
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const INTEREST_GROUPS = [
    {
        label: 'Tech & Engineering',
        items: [
            'Python',
            'JavaScript',
            'React',
            'AI/ML',
            'Data Science',
            'Cybersecurity',
            'Cloud/DevOps',
            'Mobile Dev',
            'Blockchain',
            'Game Dev',
            'DSA',
            'Web Dev'
        ]
    },
    {
        label: 'Business & Finance',
        items: [
            'Startups',
            'Marketing',
            'Finance',
            'Investing',
            'E-Commerce',
            'Product Management',
            'Sales',
            'Accounting'
        ]
    },
    {
        label: 'Creative & Design',
        items: [
            'UI/UX Design',
            'Graphic Design',
            'Video Editing',
            'Photography',
            'Animation',
            'Illustration',
            'Figma',
            '3D Modeling'
        ]
    },
    {
        label: 'Content & Media',
        items: [
            'YouTube',
            'Blogging',
            'Podcasting',
            'Social Media',
            'Copywriting',
            'Filmmaking',
            'Journalism',
            'Public Speaking'
        ]
    },
    {
        label: 'Music & Arts',
        items: [
            'Guitar',
            'Singing',
            'Piano',
            'Music Production',
            'Dancing',
            'Painting',
            'Poetry',
            'Theatre'
        ]
    },
    {
        label: 'Sports & Fitness',
        items: [
            'Cricket',
            'Football',
            'Basketball',
            'Badminton',
            'Swimming',
            'Gym/Fitness',
            'Yoga',
            'Running',
            'Chess',
            'Table Tennis'
        ]
    },
    {
        label: 'Life & Growth',
        items: [
            'Leadership',
            'Communication',
            'Time Management',
            'Networking',
            'Mental Health',
            'Reading',
            'Volunteering',
            'Travel'
        ]
    },
    {
        label: 'Academic',
        items: [
            'Research',
            'Competitive Exams',
            'GATE',
            'GRE',
            'CAT',
            'Interview Prep',
            'Resume Building',
            'Placements'
        ]
    }
];
function normalizeCustomLabel(value) {
    const trimmed = value.trim();
    if (!trimmed) return '';
    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
}
function StepInterests(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(67);
    if ($[0] !== "5d5533f81a6b17031a19c085a37babaa2267b7a46c7c7227cd306d9d1aa979fa") {
        for(let $i = 0; $i < 67; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5d5533f81a6b17031a19c085a37babaa2267b7a46c7c7227cd306d9d1aa979fa";
    }
    const { initialData, onComplete, saving } = t0;
    let t1;
    if ($[1] !== initialData?.interests) {
        t1 = initialData?.interests || [];
        $[1] = initialData?.interests;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] !== initialData?.canTeach) {
        t2 = initialData?.canTeach || [];
        $[3] = initialData?.canTeach;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const [canTeach, setCanTeach] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [customInput, setCustomInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "StepInterests[toggle]": (item)=>{
                setSelected({
                    "StepInterests[toggle > setSelected()]": (prev)=>prev.includes(item) ? prev.filter({
                            "StepInterests[toggle > setSelected() > prev.filter()]": (i)=>i !== item
                        }["StepInterests[toggle > setSelected() > prev.filter()]"]) : [
                            ...prev,
                            item
                        ]
                }["StepInterests[toggle > setSelected()]"]);
            }
        })["StepInterests[toggle]"];
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const toggle = t3;
    let t4;
    if ($[6] !== selected) {
        t4 = ({
            "StepInterests[toggleTeach]": (item_0)=>{
                if (!selected.includes(item_0)) {
                    return;
                }
                setCanTeach({
                    "StepInterests[toggleTeach > setCanTeach()]": (prev_0)=>prev_0.includes(item_0) ? prev_0.filter({
                            "StepInterests[toggleTeach > setCanTeach() > prev_0.filter()]": (i_0)=>i_0 !== item_0
                        }["StepInterests[toggleTeach > setCanTeach() > prev_0.filter()]"]) : [
                            ...prev_0,
                            item_0
                        ]
                }["StepInterests[toggleTeach > setCanTeach()]"]);
            }
        })["StepInterests[toggleTeach]"];
        $[6] = selected;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const toggleTeach = t4;
    let t5;
    if ($[8] !== customInput || $[9] !== selected) {
        t5 = ({
            "StepInterests[addCustom]": ()=>{
                const label = normalizeCustomLabel(customInput);
                if (!label) {
                    return;
                }
                const exists = selected.some({
                    "StepInterests[addCustom > selected.some()]": (s)=>s.toLowerCase() === label.toLowerCase()
                }["StepInterests[addCustom > selected.some()]"]);
                if (exists) {
                    setCustomInput("");
                    return;
                }
                setSelected({
                    "StepInterests[addCustom > setSelected()]": (prev_1)=>[
                            ...prev_1,
                            label
                        ]
                }["StepInterests[addCustom > setSelected()]"]);
                setCustomInput("");
            }
        })["StepInterests[addCustom]"];
        $[8] = customInput;
        $[9] = selected;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const addCustom = t5;
    let t6;
    if ($[11] !== addCustom) {
        t6 = ({
            "StepInterests[handleCustomKeyDown]": (e)=>{
                if (e.key === "Enter") {
                    e.preventDefault();
                    addCustom();
                }
            }
        })["StepInterests[handleCustomKeyDown]"];
        $[11] = addCustom;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const handleCustomKeyDown = t6;
    let canContinue;
    let t10;
    let t11;
    let t12;
    let t13;
    let t7;
    let t8;
    let t9;
    if ($[13] !== addCustom || $[14] !== canTeach || $[15] !== customInput || $[16] !== handleCustomKeyDown || $[17] !== search || $[18] !== selected || $[19] !== toggleTeach) {
        const allItems = INTEREST_GROUPS.flatMap(_StepInterestsINTEREST_GROUPSFlatMap);
        const filtered = search ? allItems.filter({
            "StepInterests[allItems.filter()]": (i_1)=>i_1.toLowerCase().includes(search.toLowerCase())
        }["StepInterests[allItems.filter()]"]) : null;
        canContinue = selected.length >= 2;
        t9 = "flex-1 flex flex-col gap-4";
        if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-neutral-500 dark:text-neutral-400",
                children: "Pick at least 2 interests from the list or add your own. Tap the star on any to mark it as something you can teach others."
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/steps/StepInterests.tsx",
                lineNumber: 170,
                columnNumber: 13
            }, this);
            $[28] = t10;
        } else {
            t10 = $[28];
        }
        let t14;
        if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = ({
                "StepInterests[<input>.onChange]": (e_0)=>setSearch(e_0.target.value)
            })["StepInterests[<input>.onChange]"];
            $[29] = t14;
        } else {
            t14 = $[29];
        }
        if ($[30] !== search) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Search interests...",
                value: search,
                onChange: t14,
                className: "w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/10 transition-all placeholder:text-neutral-400"
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/steps/StepInterests.tsx",
                lineNumber: 185,
                columnNumber: 13
            }, this);
            $[30] = search;
            $[31] = t11;
        } else {
            t11 = $[31];
        }
        let t15;
        if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = ({
                "StepInterests[<input>.onChange]": (e_1)=>setCustomInput(e_1.target.value)
            })["StepInterests[<input>.onChange]"];
            $[32] = t15;
        } else {
            t15 = $[32];
        }
        let t16;
        if ($[33] !== customInput || $[34] !== handleCustomKeyDown) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Add your own (e.g. Arduino, Karate)...",
                value: customInput,
                onChange: t15,
                onKeyDown: handleCustomKeyDown,
                className: "flex-1 px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/10 transition-all placeholder:text-neutral-400"
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/steps/StepInterests.tsx",
                lineNumber: 202,
                columnNumber: 13
            }, this);
            $[33] = customInput;
            $[34] = handleCustomKeyDown;
            $[35] = t16;
        } else {
            t16 = $[35];
        }
        let t17;
        if ($[36] !== customInput) {
            t17 = customInput.trim();
            $[36] = customInput;
            $[37] = t17;
        } else {
            t17 = $[37];
        }
        const t18 = !t17;
        let t19;
        if ($[38] !== addCustom || $[39] !== t18) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: addCustom,
                disabled: t18,
                className: "shrink-0 px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                children: "Add"
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/steps/StepInterests.tsx",
                lineNumber: 220,
                columnNumber: 13
            }, this);
            $[38] = addCustom;
            $[39] = t18;
            $[40] = t19;
        } else {
            t19 = $[40];
        }
        if ($[41] !== t16 || $[42] !== t19) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 items-center",
                children: [
                    t16,
                    t19
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/onboarding/steps/StepInterests.tsx",
                lineNumber: 228,
                columnNumber: 13
            }, this);
            $[41] = t16;
            $[42] = t19;
            $[43] = t12;
        } else {
            t12 = $[43];
        }
        if ($[44] !== canTeach || $[45] !== selected) {
            t13 = selected.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-1.5",
                children: selected.map({
                    "StepInterests[selected.map()]": (item_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black dark:bg-white text-white dark:text-black text-xs font-medium",
                            children: [
                                canTeach.includes(item_1) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-yellow-300 dark:text-yellow-600",
                                    children: "★"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/steps/StepInterests.tsx",
                                    lineNumber: 237,
                                    columnNumber: 241
                                }, this),
                                item_1,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "StepInterests[selected.map() > <button>.onClick]": ()=>{
                                            toggle(item_1);
                                            setCanTeach({
                                                "StepInterests[selected.map() > <button>.onClick > setCanTeach()]": (prev_2)=>prev_2.filter({
                                                        "StepInterests[selected.map() > <button>.onClick > setCanTeach() > prev_2.filter()]": (i_2)=>i_2 !== item_1
                                                    }["StepInterests[selected.map() > <button>.onClick > setCanTeach() > prev_2.filter()]"])
                                            }["StepInterests[selected.map() > <button>.onClick > setCanTeach()]"]);
                                        }
                                    }["StepInterests[selected.map() > <button>.onClick]"],
                                    className: "ml-0.5 opacity-70 hover:opacity-100",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/steps/StepInterests.tsx",
                                    lineNumber: 237,
                                    columnNumber: 313
                                }, this)
                            ]
                        }, item_1, true, {
                            fileName: "[project]/src/components/onboarding/steps/StepInterests.tsx",
                            lineNumber: 237,
                            columnNumber: 54
                        }, this)
                }["StepInterests[selected.map()]"])
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/steps/StepInterests.tsx",
                lineNumber: 236,
                columnNumber: 36
            }, this);
            $[44] = canTeach;
            $[45] = selected;
            $[46] = t13;
        } else {
            t13 = $[46];
        }
        t7 = "flex-1 overflow-y-auto -mx-1 px-1 space-y-4 max-h-[340px] custom-scrollbar";
        t8 = filtered ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-1.5",
            children: filtered.map({
                "StepInterests[filtered.map()]": (item_2)=>{
                    const isSelected = selected.includes(item_2);
                    const isTeach = canTeach.includes(item_2);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "StepInterests[filtered.map() > <button>.onClick]": ()=>toggle(item_2)
                                }["StepInterests[filtered.map() > <button>.onClick]"],
                                className: `px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${isSelected ? "bg-black dark:bg-white text-white dark:text-black" : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"}`,
                                children: item_2
                            }, void 0, false, {
                                fileName: "[project]/src/components/onboarding/steps/StepInterests.tsx",
                                lineNumber: 259,
                                columnNumber: 57
                            }, this),
                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "StepInterests[filtered.map() > <button>.onClick]": (e_2)=>{
                                        e_2.stopPropagation();
                                        toggleTeach(item_2);
                                    }
                                }["StepInterests[filtered.map() > <button>.onClick]"],
                                title: "I can teach this",
                                className: `absolute -top-1 -right-1 w-4 h-4 rounded-full text-[8px] flex items-center justify-center ${isTeach ? "bg-yellow-400 text-black" : "bg-neutral-300 dark:bg-neutral-600 text-neutral-600 dark:text-neutral-300"}`,
                                children: "★"
                            }, void 0, false, {
                                fileName: "[project]/src/components/onboarding/steps/StepInterests.tsx",
                                lineNumber: 261,
                                columnNumber: 365
                            }, this)
                        ]
                    }, item_2, true, {
                        fileName: "[project]/src/components/onboarding/steps/StepInterests.tsx",
                        lineNumber: 259,
                        columnNumber: 18
                    }, this);
                }
            }["StepInterests[filtered.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/onboarding/steps/StepInterests.tsx",
            lineNumber: 255,
            columnNumber: 21
        }, this) : INTEREST_GROUPS.map({
            "StepInterests[INTEREST_GROUPS.map()]": (group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] font-semibold text-neutral-400 uppercase tracking-wider mb-2",
                            children: group.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/steps/StepInterests.tsx",
                            lineNumber: 269,
                            columnNumber: 79
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-1.5",
                            children: group.items.map({
                                "StepInterests[INTEREST_GROUPS.map() > group.items.map()]": (item_3)=>{
                                    const isSelected_0 = selected.includes(item_3);
                                    const isTeach_0 = canTeach.includes(item_3);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: {
                                                    "StepInterests[INTEREST_GROUPS.map() > group.items.map() > <button>.onClick]": ()=>toggle(item_3)
                                                }["StepInterests[INTEREST_GROUPS.map() > group.items.map() > <button>.onClick]"],
                                                className: `px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${isSelected_0 ? "bg-black dark:bg-white text-white dark:text-black" : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"}`,
                                                children: item_3
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/onboarding/steps/StepInterests.tsx",
                                                lineNumber: 273,
                                                columnNumber: 61
                                            }, this),
                                            isSelected_0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: {
                                                    "StepInterests[INTEREST_GROUPS.map() > group.items.map() > <button>.onClick]": (e_3)=>{
                                                        e_3.stopPropagation();
                                                        toggleTeach(item_3);
                                                    }
                                                }["StepInterests[INTEREST_GROUPS.map() > group.items.map() > <button>.onClick]"],
                                                title: "I can teach this",
                                                className: `absolute -top-1 -right-1 w-4 h-4 rounded-full text-[8px] flex items-center justify-center transition-colors ${isTeach_0 ? "bg-yellow-400 text-black" : "bg-neutral-300 dark:bg-neutral-600 text-neutral-600 dark:text-neutral-300"}`,
                                                children: "★"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/onboarding/steps/StepInterests.tsx",
                                                lineNumber: 275,
                                                columnNumber: 400
                                            }, this)
                                        ]
                                    }, item_3, true, {
                                        fileName: "[project]/src/components/onboarding/steps/StepInterests.tsx",
                                        lineNumber: 273,
                                        columnNumber: 22
                                    }, this);
                                }
                            }["StepInterests[INTEREST_GROUPS.map() > group.items.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/steps/StepInterests.tsx",
                            lineNumber: 269,
                            columnNumber: 184
                        }, this)
                    ]
                }, group.label, true, {
                    fileName: "[project]/src/components/onboarding/steps/StepInterests.tsx",
                    lineNumber: 269,
                    columnNumber: 56
                }, this)
        }["StepInterests[INTEREST_GROUPS.map()]"]);
        $[13] = addCustom;
        $[14] = canTeach;
        $[15] = customInput;
        $[16] = handleCustomKeyDown;
        $[17] = search;
        $[18] = selected;
        $[19] = toggleTeach;
        $[20] = canContinue;
        $[21] = t10;
        $[22] = t11;
        $[23] = t12;
        $[24] = t13;
        $[25] = t7;
        $[26] = t8;
        $[27] = t9;
    } else {
        canContinue = $[20];
        t10 = $[21];
        t11 = $[22];
        t12 = $[23];
        t13 = $[24];
        t7 = $[25];
        t8 = $[26];
        t9 = $[27];
    }
    let t14;
    if ($[47] !== t7 || $[48] !== t8) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/onboarding/steps/StepInterests.tsx",
            lineNumber: 311,
            columnNumber: 11
        }, this);
        $[47] = t7;
        $[48] = t8;
        $[49] = t14;
    } else {
        t14 = $[49];
    }
    let t15;
    if ($[50] !== canTeach || $[51] !== onComplete || $[52] !== selected) {
        t15 = ({
            "StepInterests[<button>.onClick]": ()=>onComplete({
                    interests: selected,
                    skills: selected.map(_StepInterestsButtonOnClickSelectedMap),
                    canTeach,
                    wantToLearn: selected.filter({
                        "StepInterests[<button>.onClick > selected.filter()]": (s_1)=>!canTeach.includes(s_1)
                    }["StepInterests[<button>.onClick > selected.filter()]"])
                })
        })["StepInterests[<button>.onClick]"];
        $[50] = canTeach;
        $[51] = onComplete;
        $[52] = selected;
        $[53] = t15;
    } else {
        t15 = $[53];
    }
    const t16 = !canContinue || saving;
    const t17 = `w-full py-3.5 rounded-xl font-semibold text-sm transition-all ${canContinue && !saving ? "bg-black dark:bg-white text-white dark:text-black hover:opacity-90 active:scale-[0.98]" : "bg-neutral-200 dark:bg-neutral-800 text-neutral-400 cursor-not-allowed"}`;
    const t18 = saving ? "Finding your matches..." : `Continue with ${selected.length} interest${selected.length !== 1 ? "s" : ""}`;
    let t19;
    if ($[54] !== t15 || $[55] !== t16 || $[56] !== t17 || $[57] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t15,
                disabled: t16,
                className: t17,
                children: t18
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/steps/StepInterests.tsx",
                lineNumber: 342,
                columnNumber: 33
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/onboarding/steps/StepInterests.tsx",
            lineNumber: 342,
            columnNumber: 11
        }, this);
        $[54] = t15;
        $[55] = t16;
        $[56] = t17;
        $[57] = t18;
        $[58] = t19;
    } else {
        t19 = $[58];
    }
    let t20;
    if ($[59] !== t10 || $[60] !== t11 || $[61] !== t12 || $[62] !== t13 || $[63] !== t14 || $[64] !== t19 || $[65] !== t9) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            children: [
                t10,
                t11,
                t12,
                t13,
                t14,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/steps/StepInterests.tsx",
            lineNumber: 353,
            columnNumber: 11
        }, this);
        $[59] = t10;
        $[60] = t11;
        $[61] = t12;
        $[62] = t13;
        $[63] = t14;
        $[64] = t19;
        $[65] = t9;
        $[66] = t20;
    } else {
        t20 = $[66];
    }
    return t20;
}
_s(StepInterests, "PuIzqWBKUMjuxVVDxRa2eRIQLWI=");
_c = StepInterests;
function _StepInterestsButtonOnClickSelectedMap(s_0) {
    return {
        name: s_0,
        proficiency: "Beginner",
        category: "General"
    };
}
function _StepInterestsINTEREST_GROUPSFlatMap(g) {
    return g.items;
}
var _c;
__turbopack_context__.k.register(_c, "StepInterests");
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
                }["StepMatches.useEffect.timer"], 300);
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
            className: "flex-1 flex flex-col items-center justify-center gap-4 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-10 h-10 border-2 border-black dark:border-white border-t-transparent rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-neutral-500",
                    children: "Finding people like you..."
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                    lineNumber: 37,
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
            className: "flex-1 flex flex-col items-center justify-center gap-4 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-4xl",
                    children: "🌱"
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-semibold text-neutral-800 dark:text-neutral-200",
                    children: "You're one of the first from your campus!"
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-neutral-500 text-center max-w-xs",
                    children: "As more students join, we'll match you with the right people. Meanwhile, explore circles and start connecting."
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onFinish,
                    className: "mt-4 w-full py-3.5 rounded-xl font-semibold text-sm bg-black dark:bg-white text-white dark:text-black hover:opacity-90 active:scale-[0.98] transition-all",
                    children: "Explore Vormex"
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
            lineNumber: 41,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-neutral-500 dark:text-neutral-400",
                children: [
                    "Found ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-neutral-800 dark:text-neutral-200",
                        children: [
                            matches.length,
                            " matches"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                        lineNumber: 54,
                        columnNumber: 15
                    }, this),
                    " based on your interests and campus. You can connect with them after."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 flex-1 overflow-y-auto max-h-[380px] custom-scrollbar",
                children: matches.map((match, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: i < revealed ? {
                            opacity: 1,
                            y: 0
                        } : {
                            opacity: 0,
                            y: 20
                        },
                        transition: {
                            duration: 0.3
                        },
                        className: "flex items-center gap-3 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-11 h-11 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center overflow-hidden",
                                        children: match.user.profileImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: match.user.profileImage,
                                            alt: "",
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                                            lineNumber: 72,
                                            columnNumber: 44
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-neutral-500 text-sm",
                                            children: match.user.name.charAt(0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                                            lineNumber: 72,
                                            columnNumber: 130
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute -bottom-0.5 -right-0.5 w-6 h-6 rounded-full flex items-center justify-center border-2 border-white dark:border-neutral-900 text-[8px] font-bold text-white ${match.matchPercentage >= 60 ? 'bg-green-500' : 'bg-blue-500'}`,
                                        children: [
                                            match.matchPercentage,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-neutral-900 dark:text-white truncate",
                                        children: match.user.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-neutral-500 truncate",
                                        children: match.user.college || match.user.headline
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1 mt-1",
                                        children: match.reasons.slice(0, 2).map((reason, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9px] px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400",
                                                children: reason
                                            }, j, false, {
                                                fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                                                lineNumber: 83,
                                                columnNumber: 63
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this)
                        ]
                    }, match.user.id, true, {
                        fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                        lineNumber: 58,
                        columnNumber: 36
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onFinish,
                className: "w-full py-3.5 rounded-xl font-semibold text-sm bg-black dark:bg-white text-white dark:text-black hover:opacity-90 active:scale-[0.98] transition-all",
                children: "Start Connecting"
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/onboarding/steps/StepMatches.tsx",
        lineNumber: 52,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$steps$2f$StepProfile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/onboarding/steps/StepProfile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$steps$2f$StepInterests$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/onboarding/steps/StepInterests.tsx [app-client] (ecmascript)");
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
const STEPS = [
    {
        id: 'profile',
        title: 'About You',
        subtitle: 'Help us find your people'
    },
    {
        id: 'interests',
        title: 'Your Interests',
        subtitle: 'What are you into?'
    },
    {
        id: 'matches',
        title: 'Your Circle',
        subtitle: 'People matched for you'
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
                x: dir > 0 ? 200 : -200,
                opacity: 0
            }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (dir_0)=>({
                x: dir_0 > 0 ? -200 : 200,
                opacity: 0
            })
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white dark:bg-neutral-950 flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "px-5 pt-5 pb-2 flex items-center justify-between max-w-lg mx-auto w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-lg bg-black dark:bg-white flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white dark:text-black font-bold text-xs",
                                    children: "V"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-neutral-400 font-medium tracking-wide uppercase",
                                children: [
                                    "Step ",
                                    currentStep + 1,
                                    " of ",
                                    STEPS.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    currentStep > 0 && currentStep < STEPS.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleBack,
                        className: "text-sm text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors",
                        children: "Back"
                    }, void 0, false, {
                        fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                        lineNumber: 97,
                        columnNumber: 63
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 max-w-lg mx-auto w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-1 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "h-full bg-black dark:bg-white rounded-full",
                        animate: {
                            width: `${progress}%`
                        },
                        transition: {
                            duration: 0.4,
                            ease: 'easeOut'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col px-5 py-6 pb-24 max-w-lg mx-auto w-full overflow-y-auto",
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
                            duration: 0.3,
                            ease: [
                                0.25,
                                0.46,
                                0.45,
                                0.94
                            ]
                        },
                        className: "w-full flex-1 flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold text-neutral-900 dark:text-white",
                                        children: STEPS[currentStep].title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-neutral-500 dark:text-neutral-400 text-sm mt-1",
                                        children: STEPS[currentStep].subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            currentStep === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$steps$2f$StepProfile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                initialData: stepData[0],
                                onComplete: (data_0)=>handleStepComplete(0, data_0),
                                saving: saving,
                                userName: user?.name || '',
                                userCollege: user?.college || ''
                            }, void 0, false, {
                                fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                                lineNumber: 131,
                                columnNumber: 35
                            }, this),
                            currentStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$steps$2f$StepInterests$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                initialData: stepData[1],
                                onComplete: (data_1)=>handleStepComplete(1, data_1),
                                saving: saving
                            }, void 0, false, {
                                fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                                lineNumber: 132,
                                columnNumber: 35
                            }, this),
                            currentStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$steps$2f$StepMatches$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onFinish: handleFinish
                            }, void 0, false, {
                                fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                                lineNumber: 133,
                                columnNumber: 35
                            }, this)
                        ]
                    }, currentStep, true, {
                        fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/onboarding/OnboardingWizard.tsx",
        lineNumber: 86,
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

//# sourceMappingURL=src_07cef08e._.js.map