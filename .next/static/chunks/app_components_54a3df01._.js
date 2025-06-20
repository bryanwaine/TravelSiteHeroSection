(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/components/TravelMap.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Marker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const TravelMap = ({ destinations, isMobile, setSelectedDestination, setMobileBookingVisible, setDisplayBookingSummary, setDisplayBookingForm, setDisplayPaymentForm, setDisplaySuccessMessage })=>{
    _s();
    var _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
    const [hoveredDestination, setHoveredDestination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const videoRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const customIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
        className: "",
        html: `
        <div class="relative w-12 h-12 ">
          <!-- Pulsating background -->
          <div class="absolute top-[-20px] left-[-10px] w-10 h-10 bg-[#6FA638]/30 rounded-full animate-ping"></div>
    
          <!-- Location pin -->
          <div class="absolute top-[-15px] left-[-5px] w-8 h-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#6FA638" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg></div>
        </div>
      `,
        iconSize: [
            24,
            24
        ],
        iconAnchor: [
            12,
            12
        ]
    });
    const center = [
        20,
        0
    ];
    const FitBoundsOnMobile = ({ positions })=>{
        _s1();
        const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "TravelMap.FitBoundsOnMobile.useEffect": ()=>{
                if (window.innerWidth <= 768 && positions.length) {
                    const bounds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].latLngBounds(positions);
                    map.fitBounds(bounds, {
                        padding: [
                            30,
                            30
                        ],
                        animate: true
                    });
                }
            }
        }["TravelMap.FitBoundsOnMobile.useEffect"], [
            map,
            positions
        ]);
        return null;
    };
    _s1(FitBoundsOnMobile, "IoceErwr5KVGS9kN4RQ1bOkYMAg=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
        ];
    });
    function CreateLeafletPane({ name, zIndex = 800 }) {
        _s2();
        const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "TravelMap.CreateLeafletPane.useEffect": ()=>{
                if (!map.getPane(name)) {
                    map.createPane(name);
                }
                const pane = map.getPane(name);
                if (pane) {
                    pane.style.zIndex = zIndex.toString();
                }
            }
        }["TravelMap.CreateLeafletPane.useEffect"], [
            map,
            name,
            zIndex
        ]);
        return null;
    }
    _s2(CreateLeafletPane, "IoceErwr5KVGS9kN4RQ1bOkYMAg=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
        ];
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
        center: center,
        zoom: 2,
        scrollWheelZoom: true,
        className: " !relative !w-full !h-full !z-0 !rounded-3xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                attribution: '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
                url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            }, void 0, false, {
                fileName: "[project]/app/components/TravelMap.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CreateLeafletPane, {
                name: "tooltipPane",
                zIndex: 8000000000000
            }, void 0, false, {
                fileName: "[project]/app/components/TravelMap.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            destinations.map((dest, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                    position: dest.position,
                    icon: customIcon,
                    eventHandlers: {
                        click: ()=>{
                            setSelectedDestination(dest);
                            if (isMobile) {
                                setMobileBookingVisible(true);
                                setDisplayBookingSummary(true);
                                setDisplayBookingForm(false);
                                setDisplayPaymentForm(false);
                                setDisplaySuccessMessage(false);
                            }
                        },
                        mouseover: ()=>{
                            setHoveredDestination(dest.id);
                            if (videoRefs.current[dest.id]) {
                                videoRefs.current[dest.id].play();
                            }
                        },
                        mouseout: ()=>{
                            setHoveredDestination(null);
                            if (videoRefs.current[dest.id]) {
                                videoRefs.current[dest.id].pause();
                                videoRefs.current[dest.id].currentTime = 0;
                            }
                        }
                    },
                    children: hoveredDestination === dest.id && !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        pane: "tooltipPane",
                        permanent: true,
                        direction: dest.direction === "top" ? "top" : "bottom",
                        offset: [
                            0,
                            dest.direction === "top" ? -25 : 5
                        ],
                        interactive: true,
                        opacity: 1,
                        className: "!p-0 !bg-transparent !border-0 !shadow-none !z-[99999999]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-30 md:w-64 bg-white rounded-2xl shadow-lg overflow-hidden animate-scale-in !z-[99999999]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    ref: (el)=>{
                                        if (el) videoRefs.current[dest.id] = el;
                                    },
                                    className: "w-full h-15 md:h-32 object-cover rounded-t-2xl",
                                    src: dest.video,
                                    autoPlay: true,
                                    muted: true,
                                    loop: true,
                                    playsInline: true
                                }, void 0, false, {
                                    fileName: "[project]/app/components/TravelMap.tsx",
                                    lineNumber: 164,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-1 px-2 md:p-4 ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-[#3D592F] text-xs md:text-lg",
                                            children: dest.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TravelMap.tsx",
                                            lineNumber: 176,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#658C3E] text-[10px] md:text-sm",
                                            children: dest.country
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TravelMap.tsx",
                                            lineNumber: 179,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden md:flex items-center justify-between mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#5EA4BF] font-semibold",
                                                    children: [
                                                        "$",
                                                        dest.price
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/TravelMap.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-500",
                                                    children: dest.duration
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelMap.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/TravelMap.tsx",
                                            lineNumber: 182,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/TravelMap.tsx",
                                    lineNumber: 175,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/TravelMap.tsx",
                            lineNumber: 163,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/TravelMap.tsx",
                        lineNumber: 154,
                        columnNumber: 13
                    }, this)
                }, i, false, {
                    fileName: "[project]/app/components/TravelMap.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FitBoundsOnMobile, {
                positions: destinations.map((d)=>d.position)
            }, void 0, false, {
                fileName: "[project]/app/components/TravelMap.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TravelMap.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
};
_s(TravelMap, "W4QqceyE0gk0NnAAUQ2zY2AG6Ss=");
_c = TravelMap;
const __TURBOPACK__default__export__ = TravelMap;
var _c;
__turbopack_context__.k.register(_c, "TravelMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/TravelHeroSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @next/next/no-img-element */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-client] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$rain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudRain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-rain.js [app-client] (ecmascript) <export default as CloudRain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wind.js [app-client] (ecmascript) <export default as Wind>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thermometer.js [app-client] (ecmascript) <export default as Thermometer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$swipeable$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-swipeable/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TravelMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/TravelMap.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const destinations = [
    {
        id: 1,
        name: "Santorini",
        country: "Greece",
        price: 2499,
        duration: "7 days",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800",
        video: "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/SEcSCp_lol7ukts6n/videoblocks-emerald-pool-water-with-moonlight-reflection-at-empty-pool-deck-chairs-002_hwt3zs2yn__108247d4da72f36ba2b01f748cc0a2e3__P360.mp4",
        position: [
            36.3932,
            25.4615
        ],
        direction: "bottom",
        description: "Experience the magical sunsets and white-washed buildings",
        highlights: [
            "Sunset Views",
            "Wine Tasting",
            "Beach Activities"
        ],
        temperature: 28
    },
    {
        id: 2,
        name: "Bali",
        country: "Indonesia",
        price: 1899,
        duration: "10 days",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
        video: "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/GTYSdDW/tropical-maldives-beach-vacation-concept_vyursn3xl__fa26099cdcda0e6979b9d9e5cdb5524a__P360.mp4",
        position: [
            -8.3405,
            115.092
        ],
        direction: "top",
        description: "Discover temples, rice terraces, and pristine beaches",
        highlights: [
            "Temple Tours",
            "Ocean Surfing",
            "Rice Terraces"
        ],
        temperature: 31
    },
    {
        id: 3,
        name: "Machu Picchu",
        country: "Peru",
        price: 3299,
        duration: "5 days",
        image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800",
        video: "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/B3pWIDoVol9ur6byn/videoblocks-6426c7fb1831477418d6cb90_bedbokhzn__2a444d97951ea9c23f5511004caed0e8__P360.mp4",
        position: [
            -13.1631,
            -72.545
        ],
        direction: "top",
        description: "Trek to the ancient Incan citadel in the clouds",
        highlights: [
            "Inca Trail",
            "Historical Sites",
            "Mountain Views"
        ],
        temperature: 18
    },
    {
        id: 4,
        name: "Tokyo",
        country: "Japan",
        price: 2799,
        duration: "8 days",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
        video: "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/SYU8Luct1gm72azzir/japandrone46-3d83x8yts8__6e6c903dcdcb7fc66a392b77747fc99e__P360.mp4",
        position: [
            35.6895,
            139.6917
        ],
        direction: "bottom",
        description: "Blend of ancient traditions and futuristic technology",
        highlights: [
            "Cherry Blossoms",
            "Tech Districts",
            "Traditional Cuisine"
        ],
        temperature: 22
    }
];
const weatherTypes = [
    "sunny",
    "cloudy",
    "rainy",
    "windy"
];
const TravelHeroSection = ()=>{
    _s();
    const [selectedDestination, setSelectedDestination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentMobileIndex, setCurrentMobileIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [weather, setWeather] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("sunny");
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [displayBookingSummary, setDisplayBookingSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [displayPaymentForm, setDisplayPaymentForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [displayBookingForm, setDisplayBookingForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [displaySuccessMessage, setDisplaySuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bookingFormData, setBookingFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        fullName: "",
        email: ""
    });
    const [cardFormData, setCardFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        cardNumber: "",
        cardHolder: "",
        expiry: "",
        cvv: ""
    });
    const [mobileBookingVisible, setMobileBookingVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formErrors, setFormErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [cardErrors, setCardErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TravelHeroSection.useEffect": ()=>{
            const checkMobile = {
                "TravelHeroSection.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 768);
                }
            }["TravelHeroSection.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener("resize", checkMobile);
            // Random weather
            const weatherInterval = setInterval({
                "TravelHeroSection.useEffect.weatherInterval": ()=>{
                    setWeather(weatherTypes[Math.floor(Math.random() * weatherTypes.length)]);
                }
            }["TravelHeroSection.useEffect.weatherInterval"], 10000);
            // Intersection observer for animations
            const observer = new IntersectionObserver({
                "TravelHeroSection.useEffect": ([entry])=>{
                    setIsVisible(entry.isIntersecting);
                }
            }["TravelHeroSection.useEffect"], {
                threshold: 0.1
            });
            if (heroRef.current) {
                observer.observe(heroRef.current);
            }
            return ({
                "TravelHeroSection.useEffect": ()=>{
                    window.removeEventListener("resize", checkMobile);
                    clearInterval(weatherInterval);
                    observer.disconnect();
                }
            })["TravelHeroSection.useEffect"];
        }
    }["TravelHeroSection.useEffect"], []);
    const nextDestination = ()=>{
        if (destinations.length === 0) return;
        setCurrentMobileIndex((prev)=>(prev + 1) % destinations.length);
    };
    const prevDestination = ()=>{
        if (destinations.length === 0) return;
        setCurrentMobileIndex((prev)=>(prev - 1 + destinations.length) % destinations.length);
    };
    const swipeHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$swipeable$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwipeable"])({
        onSwipedLeft: nextDestination,
        onSwipedRight: prevDestination,
        preventScrollOnSwipe: true,
        trackTouch: true,
        trackMouse: false
    });
    const getWeatherIcon = ()=>{
        switch(weather){
            case "sunny":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                    className: "w-8 h-8"
                }, void 0, false, {
                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                    lineNumber: 189,
                    columnNumber: 16
                }, this);
            case "cloudy":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
                    className: "w-8 h-8"
                }, void 0, false, {
                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                    lineNumber: 191,
                    columnNumber: 16
                }, this);
            case "rainy":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$rain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudRain$3e$__["CloudRain"], {
                    className: "w-8 h-8"
                }, void 0, false, {
                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                    lineNumber: 193,
                    columnNumber: 16
                }, this);
            case "windy":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__["Wind"], {
                    className: "w-8 h-8"
                }, void 0, false, {
                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                    lineNumber: 195,
                    columnNumber: 16
                }, this);
        }
    };
    const getWeatherBackground = ()=>{
        switch(weather){
            case "sunny":
                return "from-yellow-400 via-cyan-500 to-[#5EA4BF]";
            case "cloudy":
                return "from-gray-400 via-gray-500 to-gray-600";
            case "rainy":
                return "from-gray-600 via-gray-700 to-gray-800";
            case "windy":
                return "from-gray-300 via-slate-400 to-sky-600";
        }
    };
    /**
   * Handle a change to an input in the booking form.
   *
   * This function is used as an `onChange` handler for the booking form inputs.
   * It takes an `ChangeEvent` from the input as an argument, extracts the `name`
   * and `value` from the event target, and updates the `bookingFormData` state
   * with the new value.
   * @param {React.ChangeEvent<HTMLInputElement>} e The input change event.
   */ const handleBookingInputChange = (e)=>{
        const { name, value } = e.target;
        setBookingFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    /**
   * Validate the booking form.
   *
   * @returns {boolean} Whether the form is valid.
   */ const validateForm = ()=>{
        const errors = {};
        const { fullName, email } = bookingFormData;
        if (!fullName || fullName.trim().length < 2) {
            errors.fullName = "Full name must be at least 2 characters.";
        }
        if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.trim())) {
            errors.email = "Please enter a valid email address.";
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };
    /**
   * Handle changes to input fields in the card form.
   *
   * This function is used as an `onChange` handler for input fields in the card form.
   * It extracts the `name` and `value` from the event target and updates the
   * `cardFormData` state with the new value.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
   */ const handleCardInputChange = (e)=>{
        const { name, value } = e.target;
        setCardFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    /*************  ✨ Windsurf Command ⭐  *************/ /**
   * Validate the card form.
   *
   * This function validates the card form fields and returns true if the form is valid, false otherwise.
   * It also updates the `cardErrors` state with validation errors.
   *
   * @returns {boolean} Whether the card form is valid.
   */ /*******  cdc71c13-7ef0-4df6-a12f-8df5d18ef07a  *******/ const validateCardForm = ()=>{
        const errors = {};
        const { cardNumber, cardHolder, expiry, cvv } = cardFormData;
        // Card Number
        if (!/^\d{16}$/.test(cardNumber)) {
            errors.cardNumber = "Card number must be 16 digits.";
        }
        // Card Holder
        if (cardHolder.trim().length < 2) {
            errors.cardHolder = "Card holder name is required.";
        }
        // Expiry
        if (!/^\d{2}\/\d{2}$/.test(expiry)) {
            errors.expiry = "Use MM/YY format.";
        } else {
            const [mm, yy] = expiry.split("/").map(Number);
            const now = new Date();
            const expDate = new Date(2000 + yy, mm - 1);
            if (isNaN(mm) || isNaN(yy) || mm < 1 || mm > 12 || expDate < new Date(now.getFullYear(), now.getMonth())) {
                errors.expiry = "Expiry date is invalid or in the past.";
            }
        }
        // CVV
        if (!/^\d{3,4}$/.test(cvv)) {
            errors.cvv = "CVV must be 3 or 4 digits.";
        }
        setCardErrors(errors);
        return Object.keys(errors).length === 0;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: heroRef,
        className: "jsx-28ef2b097008c205" + " " + "relative min-h-screen w-full overflow-hidden aspect-[2/1]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-28ef2b097008c205" + " " + `absolute inset-0 bg-gradient-to-br ${getWeatherBackground()} transition-all duration-3000`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-28ef2b097008c205" + " " + "absolute inset-0 bg-black/20"
                    }, void 0, false, {
                        fileName: "[project]/app/components/TravelHeroSection.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this),
                    weather === "rainy" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-28ef2b097008c205" + " " + "absolute inset-0 opacity-30",
                        children: [
                            ...Array(50)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    left: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 2}s`,
                                    animationDuration: `${0.5 + Math.random() * 0.5}s`
                                },
                                className: "jsx-28ef2b097008c205" + " " + "absolute h-10 w-0.5 bg-blue-200 animate-rain !z-999999"
                            }, i, false, {
                                fileName: "[project]/app/components/TravelHeroSection.tsx",
                                lineNumber: 333,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/TravelHeroSection.tsx",
                        lineNumber: 331,
                        columnNumber: 11
                    }, this),
                    weather === "windy" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-28ef2b097008c205" + " " + "absolute inset-0 overflow-hidden opacity-30",
                        children: [
                            ...Array(60)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    top: `${Math.random() * 100}%`,
                                    left: `-${Math.random() * 50 + 10}%`,
                                    animationDelay: `${Math.random() * 4}s`,
                                    animationDuration: `${2 + Math.random() * 3}s`
                                },
                                className: "jsx-28ef2b097008c205" + " " + "absolute w-100 h-0.5 bg-white/10 animate-wind !z-999999"
                            }, i, false, {
                                fileName: "[project]/app/components/TravelHeroSection.tsx",
                                lineNumber: 348,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/TravelHeroSection.tsx",
                        lineNumber: 346,
                        columnNumber: 11
                    }, this),
                    weather === "cloudy" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-28ef2b097008c205" + " " + "absolute inset-0 overflow-hidden opacity-50",
                        children: [
                            ...Array(8)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    top: `${Math.random() * 80}%`,
                                    left: `-${Math.random() * 40 + 10}%`,
                                    width: `${80 + Math.random() * 100}px`,
                                    height: `${40 + Math.random() * 60}px`,
                                    animationDelay: `${Math.random() * 6}s`,
                                    animationDuration: `${20 + Math.random() * 10}s`
                                },
                                className: "jsx-28ef2b097008c205" + " " + "absolute bg-white/50 rounded-full blur-lg animate-cloud !z-999999"
                            }, i, false, {
                                fileName: "[project]/app/components/TravelHeroSection.tsx",
                                lineNumber: 364,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/TravelHeroSection.tsx",
                        lineNumber: 362,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/TravelHeroSection.tsx",
                lineNumber: 326,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-28ef2b097008c205" + " " + "absolute inset-0 opacity-20 z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-28ef2b097008c205" + " " + "relative w-full h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            alt: "Hot Air Baloons in the sky",
                            className: "jsx-28ef2b097008c205" + " " + " map-bg w-full h-full object-cover "
                        }, void 0, false, {
                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                            lineNumber: 383,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/TravelHeroSection.tsx",
                        lineNumber: 382,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 100 100",
                        preserveAspectRatio: "none",
                        className: "jsx-28ef2b097008c205" + " " + "w-full h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                            id: "grid",
                            width: "10",
                            height: "10",
                            patternUnits: "userSpaceOnUse",
                            className: "jsx-28ef2b097008c205",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 10 0 L 0 0 0 10",
                                fill: "none",
                                stroke: "white",
                                strokeWidth: "0.5",
                                className: "jsx-28ef2b097008c205"
                            }, void 0, false, {
                                fileName: "[project]/app/components/TravelHeroSection.tsx",
                                lineNumber: 400,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                            lineNumber: 394,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/TravelHeroSection.tsx",
                        lineNumber: 389,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/TravelHeroSection.tsx",
                lineNumber: 381,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-28ef2b097008c205" + " " + "absolute top-2 md:top-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-2 md:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.04)] z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-28ef2b097008c205" + " " + "flex items-center gap-3 text-[#3D592F]",
                    children: [
                        getWeatherIcon(),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-28ef2b097008c205",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-28ef2b097008c205" + " " + "text-xs font-medium opacity-70",
                                    children: "Current Weather"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                    lineNumber: 414,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-28ef2b097008c205" + " " + "text-sm md:text-lg font-bold capitalize",
                                    children: weather
                                }, void 0, false, {
                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                    lineNumber: 415,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                            lineNumber: 413,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                    lineNumber: 411,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/TravelHeroSection.tsx",
                lineNumber: 410,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "jsx-28ef2b097008c205" + " " + "relative z-20 mt-14 md:mt-0 p-6 md:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "jsx-28ef2b097008c205" + " " + `text-4xl w-full lg:text-5xl font-bold text-white mb-2 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`,
                        children: "Discover Your Next Adventure"
                    }, void 0, false, {
                        fileName: "[project]/app/components/TravelHeroSection.tsx",
                        lineNumber: 421,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-28ef2b097008c205" + " " + `text-md md:text-xl text-white ${isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"}`,
                        children: "Explore handpicked destinations around the world"
                    }, void 0, false, {
                        fileName: "[project]/app/components/TravelHeroSection.tsx",
                        lineNumber: 428,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/TravelHeroSection.tsx",
                lineNumber: 420,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-28ef2b097008c205" + " " + "map-container relative w-full h-[50%] rounded-3xl flex justify-center items-center px-8 pb-4 z-20 animate-fade-in-up",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-28ef2b097008c205" + " " + "interactive-map relative w-full h-full lg:shadow-[0_12px_40px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.04 rounded-3xl bg-white/90 bg-transparent",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-28ef2b097008c205" + " " + "w-full h-full !overflow-visible rounded-3xl shadow-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TravelMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            destinations: destinations,
                            isMobile: false,
                            setSelectedDestination: setSelectedDestination,
                            setMobileBookingVisible: setMobileBookingVisible,
                            setDisplayBookingSummary: setDisplayBookingSummary,
                            setDisplayBookingForm: setDisplayBookingForm,
                            setDisplayPaymentForm: setDisplayPaymentForm,
                            setDisplaySuccessMessage: setDisplaySuccessMessage
                        }, void 0, false, {
                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                            lineNumber: 440,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/TravelHeroSection.tsx",
                        lineNumber: 439,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                    lineNumber: 438,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/TravelHeroSection.tsx",
                lineNumber: 437,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-28ef2b097008c205" + " " + `absolute bottom-0 left-0 right-0 p-6 md:p-8 ${isVisible ? "animate-slide-up" : "translate-y-full"}`,
                children: isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ...swipeHandlers,
                    className: "jsx-28ef2b097008c205" + " " + (swipeHandlers && swipeHandlers.className != null && swipeHandlers.className || "relative"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-28ef2b097008c205" + " " + "overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    transform: `translateX(-${currentMobileIndex * 100}%)`
                                },
                                className: "jsx-28ef2b097008c205" + " " + "flex transition-transform duration-300 ease-out",
                                children: destinations.map((dest)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-28ef2b097008c205" + " " + `w-full flex-shrink-0 px-4`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-28ef2b097008c205" + " " + "bg-white/95 backdrop-blur-md rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.04)] overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: dest.image,
                                                    alt: dest.name,
                                                    className: "jsx-28ef2b097008c205" + " " + " destination-image w-full h-40 object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 472,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-28ef2b097008c205" + " " + "destination-content p-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-28ef2b097008c205" + " " + "flex items-center justify-between mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-28ef2b097008c205",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "jsx-28ef2b097008c205" + " " + "destination-title text-2xl font-bold text-[#3D592F]",
                                                                            children: dest.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                                            lineNumber: 480,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "jsx-28ef2b097008c205" + " " + "destination-location text-[#658C3E]",
                                                                            children: dest.country
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                                            lineNumber: 483,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                                    lineNumber: 479,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-28ef2b097008c205" + " " + "flex items-center gap-2 text-[#5EA4BF]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                                            lineNumber: 488,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-28ef2b097008c205" + " " + "font-medium",
                                                                            children: [
                                                                                dest.temperature,
                                                                                "°C"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                                            lineNumber: 489,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                                    lineNumber: 487,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 478,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-28ef2b097008c205" + " " + "destination-description text-gray-600 mb-4",
                                                            children: dest.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 494,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-28ef2b097008c205" + " " + "flex flex-wrap gap-2 mb-4",
                                                            children: dest.highlights.map((highlight, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-28ef2b097008c205" + " " + "destination-highlight px-3 py-1 bg-[#6FA638]/10 text-[#658C3E] rounded-full text-sm",
                                                                    children: highlight
                                                                }, i, false, {
                                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                                    lineNumber: 499,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 497,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-28ef2b097008c205" + " " + "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-28ef2b097008c205",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-28ef2b097008c205" + " " + "text-2xl font-bold text-[#5EA4BF]",
                                                                            children: [
                                                                                "$",
                                                                                dest.price
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                                            lineNumber: 509,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-28ef2b097008c205" + " " + "text-gray-500 text-xs ml-2",
                                                                            children: dest.duration
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                                            lineNumber: 512,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                                    lineNumber: 508,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        setSelectedDestination(dest);
                                                                        setMobileBookingVisible(true);
                                                                        setDisplayBookingSummary(true);
                                                                        setDisplayBookingForm(false);
                                                                        setDisplayPaymentForm(false);
                                                                        setDisplaySuccessMessage(false);
                                                                    },
                                                                    className: "jsx-28ef2b097008c205" + " " + "px-6 py-3 bg-gradient-to-r from-[#5EA4BF] to-[#6FA638] text-white rounded-2xl font-medium hover:shadow-lg transition-all duration-300",
                                                                    children: "Book Now"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                                    lineNumber: 516,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 507,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 477,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 471,
                                            columnNumber: 21
                                        }, this)
                                    }, dest.id, false, {
                                        fileName: "[project]/app/components/TravelHeroSection.tsx",
                                        lineNumber: 470,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/TravelHeroSection.tsx",
                                lineNumber: 463,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                            lineNumber: 462,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: prevDestination,
                            className: "jsx-28ef2b097008c205" + " " + "absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/70 rounded-full shadow-lg flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "w-5 h-5 text-[#3D592F]"
                            }, void 0, false, {
                                fileName: "[project]/app/components/TravelHeroSection.tsx",
                                lineNumber: 541,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                            lineNumber: 537,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: nextDestination,
                            className: "jsx-28ef2b097008c205" + " " + "absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/70 rounded-full shadow-lg flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-5 h-5 text-[#3D592F]"
                            }, void 0, false, {
                                fileName: "[project]/app/components/TravelHeroSection.tsx",
                                lineNumber: 547,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                            lineNumber: 543,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-28ef2b097008c205" + " " + "flex justify-center gap-2 mt-4",
                            children: destinations.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCurrentMobileIndex(index),
                                    className: "jsx-28ef2b097008c205" + " " + `w-2 h-2 rounded-full transition-all duration-300 ${index === currentMobileIndex ? "w-8 bg-[#5EA4BF]" : "bg-white/50"}`
                                }, index, false, {
                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                    lineNumber: 552,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                            lineNumber: 550,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                    lineNumber: 461,
                    columnNumber: 11
                }, this) : // Desktop Grid View
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-28ef2b097008c205" + " " + "grid grid-cols-4 gap-6",
                    children: destinations.map((dest, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                animationDelay: `${index * 100}ms`
                            },
                            onClick: ()=>setSelectedDestination(dest),
                            className: "jsx-28ef2b097008c205" + " " + `bg-white/95 backdrop-blur-md rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.04)] overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15),0_8px_24px_rgba(0,0,0,0.08)] cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-28ef2b097008c205" + " " + "relative h-40 overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: dest.image,
                                            alt: dest.name,
                                            className: "jsx-28ef2b097008c205" + " " + "w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 579,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-28ef2b097008c205" + " " + "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 584,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-28ef2b097008c205" + " " + "absolute bottom-3 right-3 flex items-center gap-2 text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 586,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-28ef2b097008c205" + " " + "font-medium text-sm",
                                                    children: [
                                                        dest.temperature,
                                                        "°C"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 587,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 585,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                    lineNumber: 578,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-28ef2b097008c205" + " " + "p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-28ef2b097008c205" + " " + "text-xl font-bold text-[#3D592F] mb-1",
                                            children: dest.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 593,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-28ef2b097008c205" + " " + "text-[#658C3E] text-sm mb-3",
                                            children: dest.country
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 596,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-28ef2b097008c205" + " " + "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-28ef2b097008c205" + " " + "text-2xl font-bold text-[#5EA4BF]",
                                                    children: [
                                                        "$",
                                                        dest.price
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 598,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-28ef2b097008c205" + " " + "text-sm text-gray-500",
                                                    children: dest.duration
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 601,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 597,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                    lineNumber: 592,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, dest.id, true, {
                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                            lineNumber: 568,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                    lineNumber: 566,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/TravelHeroSection.tsx",
                lineNumber: 454,
                columnNumber: 7
            }, this),
            mobileBookingVisible && isMobile && selectedDestination && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-28ef2b097008c205" + " " + "fixed inset-0 bg-black/60 z-999 flex flex-col animate-modal-in overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-28ef2b097008c205" + " " + "relative bg-white rounded-t-3xl flex flex-col flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMobileBookingVisible(false),
                            className: "jsx-28ef2b097008c205" + " " + "absolute top-4 right-4 z-10 w-10 h-10 bg-white text-[#3D592F] rounded-full shadow-md flex items-center justify-center",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                            lineNumber: 614,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-28ef2b097008c205" + " " + "h-48 w-full relative",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: selectedDestination.image,
                                alt: selectedDestination.name,
                                className: "jsx-28ef2b097008c205" + " " + "w-full h-full object-cover md:rounded-t-3xl"
                            }, void 0, false, {
                                fileName: "[project]/app/components/TravelHeroSection.tsx",
                                lineNumber: 621,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                            lineNumber: 620,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-28ef2b097008c205" + " " + "p-6 space-y-6",
                            children: [
                                displayBookingSummary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-28ef2b097008c205" + " " + "animate-fade-in-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "jsx-28ef2b097008c205" + " " + "text-2xl font-bold text-[#3D592F] mb-1",
                                            children: selectedDestination.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 631,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-28ef2b097008c205" + " " + "text-[#658C3E] mb-2",
                                            children: selectedDestination.country
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 634,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-28ef2b097008c205" + " " + "text-gray-600 mb-4",
                                            children: selectedDestination.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 637,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-28ef2b097008c205" + " " + "mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-28ef2b097008c205" + " " + "text-lg font-semibold text-[#3D592F] mb-2",
                                                    children: "Highlights"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 641,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-28ef2b097008c205" + " " + "flex flex-wrap gap-2",
                                                    children: selectedDestination.highlights.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-28ef2b097008c205" + " " + "px-3 py-1 bg-[#6FA638]/10 text-[#658C3E] rounded-full text-sm",
                                                            children: h
                                                        }, i, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 646,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 644,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 640,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setDisplayBookingSummary(false);
                                                setDisplayBookingForm(true);
                                            },
                                            className: "jsx-28ef2b097008c205" + " " + "w-full mt-6 py-3 bg-gradient-to-r from-[#5EA4BF] to-[#6FA638] text-white rounded-2xl font-medium text-lg",
                                            children: "Book This Experience"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 655,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                    lineNumber: 630,
                                    columnNumber: 17
                                }, this),
                                displayBookingForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: (e)=>{
                                        e.preventDefault();
                                        if (validateForm()) {
                                            setDisplayBookingForm(false);
                                            setDisplayPaymentForm(true);
                                        }
                                    },
                                    className: "jsx-28ef2b097008c205" + " " + "animate-fade-in-up space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-28ef2b097008c205" + " " + "text-xl font-semibold text-[#3D592F]",
                                            children: "Your Details"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 678,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-28ef2b097008c205",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "fullName",
                                                    className: "jsx-28ef2b097008c205" + " " + "text-[#3D592F]",
                                                    children: "Full Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 682,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    name: "fullName",
                                                    type: "text",
                                                    value: bookingFormData.fullName,
                                                    onChange: handleBookingInputChange,
                                                    placeholder: "Full Name",
                                                    className: "jsx-28ef2b097008c205" + " " + `w-full px-4 py-2 rounded border text-[#3D592F] ${formErrors.fullName ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#5EA4BF]"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 685,
                                                    columnNumber: 21
                                                }, this),
                                                formErrors.fullName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-28ef2b097008c205" + " " + "text-sm text-red-500",
                                                    children: formErrors.fullName
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 698,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 681,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-28ef2b097008c205",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "email",
                                                    className: "jsx-28ef2b097008c205" + " " + "text-[#3D592F]",
                                                    children: "Email Address"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 704,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    name: "email",
                                                    type: "email",
                                                    value: bookingFormData.email,
                                                    onChange: handleBookingInputChange,
                                                    placeholder: "Email Address",
                                                    className: "jsx-28ef2b097008c205" + " " + `w-full px-4 py-2 rounded border text-[#3D592F] ${formErrors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#5EA4BF]"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 707,
                                                    columnNumber: 21
                                                }, this),
                                                formErrors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-28ef2b097008c205" + " " + "text-sm text-red-500",
                                                    children: formErrors.email
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 720,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 703,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-28ef2b097008c205" + " " + "flex gap-3 mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setDisplayBookingSummary(true);
                                                        setDisplayBookingForm(false);
                                                    },
                                                    className: "jsx-28ef2b097008c205" + " " + "w-1/2 py-3 bg-gray-200 text-gray-800 rounded-2xl font-medium hover:bg-gray-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer",
                                                    children: "Back"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 724,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "jsx-28ef2b097008c205" + " " + "w-1/2 py-3 bg-gradient-to-r from-[#5EA4BF] to-[#6FA638] text-white rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer",
                                                    children: "Continue"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 734,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 723,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                    lineNumber: 668,
                                    columnNumber: 17
                                }, this),
                                displayPaymentForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: (e)=>{
                                        e.preventDefault();
                                        if (validateCardForm()) {
                                            setLoading(true);
                                            setTimeout(()=>{
                                                setLoading(false);
                                                setDisplayPaymentForm(false);
                                                setDisplaySuccessMessage(true);
                                            }, 2000);
                                        }
                                    },
                                    className: "jsx-28ef2b097008c205" + " " + "animate-fade-in-up space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-28ef2b097008c205" + " " + "text-xl font-semibold text-[#3D592F]",
                                            children: "Payment"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 759,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-28ef2b097008c205" + " " + "flex flex-col gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-28ef2b097008c205" + " " + " ",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-28ef2b097008c205" + " " + "text-[#3D592F]",
                                                            children: "Card Number"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 764,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            name: "cardNumber",
                                                            maxLength: 16,
                                                            value: cardFormData.cardNumber,
                                                            onChange: handleCardInputChange,
                                                            placeholder: "1234 5678 9012 3456",
                                                            className: "jsx-28ef2b097008c205" + " " + `mb-1 w-full px-4 py-2 rounded border text-[#3D592F] focus:outline-none focus:ring-2 ${cardErrors.cardNumber ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#5EA4BF]"}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 765,
                                                            columnNumber: 23
                                                        }, this),
                                                        cardErrors.cardNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-28ef2b097008c205" + " " + "text-sm text-red-500 mb-3",
                                                            children: cardErrors.cardNumber
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 779,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 763,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-28ef2b097008c205" + " " + "",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-28ef2b097008c205" + " " + "text-[#3D592F]",
                                                            children: "Card Holder"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 785,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            name: "cardHolder",
                                                            value: cardFormData.cardHolder,
                                                            onChange: handleCardInputChange,
                                                            placeholder: "Full Name",
                                                            className: "jsx-28ef2b097008c205" + " " + `mb-1 w-full px-4 py-2 rounded border text-[#3D592F] focus:outline-none focus:ring-2 ${cardErrors.cardHolder ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#5EA4BF]"}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 786,
                                                            columnNumber: 23
                                                        }, this),
                                                        cardErrors.cardHolder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-28ef2b097008c205" + " " + "text-sm text-red-500 mb-3",
                                                            children: cardErrors.cardHolder
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 799,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 784,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 762,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-28ef2b097008c205" + " " + "flex flex-col gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-28ef2b097008c205" + " " + "",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-28ef2b097008c205" + " " + "text-[#3D592F]",
                                                            children: "Expiry (MM/YY)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 807,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            name: "expiry",
                                                            maxLength: 5,
                                                            value: cardFormData.expiry,
                                                            onChange: handleCardInputChange,
                                                            placeholder: "MM/YY",
                                                            className: "jsx-28ef2b097008c205" + " " + `mb-1 w-full px-4 py-2 rounded border text-[#3D592F] focus:outline-none focus:ring-2 ${cardErrors.expiry ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#5EA4BF]"}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 808,
                                                            columnNumber: 23
                                                        }, this),
                                                        cardErrors.expiry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-28ef2b097008c205" + " " + "text-sm text-red-500 mb-3",
                                                            children: cardErrors.expiry
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 822,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 806,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-28ef2b097008c205" + " " + " ",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-28ef2b097008c205" + " " + "text-[#3D592F]",
                                                            children: "CVV"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 828,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            name: "cvv",
                                                            maxLength: 3,
                                                            value: cardFormData.cvv,
                                                            onChange: handleCardInputChange,
                                                            placeholder: "123",
                                                            className: "jsx-28ef2b097008c205" + " " + `mb-1 w-full px-4 py-2 rounded border text-[#3D592F] focus:outline-none focus:ring-2 ${cardErrors.cvv ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#5EA4BF]"}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 829,
                                                            columnNumber: 23
                                                        }, this),
                                                        cardErrors.cvv && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-28ef2b097008c205" + " " + "text-sm text-red-500 mb-3",
                                                            children: cardErrors.cvv
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 843,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 827,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 805,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-28ef2b097008c205" + " " + "flex justify-between gap-3 mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setDisplayBookingForm(true);
                                                        setDisplayPaymentForm(false);
                                                    },
                                                    className: "jsx-28ef2b097008c205" + " " + "w-1/2 py-3 bg-gray-200 text-gray-800 rounded-2xl font-medium hover:bg-gray-400 hover:shadow-xl  transition-all duration-300 transform hover:-translate-y-1 cursor-pointer",
                                                    children: "Back"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 850,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    disabled: loading,
                                                    className: "jsx-28ef2b097008c205" + " " + "w-1/2 py-3 bg-gradient-to-r from-[#5EA4BF] to-[#6FA638] text-white rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
                                                    children: loading ? "Processing..." : `Pay $${selectedDestination.price}`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 859,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 849,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                    lineNumber: 745,
                                    columnNumber: 17
                                }, this),
                                displaySuccessMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-28ef2b097008c205" + " " + "text-center animate-fade-in-up mt-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-28ef2b097008c205" + " " + "text-8xl text-green-600 mb-4 animate-bounce",
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 874,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-28ef2b097008c205" + " " + "text-2xl font-bold text-[#3D592F] mb-2",
                                            children: "Booking Confirmed!"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 877,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-28ef2b097008c205" + " " + "text-gray-600",
                                            children: "We've sent a confirmation to your email with details about your booking."
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 880,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-28ef2b097008c205" + " " + "text-gray-600",
                                            children: "Enjoy your trip!"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 884,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setSelectedDestination(null);
                                                setDisplayBookingSummary(true);
                                                setDisplayBookingForm(false);
                                                setDisplayPaymentForm(false);
                                                setDisplaySuccessMessage(false);
                                                setBookingFormData({
                                                    fullName: "",
                                                    email: ""
                                                });
                                                setCardFormData({
                                                    cardNumber: "",
                                                    cardHolder: "",
                                                    expiry: "",
                                                    cvv: ""
                                                });
                                                setFormErrors({});
                                            },
                                            className: "jsx-28ef2b097008c205" + " " + "mt-6 px-6 py-2 bg-[#6FA638] text-white rounded-lg",
                                            children: "Close"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 885,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                    lineNumber: 873,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                            lineNumber: 628,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                    lineNumber: 613,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/TravelHeroSection.tsx",
                lineNumber: 612,
                columnNumber: 9
            }, this),
            selectedDestination && !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setSelectedDestination(null),
                className: "jsx-28ef2b097008c205" + " " + "fixed inset-0 bg-black/60 backdrop-blur-sm z-999 flex items-center justify-center p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: (e)=>e.stopPropagation(),
                    className: "jsx-28ef2b097008c205" + " " + "bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-[0_24px_80px_rgba(0,0,0,0.2),0_8px_32px_rgba(0,0,0,0.1)] animate-modal-in",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-28ef2b097008c205" + " " + "relative h-64 md:h-80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: selectedDestination.image,
                                    alt: selectedDestination.name,
                                    className: "jsx-28ef2b097008c205" + " " + "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                    lineNumber: 925,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setSelectedDestination(null);
                                        setDisplayBookingSummary(true);
                                        setDisplayBookingForm(false);
                                        setDisplayPaymentForm(false);
                                        setDisplaySuccessMessage(false);
                                        setBookingFormData({
                                            fullName: "",
                                            email: ""
                                        });
                                        setCardFormData({
                                            cardNumber: "",
                                            cardHolder: "",
                                            expiry: "",
                                            cvv: ""
                                        });
                                        setFormErrors({});
                                    },
                                    className: "jsx-28ef2b097008c205" + " " + "absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors text-xl text-[#3D592F] cursor-pointer shadow-md ",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                    lineNumber: 930,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                            lineNumber: 924,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-28ef2b097008c205" + " " + "p-8",
                            children: [
                                displayBookingSummary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-28ef2b097008c205" + " " + "animate-fade-in-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-28ef2b097008c205" + " " + "flex items-center justify-between mb-6 ",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-28ef2b097008c205",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "jsx-28ef2b097008c205" + " " + "text-4xl font-bold text-[#3D592F] mb-2",
                                                            children: selectedDestination.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 959,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-28ef2b097008c205" + " " + "text-xl text-[#658C3E]",
                                                            children: selectedDestination.country
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 962,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 958,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-28ef2b097008c205" + " " + "text-right",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-28ef2b097008c205" + " " + "text-4xl font-bold text-[#5EA4BF]",
                                                            children: [
                                                                "$",
                                                                selectedDestination.price
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 967,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-28ef2b097008c205" + " " + "text-gray-500",
                                                            children: selectedDestination.duration
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 970,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 966,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 957,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-28ef2b097008c205" + " " + "text-gray-600 text-lg mb-6",
                                            children: selectedDestination.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 975,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-28ef2b097008c205" + " " + "mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-28ef2b097008c205" + " " + "text-xl font-semibold text-[#3D592F] mb-4",
                                                    children: "Highlights"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 979,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-28ef2b097008c205" + " " + "flex flex-wrap gap-3",
                                                    children: selectedDestination.highlights.map((highlight, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-28ef2b097008c205" + " " + "px-4 py-2 bg-[#6FA638]/10 text-[#658C3E] rounded-full",
                                                            children: highlight
                                                        }, i, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 984,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 982,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 978,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setDisplayBookingSummary(false);
                                                setDisplayBookingForm(true);
                                            },
                                            className: "jsx-28ef2b097008c205" + " " + "w-full py-4 bg-gradient-to-r from-[#5EA4BF] to-[#6FA638] text-white rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer",
                                            children: "Book This Experience"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 993,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                    lineNumber: 956,
                                    columnNumber: 17
                                }, this),
                                displayBookingForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: (e)=>{
                                        e.preventDefault();
                                        if (validateForm()) {
                                            setDisplayBookingForm(false);
                                            setDisplayPaymentForm(true);
                                        }
                                    },
                                    className: "jsx-28ef2b097008c205" + " " + "w-full shrink-0 px-4 animate-fade-in-up space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-28ef2b097008c205" + " " + "text-xl font-semibold text-[#3D592F] mb-4",
                                            children: "Your Details"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 1016,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-28ef2b097008c205",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "fullName",
                                                    className: "jsx-28ef2b097008c205" + " " + "text-[#3D592F]",
                                                    children: "Full Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 1020,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "fullName",
                                                    name: "fullName",
                                                    type: "text",
                                                    value: bookingFormData.fullName,
                                                    onChange: handleBookingInputChange,
                                                    placeholder: "Full Name",
                                                    className: "jsx-28ef2b097008c205" + " " + `mb-1 w-full px-4 py-2 rounded border text-[#3D592F] focus:outline-none focus:ring-2 ${formErrors.fullName ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#5EA4BF]"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 1023,
                                                    columnNumber: 21
                                                }, this),
                                                formErrors.fullName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-28ef2b097008c205" + " " + "text-sm text-red-500 mb-4",
                                                    children: formErrors.fullName
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 1037,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 1019,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-28ef2b097008c205",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "email",
                                                    className: "jsx-28ef2b097008c205" + " " + "text-[#3D592F]",
                                                    children: "Email Address"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 1043,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "email",
                                                    name: "email",
                                                    type: "email",
                                                    value: bookingFormData.email,
                                                    onChange: handleBookingInputChange,
                                                    placeholder: "Email Address",
                                                    className: "jsx-28ef2b097008c205" + " " + `mb-1 w-full px-4 py-2 rounded border text-[#3D592F] focus:outline-none focus:ring-2 ${formErrors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#5EA4BF]"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 1046,
                                                    columnNumber: 21
                                                }, this),
                                                formErrors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-28ef2b097008c205" + " " + "text-sm text-red-500 mb-4",
                                                    children: formErrors.email
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 1060,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 1042,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-28ef2b097008c205" + " " + "flex justify-between gap-3 mt-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setDisplayBookingSummary(true);
                                                        setDisplayBookingForm(false);
                                                    },
                                                    className: "jsx-28ef2b097008c205" + " " + "w-1/2 py-3 bg-gray-200 text-gray-800 rounded-2xl font-medium hover:bg-gray-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer",
                                                    children: "Back"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 1066,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "jsx-28ef2b097008c205" + " " + "w-1/2 py-3 bg-gradient-to-r from-[#5EA4BF] to-[#6FA638] text-white rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer",
                                                    children: "Continue to Payment"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 1076,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 1065,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                    lineNumber: 1006,
                                    columnNumber: 17
                                }, this),
                                displayPaymentForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: (e)=>{
                                        e.preventDefault();
                                        if (validateCardForm()) {
                                            setLoading(true);
                                            setTimeout(()=>{
                                                setLoading(false);
                                                setDisplayPaymentForm(false);
                                                setDisplaySuccessMessage(true);
                                            }, 3000);
                                        }
                                    },
                                    className: "jsx-28ef2b097008c205" + " " + "w-full shrink-0 px-4 animate-fade-in-up space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-28ef2b097008c205" + " " + "text-xl font-semibold text-[#3D592F] mb-4",
                                            children: "Payment"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 1101,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-28ef2b097008c205" + " " + "flex gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-28ef2b097008c205" + " " + "w-1/2 ",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-28ef2b097008c205" + " " + "text-[#3D592F]",
                                                            children: "Card Number"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 1106,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            name: "cardNumber",
                                                            maxLength: 16,
                                                            value: cardFormData.cardNumber,
                                                            onChange: handleCardInputChange,
                                                            placeholder: "1234 5678 9012 3456",
                                                            className: "jsx-28ef2b097008c205" + " " + `mb-1 w-full px-4 py-2 rounded border text-[#3D592F] focus:outline-none focus:ring-2 ${cardErrors.cardNumber ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#5EA4BF]"}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 1107,
                                                            columnNumber: 23
                                                        }, this),
                                                        cardErrors.cardNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-28ef2b097008c205" + " " + "text-sm text-red-500 mb-3",
                                                            children: cardErrors.cardNumber
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 1121,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 1105,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-28ef2b097008c205" + " " + "w-1/2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-28ef2b097008c205" + " " + "text-[#3D592F]",
                                                            children: "Card Holder"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 1127,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            name: "cardHolder",
                                                            value: cardFormData.cardHolder,
                                                            onChange: handleCardInputChange,
                                                            placeholder: "Full Name",
                                                            className: "jsx-28ef2b097008c205" + " " + `mb-1 w-full px-4 py-2 rounded border text-[#3D592F] focus:outline-none focus:ring-2 ${cardErrors.cardHolder ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#5EA4BF]"}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 1128,
                                                            columnNumber: 23
                                                        }, this),
                                                        cardErrors.cardHolder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-28ef2b097008c205" + " " + "text-sm text-red-500 mb-3",
                                                            children: cardErrors.cardHolder
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 1141,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 1126,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 1104,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-28ef2b097008c205" + " " + "flex gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-28ef2b097008c205" + " " + "w-1/2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-28ef2b097008c205" + " " + "text-[#3D592F]",
                                                            children: "Expiry (MM/YY)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 1149,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            name: "expiry",
                                                            maxLength: 5,
                                                            value: cardFormData.expiry,
                                                            onChange: handleCardInputChange,
                                                            placeholder: "MM/YY",
                                                            className: "jsx-28ef2b097008c205" + " " + `mb-1 w-full px-4 py-2 rounded border text-[#3D592F] focus:outline-none focus:ring-2 ${cardErrors.expiry ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#5EA4BF]"}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 1150,
                                                            columnNumber: 23
                                                        }, this),
                                                        cardErrors.expiry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-28ef2b097008c205" + " " + "text-sm text-red-500 mb-3",
                                                            children: cardErrors.expiry
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 1164,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 1148,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-28ef2b097008c205" + " " + "w-1/2 ",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-28ef2b097008c205" + " " + "text-[#3D592F]",
                                                            children: "CVV"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 1170,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            name: "cvv",
                                                            maxLength: 3,
                                                            value: cardFormData.cvv,
                                                            onChange: handleCardInputChange,
                                                            placeholder: "123",
                                                            className: "jsx-28ef2b097008c205" + " " + `mb-1 w-full px-4 py-2 rounded border text-[#3D592F] focus:outline-none focus:ring-2 ${cardErrors.cvv ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#5EA4BF]"}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 1171,
                                                            columnNumber: 23
                                                        }, this),
                                                        cardErrors.cvv && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-28ef2b097008c205" + " " + "text-sm text-red-500 mb-3",
                                                            children: cardErrors.cvv
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                            lineNumber: 1185,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 1169,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 1147,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-28ef2b097008c205" + " " + "flex justify-between gap-3 mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setDisplayBookingForm(true);
                                                        setDisplayPaymentForm(false);
                                                    },
                                                    className: "jsx-28ef2b097008c205" + " " + "w-1/2 py-3 bg-gray-200 text-gray-800 rounded-2xl font-medium hover:bg-gray-400 hover:shadow-xl  transition-all duration-300 transform hover:-translate-y-1 cursor-pointer",
                                                    children: "Back"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 1192,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    disabled: loading,
                                                    className: "jsx-28ef2b097008c205" + " " + "w-1/2 py-3 bg-gradient-to-r from-[#5EA4BF] to-[#6FA638] text-white rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
                                                    children: loading ? "Processing..." : `Pay $${selectedDestination.price}`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                                    lineNumber: 1201,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 1191,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                    lineNumber: 1087,
                                    columnNumber: 17
                                }, this),
                                displaySuccessMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-28ef2b097008c205" + " " + "w-full shrink-0 px-4 flex flex-col items-center justify-center gap-4 text-center animate-fade-in-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-28ef2b097008c205" + " " + "text-6xl text-green-600 mb-4 animate-bounce",
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 1216,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-28ef2b097008c205" + " " + "text-2xl font-bold text-[#3D592F] mb-2",
                                            children: "Booking Confirmed!"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 1219,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-28ef2b097008c205" + " " + "text-gray-600",
                                            children: "We've sent a confirmation to your email with details about your booking."
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 1222,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-28ef2b097008c205" + " " + "text-gray-600",
                                            children: "Enjoy your trip!"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 1226,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setSelectedDestination(null);
                                                setDisplayBookingSummary(true);
                                                setDisplayBookingForm(false);
                                                setDisplayPaymentForm(false);
                                                setDisplaySuccessMessage(false);
                                                setBookingFormData({
                                                    fullName: "",
                                                    email: ""
                                                });
                                                setCardFormData({
                                                    cardNumber: "",
                                                    cardHolder: "",
                                                    expiry: "",
                                                    cvv: ""
                                                });
                                                setFormErrors({});
                                            },
                                            className: "jsx-28ef2b097008c205" + " " + "mt-6 px-6 py-2 bg-[#6FA638] text-white rounded-lg",
                                            children: "Close"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                                            lineNumber: 1227,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                                    lineNumber: 1215,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/TravelHeroSection.tsx",
                            lineNumber: 954,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/TravelHeroSection.tsx",
                    lineNumber: 920,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/TravelHeroSection.tsx",
                lineNumber: 916,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "28ef2b097008c205",
                children: '@import "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap";.jsx-28ef2b097008c205{font-family:Nunito,sans-serif}@keyframes fade-in-up{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes slide-left{0%{transform:translate(100%)}to{transform:translate(0)}}@keyframes slide-right{0%{transform:translate(-100%)}to{transform:translate(0)}}@keyframes scale-in{0%{opacity:0;transform:scale(.8)translate(-50%)}to{opacity:1;transform:scale(1)translate(-50%)}}@keyframes modal-in{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}@keyframes rain{to{transform:translateY(100vh)}}@keyframes wind{0%{transform:translate(0)}to{transform:translate(120vw)}}@keyframes cloud{0%{transform:translate(0)}to{transform:translate(150vw)}}.animate-fade-in-up.jsx-28ef2b097008c205{animation:.8s ease-out forwards fade-in-up}.animate-slide-up.jsx-28ef2b097008c205{animation:.6s ease-out forwards slide-up}.animate-slide-left.jsx-28ef2b097008c205{animation:.6s ease-out forwards slide-left}.animate-slide-right.jsx-28ef2b097008c205{animation:.6s ease-out forwards slide-right}.animate-scale-in.jsx-28ef2b097008c205{animation:.3s ease-out forwards scale-in}.animate-modal-in.jsx-28ef2b097008c205{animation:.3s ease-out forwards modal-in}.animate-rain.jsx-28ef2b097008c205{animation:linear infinite rain}.animate-wind.jsx-28ef2b097008c205{animation:linear infinite wind}.animate-cloud.jsx-28ef2b097008c205{animation:linear infinite cloud}.animation-delay-200.jsx-28ef2b097008c205{animation-delay:.2s}@media (width<=450px){.destination-image.jsx-28ef2b097008c205{height:7rem}.destination-content.jsx-28ef2b097008c205{padding:1rem}.destination-title.jsx-28ef2b097008c205{font-size:1rem}.destination-location.jsx-28ef2b097008c205,.destination-highlight.jsx-28ef2b097008c205,.destination-description.jsx-28ef2b097008c205{font-size:.7rem}.map-container.jsx-28ef2b097008c205{align-items:flex-start;height:28%;padding:1rem 2.5rem}.interactive-map.jsx-28ef2b097008c205,.map-overlay.jsx-28ef2b097008c205{height:100%}.tooltip.jsx-28ef2b097008c205{left:400%;transform:translate(-150%)}}@media (width<=400px){.map-container.jsx-28ef2b097008c205{align-items:flex-start;height:22%;padding:0 2.5rem 1rem}}@media (width<=375px){.map-container.jsx-28ef2b097008c205{display:none}}'
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TravelHeroSection.tsx",
        lineNumber: 321,
        columnNumber: 5
    }, this);
};
_s(TravelHeroSection, "tg06ImbLYJeOjkhd7WUT5/b8xZ0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$swipeable$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwipeable"]
    ];
});
_c = TravelHeroSection;
const __TURBOPACK__default__export__ = TravelHeroSection;
var _c;
__turbopack_context__.k.register(_c, "TravelHeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_components_54a3df01._.js.map