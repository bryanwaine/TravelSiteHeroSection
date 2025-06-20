(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/components/GoldenResponse.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// dont copy above this line
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
// Tailwind CSS Color Palette (Chilli Spice Theme)
// #F9F9F9 (Snow Drift - Almost White / Background)
// #CD1C18 (Thunderbird Red - Primary Red)
// #FFA896 (Mandys Pink - Light Accent Red/Pink)
// #9B1313 (Old Brick Red - Dark Red Accent)
// #3B000A (Black Bean - Deep Burgundy/Dark Background Element)
// #111111 (Cod Gray - Dark Text/Icons)
// Helper to construct Tailwind glassmorphism classes
const glassmorphismStyle = (bgColor, borderColor, textColor = 'text-neutral-900')=>`bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border ${borderColor} ${bgColor} ${textColor} shadow-lg`;
// --- SVG Icons ---
const PlayIcon = ({ className = "w-6 h-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6 4l15 8-15 8z"
        }, void 0, false, {
            fileName: "[project]/app/components/GoldenResponse.tsx",
            lineNumber: 24,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/GoldenResponse.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, this);
_c = PlayIcon;
const PauseIcon = ({ className = "w-6 h-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6 4h4v16H6zm8 0h4v16h-4z"
        }, void 0, false, {
            fileName: "[project]/app/components/GoldenResponse.tsx",
            lineNumber: 30,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/GoldenResponse.tsx",
        lineNumber: 29,
        columnNumber: 3
    }, this);
_c1 = PauseIcon;
const AnnotationIcon = ({ className = "w-6 h-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"
        }, void 0, false, {
            fileName: "[project]/app/components/GoldenResponse.tsx",
            lineNumber: 36,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/GoldenResponse.tsx",
        lineNumber: 35,
        columnNumber: 3
    }, this);
_c2 = AnnotationIcon;
const CheckCircleIcon = ({ className = "w-5 h-5" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
            clipRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/app/components/GoldenResponse.tsx",
            lineNumber: 42,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/GoldenResponse.tsx",
        lineNumber: 41,
        columnNumber: 3
    }, this);
_c3 = CheckCircleIcon;
const CircleIcon = ({ className = "w-5 h-5" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zM2 10a8 8 0 1116 0 8 8 0 01-16 0z",
            clipRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/app/components/GoldenResponse.tsx",
            lineNumber: 48,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/GoldenResponse.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, this);
_c4 = CircleIcon;
const MenuIcon = ({ className = "w-6 h-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        }, void 0, false, {
            fileName: "[project]/app/components/GoldenResponse.tsx",
            lineNumber: 54,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/GoldenResponse.tsx",
        lineNumber: 53,
        columnNumber: 3
    }, this);
_c5 = MenuIcon;
const CloseIcon = ({ className = "w-6 h-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6 18L18 6M6 6l12 12"
        }, void 0, false, {
            fileName: "[project]/app/components/GoldenResponse.tsx",
            lineNumber: 60,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/GoldenResponse.tsx",
        lineNumber: 59,
        columnNumber: 3
    }, this);
_c6 = CloseIcon;
// --- Mock Data ---
const MOCK_ATTENDEES = [
    {
        id: '1',
        name: 'Alice W.',
        present: true
    },
    {
        id: '2',
        name: 'Bob B.',
        present: false
    },
    {
        id: '3',
        name: 'Charlie B.',
        present: true
    },
    {
        id: '4',
        name: 'Diana P.',
        present: true
    },
    {
        id: '5',
        name: 'Edward S.',
        present: false
    },
    {
        id: '6',
        name: 'Fiona G.',
        present: true
    },
    {
        id: '7',
        name: 'George J.',
        present: false
    }
];
const MOCK_ANNOTATIONS = [
    {
        id: 'anno1',
        timestamp: 30,
        user: 'Alice',
        text: 'Great point about quantum entanglement here!',
        comments: [
            {
                id: 'c1',
                user: 'Bob',
                text: 'I agree, this is crucial.'
            },
            {
                id: 'c2',
                user: 'Charlie',
                text: 'Can someone elaborate on this please?'
            },
            {
                id: 'c3',
                user: 'Diana',
                text: 'Check chapter 3, page 55.'
            }
        ]
    },
    {
        id: 'anno2',
        timestamp: 125,
        user: 'Bob',
        text: 'This formula seems incorrect. Should be E=mc^2, not E=mc^3?',
        comments: [
            {
                id: 'c4',
                user: 'Alice',
                text: 'Good catch! Typo in the slides.'
            }
        ]
    },
    {
        id: 'anno3',
        timestamp: 280,
        user: 'Edward',
        text: 'Is this concept examinable for the upcoming test?',
        comments: []
    }
];
const EMOJI_PULSE_OPTIONS = [
    {
        id: 'emoji1',
        emoji: '👍',
        label: 'Got it!'
    },
    {
        id: 'emoji2',
        emoji: '🤔',
        label: 'Confused'
    },
    {
        id: 'emoji3',
        emoji: '💡',
        label: 'Idea!'
    },
    {
        id: 'emoji4',
        emoji: '🤯',
        label: 'Mind blown!'
    }
];
// --- Helper Functions ---
const formatTime = (timeInSeconds)=>{
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
const FloatingProgressRing = ({ progress })=>{
    const radius = 16;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - progress / 100 * circumference;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed bottom-4 right-4 z-50 p-2 rounded-full ${glassmorphismStyle('bg-[#FFA896]', 'border-[#CD1C18]/70')}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-12 h-12 transform -rotate-90",
                viewBox: "0 0 36 36",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "18",
                        cy: "18",
                        r: radius,
                        className: "text-[#3B000A]/30",
                        strokeWidth: "3",
                        fill: "transparent"
                    }, void 0, false, {
                        fileName: "[project]/app/components/GoldenResponse.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "18",
                        cy: "18",
                        r: radius,
                        className: "text-[#CD1C18]",
                        strokeWidth: "3",
                        fill: "transparent",
                        strokeDasharray: circumference,
                        strokeDashoffset: offset,
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/app/components/GoldenResponse.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/GoldenResponse.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute inset-0 flex items-center justify-center text-xs font-semibold text-[#3B000A]",
                children: [
                    Math.round(progress),
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/GoldenResponse.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/GoldenResponse.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
};
_c7 = FloatingProgressRing;
const DraggableAttendanceChecklist = ({ attendees, onTogglePresent })=>{
    _s();
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 20,
        y: 200
    }); // Initial position
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dragRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const offsetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const handleMouseDown = (e)=>{
        if (dragRef.current) {
            setIsDragging(true);
            offsetRef.current = {
                x: e.clientX - dragRef.current.getBoundingClientRect().left,
                y: e.clientY - dragRef.current.getBoundingClientRect().top
            };
            document.body.style.userSelect = 'none'; // Prevent text selection
        }
    };
    const handleTouchStart = (e)=>{
        if (dragRef.current) {
            setIsDragging(true);
            const touch = e.touches[0];
            offsetRef.current = {
                x: touch.clientX - dragRef.current.getBoundingClientRect().left,
                y: touch.clientY - dragRef.current.getBoundingClientRect().top
            };
        // No user-select for touch typically needed, but good to be aware
        }
    };
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DraggableAttendanceChecklist.useCallback[handleMouseMove]": (e)=>{
            if (!isDragging) return;
            setPosition({
                x: e.clientX - offsetRef.current.x,
                y: e.clientY - offsetRef.current.y
            });
        }
    }["DraggableAttendanceChecklist.useCallback[handleMouseMove]"], [
        isDragging
    ]);
    const handleTouchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DraggableAttendanceChecklist.useCallback[handleTouchMove]": (e)=>{
            if (!isDragging || e.touches.length === 0) return;
            const touch = e.touches[0];
            setPosition({
                x: touch.clientX - offsetRef.current.x,
                y: touch.clientY - offsetRef.current.y
            });
        }
    }["DraggableAttendanceChecklist.useCallback[handleTouchMove]"], [
        isDragging
    ]);
    const handleMouseUp = ()=>{
        setIsDragging(false);
        document.body.style.userSelect = '';
    };
    const handleTouchEnd = ()=>{
        setIsDragging(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DraggableAttendanceChecklist.useEffect": ()=>{
            if (isDragging) {
                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
                document.addEventListener('touchmove', handleTouchMove);
                document.addEventListener('touchend', handleTouchEnd);
            } else {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
                document.removeEventListener('touchmove', handleTouchMove);
                document.removeEventListener('touchend', handleTouchEnd);
            }
            return ({
                "DraggableAttendanceChecklist.useEffect": ()=>{
                    document.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('mouseup', handleMouseUp);
                    document.removeEventListener('touchmove', handleTouchMove);
                    document.removeEventListener('touchend', handleTouchEnd);
                    document.body.style.userSelect = '';
                }
            })["DraggableAttendanceChecklist.useEffect"];
        }
    }["DraggableAttendanceChecklist.useEffect"], [
        isDragging,
        handleMouseMove,
        handleTouchMove
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: dragRef,
        className: `fixed z-40 p-4 rounded-xl shadow-2xl ${glassmorphismStyle('bg-[#FFA896]', 'border-[#CD1C18]/70', 'text-[#3B000A]')}`,
        style: {
            top: `${position.y}px`,
            left: `${position.x}px`,
            touchAction: 'none'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cursor-move pb-2 mb-2 border-b border-[#CD1C18]/50 text-sm font-semibold",
                onMouseDown: handleMouseDown,
                onTouchStart: handleTouchStart,
                children: "Attendance (Drag Me)"
            }, void 0, false, {
                fileName: "[project]/app/components/GoldenResponse.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-1 max-h-48 overflow-y-auto pr-2",
                children: [
                    " ",
                    attendees.map((attendee)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-center justify-between text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: attendee.name
                                }, void 0, false, {
                                    fileName: "[project]/app/components/GoldenResponse.tsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onTogglePresent(attendee.id),
                                    className: "ml-2 p-1",
                                    children: attendee.present ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckCircleIcon, {
                                        className: "w-4 h-4 text-[#CD1C18]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/GoldenResponse.tsx",
                                        lineNumber: 281,
                                        columnNumber: 35
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CircleIcon, {
                                        className: "w-4 h-4 text-[#3B000A]/50"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/GoldenResponse.tsx",
                                        lineNumber: 281,
                                        columnNumber: 92
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/GoldenResponse.tsx",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, attendee.id, true, {
                            fileName: "[project]/app/components/GoldenResponse.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/GoldenResponse.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/GoldenResponse.tsx",
        lineNumber: 264,
        columnNumber: 5
    }, this);
};
_s(DraggableAttendanceChecklist, "3c0a7ytdsuDUzdYRj8cDINel/NM=");
_c8 = DraggableAttendanceChecklist;
const EmojiPulseSurvey = ({ options, onSubmit })=>{
    _s1();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `p-4 rounded-xl ${glassmorphismStyle('bg-[#3B000A]', 'border-[#9B1313]/70', 'text-[#F9F9F9]')}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-semibold mb-3 text-center",
                children: "Quick Pulse"
            }, void 0, false, {
                fileName: "[project]/app/components/GoldenResponse.tsx",
                lineNumber: 302,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-around items-center space-x-2",
                children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setSelected(option.id);
                            onSubmit(option.id);
                        },
                        className: `p-2 rounded-lg flex flex-col items-center transition-all duration-200 ease-in-out hover:scale-110
                        ${selected === option.id ? 'bg-[#CD1C18]' : 'bg-[#F9F9F9]/10 hover:bg-[#F9F9F9]/20'}`,
                        title: option.label,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl",
                                children: option.emoji
                            }, void 0, false, {
                                fileName: "[project]/app/components/GoldenResponse.tsx",
                                lineNumber: 312,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] mt-1",
                                children: option.label
                            }, void 0, false, {
                                fileName: "[project]/app/components/GoldenResponse.tsx",
                                lineNumber: 313,
                                columnNumber: 13
                            }, this)
                        ]
                    }, option.id, true, {
                        fileName: "[project]/app/components/GoldenResponse.tsx",
                        lineNumber: 305,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/GoldenResponse.tsx",
                lineNumber: 303,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/GoldenResponse.tsx",
        lineNumber: 301,
        columnNumber: 5
    }, this);
};
_s1(EmojiPulseSurvey, "PVKrpNrydW4BpnDEq9OT3cVmCk4=");
_c9 = EmojiPulseSurvey;
const AnnotationItem = ({ annotation, isCurrent, onTimestampClick })=>{
    _s2();
    const [showComments, setShowComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newComment, setNewComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleAddComment = (e)=>{
        e.preventDefault();
        if (newComment.trim()) {
            // In a real app, this would call a prop function to update state
            console.log(`New comment for annotation ${annotation.id}: ${newComment} by User`);
            annotation.comments.push({
                id: Date.now().toString(),
                user: 'You',
                text: newComment
            });
            setNewComment('');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `p-3 mb-3 rounded-lg transition-all duration-300 ${isCurrent ? 'bg-[#CD1C18]/40' : 'bg-[#FFA896]/20'} border border-[#9B1313]/30`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-[#3B000A] font-medium",
                                children: annotation.user
                            }, void 0, false, {
                                fileName: "[project]/app/components/GoldenResponse.tsx",
                                lineNumber: 345,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-neutral-900 my-1",
                                children: annotation.text
                            }, void 0, false, {
                                fileName: "[project]/app/components/GoldenResponse.tsx",
                                lineNumber: 346,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/GoldenResponse.tsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onTimestampClick(annotation.timestamp),
                        className: "text-xs bg-[#CD1C18] text-[#F9F9F9] px-2 py-1 rounded hover:bg-[#9B1313] transition-colors",
                        children: formatTime(annotation.timestamp)
                    }, void 0, false, {
                        fileName: "[project]/app/components/GoldenResponse.tsx",
                        lineNumber: 348,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/GoldenResponse.tsx",
                lineNumber: 343,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowComments(!showComments),
                        className: "text-xs text-[#CD1C18] hover:underline",
                        children: [
                            showComments ? 'Hide' : 'Show',
                            " ",
                            annotation.comments.length,
                            " comments"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/GoldenResponse.tsx",
                        lineNumber: 357,
                        columnNumber: 9
                    }, this),
                    showComments && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 space-y-2 pl-2 border-l-2 border-[#CD1C18]/50 max-h-32 overflow-y-auto",
                        children: [
                            annotation.comments.map((comment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs bg-[#F9F9F9]/50 p-1.5 rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-[#3B000A]",
                                            children: [
                                                comment.user,
                                                ": "
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/GoldenResponse.tsx",
                                            lineNumber: 368,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-neutral-900",
                                            children: comment.text
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/GoldenResponse.tsx",
                                            lineNumber: 369,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, comment.id, true, {
                                    fileName: "[project]/app/components/GoldenResponse.tsx",
                                    lineNumber: 367,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleAddComment,
                                className: "flex items-center mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: newComment,
                                        onChange: (e)=>setNewComment(e.target.value),
                                        placeholder: "Add a comment...",
                                        className: "flex-grow p-1.5 text-xs border border-[#9B1313]/30 rounded-l-md focus:ring-1 focus:ring-[#CD1C18] focus:outline-none text-neutral-900 bg-white/70 placeholder:text-[#3B000A]/70"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/GoldenResponse.tsx",
                                        lineNumber: 373,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "p-1.5 bg-[#CD1C18] text-[#F9F9F9] text-xs rounded-r-md hover:bg-[#9B1313] transition-colors",
                                        children: "Send"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/GoldenResponse.tsx",
                                        lineNumber: 380,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/GoldenResponse.tsx",
                                lineNumber: 372,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/GoldenResponse.tsx",
                        lineNumber: 364,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/GoldenResponse.tsx",
                lineNumber: 356,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/GoldenResponse.tsx",
        lineNumber: 342,
        columnNumber: 5
    }, this);
};
_s2(AnnotationItem, "3PzxJDL3l5mz4m2zRK02HbRPwR4=");
_c10 = AnnotationItem;
const AnnotationSidebar = ({ isOpen, onClose, annotations, currentTime, onAddAnnotation, onTimestampClick })=>{
    _s3();
    const [newAnnotationText, setNewAnnotationText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const sidebarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleAddAnnotation = (e)=>{
        e.preventDefault();
        if (newAnnotationText.trim()) {
            onAddAnnotation(newAnnotationText, currentTime);
            setNewAnnotationText('');
        }
    };
    // Gesture handling for closing sidebar (swipe right)
    const touchStartX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const handleTouchStart = (e)=>{
        touchStartX.current = e.targetTouches[0].clientX;
    };
    const handleTouchMove = (e)=>{
        if (!isOpen) return;
        const touchCurrentX = e.targetTouches[0].clientX;
        if (touchCurrentX - touchStartX.current > 50) {
            onClose();
        }
    };
    const sortedAnnotations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnnotationSidebar.useMemo[sortedAnnotations]": ()=>[
                ...annotations
            ].sort({
                "AnnotationSidebar.useMemo[sortedAnnotations]": (a, b)=>a.timestamp - b.timestamp
            }["AnnotationSidebar.useMemo[sortedAnnotations]"])
    }["AnnotationSidebar.useMemo[sortedAnnotations]"], [
        annotations
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sidebarRef,
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        className: `fixed top-0 right-0 h-full w-full max-w-md transform transition-transform duration-300 ease-in-out z-50 flex flex-col
                  ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                  ${glassmorphismStyle('bg-[#FFA896]', 'border-l border-[#CD1C18]/70', 'text-[#3B000A]')}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-4 border-b border-[#CD1C18]/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-[#3B000A]",
                        children: "Annotations"
                    }, void 0, false, {
                        fileName: "[project]/app/components/GoldenResponse.tsx",
                        lineNumber: 439,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "p-1 text-[#3B000A] hover:text-[#CD1C18]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloseIcon, {}, void 0, false, {
                            fileName: "[project]/app/components/GoldenResponse.tsx",
                            lineNumber: 441,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/GoldenResponse.tsx",
                        lineNumber: 440,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/GoldenResponse.tsx",
                lineNumber: 438,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-grow p-4 overflow-y-auto space-y-2",
                children: sortedAnnotations.map((anno)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnnotationItem, {
                        annotation: anno,
                        isCurrent: Math.abs(currentTime - anno.timestamp) < 5,
                        onTimestampClick: onTimestampClick
                    }, anno.id, false, {
                        fileName: "[project]/app/components/GoldenResponse.tsx",
                        lineNumber: 447,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/GoldenResponse.tsx",
                lineNumber: 445,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleAddAnnotation,
                className: "p-4 border-t border-[#CD1C18]/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: newAnnotationText,
                        onChange: (e)=>setNewAnnotationText(e.target.value),
                        placeholder: `Add annotation at ${formatTime(currentTime)}...`,
                        rows: 3,
                        className: "w-full p-2 text-sm border border-[#9B1313]/30 rounded-md focus:ring-1 focus:ring-[#CD1C18] focus:outline-none mb-2 text-neutral-900 bg-white/70 placeholder:text-[#3B000A]/70"
                    }, void 0, false, {
                        fileName: "[project]/app/components/GoldenResponse.tsx",
                        lineNumber: 458,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "w-full p-2 bg-[#CD1C18] text-[#F9F9F9] rounded-md hover:bg-[#9B1313] transition-colors",
                        children: "Add Annotation"
                    }, void 0, false, {
                        fileName: "[project]/app/components/GoldenResponse.tsx",
                        lineNumber: 465,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/GoldenResponse.tsx",
                lineNumber: 457,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/GoldenResponse.tsx",
        lineNumber: 430,
        columnNumber: 5
    }, this);
};
_s3(AnnotationSidebar, "aqvlo5GTWP1jQ6tObLSQt4x6JK0=");
_c11 = AnnotationSidebar;
const VideoPlayer = ({ currentTime, duration, isPlaying, onPlayPause, onSeek, title })=>{
    const progressPercent = duration > 0 ? currentTime / duration * 100 : 0;
    const handleSeek = (event)=>{
        onSeek(Number(event.target.value));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full aspect-video bg-[#3B000A] text-[#F9F9F9] flex flex-col justify-between shadow-2xl rounded-b-xl overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-grow flex items-center justify-center relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-2xl font-semibold opacity-80 select-none",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/app/components/GoldenResponse.tsx",
                        lineNumber: 494,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-2 left-2 px-2 py-1 bg-black/30 rounded text-xs",
                        children: "Mock Video Player"
                    }, void 0, false, {
                        fileName: "[project]/app/components/GoldenResponse.tsx",
                        lineNumber: 495,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/GoldenResponse.tsx",
                lineNumber: 493,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `p-3 ${glassmorphismStyle('bg-neutral-900', 'border-t border-[#CD1C18]/50', 'text-[#F9F9F9]')}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onPlayPause,
                            className: "p-1.5 text-[#F9F9F9] hover:text-[#FFA896]",
                            children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PauseIcon, {
                                className: "w-7 h-7"
                            }, void 0, false, {
                                fileName: "[project]/app/components/GoldenResponse.tsx",
                                lineNumber: 502,
                                columnNumber: 26
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayIcon, {
                                className: "w-7 h-7"
                            }, void 0, false, {
                                fileName: "[project]/app/components/GoldenResponse.tsx",
                                lineNumber: 502,
                                columnNumber: 61
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/GoldenResponse.tsx",
                            lineNumber: 501,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs w-10 text-center",
                            children: formatTime(currentTime)
                        }, void 0, false, {
                            fileName: "[project]/app/components/GoldenResponse.tsx",
                            lineNumber: 504,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "range",
                            min: "0",
                            max: duration,
                            value: currentTime,
                            onChange: handleSeek,
                            className: "flex-grow h-2 rounded-lg appearance-none cursor-pointer bg-[#F9F9F9]/30 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#CD1C18]",
                            style: {
                                backgroundSize: `${progressPercent}% 100%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/GoldenResponse.tsx",
                            lineNumber: 505,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs w-10 text-center",
                            children: formatTime(duration)
                        }, void 0, false, {
                            fileName: "[project]/app/components/GoldenResponse.tsx",
                            lineNumber: 514,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/GoldenResponse.tsx",
                    lineNumber: 500,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/GoldenResponse.tsx",
                lineNumber: 499,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/GoldenResponse.tsx",
        lineNumber: 491,
        columnNumber: 5
    }, this);
};
_c12 = VideoPlayer;
// --- Main App ---
const StudyGroupApp = ()=>{
    _s4();
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [duration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(300); // 5 minutes mock duration
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [annotations, setAnnotations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(MOCK_ANNOTATIONS);
    const [attendees, setAttendees] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(MOCK_ATTENDEES);
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Video playback simulation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StudyGroupApp.useEffect": ()=>{
            let interval;
            if (isPlaying && currentTime < duration) {
                interval = setInterval({
                    "StudyGroupApp.useEffect": ()=>{
                        setCurrentTime({
                            "StudyGroupApp.useEffect": (prevTime)=>Math.min(prevTime + 1, duration)
                        }["StudyGroupApp.useEffect"]);
                    }
                }["StudyGroupApp.useEffect"], 1000);
            } else if (currentTime >= duration) {
                setIsPlaying(false);
            }
            return ({
                "StudyGroupApp.useEffect": ()=>clearInterval(interval)
            })["StudyGroupApp.useEffect"];
        }
    }["StudyGroupApp.useEffect"], [
        isPlaying,
        currentTime,
        duration
    ]);
    const handlePlayPause = ()=>setIsPlaying(!isPlaying);
    const handleSeek = (time)=>{
        setCurrentTime(Math.max(0, Math.min(time, duration)));
    };
    const handleAddAnnotation = (text, timestamp)=>{
        const newAnnotation = {
            id: `anno-${Date.now()}`,
            timestamp,
            user: 'You',
            text,
            comments: []
        };
        setAnnotations((prev)=>[
                ...prev,
                newAnnotation
            ]);
    };
    const handleTogglePresent = (id)=>{
        setAttendees((prev)=>prev.map((a)=>a.id === id ? {
                    ...a,
                    present: !a.present
                } : a));
    };
    const handleEmojiSubmit = (emojiId)=>{
        const selectedEmoji = EMOJI_PULSE_OPTIONS.find((o)=>o.id === emojiId);
        console.log(`Pulse received: ${selectedEmoji?.emoji} ${selectedEmoji?.label}`);
    // Here you would typically send this to a backend
    };
    const videoProgress = duration > 0 ? currentTime / duration * 100 : 0;
    // Gesture handling for opening sidebar (swipe left on main content)
    const mainContentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const touchStartX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const handleTouchStartMain = (e)=>{
        // Only trigger if swipe starts outside interactive elements like range inputs
        if (e.target.closest('input[type="range"], button, a, textarea, input[type="text"]')) {
            return;
        }
        touchStartX.current = e.targetTouches[0].clientX;
    };
    const handleTouchMoveMain = (e)=>{
        if (isSidebarOpen || touchStartX.current === 0) return; // Don't detect if sidebar is open or touch didn't start properly
        const touchCurrentX = e.targetTouches[0].clientX;
        if (touchStartX.current - touchCurrentX > 70) {
            setIsSidebarOpen(true);
            touchStartX.current = 0; // Reset to prevent re-triggering
        }
    };
    const handleTouchEndMain = ()=>{
        touchStartX.current = 0; // Reset on touch end
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen w-screen flex flex-col bg-[#F9F9F9] text-neutral-900 overflow-hidden",
        onTouchStart: handleTouchStartMain,
        onTouchMove: handleTouchMoveMain,
        onTouchEnd: handleTouchEndMain,
        ref: mainContentRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `p-3 flex items-center justify-between ${glassmorphismStyle('bg-[#CD1C18]', 'border-b border-[#9B1313]/50', 'text-[#F9F9F9]')}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-lg font-bold",
                        children: "Mobile Study Group"
                    }, void 0, false, {
                        fileName: "[project]/app/components/GoldenResponse.tsx",
                        lineNumber: 608,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsSidebarOpen(true),
                        className: "p-1.5 text-[#F9F9F9] hover:text-[#FFA896]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnnotationIcon, {}, void 0, false, {
                            fileName: "[project]/app/components/GoldenResponse.tsx",
                            lineNumber: 610,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/GoldenResponse.tsx",
                        lineNumber: 609,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/GoldenResponse.tsx",
                lineNumber: 607,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-grow overflow-y-auto p-1 sm:p-2 md:p-4 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VideoPlayer, {
                        currentTime: currentTime,
                        duration: duration,
                        isPlaying: isPlaying,
                        onPlayPause: handlePlayPause,
                        onSeek: handleSeek,
                        title: "Lecture 1: Advanced Spices"
                    }, void 0, false, {
                        fileName: "[project]/app/components/GoldenResponse.tsx",
                        lineNumber: 616,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-2 sm:px-0",
                        children: [
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmojiPulseSurvey, {
                                options: EMOJI_PULSE_OPTIONS,
                                onSubmit: handleEmojiSubmit
                            }, void 0, false, {
                                fileName: "[project]/app/components/GoldenResponse.tsx",
                                lineNumber: 626,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/GoldenResponse.tsx",
                        lineNumber: 625,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/GoldenResponse.tsx",
                lineNumber: 615,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DraggableAttendanceChecklist, {
                attendees: attendees,
                onTogglePresent: handleTogglePresent
            }, void 0, false, {
                fileName: "[project]/app/components/GoldenResponse.tsx",
                lineNumber: 634,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingProgressRing, {
                progress: videoProgress
            }, void 0, false, {
                fileName: "[project]/app/components/GoldenResponse.tsx",
                lineNumber: 635,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnnotationSidebar, {
                isOpen: isSidebarOpen,
                onClose: ()=>setIsSidebarOpen(false),
                annotations: annotations,
                currentTime: currentTime,
                onAddAnnotation: handleAddAnnotation,
                onTimestampClick: (time)=>{
                    handleSeek(time);
                    if (!isPlaying) setIsPlaying(true); // Optionally play when clicking timestamp
                }
            }, void 0, false, {
                fileName: "[project]/app/components/GoldenResponse.tsx",
                lineNumber: 638,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/GoldenResponse.tsx",
        lineNumber: 599,
        columnNumber: 5
    }, this);
};
_s4(StudyGroupApp, "Kfooui+003MMS9IicWFyrZ5egzs=");
_c13 = StudyGroupApp;
const __TURBOPACK__default__export__ = StudyGroupApp;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;
__turbopack_context__.k.register(_c, "PlayIcon");
__turbopack_context__.k.register(_c1, "PauseIcon");
__turbopack_context__.k.register(_c2, "AnnotationIcon");
__turbopack_context__.k.register(_c3, "CheckCircleIcon");
__turbopack_context__.k.register(_c4, "CircleIcon");
__turbopack_context__.k.register(_c5, "MenuIcon");
__turbopack_context__.k.register(_c6, "CloseIcon");
__turbopack_context__.k.register(_c7, "FloatingProgressRing");
__turbopack_context__.k.register(_c8, "DraggableAttendanceChecklist");
__turbopack_context__.k.register(_c9, "EmojiPulseSurvey");
__turbopack_context__.k.register(_c10, "AnnotationItem");
__turbopack_context__.k.register(_c11, "AnnotationSidebar");
__turbopack_context__.k.register(_c12, "VideoPlayer");
__turbopack_context__.k.register(_c13, "StudyGroupApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        "react-stack-bottom-frame": function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
}]);

//# sourceMappingURL=_f4e0c168._.js.map