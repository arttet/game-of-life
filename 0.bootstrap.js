(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/game_of_life.js":
/*!******************************!*\
  !*** ../pkg/game_of_life.js ***!
  \******************************/
/*! exports provided: Universe, __wbindgen_object_drop_ref, __wbindgen_string_new, __wbg_instanceof_Window_c4b70662a0d2c5ec, __wbg_document_1c64944725c0d81d, __wbg_getElementById_f3e94458ce77f0d0, __wbg_log_3445347661d4505e, __wbg_instanceof_CanvasRenderingContext2d_3abbe7ec7af32cae, __wbg_setstrokeStyle_947bd4c26c94673f, __wbg_setfillStyle_528a6a267c863ae7, __wbg_beginPath_733d5a9e3e769d24, __wbg_stroke_7cdcdf3d07636d76, __wbg_lineTo_fde385edd804f315, __wbg_moveTo_18ace182fe51d75d, __wbg_fillRect_10e42dc7a5e8cccd, __wbg_instanceof_HtmlCanvasElement_25d964a0dde6717e, __wbg_getContext_f701d0231ae22393, __wbg_newnoargs_be86524d73f67598, __wbg_call_888d259a5fefc347, __wbg_self_c6fbdfc2918d5e58, __wbg_window_baec038b5ab35c54, __wbg_globalThis_3f735a5746d41fbd, __wbg_global_1bc0b39582740e95, __wbindgen_is_undefined, __wbindgen_object_clone_ref, __wbg_random_a582babfa4489c72, __wbindgen_debug_string, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_of_life_bg.wasm */ \"../pkg/game_of_life_bg.wasm\");\n/* harmony import */ var _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_of_life_bg.js */ \"../pkg/game_of_life_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Universe\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_string_new\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Window_c4b70662a0d2c5ec\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_instanceof_Window_c4b70662a0d2c5ec\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_document_1c64944725c0d81d\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_document_1c64944725c0d81d\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getElementById_f3e94458ce77f0d0\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getElementById_f3e94458ce77f0d0\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_3445347661d4505e\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_log_3445347661d4505e\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_CanvasRenderingContext2d_3abbe7ec7af32cae\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_instanceof_CanvasRenderingContext2d_3abbe7ec7af32cae\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setstrokeStyle_947bd4c26c94673f\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_setstrokeStyle_947bd4c26c94673f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setfillStyle_528a6a267c863ae7\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_setfillStyle_528a6a267c863ae7\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_beginPath_733d5a9e3e769d24\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_beginPath_733d5a9e3e769d24\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stroke_7cdcdf3d07636d76\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_stroke_7cdcdf3d07636d76\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_lineTo_fde385edd804f315\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_lineTo_fde385edd804f315\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_moveTo_18ace182fe51d75d\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_moveTo_18ace182fe51d75d\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_fillRect_10e42dc7a5e8cccd\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_fillRect_10e42dc7a5e8cccd\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_HtmlCanvasElement_25d964a0dde6717e\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_instanceof_HtmlCanvasElement_25d964a0dde6717e\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getContext_f701d0231ae22393\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getContext_f701d0231ae22393\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_be86524d73f67598\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_newnoargs_be86524d73f67598\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_888d259a5fefc347\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_call_888d259a5fefc347\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_c6fbdfc2918d5e58\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_self_c6fbdfc2918d5e58\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_baec038b5ab35c54\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_window_baec038b5ab35c54\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_3f735a5746d41fbd\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_globalThis_3f735a5746d41fbd\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_1bc0b39582740e95\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_global_1bc0b39582740e95\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_undefined\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_clone_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_a582babfa4489c72\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_random_a582babfa4489c72\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_debug_string\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/game_of_life.js?");

/***/ }),

/***/ "../pkg/game_of_life_bg.js":
/*!*********************************!*\
  !*** ../pkg/game_of_life_bg.js ***!
  \*********************************/
