(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/components/PuzzleBattle4.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const [grid, setGrid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedPiece, setSelectedPiece] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredPiece, setHoveredPiece] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [splitterPosition, setSplitterPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(70);
    const [isDraggingSplitter, setIsDraggingSplitter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [timelineEvents, setTimelineEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [abilities, setAbilities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        playerHP: 100,
        enemyHP: 100,
        playerMP: 50,
        turn: 1,
        combo: 0,
        score: 0
    });
    const [predictedMoves, setPredictedMoves] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [predictionData, setPredictionData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [replayMode, setReplayMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [replayHistory, setReplayHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentReplayIndex, setCurrentReplayIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const displayGameState = gameState ?? {
        playerHP: 100,
        enemyHP: 100,
        playerMP: 50,
        turn: 1,
        combo: 0,
        score: 0
    };
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timelineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseUpHandlerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PuzzleBattleGame.useEffect": ()=>{
            if (isDraggingSplitter) {
                mouseUpHandlerRef.current = ({
                    "PuzzleBattleGame.useEffect": ()=>setIsDraggingSplitter(false)
                })["PuzzleBattleGame.useEffect"];
                document.addEventListener("mouseup", mouseUpHandlerRef.current);
                return ({
                    "PuzzleBattleGame.useEffect": ()=>{
                        if (mouseUpHandlerRef.current) {
                            document.removeEventListener("mouseup", mouseUpHandlerRef.current);
                        }
                    }
                })["PuzzleBattleGame.useEffect"];
            }
        }
    }["PuzzleBattleGame.useEffect"], [
        isDraggingSplitter
    ]);
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
    const handleSplitterDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PuzzleBattleGame.useCallback[handleSplitterDrag]": (e)=>{
            if (!isDraggingSplitter || !containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = x / rect.width * 100;
            setSplitterPosition(Math.min(Math.max(percentage, 30), 85));
        }
    }["PuzzleBattleGame.useCallback[handleSplitterDrag]"], [
        isDraggingSplitter
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PuzzleBattleGame.useEffect": ()=>{
            if (isDraggingSplitter) {
                document.addEventListener("mousemove", handleSplitterDrag);
                document.addEventListener("mouseup", {
                    "PuzzleBattleGame.useEffect": ()=>setIsDraggingSplitter(false)
                }["PuzzleBattleGame.useEffect"]);
                return ({
                    "PuzzleBattleGame.useEffect": ()=>{
                        document.removeEventListener("mousemove", handleSplitterDrag);
                        document.removeEventListener("mouseup", {
                            "PuzzleBattleGame.useEffect": ()=>setIsDraggingSplitter(false)
                        }["PuzzleBattleGame.useEffect"]);
                    }
                })["PuzzleBattleGame.useEffect"];
            }
        }
    }["PuzzleBattleGame.useEffect"], [
        isDraggingSplitter,
        handleSplitterDrag
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PuzzleBattleGame.useEffect": ()=>{
            if (!replayMode || replayHistory.length === 0) return;
            const interval = setInterval({
                "PuzzleBattleGame.useEffect.interval": ()=>{
                    if (currentReplayIndex < replayHistory.length) {
                        const frame = replayHistory[currentReplayIndex];
                        setGrid(frame.grid);
                        setGameState(frame.gameState);
                        setCurrentReplayIndex({
                            "PuzzleBattleGame.useEffect.interval": (i)=>i + 1
                        }["PuzzleBattleGame.useEffect.interval"]);
                    } else {
                        setReplayMode(false);
                        setCurrentReplayIndex(0);
                        clearInterval(interval);
                    }
                }
            }["PuzzleBattleGame.useEffect.interval"], 800);
            return ({
                "PuzzleBattleGame.useEffect": ()=>clearInterval(interval)
            })["PuzzleBattleGame.useEffect"];
        }
    }["PuzzleBattleGame.useEffect"], [
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PuzzleBattleGame.useEffect": ()=>{
            const cooldownTimer = setInterval({
                "PuzzleBattleGame.useEffect.cooldownTimer": ()=>{
                    setAbilities({
                        "PuzzleBattleGame.useEffect.cooldownTimer": (prev)=>prev.map({
                                "PuzzleBattleGame.useEffect.cooldownTimer": (a)=>({
                                        ...a,
                                        currentCooldown: Math.max(0, a.currentCooldown - 1)
                                    })
                            }["PuzzleBattleGame.useEffect.cooldownTimer"])
                    }["PuzzleBattleGame.useEffect.cooldownTimer"]);
                }
            }["PuzzleBattleGame.useEffect.cooldownTimer"], 1000);
            return ({
                "PuzzleBattleGame.useEffect": ()=>clearInterval(cooldownTimer)
            })["PuzzleBattleGame.useEffect"];
        }
    }["PuzzleBattleGame.useEffect"], []);
    const playerPathId = `timeline-path-player`;
    const enemyPathId = `timeline-path-enemy`;
    const playerEvents = timelineEvents.filter((e)=>e.target === "player");
    const enemyEvents = timelineEvents.filter((e)=>e.target === "enemy");
    const Bars3 = (props)=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            width: "2rem",
            height: "2rem",
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative lg:min-h-screen w-screen bg-gray-700 flex items-center justify-center p-4 overflow-auto lg:overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: containerRef,
                        className: "lg:w-[1600px] lg:h-[calc(100vh-30px)] bg-gray-900 rounded-2xl shadow-2xl backdrop-blur-md flex flex-col lg:overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-r from-[#260801] to-[#401A04] p-4 flex justify-between items-center rounded-tr-2xl rounded-tl-2xl ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#F2EB80] via-[#BF6A1F] to-red-500 bg-clip-text text-transparent",
                                                children: "Puzzle Battle"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                lineNumber: 661,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 md:gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sm:hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setMenuOpen(!menuOpen),
                                                className: "text-[#F2EB80] p-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Bars3, {}, void 0, false, {
                                                    fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                    lineNumber: 683,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                lineNumber: 679,
                                                columnNumber: 15
                                            }, this),
                                            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-16 right-4 bg-[#401A04] rounded-lg shadow-lg flex flex-col gap-2 p-4 z-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden sm:flex gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleReplayToggle,
                                                className: "px-4 py-2 bg-[#8C441B] hover:bg-[#BF6A1F] text-white rounded-lg transition",
                                                children: replayMode ? "Exit Replay" : "View Replay"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                lineNumber: 711,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 flex flex-col md:flex-row justify-center gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 bg-gray-800 rounded-lg p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#F2EB80] font-semibold",
                                                        children: "Player"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                        lineNumber: 730,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-4 bg-black/40 rounded-full overflow-hidden mb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-2 bt-2 bg-black/40 rounded-full overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 bg-gray-800 rounded-lg p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#F2EB80] font-semibold",
                                                        children: "Enemy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                        lineNumber: 750,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-4 bg-black/40 rounded-full overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 flex gap-4 justify-center space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-20 w-full bg-gray-800 rounded-lg p-2 m-2 backdrop-blur-sm flex flex-col justify-between gap-2 overflow-visible ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-semibold text-green-400",
                                                children: "Player Timeline"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                lineNumber: 771,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "absolute inset-0 top-6 w-full h-full",
                                                viewBox: "0 0 600 120",
                                                preserveAspectRatio: "none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("use", {
                                                        href: `#${playerPathId}`,
                                                        stroke: "#F2EB80",
                                                        strokeWidth: "2",
                                                        opacity: "0.3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                        lineNumber: 789,
                                                        columnNumber: 17
                                                    }, this),
                                                    playerEvents.slice(-10).map((event, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                                                                    dur: "10s",
                                                                    repeatCount: "1",
                                                                    rotate: "auto",
                                                                    begin: `${index * 0.5}s`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mpath", {
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    r: "12",
                                                                    fill: event.type === "attack" ? "#BF6A1F" : event.type === "defend" ? "#8C441B" : "#F2EB80",
                                                                    className: "animate-pulse"
                                                                }, event.id, false, {
                                                                    fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                                    lineNumber: 807,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-20 w-full bg-gray-800 rounded-lg p-2 m-2 backdrop-blur-sm flex flex-col justify-between gap-2 overflow-visible ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-semibold text-red-400",
                                                children: "Enemy Timeline"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                lineNumber: 838,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "absolute inset-0 top-6 w-full h-full",
                                                viewBox: "0 0 600 120",
                                                preserveAspectRatio: "none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("use", {
                                                        href: `#${enemyPathId}`,
                                                        stroke: "#F2EB80",
                                                        strokeWidth: "2",
                                                        opacity: "0.3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                        lineNumber: 856,
                                                        columnNumber: 17
                                                    }, this),
                                                    enemyEvents.slice(-10).map((event, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                                                                    dur: "10s",
                                                                    repeatCount: "1",
                                                                    rotate: "auto",
                                                                    begin: `${index * 0.5}s`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mpath", {
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    r: "12",
                                                                    fill: event.type === "attack" ? "#BF6A1F" : event.type === "defend" ? "#8C441B" : "#F2EB80",
                                                                    className: "animate-pulse"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                                    lineNumber: 874,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full flex-1 flex flex-col lg:flex-row relative ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "puzzle",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full flex items-center justify-center p-6 bg-gray-800 rounded-xl shadow-inner",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid justify-items-center grid-cols-8 gap-2 lg:p-4 rounded-xl backdrop-blur-sm",
                                                children: [
                                                    predictionData && predictedMoves.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    grid.map((row, rowIndex)=>row.map((piece, colIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                    piece.comboGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute -top-2 -right-2 w-6 h-6 bg-[#F2EB80] rounded-full flex items-center justify-center text-xs font-bold text-[#401A04]",
                                                                        children: piece.comboGroup
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                                        lineNumber: 946,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    predictedMoves.find((p)=>p.id === piece.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden lg:block w-1 h-full hover:bg-[#8C441B] cursor-ew-resize transition-colors relative",
                                        onMouseDown: ()=>setIsDraggingSplitter(true),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-16 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "abilities",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: " p-6 h-full w-full bg-gray-800 lg:overflow-y-auto rounded-xl shadow-inner",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-[#F2EB80] mb-6",
                                                    children: "Abilities"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                    lineNumber: 977,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-6",
                                                    children: abilities.map((ability)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `
                    p-4 lg:p-6 bg-gradient-to-r from-[#401A04] to-[#8C441B] hover:from-[#8C441B] hover:to-[#BF6A1F] rounded-lg cursor-pointer
                    transition-all duration-300 transform hover:scale-105
                    ${ability.currentCooldown > 0 || displayGameState.playerMP < ability.cost ? "opacity-50 cursor-not-allowed" : ""}
                  `,
                                                            onClick: _s1(()=>{
                                                                _s1();
                                                                useAbility(ability);
                                                            }, "F3bX94StzMGnCFytE4/0MpoNfKg=", false, function() {
                                                                return [
                                                                    useAbility
                                                                ];
                                                            }),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-3xl",
                                                                                children: ability.icon
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                                                lineNumber: 1000,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                        className: "text-[#F2EB80] text-lg font-semibold mb-2",
                                                                                        children: ability.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                                                                        lineNumber: 1002,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-right",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                            ability.currentCooldown > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            (displayGameState.playerHP <= 0 || displayGameState.enemyHP <= 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black/80 flex items-center justify-center backdrop-blur-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-[#401A04] to-[#8C441B] p-8 rounded-2xl text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl font-bold text-[#F2EB80] mb-4",
                                            children: displayGameState.playerHP <= 0 ? "Game Over" : "Victory!"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/PuzzleBattle4.tsx",
                                            lineNumber: 1035,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    replayMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/50 flex items-center justify-center z-50 pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_s(PuzzleBattleGame, "7zKv4oKFCeDiMpZGBec/zYg08qM=");
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

//# sourceMappingURL=_daa419fb._.js.map