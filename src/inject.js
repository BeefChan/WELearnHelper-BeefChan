(function() {
  var _a;
  "use strict";
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var _freeGlobal = freeGlobal$1;
  var freeGlobal = _freeGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root$8 = freeGlobal || freeSelf || Function("return this")();
  var _root = root$8;
  var root$7 = _root;
  var Symbol$4 = root$7.Symbol;
  var _Symbol = Symbol$4;
  var Symbol$3 = _Symbol;
  var objectProto$3 = Object.prototype;
  var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
  var nativeObjectToString$1 = objectProto$3.toString;
  var symToStringTag$1 = Symbol$3 ? Symbol$3.toStringTag : void 0;
  function getRawTag$1(value) {
    var isOwn = hasOwnProperty$2.call(value, symToStringTag$1), tag = value[symToStringTag$1];
    try {
      value[symToStringTag$1] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }
  var _getRawTag = getRawTag$1;
  var objectProto$2 = Object.prototype;
  var nativeObjectToString = objectProto$2.toString;
  function objectToString$1(value) {
    return nativeObjectToString.call(value);
  }
  var _objectToString = objectToString$1;
  var Symbol$2 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
  var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
  var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
  function baseGetTag$3(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  var _baseGetTag = baseGetTag$3;
  function isObject$2(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var isObject_1 = isObject$2;
  var baseGetTag$2 = _baseGetTag, isObject$1 = isObject_1;
  var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
  function isFunction$1(value) {
    if (!isObject$1(value)) {
      return false;
    }
    var tag = baseGetTag$2(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  var isFunction_1 = isFunction$1;
  var root$6 = _root;
  var coreJsData$1 = root$6["__core-js_shared__"];
  var _coreJsData = coreJsData$1;
  var coreJsData = _coreJsData;
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  function isMasked$1(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  var _isMasked = isMasked$1;
  var funcProto$1 = Function.prototype;
  var funcToString$1 = funcProto$1.toString;
  function toSource$2(func) {
    if (func != null) {
      try {
        return funcToString$1.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }
  var _toSource = toSource$2;
  var isFunction = isFunction_1, isMasked = _isMasked, isObject = isObject_1, toSource$1 = _toSource;
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto = Function.prototype, objectProto$1 = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
  var reIsNative = RegExp(
    "^" + funcToString.call(hasOwnProperty$1).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function baseIsNative$1(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource$1(value));
  }
  var _baseIsNative = baseIsNative$1;
  function getValue$1(object, key) {
    return object == null ? void 0 : object[key];
  }
  var _getValue = getValue$1;
  var baseIsNative = _baseIsNative, getValue = _getValue;
  function getNative$6(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  var _getNative = getNative$6;
  var getNative$5 = _getNative, root$5 = _root;
  var Map$2 = getNative$5(root$5, "Map");
  var _Map = Map$2;
  var getNative$4 = _getNative;
  getNative$4(Object, "create");
  var root$4 = _root;
  root$4.Uint8Array;
  var Symbol$1 = _Symbol;
  var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0;
  symbolProto ? symbolProto.valueOf : void 0;
  function isObjectLike$2(value) {
    return value != null && typeof value == "object";
  }
  var isObjectLike_1 = isObjectLike$2;
  var baseGetTag$1 = _baseGetTag, isObjectLike$1 = isObjectLike_1;
  var argsTag = "[object Arguments]";
  function baseIsArguments$1(value) {
    return isObjectLike$1(value) && baseGetTag$1(value) == argsTag;
  }
  var _baseIsArguments = baseIsArguments$1;
  var baseIsArguments = _baseIsArguments, isObjectLike = isObjectLike_1;
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  baseIsArguments(function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isBufferExports = {};
  var isBuffer = {
    get exports() {
      return isBufferExports;
    },
    set exports(v) {
      isBufferExports = v;
    }
  };
  function stubFalse() {
    return false;
  }
  var stubFalse_1 = stubFalse;
  (function(module, exports) {
    var root2 = _root, stubFalse2 = stubFalse_1;
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root2.Buffer : void 0;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var isBuffer2 = nativeIsBuffer || stubFalse2;
    module.exports = isBuffer2;
  })(isBuffer, isBufferExports);
  var _nodeUtilExports = {};
  var _nodeUtil = {
    get exports() {
      return _nodeUtilExports;
    },
    set exports(v) {
      _nodeUtilExports = v;
    }
  };
  (function(module, exports) {
    var freeGlobal2 = _freeGlobal;
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal2.process;
    var nodeUtil2 = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module.exports = nodeUtil2;
  })(_nodeUtil, _nodeUtilExports);
  var nodeUtil = _nodeUtilExports;
  nodeUtil && nodeUtil.isTypedArray;
  var getNative$3 = _getNative, root$3 = _root;
  var DataView$1 = getNative$3(root$3, "DataView");
  var _DataView = DataView$1;
  var getNative$2 = _getNative, root$2 = _root;
  var Promise$2 = getNative$2(root$2, "Promise");
  var _Promise = Promise$2;
  var getNative$1 = _getNative, root$1 = _root;
  var Set$1 = getNative$1(root$1, "Set");
  var _Set = Set$1;
  var getNative = _getNative, root = _root;
  var WeakMap$1 = getNative(root, "WeakMap");
  var _WeakMap = WeakMap$1;
  var DataView = _DataView, Map$1 = _Map, Promise$1 = _Promise, Set = _Set, WeakMap = _WeakMap, baseGetTag = _baseGetTag, toSource = _toSource;
  var mapTag = "[object Map]", objectTag = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
  var dataViewTag = "[object DataView]";
  var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
  var getTag = baseGetTag;
  if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map$1 && getTag(new Map$1()) != mapTag || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
    getTag = function(value) {
      var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;
          case mapCtorString:
            return mapTag;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag;
          case weakMapCtorString:
            return weakMapTag;
        }
      }
      return result;
    };
  }
  function injectJs(source) {
    const parent = document;
    const scriptElement = parent.createElement("script");
    scriptElement.setAttribute("type", "text/javascript");
    scriptElement.src = source;
    scriptElement.className = "injected-js";
    parent.documentElement.appendChild(scriptElement);
    return scriptElement;
  }
  injectJs((_a = chrome.runtime) == null ? void 0 : _a.getURL("index.js"));
  const EXTENSION_NAME = "eocs-helper";
  const sessions = /* @__PURE__ */ new Map();
  async function fromContentToInject(messageEvent) {
    const message = messageEvent.data;
    if (!message.extensionName || message.extensionName !== EXTENSION_NAME) {
      return;
    }
    if (!(message.sessionSource === "content" && message.sessionTarget === "inject")) {
      return;
    }
    const callback = sessions.get(message.sessionId);
    try {
      callback && await callback(message);
    } catch (error) {
      console.error(error);
    } finally {
      sessions.delete(message.sessionId);
    }
  }
  window.addEventListener("message", fromContentToInject, false);
})();
