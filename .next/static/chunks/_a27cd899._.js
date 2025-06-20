(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/components/PuzzleBattle1.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
// Tailwind CSS is assumed to be set up in the project.
// For custom colors, we'll use JIT mode's arbitrary value support like `bg-[#260801]`.
// Constants & Configuration
const GRID_SIZE = 8;
const NUM_PIECE_TYPES = 5;
const INITIAL_PLAYER_HEALTH = 100;
const INITIAL_ENEMY_HEALTH = 100;
const TIMELINE_VISIBLE_TURNS = 5; // Number of future turns visible on timeline
const DESKTOP_FIXED_WIDTH = '1600px';
const MOBILE_BREAKPOINT = 768; // px
// Color Palette (as comments for reference, used directly in Tailwind classes)
// #F2EB80 (LightYellow)
// #BF6A1F (MidOrangeBrown)
// #401A04 (DarkBrownTextOrPanelBg)
// #8C441B (MediumBrownAccents)
// #260801 (VeryDarkBrownBg)
const COLORS = {
    bgVeryDark: 'bg-[#260801]',
    bgPanel: 'bg-[#401A04]',
    textLight: 'text-[#F2EB80]',
    textDark: 'text-[#401A04]',
    accentOrangeBrown: 'bg-[#BF6A1F]',
    borderMediumBrown: 'border-[#8C441B]',
    highlightYellow: 'text-[#F2EB80]',
    shadowColor: 'shadow-[0_4px_14px_rgba(242,235,128,0.1)]'
};
const PIECE_COLORS = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500'
];
// Utility Functions
const createId = ()=>Math.random().toString(36).substr(2, 9);
const generateRandomPiece = ()=>{
    const type = Math.floor(Math.random() * NUM_PIECE_TYPES);
    return {
        id: createId(),
        type,
        color: PIECE_COLORS[type]
    };
};
const initializeGrid = ()=>{
    return Array(GRID_SIZE).fill(null).map(()=>Array(GRID_SIZE).fill(null).map(generateRandomPiece));
};
const HealthBar = ({ currentHealth, maxHealth, label, barColor, bgColor = 'bg-gray-700' })=>{
    const percentage = Math.max(0, currentHealth / maxHealth * 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between mb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${COLORS.textLight} text-sm font-medium`,
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/app/components/PuzzleBattle1.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${COLORS.textLight} text-sm font-medium`,
                        children: [
                            currentHealth,
                            " / ",
                            maxHealth
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/PuzzleBattle1.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/PuzzleBattle1.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-full ${bgColor} rounded-full h-4 ${COLORS.borderMediumBrown} border`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${barColor} h-4 rounded-full transition-all duration-500 ease-out`,
                    style: {
                        width: `${percentage}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/app/components/PuzzleBattle1.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/PuzzleBattle1.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/PuzzleBattle1.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
};
_c = HealthBar;
const Timeline = ({ actions, currentTurn, title, isPlayerTimeline, onHoverAction })=>{
    _s();
    const pathRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [pathLength, setPathLength] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Timeline.useEffect": ()=>{
            if (pathRef.current) {
                setPathLength(pathRef.current.getTotalLength());
            }
        }
    }["Timeline.useEffect"], [
        pathRef.current
    ]); // Re-run if pathRef changes (e.g. on resize if SVG is responsive)
    const getPositionOnPath = (turnOffset)=>{
        if (!pathRef.current || pathLength === 0) return {
            x: 0,
            y: 0
        };
        // Normalize turnOffset to be within visible range, e.g., 0 to TIMELINE_VISIBLE_TURNS
        // Let's say 0 is current turn, positive is future.
        const normalizedProgress = Math.min(Math.max(turnOffset, 0), TIMELINE_VISIBLE_TURNS - 1) / (TIMELINE_VISIBLE_TURNS - 1);
        const point = pathRef.current.getPointAtLength(normalizedProgress * pathLength);
        return {
            x: point.x,
            y: point.y
        };
    };
    const displayedActions = actions.filter((action)=>!action.resolved && action.turnScheduled >= currentTurn && action.turnScheduled < currentTurn + TIMELINE_VISIBLE_TURNS).sort((a, b)=>a.turnScheduled - b.turnScheduled);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `p-4 ${COLORS.bgPanel} rounded-lg ${COLORS.shadowColor} w-full`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: `${COLORS.textLight} text-lg font-semibold mb-3 text-center`,
                children: title
            }, void 0, false, {
                fileName: "[project]/app/components/PuzzleBattle1.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "100%",
                height: "80",
                viewBox: "0 0 400 80",
                preserveAspectRatio: "xMidYMid meet",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        ref: pathRef,
                        d: "M 20 40 H 380" // Path from x=20 to x=380 at y=40
                        ,
                        stroke: isPlayerTimeline ? '#BF6A1F' : '#8C441B',
                        strokeWidth: "3",
                        fill: "transparent"
                    }, void 0, false, {
                        fileName: "[project]/app/components/PuzzleBattle1.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: getPositionOnPath(0).x,
                        cy: getPositionOnPath(0).y,
                        r: "8",
                        fill: COLORS.highlightYellow.replace('text-', ''),
                        stroke: "#260801",
                        strokeWidth: "2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                            children: "Current Turn"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PuzzleBattle1.tsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/PuzzleBattle1.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: getPositionOnPath(0).x,
                        y: getPositionOnPath(0).y + 25,
                        textAnchor: "middle",
                        fill: COLORS.highlightYellow.replace('text-', ''),
                        fontSize: "12",
                        children: "Now"
                    }, void 0, false, {
                        fileName: "[project]/app/components/PuzzleBattle1.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    displayedActions.map((action)=>{
                        const turnOffset = action.turnScheduled - currentTurn;
                        const { x, y } = getPositionOnPath(turnOffset);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            transform: `translate(${x}, ${y})`,
                            className: "transition-transform duration-500 ease-in-out",
                            onMouseEnter: ()=>onHoverAction(action),
                            onMouseLeave: ()=>onHoverAction(null),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    r: "10",
                                    fill: isPlayerTimeline ? '#F2EB80' : '#BF6A1F',
                                    stroke: "#401A04",
                                    strokeWidth: "2"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/PuzzleBattle1.tsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this),
                                typeof action.icon === 'string' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "0",
                                    y: "4",
                                    textAnchor: "middle",
                                    fontSize: "12",
                                    fill: "#401A04",
                                    children: action.icon
                                }, void 0, false, {
                                    fileName: "[project]/app/components/PuzzleBattle1.tsx",
                                    lineNumber: 194,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    transform: "translate(-8 -8) scale(0.8)",
                                    children: action.icon
                                }, void 0, false, {
                                    fileName: "[project]/app/components/PuzzleBattle1.tsx",
                                    lineNumber: 196,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                    children: `${action.description} (Turn ${action.turnScheduled})`
                                }, void 0, false, {
                                    fileName: "[project]/app/components/PuzzleBattle1.tsx",
                                    lineNumber: 198,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, action.id, true, {
                            fileName: "[project]/app/components/PuzzleBattle1.tsx",
                            lineNumber: 185,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/PuzzleBattle1.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between mt-1 px-2",
                children: Array.from({
                    length: TIMELINE_VISIBLE_TURNS
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${COLORS.textLight} text-xs`,
                        children: i === 0 ? `T ${currentTurn}` : `T+${i}`
                    }, i, false, {
                        fileName: "[project]/app/components/PuzzleBattle1.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/PuzzleBattle1.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/PuzzleBattle1.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
};
_s(Timeline, "32bhlNCzn6PPWV1xcWmWyd1F9Kg=");
_c1 = Timeline;
// --- Main Game Application Component ---
const PuzzleBattleGame = ()=>{
    _s1();
    var _s = __turbopack_context__.k.signature();
    const initialGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PuzzleBattleGame.useMemo[initialGrid]": ()=>initializeGrid()
    }["PuzzleBattleGame.useMemo[initialGrid]"], []);
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PuzzleBattleGame.useState": ()=>({
                currentTurn: 1,
                playerHealth: INITIAL_PLAYER_HEALTH,
                maxPlayerHealth: INITIAL_PLAYER_HEALTH,
                enemyHealth: INITIAL_ENEMY_HEALTH,
                maxEnemyHealth: INITIAL_ENEMY_HEALTH,
                puzzleGrid: initialGrid,
                playerTimeline: [],
                enemyTimeline: [],
                selectedPiece: null,
                comboChain: [],
                isProcessingTurn: false,
                gameStatus: 'playing',
                history: [],
                replayMode: false,
                replayTurnIndex: 0,
                previewedAction: null,
                isMobileView: window.innerWidth < MOBILE_BREAKPOINT,
                leftPanelWidth: 60
            })
    }["PuzzleBattleGame.useState"]);
    const puzzleGridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const abilityBarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const splitterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // --- Responsive Design Hook ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PuzzleBattleGame.useEffect": ()=>{
            const handleResize = {
                "PuzzleBattleGame.useEffect.handleResize": ()=>{
                    setGameState({
                        "PuzzleBattleGame.useEffect.handleResize": (prev)=>({
                                ...prev,
                                isMobileView: window.innerWidth < MOBILE_BREAKPOINT
                            })
                    }["PuzzleBattleGame.useEffect.handleResize"]);
                }
            }["PuzzleBattleGame.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "PuzzleBattleGame.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["PuzzleBattleGame.useEffect"];
        }
    }["PuzzleBattleGame.useEffect"], []);
    // --- Draggable Splitter Logic ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PuzzleBattleGame.useEffect": ()=>{
            const splitter = splitterRef.current;
            if (!splitter || gameState.isMobileView) return;
            const handleMouseDown = {
                "PuzzleBattleGame.useEffect.handleMouseDown": (e)=>{
                    e.preventDefault();
                    const startX = e.clientX;
                    const gameArea = splitter.parentElement;
                    if (!gameArea) return;
                    const initialLeftWidth = puzzleGridRef.current?.offsetWidth || 0;
                    const handleMouseMove = {
                        "PuzzleBattleGame.useEffect.handleMouseDown.handleMouseMove": (moveEvent)=>{
                            const dx = moveEvent.clientX - startX;
                            const totalWidth = gameArea.offsetWidth;
                            const newLeftWidthPx = initialLeftWidth + dx;
                            // Min/max width for panels (e.g., 20% to 80%)
                            const minPx = totalWidth * 0.20;
                            const maxPx = totalWidth * 0.80;
                            const clampedLeftWidthPx = Math.max(minPx, Math.min(newLeftWidthPx, maxPx));
                            const newLeftPanelPercentage = clampedLeftWidthPx / totalWidth * 100;
                            setGameState({
                                "PuzzleBattleGame.useEffect.handleMouseDown.handleMouseMove": (prev)=>({
                                        ...prev,
                                        leftPanelWidth: newLeftPanelPercentage
                                    })
                            }["PuzzleBattleGame.useEffect.handleMouseDown.handleMouseMove"]);
                        }
                    }["PuzzleBattleGame.useEffect.handleMouseDown.handleMouseMove"];
                    const handleMouseUp = {
                        "PuzzleBattleGame.useEffect.handleMouseDown.handleMouseUp": ()=>{
                            document.removeEventListener('mousemove', handleMouseMove);
                            document.removeEventListener('mouseup', handleMouseUp);
                        }
                    }["PuzzleBattleGame.useEffect.handleMouseDown.handleMouseUp"];
                    document.addEventListener('mousemove', handleMouseMove);
                    document.addEventListener('mouseup', handleMouseUp);
                }
            }["PuzzleBattleGame.useEffect.handleMouseDown"];
            splitter.addEventListener('mousedown', handleMouseDown);
            return ({
                "PuzzleBattleGame.useEffect": ()=>{
                    splitter.removeEventListener('mousedown', handleMouseDown);
                }
            })["PuzzleBattleGame.useEffect"];
        }
    }["PuzzleBattleGame.useEffect"], [
        gameState.isMobileView,
        splitterRef,
        puzzleGridRef
    ]);
    // --- Puzzle Logic (Simplified) ---
    const handlePieceClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PuzzleBattleGame.useCallback[handlePieceClick]": (r, c)=>{
            if (gameState.isProcessingTurn || gameState.replayMode || gameState.gameStatus !== 'playing') return;
            if (gameState.selectedPiece) {
                const { r: r1, c: c1 } = gameState.selectedPiece;
                // Basic swap logic: only adjacent pieces
                if (Math.abs(r1 - r) === 1 && c1 === c || Math.abs(c1 - c) === 1 && r1 === r) {
                    const newGrid = gameState.puzzleGrid.map({
                        "PuzzleBattleGame.useCallback[handlePieceClick].newGrid": (row)=>[
                                ...row
                            ]
                    }["PuzzleBattleGame.useCallback[handlePieceClick].newGrid"]);
                    [newGrid[r1][c1], newGrid[r][c]] = [
                        newGrid[r][c],
                        newGrid[r1][c1]
                    ];
                    // Simplistic match detection and effect
                    // In a real game: detectMatches, handleCascades, generateResources/Actions
                    let matchFound = false;
                    const checkMatch = {
                        "PuzzleBattleGame.useCallback[handlePieceClick].checkMatch": (nr, nc)=>{
                            const piece = newGrid[nr][nc];
                            // Horizontal match
                            if (nc > 1 && newGrid[nr][nc - 1].type === piece.type && newGrid[nr][nc - 2].type === piece.type) return true;
                            if (nc < GRID_SIZE - 2 && newGrid[nr][nc + 1].type === piece.type && newGrid[nr][nc + 2].type === piece.type) return true;
                            if (nc > 0 && nc < GRID_SIZE - 1 && newGrid[nr][nc - 1].type === piece.type && newGrid[nr][nc + 1].type === piece.type) return true;
                            // Vertical match
                            if (nr > 1 && newGrid[nr - 1][nc].type === piece.type && newGrid[nr - 2][nc].type === piece.type) return true;
                            if (nr < GRID_SIZE - 2 && newGrid[nr + 1][nc].type === piece.type && newGrid[nr + 2][nc].type === piece.type) return true;
                            if (nr > 0 && nr < GRID_SIZE - 1 && newGrid[nr - 1][nc].type === piece.type && newGrid[nr + 1][nc].type === piece.type) return true;
                            return false;
                        }
                    }["PuzzleBattleGame.useCallback[handlePieceClick].checkMatch"];
                    if (checkMatch(r, c) || checkMatch(r1, c1)) {
                        matchFound = true;
                        // Simplistic "combo" effect - highlight swapped pieces
                        const combo = [
                            {
                                r,
                                c
                            },
                            {
                                r1,
                                c1
                            }
                        ];
                        // In a real game, this would trace the actual matched pieces.
                        setGameState({
                            "PuzzleBattleGame.useCallback[handlePieceClick]": (prev)=>({
                                    ...prev,
                                    comboChain: combo
                                })
                        }["PuzzleBattleGame.useCallback[handlePieceClick]"]);
                        setTimeout({
                            "PuzzleBattleGame.useCallback[handlePieceClick]": ()=>setGameState({
                                    "PuzzleBattleGame.useCallback[handlePieceClick]": (prev)=>({
                                            ...prev,
                                            comboChain: []
                                        })
                                }["PuzzleBattleGame.useCallback[handlePieceClick]"])
                        }["PuzzleBattleGame.useCallback[handlePieceClick]"], 500);
                        // Simulate generating an action from a match
                        const playerAttackAction = {
                            id: createId(),
                            turnScheduled: gameState.currentTurn + 1,
                            description: "Puzzle Attack",
                            actor: 'player',
                            type: 'attack',
                            value: 10,
                            icon: '⚔️',
                            resolved: false
                        };
                        setGameState({
                            "PuzzleBattleGame.useCallback[handlePieceClick]": (prev)=>({
                                    ...prev,
                                    puzzleGrid: newGrid.map({
                                        "PuzzleBattleGame.useCallback[handlePieceClick]": (row)=>row.map({
                                                "PuzzleBattleGame.useCallback[handlePieceClick]": (p)=>(p.type === newGrid[r][c].type || p.type === newGrid[r1][c1].type) && checkMatch(p.id.split('-')[0], p.id.split('-')[1]) ? generateRandomPiece() : p
                                            }["PuzzleBattleGame.useCallback[handlePieceClick]"])
                                    }["PuzzleBattleGame.useCallback[handlePieceClick]"]),
                                    playerTimeline: [
                                        ...prev.playerTimeline,
                                        playerAttackAction
                                    ],
                                    selectedPiece: null
                                })
                        }["PuzzleBattleGame.useCallback[handlePieceClick]"]);
                        // Trigger turn processing after a short delay for visual feedback
                        setTimeout({
                            "PuzzleBattleGame.useCallback[handlePieceClick]": ()=>processTurn()
                        }["PuzzleBattleGame.useCallback[handlePieceClick]"], 300);
                    } else {
                        // No match, swap back (or not, depending on game rules)
                        setGameState({
                            "PuzzleBattleGame.useCallback[handlePieceClick]": (prev)=>({
                                    ...prev,
                                    selectedPiece: null
                                })
                        }["PuzzleBattleGame.useCallback[handlePieceClick]"]); // Deselect
                    }
                } else {
                    setGameState({
                        "PuzzleBattleGame.useCallback[handlePieceClick]": (prev)=>({
                                ...prev,
                                selectedPiece: {
                                    r,
                                    c
                                }
                            })
                    }["PuzzleBattleGame.useCallback[handlePieceClick]"]);
                }
            } else {
                setGameState({
                    "PuzzleBattleGame.useCallback[handlePieceClick]": (prev)=>({
                            ...prev,
                            selectedPiece: {
                                r,
                                c
                            }
                        })
                }["PuzzleBattleGame.useCallback[handlePieceClick]"]);
            }
        }
    }["PuzzleBattleGame.useCallback[handlePieceClick]"], [
        gameState
    ]);
    const playerAbilities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PuzzleBattleGame.useMemo[playerAbilities]": ()=>[
                {
                    id: 'strong_attack',
                    name: 'Strong Attack (T+2)',
                    cost: 0,
                    effect: {
                        "PuzzleBattleGame.useMemo[playerAbilities]": ()=>{
                            const action = {
                                id: createId(),
                                turnScheduled: gameState.currentTurn + 2,
                                description: 'Strong Player Attack',
                                actor: 'player',
                                type: 'attack',
                                value: 25,
                                icon: '💥',
                                resolved: false
                            };
                            setGameState({
                                "PuzzleBattleGame.useMemo[playerAbilities]": (prev)=>({
                                        ...prev,
                                        playerTimeline: [
                                            ...prev.playerTimeline,
                                            action
                                        ]
                                    })
                            }["PuzzleBattleGame.useMemo[playerAbilities]"]);
                            processTurn();
                        }
                    }["PuzzleBattleGame.useMemo[playerAbilities]"]
                },
                {
                    id: 'heal_player',
                    name: 'Heal (T+1)',
                    cost: 0,
                    effect: {
                        "PuzzleBattleGame.useMemo[playerAbilities]": ()=>{
                            const action = {
                                id: createId(),
                                turnScheduled: gameState.currentTurn + 1,
                                description: 'Player Heal',
                                actor: 'player',
                                type: 'heal',
                                value: 20,
                                icon: '💖',
                                resolved: false
                            };
                            setGameState({
                                "PuzzleBattleGame.useMemo[playerAbilities]": (prev)=>({
                                        ...prev,
                                        playerTimeline: [
                                            ...prev.playerTimeline,
                                            action
                                        ]
                                    })
                            }["PuzzleBattleGame.useMemo[playerAbilities]"]);
                            processTurn();
                        }
                    }["PuzzleBattleGame.useMemo[playerAbilities]"]
                }
            ]
    }["PuzzleBattleGame.useMemo[playerAbilities]"], [
        gameState.currentTurn
    ]);
    const useAbility = (abilityId)=>{
        if (gameState.isProcessingTurn || gameState.replayMode || gameState.gameStatus !== 'playing') return;
        const ability = playerAbilities.find((ab)=>ab.id === abilityId);
        if (ability) {
            ability.effect();
        }
    };
    // --- Game Loop / Turn Processing ---
    const processTurn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PuzzleBattleGame.useCallback[processTurn]": ()=>{
            if (gameState.gameStatus !== 'playing') return;
            setGameState({
                "PuzzleBattleGame.useCallback[processTurn]": (prev)=>({
                        ...prev,
                        isProcessingTurn: true
                    })
            }["PuzzleBattleGame.useCallback[processTurn]"]);
            // Snapshot current state for history BEFORE modifications for this turn
            const snapshot = {
                currentTurn: gameState.currentTurn,
                playerHealth: gameState.playerHealth,
                enemyHealth: gameState.enemyHealth,
                puzzleGrid: gameState.puzzleGrid.map({
                    "PuzzleBattleGame.useCallback[processTurn]": (row)=>row.map({
                            "PuzzleBattleGame.useCallback[processTurn]": (piece)=>({
                                    ...piece
                                })
                        }["PuzzleBattleGame.useCallback[processTurn]"])
                }["PuzzleBattleGame.useCallback[processTurn]"]),
                playerTimeline: gameState.playerTimeline.map({
                    "PuzzleBattleGame.useCallback[processTurn]": (action)=>({
                            ...action
                        })
                }["PuzzleBattleGame.useCallback[processTurn]"]),
                enemyTimeline: gameState.enemyTimeline.map({
                    "PuzzleBattleGame.useCallback[processTurn]": (action)=>({
                            ...action
                        })
                }["PuzzleBattleGame.useCallback[processTurn]"]),
                gameStatus: gameState.gameStatus
            };
            let newPlayerHealth = gameState.playerHealth;
            let newEnemyHealth = gameState.enemyHealth;
            let newPlayerTimeline = [
                ...gameState.playerTimeline
            ];
            let newEnemyTimeline = [
                ...gameState.enemyTimeline
            ];
            // 1. Resolve Player Actions for current turn
            newPlayerTimeline = newPlayerTimeline.map({
                "PuzzleBattleGame.useCallback[processTurn]": (action)=>{
                    if (action.turnScheduled === gameState.currentTurn && !action.resolved) {
                        switch(action.type){
                            case 'attack':
                                newEnemyHealth = Math.max(0, newEnemyHealth - action.value);
                                break;
                            case 'heal':
                                newPlayerHealth = Math.min(gameState.maxPlayerHealth, newPlayerHealth + action.value);
                                break;
                        }
                        return {
                            ...action,
                            resolved: true
                        };
                    }
                    return action;
                }
            }["PuzzleBattleGame.useCallback[processTurn]"]);
            // 2. Resolve Enemy Actions for current turn
            newEnemyTimeline = newEnemyTimeline.map({
                "PuzzleBattleGame.useCallback[processTurn]": (action)=>{
                    if (action.turnScheduled === gameState.currentTurn && !action.resolved) {
                        switch(action.type){
                            case 'attack':
                                newPlayerHealth = Math.max(0, newPlayerHealth - action.value);
                                break;
                        }
                        return {
                            ...action,
                            resolved: true
                        };
                    }
                    return action;
                }
            }["PuzzleBattleGame.useCallback[processTurn]"]);
            // 3. Enemy AI: Plan next action (simple)
            if (gameState.currentTurn % 2 === 0 && newEnemyHealth > 0) {
                const enemyAction = {
                    id: createId(),
                    turnScheduled: gameState.currentTurn + Math.floor(Math.random() * 2) + 1,
                    description: 'Enemy Attack',
                    actor: 'enemy',
                    type: 'attack',
                    value: 5 + Math.floor(Math.random() * 10),
                    icon: '💀',
                    resolved: false
                };
                newEnemyTimeline.push(enemyAction);
            }
            // 4. Check game over
            let newGameStatus = gameState.gameStatus;
            if (newPlayerHealth <= 0) newGameStatus = 'enemy_won';
            else if (newEnemyHealth <= 0) newGameStatus = 'player_won';
            // 5. Update state
            // Use a timeout to simulate processing and allow animations to be perceived
            setTimeout({
                "PuzzleBattleGame.useCallback[processTurn]": ()=>{
                    setGameState({
                        "PuzzleBattleGame.useCallback[processTurn]": (prev)=>({
                                ...prev,
                                playerHealth: newPlayerHealth,
                                enemyHealth: newEnemyHealth,
                                playerTimeline: newPlayerTimeline.filter({
                                    "PuzzleBattleGame.useCallback[processTurn]": (a)=>!a.resolved || a.turnScheduled > prev.currentTurn
                                }["PuzzleBattleGame.useCallback[processTurn]"]),
                                enemyTimeline: newEnemyTimeline.filter({
                                    "PuzzleBattleGame.useCallback[processTurn]": (a)=>!a.resolved || a.turnScheduled > prev.currentTurn
                                }["PuzzleBattleGame.useCallback[processTurn]"]),
                                currentTurn: prev.currentTurn + 1,
                                isProcessingTurn: false,
                                gameStatus: newGameStatus,
                                history: [
                                    ...prev.history,
                                    snapshot
                                ],
                                selectedPiece: null,
                                // Refill grid (very basic, no gravity or cascades)
                                puzzleGrid: newGameStatus === 'playing' ? prev.puzzleGrid.map({
                                    "PuzzleBattleGame.useCallback[processTurn]": (row)=>row.map({
                                            "PuzzleBattleGame.useCallback[processTurn]": (p)=>Math.random() < 0.1 ? generateRandomPiece() : p
                                        }["PuzzleBattleGame.useCallback[processTurn]"])
                                }["PuzzleBattleGame.useCallback[processTurn]"]) : prev.puzzleGrid
                            })
                    }["PuzzleBattleGame.useCallback[processTurn]"]);
                }
            }["PuzzleBattleGame.useCallback[processTurn]"], 700); // Animation/processing delay
        }
    }["PuzzleBattleGame.useCallback[processTurn]"], [
        gameState
    ]);
    // --- Replay Logic ---
    const startReplay = ()=>{
        if (gameState.history.length === 0) return;
        setGameState((prev)=>({
                ...prev,
                replayMode: true,
                replayTurnIndex: 0,
                ...loadStateFromSnapshot(prev.history[0])
            }));
    };
    const exitReplay = ()=>{
        // Restore to the latest game state
        const latestSnapshot = gameState.history[gameState.history.length - 1] || createInitialSnapshot();
        setGameState((prev)=>({
                ...prev,
                replayMode: false,
                ...loadStateFromSnapshot(latestSnapshot),
                currentTurn: latestSnapshot.currentTurn + 1,
                history: prev.history
            }));
    };
    const replayStep = (direction)=>{
        if (!gameState.replayMode) return;
        let newIndex = gameState.replayTurnIndex;
        if (direction === 'next' && gameState.replayTurnIndex < gameState.history.length - 1) {
            newIndex++;
        } else if (direction === 'prev' && gameState.replayTurnIndex > 0) {
            newIndex--;
        }
        setGameState((prev)=>({
                ...prev,
                replayTurnIndex: newIndex,
                ...loadStateFromSnapshot(prev.history[newIndex])
            }));
    };
    const loadStateFromSnapshot = (snapshot)=>({
            currentTurn: snapshot.currentTurn,
            playerHealth: snapshot.playerHealth,
            enemyHealth: snapshot.enemyHealth,
            puzzleGrid: snapshot.puzzleGrid.map((row)=>row.map((p)=>({
                        ...p
                    }))),
            playerTimeline: snapshot.playerTimeline.map((a)=>({
                    ...a
                })),
            enemyTimeline: snapshot.enemyTimeline.map((a)=>({
                    ...a
                })),
            gameStatus: snapshot.gameStatus
        });
    const createInitialSnapshot = ()=>({
            currentTurn: 1,
            playerHealth: INITIAL_PLAYER_HEALTH,
            enemyHealth: INITIAL_ENEMY_HEALTH,
            puzzleGrid: initializeGrid(),
            playerTimeline: [],
            enemyTimeline: [],
            gameStatus: 'playing'
        });
    // --- Render ---
    const mainContentLayoutStyle = gameState.isMobileView ? "flex-col space-y-4" : "flex space-x-4";
    const puzzlePanelStyle = gameState.isMobileView ? {
        width: '100%'
    } : {
        width: `${gameState.leftPanelWidth}%`
    };
    const abilityPanelStyle = gameState.isMobileView ? {
        width: '100%'
    } : {
        width: `${100 - gameState.leftPanelWidth - 2}%`
    }; // 2% for splitter approx.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen ${COLORS.bgVeryDark} ${COLORS.textLight} flex flex-col items-center p-4 font-sans transition-all duration-300`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: gameState.isMobileView ? '100%' : DESKTOP_FIXED_WIDTH
            },
            className: "flex flex-col space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: `flex justify-between items-center p-4 ${COLORS.bgPanel} rounded-lg ${COLORS.shadowColor}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-[#F2EB80]",
                            children: "Puzzle Battle Arena"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PuzzleBattle1.tsx",
                            lineNumber: 550,
                            columnNumber: 11
                        }, this),
                        gameState.replayMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>replayStep('prev'),
                                    disabled: gameState.replayTurnIndex === 0,
                                    className: `px-3 py-1 ${COLORS.accentOrangeBrown} rounded hover:bg-[#8C441B] disabled:opacity-50`,
                                    children: "Prev"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/PuzzleBattle1.tsx",
                                    lineNumber: 553,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: [
                                        "Turn: ",
                                        gameState.currentTurn,
                                        " (Replay)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/PuzzleBattle1.tsx",
                                    lineNumber: 554,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>replayStep('next'),
                                    disabled: gameState.replayTurnIndex === gameState.history.length - 1,
                                    className: `px-3 py-1 ${COLORS.accentOrangeBrown} rounded hover:bg-[#8C441B] disabled:opacity-50`,
                                    children: "Next"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/PuzzleBattle1.tsx",
                                    lineNumber: 555,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: exitReplay,
                                    className: `px-3 py-1 bg-red-600 hover:bg-red-700 rounded`,
                                    children: "Exit Replay"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/PuzzleBattle1.tsx",
                                    lineNumber: 556,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/PuzzleBattle1.tsx",
                            lineNumber: 552,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg",
                                    children: [
                                        "Turn: ",
                                        gameState.currentTurn
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/PuzzleBattle1.tsx",
                                    lineNumber: 560,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: startReplay,
                                    disabled: gameState.history.length === 0,
                                    className: `px-3 py-1 ${COLORS.accentOrangeBrown} rounded hover:bg-[#8C441B] disabled:opacity-50`,
                                    children: "Replay"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/PuzzleBattle1.tsx",
                                    lineNumber: 561,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/PuzzleBattle1.tsx",
                            lineNumber: 559,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/PuzzleBattle1.tsx",
                    lineNumber: 549,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `grid ${gameState.isMobileView ? 'grid-cols-1 gap-2' : 'grid-cols-2 gap-4'} p-4 ${COLORS.bgPanel} rounded-lg ${COLORS.shadowColor}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HealthBar, {
                            label: "Player",
                            currentHealth: gameState.playerHealth,
                            maxHealth: gameState.maxPlayerHealth,
                            barColor: "bg-green-500"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PuzzleBattle1.tsx",
                            lineNumber: 568,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HealthBar, {
                            label: "Enemy",
                            currentHealth: gameState.enemyHealth,
                            maxHealth: gameState.maxEnemyHealth,
                            barColor: "bg-red-500"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PuzzleBattle1.tsx",
                            lineNumber: 569,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/PuzzleBattle1.tsx",
                    lineNumber: 567,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex ${mainContentLayoutStyle} w-full`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: puzzleGridRef,
                            style: puzzlePanelStyle,
                            className: `p-4 ${COLORS.bgPanel} rounded-lg ${COLORS.shadowColor} transition-width duration-100 ease-linear`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold mb-3 text-center",
                                    children: "Puzzle Grid"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/PuzzleBattle1.tsx",
                                    lineNumber: 576,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-1 mx-auto",
                                    style: {
                                        gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
                                        aspectRatio: '1 / 1',
                                        maxWidth: '500px'
                                    },
                                    children: gameState.puzzleGrid.map((row, r)=>row.map((piece, c)=>{
                                            const isSelected = gameState.selectedPiece?.r === r && gameState.selectedPiece?.c === c;
                                            const isInCombo = gameState.comboChain.some((p)=>p.r === r && p.c === c);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `aspect-square ${piece.color} rounded flex items-center justify-center 
                                  cursor-pointer transition-all duration-150 
                                  ${isSelected ? 'ring-4 ring-offset-2 ring-[#F2EB80] ring-offset-[#401A04]' : ''}
                                  ${isInCombo ? 'animate-pulse scale-110 shadow-lg' : ''}
                                  hover:scale-105`,
                                                onClick: ()=>handlePieceClick(r, c),
                                                style: {
                                                    animationDuration: isInCombo ? '300ms' : undefined
                                                }
                                            }, `${r}-${c}-${piece.id}`, false, {
                                                fileName: "[project]/app/components/PuzzleBattle1.tsx",
                                                lineNumber: 583,
                                                columnNumber: 21
                                            }, this);
                                        }))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/PuzzleBattle1.tsx",
                                    lineNumber: 577,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/PuzzleBattle1.tsx",
                            lineNumber: 575,
                            columnNumber: 11
                        }, this),
                        !gameState.isMobileView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: splitterRef,
                            className: "w-2 cursor-ew-resize flex items-center justify-center group",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `h-1/2 w-1 ${COLORS.borderMediumBrown} group-hover:bg-[#F2EB80] rounded-full transition-colors`
                            }, void 0, false, {
                                fileName: "[project]/app/components/PuzzleBattle1.tsx",
                                lineNumber: 605,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/PuzzleBattle1.tsx",
                            lineNumber: 604,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: abilityBarRef,
                            style: abilityPanelStyle,
                            className: `p-4 ${COLORS.bgPanel} rounded-lg ${COLORS.shadowColor} flex flex-col space-y-3 transition-width duration-100 ease-linear`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold mb-2 text-center",
                                    children: "Abilities"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/PuzzleBattle1.tsx",
                                    lineNumber: 611,
                                    columnNumber: 13
                                }, this),
                                playerAbilities.map((ability)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: _s(()=>{
                                            _s();
                                            return useAbility(ability.id);
                                        }, "F3bX94StzMGnCFytE4/0MpoNfKg=", false, function() {
                                            return [
                                                useAbility
                                            ];
                                        }),
                                        disabled: gameState.isProcessingTurn || gameState.replayMode || gameState.gameStatus !== 'playing',
                                        className: `w-full p-3 ${COLORS.accentOrangeBrown} rounded ${COLORS.textLight} font-medium 
                            hover:bg-[#8C441B] disabled:opacity-50 disabled:cursor-not-allowed
                            transition-all duration-150 ease-in-out ${COLORS.shadowColor}`,
                                        children: ability.name
                                    }, ability.id, false, {
                                        fileName: "[project]/app/components/PuzzleBattle1.tsx",
                                        lineNumber: 613,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/PuzzleBattle1.tsx",
                            lineNumber: 610,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/PuzzleBattle1.tsx",
                    lineNumber: 573,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex ${gameState.isMobileView ? 'flex-col space-y-4' : 'space-x-4'} w-full`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Timeline, {
                            actions: gameState.playerTimeline,
                            currentTurn: gameState.currentTurn,
                            title: "Player Actions",
                            isPlayerTimeline: true,
                            onHoverAction: (action)=>setGameState((prev)=>({
                                        ...prev,
                                        previewedAction: action
                                    }))
                        }, void 0, false, {
                            fileName: "[project]/app/components/PuzzleBattle1.tsx",
                            lineNumber: 629,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Timeline, {
                            actions: gameState.enemyTimeline,
                            currentTurn: gameState.currentTurn,
                            title: "Enemy Actions",
                            isPlayerTimeline: false,
                            onHoverAction: (action)=>setGameState((prev)=>({
                                        ...prev,
                                        previewedAction: action
                                    }))
                        }, void 0, false, {
                            fileName: "[project]/app/components/PuzzleBattle1.tsx",
                            lineNumber: 636,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/PuzzleBattle1.tsx",
                    lineNumber: 628,
                    columnNumber: 9
                }, this),
                gameState.previewedAction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `fixed bottom-4 right-4 p-3 ${COLORS.bgPanel} ${COLORS.borderMediumBrown} border rounded-lg ${COLORS.shadowColor} z-50 max-w-xs`,
                    style: {
                        pointerEvents: 'none'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: `${COLORS.textLight} font-semibold`,
                            children: [
                                "Preview: ",
                                gameState.previewedAction.actor,
                                "'s Action"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/PuzzleBattle1.tsx",
                            lineNumber: 651,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm",
                            children: gameState.previewedAction.description
                        }, void 0, false, {
                            fileName: "[project]/app/components/PuzzleBattle1.tsx",
                            lineNumber: 652,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm",
                            children: [
                                "Type: ",
                                gameState.previewedAction.type,
                                ", Value: ",
                                gameState.previewedAction.value
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/PuzzleBattle1.tsx",
                            lineNumber: 653,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm",
                            children: [
                                "Scheduled for Turn: ",
                                gameState.previewedAction.turnScheduled
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/PuzzleBattle1.tsx",
                            lineNumber: 654,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/PuzzleBattle1.tsx",
                    lineNumber: 647,
                    columnNumber: 11
                }, this),
                gameState.gameStatus !== 'playing' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-8 ${COLORS.bgPanel} rounded-lg ${COLORS.shadowColor} text-center`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold mb-4",
                                children: gameState.gameStatus === 'player_won' ? '🎉 You Won! 🎉' : '💀 Game Over 💀'
                            }, void 0, false, {
                                fileName: "[project]/app/components/PuzzleBattle1.tsx",
                                lineNumber: 662,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    const initialSnapshot = createInitialSnapshot();
                                    setGameState((prev)=>({
                                            ...prev,
                                            ...initialSnapshot,
                                            maxPlayerHealth: INITIAL_PLAYER_HEALTH,
                                            maxEnemyHealth: INITIAL_ENEMY_HEALTH,
                                            isMobileView: window.innerWidth < MOBILE_BREAKPOINT,
                                            leftPanelWidth: 60,
                                            history: [],
                                            replayMode: false
                                        }));
                                },
                                className: `px-6 py-3 ${COLORS.accentOrangeBrown} rounded ${COLORS.textLight} font-semibold text-lg hover:bg-[#8C441B]`,
                                children: "Play Again"
                            }, void 0, false, {
                                fileName: "[project]/app/components/PuzzleBattle1.tsx",
                                lineNumber: 665,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/PuzzleBattle1.tsx",
                        lineNumber: 661,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/PuzzleBattle1.tsx",
                    lineNumber: 660,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/PuzzleBattle1.tsx",
            lineNumber: 546,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/PuzzleBattle1.tsx",
        lineNumber: 545,
        columnNumber: 5
    }, this);
};
_s1(PuzzleBattleGame, "jWfHLQdaCmLN3n8FeEORy/f5Ehk=");
_c2 = PuzzleBattleGame;
const __TURBOPACK__default__export__ = PuzzleBattleGame;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "HealthBar");
__turbopack_context__.k.register(_c1, "Timeline");
__turbopack_context__.k.register(_c2, "PuzzleBattleGame");
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

//# sourceMappingURL=_a27cd899._.js.map