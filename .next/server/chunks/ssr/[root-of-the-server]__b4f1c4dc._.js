module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/components/MathVisualizer.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/controls/OrbitControls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$ParametricGeometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/geometries/ParametricGeometry.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// Color constants from the palette
const COLORS = {
    darkestPurple: "#3A0519",
    mediumPurple: "#670D2F",
    primaryPink: "#A53860",
    lightPink: "#EF88AD",
    darkBg: "#111111",
    lightText: "#F9F9F9"
};
// Helper function for debouncing
function debounce(func, delay) {
    let timeoutId = null;
    return (...args)=>{
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(()=>{
            func(...args);
        }, delay);
    };
}
// Helper function to parse and compile user-defined equations
// It's important to note that using 'new Function' can be a security risk if the code is not from a trusted source.
// For a desktop app where the user is inputting their own equations, this risk is somewhat mitigated.
const compileFunction = (argNames, expression)=>{
    try {
        const wrappedExpression = `
      with (Math) {
        try {
          return ${expression};
        } catch (e) {
          console.error('Error in user expression:', e);
          return NaN;
        }
      }
    `;
        // Args to the generated function will be: ...argValues, Math object
        // The 'with(Math)' statement makes Math functions (sin, cos, etc.) directly available.
        const func = new Function(...argNames, wrappedExpression);
        return (...argValues)=>{
            const result = func(...argValues);
            return typeof result === "number" ? result : NaN;
        };
    } catch (error) {
        console.error("Equation compilation error:", error);
        return null;
    }
};
const MathVisualizerApp = ()=>{
    const mountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cameraRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const controlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const surfaceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [equationType, setEquationType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("explicit");
    const [explicitEquation, setExplicitEquation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("sin(sqrt(x*x + y*y) + a) / (sqrt(x*x + y*y) + a)");
    const [parametricEquations, setParametricEquations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: "u * cos(v*2*PI + t)",
        y: "u * sin(v*2*PI + t)",
        z: "0.3 * v * sin(a*u*PI) + b * u*u"
    });
    const [parameters, setParameters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        a: {
            value: 1,
            min: -5,
            max: 5,
            step: 0.01
        },
        b: {
            value: 0.5,
            min: -5,
            max: 5,
            step: 0.01
        },
        c: {
            value: 1,
            min: -5,
            max: 5,
            step: 0.01
        },
        t: {
            value: 0,
            min: 0,
            max: Math.PI * 2,
            step: 0.01
        }
    });
    const [domainExplicit, setDomainExplicit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        xMin: -10,
        xMax: 10,
        yMin: -10,
        yMax: 10
    });
    const [domainParametric, setDomainParametric] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        uMin: 0,
        uMax: 2,
        vMin: 0,
        vMax: 1
    });
    const [segments, setSegments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(60);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showError, setShowError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [diffEqX, setDiffEqX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("y");
    const [diffEqY, setDiffEqY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("-x");
    const currentParamValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            a: parameters.a.value,
            b: parameters.b.value,
            c: parameters.c.value,
            t: parameters.t.value
        }), [
        parameters
    ]);
    // Debounced function to update the surface
    const regenerateSurface = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(debounce(()=>{
        if (!sceneRef.current) return;
        setErrorMessage(null);
        setShowError(false);
        let geometry = null;
        const { a, b, c, t } = currentParamValues;
        try {
            if (equationType === "differential") {
                return;
            }
            if (equationType === "explicit") {
                const funcZ = compileFunction([
                    "x",
                    "y",
                    "a",
                    "b",
                    "c",
                    "t"
                ], explicitEquation);
                if (!funcZ) {
                    setErrorMessage("Error compiling Z(x,y) equation.");
                    setShowError(true);
                    return;
                }
                const surfaceFunction = (x01, y01, target)=>{
                    const x = domainExplicit.xMin + x01 * (domainExplicit.xMax - domainExplicit.xMin);
                    const y = domainExplicit.yMin + y01 * (domainExplicit.yMax - domainExplicit.yMin);
                    let z = funcZ(x, y, a, b, c, t);
                    if (!isFinite(z)) z = 0; // Fallback for invalid results
                    target.set(x, y, z);
                };
                geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$ParametricGeometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParametricGeometry"](surfaceFunction, segments, segments);
            } else {
                // Parametric
                const funcX = compileFunction([
                    "u",
                    "v",
                    "a",
                    "b",
                    "c",
                    "t"
                ], parametricEquations.x);
                const funcY = compileFunction([
                    "u",
                    "v",
                    "a",
                    "b",
                    "c",
                    "t"
                ], parametricEquations.y);
                const funcZ = compileFunction([
                    "u",
                    "v",
                    "a",
                    "b",
                    "c",
                    "t"
                ], parametricEquations.z);
                if (!funcX || !funcY || !funcZ) {
                    setErrorMessage("Error compiling one or more parametric equations.");
                    setShowError(true);
                    return;
                }
                const surfaceFunction = (u01, v01, target)=>{
                    const u = domainParametric.uMin + u01 * (domainParametric.uMax - domainParametric.uMin);
                    const v = domainParametric.vMin + v01 * (domainParametric.vMax - domainParametric.vMin);
                    let x = funcX(u, v, a, b, c, t);
                    let y = funcY(u, v, a, b, c, t);
                    let z = funcZ(u, v, a, b, c, t);
                    if (!isFinite(x)) x = 0;
                    if (!isFinite(y)) y = 0;
                    if (!isFinite(z)) z = 0;
                    target.set(u, v, z); // This is for explicit, need to fix for parametric
                    target.set(x, y, z);
                };
                geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$ParametricGeometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParametricGeometry"](surfaceFunction, segments, segments);
            }
            if (geometry) {
                geometry.computeBoundingBox();
                const { min, max } = geometry.boundingBox;
                const zRange = max.z - min.z;
                const colors = new Float32Array(geometry.attributes.position.count * 3);
                for(let i = 0; i < geometry.attributes.position.count; i++){
                    const z = geometry.attributes.position.getZ(i);
                    const normalizedZ = zRange > 0.001 ? (z - min.z) / zRange : 0.5; // Avoid division by zero
                    // Color mapping: Blue (low Z) -> Green (mid Z) -> Red (high Z)
                    const color = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]();
                    if (normalizedZ < 0.5) {
                        color.setHSL(0.66 - normalizedZ * 2 * 0.33, 0.8, 0.5); // Blue to Green
                    } else {
                        color.setHSL(0.33 - (normalizedZ - 0.5) * 2 * 0.33, 0.8, 0.5); // Green to Red
                    }
                    colors[i * 3] = color.r;
                    colors[i * 3 + 1] = color.g;
                    colors[i * 3 + 2] = color.b;
                }
                geometry.setAttribute("color", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferAttribute"](colors, 3));
                if (surfaceRef.current) {
                    sceneRef.current.remove(surfaceRef.current);
                    surfaceRef.current.geometry.dispose();
                    surfaceRef.current.material.dispose();
                }
                const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]({
                    side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"],
                    vertexColors: true,
                    shininess: 50
                });
                surfaceRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](geometry, material);
                sceneRef.current.add(surfaceRef.current);
            }
        } catch (error) {
            console.error("Error generating surface:", error);
            setErrorMessage(`Runtime error in equation: ${error instanceof Error ? error.message : String(error)}`);
            setShowError(true);
        }
    }, 250), [
        equationType,
        explicitEquation,
        parametricEquations,
        currentParamValues,
        domainExplicit,
        domainParametric,
        segments
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mountRef.current) return;
        // Scene setup
        sceneRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"]();
        sceneRef.current.background = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](COLORS.darkBg);
        // Camera setup
        cameraRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerspectiveCamera"](75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
        cameraRef.current.position.set(5, 5, 5);
        cameraRef.current.lookAt(0, 0, 0);
        // Renderer setup
        rendererRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
            antialias: true,
            preserveDrawingBuffer: true
        });
        rendererRef.current.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        rendererRef.current.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(rendererRef.current.domElement);
        // Lights
        const ambientLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmbientLight"](0xffffff, 0.6);
        sceneRef.current.add(ambientLight);
        const directionalLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectionalLight"](0xffffff, 0.8);
        directionalLight.position.set(5, 10, 7.5);
        sceneRef.current.add(directionalLight);
        // Controls
        controlsRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrbitControls"](cameraRef.current, rendererRef.current.domElement);
        controlsRef.current.enableDamping = true;
        controlsRef.current.dampingFactor = 0.05;
        // Initial surface generation
        regenerateSurface();
        // Animation loop
        const animate = ()=>{
            animationFrameIdRef.current = requestAnimationFrame(animate);
            controlsRef.current?.update();
            rendererRef.current?.render(sceneRef.current, cameraRef.current);
        };
        animate();
        // Handle resize
        const handleResize = ()=>{
            if (mountRef.current && rendererRef.current && cameraRef.current) {
                const width = mountRef.current.clientWidth;
                const height = mountRef.current.clientHeight;
                rendererRef.current.setSize(width, height);
                cameraRef.current.aspect = width / height;
                cameraRef.current.updateProjectionMatrix();
            }
        };
        window.addEventListener("resize", handleResize);
        // Cleanup
        return ()=>{
            window.removeEventListener("resize", handleResize);
            if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
            if (surfaceRef.current) {
                surfaceRef.current.geometry.dispose();
                surfaceRef.current.material.dispose();
            }
            controlsRef.current?.dispose();
            rendererRef.current?.dispose();
            if (mountRef.current && rendererRef.current?.domElement) {
                mountRef.current.removeChild(rendererRef.current.domElement);
            }
        };
    }, []); // Empty dependency array for one-time setup
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        regenerateSurface();
    }, [
        regenerateSurface
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (equationType !== "differential") return;
        if (!sceneRef.current) return;
        // Clear previous vector field or surface
        if (surfaceRef.current) {
            sceneRef.current.remove(surfaceRef.current);
            surfaceRef.current.geometry.dispose();
            surfaceRef.current.material.dispose();
            surfaceRef.current = null;
        }
        const fX = compileFunction([
            "x",
            "y"
        ], diffEqX);
        const fY = compileFunction([
            "x",
            "y"
        ], diffEqY);
        if (!fX || !fY) return;
        const group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        const spacing = 1;
        const arrowLength = 0.8;
        for(let x = -10; x <= 10; x += spacing){
            for(let y = -10; y <= 10; y += spacing){
                const dx = fX(x, y);
                const dy = fY(x, y);
                const len = Math.sqrt(dx * dx + dy * dy);
                if (!isFinite(len) || len === 0) continue;
                const dir = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](dx, dy, 0).normalize();
                const origin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](x, y, 0);
                const arrow = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowHelper"](dir, origin, arrowLength, 0xffff00);
                group.add(arrow);
            }
        }
        sceneRef.current.add(group);
        return ()=>{
            sceneRef.current?.remove(group);
        };
    }, [
        equationType,
        diffEqX,
        diffEqY
    ]);
    const handleParameterChange = (paramName, value)=>{
        setParameters((prev)=>({
                ...prev,
                [paramName]: {
                    ...prev[paramName],
                    value
                }
            }));
    };
    const handleDomainChange = (type, field, value)=>{
        if (type === "explicit") {
            setDomainExplicit((prev)=>({
                    ...prev,
                    [field]: value
                }));
        } else {
            setDomainParametric((prev)=>({
                    ...prev,
                    [field]: value
                }));
        }
    };
    const exportPNG = ()=>{
        if (rendererRef.current) {
            const dataURL = rendererRef.current.domElement.toDataURL("image/png");
            const link = document.createElement("a");
            link.download = "surface_visualization.png";
            link.href = dataURL;
            link.click();
        }
    };
    const exportJSON = ()=>{
        const data = {
            equationType,
            explicitEquation: equationType === "explicit" ? explicitEquation : undefined,
            parametricEquations: equationType === "parametric" ? parametricEquations : undefined,
            parameters,
            domainExplicit: equationType === "explicit" ? domainExplicit : undefined,
            domainParametric: equationType === "parametric" ? domainParametric : undefined,
            segments
        };
        const jsonString = JSON.stringify(data, null, 2);
        const blob = new Blob([
            jsonString
        ], {
            type: "application/json"
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = "surface_configuration.json";
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
    };
    const resetCamera = ()=>{
        if (cameraRef.current && controlsRef.current) {
            cameraRef.current.position.set(5, 5, 5);
            cameraRef.current.lookAt(0, 0, 0);
            controlsRef.current.target.set(0, 0, 0);
            controlsRef.current.update();
        }
    };
    // Style for glasmorphic effect (Tailwind compatible)
    // Closest Tailwind Color Matches
    /*
'#A53860' = pink-800 (primaryPink)
'#EF88AD' = pink-400 (lightPink)
'#3A0519' = rose-950 (darkestPurple)
'#670D2F' = pink-950 (mediumPurple)
'#111111' = neutral-900 (darkBg)
'#F9F9F9' = stone-500 (lightText)
*/ const glassBackgroundClass = `
  relative 
  min-h-screen 
  bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900
  overflow-hidden 
  text-black
`;
    const glassPanelClass = "bg-rose-950/40 backdrop-blur-lg shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-xl p-4";
    const inputClass = "bg-pink-950 border border-pink-800 text-white rounded px-2 py-1 w-full focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none";
    const buttonClass = `
  relative
  text-white font-semibold 
  py-2 px-4 
  rounded 
  backdrop-blur-md 
  border-none
  bg-gradient-to-r from-pink-400/30 to-pink-800/30
  bg-[length:200%_100%]
  bg-left 
  transition-all duration-300 ease-out 
  hover:bg-right 
  shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]
  cursor-pointer
`;
    const labelClass = "block text-sm font-medium text-pink-400 mb-1";
    const sliderClass = "w-full h-2 bg-stone-500 opacity-40 rounded-lg appearance-none cursor-pointer accent-pink-400";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex h-screen w-screen bg[#111111] text-[#F9F9F9] font-sans overflow-hidden",
        style: {
            background: "#111111"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${glassBackgroundClass} w-1/3 max-w-md h-full overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-pink-800 scrollbar-track-rose-950`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-20 -left-20 w-96 h-96 bg-pink-400 rounded-full filter blur-3xl opacity-10 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/app/components/MathVisualizer.tsx",
                        lineNumber: 564,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-40 right-10 w-80 h-80 bg-purple-400 rounded-full filter blur-2xl opacity-10 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/app/components/MathVisualizer.tsx",
                        lineNumber: 565,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-10 left-1/3 w-72 h-72 bg-blue-400 rounded-full filter blur-2xl opacity-10 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/app/components/MathVisualizer.tsx",
                        lineNumber: 566,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${glassPanelClass} space-y-4`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-center text-pink-400",
                                children: "3D Surface Visualizer"
                            }, void 0, false, {
                                fileName: "[project]/app/components/MathVisualizer.tsx",
                                lineNumber: 569,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: labelClass,
                                        children: "Equation Type"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/MathVisualizer.tsx",
                                        lineNumber: 575,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex space-x-4",
                                        children: [
                                            "explicit",
                                            "parametric",
                                            "differential"
                                        ].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setEquationType(type),
                                                className: `${buttonClass} flex-1 ${equationType === type ? `bg-pink-400 ring-2 ring-white` : `bg-pink-800 opacity-70`}`,
                                                children: type.charAt(0).toUpperCase() + type.slice(1)
                                            }, type, false, {
                                                fileName: "[project]/app/components/MathVisualizer.tsx",
                                                lineNumber: 580,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/MathVisualizer.tsx",
                                        lineNumber: 576,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/MathVisualizer.tsx",
                                lineNumber: 574,
                                columnNumber: 11
                            }, this),
                            equationType === "explicit" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "explicitEq",
                                        className: labelClass,
                                        children: "Z = f(x, y, a, b, c, t)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/MathVisualizer.tsx",
                                        lineNumber: 598,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        id: "explicitEq",
                                        value: explicitEquation,
                                        onChange: (e)=>setExplicitEquation(e.target.value),
                                        className: `${inputClass} h-20 resize-y font-mono text-sm`,
                                        placeholder: "e.g., sin(x*a) + cos(y*b)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/MathVisualizer.tsx",
                                        lineNumber: 601,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/MathVisualizer.tsx",
                                lineNumber: 597,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "paramX",
                                                className: labelClass,
                                                children: "X = f(u, v, a, b, c, t)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/MathVisualizer.tsx",
                                                lineNumber: 612,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "paramX",
                                                value: parametricEquations.x,
                                                onChange: (e)=>setParametricEquations((p)=>({
                                                            ...p,
                                                            x: e.target.value
                                                        })),
                                                className: `${inputClass} font-mono text-sm`
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/MathVisualizer.tsx",
                                                lineNumber: 615,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/MathVisualizer.tsx",
                                        lineNumber: 611,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "paramY",
                                                className: labelClass,
                                                children: "Y = f(u, v, a, b, c, t)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/MathVisualizer.tsx",
                                                lineNumber: 626,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "paramY",
                                                value: parametricEquations.y,
                                                onChange: (e)=>setParametricEquations((p)=>({
                                                            ...p,
                                                            y: e.target.value
                                                        })),
                                                className: `${inputClass} font-mono text-sm`
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/MathVisualizer.tsx",
                                                lineNumber: 629,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/MathVisualizer.tsx",
                                        lineNumber: 625,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "paramZ",
                                                className: labelClass,
                                                children: "Z = f(u, v, a, b, c, t)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/MathVisualizer.tsx",
                                                lineNumber: 640,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "paramZ",
                                                value: parametricEquations.z,
                                                onChange: (e)=>setParametricEquations((p)=>({
                                                            ...p,
                                                            z: e.target.value
                                                        })),
                                                className: `${inputClass} font-mono text-sm`
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/MathVisualizer.tsx",
                                                lineNumber: 643,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/MathVisualizer.tsx",
                                        lineNumber: 639,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/MathVisualizer.tsx",
                                lineNumber: 610,
                                columnNumber: 13
                            }, this),
                            equationType === "differential" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${glassPanelClass} space-y-4`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-pink-400",
                                        children: "Vector Field"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/MathVisualizer.tsx",
                                        lineNumber: 659,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: labelClass,
                                                children: "dx/dt ="
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/MathVisualizer.tsx",
                                                lineNumber: 663,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: diffEqX,
                                                onChange: (e)=>setDiffEqX(e.target.value),
                                                className: inputClass
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/MathVisualizer.tsx",
                                                lineNumber: 664,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/MathVisualizer.tsx",
                                        lineNumber: 662,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: labelClass,
                                                children: "dy/dt ="
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/MathVisualizer.tsx",
                                                lineNumber: 672,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: diffEqY,
                                                onChange: (e)=>setDiffEqY(e.target.value),
                                                className: inputClass
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/MathVisualizer.tsx",
                                                lineNumber: 673,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/MathVisualizer.tsx",
                                        lineNumber: 671,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/MathVisualizer.tsx",
                                lineNumber: 658,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-pink-400 opacity-80",
                                children: "Use common Math functions like sin, cos, sqrt, pow, PI, etc. Parameters a, b, c, t are available."
                            }, void 0, false, {
                                fileName: "[project]/app/components/MathVisualizer.tsx",
                                lineNumber: 683,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/MathVisualizer.tsx",
                        lineNumber: 568,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${glassPanelClass} space-y-4`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-pink-400",
                                children: "Parameters"
                            }, void 0, false, {
                                fileName: "[project]/app/components/MathVisualizer.tsx",
                                lineNumber: 691,
                                columnNumber: 11
                            }, this),
                            Object.entries(parameters).map(([key, param])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: `param-${key}`,
                                            className: labelClass,
                                            children: `${key.toUpperCase()}: ${param.value.toFixed(2)}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/MathVisualizer.tsx",
                                            lineNumber: 694,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            id: `param-${key}`,
                                            min: param.min,
                                            max: param.max,
                                            step: param.step,
                                            value: param.value,
                                            onChange: (e)=>handleParameterChange(key, parseFloat(e.target.value)),
                                            className: sliderClass
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/MathVisualizer.tsx",
                                            lineNumber: 698,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, key, true, {
                                    fileName: "[project]/app/components/MathVisualizer.tsx",
                                    lineNumber: 693,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/MathVisualizer.tsx",
                        lineNumber: 690,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${glassPanelClass} space-y-4`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-pink-400",
                                children: "Domain & Resolution"
                            }, void 0, false, {
                                fileName: "[project]/app/components/MathVisualizer.tsx",
                                lineNumber: 716,
                                columnNumber: 11
                            }, this),
                            (equationType === "explicit" ? [
                                "x",
                                "y"
                            ] : [
                                "u",
                                "v"
                            ]).map((axis)=>{
                                const minKey = `${axis}Min`;
                                const maxKey = `${axis}Max`;
                                const isExplicit = equationType === "explicit";
                                const domain = isExplicit ? domainExplicit : domainParametric;
                                const handleChange = (key, value)=>{
                                    if (equationType === "explicit" || equationType === "parametric") {
                                        handleDomainChange(equationType, key, value);
                                    }
                                };
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: labelClass,
                                            children: [
                                                axis.toUpperCase(),
                                                " Range:",
                                                " ",
                                                domain[minKey].toFixed(1),
                                                " ",
                                                "to",
                                                " ",
                                                domain[maxKey].toFixed(1)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/MathVisualizer.tsx",
                                            lineNumber: 738,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: -100,
                                                    max: domain[maxKey],
                                                    step: "0.1",
                                                    value: domain[minKey],
                                                    onChange: (e)=>handleChange(minKey, parseFloat(e.target.value)),
                                                    className: sliderClass + " flex-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/MathVisualizer.tsx",
                                                    lineNumber: 745,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: domain[minKey],
                                                    max: 100,
                                                    step: "0.1",
                                                    value: domain[maxKey],
                                                    onChange: (e)=>handleChange(maxKey, parseFloat(e.target.value)),
                                                    className: sliderClass + " flex-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/MathVisualizer.tsx",
                                                    lineNumber: 756,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/MathVisualizer.tsx",
                                            lineNumber: 744,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, axis, true, {
                                    fileName: "[project]/app/components/MathVisualizer.tsx",
                                    lineNumber: 737,
                                    columnNumber: 17
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "segments",
                                        className: labelClass,
                                        children: [
                                            "Segments: ",
                                            segments
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/MathVisualizer.tsx",
                                        lineNumber: 774,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        id: "segments",
                                        min: "10",
                                        max: "200",
                                        step: "1",
                                        value: segments,
                                        onChange: (e)=>setSegments(parseInt(e.target.value)),
                                        className: sliderClass
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/MathVisualizer.tsx",
                                        lineNumber: 777,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/MathVisualizer.tsx",
                                lineNumber: 773,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/MathVisualizer.tsx",
                        lineNumber: 715,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${glassPanelClass} space-y-3`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-pink-400",
                                children: "Actions"
                            }, void 0, false, {
                                fileName: "[project]/app/components/MathVisualizer.tsx",
                                lineNumber: 792,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: resetCamera,
                                className: `${buttonClass} w-full`,
                                children: "Reset Camera"
                            }, void 0, false, {
                                fileName: "[project]/app/components/MathVisualizer.tsx",
                                lineNumber: 793,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: exportPNG,
                                className: `${buttonClass} w-full`,
                                children: "Export as PNG"
                            }, void 0, false, {
                                fileName: "[project]/app/components/MathVisualizer.tsx",
                                lineNumber: 796,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: exportJSON,
                                className: `${buttonClass} w-full`,
                                children: "Export as JSON"
                            }, void 0, false, {
                                fileName: "[project]/app/components/MathVisualizer.tsx",
                                lineNumber: 799,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/MathVisualizer.tsx",
                        lineNumber: 791,
                        columnNumber: 9
                    }, this),
                    showError && errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg max-w-sm z-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold",
                                        children: "Error"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/MathVisualizer.tsx",
                                        lineNumber: 807,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowError(false),
                                        className: "text-xl font-bold",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/MathVisualizer.tsx",
                                        lineNumber: 808,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/MathVisualizer.tsx",
                                lineNumber: 806,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm",
                                children: errorMessage
                            }, void 0, false, {
                                fileName: "[project]/app/components/MathVisualizer.tsx",
                                lineNumber: 815,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/MathVisualizer.tsx",
                        lineNumber: 805,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/MathVisualizer.tsx",
                lineNumber: 561,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: mountRef,
                className: "w-2/3 h-full relative outline-none",
                tabIndex: 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${glassPanelClass} absolute bottom-4 right-4 text-sm flex flex-col items-start justify-center gap-2 z-50 shadow-none`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Scroll to zoom in/out"
                        }, void 0, false, {
                            fileName: "[project]/app/components/MathVisualizer.tsx",
                            lineNumber: 830,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Left-click and drag to pan"
                        }, void 0, false, {
                            fileName: "[project]/app/components/MathVisualizer.tsx",
                            lineNumber: 831,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Right-click and drag to move"
                        }, void 0, false, {
                            fileName: "[project]/app/components/MathVisualizer.tsx",
                            lineNumber: 832,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/MathVisualizer.tsx",
                    lineNumber: 827,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/MathVisualizer.tsx",
                lineNumber: 821,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/MathVisualizer.tsx",
        lineNumber: 559,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = MathVisualizerApp;
 // To make this runnable in a typical React project:
 // 1. Ensure you have `react`, `react-dom`, `three`, `@types/three` installed.
 // 2. Set up Tailwind CSS in your project. The classes used here depend on that setup.
 //    Make sure your `tailwind.config.js` content array includes this file's path.
 //    The custom colors and rgba values should be compatible with Tailwind JIT mode.
 //    For scrollbar styling, you might need a plugin like `tailwind-scrollbar`.
 // 3. Import and render MathVisualizerApp in your main application file (e.g., App.tsx or index.tsx).
 //    Example:
 //    import ReactDOM from 'react-dom/client';
 //    import MathVisualizerApp from './MathVisualizerApp'; // Adjust path as needed
 //    import './index.css'; // Your main CSS file with Tailwind directives
 //
 //    ReactDOM.createRoot(document.getElementById('root')!).render(
 //      <React.StrictMode>
 //        <MathVisualizerApp />
 //      </React.StrictMode>
 //    );
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__b4f1c4dc._.js.map