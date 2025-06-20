(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/components/PuzzleBattle3.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const PuzzleBattleGame = ()=>{
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const GRID_SIZE = 8;
    const PIECE_TYPES = 6;
    const [splitterPosition, setSplitterPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(70);
    const [isDraggingSplitter, setIsDraggingSplitter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedPiece, setSelectedPiece] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredPiece, setHoveredPiece] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [grid, setGrid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [timelineEvents, setTimelineEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [abilities, setAbilities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        turn: 1,
        playerHp: 100,
        enemyHp: 100,
        combo: 0,
        score: 0,
        isPaused: false
    });
    const [replayFrames, setReplayFrames] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isReplaying, setIsReplaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [replayIndex, setReplayIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [previewGrid, setPreviewGrid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const colors = {
        primary: '#F2EB80',
        secondary: '#BF6A1F',
        dark: '#401A04',
        accent: '#8C441B',
        darkest: '#260801'
    };
    const pieceColors = [
        '#FF6B6B',
        '#4ECDC4',
        '#45B7D1',
        '#96CEB4',
        '#FECA57',
        '#DDA0DD'
    ];
    // Initialize grid
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PuzzleBattleGame.useEffect": ()=>{
            initializeGrid();
            initializeAbilities();
        }
    }["PuzzleBattleGame.useEffect"], []);
    const initializeGrid = ()=>{
        const newGrid = [];
        for(let row = 0; row < GRID_SIZE; row++){
            newGrid[row] = [];
            for(let col = 0; col < GRID_SIZE; col++){
                newGrid[row][col] = {
                    id: `${row}-${col}`,
                    type: Math.floor(Math.random() * PIECE_TYPES),
                    row,
                    col
                };
            }
        }
        setGrid(newGrid);
    };
    const initializeAbilities = ()=>{
        setAbilities([
            {
                id: '1',
                name: 'Fire Blast',
                icon: '🔥',
                cooldown: 3,
                currentCooldown: 0,
                description: 'Deal 15 damage'
            },
            {
                id: '2',
                name: 'Heal',
                icon: '💚',
                cooldown: 4,
                currentCooldown: 0,
                description: 'Restore 20 HP'
            },
            {
                id: '3',
                name: 'Shield',
                icon: '🛡️',
                cooldown: 5,
                currentCooldown: 0,
                description: 'Block next attack'
            },
            {
                id: '4',
                name: 'Lightning',
                icon: '⚡',
                cooldown: 6,
                currentCooldown: 0,
                description: 'Deal 25 damage'
            }
        ]);
    };
    // Handle splitter drag
    const handleSplitterMouseDown = (e)=>{
        e.preventDefault();
        setIsDraggingSplitter(true);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PuzzleBattleGame.useEffect": ()=>{
            const handleMouseMove = {
                "PuzzleBattleGame.useEffect.handleMouseMove": (e)=>{
                    if (!isDraggingSplitter || !containerRef.current) return;
                    const containerRect = containerRef.current.getBoundingClientRect();
                    const relativeX = e.clientX - containerRect.left;
                    const percentage = relativeX / containerRect.width * 100;
                    setSplitterPosition(Math.max(50, Math.min(80, percentage)));
                }
            }["PuzzleBattleGame.useEffect.handleMouseMove"];
            const handleMouseUp = {
                "PuzzleBattleGame.useEffect.handleMouseUp": ()=>{
                    setIsDraggingSplitter(false);
                }
            }["PuzzleBattleGame.useEffect.handleMouseUp"];
            if (isDraggingSplitter) {
                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
            }
            return ({
                "PuzzleBattleGame.useEffect": ()=>{
                    document.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('mouseup', handleMouseUp);
                }
            })["PuzzleBattleGame.useEffect"];
        }
    }["PuzzleBattleGame.useEffect"], [
        isDraggingSplitter
    ]);
    // Check for matches
    const checkMatches = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PuzzleBattleGame.useCallback[checkMatches]": (currentGrid)=>{
            const newGrid = currentGrid.map({
                "PuzzleBattleGame.useCallback[checkMatches].newGrid": (row)=>row.map({
                        "PuzzleBattleGame.useCallback[checkMatches].newGrid": (piece)=>({
                                ...piece,
                                matched: false
                            })
                    }["PuzzleBattleGame.useCallback[checkMatches].newGrid"])
            }["PuzzleBattleGame.useCallback[checkMatches].newGrid"]);
            let foundMatch = false;
            let comboCount = 0;
            // Check horizontal matches
            for(let row = 0; row < GRID_SIZE; row++){
                for(let col = 0; col <= GRID_SIZE - 3; col++){
                    const type = newGrid[row][col].type;
                    if (type !== -1 && newGrid[row][col + 1].type === type && newGrid[row][col + 2].type === type) {
                        for(let i = 0; i < 3; i++){
                            newGrid[row][col + i].matched = true;
                            newGrid[row][col + i].combo = comboCount;
                        }
                        foundMatch = true;
                        comboCount++;
                    }
                }
            }
            // Check vertical matches
            for(let col = 0; col < GRID_SIZE; col++){
                for(let row = 0; row <= GRID_SIZE - 3; row++){
                    const type = newGrid[row][col].type;
                    if (type !== -1 && newGrid[row + 1][col].type === type && newGrid[row + 2][col].type === type) {
                        for(let i = 0; i < 3; i++){
                            newGrid[row + i][col].matched = true;
                            newGrid[row + i][col].combo = comboCount;
                        }
                        foundMatch = true;
                        comboCount++;
                    }
                }
            }
            if (foundMatch) {
                // Add timeline events for matches
                const damage = comboCount * 5;
                const newEvent = {
                    id: Date.now().toString(),
                    position: Math.random() * 100,
                    type: 'damage',
                    value: damage,
                    target: 'enemy',
                    timestamp: Date.now()
                };
                setTimelineEvents({
                    "PuzzleBattleGame.useCallback[checkMatches]": (prev)=>[
                            ...prev,
                            newEvent
                        ]
                }["PuzzleBattleGame.useCallback[checkMatches]"]);
                // Update game state
                setGameState({
                    "PuzzleBattleGame.useCallback[checkMatches]": (prev)=>({
                            ...prev,
                            enemyHp: Math.max(0, prev.enemyHp - damage),
                            combo: prev.combo + comboCount,
                            score: prev.score + damage * 10
                        })
                }["PuzzleBattleGame.useCallback[checkMatches]"]);
            }
            return newGrid;
        }
    }["PuzzleBattleGame.useCallback[checkMatches]"], []);
    // Handle piece swap
    const swapPieces = (piece1, piece2)=>{
        if (Math.abs(piece1.row - piece2.row) + Math.abs(piece1.col - piece2.col) !== 1) {
            return;
        }
        setGrid((prevGrid)=>{
            const newGrid = prevGrid.map((row)=>[
                    ...row
                ]);
            const temp = newGrid[piece1.row][piece1.col];
            newGrid[piece1.row][piece1.col] = newGrid[piece2.row][piece2.col];
            newGrid[piece2.row][piece2.col] = temp;
            // Update positions
            newGrid[piece1.row][piece1.col].row = piece1.row;
            newGrid[piece1.row][piece1.col].col = piece1.col;
            newGrid[piece2.row][piece2.col].row = piece2.row;
            newGrid[piece2.row][piece2.col].col = piece2.col;
            // Check for matches after swap
            const matchedGrid = checkMatches(newGrid);
            // Save replay frame
            setReplayFrames((prev)=>[
                    ...prev,
                    {
                        gameState: {
                            ...gameState
                        },
                        grid: matchedGrid,
                        timestamp: Date.now()
                    }
                ]);
            return matchedGrid;
        });
        setSelectedPiece(null);
    };
    // Handle piece click
    const handlePieceClick = (piece)=>{
        if (selectedPiece) {
            swapPieces(selectedPiece, piece);
        } else {
            setSelectedPiece(piece);
        }
    };
    // Handle piece hover for preview
    const handlePieceHover = (piece)=>{
        setHoveredPiece(piece);
        if (selectedPiece && piece !== selectedPiece) {
            // Create preview grid
            const newGrid = grid.map((row)=>row.map((p)=>({
                        ...p
                    })));
            if (Math.abs(selectedPiece.row - piece.row) + Math.abs(selectedPiece.col - piece.col) === 1) {
                const temp = newGrid[selectedPiece.row][selectedPiece.col];
                newGrid[selectedPiece.row][selectedPiece.col] = newGrid[piece.row][piece.col];
                newGrid[piece.row][piece.col] = temp;
                const previewWithMatches = checkMatches(newGrid);
                setPreviewGrid(previewWithMatches);
            }
        }
    };
    // Handle ability use
    const useAbility = (ability)=>{
        if (ability.currentCooldown > 0) return;
        let eventType = 'damage';
        let value = 0;
        let target = 'enemy';
        switch(ability.name){
            case 'Fire Blast':
                eventType = 'damage';
                value = 15;
                target = 'enemy';
                break;
            case 'Heal':
                eventType = 'heal';
                value = 20;
                target = 'player';
                break;
            case 'Shield':
                eventType = 'buff';
                value = 1;
                target = 'player';
                break;
            case 'Lightning':
                eventType = 'damage';
                value = 25;
                target = 'enemy';
                break;
        }
        const newEvent = {
            id: Date.now().toString(),
            position: Math.random() * 100,
            type: eventType,
            value,
            target,
            timestamp: Date.now()
        };
        setTimelineEvents((prev)=>[
                ...prev,
                newEvent
            ]);
        // Update ability cooldown
        setAbilities((prev)=>prev.map((a)=>a.id === ability.id ? {
                    ...a,
                    currentCooldown: a.cooldown
                } : a));
        // Apply ability effect
        setGameState((prev)=>{
            let newState = {
                ...prev
            };
            if (eventType === 'damage' && target === 'enemy') {
                newState.enemyHp = Math.max(0, prev.enemyHp - value);
            } else if (eventType === 'heal' && target === 'player') {
                newState.playerHp = Math.min(100, prev.playerHp + value);
            }
            return newState;
        });
    };
    // Timeline path generator
    const generateTimelinePath = (isPlayer)=>{
        const y = isPlayer ? 30 : 70;
        return `M 10,${y} Q 200,${y - 20} 400,${y} T 800,${y}`;
    };
    // Start replay
    const startReplay = ()=>{
        setIsReplaying(true);
        setReplayIndex(0);
    };
    // Replay animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PuzzleBattleGame.useEffect": ()=>{
            if (!isReplaying || replayIndex >= replayFrames.length) {
                setIsReplaying(false);
                return;
            }
            const timer = setTimeout({
                "PuzzleBattleGame.useEffect.timer": ()=>{
                    const frame = replayFrames[replayIndex];
                    setGrid(frame.grid);
                    setGameState(frame.gameState);
                    setReplayIndex({
                        "PuzzleBattleGame.useEffect.timer": (prev)=>prev + 1
                    }["PuzzleBattleGame.useEffect.timer"]);
                }
            }["PuzzleBattleGame.useEffect.timer"], 500);
            return ({
                "PuzzleBattleGame.useEffect": ()=>clearTimeout(timer)
            })["PuzzleBattleGame.useEffect"];
        }
    }["PuzzleBattleGame.useEffect"], [
        isReplaying,
        replayIndex,
        replayFrames
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: "w-full max-w-[1600px] h-[900px] bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col",
            style: {
                backgroundColor: colors.darkest
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-20 bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-between px-8 border-b border-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold text-white",
                                    children: "Puzzle Battle"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                    lineNumber: 373,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg text-gray-300",
                                            children: [
                                                "Turn: ",
                                                gameState.turn
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                            lineNumber: 375,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg text-gray-300",
                                            children: [
                                                "Score: ",
                                                gameState.score
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                            lineNumber: 376,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg text-yellow-400",
                                            children: [
                                                "Combo: x",
                                                gameState.combo
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                            lineNumber: 377,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                    lineNumber: 374,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/PuzzleBattle3.tsx",
                            lineNumber: 372,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: startReplay,
                                    className: "px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors",
                                    disabled: replayFrames.length === 0,
                                    children: [
                                        "Replay (",
                                        replayFrames.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                    lineNumber: 381,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: initializeGrid,
                                    className: "px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors",
                                    children: "New Game"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                    lineNumber: 388,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/PuzzleBattle3.tsx",
                            lineNumber: 380,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/PuzzleBattle3.tsx",
                    lineNumber: 371,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-32 bg-gray-800 border-b border-gray-700 relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        ref: svgRef,
                        className: "w-full h-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: generateTimelinePath(true),
                                fill: "none",
                                stroke: colors.primary,
                                strokeWidth: "3",
                                opacity: "0.3"
                            }, void 0, false, {
                                fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                lineNumber: 401,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "10",
                                y: "20",
                                fill: colors.primary,
                                className: "text-sm font-semibold",
                                children: [
                                    "Player HP: ",
                                    gameState.playerHp
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                lineNumber: 408,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: generateTimelinePath(false),
                                fill: "none",
                                stroke: colors.secondary,
                                strokeWidth: "3",
                                opacity: "0.3"
                            }, void 0, false, {
                                fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                lineNumber: 413,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "10",
                                y: "90",
                                fill: colors.secondary,
                                className: "text-sm font-semibold",
                                children: [
                                    "Enemy HP: ",
                                    gameState.enemyHp
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                lineNumber: 420,
                                columnNumber: 13
                            }, this),
                            timelineEvents.slice(-10).map((event, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    className: "animate-pulse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: `${event.position}%`,
                                            cy: event.target === 'player' ? 30 : 70,
                                            r: "8",
                                            fill: event.type === 'damage' ? '#FF6B6B' : event.type === 'heal' ? '#4ECDC4' : '#FECA57',
                                            className: "animate-bounce"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                            lineNumber: 427,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: `${event.position}%`,
                                            y: event.target === 'player' ? 25 : 65,
                                            textAnchor: "middle",
                                            fill: "white",
                                            className: "text-xs font-bold",
                                            children: event.value
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                            lineNumber: 434,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, event.id, true, {
                                    fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                    lineNumber: 426,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/PuzzleBattle3.tsx",
                        lineNumber: 399,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/PuzzleBattle3.tsx",
                    lineNumber: 398,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-800 p-8 flex items-center justify-center",
                            style: {
                                width: `${splitterPosition}%`
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-8 gap-1 p-4 bg-gray-900 rounded-xl shadow-inner",
                                children: grid.map((row, rowIndex)=>row.map((piece, colIndex)=>{
                                        const isSelected = selectedPiece?.id === piece.id;
                                        const isHovered = hoveredPiece?.id === piece.id;
                                        const isPreviewMatch = previewGrid?.[rowIndex]?.[colIndex]?.matched;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>handlePieceClick(piece),
                                            onMouseEnter: ()=>handlePieceHover(piece),
                                            onMouseLeave: ()=>{
                                                setHoveredPiece(null);
                                                setPreviewGrid(null);
                                            },
                                            className: `
                        w-16 h-16 rounded-lg cursor-pointer transition-all duration-200
                        ${isSelected ? 'ring-4 ring-yellow-400 scale-110' : ''}
                        ${isHovered && !isSelected ? 'scale-105' : ''}
                        ${piece.matched ? 'animate-pulse ring-2 ring-white' : ''}
                        ${isPreviewMatch ? 'ring-2 ring-green-400 opacity-80' : ''}
                      `,
                                            style: {
                                                backgroundColor: piece.matched ? colors.primary : pieceColors[piece.type],
                                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full flex items-center justify-center text-2xl font-bold text-white",
                                                children: [
                                                    '💎',
                                                    '🔮',
                                                    '⭐',
                                                    '🌟',
                                                    '💫',
                                                    '✨'
                                                ][piece.type]
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                                lineNumber: 485,
                                                columnNumber: 23
                                            }, this)
                                        }, piece.id, false, {
                                            fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                            lineNumber: 463,
                                            columnNumber: 21
                                        }, this);
                                    }))
                            }, void 0, false, {
                                fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                lineNumber: 455,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/PuzzleBattle3.tsx",
                            lineNumber: 451,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-2 bg-gray-700 cursor-col-resize hover:bg-gray-600 transition-colors flex items-center justify-center",
                            onMouseDown: handleSplitterMouseDown,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1 h-16 bg-gray-500 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                lineNumber: 500,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/PuzzleBattle3.tsx",
                            lineNumber: 496,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-800 p-8 overflow-y-auto",
                            style: {
                                width: `${100 - splitterPosition}%`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-white mb-6",
                                    children: "Abilities"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                    lineNumber: 508,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: abilities.map((ability)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: _s1(()=>{
                                                _s1();
                                                return useAbility(ability);
                                            }, "F3bX94StzMGnCFytE4/0MpoNfKg=", false, function() {
                                                return [
                                                    useAbility
                                                ];
                                            }),
                                            className: `
                    p-4 bg-gray-700 rounded-lg cursor-pointer transition-all duration-200
                    ${ability.currentCooldown > 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-600 hover:scale-105'}
                  `,
                                            style: {
                                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-3xl",
                                                                children: ability.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                                                lineNumber: 527,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-lg font-semibold text-white",
                                                                        children: ability.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                                                        lineNumber: 529,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-400",
                                                                        children: ability.description
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                                                        lineNumber: 530,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                                                lineNumber: 528,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                                        lineNumber: 526,
                                                        columnNumber: 21
                                                    }, this),
                                                    ability.currentCooldown > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold text-red-400",
                                                        children: ability.currentCooldown
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                                        lineNumber: 534,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                                lineNumber: 525,
                                                columnNumber: 19
                                            }, this)
                                        }, ability.id, false, {
                                            fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                            lineNumber: 511,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                    lineNumber: 509,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/PuzzleBattle3.tsx",
                            lineNumber: 504,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/PuzzleBattle3.tsx",
                    lineNumber: 449,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-16 bg-gray-800 border-t border-gray-700 flex items-center justify-between px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 rounded-full bg-green-500 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                        lineNumber: 549,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-300",
                                        children: isReplaying ? 'Replaying...' : 'Ready'
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                        lineNumber: 550,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/PuzzleBattle3.tsx",
                                lineNumber: 548,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/PuzzleBattle3.tsx",
                            lineNumber: 547,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-400",
                            children: new Date().toLocaleTimeString()
                        }, void 0, false, {
                            fileName: "[project]/app/components/PuzzleBattle3.tsx",
                            lineNumber: 555,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/PuzzleBattle3.tsx",
                    lineNumber: 546,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/PuzzleBattle3.tsx",
            lineNumber: 365,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/PuzzleBattle3.tsx",
        lineNumber: 364,
        columnNumber: 5
    }, this);
};
_s(PuzzleBattleGame, "EhWFPd6Ieziwj0I/IucSrVHtSwk=");
_c = PuzzleBattleGame;
const __TURBOPACK__default__export__ = PuzzleBattleGame;
var _c;
__turbopack_context__.k.register(_c, "PuzzleBattleGame");
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

//# sourceMappingURL=_d0d4f257._.js.map