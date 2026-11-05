var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function() {
  var _a, _b, _c, _d;
  "use strict";
  var __vite_style__ = document.createElement("style");
  __vite_style__.textContent = ".i-icon{display:inline-block;color:inherit;font-style:normal;line-height:0;text-align:center;text-transform:none;vertical-align:-.125em;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.i-icon-spin svg{animation:i-icon-spin 1s infinite linear}.i-icon-rtl{transform:scaleX(-1)}@keyframes i-icon-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes i-icon-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}[data-simplebar]{position:relative;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;align-items:flex-start}.simplebar-wrapper{overflow:hidden;width:inherit;height:inherit;max-width:inherit;max-height:inherit}.simplebar-mask{direction:inherit;position:absolute;overflow:hidden;padding:0;margin:0;left:0;top:0;bottom:0;right:0;width:auto!important;height:auto!important;z-index:0}.simplebar-offset{direction:inherit!important;box-sizing:inherit!important;resize:none!important;position:absolute;top:0;left:0;bottom:0;right:0;padding:0;margin:0;-webkit-overflow-scrolling:touch}.simplebar-content-wrapper{direction:inherit;box-sizing:border-box!important;position:relative;display:block;height:100%;width:auto;max-width:100%;max-height:100%;overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.simplebar-content-wrapper::-webkit-scrollbar,.simplebar-hide-scrollbar::-webkit-scrollbar{display:none;width:0;height:0}.simplebar-content:after,.simplebar-content:before{content:' ';display:table}.simplebar-placeholder{max-height:100%;max-width:100%;width:100%;pointer-events:none}.simplebar-height-auto-observer-wrapper{box-sizing:inherit!important;height:100%;width:100%;max-width:1px;position:relative;float:left;max-height:1px;overflow:hidden;z-index:-1;padding:0;margin:0;pointer-events:none;flex-grow:inherit;flex-shrink:0;flex-basis:0}.simplebar-height-auto-observer{box-sizing:inherit;display:block;opacity:0;position:absolute;top:0;left:0;height:1000%;width:1000%;min-height:1px;min-width:1px;overflow:hidden;pointer-events:none;z-index:-1}.simplebar-track{z-index:1;position:absolute;right:0;bottom:0;pointer-events:none;overflow:hidden}[data-simplebar].simplebar-dragging{pointer-events:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[data-simplebar].simplebar-dragging .simplebar-content{pointer-events:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[data-simplebar].simplebar-dragging .simplebar-track{pointer-events:all}.simplebar-scrollbar{position:absolute;left:0;right:0;min-height:10px}.simplebar-scrollbar:before{position:absolute;content:'';background:#000;border-radius:7px;left:2px;right:2px;opacity:0;transition:opacity .2s .5s linear}.simplebar-scrollbar.simplebar-visible:before{opacity:.5;transition-delay:0s;transition-duration:0s}.simplebar-track.simplebar-vertical{top:0;width:11px}.simplebar-scrollbar:before{top:2px;bottom:2px;left:2px;right:2px}.simplebar-track.simplebar-horizontal{left:0;height:11px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar{right:auto;left:0;top:0;bottom:0;min-height:0;min-width:10px;width:auto}[data-simplebar-direction=rtl] .simplebar-track.simplebar-vertical{right:auto;left:0}.simplebar-dummy-scrollbar-size{direction:rtl;position:fixed;opacity:0;visibility:hidden;height:500px;width:500px;overflow-y:hidden;overflow-x:scroll;-ms-overflow-style:scrollbar!important}.simplebar-dummy-scrollbar-size>div{width:200%;height:200%;margin:10px 0}.simplebar-hide-scrollbar{position:fixed;left:0;visibility:hidden;overflow-y:scroll;scrollbar-width:none;-ms-overflow-style:none}\n";
  document.head.appendChild(__vite_style__);
  function _mergeNamespaces(n2, m2) {
    for (var i2 = 0; i2 < m2.length; i2++) {
      const e2 = m2[i2];
      if (typeof e2 !== "string" && !Array.isArray(e2)) {
        for (const k2 in e2) {
          if (k2 !== "default" && !(k2 in n2)) {
            const d2 = Object.getOwnPropertyDescriptor(e2, k2);
            if (d2) {
              Object.defineProperty(n2, k2, d2.get ? d2 : {
                enumerable: true,
                get: () => e2[k2]
              });
            }
          }
        }
      }
    }
    return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
  }
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x2) {
    return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
  }
  function getAugmentedNamespace(n2) {
    if (n2.__esModule)
      return n2;
    var f2 = n2.default;
    if (typeof f2 == "function") {
      var a2 = function a3() {
        if (this instanceof a3) {
          var args = [null];
          args.push.apply(args, arguments);
          var Ctor = Function.bind.apply(f2, args);
          return new Ctor();
        }
        return f2.apply(this, arguments);
      };
      a2.prototype = f2.prototype;
    } else
      a2 = {};
    Object.defineProperty(a2, "__esModule", { value: true });
    Object.keys(n2).forEach(function(k2) {
      var d2 = Object.getOwnPropertyDescriptor(n2, k2);
      Object.defineProperty(a2, k2, d2.get ? d2 : {
        enumerable: true,
        get: function() {
          return n2[k2];
        }
      });
    });
    return a2;
  }
  var jsxRuntimeExports = {};
  var jsxRuntime = {
    get exports() {
      return jsxRuntimeExports;
    },
    set exports(v2) {
      jsxRuntimeExports = v2;
    }
  };
  var reactJsxRuntime_production_min = {};
  var reactExports = {};
  var react = {
    get exports() {
      return reactExports;
    },
    set exports(v2) {
      reactExports = v2;
    }
  };
  var react_production_min = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var l$9 = Symbol.for("react.element"), n$7 = Symbol.for("react.portal"), p$9 = Symbol.for("react.fragment"), q$5 = Symbol.for("react.strict_mode"), r$7 = Symbol.for("react.profiler"), t$4 = Symbol.for("react.provider"), u$7 = Symbol.for("react.context"), v$6 = Symbol.for("react.forward_ref"), w$5 = Symbol.for("react.suspense"), x$6 = Symbol.for("react.memo"), y$8 = Symbol.for("react.lazy"), z$5 = Symbol.iterator;
  function A$4(a2) {
    if (null === a2 || "object" !== typeof a2)
      return null;
    a2 = z$5 && a2[z$5] || a2["@@iterator"];
    return "function" === typeof a2 ? a2 : null;
  }
  var B$2 = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C$4 = Object.assign, D$5 = {};
  function E$4(a2, b2, e2) {
    this.props = a2;
    this.context = b2;
    this.refs = D$5;
    this.updater = e2 || B$2;
  }
  E$4.prototype.isReactComponent = {};
  E$4.prototype.setState = function(a2, b2) {
    if ("object" !== typeof a2 && "function" !== typeof a2 && null != a2)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a2, b2, "setState");
  };
  E$4.prototype.forceUpdate = function(a2) {
    this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
  };
  function F$3() {
  }
  F$3.prototype = E$4.prototype;
  function G$2(a2, b2, e2) {
    this.props = a2;
    this.context = b2;
    this.refs = D$5;
    this.updater = e2 || B$2;
  }
  var H$4 = G$2.prototype = new F$3();
  H$4.constructor = G$2;
  C$4(H$4, E$4.prototype);
  H$4.isPureReactComponent = true;
  var I$4 = Array.isArray, J$2 = Object.prototype.hasOwnProperty, K$2 = { current: null }, L$5 = { key: true, ref: true, __self: true, __source: true };
  function M$2(a2, b2, e2) {
    var d2, c2 = {}, k2 = null, h2 = null;
    if (null != b2)
      for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2)
        J$2.call(b2, d2) && !L$5.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
    var g2 = arguments.length - 2;
    if (1 === g2)
      c2.children = e2;
    else if (1 < g2) {
      for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
        f2[m2] = arguments[m2 + 2];
      c2.children = f2;
    }
    if (a2 && a2.defaultProps)
      for (d2 in g2 = a2.defaultProps, g2)
        void 0 === c2[d2] && (c2[d2] = g2[d2]);
    return { $$typeof: l$9, type: a2, key: k2, ref: h2, props: c2, _owner: K$2.current };
  }
  function N$2(a2, b2) {
    return { $$typeof: l$9, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
  }
  function O$3(a2) {
    return "object" === typeof a2 && null !== a2 && a2.$$typeof === l$9;
  }
  function escape(a2) {
    var b2 = { "=": "=0", ":": "=2" };
    return "$" + a2.replace(/[=:]/g, function(a3) {
      return b2[a3];
    });
  }
  var P$2 = /\/+/g;
  function Q$4(a2, b2) {
    return "object" === typeof a2 && null !== a2 && null != a2.key ? escape("" + a2.key) : b2.toString(36);
  }
  function R$3(a2, b2, e2, d2, c2) {
    var k2 = typeof a2;
    if ("undefined" === k2 || "boolean" === k2)
      a2 = null;
    var h2 = false;
    if (null === a2)
      h2 = true;
    else
      switch (k2) {
        case "string":
        case "number":
          h2 = true;
          break;
        case "object":
          switch (a2.$$typeof) {
            case l$9:
            case n$7:
              h2 = true;
          }
      }
    if (h2)
      return h2 = a2, c2 = c2(h2), a2 = "" === d2 ? "." + Q$4(h2, 0) : d2, I$4(c2) ? (e2 = "", null != a2 && (e2 = a2.replace(P$2, "$&/") + "/"), R$3(c2, b2, e2, "", function(a3) {
        return a3;
      })) : null != c2 && (O$3(c2) && (c2 = N$2(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$2, "$&/") + "/") + a2)), b2.push(c2)), 1;
    h2 = 0;
    d2 = "" === d2 ? "." : d2 + ":";
    if (I$4(a2))
      for (var g2 = 0; g2 < a2.length; g2++) {
        k2 = a2[g2];
        var f2 = d2 + Q$4(k2, g2);
        h2 += R$3(k2, b2, e2, f2, c2);
      }
    else if (f2 = A$4(a2), "function" === typeof f2)
      for (a2 = f2.call(a2), g2 = 0; !(k2 = a2.next()).done; )
        k2 = k2.value, f2 = d2 + Q$4(k2, g2++), h2 += R$3(k2, b2, e2, f2, c2);
    else if ("object" === k2)
      throw b2 = String(a2), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
    return h2;
  }
  function S$3(a2, b2, e2) {
    if (null == a2)
      return a2;
    var d2 = [], c2 = 0;
    R$3(a2, d2, "", "", function(a3) {
      return b2.call(e2, a3, c2++);
    });
    return d2;
  }
  function T$3(a2) {
    if (-1 === a2._status) {
      var b2 = a2._result;
      b2 = b2();
      b2.then(function(b3) {
        if (0 === a2._status || -1 === a2._status)
          a2._status = 1, a2._result = b3;
      }, function(b3) {
        if (0 === a2._status || -1 === a2._status)
          a2._status = 2, a2._result = b3;
      });
      -1 === a2._status && (a2._status = 0, a2._result = b2);
    }
    if (1 === a2._status)
      return a2._result.default;
    throw a2._result;
  }
  var U$2 = { current: null }, V$4 = { transition: null }, W$4 = { ReactCurrentDispatcher: U$2, ReactCurrentBatchConfig: V$4, ReactCurrentOwner: K$2 };
  react_production_min.Children = { map: S$3, forEach: function(a2, b2, e2) {
    S$3(a2, function() {
      b2.apply(this, arguments);
    }, e2);
  }, count: function(a2) {
    var b2 = 0;
    S$3(a2, function() {
      b2++;
    });
    return b2;
  }, toArray: function(a2) {
    return S$3(a2, function(a3) {
      return a3;
    }) || [];
  }, only: function(a2) {
    if (!O$3(a2))
      throw Error("React.Children.only expected to receive a single React element child.");
    return a2;
  } };
  react_production_min.Component = E$4;
  react_production_min.Fragment = p$9;
  react_production_min.Profiler = r$7;
  react_production_min.PureComponent = G$2;
  react_production_min.StrictMode = q$5;
  react_production_min.Suspense = w$5;
  react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$4;
  react_production_min.cloneElement = function(a2, b2, e2) {
    if (null === a2 || void 0 === a2)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
    var d2 = C$4({}, a2.props), c2 = a2.key, k2 = a2.ref, h2 = a2._owner;
    if (null != b2) {
      void 0 !== b2.ref && (k2 = b2.ref, h2 = K$2.current);
      void 0 !== b2.key && (c2 = "" + b2.key);
      if (a2.type && a2.type.defaultProps)
        var g2 = a2.type.defaultProps;
      for (f2 in b2)
        J$2.call(b2, f2) && !L$5.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
    }
    var f2 = arguments.length - 2;
    if (1 === f2)
      d2.children = e2;
    else if (1 < f2) {
      g2 = Array(f2);
      for (var m2 = 0; m2 < f2; m2++)
        g2[m2] = arguments[m2 + 2];
      d2.children = g2;
    }
    return { $$typeof: l$9, type: a2.type, key: c2, ref: k2, props: d2, _owner: h2 };
  };
  react_production_min.createContext = function(a2) {
    a2 = { $$typeof: u$7, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
    a2.Provider = { $$typeof: t$4, _context: a2 };
    return a2.Consumer = a2;
  };
  react_production_min.createElement = M$2;
  react_production_min.createFactory = function(a2) {
    var b2 = M$2.bind(null, a2);
    b2.type = a2;
    return b2;
  };
  react_production_min.createRef = function() {
    return { current: null };
  };
  react_production_min.forwardRef = function(a2) {
    return { $$typeof: v$6, render: a2 };
  };
  react_production_min.isValidElement = O$3;
  react_production_min.lazy = function(a2) {
    return { $$typeof: y$8, _payload: { _status: -1, _result: a2 }, _init: T$3 };
  };
  react_production_min.memo = function(a2, b2) {
    return { $$typeof: x$6, type: a2, compare: void 0 === b2 ? null : b2 };
  };
  react_production_min.startTransition = function(a2) {
    var b2 = V$4.transition;
    V$4.transition = {};
    try {
      a2();
    } finally {
      V$4.transition = b2;
    }
  };
  react_production_min.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  };
  react_production_min.useCallback = function(a2, b2) {
    return U$2.current.useCallback(a2, b2);
  };
  react_production_min.useContext = function(a2) {
    return U$2.current.useContext(a2);
  };
  react_production_min.useDebugValue = function() {
  };
  react_production_min.useDeferredValue = function(a2) {
    return U$2.current.useDeferredValue(a2);
  };
  react_production_min.useEffect = function(a2, b2) {
    return U$2.current.useEffect(a2, b2);
  };
  react_production_min.useId = function() {
    return U$2.current.useId();
  };
  react_production_min.useImperativeHandle = function(a2, b2, e2) {
    return U$2.current.useImperativeHandle(a2, b2, e2);
  };
  react_production_min.useInsertionEffect = function(a2, b2) {
    return U$2.current.useInsertionEffect(a2, b2);
  };
  react_production_min.useLayoutEffect = function(a2, b2) {
    return U$2.current.useLayoutEffect(a2, b2);
  };
  react_production_min.useMemo = function(a2, b2) {
    return U$2.current.useMemo(a2, b2);
  };
  react_production_min.useReducer = function(a2, b2, e2) {
    return U$2.current.useReducer(a2, b2, e2);
  };
  react_production_min.useRef = function(a2) {
    return U$2.current.useRef(a2);
  };
  react_production_min.useState = function(a2) {
    return U$2.current.useState(a2);
  };
  react_production_min.useSyncExternalStore = function(a2, b2, e2) {
    return U$2.current.useSyncExternalStore(a2, b2, e2);
  };
  react_production_min.useTransition = function() {
    return U$2.current.useTransition();
  };
  react_production_min.version = "18.2.0";
  (function(module) {
    {
      module.exports = react_production_min;
    }
  })(react);
  const React$1 = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
  const React$2 = /* @__PURE__ */ _mergeNamespaces({
    __proto__: null,
    default: React$1
  }, [reactExports]);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var f$6 = reactExports, k$6 = Symbol.for("react.element"), l$8 = Symbol.for("react.fragment"), m$7 = Object.prototype.hasOwnProperty, n$6 = f$6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$8 = { key: true, ref: true, __self: true, __source: true };
  function q$4(c2, a2, g2) {
    var b2, d2 = {}, e2 = null, h2 = null;
    void 0 !== g2 && (e2 = "" + g2);
    void 0 !== a2.key && (e2 = "" + a2.key);
    void 0 !== a2.ref && (h2 = a2.ref);
    for (b2 in a2)
      m$7.call(a2, b2) && !p$8.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
    if (c2 && c2.defaultProps)
      for (b2 in a2 = c2.defaultProps, a2)
        void 0 === d2[b2] && (d2[b2] = a2[b2]);
    return { $$typeof: k$6, type: c2, key: e2, ref: h2, props: d2, _owner: n$6.current };
  }
  reactJsxRuntime_production_min.Fragment = l$8;
  reactJsxRuntime_production_min.jsx = q$4;
  reactJsxRuntime_production_min.jsxs = q$4;
  (function(module) {
    {
      module.exports = reactJsxRuntime_production_min;
    }
  })(jsxRuntime);
  const Fragment = jsxRuntimeExports.Fragment;
  const jsx = jsxRuntimeExports.jsx;
  const jsxs = jsxRuntimeExports.jsxs;
  const e$3 = Symbol(), t$3 = Symbol(), r$6 = "a", n$5 = "w";
  let o$2 = (e2, t2) => new Proxy(e2, t2);
  const s$2 = Object.getPrototypeOf, c$7 = /* @__PURE__ */ new WeakMap(), l$7 = (e2) => e2 && (c$7.has(e2) ? c$7.get(e2) : s$2(e2) === Object.prototype || s$2(e2) === Array.prototype), f$5 = (e2) => "object" == typeof e2 && null !== e2, i$3 = (e2) => {
    if (Array.isArray(e2))
      return Array.from(e2);
    const t2 = Object.getOwnPropertyDescriptors(e2);
    return Object.values(t2).forEach((e3) => {
      e3.configurable = true;
    }), Object.create(s$2(e2), t2);
  }, u$6 = (e2) => e2[t$3] || e2, a$2 = (s2, c2, f2, p2) => {
    if (!l$7(s2))
      return s2;
    let g2 = p2 && p2.get(s2);
    if (!g2) {
      const e2 = u$6(s2);
      g2 = ((e3) => Object.values(Object.getOwnPropertyDescriptors(e3)).some((e4) => !e4.configurable && !e4.writable))(e2) ? [e2, i$3(e2)] : [e2], null == p2 || p2.set(s2, g2);
    }
    const [y2, h2] = g2;
    let w2 = f2 && f2.get(y2);
    return w2 && w2[1].f === !!h2 || (w2 = ((o2, s3) => {
      const c3 = { f: s3 };
      let l2 = false;
      const f3 = (e2, t2) => {
        if (!l2) {
          let s4 = c3[r$6].get(o2);
          if (s4 || (s4 = {}, c3[r$6].set(o2, s4)), e2 === n$5)
            s4[n$5] = true;
          else {
            let r2 = s4[e2];
            r2 || (r2 = /* @__PURE__ */ new Set(), s4[e2] = r2), r2.add(t2);
          }
        }
      }, i2 = { get: (e2, n2) => n2 === t$3 ? o2 : (f3("k", n2), a$2(Reflect.get(e2, n2), c3[r$6], c3.c)), has: (t2, n2) => n2 === e$3 ? (l2 = true, c3[r$6].delete(o2), true) : (f3("h", n2), Reflect.has(t2, n2)), getOwnPropertyDescriptor: (e2, t2) => (f3("o", t2), Reflect.getOwnPropertyDescriptor(e2, t2)), ownKeys: (e2) => (f3(n$5), Reflect.ownKeys(e2)) };
      return s3 && (i2.set = i2.deleteProperty = () => false), [i2, c3];
    })(y2, !!h2), w2[1].p = o$2(h2 || y2, w2[0]), f2 && f2.set(y2, w2)), w2[1][r$6] = c2, w2[1].c = f2, w2[1].p;
  }, p$7 = (e2, t2, r2, o2) => {
    if (Object.is(e2, t2))
      return false;
    if (!f$5(e2) || !f$5(t2))
      return true;
    const s2 = r2.get(u$6(e2));
    if (!s2)
      return true;
    if (o2) {
      const r3 = o2.get(e2);
      if (r3 && r3.n === t2)
        return r3.g;
      o2.set(e2, { n: t2, g: false });
    }
    let c2 = null;
    try {
      for (const r3 of s2.h || [])
        if (c2 = Reflect.has(e2, r3) !== Reflect.has(t2, r3), c2)
          return c2;
      if (true === s2[n$5]) {
        if (c2 = ((e3, t3) => {
          const r3 = Reflect.ownKeys(e3), n2 = Reflect.ownKeys(t3);
          return r3.length !== n2.length || r3.some((e4, t4) => e4 !== n2[t4]);
        })(e2, t2), c2)
          return c2;
      } else
        for (const r3 of s2.o || [])
          if (c2 = !!Reflect.getOwnPropertyDescriptor(e2, r3) != !!Reflect.getOwnPropertyDescriptor(t2, r3), c2)
            return c2;
      for (const n2 of s2.k || [])
        if (c2 = p$7(e2[n2], t2[n2], r2, o2), c2)
          return c2;
      return null === c2 && (c2 = true), c2;
    } finally {
      o2 && o2.set(e2, { n: t2, g: c2 });
    }
  }, y$7 = (e2) => l$7(e2) && e2[t$3] || null, h$8 = (e2, t2 = true) => {
    c$7.set(e2, t2);
  }, w$4 = (e2, t2, r2) => {
    const o2 = [], s2 = /* @__PURE__ */ new WeakSet(), c2 = (e3, l2) => {
      if (s2.has(e3))
        return;
      f$5(e3) && s2.add(e3);
      const i2 = f$5(e3) && t2.get(u$6(e3));
      if (i2) {
        var a2, p2;
        if (null == (a2 = i2.h) || a2.forEach((e4) => {
          const t3 = `:has(${String(e4)})`;
          o2.push(l2 ? [...l2, t3] : [t3]);
        }), true === i2[n$5]) {
          const e4 = ":ownKeys";
          o2.push(l2 ? [...l2, e4] : [e4]);
        } else {
          var g2;
          null == (g2 = i2.o) || g2.forEach((e4) => {
            const t3 = `:hasOwn(${String(e4)})`;
            o2.push(l2 ? [...l2, t3] : [t3]);
          });
        }
        null == (p2 = i2.k) || p2.forEach((t3) => {
          r2 && !("value" in (Object.getOwnPropertyDescriptor(e3, t3) || {})) || c2(e3[t3], l2 ? [...l2, t3] : [t3]);
        });
      } else
        l2 && o2.push(l2);
    };
    return c2(e2), o2;
  };
  const isObject$6 = (x2) => typeof x2 === "object" && x2 !== null;
  const proxyStateMap = /* @__PURE__ */ new WeakMap();
  const refSet = /* @__PURE__ */ new WeakSet();
  const buildProxyFunction = (objectIs = Object.is, newProxy = (target, handler) => new Proxy(target, handler), canProxy = (x2) => isObject$6(x2) && !refSet.has(x2) && (Array.isArray(x2) || !(Symbol.iterator in x2)) && !(x2 instanceof WeakMap) && !(x2 instanceof WeakSet) && !(x2 instanceof Error) && !(x2 instanceof Number) && !(x2 instanceof Date) && !(x2 instanceof String) && !(x2 instanceof RegExp) && !(x2 instanceof ArrayBuffer), defaultHandlePromise = (promise) => {
    switch (promise.status) {
      case "fulfilled":
        return promise.value;
      case "rejected":
        throw promise.reason;
      default:
        throw promise;
    }
  }, snapCache = /* @__PURE__ */ new WeakMap(), createSnapshot = (target, version, handlePromise = defaultHandlePromise) => {
    const cache = snapCache.get(target);
    if ((cache == null ? void 0 : cache[0]) === version) {
      return cache[1];
    }
    const snap2 = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
    h$8(snap2, true);
    snapCache.set(target, [version, snap2]);
    Reflect.ownKeys(target).forEach((key) => {
      if (Object.getOwnPropertyDescriptor(snap2, key)) {
        return;
      }
      const value = Reflect.get(target, key);
      const desc = {
        value,
        enumerable: true,
        // This is intentional to avoid copying with proxy-compare.
        // It's still non-writable, so it avoids assigning a value.
        configurable: true
      };
      if (refSet.has(value)) {
        h$8(value, false);
      } else if (value instanceof Promise) {
        delete desc.value;
        desc.get = () => handlePromise(value);
      } else if (proxyStateMap.has(value)) {
        const [target2, ensureVersion] = proxyStateMap.get(
          value
        );
        desc.value = createSnapshot(
          target2,
          ensureVersion(),
          handlePromise
        );
      }
      Object.defineProperty(snap2, key, desc);
    });
    return snap2;
  }, proxyCache = /* @__PURE__ */ new WeakMap(), versionHolder = [1, 1], proxyFunction = (initialObject) => {
    if (!isObject$6(initialObject)) {
      throw new Error("object required");
    }
    const found = proxyCache.get(initialObject);
    if (found) {
      return found;
    }
    let version = versionHolder[0];
    const listeners = /* @__PURE__ */ new Set();
    const notifyUpdate = (op, nextVersion = ++versionHolder[0]) => {
      if (version !== nextVersion) {
        version = nextVersion;
        listeners.forEach((listener) => listener(op, nextVersion));
      }
    };
    let checkVersion = versionHolder[1];
    const ensureVersion = (nextCheckVersion = ++versionHolder[1]) => {
      if (checkVersion !== nextCheckVersion && !listeners.size) {
        checkVersion = nextCheckVersion;
        propProxyStates.forEach(([propProxyState]) => {
          const propVersion = propProxyState[1](nextCheckVersion);
          if (propVersion > version) {
            version = propVersion;
          }
        });
      }
      return version;
    };
    const createPropListener = (prop) => (op, nextVersion) => {
      const newOp = [...op];
      newOp[1] = [prop, ...newOp[1]];
      notifyUpdate(newOp, nextVersion);
    };
    const propProxyStates = /* @__PURE__ */ new Map();
    const addPropListener = (prop, propProxyState) => {
      if (({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": false } && "production") !== "production" && propProxyStates.has(prop)) {
        throw new Error("prop listener already exists");
      }
      if (listeners.size) {
        const remove = propProxyState[3](createPropListener(prop));
        propProxyStates.set(prop, [propProxyState, remove]);
      } else {
        propProxyStates.set(prop, [propProxyState]);
      }
    };
    const removePropListener = (prop) => {
      var _a2;
      const entry = propProxyStates.get(prop);
      if (entry) {
        propProxyStates.delete(prop);
        (_a2 = entry[1]) == null ? void 0 : _a2.call(entry);
      }
    };
    const addListener = (listener) => {
      listeners.add(listener);
      if (listeners.size === 1) {
        propProxyStates.forEach(([propProxyState, prevRemove], prop) => {
          if (({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": false } && "production") !== "production" && prevRemove) {
            throw new Error("remove already exists");
          }
          const remove = propProxyState[3](createPropListener(prop));
          propProxyStates.set(prop, [propProxyState, remove]);
        });
      }
      const removeListener = () => {
        listeners.delete(listener);
        if (listeners.size === 0) {
          propProxyStates.forEach(([propProxyState, remove], prop) => {
            if (remove) {
              remove();
              propProxyStates.set(prop, [propProxyState]);
            }
          });
        }
      };
      return removeListener;
    };
    const baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject));
    const handler = {
      deleteProperty(target, prop) {
        const prevValue = Reflect.get(target, prop);
        removePropListener(prop);
        const deleted = Reflect.deleteProperty(target, prop);
        if (deleted) {
          notifyUpdate(["delete", [prop], prevValue]);
        }
        return deleted;
      },
      set(target, prop, value, receiver) {
        const hasPrevValue = Reflect.has(target, prop);
        const prevValue = Reflect.get(target, prop, receiver);
        if (hasPrevValue && (objectIs(prevValue, value) || proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value)))) {
          return true;
        }
        removePropListener(prop);
        if (isObject$6(value)) {
          value = y$7(value) || value;
        }
        let nextValue = value;
        if (value instanceof Promise) {
          value.then((v2) => {
            value.status = "fulfilled";
            value.value = v2;
            notifyUpdate(["resolve", [prop], v2]);
          }).catch((e2) => {
            value.status = "rejected";
            value.reason = e2;
            notifyUpdate(["reject", [prop], e2]);
          });
        } else {
          if (!proxyStateMap.has(value) && canProxy(value)) {
            nextValue = proxyFunction(value);
          }
          const childProxyState = !refSet.has(nextValue) && proxyStateMap.get(nextValue);
          if (childProxyState) {
            addPropListener(prop, childProxyState);
          }
        }
        Reflect.set(target, prop, nextValue, receiver);
        notifyUpdate(["set", [prop], value, prevValue]);
        return true;
      }
    };
    const proxyObject = newProxy(baseObject, handler);
    proxyCache.set(initialObject, proxyObject);
    const proxyState = [
      baseObject,
      ensureVersion,
      createSnapshot,
      addListener
    ];
    proxyStateMap.set(proxyObject, proxyState);
    Reflect.ownKeys(initialObject).forEach((key) => {
      const desc = Object.getOwnPropertyDescriptor(
        initialObject,
        key
      );
      if ("value" in desc) {
        proxyObject[key] = initialObject[key];
        delete desc.value;
        delete desc.writable;
      }
      Object.defineProperty(baseObject, key, desc);
    });
    return proxyObject;
  }) => [
    // public functions
    proxyFunction,
    // shared state
    proxyStateMap,
    refSet,
    // internal things
    objectIs,
    newProxy,
    canProxy,
    defaultHandlePromise,
    snapCache,
    createSnapshot,
    proxyCache,
    versionHolder
  ];
  const [defaultProxyFunction] = buildProxyFunction();
  function proxy(initialObject = {}) {
    return defaultProxyFunction(initialObject);
  }
  function subscribe(proxyObject, callback, notifyInSync) {
    const proxyState = proxyStateMap.get(proxyObject);
    if (({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": false } && "production") !== "production" && !proxyState) {
      console.warn("Please use proxy object");
    }
    let promise;
    const ops = [];
    const addListener = proxyState[3];
    let isListenerActive = false;
    const listener = (op) => {
      ops.push(op);
      if (notifyInSync) {
        callback(ops.splice(0));
        return;
      }
      if (!promise) {
        promise = Promise.resolve().then(() => {
          promise = void 0;
          if (isListenerActive) {
            callback(ops.splice(0));
          }
        });
      }
    };
    const removeListener = addListener(listener);
    isListenerActive = true;
    return () => {
      isListenerActive = false;
      removeListener();
    };
  }
  function snapshot(proxyObject, handlePromise) {
    const proxyState = proxyStateMap.get(proxyObject);
    if (({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": false } && "production") !== "production" && !proxyState) {
      console.warn("Please use proxy object");
    }
    const [target, ensureVersion, createSnapshot] = proxyState;
    return createSnapshot(target, ensureVersion(), handlePromise);
  }
  var shimExports = {};
  var shim = {
    get exports() {
      return shimExports;
    },
    set exports(v2) {
      shimExports = v2;
    }
  };
  var useSyncExternalStoreShim_production_min = {};
  /**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var e$2 = reactExports;
  function h$7(a2, b2) {
    return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
  }
  var k$5 = "function" === typeof Object.is ? Object.is : h$7, l$6 = e$2.useState, m$6 = e$2.useEffect, n$4 = e$2.useLayoutEffect, p$6 = e$2.useDebugValue;
  function q$3(a2, b2) {
    var d2 = b2(), f2 = l$6({ inst: { value: d2, getSnapshot: b2 } }), c2 = f2[0].inst, g2 = f2[1];
    n$4(function() {
      c2.value = d2;
      c2.getSnapshot = b2;
      r$5(c2) && g2({ inst: c2 });
    }, [a2, d2, b2]);
    m$6(function() {
      r$5(c2) && g2({ inst: c2 });
      return a2(function() {
        r$5(c2) && g2({ inst: c2 });
      });
    }, [a2]);
    p$6(d2);
    return d2;
  }
  function r$5(a2) {
    var b2 = a2.getSnapshot;
    a2 = a2.value;
    try {
      var d2 = b2();
      return !k$5(a2, d2);
    } catch (f2) {
      return true;
    }
  }
  function t$2(a2, b2) {
    return b2();
  }
  var u$5 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t$2 : q$3;
  useSyncExternalStoreShim_production_min.useSyncExternalStore = void 0 !== e$2.useSyncExternalStore ? e$2.useSyncExternalStore : u$5;
  (function(module) {
    {
      module.exports = useSyncExternalStoreShim_production_min;
    }
  })(shim);
  const useSyncExternalStoreExports = /* @__PURE__ */ getDefaultExportFromCjs(shimExports);
  const { use } = React$1;
  const { useSyncExternalStore } = useSyncExternalStoreExports;
  const useAffectedDebugValue = (state, affected) => {
    const pathList = reactExports.useRef();
    reactExports.useEffect(() => {
      pathList.current = w$4(state, affected, true);
    });
    reactExports.useDebugValue(pathList.current);
  };
  const targetCache = /* @__PURE__ */ new WeakMap();
  function useSnapshot(proxyObject, options) {
    const notifyInSync = options == null ? void 0 : options.sync;
    const lastSnapshot = reactExports.useRef();
    const lastAffected = reactExports.useRef();
    let inRender = true;
    const currSnapshot = useSyncExternalStore(
      reactExports.useCallback(
        (callback) => {
          const unsub = subscribe(proxyObject, callback, notifyInSync);
          callback();
          return unsub;
        },
        [proxyObject, notifyInSync]
      ),
      () => {
        const nextSnapshot = snapshot(proxyObject, use);
        try {
          if (!inRender && lastSnapshot.current && lastAffected.current && !p$7(
            lastSnapshot.current,
            nextSnapshot,
            lastAffected.current,
            /* @__PURE__ */ new WeakMap()
          )) {
            return lastSnapshot.current;
          }
        } catch (e2) {
        }
        return nextSnapshot;
      },
      () => snapshot(proxyObject, use)
    );
    inRender = false;
    const currAffected = /* @__PURE__ */ new WeakMap();
    reactExports.useEffect(() => {
      lastSnapshot.current = currSnapshot;
      lastAffected.current = currAffected;
    });
    if (({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": false } && "production") !== "production") {
      useAffectedDebugValue(currSnapshot, currAffected);
    }
    const proxyCache = reactExports.useMemo(() => /* @__PURE__ */ new WeakMap(), []);
    return a$2(
      currSnapshot,
      currAffected,
      proxyCache,
      targetCache
    );
  }
  const DEVTOOLS = Symbol();
  function devtools(proxyObject, options) {
    if (typeof options === "string") {
      console.warn(
        "string name option is deprecated, use { name }. https://github.com/pmndrs/valtio/pull/400"
      );
      options = { name: options };
    }
    const { enabled, name = "" } = options || {};
    let extension;
    try {
      extension = (enabled != null ? enabled : ({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": false } && "production") !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
    } catch {
    }
    if (!extension) {
      if (({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": false } && "production") !== "production" && enabled) {
        console.warn("[Warning] Please install/enable Redux devtools extension");
      }
      return;
    }
    let isTimeTraveling = false;
    const devtools2 = extension.connect({ name });
    const unsub1 = subscribe(proxyObject, (ops) => {
      const action = ops.filter(([_2, path]) => path[0] !== DEVTOOLS).map(([op, path]) => `${op}:${path.map(String).join(".")}`).join(", ");
      if (!action) {
        return;
      }
      if (isTimeTraveling) {
        isTimeTraveling = false;
      } else {
        const snapWithoutDevtools = Object.assign({}, snapshot(proxyObject));
        delete snapWithoutDevtools[DEVTOOLS];
        devtools2.send(
          {
            type: action,
            updatedAt: (/* @__PURE__ */ new Date()).toLocaleString()
          },
          snapWithoutDevtools
        );
      }
    });
    const unsub2 = devtools2.subscribe((message) => {
      var _a2, _b2, _c2, _d2, _e2, _f;
      if (message.type === "ACTION" && message.payload) {
        try {
          Object.assign(proxyObject, JSON.parse(message.payload));
        } catch (e2) {
          console.error(
            "please dispatch a serializable value that JSON.parse() and proxy() support\n",
            e2
          );
        }
      }
      if (message.type === "DISPATCH" && message.state) {
        if (((_a2 = message.payload) == null ? void 0 : _a2.type) === "JUMP_TO_ACTION" || ((_b2 = message.payload) == null ? void 0 : _b2.type) === "JUMP_TO_STATE") {
          isTimeTraveling = true;
          const state = JSON.parse(message.state);
          Object.assign(proxyObject, state);
        }
        proxyObject[DEVTOOLS] = message;
      } else if (message.type === "DISPATCH" && ((_c2 = message.payload) == null ? void 0 : _c2.type) === "COMMIT") {
        devtools2.init(snapshot(proxyObject));
      } else if (message.type === "DISPATCH" && ((_d2 = message.payload) == null ? void 0 : _d2.type) === "IMPORT_STATE") {
        const actions = (_e2 = message.payload.nextLiftedState) == null ? void 0 : _e2.actionsById;
        const computedStates = ((_f = message.payload.nextLiftedState) == null ? void 0 : _f.computedStates) || [];
        isTimeTraveling = true;
        computedStates.forEach(({ state }, index2) => {
          const action = actions[index2] || "No action found";
          Object.assign(proxyObject, state);
          if (index2 === 0) {
            devtools2.init(snapshot(proxyObject));
          } else {
            devtools2.send(action, snapshot(proxyObject));
          }
        });
      }
    });
    devtools2.init(snapshot(proxyObject));
    return () => {
      unsub1();
      unsub2 == null ? void 0 : unsub2();
    };
  }
  function scrollDown() {
    setTimeout(() => {
      var _a2;
      logger.debug("scroll down");
      (_a2 = document.querySelector("#log-panel-log-container .simplebar-content-wrapper")) == null ? void 0 : _a2.scrollBy(0, 1e3);
    }, 10);
  }
  class Logger {
    constructor(maxSize = 100, shiftOffset = 10) {
      __publicField(this, "maxSize");
      __publicField(this, "shiftOffset");
      this.maxSize = maxSize;
      this.shiftOffset = shiftOffset;
    }
    get logs() {
      return store.logs;
    }
    addLog(log2) {
      store.logs.push(log2);
      if (store.userSettings.autoScrollDown) {
        scrollDown();
      }
    }
    log(option) {
      this.addLog({
        ...option,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        id: option.id ?? `${Math.random()}`
      });
    }
    info({ id: id2, content, extra, action }) {
      return this.log({ type: "info", id: id2, content, extra, action });
    }
    question({ id: id2, content, extra, action }) {
      return this.log({ type: "question", id: id2, content, extra, action });
    }
    error({ id: id2, content, extra, action }) {
      return this.log({ type: "error", id: id2, content, extra, action });
    }
    hr() {
      this.info({ content: "即将切换题型" });
    }
    debug(...content) {
      console.log(`[eocs-helper]`, ...content);
    }
  }
  const logger = new Logger();
  function listCacheClear$1() {
    this.__data__ = [];
    this.size = 0;
  }
  var _listCacheClear = listCacheClear$1;
  function eq$2(value, other) {
    return value === other || value !== value && other !== other;
  }
  var eq_1 = eq$2;
  var eq$1 = eq_1;
  function assocIndexOf$4(array, key) {
    var length2 = array.length;
    while (length2--) {
      if (eq$1(array[length2][0], key)) {
        return length2;
      }
    }
    return -1;
  }
  var _assocIndexOf = assocIndexOf$4;
  var assocIndexOf$3 = _assocIndexOf;
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function listCacheDelete$1(key) {
    var data = this.__data__, index2 = assocIndexOf$3(data, key);
    if (index2 < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index2 == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index2, 1);
    }
    --this.size;
    return true;
  }
  var _listCacheDelete = listCacheDelete$1;
  var assocIndexOf$2 = _assocIndexOf;
  function listCacheGet$1(key) {
    var data = this.__data__, index2 = assocIndexOf$2(data, key);
    return index2 < 0 ? void 0 : data[index2][1];
  }
  var _listCacheGet = listCacheGet$1;
  var assocIndexOf$1 = _assocIndexOf;
  function listCacheHas$1(key) {
    return assocIndexOf$1(this.__data__, key) > -1;
  }
  var _listCacheHas = listCacheHas$1;
  var assocIndexOf = _assocIndexOf;
  function listCacheSet$1(key, value) {
    var data = this.__data__, index2 = assocIndexOf(data, key);
    if (index2 < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index2][1] = value;
    }
    return this;
  }
  var _listCacheSet = listCacheSet$1;
  var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
  function ListCache$4(entries) {
    var index2 = -1, length2 = entries == null ? 0 : entries.length;
    this.clear();
    while (++index2 < length2) {
      var entry = entries[index2];
      this.set(entry[0], entry[1]);
    }
  }
  ListCache$4.prototype.clear = listCacheClear;
  ListCache$4.prototype["delete"] = listCacheDelete;
  ListCache$4.prototype.get = listCacheGet;
  ListCache$4.prototype.has = listCacheHas;
  ListCache$4.prototype.set = listCacheSet;
  var _ListCache = ListCache$4;
  var ListCache$3 = _ListCache;
  function stackClear$1() {
    this.__data__ = new ListCache$3();
    this.size = 0;
  }
  var _stackClear = stackClear$1;
  function stackDelete$1(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
  }
  var _stackDelete = stackDelete$1;
  function stackGet$1(key) {
    return this.__data__.get(key);
  }
  var _stackGet = stackGet$1;
  function stackHas$1(key) {
    return this.__data__.has(key);
  }
  var _stackHas = stackHas$1;
  var freeGlobal$3 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var _freeGlobal = freeGlobal$3;
  var freeGlobal$2 = _freeGlobal;
  var freeSelf$1 = typeof self == "object" && self && self.Object === Object && self;
  var root$b = freeGlobal$2 || freeSelf$1 || Function("return this")();
  var _root = root$b;
  var root$a = _root;
  var Symbol$6 = root$a.Symbol;
  var _Symbol = Symbol$6;
  var Symbol$5 = _Symbol;
  var objectProto$d = Object.prototype;
  var hasOwnProperty$9 = objectProto$d.hasOwnProperty;
  var nativeObjectToString$3 = objectProto$d.toString;
  var symToStringTag$3 = Symbol$5 ? Symbol$5.toStringTag : void 0;
  function getRawTag$2(value) {
    var isOwn = hasOwnProperty$9.call(value, symToStringTag$3), tag = value[symToStringTag$3];
    try {
      value[symToStringTag$3] = void 0;
      var unmasked = true;
    } catch (e2) {
    }
    var result = nativeObjectToString$3.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$3] = tag;
      } else {
        delete value[symToStringTag$3];
      }
    }
    return result;
  }
  var _getRawTag = getRawTag$2;
  var objectProto$c = Object.prototype;
  var nativeObjectToString$2 = objectProto$c.toString;
  function objectToString$2(value) {
    return nativeObjectToString$2.call(value);
  }
  var _objectToString = objectToString$2;
  var Symbol$4 = _Symbol, getRawTag$1 = _getRawTag, objectToString$1 = _objectToString;
  var nullTag$1 = "[object Null]", undefinedTag$1 = "[object Undefined]";
  var symToStringTag$2 = Symbol$4 ? Symbol$4.toStringTag : void 0;
  function baseGetTag$6(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag$1 : nullTag$1;
    }
    return symToStringTag$2 && symToStringTag$2 in Object(value) ? getRawTag$1(value) : objectToString$1(value);
  }
  var _baseGetTag = baseGetTag$6;
  function isObject$5(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var isObject_1 = isObject$5;
  var baseGetTag$5 = _baseGetTag, isObject$4 = isObject_1;
  var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
  function isFunction$4(value) {
    if (!isObject$4(value)) {
      return false;
    }
    var tag = baseGetTag$5(value);
    return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  var isFunction_1 = isFunction$4;
  var root$9 = _root;
  var coreJsData$1 = root$9["__core-js_shared__"];
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
      } catch (e2) {
      }
      try {
        return func + "";
      } catch (e2) {
      }
    }
    return "";
  }
  var _toSource = toSource$2;
  var isFunction$3 = isFunction_1, isMasked = _isMasked, isObject$3 = isObject_1, toSource$1 = _toSource;
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto = Function.prototype, objectProto$b = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty$8 = objectProto$b.hasOwnProperty;
  var reIsNative = RegExp(
    "^" + funcToString.call(hasOwnProperty$8).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function baseIsNative$1(value) {
    if (!isObject$3(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction$3(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource$1(value));
  }
  var _baseIsNative = baseIsNative$1;
  function getValue$2(object, key) {
    return object == null ? void 0 : object[key];
  }
  var _getValue = getValue$2;
  var baseIsNative = _baseIsNative, getValue$1 = _getValue;
  function getNative$6(object, key) {
    var value = getValue$1(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  var _getNative = getNative$6;
  var getNative$5 = _getNative, root$8 = _root;
  var Map$4 = getNative$5(root$8, "Map");
  var _Map = Map$4;
  var getNative$4 = _getNative;
  var nativeCreate$4 = getNative$4(Object, "create");
  var _nativeCreate = nativeCreate$4;
  var nativeCreate$3 = _nativeCreate;
  function hashClear$1() {
    this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
    this.size = 0;
  }
  var _hashClear = hashClear$1;
  function hashDelete$1(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  var _hashDelete = hashDelete$1;
  var nativeCreate$2 = _nativeCreate;
  var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
  var objectProto$a = Object.prototype;
  var hasOwnProperty$7 = objectProto$a.hasOwnProperty;
  function hashGet$1(key) {
    var data = this.__data__;
    if (nativeCreate$2) {
      var result = data[key];
      return result === HASH_UNDEFINED$2 ? void 0 : result;
    }
    return hasOwnProperty$7.call(data, key) ? data[key] : void 0;
  }
  var _hashGet = hashGet$1;
  var nativeCreate$1 = _nativeCreate;
  var objectProto$9 = Object.prototype;
  var hasOwnProperty$6 = objectProto$9.hasOwnProperty;
  function hashHas$1(key) {
    var data = this.__data__;
    return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$6.call(data, key);
  }
  var _hashHas = hashHas$1;
  var nativeCreate = _nativeCreate;
  var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
  function hashSet$1(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
    return this;
  }
  var _hashSet = hashSet$1;
  var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
  function Hash$1(entries) {
    var index2 = -1, length2 = entries == null ? 0 : entries.length;
    this.clear();
    while (++index2 < length2) {
      var entry = entries[index2];
      this.set(entry[0], entry[1]);
    }
  }
  Hash$1.prototype.clear = hashClear;
  Hash$1.prototype["delete"] = hashDelete;
  Hash$1.prototype.get = hashGet;
  Hash$1.prototype.has = hashHas;
  Hash$1.prototype.set = hashSet;
  var _Hash = Hash$1;
  var Hash = _Hash, ListCache$2 = _ListCache, Map$3 = _Map;
  function mapCacheClear$1() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash(),
      "map": new (Map$3 || ListCache$2)(),
      "string": new Hash()
    };
  }
  var _mapCacheClear = mapCacheClear$1;
  function isKeyable$1(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  var _isKeyable = isKeyable$1;
  var isKeyable = _isKeyable;
  function getMapData$4(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  var _getMapData = getMapData$4;
  var getMapData$3 = _getMapData;
  function mapCacheDelete$1(key) {
    var result = getMapData$3(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  var _mapCacheDelete = mapCacheDelete$1;
  var getMapData$2 = _getMapData;
  function mapCacheGet$1(key) {
    return getMapData$2(this, key).get(key);
  }
  var _mapCacheGet = mapCacheGet$1;
  var getMapData$1 = _getMapData;
  function mapCacheHas$1(key) {
    return getMapData$1(this, key).has(key);
  }
  var _mapCacheHas = mapCacheHas$1;
  var getMapData = _getMapData;
  function mapCacheSet$1(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  var _mapCacheSet = mapCacheSet$1;
  var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
  function MapCache$2(entries) {
    var index2 = -1, length2 = entries == null ? 0 : entries.length;
    this.clear();
    while (++index2 < length2) {
      var entry = entries[index2];
      this.set(entry[0], entry[1]);
    }
  }
  MapCache$2.prototype.clear = mapCacheClear;
  MapCache$2.prototype["delete"] = mapCacheDelete;
  MapCache$2.prototype.get = mapCacheGet;
  MapCache$2.prototype.has = mapCacheHas;
  MapCache$2.prototype.set = mapCacheSet;
  var _MapCache = MapCache$2;
  var ListCache$1 = _ListCache, Map$2 = _Map, MapCache$1 = _MapCache;
  var LARGE_ARRAY_SIZE = 200;
  function stackSet$1(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache$1) {
      var pairs = data.__data__;
      if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache$1(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  var _stackSet = stackSet$1;
  var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
  function Stack$1(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  Stack$1.prototype.clear = stackClear;
  Stack$1.prototype["delete"] = stackDelete;
  Stack$1.prototype.get = stackGet;
  Stack$1.prototype.has = stackHas;
  Stack$1.prototype.set = stackSet;
  var _Stack = Stack$1;
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  function setCacheAdd$1(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }
  var _setCacheAdd = setCacheAdd$1;
  function setCacheHas$1(value) {
    return this.__data__.has(value);
  }
  var _setCacheHas = setCacheHas$1;
  var MapCache = _MapCache, setCacheAdd = _setCacheAdd, setCacheHas = _setCacheHas;
  function SetCache$1(values) {
    var index2 = -1, length2 = values == null ? 0 : values.length;
    this.__data__ = new MapCache();
    while (++index2 < length2) {
      this.add(values[index2]);
    }
  }
  SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
  SetCache$1.prototype.has = setCacheHas;
  var _SetCache = SetCache$1;
  function arraySome$1(array, predicate) {
    var index2 = -1, length2 = array == null ? 0 : array.length;
    while (++index2 < length2) {
      if (predicate(array[index2], index2, array)) {
        return true;
      }
    }
    return false;
  }
  var _arraySome = arraySome$1;
  function cacheHas$1(cache, key) {
    return cache.has(key);
  }
  var _cacheHas = cacheHas$1;
  var SetCache = _SetCache, arraySome = _arraySome, cacheHas = _cacheHas;
  var COMPARE_PARTIAL_FLAG$3 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
  function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) {
      return arrStacked == other && othStacked == array;
    }
    var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : void 0;
    stack.set(array, other);
    stack.set(other, array);
    while (++index2 < arrLength) {
      var arrValue = array[index2], othValue = other[index2];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
      }
      if (compared !== void 0) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      if (seen) {
        if (!arraySome(other, function(othValue2, othIndex) {
          if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
            return seen.push(othIndex);
          }
        })) {
          result = false;
          break;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
        result = false;
        break;
      }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
  }
  var _equalArrays = equalArrays$2;
  var root$7 = _root;
  var Uint8Array$1 = root$7.Uint8Array;
  var _Uint8Array = Uint8Array$1;
  function mapToArray$1(map) {
    var index2 = -1, result = Array(map.size);
    map.forEach(function(value, key) {
      result[++index2] = [key, value];
    });
    return result;
  }
  var _mapToArray = mapToArray$1;
  function setToArray$1(set) {
    var index2 = -1, result = Array(set.size);
    set.forEach(function(value) {
      result[++index2] = value;
    });
    return result;
  }
  var _setToArray = setToArray$1;
  var Symbol$3 = _Symbol, Uint8Array2 = _Uint8Array, eq = eq_1, equalArrays$1 = _equalArrays, mapToArray = _mapToArray, setToArray = _setToArray;
  var COMPARE_PARTIAL_FLAG$2 = 1, COMPARE_UNORDERED_FLAG = 2;
  var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$2 = "[object Symbol]";
  var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]";
  var symbolProto = Symbol$3 ? Symbol$3.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
  function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag$2:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;
      case arrayBufferTag$1:
        if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
          return false;
        }
        return true;
      case boolTag$1:
      case dateTag$1:
      case numberTag$1:
        return eq(+object, +other);
      case errorTag$1:
        return object.name == other.name && object.message == other.message;
      case regexpTag$1:
      case stringTag$1:
        return object == other + "";
      case mapTag$2:
        var convert = mapToArray;
      case setTag$2:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
        convert || (convert = setToArray);
        if (object.size != other.size && !isPartial) {
          return false;
        }
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG;
        stack.set(object, other);
        var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack["delete"](object);
        return result;
      case symbolTag$2:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }
  var _equalByTag = equalByTag$1;
  function arrayPush$1(array, values) {
    var index2 = -1, length2 = values.length, offset = array.length;
    while (++index2 < length2) {
      array[offset + index2] = values[index2];
    }
    return array;
  }
  var _arrayPush = arrayPush$1;
  var isArray$3 = Array.isArray;
  var isArray_1 = isArray$3;
  var arrayPush = _arrayPush, isArray$2 = isArray_1;
  function baseGetAllKeys$1(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray$2(object) ? result : arrayPush(result, symbolsFunc(object));
  }
  var _baseGetAllKeys = baseGetAllKeys$1;
  function arrayFilter$1(array, predicate) {
    var index2 = -1, length2 = array == null ? 0 : array.length, resIndex = 0, result = [];
    while (++index2 < length2) {
      var value = array[index2];
      if (predicate(value, index2, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  var _arrayFilter = arrayFilter$1;
  function stubArray$1() {
    return [];
  }
  var stubArray_1 = stubArray$1;
  var arrayFilter = _arrayFilter, stubArray = stubArray_1;
  var objectProto$8 = Object.prototype;
  var propertyIsEnumerable$1 = objectProto$8.propertyIsEnumerable;
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  var getSymbols$1 = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable$1.call(object, symbol);
    });
  };
  var _getSymbols = getSymbols$1;
  function baseTimes$1(n2, iteratee) {
    var index2 = -1, result = Array(n2);
    while (++index2 < n2) {
      result[index2] = iteratee(index2);
    }
    return result;
  }
  var _baseTimes = baseTimes$1;
  function isObjectLike$6(value) {
    return value != null && typeof value == "object";
  }
  var isObjectLike_1 = isObjectLike$6;
  var baseGetTag$4 = _baseGetTag, isObjectLike$5 = isObjectLike_1;
  var argsTag$2 = "[object Arguments]";
  function baseIsArguments$1(value) {
    return isObjectLike$5(value) && baseGetTag$4(value) == argsTag$2;
  }
  var _baseIsArguments = baseIsArguments$1;
  var baseIsArguments = _baseIsArguments, isObjectLike$4 = isObjectLike_1;
  var objectProto$7 = Object.prototype;
  var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
  var propertyIsEnumerable = objectProto$7.propertyIsEnumerable;
  var isArguments$1 = baseIsArguments(function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike$4(value) && hasOwnProperty$5.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isArguments_1 = isArguments$1;
  var isBufferExports = {};
  var isBuffer$2 = {
    get exports() {
      return isBufferExports;
    },
    set exports(v2) {
      isBufferExports = v2;
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
    var Buffer2 = moduleExports ? root2.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer2 = nativeIsBuffer || stubFalse2;
    module.exports = isBuffer2;
  })(isBuffer$2, isBufferExports);
  var MAX_SAFE_INTEGER$1 = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex$1(value, length2) {
    var type = typeof value;
    length2 = length2 == null ? MAX_SAFE_INTEGER$1 : length2;
    return !!length2 && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length2);
  }
  var _isIndex = isIndex$1;
  var MAX_SAFE_INTEGER = 9007199254740991;
  function isLength$2(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  var isLength_1 = isLength$2;
  var baseGetTag$3 = _baseGetTag, isLength$1 = isLength_1, isObjectLike$3 = isObjectLike_1;
  var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag$1 = "[object Map]", numberTag = "[object Number]", objectTag$2 = "[object Object]", regexpTag = "[object RegExp]", setTag$1 = "[object Set]", stringTag = "[object String]", weakMapTag$1 = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag$1] = typedArrayTags[numberTag] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag] = typedArrayTags[setTag$1] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag$1] = false;
  function baseIsTypedArray$1(value) {
    return isObjectLike$3(value) && isLength$1(value.length) && !!typedArrayTags[baseGetTag$3(value)];
  }
  var _baseIsTypedArray = baseIsTypedArray$1;
  function baseUnary$1(func) {
    return function(value) {
      return func(value);
    };
  }
  var _baseUnary = baseUnary$1;
  var _nodeUtilExports = {};
  var _nodeUtil = {
    get exports() {
      return _nodeUtilExports;
    },
    set exports(v2) {
      _nodeUtilExports = v2;
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
      } catch (e2) {
      }
    }();
    module.exports = nodeUtil2;
  })(_nodeUtil, _nodeUtilExports);
  var baseIsTypedArray = _baseIsTypedArray, baseUnary = _baseUnary, nodeUtil = _nodeUtilExports;
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  var isTypedArray$2 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  var isTypedArray_1 = isTypedArray$2;
  var baseTimes = _baseTimes, isArguments = isArguments_1, isArray$1 = isArray_1, isBuffer$1 = isBufferExports, isIndex = _isIndex, isTypedArray$1 = isTypedArray_1;
  var objectProto$6 = Object.prototype;
  var hasOwnProperty$4 = objectProto$6.hasOwnProperty;
  function arrayLikeKeys$1(value, inherited) {
    var isArr = isArray$1(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length2 = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty$4.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
      (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
      isIndex(key, length2)))) {
        result.push(key);
      }
    }
    return result;
  }
  var _arrayLikeKeys = arrayLikeKeys$1;
  var objectProto$5 = Object.prototype;
  function isPrototype$1(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$5;
    return value === proto;
  }
  var _isPrototype = isPrototype$1;
  function overArg$1(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  var _overArg = overArg$1;
  var overArg = _overArg;
  var nativeKeys$1 = overArg(Object.keys, Object);
  var _nativeKeys = nativeKeys$1;
  var isPrototype = _isPrototype, nativeKeys = _nativeKeys;
  var objectProto$4 = Object.prototype;
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
  function baseKeys$1(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty$3.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  var _baseKeys = baseKeys$1;
  var isFunction$2 = isFunction_1, isLength = isLength_1;
  function isArrayLike$1(value) {
    return value != null && isLength(value.length) && !isFunction$2(value);
  }
  var isArrayLike_1 = isArrayLike$1;
  var arrayLikeKeys = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike = isArrayLike_1;
  function keys$1(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  var keys_1 = keys$1;
  var baseGetAllKeys = _baseGetAllKeys, getSymbols = _getSymbols, keys = keys_1;
  function getAllKeys$1(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }
  var _getAllKeys = getAllKeys$1;
  var getAllKeys = _getAllKeys;
  var COMPARE_PARTIAL_FLAG$1 = 1;
  var objectProto$3 = Object.prototype;
  var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
  function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index2 = objLength;
    while (index2--) {
      var key = objProps[index2];
      if (!(isPartial ? key in other : hasOwnProperty$2.call(other, key))) {
        return false;
      }
    }
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) {
      return objStacked == other && othStacked == object;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while (++index2 < objLength) {
      key = objProps[index2];
      var objValue = object[key], othValue = other[key];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
      }
      if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == "constructor");
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor, othCtor = other.constructor;
      if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
  }
  var _equalObjects = equalObjects$1;
  var getNative$3 = _getNative, root$6 = _root;
  var DataView$1 = getNative$3(root$6, "DataView");
  var _DataView = DataView$1;
  var getNative$2 = _getNative, root$5 = _root;
  var Promise$2 = getNative$2(root$5, "Promise");
  var _Promise = Promise$2;
  var getNative$1 = _getNative, root$4 = _root;
  var Set$2 = getNative$1(root$4, "Set");
  var _Set = Set$2;
  var getNative = _getNative, root$3 = _root;
  var WeakMap$2 = getNative(root$3, "WeakMap");
  var _WeakMap = WeakMap$2;
  var DataView = _DataView, Map$1 = _Map, Promise$1 = _Promise, Set$1 = _Set, WeakMap$1 = _WeakMap, baseGetTag$2 = _baseGetTag, toSource = _toSource;
  var mapTag = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
  var dataViewTag = "[object DataView]";
  var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$1);
  var getTag$1 = baseGetTag$2;
  if (DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag || Map$1 && getTag$1(new Map$1()) != mapTag || Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag || Set$1 && getTag$1(new Set$1()) != setTag || WeakMap$1 && getTag$1(new WeakMap$1()) != weakMapTag) {
    getTag$1 = function(value) {
      var result = baseGetTag$2(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
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
  var _getTag = getTag$1;
  var Stack = _Stack, equalArrays = _equalArrays, equalByTag = _equalByTag, equalObjects = _equalObjects, getTag = _getTag, isArray = isArray_1, isBuffer = isBufferExports, isTypedArray = isTypedArray_1;
  var COMPARE_PARTIAL_FLAG = 1;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
  var objectProto$2 = Object.prototype;
  var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
  function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer(object)) {
      if (!isBuffer(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack());
      return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
      var objIsWrapped = objIsObj && hasOwnProperty$1.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$1.call(other, "__wrapped__");
      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
        stack || (stack = new Stack());
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack());
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }
  var _baseIsEqualDeep = baseIsEqualDeep$1;
  var baseIsEqualDeep = _baseIsEqualDeep, isObjectLike$2 = isObjectLike_1;
  function baseIsEqual$1(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || !isObjectLike$2(value) && !isObjectLike$2(other)) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$1, stack);
  }
  var _baseIsEqual = baseIsEqual$1;
  var baseIsEqual = _baseIsEqual;
  function isEqual(value, other) {
    return baseIsEqual(value, other);
  }
  var isEqual_1 = isEqual;
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
  async function injectToContent(type, payload, callback = async () => {
  }) {
    const jsonablePayload = JSON.parse(JSON.stringify(payload));
    if (!isEqual_1(jsonablePayload, payload)) {
      throw new Error("payload is not jsonable");
    }
    const sessionId = String(Math.random());
    const messageToContent = {
      extensionName: EXTENSION_NAME,
      sessionId,
      sessionSource: "inject",
      sessionTarget: "content",
      type,
      payload
    };
    window.postMessage(JSON.parse(JSON.stringify(messageToContent)), "*");
    sessions.set(sessionId, callback);
  }
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
  let hasInitializeSetValue = false;
  async function initializeSetValue() {
  }
  async function setValue(key, value) {
    if (!hasInitializeSetValue) {
      await initializeSetValue();
      hasInitializeSetValue = true;
    }
    {
      injectToContent("setValue", {
        key,
        value
      });
    }
  }
  let hasInitializeGetValue = false;
  async function initializeGetValue() {
  }
  async function getValue(key, defaultValue) {
    if (!hasInitializeGetValue) {
      await initializeGetValue();
      hasInitializeGetValue = true;
    }
    let returnValue = void 0;
    {
      returnValue = await new Promise((resolve) => {
        injectToContent(
          "getValue",
          {
            key,
            defaultValue
          },
          async (extensionMessage) => {
            const { payload } = extensionMessage;
            resolve(payload);
          }
        );
      });
    }
    return returnValue;
  }
  class Store {
    constructor() {
      __publicField(this, "visibility", {
        log: true,
        config: false,
        floating: false
      });
      __publicField(this, "position", {
        floating: {
          x: 0,
          y: 0
        },
        log: {
          x: 0,
          y: 0
        }
      });
      __publicField(this, "tabIndex", 0);
      __publicField(this, "userSettings", {});
      __publicField(this, "sectionSettings", []);
      __publicField(this, "logs", []);
    }
    setVisibility(key, value) {
      this.visibility[key] = value;
    }
    setPosition(key, value) {
      this.position[key] = value;
    }
    setTabIndex(index2) {
      this.tabIndex = index2;
    }
    /** 因为subscribe了这个key，如果直接替换(=)，会导致subscribe失效 */
    setUserSettings(userSettings) {
      for (const [key, value] of Object.entries(userSettings || {})) {
        this.userSettings[key] = value;
      }
    }
    /**
     * 通过集成了所有插件设置的设置中心，设置USER_SETTINGS的默认值
     */
    setDefaultValues() {
      for (const section of this.sectionSettings) {
        for (const generic of section.settings) {
          if (this.userSettings[generic.id] === void 0) {
            this.userSettings[generic.id] = generic.default;
          }
        }
      }
    }
    /** 恢复默认值 */
    resetDefaultValues() {
      for (const section of this.sectionSettings) {
        for (const generic of section.settings) {
          this.userSettings[generic.id] = generic.default;
        }
      }
    }
    clearLogs(remain) {
      if (remain) {
        this.logs = this.logs.slice(0, remain);
      } else {
        this.logs = [];
      }
    }
    getRecordById(id2) {
      return this.logs.find((record) => record.id === id2);
    }
    // 不知道是不是因为是proxy，所以这个方法不起作用
    // updateRecord(record: Pick<IRecord, "id"> & Partial<IRecord>) {
    //     const index = this.logs.findIndex((log) => log.id === record.id);
    //     if (index !== -1) {
    //         logger.debug("in updateRecord", record)
    //         this.logs[index] = { ...this.logs[index], ...record };
    //     }
    // }
  }
  const store = proxy(new Store());
  const useStore = () => useSnapshot(store);
  devtools(store, {
    name: "store"
  });
  const settingsFingerprint = (settings) => JSON.stringify(Object.keys(settings).sort().map((key) => [key, settings[key]]));
  let persistedSettingsFingerprint = "";
  window.addEventListener("message", (event) => {
    const message = event.data;
    if (event.source !== window || !message || message.extensionName !== "eocs-helper" || message.type !== "settingsChanged") return;
    const settings = message.payload;
    if (!settings || typeof settings !== "object" || Array.isArray(settings)) return;
    store.setUserSettings(settings);
    persistedSettingsFingerprint = settingsFingerprint(store.userSettings);
  });
  subscribe(store.userSettings, async () => {
    const fingerprint = settingsFingerprint(store.userSettings);
    if (fingerprint === persistedSettingsFingerprint) return;
    persistedSettingsFingerprint = fingerprint;
    await setValue("userSettings", store.userSettings);
    logger.debug("userSettings已持久化");
  });
  const CONSTANT = {
    QUERY_INTERVAL: 2e3,
    DEBUG_MODE: false
  };
  async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const apiServer = "http://47.100.166.53/api";
  const homepage = "https://www.github.com/SSmJaE/";
  const projects = {
    welearn: {
      title: "随行课堂网课助手",
      name: "WELearn网课助手",
      version: "1.3.3",
      displayVersion: "1.33",
      upstreamVersion: "1.1.0",
      upstreamDisplayVersion: "1.10",
      upstreamAuthor: "SSmJaE",
      maintainer: "BeefChan",
      aiContributors: ["GPT 6 Astra", "DeepSeek V4.1 Flash", "Kimi K3"],
      matches: [
        "*://course.sflep.com/*",
        "*://welearn.sflep.com/*",
        "*://wetest.sflep.com/*",
        "*://courseappserver.sflep.com/*",
        "*://centercourseware.sflep.com/*"
      ],
      namespace: "https://github.com/SSmJaE/WELearnHelper",
      description: "显示WE Learn随行课堂题目答案；支持班级测试；自动答题；刷时长；基于生成式AI(ChatGPT)的答案生成",
      connect: [
        "localhost",
        "47.100.166.53"
      ]
    },
    tsinghua: {
      title: "清华社网课助手",
      name: "TsinghuaELTHelper",
      version: "0.1.0",
      matches: [],
      namespace: "https://github.com/SSmJaE/TsinghuaELTHelper",
      description: "显示清华社网课题目答案",
      connect: [
        "localhost",
        "47.100.166.53"
      ]
    }
  };
  const metadata = {
    apiServer,
    homepage,
    projects
  };
  const token$1 = "%[a-f0-9]{2}";
  const singleMatcher = new RegExp("(" + token$1 + ")|([^%]+?)", "gi");
  const multiMatcher = new RegExp("(" + token$1 + ")+", "gi");
  function decodeComponents(components, split) {
    try {
      return [decodeURIComponent(components.join(""))];
    } catch {
    }
    if (components.length === 1) {
      return components;
    }
    split = split || 1;
    const left = components.slice(0, split);
    const right = components.slice(split);
    return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
  }
  function decode$1(input) {
    try {
      return decodeURIComponent(input);
    } catch {
      let tokens = input.match(singleMatcher) || [];
      for (let i2 = 1; i2 < tokens.length; i2++) {
        input = decodeComponents(tokens, i2).join("");
        tokens = input.match(singleMatcher) || [];
      }
      return input;
    }
  }
  function customDecodeURIComponent(input) {
    const replaceMap = {
      "%FE%FF": "��",
      "%FF%FE": "��"
    };
    let match2 = multiMatcher.exec(input);
    while (match2) {
      try {
        replaceMap[match2[0]] = decodeURIComponent(match2[0]);
      } catch {
        const result = decode$1(match2[0]);
        if (result !== match2[0]) {
          replaceMap[match2[0]] = result;
        }
      }
      match2 = multiMatcher.exec(input);
    }
    replaceMap["%C2"] = "�";
    const entries = Object.keys(replaceMap);
    for (const key of entries) {
      input = input.replace(new RegExp(key, "g"), replaceMap[key]);
    }
    return input;
  }
  function decodeUriComponent(encodedURI) {
    if (typeof encodedURI !== "string") {
      throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof encodedURI + "`");
    }
    try {
      return decodeURIComponent(encodedURI);
    } catch {
      return customDecodeURIComponent(encodedURI);
    }
  }
  function splitOnFirst(string, separator) {
    if (!(typeof string === "string" && typeof separator === "string")) {
      throw new TypeError("Expected the arguments to be of type `string`");
    }
    if (string === "" || separator === "") {
      return [];
    }
    const separatorIndex = string.indexOf(separator);
    if (separatorIndex === -1) {
      return [];
    }
    return [
      string.slice(0, separatorIndex),
      string.slice(separatorIndex + separator.length)
    ];
  }
  function includeKeys(object, predicate) {
    const result = {};
    if (Array.isArray(predicate)) {
      for (const key of predicate) {
        const descriptor = Object.getOwnPropertyDescriptor(object, key);
        if (descriptor == null ? void 0 : descriptor.enumerable) {
          Object.defineProperty(result, key, descriptor);
        }
      }
    } else {
      for (const key of Reflect.ownKeys(object)) {
        const descriptor = Object.getOwnPropertyDescriptor(object, key);
        if (descriptor.enumerable) {
          const value = object[key];
          if (predicate(key, value, object)) {
            Object.defineProperty(result, key, descriptor);
          }
        }
      }
    }
    return result;
  }
  const isNullOrUndefined = (value) => value === null || value === void 0;
  const strictUriEncode = (string) => encodeURIComponent(string).replace(/[!'()*]/g, (x2) => `%${x2.charCodeAt(0).toString(16).toUpperCase()}`);
  const encodeFragmentIdentifier = Symbol("encodeFragmentIdentifier");
  function encoderForArrayFormat(options) {
    switch (options.arrayFormat) {
      case "index": {
        return (key) => (result, value) => {
          const index2 = result.length;
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [
              ...result,
              [encode(key, options), "[", index2, "]"].join("")
            ];
          }
          return [
            ...result,
            [encode(key, options), "[", encode(index2, options), "]=", encode(value, options)].join("")
          ];
        };
      }
      case "bracket": {
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [
              ...result,
              [encode(key, options), "[]"].join("")
            ];
          }
          return [
            ...result,
            [encode(key, options), "[]=", encode(value, options)].join("")
          ];
        };
      }
      case "colon-list-separator": {
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [
              ...result,
              [encode(key, options), ":list="].join("")
            ];
          }
          return [
            ...result,
            [encode(key, options), ":list=", encode(value, options)].join("")
          ];
        };
      }
      case "comma":
      case "separator":
      case "bracket-separator": {
        const keyValueSep = options.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          value = value === null ? "" : value;
          if (result.length === 0) {
            return [[encode(key, options), keyValueSep, encode(value, options)].join("")];
          }
          return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
        };
      }
      default: {
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [
              ...result,
              encode(key, options)
            ];
          }
          return [
            ...result,
            [encode(key, options), "=", encode(value, options)].join("")
          ];
        };
      }
    }
  }
  function parserForArrayFormat(options) {
    let result;
    switch (options.arrayFormat) {
      case "index": {
        return (key, value, accumulator) => {
          result = /\[(\d*)]$/.exec(key);
          key = key.replace(/\[\d*]$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = {};
          }
          accumulator[key][result[1]] = value;
        };
      }
      case "bracket": {
        return (key, value, accumulator) => {
          result = /(\[])$/.exec(key);
          key = key.replace(/\[]$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = [value];
            return;
          }
          accumulator[key] = [...accumulator[key], value];
        };
      }
      case "colon-list-separator": {
        return (key, value, accumulator) => {
          result = /(:list)$/.exec(key);
          key = key.replace(/:list$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = [value];
            return;
          }
          accumulator[key] = [...accumulator[key], value];
        };
      }
      case "comma":
      case "separator": {
        return (key, value, accumulator) => {
          const isArray2 = typeof value === "string" && value.includes(options.arrayFormatSeparator);
          const isEncodedArray = typeof value === "string" && !isArray2 && decode(value, options).includes(options.arrayFormatSeparator);
          value = isEncodedArray ? decode(value, options) : value;
          const newValue = isArray2 || isEncodedArray ? value.split(options.arrayFormatSeparator).map((item) => decode(item, options)) : value === null ? value : decode(value, options);
          accumulator[key] = newValue;
        };
      }
      case "bracket-separator": {
        return (key, value, accumulator) => {
          const isArray2 = /(\[])$/.test(key);
          key = key.replace(/\[]$/, "");
          if (!isArray2) {
            accumulator[key] = value ? decode(value, options) : value;
            return;
          }
          const arrayValue = value === null ? [] : value.split(options.arrayFormatSeparator).map((item) => decode(item, options));
          if (accumulator[key] === void 0) {
            accumulator[key] = arrayValue;
            return;
          }
          accumulator[key] = [...accumulator[key], ...arrayValue];
        };
      }
      default: {
        return (key, value, accumulator) => {
          if (accumulator[key] === void 0) {
            accumulator[key] = value;
            return;
          }
          accumulator[key] = [...[accumulator[key]].flat(), value];
        };
      }
    }
  }
  function validateArrayFormatSeparator(value) {
    if (typeof value !== "string" || value.length !== 1) {
      throw new TypeError("arrayFormatSeparator must be single character string");
    }
  }
  function encode(value, options) {
    if (options.encode) {
      return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
    }
    return value;
  }
  function decode(value, options) {
    if (options.decode) {
      return decodeUriComponent(value);
    }
    return value;
  }
  function keysSorter(input) {
    if (Array.isArray(input)) {
      return input.sort();
    }
    if (typeof input === "object") {
      return keysSorter(Object.keys(input)).sort((a2, b2) => Number(a2) - Number(b2)).map((key) => input[key]);
    }
    return input;
  }
  function removeHash(input) {
    const hashStart = input.indexOf("#");
    if (hashStart !== -1) {
      input = input.slice(0, hashStart);
    }
    return input;
  }
  function getHash(url) {
    let hash2 = "";
    const hashStart = url.indexOf("#");
    if (hashStart !== -1) {
      hash2 = url.slice(hashStart);
    }
    return hash2;
  }
  function parseValue(value, options) {
    if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === "string" && value.trim() !== "")) {
      value = Number(value);
    } else if (options.parseBooleans && value !== null && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) {
      value = value.toLowerCase() === "true";
    }
    return value;
  }
  function extract(input) {
    input = removeHash(input);
    const queryStart = input.indexOf("?");
    if (queryStart === -1) {
      return "";
    }
    return input.slice(queryStart + 1);
  }
  function parse$1(query, options) {
    options = {
      decode: true,
      sort: true,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: false,
      parseBooleans: false,
      ...options
    };
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const formatter = parserForArrayFormat(options);
    const returnValue = /* @__PURE__ */ Object.create(null);
    if (typeof query !== "string") {
      return returnValue;
    }
    query = query.trim().replace(/^[?#&]/, "");
    if (!query) {
      return returnValue;
    }
    for (const parameter of query.split("&")) {
      if (parameter === "") {
        continue;
      }
      const parameter_ = options.decode ? parameter.replace(/\+/g, " ") : parameter;
      let [key, value] = splitOnFirst(parameter_, "=");
      if (key === void 0) {
        key = parameter_;
      }
      value = value === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(options.arrayFormat) ? value : decode(value, options);
      formatter(decode(key, options), value, returnValue);
    }
    for (const [key, value] of Object.entries(returnValue)) {
      if (typeof value === "object" && value !== null) {
        for (const [key2, value2] of Object.entries(value)) {
          value[key2] = parseValue(value2, options);
        }
      } else {
        returnValue[key] = parseValue(value, options);
      }
    }
    if (options.sort === false) {
      return returnValue;
    }
    return (options.sort === true ? Object.keys(returnValue).sort() : Object.keys(returnValue).sort(options.sort)).reduce((result, key) => {
      const value = returnValue[key];
      if (Boolean(value) && typeof value === "object" && !Array.isArray(value)) {
        result[key] = keysSorter(value);
      } else {
        result[key] = value;
      }
      return result;
    }, /* @__PURE__ */ Object.create(null));
  }
  function stringify$1(object, options) {
    if (!object) {
      return "";
    }
    options = {
      encode: true,
      strict: true,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      ...options
    };
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const shouldFilter = (key) => options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === "";
    const formatter = encoderForArrayFormat(options);
    const objectCopy = {};
    for (const [key, value] of Object.entries(object)) {
      if (!shouldFilter(key)) {
        objectCopy[key] = value;
      }
    }
    const keys2 = Object.keys(objectCopy);
    if (options.sort !== false) {
      keys2.sort(options.sort);
    }
    return keys2.map((key) => {
      const value = object[key];
      if (value === void 0) {
        return "";
      }
      if (value === null) {
        return encode(key, options);
      }
      if (Array.isArray(value)) {
        if (value.length === 0 && options.arrayFormat === "bracket-separator") {
          return encode(key, options) + "[]";
        }
        return value.reduce(formatter(key), []).join("&");
      }
      return encode(key, options) + "=" + encode(value, options);
    }).filter((x2) => x2.length > 0).join("&");
  }
  function parseUrl(url, options) {
    var _a2;
    options = {
      decode: true,
      ...options
    };
    let [url_, hash2] = splitOnFirst(url, "#");
    if (url_ === void 0) {
      url_ = url;
    }
    return {
      url: ((_a2 = url_ == null ? void 0 : url_.split("?")) == null ? void 0 : _a2[0]) ?? "",
      query: parse$1(extract(url), options),
      ...options && options.parseFragmentIdentifier && hash2 ? { fragmentIdentifier: decode(hash2, options) } : {}
    };
  }
  function stringifyUrl(object, options) {
    options = {
      encode: true,
      strict: true,
      [encodeFragmentIdentifier]: true,
      ...options
    };
    const url = removeHash(object.url).split("?")[0] || "";
    const queryFromUrl = extract(object.url);
    const query = {
      ...parse$1(queryFromUrl, { sort: false }),
      ...object.query
    };
    let queryString2 = stringify$1(query, options);
    if (queryString2) {
      queryString2 = `?${queryString2}`;
    }
    let hash2 = getHash(object.url);
    if (object.fragmentIdentifier) {
      const urlObjectForFragmentEncode = new URL(url);
      urlObjectForFragmentEncode.hash = object.fragmentIdentifier;
      hash2 = options[encodeFragmentIdentifier] ? urlObjectForFragmentEncode.hash : `#${object.fragmentIdentifier}`;
    }
    return `${url}${queryString2}${hash2}`;
  }
  function pick(input, filter, options) {
    options = {
      parseFragmentIdentifier: true,
      [encodeFragmentIdentifier]: false,
      ...options
    };
    const { url, query, fragmentIdentifier } = parseUrl(input, options);
    return stringifyUrl({
      url,
      query: includeKeys(query, filter),
      fragmentIdentifier
    }, options);
  }
  function exclude(input, filter, options) {
    const exclusionFilter = Array.isArray(filter) ? (key) => !filter.includes(key) : (key, value) => !filter(key, value);
    return pick(input, exclusionFilter, options);
  }
  const queryString = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    exclude,
    extract,
    parse: parse$1,
    parseUrl,
    pick,
    stringify: stringify$1,
    stringifyUrl
  }, Symbol.toStringTag, { value: "Module" }));
  function getFullUrl(url, query = {}) {
    for (const [, value] of Object.entries(query)) {
      if (typeof value === "object")
        throw new Error("query params不应为嵌套对象，拍平或者手动序列化子对象");
    }
    return queryString.stringifyUrl({
      url: url.startsWith("/") ? `${metadata.apiServer}/${"welearn"}${url}` : url,
      query
    });
  }
  async function requestForExtension(url, {
    method,
    headers = {},
    query,
    body
    // 允许undefined，JSON.stringify(undefined)也不会报错
  } = {
    method: "GET",
    headers: {},
    body: void 0,
    query: void 0
  }) {
    return new Promise(async (resolve, reject) => {
      injectToContent(
        "request",
        {
          url: getFullUrl(url, query),
          init: {
            method,
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
              ...headers
            },
            body: JSON.stringify(body)
          }
        },
        async (extensionMessage) => {
          const {
            payload: { text, ok: ok2 }
          } = extensionMessage;
          if (ok2) {
            resolve({
              text: () => new Promise((resolve2) => resolve2(text)),
              json: () => new Promise((resolve2) => resolve2(JSON.parse(text)))
            });
          } else {
            reject(extensionMessage);
          }
        }
      );
    });
  }
  const implement = requestForExtension;
  class Request extends Function {
    constructor() {
      super("...args", "return this.__self__.__call__(...args)");
      __publicField(this, "__self__");
      const self2 = this.bind(this);
      this.__self__ = self2;
      return self2;
    }
    __call__(url, init = { method: "GET" }) {
      return implement(url, init);
    }
    post(url, init = {}) {
      return implement(url, { ...init, method: "POST" });
    }
    delete(url, init = {}) {
      return implement(url, { ...init, method: "DELETE" });
    }
    put(url, init = {}) {
      return implement(url, { ...init, method: "PUT" });
    }
    patch(url, init = {}) {
      return implement(url, { ...init, method: "PATCH" });
    }
    get(url, init = {}) {
      return implement(url, { ...init, method: "GET" });
    }
    head(url, init = {}) {
      return implement(url, { ...init, method: "HEAD" });
    }
    options(url, init = {}) {
      return implement(url, { ...init, method: "OPTIONS" });
    }
  }
  const request = new Request();
  function backendErrorToString(errorDetail) {
    return errorDetail ? `异常id : ${errorDetail.id}
具体信息 : ${errorDetail.message}` : void 0;
  }
  function requestErrorHandler(message = "请求异常，稍后再试") {
    return function(target, propertyKey, descriptor) {
      const originalMethod = descriptor.value;
      descriptor.value = function(...args) {
        const result = originalMethod.apply(this, args);
        result.catch((error) => {
          logger.error(
            {
              content: {
                message
              },
              extra: error.message
            }
          );
        });
        return result;
      };
      return descriptor;
    };
  }
  function perSession(storageKey) {
    return function(target, propertyKey, descriptor) {
      const originalMethod = descriptor.value;
      descriptor.value = function(...args) {
        const hasChecked = sessionStorage.getItem(storageKey);
        if (!hasChecked) {
          const result = originalMethod.apply(this, args);
          logger.debug(`${storageKey}未执行过，开始执行`);
          sessionStorage.setItem(storageKey, (/* @__PURE__ */ new Date()).toISOString());
          return result;
        } else {
          logger.debug(`${storageKey}已执行过，放弃执行`);
          return Promise.resolve();
        }
      };
      return descriptor;
    };
  }
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
      if (decorator = decorators[i2])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp2(target, key, result);
    return result;
  };
  class WELearnAPI {
    static async checkVersion() {
      const response = await request.post("/version/", {
        body: {
          // This legacy endpoint describes the upstream base, not this fork's releases.
          version: metadata.projects.welearn.upstreamVersion
        }
      });
      const returnJson = await response.json();
      if (returnJson.status === false) {
        throw new Error(backendErrorToString(returnJson.error));
      } else {
        for (const message of returnJson.data) {
          logger.info({ content: message });
        }
        await setValue("VERSION_INFO", returnJson.data);
      }
    }
    static async queryByTaskId({
      typical,
      is_school_test,
      tt_id,
      sheet_id,
      stt_id
    }) {
      const response = await request.post("/query/", {
        body: {
          query_type: 0,
          typical,
          is_school_test,
          tt_id,
          sheet_id,
          stt_id
        }
      });
      return await response.json();
    }
    static async queryByQuestionId(questionId) {
      const response = await request.post("/query/", {
        body: {
          query_type: 1,
          question_id: questionId
        }
      });
      const returnJson = await response.json();
      if (returnJson.status === false) {
        throw new Error(backendErrorToString(returnJson.error));
      } else {
        return returnJson.data;
      }
    }
    static async queryByDomString(domString) {
      const response = await request.post("/query/", {
        body: {
          query_type: 2,
          dom_string: domString
        }
      });
      const returnJson = await response.json();
      if (returnJson.status === false) {
        throw new Error(backendErrorToString(returnJson.error));
      } else {
        return returnJson.data;
      }
    }
    static async collectAll({
      task_id,
      dom_string,
      part_index,
      typical,
      is_school_test,
      tt_id,
      sheet_id,
      stt_id
    }) {
      const response = await request.post("/collect/", {
        body: {
          task_id,
          dom_string,
          part_index,
          typical,
          is_school_test,
          tt_id,
          sheet_id,
          stt_id
        }
      });
      const returnJson = await response.json();
      if (returnJson.status === false) {
        throw new Error(backendErrorToString(returnJson.error));
      } else {
        logger.info({
          content: "当前页面答案收录成功，可以切换至下一页面，手动点击查询按钮上传，或者上传其它练习的答案"
        });
      }
    }
    static async upload(byUser = false) {
      const response = await request.post("/upload/", {
        body: {
          url: location.href,
          cookie: document.cookie
        }
      });
      const returnJson = await response.json();
      if (byUser) {
        if (returnJson.status) {
          logger.info({ content: "成功上传练习" });
        } else {
          logger.error({
            content: {
              message: "练习上传失败"
            }
          });
          logger.debug(returnJson.error);
        }
      }
    }
    static async getCourseCatalog() {
      const response = await request.post("/catalog/");
      const returnJson = await response.json();
      if (returnJson.status === false) {
        throw new Error(backendErrorToString(returnJson.error));
      } else {
        logger.info({ content: "成功获取了最新的课程目录" });
        return returnJson.data;
      }
    }
  }
  __decorateClass([
    requestErrorHandler("脚本版本查询异常"),
    perSession("LAST_CHECK_DATE")
  ], WELearnAPI, "checkVersion", 1);
  __decorateClass([
    requestErrorHandler("答案查询失败")
  ], WELearnAPI, "queryByTaskId", 1);
  __decorateClass([
    requestErrorHandler("答案查询失败")
  ], WELearnAPI, "queryByQuestionId", 1);
  __decorateClass([
    requestErrorHandler("答案查询失败")
  ], WELearnAPI, "queryByDomString", 1);
  __decorateClass([
    requestErrorHandler("答案收录失败")
  ], WELearnAPI, "collectAll", 1);
  __decorateClass([
    perSession("HAS_UPLOAD")
  ], WELearnAPI, "upload", 1);
  __decorateClass([
    requestErrorHandler("课程目录获取失败"),
    perSession("HAS_GET_COURSE_CATALOG")
  ], WELearnAPI, "getCourseCatalog", 1);
  function isFinished() {
    return !document.querySelector("#spSubmit");
  }
  function getTaskId() {
    let isSchoolTest = false;
    let taskId = null;
    try {
      if (location.href.includes("schooltest")) {
        isSchoolTest = true;
        const match = /schooltestid=(\d*)/.exec(location.href);
        taskId = match ? match[1] : null;
      } else {
        const match = /testId=(\d*)/.exec(location.href);
        taskId = match ? match[1] : null;
      }
    } catch {
      logger.debug("testId获取失败");
    }
    return {
      isSchoolTest,
      taskId
    };
  }
  function getPartIndex() {
    for (const [index2, element] of document.querySelectorAll("#ulParts > li").entries()) {
      if (element.classList.contains("active")) {
        return index2 + 1;
      }
    }
    logger.debug("无法获取PartIndex，返回默认值1");
    return 1;
  }
  function getQuestionIndex(questionItemDiv) {
    const indexOfQuestions = [];
    for (const element of questionItemDiv.querySelectorAll('span[id^="question_"]')) {
      const index2 = /question_(\d*)/.exec(element.id)[1];
      indexOfQuestions.push(index2);
    }
    return indexOfQuestions;
  }
  async function querySingleQuestion(questionItemDiv) {
    const domString = questionItemDiv.outerHTML;
    const questionWithAnswers = await WELearnAPI.queryByDomString(domString);
    for (const [index2, questionWithAnswer] of questionWithAnswers.entries()) {
      let questionIndex = "_";
      let questionIndexString = "_";
      try {
        questionIndex = getQuestionIndex(questionItemDiv)[index2] || "_";
        questionIndexString = String(questionIndex).padStart(2, "0");
      } catch (error) {
      }
      const isListening = !!questionItemDiv.querySelector('a[href^="javascript:PlaySound"]');
      const replayButton = {
        children: "播放音频",
        onClick: () => {
          const mainAudio = questionItemDiv.querySelector('a[id*="btnPlay"]');
          const questionId = /btnPlay_(.*)/.exec(mainAudio.id)[1];
          let mainAudioFile = null;
          const match2 = /"(.*?.mp3)"/.exec(mainAudio.getAttribute("href"));
          if (match2) {
            mainAudioFile = match2[1];
          } else {
            mainAudioFile = mainAudio.getAttribute("data-soundsrc");
          }
          logger.debug(mainAudioFile, questionId);
          PlaySound(mainAudioFile, questionId);
        }
      };
      logger.question({
        content: {
          order: `${questionIndexString}`,
          info: {
            content: questionWithAnswer.answer_text ? "标答" : questionWithAnswer.answer_text_gpt ? "GPT" : "无答案"
          },
          answerText: questionWithAnswer.answer_text || questionWithAnswer.answer_text_gpt || "尚未收录答案",
          raw: {
            element: questionItemDiv
          },
          solve: {
            couldSolve: false,
            hasSolved: false,
            solveThis: (answerText) => {
            }
          }
        },
        action: isListening ? [replayButton] : void 0
      });
      await sleep(CONSTANT.QUERY_INTERVAL);
    }
  }
  async function getAnswers() {
    store.clearLogs(1);
    const { isSchoolTest, taskId } = getTaskId();
    if (isFinished()) {
      try {
        const domString = document.querySelector(".tab-content").outerHTML;
        const questionItemDivNodes = document.querySelectorAll(".itemDiv");
        const html_string = document.head.innerHTML;
        const tt_id = /ttid\s*:\s*(-?\d*)/.exec(html_string);
        const sheet_id = /sheetid\s*:\s*(-?\d*)/.exec(html_string);
        const stt_id = /sttid\s*:\s*(-?\d*)/.exec(html_string);
        await WELearnAPI.collectAll({
          dom_string: domString,
          typical: !!questionItemDivNodes.length,
          is_school_test: isSchoolTest,
          part_index: getPartIndex() || null,
          task_id: taskId,
          tt_id: tt_id ? tt_id[1] : null,
          sheet_id: sheet_id ? sheet_id[1] : null,
          stt_id: stt_id ? stt_id[1] : null
        });
      } catch (e2) {
        logger.debug(e2);
      }
    } else {
      const questionItemDivNodes = document.querySelectorAll(".itemDiv");
      for (const [index2, questionItemDiv] of questionItemDivNodes.entries()) {
        try {
          await querySingleQuestion(questionItemDiv);
        } catch (error) {
          logger.debug(error);
        }
      }
    }
  }
  function hackPlaySound() {
    const globalObj = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
    globalObj.PlaySound = (src2, id2) => {
      if (soundPlayer) {
        soundPlayer.stop();
        try {
          jwplayer("soundplayer").remove();
        } catch (e2) {
        }
      }
      currentSoundId = id2;
      const soundfile = testEnv.resPath + "sound/" + src2;
      soundPlayer = jwplayer("soundplayer").setup({
        flashplayer: "script/jwplayer.flash.swf?c=" + Math.random(),
        file: soundfile,
        height: 0,
        width: 0,
        primary: "html5"
      });
      soundPlayer.play();
    };
  }
  let isPageReady = false;
  let elapsedTime = 0;
  const MAX_WAIT_TIME = 1e4;
  function checkPageReady() {
    const element = document.querySelector("#spTimer");
    if (element) {
      isPageReady = true;
    }
  }
  async function watcher() {
    while (elapsedTime < MAX_WAIT_TIME) {
      if (isPageReady) {
        break;
      }
      await sleep(200);
      elapsedTime += 200;
      checkPageReady();
    }
    logger.debug(`页面加载完成，耗时${elapsedTime}ms`);
    notify$1();
  }
  function notify$1() {
    logger.debug("页面加载完成，开始检测完成情况");
    const finished = isFinished();
    const recordId = `${Math.random()}`;
    logger.info({
      id: recordId,
      content: (finished ? "检测到当前位于解析页面，点击本条消息右侧的上传按钮，以收录答案" : "检测到当前位于测试页面，点击本条消息右侧的查询按钮，以开始查询") + `<br />❗❗❗即使有多个part，也只需要点击一次，会自动按顺序${finished ? "上传" : "查询"}所有part的题目`,
      extra: void 0,
      action: [
        {
          children: `${finished ? "上传" : "查询"}答案`,
          disabled: 5e3,
          onClick() {
            getAnswers();
          }
        }
      ]
    });
    if (store.userSettings.infiniteListening) {
      hackPlaySound();
      logger.debug("已开启无限听力");
    }
  }
  if (location.href.includes(".sflep.com/test/") || location.href.includes("wetest.sflep.com/Test")) {
    (async () => {
      await watcher();
    })();
  }
  if (location.href.includes(".sflep.com/student/course_info.aspx?")) {
    WELearnAPI.upload();
  }
  const MANIFEST = [
    "https://centercourseware.sflep.com/new century college english secedition integration 2/unit_01/course/texta.html#c09175d4-f281-488f-83fe-87c6bcf2a2b6?nocache=0.6378400703106109",
    "new century college english secedition integration 1",
    //新世纪大学英语系列教材（第二版）综合教程第一册
    "new century college english secedition integration 2",
    //新世纪大学英语系列教材（第二版）综合教程第二册
    "new century college english secedition integration 3",
    //新世纪大学英语系列教材（第二版）综合教程第三册
    "new century college english secedition integration 4",
    //新世纪大学英语系列教材（第二版）综合教程第四册
    "https://centercourseware.sflep.com/an integrated skills course (2nd edition) 2 for vocational college english/unit_02/course/listening.html#f248a182-7d3b-4112-86e8-8fca2706c690?nocache=0.3470470678074564",
    "an integrated skills course (2nd edition) 1 for vocational college english",
    //新标准高职实用综合教程（第2版）第一册
    "an integrated skills course (2nd edition) 2 for vocational college english",
    //新标准高职实用综合教程（第2版）第二册
    "an integrated skills course (2nd edition) 3 for vocational college english",
    //新标准高职实用综合教程（第2版）第三册
    "an integrated skills course (2nd edition) 4 for vocational college english",
    //新标准高职实用综合教程（第2版）第四册
    "https://centercourseware.sflep.com/an integrated skills course 2/unit_07/course/comprehension.html#e2f3d085-ca82-4d79-b31a-1bfe83529d88?nocache=0.5703432807157427",
    "an integrated skills course 1",
    //新标准高职公共英语系列教材：实用综合教程（精编版）上
    "an integrated skills course 2"
    //新标准高职公共英语系列教材：实用综合教程（精编版）下
  ];
  const DATA_SOLUTION = [
    "https://centercourseware.sflep.com/new progressive college english integrated course 3/unit_01/main10.html?3-1-6&nocache=0.8570993802491391",
    "new progressive college english integrated course 1",
    //全新版大学进阶英语：综合1
    "new progressive college english integrated course 2",
    //全新版大学进阶英语：综合2
    "new progressive college english integrated course 3",
    //全新版大学进阶英语：综合3
    "new progressive college english integrated course 4",
    //全新版大学进阶英语：综合4
    "//centercourseware.sflep.com/new progressive college english integrated course 1-sz/unit_01/main6.html?1-1-6&nocache=0.08870107701951402",
    "new progressive college english integrated course 1-sz",
    "new progressive college english integrated course 2-sz",
    "new progressive college english integrated course 3-sz",
    "new progressive college english integrated course 4-sz",
    "https://centercourseware.sflep.com/new target college english integrated course 2/unit_05/main.html?2-5-10&nocache=0.7739324146362139",
    "new target college english integrated course 1",
    //新目标大学英语《综合教程》 第一册；这个是所有页面混杂在一个大页面里的那个
    "new target college english integrated course 2",
    //新目标大学英语《综合教程》 第二册
    "new target college english integrated course 3",
    //新目标大学英语《综合教程》 第三册
    "new target college english integrated course 4",
    //新目标大学英语《综合教程》 第四册
    "New Target College English_V2_Integrated Course 1",
    "New Target College English_V2_Integrated Course 2",
    "New Target College English_V2_Integrated Course 3",
    "New Target College English_V2_Integrated Course 4",
    "New Advanced College English Grammar Course",
    "New Advanced College English-Integrated Course 1",
    // todo 每切换一次，都会重新请求catalog，但还是同一个session
    "New Advanced College English-Integrated Course 2",
    // 所以如果只是后端添加catalog，只有第一个页面有效
    "New Advanced College English-Integrated Course 3",
    "New Advanced College English-Integrated Course 4"
  ];
  const ET = [
    "https://centercourseware.sflep.com/inspire%202/data/1/2-1-2.html",
    "inspire 1",
    //全新版大学进阶英语：视听说教程1
    "inspire 2",
    //全新版大学进阶英语：视听说教程2
    "inspire 3",
    //全新版大学进阶英语：视听说教程3
    "inspire 4",
    //全新版大学进阶英语：视听说教程4
    "https://centercourseware.sflep.com/New College English Viewing Listening Speaking 3/index.html#/1/1-1-1?nocache=0.2182374709016317",
    "New College English Viewing Listening Speaking 1",
    //全新版大学英语《视听说教程》1
    "New College English Viewing Listening Speaking 2",
    //全新版大学英语《视听说教程》2
    "New College English Viewing Listening Speaking 3",
    //全新版大学英语《视听说教程》3
    "New College English Viewing Listening Speaking 4",
    //全新版大学英语《视听说教程》4
    "https://centercourseware.sflep.com/New Target College English Video Course 1/index.html#/u1/TO/1-1?nocache=0.2502474772719703",
    //新目标大学英语视听说教程1
    "New Target College English Video Course 1",
    //新目标大学英语视听说教程1
    "New Target College English Video Course 2",
    //新目标大学英语视听说教程2
    "New Target College English Video Course 3",
    //新目标大学英语视听说教程3
    "New Target College English Video Course 4",
    //新目标大学英语视听说教程4
    "New Target College English_V2_Video Course 1",
    //新目标大学英语视听说教程1
    "New Target College English_V2_Video Course 2",
    //新目标大学英语视听说教程1
    "New Target College English_V2_Video Course 3",
    //新目标大学英语视听说教程1
    "New Target College English_V2_Video Course 4",
    //新目标大学英语视听说教程1
    "https://centercourseware.sflep.com/new century college english video thirdedition 1/index.html#/2/1-1-1?nocache=0.3053014048019431",
    "new century college english video thirdedition 1",
    //新世纪大学英语系列教材（第二版）视听说教程（3rd Edition）1
    "new century college english video thirdedition 2",
    //新世纪大学英语系列教材（第二版）视听说教程（3rd Edition）2
    "new century college english video thirdedition 3",
    //新世纪大学英语系列教材（第二版）视听说教程（3rd Edition）3
    "new century college english video thirdedition 4"
    //新世纪大学英语系列教材（第二版）视听说教程（3rd Edition）4
  ];
  const READING = [
    "https://centercourseware.sflep.com/new century extensive reading course for english majors 2/web.html?courseurl=210_01_05_01&nocache=0.2702018071769088",
    "new century extensive reading course for english majors 1",
    //新世纪英语专业（修订版）泛读教程（第2版）第一册
    "new century extensive reading course for english majors 2",
    //新世纪英语专业（修订版）泛读教程（第2版）第二册
    "new century extensive reading course for english majors 3",
    //新世纪英语专业（修订版）泛读教程（第2版）第三册
    "new century extensive reading course for english majors 4"
    //新世纪英语专业（修订版）泛读教程（第2版）第四册
  ];
  const APP = [
    "https://centercourseware.sflep.com/Progressive English for Vocational Colleges Integrated Course 2/unit_01/main2.html?2-1-w1&nocache=0.2290241426227977",
    "Progressive English for Vocational Colleges Integrated Course 2",
    //高职国际进阶英语综合教程2
    "https://centercourseware.sflep.com/Progressive English for Vocational Colleges A Viewing Listening and Speaking Course 2/unit_01/main2.html?2-1-la_1&nocache=0.450784809471354",
    "Progressive English for Vocational Colleges A Viewing Listening and Speaking Course 2",
    //高职国际进阶英语视听说教程2
    "https://centercourseware.sflep.com/A Viewing Listening and Speaking Course 2/unit_01/main8.html?2-1-7&nocache=0.8280064535686702",
    "A Viewing Listening and Speaking Course 2"
    //新标准高职公共英语系列教材 实用视听说教程（精编版）
  ];
  const ANSWER_TYPES = [
    "et-tof",
    //判断题
    "et-blank",
    //问答题+填空题
    "et-select",
    //下拉选择题
    "et-choice",
    //选择题(二选一，多选)
    "et-matching",
    //连线题
    "et-reference",
    //口语参考
    "et-sort"
  ];
  function parseEt(dom) {
    let realAnswers = [];
    for (const answerType of ANSWER_TYPES) {
      let answers = dom.querySelectorAll(answerType);
      logger.debug(answers);
      let index2 = 1;
      for (const element of answers) {
        const answer = parseAnswer$3(element);
        if (answer) {
          answer.index = index2;
          logger.debug(answer);
          realAnswers.push(answer);
          index2++;
        }
      }
    }
    return realAnswers;
  }
  function parseAnswer$3(element) {
    let tag = element.tagName.toLowerCase();
    let answerText = "";
    switch (tag) {
      case "et-tof":
        answerText = element.getAttribute("key") || "";
        break;
      case "et-blank":
        if (isRepeat(element)) return;
        answerText = String(element.textContent || "").split("|")[0].trim();
        if (element.hasAttribute("block")) tag = "et-textarea";
        break;
      case "et-select":
        answerText = element.getAttribute("key") || "";
        try {
          if (!answerText.length) answerText = element.firstElementChild.textContent;
        } catch (error) {
          answerText = "Answers will vary.";
        }
        break;
      case "et-choice":
        if (isRepeat(element)) {
          if (element.hasAttribute("inline")) return;
        }
        answerText = element.getAttribute("key") || "";
        break;
      case "et-matching":
        if (isRepeat(element)) return;
        answerText = (element.getAttribute("key") || "").split(",").join("\n	<br/>");
        break;
      case "et-reference":
        if (!store.userSettings.showReference) return;
        answerText = element.innerHTML;
        break;
      case "et-sort":
        answerText = element.getAttribute("key") || "";
        break;
    }
    return {
      text: answerText,
      type: tag,
      element
    };
  }

  function isRepeat(answerNode) {
    let parentElement = answerNode, parentTag;
    let webFlag = 0;
    let mobileFlag = 0;
    try {
      for (let i2 = 0; i2 < 9; i2++) {
        if (i2 !== 0) {
          parentElement = parentElement.parentElement;
        }
        parentTag = parentElement.tagName;
        if (parentTag == "ET-MOBILE-ONLY")
          mobileFlag++;
        if (parentTag == "ET-WEB-ONLY")
          webFlag++;
      }
    } catch (error) {
    } finally {
      if (webFlag && mobileFlag) {
        if (webFlag > 1) {
          return true;
        } else {
          return false;
        }
      } else if (webFlag) {
        return true;
      } else {
        return false;
      }
    }
  }
  function ready_in(element) {
    $(element).trigger("click").trigger("focus").trigger("keydown").trigger("input");
  }
  function event_trigger(element) {
    $(element).trigger("keyup").trigger("change").trigger("blur");
    try {
      angular.element(element).triggerHandler("hover");
      angular.element(element).triggerHandler("keyup");
      angular.element(element).triggerHandler("blur");
    } catch (error) {
    }
  }
  function etNorm(text) {
    return String(text == null ? "" : text).replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
  }
  function etHasAngular() {
    try {
      if (typeof angular === "undefined" || !angular.element || !document.body) return false;
      return !!angular.element(document.body).injector();
    } catch (error) {
      return false;
    }
  }
  function etApply(fn) {
    try {
      const root = angular.element(document.body).injector().get("$rootScope");
      if (root.$$phase) {
        return fn();
      }
      return root.$apply(fn);
    } catch (error) {
      logger.debug(error);
      try {
        return fn();
      } catch (error2) {
        logger.debug(error2);
      }
    }
  }
  function etController(el, name) {
    if (!el) return null;
    try {
      const jq = angular.element(el);
      return jq.controller(name) || jq.data("$" + name + "Controller") || null;
    } catch (error) {
      return null;
    }
  }
  function etQuery(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector));
  }
  async function etWaitForQuestions(timeout) {
    const deadline = Date.now() + (timeout || 9000);
    while (Date.now() < deadline) {
      if (document.querySelector("et-item") && document.querySelector("et-blank, et-choice, et-select, et-tof, et-matching, et-sort, et-tick-list, et-crossword")) {
        await sleep(250);
        return true;
      }
      await sleep(150);
    }
    logger.info({ content: "题目渲染超时，已跳过本节自动答题" });
    return false;
  }
  async function etSetBlankAnswer(el, text) {
    const ctrl = etController(el, "etBlank");
    const wanted = (ctrl && ctrl.key && ctrl.key.length) ? ctrl.key[0] : String(text == null ? "" : text).trim();
    if (!wanted) return true;
    if (ctrl) {
      try {
        etApply(() => {
          ctrl.value = wanted;
        });
        await sleep(60);
        if (ctrl.isCorrect === true || etNorm(ctrl.value) === etNorm(wanted)) return true;
      } catch (error) {
        logger.debug(error);
      }
    }
    const span = el.querySelector("span.blank");
    if (span && typeof $ !== "undefined" && (span.isContentEditable || span.hasAttribute("contenteditable"))) {
      try {
        $(span).trigger("click").trigger("focus").trigger("keydown");
        span.textContent = wanted;
        $(span).trigger("input").trigger("keyup").trigger("change").trigger("blur").trigger("focusout");
        span.dispatchEvent(new Event("input", { bubbles: true }));
        span.dispatchEvent(new Event("change", { bubbles: true }));
        await sleep(100);
        const nowCtrl = etController(el, "etBlank");
        if (nowCtrl && (nowCtrl.isCorrect === true || etNorm(nowCtrl.value) === etNorm(wanted))) return true;
        if (!nowCtrl && etNorm(span.textContent) === etNorm(wanted)) return true;
      } catch (error) {
        logger.debug(error);
      }
    }
    return await etPickWordChip(span || el, wanted);
  }
  async function etPickWordChip(span, text) {
    if (!span) return false;
    const wanted = etNorm(text);
    if (!wanted) return true;
    if (typeof $ === "undefined") return false;
    const item = (span.closest && (span.closest("et-item") || span.closest(".sco"))) || document;
    try {
      $(span).trigger("focus");
    } catch (error) {
      logger.debug(error);
    }
    await sleep(150);
    let pool = Array.prototype.slice.call(item.querySelectorAll(".optionsPicker.visible [option], et-options [option]"));
    if (!pool.length) pool = Array.prototype.slice.call(document.querySelectorAll("et-options [option]"));
    const strip = (s) => s.replace(/[.,;:!?]+$/, "");
    const pick = pool.find((node2) => etNorm(node2.textContent) === wanted) ||
      pool.find((node2) => strip(etNorm(node2.textContent)) === strip(wanted)) ||
      pool.find((node2) => {
        const t = etNorm(node2.textContent);
        return t.indexOf(wanted) === 0 || wanted.indexOf(t) === 0;
      });
    if (!pick) return false;
    pick.click();
    await sleep(180);
    const el = (span.closest && span.closest("et-blank")) || span;
    const ctrl = etController(el, "etBlank");
    return etNorm(ctrl ? ctrl.value : span.textContent || "") === wanted || !!(ctrl && ctrl.isCorrect === true);
  }
  function etSolveInterval(cap) {
    const raw = Number(store.userSettings.solveInterval);
    const interval = Number.isFinite(raw) && raw > 0 ? raw : 1000;
    return Math.min(Math.max(interval, 60), cap || 500);
  }
  // 按每个组件自己的 key 作答：与答案文件顺序、web/mobile 副本、题型 id 全部解耦
  async function etSolveEtOnce() {
    const report = { done: 0, bad: 0 };
    const interval = etSolveInterval(500);
    for (const el of etQuery("et-blank")) {
      const ctrl = etController(el, "etBlank");
      if (!ctrl || !ctrl.hasKey || !ctrl.key || !ctrl.key.length) continue;
      try {
        if (await etSetBlankAnswer(el, ctrl.key[0])) report.done++; else { report.bad++; logger.info({ content: `填空题自动作答失败：${ctrl.key[0]}` }); }
      } catch (error) {
        report.bad++;
        logger.debug(error);
      }
      await sleep(interval);
    }
    for (const el of etQuery("et-choice")) {
      const ctrl = etController(el, "etChoice");
      if (!ctrl || !ctrl.hasKey || !Array.isArray(ctrl.key)) continue;
      try {
        etApply(() => {
          ctrl.value = ctrl.key.slice();
        });
        await sleep(60);
        if (ctrl.isCorrect === true) report.done++; else report.bad++;
      } catch (error) {
        report.bad++;
        logger.debug(error);
      }
      await sleep(interval);
    }
    for (const el of etQuery("et-select")) {
      const ctrl = etController(el, "etSelect");
      const select = el.querySelector("select");
      if (!ctrl || !ctrl.hasKey || !ctrl.key) continue;
      try {
        etApply(() => {
          ctrl.value = ctrl.key;
        });
        if (select) {
          select.value = ctrl.key;
          select.dispatchEvent(new Event("change", { bubbles: true }));
        }
        await sleep(80);
        if (ctrl.isCorrect === true || (select && select.value === ctrl.key)) report.done++; else report.bad++;
      } catch (error) {
        report.bad++;
        logger.debug(error);
      }
      await sleep(interval);
    }
    for (const el of etQuery("et-tof")) {
      const ctrl = etController(el, "etTof");
      if (!ctrl || !ctrl.hasKey || !ctrl.key) continue;
      try {
        etApply(() => {
          ctrl.value = ctrl.key.slice();
        });
        await sleep(60);
        if (ctrl.isCorrect === true) report.done++; else report.bad++;
      } catch (error) {
        report.bad++;
        logger.debug(error);
      }
      await sleep(interval);
    }
    try {
      await etSolveMatchingAll();
    } catch (error) {
      logger.error({ content: "连线题自动作答异常：" + (error && error.message || error) });
    }
    return report;
  }
  async function etSolveMatchingAll() {
    for (const el of etQuery("et-matching")) {
      const ctrl = etController(el, "etMatching");
      let pairs = [];
      if (ctrl && Array.isArray(ctrl.keys)) {
        ctrl.keys.forEach((bs, ai) => {
          (bs || []).forEach((bi) => pairs.push([ai, bi]));
        });
      } else {
        const attr = el.getAttribute("key") || "";
        pairs = attr.split(",").map((s) => {
          const m = /(\d+)-(\d+)/.exec(s);
          return m ? [Number(m[1]) - 1, Number(m[2]) - 1] : null;
        }).filter(Boolean);
      }
      if (!pairs.length) continue;
      // 连线题的 svg 圆圈由 $postLink 里根据布局坐标生成，需要等布局完成
      for (let wait = 0; wait < 40; wait++) {
        if (el.querySelectorAll("g.circles circle").length > 0) break;
        await sleep(150);
      }
      for (let attempt = 0; attempt < 3; attempt++) {
        const circles = Array.prototype.slice.call(el.querySelectorAll("g.circles circle"));
        const A = circles.filter((c) => c.getAttribute("data-circle") === "A");
        const B = circles.filter((c) => c.getAttribute("data-circle") === "B");
        for (const [ai, bi] of pairs) {
          if (!A[ai] || !B[bi]) continue;
          $(A[ai]).trigger("click");
          await sleep(120);
          $(B[bi]).trigger("click");
          await sleep(160);
        }
        await sleep(250);
        if (el.querySelectorAll("g.answers .line line").length >= pairs.length) break;
      }
    }
  }
  async function solveEt(answers) {
    if (!etHasAngular()) return false;
    if (!(await etWaitForQuestions(9000))) return false;
    let report = { done: 0, bad: 0 };
    for (let attempt = 0; attempt < 2; attempt++) {
      const pass = await etSolveEtOnce();
      report.done = Math.max(report.done, pass.done);
      report.bad = pass.bad;
      if (pass.bad === 0) break;
      await sleep(600);
    }
    if (report.done || report.bad) {
      logger.debug({ content: `自动答题：成功 ${report.done} 处，失败 ${report.bad} 处` });
    }
    return report.done > 0;
  }
  function etItemController(el) {
    return etController(el, "etItem");
  }
  async function etAllItemsCompleted(timeout) {
    const deadline = Date.now() + (timeout || 20000);
    while (Date.now() < deadline) {
      const items = etQuery("et-item");
      if (!items.length) return true;
      let all = true;
      for (const el of items) {
        const item = etItemController(el);
        if (!item) { all = false; break; }
        // etItem controller 没有 progressTotal（只是局部变量），只能以 interactionIds 判断"是否有交互题"
        const interactionIds = Array.isArray(item.interactionIds) ? item.interactionIds : [];
        if (!interactionIds.length) continue;
        const pm = item.scormInfo && item.scormInfo.progressMeasure;
        if (String(pm) === "1") continue;
        all = false;
        break;
      }
      if (all) return true;
      await sleep(400);
    }
    return false;
  }
  function etAllAnswersCorrect() {
    let keyed = 0;
    let correct = 0;
    let mismatch = "";
    for (const el of etQuery("et-blank")) {
      const c = etController(el, "etBlank");
      if (!c || !c.hasKey) continue;
      keyed++;
      if (c.isCorrect === true) correct++;
      else if (!mismatch) mismatch = `填空「${(c.key && c.key[0]) || ""}」`;
    }
    for (const el of etQuery("et-choice")) {
      const c = etController(el, "etChoice");
      if (!c || !c.hasKey) continue;
      keyed++;
      if (c.isCorrect === true) correct++;
      else if (!mismatch) mismatch = "选择题";
    }
    for (const el of etQuery("et-select")) {
      const c = etController(el, "etSelect");
      if (!c || !c.hasKey) continue;
      keyed++;
      if (c.isCorrect === true) correct++;
      else if (!mismatch) mismatch = "下拉题";
    }
    for (const el of etQuery("et-tof")) {
      const c = etController(el, "etTof");
      if (!c || !c.hasKey) continue;
      keyed++;
      if (c.isCorrect === true) correct++;
      else if (!mismatch) mismatch = "判断题";
    }
    for (const el of etQuery("et-matching")) {
      const c = etController(el, "etMatching");
      if (!c || !Array.isArray(c.keys)) continue;
      keyed++;
      let ok = true;
      for (let ai = 0; ai < c.keys.length; ai++) {
        const bs = c.keys[ai];
        if (!bs || !bs.length) continue;
        const got = Array.isArray(c.answers[ai]) ? c.answers[ai] : [];
        if (!bs.every((bi) => got.indexOf(bi) !== -1)) { ok = false; break; }
      }
      if (ok) correct++;
      else if (!mismatch) mismatch = "连线题";
    }
    if (keyed === 0) return { ok: true, keyed, correct };
    return { ok: correct === keyed, keyed, correct, mismatch };
  }
  async function etAutoSubmitCurrent() {
    const items = etQuery("et-item");
    if (!items.length) return false;
    const buttons = etQuery('et-button[action="item.submit()"] > button');
    if (!buttons.length) {
      logger.info({ content: "本节没有可提交的按钮（视频/听力/主观题页面），直接跳过提交" });
      return false;
    }
    const allDone = await etAllItemsCompleted(8000);
    if (!allDone) {
      logger.info({ content: "本节还有题目未完成（可能是口语/录音/未适配题型），跳过自动提交，稍后切到下一节" });
      await sleep(600);
      return false;
    }
    const answerCheck = etAllAnswersCorrect();
    logger.debug(`自动提交检查：提交按钮 ${buttons.length} 个，进度已完成，答案校验 ${answerCheck.correct}/${answerCheck.keyed}`);
    if (!answerCheck.ok) {
      logger.error({ content: `自动提交已跳过：仍有 ${answerCheck.keyed - answerCheck.correct} 处答案未确认正确（${answerCheck.mismatch || "未知"}），为避免低分不提交` });
      return false;
    }
    const oldConfirm = window.confirm;
    window.confirm = () => true;
    let clicked = 0;
    try {
      for (const btn of buttons) {
        if (btn.disabled) continue;
        btn.click();
        clicked++;
        await sleep(3000);
      }
    } catch (error) {
      logger.error({ content: "自动提交异常：" + (error && error.message || error) });
    } finally {
      window.confirm = oldConfirm;
    }
    let submitted = false;
    for (const el of items) {
      const item = etItemController(el);
      if (item && item.isSubmitted === true) submitted = true;
      const reset = el.querySelector('et-button[action="item.reset()"]');
      if (reset && !reset.classList.contains("ng-hide")) submitted = true;
    }
    if (submitted) {
      logger.info({ content: "本节已自动提交" });
      logger.debug(`本节已自动提交（点击提交按钮 ${clicked} 次）`);
    } else {
      logger.info({ content: "自动提交未成功（可能仍有题目未完成），继续自动切换" });
      logger.debug(`自动提交未成功（点击提交按钮 ${clicked} 次，isSubmitted 未置位）`);
    }
    return submitted;
  }
  async function etCollectMediaDurations() {
    const medias = etQuery("audio, video");
    const seen = {};
    const durations = [];
    const mediaKey = (src) => String(src || "").split("/").pop().replace(/\.[^.]+$/, "").toLowerCase();
    for (const media of medias) {
      try {
        let duration = Number(media.duration);
        if (!Number.isFinite(duration) || duration <= 0) {
          await new Promise((resolve) => {
            let done = false;
            const finish = () => {
              if (done) return;
              done = true;
              resolve();
            };
            try {
              media.addEventListener("loadedmetadata", finish, { once: true });
              media.addEventListener("error", finish, { once: true });
              if (media.readyState === 0) media.load();
            } catch (error) {
              finish();
            }
            setTimeout(finish, 3000);
          });
          duration = Number(media.duration);
        }
        if (!Number.isFinite(duration) || duration <= 0) continue;
        // 同一段媒体的 <video> 和 <audio>（如 mp4 自带音轨又被插件生成 audio）只算一次
        const key = mediaKey(media.currentSrc || media.src);
        if (key && seen[key]) continue;
        if (key) seen[key] = true;
        durations.push(duration);
      } catch (error) {
        logger.debug(error);
      }
    }
    return durations;
  }
  function etClampNumber(value, fallback, min, max) {
    const n = Number(value);
    const v = Number.isFinite(n) ? n : fallback;
    return Math.min(max, Math.max(min, v));
  }
  async function etComputeAutoWaitMs() {
    let media = 0;
    if (store.userSettings.autoWaitMedia !== false) {
      const durations = await etCollectMediaDurations();
      media = durations.reduce((sum, d) => sum + d, 0);
      if (durations.length) logger.debug(`本页媒体时长：${durations.map((d) => Math.round(d)).join(" + ")} = ${Math.round(media)} 秒`);
    }
    const min = etClampNumber(store.userSettings.autoWaitRandomMin, 60, 0, 3600);
    const max = etClampNumber(store.userSettings.autoWaitRandomMax, 180, min, 10800);
    const random = min + Math.random() * (max - min);
    const capMinutes = etClampNumber(store.userSettings.autoWaitCap, 90, 1, 600);
    const totalSec = Math.min(media + random, capMinutes * 60);
    return {
      media,
      random,
      totalMs: Math.round(totalSec * 1000),
      capped: media + random > capMinutes * 60
    };
  }
  function etAutoPlayMedia() {
    for (const media of etQuery("audio, video")) {
      try {
        media.muted = true;
        const playing = media.play();
        if (playing && playing.catch) playing.catch(() => {});
      } catch (error) {
        logger.debug(error);
      }
    }
  }
  async function etSleepWithAbort(ms, pageUrl, run) {
    const active = () => location.href === pageUrl && store.userSettings.autoNext && store.userSettings.autoSolve && (!run || window.__eocsAutoNextRun === run);
    const deadline = Date.now() + ms;
    while (Date.now() < deadline) {
      if (!active()) return false;
      await sleep(Math.min(1000, Math.max(0, deadline - Date.now())));
    }
    return active();
  }
  async function etAutoNextFlow(hasAnswers) {
    if (!store.userSettings.autoNext || !store.userSettings.autoSolve) return;
    if (window.__eocsAutoNextUrl === location.href) return;
    window.__eocsAutoNextUrl = location.href;
    const run = { id: Date.now().toString(36) + Math.random().toString(36).slice(2) };
    window.__eocsAutoNextRun = run;
    let notified = false;
    const pageUrl = location.href;
    logger.debug(`全自动：本节处理开始（hasAnswers=${hasAnswers}）`);
    try {
      if (store.userSettings.autoWait !== false) {
        const waitInfo = await etComputeAutoWaitMs();
        logger.info({ content: `自动等待 ${Math.round(waitInfo.totalMs / 1000)} 秒（媒体 ${Math.round(waitInfo.media)} 秒 + 随机 ${Math.round(waitInfo.random)} 秒${waitInfo.capped ? "，已达上限" : ""}）后提交…` });
        if (store.userSettings.autoPlayMedia) etAutoPlayMedia();
        const stayed = await etSleepWithAbort(waitInfo.totalMs, pageUrl, run);
        if (!stayed) return;
      }
      if (!await etSleepWithAbort(0, pageUrl, run)) return;
      let submitted = false;
      const wantSubmit = hasAnswers && store.userSettings.autoSubmit !== false;
      const canSubmit = wantSubmit && etQuery('et-button[action="item.submit()"] > button').length > 0;
      if (canSubmit) {
        submitted = await etAutoSubmitCurrent();
        if (!submitted && location.href === pageUrl) {
          if (!await etSleepWithAbort(2500, pageUrl, run)) return;
          submitted = etQuery('et-button[action="item.reset()"]').some((el) => !el.classList.contains("ng-hide"));
          if (!submitted) submitted = await etAutoSubmitCurrent();
        }
        if (!submitted) logger.info({ content: "本节未能自动提交（为避免低分不会提交未确认的答案），直接切到下一节" });
      } else if (wantSubmit) {
        logger.info({ content: "本节没有提交按钮（视频/听力/主观题页面），直接切到下一节" });
      }
      const delay = Math.max(1, Number(store.userSettings.autoNextDelay) || 3) * 1000;
      if (!await etSleepWithAbort(delay, pageUrl, run)) return;
      logger.debug(`全自动：通知父页切换（submitted=${submitted}）`);
      try {
        window.top.postMessage({ __eocs: true, type: "AUTO_NEXT", from: pageUrl, submitted, requestId: run.id }, "*");
        notified = true;
      } catch (error) {
        logger.debug(error);
      }
    } catch (error) {
      logger.error({ content: "自动下一节异常：" + (error && error.message || error) });
    } finally {
      if (window.__eocsAutoNextRun === run) {
        window.__eocsAutoNextRun = null;
        if (!notified) window.__eocsAutoNextUrl = "";
      }
    }
  }

  function parseManifest(dom) {
    let realAnswers = [];
    let answers = dom.querySelectorAll("correctResponse value");
    logger.debug(answers);
    let index2 = 1;
    for (const element of answers) {
      const answerArray = parseAnswer$2(element, dom);
      for (const answer of answerArray) {
        if (answer) {
          answer.index = index2;
          logger.debug(answer);
          realAnswers.push(answer);
        }
        index2++;
      }
    }
    return realAnswers;
  }
  function parseAnswer$2(element, dom) {
    let answerText = "";
    let answerType = "";
    let returnAnswers = [];
    let identifier2 = element.textContent;
    if (identifier2.length == 36) {
      answerType = "choice";
      let selector = `[identifier="${identifier2}"]`;
      try {
        answerText = dom.querySelector(selector).textContent;
      } catch (error) {
        answerText = element.textContent;
      }
      returnAnswers.push({
        text: answerText,
        type: answerType,
        element,
        identifier: identifier2
      });
    } else if (identifier2.length > 200) {
      let identifiers = identifier2.split(",");
      for (const identifier22 of identifiers) {
        let selector = `[identifier="${identifier22}"]`;
        answerText = dom.querySelector(selector).textContent;
        returnAnswers.push({
          text: answerText,
          type: "choice",
          element,
          identifier: identifier22
        });
      }
    } else {
      answerText = element.textContent;
      answerType = answerText == "(Open.)" ? "textarea" : "blank";
      returnAnswers.push({
        text: answerText,
        type: answerType,
        element
      });
    }
    return returnAnswers;
  }
  async function solveManifest(answers) {
    let inputPatternOnPaper = document.querySelectorAll(
      '.pattern input[type="text"]'
    );
    let inputOrder = 0;
    let optionLabelOnPaper = document.querySelectorAll("label[for]");
    for (const answer of answers) {
      await sleep(store.userSettings.solveInterval);
      switch (answer.type) {
        case "blank":
          for (const inputAnswer of answer.text.split(",")) {
            try {
              inputPatternOnPaper[inputOrder].value = inputAnswer;
            } catch (error) {
              document.querySelector(".pattern textarea").textContent = inputAnswer;
            } finally {
              inputOrder++;
            }
          }
          break;
        case "textarea":
          document.querySelector(".pattern textarea").value = store.userSettings.defaultBlankAnswer;
          break;
        case "choice":
          for (const label of optionLabelOnPaper) {
            if (label.getAttribute("for").split("_")[1] == answer.identifier) {
              label.click();
              try {
                let labelHeight = label.getBoundingClientRect().top;
                document.querySelector("#divTest").scrollTo(0, labelHeight - 50);
              } catch (error) {
              }
            }
          }
          break;
      }
    }
  }
  let wordTestTimer;
  function parseWordTest() {
    clearInterval(wordTestTimer);
    wordTestTimer = setInterval(() => {
      try {
        store.clearLogs();
        let answer = document.querySelector(
          'ul[id^="wordTest"][style=""] > li:last-child'
        ).textContent;
      } catch (error) {
      }
    }, 2e3);
  }
  function parseDataSolution() {
    let realAnswers = [];
    let answers = document.querySelectorAll("[data-solution]");
    logger.debug(answers);
    let index2 = 1;
    for (const element of answers) {
      const answer = parseAnswer$1(element);
      if (answer) {
        answer.index = index2;
        logger.debug(answer);
        realAnswers.push(answer);
      }
      index2++;
    }
    return realAnswers;
  }
  function parseAnswer$1(element) {
    let answerText = element.getAttribute("data-solution");
    let answerType = "";
    if (answerText) {
      answerType = "blank";
    } else {
      try {
        answerText = element.firstElementChild.textContent;
        if (!answerText)
          answerText = element.textContent;
      } catch (error) {
        answerText = element.textContent;
      }
      answerType = "choice";
    }
    return {
      text: answerText,
      type: answerType,
      element
    };
  }
  async function solveDataSolution(answers) {
    const inputOnPaper = document.querySelectorAll("input[data-itemtype]");
    let inputOrder = 0;
    for (const answer of answers) {
      await sleep(store.userSettings.solveInterval);
      switch (answer.type) {
        case "blank":
          inputOnPaper[inputOrder].value = answer.text;
          inputOrder++;
          break;
        case "choice":
          answer.element.click();
          break;
      }
    }
  }
  function parseReading(dom) {
    let realAnswers = [];
    let answers = dom.querySelectorAll("correctResponse value");
    logger.debug(answers);
    let index2 = 1;
    for (const element of answers) {
      const answer = parseAnswer(element, dom);
      if (answer) {
        answer.index = index2;
        logger.debug(answer);
        realAnswers.push(answer);
      }
      index2++;
    }
    return realAnswers;
  }
  function parseAnswer(element, dom) {
    let answerText = element.textContent;
    let answerType = "";
    if (answerText.length == 36) {
      answerType = "choice";
      let selector = `[identifier="${answerText}"]`;
      element = dom.querySelector(selector);
      answerText = /CDATA\[(.*)\]\]/.exec(element.innerHTML)[1].trim();
    } else if (answerText.length == 73) {
      answerType = "matching";
    } else {
      answerType = "blank";
    }
    return {
      text: answerText,
      type: answerType,
      element
    };
  }
  async function initialCourseCatalog() {
    const catalog = await WELearnAPI.getCourseCatalog();
    logger.debug({ catalog });
    if (catalog === void 0)
      return;
    const { dataSolution, et: et2, manifest, reading, app } = catalog;
    MANIFEST.push(...manifest);
    DATA_SOLUTION.push(...dataSolution);
    ET.push(...et2);
    READING.push(...reading);
    APP.push(...app);
    logger.debug({
      MANIFEST,
      DATA_SOLUTION,
      ET,
      READING,
      APP
    });
  }
  const PARSER = new DOMParser();
  async function queryData(answerUrl) {
    const response = await fetch(answerUrl);
    const text = await response.text();
    let htmlDom = PARSER.parseFromString(text, "text/html");
    logger.debug(htmlDom);
    return htmlDom;
  }
  async function queryManifest(manifestUrl, identifier2, courseInfo) {
    const response = await fetch(manifestUrl);
    const text = await response.text();
    let selector = `resource[identifier="${identifier2}"] file`;
    let resource = PARSER.parseFromString(text, "text/html").querySelector(selector).getAttribute("href");
    let answerUrl = `https://centercourseware.sflep.com/${courseInfo}/${resource}`;
    return queryData(answerUrl);
  }
  async function outputAnswers(answers) {
    for (const answer of answers) {
      logger.question({
        content: {
          order: `${String(answer.index).padStart(2, "0")}`,
          info: {
            content: "标答"
          },
          answerText: answer.text,
          raw: {
            element: answer.element
          },
          solve: {
            couldSolve: true,
            hasSolved: true,
            solveThis: async () => {
              logger.debug("solve this");
            }
          }
        }
      });
      await sleep(CONSTANT.QUERY_INTERVAL);
    }
  }
  async function determineCourseType(iframeUrl) {
    let courseInfo;
    try {
      courseInfo = decodeURI(/com\/(.*?)\//.exec(iframeUrl)[1]);
    } catch (error) {
      logger.debug(error);
      return;
    }
    logger.debug(courseInfo);
    let identifier2 = void 0;
    try {
      const hashMatch = /#(.*)\?/.exec(iframeUrl) || /#(.*)$/.exec(iframeUrl);
      if (hashMatch) identifier2 = hashMatch[1].split("?")[0];
    } catch (error) {
      logger.debug(error);
    }
    let manifestUrl = `https://centercourseware.sflep.com/${courseInfo}/resource/manifest.xml`;
    let answerUrl = `https://centercourseware.sflep.com/${courseInfo}/data${identifier2}.html`;
    let dom;
    let answers = [];
    let hasAnswer = false;
    let solveType = "";
    try {
      if (MANIFEST.includes(courseInfo)) {
        solveType = "manifest";
        dom = await queryManifest(manifestUrl, identifier2, courseInfo);
        answers = parseManifest(dom);
        if (document.querySelector('div[id^="word"]')) parseWordTest();
        if (store.userSettings.autoSolve) {
          try {
            await solveManifest(answers);
            window.__eocsSolvedUrl = iframeUrl;
          } catch (error) {
            logger.error({ content: `自动答题异常：${error && error.message || error}` });
          }
        }
      } else if (ET.includes(courseInfo)) {
        solveType = "et";
        dom = await queryData(answerUrl);
        answers = parseEt(dom);
        if (store.userSettings.autoSolve && answers.length) {
          try {
            const solved = await solveEt(answers);
            if (solved || !answers.length) window.__eocsSolvedUrl = iframeUrl;
          } catch (error) {
            logger.error({ content: `自动答题异常：${error && error.message || error}` });
          }
        }
      } else if (DATA_SOLUTION.includes(courseInfo)) {
        solveType = "dataSolution";
        await sleep(2e3);
        answers = parseDataSolution();
        logger.debug(answers);
        if (answers.length) {
          outputAnswers(answers);
          if (store.userSettings.autoSolve) {
            try {
              await solveDataSolution(answers);
              window.__eocsSolvedUrl = iframeUrl;
            } catch (error) {
              logger.error({ content: `自动答题异常：${error && error.message || error}` });
            }
          }
        } else if (!hasAnswer) {
          logger.info({ content: "此页面已适配，无答案" });
        }
      } else if (READING.includes(courseInfo)) {
        solveType = "reading";
        let answerUrl2 = location.href.split("&")[0].replace("web.html?courseurl=", "data/") + ".xml";
        dom = await queryData(answerUrl2);
        answers = parseReading(dom);
      } else {
        logger.info({ content: `未适配的课程类型，请在Github反馈` });
        logger.info({ content: `${courseInfo}` });
        logger.info({ content: `注意页面上是否有二维码，且注明需在app中使用，这种题型只能用app` });
        logger.debug(courseInfo);
        logger.debug(identifier2);
      }
    } catch (error) {
      logger.error({ content: `课程解析异常：${error && error.message || error}` });
      logger.debug(error);
    }
    logger.debug(answers);
    if (answers.length) {
      hasAnswer = true;
      outputAnswers(answers);
    }
    if (solveType && store.userSettings.autoSolve) {
      window.__eocsAutoNextReady = { url: location.href, hasAnswers: answers.length > 0 };
      if (store.userSettings.autoNext && store.userSettings.autoSolve) etAutoNextFlow(answers.length > 0);
    }
  }

  if (location.href.includes("centercourseware.sflep.com")) {
    let bufferUrl = "";
    let watcher2 = function() {
      const currentUrl = location.href;
      if (typeof store.userSettings.autoSolve === "undefined") return;
      if (currentUrl === bufferUrl) return;
      if (window.__eocsSolvingUrl === currentUrl || window.__eocsSolvedUrl === currentUrl) return;
      bufferUrl = currentUrl;
      store.clearLogs();
      window.__eocsSolvingUrl = currentUrl;
      determineCourseType(currentUrl).then(() => {
        window.__eocsSolvingUrl = "";
      }).catch((error) => {
        window.__eocsSolvingUrl = "";
        logger.debug(error);
      });
    };
    setInterval(watcher2, 250);
    subscribe(store.userSettings, () => {
      if (!store.userSettings.autoNext || !store.userSettings.autoSolve) {
        window.__eocsAutoNextRun = null;
        window.__eocsAutoNextUrl = "";
      }
      if (typeof store.userSettings.autoSolve === "undefined") return;
      if (!store.userSettings.autoSolve) return;
      const ready = window.__eocsAutoNextReady;
      if (ready && ready.url === location.href) {
        if (store.userSettings.autoNext) etAutoNextFlow(ready.hasAnswers);
        return;
      }
      if (window.__eocsSolvedUrl === location.href) return;
      if (window.__eocsSolvingUrl === location.href) return;
      window.__eocsSolvingUrl = location.href;
      store.clearLogs();
      determineCourseType(location.href).then(() => {
        window.__eocsSolvingUrl = "";
      }).catch((error) => {
        window.__eocsSolvingUrl = "";
        logger.debug(error);
      });
    });
    (async function() {
      for (let i = 0; i < 150; i++) {
        if (typeof store.userSettings.autoSolve !== "undefined") break;
        await sleep(100);
      }
      try {
        await initialCourseCatalog();
      } catch (error) {
        logger.debug(error);
      }
    })();
  }
  const SCO_SELECTION_KEY = "eocs_sco_selection";
  const scoSelectionCache = new Map();
  function scoSelectionStorageKey(doc = document) {
    const url = new URL(doc.location ? doc.location.href : location.href);
    const params = new Map(Array.from(url.searchParams, ([key, value]) => [key.toLowerCase(), value]));
    const course = params.get("cid") || params.get("courseid") || params.get("course_id");
    const classId = params.get("classid") || params.get("class_id") || "";
    // Without a course id, isolate by the actual catalogue, never by the current SCO.
    const identity = course ? [course, classId] : collectScoItems(doc).map((item) => item.id).sort();
    return SCO_SELECTION_KEY + ":v2:" + JSON.stringify(identity);
  }
  function validScoSelection(value) {
    if (!value || typeof value !== "object" || Array.isArray(value)) return {};
    return Object.fromEntries(Object.entries(value).filter(([id, checked]) =>
      id !== "__proto__" && id !== "constructor" && typeof checked === "boolean"));
  }
  function loadScoSelection(doc = document) {
    const key = scoSelectionStorageKey(doc);
    try {
      let raw = window.localStorage.getItem(key);
      // Claim legacy preferences once, avoiding importing them into every course.
      if (raw === null && !window.localStorage.getItem(SCO_SELECTION_KEY + ":legacy-owner")) {
        const legacy = window.localStorage.getItem(SCO_SELECTION_KEY);
        if (legacy !== null) {
          raw = JSON.stringify(validScoSelection(JSON.parse(legacy)));
          window.localStorage.setItem(key, raw);
          window.localStorage.setItem(SCO_SELECTION_KEY + ":legacy-owner", key);
        }
      }
      const selection = validScoSelection(JSON.parse(raw || "{}"));
      scoSelectionCache.set(key, selection);
      return { ...selection };
    } catch (error) {
      return { ...(scoSelectionCache.get(key) || {}) };
    }
  }
  function saveScoSelection(selection, doc = document) {
    const key = scoSelectionStorageKey(doc);
    const clean = validScoSelection(selection);
    scoSelectionCache.set(key, clean);
    try {
      window.localStorage.setItem(key, JSON.stringify(clean));
    } catch (error) {
      logger.debug(error);
    }
  }
  function scoIdFromLink(link) {
    const matched = /SelectSCO\s*\(\s*(['"])(.*?)\1\s*(?:\)|,)/i.exec(link && link.getAttribute("onclick") || "");
    return matched ? matched[2] : "";
  }
  function collectScoItems(doc) {
    const items = [];
    const seen = new Set();
    const cleanText = (text) => (text || "").replace(/\s+/g, " ").trim();
    const links = doc.querySelectorAll('a[onclick*="SelectSCO"]');
    for (const link of links) {
      const id = scoIdFromLink(link);
      if (!id || seen.has(id)) continue;
      seen.add(id);
      const path = [];
      const row = link.closest("li");
      const depthOf = (el) => {
        const match = /(?:^|\s)courseware_list_1_(\d+)(?:\s|$)/.exec(el.className || "");
        return match ? Number(match[1]) : null;
      };
      const depth = row && depthOf(row);
      if (depth !== null && row && row.parentElement.classList.contains("categoryitems")) {
        // WE Learn uses flat sibling rows; CSS suffixes encode their hierarchy.
        let parentDepth = depth;
        for (let sibling = row.previousElementSibling; sibling; sibling = sibling.previousElementSibling) {
          const level = depthOf(sibling);
          if (level === null || level >= parentDepth) continue;
          parentDepth = level;
          const heading = sibling.querySelector('a[onclick*="ShowSubMenu"]');
          if (heading) path.unshift(cleanText(heading.textContent));
        }
        const unitContainer = row.closest(".courseware_list_1");
        const heading = unitContainer && unitContainer.querySelector(".courseware_list_1_1 .v_1");
        if (heading) path.unshift(cleanText(heading.textContent));
      } else {
        // Also support standard nested lists used by other player templates.
        for (let el = link.parentElement; el && el !== doc.body; el = el.parentElement) {
          if (el.tagName !== "LI" || !el.querySelector("ul,ol")) continue;
          const heading = el.cloneNode(true);
          heading.querySelectorAll('ul,ol,a[onclick*="SelectSCO"],script,style,input,button').forEach((child) => child.remove());
          const title = cleanText(heading.textContent);
          if (title) path.unshift(title);
        }
      }
      const unitIndex = path.findIndex((title) => /\bunit\b|单元/i.test(title));
      if (unitIndex > 0) path.splice(0, unitIndex);
      items.push({ id, title: cleanText(link.textContent) || id, unit: path[0] || "课程目录", path, link });
    }
    return items;
  }
  function getCurrentScoId(doc) {
    // SelectSCO updates the active row, but often leaves ?sco= unchanged.
    try {
      const current = doc.querySelector('li.courseware_current a[onclick*="SelectSCO"]');
      const id = scoIdFromLink(current);
      if (id) return id;
      const matched = /[?&]sco=([^&]+)/i.exec(doc.location ? doc.location.href : location.href);
      if (matched) return decodeURIComponent(matched[1]);
    } catch (error) {
      logger.debug(error);
    }
    return "";
  }
  function jumpToNextSelectedSco(doc) {
    const items = collectScoItems(doc);
    if (!items.length) return null;
    const selection = loadScoSelection(doc);
    if (!items.some((item) => selection[item.id] === false)) return null;
    const startIndex = items.findIndex((item) => item.id === getCurrentScoId(doc));
    let next = items.slice(startIndex + 1).find((item) => selection[item.id] !== false);
    // Include the current item when wrapping: a one-section range can loop.
    if (!next && store.userSettings.loopRefresh && startIndex >= 0) {
      next = items.slice(0, startIndex + 1).find((item) => selection[item.id] !== false);
    }
    if (!next) return false;
    logger.info({ content: `切换到勾选的节 -> ${next.title}` });
    next.link.click();
    return true;
  }
  let scoPanelSignature = "";
  let refreshScoPanelSelection = null;
  function buildScoSelectionPanel() {
    if (window !== window.top || !isCoursePlayerPage()) return;
    const items = collectScoItems(document);
    const signature = scoSelectionStorageKey(document) + JSON.stringify(items.map(({id, title, path}) => [id, title, path]));
    const previous = document.getElementById("eocs-sco-panel");
    if (previous && signature === scoPanelSignature) return;
    const wasOpen = previous && previous.classList.contains("eocs-open");
    if (previous) previous.remove();
    const oldToggle = document.getElementById("eocs-sco-toggle");
    if (oldToggle) oldToggle.remove();
    if (!items.length) { refreshScoPanelSelection = null; return; }
    scoPanelSignature = signature;
    let selection = loadScoSelection();
    // Preserve every real directory level and its original order.
    const root = { children: new Map(), ids: [], items: [] };
    for (const item of items) {
      let node = root;
      node.ids.push(item.id);
      for (const title of item.path.length ? item.path : ["课程目录"]) {
        if (!node.children.has(title)) node.children.set(title, { children: new Map(), ids: [], items: [] });
        node = node.children.get(title);
        node.ids.push(item.id);
      }
      node.items.push(item);
    }
    if (!document.getElementById("eocs-sco-style")) {
      const style = document.createElement("style");
      style.id = "eocs-sco-style";
      style.textContent = [
        "#eocs-sco-toggle{position:fixed;right:14px;bottom:18px;z-index:2147483001;background:#2b6cb0;color:#fff;padding:8px 12px;border:0;border-radius:16px;font:13px/1.2 'Microsoft YaHei',sans-serif;cursor:pointer;box-shadow:0 2px 8px #0004}",
        "#eocs-sco-panel{position:fixed;right:14px;bottom:62px;z-index:2147483000;width:380px;max-width:calc(100vw - 28px);max-height:75vh;overflow:auto;background:#fff;color:#222;border:1px solid #cbd5e0;border-radius:8px;box-shadow:0 6px 24px #0004;font:12px/1.5 'Microsoft YaHei',sans-serif;display:none}",
        "#eocs-sco-panel.eocs-open{display:block}",
        "#eocs-sco-panel .eocs-head{padding:8px 10px;border-bottom:1px solid #e2e8f0;position:sticky;top:0;background:#f7fafc;z-index:1}",
        "#eocs-sco-panel .eocs-actions{display:flex;gap:6px;margin-top:6px}",
        "#eocs-sco-panel .eocs-actions button{border:1px solid #cbd5e0;background:#fff;border-radius:4px;padding:2px 8px;cursor:pointer}",
        "#eocs-sco-panel label{display:flex;align-items:flex-start;gap:6px;cursor:pointer;padding:4px 10px}",
        "#eocs-sco-panel .eocs-unit-title{background:#e8f0fe;font-weight:600;border-left:3px solid #2b6cb0}",
        "#eocs-sco-panel .eocs-skill-title{background:#f0f4f8;font-weight:500}",
        "#eocs-sco-panel .eocs-sub-title{background:#f8f9fa;color:#555}",
        "#eocs-sco-panel .eocs-row:hover{background:#f0f7ff}",
        "#eocs-sco-panel label span{flex:1;overflow-wrap:anywhere}",
        "#eocs-sco-panel .eocs-tip{padding-top:6px;color:#526173}",
        "#eocs-sco-panel input{margin:3px 0 0;flex:none}"
      ].join("\n");
      document.head.appendChild(style);
    }
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.id = "eocs-sco-toggle";
    toggle.textContent = "刷题范围";
    toggle.setAttribute("aria-controls", "eocs-sco-panel");
    toggle.setAttribute("aria-expanded", String(!!wasOpen));
    const panel = document.createElement("div");
    panel.id = "eocs-sco-panel";
    if (wasOpen) panel.classList.add("eocs-open");
    const head = document.createElement("div");
    head.className = "eocs-head";
    const title = document.createElement("div");
    title.className = "eocs-range-heading";
    title.textContent = "刷题范围";
    const note = document.createElement("div");
    note.className = "eocs-range-note";
    note.textContent = "自动切换只进入勾选章节";
    const actions = document.createElement("div");
    actions.className = "eocs-actions";
    const tip = document.createElement("div");
    tip.className = "eocs-tip";
    const listEl = document.createElement("div");
    head.append(title, note, actions, tip);
    panel.append(head, listEl);
    document.body.append(toggle, panel);
    toggle.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", String(panel.classList.toggle("eocs-open")));
    });
    const groups = [];
    const leaves = [];
    const refreshAll = () => {
      leaves.forEach(({ cb, id }) => { cb.checked = selection[id] !== false; });
      groups.forEach(({ cb, ids }) => {
        const count = ids.filter((id) => selection[id] !== false).length;
        cb.checked = count === ids.length;
        cb.indeterminate = count > 0 && count < ids.length;
      });
      const count = items.filter((item) => selection[item.id] !== false).length;
      tip.textContent = `已选 ${count} / ${items.length} 节` + (count ? " · 自动保存；当前已打开的节不会撤销" : " · 未选择任何节，自动切换将停止");
    };
    const changeSelection = (ids, checked) => {
      // Re-read before applying only this action, retaining changes from other tabs.
      selection = loadScoSelection();
      ids.forEach((id) => {
        if (checked === undefined) delete selection[id];
        else selection[id] = checked;
      });
      saveScoSelection(selection);
      refreshAll();
    };
    for (const [text, checked] of [["全选", true], ["全不选", false], ["恢复默认", undefined]]) {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = text;
      button.addEventListener("click", () => changeSelection(root.ids, checked));
      actions.appendChild(button);
    }
    const renderNode = (node, depth) => {
      for (const [name, child] of node.children) {
        const row = document.createElement("label");
        row.className = depth === 0 ? "eocs-unit-title" : depth === 1 ? "eocs-skill-title" : "eocs-sub-title";
        row.style.paddingLeft = `${10 + Math.min(depth, 6) * 12}px`;
        const cb = document.createElement("input");
        cb.type = "checkbox";
        cb.setAttribute(depth === 0 ? "data-unit" : depth === 1 ? "data-skill" : "data-sub", JSON.stringify(child.ids));
        cb.addEventListener("change", () => changeSelection(child.ids, cb.checked));
        const label = document.createElement("span");
        label.textContent = name;
        row.append(cb, label);
        listEl.appendChild(row);
        groups.push({ cb, ids: child.ids });
        renderNode(child, depth + 1);
      }
      for (const item of node.items) {
        const row = document.createElement("label");
        row.className = "eocs-row";
        row.style.paddingLeft = `${10 + Math.min(depth, 6) * 12}px`;
        const cb = document.createElement("input");
        cb.type = "checkbox";
        cb.setAttribute("data-scoid", item.id);
        cb.addEventListener("change", () => changeSelection([item.id], cb.checked));
        const label = document.createElement("span");
        label.textContent = item.title;
        row.append(cb, label);
        listEl.appendChild(row);
        leaves.push({ cb, id: item.id });
      }
    };
    renderNode(root, 0);
    refreshScoPanelSelection = () => { selection = loadScoSelection(); refreshAll(); };
    refreshAll();
  }
  function watchScoSelectionPanel() {
    buildScoSelectionPanel();
    let timer;
    const observer = new MutationObserver((records) => {
      if (records.every((record) => {
        const el = record.target.nodeType === 1 ? record.target : record.target.parentElement;
        return el && el.closest("#eocs-sco-panel,#eocs-sco-toggle");
      })) return;
      clearTimeout(timer);
      timer = setTimeout(buildScoSelectionPanel, 200);
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ["onclick"] });
    window.addEventListener("storage", (event) => {
      if ((event.key === null || event.key === scoSelectionStorageKey()) && refreshScoPanelSelection) refreshScoPanelSelection();
    });
  }
  function isCoursePlayerPage() {
    return /\.sflep\.com\/(?:student|Student|Course)\/(?:StudyCourse|TryCourse)\.aspx/i.test(location.href);
  }
  function clampRefresh(value, fallback, lo, hi) {
    const n = Number(value);
    const v = Number.isFinite(n) ? n : fallback;
    return Math.min(hi, Math.max(lo, v));
  }
  function generateRandomInterval() {
    const min = clampRefresh(store.userSettings.refreshIntervalMin, 5, 0.1, 30);
    const max = clampRefresh(store.userSettings.refreshIntervalMax, 10, min, 30);
    if (store.userSettings.randomRefresh) return min + Math.random() * (max - min);
    return max;
  }
  let autoRefreshTimer = null;
  let autoRefreshFailures = 0;
  function stopAutoRefresh() {
    if (autoRefreshTimer) {
      clearTimeout(autoRefreshTimer);
      autoRefreshTimer = null;
    }
  }
  function nextChapter() {
    if (!isCoursePlayerPage()) return false;
    let topWindow = window;
    try {
      topWindow = window.top || window;
    } catch (error) {
      topWindow = window;
    }
    let doc;
    try {
      doc = topWindow.document;
    } catch (error) {
      logger.debug(error);
      return false;
    }
    const selectionJump = jumpToNextSelectedSco(doc);
    if (selectionJump !== null) {
      if (selectionJump === false) {
        const selection = loadScoSelection(doc);
        const anySelected = collectScoItems(doc).some((item) => selection[item.id] !== false);
        logger.info({ content: anySelected ? "已到所选范围末尾，自动切换停止" : "没有勾选任何要刷的节，自动切换停止" });
      }
      return selectionJump;
    }
    const jumpButtons = Array.prototype.slice.call(doc.querySelectorAll('a[onclick^="SelectSCO"]'));
    if (!jumpButtons.length) {
      const fallback = Array.prototype.slice.call(doc.querySelectorAll("a,button")).find((el) => /下一节|下一课|下一章|Next/i.test(el.textContent || ""));
      if (fallback) {
        fallback.click();
        return true;
      }
      logger.info({ content: "未找到章节列表，无法自动切换（请确认在课程学习页面）" });
      return false;
    }
    const currentButton = doc.querySelector("li.courseware_current a");
    const isLast = !!currentButton && currentButton === jumpButtons[jumpButtons.length - 1];
    if (isLast) {
      if (!store.userSettings.loopRefresh) {
        logger.info({ content: "已到最后一节，循环挂机未开启，自动切换停止" });
        return false;
      }
      const real = jumpButtons.find((a) => !/说明|desc/i.test(a.textContent || "")) || jumpButtons[1] || jumpButtons[0];
      if (real) {
        real.click();
        return true;
      }
      return false;
    }
    try {
      if (typeof topWindow.NextSCO === "function") {
        topWindow.NextSCO();
        return true;
      }
    } catch (error) {
      logger.debug(error);
    }
    const idx = jumpButtons.indexOf(currentButton);
    if (idx >= 0 && jumpButtons[idx + 1]) {
      jumpButtons[idx + 1].click();
      return true;
    }
    logger.info({ content: "找不到下一节按钮" });
    return false;
  }
  function currentChapterLabel() {
    try {
      const topWindow = window.top || window;
      const doc = topWindow.document;
      const id = getCurrentScoId(doc);
      if (id) return id;
      const el = doc.querySelector("li.courseware_current a");
      return el ? String(el.textContent || "").replace(/\s+/g, " ").trim() : "";
    } catch (error) {
      return "";
    }
  }
  async function notify() {
    let status = await getValue("hasInformed", false);
    if (!status) {
      await setValue("hasInformed", true);
    }
  }
  function scheduleNextChapter() {
    stopAutoRefresh();
    const delay = Math.round(generateRandomInterval() * 60 * 1000);
    logger.info({ content: `自动挂机：${Math.round(delay / 1000)} 秒后切换到下一节` });
    autoRefreshTimer = setTimeout(async () => {
      autoRefreshTimer = null;
      const before = currentChapterLabel();
      let ok = false;
      try {
        ok = nextChapter();
      } catch (error) {
        logger.error({ content: `自动切换出错：${error && error.message || error}` });
      }
      if (ok) {
        await sleep(2500);
        const after = currentChapterLabel();
        const selection = loadScoSelection(document);
        const singleSectionLoop = store.userSettings.loopRefresh && collectScoItems(document).filter((item) => selection[item.id] !== false).length === 1;
        if (before && after && before === after && !singleSectionLoop) {
          autoRefreshFailures++;
          logger.debug({ content: "自动切换后章节未变化" });
          if (autoRefreshFailures >= 2) {
            logger.info({ content: "自动切换没有生效（可能已在最后一节），自动挂机停止" });
            return;
          }
        } else {
          autoRefreshFailures = 0;
        }
      } else {
        autoRefreshFailures++;
        if (!store.userSettings.loopRefresh || autoRefreshFailures >= 3) {
          logger.info({ content: "自动挂机已停止（可手动切换到其它章节后再开启）" });
          return;
        }
      }
      if (store.userSettings.autoRefresh && !store.userSettings.autoNext) scheduleNextChapter();
    }, delay);
  }
  async function autoRefresh() {
    if (!isCoursePlayerPage()) return;
    for (let i = 0; i < 150; i++) {
      if (typeof store.userSettings.autoRefresh !== "undefined") break;
      await sleep(100);
    }
    if (store.userSettings.autoNext && store.userSettings.autoSolve) {
      logger.info({ content: "已开启全自动刷题：由自动答题流程负责切换页面（挂机定时不重复启用）" });
      return;
    }
    if (store.userSettings.autoRefresh) {
      if (!autoRefreshTimer) scheduleNextChapter();
      notify();
    } else {
      logger.debug("自动挂机未开启");
    }
  }
  if (isCoursePlayerPage()) {
    try {
      window.alert = function(msg) {
        logger.info({ content: String(msg) });
      };
    } catch (error) {
      logger.debug(error);
    }
    autoRefresh();
    watchScoSelectionPanel();
    subscribe(store.userSettings, () => {
      if (store.userSettings.autoRefresh && !store.userSettings.autoNext) {
        if (!autoRefreshTimer) scheduleNextChapter();
      } else {
        stopAutoRefresh();
      }
    });
  }
  let autoNextPending = null;
  let autoNextCompleted = null;
  function isActiveCourseFrame(source, root, depth = 0) {
    if (!source || !root || depth > 8) return false;
    if (source === root) return true;
    try {
      for (let i = 0; i < root.frames.length; i++) {
        if (isActiveCourseFrame(source, root.frames[i], depth + 1)) return true;
      }
    } catch (_) {}
    return false;
  }
  function handleAutoNextMessage(event) {
    const data = event.data;
    if (!data || data.__eocs !== true || data.type !== "AUTO_NEXT") return;
    if (window !== window.top || !isCoursePlayerPage()) return;
    if (!store.userSettings.autoNext || !store.userSettings.autoSolve) return;
    const frame = document.getElementById("contentFrame");
    if (!frame || !isActiveCourseFrame(event.source, frame.contentWindow)) return;
    const chapter = getCurrentScoId(document);
    const from = typeof data.from === "string" ? data.from : "";
    const requestId = typeof data.requestId === "string" ? data.requestId : "";
    const same = (request) => request && request.source === event.source && request.from === from && request.chapter === chapter && request.requestId === requestId;
    if (same(autoNextPending) || same(autoNextCompleted)) return;
    const request = { source: event.source, from, chapter, requestId };
    autoNextPending = request;
    logger.info({ content: "本节已处理，准备切换到下一节…" });
    setTimeout(() => {
      if (autoNextPending !== request) return;
      autoNextPending = null;
      try {
        if (!store.userSettings.autoNext || !store.userSettings.autoSolve) return;
        const activeFrame = document.getElementById("contentFrame");
        if (!activeFrame || !isActiveCourseFrame(request.source, activeFrame.contentWindow) || getCurrentScoId(document) !== request.chapter) return;
        // A nested exercise URL differs from its wrapper's iframe.src. Check the
        // actual frame tree and SCO identity instead of rejecting that valid URL.
        const ok = nextChapter();
        if (ok) autoNextCompleted = request;
        else logger.info({ content: "自动切换已停止，请检查所选范围和课程目录" });
      } catch (error) {
        logger.error({ content: "自动切换失败：" + (error && error.message || error) });
      }
    }, 800);
  }
  window.addEventListener("message", handleAutoNextMessage, false);

  WELearnAPI.checkVersion();
  const index$2 = "";
  var reactDomExports = {};
  var reactDom = {
    get exports() {
      return reactDomExports;
    },
    set exports(v2) {
      reactDomExports = v2;
    }
  };
  var reactDom_production_min = {};
  var schedulerExports = {};
  var scheduler = {
    get exports() {
      return schedulerExports;
    },
    set exports(v2) {
      schedulerExports = v2;
    }
  };
  var scheduler_production_min = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  (function(exports) {
    function f2(a2, b2) {
      var c2 = a2.length;
      a2.push(b2);
      a:
        for (; 0 < c2; ) {
          var d2 = c2 - 1 >>> 1, e2 = a2[d2];
          if (0 < g2(e2, b2))
            a2[d2] = b2, a2[c2] = e2, c2 = d2;
          else
            break a;
        }
    }
    function h2(a2) {
      return 0 === a2.length ? null : a2[0];
    }
    function k2(a2) {
      if (0 === a2.length)
        return null;
      var b2 = a2[0], c2 = a2.pop();
      if (c2 !== b2) {
        a2[0] = c2;
        a:
          for (var d2 = 0, e2 = a2.length, w2 = e2 >>> 1; d2 < w2; ) {
            var m2 = 2 * (d2 + 1) - 1, C2 = a2[m2], n2 = m2 + 1, x2 = a2[n2];
            if (0 > g2(C2, c2))
              n2 < e2 && 0 > g2(x2, C2) ? (a2[d2] = x2, a2[n2] = c2, d2 = n2) : (a2[d2] = C2, a2[m2] = c2, d2 = m2);
            else if (n2 < e2 && 0 > g2(x2, c2))
              a2[d2] = x2, a2[n2] = c2, d2 = n2;
            else
              break a;
          }
      }
      return b2;
    }
    function g2(a2, b2) {
      var c2 = a2.sortIndex - b2.sortIndex;
      return 0 !== c2 ? c2 : a2.id - b2.id;
    }
    if ("object" === typeof performance && "function" === typeof performance.now) {
      var l2 = performance;
      exports.unstable_now = function() {
        return l2.now();
      };
    } else {
      var p2 = Date, q2 = p2.now();
      exports.unstable_now = function() {
        return p2.now() - q2;
      };
    }
    var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
    "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function G2(a2) {
      for (var b2 = h2(t2); null !== b2; ) {
        if (null === b2.callback)
          k2(t2);
        else if (b2.startTime <= a2)
          k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
        else
          break;
        b2 = h2(t2);
      }
    }
    function H2(a2) {
      B2 = false;
      G2(a2);
      if (!A2)
        if (null !== h2(r2))
          A2 = true, I2(J2);
        else {
          var b2 = h2(t2);
          null !== b2 && K2(H2, b2.startTime - a2);
        }
    }
    function J2(a2, b2) {
      A2 = false;
      B2 && (B2 = false, E2(L2), L2 = -1);
      z2 = true;
      var c2 = y2;
      try {
        G2(b2);
        for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a2 && !M2()); ) {
          var d2 = v2.callback;
          if ("function" === typeof d2) {
            v2.callback = null;
            y2 = v2.priorityLevel;
            var e2 = d2(v2.expirationTime <= b2);
            b2 = exports.unstable_now();
            "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
            G2(b2);
          } else
            k2(r2);
          v2 = h2(r2);
        }
        if (null !== v2)
          var w2 = true;
        else {
          var m2 = h2(t2);
          null !== m2 && K2(H2, m2.startTime - b2);
          w2 = false;
        }
        return w2;
      } finally {
        v2 = null, y2 = c2, z2 = false;
      }
    }
    var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
    function M2() {
      return exports.unstable_now() - Q2 < P2 ? false : true;
    }
    function R2() {
      if (null !== O2) {
        var a2 = exports.unstable_now();
        Q2 = a2;
        var b2 = true;
        try {
          b2 = O2(true, a2);
        } finally {
          b2 ? S2() : (N2 = false, O2 = null);
        }
      } else
        N2 = false;
    }
    var S2;
    if ("function" === typeof F2)
      S2 = function() {
        F2(R2);
      };
    else if ("undefined" !== typeof MessageChannel) {
      var T2 = new MessageChannel(), U2 = T2.port2;
      T2.port1.onmessage = R2;
      S2 = function() {
        U2.postMessage(null);
      };
    } else
      S2 = function() {
        D2(R2, 0);
      };
    function I2(a2) {
      O2 = a2;
      N2 || (N2 = true, S2());
    }
    function K2(a2, b2) {
      L2 = D2(function() {
        a2(exports.unstable_now());
      }, b2);
    }
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(a2) {
      a2.callback = null;
    };
    exports.unstable_continueExecution = function() {
      A2 || z2 || (A2 = true, I2(J2));
    };
    exports.unstable_forceFrameRate = function(a2) {
      0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
      return y2;
    };
    exports.unstable_getFirstCallbackNode = function() {
      return h2(r2);
    };
    exports.unstable_next = function(a2) {
      switch (y2) {
        case 1:
        case 2:
        case 3:
          var b2 = 3;
          break;
        default:
          b2 = y2;
      }
      var c2 = y2;
      y2 = b2;
      try {
        return a2();
      } finally {
        y2 = c2;
      }
    };
    exports.unstable_pauseExecution = function() {
    };
    exports.unstable_requestPaint = function() {
    };
    exports.unstable_runWithPriority = function(a2, b2) {
      switch (a2) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a2 = 3;
      }
      var c2 = y2;
      y2 = a2;
      try {
        return b2();
      } finally {
        y2 = c2;
      }
    };
    exports.unstable_scheduleCallback = function(a2, b2, c2) {
      var d2 = exports.unstable_now();
      "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
      switch (a2) {
        case 1:
          var e2 = -1;
          break;
        case 2:
          e2 = 250;
          break;
        case 5:
          e2 = 1073741823;
          break;
        case 4:
          e2 = 1e4;
          break;
        default:
          e2 = 5e3;
      }
      e2 = c2 + e2;
      a2 = { id: u2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e2, sortIndex: -1 };
      c2 > d2 ? (a2.sortIndex = c2, f2(t2, a2), null === h2(r2) && a2 === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a2.sortIndex = e2, f2(r2, a2), A2 || z2 || (A2 = true, I2(J2)));
      return a2;
    };
    exports.unstable_shouldYield = M2;
    exports.unstable_wrapCallback = function(a2) {
      var b2 = y2;
      return function() {
        var c2 = y2;
        y2 = b2;
        try {
          return a2.apply(this, arguments);
        } finally {
          y2 = c2;
        }
      };
    };
  })(scheduler_production_min);
  (function(module) {
    {
      module.exports = scheduler_production_min;
    }
  })(scheduler);
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var aa = reactExports, ca = schedulerExports;
  function p$5(a2) {
    for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
      b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
    return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var da = /* @__PURE__ */ new Set(), ea = {};
  function fa(a2, b2) {
    ha(a2, b2);
    ha(a2 + "Capture", b2);
  }
  function ha(a2, b2) {
    ea[a2] = b2;
    for (a2 = 0; a2 < b2.length; a2++)
      da.add(b2[a2]);
  }
  var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
  function oa(a2) {
    if (ja.call(ma, a2))
      return true;
    if (ja.call(la, a2))
      return false;
    if (ka.test(a2))
      return ma[a2] = true;
    la[a2] = true;
    return false;
  }
  function pa(a2, b2, c2, d2) {
    if (null !== c2 && 0 === c2.type)
      return false;
    switch (typeof b2) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        if (d2)
          return false;
        if (null !== c2)
          return !c2.acceptsBooleans;
        a2 = a2.toLowerCase().slice(0, 5);
        return "data-" !== a2 && "aria-" !== a2;
      default:
        return false;
    }
  }
  function qa(a2, b2, c2, d2) {
    if (null === b2 || "undefined" === typeof b2 || pa(a2, b2, c2, d2))
      return true;
    if (d2)
      return false;
    if (null !== c2)
      switch (c2.type) {
        case 3:
          return !b2;
        case 4:
          return false === b2;
        case 5:
          return isNaN(b2);
        case 6:
          return isNaN(b2) || 1 > b2;
      }
    return false;
  }
  function v$5(a2, b2, c2, d2, e2, f2, g2) {
    this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
    this.attributeName = d2;
    this.attributeNamespace = e2;
    this.mustUseProperty = c2;
    this.propertyName = a2;
    this.type = b2;
    this.sanitizeURL = f2;
    this.removeEmptyString = g2;
  }
  var z$4 = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
    z$4[a2] = new v$5(a2, 0, false, a2, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
    var b2 = a2[0];
    z$4[b2] = new v$5(b2, 1, false, a2[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
    z$4[a2] = new v$5(a2, 2, false, a2.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
    z$4[a2] = new v$5(a2, 2, false, a2, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
    z$4[a2] = new v$5(a2, 3, false, a2.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(a2) {
    z$4[a2] = new v$5(a2, 3, true, a2, null, false, false);
  });
  ["capture", "download"].forEach(function(a2) {
    z$4[a2] = new v$5(a2, 4, false, a2, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(a2) {
    z$4[a2] = new v$5(a2, 6, false, a2, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(a2) {
    z$4[a2] = new v$5(a2, 5, false, a2.toLowerCase(), null, false, false);
  });
  var ra = /[\-:]([a-z])/g;
  function sa(a2) {
    return a2[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
    var b2 = a2.replace(
      ra,
      sa
    );
    z$4[b2] = new v$5(b2, 1, false, a2, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
    var b2 = a2.replace(ra, sa);
    z$4[b2] = new v$5(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
    var b2 = a2.replace(ra, sa);
    z$4[b2] = new v$5(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(a2) {
    z$4[a2] = new v$5(a2, 1, false, a2.toLowerCase(), null, false, false);
  });
  z$4.xlinkHref = new v$5("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(a2) {
    z$4[a2] = new v$5(a2, 1, false, a2.toLowerCase(), null, true, true);
  });
  function ta(a2, b2, c2, d2) {
    var e2 = z$4.hasOwnProperty(b2) ? z$4[b2] : null;
    if (null !== e2 ? 0 !== e2.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1])
      qa(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? oa(b2) && (null === c2 ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a2[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a2.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a2.setAttributeNS(d2, b2, c2) : a2.setAttribute(b2, c2)));
  }
  var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
  var Ia = Symbol.for("react.offscreen");
  var Ja = Symbol.iterator;
  function Ka(a2) {
    if (null === a2 || "object" !== typeof a2)
      return null;
    a2 = Ja && a2[Ja] || a2["@@iterator"];
    return "function" === typeof a2 ? a2 : null;
  }
  var A$3 = Object.assign, La;
  function Ma(a2) {
    if (void 0 === La)
      try {
        throw Error();
      } catch (c2) {
        var b2 = c2.stack.trim().match(/\n( *(at )?)/);
        La = b2 && b2[1] || "";
      }
    return "\n" + La + a2;
  }
  var Na = false;
  function Oa(a2, b2) {
    if (!a2 || Na)
      return "";
    Na = true;
    var c2 = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (b2)
        if (b2 = function() {
          throw Error();
        }, Object.defineProperty(b2.prototype, "props", { set: function() {
          throw Error();
        } }), "object" === typeof Reflect && Reflect.construct) {
          try {
            Reflect.construct(b2, []);
          } catch (l2) {
            var d2 = l2;
          }
          Reflect.construct(a2, [], b2);
        } else {
          try {
            b2.call();
          } catch (l2) {
            d2 = l2;
          }
          a2.call(b2.prototype);
        }
      else {
        try {
          throw Error();
        } catch (l2) {
          d2 = l2;
        }
        a2();
      }
    } catch (l2) {
      if (l2 && d2 && "string" === typeof l2.stack) {
        for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; )
          h2--;
        for (; 1 <= g2 && 0 <= h2; g2--, h2--)
          if (e2[g2] !== f2[h2]) {
            if (1 !== g2 || 1 !== h2) {
              do
                if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
                  var k2 = "\n" + e2[g2].replace(" at new ", " at ");
                  a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
                  return k2;
                }
              while (1 <= g2 && 0 <= h2);
            }
            break;
          }
      }
    } finally {
      Na = false, Error.prepareStackTrace = c2;
    }
    return (a2 = a2 ? a2.displayName || a2.name : "") ? Ma(a2) : "";
  }
  function Pa(a2) {
    switch (a2.tag) {
      case 5:
        return Ma(a2.type);
      case 16:
        return Ma("Lazy");
      case 13:
        return Ma("Suspense");
      case 19:
        return Ma("SuspenseList");
      case 0:
      case 2:
      case 15:
        return a2 = Oa(a2.type, false), a2;
      case 11:
        return a2 = Oa(a2.type.render, false), a2;
      case 1:
        return a2 = Oa(a2.type, true), a2;
      default:
        return "";
    }
  }
  function Qa(a2) {
    if (null == a2)
      return null;
    if ("function" === typeof a2)
      return a2.displayName || a2.name || null;
    if ("string" === typeof a2)
      return a2;
    switch (a2) {
      case ya:
        return "Fragment";
      case wa:
        return "Portal";
      case Aa:
        return "Profiler";
      case za:
        return "StrictMode";
      case Ea:
        return "Suspense";
      case Fa:
        return "SuspenseList";
    }
    if ("object" === typeof a2)
      switch (a2.$$typeof) {
        case Ca:
          return (a2.displayName || "Context") + ".Consumer";
        case Ba:
          return (a2._context.displayName || "Context") + ".Provider";
        case Da:
          var b2 = a2.render;
          a2 = a2.displayName;
          a2 || (a2 = b2.displayName || b2.name || "", a2 = "" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
          return a2;
        case Ga:
          return b2 = a2.displayName || null, null !== b2 ? b2 : Qa(a2.type) || "Memo";
        case Ha:
          b2 = a2._payload;
          a2 = a2._init;
          try {
            return Qa(a2(b2));
          } catch (c2) {
          }
      }
    return null;
  }
  function Ra(a2) {
    var b2 = a2.type;
    switch (a2.tag) {
      case 24:
        return "Cache";
      case 9:
        return (b2.displayName || "Context") + ".Consumer";
      case 10:
        return (b2._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return a2 = b2.render, a2 = a2.displayName || a2.name || "", b2.displayName || ("" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return b2;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Qa(b2);
      case 8:
        return b2 === za ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if ("function" === typeof b2)
          return b2.displayName || b2.name || null;
        if ("string" === typeof b2)
          return b2;
    }
    return null;
  }
  function Sa(a2) {
    switch (typeof a2) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return a2;
      case "object":
        return a2;
      default:
        return "";
    }
  }
  function Ta(a2) {
    var b2 = a2.type;
    return (a2 = a2.nodeName) && "input" === a2.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
  }
  function Ua(a2) {
    var b2 = Ta(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d2 = "" + a2[b2];
    if (!a2.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
      var e2 = c2.get, f2 = c2.set;
      Object.defineProperty(a2, b2, { configurable: true, get: function() {
        return e2.call(this);
      }, set: function(a3) {
        d2 = "" + a3;
        f2.call(this, a3);
      } });
      Object.defineProperty(a2, b2, { enumerable: c2.enumerable });
      return { getValue: function() {
        return d2;
      }, setValue: function(a3) {
        d2 = "" + a3;
      }, stopTracking: function() {
        a2._valueTracker = null;
        delete a2[b2];
      } };
    }
  }
  function Va(a2) {
    a2._valueTracker || (a2._valueTracker = Ua(a2));
  }
  function Wa(a2) {
    if (!a2)
      return false;
    var b2 = a2._valueTracker;
    if (!b2)
      return true;
    var c2 = b2.getValue();
    var d2 = "";
    a2 && (d2 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
    a2 = d2;
    return a2 !== c2 ? (b2.setValue(a2), true) : false;
  }
  function Xa(a2) {
    a2 = a2 || ("undefined" !== typeof document ? document : void 0);
    if ("undefined" === typeof a2)
      return null;
    try {
      return a2.activeElement || a2.body;
    } catch (b2) {
      return a2.body;
    }
  }
  function Ya(a2, b2) {
    var c2 = b2.checked;
    return A$3({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a2._wrapperState.initialChecked });
  }
  function Za(a2, b2) {
    var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
    c2 = Sa(null != b2.value ? b2.value : c2);
    a2._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
  }
  function ab(a2, b2) {
    b2 = b2.checked;
    null != b2 && ta(a2, "checked", b2, false);
  }
  function bb(a2, b2) {
    ab(a2, b2);
    var c2 = Sa(b2.value), d2 = b2.type;
    if (null != c2)
      if ("number" === d2) {
        if (0 === c2 && "" === a2.value || a2.value != c2)
          a2.value = "" + c2;
      } else
        a2.value !== "" + c2 && (a2.value = "" + c2);
    else if ("submit" === d2 || "reset" === d2) {
      a2.removeAttribute("value");
      return;
    }
    b2.hasOwnProperty("value") ? cb(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a2, b2.type, Sa(b2.defaultValue));
    null == b2.checked && null != b2.defaultChecked && (a2.defaultChecked = !!b2.defaultChecked);
  }
  function db(a2, b2, c2) {
    if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
      var d2 = b2.type;
      if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value))
        return;
      b2 = "" + a2._wrapperState.initialValue;
      c2 || b2 === a2.value || (a2.value = b2);
      a2.defaultValue = b2;
    }
    c2 = a2.name;
    "" !== c2 && (a2.name = "");
    a2.defaultChecked = !!a2._wrapperState.initialChecked;
    "" !== c2 && (a2.name = c2);
  }
  function cb(a2, b2, c2) {
    if ("number" !== b2 || Xa(a2.ownerDocument) !== a2)
      null == c2 ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
  }
  var eb = Array.isArray;
  function fb(a2, b2, c2, d2) {
    a2 = a2.options;
    if (b2) {
      b2 = {};
      for (var e2 = 0; e2 < c2.length; e2++)
        b2["$" + c2[e2]] = true;
      for (c2 = 0; c2 < a2.length; c2++)
        e2 = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e2 && (a2[c2].selected = e2), e2 && d2 && (a2[c2].defaultSelected = true);
    } else {
      c2 = "" + Sa(c2);
      b2 = null;
      for (e2 = 0; e2 < a2.length; e2++) {
        if (a2[e2].value === c2) {
          a2[e2].selected = true;
          d2 && (a2[e2].defaultSelected = true);
          return;
        }
        null !== b2 || a2[e2].disabled || (b2 = a2[e2]);
      }
      null !== b2 && (b2.selected = true);
    }
  }
  function gb(a2, b2) {
    if (null != b2.dangerouslySetInnerHTML)
      throw Error(p$5(91));
    return A$3({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
  }
  function hb(a2, b2) {
    var c2 = b2.value;
    if (null == c2) {
      c2 = b2.children;
      b2 = b2.defaultValue;
      if (null != c2) {
        if (null != b2)
          throw Error(p$5(92));
        if (eb(c2)) {
          if (1 < c2.length)
            throw Error(p$5(93));
          c2 = c2[0];
        }
        b2 = c2;
      }
      null == b2 && (b2 = "");
      c2 = b2;
    }
    a2._wrapperState = { initialValue: Sa(c2) };
  }
  function ib(a2, b2) {
    var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
    null != c2 && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), null == b2.defaultValue && a2.defaultValue !== c2 && (a2.defaultValue = c2));
    null != d2 && (a2.defaultValue = "" + d2);
  }
  function jb(a2) {
    var b2 = a2.textContent;
    b2 === a2._wrapperState.initialValue && "" !== b2 && null !== b2 && (a2.value = b2);
  }
  function kb(a2) {
    switch (a2) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lb(a2, b2) {
    return null == a2 || "http://www.w3.org/1999/xhtml" === a2 ? kb(b2) : "http://www.w3.org/2000/svg" === a2 && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a2;
  }
  var mb, nb = function(a2) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
      MSApp.execUnsafeLocalFunction(function() {
        return a2(b2, c2, d2, e2);
      });
    } : a2;
  }(function(a2, b2) {
    if ("http://www.w3.org/2000/svg" !== a2.namespaceURI || "innerHTML" in a2)
      a2.innerHTML = b2;
    else {
      mb = mb || document.createElement("div");
      mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
      for (b2 = mb.firstChild; a2.firstChild; )
        a2.removeChild(a2.firstChild);
      for (; b2.firstChild; )
        a2.appendChild(b2.firstChild);
    }
  });
  function ob(a2, b2) {
    if (b2) {
      var c2 = a2.firstChild;
      if (c2 && c2 === a2.lastChild && 3 === c2.nodeType) {
        c2.nodeValue = b2;
        return;
      }
    }
    a2.textContent = b2;
  }
  var pb = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, qb = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pb).forEach(function(a2) {
    qb.forEach(function(b2) {
      b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
      pb[b2] = pb[a2];
    });
  });
  function rb(a2, b2, c2) {
    return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a2) && pb[a2] ? ("" + b2).trim() : b2 + "px";
  }
  function sb(a2, b2) {
    a2 = a2.style;
    for (var c2 in b2)
      if (b2.hasOwnProperty(c2)) {
        var d2 = 0 === c2.indexOf("--"), e2 = rb(c2, b2[c2], d2);
        "float" === c2 && (c2 = "cssFloat");
        d2 ? a2.setProperty(c2, e2) : a2[c2] = e2;
      }
  }
  var tb = A$3({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function ub(a2, b2) {
    if (b2) {
      if (tb[a2] && (null != b2.children || null != b2.dangerouslySetInnerHTML))
        throw Error(p$5(137, a2));
      if (null != b2.dangerouslySetInnerHTML) {
        if (null != b2.children)
          throw Error(p$5(60));
        if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML))
          throw Error(p$5(61));
      }
      if (null != b2.style && "object" !== typeof b2.style)
        throw Error(p$5(62));
    }
  }
  function vb(a2, b2) {
    if (-1 === a2.indexOf("-"))
      return "string" === typeof b2.is;
    switch (a2) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var wb = null;
  function xb(a2) {
    a2 = a2.target || a2.srcElement || window;
    a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
    return 3 === a2.nodeType ? a2.parentNode : a2;
  }
  var yb = null, zb = null, Ab = null;
  function Bb(a2) {
    if (a2 = Cb(a2)) {
      if ("function" !== typeof yb)
        throw Error(p$5(280));
      var b2 = a2.stateNode;
      b2 && (b2 = Db(b2), yb(a2.stateNode, a2.type, b2));
    }
  }
  function Eb(a2) {
    zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
  }
  function Fb() {
    if (zb) {
      var a2 = zb, b2 = Ab;
      Ab = zb = null;
      Bb(a2);
      if (b2)
        for (a2 = 0; a2 < b2.length; a2++)
          Bb(b2[a2]);
    }
  }
  function Gb(a2, b2) {
    return a2(b2);
  }
  function Hb() {
  }
  var Ib = false;
  function Jb(a2, b2, c2) {
    if (Ib)
      return a2(b2, c2);
    Ib = true;
    try {
      return Gb(a2, b2, c2);
    } finally {
      if (Ib = false, null !== zb || null !== Ab)
        Hb(), Fb();
    }
  }
  function Kb(a2, b2) {
    var c2 = a2.stateNode;
    if (null === c2)
      return null;
    var d2 = Db(c2);
    if (null === d2)
      return null;
    c2 = d2[b2];
    a:
      switch (b2) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (d2 = !d2.disabled) || (a2 = a2.type, d2 = !("button" === a2 || "input" === a2 || "select" === a2 || "textarea" === a2));
          a2 = !d2;
          break a;
        default:
          a2 = false;
      }
    if (a2)
      return null;
    if (c2 && "function" !== typeof c2)
      throw Error(p$5(231, b2, typeof c2));
    return c2;
  }
  var Lb = false;
  if (ia)
    try {
      var Mb = {};
      Object.defineProperty(Mb, "passive", { get: function() {
        Lb = true;
      } });
      window.addEventListener("test", Mb, Mb);
      window.removeEventListener("test", Mb, Mb);
    } catch (a2) {
      Lb = false;
    }
  function Nb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
    var l2 = Array.prototype.slice.call(arguments, 3);
    try {
      b2.apply(c2, l2);
    } catch (m2) {
      this.onError(m2);
    }
  }
  var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a2) {
    Ob = true;
    Pb = a2;
  } };
  function Tb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
    Ob = false;
    Pb = null;
    Nb.apply(Sb, arguments);
  }
  function Ub(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
    Tb.apply(this, arguments);
    if (Ob) {
      if (Ob) {
        var l2 = Pb;
        Ob = false;
        Pb = null;
      } else
        throw Error(p$5(198));
      Qb || (Qb = true, Rb = l2);
    }
  }
  function Vb(a2) {
    var b2 = a2, c2 = a2;
    if (a2.alternate)
      for (; b2.return; )
        b2 = b2.return;
    else {
      a2 = b2;
      do
        b2 = a2, 0 !== (b2.flags & 4098) && (c2 = b2.return), a2 = b2.return;
      while (a2);
    }
    return 3 === b2.tag ? c2 : null;
  }
  function Wb(a2) {
    if (13 === a2.tag) {
      var b2 = a2.memoizedState;
      null === b2 && (a2 = a2.alternate, null !== a2 && (b2 = a2.memoizedState));
      if (null !== b2)
        return b2.dehydrated;
    }
    return null;
  }
  function Xb(a2) {
    if (Vb(a2) !== a2)
      throw Error(p$5(188));
  }
  function Yb(a2) {
    var b2 = a2.alternate;
    if (!b2) {
      b2 = Vb(a2);
      if (null === b2)
        throw Error(p$5(188));
      return b2 !== a2 ? null : a2;
    }
    for (var c2 = a2, d2 = b2; ; ) {
      var e2 = c2.return;
      if (null === e2)
        break;
      var f2 = e2.alternate;
      if (null === f2) {
        d2 = e2.return;
        if (null !== d2) {
          c2 = d2;
          continue;
        }
        break;
      }
      if (e2.child === f2.child) {
        for (f2 = e2.child; f2; ) {
          if (f2 === c2)
            return Xb(e2), a2;
          if (f2 === d2)
            return Xb(e2), b2;
          f2 = f2.sibling;
        }
        throw Error(p$5(188));
      }
      if (c2.return !== d2.return)
        c2 = e2, d2 = f2;
      else {
        for (var g2 = false, h2 = e2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = e2;
            d2 = f2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = e2;
            c2 = f2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2) {
          for (h2 = f2.child; h2; ) {
            if (h2 === c2) {
              g2 = true;
              c2 = f2;
              d2 = e2;
              break;
            }
            if (h2 === d2) {
              g2 = true;
              d2 = f2;
              c2 = e2;
              break;
            }
            h2 = h2.sibling;
          }
          if (!g2)
            throw Error(p$5(189));
        }
      }
      if (c2.alternate !== d2)
        throw Error(p$5(190));
    }
    if (3 !== c2.tag)
      throw Error(p$5(188));
    return c2.stateNode.current === c2 ? a2 : b2;
  }
  function Zb(a2) {
    a2 = Yb(a2);
    return null !== a2 ? $b(a2) : null;
  }
  function $b(a2) {
    if (5 === a2.tag || 6 === a2.tag)
      return a2;
    for (a2 = a2.child; null !== a2; ) {
      var b2 = $b(a2);
      if (null !== b2)
        return b2;
      a2 = a2.sibling;
    }
    return null;
  }
  var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B$1 = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
  function mc(a2) {
    if (lc && "function" === typeof lc.onCommitFiberRoot)
      try {
        lc.onCommitFiberRoot(kc, a2, void 0, 128 === (a2.current.flags & 128));
      } catch (b2) {
      }
  }
  var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
  function nc(a2) {
    a2 >>>= 0;
    return 0 === a2 ? 32 : 31 - (pc(a2) / qc | 0) | 0;
  }
  var rc = 64, sc = 4194304;
  function tc(a2) {
    switch (a2 & -a2) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a2 & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return a2 & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return a2;
    }
  }
  function uc(a2, b2) {
    var c2 = a2.pendingLanes;
    if (0 === c2)
      return 0;
    var d2 = 0, e2 = a2.suspendedLanes, f2 = a2.pingedLanes, g2 = c2 & 268435455;
    if (0 !== g2) {
      var h2 = g2 & ~e2;
      0 !== h2 ? d2 = tc(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
    } else
      g2 = c2 & ~e2, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
    if (0 === d2)
      return 0;
    if (0 !== b2 && b2 !== d2 && 0 === (b2 & e2) && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240)))
      return b2;
    0 !== (d2 & 4) && (d2 |= c2 & 16);
    b2 = a2.entangledLanes;
    if (0 !== b2)
      for (a2 = a2.entanglements, b2 &= d2; 0 < b2; )
        c2 = 31 - oc(b2), e2 = 1 << c2, d2 |= a2[c2], b2 &= ~e2;
    return d2;
  }
  function vc(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 4:
        return b2 + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return b2 + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function wc(a2, b2) {
    for (var c2 = a2.suspendedLanes, d2 = a2.pingedLanes, e2 = a2.expirationTimes, f2 = a2.pendingLanes; 0 < f2; ) {
      var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e2[g2];
      if (-1 === k2) {
        if (0 === (h2 & c2) || 0 !== (h2 & d2))
          e2[g2] = vc(h2, b2);
      } else
        k2 <= b2 && (a2.expiredLanes |= h2);
      f2 &= ~h2;
    }
  }
  function xc(a2) {
    a2 = a2.pendingLanes & -1073741825;
    return 0 !== a2 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
  }
  function yc() {
    var a2 = rc;
    rc <<= 1;
    0 === (rc & 4194240) && (rc = 64);
    return a2;
  }
  function zc(a2) {
    for (var b2 = [], c2 = 0; 31 > c2; c2++)
      b2.push(a2);
    return b2;
  }
  function Ac(a2, b2, c2) {
    a2.pendingLanes |= b2;
    536870912 !== b2 && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
    a2 = a2.eventTimes;
    b2 = 31 - oc(b2);
    a2[b2] = c2;
  }
  function Bc(a2, b2) {
    var c2 = a2.pendingLanes & ~b2;
    a2.pendingLanes = b2;
    a2.suspendedLanes = 0;
    a2.pingedLanes = 0;
    a2.expiredLanes &= b2;
    a2.mutableReadLanes &= b2;
    a2.entangledLanes &= b2;
    b2 = a2.entanglements;
    var d2 = a2.eventTimes;
    for (a2 = a2.expirationTimes; 0 < c2; ) {
      var e2 = 31 - oc(c2), f2 = 1 << e2;
      b2[e2] = 0;
      d2[e2] = -1;
      a2[e2] = -1;
      c2 &= ~f2;
    }
  }
  function Cc(a2, b2) {
    var c2 = a2.entangledLanes |= b2;
    for (a2 = a2.entanglements; c2; ) {
      var d2 = 31 - oc(c2), e2 = 1 << d2;
      e2 & b2 | a2[d2] & b2 && (a2[d2] |= b2);
      c2 &= ~e2;
    }
  }
  var C$3 = 0;
  function Dc(a2) {
    a2 &= -a2;
    return 1 < a2 ? 4 < a2 ? 0 !== (a2 & 268435455) ? 16 : 536870912 : 4 : 1;
  }
  var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Sc(a2, b2) {
    switch (a2) {
      case "focusin":
      case "focusout":
        Lc = null;
        break;
      case "dragenter":
      case "dragleave":
        Mc = null;
        break;
      case "mouseover":
      case "mouseout":
        Nc = null;
        break;
      case "pointerover":
      case "pointerout":
        Oc.delete(b2.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pc.delete(b2.pointerId);
    }
  }
  function Tc(a2, b2, c2, d2, e2, f2) {
    if (null === a2 || a2.nativeEvent !== f2)
      return a2 = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a2;
    a2.eventSystemFlags |= d2;
    b2 = a2.targetContainers;
    null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
    return a2;
  }
  function Uc(a2, b2, c2, d2, e2) {
    switch (b2) {
      case "focusin":
        return Lc = Tc(Lc, a2, b2, c2, d2, e2), true;
      case "dragenter":
        return Mc = Tc(Mc, a2, b2, c2, d2, e2), true;
      case "mouseover":
        return Nc = Tc(Nc, a2, b2, c2, d2, e2), true;
      case "pointerover":
        var f2 = e2.pointerId;
        Oc.set(f2, Tc(Oc.get(f2) || null, a2, b2, c2, d2, e2));
        return true;
      case "gotpointercapture":
        return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a2, b2, c2, d2, e2)), true;
    }
    return false;
  }
  function Vc(a2) {
    var b2 = Wc(a2.target);
    if (null !== b2) {
      var c2 = Vb(b2);
      if (null !== c2) {
        if (b2 = c2.tag, 13 === b2) {
          if (b2 = Wb(c2), null !== b2) {
            a2.blockedOn = b2;
            Ic(a2.priority, function() {
              Gc(c2);
            });
            return;
          }
        } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
          a2.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
          return;
        }
      }
    }
    a2.blockedOn = null;
  }
  function Xc(a2) {
    if (null !== a2.blockedOn)
      return false;
    for (var b2 = a2.targetContainers; 0 < b2.length; ) {
      var c2 = Yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
      if (null === c2) {
        c2 = a2.nativeEvent;
        var d2 = new c2.constructor(c2.type, c2);
        wb = d2;
        c2.target.dispatchEvent(d2);
        wb = null;
      } else
        return b2 = Cb(c2), null !== b2 && Fc(b2), a2.blockedOn = c2, false;
      b2.shift();
    }
    return true;
  }
  function Zc(a2, b2, c2) {
    Xc(a2) && c2.delete(b2);
  }
  function $c() {
    Jc = false;
    null !== Lc && Xc(Lc) && (Lc = null);
    null !== Mc && Xc(Mc) && (Mc = null);
    null !== Nc && Xc(Nc) && (Nc = null);
    Oc.forEach(Zc);
    Pc.forEach(Zc);
  }
  function ad(a2, b2) {
    a2.blockedOn === b2 && (a2.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
  }
  function bd(a2) {
    function b2(b3) {
      return ad(b3, a2);
    }
    if (0 < Kc.length) {
      ad(Kc[0], a2);
      for (var c2 = 1; c2 < Kc.length; c2++) {
        var d2 = Kc[c2];
        d2.blockedOn === a2 && (d2.blockedOn = null);
      }
    }
    null !== Lc && ad(Lc, a2);
    null !== Mc && ad(Mc, a2);
    null !== Nc && ad(Nc, a2);
    Oc.forEach(b2);
    Pc.forEach(b2);
    for (c2 = 0; c2 < Qc.length; c2++)
      d2 = Qc[c2], d2.blockedOn === a2 && (d2.blockedOn = null);
    for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); )
      Vc(c2), null === c2.blockedOn && Qc.shift();
  }
  var cd = ua.ReactCurrentBatchConfig, dd = true;
  function ed(a2, b2, c2, d2) {
    var e2 = C$3, f2 = cd.transition;
    cd.transition = null;
    try {
      C$3 = 1, fd(a2, b2, c2, d2);
    } finally {
      C$3 = e2, cd.transition = f2;
    }
  }
  function gd(a2, b2, c2, d2) {
    var e2 = C$3, f2 = cd.transition;
    cd.transition = null;
    try {
      C$3 = 4, fd(a2, b2, c2, d2);
    } finally {
      C$3 = e2, cd.transition = f2;
    }
  }
  function fd(a2, b2, c2, d2) {
    if (dd) {
      var e2 = Yc(a2, b2, c2, d2);
      if (null === e2)
        hd(a2, b2, d2, id, c2), Sc(a2, d2);
      else if (Uc(e2, a2, b2, c2, d2))
        d2.stopPropagation();
      else if (Sc(a2, d2), b2 & 4 && -1 < Rc.indexOf(a2)) {
        for (; null !== e2; ) {
          var f2 = Cb(e2);
          null !== f2 && Ec(f2);
          f2 = Yc(a2, b2, c2, d2);
          null === f2 && hd(a2, b2, d2, id, c2);
          if (f2 === e2)
            break;
          e2 = f2;
        }
        null !== e2 && d2.stopPropagation();
      } else
        hd(a2, b2, d2, null, c2);
    }
  }
  var id = null;
  function Yc(a2, b2, c2, d2) {
    id = null;
    a2 = xb(d2);
    a2 = Wc(a2);
    if (null !== a2)
      if (b2 = Vb(a2), null === b2)
        a2 = null;
      else if (c2 = b2.tag, 13 === c2) {
        a2 = Wb(b2);
        if (null !== a2)
          return a2;
        a2 = null;
      } else if (3 === c2) {
        if (b2.stateNode.current.memoizedState.isDehydrated)
          return 3 === b2.tag ? b2.stateNode.containerInfo : null;
        a2 = null;
      } else
        b2 !== a2 && (a2 = null);
    id = a2;
    return null;
  }
  function jd(a2) {
    switch (a2) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ec()) {
          case fc:
            return 1;
          case gc:
            return 4;
          case hc:
          case ic:
            return 16;
          case jc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var kd = null, ld = null, md = null;
  function nd() {
    if (md)
      return md;
    var a2, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
    for (a2 = 0; a2 < c2 && b2[a2] === e2[a2]; a2++)
      ;
    var g2 = c2 - a2;
    for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++)
      ;
    return md = e2.slice(a2, 1 < d2 ? 1 - d2 : void 0);
  }
  function od(a2) {
    var b2 = a2.keyCode;
    "charCode" in a2 ? (a2 = a2.charCode, 0 === a2 && 13 === b2 && (a2 = 13)) : a2 = b2;
    10 === a2 && (a2 = 13);
    return 32 <= a2 || 13 === a2 ? a2 : 0;
  }
  function pd() {
    return true;
  }
  function qd() {
    return false;
  }
  function rd(a2) {
    function b2(b3, d2, e2, f2, g2) {
      this._reactName = b3;
      this._targetInst = e2;
      this.type = d2;
      this.nativeEvent = f2;
      this.target = g2;
      this.currentTarget = null;
      for (var c2 in a2)
        a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
      this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
      this.isPropagationStopped = qd;
      return this;
    }
    A$3(b2.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var a3 = this.nativeEvent;
      a3 && (a3.preventDefault ? a3.preventDefault() : "unknown" !== typeof a3.returnValue && (a3.returnValue = false), this.isDefaultPrevented = pd);
    }, stopPropagation: function() {
      var a3 = this.nativeEvent;
      a3 && (a3.stopPropagation ? a3.stopPropagation() : "unknown" !== typeof a3.cancelBubble && (a3.cancelBubble = true), this.isPropagationStopped = pd);
    }, persist: function() {
    }, isPersistent: pd });
    return b2;
  }
  var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
    return a2.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A$3({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A$3({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
    return void 0 === a2.relatedTarget ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
  }, movementX: function(a2) {
    if ("movementX" in a2)
      return a2.movementX;
    a2 !== yd && (yd && "mousemove" === a2.type ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
    return wd;
  }, movementY: function(a2) {
    return "movementY" in a2 ? a2.movementY : xd;
  } }), Bd = rd(Ad), Cd = A$3({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A$3({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A$3({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A$3({}, sd, { clipboardData: function(a2) {
    return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
  } }), Jd = rd(Id), Kd = A$3({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Pd(a2) {
    var b2 = this.nativeEvent;
    return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Od[a2]) ? !!b2[a2] : false;
  }
  function zd() {
    return Pd;
  }
  var Qd = A$3({}, ud, { key: function(a2) {
    if (a2.key) {
      var b2 = Md[a2.key] || a2.key;
      if ("Unidentified" !== b2)
        return b2;
    }
    return "keypress" === a2.type ? (a2 = od(a2), 13 === a2 ? "Enter" : String.fromCharCode(a2)) : "keydown" === a2.type || "keyup" === a2.type ? Nd[a2.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
    return "keypress" === a2.type ? od(a2) : 0;
  }, keyCode: function(a2) {
    return "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
  }, which: function(a2) {
    return "keypress" === a2.type ? od(a2) : "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
  } }), Rd = rd(Qd), Sd = A$3({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A$3({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A$3({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A$3({}, Ad, {
    deltaX: function(a2) {
      return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
    },
    deltaY: function(a2) {
      return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae$2 = ia && "CompositionEvent" in window, be$2 = null;
  ia && "documentMode" in document && (be$2 = document.documentMode);
  var ce$1 = ia && "TextEvent" in window && !be$2, de$2 = ia && (!ae$2 || be$2 && 8 < be$2 && 11 >= be$2), ee$1 = String.fromCharCode(32), fe$2 = false;
  function ge$1(a2, b2) {
    switch (a2) {
      case "keyup":
        return -1 !== $d.indexOf(b2.keyCode);
      case "keydown":
        return 229 !== b2.keyCode;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function he$2(a2) {
    a2 = a2.detail;
    return "object" === typeof a2 && "data" in a2 ? a2.data : null;
  }
  var ie$1 = false;
  function je$1(a2, b2) {
    switch (a2) {
      case "compositionend":
        return he$2(b2);
      case "keypress":
        if (32 !== b2.which)
          return null;
        fe$2 = true;
        return ee$1;
      case "textInput":
        return a2 = b2.data, a2 === ee$1 && fe$2 ? null : a2;
      default:
        return null;
    }
  }
  function ke$1(a2, b2) {
    if (ie$1)
      return "compositionend" === a2 || !ae$2 && ge$1(a2, b2) ? (a2 = nd(), md = ld = kd = null, ie$1 = false, a2) : null;
    switch (a2) {
      case "paste":
        return null;
      case "keypress":
        if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
          if (b2.char && 1 < b2.char.length)
            return b2.char;
          if (b2.which)
            return String.fromCharCode(b2.which);
        }
        return null;
      case "compositionend":
        return de$2 && "ko" !== b2.locale ? null : b2.data;
      default:
        return null;
    }
  }
  var le$2 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function me$2(a2) {
    var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
    return "input" === b2 ? !!le$2[a2.type] : "textarea" === b2 ? true : false;
  }
  function ne$3(a2, b2, c2, d2) {
    Eb(d2);
    b2 = oe$2(b2, "onChange");
    0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a2.push({ event: c2, listeners: b2 }));
  }
  var pe$1 = null, qe$2 = null;
  function re$1(a2) {
    se$2(a2, 0);
  }
  function te$2(a2) {
    var b2 = ue$2(a2);
    if (Wa(b2))
      return a2;
  }
  function ve$1(a2, b2) {
    if ("change" === a2)
      return b2;
  }
  var we$2 = false;
  if (ia) {
    var xe$2;
    if (ia) {
      var ye$2 = "oninput" in document;
      if (!ye$2) {
        var ze$2 = document.createElement("div");
        ze$2.setAttribute("oninput", "return;");
        ye$2 = "function" === typeof ze$2.oninput;
      }
      xe$2 = ye$2;
    } else
      xe$2 = false;
    we$2 = xe$2 && (!document.documentMode || 9 < document.documentMode);
  }
  function Ae$1() {
    pe$1 && (pe$1.detachEvent("onpropertychange", Be$1), qe$2 = pe$1 = null);
  }
  function Be$1(a2) {
    if ("value" === a2.propertyName && te$2(qe$2)) {
      var b2 = [];
      ne$3(b2, qe$2, a2, xb(a2));
      Jb(re$1, b2);
    }
  }
  function Ce$2(a2, b2, c2) {
    "focusin" === a2 ? (Ae$1(), pe$1 = b2, qe$2 = c2, pe$1.attachEvent("onpropertychange", Be$1)) : "focusout" === a2 && Ae$1();
  }
  function De$2(a2) {
    if ("selectionchange" === a2 || "keyup" === a2 || "keydown" === a2)
      return te$2(qe$2);
  }
  function Ee$2(a2, b2) {
    if ("click" === a2)
      return te$2(b2);
  }
  function Fe(a2, b2) {
    if ("input" === a2 || "change" === a2)
      return te$2(b2);
  }
  function Ge$2(a2, b2) {
    return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
  }
  var He$2 = "function" === typeof Object.is ? Object.is : Ge$2;
  function Ie$1(a2, b2) {
    if (He$2(a2, b2))
      return true;
    if ("object" !== typeof a2 || null === a2 || "object" !== typeof b2 || null === b2)
      return false;
    var c2 = Object.keys(a2), d2 = Object.keys(b2);
    if (c2.length !== d2.length)
      return false;
    for (d2 = 0; d2 < c2.length; d2++) {
      var e2 = c2[d2];
      if (!ja.call(b2, e2) || !He$2(a2[e2], b2[e2]))
        return false;
    }
    return true;
  }
  function Je(a2) {
    for (; a2 && a2.firstChild; )
      a2 = a2.firstChild;
    return a2;
  }
  function Ke$2(a2, b2) {
    var c2 = Je(a2);
    a2 = 0;
    for (var d2; c2; ) {
      if (3 === c2.nodeType) {
        d2 = a2 + c2.textContent.length;
        if (a2 <= b2 && d2 >= b2)
          return { node: c2, offset: b2 - a2 };
        a2 = d2;
      }
      a: {
        for (; c2; ) {
          if (c2.nextSibling) {
            c2 = c2.nextSibling;
            break a;
          }
          c2 = c2.parentNode;
        }
        c2 = void 0;
      }
      c2 = Je(c2);
    }
  }
  function Le$3(a2, b2) {
    return a2 && b2 ? a2 === b2 ? true : a2 && 3 === a2.nodeType ? false : b2 && 3 === b2.nodeType ? Le$3(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
  }
  function Me$1() {
    for (var a2 = window, b2 = Xa(); b2 instanceof a2.HTMLIFrameElement; ) {
      try {
        var c2 = "string" === typeof b2.contentWindow.location.href;
      } catch (d2) {
        c2 = false;
      }
      if (c2)
        a2 = b2.contentWindow;
      else
        break;
      b2 = Xa(a2.document);
    }
    return b2;
  }
  function Ne$2(a2) {
    var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
    return b2 && ("input" === b2 && ("text" === a2.type || "search" === a2.type || "tel" === a2.type || "url" === a2.type || "password" === a2.type) || "textarea" === b2 || "true" === a2.contentEditable);
  }
  function Oe$1(a2) {
    var b2 = Me$1(), c2 = a2.focusedElem, d2 = a2.selectionRange;
    if (b2 !== c2 && c2 && c2.ownerDocument && Le$3(c2.ownerDocument.documentElement, c2)) {
      if (null !== d2 && Ne$2(c2)) {
        if (b2 = d2.start, a2 = d2.end, void 0 === a2 && (a2 = b2), "selectionStart" in c2)
          c2.selectionStart = b2, c2.selectionEnd = Math.min(a2, c2.value.length);
        else if (a2 = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a2.getSelection) {
          a2 = a2.getSelection();
          var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
          d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e2);
          !a2.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
          e2 = Ke$2(c2, f2);
          var g2 = Ke$2(
            c2,
            d2
          );
          e2 && g2 && (1 !== a2.rangeCount || a2.anchorNode !== e2.node || a2.anchorOffset !== e2.offset || a2.focusNode !== g2.node || a2.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a2.removeAllRanges(), f2 > d2 ? (a2.addRange(b2), a2.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a2.addRange(b2)));
        }
      }
      b2 = [];
      for (a2 = c2; a2 = a2.parentNode; )
        1 === a2.nodeType && b2.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
      "function" === typeof c2.focus && c2.focus();
      for (c2 = 0; c2 < b2.length; c2++)
        a2 = b2[c2], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
    }
  }
  var Pe$2 = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re$1 = null, Se = null, Te$1 = false;
  function Ue$2(a2, b2, c2) {
    var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
    Te$1 || null == Qe || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Ne$2(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se && Ie$1(Se, d2) || (Se = d2, d2 = oe$2(Re$1, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a2.push({ event: b2, listeners: d2 }), b2.target = Qe)));
  }
  function Ve$1(a2, b2) {
    var c2 = {};
    c2[a2.toLowerCase()] = b2.toLowerCase();
    c2["Webkit" + a2] = "webkit" + b2;
    c2["Moz" + a2] = "moz" + b2;
    return c2;
  }
  var We$1 = { animationend: Ve$1("Animation", "AnimationEnd"), animationiteration: Ve$1("Animation", "AnimationIteration"), animationstart: Ve$1("Animation", "AnimationStart"), transitionend: Ve$1("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
  ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We$1.animationend.animation, delete We$1.animationiteration.animation, delete We$1.animationstart.animation), "TransitionEvent" in window || delete We$1.transitionend.transition);
  function Ze(a2) {
    if (Xe[a2])
      return Xe[a2];
    if (!We$1[a2])
      return a2;
    var b2 = We$1[a2], c2;
    for (c2 in b2)
      if (b2.hasOwnProperty(c2) && c2 in Ye)
        return Xe[a2] = b2[c2];
    return a2;
  }
  var $e$1 = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ff(a2, b2) {
    df.set(a2, b2);
    fa(b2, [a2]);
  }
  for (var gf = 0; gf < ef.length; gf++) {
    var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
    ff(jf, "on" + kf);
  }
  ff($e$1, "onAnimationEnd");
  ff(af, "onAnimationIteration");
  ff(bf, "onAnimationStart");
  ff("dblclick", "onDoubleClick");
  ff("focusin", "onFocus");
  ff("focusout", "onBlur");
  ff(cf, "onTransitionEnd");
  ha("onMouseEnter", ["mouseout", "mouseover"]);
  ha("onMouseLeave", ["mouseout", "mouseover"]);
  ha("onPointerEnter", ["pointerout", "pointerover"]);
  ha("onPointerLeave", ["pointerout", "pointerover"]);
  fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
  function nf(a2, b2, c2) {
    var d2 = a2.type || "unknown-event";
    a2.currentTarget = c2;
    Ub(d2, b2, void 0, a2);
    a2.currentTarget = null;
  }
  function se$2(a2, b2) {
    b2 = 0 !== (b2 & 4);
    for (var c2 = 0; c2 < a2.length; c2++) {
      var d2 = a2[c2], e2 = d2.event;
      d2 = d2.listeners;
      a: {
        var f2 = void 0;
        if (b2)
          for (var g2 = d2.length - 1; 0 <= g2; g2--) {
            var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
            h2 = h2.listener;
            if (k2 !== f2 && e2.isPropagationStopped())
              break a;
            nf(e2, h2, l2);
            f2 = k2;
          }
        else
          for (g2 = 0; g2 < d2.length; g2++) {
            h2 = d2[g2];
            k2 = h2.instance;
            l2 = h2.currentTarget;
            h2 = h2.listener;
            if (k2 !== f2 && e2.isPropagationStopped())
              break a;
            nf(e2, h2, l2);
            f2 = k2;
          }
      }
    }
    if (Qb)
      throw a2 = Rb, Qb = false, Rb = null, a2;
  }
  function D$4(a2, b2) {
    var c2 = b2[of];
    void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
    var d2 = a2 + "__bubble";
    c2.has(d2) || (pf(b2, a2, 2, false), c2.add(d2));
  }
  function qf(a2, b2, c2) {
    var d2 = 0;
    b2 && (d2 |= 4);
    pf(c2, a2, d2, b2);
  }
  var rf = "_reactListening" + Math.random().toString(36).slice(2);
  function sf(a2) {
    if (!a2[rf]) {
      a2[rf] = true;
      da.forEach(function(b3) {
        "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a2), qf(b3, true, a2));
      });
      var b2 = 9 === a2.nodeType ? a2 : a2.ownerDocument;
      null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
    }
  }
  function pf(a2, b2, c2, d2) {
    switch (jd(b2)) {
      case 1:
        var e2 = ed;
        break;
      case 4:
        e2 = gd;
        break;
      default:
        e2 = fd;
    }
    c2 = e2.bind(null, b2, c2, a2);
    e2 = void 0;
    !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
    d2 ? void 0 !== e2 ? a2.addEventListener(b2, c2, { capture: true, passive: e2 }) : a2.addEventListener(b2, c2, true) : void 0 !== e2 ? a2.addEventListener(b2, c2, { passive: e2 }) : a2.addEventListener(b2, c2, false);
  }
  function hd(a2, b2, c2, d2, e2) {
    var f2 = d2;
    if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2)
      a:
        for (; ; ) {
          if (null === d2)
            return;
          var g2 = d2.tag;
          if (3 === g2 || 4 === g2) {
            var h2 = d2.stateNode.containerInfo;
            if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2)
              break;
            if (4 === g2)
              for (g2 = d2.return; null !== g2; ) {
                var k2 = g2.tag;
                if (3 === k2 || 4 === k2) {
                  if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2)
                    return;
                }
                g2 = g2.return;
              }
            for (; null !== h2; ) {
              g2 = Wc(h2);
              if (null === g2)
                return;
              k2 = g2.tag;
              if (5 === k2 || 6 === k2) {
                d2 = f2 = g2;
                continue a;
              }
              h2 = h2.parentNode;
            }
          }
          d2 = d2.return;
        }
    Jb(function() {
      var d3 = f2, e3 = xb(c2), g3 = [];
      a: {
        var h3 = df.get(a2);
        if (void 0 !== h3) {
          var k3 = td, n2 = a2;
          switch (a2) {
            case "keypress":
              if (0 === od(c2))
                break a;
            case "keydown":
            case "keyup":
              k3 = Rd;
              break;
            case "focusin":
              n2 = "focus";
              k3 = Fd;
              break;
            case "focusout":
              n2 = "blur";
              k3 = Fd;
              break;
            case "beforeblur":
            case "afterblur":
              k3 = Fd;
              break;
            case "click":
              if (2 === c2.button)
                break a;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k3 = Bd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k3 = Dd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k3 = Vd;
              break;
            case $e$1:
            case af:
            case bf:
              k3 = Hd;
              break;
            case cf:
              k3 = Xd;
              break;
            case "scroll":
              k3 = vd;
              break;
            case "wheel":
              k3 = Zd;
              break;
            case "copy":
            case "cut":
            case "paste":
              k3 = Jd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k3 = Td;
          }
          var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a2, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
          t2 = [];
          for (var w2 = d3, u2; null !== w2; ) {
            u2 = w2;
            var F2 = u2.stateNode;
            5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
            if (J2)
              break;
            w2 = w2.return;
          }
          0 < t2.length && (h3 = new k3(h3, n2, null, c2, e3), g3.push({ event: h3, listeners: t2 }));
        }
      }
      if (0 === (b2 & 7)) {
        a: {
          h3 = "mouseover" === a2 || "pointerover" === a2;
          k3 = "mouseout" === a2 || "pointerout" === a2;
          if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf]))
            break a;
          if (k3 || h3) {
            h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
            if (k3) {
              if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
                n2 = null;
            } else
              k3 = null, n2 = d3;
            if (k3 !== n2) {
              t2 = Bd;
              F2 = "onMouseLeave";
              x2 = "onMouseEnter";
              w2 = "mouse";
              if ("pointerout" === a2 || "pointerover" === a2)
                t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
              J2 = null == k3 ? h3 : ue$2(k3);
              u2 = null == n2 ? h3 : ue$2(n2);
              h3 = new t2(F2, w2 + "leave", k3, c2, e3);
              h3.target = J2;
              h3.relatedTarget = u2;
              F2 = null;
              Wc(e3) === d3 && (t2 = new t2(x2, w2 + "enter", n2, c2, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
              J2 = F2;
              if (k3 && n2)
                b: {
                  t2 = k3;
                  x2 = n2;
                  w2 = 0;
                  for (u2 = t2; u2; u2 = vf(u2))
                    w2++;
                  u2 = 0;
                  for (F2 = x2; F2; F2 = vf(F2))
                    u2++;
                  for (; 0 < w2 - u2; )
                    t2 = vf(t2), w2--;
                  for (; 0 < u2 - w2; )
                    x2 = vf(x2), u2--;
                  for (; w2--; ) {
                    if (t2 === x2 || null !== x2 && t2 === x2.alternate)
                      break b;
                    t2 = vf(t2);
                    x2 = vf(x2);
                  }
                  t2 = null;
                }
              else
                t2 = null;
              null !== k3 && wf(g3, h3, k3, t2, false);
              null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
            }
          }
        }
        a: {
          h3 = d3 ? ue$2(d3) : window;
          k3 = h3.nodeName && h3.nodeName.toLowerCase();
          if ("select" === k3 || "input" === k3 && "file" === h3.type)
            var na = ve$1;
          else if (me$2(h3))
            if (we$2)
              na = Fe;
            else {
              na = De$2;
              var xa = Ce$2;
            }
          else
            (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee$2);
          if (na && (na = na(a2, d3))) {
            ne$3(g3, na, c2, e3);
            break a;
          }
          xa && xa(a2, h3, d3);
          "focusout" === a2 && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
        }
        xa = d3 ? ue$2(d3) : window;
        switch (a2) {
          case "focusin":
            if (me$2(xa) || "true" === xa.contentEditable)
              Qe = xa, Re$1 = d3, Se = null;
            break;
          case "focusout":
            Se = Re$1 = Qe = null;
            break;
          case "mousedown":
            Te$1 = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Te$1 = false;
            Ue$2(g3, c2, e3);
            break;
          case "selectionchange":
            if (Pe$2)
              break;
          case "keydown":
          case "keyup":
            Ue$2(g3, c2, e3);
        }
        var $a;
        if (ae$2)
          b: {
            switch (a2) {
              case "compositionstart":
                var ba = "onCompositionStart";
                break b;
              case "compositionend":
                ba = "onCompositionEnd";
                break b;
              case "compositionupdate":
                ba = "onCompositionUpdate";
                break b;
            }
            ba = void 0;
          }
        else
          ie$1 ? ge$1(a2, c2) && (ba = "onCompositionEnd") : "keydown" === a2 && 229 === c2.keyCode && (ba = "onCompositionStart");
        ba && (de$2 && "ko" !== c2.locale && (ie$1 || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie$1 && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie$1 = true)), xa = oe$2(d3, ba), 0 < xa.length && (ba = new Ld(ba, a2, null, c2, e3), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he$2(c2), null !== $a && (ba.data = $a))));
        if ($a = ce$1 ? je$1(a2, c2) : ke$1(a2, c2))
          d3 = oe$2(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = $a);
      }
      se$2(g3, b2);
    });
  }
  function tf(a2, b2, c2) {
    return { instance: a2, listener: b2, currentTarget: c2 };
  }
  function oe$2(a2, b2) {
    for (var c2 = b2 + "Capture", d2 = []; null !== a2; ) {
      var e2 = a2, f2 = e2.stateNode;
      5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a2, c2), null != f2 && d2.unshift(tf(a2, f2, e2)), f2 = Kb(a2, b2), null != f2 && d2.push(tf(a2, f2, e2)));
      a2 = a2.return;
    }
    return d2;
  }
  function vf(a2) {
    if (null === a2)
      return null;
    do
      a2 = a2.return;
    while (a2 && 5 !== a2.tag);
    return a2 ? a2 : null;
  }
  function wf(a2, b2, c2, d2, e2) {
    for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
      var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
      if (null !== k2 && k2 === d2)
        break;
      5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e2 || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
      c2 = c2.return;
    }
    0 !== g2.length && a2.push({ event: b2, listeners: g2 });
  }
  var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
  function zf(a2) {
    return ("string" === typeof a2 ? a2 : "" + a2).replace(xf, "\n").replace(yf, "");
  }
  function Af(a2, b2, c2) {
    b2 = zf(b2);
    if (zf(a2) !== b2 && c2)
      throw Error(p$5(425));
  }
  function Bf() {
  }
  var Cf = null, Df = null;
  function Ef(a2, b2) {
    return "textarea" === a2 || "noscript" === a2 || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
  }
  var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a2) {
    return Hf.resolve(null).then(a2).catch(If);
  } : Ff;
  function If(a2) {
    setTimeout(function() {
      throw a2;
    });
  }
  function Kf(a2, b2) {
    var c2 = b2, d2 = 0;
    do {
      var e2 = c2.nextSibling;
      a2.removeChild(c2);
      if (e2 && 8 === e2.nodeType)
        if (c2 = e2.data, "/$" === c2) {
          if (0 === d2) {
            a2.removeChild(e2);
            bd(b2);
            return;
          }
          d2--;
        } else
          "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
      c2 = e2;
    } while (c2);
    bd(b2);
  }
  function Lf(a2) {
    for (; null != a2; a2 = a2.nextSibling) {
      var b2 = a2.nodeType;
      if (1 === b2 || 3 === b2)
        break;
      if (8 === b2) {
        b2 = a2.data;
        if ("$" === b2 || "$!" === b2 || "$?" === b2)
          break;
        if ("/$" === b2)
          return null;
      }
    }
    return a2;
  }
  function Mf(a2) {
    a2 = a2.previousSibling;
    for (var b2 = 0; a2; ) {
      if (8 === a2.nodeType) {
        var c2 = a2.data;
        if ("$" === c2 || "$!" === c2 || "$?" === c2) {
          if (0 === b2)
            return a2;
          b2--;
        } else
          "/$" === c2 && b2++;
      }
      a2 = a2.previousSibling;
    }
    return null;
  }
  var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
  function Wc(a2) {
    var b2 = a2[Of];
    if (b2)
      return b2;
    for (var c2 = a2.parentNode; c2; ) {
      if (b2 = c2[uf] || c2[Of]) {
        c2 = b2.alternate;
        if (null !== b2.child || null !== c2 && null !== c2.child)
          for (a2 = Mf(a2); null !== a2; ) {
            if (c2 = a2[Of])
              return c2;
            a2 = Mf(a2);
          }
        return b2;
      }
      a2 = c2;
      c2 = a2.parentNode;
    }
    return null;
  }
  function Cb(a2) {
    a2 = a2[Of] || a2[uf];
    return !a2 || 5 !== a2.tag && 6 !== a2.tag && 13 !== a2.tag && 3 !== a2.tag ? null : a2;
  }
  function ue$2(a2) {
    if (5 === a2.tag || 6 === a2.tag)
      return a2.stateNode;
    throw Error(p$5(33));
  }
  function Db(a2) {
    return a2[Pf] || null;
  }
  var Sf = [], Tf = -1;
  function Uf(a2) {
    return { current: a2 };
  }
  function E$3(a2) {
    0 > Tf || (a2.current = Sf[Tf], Sf[Tf] = null, Tf--);
  }
  function G$1(a2, b2) {
    Tf++;
    Sf[Tf] = a2.current;
    a2.current = b2;
  }
  var Vf = {}, H$3 = Uf(Vf), Wf = Uf(false), Xf = Vf;
  function Yf(a2, b2) {
    var c2 = a2.type.contextTypes;
    if (!c2)
      return Vf;
    var d2 = a2.stateNode;
    if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
      return d2.__reactInternalMemoizedMaskedChildContext;
    var e2 = {}, f2;
    for (f2 in c2)
      e2[f2] = b2[f2];
    d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e2);
    return e2;
  }
  function Zf(a2) {
    a2 = a2.childContextTypes;
    return null !== a2 && void 0 !== a2;
  }
  function $f() {
    E$3(Wf);
    E$3(H$3);
  }
  function ag(a2, b2, c2) {
    if (H$3.current !== Vf)
      throw Error(p$5(168));
    G$1(H$3, b2);
    G$1(Wf, c2);
  }
  function bg(a2, b2, c2) {
    var d2 = a2.stateNode;
    b2 = b2.childContextTypes;
    if ("function" !== typeof d2.getChildContext)
      return c2;
    d2 = d2.getChildContext();
    for (var e2 in d2)
      if (!(e2 in b2))
        throw Error(p$5(108, Ra(a2) || "Unknown", e2));
    return A$3({}, c2, d2);
  }
  function cg(a2) {
    a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Vf;
    Xf = H$3.current;
    G$1(H$3, a2);
    G$1(Wf, Wf.current);
    return true;
  }
  function dg(a2, b2, c2) {
    var d2 = a2.stateNode;
    if (!d2)
      throw Error(p$5(169));
    c2 ? (a2 = bg(a2, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a2, E$3(Wf), E$3(H$3), G$1(H$3, a2)) : E$3(Wf);
    G$1(Wf, c2);
  }
  var eg = null, fg = false, gg = false;
  function hg(a2) {
    null === eg ? eg = [a2] : eg.push(a2);
  }
  function ig(a2) {
    fg = true;
    hg(a2);
  }
  function jg() {
    if (!gg && null !== eg) {
      gg = true;
      var a2 = 0, b2 = C$3;
      try {
        var c2 = eg;
        for (C$3 = 1; a2 < c2.length; a2++) {
          var d2 = c2[a2];
          do
            d2 = d2(true);
          while (null !== d2);
        }
        eg = null;
        fg = false;
      } catch (e2) {
        throw null !== eg && (eg = eg.slice(a2 + 1)), ac(fc, jg), e2;
      } finally {
        C$3 = b2, gg = false;
      }
    }
    return null;
  }
  var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
  function tg(a2, b2) {
    kg[lg++] = ng;
    kg[lg++] = mg;
    mg = a2;
    ng = b2;
  }
  function ug(a2, b2, c2) {
    og[pg++] = rg;
    og[pg++] = sg;
    og[pg++] = qg;
    qg = a2;
    var d2 = rg;
    a2 = sg;
    var e2 = 32 - oc(d2) - 1;
    d2 &= ~(1 << e2);
    c2 += 1;
    var f2 = 32 - oc(b2) + e2;
    if (30 < f2) {
      var g2 = e2 - e2 % 5;
      f2 = (d2 & (1 << g2) - 1).toString(32);
      d2 >>= g2;
      e2 -= g2;
      rg = 1 << 32 - oc(b2) + e2 | c2 << e2 | d2;
      sg = f2 + a2;
    } else
      rg = 1 << f2 | c2 << e2 | d2, sg = a2;
  }
  function vg(a2) {
    null !== a2.return && (tg(a2, 1), ug(a2, 1, 0));
  }
  function wg(a2) {
    for (; a2 === mg; )
      mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
    for (; a2 === qg; )
      qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
  }
  var xg = null, yg = null, I$3 = false, zg = null;
  function Ag(a2, b2) {
    var c2 = Bg(5, null, null, 0);
    c2.elementType = "DELETED";
    c2.stateNode = b2;
    c2.return = a2;
    b2 = a2.deletions;
    null === b2 ? (a2.deletions = [c2], a2.flags |= 16) : b2.push(c2);
  }
  function Cg(a2, b2) {
    switch (a2.tag) {
      case 5:
        var c2 = a2.type;
        b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
        return null !== b2 ? (a2.stateNode = b2, xg = a2, yg = Lf(b2.firstChild), true) : false;
      case 6:
        return b2 = "" === a2.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a2.stateNode = b2, xg = a2, yg = null, true) : false;
      case 13:
        return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a2.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a2, a2.child = c2, xg = a2, yg = null, true) : false;
      default:
        return false;
    }
  }
  function Dg(a2) {
    return 0 !== (a2.mode & 1) && 0 === (a2.flags & 128);
  }
  function Eg(a2) {
    if (I$3) {
      var b2 = yg;
      if (b2) {
        var c2 = b2;
        if (!Cg(a2, b2)) {
          if (Dg(a2))
            throw Error(p$5(418));
          b2 = Lf(c2.nextSibling);
          var d2 = xg;
          b2 && Cg(a2, b2) ? Ag(d2, c2) : (a2.flags = a2.flags & -4097 | 2, I$3 = false, xg = a2);
        }
      } else {
        if (Dg(a2))
          throw Error(p$5(418));
        a2.flags = a2.flags & -4097 | 2;
        I$3 = false;
        xg = a2;
      }
    }
  }
  function Fg(a2) {
    for (a2 = a2.return; null !== a2 && 5 !== a2.tag && 3 !== a2.tag && 13 !== a2.tag; )
      a2 = a2.return;
    xg = a2;
  }
  function Gg(a2) {
    if (a2 !== xg)
      return false;
    if (!I$3)
      return Fg(a2), I$3 = true, false;
    var b2;
    (b2 = 3 !== a2.tag) && !(b2 = 5 !== a2.tag) && (b2 = a2.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a2.type, a2.memoizedProps));
    if (b2 && (b2 = yg)) {
      if (Dg(a2))
        throw Hg(), Error(p$5(418));
      for (; b2; )
        Ag(a2, b2), b2 = Lf(b2.nextSibling);
    }
    Fg(a2);
    if (13 === a2.tag) {
      a2 = a2.memoizedState;
      a2 = null !== a2 ? a2.dehydrated : null;
      if (!a2)
        throw Error(p$5(317));
      a: {
        a2 = a2.nextSibling;
        for (b2 = 0; a2; ) {
          if (8 === a2.nodeType) {
            var c2 = a2.data;
            if ("/$" === c2) {
              if (0 === b2) {
                yg = Lf(a2.nextSibling);
                break a;
              }
              b2--;
            } else
              "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
          }
          a2 = a2.nextSibling;
        }
        yg = null;
      }
    } else
      yg = xg ? Lf(a2.stateNode.nextSibling) : null;
    return true;
  }
  function Hg() {
    for (var a2 = yg; a2; )
      a2 = Lf(a2.nextSibling);
  }
  function Ig() {
    yg = xg = null;
    I$3 = false;
  }
  function Jg(a2) {
    null === zg ? zg = [a2] : zg.push(a2);
  }
  var Kg = ua.ReactCurrentBatchConfig;
  function Lg(a2, b2) {
    if (a2 && a2.defaultProps) {
      b2 = A$3({}, b2);
      a2 = a2.defaultProps;
      for (var c2 in a2)
        void 0 === b2[c2] && (b2[c2] = a2[c2]);
      return b2;
    }
    return b2;
  }
  var Mg = Uf(null), Ng = null, Og = null, Pg = null;
  function Qg() {
    Pg = Og = Ng = null;
  }
  function Rg(a2) {
    var b2 = Mg.current;
    E$3(Mg);
    a2._currentValue = b2;
  }
  function Sg(a2, b2, c2) {
    for (; null !== a2; ) {
      var d2 = a2.alternate;
      (a2.childLanes & b2) !== b2 ? (a2.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
      if (a2 === c2)
        break;
      a2 = a2.return;
    }
  }
  function Tg(a2, b2) {
    Ng = a2;
    Pg = Og = null;
    a2 = a2.dependencies;
    null !== a2 && null !== a2.firstContext && (0 !== (a2.lanes & b2) && (Ug = true), a2.firstContext = null);
  }
  function Vg(a2) {
    var b2 = a2._currentValue;
    if (Pg !== a2)
      if (a2 = { context: a2, memoizedValue: b2, next: null }, null === Og) {
        if (null === Ng)
          throw Error(p$5(308));
        Og = a2;
        Ng.dependencies = { lanes: 0, firstContext: a2 };
      } else
        Og = Og.next = a2;
    return b2;
  }
  var Wg = null;
  function Xg(a2) {
    null === Wg ? Wg = [a2] : Wg.push(a2);
  }
  function Yg(a2, b2, c2, d2) {
    var e2 = b2.interleaved;
    null === e2 ? (c2.next = c2, Xg(b2)) : (c2.next = e2.next, e2.next = c2);
    b2.interleaved = c2;
    return Zg(a2, d2);
  }
  function Zg(a2, b2) {
    a2.lanes |= b2;
    var c2 = a2.alternate;
    null !== c2 && (c2.lanes |= b2);
    c2 = a2;
    for (a2 = a2.return; null !== a2; )
      a2.childLanes |= b2, c2 = a2.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
    return 3 === c2.tag ? c2.stateNode : null;
  }
  var $g = false;
  function ah(a2) {
    a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function bh(a2, b2) {
    a2 = a2.updateQueue;
    b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
  }
  function ch(a2, b2) {
    return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
  }
  function dh(a2, b2, c2) {
    var d2 = a2.updateQueue;
    if (null === d2)
      return null;
    d2 = d2.shared;
    if (0 !== (K$1 & 2)) {
      var e2 = d2.pending;
      null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
      d2.pending = b2;
      return Zg(a2, c2);
    }
    e2 = d2.interleaved;
    null === e2 ? (b2.next = b2, Xg(d2)) : (b2.next = e2.next, e2.next = b2);
    d2.interleaved = b2;
    return Zg(a2, c2);
  }
  function eh(a2, b2, c2) {
    b2 = b2.updateQueue;
    if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
      var d2 = b2.lanes;
      d2 &= a2.pendingLanes;
      c2 |= d2;
      b2.lanes = c2;
      Cc(a2, c2);
    }
  }
  function fh(a2, b2) {
    var c2 = a2.updateQueue, d2 = a2.alternate;
    if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
      var e2 = null, f2 = null;
      c2 = c2.firstBaseUpdate;
      if (null !== c2) {
        do {
          var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
          null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
          c2 = c2.next;
        } while (null !== c2);
        null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
      } else
        e2 = f2 = b2;
      c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
      a2.updateQueue = c2;
      return;
    }
    a2 = c2.lastBaseUpdate;
    null === a2 ? c2.firstBaseUpdate = b2 : a2.next = b2;
    c2.lastBaseUpdate = b2;
  }
  function gh(a2, b2, c2, d2) {
    var e2 = a2.updateQueue;
    $g = false;
    var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
    if (null !== h2) {
      e2.shared.pending = null;
      var k2 = h2, l2 = k2.next;
      k2.next = null;
      null === g2 ? f2 = l2 : g2.next = l2;
      g2 = k2;
      var m2 = a2.alternate;
      null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
    }
    if (null !== f2) {
      var q2 = e2.baseState;
      g2 = 0;
      m2 = l2 = k2 = null;
      h2 = f2;
      do {
        var r2 = h2.lane, y2 = h2.eventTime;
        if ((d2 & r2) === r2) {
          null !== m2 && (m2 = m2.next = {
            eventTime: y2,
            lane: 0,
            tag: h2.tag,
            payload: h2.payload,
            callback: h2.callback,
            next: null
          });
          a: {
            var n2 = a2, t2 = h2;
            r2 = b2;
            y2 = c2;
            switch (t2.tag) {
              case 1:
                n2 = t2.payload;
                if ("function" === typeof n2) {
                  q2 = n2.call(y2, q2, r2);
                  break a;
                }
                q2 = n2;
                break a;
              case 3:
                n2.flags = n2.flags & -65537 | 128;
              case 0:
                n2 = t2.payload;
                r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
                if (null === r2 || void 0 === r2)
                  break a;
                q2 = A$3({}, q2, r2);
                break a;
              case 2:
                $g = true;
            }
          }
          null !== h2.callback && 0 !== h2.lane && (a2.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
        } else
          y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r2;
        h2 = h2.next;
        if (null === h2)
          if (h2 = e2.shared.pending, null === h2)
            break;
          else
            r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
      } while (1);
      null === m2 && (k2 = q2);
      e2.baseState = k2;
      e2.firstBaseUpdate = l2;
      e2.lastBaseUpdate = m2;
      b2 = e2.shared.interleaved;
      if (null !== b2) {
        e2 = b2;
        do
          g2 |= e2.lane, e2 = e2.next;
        while (e2 !== b2);
      } else
        null === f2 && (e2.shared.lanes = 0);
      hh |= g2;
      a2.lanes = g2;
      a2.memoizedState = q2;
    }
  }
  function ih(a2, b2, c2) {
    a2 = b2.effects;
    b2.effects = null;
    if (null !== a2)
      for (b2 = 0; b2 < a2.length; b2++) {
        var d2 = a2[b2], e2 = d2.callback;
        if (null !== e2) {
          d2.callback = null;
          d2 = c2;
          if ("function" !== typeof e2)
            throw Error(p$5(191, e2));
          e2.call(d2);
        }
      }
  }
  var jh = new aa.Component().refs;
  function kh(a2, b2, c2, d2) {
    b2 = a2.memoizedState;
    c2 = c2(d2, b2);
    c2 = null === c2 || void 0 === c2 ? b2 : A$3({}, b2, c2);
    a2.memoizedState = c2;
    0 === a2.lanes && (a2.updateQueue.baseState = c2);
  }
  var nh = { isMounted: function(a2) {
    return (a2 = a2._reactInternals) ? Vb(a2) === a2 : false;
  }, enqueueSetState: function(a2, b2, c2) {
    a2 = a2._reactInternals;
    var d2 = L$4(), e2 = lh(a2), f2 = ch(d2, e2);
    f2.payload = b2;
    void 0 !== c2 && null !== c2 && (f2.callback = c2);
    b2 = dh(a2, f2, e2);
    null !== b2 && (mh(b2, a2, e2, d2), eh(b2, a2, e2));
  }, enqueueReplaceState: function(a2, b2, c2) {
    a2 = a2._reactInternals;
    var d2 = L$4(), e2 = lh(a2), f2 = ch(d2, e2);
    f2.tag = 1;
    f2.payload = b2;
    void 0 !== c2 && null !== c2 && (f2.callback = c2);
    b2 = dh(a2, f2, e2);
    null !== b2 && (mh(b2, a2, e2, d2), eh(b2, a2, e2));
  }, enqueueForceUpdate: function(a2, b2) {
    a2 = a2._reactInternals;
    var c2 = L$4(), d2 = lh(a2), e2 = ch(c2, d2);
    e2.tag = 2;
    void 0 !== b2 && null !== b2 && (e2.callback = b2);
    b2 = dh(a2, e2, d2);
    null !== b2 && (mh(b2, a2, d2, c2), eh(b2, a2, d2));
  } };
  function oh(a2, b2, c2, d2, e2, f2, g2) {
    a2 = a2.stateNode;
    return "function" === typeof a2.shouldComponentUpdate ? a2.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie$1(c2, d2) || !Ie$1(e2, f2) : true;
  }
  function ph(a2, b2, c2) {
    var d2 = false, e2 = Vf;
    var f2 = b2.contextType;
    "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e2 = Zf(b2) ? Xf : H$3.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a2, e2) : Vf);
    b2 = new b2(c2, f2);
    a2.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
    b2.updater = nh;
    a2.stateNode = b2;
    b2._reactInternals = a2;
    d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f2);
    return b2;
  }
  function qh(a2, b2, c2, d2) {
    a2 = b2.state;
    "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
    "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
    b2.state !== a2 && nh.enqueueReplaceState(b2, b2.state, null);
  }
  function rh(a2, b2, c2, d2) {
    var e2 = a2.stateNode;
    e2.props = c2;
    e2.state = a2.memoizedState;
    e2.refs = jh;
    ah(a2);
    var f2 = b2.contextType;
    "object" === typeof f2 && null !== f2 ? e2.context = Vg(f2) : (f2 = Zf(b2) ? Xf : H$3.current, e2.context = Yf(a2, f2));
    e2.state = a2.memoizedState;
    f2 = b2.getDerivedStateFromProps;
    "function" === typeof f2 && (kh(a2, b2, f2, c2), e2.state = a2.memoizedState);
    "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && nh.enqueueReplaceState(e2, e2.state, null), gh(a2, c2, e2, d2), e2.state = a2.memoizedState);
    "function" === typeof e2.componentDidMount && (a2.flags |= 4194308);
  }
  function sh(a2, b2, c2) {
    a2 = c2.ref;
    if (null !== a2 && "function" !== typeof a2 && "object" !== typeof a2) {
      if (c2._owner) {
        c2 = c2._owner;
        if (c2) {
          if (1 !== c2.tag)
            throw Error(p$5(309));
          var d2 = c2.stateNode;
        }
        if (!d2)
          throw Error(p$5(147, a2));
        var e2 = d2, f2 = "" + a2;
        if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2)
          return b2.ref;
        b2 = function(a3) {
          var b3 = e2.refs;
          b3 === jh && (b3 = e2.refs = {});
          null === a3 ? delete b3[f2] : b3[f2] = a3;
        };
        b2._stringRef = f2;
        return b2;
      }
      if ("string" !== typeof a2)
        throw Error(p$5(284));
      if (!c2._owner)
        throw Error(p$5(290, a2));
    }
    return a2;
  }
  function th(a2, b2) {
    a2 = Object.prototype.toString.call(b2);
    throw Error(p$5(31, "[object Object]" === a2 ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a2));
  }
  function uh(a2) {
    var b2 = a2._init;
    return b2(a2._payload);
  }
  function vh(a2) {
    function b2(b3, c3) {
      if (a2) {
        var d3 = b3.deletions;
        null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
      }
    }
    function c2(c3, d3) {
      if (!a2)
        return null;
      for (; null !== d3; )
        b2(c3, d3), d3 = d3.sibling;
      return null;
    }
    function d2(a3, b3) {
      for (a3 = /* @__PURE__ */ new Map(); null !== b3; )
        null !== b3.key ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
      return a3;
    }
    function e2(a3, b3) {
      a3 = wh(a3, b3);
      a3.index = 0;
      a3.sibling = null;
      return a3;
    }
    function f2(b3, c3, d3) {
      b3.index = d3;
      if (!a2)
        return b3.flags |= 1048576, c3;
      d3 = b3.alternate;
      if (null !== d3)
        return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
      b3.flags |= 2;
      return c3;
    }
    function g2(b3) {
      a2 && null === b3.alternate && (b3.flags |= 2);
      return b3;
    }
    function h2(a3, b3, c3, d3) {
      if (null === b3 || 6 !== b3.tag)
        return b3 = xh(c3, a3.mode, d3), b3.return = a3, b3;
      b3 = e2(b3, c3);
      b3.return = a3;
      return b3;
    }
    function k2(a3, b3, c3, d3) {
      var f3 = c3.type;
      if (f3 === ya)
        return m2(a3, b3, c3.props.children, d3, c3.key);
      if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b3.type))
        return d3 = e2(b3, c3.props), d3.ref = sh(a3, b3, c3), d3.return = a3, d3;
      d3 = yh(c3.type, c3.key, c3.props, null, a3.mode, d3);
      d3.ref = sh(a3, b3, c3);
      d3.return = a3;
      return d3;
    }
    function l2(a3, b3, c3, d3) {
      if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
        return b3 = zh(c3, a3.mode, d3), b3.return = a3, b3;
      b3 = e2(b3, c3.children || []);
      b3.return = a3;
      return b3;
    }
    function m2(a3, b3, c3, d3, f3) {
      if (null === b3 || 7 !== b3.tag)
        return b3 = Ah(c3, a3.mode, d3, f3), b3.return = a3, b3;
      b3 = e2(b3, c3);
      b3.return = a3;
      return b3;
    }
    function q2(a3, b3, c3) {
      if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3)
        return b3 = xh("" + b3, a3.mode, c3), b3.return = a3, b3;
      if ("object" === typeof b3 && null !== b3) {
        switch (b3.$$typeof) {
          case va:
            return c3 = yh(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = sh(a3, null, b3), c3.return = a3, c3;
          case wa:
            return b3 = zh(b3, a3.mode, c3), b3.return = a3, b3;
          case Ha:
            var d3 = b3._init;
            return q2(a3, d3(b3._payload), c3);
        }
        if (eb(b3) || Ka(b3))
          return b3 = Ah(b3, a3.mode, c3, null), b3.return = a3, b3;
        th(a3, b3);
      }
      return null;
    }
    function r2(a3, b3, c3, d3) {
      var e3 = null !== b3 ? b3.key : null;
      if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3)
        return null !== e3 ? null : h2(a3, b3, "" + c3, d3);
      if ("object" === typeof c3 && null !== c3) {
        switch (c3.$$typeof) {
          case va:
            return c3.key === e3 ? k2(a3, b3, c3, d3) : null;
          case wa:
            return c3.key === e3 ? l2(a3, b3, c3, d3) : null;
          case Ha:
            return e3 = c3._init, r2(
              a3,
              b3,
              e3(c3._payload),
              d3
            );
        }
        if (eb(c3) || Ka(c3))
          return null !== e3 ? null : m2(a3, b3, c3, d3, null);
        th(a3, c3);
      }
      return null;
    }
    function y2(a3, b3, c3, d3, e3) {
      if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3)
        return a3 = a3.get(c3) || null, h2(b3, a3, "" + d3, e3);
      if ("object" === typeof d3 && null !== d3) {
        switch (d3.$$typeof) {
          case va:
            return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a3, d3, e3);
          case wa:
            return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a3, d3, e3);
          case Ha:
            var f3 = d3._init;
            return y2(a3, b3, c3, f3(d3._payload), e3);
        }
        if (eb(d3) || Ka(d3))
          return a3 = a3.get(c3) || null, m2(b3, a3, d3, e3, null);
        th(b3, d3);
      }
      return null;
    }
    function n2(e3, g3, h3, k3) {
      for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
        u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
        var n3 = r2(e3, u2, h3[w2], k3);
        if (null === n3) {
          null === u2 && (u2 = x2);
          break;
        }
        a2 && u2 && null === n3.alternate && b2(e3, u2);
        g3 = f2(n3, g3, w2);
        null === m3 ? l3 = n3 : m3.sibling = n3;
        m3 = n3;
        u2 = x2;
      }
      if (w2 === h3.length)
        return c2(e3, u2), I$3 && tg(e3, w2), l3;
      if (null === u2) {
        for (; w2 < h3.length; w2++)
          u2 = q2(e3, h3[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
        I$3 && tg(e3, w2);
        return l3;
      }
      for (u2 = d2(e3, u2); w2 < h3.length; w2++)
        x2 = y2(u2, e3, w2, h3[w2], k3), null !== x2 && (a2 && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g3 = f2(x2, g3, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
      a2 && u2.forEach(function(a3) {
        return b2(e3, a3);
      });
      I$3 && tg(e3, w2);
      return l3;
    }
    function t2(e3, g3, h3, k3) {
      var l3 = Ka(h3);
      if ("function" !== typeof l3)
        throw Error(p$5(150));
      h3 = l3.call(h3);
      if (null == h3)
        throw Error(p$5(151));
      for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
        m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
        var t3 = r2(e3, m3, n3.value, k3);
        if (null === t3) {
          null === m3 && (m3 = x2);
          break;
        }
        a2 && m3 && null === t3.alternate && b2(e3, m3);
        g3 = f2(t3, g3, w2);
        null === u2 ? l3 = t3 : u2.sibling = t3;
        u2 = t3;
        m3 = x2;
      }
      if (n3.done)
        return c2(
          e3,
          m3
        ), I$3 && tg(e3, w2), l3;
      if (null === m3) {
        for (; !n3.done; w2++, n3 = h3.next())
          n3 = q2(e3, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
        I$3 && tg(e3, w2);
        return l3;
      }
      for (m3 = d2(e3, m3); !n3.done; w2++, n3 = h3.next())
        n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a2 && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      a2 && m3.forEach(function(a3) {
        return b2(e3, a3);
      });
      I$3 && tg(e3, w2);
      return l3;
    }
    function J2(a3, d3, f3, h3) {
      "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
      if ("object" === typeof f3 && null !== f3) {
        switch (f3.$$typeof) {
          case va:
            a: {
              for (var k3 = f3.key, l3 = d3; null !== l3; ) {
                if (l3.key === k3) {
                  k3 = f3.type;
                  if (k3 === ya) {
                    if (7 === l3.tag) {
                      c2(a3, l3.sibling);
                      d3 = e2(l3, f3.props.children);
                      d3.return = a3;
                      a3 = d3;
                      break a;
                    }
                  } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l3.type) {
                    c2(a3, l3.sibling);
                    d3 = e2(l3, f3.props);
                    d3.ref = sh(a3, l3, f3);
                    d3.return = a3;
                    a3 = d3;
                    break a;
                  }
                  c2(a3, l3);
                  break;
                } else
                  b2(a3, l3);
                l3 = l3.sibling;
              }
              f3.type === ya ? (d3 = Ah(f3.props.children, a3.mode, h3, f3.key), d3.return = a3, a3 = d3) : (h3 = yh(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = sh(a3, d3, f3), h3.return = a3, a3 = h3);
            }
            return g2(a3);
          case wa:
            a: {
              for (l3 = f3.key; null !== d3; ) {
                if (d3.key === l3)
                  if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                    c2(a3, d3.sibling);
                    d3 = e2(d3, f3.children || []);
                    d3.return = a3;
                    a3 = d3;
                    break a;
                  } else {
                    c2(a3, d3);
                    break;
                  }
                else
                  b2(a3, d3);
                d3 = d3.sibling;
              }
              d3 = zh(f3, a3.mode, h3);
              d3.return = a3;
              a3 = d3;
            }
            return g2(a3);
          case Ha:
            return l3 = f3._init, J2(a3, d3, l3(f3._payload), h3);
        }
        if (eb(f3))
          return n2(a3, d3, f3, h3);
        if (Ka(f3))
          return t2(a3, d3, f3, h3);
        th(a3, f3);
      }
      return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a3, d3.sibling), d3 = e2(d3, f3), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = xh(f3, a3.mode, h3), d3.return = a3, a3 = d3), g2(a3)) : c2(a3, d3);
    }
    return J2;
  }
  var Bh = vh(true), Ch = vh(false), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
  function Hh(a2) {
    if (a2 === Dh)
      throw Error(p$5(174));
    return a2;
  }
  function Ih(a2, b2) {
    G$1(Gh, b2);
    G$1(Fh, a2);
    G$1(Eh, Dh);
    a2 = b2.nodeType;
    switch (a2) {
      case 9:
      case 11:
        b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
        break;
      default:
        a2 = 8 === a2 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = lb(b2, a2);
    }
    E$3(Eh);
    G$1(Eh, b2);
  }
  function Jh() {
    E$3(Eh);
    E$3(Fh);
    E$3(Gh);
  }
  function Kh(a2) {
    Hh(Gh.current);
    var b2 = Hh(Eh.current);
    var c2 = lb(b2, a2.type);
    b2 !== c2 && (G$1(Fh, a2), G$1(Eh, c2));
  }
  function Lh(a2) {
    Fh.current === a2 && (E$3(Eh), E$3(Fh));
  }
  var M$1 = Uf(0);
  function Mh(a2) {
    for (var b2 = a2; null !== b2; ) {
      if (13 === b2.tag) {
        var c2 = b2.memoizedState;
        if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data))
          return b2;
      } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
        if (0 !== (b2.flags & 128))
          return b2;
      } else if (null !== b2.child) {
        b2.child.return = b2;
        b2 = b2.child;
        continue;
      }
      if (b2 === a2)
        break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a2)
          return null;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
    return null;
  }
  var Nh = [];
  function Oh() {
    for (var a2 = 0; a2 < Nh.length; a2++)
      Nh[a2]._workInProgressVersionPrimary = null;
    Nh.length = 0;
  }
  var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N$1 = null, O$2 = null, P$1 = null, Sh = false, Th = false, Uh = 0, Vh = 0;
  function Q$3() {
    throw Error(p$5(321));
  }
  function Wh(a2, b2) {
    if (null === b2)
      return false;
    for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++)
      if (!He$2(a2[c2], b2[c2]))
        return false;
    return true;
  }
  function Xh(a2, b2, c2, d2, e2, f2) {
    Rh = f2;
    N$1 = b2;
    b2.memoizedState = null;
    b2.updateQueue = null;
    b2.lanes = 0;
    Ph.current = null === a2 || null === a2.memoizedState ? Yh : Zh;
    a2 = c2(d2, e2);
    if (Th) {
      f2 = 0;
      do {
        Th = false;
        Uh = 0;
        if (25 <= f2)
          throw Error(p$5(301));
        f2 += 1;
        P$1 = O$2 = null;
        b2.updateQueue = null;
        Ph.current = $h;
        a2 = c2(d2, e2);
      } while (Th);
    }
    Ph.current = ai;
    b2 = null !== O$2 && null !== O$2.next;
    Rh = 0;
    P$1 = O$2 = N$1 = null;
    Sh = false;
    if (b2)
      throw Error(p$5(300));
    return a2;
  }
  function bi() {
    var a2 = 0 !== Uh;
    Uh = 0;
    return a2;
  }
  function ci() {
    var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    null === P$1 ? N$1.memoizedState = P$1 = a2 : P$1 = P$1.next = a2;
    return P$1;
  }
  function di() {
    if (null === O$2) {
      var a2 = N$1.alternate;
      a2 = null !== a2 ? a2.memoizedState : null;
    } else
      a2 = O$2.next;
    var b2 = null === P$1 ? N$1.memoizedState : P$1.next;
    if (null !== b2)
      P$1 = b2, O$2 = a2;
    else {
      if (null === a2)
        throw Error(p$5(310));
      O$2 = a2;
      a2 = { memoizedState: O$2.memoizedState, baseState: O$2.baseState, baseQueue: O$2.baseQueue, queue: O$2.queue, next: null };
      null === P$1 ? N$1.memoizedState = P$1 = a2 : P$1 = P$1.next = a2;
    }
    return P$1;
  }
  function ei(a2, b2) {
    return "function" === typeof b2 ? b2(a2) : b2;
  }
  function fi(a2) {
    var b2 = di(), c2 = b2.queue;
    if (null === c2)
      throw Error(p$5(311));
    c2.lastRenderedReducer = a2;
    var d2 = O$2, e2 = d2.baseQueue, f2 = c2.pending;
    if (null !== f2) {
      if (null !== e2) {
        var g2 = e2.next;
        e2.next = f2.next;
        f2.next = g2;
      }
      d2.baseQueue = e2 = f2;
      c2.pending = null;
    }
    if (null !== e2) {
      f2 = e2.next;
      d2 = d2.baseState;
      var h2 = g2 = null, k2 = null, l2 = f2;
      do {
        var m2 = l2.lane;
        if ((Rh & m2) === m2)
          null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a2(d2, l2.action);
        else {
          var q2 = {
            lane: m2,
            action: l2.action,
            hasEagerState: l2.hasEagerState,
            eagerState: l2.eagerState,
            next: null
          };
          null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
          N$1.lanes |= m2;
          hh |= m2;
        }
        l2 = l2.next;
      } while (null !== l2 && l2 !== f2);
      null === k2 ? g2 = d2 : k2.next = h2;
      He$2(d2, b2.memoizedState) || (Ug = true);
      b2.memoizedState = d2;
      b2.baseState = g2;
      b2.baseQueue = k2;
      c2.lastRenderedState = d2;
    }
    a2 = c2.interleaved;
    if (null !== a2) {
      e2 = a2;
      do
        f2 = e2.lane, N$1.lanes |= f2, hh |= f2, e2 = e2.next;
      while (e2 !== a2);
    } else
      null === e2 && (c2.lanes = 0);
    return [b2.memoizedState, c2.dispatch];
  }
  function gi(a2) {
    var b2 = di(), c2 = b2.queue;
    if (null === c2)
      throw Error(p$5(311));
    c2.lastRenderedReducer = a2;
    var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
    if (null !== e2) {
      c2.pending = null;
      var g2 = e2 = e2.next;
      do
        f2 = a2(f2, g2.action), g2 = g2.next;
      while (g2 !== e2);
      He$2(f2, b2.memoizedState) || (Ug = true);
      b2.memoizedState = f2;
      null === b2.baseQueue && (b2.baseState = f2);
      c2.lastRenderedState = f2;
    }
    return [f2, d2];
  }
  function hi() {
  }
  function ii(a2, b2) {
    var c2 = N$1, d2 = di(), e2 = b2(), f2 = !He$2(d2.memoizedState, e2);
    f2 && (d2.memoizedState = e2, Ug = true);
    d2 = d2.queue;
    ji(ki.bind(null, c2, d2, a2), [a2]);
    if (d2.getSnapshot !== b2 || f2 || null !== P$1 && P$1.memoizedState.tag & 1) {
      c2.flags |= 2048;
      li(9, mi.bind(null, c2, d2, e2, b2), void 0, null);
      if (null === R$2)
        throw Error(p$5(349));
      0 !== (Rh & 30) || ni(c2, b2, e2);
    }
    return e2;
  }
  function ni(a2, b2, c2) {
    a2.flags |= 16384;
    a2 = { getSnapshot: b2, value: c2 };
    b2 = N$1.updateQueue;
    null === b2 ? (b2 = { lastEffect: null, stores: null }, N$1.updateQueue = b2, b2.stores = [a2]) : (c2 = b2.stores, null === c2 ? b2.stores = [a2] : c2.push(a2));
  }
  function mi(a2, b2, c2, d2) {
    b2.value = c2;
    b2.getSnapshot = d2;
    oi(b2) && pi(a2);
  }
  function ki(a2, b2, c2) {
    return c2(function() {
      oi(b2) && pi(a2);
    });
  }
  function oi(a2) {
    var b2 = a2.getSnapshot;
    a2 = a2.value;
    try {
      var c2 = b2();
      return !He$2(a2, c2);
    } catch (d2) {
      return true;
    }
  }
  function pi(a2) {
    var b2 = Zg(a2, 1);
    null !== b2 && mh(b2, a2, 1, -1);
  }
  function qi(a2) {
    var b2 = ci();
    "function" === typeof a2 && (a2 = a2());
    b2.memoizedState = b2.baseState = a2;
    a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a2 };
    b2.queue = a2;
    a2 = a2.dispatch = ri.bind(null, N$1, a2);
    return [b2.memoizedState, a2];
  }
  function li(a2, b2, c2, d2) {
    a2 = { tag: a2, create: b2, destroy: c2, deps: d2, next: null };
    b2 = N$1.updateQueue;
    null === b2 ? (b2 = { lastEffect: null, stores: null }, N$1.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b2.lastEffect = a2));
    return a2;
  }
  function si() {
    return di().memoizedState;
  }
  function ti(a2, b2, c2, d2) {
    var e2 = ci();
    N$1.flags |= a2;
    e2.memoizedState = li(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
  }
  function ui(a2, b2, c2, d2) {
    var e2 = di();
    d2 = void 0 === d2 ? null : d2;
    var f2 = void 0;
    if (null !== O$2) {
      var g2 = O$2.memoizedState;
      f2 = g2.destroy;
      if (null !== d2 && Wh(d2, g2.deps)) {
        e2.memoizedState = li(b2, c2, f2, d2);
        return;
      }
    }
    N$1.flags |= a2;
    e2.memoizedState = li(1 | b2, c2, f2, d2);
  }
  function vi(a2, b2) {
    return ti(8390656, 8, a2, b2);
  }
  function ji(a2, b2) {
    return ui(2048, 8, a2, b2);
  }
  function wi(a2, b2) {
    return ui(4, 2, a2, b2);
  }
  function xi(a2, b2) {
    return ui(4, 4, a2, b2);
  }
  function yi(a2, b2) {
    if ("function" === typeof b2)
      return a2 = a2(), b2(a2), function() {
        b2(null);
      };
    if (null !== b2 && void 0 !== b2)
      return a2 = a2(), b2.current = a2, function() {
        b2.current = null;
      };
  }
  function zi(a2, b2, c2) {
    c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
    return ui(4, 4, yi.bind(null, b2, a2), c2);
  }
  function Ai() {
  }
  function Bi(a2, b2) {
    var c2 = di();
    b2 = void 0 === b2 ? null : b2;
    var d2 = c2.memoizedState;
    if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
      return d2[0];
    c2.memoizedState = [a2, b2];
    return a2;
  }
  function Ci(a2, b2) {
    var c2 = di();
    b2 = void 0 === b2 ? null : b2;
    var d2 = c2.memoizedState;
    if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
      return d2[0];
    a2 = a2();
    c2.memoizedState = [a2, b2];
    return a2;
  }
  function Di(a2, b2, c2) {
    if (0 === (Rh & 21))
      return a2.baseState && (a2.baseState = false, Ug = true), a2.memoizedState = c2;
    He$2(c2, b2) || (c2 = yc(), N$1.lanes |= c2, hh |= c2, a2.baseState = true);
    return b2;
  }
  function Ei(a2, b2) {
    var c2 = C$3;
    C$3 = 0 !== c2 && 4 > c2 ? c2 : 4;
    a2(true);
    var d2 = Qh.transition;
    Qh.transition = {};
    try {
      a2(false), b2();
    } finally {
      C$3 = c2, Qh.transition = d2;
    }
  }
  function Fi() {
    return di().memoizedState;
  }
  function Gi(a2, b2, c2) {
    var d2 = lh(a2);
    c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
    if (Hi(a2))
      Ii(b2, c2);
    else if (c2 = Yg(a2, b2, c2, d2), null !== c2) {
      var e2 = L$4();
      mh(c2, a2, d2, e2);
      Ji(c2, b2, d2);
    }
  }
  function ri(a2, b2, c2) {
    var d2 = lh(a2), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
    if (Hi(a2))
      Ii(b2, e2);
    else {
      var f2 = a2.alternate;
      if (0 === a2.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2))
        try {
          var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
          e2.hasEagerState = true;
          e2.eagerState = h2;
          if (He$2(h2, g2)) {
            var k2 = b2.interleaved;
            null === k2 ? (e2.next = e2, Xg(b2)) : (e2.next = k2.next, k2.next = e2);
            b2.interleaved = e2;
            return;
          }
        } catch (l2) {
        } finally {
        }
      c2 = Yg(a2, b2, e2, d2);
      null !== c2 && (e2 = L$4(), mh(c2, a2, d2, e2), Ji(c2, b2, d2));
    }
  }
  function Hi(a2) {
    var b2 = a2.alternate;
    return a2 === N$1 || null !== b2 && b2 === N$1;
  }
  function Ii(a2, b2) {
    Th = Sh = true;
    var c2 = a2.pending;
    null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
    a2.pending = b2;
  }
  function Ji(a2, b2, c2) {
    if (0 !== (c2 & 4194240)) {
      var d2 = b2.lanes;
      d2 &= a2.pendingLanes;
      c2 |= d2;
      b2.lanes = c2;
      Cc(a2, c2);
    }
  }
  var ai = { readContext: Vg, useCallback: Q$3, useContext: Q$3, useEffect: Q$3, useImperativeHandle: Q$3, useInsertionEffect: Q$3, useLayoutEffect: Q$3, useMemo: Q$3, useReducer: Q$3, useRef: Q$3, useState: Q$3, useDebugValue: Q$3, useDeferredValue: Q$3, useTransition: Q$3, useMutableSource: Q$3, useSyncExternalStore: Q$3, useId: Q$3, unstable_isNewReconciler: false }, Yh = { readContext: Vg, useCallback: function(a2, b2) {
    ci().memoizedState = [a2, void 0 === b2 ? null : b2];
    return a2;
  }, useContext: Vg, useEffect: vi, useImperativeHandle: function(a2, b2, c2) {
    c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
    return ti(
      4194308,
      4,
      yi.bind(null, b2, a2),
      c2
    );
  }, useLayoutEffect: function(a2, b2) {
    return ti(4194308, 4, a2, b2);
  }, useInsertionEffect: function(a2, b2) {
    return ti(4, 2, a2, b2);
  }, useMemo: function(a2, b2) {
    var c2 = ci();
    b2 = void 0 === b2 ? null : b2;
    a2 = a2();
    c2.memoizedState = [a2, b2];
    return a2;
  }, useReducer: function(a2, b2, c2) {
    var d2 = ci();
    b2 = void 0 !== c2 ? c2(b2) : b2;
    d2.memoizedState = d2.baseState = b2;
    a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
    d2.queue = a2;
    a2 = a2.dispatch = Gi.bind(null, N$1, a2);
    return [d2.memoizedState, a2];
  }, useRef: function(a2) {
    var b2 = ci();
    a2 = { current: a2 };
    return b2.memoizedState = a2;
  }, useState: qi, useDebugValue: Ai, useDeferredValue: function(a2) {
    return ci().memoizedState = a2;
  }, useTransition: function() {
    var a2 = qi(false), b2 = a2[0];
    a2 = Ei.bind(null, a2[1]);
    ci().memoizedState = a2;
    return [b2, a2];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(a2, b2, c2) {
    var d2 = N$1, e2 = ci();
    if (I$3) {
      if (void 0 === c2)
        throw Error(p$5(407));
      c2 = c2();
    } else {
      c2 = b2();
      if (null === R$2)
        throw Error(p$5(349));
      0 !== (Rh & 30) || ni(d2, b2, c2);
    }
    e2.memoizedState = c2;
    var f2 = { value: c2, getSnapshot: b2 };
    e2.queue = f2;
    vi(ki.bind(
      null,
      d2,
      f2,
      a2
    ), [a2]);
    d2.flags |= 2048;
    li(9, mi.bind(null, d2, f2, c2, b2), void 0, null);
    return c2;
  }, useId: function() {
    var a2 = ci(), b2 = R$2.identifierPrefix;
    if (I$3) {
      var c2 = sg;
      var d2 = rg;
      c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
      b2 = ":" + b2 + "R" + c2;
      c2 = Uh++;
      0 < c2 && (b2 += "H" + c2.toString(32));
      b2 += ":";
    } else
      c2 = Vh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
    return a2.memoizedState = b2;
  }, unstable_isNewReconciler: false }, Zh = {
    readContext: Vg,
    useCallback: Bi,
    useContext: Vg,
    useEffect: ji,
    useImperativeHandle: zi,
    useInsertionEffect: wi,
    useLayoutEffect: xi,
    useMemo: Ci,
    useReducer: fi,
    useRef: si,
    useState: function() {
      return fi(ei);
    },
    useDebugValue: Ai,
    useDeferredValue: function(a2) {
      var b2 = di();
      return Di(b2, O$2.memoizedState, a2);
    },
    useTransition: function() {
      var a2 = fi(ei)[0], b2 = di().memoizedState;
      return [a2, b2];
    },
    useMutableSource: hi,
    useSyncExternalStore: ii,
    useId: Fi,
    unstable_isNewReconciler: false
  }, $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
    return gi(ei);
  }, useDebugValue: Ai, useDeferredValue: function(a2) {
    var b2 = di();
    return null === O$2 ? b2.memoizedState = a2 : Di(b2, O$2.memoizedState, a2);
  }, useTransition: function() {
    var a2 = gi(ei)[0], b2 = di().memoizedState;
    return [a2, b2];
  }, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
  function Ki(a2, b2) {
    try {
      var c2 = "", d2 = b2;
      do
        c2 += Pa(d2), d2 = d2.return;
      while (d2);
      var e2 = c2;
    } catch (f2) {
      e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
    }
    return { value: a2, source: b2, stack: e2, digest: null };
  }
  function Li(a2, b2, c2) {
    return { value: a2, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
  }
  function Mi(a2, b2) {
    try {
      console.error(b2.value);
    } catch (c2) {
      setTimeout(function() {
        throw c2;
      });
    }
  }
  var Ni = "function" === typeof WeakMap ? WeakMap : Map;
  function Oi(a2, b2, c2) {
    c2 = ch(-1, c2);
    c2.tag = 3;
    c2.payload = { element: null };
    var d2 = b2.value;
    c2.callback = function() {
      Pi || (Pi = true, Qi = d2);
      Mi(a2, b2);
    };
    return c2;
  }
  function Ri(a2, b2, c2) {
    c2 = ch(-1, c2);
    c2.tag = 3;
    var d2 = a2.type.getDerivedStateFromError;
    if ("function" === typeof d2) {
      var e2 = b2.value;
      c2.payload = function() {
        return d2(e2);
      };
      c2.callback = function() {
        Mi(a2, b2);
      };
    }
    var f2 = a2.stateNode;
    null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
      Mi(a2, b2);
      "function" !== typeof d2 && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
      var c3 = b2.stack;
      this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
    });
    return c2;
  }
  function Ti(a2, b2, c2) {
    var d2 = a2.pingCache;
    if (null === d2) {
      d2 = a2.pingCache = new Ni();
      var e2 = /* @__PURE__ */ new Set();
      d2.set(b2, e2);
    } else
      e2 = d2.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
    e2.has(c2) || (e2.add(c2), a2 = Ui.bind(null, a2, b2, c2), b2.then(a2, a2));
  }
  function Vi(a2) {
    do {
      var b2;
      if (b2 = 13 === a2.tag)
        b2 = a2.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
      if (b2)
        return a2;
      a2 = a2.return;
    } while (null !== a2);
    return null;
  }
  function Wi(a2, b2, c2, d2, e2) {
    if (0 === (a2.mode & 1))
      return a2 === b2 ? a2.flags |= 65536 : (a2.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = ch(-1, 1), b2.tag = 2, dh(c2, b2, 1))), c2.lanes |= 1), a2;
    a2.flags |= 65536;
    a2.lanes = e2;
    return a2;
  }
  var Xi = ua.ReactCurrentOwner, Ug = false;
  function Yi(a2, b2, c2, d2) {
    b2.child = null === a2 ? Ch(b2, null, c2, d2) : Bh(b2, a2.child, c2, d2);
  }
  function Zi(a2, b2, c2, d2, e2) {
    c2 = c2.render;
    var f2 = b2.ref;
    Tg(b2, e2);
    d2 = Xh(a2, b2, c2, d2, f2, e2);
    c2 = bi();
    if (null !== a2 && !Ug)
      return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, $i(a2, b2, e2);
    I$3 && c2 && vg(b2);
    b2.flags |= 1;
    Yi(a2, b2, d2, e2);
    return b2.child;
  }
  function aj(a2, b2, c2, d2, e2) {
    if (null === a2) {
      var f2 = c2.type;
      if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps)
        return b2.tag = 15, b2.type = f2, cj(a2, b2, f2, d2, e2);
      a2 = yh(c2.type, null, d2, b2, b2.mode, e2);
      a2.ref = b2.ref;
      a2.return = b2;
      return b2.child = a2;
    }
    f2 = a2.child;
    if (0 === (a2.lanes & e2)) {
      var g2 = f2.memoizedProps;
      c2 = c2.compare;
      c2 = null !== c2 ? c2 : Ie$1;
      if (c2(g2, d2) && a2.ref === b2.ref)
        return $i(a2, b2, e2);
    }
    b2.flags |= 1;
    a2 = wh(f2, d2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  function cj(a2, b2, c2, d2, e2) {
    if (null !== a2) {
      var f2 = a2.memoizedProps;
      if (Ie$1(f2, d2) && a2.ref === b2.ref)
        if (Ug = false, b2.pendingProps = d2 = f2, 0 !== (a2.lanes & e2))
          0 !== (a2.flags & 131072) && (Ug = true);
        else
          return b2.lanes = a2.lanes, $i(a2, b2, e2);
    }
    return dj(a2, b2, c2, d2, e2);
  }
  function ej(a2, b2, c2) {
    var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a2 ? a2.memoizedState : null;
    if ("hidden" === d2.mode)
      if (0 === (b2.mode & 1))
        b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G$1(fj, gj), gj |= c2;
      else {
        if (0 === (c2 & 1073741824))
          return a2 = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2, cachePool: null, transitions: null }, b2.updateQueue = null, G$1(fj, gj), gj |= a2, null;
        b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
        d2 = null !== f2 ? f2.baseLanes : c2;
        G$1(fj, gj);
        gj |= d2;
      }
    else
      null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G$1(fj, gj), gj |= d2;
    Yi(a2, b2, e2, c2);
    return b2.child;
  }
  function hj(a2, b2) {
    var c2 = b2.ref;
    if (null === a2 && null !== c2 || null !== a2 && a2.ref !== c2)
      b2.flags |= 512, b2.flags |= 2097152;
  }
  function dj(a2, b2, c2, d2, e2) {
    var f2 = Zf(c2) ? Xf : H$3.current;
    f2 = Yf(b2, f2);
    Tg(b2, e2);
    c2 = Xh(a2, b2, c2, d2, f2, e2);
    d2 = bi();
    if (null !== a2 && !Ug)
      return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, $i(a2, b2, e2);
    I$3 && d2 && vg(b2);
    b2.flags |= 1;
    Yi(a2, b2, c2, e2);
    return b2.child;
  }
  function ij(a2, b2, c2, d2, e2) {
    if (Zf(c2)) {
      var f2 = true;
      cg(b2);
    } else
      f2 = false;
    Tg(b2, e2);
    if (null === b2.stateNode)
      jj(a2, b2), ph(b2, c2, d2), rh(b2, c2, d2, e2), d2 = true;
    else if (null === a2) {
      var g2 = b2.stateNode, h2 = b2.memoizedProps;
      g2.props = h2;
      var k2 = g2.context, l2 = c2.contextType;
      "object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c2) ? Xf : H$3.current, l2 = Yf(b2, l2));
      var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
      q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && qh(b2, g2, d2, l2);
      $g = false;
      var r2 = b2.memoizedState;
      g2.state = r2;
      gh(b2, d2, g2, e2);
      k2 = b2.memoizedState;
      h2 !== d2 || r2 !== k2 || Wf.current || $g ? ("function" === typeof m2 && (kh(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = $g || oh(b2, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
    } else {
      g2 = b2.stateNode;
      bh(a2, b2);
      h2 = b2.memoizedProps;
      l2 = b2.type === b2.elementType ? h2 : Lg(b2.type, h2);
      g2.props = l2;
      q2 = b2.pendingProps;
      r2 = g2.context;
      k2 = c2.contextType;
      "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c2) ? Xf : H$3.current, k2 = Yf(b2, k2));
      var y2 = c2.getDerivedStateFromProps;
      (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && qh(b2, g2, d2, k2);
      $g = false;
      r2 = b2.memoizedState;
      g2.state = r2;
      gh(b2, d2, g2, e2);
      var n2 = b2.memoizedState;
      h2 !== q2 || r2 !== n2 || Wf.current || $g ? ("function" === typeof y2 && (kh(b2, c2, y2, d2), n2 = b2.memoizedState), (l2 = $g || oh(b2, c2, l2, d2, r2, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), d2 = false);
    }
    return kj(a2, b2, c2, d2, f2, e2);
  }
  function kj(a2, b2, c2, d2, e2, f2) {
    hj(a2, b2);
    var g2 = 0 !== (b2.flags & 128);
    if (!d2 && !g2)
      return e2 && dg(b2, c2, false), $i(a2, b2, f2);
    d2 = b2.stateNode;
    Xi.current = b2;
    var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
    b2.flags |= 1;
    null !== a2 && g2 ? (b2.child = Bh(b2, a2.child, null, f2), b2.child = Bh(b2, null, h2, f2)) : Yi(a2, b2, h2, f2);
    b2.memoizedState = d2.state;
    e2 && dg(b2, c2, true);
    return b2.child;
  }
  function lj(a2) {
    var b2 = a2.stateNode;
    b2.pendingContext ? ag(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a2, b2.context, false);
    Ih(a2, b2.containerInfo);
  }
  function mj(a2, b2, c2, d2, e2) {
    Ig();
    Jg(e2);
    b2.flags |= 256;
    Yi(a2, b2, c2, d2);
    return b2.child;
  }
  var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
  function oj(a2) {
    return { baseLanes: a2, cachePool: null, transitions: null };
  }
  function pj(a2, b2, c2) {
    var d2 = b2.pendingProps, e2 = M$1.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
    (h2 = g2) || (h2 = null !== a2 && null === a2.memoizedState ? false : 0 !== (e2 & 2));
    if (h2)
      f2 = true, b2.flags &= -129;
    else if (null === a2 || null !== a2.memoizedState)
      e2 |= 1;
    G$1(M$1, e2 & 1);
    if (null === a2) {
      Eg(b2);
      a2 = b2.memoizedState;
      if (null !== a2 && (a2 = a2.dehydrated, null !== a2))
        return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a2.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
      g2 = d2.children;
      a2 = d2.fallback;
      return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = qj(g2, d2, 0, null), a2 = Ah(a2, d2, c2, null), f2.return = b2, a2.return = b2, f2.sibling = a2, b2.child = f2, b2.child.memoizedState = oj(c2), b2.memoizedState = nj, a2) : rj(b2, g2);
    }
    e2 = a2.memoizedState;
    if (null !== e2 && (h2 = e2.dehydrated, null !== h2))
      return sj(a2, b2, g2, d2, h2, e2, c2);
    if (f2) {
      f2 = d2.fallback;
      g2 = b2.mode;
      e2 = a2.child;
      h2 = e2.sibling;
      var k2 = { mode: "hidden", children: d2.children };
      0 === (g2 & 1) && b2.child !== e2 ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = wh(e2, k2), d2.subtreeFlags = e2.subtreeFlags & 14680064);
      null !== h2 ? f2 = wh(h2, f2) : (f2 = Ah(f2, g2, c2, null), f2.flags |= 2);
      f2.return = b2;
      d2.return = b2;
      d2.sibling = f2;
      b2.child = d2;
      d2 = f2;
      f2 = b2.child;
      g2 = a2.child.memoizedState;
      g2 = null === g2 ? oj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
      f2.memoizedState = g2;
      f2.childLanes = a2.childLanes & ~c2;
      b2.memoizedState = nj;
      return d2;
    }
    f2 = a2.child;
    a2 = f2.sibling;
    d2 = wh(f2, { mode: "visible", children: d2.children });
    0 === (b2.mode & 1) && (d2.lanes = c2);
    d2.return = b2;
    d2.sibling = null;
    null !== a2 && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a2], b2.flags |= 16) : c2.push(a2));
    b2.child = d2;
    b2.memoizedState = null;
    return d2;
  }
  function rj(a2, b2) {
    b2 = qj({ mode: "visible", children: b2 }, a2.mode, 0, null);
    b2.return = a2;
    return a2.child = b2;
  }
  function tj(a2, b2, c2, d2) {
    null !== d2 && Jg(d2);
    Bh(b2, a2.child, null, c2);
    a2 = rj(b2, b2.pendingProps.children);
    a2.flags |= 2;
    b2.memoizedState = null;
    return a2;
  }
  function sj(a2, b2, c2, d2, e2, f2, g2) {
    if (c2) {
      if (b2.flags & 256)
        return b2.flags &= -257, d2 = Li(Error(p$5(422))), tj(a2, b2, g2, d2);
      if (null !== b2.memoizedState)
        return b2.child = a2.child, b2.flags |= 128, null;
      f2 = d2.fallback;
      e2 = b2.mode;
      d2 = qj({ mode: "visible", children: d2.children }, e2, 0, null);
      f2 = Ah(f2, e2, g2, null);
      f2.flags |= 2;
      d2.return = b2;
      f2.return = b2;
      d2.sibling = f2;
      b2.child = d2;
      0 !== (b2.mode & 1) && Bh(b2, a2.child, null, g2);
      b2.child.memoizedState = oj(g2);
      b2.memoizedState = nj;
      return f2;
    }
    if (0 === (b2.mode & 1))
      return tj(a2, b2, g2, null);
    if ("$!" === e2.data) {
      d2 = e2.nextSibling && e2.nextSibling.dataset;
      if (d2)
        var h2 = d2.dgst;
      d2 = h2;
      f2 = Error(p$5(419));
      d2 = Li(f2, d2, void 0);
      return tj(a2, b2, g2, d2);
    }
    h2 = 0 !== (g2 & a2.childLanes);
    if (Ug || h2) {
      d2 = R$2;
      if (null !== d2) {
        switch (g2 & -g2) {
          case 4:
            e2 = 2;
            break;
          case 16:
            e2 = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            e2 = 32;
            break;
          case 536870912:
            e2 = 268435456;
            break;
          default:
            e2 = 0;
        }
        e2 = 0 !== (e2 & (d2.suspendedLanes | g2)) ? 0 : e2;
        0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, Zg(a2, e2), mh(d2, a2, e2, -1));
      }
      uj();
      d2 = Li(Error(p$5(421)));
      return tj(a2, b2, g2, d2);
    }
    if ("$?" === e2.data)
      return b2.flags |= 128, b2.child = a2.child, b2 = vj.bind(null, a2), e2._reactRetry = b2, null;
    a2 = f2.treeContext;
    yg = Lf(e2.nextSibling);
    xg = b2;
    I$3 = true;
    zg = null;
    null !== a2 && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a2.id, sg = a2.overflow, qg = b2);
    b2 = rj(b2, d2.children);
    b2.flags |= 4096;
    return b2;
  }
  function wj(a2, b2, c2) {
    a2.lanes |= b2;
    var d2 = a2.alternate;
    null !== d2 && (d2.lanes |= b2);
    Sg(a2.return, b2, c2);
  }
  function xj(a2, b2, c2, d2, e2) {
    var f2 = a2.memoizedState;
    null === f2 ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
  }
  function yj(a2, b2, c2) {
    var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
    Yi(a2, b2, d2.children, c2);
    d2 = M$1.current;
    if (0 !== (d2 & 2))
      d2 = d2 & 1 | 2, b2.flags |= 128;
    else {
      if (null !== a2 && 0 !== (a2.flags & 128))
        a:
          for (a2 = b2.child; null !== a2; ) {
            if (13 === a2.tag)
              null !== a2.memoizedState && wj(a2, c2, b2);
            else if (19 === a2.tag)
              wj(a2, c2, b2);
            else if (null !== a2.child) {
              a2.child.return = a2;
              a2 = a2.child;
              continue;
            }
            if (a2 === b2)
              break a;
            for (; null === a2.sibling; ) {
              if (null === a2.return || a2.return === b2)
                break a;
              a2 = a2.return;
            }
            a2.sibling.return = a2.return;
            a2 = a2.sibling;
          }
      d2 &= 1;
    }
    G$1(M$1, d2);
    if (0 === (b2.mode & 1))
      b2.memoizedState = null;
    else
      switch (e2) {
        case "forwards":
          c2 = b2.child;
          for (e2 = null; null !== c2; )
            a2 = c2.alternate, null !== a2 && null === Mh(a2) && (e2 = c2), c2 = c2.sibling;
          c2 = e2;
          null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
          xj(b2, false, e2, c2, f2);
          break;
        case "backwards":
          c2 = null;
          e2 = b2.child;
          for (b2.child = null; null !== e2; ) {
            a2 = e2.alternate;
            if (null !== a2 && null === Mh(a2)) {
              b2.child = e2;
              break;
            }
            a2 = e2.sibling;
            e2.sibling = c2;
            c2 = e2;
            e2 = a2;
          }
          xj(b2, true, c2, null, f2);
          break;
        case "together":
          xj(b2, false, null, null, void 0);
          break;
        default:
          b2.memoizedState = null;
      }
    return b2.child;
  }
  function jj(a2, b2) {
    0 === (b2.mode & 1) && null !== a2 && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
  }
  function $i(a2, b2, c2) {
    null !== a2 && (b2.dependencies = a2.dependencies);
    hh |= b2.lanes;
    if (0 === (c2 & b2.childLanes))
      return null;
    if (null !== a2 && b2.child !== a2.child)
      throw Error(p$5(153));
    if (null !== b2.child) {
      a2 = b2.child;
      c2 = wh(a2, a2.pendingProps);
      b2.child = c2;
      for (c2.return = b2; null !== a2.sibling; )
        a2 = a2.sibling, c2 = c2.sibling = wh(a2, a2.pendingProps), c2.return = b2;
      c2.sibling = null;
    }
    return b2.child;
  }
  function zj(a2, b2, c2) {
    switch (b2.tag) {
      case 3:
        lj(b2);
        Ig();
        break;
      case 5:
        Kh(b2);
        break;
      case 1:
        Zf(b2.type) && cg(b2);
        break;
      case 4:
        Ih(b2, b2.stateNode.containerInfo);
        break;
      case 10:
        var d2 = b2.type._context, e2 = b2.memoizedProps.value;
        G$1(Mg, d2._currentValue);
        d2._currentValue = e2;
        break;
      case 13:
        d2 = b2.memoizedState;
        if (null !== d2) {
          if (null !== d2.dehydrated)
            return G$1(M$1, M$1.current & 1), b2.flags |= 128, null;
          if (0 !== (c2 & b2.child.childLanes))
            return pj(a2, b2, c2);
          G$1(M$1, M$1.current & 1);
          a2 = $i(a2, b2, c2);
          return null !== a2 ? a2.sibling : null;
        }
        G$1(M$1, M$1.current & 1);
        break;
      case 19:
        d2 = 0 !== (c2 & b2.childLanes);
        if (0 !== (a2.flags & 128)) {
          if (d2)
            return yj(a2, b2, c2);
          b2.flags |= 128;
        }
        e2 = b2.memoizedState;
        null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
        G$1(M$1, M$1.current);
        if (d2)
          break;
        else
          return null;
      case 22:
      case 23:
        return b2.lanes = 0, ej(a2, b2, c2);
    }
    return $i(a2, b2, c2);
  }
  var Aj, Bj, Cj, Dj;
  Aj = function(a2, b2) {
    for (var c2 = b2.child; null !== c2; ) {
      if (5 === c2.tag || 6 === c2.tag)
        a2.appendChild(c2.stateNode);
      else if (4 !== c2.tag && null !== c2.child) {
        c2.child.return = c2;
        c2 = c2.child;
        continue;
      }
      if (c2 === b2)
        break;
      for (; null === c2.sibling; ) {
        if (null === c2.return || c2.return === b2)
          return;
        c2 = c2.return;
      }
      c2.sibling.return = c2.return;
      c2 = c2.sibling;
    }
  };
  Bj = function() {
  };
  Cj = function(a2, b2, c2, d2) {
    var e2 = a2.memoizedProps;
    if (e2 !== d2) {
      a2 = b2.stateNode;
      Hh(Eh.current);
      var f2 = null;
      switch (c2) {
        case "input":
          e2 = Ya(a2, e2);
          d2 = Ya(a2, d2);
          f2 = [];
          break;
        case "select":
          e2 = A$3({}, e2, { value: void 0 });
          d2 = A$3({}, d2, { value: void 0 });
          f2 = [];
          break;
        case "textarea":
          e2 = gb(a2, e2);
          d2 = gb(a2, d2);
          f2 = [];
          break;
        default:
          "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a2.onclick = Bf);
      }
      ub(c2, d2);
      var g2;
      c2 = null;
      for (l2 in e2)
        if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2])
          if ("style" === l2) {
            var h2 = e2[l2];
            for (g2 in h2)
              h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
          } else
            "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
      for (l2 in d2) {
        var k2 = d2[l2];
        h2 = null != e2 ? e2[l2] : void 0;
        if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2))
          if ("style" === l2)
            if (h2) {
              for (g2 in h2)
                !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
              for (g2 in k2)
                k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
            } else
              c2 || (f2 || (f2 = []), f2.push(
                l2,
                c2
              )), c2 = k2;
          else
            "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D$4("scroll", a2), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
      }
      c2 && (f2 = f2 || []).push("style", c2);
      var l2 = f2;
      if (b2.updateQueue = l2)
        b2.flags |= 4;
    }
  };
  Dj = function(a2, b2, c2, d2) {
    c2 !== d2 && (b2.flags |= 4);
  };
  function Ej(a2, b2) {
    if (!I$3)
      switch (a2.tailMode) {
        case "hidden":
          b2 = a2.tail;
          for (var c2 = null; null !== b2; )
            null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
          null === c2 ? a2.tail = null : c2.sibling = null;
          break;
        case "collapsed":
          c2 = a2.tail;
          for (var d2 = null; null !== c2; )
            null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
          null === d2 ? b2 || null === a2.tail ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
      }
  }
  function S$2(a2) {
    var b2 = null !== a2.alternate && a2.alternate.child === a2.child, c2 = 0, d2 = 0;
    if (b2)
      for (var e2 = a2.child; null !== e2; )
        c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a2, e2 = e2.sibling;
    else
      for (e2 = a2.child; null !== e2; )
        c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a2, e2 = e2.sibling;
    a2.subtreeFlags |= d2;
    a2.childLanes = c2;
    return b2;
  }
  function Fj(a2, b2, c2) {
    var d2 = b2.pendingProps;
    wg(b2);
    switch (b2.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return S$2(b2), null;
      case 1:
        return Zf(b2.type) && $f(), S$2(b2), null;
      case 3:
        d2 = b2.stateNode;
        Jh();
        E$3(Wf);
        E$3(H$3);
        Oh();
        d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
        if (null === a2 || null === a2.child)
          Gg(b2) ? b2.flags |= 4 : null === a2 || a2.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Gj(zg), zg = null));
        Bj(a2, b2);
        S$2(b2);
        return null;
      case 5:
        Lh(b2);
        var e2 = Hh(Gh.current);
        c2 = b2.type;
        if (null !== a2 && null != b2.stateNode)
          Cj(a2, b2, c2, d2, e2), a2.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
        else {
          if (!d2) {
            if (null === b2.stateNode)
              throw Error(p$5(166));
            S$2(b2);
            return null;
          }
          a2 = Hh(Eh.current);
          if (Gg(b2)) {
            d2 = b2.stateNode;
            c2 = b2.type;
            var f2 = b2.memoizedProps;
            d2[Of] = b2;
            d2[Pf] = f2;
            a2 = 0 !== (b2.mode & 1);
            switch (c2) {
              case "dialog":
                D$4("cancel", d2);
                D$4("close", d2);
                break;
              case "iframe":
              case "object":
              case "embed":
                D$4("load", d2);
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < lf.length; e2++)
                  D$4(lf[e2], d2);
                break;
              case "source":
                D$4("error", d2);
                break;
              case "img":
              case "image":
              case "link":
                D$4(
                  "error",
                  d2
                );
                D$4("load", d2);
                break;
              case "details":
                D$4("toggle", d2);
                break;
              case "input":
                Za(d2, f2);
                D$4("invalid", d2);
                break;
              case "select":
                d2._wrapperState = { wasMultiple: !!f2.multiple };
                D$4("invalid", d2);
                break;
              case "textarea":
                hb(d2, f2), D$4("invalid", d2);
            }
            ub(c2, f2);
            e2 = null;
            for (var g2 in f2)
              if (f2.hasOwnProperty(g2)) {
                var h2 = f2[g2];
                "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a2), e2 = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                  d2.textContent,
                  h2,
                  a2
                ), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D$4("scroll", d2);
              }
            switch (c2) {
              case "input":
                Va(d2);
                db(d2, f2, true);
                break;
              case "textarea":
                Va(d2);
                jb(d2);
                break;
              case "select":
              case "option":
                break;
              default:
                "function" === typeof f2.onClick && (d2.onclick = Bf);
            }
            d2 = e2;
            b2.updateQueue = d2;
            null !== d2 && (b2.flags |= 4);
          } else {
            g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
            "http://www.w3.org/1999/xhtml" === a2 && (a2 = kb(c2));
            "http://www.w3.org/1999/xhtml" === a2 ? "script" === c2 ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : "string" === typeof d2.is ? a2 = g2.createElement(c2, { is: d2.is }) : (a2 = g2.createElement(c2), "select" === c2 && (g2 = a2, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a2 = g2.createElementNS(a2, c2);
            a2[Of] = b2;
            a2[Pf] = d2;
            Aj(a2, b2, false, false);
            b2.stateNode = a2;
            a: {
              g2 = vb(c2, d2);
              switch (c2) {
                case "dialog":
                  D$4("cancel", a2);
                  D$4("close", a2);
                  e2 = d2;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D$4("load", a2);
                  e2 = d2;
                  break;
                case "video":
                case "audio":
                  for (e2 = 0; e2 < lf.length; e2++)
                    D$4(lf[e2], a2);
                  e2 = d2;
                  break;
                case "source":
                  D$4("error", a2);
                  e2 = d2;
                  break;
                case "img":
                case "image":
                case "link":
                  D$4(
                    "error",
                    a2
                  );
                  D$4("load", a2);
                  e2 = d2;
                  break;
                case "details":
                  D$4("toggle", a2);
                  e2 = d2;
                  break;
                case "input":
                  Za(a2, d2);
                  e2 = Ya(a2, d2);
                  D$4("invalid", a2);
                  break;
                case "option":
                  e2 = d2;
                  break;
                case "select":
                  a2._wrapperState = { wasMultiple: !!d2.multiple };
                  e2 = A$3({}, d2, { value: void 0 });
                  D$4("invalid", a2);
                  break;
                case "textarea":
                  hb(a2, d2);
                  e2 = gb(a2, d2);
                  D$4("invalid", a2);
                  break;
                default:
                  e2 = d2;
              }
              ub(c2, e2);
              h2 = e2;
              for (f2 in h2)
                if (h2.hasOwnProperty(f2)) {
                  var k2 = h2[f2];
                  "style" === f2 ? sb(a2, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a2, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a2, k2) : "number" === typeof k2 && ob(a2, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D$4("scroll", a2) : null != k2 && ta(a2, f2, k2, g2));
                }
              switch (c2) {
                case "input":
                  Va(a2);
                  db(a2, d2, false);
                  break;
                case "textarea":
                  Va(a2);
                  jb(a2);
                  break;
                case "option":
                  null != d2.value && a2.setAttribute("value", "" + Sa(d2.value));
                  break;
                case "select":
                  a2.multiple = !!d2.multiple;
                  f2 = d2.value;
                  null != f2 ? fb(a2, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                    a2,
                    !!d2.multiple,
                    d2.defaultValue,
                    true
                  );
                  break;
                default:
                  "function" === typeof e2.onClick && (a2.onclick = Bf);
              }
              switch (c2) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  d2 = !!d2.autoFocus;
                  break a;
                case "img":
                  d2 = true;
                  break a;
                default:
                  d2 = false;
              }
            }
            d2 && (b2.flags |= 4);
          }
          null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
        }
        S$2(b2);
        return null;
      case 6:
        if (a2 && null != b2.stateNode)
          Dj(a2, b2, a2.memoizedProps, d2);
        else {
          if ("string" !== typeof d2 && null === b2.stateNode)
            throw Error(p$5(166));
          c2 = Hh(Gh.current);
          Hh(Eh.current);
          if (Gg(b2)) {
            d2 = b2.stateNode;
            c2 = b2.memoizedProps;
            d2[Of] = b2;
            if (f2 = d2.nodeValue !== c2) {
              if (a2 = xg, null !== a2)
                switch (a2.tag) {
                  case 3:
                    Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
                    break;
                  case 5:
                    true !== a2.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
                }
            }
            f2 && (b2.flags |= 4);
          } else
            d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
        }
        S$2(b2);
        return null;
      case 13:
        E$3(M$1);
        d2 = b2.memoizedState;
        if (null === a2 || null !== a2.memoizedState && null !== a2.memoizedState.dehydrated) {
          if (I$3 && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128))
            Hg(), Ig(), b2.flags |= 98560, f2 = false;
          else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
            if (null === a2) {
              if (!f2)
                throw Error(p$5(318));
              f2 = b2.memoizedState;
              f2 = null !== f2 ? f2.dehydrated : null;
              if (!f2)
                throw Error(p$5(317));
              f2[Of] = b2;
            } else
              Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
            S$2(b2);
            f2 = false;
          } else
            null !== zg && (Gj(zg), zg = null), f2 = true;
          if (!f2)
            return b2.flags & 65536 ? b2 : null;
        }
        if (0 !== (b2.flags & 128))
          return b2.lanes = c2, b2;
        d2 = null !== d2;
        d2 !== (null !== a2 && null !== a2.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a2 || 0 !== (M$1.current & 1) ? 0 === T$2 && (T$2 = 3) : uj()));
        null !== b2.updateQueue && (b2.flags |= 4);
        S$2(b2);
        return null;
      case 4:
        return Jh(), Bj(a2, b2), null === a2 && sf(b2.stateNode.containerInfo), S$2(b2), null;
      case 10:
        return Rg(b2.type._context), S$2(b2), null;
      case 17:
        return Zf(b2.type) && $f(), S$2(b2), null;
      case 19:
        E$3(M$1);
        f2 = b2.memoizedState;
        if (null === f2)
          return S$2(b2), null;
        d2 = 0 !== (b2.flags & 128);
        g2 = f2.rendering;
        if (null === g2)
          if (d2)
            Ej(f2, false);
          else {
            if (0 !== T$2 || null !== a2 && 0 !== (a2.flags & 128))
              for (a2 = b2.child; null !== a2; ) {
                g2 = Mh(a2);
                if (null !== g2) {
                  b2.flags |= 128;
                  Ej(f2, false);
                  d2 = g2.updateQueue;
                  null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
                  b2.subtreeFlags = 0;
                  d2 = c2;
                  for (c2 = b2.child; null !== c2; )
                    f2 = c2, a2 = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a2 = g2.dependencies, f2.dependencies = null === a2 ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
                  G$1(M$1, M$1.current & 1 | 2);
                  return b2.child;
                }
                a2 = a2.sibling;
              }
            null !== f2.tail && B$1() > Hj && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
          }
        else {
          if (!d2)
            if (a2 = Mh(g2), null !== a2) {
              if (b2.flags |= 128, d2 = true, c2 = a2.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I$3)
                return S$2(b2), null;
            } else
              2 * B$1() - f2.renderingStartTime > Hj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
          f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
        }
        if (null !== f2.tail)
          return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B$1(), b2.sibling = null, c2 = M$1.current, G$1(M$1, d2 ? c2 & 1 | 2 : c2 & 1), b2;
        S$2(b2);
        return null;
      case 22:
      case 23:
        return Ij(), d2 = null !== b2.memoizedState, null !== a2 && null !== a2.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (gj & 1073741824) && (S$2(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S$2(b2), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p$5(156, b2.tag));
  }
  function Jj(a2, b2) {
    wg(b2);
    switch (b2.tag) {
      case 1:
        return Zf(b2.type) && $f(), a2 = b2.flags, a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
      case 3:
        return Jh(), E$3(Wf), E$3(H$3), Oh(), a2 = b2.flags, 0 !== (a2 & 65536) && 0 === (a2 & 128) ? (b2.flags = a2 & -65537 | 128, b2) : null;
      case 5:
        return Lh(b2), null;
      case 13:
        E$3(M$1);
        a2 = b2.memoizedState;
        if (null !== a2 && null !== a2.dehydrated) {
          if (null === b2.alternate)
            throw Error(p$5(340));
          Ig();
        }
        a2 = b2.flags;
        return a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
      case 19:
        return E$3(M$1), null;
      case 4:
        return Jh(), null;
      case 10:
        return Rg(b2.type._context), null;
      case 22:
      case 23:
        return Ij(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Kj = false, U$1 = false, Lj = "function" === typeof WeakSet ? WeakSet : Set, V$3 = null;
  function Mj(a2, b2) {
    var c2 = a2.ref;
    if (null !== c2)
      if ("function" === typeof c2)
        try {
          c2(null);
        } catch (d2) {
          W$3(a2, b2, d2);
        }
      else
        c2.current = null;
  }
  function Nj(a2, b2, c2) {
    try {
      c2();
    } catch (d2) {
      W$3(a2, b2, d2);
    }
  }
  var Oj = false;
  function Pj(a2, b2) {
    Cf = dd;
    a2 = Me$1();
    if (Ne$2(a2)) {
      if ("selectionStart" in a2)
        var c2 = { start: a2.selectionStart, end: a2.selectionEnd };
      else
        a: {
          c2 = (c2 = a2.ownerDocument) && c2.defaultView || window;
          var d2 = c2.getSelection && c2.getSelection();
          if (d2 && 0 !== d2.rangeCount) {
            c2 = d2.anchorNode;
            var e2 = d2.anchorOffset, f2 = d2.focusNode;
            d2 = d2.focusOffset;
            try {
              c2.nodeType, f2.nodeType;
            } catch (F2) {
              c2 = null;
              break a;
            }
            var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a2, r2 = null;
            b:
              for (; ; ) {
                for (var y2; ; ) {
                  q2 !== c2 || 0 !== e2 && 3 !== q2.nodeType || (h2 = g2 + e2);
                  q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
                  3 === q2.nodeType && (g2 += q2.nodeValue.length);
                  if (null === (y2 = q2.firstChild))
                    break;
                  r2 = q2;
                  q2 = y2;
                }
                for (; ; ) {
                  if (q2 === a2)
                    break b;
                  r2 === c2 && ++l2 === e2 && (h2 = g2);
                  r2 === f2 && ++m2 === d2 && (k2 = g2);
                  if (null !== (y2 = q2.nextSibling))
                    break;
                  q2 = r2;
                  r2 = q2.parentNode;
                }
                q2 = y2;
              }
            c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
          } else
            c2 = null;
        }
      c2 = c2 || { start: 0, end: 0 };
    } else
      c2 = null;
    Df = { focusedElem: a2, selectionRange: c2 };
    dd = false;
    for (V$3 = b2; null !== V$3; )
      if (b2 = V$3, a2 = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a2)
        a2.return = b2, V$3 = a2;
      else
        for (; null !== V$3; ) {
          b2 = V$3;
          try {
            var n2 = b2.alternate;
            if (0 !== (b2.flags & 1024))
              switch (b2.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (null !== n2) {
                    var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Lg(b2.type, t2), J2);
                    x2.__reactInternalSnapshotBeforeUpdate = w2;
                  }
                  break;
                case 3:
                  var u2 = b2.stateNode.containerInfo;
                  1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(p$5(163));
              }
          } catch (F2) {
            W$3(b2, b2.return, F2);
          }
          a2 = b2.sibling;
          if (null !== a2) {
            a2.return = b2.return;
            V$3 = a2;
            break;
          }
          V$3 = b2.return;
        }
    n2 = Oj;
    Oj = false;
    return n2;
  }
  function Qj(a2, b2, c2) {
    var d2 = b2.updateQueue;
    d2 = null !== d2 ? d2.lastEffect : null;
    if (null !== d2) {
      var e2 = d2 = d2.next;
      do {
        if ((e2.tag & a2) === a2) {
          var f2 = e2.destroy;
          e2.destroy = void 0;
          void 0 !== f2 && Nj(b2, c2, f2);
        }
        e2 = e2.next;
      } while (e2 !== d2);
    }
  }
  function Rj(a2, b2) {
    b2 = b2.updateQueue;
    b2 = null !== b2 ? b2.lastEffect : null;
    if (null !== b2) {
      var c2 = b2 = b2.next;
      do {
        if ((c2.tag & a2) === a2) {
          var d2 = c2.create;
          c2.destroy = d2();
        }
        c2 = c2.next;
      } while (c2 !== b2);
    }
  }
  function Sj(a2) {
    var b2 = a2.ref;
    if (null !== b2) {
      var c2 = a2.stateNode;
      switch (a2.tag) {
        case 5:
          a2 = c2;
          break;
        default:
          a2 = c2;
      }
      "function" === typeof b2 ? b2(a2) : b2.current = a2;
    }
  }
  function Tj(a2) {
    var b2 = a2.alternate;
    null !== b2 && (a2.alternate = null, Tj(b2));
    a2.child = null;
    a2.deletions = null;
    a2.sibling = null;
    5 === a2.tag && (b2 = a2.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
    a2.stateNode = null;
    a2.return = null;
    a2.dependencies = null;
    a2.memoizedProps = null;
    a2.memoizedState = null;
    a2.pendingProps = null;
    a2.stateNode = null;
    a2.updateQueue = null;
  }
  function Uj(a2) {
    return 5 === a2.tag || 3 === a2.tag || 4 === a2.tag;
  }
  function Vj(a2) {
    a:
      for (; ; ) {
        for (; null === a2.sibling; ) {
          if (null === a2.return || Uj(a2.return))
            return null;
          a2 = a2.return;
        }
        a2.sibling.return = a2.return;
        for (a2 = a2.sibling; 5 !== a2.tag && 6 !== a2.tag && 18 !== a2.tag; ) {
          if (a2.flags & 2)
            continue a;
          if (null === a2.child || 4 === a2.tag)
            continue a;
          else
            a2.child.return = a2, a2 = a2.child;
        }
        if (!(a2.flags & 2))
          return a2.stateNode;
      }
  }
  function Wj(a2, b2, c2) {
    var d2 = a2.tag;
    if (5 === d2 || 6 === d2)
      a2 = a2.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
    else if (4 !== d2 && (a2 = a2.child, null !== a2))
      for (Wj(a2, b2, c2), a2 = a2.sibling; null !== a2; )
        Wj(a2, b2, c2), a2 = a2.sibling;
  }
  function Xj(a2, b2, c2) {
    var d2 = a2.tag;
    if (5 === d2 || 6 === d2)
      a2 = a2.stateNode, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
    else if (4 !== d2 && (a2 = a2.child, null !== a2))
      for (Xj(a2, b2, c2), a2 = a2.sibling; null !== a2; )
        Xj(a2, b2, c2), a2 = a2.sibling;
  }
  var X$1 = null, Yj = false;
  function Zj(a2, b2, c2) {
    for (c2 = c2.child; null !== c2; )
      ak(a2, b2, c2), c2 = c2.sibling;
  }
  function ak(a2, b2, c2) {
    if (lc && "function" === typeof lc.onCommitFiberUnmount)
      try {
        lc.onCommitFiberUnmount(kc, c2);
      } catch (h2) {
      }
    switch (c2.tag) {
      case 5:
        U$1 || Mj(c2, b2);
      case 6:
        var d2 = X$1, e2 = Yj;
        X$1 = null;
        Zj(a2, b2, c2);
        X$1 = d2;
        Yj = e2;
        null !== X$1 && (Yj ? (a2 = X$1, c2 = c2.stateNode, 8 === a2.nodeType ? a2.parentNode.removeChild(c2) : a2.removeChild(c2)) : X$1.removeChild(c2.stateNode));
        break;
      case 18:
        null !== X$1 && (Yj ? (a2 = X$1, c2 = c2.stateNode, 8 === a2.nodeType ? Kf(a2.parentNode, c2) : 1 === a2.nodeType && Kf(a2, c2), bd(a2)) : Kf(X$1, c2.stateNode));
        break;
      case 4:
        d2 = X$1;
        e2 = Yj;
        X$1 = c2.stateNode.containerInfo;
        Yj = true;
        Zj(a2, b2, c2);
        X$1 = d2;
        Yj = e2;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!U$1 && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
          e2 = d2 = d2.next;
          do {
            var f2 = e2, g2 = f2.destroy;
            f2 = f2.tag;
            void 0 !== g2 && (0 !== (f2 & 2) ? Nj(c2, b2, g2) : 0 !== (f2 & 4) && Nj(c2, b2, g2));
            e2 = e2.next;
          } while (e2 !== d2);
        }
        Zj(a2, b2, c2);
        break;
      case 1:
        if (!U$1 && (Mj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount))
          try {
            d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
          } catch (h2) {
            W$3(c2, b2, h2);
          }
        Zj(a2, b2, c2);
        break;
      case 21:
        Zj(a2, b2, c2);
        break;
      case 22:
        c2.mode & 1 ? (U$1 = (d2 = U$1) || null !== c2.memoizedState, Zj(a2, b2, c2), U$1 = d2) : Zj(a2, b2, c2);
        break;
      default:
        Zj(a2, b2, c2);
    }
  }
  function bk(a2) {
    var b2 = a2.updateQueue;
    if (null !== b2) {
      a2.updateQueue = null;
      var c2 = a2.stateNode;
      null === c2 && (c2 = a2.stateNode = new Lj());
      b2.forEach(function(b3) {
        var d2 = ck.bind(null, a2, b3);
        c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
      });
    }
  }
  function dk(a2, b2) {
    var c2 = b2.deletions;
    if (null !== c2)
      for (var d2 = 0; d2 < c2.length; d2++) {
        var e2 = c2[d2];
        try {
          var f2 = a2, g2 = b2, h2 = g2;
          a:
            for (; null !== h2; ) {
              switch (h2.tag) {
                case 5:
                  X$1 = h2.stateNode;
                  Yj = false;
                  break a;
                case 3:
                  X$1 = h2.stateNode.containerInfo;
                  Yj = true;
                  break a;
                case 4:
                  X$1 = h2.stateNode.containerInfo;
                  Yj = true;
                  break a;
              }
              h2 = h2.return;
            }
          if (null === X$1)
            throw Error(p$5(160));
          ak(f2, g2, e2);
          X$1 = null;
          Yj = false;
          var k2 = e2.alternate;
          null !== k2 && (k2.return = null);
          e2.return = null;
        } catch (l2) {
          W$3(e2, b2, l2);
        }
      }
    if (b2.subtreeFlags & 12854)
      for (b2 = b2.child; null !== b2; )
        ek(b2, a2), b2 = b2.sibling;
  }
  function ek(a2, b2) {
    var c2 = a2.alternate, d2 = a2.flags;
    switch (a2.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        dk(b2, a2);
        fk(a2);
        if (d2 & 4) {
          try {
            Qj(3, a2, a2.return), Rj(3, a2);
          } catch (t2) {
            W$3(a2, a2.return, t2);
          }
          try {
            Qj(5, a2, a2.return);
          } catch (t2) {
            W$3(a2, a2.return, t2);
          }
        }
        break;
      case 1:
        dk(b2, a2);
        fk(a2);
        d2 & 512 && null !== c2 && Mj(c2, c2.return);
        break;
      case 5:
        dk(b2, a2);
        fk(a2);
        d2 & 512 && null !== c2 && Mj(c2, c2.return);
        if (a2.flags & 32) {
          var e2 = a2.stateNode;
          try {
            ob(e2, "");
          } catch (t2) {
            W$3(a2, a2.return, t2);
          }
        }
        if (d2 & 4 && (e2 = a2.stateNode, null != e2)) {
          var f2 = a2.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a2.type, k2 = a2.updateQueue;
          a2.updateQueue = null;
          if (null !== k2)
            try {
              "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
              vb(h2, g2);
              var l2 = vb(h2, f2);
              for (g2 = 0; g2 < k2.length; g2 += 2) {
                var m2 = k2[g2], q2 = k2[g2 + 1];
                "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l2);
              }
              switch (h2) {
                case "input":
                  bb(e2, f2);
                  break;
                case "textarea":
                  ib(e2, f2);
                  break;
                case "select":
                  var r2 = e2._wrapperState.wasMultiple;
                  e2._wrapperState.wasMultiple = !!f2.multiple;
                  var y2 = f2.value;
                  null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                    e2,
                    !!f2.multiple,
                    f2.defaultValue,
                    true
                  ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
              }
              e2[Pf] = f2;
            } catch (t2) {
              W$3(a2, a2.return, t2);
            }
        }
        break;
      case 6:
        dk(b2, a2);
        fk(a2);
        if (d2 & 4) {
          if (null === a2.stateNode)
            throw Error(p$5(162));
          e2 = a2.stateNode;
          f2 = a2.memoizedProps;
          try {
            e2.nodeValue = f2;
          } catch (t2) {
            W$3(a2, a2.return, t2);
          }
        }
        break;
      case 3:
        dk(b2, a2);
        fk(a2);
        if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated)
          try {
            bd(b2.containerInfo);
          } catch (t2) {
            W$3(a2, a2.return, t2);
          }
        break;
      case 4:
        dk(b2, a2);
        fk(a2);
        break;
      case 13:
        dk(b2, a2);
        fk(a2);
        e2 = a2.child;
        e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (gk = B$1()));
        d2 & 4 && bk(a2);
        break;
      case 22:
        m2 = null !== c2 && null !== c2.memoizedState;
        a2.mode & 1 ? (U$1 = (l2 = U$1) || m2, dk(b2, a2), U$1 = l2) : dk(b2, a2);
        fk(a2);
        if (d2 & 8192) {
          l2 = null !== a2.memoizedState;
          if ((a2.stateNode.isHidden = l2) && !m2 && 0 !== (a2.mode & 1))
            for (V$3 = a2, m2 = a2.child; null !== m2; ) {
              for (q2 = V$3 = m2; null !== V$3; ) {
                r2 = V$3;
                y2 = r2.child;
                switch (r2.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Qj(4, r2, r2.return);
                    break;
                  case 1:
                    Mj(r2, r2.return);
                    var n2 = r2.stateNode;
                    if ("function" === typeof n2.componentWillUnmount) {
                      d2 = r2;
                      c2 = r2.return;
                      try {
                        b2 = d2, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                      } catch (t2) {
                        W$3(d2, c2, t2);
                      }
                    }
                    break;
                  case 5:
                    Mj(r2, r2.return);
                    break;
                  case 22:
                    if (null !== r2.memoizedState) {
                      hk(q2);
                      continue;
                    }
                }
                null !== y2 ? (y2.return = r2, V$3 = y2) : hk(q2);
              }
              m2 = m2.sibling;
            }
          a:
            for (m2 = null, q2 = a2; ; ) {
              if (5 === q2.tag) {
                if (null === m2) {
                  m2 = q2;
                  try {
                    e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
                  } catch (t2) {
                    W$3(a2, a2.return, t2);
                  }
                }
              } else if (6 === q2.tag) {
                if (null === m2)
                  try {
                    q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                  } catch (t2) {
                    W$3(a2, a2.return, t2);
                  }
              } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a2) && null !== q2.child) {
                q2.child.return = q2;
                q2 = q2.child;
                continue;
              }
              if (q2 === a2)
                break a;
              for (; null === q2.sibling; ) {
                if (null === q2.return || q2.return === a2)
                  break a;
                m2 === q2 && (m2 = null);
                q2 = q2.return;
              }
              m2 === q2 && (m2 = null);
              q2.sibling.return = q2.return;
              q2 = q2.sibling;
            }
        }
        break;
      case 19:
        dk(b2, a2);
        fk(a2);
        d2 & 4 && bk(a2);
        break;
      case 21:
        break;
      default:
        dk(
          b2,
          a2
        ), fk(a2);
    }
  }
  function fk(a2) {
    var b2 = a2.flags;
    if (b2 & 2) {
      try {
        a: {
          for (var c2 = a2.return; null !== c2; ) {
            if (Uj(c2)) {
              var d2 = c2;
              break a;
            }
            c2 = c2.return;
          }
          throw Error(p$5(160));
        }
        switch (d2.tag) {
          case 5:
            var e2 = d2.stateNode;
            d2.flags & 32 && (ob(e2, ""), d2.flags &= -33);
            var f2 = Vj(a2);
            Xj(a2, f2, e2);
            break;
          case 3:
          case 4:
            var g2 = d2.stateNode.containerInfo, h2 = Vj(a2);
            Wj(a2, h2, g2);
            break;
          default:
            throw Error(p$5(161));
        }
      } catch (k2) {
        W$3(a2, a2.return, k2);
      }
      a2.flags &= -3;
    }
    b2 & 4096 && (a2.flags &= -4097);
  }
  function ik(a2, b2, c2) {
    V$3 = a2;
    jk(a2);
  }
  function jk(a2, b2, c2) {
    for (var d2 = 0 !== (a2.mode & 1); null !== V$3; ) {
      var e2 = V$3, f2 = e2.child;
      if (22 === e2.tag && d2) {
        var g2 = null !== e2.memoizedState || Kj;
        if (!g2) {
          var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U$1;
          h2 = Kj;
          var l2 = U$1;
          Kj = g2;
          if ((U$1 = k2) && !l2)
            for (V$3 = e2; null !== V$3; )
              g2 = V$3, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? kk(e2) : null !== k2 ? (k2.return = g2, V$3 = k2) : kk(e2);
          for (; null !== f2; )
            V$3 = f2, jk(f2), f2 = f2.sibling;
          V$3 = e2;
          Kj = h2;
          U$1 = l2;
        }
        lk(a2);
      } else
        0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V$3 = f2) : lk(a2);
    }
  }
  function lk(a2) {
    for (; null !== V$3; ) {
      var b2 = V$3;
      if (0 !== (b2.flags & 8772)) {
        var c2 = b2.alternate;
        try {
          if (0 !== (b2.flags & 8772))
            switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                U$1 || Rj(5, b2);
                break;
              case 1:
                var d2 = b2.stateNode;
                if (b2.flags & 4 && !U$1)
                  if (null === c2)
                    d2.componentDidMount();
                  else {
                    var e2 = b2.elementType === b2.type ? c2.memoizedProps : Lg(b2.type, c2.memoizedProps);
                    d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
                  }
                var f2 = b2.updateQueue;
                null !== f2 && ih(b2, f2, d2);
                break;
              case 3:
                var g2 = b2.updateQueue;
                if (null !== g2) {
                  c2 = null;
                  if (null !== b2.child)
                    switch (b2.child.tag) {
                      case 5:
                        c2 = b2.child.stateNode;
                        break;
                      case 1:
                        c2 = b2.child.stateNode;
                    }
                  ih(b2, g2, c2);
                }
                break;
              case 5:
                var h2 = b2.stateNode;
                if (null === c2 && b2.flags & 4) {
                  c2 = h2;
                  var k2 = b2.memoizedProps;
                  switch (b2.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      k2.autoFocus && c2.focus();
                      break;
                    case "img":
                      k2.src && (c2.src = k2.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (null === b2.memoizedState) {
                  var l2 = b2.alternate;
                  if (null !== l2) {
                    var m2 = l2.memoizedState;
                    if (null !== m2) {
                      var q2 = m2.dehydrated;
                      null !== q2 && bd(q2);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(p$5(163));
            }
          U$1 || b2.flags & 512 && Sj(b2);
        } catch (r2) {
          W$3(b2, b2.return, r2);
        }
      }
      if (b2 === a2) {
        V$3 = null;
        break;
      }
      c2 = b2.sibling;
      if (null !== c2) {
        c2.return = b2.return;
        V$3 = c2;
        break;
      }
      V$3 = b2.return;
    }
  }
  function hk(a2) {
    for (; null !== V$3; ) {
      var b2 = V$3;
      if (b2 === a2) {
        V$3 = null;
        break;
      }
      var c2 = b2.sibling;
      if (null !== c2) {
        c2.return = b2.return;
        V$3 = c2;
        break;
      }
      V$3 = b2.return;
    }
  }
  function kk(a2) {
    for (; null !== V$3; ) {
      var b2 = V$3;
      try {
        switch (b2.tag) {
          case 0:
          case 11:
          case 15:
            var c2 = b2.return;
            try {
              Rj(4, b2);
            } catch (k2) {
              W$3(b2, c2, k2);
            }
            break;
          case 1:
            var d2 = b2.stateNode;
            if ("function" === typeof d2.componentDidMount) {
              var e2 = b2.return;
              try {
                d2.componentDidMount();
              } catch (k2) {
                W$3(b2, e2, k2);
              }
            }
            var f2 = b2.return;
            try {
              Sj(b2);
            } catch (k2) {
              W$3(b2, f2, k2);
            }
            break;
          case 5:
            var g2 = b2.return;
            try {
              Sj(b2);
            } catch (k2) {
              W$3(b2, g2, k2);
            }
        }
      } catch (k2) {
        W$3(b2, b2.return, k2);
      }
      if (b2 === a2) {
        V$3 = null;
        break;
      }
      var h2 = b2.sibling;
      if (null !== h2) {
        h2.return = b2.return;
        V$3 = h2;
        break;
      }
      V$3 = b2.return;
    }
  }
  var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K$1 = 0, R$2 = null, Y$1 = null, Z$1 = 0, gj = 0, fj = Uf(0), T$2 = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = false, Qi = null, Si = null, wk = false, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
  function L$4() {
    return 0 !== (K$1 & 6) ? B$1() : -1 !== Bk ? Bk : Bk = B$1();
  }
  function lh(a2) {
    if (0 === (a2.mode & 1))
      return 1;
    if (0 !== (K$1 & 2) && 0 !== Z$1)
      return Z$1 & -Z$1;
    if (null !== Kg.transition)
      return 0 === Ck && (Ck = yc()), Ck;
    a2 = C$3;
    if (0 !== a2)
      return a2;
    a2 = window.event;
    a2 = void 0 === a2 ? 16 : jd(a2.type);
    return a2;
  }
  function mh(a2, b2, c2, d2) {
    if (50 < zk)
      throw zk = 0, Ak = null, Error(p$5(185));
    Ac(a2, c2, d2);
    if (0 === (K$1 & 2) || a2 !== R$2)
      a2 === R$2 && (0 === (K$1 & 2) && (rk |= c2), 4 === T$2 && Dk(a2, Z$1)), Ek(a2, d2), 1 === c2 && 0 === K$1 && 0 === (b2.mode & 1) && (Hj = B$1() + 500, fg && jg());
  }
  function Ek(a2, b2) {
    var c2 = a2.callbackNode;
    wc(a2, b2);
    var d2 = uc(a2, a2 === R$2 ? Z$1 : 0);
    if (0 === d2)
      null !== c2 && bc(c2), a2.callbackNode = null, a2.callbackPriority = 0;
    else if (b2 = d2 & -d2, a2.callbackPriority !== b2) {
      null != c2 && bc(c2);
      if (1 === b2)
        0 === a2.tag ? ig(Fk.bind(null, a2)) : hg(Fk.bind(null, a2)), Jf(function() {
          0 === (K$1 & 6) && jg();
        }), c2 = null;
      else {
        switch (Dc(d2)) {
          case 1:
            c2 = fc;
            break;
          case 4:
            c2 = gc;
            break;
          case 16:
            c2 = hc;
            break;
          case 536870912:
            c2 = jc;
            break;
          default:
            c2 = hc;
        }
        c2 = Gk(c2, Hk.bind(null, a2));
      }
      a2.callbackPriority = b2;
      a2.callbackNode = c2;
    }
  }
  function Hk(a2, b2) {
    Bk = -1;
    Ck = 0;
    if (0 !== (K$1 & 6))
      throw Error(p$5(327));
    var c2 = a2.callbackNode;
    if (Ik() && a2.callbackNode !== c2)
      return null;
    var d2 = uc(a2, a2 === R$2 ? Z$1 : 0);
    if (0 === d2)
      return null;
    if (0 !== (d2 & 30) || 0 !== (d2 & a2.expiredLanes) || b2)
      b2 = Jk(a2, d2);
    else {
      b2 = d2;
      var e2 = K$1;
      K$1 |= 2;
      var f2 = Kk();
      if (R$2 !== a2 || Z$1 !== b2)
        vk = null, Hj = B$1() + 500, Lk(a2, b2);
      do
        try {
          Mk();
          break;
        } catch (h2) {
          Nk(a2, h2);
        }
      while (1);
      Qg();
      nk.current = f2;
      K$1 = e2;
      null !== Y$1 ? b2 = 0 : (R$2 = null, Z$1 = 0, b2 = T$2);
    }
    if (0 !== b2) {
      2 === b2 && (e2 = xc(a2), 0 !== e2 && (d2 = e2, b2 = Ok(a2, e2)));
      if (1 === b2)
        throw c2 = qk, Lk(a2, 0), Dk(a2, d2), Ek(a2, B$1()), c2;
      if (6 === b2)
        Dk(a2, d2);
      else {
        e2 = a2.current.alternate;
        if (0 === (d2 & 30) && !Pk(e2) && (b2 = Jk(a2, d2), 2 === b2 && (f2 = xc(a2), 0 !== f2 && (d2 = f2, b2 = Ok(a2, f2))), 1 === b2))
          throw c2 = qk, Lk(a2, 0), Dk(a2, d2), Ek(a2, B$1()), c2;
        a2.finishedWork = e2;
        a2.finishedLanes = d2;
        switch (b2) {
          case 0:
          case 1:
            throw Error(p$5(345));
          case 2:
            Qk(a2, uk, vk);
            break;
          case 3:
            Dk(a2, d2);
            if ((d2 & 130023424) === d2 && (b2 = gk + 500 - B$1(), 10 < b2)) {
              if (0 !== uc(a2, 0))
                break;
              e2 = a2.suspendedLanes;
              if ((e2 & d2) !== d2) {
                L$4();
                a2.pingedLanes |= a2.suspendedLanes & e2;
                break;
              }
              a2.timeoutHandle = Ff(Qk.bind(null, a2, uk, vk), b2);
              break;
            }
            Qk(a2, uk, vk);
            break;
          case 4:
            Dk(a2, d2);
            if ((d2 & 4194240) === d2)
              break;
            b2 = a2.eventTimes;
            for (e2 = -1; 0 < d2; ) {
              var g2 = 31 - oc(d2);
              f2 = 1 << g2;
              g2 = b2[g2];
              g2 > e2 && (e2 = g2);
              d2 &= ~f2;
            }
            d2 = e2;
            d2 = B$1() - d2;
            d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * mk(d2 / 1960)) - d2;
            if (10 < d2) {
              a2.timeoutHandle = Ff(Qk.bind(null, a2, uk, vk), d2);
              break;
            }
            Qk(a2, uk, vk);
            break;
          case 5:
            Qk(a2, uk, vk);
            break;
          default:
            throw Error(p$5(329));
        }
      }
    }
    Ek(a2, B$1());
    return a2.callbackNode === c2 ? Hk.bind(null, a2) : null;
  }
  function Ok(a2, b2) {
    var c2 = tk;
    a2.current.memoizedState.isDehydrated && (Lk(a2, b2).flags |= 256);
    a2 = Jk(a2, b2);
    2 !== a2 && (b2 = uk, uk = c2, null !== b2 && Gj(b2));
    return a2;
  }
  function Gj(a2) {
    null === uk ? uk = a2 : uk.push.apply(uk, a2);
  }
  function Pk(a2) {
    for (var b2 = a2; ; ) {
      if (b2.flags & 16384) {
        var c2 = b2.updateQueue;
        if (null !== c2 && (c2 = c2.stores, null !== c2))
          for (var d2 = 0; d2 < c2.length; d2++) {
            var e2 = c2[d2], f2 = e2.getSnapshot;
            e2 = e2.value;
            try {
              if (!He$2(f2(), e2))
                return false;
            } catch (g2) {
              return false;
            }
          }
      }
      c2 = b2.child;
      if (b2.subtreeFlags & 16384 && null !== c2)
        c2.return = b2, b2 = c2;
      else {
        if (b2 === a2)
          break;
        for (; null === b2.sibling; ) {
          if (null === b2.return || b2.return === a2)
            return true;
          b2 = b2.return;
        }
        b2.sibling.return = b2.return;
        b2 = b2.sibling;
      }
    }
    return true;
  }
  function Dk(a2, b2) {
    b2 &= ~sk;
    b2 &= ~rk;
    a2.suspendedLanes |= b2;
    a2.pingedLanes &= ~b2;
    for (a2 = a2.expirationTimes; 0 < b2; ) {
      var c2 = 31 - oc(b2), d2 = 1 << c2;
      a2[c2] = -1;
      b2 &= ~d2;
    }
  }
  function Fk(a2) {
    if (0 !== (K$1 & 6))
      throw Error(p$5(327));
    Ik();
    var b2 = uc(a2, 0);
    if (0 === (b2 & 1))
      return Ek(a2, B$1()), null;
    var c2 = Jk(a2, b2);
    if (0 !== a2.tag && 2 === c2) {
      var d2 = xc(a2);
      0 !== d2 && (b2 = d2, c2 = Ok(a2, d2));
    }
    if (1 === c2)
      throw c2 = qk, Lk(a2, 0), Dk(a2, b2), Ek(a2, B$1()), c2;
    if (6 === c2)
      throw Error(p$5(345));
    a2.finishedWork = a2.current.alternate;
    a2.finishedLanes = b2;
    Qk(a2, uk, vk);
    Ek(a2, B$1());
    return null;
  }
  function Rk(a2, b2) {
    var c2 = K$1;
    K$1 |= 1;
    try {
      return a2(b2);
    } finally {
      K$1 = c2, 0 === K$1 && (Hj = B$1() + 500, fg && jg());
    }
  }
  function Sk(a2) {
    null !== xk && 0 === xk.tag && 0 === (K$1 & 6) && Ik();
    var b2 = K$1;
    K$1 |= 1;
    var c2 = pk.transition, d2 = C$3;
    try {
      if (pk.transition = null, C$3 = 1, a2)
        return a2();
    } finally {
      C$3 = d2, pk.transition = c2, K$1 = b2, 0 === (K$1 & 6) && jg();
    }
  }
  function Ij() {
    gj = fj.current;
    E$3(fj);
  }
  function Lk(a2, b2) {
    a2.finishedWork = null;
    a2.finishedLanes = 0;
    var c2 = a2.timeoutHandle;
    -1 !== c2 && (a2.timeoutHandle = -1, Gf(c2));
    if (null !== Y$1)
      for (c2 = Y$1.return; null !== c2; ) {
        var d2 = c2;
        wg(d2);
        switch (d2.tag) {
          case 1:
            d2 = d2.type.childContextTypes;
            null !== d2 && void 0 !== d2 && $f();
            break;
          case 3:
            Jh();
            E$3(Wf);
            E$3(H$3);
            Oh();
            break;
          case 5:
            Lh(d2);
            break;
          case 4:
            Jh();
            break;
          case 13:
            E$3(M$1);
            break;
          case 19:
            E$3(M$1);
            break;
          case 10:
            Rg(d2.type._context);
            break;
          case 22:
          case 23:
            Ij();
        }
        c2 = c2.return;
      }
    R$2 = a2;
    Y$1 = a2 = wh(a2.current, null);
    Z$1 = gj = b2;
    T$2 = 0;
    qk = null;
    sk = rk = hh = 0;
    uk = tk = null;
    if (null !== Wg) {
      for (b2 = 0; b2 < Wg.length; b2++)
        if (c2 = Wg[b2], d2 = c2.interleaved, null !== d2) {
          c2.interleaved = null;
          var e2 = d2.next, f2 = c2.pending;
          if (null !== f2) {
            var g2 = f2.next;
            f2.next = e2;
            d2.next = g2;
          }
          c2.pending = d2;
        }
      Wg = null;
    }
    return a2;
  }
  function Nk(a2, b2) {
    do {
      var c2 = Y$1;
      try {
        Qg();
        Ph.current = ai;
        if (Sh) {
          for (var d2 = N$1.memoizedState; null !== d2; ) {
            var e2 = d2.queue;
            null !== e2 && (e2.pending = null);
            d2 = d2.next;
          }
          Sh = false;
        }
        Rh = 0;
        P$1 = O$2 = N$1 = null;
        Th = false;
        Uh = 0;
        ok.current = null;
        if (null === c2 || null === c2.return) {
          T$2 = 1;
          qk = b2;
          Y$1 = null;
          break;
        }
        a: {
          var f2 = a2, g2 = c2.return, h2 = c2, k2 = b2;
          b2 = Z$1;
          h2.flags |= 32768;
          if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
            var l2 = k2, m2 = h2, q2 = m2.tag;
            if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
              var r2 = m2.alternate;
              r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
            }
            var y2 = Vi(g2);
            if (null !== y2) {
              y2.flags &= -257;
              Wi(y2, g2, h2, f2, b2);
              y2.mode & 1 && Ti(f2, l2, b2);
              b2 = y2;
              k2 = l2;
              var n2 = b2.updateQueue;
              if (null === n2) {
                var t2 = /* @__PURE__ */ new Set();
                t2.add(k2);
                b2.updateQueue = t2;
              } else
                n2.add(k2);
              break a;
            } else {
              if (0 === (b2 & 1)) {
                Ti(f2, l2, b2);
                uj();
                break a;
              }
              k2 = Error(p$5(426));
            }
          } else if (I$3 && h2.mode & 1) {
            var J2 = Vi(g2);
            if (null !== J2) {
              0 === (J2.flags & 65536) && (J2.flags |= 256);
              Wi(J2, g2, h2, f2, b2);
              Jg(Ki(k2, h2));
              break a;
            }
          }
          f2 = k2 = Ki(k2, h2);
          4 !== T$2 && (T$2 = 2);
          null === tk ? tk = [f2] : tk.push(f2);
          f2 = g2;
          do {
            switch (f2.tag) {
              case 3:
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var x2 = Oi(f2, k2, b2);
                fh(f2, x2);
                break a;
              case 1:
                h2 = k2;
                var w2 = f2.type, u2 = f2.stateNode;
                if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                  f2.flags |= 65536;
                  b2 &= -b2;
                  f2.lanes |= b2;
                  var F2 = Ri(f2, h2, b2);
                  fh(f2, F2);
                  break a;
                }
            }
            f2 = f2.return;
          } while (null !== f2);
        }
        Tk(c2);
      } catch (na) {
        b2 = na;
        Y$1 === c2 && null !== c2 && (Y$1 = c2 = c2.return);
        continue;
      }
      break;
    } while (1);
  }
  function Kk() {
    var a2 = nk.current;
    nk.current = ai;
    return null === a2 ? ai : a2;
  }
  function uj() {
    if (0 === T$2 || 3 === T$2 || 2 === T$2)
      T$2 = 4;
    null === R$2 || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R$2, Z$1);
  }
  function Jk(a2, b2) {
    var c2 = K$1;
    K$1 |= 2;
    var d2 = Kk();
    if (R$2 !== a2 || Z$1 !== b2)
      vk = null, Lk(a2, b2);
    do
      try {
        Uk();
        break;
      } catch (e2) {
        Nk(a2, e2);
      }
    while (1);
    Qg();
    K$1 = c2;
    nk.current = d2;
    if (null !== Y$1)
      throw Error(p$5(261));
    R$2 = null;
    Z$1 = 0;
    return T$2;
  }
  function Uk() {
    for (; null !== Y$1; )
      Vk(Y$1);
  }
  function Mk() {
    for (; null !== Y$1 && !cc(); )
      Vk(Y$1);
  }
  function Vk(a2) {
    var b2 = Wk(a2.alternate, a2, gj);
    a2.memoizedProps = a2.pendingProps;
    null === b2 ? Tk(a2) : Y$1 = b2;
    ok.current = null;
  }
  function Tk(a2) {
    var b2 = a2;
    do {
      var c2 = b2.alternate;
      a2 = b2.return;
      if (0 === (b2.flags & 32768)) {
        if (c2 = Fj(c2, b2, gj), null !== c2) {
          Y$1 = c2;
          return;
        }
      } else {
        c2 = Jj(c2, b2);
        if (null !== c2) {
          c2.flags &= 32767;
          Y$1 = c2;
          return;
        }
        if (null !== a2)
          a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
        else {
          T$2 = 6;
          Y$1 = null;
          return;
        }
      }
      b2 = b2.sibling;
      if (null !== b2) {
        Y$1 = b2;
        return;
      }
      Y$1 = b2 = a2;
    } while (null !== b2);
    0 === T$2 && (T$2 = 5);
  }
  function Qk(a2, b2, c2) {
    var d2 = C$3, e2 = pk.transition;
    try {
      pk.transition = null, C$3 = 1, Xk(a2, b2, c2, d2);
    } finally {
      pk.transition = e2, C$3 = d2;
    }
    return null;
  }
  function Xk(a2, b2, c2, d2) {
    do
      Ik();
    while (null !== xk);
    if (0 !== (K$1 & 6))
      throw Error(p$5(327));
    c2 = a2.finishedWork;
    var e2 = a2.finishedLanes;
    if (null === c2)
      return null;
    a2.finishedWork = null;
    a2.finishedLanes = 0;
    if (c2 === a2.current)
      throw Error(p$5(177));
    a2.callbackNode = null;
    a2.callbackPriority = 0;
    var f2 = c2.lanes | c2.childLanes;
    Bc(a2, f2);
    a2 === R$2 && (Y$1 = R$2 = null, Z$1 = 0);
    0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || wk || (wk = true, Gk(hc, function() {
      Ik();
      return null;
    }));
    f2 = 0 !== (c2.flags & 15990);
    if (0 !== (c2.subtreeFlags & 15990) || f2) {
      f2 = pk.transition;
      pk.transition = null;
      var g2 = C$3;
      C$3 = 1;
      var h2 = K$1;
      K$1 |= 4;
      ok.current = null;
      Pj(a2, c2);
      ek(c2, a2);
      Oe$1(Df);
      dd = !!Cf;
      Df = Cf = null;
      a2.current = c2;
      ik(c2);
      dc();
      K$1 = h2;
      C$3 = g2;
      pk.transition = f2;
    } else
      a2.current = c2;
    wk && (wk = false, xk = a2, yk = e2);
    f2 = a2.pendingLanes;
    0 === f2 && (Si = null);
    mc(c2.stateNode);
    Ek(a2, B$1());
    if (null !== b2)
      for (d2 = a2.onRecoverableError, c2 = 0; c2 < b2.length; c2++)
        e2 = b2[c2], d2(e2.value, { componentStack: e2.stack, digest: e2.digest });
    if (Pi)
      throw Pi = false, a2 = Qi, Qi = null, a2;
    0 !== (yk & 1) && 0 !== a2.tag && Ik();
    f2 = a2.pendingLanes;
    0 !== (f2 & 1) ? a2 === Ak ? zk++ : (zk = 0, Ak = a2) : zk = 0;
    jg();
    return null;
  }
  function Ik() {
    if (null !== xk) {
      var a2 = Dc(yk), b2 = pk.transition, c2 = C$3;
      try {
        pk.transition = null;
        C$3 = 16 > a2 ? 16 : a2;
        if (null === xk)
          var d2 = false;
        else {
          a2 = xk;
          xk = null;
          yk = 0;
          if (0 !== (K$1 & 6))
            throw Error(p$5(331));
          var e2 = K$1;
          K$1 |= 4;
          for (V$3 = a2.current; null !== V$3; ) {
            var f2 = V$3, g2 = f2.child;
            if (0 !== (V$3.flags & 16)) {
              var h2 = f2.deletions;
              if (null !== h2) {
                for (var k2 = 0; k2 < h2.length; k2++) {
                  var l2 = h2[k2];
                  for (V$3 = l2; null !== V$3; ) {
                    var m2 = V$3;
                    switch (m2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(8, m2, f2);
                    }
                    var q2 = m2.child;
                    if (null !== q2)
                      q2.return = m2, V$3 = q2;
                    else
                      for (; null !== V$3; ) {
                        m2 = V$3;
                        var r2 = m2.sibling, y2 = m2.return;
                        Tj(m2);
                        if (m2 === l2) {
                          V$3 = null;
                          break;
                        }
                        if (null !== r2) {
                          r2.return = y2;
                          V$3 = r2;
                          break;
                        }
                        V$3 = y2;
                      }
                  }
                }
                var n2 = f2.alternate;
                if (null !== n2) {
                  var t2 = n2.child;
                  if (null !== t2) {
                    n2.child = null;
                    do {
                      var J2 = t2.sibling;
                      t2.sibling = null;
                      t2 = J2;
                    } while (null !== t2);
                  }
                }
                V$3 = f2;
              }
            }
            if (0 !== (f2.subtreeFlags & 2064) && null !== g2)
              g2.return = f2, V$3 = g2;
            else
              b:
                for (; null !== V$3; ) {
                  f2 = V$3;
                  if (0 !== (f2.flags & 2048))
                    switch (f2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(9, f2, f2.return);
                    }
                  var x2 = f2.sibling;
                  if (null !== x2) {
                    x2.return = f2.return;
                    V$3 = x2;
                    break b;
                  }
                  V$3 = f2.return;
                }
          }
          var w2 = a2.current;
          for (V$3 = w2; null !== V$3; ) {
            g2 = V$3;
            var u2 = g2.child;
            if (0 !== (g2.subtreeFlags & 2064) && null !== u2)
              u2.return = g2, V$3 = u2;
            else
              b:
                for (g2 = w2; null !== V$3; ) {
                  h2 = V$3;
                  if (0 !== (h2.flags & 2048))
                    try {
                      switch (h2.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Rj(9, h2);
                      }
                    } catch (na) {
                      W$3(h2, h2.return, na);
                    }
                  if (h2 === g2) {
                    V$3 = null;
                    break b;
                  }
                  var F2 = h2.sibling;
                  if (null !== F2) {
                    F2.return = h2.return;
                    V$3 = F2;
                    break b;
                  }
                  V$3 = h2.return;
                }
          }
          K$1 = e2;
          jg();
          if (lc && "function" === typeof lc.onPostCommitFiberRoot)
            try {
              lc.onPostCommitFiberRoot(kc, a2);
            } catch (na) {
            }
          d2 = true;
        }
        return d2;
      } finally {
        C$3 = c2, pk.transition = b2;
      }
    }
    return false;
  }
  function Yk(a2, b2, c2) {
    b2 = Ki(c2, b2);
    b2 = Oi(a2, b2, 1);
    a2 = dh(a2, b2, 1);
    b2 = L$4();
    null !== a2 && (Ac(a2, 1, b2), Ek(a2, b2));
  }
  function W$3(a2, b2, c2) {
    if (3 === a2.tag)
      Yk(a2, a2, c2);
    else
      for (; null !== b2; ) {
        if (3 === b2.tag) {
          Yk(b2, a2, c2);
          break;
        } else if (1 === b2.tag) {
          var d2 = b2.stateNode;
          if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Si || !Si.has(d2))) {
            a2 = Ki(c2, a2);
            a2 = Ri(b2, a2, 1);
            b2 = dh(b2, a2, 1);
            a2 = L$4();
            null !== b2 && (Ac(b2, 1, a2), Ek(b2, a2));
            break;
          }
        }
        b2 = b2.return;
      }
  }
  function Ui(a2, b2, c2) {
    var d2 = a2.pingCache;
    null !== d2 && d2.delete(b2);
    b2 = L$4();
    a2.pingedLanes |= a2.suspendedLanes & c2;
    R$2 === a2 && (Z$1 & c2) === c2 && (4 === T$2 || 3 === T$2 && (Z$1 & 130023424) === Z$1 && 500 > B$1() - gk ? Lk(a2, 0) : sk |= c2);
    Ek(a2, b2);
  }
  function Zk(a2, b2) {
    0 === b2 && (0 === (a2.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
    var c2 = L$4();
    a2 = Zg(a2, b2);
    null !== a2 && (Ac(a2, b2, c2), Ek(a2, c2));
  }
  function vj(a2) {
    var b2 = a2.memoizedState, c2 = 0;
    null !== b2 && (c2 = b2.retryLane);
    Zk(a2, c2);
  }
  function ck(a2, b2) {
    var c2 = 0;
    switch (a2.tag) {
      case 13:
        var d2 = a2.stateNode;
        var e2 = a2.memoizedState;
        null !== e2 && (c2 = e2.retryLane);
        break;
      case 19:
        d2 = a2.stateNode;
        break;
      default:
        throw Error(p$5(314));
    }
    null !== d2 && d2.delete(b2);
    Zk(a2, c2);
  }
  var Wk;
  Wk = function(a2, b2, c2) {
    if (null !== a2)
      if (a2.memoizedProps !== b2.pendingProps || Wf.current)
        Ug = true;
      else {
        if (0 === (a2.lanes & c2) && 0 === (b2.flags & 128))
          return Ug = false, zj(a2, b2, c2);
        Ug = 0 !== (a2.flags & 131072) ? true : false;
      }
    else
      Ug = false, I$3 && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
    b2.lanes = 0;
    switch (b2.tag) {
      case 2:
        var d2 = b2.type;
        jj(a2, b2);
        a2 = b2.pendingProps;
        var e2 = Yf(b2, H$3.current);
        Tg(b2, c2);
        e2 = Xh(null, b2, d2, a2, e2, c2);
        var f2 = bi();
        b2.flags |= 1;
        "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, ah(b2), e2.updater = nh, b2.stateNode = e2, e2._reactInternals = b2, rh(b2, d2, a2, c2), b2 = kj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I$3 && f2 && vg(b2), Yi(null, b2, e2, c2), b2 = b2.child);
        return b2;
      case 16:
        d2 = b2.elementType;
        a: {
          jj(a2, b2);
          a2 = b2.pendingProps;
          e2 = d2._init;
          d2 = e2(d2._payload);
          b2.type = d2;
          e2 = b2.tag = $k(d2);
          a2 = Lg(d2, a2);
          switch (e2) {
            case 0:
              b2 = dj(null, b2, d2, a2, c2);
              break a;
            case 1:
              b2 = ij(null, b2, d2, a2, c2);
              break a;
            case 11:
              b2 = Zi(null, b2, d2, a2, c2);
              break a;
            case 14:
              b2 = aj(null, b2, d2, Lg(d2.type, a2), c2);
              break a;
          }
          throw Error(p$5(
            306,
            d2,
            ""
          ));
        }
        return b2;
      case 0:
        return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), dj(a2, b2, d2, e2, c2);
      case 1:
        return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), ij(a2, b2, d2, e2, c2);
      case 3:
        a: {
          lj(b2);
          if (null === a2)
            throw Error(p$5(387));
          d2 = b2.pendingProps;
          f2 = b2.memoizedState;
          e2 = f2.element;
          bh(a2, b2);
          gh(b2, d2, null, c2);
          var g2 = b2.memoizedState;
          d2 = g2.element;
          if (f2.isDehydrated)
            if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
              e2 = Ki(Error(p$5(423)), b2);
              b2 = mj(a2, b2, d2, c2, e2);
              break a;
            } else if (d2 !== e2) {
              e2 = Ki(Error(p$5(424)), b2);
              b2 = mj(a2, b2, d2, c2, e2);
              break a;
            } else
              for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I$3 = true, zg = null, c2 = Ch(b2, null, d2, c2), b2.child = c2; c2; )
                c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
          else {
            Ig();
            if (d2 === e2) {
              b2 = $i(a2, b2, c2);
              break a;
            }
            Yi(a2, b2, d2, c2);
          }
          b2 = b2.child;
        }
        return b2;
      case 5:
        return Kh(b2), null === a2 && Eg(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a2 ? a2.memoizedProps : null, g2 = e2.children, Ef(d2, e2) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), hj(a2, b2), Yi(a2, b2, g2, c2), b2.child;
      case 6:
        return null === a2 && Eg(b2), null;
      case 13:
        return pj(a2, b2, c2);
      case 4:
        return Ih(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a2 ? b2.child = Bh(b2, null, d2, c2) : Yi(a2, b2, d2, c2), b2.child;
      case 11:
        return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), Zi(a2, b2, d2, e2, c2);
      case 7:
        return Yi(a2, b2, b2.pendingProps, c2), b2.child;
      case 8:
        return Yi(a2, b2, b2.pendingProps.children, c2), b2.child;
      case 12:
        return Yi(a2, b2, b2.pendingProps.children, c2), b2.child;
      case 10:
        a: {
          d2 = b2.type._context;
          e2 = b2.pendingProps;
          f2 = b2.memoizedProps;
          g2 = e2.value;
          G$1(Mg, d2._currentValue);
          d2._currentValue = g2;
          if (null !== f2)
            if (He$2(f2.value, g2)) {
              if (f2.children === e2.children && !Wf.current) {
                b2 = $i(a2, b2, c2);
                break a;
              }
            } else
              for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
                var h2 = f2.dependencies;
                if (null !== h2) {
                  g2 = f2.child;
                  for (var k2 = h2.firstContext; null !== k2; ) {
                    if (k2.context === d2) {
                      if (1 === f2.tag) {
                        k2 = ch(-1, c2 & -c2);
                        k2.tag = 2;
                        var l2 = f2.updateQueue;
                        if (null !== l2) {
                          l2 = l2.shared;
                          var m2 = l2.pending;
                          null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                          l2.pending = k2;
                        }
                      }
                      f2.lanes |= c2;
                      k2 = f2.alternate;
                      null !== k2 && (k2.lanes |= c2);
                      Sg(
                        f2.return,
                        c2,
                        b2
                      );
                      h2.lanes |= c2;
                      break;
                    }
                    k2 = k2.next;
                  }
                } else if (10 === f2.tag)
                  g2 = f2.type === b2.type ? null : f2.child;
                else if (18 === f2.tag) {
                  g2 = f2.return;
                  if (null === g2)
                    throw Error(p$5(341));
                  g2.lanes |= c2;
                  h2 = g2.alternate;
                  null !== h2 && (h2.lanes |= c2);
                  Sg(g2, c2, b2);
                  g2 = f2.sibling;
                } else
                  g2 = f2.child;
                if (null !== g2)
                  g2.return = f2;
                else
                  for (g2 = f2; null !== g2; ) {
                    if (g2 === b2) {
                      g2 = null;
                      break;
                    }
                    f2 = g2.sibling;
                    if (null !== f2) {
                      f2.return = g2.return;
                      g2 = f2;
                      break;
                    }
                    g2 = g2.return;
                  }
                f2 = g2;
              }
          Yi(a2, b2, e2.children, c2);
          b2 = b2.child;
        }
        return b2;
      case 9:
        return e2 = b2.type, d2 = b2.pendingProps.children, Tg(b2, c2), e2 = Vg(e2), d2 = d2(e2), b2.flags |= 1, Yi(a2, b2, d2, c2), b2.child;
      case 14:
        return d2 = b2.type, e2 = Lg(d2, b2.pendingProps), e2 = Lg(d2.type, e2), aj(a2, b2, d2, e2, c2);
      case 15:
        return cj(a2, b2, b2.type, b2.pendingProps, c2);
      case 17:
        return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), jj(a2, b2), b2.tag = 1, Zf(d2) ? (a2 = true, cg(b2)) : a2 = false, Tg(b2, c2), ph(b2, d2, e2), rh(b2, d2, e2, c2), kj(null, b2, d2, true, a2, c2);
      case 19:
        return yj(a2, b2, c2);
      case 22:
        return ej(a2, b2, c2);
    }
    throw Error(p$5(156, b2.tag));
  };
  function Gk(a2, b2) {
    return ac(a2, b2);
  }
  function al(a2, b2, c2, d2) {
    this.tag = a2;
    this.key = c2;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b2;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d2;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function Bg(a2, b2, c2, d2) {
    return new al(a2, b2, c2, d2);
  }
  function bj(a2) {
    a2 = a2.prototype;
    return !(!a2 || !a2.isReactComponent);
  }
  function $k(a2) {
    if ("function" === typeof a2)
      return bj(a2) ? 1 : 0;
    if (void 0 !== a2 && null !== a2) {
      a2 = a2.$$typeof;
      if (a2 === Da)
        return 11;
      if (a2 === Ga)
        return 14;
    }
    return 2;
  }
  function wh(a2, b2) {
    var c2 = a2.alternate;
    null === c2 ? (c2 = Bg(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
    c2.flags = a2.flags & 14680064;
    c2.childLanes = a2.childLanes;
    c2.lanes = a2.lanes;
    c2.child = a2.child;
    c2.memoizedProps = a2.memoizedProps;
    c2.memoizedState = a2.memoizedState;
    c2.updateQueue = a2.updateQueue;
    b2 = a2.dependencies;
    c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
    c2.sibling = a2.sibling;
    c2.index = a2.index;
    c2.ref = a2.ref;
    return c2;
  }
  function yh(a2, b2, c2, d2, e2, f2) {
    var g2 = 2;
    d2 = a2;
    if ("function" === typeof a2)
      bj(a2) && (g2 = 1);
    else if ("string" === typeof a2)
      g2 = 5;
    else
      a:
        switch (a2) {
          case ya:
            return Ah(c2.children, e2, f2, b2);
          case za:
            g2 = 8;
            e2 |= 8;
            break;
          case Aa:
            return a2 = Bg(12, c2, b2, e2 | 2), a2.elementType = Aa, a2.lanes = f2, a2;
          case Ea:
            return a2 = Bg(13, c2, b2, e2), a2.elementType = Ea, a2.lanes = f2, a2;
          case Fa:
            return a2 = Bg(19, c2, b2, e2), a2.elementType = Fa, a2.lanes = f2, a2;
          case Ia:
            return qj(c2, e2, f2, b2);
          default:
            if ("object" === typeof a2 && null !== a2)
              switch (a2.$$typeof) {
                case Ba:
                  g2 = 10;
                  break a;
                case Ca:
                  g2 = 9;
                  break a;
                case Da:
                  g2 = 11;
                  break a;
                case Ga:
                  g2 = 14;
                  break a;
                case Ha:
                  g2 = 16;
                  d2 = null;
                  break a;
              }
            throw Error(p$5(130, null == a2 ? a2 : typeof a2, ""));
        }
    b2 = Bg(g2, c2, b2, e2);
    b2.elementType = a2;
    b2.type = d2;
    b2.lanes = f2;
    return b2;
  }
  function Ah(a2, b2, c2, d2) {
    a2 = Bg(7, a2, d2, b2);
    a2.lanes = c2;
    return a2;
  }
  function qj(a2, b2, c2, d2) {
    a2 = Bg(22, a2, d2, b2);
    a2.elementType = Ia;
    a2.lanes = c2;
    a2.stateNode = { isHidden: false };
    return a2;
  }
  function xh(a2, b2, c2) {
    a2 = Bg(6, a2, null, b2);
    a2.lanes = c2;
    return a2;
  }
  function zh(a2, b2, c2) {
    b2 = Bg(4, null !== a2.children ? a2.children : [], a2.key, b2);
    b2.lanes = c2;
    b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
    return b2;
  }
  function bl(a2, b2, c2, d2, e2) {
    this.tag = b2;
    this.containerInfo = a2;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = zc(0);
    this.expirationTimes = zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = zc(0);
    this.identifierPrefix = d2;
    this.onRecoverableError = e2;
    this.mutableSourceEagerHydrationData = null;
  }
  function cl(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
    a2 = new bl(a2, b2, c2, h2, k2);
    1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
    f2 = Bg(3, null, null, b2);
    a2.current = f2;
    f2.stateNode = a2;
    f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
    ah(f2);
    return a2;
  }
  function dl(a2, b2, c2) {
    var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a2, containerInfo: b2, implementation: c2 };
  }
  function el(a2) {
    if (!a2)
      return Vf;
    a2 = a2._reactInternals;
    a: {
      if (Vb(a2) !== a2 || 1 !== a2.tag)
        throw Error(p$5(170));
      var b2 = a2;
      do {
        switch (b2.tag) {
          case 3:
            b2 = b2.stateNode.context;
            break a;
          case 1:
            if (Zf(b2.type)) {
              b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
              break a;
            }
        }
        b2 = b2.return;
      } while (null !== b2);
      throw Error(p$5(171));
    }
    if (1 === a2.tag) {
      var c2 = a2.type;
      if (Zf(c2))
        return bg(a2, c2, b2);
    }
    return b2;
  }
  function fl(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
    a2 = cl(c2, d2, true, a2, e2, f2, g2, h2, k2);
    a2.context = el(null);
    c2 = a2.current;
    d2 = L$4();
    e2 = lh(c2);
    f2 = ch(d2, e2);
    f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
    dh(c2, f2, e2);
    a2.current.lanes = e2;
    Ac(a2, e2, d2);
    Ek(a2, d2);
    return a2;
  }
  function gl(a2, b2, c2, d2) {
    var e2 = b2.current, f2 = L$4(), g2 = lh(e2);
    c2 = el(c2);
    null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
    b2 = ch(f2, g2);
    b2.payload = { element: a2 };
    d2 = void 0 === d2 ? null : d2;
    null !== d2 && (b2.callback = d2);
    a2 = dh(e2, b2, g2);
    null !== a2 && (mh(a2, e2, g2, f2), eh(a2, e2, g2));
    return g2;
  }
  function hl(a2) {
    a2 = a2.current;
    if (!a2.child)
      return null;
    switch (a2.child.tag) {
      case 5:
        return a2.child.stateNode;
      default:
        return a2.child.stateNode;
    }
  }
  function il(a2, b2) {
    a2 = a2.memoizedState;
    if (null !== a2 && null !== a2.dehydrated) {
      var c2 = a2.retryLane;
      a2.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
    }
  }
  function jl(a2, b2) {
    il(a2, b2);
    (a2 = a2.alternate) && il(a2, b2);
  }
  function kl() {
    return null;
  }
  var ll = "function" === typeof reportError ? reportError : function(a2) {
    console.error(a2);
  };
  function ml(a2) {
    this._internalRoot = a2;
  }
  nl.prototype.render = ml.prototype.render = function(a2) {
    var b2 = this._internalRoot;
    if (null === b2)
      throw Error(p$5(409));
    gl(a2, b2, null, null);
  };
  nl.prototype.unmount = ml.prototype.unmount = function() {
    var a2 = this._internalRoot;
    if (null !== a2) {
      this._internalRoot = null;
      var b2 = a2.containerInfo;
      Sk(function() {
        gl(null, a2, null, null);
      });
      b2[uf] = null;
    }
  };
  function nl(a2) {
    this._internalRoot = a2;
  }
  nl.prototype.unstable_scheduleHydration = function(a2) {
    if (a2) {
      var b2 = Hc();
      a2 = { blockedOn: null, target: a2, priority: b2 };
      for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++)
        ;
      Qc.splice(c2, 0, a2);
      0 === c2 && Vc(a2);
    }
  };
  function ol(a2) {
    return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType);
  }
  function pl(a2) {
    return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType && (8 !== a2.nodeType || " react-mount-point-unstable " !== a2.nodeValue));
  }
  function ql() {
  }
  function rl(a2, b2, c2, d2, e2) {
    if (e2) {
      if ("function" === typeof d2) {
        var f2 = d2;
        d2 = function() {
          var a3 = hl(g2);
          f2.call(a3);
        };
      }
      var g2 = fl(b2, d2, a2, 0, null, false, false, "", ql);
      a2._reactRootContainer = g2;
      a2[uf] = g2.current;
      sf(8 === a2.nodeType ? a2.parentNode : a2);
      Sk();
      return g2;
    }
    for (; e2 = a2.lastChild; )
      a2.removeChild(e2);
    if ("function" === typeof d2) {
      var h2 = d2;
      d2 = function() {
        var a3 = hl(k2);
        h2.call(a3);
      };
    }
    var k2 = cl(a2, 0, false, null, null, false, false, "", ql);
    a2._reactRootContainer = k2;
    a2[uf] = k2.current;
    sf(8 === a2.nodeType ? a2.parentNode : a2);
    Sk(function() {
      gl(b2, k2, c2, d2);
    });
    return k2;
  }
  function sl(a2, b2, c2, d2, e2) {
    var f2 = c2._reactRootContainer;
    if (f2) {
      var g2 = f2;
      if ("function" === typeof e2) {
        var h2 = e2;
        e2 = function() {
          var a3 = hl(g2);
          h2.call(a3);
        };
      }
      gl(b2, g2, a2, e2);
    } else
      g2 = rl(c2, b2, a2, e2, d2);
    return hl(g2);
  }
  Ec = function(a2) {
    switch (a2.tag) {
      case 3:
        var b2 = a2.stateNode;
        if (b2.current.memoizedState.isDehydrated) {
          var c2 = tc(b2.pendingLanes);
          0 !== c2 && (Cc(b2, c2 | 1), Ek(b2, B$1()), 0 === (K$1 & 6) && (Hj = B$1() + 500, jg()));
        }
        break;
      case 13:
        Sk(function() {
          var b3 = Zg(a2, 1);
          if (null !== b3) {
            var c3 = L$4();
            mh(b3, a2, 1, c3);
          }
        }), jl(a2, 1);
    }
  };
  Fc = function(a2) {
    if (13 === a2.tag) {
      var b2 = Zg(a2, 134217728);
      if (null !== b2) {
        var c2 = L$4();
        mh(b2, a2, 134217728, c2);
      }
      jl(a2, 134217728);
    }
  };
  Gc = function(a2) {
    if (13 === a2.tag) {
      var b2 = lh(a2), c2 = Zg(a2, b2);
      if (null !== c2) {
        var d2 = L$4();
        mh(c2, a2, b2, d2);
      }
      jl(a2, b2);
    }
  };
  Hc = function() {
    return C$3;
  };
  Ic = function(a2, b2) {
    var c2 = C$3;
    try {
      return C$3 = a2, b2();
    } finally {
      C$3 = c2;
    }
  };
  yb = function(a2, b2, c2) {
    switch (b2) {
      case "input":
        bb(a2, c2);
        b2 = c2.name;
        if ("radio" === c2.type && null != b2) {
          for (c2 = a2; c2.parentNode; )
            c2 = c2.parentNode;
          c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
          for (b2 = 0; b2 < c2.length; b2++) {
            var d2 = c2[b2];
            if (d2 !== a2 && d2.form === a2.form) {
              var e2 = Db(d2);
              if (!e2)
                throw Error(p$5(90));
              Wa(d2);
              bb(d2, e2);
            }
          }
        }
        break;
      case "textarea":
        ib(a2, c2);
        break;
      case "select":
        b2 = c2.value, null != b2 && fb(a2, !!c2.multiple, b2, false);
    }
  };
  Gb = Rk;
  Hb = Sk;
  var tl = { usingClientEntryPoint: false, Events: [Cb, ue$2, Db, Eb, Fb, Rk] }, ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
  var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
    a2 = Zb(a2);
    return null === a2 ? null : a2.stateNode;
  }, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wl.isDisabled && wl.supportsFiber)
      try {
        kc = wl.inject(vl), lc = wl;
      } catch (a2) {
      }
  }
  reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
  reactDom_production_min.createPortal = function(a2, b2) {
    var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!ol(b2))
      throw Error(p$5(200));
    return dl(a2, b2, null, c2);
  };
  reactDom_production_min.createRoot = function(a2, b2) {
    if (!ol(a2))
      throw Error(p$5(299));
    var c2 = false, d2 = "", e2 = ll;
    null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
    b2 = cl(a2, 1, false, null, null, c2, false, d2, e2);
    a2[uf] = b2.current;
    sf(8 === a2.nodeType ? a2.parentNode : a2);
    return new ml(b2);
  };
  reactDom_production_min.findDOMNode = function(a2) {
    if (null == a2)
      return null;
    if (1 === a2.nodeType)
      return a2;
    var b2 = a2._reactInternals;
    if (void 0 === b2) {
      if ("function" === typeof a2.render)
        throw Error(p$5(188));
      a2 = Object.keys(a2).join(",");
      throw Error(p$5(268, a2));
    }
    a2 = Zb(b2);
    a2 = null === a2 ? null : a2.stateNode;
    return a2;
  };
  reactDom_production_min.flushSync = function(a2) {
    return Sk(a2);
  };
  reactDom_production_min.hydrate = function(a2, b2, c2) {
    if (!pl(b2))
      throw Error(p$5(200));
    return sl(null, a2, b2, true, c2);
  };
  reactDom_production_min.hydrateRoot = function(a2, b2, c2) {
    if (!ol(a2))
      throw Error(p$5(405));
    var d2 = null != c2 && c2.hydratedSources || null, e2 = false, f2 = "", g2 = ll;
    null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
    b2 = fl(b2, null, a2, 1, null != c2 ? c2 : null, e2, false, f2, g2);
    a2[uf] = b2.current;
    sf(a2);
    if (d2)
      for (a2 = 0; a2 < d2.length; a2++)
        c2 = d2[a2], e2 = c2._getVersion, e2 = e2(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(
          c2,
          e2
        );
    return new nl(b2);
  };
  reactDom_production_min.render = function(a2, b2, c2) {
    if (!pl(b2))
      throw Error(p$5(200));
    return sl(null, a2, b2, false, c2);
  };
  reactDom_production_min.unmountComponentAtNode = function(a2) {
    if (!pl(a2))
      throw Error(p$5(40));
    return a2._reactRootContainer ? (Sk(function() {
      sl(null, null, a2, false, function() {
        a2._reactRootContainer = null;
        a2[uf] = null;
      });
    }), true) : false;
  };
  reactDom_production_min.unstable_batchedUpdates = Rk;
  reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d2) {
    if (!pl(c2))
      throw Error(p$5(200));
    if (null == a2 || void 0 === a2._reactInternals)
      throw Error(p$5(38));
    return sl(a2, b2, c2, false, d2);
  };
  reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
  (function(module) {
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    {
      checkDCE();
      module.exports = reactDom_production_min;
    }
  })(reactDom);
  var createRoot;
  var m$5 = reactDomExports;
  {
    createRoot = m$5.createRoot;
    m$5.hydrateRoot;
  }
  const WELearnExerciseSettings = [
    {
      title: "练习",
      settings: [
        {
          id: "showReference",
          name: "显示参考",
          default: true,
          valueType: "boolean",
          description: "是否显示听力、口语参考(适用视听说)"
        },
        {
          id: "autoSolve",
          name: "自动答题",
          default: false,
          valueType: "boolean",
          description: "自动答题开关"
        },
        {
          id: "solveInterval",
          name: "答题间隔",
          default: 1e3,
          valueType: "number",
          description: "单位毫秒；自动答题间隔"
        },
        {
          id: "defaultBlankAnswer",
          name: "默认填空",
          default: "Default answer.",
          valueType: "string",
          description: "填空题没有固定|正确答案时，填入的默认值"
        },
        {
          id: "autoSubmit",
          name: "自动提交",
          default: true,
          valueType: "boolean",
          description: "全自动刷题时，答完本节后自动点击提交（会临时绕过二次确认弹窗）"
        },
        {
          id: "autoNext",
          name: "全自动刷题",
          default: false,
          valueType: "boolean",
          description: "自动答题 + 自动提交 + 自动切换到下一节（需要同时开启自动答题）"
        },
        {
          id: "autoNextDelay",
          name: "全自动切换间隔",
          default: 3,
          valueType: "number",
          description: "单位秒；本节提交后再等待多久切到下一节"
        },
        {
          id: "autoWait",
          name: "自动等待",
          default: true,
          valueType: "boolean",
          description: "全自动时，先等待「本页音视频总时长 + 随机时间」再提交/切下一节"
        },
        {
          id: "autoWaitMedia",
          name: "等待计入媒体时长",
          default: true,
          valueType: "boolean",
          description: "是否把本页所有音频/视频的时长计入等待时间（关闭则只按随机时间等待）"
        },
        {
          id: "autoWaitRandomMin",
          name: "随机等待下限",
          default: 60,
          valueType: "number",
          description: "单位秒；媒体时长之外的随机等待下限"
        },
        {
          id: "autoWaitRandomMax",
          name: "随机等待上限",
          default: 180,
          valueType: "number",
          description: "单位秒；媒体时长之外的随机等待上限"
        },
        {
          id: "autoWaitCap",
          name: "等待总上限",
          default: 90,
          valueType: "number",
          description: "单位分钟；防止超长视频把全自动卡住（超过则按上限等待）"
        },
        {
          id: "autoPlayMedia",
          name: "自动播放媒体",
          default: false,
          valueType: "boolean",
          description: "等待期间静音自动播放本页音频/视频（部分浏览器会拦截自动播放）"
        }
      ]
    }
  ];
  const WELearnExamSettings = [
    {
      title: "考试",
      settings: [
        {
          id: "infiniteListening",
          name: "无限听力",
          default: true,
          valueType: "boolean",
          description: "允许无限次播放听力音频"
        }
      ]
    }
  ];
  const WELearnTimeSettings = [
    {
      title: "时长相关",
      settings: [
        {
          id: "autoRefresh",
          name: "自动挂机",
          // type: "switch",
          default: false,
          valueType: "boolean",
          description: "是否定时切换下一页，仅用于刷时长"
        },
        {
          id: "loopRefresh",
          name: "循环挂机",
          // type: "switch",
          default: false,
          valueType: "boolean",
          description: "一遍刷完，是否跳转到开头；自动跳过封锁章节"
        },
        {
          id: "randomRefresh",
          name: "随机延时",
          // type: "switch",
          default: false,
          valueType: "boolean",
          description: "关闭将以上限为切换时长，开启将取上下限区间内随机时长"
        },
        {
          id: "refreshIntervalMin",
          name: "切换下限",
          default: 5,
          valueType: "number",
          description: "单位分钟；we learn允许一个页面最多挂30分钟，所以不要大于30"
        },
        {
          id: "refreshIntervalMax",
          name: "切换上限",
          default: 10,
          valueType: "number",
          description: "单位分钟"
        }
      ]
    }
  ];
  const commonSettings = [
    {
      title: "用户",
      settings: [
        {
          id: "userAccount",
          name: "身份令牌",
          default: "default",
          valueType: "string",
          description: "随意设定，累计每个人贡献的题目数量"
        },
        {
          id: "userPoints",
          name: "累计积分",
          readonly: true,
          default: 0,
          valueType: "number",
          description: "上传答案获取，暂无用处"
        }
        // {
        //     //离线模式应该不是让用户手动选择的，而是连接服务器失败之后自动操作的，作为备用方案
        //     id: "targetApi",
        //     name: "接口选择",
        //     type: "selection",
        //     default: 1,
        //     description: "默认使用哪个查题接口",
        // },
      ]
    },
    {
      title: "UI相关",
      settings: [
        {
          id: "autoScrollDown",
          name: "自动下滑",
          default: true,
          valueType: "boolean",
          description: "有新消息时，窗口是否自动下滑到新消息处"
        },
        {
          id: "enableTyping",
          name: "打字效果",
          default: true,
          valueType: "boolean",
          description: "如果电脑配置比较低，启用打字效果时，可能会出现打字动画自身的卡顿或者打字动画导致的整个页面的卡顿；这种情况下，建议关闭"
        }
      ]
    }
  ];
  function mergeSettings(...arrayOfSectionSettings) {
    const sectionSettings = [];
    for (const sections of arrayOfSectionSettings) {
      for (const section of sections) {
        if (!sectionSettings.some((exist) => exist.title == section.title))
          sectionSettings.push({ title: section.title, settings: [] });
        let index2;
        for (let i2 = 0; i2 < sectionSettings.length; i2++) {
          if (sectionSettings[i2].title == section.title) {
            index2 = i2;
          }
        }
        if (typeof index2 == "undefined")
          throw Error("error during get index ");
        for (const generic of section.settings) {
          const settings = sectionSettings[index2].settings;
          if (!settings.some((setting) => setting.id == generic.id))
            sectionSettings[index2].settings.push(generic);
        }
      }
    }
    return sectionSettings;
  }
  async function initialUserSettings() {
    const sectionSettings = mergeSettings(
      WELearnExamSettings,
      WELearnExerciseSettings,
      WELearnTimeSettings,
      commonSettings
    );
    store.sectionSettings = sectionSettings;
    store.setUserSettings(await getValue("userSettings", {}));
    store.setDefaultValues();
    for (const section of store.sectionSettings) {
      for (const generic of section.settings) {
        if (generic.valueType !== "number") continue;
        const n = Number(store.userSettings[generic.id]);
        store.userSettings[generic.id] = Number.isFinite(n) ? n : Number(generic.default);
      }
    }
    logger.debug("设置已读取", { ...store.userSettings });
  }

  function sheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    }
    for (var i2 = 0; i2 < document.styleSheets.length; i2++) {
      if (document.styleSheets[i2].ownerNode === tag) {
        return document.styleSheets[i2];
      }
    }
  }
  function createStyleElement(options) {
    var tag = document.createElement("style");
    tag.setAttribute("data-emotion", options.key);
    if (options.nonce !== void 0) {
      tag.setAttribute("nonce", options.nonce);
    }
    tag.appendChild(document.createTextNode(""));
    tag.setAttribute("data-s", "");
    return tag;
  }
  var StyleSheet = /* @__PURE__ */ function() {
    function StyleSheet2(options) {
      var _this = this;
      this._insertTag = function(tag) {
        var before;
        if (_this.tags.length === 0) {
          if (_this.insertionPoint) {
            before = _this.insertionPoint.nextSibling;
          } else if (_this.prepend) {
            before = _this.container.firstChild;
          } else {
            before = _this.before;
          }
        } else {
          before = _this.tags[_this.tags.length - 1].nextSibling;
        }
        _this.container.insertBefore(tag, before);
        _this.tags.push(tag);
      };
      this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
      this.tags = [];
      this.ctr = 0;
      this.nonce = options.nonce;
      this.key = options.key;
      this.container = options.container;
      this.prepend = options.prepend;
      this.insertionPoint = options.insertionPoint;
      this.before = null;
    }
    var _proto = StyleSheet2.prototype;
    _proto.hydrate = function hydrate(nodes) {
      nodes.forEach(this._insertTag);
    };
    _proto.insert = function insert(rule) {
      if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
        this._insertTag(createStyleElement(this));
      }
      var tag = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var sheet = sheetForTag(tag);
        try {
          sheet.insertRule(rule, sheet.cssRules.length);
        } catch (e2) {
        }
      } else {
        tag.appendChild(document.createTextNode(rule));
      }
      this.ctr++;
    };
    _proto.flush = function flush() {
      this.tags.forEach(function(tag) {
        return tag.parentNode && tag.parentNode.removeChild(tag);
      });
      this.tags = [];
      this.ctr = 0;
    };
    return StyleSheet2;
  }();
  var MS = "-ms-";
  var MOZ = "-moz-";
  var WEBKIT = "-webkit-";
  var COMMENT = "comm";
  var RULESET = "rule";
  var DECLARATION = "decl";
  var IMPORT = "@import";
  var KEYFRAMES = "@keyframes";
  var abs = Math.abs;
  var from = String.fromCharCode;
  var assign = Object.assign;
  function hash(value, length2) {
    return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
  }
  function trim(value) {
    return value.trim();
  }
  function match(value, pattern) {
    return (value = pattern.exec(value)) ? value[0] : value;
  }
  function replace(value, pattern, replacement) {
    return value.replace(pattern, replacement);
  }
  function indexof(value, search) {
    return value.indexOf(search);
  }
  function charat(value, index2) {
    return value.charCodeAt(index2) | 0;
  }
  function substr(value, begin, end) {
    return value.slice(begin, end);
  }
  function strlen(value) {
    return value.length;
  }
  function sizeof(value) {
    return value.length;
  }
  function append(value, array) {
    return array.push(value), value;
  }
  function combine(array, callback) {
    return array.map(callback).join("");
  }
  var line = 1;
  var column = 1;
  var length = 0;
  var position = 0;
  var character = 0;
  var characters = "";
  function node(value, root2, parent, type, props, children, length2) {
    return { value, root: root2, parent, type, props, children, line, column, length: length2, return: "" };
  }
  function copy(root2, props) {
    return assign(node("", null, null, "", null, null, 0), root2, { length: -root2.length }, props);
  }
  function char() {
    return character;
  }
  function prev() {
    character = position > 0 ? charat(characters, --position) : 0;
    if (column--, character === 10)
      column = 1, line--;
    return character;
  }
  function next() {
    character = position < length ? charat(characters, position++) : 0;
    if (column++, character === 10)
      column = 1, line++;
    return character;
  }
  function peek() {
    return charat(characters, position);
  }
  function caret() {
    return position;
  }
  function slice(begin, end) {
    return substr(characters, begin, end);
  }
  function token(type) {
    switch (type) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function alloc(value) {
    return line = column = 1, length = strlen(characters = value), position = 0, [];
  }
  function dealloc(value) {
    return characters = "", value;
  }
  function delimit(type) {
    return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
  }
  function whitespace(type) {
    while (character = peek())
      if (character < 33)
        next();
      else
        break;
    return token(type) > 2 || token(character) > 3 ? "" : " ";
  }
  function escaping(index2, count2) {
    while (--count2 && next())
      if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
        break;
    return slice(index2, caret() + (count2 < 6 && peek() == 32 && next() == 32));
  }
  function delimiter(type) {
    while (next())
      switch (character) {
        case type:
          return position;
        case 34:
        case 39:
          if (type !== 34 && type !== 39)
            delimiter(character);
          break;
        case 40:
          if (type === 41)
            delimiter(type);
          break;
        case 92:
          next();
          break;
      }
    return position;
  }
  function commenter(type, index2) {
    while (next())
      if (type + character === 47 + 10)
        break;
      else if (type + character === 42 + 42 && peek() === 47)
        break;
    return "/*" + slice(index2, position - 1) + "*" + from(type === 47 ? type : next());
  }
  function identifier(index2) {
    while (!token(peek()))
      next();
    return slice(index2, position);
  }
  function compile(value) {
    return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
  }
  function parse(value, root2, parent, rule, rules, rulesets, pseudo, points, declarations) {
    var index2 = 0;
    var offset = 0;
    var length2 = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character2 = 0;
    var type = "";
    var props = rules;
    var children = rulesets;
    var reference = rule;
    var characters2 = type;
    while (scanning)
      switch (previous = character2, character2 = next()) {
        case 40:
          if (previous != 108 && charat(characters2, length2 - 1) == 58) {
            if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
              ampersand = -1;
            break;
          }
        case 34:
        case 39:
        case 91:
          characters2 += delimit(character2);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          characters2 += whitespace(previous);
          break;
        case 92:
          characters2 += escaping(caret() - 1, 7);
          continue;
        case 47:
          switch (peek()) {
            case 42:
            case 47:
              append(comment(commenter(next(), caret()), root2, parent), declarations);
              break;
            default:
              characters2 += "/";
          }
          break;
        case 123 * variable:
          points[index2++] = strlen(characters2) * ampersand;
        case 125 * variable:
        case 59:
        case 0:
          switch (character2) {
            case 0:
            case 125:
              scanning = 0;
            case 59 + offset:
              if (property > 0 && strlen(characters2) - length2)
                append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
              break;
            case 59:
              characters2 += ";";
            default:
              append(reference = ruleset(characters2, root2, parent, index2, offset, rules, points, type, props = [], children = [], length2), rulesets);
              if (character2 === 123)
                if (offset === 0)
                  parse(characters2, root2, reference, reference, props, rulesets, length2, points, children);
                else
                  switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                    case 100:
                    case 109:
                    case 115:
                      parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                      break;
                    default:
                      parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                  }
          }
          index2 = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
          break;
        case 58:
          length2 = 1 + strlen(characters2), property = previous;
        default:
          if (variable < 1) {
            if (character2 == 123)
              --variable;
            else if (character2 == 125 && variable++ == 0 && prev() == 125)
              continue;
          }
          switch (characters2 += from(character2), character2 * variable) {
            case 38:
              ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
              break;
            case 44:
              points[index2++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
              break;
            case 64:
              if (peek() === 45)
                characters2 += delimit(next());
              atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
              break;
            case 45:
              if (previous === 45 && strlen(characters2) == 2)
                variable = 0;
          }
      }
    return rulesets;
  }
  function ruleset(value, root2, parent, index2, offset, rules, points, type, props, children, length2) {
    var post = offset - 1;
    var rule = offset === 0 ? rules : [""];
    var size = sizeof(rule);
    for (var i2 = 0, j2 = 0, k2 = 0; i2 < index2; ++i2)
      for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j2 = points[i2])), z2 = value; x2 < size; ++x2)
        if (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
          props[k2++] = z2;
    return node(value, root2, parent, offset === 0 ? RULESET : type, props, children, length2);
  }
  function comment(value, root2, parent) {
    return node(value, root2, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
  }
  function declaration(value, root2, parent, length2) {
    return node(value, root2, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
  }
  function serialize(children, callback) {
    var output = "";
    var length2 = sizeof(children);
    for (var i2 = 0; i2 < length2; i2++)
      output += callback(children[i2], i2, children, callback) || "";
    return output;
  }
  function stringify(element, index2, children, callback) {
    switch (element.type) {
      case IMPORT:
      case DECLARATION:
        return element.return = element.return || element.value;
      case COMMENT:
        return "";
      case KEYFRAMES:
        return element.return = element.value + "{" + serialize(element.children, callback) + "}";
      case RULESET:
        element.value = element.props.join(",");
    }
    return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
  }
  function middleware(collection) {
    var length2 = sizeof(collection);
    return function(element, index2, children, callback) {
      var output = "";
      for (var i2 = 0; i2 < length2; i2++)
        output += collection[i2](element, index2, children, callback) || "";
      return output;
    };
  }
  function rulesheet(callback) {
    return function(element) {
      if (!element.root) {
        if (element = element.return)
          callback(element);
      }
    };
  }
  var weakMemoize = function weakMemoize2(func) {
    var cache = /* @__PURE__ */ new WeakMap();
    return function(arg) {
      if (cache.has(arg)) {
        return cache.get(arg);
      }
      var ret = func(arg);
      cache.set(arg, ret);
      return ret;
    };
  };
  function memoize$1(fn) {
    var cache = /* @__PURE__ */ Object.create(null);
    return function(arg) {
      if (cache[arg] === void 0)
        cache[arg] = fn(arg);
      return cache[arg];
    };
  }
  var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index2) {
    var previous = 0;
    var character2 = 0;
    while (true) {
      previous = character2;
      character2 = peek();
      if (previous === 38 && character2 === 12) {
        points[index2] = 1;
      }
      if (token(character2)) {
        break;
      }
      next();
    }
    return slice(begin, position);
  };
  var toRules = function toRules2(parsed, points) {
    var index2 = -1;
    var character2 = 44;
    do {
      switch (token(character2)) {
        case 0:
          if (character2 === 38 && peek() === 12) {
            points[index2] = 1;
          }
          parsed[index2] += identifierWithPointTracking(position - 1, points, index2);
          break;
        case 2:
          parsed[index2] += delimit(character2);
          break;
        case 4:
          if (character2 === 44) {
            parsed[++index2] = peek() === 58 ? "&\f" : "";
            points[index2] = parsed[index2].length;
            break;
          }
        default:
          parsed[index2] += from(character2);
      }
    } while (character2 = next());
    return parsed;
  };
  var getRules = function getRules2(value, points) {
    return dealloc(toRules(alloc(value), points));
  };
  var fixedElements = /* @__PURE__ */ new WeakMap();
  var compat = function compat2(element) {
    if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
    // negative .length indicates that this rule has been already prefixed
    element.length < 1) {
      return;
    }
    var value = element.value, parent = element.parent;
    var isImplicitRule = element.column === parent.column && element.line === parent.line;
    while (parent.type !== "rule") {
      parent = parent.parent;
      if (!parent)
        return;
    }
    if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
      return;
    }
    if (isImplicitRule) {
      return;
    }
    fixedElements.set(element, true);
    var points = [];
    var rules = getRules(value, points);
    var parentRules = parent.props;
    for (var i2 = 0, k2 = 0; i2 < rules.length; i2++) {
      for (var j2 = 0; j2 < parentRules.length; j2++, k2++) {
        element.props[k2] = points[i2] ? rules[i2].replace(/&\f/g, parentRules[j2]) : parentRules[j2] + " " + rules[i2];
      }
    }
  };
  var removeLabel = function removeLabel2(element) {
    if (element.type === "decl") {
      var value = element.value;
      if (
        // charcode for l
        value.charCodeAt(0) === 108 && // charcode for b
        value.charCodeAt(2) === 98
      ) {
        element["return"] = "";
        element.value = "";
      }
    }
  };
  function prefix(value, length2) {
    switch (hash(value, length2)) {
      case 5103:
        return WEBKIT + "print-" + value + value;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return WEBKIT + value + value;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return WEBKIT + value + MOZ + value + MS + value + value;
      case 6828:
      case 4268:
        return WEBKIT + value + MS + value + value;
      case 6165:
        return WEBKIT + value + MS + "flex-" + value + value;
      case 5187:
        return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
      case 5443:
        return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
      case 4675:
        return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
      case 5548:
        return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
      case 5292:
        return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
      case 6060:
        return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
      case 4554:
        return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
      case 6187:
        return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
      case 5495:
      case 3959:
        return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
      case 4968:
        return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (strlen(value) - 1 - length2 > 6)
          switch (charat(value, length2 + 1)) {
            case 109:
              if (charat(value, length2 + 4) !== 45)
                break;
            case 102:
              return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
            case 115:
              return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
          }
        break;
      case 4949:
        if (charat(value, length2 + 1) !== 115)
          break;
      case 6444:
        switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
          case 107:
            return replace(value, ":", ":" + WEBKIT) + value;
          case 101:
            return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
        }
        break;
      case 5936:
        switch (charat(value, length2 + 11)) {
          case 114:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
          case 108:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
          case 45:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
        }
        return WEBKIT + value + MS + value + value;
    }
    return value;
  }
  var prefixer = function prefixer2(element, index2, children, callback) {
    if (element.length > -1) {
      if (!element["return"])
        switch (element.type) {
          case DECLARATION:
            element["return"] = prefix(element.value, element.length);
            break;
          case KEYFRAMES:
            return serialize([copy(element, {
              value: replace(element.value, "@", "@" + WEBKIT)
            })], callback);
          case RULESET:
            if (element.length)
              return combine(element.props, function(value) {
                switch (match(value, /(::plac\w+|:read-\w+)/)) {
                  case ":read-only":
                  case ":read-write":
                    return serialize([copy(element, {
                      props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]
                    })], callback);
                  case "::placeholder":
                    return serialize([copy(element, {
                      props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
                    }), copy(element, {
                      props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]
                    }), copy(element, {
                      props: [replace(value, /:(plac\w+)/, MS + "input-$1")]
                    })], callback);
                }
                return "";
              });
        }
    }
  };
  var defaultStylisPlugins = [prefixer];
  var createCache = function createCache2(options) {
    var key = options.key;
    if (key === "css") {
      var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(ssrStyles, function(node2) {
        var dataEmotionAttribute = node2.getAttribute("data-emotion");
        if (dataEmotionAttribute.indexOf(" ") === -1) {
          return;
        }
        document.head.appendChild(node2);
        node2.setAttribute("data-s", "");
      });
    }
    var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
    var inserted = {};
    var container;
    var nodesToHydrate = [];
    {
      container = options.container || document.head;
      Array.prototype.forEach.call(
        // this means we will ignore elements which don't have a space in them which
        // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
        document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
        function(node2) {
          var attrib = node2.getAttribute("data-emotion").split(" ");
          for (var i2 = 1; i2 < attrib.length; i2++) {
            inserted[attrib[i2]] = true;
          }
          nodesToHydrate.push(node2);
        }
      );
    }
    var _insert;
    var omnipresentPlugins = [compat, removeLabel];
    {
      var currentSheet;
      var finalizingPlugins = [stringify, rulesheet(function(rule) {
        currentSheet.insert(rule);
      })];
      var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
      var stylis = function stylis2(styles2) {
        return serialize(compile(styles2), serializer);
      };
      _insert = function insert(selector, serialized, sheet, shouldCache) {
        currentSheet = sheet;
        stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
        if (shouldCache) {
          cache.inserted[serialized.name] = true;
        }
      };
    }
    var cache = {
      key,
      sheet: new StyleSheet({
        key,
        container,
        nonce: options.nonce,
        speedy: options.speedy,
        prepend: options.prepend,
        insertionPoint: options.insertionPoint
      }),
      nonce: options.nonce,
      inserted,
      registered: {},
      insert: _insert
    };
    cache.sheet.hydrate(nodesToHydrate);
    return cache;
  };
  function _extends$1() {
    _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends$1.apply(this, arguments);
  }
  var reactIsExports = {};
  var reactIs$1 = {
    get exports() {
      return reactIsExports;
    },
    set exports(v2) {
      reactIsExports = v2;
    }
  };
  var reactIs_production_min = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var b$5 = "function" === typeof Symbol && Symbol.for, c$6 = b$5 ? Symbol.for("react.element") : 60103, d$4 = b$5 ? Symbol.for("react.portal") : 60106, e$1 = b$5 ? Symbol.for("react.fragment") : 60107, f$4 = b$5 ? Symbol.for("react.strict_mode") : 60108, g$4 = b$5 ? Symbol.for("react.profiler") : 60114, h$6 = b$5 ? Symbol.for("react.provider") : 60109, k$4 = b$5 ? Symbol.for("react.context") : 60110, l$5 = b$5 ? Symbol.for("react.async_mode") : 60111, m$4 = b$5 ? Symbol.for("react.concurrent_mode") : 60111, n$3 = b$5 ? Symbol.for("react.forward_ref") : 60112, p$4 = b$5 ? Symbol.for("react.suspense") : 60113, q$2 = b$5 ? Symbol.for("react.suspense_list") : 60120, r$4 = b$5 ? Symbol.for("react.memo") : 60115, t$1 = b$5 ? Symbol.for("react.lazy") : 60116, v$4 = b$5 ? Symbol.for("react.block") : 60121, w$3 = b$5 ? Symbol.for("react.fundamental") : 60117, x$5 = b$5 ? Symbol.for("react.responder") : 60118, y$6 = b$5 ? Symbol.for("react.scope") : 60119;
  function z$3(a2) {
    if ("object" === typeof a2 && null !== a2) {
      var u2 = a2.$$typeof;
      switch (u2) {
        case c$6:
          switch (a2 = a2.type, a2) {
            case l$5:
            case m$4:
            case e$1:
            case g$4:
            case f$4:
            case p$4:
              return a2;
            default:
              switch (a2 = a2 && a2.$$typeof, a2) {
                case k$4:
                case n$3:
                case t$1:
                case r$4:
                case h$6:
                  return a2;
                default:
                  return u2;
              }
          }
        case d$4:
          return u2;
      }
    }
  }
  function A$2(a2) {
    return z$3(a2) === m$4;
  }
  reactIs_production_min.AsyncMode = l$5;
  reactIs_production_min.ConcurrentMode = m$4;
  reactIs_production_min.ContextConsumer = k$4;
  reactIs_production_min.ContextProvider = h$6;
  reactIs_production_min.Element = c$6;
  reactIs_production_min.ForwardRef = n$3;
  reactIs_production_min.Fragment = e$1;
  reactIs_production_min.Lazy = t$1;
  reactIs_production_min.Memo = r$4;
  reactIs_production_min.Portal = d$4;
  reactIs_production_min.Profiler = g$4;
  reactIs_production_min.StrictMode = f$4;
  reactIs_production_min.Suspense = p$4;
  reactIs_production_min.isAsyncMode = function(a2) {
    return A$2(a2) || z$3(a2) === l$5;
  };
  reactIs_production_min.isConcurrentMode = A$2;
  reactIs_production_min.isContextConsumer = function(a2) {
    return z$3(a2) === k$4;
  };
  reactIs_production_min.isContextProvider = function(a2) {
    return z$3(a2) === h$6;
  };
  reactIs_production_min.isElement = function(a2) {
    return "object" === typeof a2 && null !== a2 && a2.$$typeof === c$6;
  };
  reactIs_production_min.isForwardRef = function(a2) {
    return z$3(a2) === n$3;
  };
  reactIs_production_min.isFragment = function(a2) {
    return z$3(a2) === e$1;
  };
  reactIs_production_min.isLazy = function(a2) {
    return z$3(a2) === t$1;
  };
  reactIs_production_min.isMemo = function(a2) {
    return z$3(a2) === r$4;
  };
  reactIs_production_min.isPortal = function(a2) {
    return z$3(a2) === d$4;
  };
  reactIs_production_min.isProfiler = function(a2) {
    return z$3(a2) === g$4;
  };
  reactIs_production_min.isStrictMode = function(a2) {
    return z$3(a2) === f$4;
  };
  reactIs_production_min.isSuspense = function(a2) {
    return z$3(a2) === p$4;
  };
  reactIs_production_min.isValidElementType = function(a2) {
    return "string" === typeof a2 || "function" === typeof a2 || a2 === e$1 || a2 === m$4 || a2 === g$4 || a2 === f$4 || a2 === p$4 || a2 === q$2 || "object" === typeof a2 && null !== a2 && (a2.$$typeof === t$1 || a2.$$typeof === r$4 || a2.$$typeof === h$6 || a2.$$typeof === k$4 || a2.$$typeof === n$3 || a2.$$typeof === w$3 || a2.$$typeof === x$5 || a2.$$typeof === y$6 || a2.$$typeof === v$4);
  };
  reactIs_production_min.typeOf = z$3;
  (function(module) {
    {
      module.exports = reactIs_production_min;
    }
  })(reactIs$1);
  var reactIs = reactIsExports;
  var FORWARD_REF_STATICS = {
    "$$typeof": true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  };
  var MEMO_STATICS = {
    "$$typeof": true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  };
  var TYPE_STATICS = {};
  TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
  TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
  var isBrowser = true;
  function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = "";
    classNames.split(" ").forEach(function(className) {
      if (registered[className] !== void 0) {
        registeredStyles.push(registered[className] + ";");
      } else {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }
  var registerStyles = function registerStyles2(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;
    if (
      // we only need to add the styles to the registered cache if the
      // class name could be used further down
      // the tree but if it's a string tag, we know it won't
      // so we don't have to add it to registered cache.
      // this improves memory usage since we can avoid storing the whole style string
      (isStringTag === false || // we need to always store it if we're in compat mode and
      // in node since emotion-server relies on whether a style is in
      // the registered cache to know whether a style is global or not
      // also, note that this check will be dead code eliminated in the browser
      isBrowser === false) && cache.registered[className] === void 0
    ) {
      cache.registered[className] = serialized.styles;
    }
  };
  var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
    registerStyles(cache, serialized, isStringTag);
    var className = cache.key + "-" + serialized.name;
    if (cache.inserted[serialized.name] === void 0) {
      var current = serialized;
      do {
        cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
        current = current.next;
      } while (current !== void 0);
    }
  };
  function murmur2(str) {
    var h2 = 0;
    var k2, i2 = 0, len = str.length;
    for (; len >= 4; ++i2, len -= 4) {
      k2 = str.charCodeAt(i2) & 255 | (str.charCodeAt(++i2) & 255) << 8 | (str.charCodeAt(++i2) & 255) << 16 | (str.charCodeAt(++i2) & 255) << 24;
      k2 = /* Math.imul(k, m): */
      (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
      k2 ^= /* k >>> r: */
      k2 >>> 24;
      h2 = /* Math.imul(k, m): */
      (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
      (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
    }
    switch (len) {
      case 3:
        h2 ^= (str.charCodeAt(i2 + 2) & 255) << 16;
      case 2:
        h2 ^= (str.charCodeAt(i2 + 1) & 255) << 8;
      case 1:
        h2 ^= str.charCodeAt(i2) & 255;
        h2 = /* Math.imul(h, m): */
        (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
    }
    h2 ^= h2 >>> 13;
    h2 = /* Math.imul(h, m): */
    (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
    return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
  }
  var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };
  var hyphenateRegex = /[A-Z]|^ms/g;
  var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
  var isCustomProperty = function isCustomProperty2(property) {
    return property.charCodeAt(1) === 45;
  };
  var isProcessableValue = function isProcessableValue2(value) {
    return value != null && typeof value !== "boolean";
  };
  var processStyleName = /* @__PURE__ */ memoize$1(function(styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
  });
  var processStyleValue = function processStyleValue2(key, value) {
    switch (key) {
      case "animation":
      case "animationName": {
        if (typeof value === "string") {
          return value.replace(animationRegex, function(match2, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
    }
    if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
      return value + "px";
    }
    return value;
  };
  var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
  function handleInterpolation(mergedProps, registered, interpolation) {
    if (interpolation == null) {
      return "";
    }
    if (interpolation.__emotion_styles !== void 0) {
      return interpolation;
    }
    switch (typeof interpolation) {
      case "boolean": {
        return "";
      }
      case "object": {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }
        if (interpolation.styles !== void 0) {
          var next2 = interpolation.next;
          if (next2 !== void 0) {
            while (next2 !== void 0) {
              cursor = {
                name: next2.name,
                styles: next2.styles,
                next: cursor
              };
              next2 = next2.next;
            }
          }
          var styles2 = interpolation.styles + ";";
          return styles2;
        }
        return createStringFromObject(mergedProps, registered, interpolation);
      }
      case "function": {
        if (mergedProps !== void 0) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        }
        break;
      }
    }
    if (registered == null) {
      return interpolation;
    }
    var cached = registered[interpolation];
    return cached !== void 0 ? cached : interpolation;
  }
  function createStringFromObject(mergedProps, registered, obj) {
    var string = "";
    if (Array.isArray(obj)) {
      for (var i2 = 0; i2 < obj.length; i2++) {
        string += handleInterpolation(mergedProps, registered, obj[i2]) + ";";
      }
    } else {
      for (var _key in obj) {
        var value = obj[_key];
        if (typeof value !== "object") {
          if (registered != null && registered[value] !== void 0) {
            string += _key + "{" + registered[value] + "}";
          } else if (isProcessableValue(value)) {
            string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
          }
        } else {
          if (_key === "NO_COMPONENT_SELECTOR" && false) {
            throw new Error(noComponentSelectorMessage);
          }
          if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
            for (var _i = 0; _i < value.length; _i++) {
              if (isProcessableValue(value[_i])) {
                string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
              }
            }
          } else {
            var interpolated = handleInterpolation(mergedProps, registered, value);
            switch (_key) {
              case "animation":
              case "animationName": {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }
              default: {
                string += _key + "{" + interpolated + "}";
              }
            }
          }
        }
      }
    }
    return string;
  }
  var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
  var cursor;
  var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
      return args[0];
    }
    var stringMode = true;
    var styles2 = "";
    cursor = void 0;
    var strings = args[0];
    if (strings == null || strings.raw === void 0) {
      stringMode = false;
      styles2 += handleInterpolation(mergedProps, registered, strings);
    } else {
      styles2 += strings[0];
    }
    for (var i2 = 1; i2 < args.length; i2++) {
      styles2 += handleInterpolation(mergedProps, registered, args[i2]);
      if (stringMode) {
        styles2 += strings[i2];
      }
    }
    labelPattern.lastIndex = 0;
    var identifierName = "";
    var match2;
    while ((match2 = labelPattern.exec(styles2)) !== null) {
      identifierName += "-" + // $FlowFixMe we know it's not null
      match2[1];
    }
    var name = murmur2(styles2) + identifierName;
    return {
      name,
      styles: styles2,
      next: cursor
    };
  };
  var syncFallback = function syncFallback2(create) {
    return create();
  };
  var useInsertionEffect$1 = React$2["useInsertionEffect"] ? React$2["useInsertionEffect"] : false;
  var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect$1 || syncFallback;
  var useInsertionEffectWithLayoutFallback = useInsertionEffect$1 || reactExports.useLayoutEffect;
  var EmotionCacheContext = /* @__PURE__ */ reactExports.createContext(
    // we're doing this to avoid preconstruct's dead code elimination in this one case
    // because this module is primarily intended for the browser and node
    // but it's also required in react native and similar environments sometimes
    // and we could have a special build just for that
    // but this is much easier and the native packages
    // might use a different theme context in the future anyway
    typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
      key: "css"
    }) : null
  );
  EmotionCacheContext.Provider;
  var withEmotionCache = function withEmotionCache2(func) {
    return /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
      var cache = reactExports.useContext(EmotionCacheContext);
      return func(props, cache, ref);
    });
  };
  var ThemeContext = /* @__PURE__ */ reactExports.createContext({});
  var useTheme = function useTheme2() {
    return reactExports.useContext(ThemeContext);
  };
  var getTheme = function getTheme2(outerTheme, theme2) {
    if (typeof theme2 === "function") {
      var mergedTheme = theme2(outerTheme);
      return mergedTheme;
    }
    return _extends$1({}, outerTheme, theme2);
  };
  var createCacheWithTheme = /* @__PURE__ */ weakMemoize(function(outerTheme) {
    return weakMemoize(function(theme2) {
      return getTheme(outerTheme, theme2);
    });
  });
  var ThemeProvider = function ThemeProvider2(props) {
    var theme2 = reactExports.useContext(ThemeContext);
    if (props.theme !== theme2) {
      theme2 = createCacheWithTheme(theme2)(props.theme);
    }
    return /* @__PURE__ */ reactExports.createElement(ThemeContext.Provider, {
      value: theme2
    }, props.children);
  };
  var Global = /* @__PURE__ */ withEmotionCache(function(props, cache) {
    var styles2 = props.styles;
    var serialized = serializeStyles([styles2], void 0, reactExports.useContext(ThemeContext));
    var sheetRef = reactExports.useRef();
    useInsertionEffectWithLayoutFallback(function() {
      var key = cache.key + "-global";
      var sheet = new cache.sheet.constructor({
        key,
        nonce: cache.sheet.nonce,
        container: cache.sheet.container,
        speedy: cache.sheet.isSpeedy
      });
      var rehydrating = false;
      var node2 = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
      if (cache.sheet.tags.length) {
        sheet.before = cache.sheet.tags[0];
      }
      if (node2 !== null) {
        rehydrating = true;
        node2.setAttribute("data-emotion", key);
        sheet.hydrate([node2]);
      }
      sheetRef.current = [sheet, rehydrating];
      return function() {
        sheet.flush();
      };
    }, [cache]);
    useInsertionEffectWithLayoutFallback(function() {
      var sheetRefCurrent = sheetRef.current;
      var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
      if (rehydrating) {
        sheetRefCurrent[1] = false;
        return;
      }
      if (serialized.next !== void 0) {
        insertStyles(cache, serialized.next, true);
      }
      if (sheet.tags.length) {
        var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
        sheet.before = element;
        sheet.flush();
      }
      cache.insert("", serialized, sheet, false);
    }, [cache, serialized.name]);
    return null;
  });
  function css() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return serializeStyles(args);
  }
  class ErrorBoundary extends React$1.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
    componentDidCatch(error, info) {
      console.error(error, info.componentStack);
    }
    render() {
      if (this.state.hasError) {
        return this.props.fallback;
      }
      return this.props.children;
    }
  }
  var cjsExports = {};
  var cjs = {
    get exports() {
      return cjsExports;
    },
    set exports(v2) {
      cjsExports = v2;
    }
  };
  var Draggable$2 = {};
  var propTypesExports = {};
  var propTypes = {
    get exports() {
      return propTypesExports;
    },
    set exports(v2) {
      propTypesExports = v2;
    }
  };
  var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
  var ReactPropTypesSecret = ReactPropTypesSecret_1;
  function emptyFunction() {
  }
  function emptyFunctionWithReset() {
  }
  emptyFunctionWithReset.resetWarningCache = emptyFunction;
  var factoryWithThrowingShims = function() {
    function shim2(props, propName, componentName, location2, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        return;
      }
      var err = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      err.name = "Invariant Violation";
      throw err;
    }
    shim2.isRequired = shim2;
    function getShim() {
      return shim2;
    }
    var ReactPropTypes = {
      array: shim2,
      bigint: shim2,
      bool: shim2,
      func: shim2,
      number: shim2,
      object: shim2,
      string: shim2,
      symbol: shim2,
      any: shim2,
      arrayOf: getShim,
      element: shim2,
      elementType: shim2,
      instanceOf: getShim,
      node: shim2,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  {
    propTypes.exports = factoryWithThrowingShims();
  }
  function r$3(e2) {
    var t2, f2, n2 = "";
    if ("string" == typeof e2 || "number" == typeof e2)
      n2 += e2;
    else if ("object" == typeof e2)
      if (Array.isArray(e2))
        for (t2 = 0; t2 < e2.length; t2++)
          e2[t2] && (f2 = r$3(e2[t2])) && (n2 && (n2 += " "), n2 += f2);
      else
        for (t2 in e2)
          e2[t2] && (n2 && (n2 += " "), n2 += t2);
    return n2;
  }
  function clsx() {
    for (var e2, t2, f2 = 0, n2 = ""; f2 < arguments.length; )
      (e2 = arguments[f2++]) && (t2 = r$3(e2)) && (n2 && (n2 += " "), n2 += t2);
    return n2;
  }
  const clsx_m = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    clsx,
    default: clsx
  }, Symbol.toStringTag, { value: "Module" }));
  const require$$3 = /* @__PURE__ */ getAugmentedNamespace(clsx_m);
  var domFns = {};
  var shims = {};
  Object.defineProperty(shims, "__esModule", {
    value: true
  });
  shims.dontSetMe = dontSetMe;
  shims.findInArray = findInArray;
  shims.int = int;
  shims.isFunction = isFunction$1;
  shims.isNum = isNum;
  function findInArray(array, callback) {
    for (var i2 = 0, length2 = array.length; i2 < length2; i2++) {
      if (callback.apply(callback, [array[i2], i2, array]))
        return array[i2];
    }
  }
  function isFunction$1(func) {
    return typeof func === "function" || Object.prototype.toString.call(func) === "[object Function]";
  }
  function isNum(num) {
    return typeof num === "number" && !isNaN(num);
  }
  function int(a2) {
    return parseInt(a2, 10);
  }
  function dontSetMe(props, propName, componentName) {
    if (props[propName]) {
      return new Error("Invalid prop ".concat(propName, " passed to ").concat(componentName, " - do not set this, set it on the child."));
    }
  }
  var getPrefix$1 = {};
  Object.defineProperty(getPrefix$1, "__esModule", {
    value: true
  });
  getPrefix$1.browserPrefixToKey = browserPrefixToKey;
  getPrefix$1.browserPrefixToStyle = browserPrefixToStyle;
  getPrefix$1.default = void 0;
  getPrefix$1.getPrefix = getPrefix;
  var prefixes = ["Moz", "Webkit", "O", "ms"];
  function getPrefix() {
    var _window$document, _window$document$docu;
    var prop = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
    if (typeof window === "undefined")
      return "";
    var style = (_window$document = window.document) === null || _window$document === void 0 ? void 0 : (_window$document$docu = _window$document.documentElement) === null || _window$document$docu === void 0 ? void 0 : _window$document$docu.style;
    if (!style)
      return "";
    if (prop in style)
      return "";
    for (var i2 = 0; i2 < prefixes.length; i2++) {
      if (browserPrefixToKey(prop, prefixes[i2]) in style)
        return prefixes[i2];
    }
    return "";
  }
  function browserPrefixToKey(prop, prefix2) {
    return prefix2 ? "".concat(prefix2).concat(kebabToTitleCase(prop)) : prop;
  }
  function browserPrefixToStyle(prop, prefix2) {
    return prefix2 ? "-".concat(prefix2.toLowerCase(), "-").concat(prop) : prop;
  }
  function kebabToTitleCase(str) {
    var out = "";
    var shouldCapitalize = true;
    for (var i2 = 0; i2 < str.length; i2++) {
      if (shouldCapitalize) {
        out += str[i2].toUpperCase();
        shouldCapitalize = false;
      } else if (str[i2] === "-") {
        shouldCapitalize = true;
      } else {
        out += str[i2];
      }
    }
    return out;
  }
  var _default = getPrefix();
  getPrefix$1.default = _default;
  function _typeof$1(obj) {
    "@babel/helpers - typeof";
    return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof$1(obj);
  }
  Object.defineProperty(domFns, "__esModule", {
    value: true
  });
  domFns.addClassName = addClassName;
  domFns.addEvent = addEvent;
  domFns.addUserSelectStyles = addUserSelectStyles;
  domFns.createCSSTransform = createCSSTransform;
  domFns.createSVGTransform = createSVGTransform;
  domFns.getTouch = getTouch;
  domFns.getTouchIdentifier = getTouchIdentifier;
  domFns.getTranslation = getTranslation;
  domFns.innerHeight = innerHeight;
  domFns.innerWidth = innerWidth;
  domFns.matchesSelector = matchesSelector;
  domFns.matchesSelectorAndParentsTo = matchesSelectorAndParentsTo;
  domFns.offsetXYFromParent = offsetXYFromParent;
  domFns.outerHeight = outerHeight;
  domFns.outerWidth = outerWidth;
  domFns.removeClassName = removeClassName;
  domFns.removeEvent = removeEvent;
  domFns.removeUserSelectStyles = removeUserSelectStyles;
  var _shims$2 = shims;
  var _getPrefix = _interopRequireWildcard$1(getPrefix$1);
  function _getRequireWildcardCache$1(nodeInterop) {
    if (typeof WeakMap !== "function")
      return null;
    var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
    var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache$1 = function _getRequireWildcardCache2(nodeInterop2) {
      return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }
  function _interopRequireWildcard$1(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof$1(obj) !== "object" && typeof obj !== "function") {
      return { default: obj };
    }
    var cache = _getRequireWildcardCache$1(nodeInterop);
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function ownKeys$1(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$1(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = null != arguments[i2] ? arguments[i2] : {};
      i2 % 2 ? ownKeys$1(Object(source), true).forEach(function(key) {
        _defineProperty$2(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty$2(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var matchesSelectorFunc = "";
  function matchesSelector(el2, selector) {
    if (!matchesSelectorFunc) {
      matchesSelectorFunc = (0, _shims$2.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(method) {
        return (0, _shims$2.isFunction)(el2[method]);
      });
    }
    if (!(0, _shims$2.isFunction)(el2[matchesSelectorFunc]))
      return false;
    return el2[matchesSelectorFunc](selector);
  }
  function matchesSelectorAndParentsTo(el2, selector, baseNode) {
    var node2 = el2;
    do {
      if (matchesSelector(node2, selector))
        return true;
      if (node2 === baseNode)
        return false;
      node2 = node2.parentNode;
    } while (node2);
    return false;
  }
  function addEvent(el2, event, handler, inputOptions) {
    if (!el2)
      return;
    var options = _objectSpread$1({
      capture: true
    }, inputOptions);
    if (el2.addEventListener) {
      el2.addEventListener(event, handler, options);
    } else if (el2.attachEvent) {
      el2.attachEvent("on" + event, handler);
    } else {
      el2["on" + event] = handler;
    }
  }
  function removeEvent(el2, event, handler, inputOptions) {
    if (!el2)
      return;
    var options = _objectSpread$1({
      capture: true
    }, inputOptions);
    if (el2.removeEventListener) {
      el2.removeEventListener(event, handler, options);
    } else if (el2.detachEvent) {
      el2.detachEvent("on" + event, handler);
    } else {
      el2["on" + event] = null;
    }
  }
  function outerHeight(node2) {
    var height = node2.clientHeight;
    var computedStyle = node2.ownerDocument.defaultView.getComputedStyle(node2);
    height += (0, _shims$2.int)(computedStyle.borderTopWidth);
    height += (0, _shims$2.int)(computedStyle.borderBottomWidth);
    return height;
  }
  function outerWidth(node2) {
    var width = node2.clientWidth;
    var computedStyle = node2.ownerDocument.defaultView.getComputedStyle(node2);
    width += (0, _shims$2.int)(computedStyle.borderLeftWidth);
    width += (0, _shims$2.int)(computedStyle.borderRightWidth);
    return width;
  }
  function innerHeight(node2) {
    var height = node2.clientHeight;
    var computedStyle = node2.ownerDocument.defaultView.getComputedStyle(node2);
    height -= (0, _shims$2.int)(computedStyle.paddingTop);
    height -= (0, _shims$2.int)(computedStyle.paddingBottom);
    return height;
  }
  function innerWidth(node2) {
    var width = node2.clientWidth;
    var computedStyle = node2.ownerDocument.defaultView.getComputedStyle(node2);
    width -= (0, _shims$2.int)(computedStyle.paddingLeft);
    width -= (0, _shims$2.int)(computedStyle.paddingRight);
    return width;
  }
  function offsetXYFromParent(evt, offsetParent, scale) {
    var isBody = offsetParent === offsetParent.ownerDocument.body;
    var offsetParentRect = isBody ? {
      left: 0,
      top: 0
    } : offsetParent.getBoundingClientRect();
    var x2 = (evt.clientX + offsetParent.scrollLeft - offsetParentRect.left) / scale;
    var y2 = (evt.clientY + offsetParent.scrollTop - offsetParentRect.top) / scale;
    return {
      x: x2,
      y: y2
    };
  }
  function createCSSTransform(controlPos, positionOffset) {
    var translation = getTranslation(controlPos, positionOffset, "px");
    return _defineProperty$2({}, (0, _getPrefix.browserPrefixToKey)("transform", _getPrefix.default), translation);
  }
  function createSVGTransform(controlPos, positionOffset) {
    var translation = getTranslation(controlPos, positionOffset, "");
    return translation;
  }
  function getTranslation(_ref2, positionOffset, unitSuffix) {
    var x2 = _ref2.x, y2 = _ref2.y;
    var translation = "translate(".concat(x2).concat(unitSuffix, ",").concat(y2).concat(unitSuffix, ")");
    if (positionOffset) {
      var defaultX = "".concat(typeof positionOffset.x === "string" ? positionOffset.x : positionOffset.x + unitSuffix);
      var defaultY = "".concat(typeof positionOffset.y === "string" ? positionOffset.y : positionOffset.y + unitSuffix);
      translation = "translate(".concat(defaultX, ", ").concat(defaultY, ")") + translation;
    }
    return translation;
  }
  function getTouch(e2, identifier2) {
    return e2.targetTouches && (0, _shims$2.findInArray)(e2.targetTouches, function(t2) {
      return identifier2 === t2.identifier;
    }) || e2.changedTouches && (0, _shims$2.findInArray)(e2.changedTouches, function(t2) {
      return identifier2 === t2.identifier;
    });
  }
  function getTouchIdentifier(e2) {
    if (e2.targetTouches && e2.targetTouches[0])
      return e2.targetTouches[0].identifier;
    if (e2.changedTouches && e2.changedTouches[0])
      return e2.changedTouches[0].identifier;
  }
  function addUserSelectStyles(doc) {
    if (!doc)
      return;
    var styleEl = doc.getElementById("react-draggable-style-el");
    if (!styleEl) {
      styleEl = doc.createElement("style");
      styleEl.type = "text/css";
      styleEl.id = "react-draggable-style-el";
      styleEl.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n";
      styleEl.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n";
      doc.getElementsByTagName("head")[0].appendChild(styleEl);
    }
    if (doc.body)
      addClassName(doc.body, "react-draggable-transparent-selection");
  }
  function removeUserSelectStyles(doc) {
    if (!doc)
      return;
    try {
      if (doc.body)
        removeClassName(doc.body, "react-draggable-transparent-selection");
      if (doc.selection) {
        doc.selection.empty();
      } else {
        var selection = (doc.defaultView || window).getSelection();
        if (selection && selection.type !== "Caret") {
          selection.removeAllRanges();
        }
      }
    } catch (e2) {
    }
  }
  function addClassName(el2, className) {
    if (el2.classList) {
      el2.classList.add(className);
    } else {
      if (!el2.className.match(new RegExp("(?:^|\\s)".concat(className, "(?!\\S)")))) {
        el2.className += " ".concat(className);
      }
    }
  }
  function removeClassName(el2, className) {
    if (el2.classList) {
      el2.classList.remove(className);
    } else {
      el2.className = el2.className.replace(new RegExp("(?:^|\\s)".concat(className, "(?!\\S)"), "g"), "");
    }
  }
  var positionFns = {};
  Object.defineProperty(positionFns, "__esModule", {
    value: true
  });
  positionFns.canDragX = canDragX;
  positionFns.canDragY = canDragY;
  positionFns.createCoreData = createCoreData;
  positionFns.createDraggableData = createDraggableData;
  positionFns.getBoundPosition = getBoundPosition;
  positionFns.getControlPosition = getControlPosition;
  positionFns.snapToGrid = snapToGrid;
  var _shims$1 = shims;
  var _domFns$1 = domFns;
  function getBoundPosition(draggable, x2, y2) {
    if (!draggable.props.bounds)
      return [x2, y2];
    var bounds = draggable.props.bounds;
    bounds = typeof bounds === "string" ? bounds : cloneBounds(bounds);
    var node2 = findDOMNode(draggable);
    if (typeof bounds === "string") {
      var ownerDocument = node2.ownerDocument;
      var ownerWindow = ownerDocument.defaultView;
      var boundNode;
      if (bounds === "parent") {
        boundNode = node2.parentNode;
      } else {
        boundNode = ownerDocument.querySelector(bounds);
      }
      if (!(boundNode instanceof ownerWindow.HTMLElement)) {
        throw new Error('Bounds selector "' + bounds + '" could not find an element.');
      }
      var boundNodeEl = boundNode;
      var nodeStyle = ownerWindow.getComputedStyle(node2);
      var boundNodeStyle = ownerWindow.getComputedStyle(boundNodeEl);
      bounds = {
        left: -node2.offsetLeft + (0, _shims$1.int)(boundNodeStyle.paddingLeft) + (0, _shims$1.int)(nodeStyle.marginLeft),
        top: -node2.offsetTop + (0, _shims$1.int)(boundNodeStyle.paddingTop) + (0, _shims$1.int)(nodeStyle.marginTop),
        right: (0, _domFns$1.innerWidth)(boundNodeEl) - (0, _domFns$1.outerWidth)(node2) - node2.offsetLeft + (0, _shims$1.int)(boundNodeStyle.paddingRight) - (0, _shims$1.int)(nodeStyle.marginRight),
        bottom: (0, _domFns$1.innerHeight)(boundNodeEl) - (0, _domFns$1.outerHeight)(node2) - node2.offsetTop + (0, _shims$1.int)(boundNodeStyle.paddingBottom) - (0, _shims$1.int)(nodeStyle.marginBottom)
      };
    }
    if ((0, _shims$1.isNum)(bounds.right))
      x2 = Math.min(x2, bounds.right);
    if ((0, _shims$1.isNum)(bounds.bottom))
      y2 = Math.min(y2, bounds.bottom);
    if ((0, _shims$1.isNum)(bounds.left))
      x2 = Math.max(x2, bounds.left);
    if ((0, _shims$1.isNum)(bounds.top))
      y2 = Math.max(y2, bounds.top);
    return [x2, y2];
  }
  function snapToGrid(grid, pendingX, pendingY) {
    var x2 = Math.round(pendingX / grid[0]) * grid[0];
    var y2 = Math.round(pendingY / grid[1]) * grid[1];
    return [x2, y2];
  }
  function canDragX(draggable) {
    return draggable.props.axis === "both" || draggable.props.axis === "x";
  }
  function canDragY(draggable) {
    return draggable.props.axis === "both" || draggable.props.axis === "y";
  }
  function getControlPosition(e2, touchIdentifier, draggableCore) {
    var touchObj = typeof touchIdentifier === "number" ? (0, _domFns$1.getTouch)(e2, touchIdentifier) : null;
    if (typeof touchIdentifier === "number" && !touchObj)
      return null;
    var node2 = findDOMNode(draggableCore);
    var offsetParent = draggableCore.props.offsetParent || node2.offsetParent || node2.ownerDocument.body;
    return (0, _domFns$1.offsetXYFromParent)(touchObj || e2, offsetParent, draggableCore.props.scale);
  }
  function createCoreData(draggable, x2, y2) {
    var state = draggable.state;
    var isStart = !(0, _shims$1.isNum)(state.lastX);
    var node2 = findDOMNode(draggable);
    if (isStart) {
      return {
        node: node2,
        deltaX: 0,
        deltaY: 0,
        lastX: x2,
        lastY: y2,
        x: x2,
        y: y2
      };
    } else {
      return {
        node: node2,
        deltaX: x2 - state.lastX,
        deltaY: y2 - state.lastY,
        lastX: state.lastX,
        lastY: state.lastY,
        x: x2,
        y: y2
      };
    }
  }
  function createDraggableData(draggable, coreData) {
    var scale = draggable.props.scale;
    return {
      node: coreData.node,
      x: draggable.state.x + coreData.deltaX / scale,
      y: draggable.state.y + coreData.deltaY / scale,
      deltaX: coreData.deltaX / scale,
      deltaY: coreData.deltaY / scale,
      lastX: draggable.state.x,
      lastY: draggable.state.y
    };
  }
  function cloneBounds(bounds) {
    return {
      left: bounds.left,
      top: bounds.top,
      right: bounds.right,
      bottom: bounds.bottom
    };
  }
  function findDOMNode(draggable) {
    var node2 = draggable.findDOMNode();
    if (!node2) {
      throw new Error("<DraggableCore>: Unmounted during event!");
    }
    return node2;
  }
  var DraggableCore$2 = {};
  var log$1 = {};
  Object.defineProperty(log$1, "__esModule", {
    value: true
  });
  log$1.default = log;
  function log() {
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof(obj);
  }
  Object.defineProperty(DraggableCore$2, "__esModule", {
    value: true
  });
  DraggableCore$2.default = void 0;
  var React = _interopRequireWildcard(reactExports);
  var _propTypes = _interopRequireDefault(propTypesExports);
  var _reactDom = _interopRequireDefault(reactDomExports);
  var _domFns = domFns;
  var _positionFns = positionFns;
  var _shims = shims;
  var _log = _interopRequireDefault(log$1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function")
      return null;
    var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
    var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
      return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }
  function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return { default: obj };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function _slicedToArray(arr, i2) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o2, minLen) {
    if (!o2)
      return;
    if (typeof o2 === "string")
      return _arrayLikeToArray(o2, minLen);
    var n2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (n2 === "Object" && o2.constructor)
      n2 = o2.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o2);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray(o2, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
      arr2[i2] = arr[i2];
    }
    return arr2;
  }
  function _iterableToArrayLimit(arr, i2) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null)
      return;
    var _arr = [];
    var _n2 = true;
    var _d2 = false;
    var _s, _e2;
    try {
      for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
        _arr.push(_s.value);
        if (i2 && _arr.length === i2)
          break;
      }
    } catch (err) {
      _d2 = true;
      _e2 = err;
    } finally {
      try {
        if (!_n2 && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d2)
          throw _e2;
      }
    }
    return _arr;
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o2, p2) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p3) {
      o3.__proto__ = p3;
      return o3;
    };
    return _setPrototypeOf(o2, p2);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e2) {
      return false;
    }
  }
  function _getPrototypeOf(o2) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
      return o3.__proto__ || Object.getPrototypeOf(o3);
    };
    return _getPrototypeOf(o2);
  }
  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var eventsFor = {
    touch: {
      start: "touchstart",
      move: "touchmove",
      stop: "touchend"
    },
    mouse: {
      start: "mousedown",
      move: "mousemove",
      stop: "mouseup"
    }
  };
  var dragEventFor = eventsFor.mouse;
  var DraggableCore$1 = /* @__PURE__ */ function(_React$Component) {
    _inherits(DraggableCore2, _React$Component);
    var _super = _createSuper(DraggableCore2);
    function DraggableCore2() {
      var _this;
      _classCallCheck(this, DraggableCore2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty$1(_assertThisInitialized(_this), "state", {
        dragging: false,
        // Used while dragging to determine deltas.
        lastX: NaN,
        lastY: NaN,
        touchIdentifier: null
      });
      _defineProperty$1(_assertThisInitialized(_this), "mounted", false);
      _defineProperty$1(_assertThisInitialized(_this), "handleDragStart", function(e2) {
        _this.props.onMouseDown(e2);
        if (!_this.props.allowAnyClick && typeof e2.button === "number" && e2.button !== 0)
          return false;
        var thisNode = _this.findDOMNode();
        if (!thisNode || !thisNode.ownerDocument || !thisNode.ownerDocument.body) {
          throw new Error("<DraggableCore> not mounted on DragStart!");
        }
        var ownerDocument = thisNode.ownerDocument;
        if (_this.props.disabled || !(e2.target instanceof ownerDocument.defaultView.Node) || _this.props.handle && !(0, _domFns.matchesSelectorAndParentsTo)(e2.target, _this.props.handle, thisNode) || _this.props.cancel && (0, _domFns.matchesSelectorAndParentsTo)(e2.target, _this.props.cancel, thisNode)) {
          return;
        }
        if (e2.type === "touchstart")
          e2.preventDefault();
        var touchIdentifier = (0, _domFns.getTouchIdentifier)(e2);
        _this.setState({
          touchIdentifier
        });
        var position2 = (0, _positionFns.getControlPosition)(e2, touchIdentifier, _assertThisInitialized(_this));
        if (position2 == null)
          return;
        var x2 = position2.x, y2 = position2.y;
        var coreEvent = (0, _positionFns.createCoreData)(_assertThisInitialized(_this), x2, y2);
        (0, _log.default)("DraggableCore: handleDragStart: %j", coreEvent);
        (0, _log.default)("calling", _this.props.onStart);
        var shouldUpdate = _this.props.onStart(e2, coreEvent);
        if (shouldUpdate === false || _this.mounted === false)
          return;
        if (_this.props.enableUserSelectHack)
          (0, _domFns.addUserSelectStyles)(ownerDocument);
        _this.setState({
          dragging: true,
          lastX: x2,
          lastY: y2
        });
        (0, _domFns.addEvent)(ownerDocument, dragEventFor.move, _this.handleDrag);
        (0, _domFns.addEvent)(ownerDocument, dragEventFor.stop, _this.handleDragStop);
      });
      _defineProperty$1(_assertThisInitialized(_this), "handleDrag", function(e2) {
        var position2 = (0, _positionFns.getControlPosition)(e2, _this.state.touchIdentifier, _assertThisInitialized(_this));
        if (position2 == null)
          return;
        var x2 = position2.x, y2 = position2.y;
        if (Array.isArray(_this.props.grid)) {
          var deltaX = x2 - _this.state.lastX, deltaY = y2 - _this.state.lastY;
          var _snapToGrid = (0, _positionFns.snapToGrid)(_this.props.grid, deltaX, deltaY);
          var _snapToGrid2 = _slicedToArray(_snapToGrid, 2);
          deltaX = _snapToGrid2[0];
          deltaY = _snapToGrid2[1];
          if (!deltaX && !deltaY)
            return;
          x2 = _this.state.lastX + deltaX, y2 = _this.state.lastY + deltaY;
        }
        var coreEvent = (0, _positionFns.createCoreData)(_assertThisInitialized(_this), x2, y2);
        (0, _log.default)("DraggableCore: handleDrag: %j", coreEvent);
        var shouldUpdate = _this.props.onDrag(e2, coreEvent);
        if (shouldUpdate === false || _this.mounted === false) {
          try {
            _this.handleDragStop(new MouseEvent("mouseup"));
          } catch (err) {
            var event = document.createEvent("MouseEvents");
            event.initMouseEvent("mouseup", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            _this.handleDragStop(event);
          }
          return;
        }
        _this.setState({
          lastX: x2,
          lastY: y2
        });
      });
      _defineProperty$1(_assertThisInitialized(_this), "handleDragStop", function(e2) {
        if (!_this.state.dragging)
          return;
        var position2 = (0, _positionFns.getControlPosition)(e2, _this.state.touchIdentifier, _assertThisInitialized(_this));
        if (position2 == null)
          return;
        var x2 = position2.x, y2 = position2.y;
        if (Array.isArray(_this.props.grid)) {
          var deltaX = x2 - _this.state.lastX || 0;
          var deltaY = y2 - _this.state.lastY || 0;
          var _snapToGrid3 = (0, _positionFns.snapToGrid)(_this.props.grid, deltaX, deltaY);
          var _snapToGrid4 = _slicedToArray(_snapToGrid3, 2);
          deltaX = _snapToGrid4[0];
          deltaY = _snapToGrid4[1];
          x2 = _this.state.lastX + deltaX, y2 = _this.state.lastY + deltaY;
        }
        var coreEvent = (0, _positionFns.createCoreData)(_assertThisInitialized(_this), x2, y2);
        var shouldContinue = _this.props.onStop(e2, coreEvent);
        if (shouldContinue === false || _this.mounted === false)
          return false;
        var thisNode = _this.findDOMNode();
        if (thisNode) {
          if (_this.props.enableUserSelectHack)
            (0, _domFns.removeUserSelectStyles)(thisNode.ownerDocument);
        }
        (0, _log.default)("DraggableCore: handleDragStop: %j", coreEvent);
        _this.setState({
          dragging: false,
          lastX: NaN,
          lastY: NaN
        });
        if (thisNode) {
          (0, _log.default)("DraggableCore: Removing handlers");
          (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.move, _this.handleDrag);
          (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.stop, _this.handleDragStop);
        }
      });
      _defineProperty$1(_assertThisInitialized(_this), "onMouseDown", function(e2) {
        dragEventFor = eventsFor.mouse;
        return _this.handleDragStart(e2);
      });
      _defineProperty$1(_assertThisInitialized(_this), "onMouseUp", function(e2) {
        dragEventFor = eventsFor.mouse;
        return _this.handleDragStop(e2);
      });
      _defineProperty$1(_assertThisInitialized(_this), "onTouchStart", function(e2) {
        dragEventFor = eventsFor.touch;
        return _this.handleDragStart(e2);
      });
      _defineProperty$1(_assertThisInitialized(_this), "onTouchEnd", function(e2) {
        dragEventFor = eventsFor.touch;
        return _this.handleDragStop(e2);
      });
      return _this;
    }
    _createClass(DraggableCore2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.mounted = true;
        var thisNode = this.findDOMNode();
        if (thisNode) {
          (0, _domFns.addEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
            passive: false
          });
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.mounted = false;
        var thisNode = this.findDOMNode();
        if (thisNode) {
          var ownerDocument = thisNode.ownerDocument;
          (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.move, this.handleDrag);
          (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.move, this.handleDrag);
          (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
          (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
          (0, _domFns.removeEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
            passive: false
          });
          if (this.props.enableUserSelectHack)
            (0, _domFns.removeUserSelectStyles)(ownerDocument);
        }
      }
      // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
      // the underlying DOM node ourselves. See the README for more information.
    }, {
      key: "findDOMNode",
      value: function findDOMNode2() {
        var _this$props, _this$props2, _this$props2$nodeRef;
        return (_this$props = this.props) !== null && _this$props !== void 0 && _this$props.nodeRef ? (_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : (_this$props2$nodeRef = _this$props2.nodeRef) === null || _this$props2$nodeRef === void 0 ? void 0 : _this$props2$nodeRef.current : _reactDom.default.findDOMNode(this);
      }
    }, {
      key: "render",
      value: function render() {
        return /* @__PURE__ */ React.cloneElement(React.Children.only(this.props.children), {
          // Note: mouseMove handler is attached to document so it will still function
          // when the user drags quickly and leaves the bounds of the element.
          onMouseDown: this.onMouseDown,
          onMouseUp: this.onMouseUp,
          // onTouchStart is added on `componentDidMount` so they can be added with
          // {passive: false}, which allows it to cancel. See
          // https://developers.google.com/web/updates/2017/01/scrolling-intervention
          onTouchEnd: this.onTouchEnd
        });
      }
    }]);
    return DraggableCore2;
  }(React.Component);
  DraggableCore$2.default = DraggableCore$1;
  _defineProperty$1(DraggableCore$1, "displayName", "DraggableCore");
  _defineProperty$1(DraggableCore$1, "propTypes", {
    /**
     * `allowAnyClick` allows dragging using any mouse button.
     * By default, we only accept the left button.
     *
     * Defaults to `false`.
     */
    allowAnyClick: _propTypes.default.bool,
    /**
     * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
     * with the exception of `onMouseDown`, will not fire.
     */
    disabled: _propTypes.default.bool,
    /**
     * By default, we add 'user-select:none' attributes to the document body
     * to prevent ugly text selection during drag. If this is causing problems
     * for your app, set this to `false`.
     */
    enableUserSelectHack: _propTypes.default.bool,
    /**
     * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
     * instead of using the parent node.
     */
    offsetParent: function offsetParent(props, propName) {
      if (props[propName] && props[propName].nodeType !== 1) {
        throw new Error("Draggable's offsetParent must be a DOM Node.");
      }
    },
    /**
     * `grid` specifies the x and y that dragging should snap to.
     */
    grid: _propTypes.default.arrayOf(_propTypes.default.number),
    /**
     * `handle` specifies a selector to be used as the handle that initiates drag.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *         return (
     *            <Draggable handle=".handle">
     *              <div>
     *                  <div className="handle">Click me to drag</div>
     *                  <div>This is some other content</div>
     *              </div>
     *           </Draggable>
     *         );
     *       }
     *   });
     * ```
     */
    handle: _propTypes.default.string,
    /**
     * `cancel` specifies a selector to be used to prevent drag initialization.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *           return(
     *               <Draggable cancel=".cancel">
     *                   <div>
     *                     <div className="cancel">You can't drag from here</div>
     *                     <div>Dragging here works fine</div>
     *                   </div>
     *               </Draggable>
     *           );
     *       }
     *   });
     * ```
     */
    cancel: _propTypes.default.string,
    /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
     * Unfortunately, in order for <Draggable> to work properly, we need raw access
     * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
     * as in this example:
     *
     * function MyComponent() {
     *   const nodeRef = React.useRef(null);
     *   return (
     *     <Draggable nodeRef={nodeRef}>
     *       <div ref={nodeRef}>Example Target</div>
     *     </Draggable>
     *   );
     * }
     *
     * This can be used for arbitrarily nested components, so long as the ref ends up
     * pointing to the actual child DOM node and not a custom component.
     */
    nodeRef: _propTypes.default.object,
    /**
     * Called when dragging starts.
     * If this function returns the boolean false, dragging will be canceled.
     */
    onStart: _propTypes.default.func,
    /**
     * Called while dragging.
     * If this function returns the boolean false, dragging will be canceled.
     */
    onDrag: _propTypes.default.func,
    /**
     * Called when dragging stops.
     * If this function returns the boolean false, the drag will remain active.
     */
    onStop: _propTypes.default.func,
    /**
     * A workaround option which can be passed if onMouseDown needs to be accessed,
     * since it'll always be blocked (as there is internal use of onMouseDown)
     */
    onMouseDown: _propTypes.default.func,
    /**
     * `scale`, if set, applies scaling while dragging an element
     */
    scale: _propTypes.default.number,
    /**
     * These properties should be defined on the child, not here.
     */
    className: _shims.dontSetMe,
    style: _shims.dontSetMe,
    transform: _shims.dontSetMe
  });
  _defineProperty$1(DraggableCore$1, "defaultProps", {
    allowAnyClick: false,
    // by default only accept left click
    disabled: false,
    enableUserSelectHack: true,
    onStart: function onStart() {
    },
    onDrag: function onDrag() {
    },
    onStop: function onStop() {
    },
    onMouseDown: function onMouseDown() {
    },
    scale: 1
  });
  (function(exports) {
    function _typeof2(obj) {
      "@babel/helpers - typeof";
      return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof2(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "DraggableCore", {
      enumerable: true,
      get: function get() {
        return _DraggableCore.default;
      }
    });
    exports.default = void 0;
    var React2 = _interopRequireWildcard2(reactExports);
    var _propTypes2 = _interopRequireDefault2(propTypesExports);
    var _reactDom2 = _interopRequireDefault2(reactDomExports);
    var _clsx2 = _interopRequireDefault2(require$$3);
    var _domFns2 = domFns;
    var _positionFns2 = positionFns;
    var _shims2 = shims;
    var _DraggableCore = _interopRequireDefault2(DraggableCore$2);
    var _log2 = _interopRequireDefault2(log$1);
    var _excluded2 = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _getRequireWildcardCache2(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache2 = function _getRequireWildcardCache3(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard2(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof2(obj) !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache2(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _extends2() {
      _extends2 = Object.assign || function(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends2.apply(this, arguments);
    }
    function _objectWithoutProperties2(source, excluded) {
      if (source == null)
        return {};
      var target = _objectWithoutPropertiesLoose2(source, excluded);
      var key, i2;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
          key = sourceSymbolKeys[i2];
          if (excluded.indexOf(key) >= 0)
            continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key))
            continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    function _objectWithoutPropertiesLoose2(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i2;
      for (i2 = 0; i2 < sourceKeys.length; i2++) {
        key = sourceKeys[i2];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function ownKeys2(object, enumerableOnly) {
      var keys2 = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys2.push.apply(keys2, symbols);
      }
      return keys2;
    }
    function _objectSpread2(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = null != arguments[i2] ? arguments[i2] : {};
        i2 % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
          _defineProperty2(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _slicedToArray2(arr, i2) {
      return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i2) || _unsupportedIterableToArray2(arr, i2) || _nonIterableRest2();
    }
    function _nonIterableRest2() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray2(o2, minLen) {
      if (!o2)
        return;
      if (typeof o2 === "string")
        return _arrayLikeToArray2(o2, minLen);
      var n2 = Object.prototype.toString.call(o2).slice(8, -1);
      if (n2 === "Object" && o2.constructor)
        n2 = o2.constructor.name;
      if (n2 === "Map" || n2 === "Set")
        return Array.from(o2);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return _arrayLikeToArray2(o2, minLen);
    }
    function _arrayLikeToArray2(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
        arr2[i2] = arr[i2];
      }
      return arr2;
    }
    function _iterableToArrayLimit2(arr, i2) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null)
        return;
      var _arr = [];
      var _n2 = true;
      var _d2 = false;
      var _s, _e2;
      try {
        for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
          _arr.push(_s.value);
          if (i2 && _arr.length === i2)
            break;
        }
      } catch (err) {
        _d2 = true;
        _e2 = err;
      } finally {
        try {
          if (!_n2 && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d2)
            throw _e2;
        }
      }
      return _arr;
    }
    function _arrayWithHoles2(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _classCallCheck2(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties2(target, props) {
      for (var i2 = 0; i2 < props.length; i2++) {
        var descriptor = props[i2];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties2(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _inherits2(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      Object.defineProperty(subClass, "prototype", { writable: false });
      if (superClass)
        _setPrototypeOf2(subClass, superClass);
    }
    function _setPrototypeOf2(o2, p2) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o3, p3) {
        o3.__proto__ = p3;
        return o3;
      };
      return _setPrototypeOf2(o2, p2);
    }
    function _createSuper2(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct2();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf2(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf2(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn2(this, result);
      };
    }
    function _possibleConstructorReturn2(self2, call) {
      if (call && (_typeof2(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized2(self2);
    }
    function _assertThisInitialized2(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _isNativeReflectConstruct2() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e2) {
        return false;
      }
    }
    function _getPrototypeOf2(o2) {
      _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o3) {
        return o3.__proto__ || Object.getPrototypeOf(o3);
      };
      return _getPrototypeOf2(o2);
    }
    function _defineProperty2(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var Draggable2 = /* @__PURE__ */ function(_React$Component) {
      _inherits2(Draggable3, _React$Component);
      var _super = _createSuper2(Draggable3);
      function Draggable3(props) {
        var _this;
        _classCallCheck2(this, Draggable3);
        _this = _super.call(this, props);
        _defineProperty2(_assertThisInitialized2(_this), "onDragStart", function(e2, coreData) {
          (0, _log2.default)("Draggable: onDragStart: %j", coreData);
          var shouldStart = _this.props.onStart(e2, (0, _positionFns2.createDraggableData)(_assertThisInitialized2(_this), coreData));
          if (shouldStart === false)
            return false;
          _this.setState({
            dragging: true,
            dragged: true
          });
        });
        _defineProperty2(_assertThisInitialized2(_this), "onDrag", function(e2, coreData) {
          if (!_this.state.dragging)
            return false;
          (0, _log2.default)("Draggable: onDrag: %j", coreData);
          var uiData = (0, _positionFns2.createDraggableData)(_assertThisInitialized2(_this), coreData);
          var newState = {
            x: uiData.x,
            y: uiData.y
          };
          if (_this.props.bounds) {
            var x2 = newState.x, y2 = newState.y;
            newState.x += _this.state.slackX;
            newState.y += _this.state.slackY;
            var _getBoundPosition = (0, _positionFns2.getBoundPosition)(_assertThisInitialized2(_this), newState.x, newState.y), _getBoundPosition2 = _slicedToArray2(_getBoundPosition, 2), newStateX = _getBoundPosition2[0], newStateY = _getBoundPosition2[1];
            newState.x = newStateX;
            newState.y = newStateY;
            newState.slackX = _this.state.slackX + (x2 - newState.x);
            newState.slackY = _this.state.slackY + (y2 - newState.y);
            uiData.x = newState.x;
            uiData.y = newState.y;
            uiData.deltaX = newState.x - _this.state.x;
            uiData.deltaY = newState.y - _this.state.y;
          }
          var shouldUpdate = _this.props.onDrag(e2, uiData);
          if (shouldUpdate === false)
            return false;
          _this.setState(newState);
        });
        _defineProperty2(_assertThisInitialized2(_this), "onDragStop", function(e2, coreData) {
          if (!_this.state.dragging)
            return false;
          var shouldContinue = _this.props.onStop(e2, (0, _positionFns2.createDraggableData)(_assertThisInitialized2(_this), coreData));
          if (shouldContinue === false)
            return false;
          (0, _log2.default)("Draggable: onDragStop: %j", coreData);
          var newState = {
            dragging: false,
            slackX: 0,
            slackY: 0
          };
          var controlled = Boolean(_this.props.position);
          if (controlled) {
            var _this$props$position = _this.props.position, x2 = _this$props$position.x, y2 = _this$props$position.y;
            newState.x = x2;
            newState.y = y2;
          }
          _this.setState(newState);
        });
        _this.state = {
          // Whether or not we are currently dragging.
          dragging: false,
          // Whether or not we have been dragged before.
          dragged: false,
          // Current transform x and y.
          x: props.position ? props.position.x : props.defaultPosition.x,
          y: props.position ? props.position.y : props.defaultPosition.y,
          prevPropsPosition: _objectSpread2({}, props.position),
          // Used for compensating for out-of-bounds drags
          slackX: 0,
          slackY: 0,
          // Can only determine if SVG after mounting
          isElementSVG: false
        };
        if (props.position && !(props.onDrag || props.onStop)) {
          console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
        }
        return _this;
      }
      _createClass2(Draggable3, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          if (typeof window.SVGElement !== "undefined" && this.findDOMNode() instanceof window.SVGElement) {
            this.setState({
              isElementSVG: true
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.setState({
            dragging: false
          });
        }
        // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
        // the underlying DOM node ourselves. See the README for more information.
      }, {
        key: "findDOMNode",
        value: function findDOMNode2() {
          var _this$props$nodeRef$c, _this$props, _this$props$nodeRef;
          return (_this$props$nodeRef$c = (_this$props = this.props) === null || _this$props === void 0 ? void 0 : (_this$props$nodeRef = _this$props.nodeRef) === null || _this$props$nodeRef === void 0 ? void 0 : _this$props$nodeRef.current) !== null && _this$props$nodeRef$c !== void 0 ? _this$props$nodeRef$c : _reactDom2.default.findDOMNode(this);
        }
      }, {
        key: "render",
        value: function render() {
          var _clsx;
          var _this$props2 = this.props;
          _this$props2.axis;
          _this$props2.bounds;
          var children = _this$props2.children, defaultPosition = _this$props2.defaultPosition, defaultClassName = _this$props2.defaultClassName, defaultClassNameDragging = _this$props2.defaultClassNameDragging, defaultClassNameDragged = _this$props2.defaultClassNameDragged, position2 = _this$props2.position, positionOffset = _this$props2.positionOffset;
          _this$props2.scale;
          var draggableCoreProps = _objectWithoutProperties2(_this$props2, _excluded2);
          var style = {};
          var svgTransform = null;
          var controlled = Boolean(position2);
          var draggable = !controlled || this.state.dragging;
          var validPosition = position2 || defaultPosition;
          var transformOpts = {
            // Set left if horizontal drag is enabled
            x: (0, _positionFns2.canDragX)(this) && draggable ? this.state.x : validPosition.x,
            // Set top if vertical drag is enabled
            y: (0, _positionFns2.canDragY)(this) && draggable ? this.state.y : validPosition.y
          };
          if (this.state.isElementSVG) {
            svgTransform = (0, _domFns2.createSVGTransform)(transformOpts, positionOffset);
          } else {
            style = (0, _domFns2.createCSSTransform)(transformOpts, positionOffset);
          }
          var className = (0, _clsx2.default)(children.props.className || "", defaultClassName, (_clsx = {}, _defineProperty2(_clsx, defaultClassNameDragging, this.state.dragging), _defineProperty2(_clsx, defaultClassNameDragged, this.state.dragged), _clsx));
          return /* @__PURE__ */ React2.createElement(_DraggableCore.default, _extends2({}, draggableCoreProps, {
            onStart: this.onDragStart,
            onDrag: this.onDrag,
            onStop: this.onDragStop
          }), /* @__PURE__ */ React2.cloneElement(React2.Children.only(children), {
            className,
            style: _objectSpread2(_objectSpread2({}, children.props.style), style),
            transform: svgTransform
          }));
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: (
          // React 16.3+
          // Arity (props, state)
          function getDerivedStateFromProps(_ref, _ref2) {
            var position2 = _ref.position;
            var prevPropsPosition = _ref2.prevPropsPosition;
            if (position2 && (!prevPropsPosition || position2.x !== prevPropsPosition.x || position2.y !== prevPropsPosition.y)) {
              (0, _log2.default)("Draggable: getDerivedStateFromProps %j", {
                position: position2,
                prevPropsPosition
              });
              return {
                x: position2.x,
                y: position2.y,
                prevPropsPosition: _objectSpread2({}, position2)
              };
            }
            return null;
          }
        )
      }]);
      return Draggable3;
    }(React2.Component);
    exports.default = Draggable2;
    _defineProperty2(Draggable2, "displayName", "Draggable");
    _defineProperty2(Draggable2, "propTypes", _objectSpread2(_objectSpread2({}, _DraggableCore.default.propTypes), {}, {
      /**
       * `axis` determines which axis the draggable can move.
       *
       *  Note that all callbacks will still return data as normal. This only
       *  controls flushing to the DOM.
       *
       * 'both' allows movement horizontally and vertically.
       * 'x' limits movement to horizontal axis.
       * 'y' limits movement to vertical axis.
       * 'none' limits all movement.
       *
       * Defaults to 'both'.
       */
      axis: _propTypes2.default.oneOf(["both", "x", "y", "none"]),
      /**
       * `bounds` determines the range of movement available to the element.
       * Available values are:
       *
       * 'parent' restricts movement within the Draggable's parent node.
       *
       * Alternatively, pass an object with the following properties, all of which are optional:
       *
       * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
       *
       * All values are in px.
       *
       * Example:
       *
       * ```jsx
       *   let App = React.createClass({
       *       render: function () {
       *         return (
       *            <Draggable bounds={{right: 300, bottom: 300}}>
       *              <div>Content</div>
       *           </Draggable>
       *         );
       *       }
       *   });
       * ```
       */
      bounds: _propTypes2.default.oneOfType([_propTypes2.default.shape({
        left: _propTypes2.default.number,
        right: _propTypes2.default.number,
        top: _propTypes2.default.number,
        bottom: _propTypes2.default.number
      }), _propTypes2.default.string, _propTypes2.default.oneOf([false])]),
      defaultClassName: _propTypes2.default.string,
      defaultClassNameDragging: _propTypes2.default.string,
      defaultClassNameDragged: _propTypes2.default.string,
      /**
       * `defaultPosition` specifies the x and y that the dragged item should start at
       *
       * Example:
       *
       * ```jsx
       *      let App = React.createClass({
       *          render: function () {
       *              return (
       *                  <Draggable defaultPosition={{x: 25, y: 25}}>
       *                      <div>I start with transformX: 25px and transformY: 25px;</div>
       *                  </Draggable>
       *              );
       *          }
       *      });
       * ```
       */
      defaultPosition: _propTypes2.default.shape({
        x: _propTypes2.default.number,
        y: _propTypes2.default.number
      }),
      positionOffset: _propTypes2.default.shape({
        x: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
        y: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
      }),
      /**
       * `position`, if present, defines the current position of the element.
       *
       *  This is similar to how form elements in React work - if no `position` is supplied, the component
       *  is uncontrolled.
       *
       * Example:
       *
       * ```jsx
       *      let App = React.createClass({
       *          render: function () {
       *              return (
       *                  <Draggable position={{x: 25, y: 25}}>
       *                      <div>I start with transformX: 25px and transformY: 25px;</div>
       *                  </Draggable>
       *              );
       *          }
       *      });
       * ```
       */
      position: _propTypes2.default.shape({
        x: _propTypes2.default.number,
        y: _propTypes2.default.number
      }),
      /**
       * These properties should be defined on the child, not here.
       */
      className: _shims2.dontSetMe,
      style: _shims2.dontSetMe,
      transform: _shims2.dontSetMe
    }));
    _defineProperty2(Draggable2, "defaultProps", _objectSpread2(_objectSpread2({}, _DraggableCore.default.defaultProps), {}, {
      axis: "both",
      bounds: false,
      defaultClassName: "react-draggable",
      defaultClassNameDragging: "react-draggable-dragging",
      defaultClassNameDragged: "react-draggable-dragged",
      defaultPosition: {
        x: 0,
        y: 0
      },
      scale: 1
    }));
  })(Draggable$2);
  var _require = Draggable$2, Draggable$1 = _require.default, DraggableCore = _require.DraggableCore;
  cjs.exports = Draggable$1;
  cjsExports.default = Draggable$1;
  cjsExports.DraggableCore = DraggableCore;
  var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
  var isPropValid = /* @__PURE__ */ memoize$1(
    function(prop) {
      return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
    }
    /* Z+1 */
  );
  var testOmitPropsOnStringTag = isPropValid;
  var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
    return key !== "theme";
  };
  var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
    return typeof tag === "string" && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
  };
  var composeShouldForwardProps = function composeShouldForwardProps2(tag, options, isReal) {
    var shouldForwardProp;
    if (options) {
      var optionsShouldForwardProp = options.shouldForwardProp;
      shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
        return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
      } : optionsShouldForwardProp;
    }
    if (typeof shouldForwardProp !== "function" && isReal) {
      shouldForwardProp = tag.__emotion_forwardProp;
    }
    return shouldForwardProp;
  };
  var Insertion = function Insertion2(_ref) {
    var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
    registerStyles(cache, serialized, isStringTag);
    useInsertionEffectAlwaysWithSyncFallback(function() {
      return insertStyles(cache, serialized, isStringTag);
    });
    return null;
  };
  var createStyled = function createStyled2(tag, options) {
    var isReal = tag.__emotion_real === tag;
    var baseTag = isReal && tag.__emotion_base || tag;
    var identifierName;
    var targetClassName;
    if (options !== void 0) {
      identifierName = options.label;
      targetClassName = options.target;
    }
    var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
    var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
    var shouldUseAs = !defaultShouldForwardProp("as");
    return function() {
      var args = arguments;
      var styles2 = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
      if (identifierName !== void 0) {
        styles2.push("label:" + identifierName + ";");
      }
      if (args[0] == null || args[0].raw === void 0) {
        styles2.push.apply(styles2, args);
      } else {
        styles2.push(args[0][0]);
        var len = args.length;
        var i2 = 1;
        for (; i2 < len; i2++) {
          styles2.push(args[i2], args[0][i2]);
        }
      }
      var Styled = withEmotionCache(function(props, cache, ref) {
        var FinalTag = shouldUseAs && props.as || baseTag;
        var className = "";
        var classInterpolations = [];
        var mergedProps = props;
        if (props.theme == null) {
          mergedProps = {};
          for (var key in props) {
            mergedProps[key] = props[key];
          }
          mergedProps.theme = reactExports.useContext(ThemeContext);
        }
        if (typeof props.className === "string") {
          className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
        } else if (props.className != null) {
          className = props.className + " ";
        }
        var serialized = serializeStyles(styles2.concat(classInterpolations), cache.registered, mergedProps);
        className += cache.key + "-" + serialized.name;
        if (targetClassName !== void 0) {
          className += " " + targetClassName;
        }
        var finalShouldForwardProp = shouldUseAs && shouldForwardProp === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
        var newProps = {};
        for (var _key in props) {
          if (shouldUseAs && _key === "as")
            continue;
          if (
            // $FlowFixMe
            finalShouldForwardProp(_key)
          ) {
            newProps[_key] = props[_key];
          }
        }
        newProps.className = className;
        newProps.ref = ref;
        return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(Insertion, {
          cache,
          serialized,
          isStringTag: typeof FinalTag === "string"
        }), /* @__PURE__ */ reactExports.createElement(FinalTag, newProps));
      });
      Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
      Styled.defaultProps = tag.defaultProps;
      Styled.__emotion_real = Styled;
      Styled.__emotion_base = baseTag;
      Styled.__emotion_styles = styles2;
      Styled.__emotion_forwardProp = shouldForwardProp;
      Object.defineProperty(Styled, "toString", {
        value: function value() {
          if (targetClassName === void 0 && false) {
            return "NO_COMPONENT_SELECTOR";
          }
          return "." + targetClassName;
        }
      });
      Styled.withComponent = function(nextTag, nextOptions) {
        return createStyled2(nextTag, _extends$1({}, options, nextOptions, {
          shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
        })).apply(void 0, styles2);
      };
      return Styled;
    };
  };
  var tags = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    // SVG
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan"
  ];
  var newStyled = createStyled.bind();
  tags.forEach(function(tagName) {
    newStyled[tagName] = newStyled(tagName);
  });
  var _excluded = ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "className", "spin"];
  function ownKeys(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = null != arguments[i2] ? arguments[i2] : {};
      i2 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null)
      return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i2;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
        key = sourceSymbolKeys[i2];
        if (excluded.indexOf(key) >= 0)
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key))
          continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i2;
    for (i2 = 0; i2 < sourceKeys.length; i2++) {
      key = sourceKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  var DEFAULT_ICON_CONFIGS = {
    size: "1em",
    strokeWidth: 4,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    rtl: false,
    theme: "outline",
    colors: {
      outline: {
        fill: "#333",
        background: "transparent"
      },
      filled: {
        fill: "#333",
        background: "#FFF"
      },
      twoTone: {
        fill: "#333",
        twoTone: "#2F88FF"
      },
      multiColor: {
        outStrokeColor: "#333",
        outFillColor: "#2F88FF",
        innerStrokeColor: "#FFF",
        innerFillColor: "#43CCF8"
      }
    },
    prefix: "i"
  };
  function guid() {
    return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
  }
  function IconConverter(id2, icon, config) {
    var fill = typeof icon.fill === "string" ? [icon.fill] : icon.fill || [];
    var colors = [];
    var theme2 = icon.theme || config.theme;
    switch (theme2) {
      case "outline":
        colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
        colors.push("none");
        colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
        colors.push("none");
        break;
      case "filled":
        colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
        colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
        colors.push("#FFF");
        colors.push("#FFF");
        break;
      case "two-tone":
        colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
        colors.push(typeof fill[1] === "string" ? fill[1] : config.colors.twoTone.twoTone);
        colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
        colors.push(typeof fill[1] === "string" ? fill[1] : config.colors.twoTone.twoTone);
        break;
      case "multi-color":
        colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
        colors.push(typeof fill[1] === "string" ? fill[1] : config.colors.multiColor.outFillColor);
        colors.push(typeof fill[2] === "string" ? fill[2] : config.colors.multiColor.innerStrokeColor);
        colors.push(typeof fill[3] === "string" ? fill[3] : config.colors.multiColor.innerFillColor);
        break;
    }
    return {
      size: icon.size || config.size,
      strokeWidth: icon.strokeWidth || config.strokeWidth,
      strokeLinecap: icon.strokeLinecap || config.strokeLinecap,
      strokeLinejoin: icon.strokeLinejoin || config.strokeLinejoin,
      colors,
      id: id2
    };
  }
  var IconContext = /* @__PURE__ */ reactExports.createContext(DEFAULT_ICON_CONFIGS);
  IconContext.Provider;
  function IconWrapper(name, rtl, render) {
    return function(props) {
      var size = props.size, strokeWidth = props.strokeWidth, strokeLinecap = props.strokeLinecap, strokeLinejoin = props.strokeLinejoin, theme2 = props.theme, fill = props.fill, className = props.className, spin = props.spin, extra = _objectWithoutProperties(props, _excluded);
      var ICON_CONFIGS = reactExports.useContext(IconContext);
      var id2 = reactExports.useMemo(guid, []);
      var svgProps = IconConverter(id2, {
        size,
        strokeWidth,
        strokeLinecap,
        strokeLinejoin,
        theme: theme2,
        fill
      }, ICON_CONFIGS);
      var cls = [ICON_CONFIGS.prefix + "-icon"];
      cls.push(ICON_CONFIGS.prefix + "-icon-" + name);
      if (rtl && ICON_CONFIGS.rtl) {
        cls.push(ICON_CONFIGS.prefix + "-icon-rtl");
      }
      if (spin) {
        cls.push(ICON_CONFIGS.prefix + "-icon-spin");
      }
      if (className) {
        cls.push(className);
      }
      return /* @__PURE__ */ React$1.createElement("span", _objectSpread(_objectSpread({}, extra), {}, {
        className: cls.join(" ")
      }), render(svgProps));
    };
  }
  const Close = IconWrapper("close", false, function(props) {
    return /* @__PURE__ */ React$1.createElement("svg", {
      width: props.size,
      height: props.size,
      viewBox: "0 0 48 48",
      fill: "none"
    }, /* @__PURE__ */ React$1.createElement("path", {
      d: "M8 8L40 40",
      stroke: props.colors[0],
      strokeWidth: props.strokeWidth,
      strokeLinecap: props.strokeLinecap,
      strokeLinejoin: props.strokeLinejoin
    }), /* @__PURE__ */ React$1.createElement("path", {
      d: "M8 40L40 8",
      stroke: props.colors[0],
      strokeWidth: props.strokeWidth,
      strokeLinecap: props.strokeLinecap,
      strokeLinejoin: props.strokeLinejoin
    }));
  });
  var f$3 = l$4(), n$2 = (e2) => c$5(e2, f$3), m$3 = l$4();
  n$2.write = (e2) => c$5(e2, m$3);
  var d$3 = l$4();
  n$2.onStart = (e2) => c$5(e2, d$3);
  var h$5 = l$4();
  n$2.onFrame = (e2) => c$5(e2, h$5);
  var p$3 = l$4();
  n$2.onFinish = (e2) => c$5(e2, p$3);
  var i$2 = [];
  n$2.setTimeout = (e2, t2) => {
    let a2 = n$2.now() + t2, o2 = () => {
      let F2 = i$2.findIndex((z2) => z2.cancel == o2);
      ~F2 && i$2.splice(F2, 1), u$4 -= ~F2 ? 1 : 0;
    }, s2 = { time: a2, handler: e2, cancel: o2 };
    return i$2.splice(w$2(a2), 0, s2), u$4 += 1, v$3(), s2;
  };
  var w$2 = (e2) => ~(~i$2.findIndex((t2) => t2.time > e2) || ~i$2.length);
  n$2.cancel = (e2) => {
    d$3.delete(e2), h$5.delete(e2), p$3.delete(e2), f$3.delete(e2), m$3.delete(e2);
  };
  n$2.sync = (e2) => {
    T$1 = true, n$2.batchedUpdates(e2), T$1 = false;
  };
  n$2.throttle = (e2) => {
    let t2;
    function a2() {
      try {
        e2(...t2);
      } finally {
        t2 = null;
      }
    }
    function o2(...s2) {
      t2 = s2, n$2.onStart(a2);
    }
    return o2.handler = e2, o2.cancel = () => {
      d$3.delete(a2), t2 = null;
    }, o2;
  };
  var y$5 = typeof window < "u" ? window.requestAnimationFrame : () => {
  };
  n$2.use = (e2) => y$5 = e2;
  n$2.now = typeof performance < "u" ? () => performance.now() : Date.now;
  n$2.batchedUpdates = (e2) => e2();
  n$2.catch = console.error;
  n$2.frameLoop = "always";
  n$2.advance = () => {
    n$2.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : x$4();
  };
  var r$2 = -1, u$4 = 0, T$1 = false;
  function c$5(e2, t2) {
    T$1 ? (t2.delete(e2), e2(0)) : (t2.add(e2), v$3());
  }
  function v$3() {
    r$2 < 0 && (r$2 = 0, n$2.frameLoop !== "demand" && y$5(b$4));
  }
  function R$1() {
    r$2 = -1;
  }
  function b$4() {
    ~r$2 && (y$5(b$4), n$2.batchedUpdates(x$4));
  }
  function x$4() {
    let e2 = r$2;
    r$2 = n$2.now();
    let t2 = w$2(r$2);
    if (t2 && (Q$2(i$2.splice(0, t2), (a2) => a2.handler()), u$4 -= t2), !u$4) {
      R$1();
      return;
    }
    d$3.flush(), f$3.flush(e2 ? Math.min(64, r$2 - e2) : 16.667), h$5.flush(), m$3.flush(), p$3.flush();
  }
  function l$4() {
    let e2 = /* @__PURE__ */ new Set(), t2 = e2;
    return { add(a2) {
      u$4 += t2 == e2 && !e2.has(a2) ? 1 : 0, e2.add(a2);
    }, delete(a2) {
      return u$4 -= t2 == e2 && e2.has(a2) ? 1 : 0, e2.delete(a2);
    }, flush(a2) {
      t2.size && (e2 = /* @__PURE__ */ new Set(), u$4 -= t2.size, Q$2(t2, (o2) => o2(a2) && e2.add(o2)), u$4 += e2.size, t2 = e2);
    } };
  }
  function Q$2(e2, t2) {
    e2.forEach((a2) => {
      try {
        t2(a2);
      } catch (o2) {
        n$2.catch(o2);
      }
    });
  }
  var ze$1 = Object.defineProperty;
  var Le$2 = (e2, t2) => {
    for (var r2 in t2)
      ze$1(e2, r2, { get: t2[r2], enumerable: true });
  };
  var p$2 = {};
  Le$2(p$2, { assign: () => U, colors: () => c$4, createStringInterpolator: () => k$3, skipAnimation: () => ee, to: () => J$1, willAdvance: () => S$1 });
  function Y() {
  }
  var mt$1 = (e2, t2, r2) => Object.defineProperty(e2, t2, { value: r2, writable: true, configurable: true }), l$3 = { arr: Array.isArray, obj: (e2) => !!e2 && e2.constructor.name === "Object", fun: (e2) => typeof e2 == "function", str: (e2) => typeof e2 == "string", num: (e2) => typeof e2 == "number", und: (e2) => e2 === void 0 };
  function bt$1(e2, t2) {
    if (l$3.arr(e2)) {
      if (!l$3.arr(t2) || e2.length !== t2.length)
        return false;
      for (let r2 = 0; r2 < e2.length; r2++)
        if (e2[r2] !== t2[r2])
          return false;
      return true;
    }
    return e2 === t2;
  }
  var Ve = (e2, t2) => e2.forEach(t2);
  function xt(e2, t2, r2) {
    if (l$3.arr(e2)) {
      for (let n2 = 0; n2 < e2.length; n2++)
        t2.call(r2, e2[n2], `${n2}`);
      return;
    }
    for (let n2 in e2)
      e2.hasOwnProperty(n2) && t2.call(r2, e2[n2], n2);
  }
  var ht$1 = (e2) => l$3.und(e2) ? [] : l$3.arr(e2) ? e2 : [e2];
  function Pe$1(e2, t2) {
    if (e2.size) {
      let r2 = Array.from(e2);
      e2.clear(), Ve(r2, t2);
    }
  }
  var yt$1 = (e2, ...t2) => Pe$1(e2, (r2) => r2(...t2)), h$4 = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
  var k$3, J$1, c$4 = null, ee = false, S$1 = Y, U = (e2) => {
    e2.to && (J$1 = e2.to), e2.now && (n$2.now = e2.now), e2.colors !== void 0 && (c$4 = e2.colors), e2.skipAnimation != null && (ee = e2.skipAnimation), e2.createStringInterpolator && (k$3 = e2.createStringInterpolator), e2.requestAnimationFrame && n$2.use(e2.requestAnimationFrame), e2.batchedUpdates && (n$2.batchedUpdates = e2.batchedUpdates), e2.willAdvance && (S$1 = e2.willAdvance), e2.frameLoop && (n$2.frameLoop = e2.frameLoop);
  };
  var E$2 = /* @__PURE__ */ new Set(), u$3 = [], H$2 = [], A$1 = 0, qe$1 = { get idle() {
    return !E$2.size && !u$3.length;
  }, start(e2) {
    A$1 > e2.priority ? (E$2.add(e2), n$2.onStart($e)) : (te$1(e2), n$2(B));
  }, advance: B, sort(e2) {
    if (A$1)
      n$2.onFrame(() => qe$1.sort(e2));
    else {
      let t2 = u$3.indexOf(e2);
      ~t2 && (u$3.splice(t2, 1), re(e2));
    }
  }, clear() {
    u$3 = [], E$2.clear();
  } };
  function $e() {
    E$2.forEach(te$1), E$2.clear(), n$2(B);
  }
  function te$1(e2) {
    u$3.includes(e2) || re(e2);
  }
  function re(e2) {
    u$3.splice(Ge$1(u$3, (t2) => t2.priority > e2.priority), 0, e2);
  }
  function B(e2) {
    let t2 = H$2;
    for (let r2 = 0; r2 < u$3.length; r2++) {
      let n2 = u$3[r2];
      A$1 = n2.priority, n2.idle || (S$1(n2), n2.advance(e2), n2.idle || t2.push(n2));
    }
    return A$1 = 0, H$2 = u$3, H$2.length = 0, u$3 = t2, u$3.length > 0;
  }
  function Ge$1(e2, t2) {
    let r2 = e2.findIndex(t2);
    return r2 < 0 ? e2.length : r2;
  }
  var ne$2 = (e2, t2, r2) => Math.min(Math.max(r2, e2), t2);
  var It = { transparent: 0, aliceblue: 4042850303, antiquewhite: 4209760255, aqua: 16777215, aquamarine: 2147472639, azure: 4043309055, beige: 4126530815, bisque: 4293182719, black: 255, blanchedalmond: 4293643775, blue: 65535, blueviolet: 2318131967, brown: 2771004159, burlywood: 3736635391, burntsienna: 3934150143, cadetblue: 1604231423, chartreuse: 2147418367, chocolate: 3530104575, coral: 4286533887, cornflowerblue: 1687547391, cornsilk: 4294499583, crimson: 3692313855, cyan: 16777215, darkblue: 35839, darkcyan: 9145343, darkgoldenrod: 3095792639, darkgray: 2846468607, darkgreen: 6553855, darkgrey: 2846468607, darkkhaki: 3182914559, darkmagenta: 2332068863, darkolivegreen: 1433087999, darkorange: 4287365375, darkorchid: 2570243327, darkred: 2332033279, darksalmon: 3918953215, darkseagreen: 2411499519, darkslateblue: 1211993087, darkslategray: 793726975, darkslategrey: 793726975, darkturquoise: 13554175, darkviolet: 2483082239, deeppink: 4279538687, deepskyblue: 12582911, dimgray: 1768516095, dimgrey: 1768516095, dodgerblue: 512819199, firebrick: 2988581631, floralwhite: 4294635775, forestgreen: 579543807, fuchsia: 4278255615, gainsboro: 3705462015, ghostwhite: 4177068031, gold: 4292280575, goldenrod: 3668254975, gray: 2155905279, green: 8388863, greenyellow: 2919182335, grey: 2155905279, honeydew: 4043305215, hotpink: 4285117695, indianred: 3445382399, indigo: 1258324735, ivory: 4294963455, khaki: 4041641215, lavender: 3873897215, lavenderblush: 4293981695, lawngreen: 2096890111, lemonchiffon: 4294626815, lightblue: 2916673279, lightcoral: 4034953471, lightcyan: 3774873599, lightgoldenrodyellow: 4210742015, lightgray: 3553874943, lightgreen: 2431553791, lightgrey: 3553874943, lightpink: 4290167295, lightsalmon: 4288707327, lightseagreen: 548580095, lightskyblue: 2278488831, lightslategray: 2005441023, lightslategrey: 2005441023, lightsteelblue: 2965692159, lightyellow: 4294959359, lime: 16711935, limegreen: 852308735, linen: 4210091775, magenta: 4278255615, maroon: 2147483903, mediumaquamarine: 1724754687, mediumblue: 52735, mediumorchid: 3126187007, mediumpurple: 2473647103, mediumseagreen: 1018393087, mediumslateblue: 2070474495, mediumspringgreen: 16423679, mediumturquoise: 1221709055, mediumvioletred: 3340076543, midnightblue: 421097727, mintcream: 4127193855, mistyrose: 4293190143, moccasin: 4293178879, navajowhite: 4292783615, navy: 33023, oldlace: 4260751103, olive: 2155872511, olivedrab: 1804477439, orange: 4289003775, orangered: 4282712319, orchid: 3664828159, palegoldenrod: 4008225535, palegreen: 2566625535, paleturquoise: 2951671551, palevioletred: 3681588223, papayawhip: 4293907967, peachpuff: 4292524543, peru: 3448061951, pink: 4290825215, plum: 3718307327, powderblue: 2967529215, purple: 2147516671, rebeccapurple: 1714657791, red: 4278190335, rosybrown: 3163525119, royalblue: 1097458175, saddlebrown: 2336560127, salmon: 4202722047, sandybrown: 4104413439, seagreen: 780883967, seashell: 4294307583, sienna: 2689740287, silver: 3233857791, skyblue: 2278484991, slateblue: 1784335871, slategray: 1887473919, slategrey: 1887473919, snow: 4294638335, springgreen: 16744447, steelblue: 1182971135, tan: 3535047935, teal: 8421631, thistle: 3636451583, tomato: 4284696575, turquoise: 1088475391, violet: 4001558271, wheat: 4125012991, white: 4294967295, whitesmoke: 4126537215, yellow: 4294902015, yellowgreen: 2597139199 };
  var d$2 = "[-+]?\\d*\\.?\\d+", M = d$2 + "%";
  function C$2(...e2) {
    return "\\(\\s*(" + e2.join(")\\s*,\\s*(") + ")\\s*\\)";
  }
  var oe$1 = new RegExp("rgb" + C$2(d$2, d$2, d$2)), fe$1 = new RegExp("rgba" + C$2(d$2, d$2, d$2, d$2)), ae$1 = new RegExp("hsl" + C$2(d$2, M, M)), ie = new RegExp("hsla" + C$2(d$2, M, M, d$2)), se$1 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, ue$1 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, le$1 = /^#([0-9a-fA-F]{6})$/, ce = /^#([0-9a-fA-F]{8})$/;
  function be$1(e2) {
    let t2;
    return typeof e2 == "number" ? e2 >>> 0 === e2 && e2 >= 0 && e2 <= 4294967295 ? e2 : null : (t2 = le$1.exec(e2)) ? parseInt(t2[1] + "ff", 16) >>> 0 : c$4 && c$4[e2] !== void 0 ? c$4[e2] : (t2 = oe$1.exec(e2)) ? (y$4(t2[1]) << 24 | y$4(t2[2]) << 16 | y$4(t2[3]) << 8 | 255) >>> 0 : (t2 = fe$1.exec(e2)) ? (y$4(t2[1]) << 24 | y$4(t2[2]) << 16 | y$4(t2[3]) << 8 | me$1(t2[4])) >>> 0 : (t2 = se$1.exec(e2)) ? parseInt(t2[1] + t2[1] + t2[2] + t2[2] + t2[3] + t2[3] + "ff", 16) >>> 0 : (t2 = ce.exec(e2)) ? parseInt(t2[1], 16) >>> 0 : (t2 = ue$1.exec(e2)) ? parseInt(t2[1] + t2[1] + t2[2] + t2[2] + t2[3] + t2[3] + t2[4] + t2[4], 16) >>> 0 : (t2 = ae$1.exec(e2)) ? (de$1(pe(t2[1]), z$2(t2[2]), z$2(t2[3])) | 255) >>> 0 : (t2 = ie.exec(e2)) ? (de$1(pe(t2[1]), z$2(t2[2]), z$2(t2[3])) | me$1(t2[4])) >>> 0 : null;
  }
  function j$1(e2, t2, r2) {
    return r2 < 0 && (r2 += 1), r2 > 1 && (r2 -= 1), r2 < 1 / 6 ? e2 + (t2 - e2) * 6 * r2 : r2 < 1 / 2 ? t2 : r2 < 2 / 3 ? e2 + (t2 - e2) * (2 / 3 - r2) * 6 : e2;
  }
  function de$1(e2, t2, r2) {
    let n2 = r2 < 0.5 ? r2 * (1 + t2) : r2 + t2 - r2 * t2, f2 = 2 * r2 - n2, o2 = j$1(f2, n2, e2 + 1 / 3), i2 = j$1(f2, n2, e2), s2 = j$1(f2, n2, e2 - 1 / 3);
    return Math.round(o2 * 255) << 24 | Math.round(i2 * 255) << 16 | Math.round(s2 * 255) << 8;
  }
  function y$4(e2) {
    let t2 = parseInt(e2, 10);
    return t2 < 0 ? 0 : t2 > 255 ? 255 : t2;
  }
  function pe(e2) {
    return (parseFloat(e2) % 360 + 360) % 360 / 360;
  }
  function me$1(e2) {
    let t2 = parseFloat(e2);
    return t2 < 0 ? 0 : t2 > 1 ? 255 : Math.round(t2 * 255);
  }
  function z$2(e2) {
    let t2 = parseFloat(e2);
    return t2 < 0 ? 0 : t2 > 100 ? 1 : t2 / 100;
  }
  function D$3(e2) {
    let t2 = be$1(e2);
    if (t2 === null)
      return e2;
    t2 = t2 || 0;
    let r2 = (t2 & 4278190080) >>> 24, n2 = (t2 & 16711680) >>> 16, f2 = (t2 & 65280) >>> 8, o2 = (t2 & 255) / 255;
    return `rgba(${r2}, ${n2}, ${f2}, ${o2})`;
  }
  var W$2 = (e2, t2, r2) => {
    if (l$3.fun(e2))
      return e2;
    if (l$3.arr(e2))
      return W$2({ range: e2, output: t2, extrapolate: r2 });
    if (l$3.str(e2.output[0]))
      return k$3(e2);
    let n2 = e2, f2 = n2.output, o2 = n2.range || [0, 1], i2 = n2.extrapolateLeft || n2.extrapolate || "extend", s2 = n2.extrapolateRight || n2.extrapolate || "extend", x2 = n2.easing || ((a2) => a2);
    return (a2) => {
      let F2 = He$1(a2, o2);
      return Ue$1(a2, o2[F2], o2[F2 + 1], f2[F2], f2[F2 + 1], x2, i2, s2, n2.map);
    };
  };
  function Ue$1(e2, t2, r2, n2, f2, o2, i2, s2, x2) {
    let a2 = x2 ? x2(e2) : e2;
    if (a2 < t2) {
      if (i2 === "identity")
        return a2;
      i2 === "clamp" && (a2 = t2);
    }
    if (a2 > r2) {
      if (s2 === "identity")
        return a2;
      s2 === "clamp" && (a2 = r2);
    }
    return n2 === f2 ? n2 : t2 === r2 ? e2 <= t2 ? n2 : f2 : (t2 === -1 / 0 ? a2 = -a2 : r2 === 1 / 0 ? a2 = a2 - t2 : a2 = (a2 - t2) / (r2 - t2), a2 = o2(a2), n2 === -1 / 0 ? a2 = -a2 : f2 === 1 / 0 ? a2 = a2 + n2 : a2 = a2 * (f2 - n2) + n2, a2);
  }
  function He$1(e2, t2) {
    for (var r2 = 1; r2 < t2.length - 1 && !(t2[r2] >= e2); ++r2)
      ;
    return r2 - 1;
  }
  var Be = (e2, t2 = "end") => (r2) => {
    r2 = t2 === "end" ? Math.min(r2, 0.999) : Math.max(r2, 1e-3);
    let n2 = r2 * e2, f2 = t2 === "end" ? Math.floor(n2) : Math.ceil(n2);
    return ne$2(0, 1, f2 / e2);
  }, P = 1.70158, L$3 = P * 1.525, xe$1 = P + 1, he$1 = 2 * Math.PI / 3, ye$1 = 2 * Math.PI / 4.5, V$2 = (e2) => e2 < 1 / 2.75 ? 7.5625 * e2 * e2 : e2 < 2 / 2.75 ? 7.5625 * (e2 -= 1.5 / 2.75) * e2 + 0.75 : e2 < 2.5 / 2.75 ? 7.5625 * (e2 -= 2.25 / 2.75) * e2 + 0.9375 : 7.5625 * (e2 -= 2.625 / 2.75) * e2 + 0.984375, Lt$1 = { linear: (e2) => e2, easeInQuad: (e2) => e2 * e2, easeOutQuad: (e2) => 1 - (1 - e2) * (1 - e2), easeInOutQuad: (e2) => e2 < 0.5 ? 2 * e2 * e2 : 1 - Math.pow(-2 * e2 + 2, 2) / 2, easeInCubic: (e2) => e2 * e2 * e2, easeOutCubic: (e2) => 1 - Math.pow(1 - e2, 3), easeInOutCubic: (e2) => e2 < 0.5 ? 4 * e2 * e2 * e2 : 1 - Math.pow(-2 * e2 + 2, 3) / 2, easeInQuart: (e2) => e2 * e2 * e2 * e2, easeOutQuart: (e2) => 1 - Math.pow(1 - e2, 4), easeInOutQuart: (e2) => e2 < 0.5 ? 8 * e2 * e2 * e2 * e2 : 1 - Math.pow(-2 * e2 + 2, 4) / 2, easeInQuint: (e2) => e2 * e2 * e2 * e2 * e2, easeOutQuint: (e2) => 1 - Math.pow(1 - e2, 5), easeInOutQuint: (e2) => e2 < 0.5 ? 16 * e2 * e2 * e2 * e2 * e2 : 1 - Math.pow(-2 * e2 + 2, 5) / 2, easeInSine: (e2) => 1 - Math.cos(e2 * Math.PI / 2), easeOutSine: (e2) => Math.sin(e2 * Math.PI / 2), easeInOutSine: (e2) => -(Math.cos(Math.PI * e2) - 1) / 2, easeInExpo: (e2) => e2 === 0 ? 0 : Math.pow(2, 10 * e2 - 10), easeOutExpo: (e2) => e2 === 1 ? 1 : 1 - Math.pow(2, -10 * e2), easeInOutExpo: (e2) => e2 === 0 ? 0 : e2 === 1 ? 1 : e2 < 0.5 ? Math.pow(2, 20 * e2 - 10) / 2 : (2 - Math.pow(2, -20 * e2 + 10)) / 2, easeInCirc: (e2) => 1 - Math.sqrt(1 - Math.pow(e2, 2)), easeOutCirc: (e2) => Math.sqrt(1 - Math.pow(e2 - 1, 2)), easeInOutCirc: (e2) => e2 < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * e2, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e2 + 2, 2)) + 1) / 2, easeInBack: (e2) => xe$1 * e2 * e2 * e2 - P * e2 * e2, easeOutBack: (e2) => 1 + xe$1 * Math.pow(e2 - 1, 3) + P * Math.pow(e2 - 1, 2), easeInOutBack: (e2) => e2 < 0.5 ? Math.pow(2 * e2, 2) * ((L$3 + 1) * 2 * e2 - L$3) / 2 : (Math.pow(2 * e2 - 2, 2) * ((L$3 + 1) * (e2 * 2 - 2) + L$3) + 2) / 2, easeInElastic: (e2) => e2 === 0 ? 0 : e2 === 1 ? 1 : -Math.pow(2, 10 * e2 - 10) * Math.sin((e2 * 10 - 10.75) * he$1), easeOutElastic: (e2) => e2 === 0 ? 0 : e2 === 1 ? 1 : Math.pow(2, -10 * e2) * Math.sin((e2 * 10 - 0.75) * he$1) + 1, easeInOutElastic: (e2) => e2 === 0 ? 0 : e2 === 1 ? 1 : e2 < 0.5 ? -(Math.pow(2, 20 * e2 - 10) * Math.sin((20 * e2 - 11.125) * ye$1)) / 2 : Math.pow(2, -20 * e2 + 10) * Math.sin((20 * e2 - 11.125) * ye$1) / 2 + 1, easeInBounce: (e2) => 1 - V$2(1 - e2), easeOutBounce: V$2, easeInOutBounce: (e2) => e2 < 0.5 ? (1 - V$2(1 - 2 * e2)) / 2 : (1 + V$2(2 * e2 - 1)) / 2, steps: Be };
  var g$3 = Symbol.for("FluidValue.get"), m$2 = Symbol.for("FluidValue.observers");
  var Pt = (e2) => Boolean(e2 && e2[g$3]), ve = (e2) => e2 && e2[g$3] ? e2[g$3]() : e2, qt = (e2) => e2[m$2] || null;
  function je(e2, t2) {
    e2.eventObserved ? e2.eventObserved(t2) : e2(t2);
  }
  function $t(e2, t2) {
    let r2 = e2[m$2];
    r2 && r2.forEach((n2) => {
      je(n2, t2);
    });
  }
  var ge = (_d = class {
    constructor(t2) {
      __publicField(this, _b);
      __publicField(this, _c);
      if (!t2 && !(t2 = this.get))
        throw Error("Unknown getter");
      De$1(this, t2);
    }
  }, _b = g$3, _c = m$2, _d), De$1 = (e2, t2) => Ee$1(e2, g$3, t2);
  function Gt$1(e2, t2) {
    if (e2[g$3]) {
      let r2 = e2[m$2];
      r2 || Ee$1(e2, m$2, r2 = /* @__PURE__ */ new Set()), r2.has(t2) || (r2.add(t2), e2.observerAdded && e2.observerAdded(r2.size, t2));
    }
    return t2;
  }
  function Qt(e2, t2) {
    let r2 = e2[m$2];
    if (r2 && r2.has(t2)) {
      let n2 = r2.size - 1;
      n2 ? r2.delete(t2) : e2[m$2] = null, e2.observerRemoved && e2.observerRemoved(n2, t2);
    }
  }
  var Ee$1 = (e2, t2, r2) => Object.defineProperty(e2, t2, { value: r2, writable: true, configurable: true });
  var O$1 = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, Oe = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, K = new RegExp(`(${O$1.source})(%|[a-z]+)`, "i"), we$1 = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, b$3 = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
  var N = (e2) => {
    let [t2, r2] = We(e2);
    if (!t2 || h$4())
      return e2;
    let n2 = window.getComputedStyle(document.documentElement).getPropertyValue(t2);
    if (n2)
      return n2.trim();
    if (r2 && r2.startsWith("--")) {
      let f2 = window.getComputedStyle(document.documentElement).getPropertyValue(r2);
      return f2 || e2;
    } else {
      if (r2 && b$3.test(r2))
        return N(r2);
      if (r2)
        return r2;
    }
    return e2;
  }, We = (e2) => {
    let t2 = b$3.exec(e2);
    if (!t2)
      return [,];
    let [, r2, n2] = t2;
    return [r2, n2];
  };
  var _$1, Ke$1 = (e2, t2, r2, n2, f2) => `rgba(${Math.round(t2)}, ${Math.round(r2)}, ${Math.round(n2)}, ${f2})`, Xt = (e2) => {
    _$1 || (_$1 = c$4 ? new RegExp(`(${Object.keys(c$4).join("|")})(?!\\w)`, "g") : /^\b$/);
    let t2 = e2.output.map((o2) => ve(o2).replace(b$3, N).replace(Oe, D$3).replace(_$1, D$3)), r2 = t2.map((o2) => o2.match(O$1).map(Number)), f2 = r2[0].map((o2, i2) => r2.map((s2) => {
      if (!(i2 in s2))
        throw Error('The arity of each "output" value must be equal');
      return s2[i2];
    })).map((o2) => W$2({ ...e2, output: o2 }));
    return (o2) => {
      var _a2;
      let i2 = !K.test(t2[0]) && ((_a2 = t2.find((x2) => K.test(x2))) == null ? void 0 : _a2.replace(O$1, "")), s2 = 0;
      return t2[0].replace(O$1, () => `${f2[s2++](o2)}${i2 || ""}`).replace(we$1, Ke$1);
    };
  };
  var Z = "react-spring: ", Te = (e2) => {
    let t2 = e2, r2 = false;
    if (typeof t2 != "function")
      throw new TypeError(`${Z}once requires a function parameter`);
    return (...n2) => {
      r2 || (t2(...n2), r2 = true);
    };
  }, Ne$1 = Te(console.warn);
  function Jt() {
    Ne$1(`${Z}The "interpolate" function is deprecated in v9 (use "to" instead)`);
  }
  var _e$1 = Te(console.warn);
  function er$1() {
    _e$1(`${Z}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
  }
  function or(e2) {
    return l$3.str(e2) && (e2[0] == "#" || /\d/.test(e2) || !h$4() && b$3.test(e2) || e2 in (c$4 || {}));
  }
  var Q$1 = h$4() ? reactExports.useEffect : reactExports.useLayoutEffect;
  var Ce$1 = () => {
    let e2 = reactExports.useRef(false);
    return Q$1(() => (e2.current = true, () => {
      e2.current = false;
    }), []), e2;
  };
  function Mr() {
    let e2 = reactExports.useState()[1], t2 = Ce$1();
    return () => {
      t2.current && e2(Math.random());
    };
  }
  function Lr(e2, t2) {
    let [r2] = reactExports.useState(() => ({ inputs: t2, result: e2() })), n2 = reactExports.useRef(), f2 = n2.current, o2 = f2;
    return o2 ? Boolean(t2 && o2.inputs && it$2(t2, o2.inputs)) || (o2 = { inputs: t2, result: e2() }) : o2 = r2, reactExports.useEffect(() => {
      n2.current = o2, f2 == r2 && (r2.inputs = r2.result = void 0);
    }, [o2]), o2.result;
  }
  function it$2(e2, t2) {
    if (e2.length !== t2.length)
      return false;
    for (let r2 = 0; r2 < e2.length; r2++)
      if (e2[r2] !== t2[r2])
        return false;
    return true;
  }
  var $r = (e2) => reactExports.useEffect(e2, ut), ut = [];
  function Ur(e2) {
    let t2 = reactExports.useRef();
    return reactExports.useEffect(() => {
      t2.current = e2;
    }), t2.current;
  }
  var h$3 = Symbol.for("Animated:node"), v$2 = (e2) => !!e2 && e2[h$3] === e2, k$2 = (e2) => e2 && e2[h$3], D$2 = (e2, t2) => mt$1(e2, h$3, t2), F$2 = (e2) => e2 && e2[h$3] && e2[h$3].getPayload(), c$3 = class c {
    constructor() {
      __publicField(this, "payload");
      D$2(this, this);
    }
    getPayload() {
      return this.payload || [];
    }
  };
  var l$2 = class l extends c$3 {
    constructor(r2) {
      super();
      __publicField(this, "done", true);
      __publicField(this, "elapsedTime");
      __publicField(this, "lastPosition");
      __publicField(this, "lastVelocity");
      __publicField(this, "v0");
      __publicField(this, "durationProgress", 0);
      this._value = r2;
      l$3.num(this._value) && (this.lastPosition = this._value);
    }
    static create(r2) {
      return new l$2(r2);
    }
    getPayload() {
      return [this];
    }
    getValue() {
      return this._value;
    }
    setValue(r2, n2) {
      return l$3.num(r2) && (this.lastPosition = r2, n2 && (r2 = Math.round(r2 / n2) * n2, this.done && (this.lastPosition = r2))), this._value === r2 ? false : (this._value = r2, true);
    }
    reset() {
      let { done: r2 } = this;
      this.done = false, l$3.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, r2 && (this.lastVelocity = null), this.v0 = null);
    }
  };
  var d$1 = class d extends l$2 {
    constructor(t2) {
      super(0);
      __publicField(this, "_string", null);
      __publicField(this, "_toString");
      this._toString = W$2({ output: [t2, t2] });
    }
    static create(t2) {
      return new d$1(t2);
    }
    getValue() {
      let t2 = this._string;
      return t2 ?? (this._string = this._toString(this._value));
    }
    setValue(t2) {
      if (l$3.str(t2)) {
        if (t2 == this._string)
          return false;
        this._string = t2, this._value = 1;
      } else if (super.setValue(t2))
        this._string = null;
      else
        return false;
      return true;
    }
    reset(t2) {
      t2 && (this._toString = W$2({ output: [this.getValue(), t2] })), this._value = 0, super.reset();
    }
  };
  var f$2 = { dependencies: null };
  var u$2 = class u extends c$3 {
    constructor(r2) {
      super();
      this.source = r2;
      this.setValue(r2);
    }
    getValue(r2) {
      let n2 = {};
      return xt(this.source, (a2, i2) => {
        v$2(a2) ? n2[i2] = a2.getValue(r2) : Pt(a2) ? n2[i2] = ve(a2) : r2 || (n2[i2] = a2);
      }), n2;
    }
    setValue(r2) {
      this.source = r2, this.payload = this._makePayload(r2);
    }
    reset() {
      this.payload && Ve(this.payload, (r2) => r2.reset());
    }
    _makePayload(r2) {
      if (r2) {
        let n2 = /* @__PURE__ */ new Set();
        return xt(r2, this._addToPayload, n2), Array.from(n2);
      }
    }
    _addToPayload(r2) {
      f$2.dependencies && Pt(r2) && f$2.dependencies.add(r2);
      let n2 = F$2(r2);
      n2 && Ve(n2, (a2) => this.add(a2));
    }
  };
  var y$3 = class y extends u$2 {
    constructor(t2) {
      super(t2);
    }
    static create(t2) {
      return new y$3(t2);
    }
    getValue() {
      return this.source.map((t2) => t2.getValue());
    }
    setValue(t2) {
      let r2 = this.getPayload();
      return t2.length == r2.length ? r2.map((n2, a2) => n2.setValue(t2[a2])).some(Boolean) : (super.setValue(t2.map(z$1)), true);
    }
  };
  function z$1(e2) {
    return (or(e2) ? d$1 : l$2).create(e2);
  }
  function Le$1(e2) {
    let t2 = k$2(e2);
    return t2 ? t2.constructor : l$3.arr(e2) ? y$3 : or(e2) ? d$1 : l$2;
  }
  var x$3 = (e2, t2) => {
    let r2 = !l$3.fun(e2) || e2.prototype && e2.prototype.isReactComponent;
    return reactExports.forwardRef((n2, a2) => {
      let i2 = reactExports.useRef(null), o2 = r2 && reactExports.useCallback((s2) => {
        i2.current = ae(a2, s2);
      }, [a2]), [m2, T2] = ne$1(n2, t2), W2 = Mr(), P2 = () => {
        let s2 = i2.current;
        if (r2 && !s2)
          return;
        (s2 ? t2.applyAnimatedValues(s2, m2.getValue(true)) : false) === false && W2();
      }, _2 = new b$2(P2, T2), p2 = reactExports.useRef();
      Q$1(() => (p2.current = _2, Ve(T2, (s2) => Gt$1(s2, _2)), () => {
        p2.current && (Ve(p2.current.deps, (s2) => Qt(s2, p2.current)), n$2.cancel(p2.current.update));
      })), reactExports.useEffect(P2, []), $r(() => () => {
        let s2 = p2.current;
        Ve(s2.deps, (S2) => Qt(S2, s2));
      });
      let $2 = t2.getComponentProps(m2.getValue());
      return reactExports.createElement(e2, { ...$2, ref: o2 });
    });
  }, b$2 = class b {
    constructor(t2, r2) {
      this.update = t2;
      this.deps = r2;
    }
    eventObserved(t2) {
      t2.type == "change" && n$2.write(this.update);
    }
  };
  function ne$1(e2, t2) {
    let r2 = /* @__PURE__ */ new Set();
    return f$2.dependencies = r2, e2.style && (e2 = { ...e2, style: t2.createAnimatedStyle(e2.style) }), e2 = new u$2(e2), f$2.dependencies = null, [e2, r2];
  }
  function ae(e2, t2) {
    return e2 && (l$3.fun(e2) ? e2(t2) : e2.current = t2), t2;
  }
  var j = Symbol.for("AnimatedComponent"), Ke = (e2, { applyAnimatedValues: t2 = () => false, createAnimatedStyle: r2 = (a2) => new u$2(a2), getComponentProps: n2 = (a2) => a2 } = {}) => {
    let a2 = { applyAnimatedValues: t2, createAnimatedStyle: r2, getComponentProps: n2 }, i2 = (o2) => {
      let m2 = I$2(o2) || "Anonymous";
      return l$3.str(o2) ? o2 = i2[o2] || (i2[o2] = x$3(o2, a2)) : o2 = o2[j] || (o2[j] = x$3(o2, a2)), o2.displayName = `Animated(${m2})`, o2;
    };
    return xt(e2, (o2, m2) => {
      l$3.arr(e2) && (m2 = I$2(o2)), i2[m2] = i2(o2);
    }), { animated: i2 };
  }, I$2 = (e2) => l$3.str(e2) ? e2 : e2 && l$3.str(e2.displayName) ? e2.displayName : l$3.fun(e2) && e2.name || null;
  function I$1(t2, ...e2) {
    return l$3.fun(t2) ? t2(...e2) : t2;
  }
  var te = (t2, e2) => t2 === true || !!(e2 && t2 && (l$3.fun(t2) ? t2(e2) : ht$1(t2).includes(e2))), et = (t2, e2) => l$3.obj(t2) ? e2 && t2[e2] : t2;
  var ke = (t2, e2) => t2.default === true ? t2[e2] : t2.default ? t2.default[e2] : void 0, nn = (t2) => t2, ne = (t2, e2 = nn) => {
    let n2 = rn;
    t2.default && t2.default !== true && (t2 = t2.default, n2 = Object.keys(t2));
    let r2 = {};
    for (let o2 of n2) {
      let s2 = e2(t2[o2], o2);
      l$3.und(s2) || (r2[o2] = s2);
    }
    return r2;
  }, rn = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"], on = { config: 1, from: 1, to: 1, ref: 1, loop: 1, reset: 1, pause: 1, cancel: 1, reverse: 1, immediate: 1, default: 1, delay: 1, onProps: 1, onStart: 1, onChange: 1, onPause: 1, onResume: 1, onRest: 1, onResolve: 1, items: 1, trail: 1, sort: 1, expires: 1, initial: 1, enter: 1, update: 1, leave: 1, children: 1, onDestroyed: 1, keys: 1, callId: 1, parentId: 1 };
  function sn(t2) {
    let e2 = {}, n2 = 0;
    if (xt(t2, (r2, o2) => {
      on[o2] || (e2[o2] = r2, n2++);
    }), n2)
      return e2;
  }
  function de(t2) {
    let e2 = sn(t2);
    if (e2) {
      let n2 = { to: e2 };
      return xt(t2, (r2, o2) => o2 in e2 || (n2[o2] = r2)), n2;
    }
    return { ...t2 };
  }
  function me(t2) {
    return t2 = ve(t2), l$3.arr(t2) ? t2.map(me) : or(t2) ? p$2.createStringInterpolator({ range: [0, 1], output: [t2, t2] })(1) : t2;
  }
  function Ue(t2) {
    for (let e2 in t2)
      return true;
    return false;
  }
  function Ee(t2) {
    return l$3.fun(t2) || l$3.arr(t2) && l$3.obj(t2[0]);
  }
  function xe(t2, e2) {
    var _a2;
    (_a2 = t2.ref) == null ? void 0 : _a2.delete(t2), e2 == null ? void 0 : e2.delete(t2);
  }
  function he(t2, e2) {
    var _a2;
    e2 && t2.ref !== e2 && ((_a2 = t2.ref) == null ? void 0 : _a2.delete(t2), e2.add(t2), t2.ref = e2);
  }
  var mt = { default: { tension: 170, friction: 26 }, gentle: { tension: 120, friction: 14 }, wobbly: { tension: 180, friction: 12 }, stiff: { tension: 210, friction: 20 }, slow: { tension: 280, friction: 60 }, molasses: { tension: 280, friction: 120 } };
  var tt = { ...mt.default, mass: 1, damping: 1, easing: Lt$1.linear, clamp: false }, we = class {
    constructor() {
      __publicField(this, "tension");
      __publicField(this, "friction");
      __publicField(this, "frequency");
      __publicField(this, "damping");
      __publicField(this, "mass");
      __publicField(this, "velocity", 0);
      __publicField(this, "restVelocity");
      __publicField(this, "precision");
      __publicField(this, "progress");
      __publicField(this, "duration");
      __publicField(this, "easing");
      __publicField(this, "clamp");
      __publicField(this, "bounce");
      __publicField(this, "decay");
      __publicField(this, "round");
      Object.assign(this, tt);
    }
  };
  function gt(t2, e2, n2) {
    n2 && (n2 = { ...n2 }, ht(n2, e2), e2 = { ...n2, ...e2 }), ht(t2, e2), Object.assign(t2, e2);
    for (let a2 in tt)
      t2[a2] == null && (t2[a2] = tt[a2]);
    let { mass: r2, frequency: o2, damping: s2 } = t2;
    return l$3.und(o2) || (o2 < 0.01 && (o2 = 0.01), s2 < 0 && (s2 = 0), t2.tension = Math.pow(2 * Math.PI / o2, 2) * r2, t2.friction = 4 * Math.PI * s2 * r2 / o2), t2;
  }
  function ht(t2, e2) {
    if (!l$3.und(e2.decay))
      t2.duration = void 0;
    else {
      let n2 = !l$3.und(e2.tension) || !l$3.und(e2.friction);
      (n2 || !l$3.und(e2.frequency) || !l$3.und(e2.damping) || !l$3.und(e2.mass)) && (t2.duration = void 0, t2.decay = void 0), n2 && (t2.frequency = void 0);
    }
  }
  var yt = [], Le = class {
    constructor() {
      __publicField(this, "changed", false);
      __publicField(this, "values", yt);
      __publicField(this, "toValues", null);
      __publicField(this, "fromValues", yt);
      __publicField(this, "to");
      __publicField(this, "from");
      __publicField(this, "config", new we());
      __publicField(this, "immediate", false);
    }
  };
  function Me(t2, { key: e2, props: n2, defaultProps: r2, state: o2, actions: s2 }) {
    return new Promise((a2, i2) => {
      let u2, p2, f2 = te(n2.cancel ?? (r2 == null ? void 0 : r2.cancel), e2);
      if (f2)
        b2();
      else {
        l$3.und(n2.pause) || (o2.paused = te(n2.pause, e2));
        let c2 = r2 == null ? void 0 : r2.pause;
        c2 !== true && (c2 = o2.paused || te(c2, e2)), u2 = I$1(n2.delay || 0, e2), c2 ? (o2.resumeQueue.add(m2), s2.pause()) : (s2.resume(), m2());
      }
      function d2() {
        o2.resumeQueue.add(m2), o2.timeouts.delete(p2), p2.cancel(), u2 = p2.time - n$2.now();
      }
      function m2() {
        u2 > 0 && !p$2.skipAnimation ? (o2.delayed = true, p2 = n$2.setTimeout(b2, u2), o2.pauseQueue.add(d2), o2.timeouts.add(p2)) : b2();
      }
      function b2() {
        o2.delayed && (o2.delayed = false), o2.pauseQueue.delete(d2), o2.timeouts.delete(p2), t2 <= (o2.cancelId || 0) && (f2 = true);
        try {
          s2.start({ ...n2, callId: t2, cancel: f2 }, a2);
        } catch (c2) {
          i2(c2);
        }
      }
    });
  }
  var be = (t2, e2) => e2.length == 1 ? e2[0] : e2.some((n2) => n2.cancelled) ? q$1(t2.get()) : e2.every((n2) => n2.noop) ? nt(t2.get()) : E$1(t2.get(), e2.every((n2) => n2.finished)), nt = (t2) => ({ value: t2, noop: true, finished: true, cancelled: false }), E$1 = (t2, e2, n2 = false) => ({ value: t2, finished: e2, cancelled: n2 }), q$1 = (t2) => ({ value: t2, cancelled: true, finished: false });
  function De(t2, e2, n2, r2) {
    let { callId: o2, parentId: s2, onRest: a2 } = e2, { asyncTo: i2, promise: u2 } = n2;
    return !s2 && t2 === i2 && !e2.reset ? u2 : n2.promise = (async () => {
      n2.asyncId = o2, n2.asyncTo = t2;
      let p2 = ne(e2, (l2, h2) => h2 === "onRest" ? void 0 : l2), f2, d2, m2 = new Promise((l2, h2) => (f2 = l2, d2 = h2)), b2 = (l2) => {
        let h2 = o2 <= (n2.cancelId || 0) && q$1(r2) || o2 !== n2.asyncId && E$1(r2, false);
        if (h2)
          throw l2.result = h2, d2(l2), l2;
      }, c2 = (l2, h2) => {
        let g2 = new Ae(), x2 = new Ne();
        return (async () => {
          if (p$2.skipAnimation)
            throw oe(n2), x2.result = E$1(r2, false), d2(x2), x2;
          b2(g2);
          let S2 = l$3.obj(l2) ? { ...l2 } : { ...h2, to: l2 };
          S2.parentId = o2, xt(p2, (V2, _2) => {
            l$3.und(S2[_2]) && (S2[_2] = V2);
          });
          let A2 = await r2.start(S2);
          return b2(g2), n2.paused && await new Promise((V2) => {
            n2.resumeQueue.add(V2);
          }), A2;
        })();
      }, P2;
      if (p$2.skipAnimation)
        return oe(n2), E$1(r2, false);
      try {
        let l2;
        l$3.arr(t2) ? l2 = (async (h2) => {
          for (let g2 of h2)
            await c2(g2);
        })(t2) : l2 = Promise.resolve(t2(c2, r2.stop.bind(r2))), await Promise.all([l2.then(f2), m2]), P2 = E$1(r2.get(), true, false);
      } catch (l2) {
        if (l2 instanceof Ae)
          P2 = l2.result;
        else if (l2 instanceof Ne)
          P2 = l2.result;
        else
          throw l2;
      } finally {
        o2 == n2.asyncId && (n2.asyncId = s2, n2.asyncTo = s2 ? i2 : void 0, n2.promise = s2 ? u2 : void 0);
      }
      return l$3.fun(a2) && n$2.batchedUpdates(() => {
        a2(P2, r2, r2.item);
      }), P2;
    })();
  }
  function oe(t2, e2) {
    Pe$1(t2.timeouts, (n2) => n2.cancel()), t2.pauseQueue.clear(), t2.resumeQueue.clear(), t2.asyncId = t2.asyncTo = t2.promise = void 0, e2 && (t2.cancelId = e2);
  }
  var Ae = class extends Error {
    constructor() {
      super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");
      __publicField(this, "result");
    }
  }, Ne = class extends Error {
    constructor() {
      super("SkipAnimationSignal");
      __publicField(this, "result");
    }
  };
  var Re = (t2) => t2 instanceof X, Sn = 1, X = class extends ge {
    constructor() {
      super(...arguments);
      __publicField(this, "id", Sn++);
      __publicField(this, "_priority", 0);
    }
    get priority() {
      return this._priority;
    }
    set priority(e2) {
      this._priority != e2 && (this._priority = e2, this._onPriorityChange(e2));
    }
    get() {
      let e2 = k$2(this);
      return e2 && e2.getValue();
    }
    to(...e2) {
      return p$2.to(this, e2);
    }
    interpolate(...e2) {
      return Jt(), p$2.to(this, e2);
    }
    toJSON() {
      return this.get();
    }
    observerAdded(e2) {
      e2 == 1 && this._attach();
    }
    observerRemoved(e2) {
      e2 == 0 && this._detach();
    }
    _attach() {
    }
    _detach() {
    }
    _onChange(e2, n2 = false) {
      $t(this, { type: "change", parent: this, value: e2, idle: n2 });
    }
    _onPriorityChange(e2) {
      this.idle || qe$1.sort(this), $t(this, { type: "priority", parent: this, priority: e2 });
    }
  };
  var se = Symbol.for("SpringPhase"), bt = 1, rt = 2, ot = 4, qe = (t2) => (t2[se] & bt) > 0, Q = (t2) => (t2[se] & rt) > 0, ye = (t2) => (t2[se] & ot) > 0, st = (t2, e2) => e2 ? t2[se] |= rt | bt : t2[se] &= ~rt, it$1 = (t2, e2) => e2 ? t2[se] |= ot : t2[se] &= ~ot;
  var ue = class extends X {
    constructor(e2, n2) {
      super();
      __publicField(this, "key");
      __publicField(this, "animation", new Le());
      __publicField(this, "queue");
      __publicField(this, "defaultProps", {});
      __publicField(this, "_state", { paused: false, delayed: false, pauseQueue: /* @__PURE__ */ new Set(), resumeQueue: /* @__PURE__ */ new Set(), timeouts: /* @__PURE__ */ new Set() });
      __publicField(this, "_pendingCalls", /* @__PURE__ */ new Set());
      __publicField(this, "_lastCallId", 0);
      __publicField(this, "_lastToId", 0);
      __publicField(this, "_memoizedDuration", 0);
      if (!l$3.und(e2) || !l$3.und(n2)) {
        let r2 = l$3.obj(e2) ? { ...e2 } : { ...n2, from: e2 };
        l$3.und(r2.default) && (r2.default = true), this.start(r2);
      }
    }
    get idle() {
      return !(Q(this) || this._state.asyncTo) || ye(this);
    }
    get goal() {
      return ve(this.animation.to);
    }
    get velocity() {
      let e2 = k$2(this);
      return e2 instanceof l$2 ? e2.lastVelocity || 0 : e2.getPayload().map((n2) => n2.lastVelocity || 0);
    }
    get hasAnimated() {
      return qe(this);
    }
    get isAnimating() {
      return Q(this);
    }
    get isPaused() {
      return ye(this);
    }
    get isDelayed() {
      return this._state.delayed;
    }
    advance(e2) {
      let n2 = true, r2 = false, o2 = this.animation, { config: s2, toValues: a2 } = o2, i2 = F$2(o2.to);
      !i2 && Pt(o2.to) && (a2 = ht$1(ve(o2.to))), o2.values.forEach((f2, d2) => {
        if (f2.done)
          return;
        let m2 = f2.constructor == d$1 ? 1 : i2 ? i2[d2].lastPosition : a2[d2], b2 = o2.immediate, c2 = m2;
        if (!b2) {
          if (c2 = f2.lastPosition, s2.tension <= 0) {
            f2.done = true;
            return;
          }
          let P2 = f2.elapsedTime += e2, l2 = o2.fromValues[d2], h2 = f2.v0 != null ? f2.v0 : f2.v0 = l$3.arr(s2.velocity) ? s2.velocity[d2] : s2.velocity, g2, x2 = s2.precision || (l2 == m2 ? 5e-3 : Math.min(1, Math.abs(m2 - l2) * 1e-3));
          if (l$3.und(s2.duration))
            if (s2.decay) {
              let S2 = s2.decay === true ? 0.998 : s2.decay, A2 = Math.exp(-(1 - S2) * P2);
              c2 = l2 + h2 / (1 - S2) * (1 - A2), b2 = Math.abs(f2.lastPosition - c2) <= x2, g2 = h2 * A2;
            } else {
              g2 = f2.lastVelocity == null ? h2 : f2.lastVelocity;
              let S2 = s2.restVelocity || x2 / 10, A2 = s2.clamp ? 0 : s2.bounce, V2 = !l$3.und(A2), _2 = l2 == m2 ? f2.v0 > 0 : l2 < m2, v2, w2 = false, C2 = 1, $2 = Math.ceil(e2 / C2);
              for (let L2 = 0; L2 < $2 && (v2 = Math.abs(g2) > S2, !(!v2 && (b2 = Math.abs(m2 - c2) <= x2, b2))); ++L2) {
                V2 && (w2 = c2 == m2 || c2 > m2 == _2, w2 && (g2 = -g2 * A2, c2 = m2));
                let N2 = -s2.tension * 1e-6 * (c2 - m2), y2 = -s2.friction * 1e-3 * g2, T2 = (N2 + y2) / s2.mass;
                g2 = g2 + T2 * C2, c2 = c2 + g2 * C2;
              }
            }
          else {
            let S2 = 1;
            s2.duration > 0 && (this._memoizedDuration !== s2.duration && (this._memoizedDuration = s2.duration, f2.durationProgress > 0 && (f2.elapsedTime = s2.duration * f2.durationProgress, P2 = f2.elapsedTime += e2)), S2 = (s2.progress || 0) + P2 / this._memoizedDuration, S2 = S2 > 1 ? 1 : S2 < 0 ? 0 : S2, f2.durationProgress = S2), c2 = l2 + s2.easing(S2) * (m2 - l2), g2 = (c2 - f2.lastPosition) / e2, b2 = S2 == 1;
          }
          f2.lastVelocity = g2, Number.isNaN(c2) && (console.warn("Got NaN while animating:", this), b2 = true);
        }
        i2 && !i2[d2].done && (b2 = false), b2 ? f2.done = true : n2 = false, f2.setValue(c2, s2.round) && (r2 = true);
      });
      let u2 = k$2(this), p2 = u2.getValue();
      if (n2) {
        let f2 = ve(o2.to);
        (p2 !== f2 || r2) && !s2.decay ? (u2.setValue(f2), this._onChange(f2)) : r2 && s2.decay && this._onChange(p2), this._stop();
      } else
        r2 && this._onChange(p2);
    }
    set(e2) {
      return n$2.batchedUpdates(() => {
        this._stop(), this._focus(e2), this._set(e2);
      }), this;
    }
    pause() {
      this._update({ pause: true });
    }
    resume() {
      this._update({ pause: false });
    }
    finish() {
      if (Q(this)) {
        let { to: e2, config: n2 } = this.animation;
        n$2.batchedUpdates(() => {
          this._onStart(), n2.decay || this._set(e2, false), this._stop();
        });
      }
      return this;
    }
    update(e2) {
      return (this.queue || (this.queue = [])).push(e2), this;
    }
    start(e2, n2) {
      let r2;
      return l$3.und(e2) ? (r2 = this.queue || [], this.queue = []) : r2 = [l$3.obj(e2) ? e2 : { ...n2, to: e2 }], Promise.all(r2.map((o2) => this._update(o2))).then((o2) => be(this, o2));
    }
    stop(e2) {
      let { to: n2 } = this.animation;
      return this._focus(this.get()), oe(this._state, e2 && this._lastCallId), n$2.batchedUpdates(() => this._stop(n2, e2)), this;
    }
    reset() {
      this._update({ reset: true });
    }
    eventObserved(e2) {
      e2.type == "change" ? this._start() : e2.type == "priority" && (this.priority = e2.priority + 1);
    }
    _prepareNode(e2) {
      let n2 = this.key || "", { to: r2, from: o2 } = e2;
      r2 = l$3.obj(r2) ? r2[n2] : r2, (r2 == null || Ee(r2)) && (r2 = void 0), o2 = l$3.obj(o2) ? o2[n2] : o2, o2 == null && (o2 = void 0);
      let s2 = { to: r2, from: o2 };
      return qe(this) || (e2.reverse && ([r2, o2] = [o2, r2]), o2 = ve(o2), l$3.und(o2) ? k$2(this) || this._set(r2) : this._set(o2)), s2;
    }
    _update({ ...e2 }, n2) {
      let { key: r2, defaultProps: o2 } = this;
      e2.default && Object.assign(o2, ne(e2, (i2, u2) => /^on/.test(u2) ? et(i2, r2) : i2)), _t(this, e2, "onProps"), Ie(this, "onProps", e2, this);
      let s2 = this._prepareNode(e2);
      if (Object.isFrozen(this))
        throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
      let a2 = this._state;
      return Me(++this._lastCallId, { key: r2, props: e2, defaultProps: o2, state: a2, actions: { pause: () => {
        ye(this) || (it$1(this, true), yt$1(a2.pauseQueue), Ie(this, "onPause", E$1(this, Ce(this, this.animation.to)), this));
      }, resume: () => {
        ye(this) && (it$1(this, false), Q(this) && this._resume(), yt$1(a2.resumeQueue), Ie(this, "onResume", E$1(this, Ce(this, this.animation.to)), this));
      }, start: this._merge.bind(this, s2) } }).then((i2) => {
        if (e2.loop && i2.finished && !(n2 && i2.noop)) {
          let u2 = at(e2);
          if (u2)
            return this._update(u2, true);
        }
        return i2;
      });
    }
    _merge(e2, n2, r2) {
      if (n2.cancel)
        return this.stop(true), r2(q$1(this));
      let o2 = !l$3.und(e2.to), s2 = !l$3.und(e2.from);
      if (o2 || s2)
        if (n2.callId > this._lastToId)
          this._lastToId = n2.callId;
        else
          return r2(q$1(this));
      let { key: a2, defaultProps: i2, animation: u2 } = this, { to: p2, from: f2 } = u2, { to: d2 = p2, from: m2 = f2 } = e2;
      s2 && !o2 && (!n2.default || l$3.und(d2)) && (d2 = m2), n2.reverse && ([d2, m2] = [m2, d2]);
      let b2 = !bt$1(m2, f2);
      b2 && (u2.from = m2), m2 = ve(m2);
      let c2 = !bt$1(d2, p2);
      c2 && this._focus(d2);
      let P2 = Ee(n2.to), { config: l2 } = u2, { decay: h2, velocity: g2 } = l2;
      (o2 || s2) && (l2.velocity = 0), n2.config && !P2 && gt(l2, I$1(n2.config, a2), n2.config !== i2.config ? I$1(i2.config, a2) : void 0);
      let x2 = k$2(this);
      if (!x2 || l$3.und(d2))
        return r2(E$1(this, true));
      let S2 = l$3.und(n2.reset) ? s2 && !n2.default : !l$3.und(m2) && te(n2.reset, a2), A2 = S2 ? m2 : this.get(), V2 = me(d2), _2 = l$3.num(V2) || l$3.arr(V2) || or(V2), v2 = !P2 && (!_2 || te(i2.immediate || n2.immediate, a2));
      if (c2) {
        let L2 = Le$1(d2);
        if (L2 !== x2.constructor)
          if (v2)
            x2 = this._set(V2);
          else
            throw Error(`Cannot animate between ${x2.constructor.name} and ${L2.name}, as the "to" prop suggests`);
      }
      let w2 = x2.constructor, C2 = Pt(d2), $2 = false;
      if (!C2) {
        let L2 = S2 || !qe(this) && b2;
        (c2 || L2) && ($2 = bt$1(me(A2), V2), C2 = !$2), (!bt$1(u2.immediate, v2) && !v2 || !bt$1(l2.decay, h2) || !bt$1(l2.velocity, g2)) && (C2 = true);
      }
      if ($2 && Q(this) && (u2.changed && !S2 ? C2 = true : C2 || this._stop(p2)), !P2 && ((C2 || Pt(p2)) && (u2.values = x2.getPayload(), u2.toValues = Pt(d2) ? null : w2 == d$1 ? [1] : ht$1(V2)), u2.immediate != v2 && (u2.immediate = v2, !v2 && !S2 && this._set(p2)), C2)) {
        let { onRest: L2 } = u2;
        Ve(_n, (y2) => _t(this, n2, y2));
        let N2 = E$1(this, Ce(this, p2));
        yt$1(this._pendingCalls, N2), this._pendingCalls.add(r2), u2.changed && n$2.batchedUpdates(() => {
          var _a2;
          u2.changed = !S2, L2 == null ? void 0 : L2(N2, this), S2 ? I$1(i2.onRest, N2) : (_a2 = u2.onStart) == null ? void 0 : _a2.call(u2, N2, this);
        });
      }
      S2 && this._set(A2), P2 ? r2(De(n2.to, n2, this._state, this)) : C2 ? this._start() : Q(this) && !c2 ? this._pendingCalls.add(r2) : r2(nt(A2));
    }
    _focus(e2) {
      let n2 = this.animation;
      e2 !== n2.to && (qt(this) && this._detach(), n2.to = e2, qt(this) && this._attach());
    }
    _attach() {
      let e2 = 0, { to: n2 } = this.animation;
      Pt(n2) && (Gt$1(n2, this), Re(n2) && (e2 = n2.priority + 1)), this.priority = e2;
    }
    _detach() {
      let { to: e2 } = this.animation;
      Pt(e2) && Qt(e2, this);
    }
    _set(e2, n2 = true) {
      let r2 = ve(e2);
      if (!l$3.und(r2)) {
        let o2 = k$2(this);
        if (!o2 || !bt$1(r2, o2.getValue())) {
          let s2 = Le$1(r2);
          !o2 || o2.constructor != s2 ? D$2(this, s2.create(r2)) : o2.setValue(r2), o2 && n$2.batchedUpdates(() => {
            this._onChange(r2, n2);
          });
        }
      }
      return k$2(this);
    }
    _onStart() {
      let e2 = this.animation;
      e2.changed || (e2.changed = true, Ie(this, "onStart", E$1(this, Ce(this, e2.to)), this));
    }
    _onChange(e2, n2) {
      n2 || (this._onStart(), I$1(this.animation.onChange, e2, this)), I$1(this.defaultProps.onChange, e2, this), super._onChange(e2, n2);
    }
    _start() {
      let e2 = this.animation;
      k$2(this).reset(ve(e2.to)), e2.immediate || (e2.fromValues = e2.values.map((n2) => n2.lastPosition)), Q(this) || (st(this, true), ye(this) || this._resume());
    }
    _resume() {
      p$2.skipAnimation ? this.finish() : qe$1.start(this);
    }
    _stop(e2, n2) {
      if (Q(this)) {
        st(this, false);
        let r2 = this.animation;
        Ve(r2.values, (s2) => {
          s2.done = true;
        }), r2.toValues && (r2.onChange = r2.onPause = r2.onResume = void 0), $t(this, { type: "idle", parent: this });
        let o2 = n2 ? q$1(this.get()) : E$1(this.get(), Ce(this, e2 ?? r2.to));
        yt$1(this._pendingCalls, o2), r2.changed && (r2.changed = false, Ie(this, "onRest", o2, this));
      }
    }
  };
  function Ce(t2, e2) {
    let n2 = me(e2), r2 = me(t2.get());
    return bt$1(r2, n2);
  }
  function at(t2, e2 = t2.loop, n2 = t2.to) {
    let r2 = I$1(e2);
    if (r2) {
      let o2 = r2 !== true && de(r2), s2 = (o2 || t2).reverse, a2 = !o2 || o2.reset;
      return Pe({ ...t2, loop: e2, default: false, pause: void 0, to: !s2 || Ee(n2) ? n2 : void 0, from: a2 ? t2.from : void 0, reset: a2, ...o2 });
    }
  }
  function Pe(t2) {
    let { to: e2, from: n2 } = t2 = de(t2), r2 = /* @__PURE__ */ new Set();
    return l$3.obj(e2) && Vt(e2, r2), l$3.obj(n2) && Vt(n2, r2), t2.keys = r2.size ? Array.from(r2) : null, t2;
  }
  function Ot(t2) {
    let e2 = Pe(t2);
    return l$3.und(e2.default) && (e2.default = ne(e2)), e2;
  }
  function Vt(t2, e2) {
    xt(t2, (n2, r2) => n2 != null && e2.add(r2));
  }
  var _n = ["onStart", "onRest", "onChange", "onPause", "onResume"];
  function _t(t2, e2, n2) {
    t2.animation[n2] = e2[n2] !== ke(e2, n2) ? et(e2[n2], t2.key) : void 0;
  }
  function Ie(t2, e2, ...n2) {
    var _a2, _b2, _c2, _d2;
    (_b2 = (_a2 = t2.animation)[e2]) == null ? void 0 : _b2.call(_a2, ...n2), (_d2 = (_c2 = t2.defaultProps)[e2]) == null ? void 0 : _d2.call(_c2, ...n2);
  }
  var Fn = ["onStart", "onChange", "onRest"], kn = 1, le = class {
    constructor(e2, n2) {
      __publicField(this, "id", kn++);
      __publicField(this, "springs", {});
      __publicField(this, "queue", []);
      __publicField(this, "ref");
      __publicField(this, "_flush");
      __publicField(this, "_initialProps");
      __publicField(this, "_lastAsyncId", 0);
      __publicField(this, "_active", /* @__PURE__ */ new Set());
      __publicField(this, "_changed", /* @__PURE__ */ new Set());
      __publicField(this, "_started", false);
      __publicField(this, "_item");
      __publicField(this, "_state", { paused: false, pauseQueue: /* @__PURE__ */ new Set(), resumeQueue: /* @__PURE__ */ new Set(), timeouts: /* @__PURE__ */ new Set() });
      __publicField(this, "_events", { onStart: /* @__PURE__ */ new Map(), onChange: /* @__PURE__ */ new Map(), onRest: /* @__PURE__ */ new Map() });
      this._onFrame = this._onFrame.bind(this), n2 && (this._flush = n2), e2 && this.start({ default: true, ...e2 });
    }
    get idle() {
      return !this._state.asyncTo && Object.values(this.springs).every((e2) => e2.idle && !e2.isDelayed && !e2.isPaused);
    }
    get item() {
      return this._item;
    }
    set item(e2) {
      this._item = e2;
    }
    get() {
      let e2 = {};
      return this.each((n2, r2) => e2[r2] = n2.get()), e2;
    }
    set(e2) {
      for (let n2 in e2) {
        let r2 = e2[n2];
        l$3.und(r2) || this.springs[n2].set(r2);
      }
    }
    update(e2) {
      return e2 && this.queue.push(Pe(e2)), this;
    }
    start(e2) {
      let { queue: n2 } = this;
      return e2 ? n2 = ht$1(e2).map(Pe) : this.queue = [], this._flush ? this._flush(this, n2) : (jt(this, n2), ze(this, n2));
    }
    stop(e2, n2) {
      if (e2 !== !!e2 && (n2 = e2), n2) {
        let r2 = this.springs;
        Ve(ht$1(n2), (o2) => r2[o2].stop(!!e2));
      } else
        oe(this._state, this._lastAsyncId), this.each((r2) => r2.stop(!!e2));
      return this;
    }
    pause(e2) {
      if (l$3.und(e2))
        this.start({ pause: true });
      else {
        let n2 = this.springs;
        Ve(ht$1(e2), (r2) => n2[r2].pause());
      }
      return this;
    }
    resume(e2) {
      if (l$3.und(e2))
        this.start({ pause: false });
      else {
        let n2 = this.springs;
        Ve(ht$1(e2), (r2) => n2[r2].resume());
      }
      return this;
    }
    each(e2) {
      xt(this.springs, e2);
    }
    _onFrame() {
      let { onStart: e2, onChange: n2, onRest: r2 } = this._events, o2 = this._active.size > 0, s2 = this._changed.size > 0;
      (o2 && !this._started || s2 && !this._started) && (this._started = true, Pe$1(e2, ([u2, p2]) => {
        p2.value = this.get(), u2(p2, this, this._item);
      }));
      let a2 = !o2 && this._started, i2 = s2 || a2 && r2.size ? this.get() : null;
      s2 && n2.size && Pe$1(n2, ([u2, p2]) => {
        p2.value = i2, u2(p2, this, this._item);
      }), a2 && (this._started = false, Pe$1(r2, ([u2, p2]) => {
        p2.value = i2, u2(p2, this, this._item);
      }));
    }
    eventObserved(e2) {
      if (e2.type == "change")
        this._changed.add(e2.parent), e2.idle || this._active.add(e2.parent);
      else if (e2.type == "idle")
        this._active.delete(e2.parent);
      else
        return;
      n$2.onFrame(this._onFrame);
    }
  };
  function ze(t2, e2) {
    return Promise.all(e2.map((n2) => wt(t2, n2))).then((n2) => be(t2, n2));
  }
  async function wt(t2, e2, n2) {
    let { keys: r2, to: o2, from: s2, loop: a2, onRest: i2, onResolve: u2 } = e2, p2 = l$3.obj(e2.default) && e2.default;
    a2 && (e2.loop = false), o2 === false && (e2.to = null), s2 === false && (e2.from = null);
    let f2 = l$3.arr(o2) || l$3.fun(o2) ? o2 : void 0;
    f2 ? (e2.to = void 0, e2.onRest = void 0, p2 && (p2.onRest = void 0)) : Ve(Fn, (P2) => {
      let l2 = e2[P2];
      if (l$3.fun(l2)) {
        let h2 = t2._events[P2];
        e2[P2] = ({ finished: g2, cancelled: x2 }) => {
          let S2 = h2.get(l2);
          S2 ? (g2 || (S2.finished = false), x2 && (S2.cancelled = true)) : h2.set(l2, { value: null, finished: g2 || false, cancelled: x2 || false });
        }, p2 && (p2[P2] = e2[P2]);
      }
    });
    let d2 = t2._state;
    e2.pause === !d2.paused ? (d2.paused = e2.pause, yt$1(e2.pause ? d2.pauseQueue : d2.resumeQueue)) : d2.paused && (e2.pause = true);
    let m2 = (r2 || Object.keys(t2.springs)).map((P2) => t2.springs[P2].start(e2)), b2 = e2.cancel === true || ke(e2, "cancel") === true;
    (f2 || b2 && d2.asyncId) && m2.push(Me(++t2._lastAsyncId, { props: e2, state: d2, actions: { pause: Y, resume: Y, start(P2, l2) {
      b2 ? (oe(d2, t2._lastAsyncId), l2(q$1(t2))) : (P2.onRest = i2, l2(De(f2, P2, d2, t2)));
    } } })), d2.paused && await new Promise((P2) => {
      d2.resumeQueue.add(P2);
    });
    let c2 = be(t2, await Promise.all(m2));
    if (a2 && c2.finished && !(n2 && c2.noop)) {
      let P2 = at(e2, a2, o2);
      if (P2)
        return jt(t2, [P2]), wt(t2, P2, true);
    }
    return u2 && n$2.batchedUpdates(() => u2(c2, t2, t2.item)), c2;
  }
  function _e(t2, e2) {
    let n2 = { ...t2.springs };
    return e2 && Ve(ht$1(e2), (r2) => {
      l$3.und(r2.keys) && (r2 = Pe(r2)), l$3.obj(r2.to) || (r2 = { ...r2, to: void 0 }), Mt(n2, r2, (o2) => Lt(o2));
    }), pt(t2, n2), n2;
  }
  function pt(t2, e2) {
    xt(e2, (n2, r2) => {
      t2.springs[r2] || (t2.springs[r2] = n2, Gt$1(n2, t2));
    });
  }
  function Lt(t2, e2) {
    let n2 = new ue();
    return n2.key = t2, e2 && Gt$1(n2, e2), n2;
  }
  function Mt(t2, e2, n2) {
    e2.keys && Ve(e2.keys, (r2) => {
      (t2[r2] || (t2[r2] = n2(r2)))._prepareNode(e2);
    });
  }
  function jt(t2, e2) {
    Ve(e2, (n2) => {
      Mt(t2.springs, n2, (r2) => Lt(r2, t2));
    });
  }
  var H$1 = ({ children: t2, ...e2 }) => {
    let n2 = reactExports.useContext(Ge), r2 = e2.pause || !!n2.pause, o2 = e2.immediate || !!n2.immediate;
    e2 = Lr(() => ({ pause: r2, immediate: o2 }), [r2, o2]);
    let { Provider: s2 } = Ge;
    return reactExports.createElement(s2, { value: e2 }, t2);
  }, Ge = wn(H$1, {});
  H$1.Provider = Ge.Provider;
  H$1.Consumer = Ge.Consumer;
  function wn(t2, e2) {
    return Object.assign(t2, reactExports.createContext(e2)), t2.Provider._context = t2, t2.Consumer._context = t2, t2;
  }
  var fe = () => {
    let t2 = [], e2 = function(r2) {
      er$1();
      let o2 = [];
      return Ve(t2, (s2, a2) => {
        if (l$3.und(r2))
          o2.push(s2.start());
        else {
          let i2 = n2(r2, s2, a2);
          i2 && o2.push(s2.start(i2));
        }
      }), o2;
    };
    e2.current = t2, e2.add = function(r2) {
      t2.includes(r2) || t2.push(r2);
    }, e2.delete = function(r2) {
      let o2 = t2.indexOf(r2);
      ~o2 && t2.splice(o2, 1);
    }, e2.pause = function() {
      return Ve(t2, (r2) => r2.pause(...arguments)), this;
    }, e2.resume = function() {
      return Ve(t2, (r2) => r2.resume(...arguments)), this;
    }, e2.set = function(r2) {
      Ve(t2, (o2, s2) => {
        let a2 = l$3.fun(r2) ? r2(s2, o2) : r2;
        a2 && o2.set(a2);
      });
    }, e2.start = function(r2) {
      let o2 = [];
      return Ve(t2, (s2, a2) => {
        if (l$3.und(r2))
          o2.push(s2.start());
        else {
          let i2 = this._getProps(r2, s2, a2);
          i2 && o2.push(s2.start(i2));
        }
      }), o2;
    }, e2.stop = function() {
      return Ve(t2, (r2) => r2.stop(...arguments)), this;
    }, e2.update = function(r2) {
      return Ve(t2, (o2, s2) => o2.update(this._getProps(r2, o2, s2))), this;
    };
    let n2 = function(r2, o2, s2) {
      return l$3.fun(r2) ? r2(s2, o2) : r2;
    };
    return e2._getProps = n2, e2;
  };
  function He(t2, e2, n2) {
    let r2 = l$3.fun(e2) && e2;
    r2 && !n2 && (n2 = []);
    let o2 = reactExports.useMemo(() => r2 || arguments.length == 3 ? fe() : void 0, []), s2 = reactExports.useRef(0), a2 = Mr(), i2 = reactExports.useMemo(() => ({ ctrls: [], queue: [], flush(h2, g2) {
      let x2 = _e(h2, g2);
      return s2.current > 0 && !i2.queue.length && !Object.keys(x2).some((A2) => !h2.springs[A2]) ? ze(h2, g2) : new Promise((A2) => {
        pt(h2, x2), i2.queue.push(() => {
          A2(ze(h2, g2));
        }), a2();
      });
    } }), []), u2 = reactExports.useRef([...i2.ctrls]), p2 = [], f2 = Ur(t2) || 0;
    reactExports.useMemo(() => {
      Ve(u2.current.slice(t2, f2), (h2) => {
        xe(h2, o2), h2.stop(true);
      }), u2.current.length = t2, d2(f2, t2);
    }, [t2]), reactExports.useMemo(() => {
      d2(0, Math.min(f2, t2));
    }, n2);
    function d2(h2, g2) {
      for (let x2 = h2; x2 < g2; x2++) {
        let S2 = u2.current[x2] || (u2.current[x2] = new le(null, i2.flush)), A2 = r2 ? r2(x2, S2) : e2[x2];
        A2 && (p2[x2] = Ot(A2));
      }
    }
    let m2 = u2.current.map((h2, g2) => _e(h2, p2[g2])), b2 = reactExports.useContext(H$1), c2 = Ur(b2), P2 = b2 !== c2 && Ue(b2);
    Q$1(() => {
      s2.current++, i2.ctrls = u2.current;
      let { queue: h2 } = i2;
      h2.length && (i2.queue = [], Ve(h2, (g2) => g2())), Ve(u2.current, (g2, x2) => {
        o2 == null ? void 0 : o2.add(g2), P2 && g2.start({ default: b2 });
        let S2 = p2[x2];
        S2 && (he(g2, S2.ref), g2.ref ? g2.queue.push(S2) : g2.start(S2));
      });
    }), $r(() => () => {
      Ve(i2.ctrls, (h2) => h2.stop(true));
    });
    let l2 = m2.map((h2) => ({ ...h2 }));
    return o2 ? [l2, o2] : l2;
  }
  function J(t2, e2) {
    let n2 = l$3.fun(t2), [[r2], o2] = He(1, n2 ? t2 : [t2], n2 ? e2 || [] : e2);
    return n2 || arguments.length == 2 ? [r2, o2] : r2;
  }
  var Gn = () => fe(), Xo = () => reactExports.useState(Gn)[0];
  function Gt(t2, e2, n2) {
    let r2 = l$3.fun(e2) && e2, { reset: o2, sort: s2, trail: a2 = 0, expires: i2 = true, exitBeforeEnter: u2 = false, onDestroyed: p2, ref: f2, config: d2 } = r2 ? r2() : e2, m2 = reactExports.useMemo(() => r2 || arguments.length == 3 ? fe() : void 0, []), b2 = ht$1(t2), c2 = [], P2 = reactExports.useRef(null), l2 = o2 ? null : P2.current;
    Q$1(() => {
      P2.current = c2;
    }), $r(() => (Ve(c2, (y2) => {
      m2 == null ? void 0 : m2.add(y2.ctrl), y2.ctrl.ref = m2;
    }), () => {
      Ve(P2.current, (y2) => {
        y2.expired && clearTimeout(y2.expirationId), xe(y2.ctrl, m2), y2.ctrl.stop(true);
      });
    }));
    let h2 = tr(b2, r2 ? r2() : e2, l2), g2 = o2 && P2.current || [];
    Q$1(() => Ve(g2, ({ ctrl: y2, item: T2, key: F2 }) => {
      xe(y2, m2), I$1(p2, T2, F2);
    }));
    let x2 = [];
    if (l2 && Ve(l2, (y2, T2) => {
      y2.expired ? (clearTimeout(y2.expirationId), g2.push(y2)) : (T2 = x2[T2] = h2.indexOf(y2.key), ~T2 && (c2[T2] = y2));
    }), Ve(b2, (y2, T2) => {
      c2[T2] || (c2[T2] = { key: h2[T2], item: y2, phase: "mount", ctrl: new le() }, c2[T2].ctrl.item = y2);
    }), x2.length) {
      let y2 = -1, { leave: T2 } = r2 ? r2() : e2;
      Ve(x2, (F2, k2) => {
        let O2 = l2[k2];
        ~F2 ? (y2 = c2.indexOf(O2), c2[y2] = { ...O2, item: b2[F2] }) : T2 && c2.splice(++y2, 0, O2);
      });
    }
    l$3.fun(s2) && c2.sort((y2, T2) => s2(y2.item, T2.item));
    let S2 = -a2, A2 = Mr(), V2 = ne(e2), _2 = /* @__PURE__ */ new Map(), v2 = reactExports.useRef(/* @__PURE__ */ new Map()), w2 = reactExports.useRef(false);
    Ve(c2, (y2, T2) => {
      let F2 = y2.key, k2 = y2.phase, O2 = r2 ? r2() : e2, U2, D2, Jt2 = I$1(O2.delay || 0, F2);
      if (k2 == "mount")
        U2 = O2.enter, D2 = "enter";
      else {
        let M2 = h2.indexOf(F2) < 0;
        if (k2 != "leave")
          if (M2)
            U2 = O2.leave, D2 = "leave";
          else if (U2 = O2.update)
            D2 = "update";
          else
            return;
        else if (!M2)
          U2 = O2.enter, D2 = "enter";
        else
          return;
      }
      if (U2 = I$1(U2, y2.item, T2), U2 = l$3.obj(U2) ? de(U2) : { to: U2 }, !U2.config) {
        let M2 = d2 || V2.config;
        U2.config = I$1(M2, y2.item, T2, D2);
      }
      S2 += a2;
      let Z2 = { ...V2, delay: Jt2 + S2, ref: f2, immediate: O2.immediate, reset: false, ...U2 };
      if (D2 == "enter" && l$3.und(Z2.from)) {
        let M2 = r2 ? r2() : e2, Te2 = l$3.und(M2.initial) || l2 ? M2.from : M2.initial;
        Z2.from = I$1(Te2, y2.item, T2);
      }
      let { onResolve: Wt } = Z2;
      Z2.onResolve = (M2) => {
        I$1(Wt, M2);
        let Te2 = P2.current, B2 = Te2.find((Fe2) => Fe2.key === F2);
        if (!!B2 && !(M2.cancelled && B2.phase != "update") && B2.ctrl.idle) {
          let Fe2 = Te2.every((ee2) => ee2.ctrl.idle);
          if (B2.phase == "leave") {
            let ee2 = I$1(i2, B2.item);
            if (ee2 !== false) {
              let Ze2 = ee2 === true ? 0 : ee2;
              if (B2.expired = true, !Fe2 && Ze2 > 0) {
                Ze2 <= 2147483647 && (B2.expirationId = setTimeout(A2, Ze2));
                return;
              }
            }
          }
          Fe2 && Te2.some((ee2) => ee2.expired) && (v2.current.delete(B2), u2 && (w2.current = true), A2());
        }
      };
      let ft = _e(y2.ctrl, Z2);
      D2 === "leave" && u2 ? v2.current.set(y2, { phase: D2, springs: ft, payload: Z2 }) : _2.set(y2, { phase: D2, springs: ft, payload: Z2 });
    });
    let C2 = reactExports.useContext(H$1), $2 = Ur(C2), L2 = C2 !== $2 && Ue(C2);
    Q$1(() => {
      L2 && Ve(c2, (y2) => {
        y2.ctrl.start({ default: C2 });
      });
    }, [C2]), Ve(_2, (y2, T2) => {
      if (v2.current.size) {
        let F2 = c2.findIndex((k2) => k2.key === T2.key);
        c2.splice(F2, 1);
      }
    }), Q$1(() => {
      Ve(v2.current.size ? v2.current : _2, ({ phase: y2, payload: T2 }, F2) => {
        let { ctrl: k2 } = F2;
        F2.phase = y2, m2 == null ? void 0 : m2.add(k2), L2 && y2 == "enter" && k2.start({ default: C2 }), T2 && (he(k2, T2.ref), (k2.ref || m2) && !w2.current ? k2.update(T2) : (k2.start(T2), w2.current && (w2.current = false)));
      });
    }, o2 ? void 0 : n2);
    let N2 = (y2) => reactExports.createElement(reactExports.Fragment, null, c2.map((T2, F2) => {
      let { springs: k2 } = _2.get(T2) || T2.ctrl, O2 = y2({ ...k2 }, T2.item, T2, F2);
      return O2 && O2.type ? reactExports.createElement(O2.type, { ...O2.props, key: l$3.str(T2.key) || l$3.num(T2.key) ? T2.key : T2.ctrl.id, ref: O2.ref }) : O2;
    }));
    return m2 ? [N2, m2] : N2;
  }
  var er = 1;
  function tr(t2, { key: e2, keys: n2 = e2 }, r2) {
    if (n2 === null) {
      let o2 = /* @__PURE__ */ new Set();
      return t2.map((s2) => {
        let a2 = r2 && r2.find((i2) => i2.item === s2 && i2.phase !== "leave" && !o2.has(i2));
        return a2 ? (o2.add(a2), a2.key) : er++;
      });
    }
    return l$3.und(n2) ? t2 : l$3.fun(n2) ? t2.map(n2) : ht$1(n2);
  }
  var W$1 = class W extends X {
    constructor(n2, r2) {
      super();
      __publicField(this, "key");
      __publicField(this, "idle", true);
      __publicField(this, "calc");
      __publicField(this, "_active", /* @__PURE__ */ new Set());
      this.source = n2;
      this.calc = W$2(...r2);
      let o2 = this._get(), s2 = Le$1(o2);
      D$2(this, s2.create(o2));
    }
    advance(n2) {
      let r2 = this._get(), o2 = this.get();
      bt$1(r2, o2) || (k$2(this).setValue(r2), this._onChange(r2, this.idle)), !this.idle && Yt(this._active) && ct(this);
    }
    _get() {
      let n2 = l$3.arr(this.source) ? this.source.map(ve) : ht$1(ve(this.source));
      return this.calc(...n2);
    }
    _start() {
      this.idle && !Yt(this._active) && (this.idle = false, Ve(F$2(this), (n2) => {
        n2.done = false;
      }), p$2.skipAnimation ? (n$2.batchedUpdates(() => this.advance()), ct(this)) : qe$1.start(this));
    }
    _attach() {
      let n2 = 1;
      Ve(ht$1(this.source), (r2) => {
        Pt(r2) && Gt$1(r2, this), Re(r2) && (r2.idle || this._active.add(r2), n2 = Math.max(n2, r2.priority + 1));
      }), this.priority = n2, this._start();
    }
    _detach() {
      Ve(ht$1(this.source), (n2) => {
        Pt(n2) && Qt(n2, this);
      }), this._active.clear(), ct(this);
    }
    eventObserved(n2) {
      n2.type == "change" ? n2.idle ? this.advance() : (this._active.add(n2.parent), this._start()) : n2.type == "idle" ? this._active.delete(n2.parent) : n2.type == "priority" && (this.priority = ht$1(this.source).reduce((r2, o2) => Math.max(r2, (Re(o2) ? o2.priority : 0) + 1), 0));
    }
  };
  function vr(t2) {
    return t2.idle !== false;
  }
  function Yt(t2) {
    return !t2.size || Array.from(t2).every(vr);
  }
  function ct(t2) {
    t2.idle || (t2.idle = true, Ve(F$2(t2), (e2) => {
      e2.done = true;
    }), $t(t2, { type: "idle", parent: t2 }));
  }
  p$2.assign({ createStringInterpolator: Xt, to: (t2, e2) => new W$1(t2, e2) });
  var k$1 = /^--/;
  function I(t2, e2) {
    return e2 == null || typeof e2 == "boolean" || e2 === "" ? "" : typeof e2 == "number" && e2 !== 0 && !k$1.test(t2) && !(c$2.hasOwnProperty(t2) && c$2[t2]) ? e2 + "px" : ("" + e2).trim();
  }
  var v$1 = {};
  function V$1(t2, e2) {
    if (!t2.nodeType || !t2.setAttribute)
      return false;
    let r2 = t2.nodeName === "filter" || t2.parentNode && t2.parentNode.nodeName === "filter", { style: i2, children: s2, scrollTop: u2, scrollLeft: l2, viewBox: a2, ...n2 } = e2, d2 = Object.values(n2), m2 = Object.keys(n2).map((o2) => r2 || t2.hasAttribute(o2) ? o2 : v$1[o2] || (v$1[o2] = o2.replace(/([A-Z])/g, (p2) => "-" + p2.toLowerCase())));
    s2 !== void 0 && (t2.textContent = s2);
    for (let o2 in i2)
      if (i2.hasOwnProperty(o2)) {
        let p2 = I(o2, i2[o2]);
        k$1.test(o2) ? t2.style.setProperty(o2, p2) : t2.style[o2] = p2;
      }
    m2.forEach((o2, p2) => {
      t2.setAttribute(o2, d2[p2]);
    }), u2 !== void 0 && (t2.scrollTop = u2), l2 !== void 0 && (t2.scrollLeft = l2), a2 !== void 0 && t2.setAttribute("viewBox", a2);
  }
  var c$2 = { animationIterationCount: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, F$1 = (t2, e2) => t2 + e2.charAt(0).toUpperCase() + e2.substring(1), L$2 = ["Webkit", "Ms", "Moz", "O"];
  c$2 = Object.keys(c$2).reduce((t2, e2) => (L$2.forEach((r2) => t2[F$1(r2, e2)] = t2[e2]), t2), c$2);
  var _ = /^(matrix|translate|scale|rotate|skew)/, $$1 = /^(translate)/, G = /^(rotate|skew)/, y$2 = (t2, e2) => l$3.num(t2) && t2 !== 0 ? t2 + e2 : t2, h$2 = (t2, e2) => l$3.arr(t2) ? t2.every((r2) => h$2(r2, e2)) : l$3.num(t2) ? t2 === e2 : parseFloat(t2) === e2, g$2 = class g extends u$2 {
    constructor({ x: e2, y: r2, z: i2, ...s2 }) {
      let u2 = [], l2 = [];
      (e2 || r2 || i2) && (u2.push([e2 || 0, r2 || 0, i2 || 0]), l2.push((a2) => [`translate3d(${a2.map((n2) => y$2(n2, "px")).join(",")})`, h$2(a2, 0)])), xt(s2, (a2, n2) => {
        if (n2 === "transform")
          u2.push([a2 || ""]), l2.push((d2) => [d2, d2 === ""]);
        else if (_.test(n2)) {
          if (delete s2[n2], l$3.und(a2))
            return;
          let d2 = $$1.test(n2) ? "px" : G.test(n2) ? "deg" : "";
          u2.push(ht$1(a2)), l2.push(n2 === "rotate3d" ? ([m2, o2, p2, O2]) => [`rotate3d(${m2},${o2},${p2},${y$2(O2, d2)})`, h$2(O2, 0)] : (m2) => [`${n2}(${m2.map((o2) => y$2(o2, d2)).join(",")})`, h$2(m2, n2.startsWith("scale") ? 1 : 0)]);
        }
      }), u2.length && (s2.transform = new x$2(u2, l2)), super(s2);
    }
  }, x$2 = class x extends ge {
    constructor(r2, i2) {
      super();
      __publicField(this, "_value", null);
      this.inputs = r2;
      this.transforms = i2;
    }
    get() {
      return this._value || (this._value = this._get());
    }
    _get() {
      let r2 = "", i2 = true;
      return Ve(this.inputs, (s2, u2) => {
        let l2 = ve(s2[0]), [a2, n2] = this.transforms[u2](l$3.arr(l2) ? l2 : s2.map(ve));
        r2 += " " + a2, i2 = i2 && n2;
      }), i2 ? "none" : r2;
    }
    observerAdded(r2) {
      r2 == 1 && Ve(this.inputs, (i2) => Ve(i2, (s2) => Pt(s2) && Gt$1(s2, this)));
    }
    observerRemoved(r2) {
      r2 == 0 && Ve(this.inputs, (i2) => Ve(i2, (s2) => Pt(s2) && Qt(s2, this)));
    }
    eventObserved(r2) {
      r2.type == "change" && (this._value = null), $t(this, r2);
    }
  };
  var C$1 = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
  p$2.assign({ batchedUpdates: reactDomExports.unstable_batchedUpdates, createStringInterpolator: Xt, colors: It });
  var q = Ke(C$1, { applyAnimatedValues: V$1, createAnimatedStyle: (t2) => new g$2(t2), getComponentProps: ({ scrollTop: t2, scrollLeft: e2, ...r2 }) => r2 }), it = q.animated;
  const MenuBar = newStyled.div(
    {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      userSelect: "none",
      padding: "8px 8px",
      position: "relative",
      height: 50,
      fontFamily: "华文新魏"
    },
    ({ isDragging }) => ({
      cursor: isDragging ? "grabbing" : "grab"
    })
  );
  const MenuButton = newStyled(reactExports.forwardRef(function MenuAction(props, ref) {
    return jsx("button", { ...props, ref, type: "button", className: "eocs-icon-button " + (props.className || "") });
  }))({ display: "inline-flex", alignItems: "center", justifyContent: "center", cursor: "pointer" });
  function t(t2) {
    return t2.split("-")[1];
  }
  function e(t2) {
    return "y" === t2 ? "height" : "width";
  }
  function n$1(t2) {
    return t2.split("-")[0];
  }
  function o$1(t2) {
    return ["top", "bottom"].includes(n$1(t2)) ? "x" : "y";
  }
  function i$1(i2, r2, a2) {
    let { reference: l2, floating: s2 } = i2;
    const c2 = l2.x + l2.width / 2 - s2.width / 2, f2 = l2.y + l2.height / 2 - s2.height / 2, m2 = o$1(r2), u2 = e(m2), g2 = l2[u2] / 2 - s2[u2] / 2, d2 = "x" === m2;
    let p2;
    switch (n$1(r2)) {
      case "top":
        p2 = { x: c2, y: l2.y - s2.height };
        break;
      case "bottom":
        p2 = { x: c2, y: l2.y + l2.height };
        break;
      case "right":
        p2 = { x: l2.x + l2.width, y: f2 };
        break;
      case "left":
        p2 = { x: l2.x - s2.width, y: f2 };
        break;
      default:
        p2 = { x: l2.x, y: l2.y };
    }
    switch (t(r2)) {
      case "start":
        p2[m2] -= g2 * (a2 && d2 ? -1 : 1);
        break;
      case "end":
        p2[m2] += g2 * (a2 && d2 ? -1 : 1);
    }
    return p2;
  }
  const r$1 = async (t2, e2, n2) => {
    const { placement: o2 = "bottom", strategy: r2 = "absolute", middleware: a2 = [], platform: l2 } = n2, s2 = a2.filter(Boolean), c2 = await (null == l2.isRTL ? void 0 : l2.isRTL(e2));
    let f2 = await l2.getElementRects({ reference: t2, floating: e2, strategy: r2 }), { x: m2, y: u2 } = i$1(f2, o2, c2), g2 = o2, d2 = {}, p2 = 0;
    for (let n3 = 0; n3 < s2.length; n3++) {
      const { name: a3, fn: h2 } = s2[n3], { x: y2, y: x2, data: w2, reset: v2 } = await h2({ x: m2, y: u2, initialPlacement: o2, placement: g2, strategy: r2, middlewareData: d2, rects: f2, platform: l2, elements: { reference: t2, floating: e2 } });
      m2 = null != y2 ? y2 : m2, u2 = null != x2 ? x2 : u2, d2 = { ...d2, [a3]: { ...d2[a3], ...w2 } }, v2 && p2 <= 50 && (p2++, "object" == typeof v2 && (v2.placement && (g2 = v2.placement), v2.rects && (f2 = true === v2.rects ? await l2.getElementRects({ reference: t2, floating: e2, strategy: r2 }) : v2.rects), { x: m2, y: u2 } = i$1(f2, g2, c2)), n3 = -1);
    }
    return { x: m2, y: u2, placement: g2, strategy: r2, middlewareData: d2 };
  };
  function a$1(t2) {
    return "number" != typeof t2 ? function(t3) {
      return { top: 0, right: 0, bottom: 0, left: 0, ...t3 };
    }(t2) : { top: t2, right: t2, bottom: t2, left: t2 };
  }
  function l$1(t2) {
    return { ...t2, top: t2.y, left: t2.x, right: t2.x + t2.width, bottom: t2.y + t2.height };
  }
  async function s$1(t2, e2) {
    var n2;
    void 0 === e2 && (e2 = {});
    const { x: o2, y: i2, platform: r2, rects: s2, elements: c2, strategy: f2 } = t2, { boundary: m2 = "clippingAncestors", rootBoundary: u2 = "viewport", elementContext: g2 = "floating", altBoundary: d2 = false, padding: p2 = 0 } = e2, h2 = a$1(p2), y2 = c2[d2 ? "floating" === g2 ? "reference" : "floating" : g2], x2 = l$1(await r2.getClippingRect({ element: null == (n2 = await (null == r2.isElement ? void 0 : r2.isElement(y2))) || n2 ? y2 : y2.contextElement || await (null == r2.getDocumentElement ? void 0 : r2.getDocumentElement(c2.floating)), boundary: m2, rootBoundary: u2, strategy: f2 })), w2 = "floating" === g2 ? { ...s2.floating, x: o2, y: i2 } : s2.reference, v2 = await (null == r2.getOffsetParent ? void 0 : r2.getOffsetParent(c2.floating)), b2 = await (null == r2.isElement ? void 0 : r2.isElement(v2)) && await (null == r2.getScale ? void 0 : r2.getScale(v2)) || { x: 1, y: 1 }, A2 = l$1(r2.convertOffsetParentRelativeRectToViewportRelativeRect ? await r2.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w2, offsetParent: v2, strategy: f2 }) : w2);
    return { top: (x2.top - A2.top + h2.top) / b2.y, bottom: (A2.bottom - x2.bottom + h2.bottom) / b2.y, left: (x2.left - A2.left + h2.left) / b2.x, right: (A2.right - x2.right + h2.right) / b2.x };
  }
  const c$1 = Math.min, f$1 = Math.max;
  function m$1(t2, e2, n2) {
    return f$1(t2, c$1(e2, n2));
  }
  const u$1 = (n2) => ({ name: "arrow", options: n2, async fn(i2) {
    const { element: r2, padding: l2 = 0 } = n2 || {}, { x: s2, y: c2, placement: f2, rects: u2, platform: g2, elements: d2 } = i2;
    if (null == r2)
      return {};
    const p2 = a$1(l2), h2 = { x: s2, y: c2 }, y2 = o$1(f2), x2 = e(y2), w2 = await g2.getDimensions(r2), v2 = "y" === y2, b2 = v2 ? "top" : "left", A2 = v2 ? "bottom" : "right", R2 = v2 ? "clientHeight" : "clientWidth", P2 = u2.reference[x2] + u2.reference[y2] - h2[y2] - u2.floating[x2], E2 = h2[y2] - u2.reference[y2], T2 = await (null == g2.getOffsetParent ? void 0 : g2.getOffsetParent(r2));
    let D2 = T2 ? T2[R2] : 0;
    D2 && await (null == g2.isElement ? void 0 : g2.isElement(T2)) || (D2 = d2.floating[R2] || u2.floating[x2]);
    const L2 = P2 / 2 - E2 / 2, k2 = p2[b2], O2 = D2 - w2[x2] - p2[A2], B2 = D2 / 2 - w2[x2] / 2 + L2, C2 = m$1(k2, B2, O2), H2 = null != t(f2) && B2 != C2 && u2.reference[x2] / 2 - (B2 < k2 ? p2[b2] : p2[A2]) - w2[x2] / 2 < 0;
    return { [y2]: h2[y2] - (H2 ? B2 < k2 ? k2 - B2 : O2 - B2 : 0), data: { [y2]: C2, centerOffset: B2 - C2 } };
  } }), g$1 = ["top", "right", "bottom", "left"];
  g$1.reduce((t2, e2) => t2.concat(e2, e2 + "-start", e2 + "-end"), []);
  const p$1 = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function h$1(t2) {
    return t2.replace(/left|right|bottom|top/g, (t3) => p$1[t3]);
  }
  function y$1(n2, i2, r2) {
    void 0 === r2 && (r2 = false);
    const a2 = t(n2), l2 = o$1(n2), s2 = e(l2);
    let c2 = "x" === l2 ? a2 === (r2 ? "end" : "start") ? "right" : "left" : "start" === a2 ? "bottom" : "top";
    return i2.reference[s2] > i2.floating[s2] && (c2 = h$1(c2)), { main: c2, cross: h$1(c2) };
  }
  const x$1 = { start: "end", end: "start" };
  function w$1(t2) {
    return t2.replace(/start|end/g, (t3) => x$1[t3]);
  }
  const b$1 = function(e2) {
    return void 0 === e2 && (e2 = {}), { name: "flip", options: e2, async fn(o2) {
      var i2;
      const { placement: r2, middlewareData: a2, rects: l2, initialPlacement: c2, platform: f2, elements: m2 } = o2, { mainAxis: u2 = true, crossAxis: g2 = true, fallbackPlacements: d2, fallbackStrategy: p2 = "bestFit", fallbackAxisSideDirection: x2 = "none", flipAlignment: v2 = true, ...b2 } = e2, A2 = n$1(r2), R2 = n$1(c2) === c2, P2 = await (null == f2.isRTL ? void 0 : f2.isRTL(m2.floating)), E2 = d2 || (R2 || !v2 ? [h$1(c2)] : function(t2) {
        const e3 = h$1(t2);
        return [w$1(t2), e3, w$1(e3)];
      }(c2));
      d2 || "none" === x2 || E2.push(...function(e3, o3, i3, r3) {
        const a3 = t(e3);
        let l3 = function(t2, e4, n2) {
          const o4 = ["left", "right"], i4 = ["right", "left"], r4 = ["top", "bottom"], a4 = ["bottom", "top"];
          switch (t2) {
            case "top":
            case "bottom":
              return n2 ? e4 ? i4 : o4 : e4 ? o4 : i4;
            case "left":
            case "right":
              return e4 ? r4 : a4;
            default:
              return [];
          }
        }(n$1(e3), "start" === i3, r3);
        return a3 && (l3 = l3.map((t2) => t2 + "-" + a3), o3 && (l3 = l3.concat(l3.map(w$1)))), l3;
      }(c2, v2, x2, P2));
      const T2 = [c2, ...E2], D2 = await s$1(o2, b2), L2 = [];
      let k2 = (null == (i2 = a2.flip) ? void 0 : i2.overflows) || [];
      if (u2 && L2.push(D2[A2]), g2) {
        const { main: t2, cross: e3 } = y$1(r2, l2, P2);
        L2.push(D2[t2], D2[e3]);
      }
      if (k2 = [...k2, { placement: r2, overflows: L2 }], !L2.every((t2) => t2 <= 0)) {
        var O2, B2;
        const t2 = ((null == (O2 = a2.flip) ? void 0 : O2.index) || 0) + 1, e3 = T2[t2];
        if (e3)
          return { data: { index: t2, overflows: k2 }, reset: { placement: e3 } };
        let n2 = null == (B2 = k2.filter((t3) => t3.overflows[0] <= 0).sort((t3, e4) => t3.overflows[1] - e4.overflows[1])[0]) ? void 0 : B2.placement;
        if (!n2)
          switch (p2) {
            case "bestFit": {
              var C2;
              const t3 = null == (C2 = k2.map((t4) => [t4.placement, t4.overflows.filter((t5) => t5 > 0).reduce((t5, e4) => t5 + e4, 0)]).sort((t4, e4) => t4[1] - e4[1])[0]) ? void 0 : C2[0];
              t3 && (n2 = t3);
              break;
            }
            case "initialPlacement":
              n2 = c2;
          }
        if (r2 !== n2)
          return { reset: { placement: n2 } };
      }
      return {};
    } };
  };
  const D$1 = function(e2) {
    return void 0 === e2 && (e2 = 0), { name: "offset", options: e2, async fn(i2) {
      const { x: r2, y: a2 } = i2, l2 = await async function(e3, i3) {
        const { placement: r3, platform: a3, elements: l3 } = e3, s2 = await (null == a3.isRTL ? void 0 : a3.isRTL(l3.floating)), c2 = n$1(r3), f2 = t(r3), m2 = "x" === o$1(r3), u2 = ["left", "top"].includes(c2) ? -1 : 1, g2 = s2 && m2 ? -1 : 1, d2 = "function" == typeof i3 ? i3(e3) : i3;
        let { mainAxis: p2, crossAxis: h2, alignmentAxis: y2 } = "number" == typeof d2 ? { mainAxis: d2, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d2 };
        return f2 && "number" == typeof y2 && (h2 = "end" === f2 ? -1 * y2 : y2), m2 ? { x: h2 * g2, y: p2 * u2 } : { x: p2 * u2, y: h2 * g2 };
      }(i2, e2);
      return { x: r2 + l2.x, y: a2 + l2.y, data: l2 };
    } };
  };
  function L$1(t2) {
    return "x" === t2 ? "y" : "x";
  }
  const k = function(t2) {
    return void 0 === t2 && (t2 = {}), { name: "shift", options: t2, async fn(e2) {
      const { x: i2, y: r2, placement: a2 } = e2, { mainAxis: l2 = true, crossAxis: c2 = false, limiter: f2 = { fn: (t3) => {
        let { x: e3, y: n2 } = t3;
        return { x: e3, y: n2 };
      } }, ...u2 } = t2, g2 = { x: i2, y: r2 }, d2 = await s$1(e2, u2), p2 = o$1(n$1(a2)), h2 = L$1(p2);
      let y2 = g2[p2], x2 = g2[h2];
      if (l2) {
        const t3 = "y" === p2 ? "bottom" : "right";
        y2 = m$1(y2 + d2["y" === p2 ? "top" : "left"], y2, y2 - d2[t3]);
      }
      if (c2) {
        const t3 = "y" === h2 ? "bottom" : "right";
        x2 = m$1(x2 + d2["y" === h2 ? "top" : "left"], x2, x2 - d2[t3]);
      }
      const w2 = f2.fn({ ...e2, [p2]: y2, [h2]: x2 });
      return { ...w2, data: { x: w2.x - i2, y: w2.y - r2 } };
    } };
  };
  function n(t2) {
    var e2;
    return (null == (e2 = t2.ownerDocument) ? void 0 : e2.defaultView) || window;
  }
  function o(t2) {
    return n(t2).getComputedStyle(t2);
  }
  function i(t2) {
    return t2 instanceof n(t2).Node;
  }
  function r(t2) {
    return i(t2) ? (t2.nodeName || "").toLowerCase() : "";
  }
  let l;
  function c() {
    if (l)
      return l;
    const t2 = navigator.userAgentData;
    return t2 && Array.isArray(t2.brands) ? (l = t2.brands.map((t3) => t3.brand + "/" + t3.version).join(" "), l) : navigator.userAgent;
  }
  function s(t2) {
    return t2 instanceof n(t2).HTMLElement;
  }
  function f(t2) {
    return t2 instanceof n(t2).Element;
  }
  function u(t2) {
    if ("undefined" == typeof ShadowRoot)
      return false;
    return t2 instanceof n(t2).ShadowRoot || t2 instanceof ShadowRoot;
  }
  function a(t2) {
    const { overflow: e2, overflowX: n2, overflowY: i2, display: r2 } = o(t2);
    return /auto|scroll|overlay|hidden|clip/.test(e2 + i2 + n2) && !["inline", "contents"].includes(r2);
  }
  function d(t2) {
    return ["table", "td", "th"].includes(r(t2));
  }
  function h(t2) {
    const e2 = /firefox/i.test(c()), n2 = o(t2), i2 = n2.backdropFilter || n2.WebkitBackdropFilter;
    return "none" !== n2.transform || "none" !== n2.perspective || !!i2 && "none" !== i2 || e2 && "filter" === n2.willChange || e2 && !!n2.filter && "none" !== n2.filter || ["transform", "perspective"].some((t3) => n2.willChange.includes(t3)) || ["paint", "layout", "strict", "content"].some((t3) => {
      const e3 = n2.contain;
      return null != e3 && e3.includes(t3);
    });
  }
  function p() {
    return /^((?!chrome|android).)*safari/i.test(c());
  }
  function g(t2) {
    return ["html", "body", "#document"].includes(r(t2));
  }
  const m = Math.min, y = Math.max, x = Math.round;
  function w(t2) {
    const e2 = o(t2);
    let n2 = parseFloat(e2.width), i2 = parseFloat(e2.height);
    const r2 = s(t2), l2 = r2 ? t2.offsetWidth : n2, c2 = r2 ? t2.offsetHeight : i2, f2 = x(n2) !== l2 || x(i2) !== c2;
    return f2 && (n2 = l2, i2 = c2), { width: n2, height: i2, fallback: f2 };
  }
  function v(t2) {
    return f(t2) ? t2 : t2.contextElement;
  }
  const b = { x: 1, y: 1 };
  function L(t2) {
    const e2 = v(t2);
    if (!s(e2))
      return b;
    const n2 = e2.getBoundingClientRect(), { width: o2, height: i2, fallback: r2 } = w(e2);
    let l2 = (r2 ? x(n2.width) : n2.width) / o2, c2 = (r2 ? x(n2.height) : n2.height) / i2;
    return l2 && Number.isFinite(l2) || (l2 = 1), c2 && Number.isFinite(c2) || (c2 = 1), { x: l2, y: c2 };
  }
  function E(e2, o2, i2, r2) {
    var l2, c2;
    void 0 === o2 && (o2 = false), void 0 === i2 && (i2 = false);
    const s2 = e2.getBoundingClientRect(), u2 = v(e2);
    let a2 = b;
    o2 && (r2 ? f(r2) && (a2 = L(r2)) : a2 = L(e2));
    const d2 = u2 ? n(u2) : window, h2 = p() && i2;
    let g2 = (s2.left + (h2 && (null == (l2 = d2.visualViewport) ? void 0 : l2.offsetLeft) || 0)) / a2.x, m2 = (s2.top + (h2 && (null == (c2 = d2.visualViewport) ? void 0 : c2.offsetTop) || 0)) / a2.y, y2 = s2.width / a2.x, x2 = s2.height / a2.y;
    if (u2) {
      const t2 = n(u2), e3 = r2 && f(r2) ? n(r2) : r2;
      let o3 = t2.frameElement;
      for (; o3 && r2 && e3 !== t2; ) {
        const t3 = L(o3), e4 = o3.getBoundingClientRect(), i3 = getComputedStyle(o3);
        e4.x += (o3.clientLeft + parseFloat(i3.paddingLeft)) * t3.x, e4.y += (o3.clientTop + parseFloat(i3.paddingTop)) * t3.y, g2 *= t3.x, m2 *= t3.y, y2 *= t3.x, x2 *= t3.y, g2 += e4.x, m2 += e4.y, o3 = n(o3).frameElement;
      }
    }
    return l$1({ width: y2, height: x2, x: g2, y: m2 });
  }
  function T(t2) {
    return ((i(t2) ? t2.ownerDocument : t2.document) || window.document).documentElement;
  }
  function R(t2) {
    return f(t2) ? { scrollLeft: t2.scrollLeft, scrollTop: t2.scrollTop } : { scrollLeft: t2.pageXOffset, scrollTop: t2.pageYOffset };
  }
  function C(t2) {
    return E(T(t2)).left + R(t2).scrollLeft;
  }
  function F(t2) {
    if ("html" === r(t2))
      return t2;
    const e2 = t2.assignedSlot || t2.parentNode || u(t2) && t2.host || T(t2);
    return u(e2) ? e2.host : e2;
  }
  function W(t2) {
    const e2 = F(t2);
    return g(e2) ? e2.ownerDocument.body : s(e2) && a(e2) ? e2 : W(e2);
  }
  function D(t2, e2) {
    var o2;
    void 0 === e2 && (e2 = []);
    const i2 = W(t2), r2 = i2 === (null == (o2 = t2.ownerDocument) ? void 0 : o2.body), l2 = n(i2);
    return r2 ? e2.concat(l2, l2.visualViewport || [], a(i2) ? i2 : []) : e2.concat(i2, D(i2));
  }
  function S(e2, i2, r2) {
    let l2;
    if ("viewport" === i2)
      l2 = function(t2, e3) {
        const o2 = n(t2), i3 = T(t2), r3 = o2.visualViewport;
        let l3 = i3.clientWidth, c3 = i3.clientHeight, s2 = 0, f2 = 0;
        if (r3) {
          l3 = r3.width, c3 = r3.height;
          const t3 = p();
          (!t3 || t3 && "fixed" === e3) && (s2 = r3.offsetLeft, f2 = r3.offsetTop);
        }
        return { width: l3, height: c3, x: s2, y: f2 };
      }(e2, r2);
    else if ("document" === i2)
      l2 = function(t2) {
        const e3 = T(t2), n2 = R(t2), i3 = t2.ownerDocument.body, r3 = y(e3.scrollWidth, e3.clientWidth, i3.scrollWidth, i3.clientWidth), l3 = y(e3.scrollHeight, e3.clientHeight, i3.scrollHeight, i3.clientHeight);
        let c3 = -n2.scrollLeft + C(t2);
        const s2 = -n2.scrollTop;
        return "rtl" === o(i3).direction && (c3 += y(e3.clientWidth, i3.clientWidth) - r3), { width: r3, height: l3, x: c3, y: s2 };
      }(T(e2));
    else if (f(i2))
      l2 = function(t2, e3) {
        const n2 = E(t2, true, "fixed" === e3), o2 = n2.top + t2.clientTop, i3 = n2.left + t2.clientLeft, r3 = s(t2) ? L(t2) : { x: 1, y: 1 };
        return { width: t2.clientWidth * r3.x, height: t2.clientHeight * r3.y, x: i3 * r3.x, y: o2 * r3.y };
      }(i2, r2);
    else {
      const t2 = { ...i2 };
      if (p()) {
        var c2, u2;
        const o2 = n(e2);
        t2.x -= (null == (c2 = o2.visualViewport) ? void 0 : c2.offsetLeft) || 0, t2.y -= (null == (u2 = o2.visualViewport) ? void 0 : u2.offsetTop) || 0;
      }
      l2 = t2;
    }
    return l$1(l2);
  }
  function A(t2, e2) {
    return s(t2) && "fixed" !== o(t2).position ? e2 ? e2(t2) : t2.offsetParent : null;
  }
  function H(t2, e2) {
    const i2 = n(t2);
    if (!s(t2))
      return i2;
    let l2 = A(t2, e2);
    for (; l2 && d(l2) && "static" === o(l2).position; )
      l2 = A(l2, e2);
    return l2 && ("html" === r(l2) || "body" === r(l2) && "static" === o(l2).position && !h(l2)) ? i2 : l2 || function(t3) {
      let e3 = F(t3);
      for (; s(e3) && !g(e3); ) {
        if (h(e3))
          return e3;
        e3 = F(e3);
      }
      return null;
    }(t2) || i2;
  }
  function V(t2, e2, n2) {
    const o2 = s(e2), i2 = T(e2), l2 = E(t2, true, "fixed" === n2, e2);
    let c2 = { scrollLeft: 0, scrollTop: 0 };
    const f2 = { x: 0, y: 0 };
    if (o2 || !o2 && "fixed" !== n2)
      if (("body" !== r(e2) || a(i2)) && (c2 = R(e2)), s(e2)) {
        const t3 = E(e2, true);
        f2.x = t3.x + e2.clientLeft, f2.y = t3.y + e2.clientTop;
      } else
        i2 && (f2.x = C(i2));
    return { x: l2.left + c2.scrollLeft - f2.x, y: l2.top + c2.scrollTop - f2.y, width: l2.width, height: l2.height };
  }
  const O = { getClippingRect: function(t2) {
    let { element: e2, boundary: n2, rootBoundary: i2, strategy: l2 } = t2;
    const c2 = "clippingAncestors" === n2 ? function(t3, e3) {
      const n3 = e3.get(t3);
      if (n3)
        return n3;
      let i3 = D(t3).filter((t4) => f(t4) && "body" !== r(t4)), l3 = null;
      const c3 = "fixed" === o(t3).position;
      let s3 = c3 ? F(t3) : t3;
      for (; f(s3) && !g(s3); ) {
        const t4 = o(s3), e4 = h(s3);
        "fixed" === t4.position ? l3 = null : (c3 ? e4 || l3 : e4 || "static" !== t4.position || !l3 || !["absolute", "fixed"].includes(l3.position)) ? l3 = t4 : i3 = i3.filter((t5) => t5 !== s3), s3 = F(s3);
      }
      return e3.set(t3, i3), i3;
    }(e2, this._c) : [].concat(n2), s2 = [...c2, i2], u2 = s2[0], a2 = s2.reduce((t3, n3) => {
      const o2 = S(e2, n3, l2);
      return t3.top = y(o2.top, t3.top), t3.right = m(o2.right, t3.right), t3.bottom = m(o2.bottom, t3.bottom), t3.left = y(o2.left, t3.left), t3;
    }, S(e2, u2, l2));
    return { width: a2.right - a2.left, height: a2.bottom - a2.top, x: a2.left, y: a2.top };
  }, convertOffsetParentRelativeRectToViewportRelativeRect: function(t2) {
    let { rect: e2, offsetParent: n2, strategy: o2 } = t2;
    const i2 = s(n2), l2 = T(n2);
    if (n2 === l2)
      return e2;
    let c2 = { scrollLeft: 0, scrollTop: 0 }, f2 = { x: 1, y: 1 };
    const u2 = { x: 0, y: 0 };
    if ((i2 || !i2 && "fixed" !== o2) && (("body" !== r(n2) || a(l2)) && (c2 = R(n2)), s(n2))) {
      const t3 = E(n2);
      f2 = L(n2), u2.x = t3.x + n2.clientLeft, u2.y = t3.y + n2.clientTop;
    }
    return { width: e2.width * f2.x, height: e2.height * f2.y, x: e2.x * f2.x - c2.scrollLeft * f2.x + u2.x, y: e2.y * f2.y - c2.scrollTop * f2.y + u2.y };
  }, isElement: f, getDimensions: function(t2) {
    return w(t2);
  }, getOffsetParent: H, getDocumentElement: T, getScale: L, async getElementRects(t2) {
    let { reference: e2, floating: n2, strategy: o2 } = t2;
    const i2 = this.getOffsetParent || H, r2 = this.getDimensions;
    return { reference: V(e2, await i2(n2), o2), floating: { x: 0, y: 0, ...await r2(n2) } };
  }, getClientRects: (t2) => Array.from(t2.getClientRects()), isRTL: (t2) => "rtl" === o(t2).direction };
  const z = (t2, n2, o2) => {
    const i2 = /* @__PURE__ */ new Map(), r2 = { platform: O, ...o2 }, l2 = { ...r2.platform, _c: i2 };
    return r$1(t2, n2, { ...r2, platform: l2 });
  };
  const arrow = (options) => {
    const {
      element,
      padding
    } = options;
    function isRef(value) {
      return Object.prototype.hasOwnProperty.call(value, "current");
    }
    return {
      name: "arrow",
      options,
      fn(args) {
        if (isRef(element)) {
          if (element.current != null) {
            return u$1({
              element: element.current,
              padding
            }).fn(args);
          }
          return {};
        } else if (element) {
          return u$1({
            element,
            padding
          }).fn(args);
        }
        return {};
      }
    };
  };
  var index$1 = typeof document !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
  function deepEqual(a2, b2) {
    if (a2 === b2) {
      return true;
    }
    if (typeof a2 !== typeof b2) {
      return false;
    }
    if (typeof a2 === "function" && a2.toString() === b2.toString()) {
      return true;
    }
    let length2, i2, keys2;
    if (a2 && b2 && typeof a2 == "object") {
      if (Array.isArray(a2)) {
        length2 = a2.length;
        if (length2 != b2.length)
          return false;
        for (i2 = length2; i2-- !== 0; ) {
          if (!deepEqual(a2[i2], b2[i2])) {
            return false;
          }
        }
        return true;
      }
      keys2 = Object.keys(a2);
      length2 = keys2.length;
      if (length2 !== Object.keys(b2).length) {
        return false;
      }
      for (i2 = length2; i2-- !== 0; ) {
        if (!Object.prototype.hasOwnProperty.call(b2, keys2[i2])) {
          return false;
        }
      }
      for (i2 = length2; i2-- !== 0; ) {
        const key = keys2[i2];
        if (key === "_owner" && a2.$$typeof) {
          continue;
        }
        if (!deepEqual(a2[key], b2[key])) {
          return false;
        }
      }
      return true;
    }
    return a2 !== a2 && b2 !== b2;
  }
  function useLatestRef$1(value) {
    const ref = reactExports.useRef(value);
    index$1(() => {
      ref.current = value;
    });
    return ref;
  }
  function useFloating$1(options) {
    if (options === void 0) {
      options = {};
    }
    const {
      placement = "bottom",
      strategy = "absolute",
      middleware: middleware2 = [],
      platform,
      whileElementsMounted,
      open
    } = options;
    const [data, setData] = reactExports.useState({
      x: null,
      y: null,
      strategy,
      placement,
      middlewareData: {},
      isPositioned: false
    });
    const [latestMiddleware, setLatestMiddleware] = reactExports.useState(middleware2);
    if (!deepEqual(latestMiddleware, middleware2)) {
      setLatestMiddleware(middleware2);
    }
    const referenceRef = reactExports.useRef(null);
    const floatingRef = reactExports.useRef(null);
    const dataRef = reactExports.useRef(data);
    const whileElementsMountedRef = useLatestRef$1(whileElementsMounted);
    const platformRef = useLatestRef$1(platform);
    const [reference, _setReference] = reactExports.useState(null);
    const [floating, _setFloating] = reactExports.useState(null);
    const setReference = reactExports.useCallback((node2) => {
      if (referenceRef.current !== node2) {
        referenceRef.current = node2;
        _setReference(node2);
      }
    }, []);
    const setFloating = reactExports.useCallback((node2) => {
      if (floatingRef.current !== node2) {
        floatingRef.current = node2;
        _setFloating(node2);
      }
    }, []);
    const update = reactExports.useCallback(() => {
      if (!referenceRef.current || !floatingRef.current) {
        return;
      }
      const config = {
        placement,
        strategy,
        middleware: latestMiddleware
      };
      if (platformRef.current) {
        config.platform = platformRef.current;
      }
      z(referenceRef.current, floatingRef.current, config).then((data2) => {
        const fullData = {
          ...data2,
          isPositioned: true
        };
        if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
          dataRef.current = fullData;
          reactDomExports.flushSync(() => {
            setData(fullData);
          });
        }
      });
    }, [latestMiddleware, placement, strategy, platformRef]);
    index$1(() => {
      if (open === false && dataRef.current.isPositioned) {
        dataRef.current.isPositioned = false;
        setData((data2) => ({
          ...data2,
          isPositioned: false
        }));
      }
    }, [open]);
    const isMountedRef = reactExports.useRef(false);
    index$1(() => {
      isMountedRef.current = true;
      return () => {
        isMountedRef.current = false;
      };
    }, []);
    index$1(() => {
      if (reference && floating) {
        if (whileElementsMountedRef.current) {
          return whileElementsMountedRef.current(reference, floating, update);
        } else {
          update();
        }
      }
    }, [reference, floating, update, whileElementsMountedRef]);
    const refs = reactExports.useMemo(() => ({
      reference: referenceRef,
      floating: floatingRef,
      setReference,
      setFloating
    }), [setReference, setFloating]);
    const elements = reactExports.useMemo(() => ({
      reference,
      floating
    }), [reference, floating]);
    return reactExports.useMemo(() => ({
      ...data,
      update,
      refs,
      elements,
      reference: setReference,
      floating: setFloating
    }), [data, update, refs, elements, setReference, setFloating]);
  }
  /*!
  * tabbable 6.1.1
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  */
  var candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
  var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
  var NoElement = typeof Element === "undefined";
  var matches = NoElement ? function() {
  } : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
    var _element$getRootNode;
    return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
  } : function(element) {
    return element === null || element === void 0 ? void 0 : element.ownerDocument;
  };
  var isInert = function isInert2(node2, lookUp) {
    var _node$getAttribute;
    if (lookUp === void 0) {
      lookUp = true;
    }
    var inertAtt = node2 === null || node2 === void 0 ? void 0 : (_node$getAttribute = node2.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node2, "inert");
    var inert = inertAtt === "" || inertAtt === "true";
    var result = inert || lookUp && node2 && isInert2(node2.parentNode);
    return result;
  };
  var isContentEditable = function isContentEditable2(node2) {
    var _node$getAttribute2;
    var attValue = node2 === null || node2 === void 0 ? void 0 : (_node$getAttribute2 = node2.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node2, "contenteditable");
    return attValue === "" || attValue === "true";
  };
  var getCandidates = function getCandidates2(el2, includeContainer, filter) {
    if (isInert(el2)) {
      return [];
    }
    var candidates = Array.prototype.slice.apply(el2.querySelectorAll(candidateSelector));
    if (includeContainer && matches.call(el2, candidateSelector)) {
      candidates.unshift(el2);
    }
    candidates = candidates.filter(filter);
    return candidates;
  };
  var getCandidatesIteratively = function getCandidatesIteratively2(elements, includeContainer, options) {
    var candidates = [];
    var elementsToCheck = Array.from(elements);
    while (elementsToCheck.length) {
      var element = elementsToCheck.shift();
      if (isInert(element, false)) {
        continue;
      }
      if (element.tagName === "SLOT") {
        var assigned = element.assignedElements();
        var content = assigned.length ? assigned : element.children;
        var nestedCandidates = getCandidatesIteratively2(content, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element,
            candidates: nestedCandidates
          });
        }
      } else {
        var validCandidate = matches.call(element, candidateSelector);
        if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
          candidates.push(element);
        }
        var shadowRoot = element.shadowRoot || // check for an undisclosed shadow
        typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
        var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
        if (shadowRoot && validShadowRoot) {
          var _nestedCandidates = getCandidatesIteratively2(shadowRoot === true ? element.children : shadowRoot.children, true, options);
          if (options.flatten) {
            candidates.push.apply(candidates, _nestedCandidates);
          } else {
            candidates.push({
              scopeParent: element,
              candidates: _nestedCandidates
            });
          }
        } else {
          elementsToCheck.unshift.apply(elementsToCheck, element.children);
        }
      }
    }
    return candidates;
  };
  var getTabindex = function getTabindex2(node2, isScope) {
    if (node2.tabIndex < 0) {
      if ((isScope || /^(AUDIO|VIDEO|DETAILS)$/.test(node2.tagName) || isContentEditable(node2)) && isNaN(parseInt(node2.getAttribute("tabindex"), 10))) {
        return 0;
      }
    }
    return node2.tabIndex;
  };
  var sortOrderedTabbables = function sortOrderedTabbables2(a2, b2) {
    return a2.tabIndex === b2.tabIndex ? a2.documentOrder - b2.documentOrder : a2.tabIndex - b2.tabIndex;
  };
  var isInput = function isInput2(node2) {
    return node2.tagName === "INPUT";
  };
  var isHiddenInput = function isHiddenInput2(node2) {
    return isInput(node2) && node2.type === "hidden";
  };
  var isDetailsWithSummary = function isDetailsWithSummary2(node2) {
    var r2 = node2.tagName === "DETAILS" && Array.prototype.slice.apply(node2.children).some(function(child) {
      return child.tagName === "SUMMARY";
    });
    return r2;
  };
  var getCheckedRadio = function getCheckedRadio2(nodes, form) {
    for (var i2 = 0; i2 < nodes.length; i2++) {
      if (nodes[i2].checked && nodes[i2].form === form) {
        return nodes[i2];
      }
    }
  };
  var isTabbableRadio = function isTabbableRadio2(node2) {
    if (!node2.name) {
      return true;
    }
    var radioScope = node2.form || getRootNode(node2);
    var queryRadios = function queryRadios2(name) {
      return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
    };
    var radioSet;
    if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
      radioSet = queryRadios(window.CSS.escape(node2.name));
    } else {
      try {
        radioSet = queryRadios(node2.name);
      } catch (err) {
        console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
        return false;
      }
    }
    var checked = getCheckedRadio(radioSet, node2.form);
    return !checked || checked === node2;
  };
  var isRadio = function isRadio2(node2) {
    return isInput(node2) && node2.type === "radio";
  };
  var isNonTabbableRadio = function isNonTabbableRadio2(node2) {
    return isRadio(node2) && !isTabbableRadio(node2);
  };
  var isNodeAttached = function isNodeAttached2(node2) {
    var _nodeRoot;
    var nodeRoot = node2 && getRootNode(node2);
    var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
    var attached = false;
    if (nodeRoot && nodeRoot !== node2) {
      var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
      attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node2 !== null && node2 !== void 0 && (_node$ownerDocument = node2.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node2));
      while (!attached && nodeRootHost) {
        var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
        nodeRoot = getRootNode(nodeRootHost);
        nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
        attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
      }
    }
    return attached;
  };
  var isZeroArea = function isZeroArea2(node2) {
    var _node$getBoundingClie = node2.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
    return width === 0 && height === 0;
  };
  var isHidden = function isHidden2(node2, _ref) {
    var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
    if (getComputedStyle(node2).visibility === "hidden") {
      return true;
    }
    var isDirectSummary = matches.call(node2, "details>summary:first-of-type");
    var nodeUnderDetails = isDirectSummary ? node2.parentElement : node2;
    if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
      return true;
    }
    if (!displayCheck || displayCheck === "full" || displayCheck === "legacy-full") {
      if (typeof getShadowRoot === "function") {
        var originalNode = node2;
        while (node2) {
          var parentElement = node2.parentElement;
          var rootNode = getRootNode(node2);
          if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
            return isZeroArea(node2);
          } else if (node2.assignedSlot) {
            node2 = node2.assignedSlot;
          } else if (!parentElement && rootNode !== node2.ownerDocument) {
            node2 = rootNode.host;
          } else {
            node2 = parentElement;
          }
        }
        node2 = originalNode;
      }
      if (isNodeAttached(node2)) {
        return !node2.getClientRects().length;
      }
      if (displayCheck !== "legacy-full") {
        return true;
      }
    } else if (displayCheck === "non-zero-area") {
      return isZeroArea(node2);
    }
    return false;
  };
  var isDisabledFromFieldset = function isDisabledFromFieldset2(node2) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node2.tagName)) {
      var parentNode = node2.parentElement;
      while (parentNode) {
        if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
          for (var i2 = 0; i2 < parentNode.children.length; i2++) {
            var child = parentNode.children.item(i2);
            if (child.tagName === "LEGEND") {
              return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node2);
            }
          }
          return true;
        }
        parentNode = parentNode.parentElement;
      }
    }
    return false;
  };
  var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node2) {
    if (node2.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
    //  because we're limited in the type of selectors we can use in JSDom (see related
    //  note related to `candidateSelectors`)
    isInert(node2) || isHiddenInput(node2) || isHidden(node2, options) || // For a details element with a summary, the summary element gets the focus
    isDetailsWithSummary(node2) || isDisabledFromFieldset(node2)) {
      return false;
    }
    return true;
  };
  var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node2) {
    if (isNonTabbableRadio(node2) || getTabindex(node2) < 0 || !isNodeMatchingSelectorFocusable(options, node2)) {
      return false;
    }
    return true;
  };
  var isValidShadowRootTabbable = function isValidShadowRootTabbable2(shadowHostNode) {
    var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
    if (isNaN(tabIndex) || tabIndex >= 0) {
      return true;
    }
    return false;
  };
  var sortByOrder = function sortByOrder2(candidates) {
    var regularTabbables = [];
    var orderedTabbables = [];
    candidates.forEach(function(item, i2) {
      var isScope = !!item.scopeParent;
      var element = isScope ? item.scopeParent : item;
      var candidateTabindex = getTabindex(element, isScope);
      var elements = isScope ? sortByOrder2(item.candidates) : element;
      if (candidateTabindex === 0) {
        isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
      } else {
        orderedTabbables.push({
          documentOrder: i2,
          tabIndex: candidateTabindex,
          item,
          isScope,
          content: elements
        });
      }
    });
    return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
      sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
      return acc;
    }, []).concat(regularTabbables);
  };
  var tabbable = function tabbable2(el2, options) {
    options = options || {};
    var candidates;
    if (options.getShadowRoot) {
      candidates = getCandidatesIteratively([el2], options.includeContainer, {
        filter: isNodeMatchingSelectorTabbable.bind(null, options),
        flatten: false,
        getShadowRoot: options.getShadowRoot,
        shadowRootFilter: isValidShadowRootTabbable
      });
    } else {
      candidates = getCandidates(el2, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
    }
    return sortByOrder(candidates);
  };
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  const FloatingArrow = /* @__PURE__ */ reactExports.forwardRef(function FloatingArrow2(_ref, ref) {
    var _rest$style;
    let {
      context: {
        placement,
        elements: {
          floating
        },
        middlewareData: {
          arrow: arrow2
        }
      },
      width = 14,
      height = 7,
      tipRadius = 0,
      strokeWidth = 0,
      staticOffset,
      stroke,
      d: d2,
      ...rest
    } = _ref;
    const svgX = width / 2 * (tipRadius / -8 + 1);
    const svgY = height / 2 * tipRadius / 4;
    const [side, alignment] = placement.split("-");
    const isRTL = floating ? O.isRTL(floating) : false;
    const isCustomShape = !!d2;
    const isVerticalSide = side === "top" || side === "bottom";
    const yOffsetProp = staticOffset && alignment === "end" ? "bottom" : "top";
    let xOffsetProp = staticOffset && alignment === "end" ? "right" : "left";
    if (staticOffset && isRTL) {
      xOffsetProp = alignment === "end" ? "left" : "right";
    }
    const arrowX = (arrow2 == null ? void 0 : arrow2.x) != null ? staticOffset || arrow2.x : "";
    const arrowY = (arrow2 == null ? void 0 : arrow2.y) != null ? staticOffset || arrow2.y : "";
    const dValue = d2 || "M0,0" + (" H" + width) + (" L" + (width - svgX) + "," + (height - svgY)) + (" Q" + width / 2 + "," + height + " " + svgX + "," + (height - svgY)) + " Z";
    const rotation = {
      top: isCustomShape ? "rotate(180deg)" : "",
      left: isCustomShape ? "rotate(90deg)" : "rotate(-90deg)",
      bottom: isCustomShape ? "" : "rotate(180deg)",
      right: isCustomShape ? "rotate(-90deg)" : "rotate(90deg)"
    }[side];
    return /* @__PURE__ */ reactExports.createElement("svg", _extends({}, rest, {
      // @ts-ignore
      suppressHydrationWarning: true,
      "aria-hidden": true,
      ref,
      width: isCustomShape ? width : width + (isVerticalSide ? strokeWidth : 0),
      height: width,
      viewBox: isCustomShape ? "0 0 " + width + " " + width : "0 0 " + width + " " + (width + (!isVerticalSide ? strokeWidth : 0)),
      style: {
        ...rest.style,
        position: "absolute",
        pointerEvents: "none",
        [xOffsetProp]: arrowX != null ? arrowX : "",
        [yOffsetProp]: arrowY != null ? arrowY : "",
        [side]: "100%",
        transform: "" + rotation + ((_rest$style = rest.style) != null && _rest$style.transform ? " " + rest.style.transform : "")
      }
    }), strokeWidth > 0 && /* @__PURE__ */ reactExports.createElement("path", {
      fill: "none",
      stroke,
      strokeWidth: strokeWidth + (d2 ? 0 : 1),
      d: dValue
    }), /* @__PURE__ */ reactExports.createElement("path", {
      stroke: strokeWidth && !d2 ? rest.fill : "none",
      d: dValue
    }));
  });
  var index = typeof document !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
  let serverHandoffComplete = false;
  let count = 0;
  const genId = () => "floating-ui-" + count++;
  function useFloatingId() {
    const [id2, setId] = reactExports.useState(() => serverHandoffComplete ? genId() : void 0);
    index(() => {
      if (id2 == null) {
        setId(genId());
      }
    }, []);
    reactExports.useEffect(() => {
      if (!serverHandoffComplete) {
        serverHandoffComplete = true;
      }
    }, []);
    return id2;
  }
  const useReactId = React$2[/* @__PURE__ */ "useId".toString()];
  const useId = useReactId || useFloatingId;
  function createPubSub() {
    const map = /* @__PURE__ */ new Map();
    return {
      emit(event, data) {
        var _map$get;
        (_map$get = map.get(event)) == null ? void 0 : _map$get.forEach((handler) => handler(data));
      },
      on(event, listener) {
        map.set(event, [...map.get(event) || [], listener]);
      },
      off(event, listener) {
        map.set(event, (map.get(event) || []).filter((l2) => l2 !== listener));
      }
    };
  }
  const FloatingNodeContext = /* @__PURE__ */ reactExports.createContext(null);
  const FloatingTreeContext = /* @__PURE__ */ reactExports.createContext(null);
  const useFloatingParentNodeId = () => {
    var _React$useContext;
    return ((_React$useContext = reactExports.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
  };
  const useFloatingTree = () => reactExports.useContext(FloatingTreeContext);
  function getDocument(node2) {
    return (node2 == null ? void 0 : node2.ownerDocument) || document;
  }
  function getPlatform() {
    const uaData = navigator.userAgentData;
    if (uaData != null && uaData.platform) {
      return uaData.platform;
    }
    return navigator.platform;
  }
  function getWindow(value) {
    return getDocument(value).defaultView || window;
  }
  function isElement(value) {
    return value ? value instanceof getWindow(value).Element : false;
  }
  function isShadowRoot(node2) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    const OwnElement = getWindow(node2).ShadowRoot;
    return node2 instanceof OwnElement || node2 instanceof ShadowRoot;
  }
  function isSafari() {
    return /apple/i.test(navigator.vendor);
  }
  function isMac() {
    return getPlatform().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
  }
  function isMouseLikePointerType(pointerType, strict) {
    const values = ["mouse", "pen"];
    if (!strict) {
      values.push("", void 0);
    }
    return values.includes(pointerType);
  }
  function useLatestRef(value) {
    const ref = reactExports.useRef(value);
    index(() => {
      ref.current = value;
    });
    return ref;
  }
  const safePolygonIdentifier = "data-floating-ui-safe-polygon";
  function getDelay(value, prop, pointerType) {
    if (pointerType && !isMouseLikePointerType(pointerType)) {
      return 0;
    }
    if (typeof value === "number") {
      return value;
    }
    return value == null ? void 0 : value[prop];
  }
  const useHover = function(context, _temp) {
    let {
      enabled = true,
      delay = 0,
      handleClose = null,
      mouseOnly = false,
      restMs = 0,
      move = true
    } = _temp === void 0 ? {} : _temp;
    const {
      open,
      onOpenChange,
      dataRef,
      events,
      elements: {
        domReference,
        floating
      },
      refs
    } = context;
    const tree = useFloatingTree();
    const parentId = useFloatingParentNodeId();
    const handleCloseRef = useLatestRef(handleClose);
    const delayRef = useLatestRef(delay);
    const pointerTypeRef = reactExports.useRef();
    const timeoutRef = reactExports.useRef();
    const handlerRef = reactExports.useRef();
    const restTimeoutRef = reactExports.useRef();
    const blockMouseMoveRef = reactExports.useRef(true);
    const performedPointerEventsMutationRef = reactExports.useRef(false);
    const unbindMouseMoveRef = reactExports.useRef(() => {
    });
    const isHoverOpen = reactExports.useCallback(() => {
      var _dataRef$current$open;
      const type = (_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type;
      return (type == null ? void 0 : type.includes("mouse")) && type !== "mousedown";
    }, [dataRef]);
    reactExports.useEffect(() => {
      if (!enabled) {
        return;
      }
      function onDismiss() {
        clearTimeout(timeoutRef.current);
        clearTimeout(restTimeoutRef.current);
        blockMouseMoveRef.current = true;
      }
      events.on("dismiss", onDismiss);
      return () => {
        events.off("dismiss", onDismiss);
      };
    }, [enabled, events]);
    reactExports.useEffect(() => {
      if (!enabled || !handleCloseRef.current || !open) {
        return;
      }
      function onLeave() {
        if (isHoverOpen()) {
          onOpenChange(false);
        }
      }
      const html = getDocument(floating).documentElement;
      html.addEventListener("mouseleave", onLeave);
      return () => {
        html.removeEventListener("mouseleave", onLeave);
      };
    }, [floating, open, onOpenChange, enabled, handleCloseRef, dataRef, isHoverOpen]);
    const closeWithDelay = reactExports.useCallback(function(runElseBranch) {
      if (runElseBranch === void 0) {
        runElseBranch = true;
      }
      const closeDelay = getDelay(delayRef.current, "close", pointerTypeRef.current);
      if (closeDelay && !handlerRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => onOpenChange(false), closeDelay);
      } else if (runElseBranch) {
        clearTimeout(timeoutRef.current);
        onOpenChange(false);
      }
    }, [delayRef, onOpenChange]);
    const cleanupMouseMoveHandler = reactExports.useCallback(() => {
      unbindMouseMoveRef.current();
      handlerRef.current = void 0;
    }, []);
    const clearPointerEvents = reactExports.useCallback(() => {
      if (performedPointerEventsMutationRef.current) {
        const body = getDocument(refs.floating.current).body;
        body.style.pointerEvents = "";
        body.removeAttribute(safePolygonIdentifier);
        performedPointerEventsMutationRef.current = false;
      }
    }, [refs]);
    reactExports.useEffect(() => {
      if (!enabled) {
        return;
      }
      function isClickLikeOpenEvent() {
        return dataRef.current.openEvent ? ["click", "mousedown"].includes(dataRef.current.openEvent.type) : false;
      }
      function onMouseEnter(event) {
        clearTimeout(timeoutRef.current);
        blockMouseMoveRef.current = false;
        if (mouseOnly && !isMouseLikePointerType(pointerTypeRef.current) || restMs > 0 && getDelay(delayRef.current, "open") === 0) {
          return;
        }
        dataRef.current.openEvent = event;
        const openDelay = getDelay(delayRef.current, "open", pointerTypeRef.current);
        if (openDelay) {
          timeoutRef.current = setTimeout(() => {
            onOpenChange(true);
          }, openDelay);
        } else {
          onOpenChange(true);
        }
      }
      function onMouseLeave(event) {
        if (isClickLikeOpenEvent()) {
          return;
        }
        unbindMouseMoveRef.current();
        const doc = getDocument(floating);
        clearTimeout(restTimeoutRef.current);
        if (handleCloseRef.current) {
          if (!open) {
            clearTimeout(timeoutRef.current);
          }
          handlerRef.current = handleCloseRef.current({
            ...context,
            tree,
            x: event.clientX,
            y: event.clientY,
            onClose() {
              clearPointerEvents();
              cleanupMouseMoveHandler();
              closeWithDelay();
            }
          });
          const handler = handlerRef.current;
          doc.addEventListener("mousemove", handler);
          unbindMouseMoveRef.current = () => {
            doc.removeEventListener("mousemove", handler);
          };
          return;
        }
        closeWithDelay();
      }
      function onScrollMouseLeave(event) {
        if (isClickLikeOpenEvent()) {
          return;
        }
        handleCloseRef.current == null ? void 0 : handleCloseRef.current({
          ...context,
          tree,
          x: event.clientX,
          y: event.clientY,
          onClose() {
            clearPointerEvents();
            cleanupMouseMoveHandler();
            closeWithDelay();
          }
        })(event);
      }
      if (isElement(domReference)) {
        const ref = domReference;
        open && ref.addEventListener("mouseleave", onScrollMouseLeave);
        floating == null ? void 0 : floating.addEventListener("mouseleave", onScrollMouseLeave);
        move && ref.addEventListener("mousemove", onMouseEnter, {
          once: true
        });
        ref.addEventListener("mouseenter", onMouseEnter);
        ref.addEventListener("mouseleave", onMouseLeave);
        return () => {
          open && ref.removeEventListener("mouseleave", onScrollMouseLeave);
          floating == null ? void 0 : floating.removeEventListener("mouseleave", onScrollMouseLeave);
          move && ref.removeEventListener("mousemove", onMouseEnter);
          ref.removeEventListener("mouseenter", onMouseEnter);
          ref.removeEventListener("mouseleave", onMouseLeave);
        };
      }
    }, [domReference, floating, enabled, context, mouseOnly, restMs, move, closeWithDelay, cleanupMouseMoveHandler, clearPointerEvents, onOpenChange, open, tree, delayRef, handleCloseRef, dataRef]);
    index(() => {
      var _handleCloseRef$curre;
      if (!enabled) {
        return;
      }
      if (open && (_handleCloseRef$curre = handleCloseRef.current) != null && _handleCloseRef$curre.__options.blockPointerEvents && isHoverOpen()) {
        const body = getDocument(floating).body;
        body.setAttribute(safePolygonIdentifier, "");
        body.style.pointerEvents = "none";
        performedPointerEventsMutationRef.current = true;
        if (isElement(domReference) && floating) {
          var _tree$nodesRef$curren, _tree$nodesRef$curren2;
          const ref = domReference;
          const parentFloating = tree == null ? void 0 : (_tree$nodesRef$curren = tree.nodesRef.current.find((node2) => node2.id === parentId)) == null ? void 0 : (_tree$nodesRef$curren2 = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren2.elements.floating;
          if (parentFloating) {
            parentFloating.style.pointerEvents = "";
          }
          ref.style.pointerEvents = "auto";
          floating.style.pointerEvents = "auto";
          return () => {
            ref.style.pointerEvents = "";
            floating.style.pointerEvents = "";
          };
        }
      }
    }, [enabled, open, parentId, floating, domReference, tree, handleCloseRef, dataRef, isHoverOpen]);
    index(() => {
      if (!open) {
        pointerTypeRef.current = void 0;
        cleanupMouseMoveHandler();
        clearPointerEvents();
      }
    }, [open, cleanupMouseMoveHandler, clearPointerEvents]);
    reactExports.useEffect(() => {
      return () => {
        cleanupMouseMoveHandler();
        clearTimeout(timeoutRef.current);
        clearTimeout(restTimeoutRef.current);
        clearPointerEvents();
      };
    }, [enabled, cleanupMouseMoveHandler, clearPointerEvents]);
    return reactExports.useMemo(() => {
      if (!enabled) {
        return {};
      }
      function setPointerRef(event) {
        pointerTypeRef.current = event.pointerType;
      }
      return {
        reference: {
          onPointerDown: setPointerRef,
          onPointerEnter: setPointerRef,
          onMouseMove() {
            if (open || restMs === 0) {
              return;
            }
            clearTimeout(restTimeoutRef.current);
            restTimeoutRef.current = setTimeout(() => {
              if (!blockMouseMoveRef.current) {
                onOpenChange(true);
              }
            }, restMs);
          }
        },
        floating: {
          onMouseEnter() {
            clearTimeout(timeoutRef.current);
          },
          onMouseLeave() {
            events.emit("dismiss", {
              type: "mouseLeave",
              data: {
                returnFocus: false
              }
            });
            closeWithDelay(false);
          }
        }
      };
    }, [events, enabled, restMs, open, onOpenChange, closeWithDelay]);
  };
  function activeElement$1(doc) {
    let activeElement2 = doc.activeElement;
    while (((_activeElement = activeElement2) == null ? void 0 : (_activeElement$shadow = _activeElement.shadowRoot) == null ? void 0 : _activeElement$shadow.activeElement) != null) {
      var _activeElement, _activeElement$shadow;
      activeElement2 = activeElement2.shadowRoot.activeElement;
    }
    return activeElement2;
  }
  function contains(parent, child) {
    if (!parent || !child) {
      return false;
    }
    const rootNode = child.getRootNode && child.getRootNode();
    if (parent.contains(child)) {
      return true;
    } else if (rootNode && isShadowRoot(rootNode)) {
      let next2 = child;
      do {
        if (next2 && parent === next2) {
          return true;
        }
        next2 = next2.parentNode || next2.host;
      } while (next2);
    }
    return false;
  }
  const getTabbableOptions = () => ({
    getShadowRoot: true,
    displayCheck: (
      // JSDOM does not support the `tabbable` library. To solve this we can
      // check if `ResizeObserver` is a real function (not polyfilled), which
      // determines if the current environment is JSDOM-like.
      typeof ResizeObserver === "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
    )
  });
  function getTabbableIn(container, direction) {
    const allTabbable = tabbable(container, getTabbableOptions());
    if (direction === "prev") {
      allTabbable.reverse();
    }
    const activeIndex = allTabbable.indexOf(activeElement$1(getDocument(container)));
    const nextTabbableElements = allTabbable.slice(activeIndex + 1);
    return nextTabbableElements[0];
  }
  function getNextTabbable() {
    return getTabbableIn(document.body, "next");
  }
  function getPreviousTabbable() {
    return getTabbableIn(document.body, "prev");
  }
  function isOutsideEvent(event, container) {
    const containerElement = container || event.currentTarget;
    const relatedTarget = event.relatedTarget;
    return !relatedTarget || !contains(containerElement, relatedTarget);
  }
  function disableFocusInside(container) {
    const tabbableElements = tabbable(container, getTabbableOptions());
    tabbableElements.forEach((element) => {
      element.dataset.tabindex = element.getAttribute("tabindex") || "";
      element.setAttribute("tabindex", "-1");
    });
  }
  function enableFocusInside(container) {
    const elements = container.querySelectorAll("[data-tabindex]");
    elements.forEach((element) => {
      const tabindex = element.dataset.tabindex;
      delete element.dataset.tabindex;
      if (tabindex) {
        element.setAttribute("tabindex", tabindex);
      } else {
        element.removeAttribute("tabindex");
      }
    });
  }
  const useInsertionEffect = React$2[/* @__PURE__ */ "useInsertionEffect".toString()];
  const useSafeInsertionEffect = useInsertionEffect || ((fn) => fn());
  function useEvent(callback) {
    const ref = reactExports.useRef(() => {
    });
    useSafeInsertionEffect(() => {
      ref.current = callback;
    });
    return reactExports.useCallback(function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return ref.current == null ? void 0 : ref.current(...args);
    }, []);
  }
  const HIDDEN_STYLES = {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "fixed",
    whiteSpace: "nowrap",
    width: "1px",
    top: 0,
    left: 0
  };
  let activeElement;
  let timeoutId;
  function setActiveElementOnTab(event) {
    if (event.key === "Tab") {
      activeElement = event.target;
      clearTimeout(timeoutId);
    }
  }
  function isTabFocus(event) {
    const result = activeElement === event.relatedTarget;
    activeElement = event.relatedTarget;
    clearTimeout(timeoutId);
    return result;
  }
  const FocusGuard = /* @__PURE__ */ reactExports.forwardRef(function FocusGuard2(props, ref) {
    const onFocus = useEvent(props.onFocus);
    const [role, setRole] = reactExports.useState();
    index(() => {
      if (isSafari()) {
        setRole("button");
      }
      document.addEventListener("keydown", setActiveElementOnTab);
      return () => {
        document.removeEventListener("keydown", setActiveElementOnTab);
      };
    }, []);
    return /* @__PURE__ */ reactExports.createElement("span", _extends({}, props, {
      ref,
      tabIndex: 0,
      role,
      "aria-hidden": role ? void 0 : true,
      "data-floating-ui-focus-guard": "",
      style: HIDDEN_STYLES,
      onFocus: (event) => {
        if (isSafari() && isMac() && !isTabFocus(event)) {
          event.persist();
          timeoutId = window.setTimeout(() => {
            onFocus(event);
          }, 50);
        } else {
          onFocus(event);
        }
      }
    }));
  });
  const PortalContext = /* @__PURE__ */ reactExports.createContext(null);
  const useFloatingPortalNode = function(_temp) {
    let {
      id: id2,
      enabled = true
    } = _temp === void 0 ? {} : _temp;
    const [portalEl, setPortalEl] = reactExports.useState(null);
    const uniqueId = useId();
    const portalContext = usePortalContext();
    index(() => {
      if (!enabled) {
        return;
      }
      const rootNode = id2 ? document.getElementById(id2) : null;
      if (rootNode) {
        rootNode.setAttribute("data-floating-ui-portal", "");
        setPortalEl(rootNode);
      } else {
        const newPortalEl = document.createElement("div");
        if (id2 !== "") {
          newPortalEl.id = id2 || uniqueId;
        }
        newPortalEl.setAttribute("data-floating-ui-portal", "");
        setPortalEl(newPortalEl);
        const container = (portalContext == null ? void 0 : portalContext.portalNode) || document.body;
        container.appendChild(newPortalEl);
        return () => {
          container.removeChild(newPortalEl);
        };
      }
    }, [id2, portalContext, uniqueId, enabled]);
    return portalEl;
  };
  const FloatingPortal = (_ref) => {
    let {
      children,
      id: id2,
      root: root2 = null,
      preserveTabOrder = true
    } = _ref;
    const portalNode = useFloatingPortalNode({
      id: id2,
      enabled: !root2
    });
    const [focusManagerState, setFocusManagerState] = reactExports.useState(null);
    const beforeOutsideRef = reactExports.useRef(null);
    const afterOutsideRef = reactExports.useRef(null);
    const beforeInsideRef = reactExports.useRef(null);
    const afterInsideRef = reactExports.useRef(null);
    const shouldRenderGuards = (
      // The FocusManager and therefore floating element are currently open/
      // rendered.
      !!focusManagerState && // Guards are only for non-modal focus management.
      !focusManagerState.modal && !!(root2 || portalNode) && preserveTabOrder
    );
    reactExports.useEffect(() => {
      if (!portalNode || !preserveTabOrder || focusManagerState != null && focusManagerState.modal) {
        return;
      }
      function onFocus(event) {
        if (portalNode && isOutsideEvent(event)) {
          const focusing = event.type === "focusin";
          const manageFocus = focusing ? enableFocusInside : disableFocusInside;
          manageFocus(portalNode);
        }
      }
      portalNode.addEventListener("focusin", onFocus, true);
      portalNode.addEventListener("focusout", onFocus, true);
      return () => {
        portalNode.removeEventListener("focusin", onFocus, true);
        portalNode.removeEventListener("focusout", onFocus, true);
      };
    }, [portalNode, preserveTabOrder, focusManagerState == null ? void 0 : focusManagerState.modal]);
    return /* @__PURE__ */ reactExports.createElement(PortalContext.Provider, {
      value: reactExports.useMemo(() => ({
        preserveTabOrder,
        beforeOutsideRef,
        afterOutsideRef,
        beforeInsideRef,
        afterInsideRef,
        portalNode,
        setFocusManagerState
      }), [preserveTabOrder, portalNode])
    }, shouldRenderGuards && portalNode && /* @__PURE__ */ reactExports.createElement(FocusGuard, {
      "data-type": "outside",
      ref: beforeOutsideRef,
      onFocus: (event) => {
        if (isOutsideEvent(event, portalNode)) {
          var _beforeInsideRef$curr;
          (_beforeInsideRef$curr = beforeInsideRef.current) == null ? void 0 : _beforeInsideRef$curr.focus();
        } else {
          const prevTabbable = getPreviousTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
          prevTabbable == null ? void 0 : prevTabbable.focus();
        }
      }
    }), shouldRenderGuards && portalNode && /* @__PURE__ */ reactExports.createElement("span", {
      "aria-owns": portalNode.id,
      style: HIDDEN_STYLES
    }), root2 ? /* @__PURE__ */ reactDomExports.createPortal(children, root2) : portalNode ? /* @__PURE__ */ reactDomExports.createPortal(children, portalNode) : null, shouldRenderGuards && portalNode && /* @__PURE__ */ reactExports.createElement(FocusGuard, {
      "data-type": "outside",
      ref: afterOutsideRef,
      onFocus: (event) => {
        if (isOutsideEvent(event, portalNode)) {
          var _afterInsideRef$curre;
          (_afterInsideRef$curre = afterInsideRef.current) == null ? void 0 : _afterInsideRef$curre.focus();
        } else {
          const nextTabbable = getNextTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
          nextTabbable == null ? void 0 : nextTabbable.focus();
          (focusManagerState == null ? void 0 : focusManagerState.closeOnFocusOut) && (focusManagerState == null ? void 0 : focusManagerState.onOpenChange(false));
        }
      }
    }));
  };
  const usePortalContext = () => reactExports.useContext(PortalContext);
  function useFloating(options) {
    if (options === void 0) {
      options = {};
    }
    const {
      open = false,
      onOpenChange: unstable_onOpenChange,
      nodeId
    } = options;
    const position2 = useFloating$1(options);
    const tree = useFloatingTree();
    const domReferenceRef = reactExports.useRef(null);
    const dataRef = reactExports.useRef({});
    const events = reactExports.useState(() => createPubSub())[0];
    const [domReference, setDomReference] = reactExports.useState(null);
    const setPositionReference = reactExports.useCallback((node2) => {
      const positionReference = isElement(node2) ? {
        getBoundingClientRect: () => node2.getBoundingClientRect(),
        contextElement: node2
      } : node2;
      position2.refs.setReference(positionReference);
    }, [position2.refs]);
    const setReference = reactExports.useCallback((node2) => {
      if (isElement(node2) || node2 === null) {
        domReferenceRef.current = node2;
        setDomReference(node2);
      }
      if (isElement(position2.refs.reference.current) || position2.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
      // `null` to support `positionReference` + an unstable `reference`
      // callback ref.
      node2 !== null && !isElement(node2)) {
        position2.refs.setReference(node2);
      }
    }, [position2.refs]);
    const refs = reactExports.useMemo(() => ({
      ...position2.refs,
      setReference,
      setPositionReference,
      domReference: domReferenceRef
    }), [position2.refs, setReference, setPositionReference]);
    const elements = reactExports.useMemo(() => ({
      ...position2.elements,
      domReference
    }), [position2.elements, domReference]);
    const onOpenChange = useEvent(unstable_onOpenChange);
    const context = reactExports.useMemo(() => ({
      ...position2,
      refs,
      elements,
      dataRef,
      nodeId,
      events,
      open,
      onOpenChange
    }), [position2, nodeId, events, open, onOpenChange, refs, elements]);
    index(() => {
      const node2 = tree == null ? void 0 : tree.nodesRef.current.find((node3) => node3.id === nodeId);
      if (node2) {
        node2.context = context;
      }
    });
    return reactExports.useMemo(() => ({
      ...position2,
      context,
      refs,
      reference: setReference,
      positionReference: setPositionReference
    }), [position2, refs, context, setReference, setPositionReference]);
  }
  function mergeProps(userProps, propsList, elementKey) {
    const map = /* @__PURE__ */ new Map();
    return {
      ...elementKey === "floating" && {
        tabIndex: -1
      },
      ...userProps,
      ...propsList.map((value) => value ? value[elementKey] : null).concat(userProps).reduce((acc, props) => {
        if (!props) {
          return acc;
        }
        Object.entries(props).forEach((_ref) => {
          let [key, value] = _ref;
          if (key.indexOf("on") === 0) {
            if (!map.has(key)) {
              map.set(key, []);
            }
            if (typeof value === "function") {
              var _map$get;
              (_map$get = map.get(key)) == null ? void 0 : _map$get.push(value);
              acc[key] = function() {
                var _map$get2;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.forEach((fn) => fn(...args));
              };
            }
          } else {
            acc[key] = value;
          }
        });
        return acc;
      }, {})
    };
  }
  const useInteractions = function(propsList) {
    if (propsList === void 0) {
      propsList = [];
    }
    const deps = propsList;
    const getReferenceProps = reactExports.useCallback(
      (userProps) => mergeProps(userProps, propsList, "reference"),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      deps
    );
    const getFloatingProps = reactExports.useCallback(
      (userProps) => mergeProps(userProps, propsList, "floating"),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      deps
    );
    const getItemProps = reactExports.useCallback(
      (userProps) => mergeProps(userProps, propsList, "item"),
      // Granularly check for `item` changes, because the `getItemProps` getter
      // should be as referentially stable as possible since it may be passed as
      // a prop to many components. All `item` key values must therefore be
      // memoized.
      // eslint-disable-next-line react-hooks/exhaustive-deps
      propsList.map((key) => key == null ? void 0 : key.item)
    );
    return reactExports.useMemo(() => ({
      getReferenceProps,
      getFloatingProps,
      getItemProps
    }), [getReferenceProps, getFloatingProps, getItemProps]);
  };
  function PopOver({
    children,
    content,
    placement = "top-start",
    disabled = false,
    offsetPixel = 8,
    backgroundColor = "rgba(104, 101, 101, 0.89)",
    delay = false,
    openDelay = false,
    border = false
  }) {
    useTheme();
    const [isOpen, setIsOpen] = reactExports.useState(false);
    const arrowRef = reactExports.useRef(null);
    const { x: x2, y: y2, strategy, refs, context } = useFloating({
      open: isOpen,
      onOpenChange: setIsOpen,
      placement,
      middleware: [
        D$1(offsetPixel),
        b$1(),
        k(),
        arrow({
          element: arrowRef
        })
      ]
    });
    const hover = useHover(context, {
      delay: {
        open: openDelay ? 500 : void 0,
        close: delay ? 250 : void 0
      }
    });
    const { getReferenceProps, getFloatingProps } = useInteractions([hover]);
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          ref: refs.setReference,
          ...getReferenceProps(),
          children
        },
        `PopOver-content-${content}`
      ),
      /* @__PURE__ */ jsx(FloatingPortal, { children: isOpen && !disabled && /* @__PURE__ */ jsxs(
        "div",
        {
          ref: refs.setFloating,
          className: "eocs-popover",
          style: {
            position: strategy,
            top: y2 ?? 0,
            left: x2 ?? 0,
            backgroundColor: "#fff",
            color: "#182c3c",
            border: "1px solid #dce5ec",
            borderRadius: 10,
            fontSize: 13,
            padding: 10,
            zIndex: 2147483100,
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Microsoft YaHei', sans-serif",
            lineHeight: 1.6,
            whiteSpace: "pre-wrap"
          },
          ...getFloatingProps(),
          children: [
            /* @__PURE__ */ jsx(
              FloatingArrow,
              {
                ref: arrowRef,
                context,
                fill: "#fff"
              }
            ),
            content
          ]
        },
        `PopOver-tooltip-${content}`
      ) })
    ] });
  }
  function __read(o2, n2) {
    var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
    if (!m2)
      return o2;
    var i2 = m2.call(o2), r2, ar = [], e2;
    try {
      while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
        ar.push(r2.value);
    } catch (error) {
      e2 = { error };
    } finally {
      try {
        if (r2 && !r2.done && (m2 = i2["return"]))
          m2.call(i2);
      } finally {
        if (e2)
          throw e2.error;
      }
    }
    return ar;
  }
  function __spreadArray(to, from2, pack) {
    if (pack || arguments.length === 2)
      for (var i2 = 0, l2 = from2.length, ar; i2 < l2; i2++) {
        if (ar || !(i2 in from2)) {
          if (!ar)
            ar = Array.prototype.slice.call(from2, 0, i2);
          ar[i2] = from2[i2];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from2));
  }
  var isFunction = function(value) {
    return typeof value === "function";
  };
  var isDev = false;
  const isDev$1 = isDev;
  function useLatest(value) {
    var ref = reactExports.useRef(value);
    ref.current = value;
    return ref;
  }
  var useUnmount = function(fn) {
    if (isDev$1) {
      if (!isFunction(fn)) {
        console.error("useUnmount expected parameter is a function, got ".concat(typeof fn));
      }
    }
    var fnRef = useLatest(fn);
    reactExports.useEffect(function() {
      return function() {
        fnRef.current();
      };
    }, []);
  };
  const useUnmount$1 = useUnmount;
  var root$2 = _root;
  var now$3 = function() {
    return root$2.Date.now();
  };
  var now_1 = now$3;
  var reWhitespace$1 = /\s/;
  function trimmedEndIndex$2(string) {
    var index2 = string.length;
    while (index2-- && reWhitespace$1.test(string.charAt(index2))) {
    }
    return index2;
  }
  var _trimmedEndIndex = trimmedEndIndex$2;
  var trimmedEndIndex$1 = _trimmedEndIndex;
  var reTrimStart$1 = /^\s+/;
  function baseTrim$2(string) {
    return string ? string.slice(0, trimmedEndIndex$1(string) + 1).replace(reTrimStart$1, "") : string;
  }
  var _baseTrim = baseTrim$2;
  var baseGetTag$1 = _baseGetTag, isObjectLike$1 = isObjectLike_1;
  var symbolTag$1 = "[object Symbol]";
  function isSymbol$2(value) {
    return typeof value == "symbol" || isObjectLike$1(value) && baseGetTag$1(value) == symbolTag$1;
  }
  var isSymbol_1 = isSymbol$2;
  var baseTrim$1 = _baseTrim, isObject$2 = isObject_1, isSymbol$1 = isSymbol_1;
  var NAN$1 = 0 / 0;
  var reIsBadHex$1 = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary$1 = /^0b[01]+$/i;
  var reIsOctal$1 = /^0o[0-7]+$/i;
  var freeParseInt$1 = parseInt;
  function toNumber$2(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol$1(value)) {
      return NAN$1;
    }
    if (isObject$2(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject$2(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = baseTrim$1(value);
    var isBinary = reIsBinary$1.test(value);
    return isBinary || reIsOctal$1.test(value) ? freeParseInt$1(value.slice(2), isBinary ? 2 : 8) : reIsBadHex$1.test(value) ? NAN$1 : +value;
  }
  var toNumber_1 = toNumber$2;
  var isObject$1 = isObject_1, now$2 = now_1, toNumber$1 = toNumber_1;
  var FUNC_ERROR_TEXT$2 = "Expected a function";
  var nativeMax$1 = Math.max, nativeMin$1 = Math.min;
  function debounce$1(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT$2);
    }
    wait = toNumber$1(wait) || 0;
    if (isObject$1(options)) {
      leading = !!options.leading;
      maxing = "maxWait" in options;
      maxWait = maxing ? nativeMax$1(toNumber$1(options.maxWait) || 0, wait) : maxWait;
      trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
      var args = lastArgs, thisArg = lastThis;
      lastArgs = lastThis = void 0;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }
    function leadingEdge(time) {
      lastInvokeTime = time;
      timerId = setTimeout(timerExpired, wait);
      return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
      return maxing ? nativeMin$1(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
      return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
      var time = now$2();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
      timerId = void 0;
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = void 0;
      return result;
    }
    function cancel() {
      if (timerId !== void 0) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = void 0;
    }
    function flush() {
      return timerId === void 0 ? result : trailingEdge(now$2());
    }
    function debounced() {
      var time = now$2(), isInvoking = shouldInvoke(time);
      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;
      if (isInvoking) {
        if (timerId === void 0) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === void 0) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }
  var debounce_1 = debounce$1;
  var useMount = function(fn) {
    if (isDev$1) {
      if (!isFunction(fn)) {
        console.error('useMount: parameter `fn` expected to be a function, but got "'.concat(typeof fn, '".'));
      }
    }
    reactExports.useEffect(function() {
      fn === null || fn === void 0 ? void 0 : fn();
    }, []);
  };
  const useMount$1 = useMount;
  function useDebounceFn(fn, options) {
    var _a2;
    if (isDev$1) {
      if (!isFunction(fn)) {
        console.error("useDebounceFn expected parameter is a function, got ".concat(typeof fn));
      }
    }
    var fnRef = useLatest(fn);
    var wait = (_a2 = options === null || options === void 0 ? void 0 : options.wait) !== null && _a2 !== void 0 ? _a2 : 1e3;
    var debounced = reactExports.useMemo(function() {
      return debounce_1(function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return fnRef.current.apply(fnRef, __spreadArray([], __read(args), false));
      }, wait, options);
    }, []);
    useUnmount$1(function() {
      debounced.cancel();
    });
    return {
      run: debounced,
      cancel: debounced.cancel,
      flush: debounced.flush
    };
  }
  const SwitchLabel = newStyled.label`
    /* 限定label标签属性，也就是checkbox的包装器 */

    position: relative;
    display: inline-block;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    border-radius: 38px;
    /* vertical-align: middle; */

    /* 不显示checkbox本身，通过点击外部的label实现点击input的效果 */
    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* 未选中，滑条效果 */
    #slider {
        position: absolute;
        z-index: 11;
        /* cursor: pointer; */
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transition: 0.4s;
        border-radius: 38px;
        background-color: rgb(234, 234, 234);
    }

    #switch {
        position: absolute;
        z-index: 12;
        height: ${(props) => props.height - 2}px;
        width: ${(props) => props.height - 2}px;
        left: 1px;
        bottom: 1px;
        background-color: white;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 0 rgba(0, 0, 0, 0.08);
        border-radius: 50%;
        border-radius: 38px;
    }

    /* 未选中，点击时滑条效果 */
    input:not(:checked):active ~ #slider {
        background-color: rgb(187, 187, 187);
    }

    /* 未选中，点击时滑块效果 */
    /* input:active + #switch {
        animation-name: widen_to_right;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
    } */

    /* 滑块点击右移效果 */
    input:checked + #switch {
        animation-name: slide_to_right;
        animation-duration: 0.2s;
        animation-fill-mode: forwards;
    }

    /* 选中时，滑条效果 */
    input:checked ~ #slider {
        background-color: ${(props) => props.theme.colors.active};
    }

    /* 已选中，点击时滑块效果 */
    /* input:checked:active + #switch {
        animation-name: widen_to_left;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
    } */

    /* 滑块点击左移效果 */
    input:not(:checked):not(:active) + #switch {
        animation-name: slide_to_left;
        animation-duration: 0.2s;
        animation-fill-mode: forwards;
    }

    @keyframes widen_to_right {
        0% {
            left: 1px;
            width: ${(props) => props.height}px;
        }

        100% {
            left: 1px;
            width: ${(props) => (props.height - 2) / 2 * 3}px;
        }
    }

    @keyframes slide_to_right {
        0% {
            left: 1px;
            width: ${(props) => (props.height - 2) / 2 * 3}px;
        }

        100% {
            /* + 1是因为，滑块的直径是height-2，要达到right : 1的效果，就是左起 直径+1 */
            left: ${(props) => props.height + 1}px;
            width: ${(props) => props.height - 2}px;
        }
    }

    @keyframes widen_to_left {
        0% {
            left: ${(props) => props.height + 1}px;
            width: ${(props) => props.height - 2}px;
        }

        100% {
            left: ${(props) => props.width - 1 - (props.height - 2) / 2 * 3}px;
            width: ${(props) => (props.height - 2) / 2 * 3}px;
        }
    }

    @keyframes slide_to_left {
        0% {
            left: ${(props) => props.width - 1 - (props.height - 2) / 2 * 3}px;
            width: ${(props) => (props.height - 2) / 2 * 3}px;
        }

        100% {
            left: 1px;
            width: ${(props) => props.height - 2}px;
        }
    }
`;
  function Switch({
    checked = false,
    onChange = () => {
    },
    disabled = false,
    // width = 50,
    height = 25,
    id: id2 = ""
  }) {
    return /* @__PURE__ */ jsxs(SwitchLabel, { className: "my-switch", width: height * 2, height, children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          id: id2,
          type: "checkbox",
          checked,
          onChange: (e2) => {
            onChange(e2.target.checked);
          },
          disabled
        }
      ),
      /* @__PURE__ */ jsx("span", { id: "switch" }),
      /* @__PURE__ */ jsx("span", { id: "slider" })
    ] });
  }
  function ConfigControl({
    genericSetting: { id: id2, name, valueType, readonly }
  }) {
    const [statusText, setStatusText] = reactExports.useState("");
    const [spring, api] = J(() => ({
      config: {
        ...mt.wobbly
      }
    }));
    const { userSettings } = useStore();
    const value = userSettings[id2];
    const [localValue, setLocalValue] = reactExports.useState(value);
    const { run: onChangeDebounced } = useDebounceFn(
      (newValue) => {
        if (newValue === value)
          return;
        store.userSettings[id2] = newValue;
        setStatusText("保存成功");
        setTimeout(() => {
          setStatusText("");
        }, 1e3);
      },
      {
        wait: 1e3
      }
    );
    reactExports.useEffect(() => {
      api.start({
        right: statusText ? "0%" : "-100%",
        opacity: statusText ? 1 : 0
      });
    }, [statusText]);
    reactExports.useEffect(() => {
      setLocalValue(value);
    }, [value]);
    reactExports.useEffect(() => {
      onChangeDebounced(localValue);
    }, [localValue]);
    let element;
    switch (valueType) {
      case "string":
        element = /* @__PURE__ */ jsx(
          "textarea",
          {
            id: "eocs-setting-" + id2,
            "aria-label": name,
            value: localValue,
            onBlur: (e2) => setLocalValue(e2.target.value),
            onChange: (e2) => setLocalValue(e2.target.value),
            disabled: readonly,
            style: {
              resize: "none",
              height: 40,
              fontSize: 16,
              lineHeight: "normal"
            }
          }
        );
        break;
      case "number":
        element = /* @__PURE__ */ jsx(
          "input",
          {
            id: "eocs-setting-" + id2,
            "aria-label": name,
            type: "number",
            value: localValue,
            onBlur: (e2) => setLocalValue(e2.target.value),
            onChange: (e2) => setLocalValue(e2.target.value),
            style: {
              width: 60,
              textAlign: "center"
            },
            disabled: readonly
          }
        );
        break;
      case "boolean":
        element = /* @__PURE__ */ jsx(
          Switch,
          {
            id: "eocs-setting-" + id2,
            height: 22,
            checked: localValue,
            onChange: setLocalValue,
            disabled: readonly
          }
        );
        break;
    }
    return /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          lineHeight: "normal",
          display: "flex",
          alignItems: "center",
          position: "relative"
        },
        children: [
          /* @__PURE__ */ jsx(
            it.div,
            {
              style: {
                position: "relative",
                marginRight: 4,
                ...spring
              },
              children: statusText
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                maxWidth: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: element
            }
          )
        ]
      }
    );
  }
  function ConfigSection({ settings }) {
    return jsx(Fragment, { children: settings.map((setting) => jsxs(ConfigItem, {
      className: "eocs-setting", style: { marginBottom: 8 },
      children: [
        jsxs("div", { className: "eocs-setting-title", children: [
          jsx("label", { htmlFor: "eocs-setting-" + setting.id, children: setting.name }),
          jsx(ConfigControl, { genericSetting: setting })
        ] }),
        jsx("div", { className: "eocs-setting-description", children: setting.description })
      ]
    }, setting.id)) });
  }
  const TabHeader = newStyled.div({
    height: 30,
    fontSize: 20,
    cursor: "pointer",
    border: "1px solid black",
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "华文新魏",
    lineHeight: "normal"
  });
  function TabContainer({ panel }) {
    const { tabIndex } = useStore();
    const active = Math.min(tabIndex, Math.max(0, panel.length - 1));
    return jsxs("div", { className: "eocs-tabs", children: [
      jsx("div", { className: "eocs-tab-list", role: "tablist", "aria-label": "设置分类", children: panel.map((item, index2) => jsx("button", {
        type: "button", className: "eocs-tab", id: "eocs-tab-" + index2, role: "tab",
        "aria-selected": active === index2, "aria-controls": "eocs-settings-content", tabIndex: active === index2 ? 0 : -1,
        onClick: () => store.setTabIndex(index2),
        onKeyDown: (event) => {
          let next = index2;
          if (event.key === "ArrowRight") next = (index2 + 1) % panel.length;
          else if (event.key === "ArrowLeft") next = (index2 + panel.length - 1) % panel.length;
          else if (event.key === "Home") next = 0;
          else if (event.key === "End") next = panel.length - 1;
          else return;
          event.preventDefault(); store.setTabIndex(next);
          document.getElementById("eocs-tab-" + next)?.focus();
        },
        children: item.label
      }, item.label)) }),
      jsx("div", { className: "eocs-tab-body", id: "eocs-settings-content", role: "tabpanel", "aria-labelledby": "eocs-tab-" + active, children: panel[active]?.content })
    ] });
  }
  const ConfigItem = newStyled.div({ position: "relative", padding: 12, border: "1px solid #e0e7ee", borderRadius: 12, background: "#fff" });
  const ConfigPanelContainer = newStyled(it.div)({ flexDirection: "column", width: "min(590px, calc(100vw - 32px))", maxHeight: "calc(100vh - 104px)", position: "fixed", top: 80, right: 24, zIndex: 2147482001, background: "#f4f7fa", border: "1px solid #dce5ec", borderRadius: 16, boxShadow: "0 16px 52px rgba(32,55,75,.16)", overflow: "hidden" });
  function ConfigPanel() {
    const { sectionSettings, visibility } = useStore();
    const theme2 = useTheme();
    const panel = reactExports.useMemo(() => {
      return sectionSettings.map((sectionSetting, index2) => ({
        label: sectionSetting.title,
        content: /* @__PURE__ */ jsx(ConfigSection, { settings: sectionSetting.settings })
      }));
    }, [sectionSettings]);
    const [isDragging, setIsDragging] = reactExports.useState(false);
    const [spring, api] = J(
      () => ({
        opacity: visibility.config ? 1 : 0,
        scale: visibility.config ? 1 : 0,
        config: {
          ...mt.wobbly
        },
        onRest: () => {
          if (!visibility.config) {
            setDisplay(false);
          }
        }
      }),
      [visibility.config]
    );
    const [display, setDisplay] = reactExports.useState(false);
    reactExports.useEffect(() => {
      if (visibility.config) {
        setDisplay(true);
      }
    }, [visibility.config]);
    return /* @__PURE__ */ jsx(
      cjsExports,
      {
        handle: "#config-panel-menu-bar",
        cancel: "#config-panel-close-button",
        bounds: "body",
        onStart: () => {
          setIsDragging(true);
        },
        onStop: () => {
          setIsDragging(false);
        },
        children: /* @__PURE__ */ jsxs(
          ConfigPanelContainer,
          {
            id: "config-panel",
            style: {
              display: display ? "flex" : "none",
              ...spring
            },
            children: [
              /* @__PURE__ */ jsxs(
                MenuBar,
                {
                  id: "config-panel-menu-bar",
                  isDragging,
                  style: {
                    borderBottom: "2px solid black"
                  },
                  children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                  style: {
                    fontSize: 16,
                    fontWeight: 700
                  },
                  children: "偏好设置"
                      }
                    ),
                    /* @__PURE__ */ jsx(PopOver, { content: "关闭设置面板", children: /* @__PURE__ */ jsx(
                      MenuButton,
                      {
                        id: "config-panel-close-button",
                        "aria-label": "关闭设置面板",
                        style: {
                          lineHeight: "normal"
                        },
                        onClick: () => {
                          store.setVisibility("config", false);
                        },
                        children: /* @__PURE__ */ jsx(
                          Close,
                          {
                            theme: "filled",
                            size: "28",
                            fill: theme2.colors.error,
                            strokeWidth: 7
                          }
                        )
                      }
                    ) }, "config-panel-close-button")
                  ]
                }
              ),
              /* @__PURE__ */ jsx(TabContainer, { panel })
            ]
          }
        )
      }
    );
  }
  function FloatingBall() {
    const {
      visibility,
      position: { floating, log: log2 }
    } = useStore();
    const [isDragging, setIsDragging] = reactExports.useState(false);
    const inhaleColor = "limegreen";
    const exhaleColor = "rgba(84, 223, 130, 0.75)";
    const [spring, api] = J(() => ({
      from: {
        boxShadow: `0px 0px 5px 0px ${exhaleColor} inset`
      },
      to: [
        {
          boxShadow: `0px 0px 25px 0px ${inhaleColor} inset`
        },
        {
          boxShadow: `0px 0px 5px 0px ${exhaleColor} inset`
        }
      ],
      config: {
        // ...config.wobbly,
        duration: 3e3
      },
      loop: true
    }));
    return /* @__PURE__ */ jsx(
      cjsExports,
      {
        handle: "#floating-ball",
        bounds: "body",
        onStart: () => {
          setIsDragging(true);
        },
        onStop: (e2, data) => {
          setIsDragging(false);
        },
        children: /* @__PURE__ */ jsx(
          it.div,
          {
            id: "floating-ball",
            role: "button",
            tabIndex: 0,
            "aria-label": "WELearn 助手；双击打开记录面板",
            title: "双击打开助手面板，拖动可移动",
            onKeyDown: (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                store.setVisibility("floating", false);
                store.setVisibility("log", true);
              }
            },
            style: {
              position: "fixed",
              top: 100,
              right: 100,
              zIndex: 101,
              background: "rgba(255, 255, 255, 0.95)",
              // border: "black 2px solid",
              borderRadius: "50%",
              width: 70,
              height: 70,
              display: visibility.floating ? "flex" : "none",
              justifyContent: "center",
              alignItems: "center",
              cursor: isDragging ? "grabbing" : "grab",
              /* animation: `${breathing} s linear infinite`, */
              ...visibility.floating ? spring : {}
              // 避免动画在隐藏时执行
            },
            onDoubleClick: () => {
              store.setVisibility("floating", false);
              store.setVisibility("log", true);
            },
            children: /* @__PURE__ */ jsx(
              PopOver,
              {
                content: "双击悬浮球可以显示日志面板",
                disabled: isDragging,
                placement: "top",
                offsetPixel: 24,
                children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    style: {
                      width: "100%",
                      height: "100%"
                    },
                    children: jsxs("span", { className: "eocs-launcher-label", children: ["WE", jsx("small", { children: "助手" })] })
                  }
                )
              }
            )
          }
        )
      }
    );
  }
  const simplebar_min = "";
  var __extends$2 = globalThis && globalThis.__extends || function() {
    var extendStatics2 = function(d2, b2) {
      extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
        d3.__proto__ = b3;
      } || function(d3, b3) {
        for (var p2 in b3)
          if (Object.prototype.hasOwnProperty.call(b3, p2))
            d3[p2] = b3[p2];
      };
      return extendStatics2(d2, b2);
    };
    return function(d2, b2) {
      extendStatics2(d2, b2);
      function __() {
        this.constructor = d2;
      }
      d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
    };
  }();
  var __assign$4 = globalThis && globalThis.__assign || function() {
    __assign$4 = Object.assign || function(t2) {
      for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
        s2 = arguments[i2];
        for (var p2 in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p2))
            t2[p2] = s2[p2];
      }
      return t2;
    };
    return __assign$4.apply(this, arguments);
  };
  var styles = {
    top: {
      width: "100%",
      height: "10px",
      top: "-5px",
      left: "0px",
      cursor: "row-resize"
    },
    right: {
      width: "10px",
      height: "100%",
      top: "0px",
      right: "-5px",
      cursor: "col-resize"
    },
    bottom: {
      width: "100%",
      height: "10px",
      bottom: "-5px",
      left: "0px",
      cursor: "row-resize"
    },
    left: {
      width: "10px",
      height: "100%",
      top: "0px",
      left: "-5px",
      cursor: "col-resize"
    },
    topRight: {
      width: "20px",
      height: "20px",
      position: "absolute",
      right: "-10px",
      top: "-10px",
      cursor: "ne-resize"
    },
    bottomRight: {
      width: "20px",
      height: "20px",
      position: "absolute",
      right: "-10px",
      bottom: "-10px",
      cursor: "se-resize"
    },
    bottomLeft: {
      width: "20px",
      height: "20px",
      position: "absolute",
      left: "-10px",
      bottom: "-10px",
      cursor: "sw-resize"
    },
    topLeft: {
      width: "20px",
      height: "20px",
      position: "absolute",
      left: "-10px",
      top: "-10px",
      cursor: "nw-resize"
    }
  };
  var Resizer = (
    /** @class */
    function(_super) {
      __extends$2(Resizer2, _super);
      function Resizer2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onMouseDown = function(e2) {
          _this.props.onResizeStart(e2, _this.props.direction);
        };
        _this.onTouchStart = function(e2) {
          _this.props.onResizeStart(e2, _this.props.direction);
        };
        return _this;
      }
      Resizer2.prototype.render = function() {
        return reactExports.createElement("div", { className: this.props.className || "", style: __assign$4(__assign$4({ position: "absolute", userSelect: "none" }, styles[this.props.direction]), this.props.replaceStyles || {}), onMouseDown: this.onMouseDown, onTouchStart: this.onTouchStart }, this.props.children);
      };
      return Resizer2;
    }(reactExports.PureComponent)
  );
  var srcExports = {};
  var src = {
    get exports() {
      return srcExports;
    },
    set exports(v2) {
      srcExports = v2;
    }
  };
  function memoize(fn, options) {
    var cache = options && options.cache ? options.cache : cacheDefault;
    var serializer = options && options.serializer ? options.serializer : serializerDefault;
    var strategy = options && options.strategy ? options.strategy : strategyDefault;
    return strategy(fn, {
      cache,
      serializer
    });
  }
  function isPrimitive(value) {
    return value == null || typeof value === "number" || typeof value === "boolean";
  }
  function monadic(fn, cache, serializer, arg) {
    var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === "undefined") {
      computedValue = fn.call(this, arg);
      cache.set(cacheKey, computedValue);
    }
    return computedValue;
  }
  function variadic(fn, cache, serializer) {
    var args = Array.prototype.slice.call(arguments, 3);
    var cacheKey = serializer(args);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === "undefined") {
      computedValue = fn.apply(this, args);
      cache.set(cacheKey, computedValue);
    }
    return computedValue;
  }
  function assemble(fn, context, strategy, cache, serialize2) {
    return strategy.bind(
      context,
      fn,
      cache,
      serialize2
    );
  }
  function strategyDefault(fn, options) {
    var strategy = fn.length === 1 ? monadic : variadic;
    return assemble(
      fn,
      this,
      strategy,
      options.cache.create(),
      options.serializer
    );
  }
  function strategyVariadic(fn, options) {
    var strategy = variadic;
    return assemble(
      fn,
      this,
      strategy,
      options.cache.create(),
      options.serializer
    );
  }
  function strategyMonadic(fn, options) {
    var strategy = monadic;
    return assemble(
      fn,
      this,
      strategy,
      options.cache.create(),
      options.serializer
    );
  }
  function serializerDefault() {
    return JSON.stringify(arguments);
  }
  function ObjectWithoutPrototypeCache() {
    this.cache = /* @__PURE__ */ Object.create(null);
  }
  ObjectWithoutPrototypeCache.prototype.has = function(key) {
    return key in this.cache;
  };
  ObjectWithoutPrototypeCache.prototype.get = function(key) {
    return this.cache[key];
  };
  ObjectWithoutPrototypeCache.prototype.set = function(key, value) {
    this.cache[key] = value;
  };
  var cacheDefault = {
    create: function create() {
      return new ObjectWithoutPrototypeCache();
    }
  };
  src.exports = memoize;
  srcExports.strategies = {
    variadic: strategyVariadic,
    monadic: strategyMonadic
  };
  var __extends$1 = globalThis && globalThis.__extends || function() {
    var extendStatics2 = function(d2, b2) {
      extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
        d3.__proto__ = b3;
      } || function(d3, b3) {
        for (var p2 in b3)
          if (Object.prototype.hasOwnProperty.call(b3, p2))
            d3[p2] = b3[p2];
      };
      return extendStatics2(d2, b2);
    };
    return function(d2, b2) {
      extendStatics2(d2, b2);
      function __() {
        this.constructor = d2;
      }
      d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
    };
  }();
  var __assign$3 = globalThis && globalThis.__assign || function() {
    __assign$3 = Object.assign || function(t2) {
      for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
        s2 = arguments[i2];
        for (var p2 in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p2))
            t2[p2] = s2[p2];
      }
      return t2;
    };
    return __assign$3.apply(this, arguments);
  };
  var DEFAULT_SIZE = {
    width: "auto",
    height: "auto"
  };
  var clamp = srcExports(function(n2, min, max) {
    return Math.max(Math.min(n2, max), min);
  });
  var snap = srcExports(function(n2, size) {
    return Math.round(n2 / size) * size;
  });
  var hasDirection = srcExports(function(dir, target) {
    return new RegExp(dir, "i").test(target);
  });
  var isTouchEvent = function(event) {
    return Boolean(event.touches && event.touches.length);
  };
  var isMouseEvent = function(event) {
    return Boolean((event.clientX || event.clientX === 0) && (event.clientY || event.clientY === 0));
  };
  var findClosestSnap = srcExports(function(n2, snapArray, snapGap) {
    if (snapGap === void 0) {
      snapGap = 0;
    }
    var closestGapIndex = snapArray.reduce(function(prev2, curr, index2) {
      return Math.abs(curr - n2) < Math.abs(snapArray[prev2] - n2) ? index2 : prev2;
    }, 0);
    var gap = Math.abs(snapArray[closestGapIndex] - n2);
    return snapGap === 0 || gap < snapGap ? snapArray[closestGapIndex] : n2;
  });
  var endsWith = srcExports(function(str, searchStr) {
    return str.substr(str.length - searchStr.length, searchStr.length) === searchStr;
  });
  var getStringSize = srcExports(function(n2) {
    n2 = n2.toString();
    if (n2 === "auto") {
      return n2;
    }
    if (endsWith(n2, "px")) {
      return n2;
    }
    if (endsWith(n2, "%")) {
      return n2;
    }
    if (endsWith(n2, "vh")) {
      return n2;
    }
    if (endsWith(n2, "vw")) {
      return n2;
    }
    if (endsWith(n2, "vmax")) {
      return n2;
    }
    if (endsWith(n2, "vmin")) {
      return n2;
    }
    return n2 + "px";
  });
  var getPixelSize = function(size, parentSize, innerWidth2, innerHeight2) {
    if (size && typeof size === "string") {
      if (endsWith(size, "px")) {
        return Number(size.replace("px", ""));
      }
      if (endsWith(size, "%")) {
        var ratio = Number(size.replace("%", "")) / 100;
        return parentSize * ratio;
      }
      if (endsWith(size, "vw")) {
        var ratio = Number(size.replace("vw", "")) / 100;
        return innerWidth2 * ratio;
      }
      if (endsWith(size, "vh")) {
        var ratio = Number(size.replace("vh", "")) / 100;
        return innerHeight2 * ratio;
      }
    }
    return size;
  };
  var calculateNewMax = srcExports(function(parentSize, innerWidth2, innerHeight2, maxWidth, maxHeight, minWidth, minHeight) {
    maxWidth = getPixelSize(maxWidth, parentSize.width, innerWidth2, innerHeight2);
    maxHeight = getPixelSize(maxHeight, parentSize.height, innerWidth2, innerHeight2);
    minWidth = getPixelSize(minWidth, parentSize.width, innerWidth2, innerHeight2);
    minHeight = getPixelSize(minHeight, parentSize.height, innerWidth2, innerHeight2);
    return {
      maxWidth: typeof maxWidth === "undefined" ? void 0 : Number(maxWidth),
      maxHeight: typeof maxHeight === "undefined" ? void 0 : Number(maxHeight),
      minWidth: typeof minWidth === "undefined" ? void 0 : Number(minWidth),
      minHeight: typeof minHeight === "undefined" ? void 0 : Number(minHeight)
    };
  });
  var definedProps = [
    "as",
    "style",
    "className",
    "grid",
    "snap",
    "bounds",
    "boundsByDirection",
    "size",
    "defaultSize",
    "minWidth",
    "minHeight",
    "maxWidth",
    "maxHeight",
    "lockAspectRatio",
    "lockAspectRatioExtraWidth",
    "lockAspectRatioExtraHeight",
    "enable",
    "handleStyles",
    "handleClasses",
    "handleWrapperStyle",
    "handleWrapperClass",
    "children",
    "onResizeStart",
    "onResize",
    "onResizeStop",
    "handleComponent",
    "scale",
    "resizeRatio",
    "snapGap"
  ];
  var baseClassName = "__resizable_base__";
  var Resizable = (
    /** @class */
    function(_super) {
      __extends$1(Resizable2, _super);
      function Resizable2(props) {
        var _this = _super.call(this, props) || this;
        _this.ratio = 1;
        _this.resizable = null;
        _this.parentLeft = 0;
        _this.parentTop = 0;
        _this.resizableLeft = 0;
        _this.resizableRight = 0;
        _this.resizableTop = 0;
        _this.resizableBottom = 0;
        _this.targetLeft = 0;
        _this.targetTop = 0;
        _this.appendBase = function() {
          if (!_this.resizable || !_this.window) {
            return null;
          }
          var parent = _this.parentNode;
          if (!parent) {
            return null;
          }
          var element = _this.window.document.createElement("div");
          element.style.width = "100%";
          element.style.height = "100%";
          element.style.position = "absolute";
          element.style.transform = "scale(0, 0)";
          element.style.left = "0";
          element.style.flex = "0 0 100%";
          if (element.classList) {
            element.classList.add(baseClassName);
          } else {
            element.className += baseClassName;
          }
          parent.appendChild(element);
          return element;
        };
        _this.removeBase = function(base) {
          var parent = _this.parentNode;
          if (!parent) {
            return;
          }
          parent.removeChild(base);
        };
        _this.ref = function(c2) {
          if (c2) {
            _this.resizable = c2;
          }
        };
        _this.state = {
          isResizing: false,
          width: typeof (_this.propsSize && _this.propsSize.width) === "undefined" ? "auto" : _this.propsSize && _this.propsSize.width,
          height: typeof (_this.propsSize && _this.propsSize.height) === "undefined" ? "auto" : _this.propsSize && _this.propsSize.height,
          direction: "right",
          original: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          },
          backgroundStyle: {
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0,0,0,0)",
            cursor: "auto",
            opacity: 0,
            position: "fixed",
            zIndex: 9999,
            top: "0",
            left: "0",
            bottom: "0",
            right: "0"
          },
          flexBasis: void 0
        };
        _this.onResizeStart = _this.onResizeStart.bind(_this);
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        _this.onMouseUp = _this.onMouseUp.bind(_this);
        return _this;
      }
      Object.defineProperty(Resizable2.prototype, "parentNode", {
        get: function() {
          if (!this.resizable) {
            return null;
          }
          return this.resizable.parentNode;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Resizable2.prototype, "window", {
        get: function() {
          if (!this.resizable) {
            return null;
          }
          if (!this.resizable.ownerDocument) {
            return null;
          }
          return this.resizable.ownerDocument.defaultView;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Resizable2.prototype, "propsSize", {
        get: function() {
          return this.props.size || this.props.defaultSize || DEFAULT_SIZE;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Resizable2.prototype, "size", {
        get: function() {
          var width = 0;
          var height = 0;
          if (this.resizable && this.window) {
            var orgWidth = this.resizable.offsetWidth;
            var orgHeight = this.resizable.offsetHeight;
            var orgPosition = this.resizable.style.position;
            if (orgPosition !== "relative") {
              this.resizable.style.position = "relative";
            }
            width = this.resizable.style.width !== "auto" ? this.resizable.offsetWidth : orgWidth;
            height = this.resizable.style.height !== "auto" ? this.resizable.offsetHeight : orgHeight;
            this.resizable.style.position = orgPosition;
          }
          return { width, height };
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Resizable2.prototype, "sizeStyle", {
        get: function() {
          var _this = this;
          var size = this.props.size;
          var getSize = function(key) {
            if (typeof _this.state[key] === "undefined" || _this.state[key] === "auto") {
              return "auto";
            }
            if (_this.propsSize && _this.propsSize[key] && endsWith(_this.propsSize[key].toString(), "%")) {
              if (endsWith(_this.state[key].toString(), "%")) {
                return _this.state[key].toString();
              }
              var parentSize = _this.getParentSize();
              var value = Number(_this.state[key].toString().replace("px", ""));
              var percent = value / parentSize[key] * 100;
              return percent + "%";
            }
            return getStringSize(_this.state[key]);
          };
          var width = size && typeof size.width !== "undefined" && !this.state.isResizing ? getStringSize(size.width) : getSize("width");
          var height = size && typeof size.height !== "undefined" && !this.state.isResizing ? getStringSize(size.height) : getSize("height");
          return { width, height };
        },
        enumerable: false,
        configurable: true
      });
      Resizable2.prototype.getParentSize = function() {
        if (!this.parentNode) {
          if (!this.window) {
            return { width: 0, height: 0 };
          }
          return { width: this.window.innerWidth, height: this.window.innerHeight };
        }
        var base = this.appendBase();
        if (!base) {
          return { width: 0, height: 0 };
        }
        var wrapChanged = false;
        var wrap = this.parentNode.style.flexWrap;
        if (wrap !== "wrap") {
          wrapChanged = true;
          this.parentNode.style.flexWrap = "wrap";
        }
        base.style.position = "relative";
        base.style.minWidth = "100%";
        base.style.minHeight = "100%";
        var size = {
          width: base.offsetWidth,
          height: base.offsetHeight
        };
        if (wrapChanged) {
          this.parentNode.style.flexWrap = wrap;
        }
        this.removeBase(base);
        return size;
      };
      Resizable2.prototype.bindEvents = function() {
        if (this.window) {
          this.window.addEventListener("mouseup", this.onMouseUp);
          this.window.addEventListener("mousemove", this.onMouseMove);
          this.window.addEventListener("mouseleave", this.onMouseUp);
          this.window.addEventListener("touchmove", this.onMouseMove, {
            capture: true,
            passive: false
          });
          this.window.addEventListener("touchend", this.onMouseUp);
        }
      };
      Resizable2.prototype.unbindEvents = function() {
        if (this.window) {
          this.window.removeEventListener("mouseup", this.onMouseUp);
          this.window.removeEventListener("mousemove", this.onMouseMove);
          this.window.removeEventListener("mouseleave", this.onMouseUp);
          this.window.removeEventListener("touchmove", this.onMouseMove, true);
          this.window.removeEventListener("touchend", this.onMouseUp);
        }
      };
      Resizable2.prototype.componentDidMount = function() {
        if (!this.resizable || !this.window) {
          return;
        }
        var computedStyle = this.window.getComputedStyle(this.resizable);
        this.setState({
          width: this.state.width || this.size.width,
          height: this.state.height || this.size.height,
          flexBasis: computedStyle.flexBasis !== "auto" ? computedStyle.flexBasis : void 0
        });
      };
      Resizable2.prototype.componentWillUnmount = function() {
        if (this.window) {
          this.unbindEvents();
        }
      };
      Resizable2.prototype.createSizeForCssProperty = function(newSize, kind) {
        var propsSize = this.propsSize && this.propsSize[kind];
        return this.state[kind] === "auto" && this.state.original[kind] === newSize && (typeof propsSize === "undefined" || propsSize === "auto") ? "auto" : newSize;
      };
      Resizable2.prototype.calculateNewMaxFromBoundary = function(maxWidth, maxHeight) {
        var boundsByDirection = this.props.boundsByDirection;
        var direction = this.state.direction;
        var widthByDirection = boundsByDirection && hasDirection("left", direction);
        var heightByDirection = boundsByDirection && hasDirection("top", direction);
        var boundWidth;
        var boundHeight;
        if (this.props.bounds === "parent") {
          var parent_1 = this.parentNode;
          if (parent_1) {
            boundWidth = widthByDirection ? this.resizableRight - this.parentLeft : parent_1.offsetWidth + (this.parentLeft - this.resizableLeft);
            boundHeight = heightByDirection ? this.resizableBottom - this.parentTop : parent_1.offsetHeight + (this.parentTop - this.resizableTop);
          }
        } else if (this.props.bounds === "window") {
          if (this.window) {
            boundWidth = widthByDirection ? this.resizableRight : this.window.innerWidth - this.resizableLeft;
            boundHeight = heightByDirection ? this.resizableBottom : this.window.innerHeight - this.resizableTop;
          }
        } else if (this.props.bounds) {
          boundWidth = widthByDirection ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft);
          boundHeight = heightByDirection ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop);
        }
        if (boundWidth && Number.isFinite(boundWidth)) {
          maxWidth = maxWidth && maxWidth < boundWidth ? maxWidth : boundWidth;
        }
        if (boundHeight && Number.isFinite(boundHeight)) {
          maxHeight = maxHeight && maxHeight < boundHeight ? maxHeight : boundHeight;
        }
        return { maxWidth, maxHeight };
      };
      Resizable2.prototype.calculateNewSizeFromDirection = function(clientX, clientY) {
        var scale = this.props.scale || 1;
        var resizeRatio = this.props.resizeRatio || 1;
        var _a2 = this.state, direction = _a2.direction, original = _a2.original;
        var _b2 = this.props, lockAspectRatio = _b2.lockAspectRatio, lockAspectRatioExtraHeight = _b2.lockAspectRatioExtraHeight, lockAspectRatioExtraWidth = _b2.lockAspectRatioExtraWidth;
        var newWidth = original.width;
        var newHeight = original.height;
        var extraHeight = lockAspectRatioExtraHeight || 0;
        var extraWidth = lockAspectRatioExtraWidth || 0;
        if (hasDirection("right", direction)) {
          newWidth = original.width + (clientX - original.x) * resizeRatio / scale;
          if (lockAspectRatio) {
            newHeight = (newWidth - extraWidth) / this.ratio + extraHeight;
          }
        }
        if (hasDirection("left", direction)) {
          newWidth = original.width - (clientX - original.x) * resizeRatio / scale;
          if (lockAspectRatio) {
            newHeight = (newWidth - extraWidth) / this.ratio + extraHeight;
          }
        }
        if (hasDirection("bottom", direction)) {
          newHeight = original.height + (clientY - original.y) * resizeRatio / scale;
          if (lockAspectRatio) {
            newWidth = (newHeight - extraHeight) * this.ratio + extraWidth;
          }
        }
        if (hasDirection("top", direction)) {
          newHeight = original.height - (clientY - original.y) * resizeRatio / scale;
          if (lockAspectRatio) {
            newWidth = (newHeight - extraHeight) * this.ratio + extraWidth;
          }
        }
        return { newWidth, newHeight };
      };
      Resizable2.prototype.calculateNewSizeFromAspectRatio = function(newWidth, newHeight, max, min) {
        var _a2 = this.props, lockAspectRatio = _a2.lockAspectRatio, lockAspectRatioExtraHeight = _a2.lockAspectRatioExtraHeight, lockAspectRatioExtraWidth = _a2.lockAspectRatioExtraWidth;
        var computedMinWidth = typeof min.width === "undefined" ? 10 : min.width;
        var computedMaxWidth = typeof max.width === "undefined" || max.width < 0 ? newWidth : max.width;
        var computedMinHeight = typeof min.height === "undefined" ? 10 : min.height;
        var computedMaxHeight = typeof max.height === "undefined" || max.height < 0 ? newHeight : max.height;
        var extraHeight = lockAspectRatioExtraHeight || 0;
        var extraWidth = lockAspectRatioExtraWidth || 0;
        if (lockAspectRatio) {
          var extraMinWidth = (computedMinHeight - extraHeight) * this.ratio + extraWidth;
          var extraMaxWidth = (computedMaxHeight - extraHeight) * this.ratio + extraWidth;
          var extraMinHeight = (computedMinWidth - extraWidth) / this.ratio + extraHeight;
          var extraMaxHeight = (computedMaxWidth - extraWidth) / this.ratio + extraHeight;
          var lockedMinWidth = Math.max(computedMinWidth, extraMinWidth);
          var lockedMaxWidth = Math.min(computedMaxWidth, extraMaxWidth);
          var lockedMinHeight = Math.max(computedMinHeight, extraMinHeight);
          var lockedMaxHeight = Math.min(computedMaxHeight, extraMaxHeight);
          newWidth = clamp(newWidth, lockedMinWidth, lockedMaxWidth);
          newHeight = clamp(newHeight, lockedMinHeight, lockedMaxHeight);
        } else {
          newWidth = clamp(newWidth, computedMinWidth, computedMaxWidth);
          newHeight = clamp(newHeight, computedMinHeight, computedMaxHeight);
        }
        return { newWidth, newHeight };
      };
      Resizable2.prototype.setBoundingClientRect = function() {
        if (this.props.bounds === "parent") {
          var parent_2 = this.parentNode;
          if (parent_2) {
            var parentRect = parent_2.getBoundingClientRect();
            this.parentLeft = parentRect.left;
            this.parentTop = parentRect.top;
          }
        }
        if (this.props.bounds && typeof this.props.bounds !== "string") {
          var targetRect = this.props.bounds.getBoundingClientRect();
          this.targetLeft = targetRect.left;
          this.targetTop = targetRect.top;
        }
        if (this.resizable) {
          var _a2 = this.resizable.getBoundingClientRect(), left = _a2.left, top_1 = _a2.top, right = _a2.right, bottom = _a2.bottom;
          this.resizableLeft = left;
          this.resizableRight = right;
          this.resizableTop = top_1;
          this.resizableBottom = bottom;
        }
      };
      Resizable2.prototype.onResizeStart = function(event, direction) {
        if (!this.resizable || !this.window) {
          return;
        }
        var clientX = 0;
        var clientY = 0;
        if (event.nativeEvent && isMouseEvent(event.nativeEvent)) {
          clientX = event.nativeEvent.clientX;
          clientY = event.nativeEvent.clientY;
        } else if (event.nativeEvent && isTouchEvent(event.nativeEvent)) {
          clientX = event.nativeEvent.touches[0].clientX;
          clientY = event.nativeEvent.touches[0].clientY;
        }
        if (this.props.onResizeStart) {
          if (this.resizable) {
            var startResize = this.props.onResizeStart(event, direction, this.resizable);
            if (startResize === false) {
              return;
            }
          }
        }
        if (this.props.size) {
          if (typeof this.props.size.height !== "undefined" && this.props.size.height !== this.state.height) {
            this.setState({ height: this.props.size.height });
          }
          if (typeof this.props.size.width !== "undefined" && this.props.size.width !== this.state.width) {
            this.setState({ width: this.props.size.width });
          }
        }
        this.ratio = typeof this.props.lockAspectRatio === "number" ? this.props.lockAspectRatio : this.size.width / this.size.height;
        var flexBasis;
        var computedStyle = this.window.getComputedStyle(this.resizable);
        if (computedStyle.flexBasis !== "auto") {
          var parent_3 = this.parentNode;
          if (parent_3) {
            var dir = this.window.getComputedStyle(parent_3).flexDirection;
            this.flexDir = dir.startsWith("row") ? "row" : "column";
            flexBasis = computedStyle.flexBasis;
          }
        }
        this.setBoundingClientRect();
        this.bindEvents();
        var state = {
          original: {
            x: clientX,
            y: clientY,
            width: this.size.width,
            height: this.size.height
          },
          isResizing: true,
          backgroundStyle: __assign$3(__assign$3({}, this.state.backgroundStyle), { cursor: this.window.getComputedStyle(event.target).cursor || "auto" }),
          direction,
          flexBasis
        };
        this.setState(state);
      };
      Resizable2.prototype.onMouseMove = function(event) {
        if (!this.state.isResizing || !this.resizable || !this.window) {
          return;
        }
        if (this.window.TouchEvent && isTouchEvent(event)) {
          try {
            event.preventDefault();
            event.stopPropagation();
          } catch (e2) {
          }
        }
        var _a2 = this.props, maxWidth = _a2.maxWidth, maxHeight = _a2.maxHeight, minWidth = _a2.minWidth, minHeight = _a2.minHeight;
        var clientX = isTouchEvent(event) ? event.touches[0].clientX : event.clientX;
        var clientY = isTouchEvent(event) ? event.touches[0].clientY : event.clientY;
        var _b2 = this.state, direction = _b2.direction, original = _b2.original, width = _b2.width, height = _b2.height;
        var parentSize = this.getParentSize();
        var max = calculateNewMax(parentSize, this.window.innerWidth, this.window.innerHeight, maxWidth, maxHeight, minWidth, minHeight);
        maxWidth = max.maxWidth;
        maxHeight = max.maxHeight;
        minWidth = max.minWidth;
        minHeight = max.minHeight;
        var _c2 = this.calculateNewSizeFromDirection(clientX, clientY), newHeight = _c2.newHeight, newWidth = _c2.newWidth;
        var boundaryMax = this.calculateNewMaxFromBoundary(maxWidth, maxHeight);
        if (this.props.snap && this.props.snap.x) {
          newWidth = findClosestSnap(newWidth, this.props.snap.x, this.props.snapGap);
        }
        if (this.props.snap && this.props.snap.y) {
          newHeight = findClosestSnap(newHeight, this.props.snap.y, this.props.snapGap);
        }
        var newSize = this.calculateNewSizeFromAspectRatio(newWidth, newHeight, { width: boundaryMax.maxWidth, height: boundaryMax.maxHeight }, { width: minWidth, height: minHeight });
        newWidth = newSize.newWidth;
        newHeight = newSize.newHeight;
        if (this.props.grid) {
          var newGridWidth = snap(newWidth, this.props.grid[0]);
          var newGridHeight = snap(newHeight, this.props.grid[1]);
          var gap = this.props.snapGap || 0;
          newWidth = gap === 0 || Math.abs(newGridWidth - newWidth) <= gap ? newGridWidth : newWidth;
          newHeight = gap === 0 || Math.abs(newGridHeight - newHeight) <= gap ? newGridHeight : newHeight;
        }
        var delta = {
          width: newWidth - original.width,
          height: newHeight - original.height
        };
        if (width && typeof width === "string") {
          if (endsWith(width, "%")) {
            var percent = newWidth / parentSize.width * 100;
            newWidth = percent + "%";
          } else if (endsWith(width, "vw")) {
            var vw = newWidth / this.window.innerWidth * 100;
            newWidth = vw + "vw";
          } else if (endsWith(width, "vh")) {
            var vh2 = newWidth / this.window.innerHeight * 100;
            newWidth = vh2 + "vh";
          }
        }
        if (height && typeof height === "string") {
          if (endsWith(height, "%")) {
            var percent = newHeight / parentSize.height * 100;
            newHeight = percent + "%";
          } else if (endsWith(height, "vw")) {
            var vw = newHeight / this.window.innerWidth * 100;
            newHeight = vw + "vw";
          } else if (endsWith(height, "vh")) {
            var vh2 = newHeight / this.window.innerHeight * 100;
            newHeight = vh2 + "vh";
          }
        }
        var newState = {
          width: this.createSizeForCssProperty(newWidth, "width"),
          height: this.createSizeForCssProperty(newHeight, "height")
        };
        if (this.flexDir === "row") {
          newState.flexBasis = newState.width;
        } else if (this.flexDir === "column") {
          newState.flexBasis = newState.height;
        }
        this.setState(newState);
        if (this.props.onResize) {
          this.props.onResize(event, direction, this.resizable, delta);
        }
      };
      Resizable2.prototype.onMouseUp = function(event) {
        var _a2 = this.state, isResizing = _a2.isResizing, direction = _a2.direction, original = _a2.original;
        if (!isResizing || !this.resizable) {
          return;
        }
        var delta = {
          width: this.size.width - original.width,
          height: this.size.height - original.height
        };
        if (this.props.onResizeStop) {
          this.props.onResizeStop(event, direction, this.resizable, delta);
        }
        if (this.props.size) {
          this.setState(this.props.size);
        }
        this.unbindEvents();
        this.setState({
          isResizing: false,
          backgroundStyle: __assign$3(__assign$3({}, this.state.backgroundStyle), { cursor: "auto" })
        });
      };
      Resizable2.prototype.updateSize = function(size) {
        this.setState({ width: size.width, height: size.height });
      };
      Resizable2.prototype.renderResizer = function() {
        var _this = this;
        var _a2 = this.props, enable = _a2.enable, handleStyles = _a2.handleStyles, handleClasses = _a2.handleClasses, handleWrapperStyle = _a2.handleWrapperStyle, handleWrapperClass = _a2.handleWrapperClass, handleComponent = _a2.handleComponent;
        if (!enable) {
          return null;
        }
        var resizers = Object.keys(enable).map(function(dir) {
          if (enable[dir] !== false) {
            return reactExports.createElement(Resizer, { key: dir, direction: dir, onResizeStart: _this.onResizeStart, replaceStyles: handleStyles && handleStyles[dir], className: handleClasses && handleClasses[dir] }, handleComponent && handleComponent[dir] ? handleComponent[dir] : null);
          }
          return null;
        });
        return reactExports.createElement("div", { className: handleWrapperClass, style: handleWrapperStyle }, resizers);
      };
      Resizable2.prototype.render = function() {
        var _this = this;
        var extendsProps = Object.keys(this.props).reduce(function(acc, key) {
          if (definedProps.indexOf(key) !== -1) {
            return acc;
          }
          acc[key] = _this.props[key];
          return acc;
        }, {});
        var style = __assign$3(__assign$3(__assign$3({ position: "relative", userSelect: this.state.isResizing ? "none" : "auto" }, this.props.style), this.sizeStyle), { maxWidth: this.props.maxWidth, maxHeight: this.props.maxHeight, minWidth: this.props.minWidth, minHeight: this.props.minHeight, boxSizing: "border-box", flexShrink: 0 });
        if (this.state.flexBasis) {
          style.flexBasis = this.state.flexBasis;
        }
        var Wrapper = this.props.as || "div";
        return reactExports.createElement(
          Wrapper,
          __assign$3({ ref: this.ref, style, className: this.props.className }, extendsProps),
          this.state.isResizing && reactExports.createElement("div", { style: this.state.backgroundStyle }),
          this.props.children,
          this.renderResizer()
        );
      };
      Resizable2.defaultProps = {
        as: "div",
        onResizeStart: function() {
        },
        onResize: function() {
        },
        onResizeStop: function() {
        },
        enable: {
          top: true,
          right: true,
          bottom: true,
          left: true,
          topRight: true,
          bottomRight: true,
          bottomLeft: true,
          topLeft: true
        },
        style: {},
        grid: [1, 1],
        lockAspectRatio: false,
        lockAspectRatioExtraWidth: 0,
        lockAspectRatioExtraHeight: 0,
        scale: 1,
        resizeRatio: 1,
        snapGap: 0
      };
      return Resizable2;
    }(reactExports.PureComponent)
  );
  /*! *****************************************************************************
  	Copyright (c) Microsoft Corporation. All rights reserved.
  	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  	this file except in compliance with the License. You may obtain a copy of the
  	License at http://www.apache.org/licenses/LICENSE-2.0
  
  	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  	MERCHANTABLITY OR NON-INFRINGEMENT.
  
  	See the Apache Version 2.0 License for specific language governing permissions
  	and limitations under the License.
  	***************************************************************************** */
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p2 in b3)
        if (b3.hasOwnProperty(p2))
          d3[p2] = b3[p2];
    };
    return extendStatics(d2, b2);
  };
  function __extends(d2, b2) {
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  }
  var __assign$2 = function() {
    __assign$2 = Object.assign || function __assign2(t2) {
      for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
        s2 = arguments[i2];
        for (var p2 in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p2))
            t2[p2] = s2[p2];
      }
      return t2;
    };
    return __assign$2.apply(this, arguments);
  };
  function __rest$1(s2, e2) {
    var t2 = {};
    for (var p2 in s2)
      if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
        if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
          t2[p2[i2]] = s2[p2[i2]];
      }
    return t2;
  }
  var Draggable = cjsExports;
  var resizableStyle = {
    width: "auto",
    height: "auto",
    display: "inline-block",
    position: "absolute",
    top: 0,
    left: 0
  };
  var getEnableResizingByFlag = function(flag) {
    return {
      bottom: flag,
      bottomLeft: flag,
      bottomRight: flag,
      left: flag,
      right: flag,
      top: flag,
      topLeft: flag,
      topRight: flag
    };
  };
  var Rnd = (
    /** @class */
    function(_super) {
      __extends(Rnd2, _super);
      function Rnd2(props) {
        var _this = _super.call(this, props) || this;
        _this.resizingPosition = { x: 0, y: 0 };
        _this.offsetFromParent = { left: 0, top: 0 };
        _this.resizableElement = { current: null };
        _this.originalPosition = { x: 0, y: 0 };
        _this.refDraggable = function(c2) {
          if (!c2)
            return;
          _this.draggable = c2;
        };
        _this.refResizable = function(c2) {
          if (!c2)
            return;
          _this.resizable = c2;
          _this.resizableElement.current = c2.resizable;
        };
        _this.state = {
          resizing: false,
          bounds: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          maxWidth: props.maxWidth,
          maxHeight: props.maxHeight
        };
        _this.onResizeStart = _this.onResizeStart.bind(_this);
        _this.onResize = _this.onResize.bind(_this);
        _this.onResizeStop = _this.onResizeStop.bind(_this);
        _this.onDragStart = _this.onDragStart.bind(_this);
        _this.onDrag = _this.onDrag.bind(_this);
        _this.onDragStop = _this.onDragStop.bind(_this);
        _this.getMaxSizesFromProps = _this.getMaxSizesFromProps.bind(_this);
        return _this;
      }
      Rnd2.prototype.componentDidMount = function() {
        this.updateOffsetFromParent();
        var _a2 = this.offsetFromParent, left = _a2.left, top2 = _a2.top;
        var _b2 = this.getDraggablePosition(), x2 = _b2.x, y2 = _b2.y;
        this.draggable.setState({
          x: x2 - left,
          y: y2 - top2
        });
        this.forceUpdate();
      };
      Rnd2.prototype.getDraggablePosition = function() {
        var _a2 = this.draggable.state, x2 = _a2.x, y2 = _a2.y;
        return { x: x2, y: y2 };
      };
      Rnd2.prototype.getParent = function() {
        return this.resizable && this.resizable.parentNode;
      };
      Rnd2.prototype.getParentSize = function() {
        return this.resizable.getParentSize();
      };
      Rnd2.prototype.getMaxSizesFromProps = function() {
        var maxWidth = typeof this.props.maxWidth === "undefined" ? Number.MAX_SAFE_INTEGER : this.props.maxWidth;
        var maxHeight = typeof this.props.maxHeight === "undefined" ? Number.MAX_SAFE_INTEGER : this.props.maxHeight;
        return { maxWidth, maxHeight };
      };
      Rnd2.prototype.getSelfElement = function() {
        return this.resizable && this.resizable.resizable;
      };
      Rnd2.prototype.getOffsetHeight = function(boundary) {
        var scale = this.props.scale;
        switch (this.props.bounds) {
          case "window":
            return window.innerHeight / scale;
          case "body":
            return document.body.offsetHeight / scale;
          default:
            return boundary.offsetHeight;
        }
      };
      Rnd2.prototype.getOffsetWidth = function(boundary) {
        var scale = this.props.scale;
        switch (this.props.bounds) {
          case "window":
            return window.innerWidth / scale;
          case "body":
            return document.body.offsetWidth / scale;
          default:
            return boundary.offsetWidth;
        }
      };
      Rnd2.prototype.onDragStart = function(e2, data) {
        if (this.props.onDragStart) {
          this.props.onDragStart(e2, data);
        }
        var pos = this.getDraggablePosition();
        this.originalPosition = pos;
        if (!this.props.bounds)
          return;
        var parent = this.getParent();
        var scale = this.props.scale;
        var boundary;
        if (this.props.bounds === "parent") {
          boundary = parent;
        } else if (this.props.bounds === "body") {
          var parentRect_1 = parent.getBoundingClientRect();
          var parentLeft_1 = parentRect_1.left;
          var parentTop_1 = parentRect_1.top;
          var bodyRect = document.body.getBoundingClientRect();
          var left_1 = -(parentLeft_1 - parent.offsetLeft * scale - bodyRect.left) / scale;
          var top_1 = -(parentTop_1 - parent.offsetTop * scale - bodyRect.top) / scale;
          var right = (document.body.offsetWidth - this.resizable.size.width * scale) / scale + left_1;
          var bottom = (document.body.offsetHeight - this.resizable.size.height * scale) / scale + top_1;
          return this.setState({ bounds: { top: top_1, right, bottom, left: left_1 } });
        } else if (this.props.bounds === "window") {
          if (!this.resizable)
            return;
          var parentRect_2 = parent.getBoundingClientRect();
          var parentLeft_2 = parentRect_2.left;
          var parentTop_2 = parentRect_2.top;
          var left_2 = -(parentLeft_2 - parent.offsetLeft * scale) / scale;
          var top_2 = -(parentTop_2 - parent.offsetTop * scale) / scale;
          var right = (window.innerWidth - this.resizable.size.width * scale) / scale + left_2;
          var bottom = (window.innerHeight - this.resizable.size.height * scale) / scale + top_2;
          return this.setState({ bounds: { top: top_2, right, bottom, left: left_2 } });
        } else if (typeof this.props.bounds === "string") {
          boundary = document.querySelector(this.props.bounds);
        } else if (this.props.bounds instanceof HTMLElement) {
          boundary = this.props.bounds;
        }
        if (!(boundary instanceof HTMLElement) || !(parent instanceof HTMLElement)) {
          return;
        }
        var boundaryRect = boundary.getBoundingClientRect();
        var boundaryLeft = boundaryRect.left;
        var boundaryTop = boundaryRect.top;
        var parentRect = parent.getBoundingClientRect();
        var parentLeft = parentRect.left;
        var parentTop = parentRect.top;
        var left = (boundaryLeft - parentLeft) / scale;
        var top2 = boundaryTop - parentTop;
        if (!this.resizable)
          return;
        this.updateOffsetFromParent();
        var offset = this.offsetFromParent;
        this.setState({
          bounds: {
            top: top2 - offset.top,
            right: left + (boundary.offsetWidth - this.resizable.size.width) - offset.left / scale,
            bottom: top2 + (boundary.offsetHeight - this.resizable.size.height) - offset.top,
            left: left - offset.left / scale
          }
        });
      };
      Rnd2.prototype.onDrag = function(e2, data) {
        if (!this.props.onDrag)
          return;
        var _a2 = this.offsetFromParent, left = _a2.left, top2 = _a2.top;
        if (!this.props.dragAxis || this.props.dragAxis === "both") {
          return this.props.onDrag(e2, __assign$2(__assign$2({}, data), { x: data.x - left, y: data.y - top2 }));
        } else if (this.props.dragAxis === "x") {
          return this.props.onDrag(e2, __assign$2(__assign$2({}, data), { x: data.x + left, y: this.originalPosition.y + top2, deltaY: 0 }));
        } else if (this.props.dragAxis === "y") {
          return this.props.onDrag(e2, __assign$2(__assign$2({}, data), { x: this.originalPosition.x + left, y: data.y + top2, deltaX: 0 }));
        }
      };
      Rnd2.prototype.onDragStop = function(e2, data) {
        if (!this.props.onDragStop)
          return;
        var _a2 = this.offsetFromParent, left = _a2.left, top2 = _a2.top;
        if (!this.props.dragAxis || this.props.dragAxis === "both") {
          return this.props.onDragStop(e2, __assign$2(__assign$2({}, data), { x: data.x + left, y: data.y + top2 }));
        } else if (this.props.dragAxis === "x") {
          return this.props.onDragStop(e2, __assign$2(__assign$2({}, data), { x: data.x + left, y: this.originalPosition.y + top2, deltaY: 0 }));
        } else if (this.props.dragAxis === "y") {
          return this.props.onDragStop(e2, __assign$2(__assign$2({}, data), { x: this.originalPosition.x + left, y: data.y + top2, deltaX: 0 }));
        }
      };
      Rnd2.prototype.onResizeStart = function(e2, dir, elementRef) {
        e2.stopPropagation();
        this.setState({
          resizing: true
        });
        var scale = this.props.scale;
        var offset = this.offsetFromParent;
        var pos = this.getDraggablePosition();
        this.resizingPosition = { x: pos.x + offset.left, y: pos.y + offset.top };
        this.originalPosition = pos;
        if (this.props.bounds) {
          var parent_1 = this.getParent();
          var boundary = void 0;
          if (this.props.bounds === "parent") {
            boundary = parent_1;
          } else if (this.props.bounds === "body") {
            boundary = document.body;
          } else if (this.props.bounds === "window") {
            boundary = window;
          } else if (typeof this.props.bounds === "string") {
            boundary = document.querySelector(this.props.bounds);
          } else if (this.props.bounds instanceof HTMLElement) {
            boundary = this.props.bounds;
          }
          var self_1 = this.getSelfElement();
          if (self_1 instanceof Element && (boundary instanceof HTMLElement || boundary === window) && parent_1 instanceof HTMLElement) {
            var _a2 = this.getMaxSizesFromProps(), maxWidth = _a2.maxWidth, maxHeight = _a2.maxHeight;
            var parentSize = this.getParentSize();
            if (maxWidth && typeof maxWidth === "string") {
              if (maxWidth.endsWith("%")) {
                var ratio = Number(maxWidth.replace("%", "")) / 100;
                maxWidth = parentSize.width * ratio;
              } else if (maxWidth.endsWith("px")) {
                maxWidth = Number(maxWidth.replace("px", ""));
              }
            }
            if (maxHeight && typeof maxHeight === "string") {
              if (maxHeight.endsWith("%")) {
                var ratio = Number(maxHeight.replace("%", "")) / 100;
                maxHeight = parentSize.width * ratio;
              } else if (maxHeight.endsWith("px")) {
                maxHeight = Number(maxHeight.replace("px", ""));
              }
            }
            var selfRect = self_1.getBoundingClientRect();
            var selfLeft = selfRect.left;
            var selfTop = selfRect.top;
            var boundaryRect = this.props.bounds === "window" ? { left: 0, top: 0 } : boundary.getBoundingClientRect();
            var boundaryLeft = boundaryRect.left;
            var boundaryTop = boundaryRect.top;
            var offsetWidth = this.getOffsetWidth(boundary);
            var offsetHeight = this.getOffsetHeight(boundary);
            var hasLeft = dir.toLowerCase().endsWith("left");
            var hasRight = dir.toLowerCase().endsWith("right");
            var hasTop = dir.startsWith("top");
            var hasBottom = dir.startsWith("bottom");
            if ((hasLeft || hasTop) && this.resizable) {
              var max = (selfLeft - boundaryLeft) / scale + this.resizable.size.width;
              this.setState({ maxWidth: max > Number(maxWidth) ? maxWidth : max });
            }
            if (hasRight || this.props.lockAspectRatio && !hasLeft && !hasTop) {
              var max = offsetWidth + (boundaryLeft - selfLeft) / scale;
              this.setState({ maxWidth: max > Number(maxWidth) ? maxWidth : max });
            }
            if ((hasTop || hasLeft) && this.resizable) {
              var max = (selfTop - boundaryTop) / scale + this.resizable.size.height;
              this.setState({
                maxHeight: max > Number(maxHeight) ? maxHeight : max
              });
            }
            if (hasBottom || this.props.lockAspectRatio && !hasTop && !hasLeft) {
              var max = offsetHeight + (boundaryTop - selfTop) / scale;
              this.setState({
                maxHeight: max > Number(maxHeight) ? maxHeight : max
              });
            }
          }
        } else {
          this.setState({
            maxWidth: this.props.maxWidth,
            maxHeight: this.props.maxHeight
          });
        }
        if (this.props.onResizeStart) {
          this.props.onResizeStart(e2, dir, elementRef);
        }
      };
      Rnd2.prototype.onResize = function(e2, direction, elementRef, delta) {
        var newPos = { x: this.originalPosition.x, y: this.originalPosition.y };
        var left = -delta.width;
        var top2 = -delta.height;
        var directions = ["top", "left", "topLeft", "bottomLeft", "topRight"];
        if (directions.indexOf(direction) !== -1) {
          if (direction === "bottomLeft") {
            newPos.x += left;
          } else if (direction === "topRight") {
            newPos.y += top2;
          } else {
            newPos.x += left;
            newPos.y += top2;
          }
        }
        if (newPos.x !== this.draggable.state.x || newPos.y !== this.draggable.state.y) {
          this.draggable.setState(newPos);
        }
        this.updateOffsetFromParent();
        var offset = this.offsetFromParent;
        var x2 = this.getDraggablePosition().x + offset.left;
        var y2 = this.getDraggablePosition().y + offset.top;
        this.resizingPosition = { x: x2, y: y2 };
        if (!this.props.onResize)
          return;
        this.props.onResize(e2, direction, elementRef, delta, {
          x: x2,
          y: y2
        });
      };
      Rnd2.prototype.onResizeStop = function(e2, direction, elementRef, delta) {
        this.setState({
          resizing: false
        });
        var _a2 = this.getMaxSizesFromProps(), maxWidth = _a2.maxWidth, maxHeight = _a2.maxHeight;
        this.setState({ maxWidth, maxHeight });
        if (this.props.onResizeStop) {
          this.props.onResizeStop(e2, direction, elementRef, delta, this.resizingPosition);
        }
      };
      Rnd2.prototype.updateSize = function(size) {
        if (!this.resizable)
          return;
        this.resizable.updateSize({ width: size.width, height: size.height });
      };
      Rnd2.prototype.updatePosition = function(position2) {
        this.draggable.setState(position2);
      };
      Rnd2.prototype.updateOffsetFromParent = function() {
        var scale = this.props.scale;
        var parent = this.getParent();
        var self2 = this.getSelfElement();
        if (!parent || self2 === null) {
          return {
            top: 0,
            left: 0
          };
        }
        var parentRect = parent.getBoundingClientRect();
        var parentLeft = parentRect.left;
        var parentTop = parentRect.top;
        var selfRect = self2.getBoundingClientRect();
        var position2 = this.getDraggablePosition();
        var scrollLeft = parent.scrollLeft;
        var scrollTop = parent.scrollTop;
        this.offsetFromParent = {
          left: selfRect.left - parentLeft + scrollLeft - position2.x * scale,
          top: selfRect.top - parentTop + scrollTop - position2.y * scale
        };
      };
      Rnd2.prototype.render = function() {
        var _a2 = this.props, disableDragging = _a2.disableDragging, style = _a2.style, dragHandleClassName = _a2.dragHandleClassName, position2 = _a2.position, onMouseDown = _a2.onMouseDown, onMouseUp = _a2.onMouseUp, dragAxis = _a2.dragAxis, dragGrid = _a2.dragGrid, bounds = _a2.bounds, enableUserSelectHack = _a2.enableUserSelectHack, cancel = _a2.cancel, children = _a2.children;
        _a2.onResizeStart;
        _a2.onResize;
        _a2.onResizeStop;
        _a2.onDragStart;
        _a2.onDrag;
        _a2.onDragStop;
        var resizeHandleStyles = _a2.resizeHandleStyles, resizeHandleClasses = _a2.resizeHandleClasses, resizeHandleComponent = _a2.resizeHandleComponent, enableResizing = _a2.enableResizing, resizeGrid = _a2.resizeGrid, resizeHandleWrapperClass = _a2.resizeHandleWrapperClass, resizeHandleWrapperStyle = _a2.resizeHandleWrapperStyle, scale = _a2.scale, allowAnyClick = _a2.allowAnyClick, resizableProps = __rest$1(_a2, ["disableDragging", "style", "dragHandleClassName", "position", "onMouseDown", "onMouseUp", "dragAxis", "dragGrid", "bounds", "enableUserSelectHack", "cancel", "children", "onResizeStart", "onResize", "onResizeStop", "onDragStart", "onDrag", "onDragStop", "resizeHandleStyles", "resizeHandleClasses", "resizeHandleComponent", "enableResizing", "resizeGrid", "resizeHandleWrapperClass", "resizeHandleWrapperStyle", "scale", "allowAnyClick"]);
        var defaultValue = this.props.default ? __assign$2({}, this.props.default) : void 0;
        delete resizableProps.default;
        var cursorStyle = disableDragging || dragHandleClassName ? { cursor: "auto" } : { cursor: "move" };
        var innerStyle = __assign$2(__assign$2(__assign$2({}, resizableStyle), cursorStyle), style);
        var _b2 = this.offsetFromParent, left = _b2.left, top2 = _b2.top;
        var draggablePosition;
        if (position2) {
          draggablePosition = {
            x: position2.x - left,
            y: position2.y - top2
          };
        }
        var pos = this.state.resizing ? void 0 : draggablePosition;
        var dragAxisOrUndefined = this.state.resizing ? "both" : dragAxis;
        return reactExports.createElement(
          Draggable,
          { ref: this.refDraggable, handle: dragHandleClassName ? ".".concat(dragHandleClassName) : void 0, defaultPosition: defaultValue, onMouseDown, onMouseUp, onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop, axis: dragAxisOrUndefined, disabled: disableDragging, grid: dragGrid, bounds: bounds ? this.state.bounds : void 0, position: pos, enableUserSelectHack, cancel, scale, allowAnyClick, nodeRef: this.resizableElement },
          reactExports.createElement(Resizable, __assign$2({}, resizableProps, { ref: this.refResizable, defaultSize: defaultValue, size: this.props.size, enable: typeof enableResizing === "boolean" ? getEnableResizingByFlag(enableResizing) : enableResizing, onResizeStart: this.onResizeStart, onResize: this.onResize, onResizeStop: this.onResizeStop, style: innerStyle, minWidth: this.props.minWidth, minHeight: this.props.minHeight, maxWidth: this.state.resizing ? this.state.maxWidth : this.props.maxWidth, maxHeight: this.state.resizing ? this.state.maxHeight : this.props.maxHeight, grid: resizeGrid, handleWrapperClass: resizeHandleWrapperClass, handleWrapperStyle: resizeHandleWrapperStyle, lockAspectRatio: this.props.lockAspectRatio, lockAspectRatioExtraWidth: this.props.lockAspectRatioExtraWidth, lockAspectRatioExtraHeight: this.props.lockAspectRatioExtraHeight, handleStyles: resizeHandleStyles, handleClasses: resizeHandleClasses, handleComponent: resizeHandleComponent, scale: this.props.scale }), children)
        );
      };
      Rnd2.defaultProps = {
        maxWidth: Number.MAX_SAFE_INTEGER,
        maxHeight: Number.MAX_SAFE_INTEGER,
        scale: 1,
        onResizeStart: function() {
        },
        onResize: function() {
        },
        onResizeStop: function() {
        },
        onDragStart: function() {
        },
        onDrag: function() {
        },
        onDragStop: function() {
        }
      };
      return Rnd2;
    }(reactExports.PureComponent)
  );
  var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
  const freeGlobal$1 = freeGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal$1 || freeSelf || Function("return this")();
  const root$1 = root;
  var Symbol$1 = root$1.Symbol;
  const Symbol$2 = Symbol$1;
  var objectProto$1 = Object.prototype;
  var hasOwnProperty = objectProto$1.hasOwnProperty;
  var nativeObjectToString$1 = objectProto$1.toString;
  var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
    try {
      value[symToStringTag$1] = void 0;
      var unmasked = true;
    } catch (e2) {
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
  var objectProto = Object.prototype;
  var nativeObjectToString = objectProto.toString;
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
  var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var symbolTag = "[object Symbol]";
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
  }
  var reWhitespace = /\s/;
  function trimmedEndIndex(string) {
    var index2 = string.length;
    while (index2-- && reWhitespace.test(string.charAt(index2))) {
    }
    return index2;
  }
  var reTrimStart = /^\s+/;
  function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
  }
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var NAN = 0 / 0;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  function toNumber(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  var now = function() {
    return root$1.Date.now();
  };
  const now$1 = now;
  var FUNC_ERROR_TEXT$1 = "Expected a function";
  var nativeMax = Math.max, nativeMin = Math.min;
  function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT$1);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = "maxWait" in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
      var args = lastArgs, thisArg = lastThis;
      lastArgs = lastThis = void 0;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }
    function leadingEdge(time) {
      lastInvokeTime = time;
      timerId = setTimeout(timerExpired, wait);
      return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
      return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
      return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
      var time = now$1();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
      timerId = void 0;
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = void 0;
      return result;
    }
    function cancel() {
      if (timerId !== void 0) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = void 0;
    }
    function flush() {
      return timerId === void 0 ? result : trailingEdge(now$1());
    }
    function debounced() {
      var time = now$1(), isInvoking = shouldInvoke(time);
      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;
      if (isInvoking) {
        if (timerId === void 0) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === void 0) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }
  var FUNC_ERROR_TEXT = "Expected a function";
  function throttle(func, wait, options) {
    var leading = true, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    if (isObject(options)) {
      leading = "leading" in options ? !!options.leading : leading;
      trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
      "leading": leading,
      "maxWait": wait,
      "trailing": trailing
    });
  }
  var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
  var canUseDom = canUseDOM;
  var __assign$1 = function() {
    __assign$1 = Object.assign || function __assign2(t2) {
      for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
        s2 = arguments[i2];
        for (var p2 in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p2))
            t2[p2] = s2[p2];
      }
      return t2;
    };
    return __assign$1.apply(this, arguments);
  };
  var cachedScrollbarWidth = null;
  var cachedDevicePixelRatio = null;
  if (canUseDom) {
    window.addEventListener("resize", function() {
      if (cachedDevicePixelRatio !== window.devicePixelRatio) {
        cachedDevicePixelRatio = window.devicePixelRatio;
        cachedScrollbarWidth = null;
      }
    });
  }
  function scrollbarWidth() {
    if (cachedScrollbarWidth === null) {
      if (typeof document === "undefined") {
        cachedScrollbarWidth = 0;
        return cachedScrollbarWidth;
      }
      var body = document.body;
      var box = document.createElement("div");
      box.classList.add("simplebar-hide-scrollbar");
      body.appendChild(box);
      var width = box.getBoundingClientRect().right;
      body.removeChild(box);
      cachedScrollbarWidth = width;
    }
    return cachedScrollbarWidth;
  }
  function getElementWindow$1(element) {
    if (!element || !element.ownerDocument || !element.ownerDocument.defaultView) {
      return window;
    }
    return element.ownerDocument.defaultView;
  }
  function getElementDocument$1(element) {
    if (!element || !element.ownerDocument) {
      return document;
    }
    return element.ownerDocument;
  }
  var getOptions$1 = function(obj) {
    var initialObj = {};
    var options = Array.prototype.reduce.call(obj, function(acc, attribute) {
      var option = attribute.name.match(/data-simplebar-(.+)/);
      if (option) {
        var key = option[1].replace(/\W+(.)/g, function(_2, chr) {
          return chr.toUpperCase();
        });
        switch (attribute.value) {
          case "true":
            acc[key] = true;
            break;
          case "false":
            acc[key] = false;
            break;
          case void 0:
            acc[key] = true;
            break;
          default:
            acc[key] = attribute.value;
        }
      }
      return acc;
    }, initialObj);
    return options;
  };
  function addClasses$1(el2, classes) {
    var _a2;
    if (!el2)
      return;
    (_a2 = el2.classList).add.apply(_a2, classes.split(" "));
  }
  function removeClasses$1(el2, classes) {
    if (!el2)
      return;
    classes.split(" ").forEach(function(className) {
      el2.classList.remove(className);
    });
  }
  function classNamesToQuery$1(classNames) {
    return ".".concat(classNames.split(" ").join("."));
  }
  var helpers = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    getElementWindow: getElementWindow$1,
    getElementDocument: getElementDocument$1,
    getOptions: getOptions$1,
    addClasses: addClasses$1,
    removeClasses: removeClasses$1,
    classNamesToQuery: classNamesToQuery$1
  });
  var getElementWindow = getElementWindow$1, getElementDocument = getElementDocument$1, getOptions = getOptions$1, addClasses = addClasses$1, removeClasses = removeClasses$1, classNamesToQuery = classNamesToQuery$1;
  var SimpleBarCore = (
    /** @class */
    function() {
      function SimpleBarCore2(element, options) {
        if (options === void 0) {
          options = {};
        }
        var _this = this;
        this.removePreventClickId = null;
        this.minScrollbarWidth = 20;
        this.stopScrollDelay = 175;
        this.isScrolling = false;
        this.isMouseEntering = false;
        this.scrollXTicking = false;
        this.scrollYTicking = false;
        this.wrapperEl = null;
        this.contentWrapperEl = null;
        this.contentEl = null;
        this.offsetEl = null;
        this.maskEl = null;
        this.placeholderEl = null;
        this.heightAutoObserverWrapperEl = null;
        this.heightAutoObserverEl = null;
        this.rtlHelpers = null;
        this.scrollbarWidth = 0;
        this.resizeObserver = null;
        this.mutationObserver = null;
        this.elStyles = null;
        this.isRtl = null;
        this.mouseX = 0;
        this.mouseY = 0;
        this.onMouseMove = function() {
        };
        this.onWindowResize = function() {
        };
        this.onStopScrolling = function() {
        };
        this.onMouseEntered = function() {
        };
        this.onScroll = function() {
          var elWindow = getElementWindow(_this.el);
          if (!_this.scrollXTicking) {
            elWindow.requestAnimationFrame(_this.scrollX);
            _this.scrollXTicking = true;
          }
          if (!_this.scrollYTicking) {
            elWindow.requestAnimationFrame(_this.scrollY);
            _this.scrollYTicking = true;
          }
          if (!_this.isScrolling) {
            _this.isScrolling = true;
            addClasses(_this.el, _this.classNames.scrolling);
          }
          _this.showScrollbar("x");
          _this.showScrollbar("y");
          _this.onStopScrolling();
        };
        this.scrollX = function() {
          if (_this.axis.x.isOverflowing) {
            _this.positionScrollbar("x");
          }
          _this.scrollXTicking = false;
        };
        this.scrollY = function() {
          if (_this.axis.y.isOverflowing) {
            _this.positionScrollbar("y");
          }
          _this.scrollYTicking = false;
        };
        this._onStopScrolling = function() {
          removeClasses(_this.el, _this.classNames.scrolling);
          if (_this.options.autoHide) {
            _this.hideScrollbar("x");
            _this.hideScrollbar("y");
          }
          _this.isScrolling = false;
        };
        this.onMouseEnter = function() {
          if (!_this.isMouseEntering) {
            addClasses(_this.el, _this.classNames.mouseEntered);
            _this.showScrollbar("x");
            _this.showScrollbar("y");
            _this.isMouseEntering = true;
          }
          _this.onMouseEntered();
        };
        this._onMouseEntered = function() {
          removeClasses(_this.el, _this.classNames.mouseEntered);
          if (_this.options.autoHide) {
            _this.hideScrollbar("x");
            _this.hideScrollbar("y");
          }
          _this.isMouseEntering = false;
        };
        this._onMouseMove = function(e2) {
          _this.mouseX = e2.clientX;
          _this.mouseY = e2.clientY;
          if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
            _this.onMouseMoveForAxis("x");
          }
          if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
            _this.onMouseMoveForAxis("y");
          }
        };
        this.onMouseLeave = function() {
          _this.onMouseMove.cancel();
          if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
            _this.onMouseLeaveForAxis("x");
          }
          if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
            _this.onMouseLeaveForAxis("y");
          }
          _this.mouseX = -1;
          _this.mouseY = -1;
        };
        this._onWindowResize = function() {
          _this.scrollbarWidth = _this.getScrollbarWidth();
          _this.hideNativeScrollbar();
        };
        this.onPointerEvent = function(e2) {
          if (!_this.axis.x.track.el || !_this.axis.y.track.el || !_this.axis.x.scrollbar.el || !_this.axis.y.scrollbar.el)
            return;
          var isWithinTrackXBounds, isWithinTrackYBounds;
          _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
          _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();
          if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
            isWithinTrackXBounds = _this.isWithinBounds(_this.axis.x.track.rect);
          }
          if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
            isWithinTrackYBounds = _this.isWithinBounds(_this.axis.y.track.rect);
          }
          if (isWithinTrackXBounds || isWithinTrackYBounds) {
            e2.stopPropagation();
            if (e2.type === "pointerdown" && e2.pointerType !== "touch") {
              if (isWithinTrackXBounds) {
                _this.axis.x.scrollbar.rect = _this.axis.x.scrollbar.el.getBoundingClientRect();
                if (_this.isWithinBounds(_this.axis.x.scrollbar.rect)) {
                  _this.onDragStart(e2, "x");
                } else {
                  _this.onTrackClick(e2, "x");
                }
              }
              if (isWithinTrackYBounds) {
                _this.axis.y.scrollbar.rect = _this.axis.y.scrollbar.el.getBoundingClientRect();
                if (_this.isWithinBounds(_this.axis.y.scrollbar.rect)) {
                  _this.onDragStart(e2, "y");
                } else {
                  _this.onTrackClick(e2, "y");
                }
              }
            }
          }
        };
        this.drag = function(e2) {
          var _a2, _b2, _c2, _d2, _e2, _f, _g, _h, _j, _k, _l;
          if (!_this.draggedAxis || !_this.contentWrapperEl)
            return;
          var eventOffset;
          var track = _this.axis[_this.draggedAxis].track;
          var trackSize = (_b2 = (_a2 = track.rect) === null || _a2 === void 0 ? void 0 : _a2[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _b2 !== void 0 ? _b2 : 0;
          var scrollbar = _this.axis[_this.draggedAxis].scrollbar;
          var contentSize = (_d2 = (_c2 = _this.contentWrapperEl) === null || _c2 === void 0 ? void 0 : _c2[_this.axis[_this.draggedAxis].scrollSizeAttr]) !== null && _d2 !== void 0 ? _d2 : 0;
          var hostSize = parseInt((_f = (_e2 = _this.elStyles) === null || _e2 === void 0 ? void 0 : _e2[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _f !== void 0 ? _f : "0px", 10);
          e2.preventDefault();
          e2.stopPropagation();
          if (_this.draggedAxis === "y") {
            eventOffset = e2.pageY;
          } else {
            eventOffset = e2.pageX;
          }
          var dragPos = eventOffset - ((_h = (_g = track.rect) === null || _g === void 0 ? void 0 : _g[_this.axis[_this.draggedAxis].offsetAttr]) !== null && _h !== void 0 ? _h : 0) - _this.axis[_this.draggedAxis].dragOffset;
          dragPos = _this.isRtl ? ((_k = (_j = track.rect) === null || _j === void 0 ? void 0 : _j[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _k !== void 0 ? _k : 0) - scrollbar.size - dragPos : dragPos;
          var dragPerc = dragPos / (trackSize - scrollbar.size);
          var scrollPos = dragPerc * (contentSize - hostSize);
          if (_this.draggedAxis === "x" && _this.isRtl) {
            scrollPos = ((_l = SimpleBarCore2.getRtlHelpers()) === null || _l === void 0 ? void 0 : _l.isScrollingToNegative) ? -scrollPos : scrollPos;
          }
          _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollOffsetAttr] = scrollPos;
        };
        this.onEndDrag = function(e2) {
          var elDocument = getElementDocument(_this.el);
          var elWindow = getElementWindow(_this.el);
          e2.preventDefault();
          e2.stopPropagation();
          removeClasses(_this.el, _this.classNames.dragging);
          elDocument.removeEventListener("mousemove", _this.drag, true);
          elDocument.removeEventListener("mouseup", _this.onEndDrag, true);
          _this.removePreventClickId = elWindow.setTimeout(function() {
            elDocument.removeEventListener("click", _this.preventClick, true);
            elDocument.removeEventListener("dblclick", _this.preventClick, true);
            _this.removePreventClickId = null;
          });
        };
        this.preventClick = function(e2) {
          e2.preventDefault();
          e2.stopPropagation();
        };
        this.el = element;
        this.options = __assign$1(__assign$1({}, SimpleBarCore2.defaultOptions), options);
        this.classNames = __assign$1(__assign$1({}, SimpleBarCore2.defaultOptions.classNames), options.classNames);
        this.axis = {
          x: {
            scrollOffsetAttr: "scrollLeft",
            sizeAttr: "width",
            scrollSizeAttr: "scrollWidth",
            offsetSizeAttr: "offsetWidth",
            offsetAttr: "left",
            overflowAttr: "overflowX",
            dragOffset: 0,
            isOverflowing: true,
            forceVisible: false,
            track: { size: null, el: null, rect: null, isVisible: false },
            scrollbar: { size: null, el: null, rect: null, isVisible: false }
          },
          y: {
            scrollOffsetAttr: "scrollTop",
            sizeAttr: "height",
            scrollSizeAttr: "scrollHeight",
            offsetSizeAttr: "offsetHeight",
            offsetAttr: "top",
            overflowAttr: "overflowY",
            dragOffset: 0,
            isOverflowing: true,
            forceVisible: false,
            track: { size: null, el: null, rect: null, isVisible: false },
            scrollbar: { size: null, el: null, rect: null, isVisible: false }
          }
        };
        if (typeof this.el !== "object" || !this.el.nodeName) {
          throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));
        }
        this.onMouseMove = throttle(this._onMouseMove, 64);
        this.onWindowResize = debounce(this._onWindowResize, 64, { leading: true });
        this.onStopScrolling = debounce(this._onStopScrolling, this.stopScrollDelay);
        this.onMouseEntered = debounce(this._onMouseEntered, this.stopScrollDelay);
        this.init();
      }
      SimpleBarCore2.getRtlHelpers = function() {
        if (SimpleBarCore2.rtlHelpers) {
          return SimpleBarCore2.rtlHelpers;
        }
        var dummyDiv = document.createElement("div");
        dummyDiv.innerHTML = '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
        var scrollbarDummyEl = dummyDiv.firstElementChild;
        var dummyChild = scrollbarDummyEl === null || scrollbarDummyEl === void 0 ? void 0 : scrollbarDummyEl.firstElementChild;
        if (!dummyChild)
          return null;
        document.body.appendChild(scrollbarDummyEl);
        scrollbarDummyEl.scrollLeft = 0;
        var dummyContainerOffset = SimpleBarCore2.getOffset(scrollbarDummyEl);
        var dummyChildOffset = SimpleBarCore2.getOffset(dummyChild);
        scrollbarDummyEl.scrollLeft = -999;
        var dummyChildOffsetAfterScroll = SimpleBarCore2.getOffset(dummyChild);
        document.body.removeChild(scrollbarDummyEl);
        SimpleBarCore2.rtlHelpers = {
          // determines if the scrolling is responding with negative values
          isScrollOriginAtZero: dummyContainerOffset.left !== dummyChildOffset.left,
          // determines if the origin scrollbar position is inverted or not (positioned on left or right)
          isScrollingToNegative: dummyChildOffset.left !== dummyChildOffsetAfterScroll.left
        };
        return SimpleBarCore2.rtlHelpers;
      };
      SimpleBarCore2.prototype.getScrollbarWidth = function() {
        try {
          if (this.contentWrapperEl && getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display === "none" || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style) {
            return 0;
          } else {
            return scrollbarWidth();
          }
        } catch (e2) {
          return scrollbarWidth();
        }
      };
      SimpleBarCore2.getOffset = function(el2) {
        var rect = el2.getBoundingClientRect();
        var elDocument = getElementDocument(el2);
        var elWindow = getElementWindow(el2);
        return {
          top: rect.top + (elWindow.pageYOffset || elDocument.documentElement.scrollTop),
          left: rect.left + (elWindow.pageXOffset || elDocument.documentElement.scrollLeft)
        };
      };
      SimpleBarCore2.prototype.init = function() {
        if (canUseDom) {
          this.initDOM();
          this.rtlHelpers = SimpleBarCore2.getRtlHelpers();
          this.scrollbarWidth = this.getScrollbarWidth();
          this.recalculate();
          this.initListeners();
        }
      };
      SimpleBarCore2.prototype.initDOM = function() {
        var _a2, _b2;
        this.wrapperEl = this.el.querySelector(classNamesToQuery(this.classNames.wrapper));
        this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector(classNamesToQuery(this.classNames.contentWrapper));
        this.contentEl = this.options.contentNode || this.el.querySelector(classNamesToQuery(this.classNames.contentEl));
        this.offsetEl = this.el.querySelector(classNamesToQuery(this.classNames.offset));
        this.maskEl = this.el.querySelector(classNamesToQuery(this.classNames.mask));
        this.placeholderEl = this.findChild(this.wrapperEl, classNamesToQuery(this.classNames.placeholder));
        this.heightAutoObserverWrapperEl = this.el.querySelector(classNamesToQuery(this.classNames.heightAutoObserverWrapperEl));
        this.heightAutoObserverEl = this.el.querySelector(classNamesToQuery(this.classNames.heightAutoObserverEl));
        this.axis.x.track.el = this.findChild(this.el, "".concat(classNamesToQuery(this.classNames.track)).concat(classNamesToQuery(this.classNames.horizontal)));
        this.axis.y.track.el = this.findChild(this.el, "".concat(classNamesToQuery(this.classNames.track)).concat(classNamesToQuery(this.classNames.vertical)));
        this.axis.x.scrollbar.el = ((_a2 = this.axis.x.track.el) === null || _a2 === void 0 ? void 0 : _a2.querySelector(classNamesToQuery(this.classNames.scrollbar))) || null;
        this.axis.y.scrollbar.el = ((_b2 = this.axis.y.track.el) === null || _b2 === void 0 ? void 0 : _b2.querySelector(classNamesToQuery(this.classNames.scrollbar))) || null;
        if (!this.options.autoHide) {
          addClasses(this.axis.x.scrollbar.el, this.classNames.visible);
          addClasses(this.axis.y.scrollbar.el, this.classNames.visible);
        }
      };
      SimpleBarCore2.prototype.initListeners = function() {
        var _this = this;
        var _a2;
        var elWindow = getElementWindow(this.el);
        this.el.addEventListener("mouseenter", this.onMouseEnter);
        this.el.addEventListener("pointerdown", this.onPointerEvent, true);
        this.el.addEventListener("mousemove", this.onMouseMove);
        this.el.addEventListener("mouseleave", this.onMouseLeave);
        (_a2 = this.contentWrapperEl) === null || _a2 === void 0 ? void 0 : _a2.addEventListener("scroll", this.onScroll);
        elWindow.addEventListener("resize", this.onWindowResize);
        if (!this.contentEl)
          return;
        if (window.ResizeObserver) {
          var resizeObserverStarted_1 = false;
          var resizeObserver = elWindow.ResizeObserver || ResizeObserver;
          this.resizeObserver = new resizeObserver(function() {
            if (!resizeObserverStarted_1)
              return;
            elWindow.requestAnimationFrame(function() {
              _this.recalculate();
            });
          });
          this.resizeObserver.observe(this.el);
          this.resizeObserver.observe(this.contentEl);
          elWindow.requestAnimationFrame(function() {
            resizeObserverStarted_1 = true;
          });
        }
        this.mutationObserver = new elWindow.MutationObserver(function() {
          elWindow.requestAnimationFrame(function() {
            _this.recalculate();
          });
        });
        this.mutationObserver.observe(this.contentEl, {
          childList: true,
          subtree: true,
          characterData: true
        });
      };
      SimpleBarCore2.prototype.recalculate = function() {
        if (!this.heightAutoObserverEl || !this.contentEl || !this.contentWrapperEl || !this.wrapperEl || !this.placeholderEl)
          return;
        var elWindow = getElementWindow(this.el);
        this.elStyles = elWindow.getComputedStyle(this.el);
        this.isRtl = this.elStyles.direction === "rtl";
        var contentElOffsetWidth = this.contentEl.offsetWidth;
        var isHeightAuto = this.heightAutoObserverEl.offsetHeight <= 1;
        var isWidthAuto = this.heightAutoObserverEl.offsetWidth <= 1 || contentElOffsetWidth > 0;
        var contentWrapperElOffsetWidth = this.contentWrapperEl.offsetWidth;
        var elOverflowX = this.elStyles.overflowX;
        var elOverflowY = this.elStyles.overflowY;
        this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft);
        this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft);
        var contentElScrollHeight = this.contentEl.scrollHeight;
        var contentElScrollWidth = this.contentEl.scrollWidth;
        this.contentWrapperEl.style.height = isHeightAuto ? "auto" : "100%";
        this.placeholderEl.style.width = isWidthAuto ? "".concat(contentElOffsetWidth || contentElScrollWidth, "px") : "auto";
        this.placeholderEl.style.height = "".concat(contentElScrollHeight, "px");
        var contentWrapperElOffsetHeight = this.contentWrapperEl.offsetHeight;
        this.axis.x.isOverflowing = contentElOffsetWidth !== 0 && contentElScrollWidth > contentElOffsetWidth;
        this.axis.y.isOverflowing = contentElScrollHeight > contentWrapperElOffsetHeight;
        this.axis.x.isOverflowing = elOverflowX === "hidden" ? false : this.axis.x.isOverflowing;
        this.axis.y.isOverflowing = elOverflowY === "hidden" ? false : this.axis.y.isOverflowing;
        this.axis.x.forceVisible = this.options.forceVisible === "x" || this.options.forceVisible === true;
        this.axis.y.forceVisible = this.options.forceVisible === "y" || this.options.forceVisible === true;
        this.hideNativeScrollbar();
        var offsetForXScrollbar = this.axis.x.isOverflowing ? this.scrollbarWidth : 0;
        var offsetForYScrollbar = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
        this.axis.x.isOverflowing = this.axis.x.isOverflowing && contentElScrollWidth > contentWrapperElOffsetWidth - offsetForYScrollbar;
        this.axis.y.isOverflowing = this.axis.y.isOverflowing && contentElScrollHeight > contentWrapperElOffsetHeight - offsetForXScrollbar;
        this.axis.x.scrollbar.size = this.getScrollbarSize("x");
        this.axis.y.scrollbar.size = this.getScrollbarSize("y");
        if (this.axis.x.scrollbar.el)
          this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px");
        if (this.axis.y.scrollbar.el)
          this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px");
        this.positionScrollbar("x");
        this.positionScrollbar("y");
        this.toggleTrackVisibility("x");
        this.toggleTrackVisibility("y");
      };
      SimpleBarCore2.prototype.getScrollbarSize = function(axis) {
        var _a2, _b2;
        if (axis === void 0) {
          axis = "y";
        }
        if (!this.axis[axis].isOverflowing || !this.contentEl) {
          return 0;
        }
        var contentSize = this.contentEl[this.axis[axis].scrollSizeAttr];
        var trackSize = (_b2 = (_a2 = this.axis[axis].track.el) === null || _a2 === void 0 ? void 0 : _a2[this.axis[axis].offsetSizeAttr]) !== null && _b2 !== void 0 ? _b2 : 0;
        var scrollbarRatio = trackSize / contentSize;
        var scrollbarSize;
        scrollbarSize = Math.max(~~(scrollbarRatio * trackSize), this.options.scrollbarMinSize);
        if (this.options.scrollbarMaxSize) {
          scrollbarSize = Math.min(scrollbarSize, this.options.scrollbarMaxSize);
        }
        return scrollbarSize;
      };
      SimpleBarCore2.prototype.positionScrollbar = function(axis) {
        var _a2, _b2, _c2;
        if (axis === void 0) {
          axis = "y";
        }
        var scrollbar = this.axis[axis].scrollbar;
        if (!this.axis[axis].isOverflowing || !this.contentWrapperEl || !scrollbar.el || !this.elStyles) {
          return;
        }
        var contentSize = this.contentWrapperEl[this.axis[axis].scrollSizeAttr];
        var trackSize = ((_a2 = this.axis[axis].track.el) === null || _a2 === void 0 ? void 0 : _a2[this.axis[axis].offsetSizeAttr]) || 0;
        var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
        var scrollOffset = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
        scrollOffset = axis === "x" && this.isRtl && ((_b2 = SimpleBarCore2.getRtlHelpers()) === null || _b2 === void 0 ? void 0 : _b2.isScrollOriginAtZero) ? -scrollOffset : scrollOffset;
        if (axis === "x" && this.isRtl) {
          scrollOffset = ((_c2 = SimpleBarCore2.getRtlHelpers()) === null || _c2 === void 0 ? void 0 : _c2.isScrollingToNegative) ? scrollOffset : -scrollOffset;
        }
        var scrollPourcent = scrollOffset / (contentSize - hostSize);
        var handleOffset = ~~((trackSize - scrollbar.size) * scrollPourcent);
        handleOffset = axis === "x" && this.isRtl ? -handleOffset + (trackSize - scrollbar.size) : handleOffset;
        scrollbar.el.style.transform = axis === "x" ? "translate3d(".concat(handleOffset, "px, 0, 0)") : "translate3d(0, ".concat(handleOffset, "px, 0)");
      };
      SimpleBarCore2.prototype.toggleTrackVisibility = function(axis) {
        if (axis === void 0) {
          axis = "y";
        }
        var track = this.axis[axis].track.el;
        var scrollbar = this.axis[axis].scrollbar.el;
        if (!track || !scrollbar || !this.contentWrapperEl)
          return;
        if (this.axis[axis].isOverflowing || this.axis[axis].forceVisible) {
          track.style.visibility = "visible";
          this.contentWrapperEl.style[this.axis[axis].overflowAttr] = "scroll";
          this.el.classList.add("".concat(this.classNames.scrollable, "-").concat(axis));
        } else {
          track.style.visibility = "hidden";
          this.contentWrapperEl.style[this.axis[axis].overflowAttr] = "hidden";
          this.el.classList.remove("".concat(this.classNames.scrollable, "-").concat(axis));
        }
        if (this.axis[axis].isOverflowing) {
          scrollbar.style.display = "block";
        } else {
          scrollbar.style.display = "none";
        }
      };
      SimpleBarCore2.prototype.showScrollbar = function(axis) {
        if (axis === void 0) {
          axis = "y";
        }
        if (this.axis[axis].isOverflowing && !this.axis[axis].scrollbar.isVisible) {
          addClasses(this.axis[axis].scrollbar.el, this.classNames.visible);
          this.axis[axis].scrollbar.isVisible = true;
        }
      };
      SimpleBarCore2.prototype.hideScrollbar = function(axis) {
        if (axis === void 0) {
          axis = "y";
        }
        if (this.axis[axis].isOverflowing && this.axis[axis].scrollbar.isVisible) {
          removeClasses(this.axis[axis].scrollbar.el, this.classNames.visible);
          this.axis[axis].scrollbar.isVisible = false;
        }
      };
      SimpleBarCore2.prototype.hideNativeScrollbar = function() {
        if (!this.offsetEl)
          return;
        this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px";
        this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px";
      };
      SimpleBarCore2.prototype.onMouseMoveForAxis = function(axis) {
        if (axis === void 0) {
          axis = "y";
        }
        var currentAxis = this.axis[axis];
        if (!currentAxis.track.el || !currentAxis.scrollbar.el)
          return;
        currentAxis.track.rect = currentAxis.track.el.getBoundingClientRect();
        currentAxis.scrollbar.rect = currentAxis.scrollbar.el.getBoundingClientRect();
        if (this.isWithinBounds(currentAxis.track.rect)) {
          this.showScrollbar(axis);
          addClasses(currentAxis.track.el, this.classNames.hover);
          if (this.isWithinBounds(currentAxis.scrollbar.rect)) {
            addClasses(currentAxis.scrollbar.el, this.classNames.hover);
          } else {
            removeClasses(currentAxis.scrollbar.el, this.classNames.hover);
          }
        } else {
          removeClasses(currentAxis.track.el, this.classNames.hover);
          if (this.options.autoHide) {
            this.hideScrollbar(axis);
          }
        }
      };
      SimpleBarCore2.prototype.onMouseLeaveForAxis = function(axis) {
        if (axis === void 0) {
          axis = "y";
        }
        removeClasses(this.axis[axis].track.el, this.classNames.hover);
        removeClasses(this.axis[axis].scrollbar.el, this.classNames.hover);
        if (this.options.autoHide) {
          this.hideScrollbar(axis);
        }
      };
      SimpleBarCore2.prototype.onDragStart = function(e2, axis) {
        var _a2;
        if (axis === void 0) {
          axis = "y";
        }
        var elDocument = getElementDocument(this.el);
        var elWindow = getElementWindow(this.el);
        var scrollbar = this.axis[axis].scrollbar;
        var eventOffset = axis === "y" ? e2.pageY : e2.pageX;
        this.axis[axis].dragOffset = eventOffset - (((_a2 = scrollbar.rect) === null || _a2 === void 0 ? void 0 : _a2[this.axis[axis].offsetAttr]) || 0);
        this.draggedAxis = axis;
        addClasses(this.el, this.classNames.dragging);
        elDocument.addEventListener("mousemove", this.drag, true);
        elDocument.addEventListener("mouseup", this.onEndDrag, true);
        if (this.removePreventClickId === null) {
          elDocument.addEventListener("click", this.preventClick, true);
          elDocument.addEventListener("dblclick", this.preventClick, true);
        } else {
          elWindow.clearTimeout(this.removePreventClickId);
          this.removePreventClickId = null;
        }
      };
      SimpleBarCore2.prototype.onTrackClick = function(e2, axis) {
        var _this = this;
        var _a2, _b2, _c2, _d2;
        if (axis === void 0) {
          axis = "y";
        }
        var currentAxis = this.axis[axis];
        if (!this.options.clickOnTrack || !currentAxis.scrollbar.el || !this.contentWrapperEl)
          return;
        e2.preventDefault();
        var elWindow = getElementWindow(this.el);
        this.axis[axis].scrollbar.rect = currentAxis.scrollbar.el.getBoundingClientRect();
        var scrollbar = this.axis[axis].scrollbar;
        var scrollbarOffset = (_b2 = (_a2 = scrollbar.rect) === null || _a2 === void 0 ? void 0 : _a2[this.axis[axis].offsetAttr]) !== null && _b2 !== void 0 ? _b2 : 0;
        var hostSize = parseInt((_d2 = (_c2 = this.elStyles) === null || _c2 === void 0 ? void 0 : _c2[this.axis[axis].sizeAttr]) !== null && _d2 !== void 0 ? _d2 : "0px", 10);
        var scrolled = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
        var t2 = axis === "y" ? this.mouseY - scrollbarOffset : this.mouseX - scrollbarOffset;
        var dir = t2 < 0 ? -1 : 1;
        var scrollSize = dir === -1 ? scrolled - hostSize : scrolled + hostSize;
        var speed = 40;
        var scrollTo = function() {
          if (!_this.contentWrapperEl)
            return;
          if (dir === -1) {
            if (scrolled > scrollSize) {
              scrolled -= speed;
              _this.contentWrapperEl[_this.axis[axis].scrollOffsetAttr] = scrolled;
              elWindow.requestAnimationFrame(scrollTo);
            }
          } else {
            if (scrolled < scrollSize) {
              scrolled += speed;
              _this.contentWrapperEl[_this.axis[axis].scrollOffsetAttr] = scrolled;
              elWindow.requestAnimationFrame(scrollTo);
            }
          }
        };
        scrollTo();
      };
      SimpleBarCore2.prototype.getContentElement = function() {
        return this.contentEl;
      };
      SimpleBarCore2.prototype.getScrollElement = function() {
        return this.contentWrapperEl;
      };
      SimpleBarCore2.prototype.removeListeners = function() {
        var elWindow = getElementWindow(this.el);
        this.el.removeEventListener("mouseenter", this.onMouseEnter);
        this.el.removeEventListener("pointerdown", this.onPointerEvent, true);
        this.el.removeEventListener("mousemove", this.onMouseMove);
        this.el.removeEventListener("mouseleave", this.onMouseLeave);
        if (this.contentWrapperEl) {
          this.contentWrapperEl.removeEventListener("scroll", this.onScroll);
        }
        elWindow.removeEventListener("resize", this.onWindowResize);
        if (this.mutationObserver) {
          this.mutationObserver.disconnect();
        }
        if (this.resizeObserver) {
          this.resizeObserver.disconnect();
        }
        this.onMouseMove.cancel();
        this.onWindowResize.cancel();
        this.onStopScrolling.cancel();
        this.onMouseEntered.cancel();
      };
      SimpleBarCore2.prototype.unMount = function() {
        this.removeListeners();
      };
      SimpleBarCore2.prototype.isWithinBounds = function(bbox) {
        return this.mouseX >= bbox.left && this.mouseX <= bbox.left + bbox.width && this.mouseY >= bbox.top && this.mouseY <= bbox.top + bbox.height;
      };
      SimpleBarCore2.prototype.findChild = function(el2, query) {
        var matches2 = el2.matches || el2.webkitMatchesSelector || el2.mozMatchesSelector || el2.msMatchesSelector;
        return Array.prototype.filter.call(el2.children, function(child) {
          return matches2.call(child, query);
        })[0];
      };
      SimpleBarCore2.rtlHelpers = null;
      SimpleBarCore2.defaultOptions = {
        forceVisible: false,
        clickOnTrack: true,
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        ariaLabel: "scrollable content",
        classNames: {
          contentEl: "simplebar-content",
          contentWrapper: "simplebar-content-wrapper",
          offset: "simplebar-offset",
          mask: "simplebar-mask",
          wrapper: "simplebar-wrapper",
          placeholder: "simplebar-placeholder",
          scrollbar: "simplebar-scrollbar",
          track: "simplebar-track",
          heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
          heightAutoObserverEl: "simplebar-height-auto-observer",
          visible: "simplebar-visible",
          horizontal: "simplebar-horizontal",
          vertical: "simplebar-vertical",
          hover: "simplebar-hover",
          dragging: "simplebar-dragging",
          scrolling: "simplebar-scrolling",
          scrollable: "simplebar-scrollable",
          mouseEntered: "simplebar-mouse-entered"
        },
        scrollableNode: null,
        contentNode: null,
        autoHide: true
      };
      SimpleBarCore2.getOptions = getOptions;
      SimpleBarCore2.helpers = helpers;
      return SimpleBarCore2;
    }()
  );
  var __assign = function() {
    __assign = Object.assign || function __assign2(t2) {
      for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
        s2 = arguments[i2];
        for (var p2 in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p2))
            t2[p2] = s2[p2];
      }
      return t2;
    };
    return __assign.apply(this, arguments);
  };
  function __rest(s2, e2) {
    var t2 = {};
    for (var p2 in s2)
      if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
        if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
          t2[p2[i2]] = s2[p2[i2]];
      }
    return t2;
  }
  var SimpleBar = reactExports.forwardRef(function(_a2, ref) {
    var children = _a2.children, _b2 = _a2.scrollableNodeProps, scrollableNodeProps = _b2 === void 0 ? {} : _b2, otherProps = __rest(_a2, ["children", "scrollableNodeProps"]);
    var elRef = reactExports.useRef();
    var scrollableNodeRef = reactExports.useRef();
    var contentNodeRef = reactExports.useRef();
    var options = {};
    var rest = {};
    Object.keys(otherProps).forEach(function(key) {
      if (Object.prototype.hasOwnProperty.call(SimpleBarCore.defaultOptions, key)) {
        options[key] = otherProps[key];
      } else {
        rest[key] = otherProps[key];
      }
    });
    var classNames = __assign(__assign({}, SimpleBarCore.defaultOptions.classNames), options.classNames);
    var scrollableNodeFullProps = __assign(__assign({}, scrollableNodeProps), { className: "".concat(classNames.contentWrapper).concat(scrollableNodeProps.className ? " ".concat(scrollableNodeProps.className) : ""), tabIndex: 0, role: "region", "aria-label": options.ariaLabel || SimpleBarCore.defaultOptions.ariaLabel });
    reactExports.useEffect(function() {
      var instance;
      scrollableNodeRef.current = scrollableNodeFullProps.ref ? scrollableNodeFullProps.ref.current : scrollableNodeRef.current;
      if (elRef.current) {
        instance = new SimpleBarCore(elRef.current, __assign(__assign(__assign({}, options), scrollableNodeRef.current && {
          scrollableNode: scrollableNodeRef.current
        }), contentNodeRef.current && {
          contentNode: contentNodeRef.current
        }));
        if (typeof ref === "function") {
          ref(instance);
        } else if (ref) {
          ref.current = instance;
        }
      }
      return function() {
        instance === null || instance === void 0 ? void 0 : instance.unMount();
        instance = null;
        if (typeof ref === "function") {
          ref(null);
        }
      };
    }, []);
    return reactExports.createElement(
      "div",
      __assign({ "data-simplebar": "init", ref: elRef }, rest),
      reactExports.createElement(
        "div",
        { className: classNames.wrapper },
        reactExports.createElement(
          "div",
          { className: classNames.heightAutoObserverWrapperEl },
          reactExports.createElement("div", { className: classNames.heightAutoObserverEl })
        ),
        reactExports.createElement(
          "div",
          { className: classNames.mask },
          reactExports.createElement("div", { className: classNames.offset }, typeof children === "function" ? children({
            scrollableNodeRef,
            scrollableNodeProps: __assign(__assign({}, scrollableNodeFullProps), { ref: scrollableNodeRef }),
            contentNodeRef,
            contentNodeProps: {
              className: classNames.contentEl,
              ref: contentNodeRef
            }
          }) : reactExports.createElement(
            "div",
            __assign({}, scrollableNodeFullProps),
            reactExports.createElement("div", { className: classNames.contentEl }, children)
          ))
        ),
        reactExports.createElement("div", { className: classNames.placeholder })
      ),
      reactExports.createElement(
        "div",
        { className: "".concat(classNames.track, " simplebar-horizontal") },
        reactExports.createElement("div", { className: classNames.scrollbar })
      ),
      reactExports.createElement(
        "div",
        { className: "".concat(classNames.track, " simplebar-vertical") },
        reactExports.createElement("div", { className: classNames.scrollbar })
      )
    );
  });
  SimpleBar.displayName = "SimpleBar";
  const Info = IconWrapper("info", true, function(props) {
    return /* @__PURE__ */ React$1.createElement("svg", {
      width: props.size,
      height: props.size,
      viewBox: "0 0 48 48",
      fill: "none"
    }, /* @__PURE__ */ React$1.createElement("path", {
      d: "M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z",
      fill: props.colors[1],
      stroke: props.colors[0],
      strokeWidth: props.strokeWidth,
      strokeLinejoin: props.strokeLinejoin
    }), /* @__PURE__ */ React$1.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M24 11C25.3807 11 26.5 12.1193 26.5 13.5C26.5 14.8807 25.3807 16 24 16C22.6193 16 21.5 14.8807 21.5 13.5C21.5 12.1193 22.6193 11 24 11Z",
      fill: props.colors[2]
    }), /* @__PURE__ */ React$1.createElement("path", {
      d: "M24.5 34V20H23.5H22.5",
      stroke: props.colors[2],
      strokeWidth: props.strokeWidth,
      strokeLinecap: props.strokeLinecap,
      strokeLinejoin: props.strokeLinejoin
    }), /* @__PURE__ */ React$1.createElement("path", {
      d: "M21 34H28",
      stroke: props.colors[2],
      strokeWidth: props.strokeWidth,
      strokeLinecap: props.strokeLinecap,
      strokeLinejoin: props.strokeLinejoin
    }));
  });
  const SettingTwo = IconWrapper("setting-two", false, function(props) {
    return /* @__PURE__ */ React$1.createElement("svg", {
      width: props.size,
      height: props.size,
      viewBox: "0 0 48 48",
      fill: "none"
    }, /* @__PURE__ */ React$1.createElement("path", {
      d: "M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z",
      fill: props.colors[1],
      stroke: props.colors[0],
      strokeWidth: props.strokeWidth,
      strokeLinejoin: props.strokeLinejoin
    }), /* @__PURE__ */ React$1.createElement("path", {
      d: "M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z",
      fill: props.colors[3],
      stroke: props.colors[2],
      strokeWidth: props.strokeWidth,
      strokeLinejoin: props.strokeLinejoin
    }));
  });
  const GithubOne = IconWrapper("github-one", true, function(props) {
    return /* @__PURE__ */ React$1.createElement("svg", {
      width: props.size,
      height: props.size,
      viewBox: "0 0 48 48",
      fill: "none"
    }, /* @__PURE__ */ React$1.createElement("path", {
      d: "M29.3444 30.4765C31.7481 29.977 33.9292 29.1108 35.6247 27.8391C38.5202 25.6676 40 22.3136 40 18.9999C40 16.6752 39.1187 14.505 37.5929 12.6668C36.7427 11.6425 39.2295 3.99989 37.02 5.02919C34.8105 6.05848 31.5708 8.33679 29.8726 7.83398C28.0545 7.29565 26.0733 6.99989 24 6.99989C22.1992 6.99989 20.4679 7.22301 18.8526 7.6344C16.5046 8.23237 14.2591 5.99989 12 5.02919C9.74086 4.05848 10.9736 11.9632 10.3026 12.7944C8.84119 14.6051 8 16.7288 8 18.9999C8 22.3136 9.79086 25.6676 12.6863 27.8391C14.6151 29.2857 17.034 30.2076 19.7401 30.6619",
      stroke: props.colors[0],
      strokeWidth: props.strokeWidth,
      strokeLinecap: props.strokeLinecap
    }), /* @__PURE__ */ React$1.createElement("path", {
      d: "M19.7397 30.6619C18.5812 31.937 18.002 33.1478 18.002 34.2944C18.002 35.441 18.002 38.3464 18.002 43.0106",
      stroke: props.colors[0],
      strokeWidth: props.strokeWidth,
      strokeLinecap: props.strokeLinecap
    }), /* @__PURE__ */ React$1.createElement("path", {
      d: "M29.3446 30.4766C30.4423 31.9174 30.9912 33.211 30.9912 34.3576C30.9912 35.5042 30.9912 38.3885 30.9912 43.0107",
      stroke: props.colors[0],
      strokeWidth: props.strokeWidth,
      strokeLinecap: props.strokeLinecap
    }), /* @__PURE__ */ React$1.createElement("path", {
      d: "M6 31.2155C6.89887 31.3254 7.56554 31.7387 8 32.4554C8.65169 33.5303 11.0742 37.518 13.8251 37.518C15.6591 37.518 17.0515 37.518 18.0024 37.518",
      stroke: props.colors[0],
      strokeWidth: props.strokeWidth,
      strokeLinecap: props.strokeLinecap
    }));
  });
  const ButtonContainer = newStyled.span(
    {
      display: "inline-block",
      padding: "0px 4px",
      userSelect: "none",
      boxShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
      borderRadius: 4,
      marginLeft: 4,
      border: "1px solid transparent",
      lineHeight: "24px",
      fontFamily: "华文新魏"
    },
    ({ theme: theme2, disabled }) => ({
      "&:hover": {
        backgroundColor: disabled ? "white" : theme2.colors.active,
        // 统一UI风格
        color: disabled ? "grey" : "white"
      },
      backgroundColor: "white",
      color: disabled ? "grey" : "black"
    })
  );
  function Button({
    onClick,
    children,
    disabled,
    style,
    onMouseEnter,
    onMouseLeave
  }) {
    const [isButtonDisabled, setIsButtonDisabled] = reactExports.useState(
      typeof disabled === "number" ? false : !!disabled
    );
    return /* @__PURE__ */ jsx(
      ButtonContainer,
      {
        style: {
          cursor: isButtonDisabled ? "not-allowed" : "pointer",
          ...style
        },
        disabled: isButtonDisabled,
        onClick: () => {
          onClick && onClick();
          if (typeof disabled === "number") {
            setIsButtonDisabled(true);
            setTimeout(() => {
              setIsButtonDisabled(false);
            }, disabled);
          }
        },
        onMouseEnter,
        onMouseLeave,
        children
      }
    );
  }
  const InlineTag = newStyled(it.span)({
    marginRight: 4,
    // border: "1px dashed black",
    borderRadius: 4,
    padding: "2px 4px",
    // lineHeight: "24px",
    // lineHeight: "1.5em",
    height: "24px",
    position: "relative",
    userSelect: "none"
  });
  function useSlideIn() {
    const spring = J({
      from: { opacity: 1, left: "-100%" },
      to: { opacity: 1, left: "0%" },
      config: {
        ...mt.gentle
      }
    });
    return spring;
  }
  const InfoRecordContainer = newStyled(it.span)(
    {
      lineHeight: "24px",
      position: "relative"
    },
    ({ theme: theme2 }) => ({
      a: {
        color: theme2.colors.active,
        fontStyle: "italic",
        backgroundColor: theme2.colors.activeSecondary,
        borderRadius: 4,
        padding: "0px 4px"
      },
      "a:hover": {
        // borderBottom: `${theme.colors.active} 2px solid`,
        pointer: "cursor"
        // transform: "scale(1.1)",
        // transition: "transform 500ms",
      }
    })
  );
  function InfoRecord({ record }) {
    const spring = useSlideIn();
    const theme2 = useTheme();
    const [isHover, setHover] = reactExports.useState(false);
    return /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          position: "relative",
          lineHeight: "normal"
        },
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        children: [
          /* @__PURE__ */ jsx(
            InlineTag,
            {
              style: {
                backgroundColor: theme2.colors.active,
                color: "white",
                ...spring
              },
              children: "提示"
            }
          ),
          /* @__PURE__ */ jsx(
            InfoRecordContainer,
            {
              style: {
                ...spring
              },
              dangerouslySetInnerHTML: {
                __html: `${record.content}`
              }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                position: "absolute",
                bottom: 0,
                right: 0,
                display: isHover ? "flex" : "none"
              },
              children: record.action && record.action.map(({ children, ...restProps }, index2) => /* @__PURE__ */ jsx(Button, { ...restProps, children }, index2))
            }
          )
        ]
      }
    );
  }
  const ScaleIt = newStyled.div({
    "&:hover": {
      transform: "scale(1.2)",
      transition: "transform 500ms",
      cursor: "pointer"
    }
  });
  const About = reactExports.memo(function() {
    const theme2 = useTheme();
    const project = metadata.projects.welearn;
    const textStyle = { margin: "6px 0", lineHeight: 1.7, overflowWrap: "anywhere" };
    return /* @__PURE__ */ jsxs("div", {
      style: { width: 380, maxWidth: "100%", boxSizing: "border-box", padding: 16, color: "#222", textAlign: "left" },
      children: [
        /* @__PURE__ */ jsx("h3", { style: { margin: "0 0 8px", color: theme2.colors.active }, children: `WELearnHelper ${project.displayVersion} · 非官方修复版` }),
        /* @__PURE__ */ jsx("div", { style: textStyle, children: `当前版本：${project.displayVersion}（扩展版本号 ${project.version}）` }),
        /* @__PURE__ */ jsxs("div", { style: textStyle, children: [
          "原作者：",
          /* @__PURE__ */ jsx("a", { href: project.namespace, target: "_blank", rel: "noopener noreferrer", style: { color: theme2.colors.active }, children: project.upstreamAuthor }),
          ` · 原版维护基线 ${project.upstreamDisplayVersion}（${project.upstreamVersion}）`
        ] }),
        /* @__PURE__ */ jsx("div", { style: { ...textStyle, fontWeight: 600 }, children: `后续修改维护：${project.maintainer} · 从 ${project.upstreamDisplayVersion} 修改至 ${project.displayVersion}` }),
        /* @__PURE__ */ jsx("div", { style: textStyle, children: `AI 协作：${project.aiContributors.join(" / ")}` }),
        /* @__PURE__ */ jsx("div", { style: { ...textStyle, fontSize: 12, color: "#666" }, children: "本分支以原作者 1.1.0 为基础继续修改；不代表上游停更，也不代表原作者或平台官方。保留原作者署名及 GPL v3 许可证。" }),
        /* @__PURE__ */ jsxs("div", { style: { borderTop: "1px solid #d9dfe7", marginTop: 12, paddingTop: 10 }, children: [
          /* @__PURE__ */ jsx("strong", { children: "本版修复与新增" }),
          /* @__PURE__ */ jsx("p", { style: textStyle, children: "修复刷时长 / 自动挂机相关失效问题，重新适配填空、选词、多空格、选择、判断、下拉及连线等题型处理，并修复设置同步、章节识别和重复切换等问题。" }),
          /* @__PURE__ */ jsx("p", { style: textStyle, children: "新增分层刷题范围、媒体时长与随机等待、自动提交和自动下一节组合流程。并非所有教材和题型均支持。" })
        ] }),
        /* @__PURE__ */ jsxs("details", { style: { marginTop: 10, lineHeight: 1.7 }, children: [
          /* @__PURE__ */ jsx("summary", { style: { cursor: "pointer", color: theme2.colors.active }, children: "使用引导" }),
          /* @__PURE__ */ jsx("p", { style: textStyle, children: "1. 先在「刷题范围」勾选章节，并手动进入所选起点。" }),
          /* @__PURE__ */ jsx("p", { style: textStyle, children: "2. 自动做题：开启「自动答题」和「全自动刷题」，按需开启「自动提交」。开启自动等待时，等日志中的等待结束后才切换。" }),
          /* @__PURE__ */ jsx("p", { style: textStyle, children: "3. 仅刷时长：关闭「全自动刷题」及「自动答题」，开启「自动挂机」；切换上下限单位为分钟。按需开启随机延时和循环挂机。" }),
          /* @__PURE__ */ jsx("p", { style: textStyle, children: "4. 更新后重新加载扩展并刷新整个课程页面。关闭开关不能撤回已提交的答案，时长和进度以平台记录为准。" })
        ] })
      ]
    });
  });
  function ErrorRecord({ record }) {
    const spring = useSlideIn();
    const theme2 = useTheme();
    return /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          position: "relative",
          lineHeight: "24px"
        },
        children: [
          /* @__PURE__ */ jsx(
            InlineTag,
            {
              style: {
                backgroundColor: theme2.colors.error,
                color: "white",
                ...spring
              },
              children: "异常"
            }
          ),
          /* @__PURE__ */ jsx(
            it.span,
            {
              style: {
                lineHeight: "24px",
                position: "relative",
                ...spring
              },
              children: record.content.message
            }
          )
        ]
      }
    );
  }
  const TypingAnimationContainer = newStyled.span`
    line-height: normal;
    /* font-family: monospace; */
    /* 有中文的话，尤其是中英文混杂的情况，用不用monospace都一样了 */

    background: linear-gradient(#000000 0 0) 0 0
        ${(props) => props.showCursor ? ", linear-gradient(-90deg, #000000 10px, #0000 0) 10px 0" : void 0};
    background-clip: text ${(props) => props.showCursor ? ", padding-box" : void 0};
    color: transparent;

    background-size: calc(${(props) => props.count} * 2ch) 200%;
    background-repeat: no-repeat;

    @keyframes typing {
        from {
            background-size: 0 200%;
        }
    }

    @keyframes cursor {
        50% {
            background-position: 0 -100%;
        }
    }

    animation: typing ${(props) => props.duration * 2}ms linear 1 alternate;
    animation-timing-function: steps(${(props) => props.count * 2});
`;
  function TypingAnimation({
    content,
    startDelay = 600,
    interval = 25
  }) {
    const [shouldDisplay, setShouldDisplay] = reactExports.useState(false);
    const [showCursor, setShowCursor] = reactExports.useState(false);
    const duration = content.length * interval;
    useMount$1(() => {
      setTimeout(() => {
        setShouldDisplay(true);
        setShowCursor(true);
        setTimeout(() => {
          setShowCursor(false);
        }, duration + 250);
      }, startDelay);
    });
    return shouldDisplay ? /* @__PURE__ */ jsx(
      TypingAnimationContainer,
      {
        count: content.length,
        duration,
        showCursor,
        children: content
      }
    ) : /* @__PURE__ */ jsx(Fragment, {});
  }
  function SolveButton({ content: { solve, answerText } }) {
    const [isHovering, setIsHovering] = reactExports.useState(false);
    const buttonText = "无法解答";
    return /* @__PURE__ */ jsx(
      Button,
      {
        disabled: true,
        onClick: () => {
          solve.solveThis(answerText);
        },
        onMouseEnter: () => {
          setIsHovering(true);
        },
        onMouseLeave: () => {
          setIsHovering(false);
        },
        children: buttonText
      }
    );
  }
  function CopyButton({ answerText }) {
    const [buttonText, setButtonText] = reactExports.useState("复制答案");
    return /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => {
          navigator.clipboard.writeText(answerText);
          const copyFrom = document.createElement("textarea");
          copyFrom.textContent = answerText;
          document.body.appendChild(copyFrom);
          copyFrom.select();
          document.execCommand("copy");
          copyFrom.blur();
          document.body.removeChild(copyFrom);
          setButtonText("已复制👌");
          setTimeout(() => {
            setButtonText("复制答案");
          }, 1e3);
        },
        children: buttonText
      }
    );
  }
  function QuestionRecord({ record }) {
    const [isHover, setHover] = reactExports.useState(false);
    const theme2 = useTheme();
    const spring = useSlideIn();
    return /* @__PURE__ */ jsxs(
      it.div,
      {
        onMouseEnter: () => {
          setHover(true);
        },
        onMouseLeave: () => {
          setHover(false);
        },
        style: {
          position: "relative",
          lineHeight: "24px"
          // ...(store.userSettings.enableTyping ? spring : {}),
        },
        children: [
          /* @__PURE__ */ jsx(
            InlineTag,
            {
              style: {
                ...spring,
                backgroundColor: theme2.colors.active,
                color: "white",
                fontFamily: "monospace"
              },
              children: record.content.order
            }
          ),
          /* @__PURE__ */ jsx(
            InlineTag,
            {
              style: {
                ...spring,
                // backgroundColor: "limegreen", // "red" "yellow"
                backgroundColor: record.content.info.color ? record.content.info.color : theme2.answerTypeColorMapping[record.content.info.content] ?? "gray",
                color: "white",
                fontFamily: "华文新魏"
              },
              children: record.content.info.content
            }
          ),
          store.userSettings.enableTyping ? /* @__PURE__ */ jsx(
            TypingAnimation,
            {
              content: record.content.answerText,
              startDelay: 600,
              interval: 35
            }
          ) : /* @__PURE__ */ jsx(
            it.span,
            {
              style: {
                ...spring,
                position: "relative"
              },
              children: record.content.answerText
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              style: {
                position: "absolute",
                bottom: 0,
                right: 0,
                display: isHover ? "flex" : "none"
                // zIndex: ,
              },
              children: [
                record.action && record.action.map(({ children, ...restProps }, index2) => /* @__PURE__ */ jsx(Button, { ...restProps, children }, index2)),
                /* @__PURE__ */ jsx(SolveButton, { content: record.content }),
                /* @__PURE__ */ jsx(CopyButton, { answerText: record.content.answerText })
              ]
            }
          )
        ]
      }
    );
  }
  function getAppTitle() {
    var _a2;
    {
      return (_a2 = metadata.projects["welearn"]) == null ? void 0 : _a2.title;
    }
  }
  function dispatchRecord(record) {
    let recordDisplay;
    switch (record.type) {
      case "info":
        recordDisplay = /* @__PURE__ */ jsx(InfoRecord, { record });
        break;
      case "question":
        recordDisplay = /* @__PURE__ */ jsx(QuestionRecord, { record });
        break;
      case "error":
        recordDisplay = /* @__PURE__ */ jsx(ErrorRecord, { record });
        break;
      default:
        recordDisplay = /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              lineHeight: "24px"
            },
            children: JSON.stringify(record)
          }
        );
        break;
    }
    return recordDisplay;
  }
  const RecordContainer = newStyled.div(
    {
      border: "black 1px solid",
      borderRadius: 4,
      fontSize: 16,
      padding: 4
    },
    ({ theme: theme2 }) => ({
      "&:hover": {
        background: theme2.colors.secondary
      }
    })
  );
  function LogPanel() {
    const {
      visibility,
      logs,
      userSettings
    } = useStore();
    const appTitle = reactExports.useMemo(() => getAppTitle(), []);
    const modeLabel = userSettings.autoNext && userSettings.autoSolve ? "全自动已开启" : userSettings.autoRefresh && !userSettings.autoNext ? "定时挂机已开启" : userSettings.autoSolve ? "自动答题已开启" : "自动功能已关闭";
    const [isDragging, setIsDragging] = reactExports.useState(false);
    const theme2 = useTheme();
    const [spring, api] = J(
      () => ({
        opacity: visibility.log ? 1 : 0,
        scale: visibility.log ? 1 : 0,
        // translate: visibility.log ? 0 : `${floating.y - log.y}px`,
        // transform: visibility.log ? "translateX(200px)" : `translateX(${floating.x - log.x}px)`,
        // x: visibility.log ? 100 : floating.x,
        // y: visibility.log ? 100 : floating.y,
        config: {
          ...mt.wobbly
        },
        onRest: () => {
          if (!visibility.log) {
            setDisplay(false);
          }
        }
      }),
      [visibility.log]
    );
    const [display, setDisplay] = reactExports.useState(false);
    reactExports.useEffect(() => {
      if (visibility.log) {
        setDisplay(true);
      }
    }, [visibility.log]);
    return /* @__PURE__ */ jsx(
      Rnd,
      {
        default: {
          x: 100,
          y: 100,
          width: 520,
          height: 420
        },
        minWidth: 350,
        maxWidth: 600,
        minHeight: 100,
        maxHeight: 600,
        bounds: "window",
        cancel: "#log-panel-menu-buttons",
        dragHandleClassName: "log-panel-menu-bar",
        onDragStart: () => {
          setIsDragging(true);
        },
        onDragStop: () => {
          setIsDragging(false);
        },
        resizeGrid: [20, 20],
        enableResizing: {
          top: false,
          right: true,
          bottom: false,
          left: true,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false
        },
        children: /* @__PURE__ */ jsxs(
          it.div,
          {
            className: "eocs-log-window",
            style: {
              zIndex: 2147482000,
              width: "100%",
              maxHeight: "min(640px, calc(100vh - 32px))",
              background: "#fff",
              border: "1px solid #dce5ec",
              borderRadius: 16,
              boxShadow: "0 16px 52px rgba(32,55,75,.16)",
              display: display ? "flex" : "none",
              flexDirection: "column",
              lineHeight: "1.6",
              ...spring
            },
            children: [
              /* @__PURE__ */ jsxs(
                MenuBar,
                {
                  id: "log-panel-menu-bar",
                  className: "log-panel-menu-bar",
                  isDragging,
                  children: [
                    jsxs("div", { className: "eocs-brand-heading", children: [
                      jsx("span", { className: "eocs-brand-title", children: "WELearn 学习助手" }),
                      jsx("span", { className: "eocs-brand-subtitle", children: `BeefChan · ${metadata.projects.welearn.displayVersion} 非官方修复版` })
                    ] }),
                    jsxs("div", { id: "log-panel-menu-buttons", children: [
                      jsx(PopOver, { content: "关于与使用引导", children: jsx(MenuButton, { "aria-label": "关于与使用引导", children: jsx(Info, { theme: "filled", size: "22", fill: theme2.colors.active }) }) }, "about"),
                      jsx(PopOver, { content: "打开 / 关闭设置", children: jsx(MenuButton, {
                        "aria-label": visibility.config ? "关闭设置" : "打开设置",
                        onClick: () => store.setVisibility("config", !visibility.config),
                        children: jsx(SettingTwo, { theme: "multi-color", size: "22", fill: ["#35546a", "#dce5ec", "#087f8c", "#ffffff"] })
                      }) }, "config"),
                      jsx(PopOver, { content: "最小化窗口", children: jsx(MenuButton, {
                        "aria-label": "最小化窗口",
                        onClick: () => { store.setVisibility("log", false); store.setVisibility("floating", true); },
                        children: jsx(Close, { theme: "filled", size: "20", fill: "#b84949" })
                      }) }, "minimize")
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                SimpleBar,
                {
                  id: "log-panel-log-container",
                  style: {
                    borderTop: "black 2px solid",
                    padding: "4px 8px",
                    flexGrow: 1,
                    maxHeight: 500
                  },
                  children: [
                    jsx("div", { className: "eocs-status-bar", children: [
                      jsx("span", { className: "eocs-status-pill", "data-active": !!(userSettings.autoSolve || userSettings.autoRefresh), children: modeLabel }),
                      jsx("span", { style: { color: "#607589", fontSize: 12 }, children: `${logs.length} 条记录` })
                    ] }),
                    /* @__PURE__ */ jsx(
                      Global,
                      {
                        styles: {
                          ".simplebar-track.simplebar-vertical": {
                            width: "9px !important"
                          }
                        }
                      }
                    ),
                    logs.map((record, index2) => {
                      return (
                        // hasExtra => !disabled，避免页面上的PopOver过多，略微优化一下性能
                        /* @__PURE__ */ jsx(
                          PopOver,
                          {
                            content: record.extra,
                            placement: "right",
                            disabled: record.extra === void 0,
                            delay: record.type === "error",
                            children: /* @__PURE__ */ jsx(
                              RecordContainer,
                              {
                                className: "eocs-log-record",
                                "data-type": record.type,
                                style: { marginTop: index2 === 0 ? 0 : 8, lineHeight: "1.6 !important", overflowWrap: "anywhere" },
                                children: dispatchRecord(record)
                              },
                              record.timestamp
                            )
                          },
                          record.timestamp
                        )
                      );
                    })
                  ]
                }
              )
            ]
          }
        )
      }
    );
  }
  const theme = {
    colors: {
      primary: "rgb(255, 255, 255)",
      // 60%
      secondary: "#f1f5f8",
      // 30%
      active: "#087f8c",
      // 10%
      activeSecondary: "#eaf7f7",
      error: "rgb(231, 71, 93)"
    },
    answerTypeColorMapping: {
      GPT: "orange",
      标答: "limegreen",
      无答案: "rgb(231, 71, 93)"
    }
  };
  function App() {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        Global,
        {
          styles: css`
                    #eocs-helper {
                        all: initial;
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei", sans-serif !important;
                        line-height: normal !important;
                        /* 页面可能很长，所以这里使用 fixed 定位 */
                        position: fixed;
                        top: 0;
                        left: 0;
                        z-index: 99;
                    }
                `
        }
      ),
      /* @__PURE__ */ jsx(ThemeProvider, { theme, children: /* @__PURE__ */ jsxs(ErrorBoundary, { children: [
        /* @__PURE__ */ jsx(LogPanel, {}),
        /* @__PURE__ */ jsx(ConfigPanel, {}),
        /* @__PURE__ */ jsx(FloatingBall, {})
      ] }) })
    ] });
  }
  const EXTENSION_ID = "eocs-helper";
  const availableUrls = [
    ".sflep.com/student/course_info.aspx?",
    //基准页面
    "centercourseware.sflep.com",
    //练习答题页面，子页面
    ".sflep.com/test/",
    //考试答题页面
    "wetest.sflep.com/Test"
    // 新url，内容未变
  ];
  function initialize() {
    let isAvailable = false;
    for (const url of availableUrls) {
      if (location.href.includes(url)) {
        isAvailable = true;
        break;
      }
    }
    if (!isAvailable) {
      logger.debug("not in eocs page");
      return;
    }
    if (document.querySelector(`#${EXTENSION_ID}`)) {
      logger.debug("already initialized");
      return;
    }
    createRoot(
      (() => {
        const app = document.createElement("div");
        app.id = EXTENSION_ID;
        document.body.append(app);
        return app;
      })()
    ).render(
      /* @__PURE__ */ jsx(React$1.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
    );
  }
  (async function() {
    await initialUserSettings();
    initialize();
  })();
})();
