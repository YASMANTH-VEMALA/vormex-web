(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/find-people/LocationMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocationMap",
    ()=>LocationMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// Fix Leaflet default icon issue
delete __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Icon.Default.prototype._getIconUrl;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
});
function LocationMap(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "889eab0b8d224cbfa7d211aadfb3213983cdd2705d7863b6852cbb25c93abe24") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "889eab0b8d224cbfa7d211aadfb3213983cdd2705d7863b6852cbb25c93abe24";
    }
    const { center, radius, users, onUserClick } = t0;
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const userMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t1);
    const circleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const myMarkerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    if ($[2] !== center) {
        t2 = ({
            "LocationMap[useEffect()]": ()=>{
                if (!mapRef.current || mapInstanceRef.current) {
                    return;
                }
                console.log("[LocationMap] Initializing map at", center.lat, center.lng);
                const map = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map(mapRef.current).setView([
                    center.lat,
                    center.lng
                ], 13);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a>"
                }).addTo(map);
                mapInstanceRef.current = map;
                return ()=>{
                    map.remove();
                    mapInstanceRef.current = null;
                };
            }
        })["LocationMap[useEffect()]"];
        $[2] = center;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[5] !== center || $[6] !== radius) {
        t4 = ({
            "LocationMap[useEffect()]": ()=>{
                if (!mapInstanceRef.current) {
                    return;
                }
                console.log("[LocationMap] Updating center to", center.lat, center.lng, "radius:", radius);
                mapInstanceRef.current.setView([
                    center.lat,
                    center.lng
                ], 13);
                if (circleRef.current) {
                    circleRef.current.setLatLng([
                        center.lat,
                        center.lng
                    ]);
                    circleRef.current.setRadius(radius * 1000);
                } else {
                    circleRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].circle([
                        center.lat,
                        center.lng
                    ], {
                        radius: radius * 1000,
                        color: "#3b82f6",
                        fillColor: "#3b82f6",
                        fillOpacity: 0.1,
                        weight: 2
                    }).addTo(mapInstanceRef.current);
                }
                if (myMarkerRef.current) {
                    myMarkerRef.current.setLatLng([
                        center.lat,
                        center.lng
                    ]);
                } else {
                    const myIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
                        className: "my-location-marker",
                        html: "\n          <div style=\"position: relative;\">\n            <div style=\"width: 20px; height: 20px; background: #3b82f6; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3); animation: pulse 2s infinite;\"></div>\n          </div>\n        ",
                        iconSize: [
                            20,
                            20
                        ],
                        iconAnchor: [
                            10,
                            10
                        ]
                    });
                    myMarkerRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker([
                        center.lat,
                        center.lng
                    ], {
                        icon: myIcon
                    }).addTo(mapInstanceRef.current).bindPopup("<b>You are here</b>");
                }
            }
        })["LocationMap[useEffect()]"];
        t5 = [
            center,
            radius
        ];
        $[5] = center;
        $[6] = radius;
        $[7] = t4;
        $[8] = t5;
    } else {
        t4 = $[7];
        t5 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    let t7;
    if ($[9] !== onUserClick || $[10] !== users) {
        t6 = ({
            "LocationMap[useEffect()]": ()=>{
                if (!mapInstanceRef.current) {
                    return;
                }
                console.log("[LocationMap] Updating user markers, count:", users.length);
                userMarkersRef.current.forEach(_LocationMapUseEffectUserMarkersRefCurrentForEach);
                userMarkersRef.current = [];
                users.forEach({
                    "LocationMap[useEffect() > users.forEach()]": (user)=>{
                        if (!user.location?.lat || !user.location?.lng) {
                            console.log("[LocationMap] Skipping user without coordinates:", user.username);
                            return;
                        }
                        const userLat = user.location.lat;
                        const userLng = user.location.lng;
                        console.log("[LocationMap] Adding marker for", user.username, "at", userLat, userLng);
                        const userMarkerIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
                            className: "nearby-user-marker",
                            html: `
          <div style="position: relative; cursor: pointer; transition: transform 0.2s;">
            <div style="width: 48px; height: 48px; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 12px rgba(0,0,0,0.3); overflow: hidden; background: linear-gradient(135deg, #60a5fa, #a855f7); display: flex; align-items: center; justify-content: center;">
              ${user.profileImage ? `<img src="${user.profileImage}" style="width: 100%; height: 100%; object-fit: cover;" alt="${user.name}"/>` : `<span style="color: white; font-weight: bold; font-size: 18px;">${user.name?.charAt(0) || "?"}</span>`}
            </div>
            ${user.isOnline ? "<div style=\"position: absolute; top: 0; right: 0; width: 12px; height: 12px; background: #22c55e; border-radius: 50%; border: 2px solid white;\"></div>" : ""}
            <div style="position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%); background: #3b82f6; color: white; font-size: 10px; padding: 2px 8px; border-radius: 10px; white-space: nowrap; font-weight: 500; box-shadow: 0 2px 6px rgba(0,0,0,0.2);">
              ${user.distance < 1 ? `${Math.round(user.distance * 1000)}m` : `${user.distance.toFixed(1)}km`}
            </div>
          </div>
        `,
                            iconSize: [
                                48,
                                60
                            ],
                            iconAnchor: [
                                24,
                                48
                            ],
                            popupAnchor: [
                                0,
                                -48
                            ]
                        });
                        const marker_0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker([
                            userLat,
                            userLng
                        ], {
                            icon: userMarkerIcon
                        }).addTo(mapInstanceRef.current).bindPopup(`
          <div style="text-align: center; min-width: 140px; padding: 4px;">
            <p style="font-weight: 600; color: #111; font-size: 14px; margin: 0;">${user.name}</p>
            <p style="font-size: 12px; color: #666; margin: 2px 0;">@${user.username}</p>
            ${user.location.city ? `<p style="font-size: 11px; color: #999; margin: 2px 0;">${user.location.city}</p>` : ""}
            <p style="font-size: 12px; color: #3b82f6; margin-top: 4px; font-weight: 500;">
              ${user.distance < 1 ? `${Math.round(user.distance * 1000)}m away` : `${user.distance.toFixed(1)}km away`}
            </p>
          </div>
        `);
                        marker_0.on("click", {
                            "LocationMap[useEffect() > users.forEach() > marker_0.on()]": ()=>{
                                onUserClick(user);
                            }
                        }["LocationMap[useEffect() > users.forEach() > marker_0.on()]"]);
                        userMarkersRef.current.push(marker_0);
                    }
                }["LocationMap[useEffect() > users.forEach()]"]);
                console.log("[LocationMap] Added", userMarkersRef.current.length, "user markers");
            }
        })["LocationMap[useEffect()]"];
        t7 = [
            users,
            onUserClick
        ];
        $[9] = onUserClick;
        $[10] = users;
        $[11] = t6;
        $[12] = t7;
    } else {
        t6 = $[11];
        t7 = $[12];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: mapRef,
                    className: "jsx-f5b14442b181cb3c" + " " + "w-full h-full z-0"
                }, void 0, false, {
                    fileName: "[project]/src/components/find-people/LocationMap.tsx",
                    lineNumber: 220,
                    columnNumber: 12
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    id: "f5b14442b181cb3c",
                    children: ".my-location-marker,.nearby-user-marker{background:0 0!important;border:none!important}.leaflet-popup-content-wrapper{border-radius:12px}.leaflet-popup-content{margin:8px 12px}@keyframes pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.8;transform:scale(1.1)}}"
                }, void 0, false, void 0, this)
            ]
        }, void 0, true);
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    return t8;
}
_s(LocationMap, "jjbT4rfcIhV+jv3/JMtrl4rTWg4=");
_c = LocationMap;
function _LocationMapUseEffectUserMarkersRefCurrentForEach(marker) {
    return marker.remove();
}
var _c;
__turbopack_context__.k.register(_c, "LocationMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/find-people/LocationMap.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/find-people/LocationMap.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_find-people_LocationMap_tsx_c43f6d97._.js.map