/*! exports provided: Universe, __wbindgen_object_drop_ref, __wbindgen_string_new, __wbg_instanceof_Window_c4b70662a0d2c5ec, __wbg_document_1c64944725c0d81d, __wbg_getElementById_f3e94458ce77f0d0, __wbg_log_3445347661d4505e, __wbg_instanceof_CanvasRenderingContext2d_3abbe7ec7af32cae, __wbg_setstrokeStyle_947bd4c26c94673f, __wbg_setfillStyle_528a6a267c863ae7, __wbg_beginPath_733d5a9e3e769d24, __wbg_stroke_7cdcdf3d07636d76, __wbg_lineTo_fde385edd804f315, __wbg_moveTo_18ace182fe51d75d, __wbg_fillRect_10e42dc7a5e8cccd, __wbg_instanceof_HtmlCanvasElement_25d964a0dde6717e, __wbg_getContext_f701d0231ae22393, __wbg_newnoargs_be86524d73f67598, __wbg_call_888d259a5fefc347, __wbg_self_c6fbdfc2918d5e58, __wbg_window_baec038b5ab35c54, __wbg_globalThis_3f735a5746d41fbd, __wbg_global_1bc0b39582740e95, __wbindgen_is_undefined, __wbindgen_object_clone_ref, __wbg_random_a582babfa4489c72, __wbindgen_debug_string, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return Universe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Window_c4b70662a0d2c5ec\", function() { return __wbg_instanceof_Window_c4b70662a0d2c5ec; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_document_1c64944725c0d81d\", function() { return __wbg_document_1c64944725c0d81d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getElementById_f3e94458ce77f0d0\", function() { return __wbg_getElementById_f3e94458ce77f0d0; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_3445347661d4505e\", function() { return __wbg_log_3445347661d4505e; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_CanvasRenderingContext2d_3abbe7ec7af32cae\", function() { return __wbg_instanceof_CanvasRenderingContext2d_3abbe7ec7af32cae; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setstrokeStyle_947bd4c26c94673f\", function() { return __wbg_setstrokeStyle_947bd4c26c94673f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setfillStyle_528a6a267c863ae7\", function() { return __wbg_setfillStyle_528a6a267c863ae7; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_beginPath_733d5a9e3e769d24\", function() { return __wbg_beginPath_733d5a9e3e769d24; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stroke_7cdcdf3d07636d76\", function() { return __wbg_stroke_7cdcdf3d07636d76; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_lineTo_fde385edd804f315\", function() { return __wbg_lineTo_fde385edd804f315; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_moveTo_18ace182fe51d75d\", function() { return __wbg_moveTo_18ace182fe51d75d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_fillRect_10e42dc7a5e8cccd\", function() { return __wbg_fillRect_10e42dc7a5e8cccd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_HtmlCanvasElement_25d964a0dde6717e\", function() { return __wbg_instanceof_HtmlCanvasElement_25d964a0dde6717e; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getContext_f701d0231ae22393\", function() { return __wbg_getContext_f701d0231ae22393; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_be86524d73f67598\", function() { return __wbg_newnoargs_be86524d73f67598; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_888d259a5fefc347\", function() { return __wbg_call_888d259a5fefc347; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_c6fbdfc2918d5e58\", function() { return __wbg_self_c6fbdfc2918d5e58; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_baec038b5ab35c54\", function() { return __wbg_window_baec038b5ab35c54; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_3f735a5746d41fbd\", function() { return __wbg_globalThis_3f735a5746d41fbd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_1bc0b39582740e95\", function() { return __wbg_global_1bc0b39582740e95; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_a582babfa4489c72\", function() { return __wbg_random_a582babfa4489c72; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return __wbindgen_debug_string; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_of_life_bg.wasm */ \"../pkg/game_of_life_bg.wasm\");\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction debugString(val) {\n    // primitive types\n    const type = typeof val;\n    if (type == 'number' || type == 'boolean' || val == null) {\n        return  `${val}`;\n    }\n    if (type == 'string') {\n        return `\"${val}\"`;\n    }\n    if (type == 'symbol') {\n        const description = val.description;\n        if (description == null) {\n            return 'Symbol';\n        } else {\n            return `Symbol(${description})`;\n        }\n    }\n    if (type == 'function') {\n        const name = val.name;\n        if (typeof name == 'string' && name.length > 0) {\n            return `Function(${name})`;\n        } else {\n            return 'Function';\n        }\n    }\n    // objects\n    if (Array.isArray(val)) {\n        const length = val.length;\n        let debug = '[';\n        if (length > 0) {\n            debug += debugString(val[0]);\n        }\n        for(let i = 1; i < length; i++) {\n            debug += ', ' + debugString(val[i]);\n        }\n        debug += ']';\n        return debug;\n    }\n    // Test for built-in\n    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));\n    let className;\n    if (builtInMatches.length > 1) {\n        className = builtInMatches[1];\n    } else {\n        // Failed to match the standard '[object ClassName]'\n        return toString.call(val);\n    }\n    if (className == 'Object') {\n        // we're a user defined class or Object\n        // JSON.stringify avoids problems with cycles, and is generally much\n        // easier than looping through ownProperties of `val`.\n        try {\n            return 'Object(' + JSON.stringify(val) + ')';\n        } catch (_) {\n            return 'Object';\n        }\n    }\n    // errors\n    if (val instanceof Error) {\n        return `${val.name}: ${val.message}\\n${val.stack}`;\n    }\n    // TODO we could test for more things here, like `Set`s and `Map`s.\n    return className;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nfunction handleError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_exn_store\"](addHeapObject(e));\n    }\n}\n\nfunction notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_universe_free\"](ptr);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @returns {Universe}\n    */\n    static new(width, height) {\n        var ret = _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_new\"](width, height);\n        return Universe.__wrap(ret);\n    }\n    /**\n    */\n    tick() {\n        _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_tick\"](this.ptr);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    */\n    render(width, height) {\n        _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_render\"](this.ptr, width, height);\n    }\n}\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nfunction __wbindgen_string_new(arg0, arg1) {\n    var ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nfunction __wbg_instanceof_Window_c4b70662a0d2c5ec(arg0) {\n    var ret = getObject(arg0) instanceof Window;\n    return ret;\n};\n\nfunction __wbg_document_1c64944725c0d81d(arg0) {\n    var ret = getObject(arg0).document;\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n};\n\nfunction __wbg_getElementById_f3e94458ce77f0d0(arg0, arg1, arg2) {\n    var ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n};\n\nfunction __wbg_log_3445347661d4505e(arg0) {\n    console.log(getObject(arg0));\n};\n\nfunction __wbg_instanceof_CanvasRenderingContext2d_3abbe7ec7af32cae(arg0) {\n    var ret = getObject(arg0) instanceof CanvasRenderingContext2D;\n    return ret;\n};\n\nfunction __wbg_setstrokeStyle_947bd4c26c94673f(arg0, arg1) {\n    getObject(arg0).strokeStyle = getObject(arg1);\n};\n\nfunction __wbg_setfillStyle_528a6a267c863ae7(arg0, arg1) {\n    getObject(arg0).fillStyle = getObject(arg1);\n};\n\nfunction __wbg_beginPath_733d5a9e3e769d24(arg0) {\n    getObject(arg0).beginPath();\n};\n\nfunction __wbg_stroke_7cdcdf3d07636d76(arg0) {\n    getObject(arg0).stroke();\n};\n\nfunction __wbg_lineTo_fde385edd804f315(arg0, arg1, arg2) {\n    getObject(arg0).lineTo(arg1, arg2);\n};\n\nfunction __wbg_moveTo_18ace182fe51d75d(arg0, arg1, arg2) {\n    getObject(arg0).moveTo(arg1, arg2);\n};\n\nfunction __wbg_fillRect_10e42dc7a5e8cccd(arg0, arg1, arg2, arg3, arg4) {\n    getObject(arg0).fillRect(arg1, arg2, arg3, arg4);\n};\n\nfunction __wbg_instanceof_HtmlCanvasElement_25d964a0dde6717e(arg0) {\n    var ret = getObject(arg0) instanceof HTMLCanvasElement;\n    return ret;\n};\n\nfunction __wbg_getContext_f701d0231ae22393() { return handleError(function (arg0, arg1, arg2) {\n    var ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2));\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_newnoargs_be86524d73f67598(arg0, arg1) {\n    var ret = new Function(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n};\n\nfunction __wbg_call_888d259a5fefc347() { return handleError(function (arg0, arg1) {\n    var ret = getObject(arg0).call(getObject(arg1));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_self_c6fbdfc2918d5e58() { return handleError(function () {\n    var ret = self.self;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_window_baec038b5ab35c54() { return handleError(function () {\n    var ret = window.window;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_globalThis_3f735a5746d41fbd() { return handleError(function () {\n    var ret = globalThis.globalThis;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_global_1bc0b39582740e95() { return handleError(function () {\n    var ret = global.global;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbindgen_is_undefined(arg0) {\n    var ret = getObject(arg0) === undefined;\n    return ret;\n};\n\nfunction __wbindgen_object_clone_ref(arg0) {\n    var ret = getObject(arg0);\n    return addHeapObject(ret);\n};\n\nconst __wbg_random_a582babfa4489c72 = typeof Math.random == 'function' ? Math.random : notDefined('Math.random');\n\nfunction __wbindgen_debug_string(arg0, arg1) {\n    var ret = debugString(getObject(arg1));\n    var ptr0 = passStringToWasm0(ret, _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../web/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module), __webpack_require__(/*! ./../web/node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///../pkg/game_of_life_bg.js?");

