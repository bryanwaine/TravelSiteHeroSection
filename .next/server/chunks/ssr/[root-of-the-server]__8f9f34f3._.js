module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/components/PuzzleBattle4.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const GRID_SIZE = 8;
const PIECE_TYPES = [
    "fire",
    "water",
    "earth",
    "air",
    "light",
    "dark"
];
const PIECE_COLORS = {
    fire: "#BF6A1F",
    water: "#5B9BD5",
    earth: "#8C441B",
    air: "#F2EB80",
    light: "#FFE4B5",
    dark: "#401A04"
};
const PuzzleBattleGame = ()=>{
    const [grid, setGrid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedPiece, setSelectedPiece] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredPiece, setHoveredPiece] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [splitterPosition, setSplitterPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(70);
    const [isDraggingSplitter, setIsDraggingSplitter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [timelineEvents, setTimelineEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [abilities, setAbilities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        playerHP: 100,
        enemyHP: 100,
        playerMP: 50,
        turn: 1,
        combo: 0,
        score: 0
    });
    const [predictedMoves, setPredictedMoves] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [predictionData, setPredictionData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [replayMode, setReplayMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [replayHistory, setReplayHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentReplayIndex, setCurrentReplayIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const displayGameState = gameState ?? {
        playerHP: 100,
        enemyHP: 100,
        playerMP: 50,
        turn: 1,
        combo: 0,
        score: 0
    };
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timelineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseUpHandlerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isDraggingSplitter) {
            mouseUpHandlerRef.current = ()=>setIsDraggingSplitter(false);
            document.addEventListener("mouseup", mouseUpHandlerRef.current);
            return ()=>{
                if (mouseUpHandlerRef.current) {
                    document.removeEventListener("mouseup", mouseUpHandlerRef.current);
                }
            };
        }
    }, [
        isDraggingSplitter
    ]);
    // Initialize grid
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        initializeGrid();
        initializeAbilities();
    }, []);
    const initializeGrid = ()=>{
        const newGrid = [];
        for(let row = 0; row < GRID_SIZE; row++){
            newGrid[row] = [];
            for(let col = 0; col < GRID_SIZE; col++){
                let pieceType;
                do {
                    pieceType = PIECE_TYPES[Math.floor(Math.random() * PIECE_TYPES.length)];
                }while (col >= 2 && newGrid[row][col - 1].type === pieceType && newGrid[row][col - 2].type === pieceType || row >= 2 && newGrid[row - 1][col].type === pieceType && newGrid[row - 2][col].type === pieceType)
                newGrid[row][col] = {
                    id: `${row}-${col}`,
                    type: pieceType,
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
                id: "1",
                name: "Fireball",
                icon: "🔥",
                cooldown: 3,
                currentCooldown: 0,
                damage: 15,
                cost: 10
            },
            {
                id: "2",
                name: "Heal",
                icon: "💚",
                cooldown: 5,
                currentCooldown: 0,
                damage: -20,
                cost: 15
            },
            {
                id: "3",
                name: "Thunder",
                icon: "⚡",
                cooldown: 4,
                currentCooldown: 0,
                damage: 25,
                cost: 20
            },
            {
                id: "4",
                name: "Shield",
                icon: "🛡️",
                cooldown: 6,
                currentCooldown: 0,
                damage: 0,
                cost: 5
            }
        ]);
    };
    const saveReplayFrame = (customGrid, customGameState)=>{
        setReplayHistory((prev)=>[
                ...prev,
                {
                    grid: JSON.parse(JSON.stringify(customGrid ?? grid)),
                    gameState: {
                        ...customGameState ?? gameState
                    }
                }
            ]);
    };
    const abilitiesWidthLg = 100 - splitterPosition;
    const puzzleWidthLg = splitterPosition;
    const handlePieceClick = (piece)=>{
        if (replayMode) return;
        if (!selectedPiece) {
            setSelectedPiece(piece);
        } else {
            if (isAdjacent(selectedPiece, piece)) {
                swapPieces(selectedPiece, piece);
                setPredictedMoves([]); // clear predictions on action
            }
            setSelectedPiece(null);
        }
    };
    const isAdjacent = (piece1, piece2)=>{
        const rowDiff = Math.abs(piece1.row - piece2.row);
        const colDiff = Math.abs(piece1.col - piece2.col);
        return rowDiff === 1 && colDiff === 0 || rowDiff === 0 && colDiff === 1;
    };
    const swapPieces = (piece1, piece2)=>{
        const newGrid = [
            ...grid
        ];
        const temp = newGrid[piece1.row][piece1.col];
        newGrid[piece1.row][piece1.col] = newGrid[piece2.row][piece2.col];
        newGrid[piece2.row][piece2.col] = temp;
        // Update positions
        newGrid[piece1.row][piece1.col].row = piece1.row;
        newGrid[piece1.row][piece1.col].col = piece1.col;
        newGrid[piece2.row][piece2.col].row = piece2.row;
        newGrid[piece2.row][piece2.col].col = piece2.col;
        setGrid(newGrid);
        saveReplayFrame();
        // Check for matches after swap
        setTimeout(()=>{
            checkMatches();
        }, 300);
        // Add to replay history
        if (!replayMode) {
            setReplayHistory([
                ...replayHistory,
                {
                    type: "swap",
                    piece1,
                    piece2,
                    grid: newGrid
                }
            ]);
        }
    };
    const checkMatches = ()=>{
        const newGrid = [
            ...grid
        ];
        const matches = [];
        let comboGroup = 0;
        // Check horizontal matches
        for(let row = 0; row < GRID_SIZE; row++){
            for(let col = 0; col < GRID_SIZE - 2; col++){
                if (newGrid[row][col].type === newGrid[row][col + 1].type && newGrid[row][col].type === newGrid[row][col + 2].type) {
                    comboGroup++;
                    for(let i = col; i < GRID_SIZE && newGrid[row][i].type === newGrid[row][col].type; i++){
                        if (!matches.find((m)=>m.id === newGrid[row][i].id)) {
                            newGrid[row][i].isMatched = true;
                            newGrid[row][i].comboGroup = comboGroup;
                            matches.push(newGrid[row][i]);
                        }
                    }
                }
            }
        }
        // Check vertical matches
        for(let col = 0; col < GRID_SIZE; col++){
            for(let row = 0; row < GRID_SIZE - 2; row++){
                if (newGrid[row][col].type === newGrid[row + 1][col].type && newGrid[row][col].type === newGrid[row + 2][col].type) {
                    if (!newGrid[row][col].comboGroup) comboGroup++;
                    for(let i = row; i < GRID_SIZE && newGrid[i][col].type === newGrid[row][col].type; i++){
                        if (!matches.find((m)=>m.id === newGrid[i][col].id)) {
                            newGrid[i][col].isMatched = true;
                            newGrid[i][col].comboGroup = newGrid[i][col].comboGroup || comboGroup;
                            matches.push(newGrid[i][col]);
                        }
                    }
                }
            }
        }
        if (matches.length > 0) {
            setGrid(newGrid);
            processMatches(matches);
            saveReplayFrame();
        }
    };
    const processMatches = (matches)=>{
        const damage = matches.length * 5;
        const mpGain = matches.length * 2;
        setGameState((prev)=>({
                ...prev,
                enemyHP: Math.max(0, prev.enemyHP - damage),
                playerMP: Math.min(100, prev.playerMP + mpGain),
                combo: prev.combo + 1,
                score: prev.score + matches.length * 100 * (prev.combo + 1)
            }));
        // Add timeline event
        const event = {
            id: Date.now().toString(),
            type: "attack",
            target: "enemy",
            damage,
            timestamp: Date.now(),
            position: 0
        };
        setTimelineEvents((prev)=>[
                ...prev,
                event
            ]);
        // Clear matches after animation
        setTimeout(()=>{
            dropPieces();
            saveReplayFrame();
        }, 500);
        triggerEnemyTurn();
    };
    const dropPieces = ()=>{
        const newGrid = [
            ...grid
        ];
        // Drop existing pieces
        for(let col = 0; col < GRID_SIZE; col++){
            let emptyRow = GRID_SIZE - 1;
            for(let row = GRID_SIZE - 1; row >= 0; row--){
                if (!newGrid[row][col].isMatched) {
                    if (row !== emptyRow) {
                        newGrid[emptyRow][col] = newGrid[row][col];
                        newGrid[emptyRow][col].row = emptyRow;
                    }
                    emptyRow--;
                }
            }
            // Fill empty spaces with new pieces
            for(let row = emptyRow; row >= 0; row--){
                newGrid[row][col] = {
                    id: `${row}-${col}-${Date.now()}`,
                    type: PIECE_TYPES[Math.floor(Math.random() * PIECE_TYPES.length)],
                    row,
                    col
                };
            }
        }
        setGrid(newGrid);
        // Check for new matches
        setTimeout(()=>{
            checkMatches();
        }, 300);
    };
    const handlePieceHover = (piece)=>{
        if (piece && selectedPiece && isAdjacent(selectedPiece, piece)) {
            const result = simulateSwap(selectedPiece, piece);
            setPredictedMoves(result.matches);
            setPredictionData(result);
        } else {
            setPredictedMoves([]);
            setPredictionData(null);
        }
    };
    const simulateSwap = (piece1, piece2)=>{
        const tempGrid = grid.map((row)=>[
                ...row
            ]);
        const temp = tempGrid[piece1.row][piece1.col];
        tempGrid[piece1.row][piece1.col] = tempGrid[piece2.row][piece2.col];
        tempGrid[piece2.row][piece2.col] = temp;
        const matchesMap = {};
        let comboCount = 0;
        // Simulate matches (horizontal + vertical)
        for(let row = 0; row < GRID_SIZE; row++){
            for(let col = 0; col < GRID_SIZE - 2; col++){
                if (tempGrid[row][col].type === tempGrid[row][col + 1].type && tempGrid[row][col].type === tempGrid[row][col + 2].type) {
                    comboCount++;
                    for(let i = col; i < GRID_SIZE && tempGrid[row][i].type === tempGrid[row][col].type; i++){
                        matchesMap[tempGrid[row][i].id] = tempGrid[row][i];
                    }
                }
            }
        }
        for(let col = 0; col < GRID_SIZE; col++){
            for(let row = 0; row < GRID_SIZE - 2; row++){
                if (tempGrid[row][col].type === tempGrid[row + 1][col].type && tempGrid[row][col].type === tempGrid[row + 2][col].type) {
                    comboCount++;
                    for(let i = row; i < GRID_SIZE && tempGrid[i][col].type === tempGrid[row][col].type; i++){
                        matchesMap[tempGrid[i][col].id] = tempGrid[i][col];
                    }
                }
            }
        }
        const matches = Object.values(matchesMap);
        return {
            matches,
            damage: matches.length * 5,
            mpGain: matches.length * 2,
            comboCount
        };
    };
    const useAbility = (ability)=>{
        if (replayMode || ability.currentCooldown > 0 || displayGameState.playerMP < ability.cost) return;
        setGameState((prev)=>({
                ...prev,
                playerMP: prev.playerMP - ability.cost,
                enemyHP: ability.damage > 0 ? Math.max(0, prev.enemyHP - ability.damage) : prev.enemyHP,
                playerHP: ability.damage < 0 ? Math.min(100, prev.playerHP - ability.damage) : prev.playerHP
            }));
        setAbilities((prev)=>prev.map((a)=>a.id === ability.id ? {
                    ...a,
                    currentCooldown: a.cooldown
                } : a));
        const event = {
            id: Date.now().toString(),
            type: "special",
            target: ability.damage > 0 ? "enemy" : "player",
            damage: Math.abs(ability.damage),
            timestamp: Date.now(),
            position: 0
        };
        setTimelineEvents((prev)=>[
                ...prev,
                event
            ]);
        triggerEnemyTurn();
    };
    const handleSplitterDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (!isDraggingSplitter || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = x / rect.width * 100;
        setSplitterPosition(Math.min(Math.max(percentage, 30), 85));
    }, [
        isDraggingSplitter
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isDraggingSplitter) {
            document.addEventListener("mousemove", handleSplitterDrag);
            document.addEventListener("mouseup", ()=>setIsDraggingSplitter(false));
            return ()=>{
                document.removeEventListener("mousemove", handleSplitterDrag);
                document.removeEventListener("mouseup", ()=>setIsDraggingSplitter(false));
            };
        }
    }, [
        isDraggingSplitter,
        handleSplitterDrag
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!replayMode || replayHistory.length === 0) return;
        const interval = setInterval(()=>{
            if (currentReplayIndex < replayHistory.length) {
                const frame = replayHistory[currentReplayIndex];
                setGrid(frame.grid);
                setGameState(frame.gameState);
                setCurrentReplayIndex((i)=>i + 1);
            } else {
                setReplayMode(false);
                setCurrentReplayIndex(0);
                clearInterval(interval);
            }
        }, 800);
        return ()=>clearInterval(interval);
    }, [
        replayMode,
        currentReplayIndex,
        replayHistory
    ]);
    const triggerEnemyTurn = ()=>{
        if (displayGameState.enemyHP <= 0 || displayGameState.playerHP <= 0) return;
        const damage = Math.floor(Math.random() * 10) + 5;
        setGameState((prev)=>{
            const updated = {
                ...prev,
                playerHP: Math.max(0, prev.playerHP - damage),
                turn: prev.turn + 1
            };
            saveReplayFrame();
            return updated;
        });
        const event = {
            id: Date.now().toString(),
            type: "attack",
            target: "player",
            damage,
            timestamp: Date.now(),
            position: 0
        };
        setTimelineEvents((prev)=>[
                ...prev,
                event
            ]);
        saveReplayFrame();
    };
    const handleReplayToggle = ()=>{
        if (!replayMode && replayHistory.length > 0) {
            setCurrentReplayIndex(0);
            setReplayMode(true);
        } else {
            setReplayMode(false);
            setReplayHistory([]);
        }
    };
    //  Reset game state
    const resetGame = ()=>{
        initializeGrid();
        setGameState({
            playerHP: 100,
            enemyHP: 100,
            playerMP: 50,
            turn: 1,
            combo: 0,
            score: 0
        });
        setTimelineEvents([]);
    };
    // Update ability cooldowns
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const cooldownTimer = setInterval(()=>{
            setAbilities((prev)=>prev.map((a)=>({
                        ...a,
                        currentCooldown: Math.max(0, a.currentCooldown - 1)
                    })));
        }, 1000);
        return ()=>clearInterval(cooldownTimer);
    }, []);
    const playerPathId = `timeline-path-player`;
    const enemyPathId = `timeline-path-enemy`;
    const playerEvents = timelineEvents.filter((e)=>e.target === "player");
    const enemyEvents = timelineEvents.filter((e)=>e.target === "enemy");
    const Bars3 = (props)=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            width: "2rem",
            height: "2rem",
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z",
                clipRule: "evenodd"
            }, void 0, false, {
                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                lineNumber: 611,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/PuzzleBattle4.tsx",
            lineNumber: 604,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
          .abilities {
            padding: 1.5rem;
            height: auto;
            width: 100%;
          }

          .puzzle {
            flex: 1;
            padding: 1.5rem;
            height: auto;
            width: 100%;
          }

          @media (min-width: 1024px) {
            .abilities {
              height: 100%;
              width: ${abilitiesWidthLg}%;
            }

            .puzzle {
              order: 0;
              height: 100%;
              width: ${puzzleWidthLg}%;
            }
          }
        `
            }, void 0, false, {
                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                lineNumber: 623,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative lg:min-h-screen w-screen bg-gray-700 flex items-center justify-center p-4 overflow-auto lg:overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: containerRef,
                        className: "lg:w-[1600px] lg:h-[calc(100vh-30px)] bg-gray-900 rounded-2xl shadow-2xl backdrop-blur-md flex flex-col lg:overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-r from-[#260801] to-[#401A04] p-4 flex justify-between items-center rounded-tr-2xl rounded-tl-2xl ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#F2EB80] via-[#BF6A1F] to-red-500 bg-clip-text text-transparent",
                                                children: "Puzzle Battle"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                lineNumber: 661,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 md:gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2 md:px-3 py-1 bg-[#BF6A1F] rounded-full text-white text-xs md:text-sm",
                                                        children: [
                                                            "Turn ",
                                                            displayGameState?.turn ?? "--"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                        lineNumber: 665,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2 md:px-3 py-1 bg-[#8C441B] rounded-full text-white text-xs md:text-sm",
                                                        children: [
                                                            "Score: ",
                                                            displayGameState?.score ?? 0
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                        lineNumber: 668,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2 md:px-3 py-1 bg-[#F2EB80] rounded-full text-[#401A04] text-xs md:text-sm font-semibold",
                                                        children: [
                                                            "Combo x",
                                                            displayGameState.combo
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                        lineNumber: 671,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                lineNumber: 664,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                        lineNumber: 660,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sm:hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setMenuOpen(!menuOpen),
                                                className: "text-[#F2EB80] p-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Bars3, {}, void 0, false, {
                                                    fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                    lineNumber: 683,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                lineNumber: 679,
                                                columnNumber: 15
                                            }, this),
                                            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-16 right-4 bg-[#401A04] rounded-lg shadow-lg flex flex-col gap-2 p-4 z-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            handleReplayToggle();
                                                            setMenuOpen(false);
                                                        },
                                                        className: "px-4 py-2 bg-[#8C441B] hover:bg-[#BF6A1F] text-white rounded-lg transition",
                                                        children: replayMode ? "Exit Replay" : "View Replay"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                        lineNumber: 687,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            resetGame();
                                                            setMenuOpen(false);
                                                        },
                                                        className: "px-4 py-2 bg-[#8C441B] hover:bg-[#BF6A1F] text-white rounded-lg transition",
                                                        children: "New Game"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                        lineNumber: 696,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                lineNumber: 686,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                        lineNumber: 678,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden sm:flex gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleReplayToggle,
                                                className: "px-4 py-2 bg-[#8C441B] hover:bg-[#BF6A1F] text-white rounded-lg transition",
                                                children: replayMode ? "Exit Replay" : "View Replay"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                lineNumber: 711,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: resetGame,
                                                className: "px-4 py-2 bg-[#8C441B] hover:bg-[#BF6A1F] text-white rounded-lg transition",
                                                children: "New Game"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                lineNumber: 717,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                        lineNumber: 710,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                lineNumber: 658,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 flex flex-col md:flex-row justify-center gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 bg-gray-800 rounded-lg p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#F2EB80] font-semibold",
                                                        children: "Player"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                        lineNumber: 730,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-green-400",
                                                        children: [
                                                            displayGameState.playerHP,
                                                            "/100 HP"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                        lineNumber: 731,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                lineNumber: 729,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-4 bg-black/40 rounded-full overflow-hidden mb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-300",
                                                    style: {
                                                        width: `${displayGameState.playerHP}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                    lineNumber: 736,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                lineNumber: 735,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-2 bt-2 bg-black/40 rounded-full overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300",
                                                    style: {
                                                        width: `${displayGameState.playerMP}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                    lineNumber: 742,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                lineNumber: 741,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                        lineNumber: 728,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 bg-gray-800 rounded-lg p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#F2EB80] font-semibold",
                                                        children: "Enemy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                        lineNumber: 750,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-400",
                                                        children: [
                                                            displayGameState.enemyHP,
                                                            "/100 HP"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                        lineNumber: 751,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                lineNumber: 749,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-4 bg-black/40 rounded-full overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300",
                                                    style: {
                                                        width: `${displayGameState.enemyHP}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                    lineNumber: 756,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                lineNumber: 755,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                        lineNumber: 748,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                lineNumber: 727,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 flex gap-4 justify-center space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-20 w-full bg-gray-800 rounded-lg p-2 m-2 backdrop-blur-sm flex flex-col justify-between gap-2 overflow-visible ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-semibold text-green-400",
                                                children: "Player Timeline"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                lineNumber: 771,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "absolute inset-0 top-6 w-full h-full",
                                                viewBox: "0 0 600 120",
                                                preserveAspectRatio: "none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            id: playerPathId,
                                                            d: "M0,40 Q150,0 300,40 T 600,40",
                                                            fill: "none",
                                                            stroke: "#4ADE80"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                            lineNumber: 780,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                        lineNumber: 779,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("use", {
                                                        href: `#${playerPathId}`,
                                                        stroke: "#F2EB80",
                                                        strokeWidth: "2",
                                                        opacity: "0.3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                        lineNumber: 789,
                                                        columnNumber: 17
                                                    }, this),
                                                    playerEvents.slice(-10).map((event, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                                                                    dur: "10s",
                                                                    repeatCount: "1",
                                                                    rotate: "auto",
                                                                    begin: `${index * 0.5}s`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mpath", {
                                                                        href: `#${playerPathId}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                                        lineNumber: 805,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                                    lineNumber: 799,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    r: "12",
                                                                    fill: event.type === "attack" ? "#BF6A1F" : event.type === "defend" ? "#8C441B" : "#F2EB80",
                                                                    className: "animate-pulse"
                                                                }, event.id, false, {
                                                                    fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                                    lineNumber: 807,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                    y: "4",
                                                                    textAnchor: "middle",
                                                                    fontSize: "12",
                                                                    fill: "white",
                                                                    className: "font-bold",
                                                                    children: event.damage || ""
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                                    lineNumber: 819,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, event.id, true, {
                                                            fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                            lineNumber: 798,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                lineNumber: 774,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                        lineNumber: 767,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-20 w-full bg-gray-800 rounded-lg p-2 m-2 backdrop-blur-sm flex flex-col justify-between gap-2 overflow-visible ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-semibold text-red-400",
                                                children: "Enemy Timeline"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                lineNumber: 838,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "absolute inset-0 top-6 w-full h-full",
                                                viewBox: "0 0 600 120",
                                                preserveAspectRatio: "none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            id: enemyPathId,
                                                            d: "M0,40 Q150,0 300,40 T600,40",
                                                            fill: "none",
                                                            stroke: "#F87171"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                            lineNumber: 847,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                        lineNumber: 846,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("use", {
                                                        href: `#${enemyPathId}`,
                                                        stroke: "#F2EB80",
                                                        strokeWidth: "2",
                                                        opacity: "0.3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                        lineNumber: 856,
                                                        columnNumber: 17
                                                    }, this),
                                                    enemyEvents.slice(-10).map((event, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                                                                    dur: "10s",
                                                                    repeatCount: "1",
                                                                    rotate: "auto",
                                                                    begin: `${index * 0.5}s`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mpath", {
                                                                        href: `#${enemyPathId}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                                        lineNumber: 872,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                                    lineNumber: 866,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    r: "12",
                                                                    fill: event.type === "attack" ? "#BF6A1F" : event.type === "defend" ? "#8C441B" : "#F2EB80",
                                                                    className: "animate-pulse"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                                    lineNumber: 874,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                    y: "4",
                                                                    textAnchor: "middle",
                                                                    fontSize: "12",
                                                                    fill: "white",
                                                                    className: "font-bold",
                                                                    children: event.damage || ""
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                                    lineNumber: 885,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, event.id, true, {
                                                            fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                            lineNumber: 865,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                lineNumber: 841,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                        lineNumber: 834,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                lineNumber: 765,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full flex-1 flex flex-col lg:flex-row relative ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "puzzle",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full flex items-center justify-center p-6 bg-gray-800 rounded-xl shadow-inner",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid justify-items-center grid-cols-8 gap-2 lg:p-4 rounded-xl backdrop-blur-sm",
                                                children: [
                                                    predictionData && predictedMoves.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-2 left-1/2 transform -translate-x-1/2 bg-white/80 text-black px-3 py-1 rounded-md shadow z-50 text-sm font-medium",
                                                        children: [
                                                            "🔥 ",
                                                            predictionData.damage,
                                                            " DMG, 💧 +",
                                                            predictionData.mpGain,
                                                            " MP, x",
                                                            predictionData.comboCount,
                                                            " ",
                                                            "Combo"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                        lineNumber: 907,
                                                        columnNumber: 21
                                                    }, this),
                                                    grid.map((row, rowIndex)=>row.map((piece, colIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `
    relative w-8 h-8 lg:w-14 lg:h-14 rounded-lg cursor-pointer transition-all duration-300 transform
    ${selectedPiece?.id === piece.id ? "ring-4 ring-[#F2EB80] scale-110 z-10" : ""}
    ${piece.isMatched ? "scale-0 opacity-0" : "scale-100 opacity-100"}
    hover:scale-105 active:scale-95
  `,
                                                                style: {
                                                                    backgroundColor: PIECE_COLORS[piece.type],
                                                                    boxShadow: "0 0 4px rgba(0,0,0,0.3)"
                                                                },
                                                                onClick: ()=>handlePieceClick(piece),
                                                                onMouseEnter: ()=>handlePieceHover(piece),
                                                                onMouseLeave: ()=>handlePieceHover(null),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-full h-full flex items-center justify-center text-2xl select-none",
                                                                        children: [
                                                                            piece.type === "fire" && "🔥",
                                                                            piece.type === "water" && "💧",
                                                                            piece.type === "earth" && "🌍",
                                                                            piece.type === "air" && "💨",
                                                                            piece.type === "light" && "✨",
                                                                            piece.type === "dark" && "🌙"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                                        lineNumber: 935,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    piece.comboGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute -top-2 -right-2 w-6 h-6 bg-[#F2EB80] rounded-full flex items-center justify-center text-xs font-bold text-[#401A04]",
                                                                        children: piece.comboGroup
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                                        lineNumber: 946,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    predictedMoves.find((p)=>p.id === piece.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute inset-0 bg-white/70 rounded-lg z-10 flex items-center justify-center text-xs font-bold text-neutral-900 pointer-events-none",
                                                                        children: "Match?"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                                        lineNumber: 953,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, piece.id, true, {
                                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                                lineNumber: 915,
                                                                columnNumber: 23
                                                            }, this)))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                lineNumber: 905,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                            lineNumber: 904,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                        lineNumber: 903,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden lg:block w-1 h-full hover:bg-[#8C441B] cursor-ew-resize transition-colors relative",
                                        onMouseDown: ()=>setIsDraggingSplitter(true),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-16 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-1 h-full bg-[#F2EB80] opacity-50"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                lineNumber: 970,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                            lineNumber: 969,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                        lineNumber: 965,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "abilities",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: " p-6 h-full w-full bg-gray-800 lg:overflow-y-auto rounded-xl shadow-inner",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-[#F2EB80] mb-6",
                                                    children: "Abilities"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                    lineNumber: 977,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-6",
                                                    children: abilities.map((ability)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `
                    p-4 lg:p-6 bg-gradient-to-r from-[#401A04] to-[#8C441B] hover:from-[#8C441B] hover:to-[#BF6A1F] rounded-lg cursor-pointer
                    transition-all duration-300 transform hover:scale-105
                    ${ability.currentCooldown > 0 || displayGameState.playerMP < ability.cost ? "opacity-50 cursor-not-allowed" : ""}
                  `,
                                                            onClick: ()=>{
                                                                useAbility(ability);
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-3xl",
                                                                                children: ability.icon
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                                                lineNumber: 1000,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                        className: "text-[#F2EB80] text-lg font-semibold mb-2",
                                                                                        children: ability.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                                                        lineNumber: 1002,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs font-semibold text-white",
                                                                                        children: ability.damage > 0 ? `${ability.damage} DMG` : `${-ability.damage} HEAL`
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                                                        lineNumber: 1005,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                                                lineNumber: 1001,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                                        lineNumber: 999,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-right",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[#F2EB80] text-sm font-semibold",
                                                                                children: [
                                                                                    ability.cost,
                                                                                    " MP"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                                                lineNumber: 1013,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            ability.currentCooldown > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-white/70 text-xs",
                                                                                children: [
                                                                                    "CD: ",
                                                                                    ability.currentCooldown,
                                                                                    "s"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                                                lineNumber: 1017,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                                        lineNumber: 1012,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                                lineNumber: 998,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, ability.id, false, {
                                                            fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                            lineNumber: 982,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                    lineNumber: 980,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                            lineNumber: 976,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                        lineNumber: 975,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                lineNumber: 901,
                                columnNumber: 11
                            }, this),
                            (displayGameState.playerHP <= 0 || displayGameState.enemyHP <= 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black/80 flex items-center justify-center backdrop-blur-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-[#401A04] to-[#8C441B] p-8 rounded-2xl text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl font-bold text-[#F2EB80] mb-4",
                                            children: displayGameState.playerHP <= 0 ? "Game Over" : "Victory!"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                            lineNumber: 1035,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl text-white mb-6",
                                            children: [
                                                "Final Score: ",
                                                displayGameState.score
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                            lineNumber: 1038,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: resetGame,
                                            className: "px-8 py-3 bg-[#F2EB80] hover:bg-[#BF6A1F] text-[#401A04] hover:text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105",
                                            children: "Play Again"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                            lineNumber: 1041,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                    lineNumber: 1034,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                lineNumber: 1033,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                        lineNumber: 653,
                        columnNumber: 9
                    }, this),
                    replayMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/50 flex items-center justify-center z-50 pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#F2EB80] text-xl font-semibold",
                            children: "Replaying..."
                        }, void 0, false, {
                            fileName: "[project]/app/components/PuzzleBattle4.tsx",
                            lineNumber: 1053,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                        lineNumber: 1052,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                lineNumber: 652,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = PuzzleBattleGame;
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else {
                "TURBOPACK unreachable";
            }
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__8f9f34f3._.js.map