/***/ }),

/***/ "../pkg/game_of_life_bg.wasm":
/*!***********************************!*\
  !*** ../pkg/game_of_life_bg.wasm ***!
  \***********************************/
/*! exports provided: memory, __wbg_universe_free, universe_new, universe_tick, universe_render, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_exn_store */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./game_of_life_bg.js */ \"../pkg/game_of_life_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/game_of_life_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var game_of_life__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! game-of-life */ \"../pkg/game_of_life.js\");\n\n\nconst universe = game_of_life__WEBPACK_IMPORTED_MODULE_0__[\"Universe\"].new(64, 64);\n\nconst renderLoop = () => {\n  debugger;\n  universe.tick();\n  universe.render(window.innerWidth, window.innerHeight);\n\n  fps.render();\n\n  requestAnimationFrame(renderLoop);\n};\n\nfunction main() {\n    const resize = () => {\n        canvas.width = window.innerWidth;\n        canvas.height = window.innerHeight;\n    };\n    resize();\n\n    requestAnimationFrame(renderLoop);\n    window.addEventListener('resize', resize);\n}\n\nwindow.onload = main;\n\nconst fps = new class {\n    constructor() {\n      this.fps = document.getElementById(\"fps\");\n      this.frames = [];\n      this.lastFrameTimeStamp = performance.now();\n    }\n\n    render() {\n      // Convert the delta time since the last frame render into a measure\n      // of frames per second.\n      const now = performance.now();\n      const delta = now - this.lastFrameTimeStamp;\n      this.lastFrameTimeStamp = now;\n      const fps = 1 / delta * 1000;\n\n      // Save only the latest 100 timings.\n      this.frames.push(fps);\n      if (this.frames.length > 100) {\n        this.frames.shift();\n      }\n\n      // Find the max, min, and mean of our 100 latest timings.\n      let min = Infinity;\n      let max = -Infinity;\n      let sum = 0;\n      for (let i = 0; i < this.frames.length; i++) {\n        sum += this.frames[i];\n        min = Math.min(this.frames[i], min);\n        max = Math.max(this.frames[i], max);\n      }\n      let mean = sum / this.frames.length;\n\n      // Render the statistics.\n      this.fps.textContent = `Frames per Second:\nlatest = ${Math.round(fps)}\navg of last 100 = ${Math.round(mean)}\nmin of last 100 = ${Math.round(min)}\nmax of last 100 = ${Math.round(max)}\n`.trim();\n    }\n  };\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);