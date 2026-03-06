/*! For license information please see main.0a7efda4.js.LICENSE.txt */
(() => {
    "use strict";
    var e = {
            4(e, t, n) {
                var r = n(853),
                    a = n(43),
                    i = n(950);

                function o(e) {
                    var t = "https://react.dev/errors/" + e;
                    if (1 < arguments.length) {
                        t += "?args[]=" + encodeURIComponent(arguments[1]);
                        for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n])
                    }
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }

                function s(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
                }

                function l(e) {
                    var t = e,
                        n = e;
                    if (e.alternate)
                        for (; t.return;) t = t.return;
                    else {
                        e = t;
                        do {
                            0 !== (4098 & (t = e).flags) && (n = t.return), e = t.return
                        } while (e)
                    }
                    return 3 === t.tag ? n : null
                }

                function u(e) {
                    if (13 === e.tag) {
                        var t = e.memoizedState;
                        if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                    }
                    return null
                }

                function c(e) {
                    if (31 === e.tag) {
                        var t = e.memoizedState;
                        if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                    }
                    return null
                }

                function d(e) {
                    if (l(e) !== e) throw Error(o(188))
                }

                function f(e) {
                    var t = e.tag;
                    if (5 === t || 26 === t || 27 === t || 6 === t) return e;
                    for (e = e.child; null !== e;) {
                        if (null !== (t = f(e))) return t;
                        e = e.sibling
                    }
                    return null
                }
                var h = Object.assign,
                    p = Symbol.for("react.element"),
                    m = Symbol.for("react.transitional.element"),
                    g = Symbol.for("react.portal"),
                    v = Symbol.for("react.fragment"),
                    y = Symbol.for("react.strict_mode"),
                    b = Symbol.for("react.profiler"),
                    x = Symbol.for("react.consumer"),
                    w = Symbol.for("react.context"),
                    S = Symbol.for("react.forward_ref"),
                    k = Symbol.for("react.suspense"),
                    E = Symbol.for("react.suspense_list"),
                    T = Symbol.for("react.memo"),
                    C = Symbol.for("react.lazy");
                Symbol.for("react.scope");
                var P = Symbol.for("react.activity");
                Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
                var N = Symbol.for("react.memo_cache_sentinel");
                Symbol.for("react.view_transition");
                var R = Symbol.iterator;

                function j(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof(e = R && e[R] || e["@@iterator"]) ? e : null
                }
                var A = Symbol.for("react.client.reference");

                function F(e) {
                    if (null == e) return null;
                    if ("function" === typeof e) return e.$$typeof === A ? null : e.displayName || e.name || null;
                    if ("string" === typeof e) return e;
                    switch (e) {
                        case v:
                            return "Fragment";
                        case b:
                            return "Profiler";
                        case y:
                            return "StrictMode";
                        case k:
                            return "Suspense";
                        case E:
                            return "SuspenseList";
                        case P:
                            return "Activity"
                    }
                    if ("object" === typeof e) switch (e.$$typeof) {
                        case g:
                            return "Portal";
                        case w:
                            return e.displayName || "Context";
                        case x:
                            return (e._context.displayName || "Context") + ".Consumer";
                        case S:
                            var t = e.render;
                            return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                        case T:
                            return null !== (t = e.displayName || null) ? t : F(e.type) || "Memo";
                        case C:
                            t = e._payload, e = e._init;
                            try {
                                return F(e(t))
                            } catch (Lt) {}
                    }
                    return null
                }
                var O = Array.isArray,
                    D = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
                    M = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
                    L = {
                        pending: !1,
                        data: null,
                        method: null,
                        action: null
                    },
                    _ = [],
                    z = -1;

                function I(e) {
                    return {
                        current: e
                    }
                }

                function B(e) {
                    0 > z || (e.current = _[z], _[z] = null, z--)
                }

                function V(e, t) {
                    z++, _[z] = e.current, e.current = t
                }
                var U, H, W = I(null),
                    q = I(null),
                    $ = I(null),
                    Y = I(null);

                function K(e, t) {
                    switch (V($, t), V(q, e), V(W, null), t.nodeType) {
                        case 9:
                        case 11:
                            e = (e = t.documentElement) && (e = e.namespaceURI) ? yd(e) : 0;
                            break;
                        default:
                            if (e = t.tagName, t = t.namespaceURI) e = bd(t = yd(t), e);
                            else switch (e) {
                                case "svg":
                                    e = 1;
                                    break;
                                case "math":
                                    e = 2;
                                    break;
                                default:
                                    e = 0
                            }
                    }
                    B(W), V(W, e)
                }

                function X() {
                    B(W), B(q), B($)
                }

                function Q(e) {
                    null !== e.memoizedState && V(Y, e);
                    var t = W.current,
                        n = bd(t, e.type);
                    t !== n && (V(q, e), V(W, n))
                }

                function G(e) {
                    q.current === e && (B(W), B(q)), Y.current === e && (B(Y), ff._currentValue = L)
                }

                function J(e) {
                    if (void 0 === U) try {
                        throw Error()
                    } catch (Lt) {
                        var t = Lt.stack.trim().match(/\n( *(at )?)/);
                        U = t && t[1] || "", H = -1 < Lt.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < Lt.stack.indexOf("@") ? "@unknown:0:0" : ""
                    }
                    return "\n" + U + e + H
                }
                var Z = !1;

                function ee(e, t) {
                    if (!e || Z) return "";
                    Z = !0;
                    var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        var r = {
                            DetermineComponentFrameRoot: function() {
                                try {
                                    if (t) {
                                        var n = function() {
                                            throw Error()
                                        };
                                        if (Object.defineProperty(n.prototype, "props", {
                                                set: function() {
                                                    throw Error()
                                                }
                                            }), "object" === typeof Reflect && Reflect.construct) {
                                            try {
                                                Reflect.construct(n, [])
                                            } catch (Lt) {
                                                var r = Lt
                                            }
                                            Reflect.construct(e, [], n)
                                        } else {
                                            try {
                                                n.call()
                                            } catch (a) {
                                                r = a
                                            }
                                            e.call(n.prototype)
                                        }
                                    } else {
                                        try {
                                            throw Error()
                                        } catch (i) {
                                            r = i
                                        }(n = e()) && "function" === typeof n.catch && n.catch(function() {})
                                    }
                                } catch (o) {
                                    if (o && r && "string" === typeof o.stack) return [o.stack, r.stack]
                                }
                                return [null, null]
                            }
                        };
                        r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                        var a = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
                        a && a.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                            value: "DetermineComponentFrameRoot"
                        });
                        var i = r.DetermineComponentFrameRoot(),
                            o = i[0],
                            s = i[1];
                        if (o && s) {
                            var l = o.split("\n"),
                                u = s.split("\n");
                            for (a = r = 0; r < l.length && !l[r].includes("DetermineComponentFrameRoot");) r++;
                            for (; a < u.length && !u[a].includes("DetermineComponentFrameRoot");) a++;
                            if (r === l.length || a === u.length)
                                for (r = l.length - 1, a = u.length - 1; 1 <= r && 0 <= a && l[r] !== u[a];) a--;
                            for (; 1 <= r && 0 <= a; r--, a--)
                                if (l[r] !== u[a]) {
                                    if (1 !== r || 1 !== a)
                                        do {
                                            if (r--, 0 > --a || l[r] !== u[a]) {
                                                var c = "\n" + l[r].replace(" at new ", " at ");
                                                return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c
                                            }
                                        } while (1 <= r && 0 <= a);
                                    break
                                }
                        }
                    } finally {
                        Z = !1, Error.prepareStackTrace = n
                    }
                    return (n = e ? e.displayName || e.name : "") ? J(n) : ""
                }

                function te(e, t) {
                    switch (e.tag) {
                        case 26:
                        case 27:
                        case 5:
                            return J(e.type);
                        case 16:
                            return J("Lazy");
                        case 13:
                            return e.child !== t && null !== t ? J("Suspense Fallback") : J("Suspense");
                        case 19:
                            return J("SuspenseList");
                        case 0:
                        case 15:
                            return ee(e.type, !1);
                        case 11:
                            return ee(e.type.render, !1);
                        case 1:
                            return ee(e.type, !0);
                        case 31:
                            return J("Activity");
                        default:
                            return ""
                    }
                }

                function ne(e) {
                    try {
                        var t = "",
                            n = null;
                        do {
                            t += te(e, n), n = e, e = e.return
                        } while (e);
                        return t
                    } catch (Lt) {
                        return "\nError generating stack: " + Lt.message + "\n" + Lt.stack
                    }
                }
                var re = Object.prototype.hasOwnProperty,
                    ae = r.unstable_scheduleCallback,
                    ie = r.unstable_cancelCallback,
                    oe = r.unstable_shouldYield,
                    se = r.unstable_requestPaint,
                    le = r.unstable_now,
                    ue = r.unstable_getCurrentPriorityLevel,
                    ce = r.unstable_ImmediatePriority,
                    de = r.unstable_UserBlockingPriority,
                    fe = r.unstable_NormalPriority,
                    he = r.unstable_LowPriority,
                    pe = r.unstable_IdlePriority,
                    me = r.log,
                    ge = r.unstable_setDisableYieldValue,
                    ve = null,
                    ye = null;

                function be(e) {
                    if ("function" === typeof me && ge(e), ye && "function" === typeof ye.setStrictMode) try {
                        ye.setStrictMode(ve, e)
                    } catch (t) {}
                }
                var xe = Math.clz32 ? Math.clz32 : function(e) {
                        return e >>>= 0, 0 === e ? 32 : 31 - (we(e) / Se | 0) | 0
                    },
                    we = Math.log,
                    Se = Math.LN2;
                var ke = 256,
                    Ee = 262144,
                    Te = 4194304;

                function Ce(e) {
                    var t = 42 & e;
                    if (0 !== t) return t;
                    switch (e & -e) {
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
                            return 64;
                        case 128:
                            return 128;
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
                            return 261888 & e;
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return 3932160 & e;
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                            return 62914560 & e;
                        case 67108864:
                            return 67108864;
                        case 134217728:
                            return 134217728;
                        case 268435456:
                            return 268435456;
                        case 536870912:
                            return 536870912;
                        case 1073741824:
                            return 0;
                        default:
                            return e
                    }
                }

                function Pe(e, t, n) {
                    var r = e.pendingLanes;
                    if (0 === r) return 0;
                    var a = 0,
                        i = e.suspendedLanes,
                        o = e.pingedLanes;
                    e = e.warmLanes;
                    var s = 134217727 & r;
                    return 0 !== s ? 0 !== (r = s & ~i) ? a = Ce(r) : 0 !== (o &= s) ? a = Ce(o) : n || 0 !== (n = s & ~e) && (a = Ce(n)) : 0 !== (s = r & ~i) ? a = Ce(s) : 0 !== o ? a = Ce(o) : n || 0 !== (n = r & ~e) && (a = Ce(n)), 0 === a ? 0 : 0 !== t && t !== a && 0 === (t & i) && ((i = a & -a) >= (n = t & -t) || 32 === i && 0 !== (4194048 & n)) ? t : a
                }

                function Ne(e, t) {
                    return 0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t)
                }

                function Re(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 4:
                        case 8:
                        case 64:
                            return t + 250;
                        case 16:
                        case 32:
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
                            return t + 5e3;
                        default:
                            return -1
                    }
                }

                function je() {
                    var e = Te;
                    return 0 === (62914560 & (Te <<= 1)) && (Te = 4194304), e
                }

                function Ae(e) {
                    for (var t = [], n = 0; 31 > n; n++) t.push(e);
                    return t
                }

                function Fe(e, t) {
                    e.pendingLanes |= t, 268435456 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
                }

                function Oe(e, t, n) {
                    e.pendingLanes |= t, e.suspendedLanes &= ~t;
                    var r = 31 - xe(t);
                    e.entangledLanes |= t, e.entanglements[r] = 1073741824 | e.entanglements[r] | 261930 & n
                }

                function De(e, t) {
                    var n = e.entangledLanes |= t;
                    for (e = e.entanglements; n;) {
                        var r = 31 - xe(n),
                            a = 1 << r;
                        a & t | e[r] & t && (e[r] |= t), n &= ~a
                    }
                }

                function Me(e, t) {
                    var n = t & -t;
                    return 0 !== ((n = 0 !== (42 & n) ? 1 : Le(n)) & (e.suspendedLanes | t)) ? 0 : n
                }

                function Le(e) {
                    switch (e) {
                        case 2:
                            e = 1;
                            break;
                        case 8:
                            e = 4;
                            break;
                        case 32:
                            e = 16;
                            break;
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
                            e = 128;
                            break;
                        case 268435456:
                            e = 134217728;
                            break;
                        default:
                            e = 0
                    }
                    return e
                }

                function _e(e) {
                    return 2 < (e &= -e) ? 8 < e ? 0 !== (134217727 & e) ? 32 : 268435456 : 8 : 2
                }

                function ze() {
                    var e = M.p;
                    return 0 !== e ? e : void 0 === (e = window.event) ? 32 : Nf(e.type)
                }

                function Ie(e, t) {
                    var n = M.p;
                    try {
                        return M.p = e, t()
                    } finally {
                        M.p = n
                    }
                }
                var Be = Math.random().toString(36).slice(2),
                    Ve = "__reactFiber$" + Be,
                    Ue = "__reactProps$" + Be,
                    He = "__reactContainer$" + Be,
                    We = "__reactEvents$" + Be,
                    qe = "__reactListeners$" + Be,
                    $e = "__reactHandles$" + Be,
                    Ye = "__reactResources$" + Be,
                    Ke = "__reactMarker$" + Be;

                function Xe(e) {
                    delete e[Ve], delete e[Ue], delete e[We], delete e[qe], delete e[$e]
                }

                function Qe(e) {
                    var t = e[Ve];
                    if (t) return t;
                    for (var n = e.parentNode; n;) {
                        if (t = n[He] || n[Ve]) {
                            if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                                for (e = _d(e); null !== e;) {
                                    if (n = e[Ve]) return n;
                                    e = _d(e)
                                }
                            return t
                        }
                        n = (e = n).parentNode
                    }
                    return null
                }

                function Ge(e) {
                    if (e = e[Ve] || e[He]) {
                        var t = e.tag;
                        if (5 === t || 6 === t || 13 === t || 31 === t || 26 === t || 27 === t || 3 === t) return e
                    }
                    return null
                }

                function Je(e) {
                    var t = e.tag;
                    if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
                    throw Error(o(33))
                }

                function Ze(e) {
                    var t = e[Ye];
                    return t || (t = e[Ye] = {
                        hoistableStyles: new Map,
                        hoistableScripts: new Map
                    }), t
                }

                function et(e) {
                    e[Ke] = !0
                }
                var tt = new Set,
                    nt = {};

                function rt(e, t) {
                    at(e, t), at(e + "Capture", t)
                }

                function at(e, t) {
                    for (nt[e] = t, e = 0; e < t.length; e++) tt.add(t[e])
                }
                var it = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
                    ot = {},
                    st = {};

                function lt(e, t, n) {
                    if (a = t, re.call(st, a) || !re.call(ot, a) && (it.test(a) ? st[a] = !0 : (ot[a] = !0, 0)))
                        if (null === n) e.removeAttribute(t);
                        else {
                            switch (typeof n) {
                                case "undefined":
                                case "function":
                                case "symbol":
                                    return void e.removeAttribute(t);
                                case "boolean":
                                    var r = t.toLowerCase().slice(0, 5);
                                    if ("data-" !== r && "aria-" !== r) return void e.removeAttribute(t)
                            }
                            e.setAttribute(t, "" + n)
                        }
                    var a
                }

                function ut(e, t, n) {
                    if (null === n) e.removeAttribute(t);
                    else {
                        switch (typeof n) {
                            case "undefined":
                            case "function":
                            case "symbol":
                            case "boolean":
                                return void e.removeAttribute(t)
                        }
                        e.setAttribute(t, "" + n)
                    }
                }

                function ct(e, t, n, r) {
                    if (null === r) e.removeAttribute(n);
                    else {
                        switch (typeof r) {
                            case "undefined":
                            case "function":
                            case "symbol":
                            case "boolean":
                                return void e.removeAttribute(n)
                        }
                        e.setAttributeNS(t, n, "" + r)
                    }
                }

                function dt(e) {
                    switch (typeof e) {
                        case "bigint":
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                        case "object":
                            return e;
                        default:
                            return ""
                    }
                }

                function ft(e) {
                    var t = e.type;
                    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
                }

                function ht(e) {
                    if (!e._valueTracker) {
                        var t = ft(e) ? "checked" : "value";
                        e._valueTracker = function(e, t, n) {
                            var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
                            if (!e.hasOwnProperty(t) && "undefined" !== typeof r && "function" === typeof r.get && "function" === typeof r.set) {
                                var a = r.get,
                                    i = r.set;
                                return Object.defineProperty(e, t, {
                                    configurable: !0,
                                    get: function() {
                                        return a.call(this)
                                    },
                                    set: function(e) {
                                        n = "" + e, i.call(this, e)
                                    }
                                }), Object.defineProperty(e, t, {
                                    enumerable: r.enumerable
                                }), {
                                    getValue: function() {
                                        return n
                                    },
                                    setValue: function(e) {
                                        n = "" + e
                                    },
                                    stopTracking: function() {
                                        e._valueTracker = null, delete e[t]
                                    }
                                }
                            }
                        }(e, t, "" + e[t])
                    }
                }

                function pt(e) {
                    if (!e) return !1;
                    var t = e._valueTracker;
                    if (!t) return !0;
                    var n = t.getValue(),
                        r = "";
                    return e && (r = ft(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
                }

                function mt(e) {
                    if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                    try {
                        return e.activeElement || e.body
                    } catch (t) {
                        return e.body
                    }
                }
                var gt = /[\n"\\]/g;

                function vt(e) {
                    return e.replace(gt, function(e) {
                        return "\\" + e.charCodeAt(0).toString(16) + " "
                    })
                }

                function yt(e, t, n, r, a, i, o, s) {
                    e.name = "", null != o && "function" !== typeof o && "symbol" !== typeof o && "boolean" !== typeof o ? e.type = o : e.removeAttribute("type"), null != t ? "number" === o ? (0 === t && "" === e.value || e.value != t) && (e.value = "" + dt(t)) : e.value !== "" + dt(t) && (e.value = "" + dt(t)) : "submit" !== o && "reset" !== o || e.removeAttribute("value"), null != t ? xt(e, o, dt(t)) : null != n ? xt(e, o, dt(n)) : null != r && e.removeAttribute("value"), null == a && null != i && (e.defaultChecked = !!i), null != a && (e.checked = a && "function" !== typeof a && "symbol" !== typeof a), null != s && "function" !== typeof s && "symbol" !== typeof s && "boolean" !== typeof s ? e.name = "" + dt(s) : e.removeAttribute("name")
                }

                function bt(e, t, n, r, a, i, o, s) {
                    if (null != i && "function" !== typeof i && "symbol" !== typeof i && "boolean" !== typeof i && (e.type = i), null != t || null != n) {
                        if (!("submit" !== i && "reset" !== i || void 0 !== t && null !== t)) return void ht(e);
                        n = null != n ? "" + dt(n) : "", t = null != t ? "" + dt(t) : n, s || t === e.value || (e.value = t), e.defaultValue = t
                    }
                    r = "function" !== typeof(r = null != r ? r : a) && "symbol" !== typeof r && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, null != o && "function" !== typeof o && "symbol" !== typeof o && "boolean" !== typeof o && (e.name = o), ht(e)
                }

                function xt(e, t, n) {
                    "number" === t && mt(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n)
                }

                function wt(e, t, n, r) {
                    if (e = e.options, t) {
                        t = {};
                        for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
                        for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0)
                    } else {
                        for (n = "" + dt(n), t = null, a = 0; a < e.length; a++) {
                            if (e[a].value === n) return e[a].selected = !0, void(r && (e[a].defaultSelected = !0));
                            null !== t || e[a].disabled || (t = e[a])
                        }
                        null !== t && (t.selected = !0)
                    }
                }

                function St(e, t, n) {
                    null == t || ((t = "" + dt(t)) !== e.value && (e.value = t), null != n) ? e.defaultValue = null != n ? "" + dt(n) : "" : e.defaultValue !== t && (e.defaultValue = t)
                }

                function kt(e, t, n, r) {
                    if (null == t) {
                        if (null != r) {
                            if (null != n) throw Error(o(92));
                            if (O(r)) {
                                if (1 < r.length) throw Error(o(93));
                                r = r[0]
                            }
                            n = r
                        }
                        null == n && (n = ""), t = n
                    }
                    n = dt(t), e.defaultValue = n, (r = e.textContent) === n && "" !== r && null !== r && (e.value = r), ht(e)
                }

                function Et(e, t) {
                    if (t) {
                        var n = e.firstChild;
                        if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                    }
                    e.textContent = t
                }
                var Tt = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

                function Ct(e, t, n) {
                    var r = 0 === t.indexOf("--");
                    null == n || "boolean" === typeof n || "" === n ? r ? e.setProperty(t, "") : "float" === t ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : "number" !== typeof n || 0 === n || Tt.has(t) ? "float" === t ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px"
                }

                function Pt(e, t, n) {
                    if (null != t && "object" !== typeof t) throw Error(o(62));
                    if (e = e.style, null != n) {
                        for (var r in n) !n.hasOwnProperty(r) || null != t && t.hasOwnProperty(r) || (0 === r.indexOf("--") ? e.setProperty(r, "") : "float" === r ? e.cssFloat = "" : e[r] = "");
                        for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && Ct(e, a, r)
                    } else
                        for (var i in t) t.hasOwnProperty(i) && Ct(e, i, t[i])
                }

                function Nt(e) {
                    if (-1 === e.indexOf("-")) return !1;
                    switch (e) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return !1;
                        default:
                            return !0
                    }
                }
                var Rt = new Map([
                        ["acceptCharset", "accept-charset"],
                        ["htmlFor", "for"],
                        ["httpEquiv", "http-equiv"],
                        ["crossOrigin", "crossorigin"],
                        ["accentHeight", "accent-height"],
                        ["alignmentBaseline", "alignment-baseline"],
                        ["arabicForm", "arabic-form"],
                        ["baselineShift", "baseline-shift"],
                        ["capHeight", "cap-height"],
                        ["clipPath", "clip-path"],
                        ["clipRule", "clip-rule"],
                        ["colorInterpolation", "color-interpolation"],
                        ["colorInterpolationFilters", "color-interpolation-filters"],
                        ["colorProfile", "color-profile"],
                        ["colorRendering", "color-rendering"],
                        ["dominantBaseline", "dominant-baseline"],
                        ["enableBackground", "enable-background"],
                        ["fillOpacity", "fill-opacity"],
                        ["fillRule", "fill-rule"],
                        ["floodColor", "flood-color"],
                        ["floodOpacity", "flood-opacity"],
                        ["fontFamily", "font-family"],
                        ["fontSize", "font-size"],
                        ["fontSizeAdjust", "font-size-adjust"],
                        ["fontStretch", "font-stretch"],
                        ["fontStyle", "font-style"],
                        ["fontVariant", "font-variant"],
                        ["fontWeight", "font-weight"],
                        ["glyphName", "glyph-name"],
                        ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
                        ["glyphOrientationVertical", "glyph-orientation-vertical"],
                        ["horizAdvX", "horiz-adv-x"],
                        ["horizOriginX", "horiz-origin-x"],
                        ["imageRendering", "image-rendering"],
                        ["letterSpacing", "letter-spacing"],
                        ["lightingColor", "lighting-color"],
                        ["markerEnd", "marker-end"],
                        ["markerMid", "marker-mid"],
                        ["markerStart", "marker-start"],
                        ["overlinePosition", "overline-position"],
                        ["overlineThickness", "overline-thickness"],
                        ["paintOrder", "paint-order"],
                        ["panose-1", "panose-1"],
                        ["pointerEvents", "pointer-events"],
                        ["renderingIntent", "rendering-intent"],
                        ["shapeRendering", "shape-rendering"],
                        ["stopColor", "stop-color"],
                        ["stopOpacity", "stop-opacity"],
                        ["strikethroughPosition", "strikethrough-position"],
                        ["strikethroughThickness", "strikethrough-thickness"],
                        ["strokeDasharray", "stroke-dasharray"],
                        ["strokeDashoffset", "stroke-dashoffset"],
                        ["strokeLinecap", "stroke-linecap"],
                        ["strokeLinejoin", "stroke-linejoin"],
                        ["strokeMiterlimit", "stroke-miterlimit"],
                        ["strokeOpacity", "stroke-opacity"],
                        ["strokeWidth", "stroke-width"],
                        ["textAnchor", "text-anchor"],
                        ["textDecoration", "text-decoration"],
                        ["textRendering", "text-rendering"],
                        ["transformOrigin", "transform-origin"],
                        ["underlinePosition", "underline-position"],
                        ["underlineThickness", "underline-thickness"],
                        ["unicodeBidi", "unicode-bidi"],
                        ["unicodeRange", "unicode-range"],
                        ["unitsPerEm", "units-per-em"],
                        ["vAlphabetic", "v-alphabetic"],
                        ["vHanging", "v-hanging"],
                        ["vIdeographic", "v-ideographic"],
                        ["vMathematical", "v-mathematical"],
                        ["vectorEffect", "vector-effect"],
                        ["vertAdvY", "vert-adv-y"],
                        ["vertOriginX", "vert-origin-x"],
                        ["vertOriginY", "vert-origin-y"],
                        ["wordSpacing", "word-spacing"],
                        ["writingMode", "writing-mode"],
                        ["xmlnsXlink", "xmlns:xlink"],
                        ["xHeight", "x-height"]
                    ]),
                    jt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

                function At(e) {
                    return jt.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
                }

                function Ft() {}
                var Ot = null;

                function Dt(e) {
                    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
                }
                var Mt = null,
                    _t = null;

                function zt(e) {
                    var t = Ge(e);
                    if (t && (e = t.stateNode)) {
                        var n = e[Ue] || null;
                        e: switch (e = t.stateNode, t.type) {
                            case "input":
                                if (yt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, "radio" === n.type && null != t) {
                                    for (n = e; n.parentNode;) n = n.parentNode;
                                    for (n = n.querySelectorAll('input[name="' + vt("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                                        var r = n[t];
                                        if (r !== e && r.form === e.form) {
                                            var a = r[Ue] || null;
                                            if (!a) throw Error(o(90));
                                            yt(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name)
                                        }
                                    }
                                    for (t = 0; t < n.length; t++)(r = n[t]).form === e.form && pt(r)
                                }
                                break e;
                            case "textarea":
                                St(e, n.value, n.defaultValue);
                                break e;
                            case "select":
                                null != (t = n.value) && wt(e, !!n.multiple, t, !1)
                        }
                    }
                }
                var It = !1;

                function Bt(e, t, n) {
                    if (It) return e(t, n);
                    It = !0;
                    try {
                        return e(t)
                    } finally {
                        if (It = !1, (null !== Mt || null !== _t) && (ec(), Mt && (t = Mt, e = _t, _t = Mt = null, zt(t), e)))
                            for (t = 0; t < e.length; t++) zt(e[t])
                    }
                }

                function Vt(e, t) {
                    var n = e.stateNode;
                    if (null === n) return null;
                    var r = n[Ue] || null;
                    if (null === r) return null;
                    n = r[t];
                    e: switch (t) {
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
                            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                            break e;
                        default:
                            e = !1
                    }
                    if (e) return null;
                    if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
                    return n
                }
                var Ut = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                    Ht = !1;
                if (Ut) try {
                    var Wt = {};
                    Object.defineProperty(Wt, "passive", {
                        get: function() {
                            Ht = !0
                        }
                    }), window.addEventListener("test", Wt, Wt), window.removeEventListener("test", Wt, Wt)
                } catch (Zf) {
                    Ht = !1
                }
                var qt = null,
                    $t = null,
                    Yt = null;

                function Kt() {
                    if (Yt) return Yt;
                    var e, t, n = $t,
                        r = n.length,
                        a = "value" in qt ? qt.value : qt.textContent,
                        i = a.length;
                    for (e = 0; e < r && n[e] === a[e]; e++);
                    var o = r - e;
                    for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
                    return Yt = a.slice(e, 1 < t ? 1 - t : void 0)
                }

                function Xt(e) {
                    var t = e.keyCode;
                    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
                }

                function Qt() {
                    return !0
                }

                function Gt() {
                    return !1
                }

                function Jt(e) {
                    function t(t, n, r, a, i) {
                        for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = i, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(a) : a[o]);
                        return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? Qt : Gt, this.isPropagationStopped = Gt, this
                    }
                    return h(t.prototype, {
                        preventDefault: function() {
                            this.defaultPrevented = !0;
                            var e = this.nativeEvent;
                            e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = Qt)
                        },
                        stopPropagation: function() {
                            var e = this.nativeEvent;
                            e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = Qt)
                        },
                        persist: function() {},
                        isPersistent: Qt
                    }), t
                }
                var Zt, en, tn, nn = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function(e) {
                            return e.timeStamp || Date.now()
                        },
                        defaultPrevented: 0,
                        isTrusted: 0
                    },
                    rn = Jt(nn),
                    an = h({}, nn, {
                        view: 0,
                        detail: 0
                    }),
                    on = Jt(an),
                    sn = h({}, an, {
                        screenX: 0,
                        screenY: 0,
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        getModifierState: yn,
                        button: 0,
                        buttons: 0,
                        relatedTarget: function(e) {
                            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                        },
                        movementX: function(e) {
                            return "movementX" in e ? e.movementX : (e !== tn && (tn && "mousemove" === e.type ? (Zt = e.screenX - tn.screenX, en = e.screenY - tn.screenY) : en = Zt = 0, tn = e), Zt)
                        },
                        movementY: function(e) {
                            return "movementY" in e ? e.movementY : en
                        }
                    }),
                    ln = Jt(sn),
                    un = Jt(h({}, sn, {
                        dataTransfer: 0
                    })),
                    cn = Jt(h({}, an, {
                        relatedTarget: 0
                    })),
                    dn = Jt(h({}, nn, {
                        animationName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    fn = Jt(h({}, nn, {
                        clipboardData: function(e) {
                            return "clipboardData" in e ? e.clipboardData : window.clipboardData
                        }
                    })),
                    hn = Jt(h({}, nn, {
                        data: 0
                    })),
                    pn = {
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
                    },
                    mn = {
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
                    },
                    gn = {
                        Alt: "altKey",
                        Control: "ctrlKey",
                        Meta: "metaKey",
                        Shift: "shiftKey"
                    };

                function vn(e) {
                    var t = this.nativeEvent;
                    return t.getModifierState ? t.getModifierState(e) : !!(e = gn[e]) && !!t[e]
                }

                function yn() {
                    return vn
                }
                var bn = Jt(h({}, an, {
                        key: function(e) {
                            if (e.key) {
                                var t = pn[e.key] || e.key;
                                if ("Unidentified" !== t) return t
                            }
                            return "keypress" === e.type ? 13 === (e = Xt(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? mn[e.keyCode] || "Unidentified" : ""
                        },
                        code: 0,
                        location: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        repeat: 0,
                        locale: 0,
                        getModifierState: yn,
                        charCode: function(e) {
                            return "keypress" === e.type ? Xt(e) : 0
                        },
                        keyCode: function(e) {
                            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        },
                        which: function(e) {
                            return "keypress" === e.type ? Xt(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        }
                    })),
                    xn = Jt(h({}, sn, {
                        pointerId: 0,
                        width: 0,
                        height: 0,
                        pressure: 0,
                        tangentialPressure: 0,
                        tiltX: 0,
                        tiltY: 0,
                        twist: 0,
                        pointerType: 0,
                        isPrimary: 0
                    })),
                    wn = Jt(h({}, an, {
                        touches: 0,
                        targetTouches: 0,
                        changedTouches: 0,
                        altKey: 0,
                        metaKey: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        getModifierState: yn
                    })),
                    Sn = Jt(h({}, nn, {
                        propertyName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    kn = Jt(h({}, sn, {
                        deltaX: function(e) {
                            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                        },
                        deltaY: function(e) {
                            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                        },
                        deltaZ: 0,
                        deltaMode: 0
                    })),
                    En = Jt(h({}, nn, {
                        newState: 0,
                        oldState: 0
                    })),
                    Tn = [9, 13, 27, 32],
                    Cn = Ut && "CompositionEvent" in window,
                    Pn = null;
                Ut && "documentMode" in document && (Pn = document.documentMode);
                var Nn = Ut && "TextEvent" in window && !Pn,
                    Rn = Ut && (!Cn || Pn && 8 < Pn && 11 >= Pn),
                    jn = String.fromCharCode(32),
                    An = !1;

                function Fn(e, t) {
                    switch (e) {
                        case "keyup":
                            return -1 !== Tn.indexOf(t.keyCode);
                        case "keydown":
                            return 229 !== t.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return !0;
                        default:
                            return !1
                    }
                }

                function On(e) {
                    return "object" === typeof(e = e.detail) && "data" in e ? e.data : null
                }
                var Dn = !1;
                var Mn = {
                    color: !0,
                    date: !0,
                    datetime: !0,
                    "datetime-local": !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    password: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0
                };

                function Ln(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return "input" === t ? !!Mn[e.type] : "textarea" === t
                }

                function _n(e, t, n, r) {
                    Mt ? _t ? _t.push(r) : _t = [r] : Mt = r, 0 < (t = ad(t, "onChange")).length && (n = new rn("onChange", "change", null, n, r), e.push({
                        event: n,
                        listeners: t
                    }))
                }
                var zn = null,
                    In = null;

                function Bn(e) {
                    Qc(e, 0)
                }

                function Vn(e) {
                    if (pt(Je(e))) return e
                }

                function Un(e, t) {
                    if ("change" === e) return t
                }
                var Hn = !1;
                if (Ut) {
                    var Wn;
                    if (Ut) {
                        var qn = "oninput" in document;
                        if (!qn) {
                            var $n = document.createElement("div");
                            $n.setAttribute("oninput", "return;"), qn = "function" === typeof $n.oninput
                        }
                        Wn = qn
                    } else Wn = !1;
                    Hn = Wn && (!document.documentMode || 9 < document.documentMode)
                }

                function Yn() {
                    zn && (zn.detachEvent("onpropertychange", Kn), In = zn = null)
                }

                function Kn(e) {
                    if ("value" === e.propertyName && Vn(In)) {
                        var t = [];
                        _n(t, In, e, Dt(e)), Bt(Bn, t)
                    }
                }

                function Xn(e, t, n) {
                    "focusin" === e ? (Yn(), In = n, (zn = t).attachEvent("onpropertychange", Kn)) : "focusout" === e && Yn()
                }

                function Qn(e) {
                    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Vn(In)
                }

                function Gn(e, t) {
                    if ("click" === e) return Vn(t)
                }

                function Jn(e, t) {
                    if ("input" === e || "change" === e) return Vn(t)
                }
                var Zn = "function" === typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
                };

                function er(e, t) {
                    if (Zn(e, t)) return !0;
                    if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (r = 0; r < n.length; r++) {
                        var a = n[r];
                        if (!re.call(t, a) || !Zn(e[a], t[a])) return !1
                    }
                    return !0
                }

                function tr(e) {
                    for (; e && e.firstChild;) e = e.firstChild;
                    return e
                }

                function nr(e, t) {
                    var n, r = tr(e);
                    for (e = 0; r;) {
                        if (3 === r.nodeType) {
                            if (n = e + r.textContent.length, e <= t && n >= t) return {
                                node: r,
                                offset: t - e
                            };
                            e = n
                        }
                        e: {
                            for (; r;) {
                                if (r.nextSibling) {
                                    r = r.nextSibling;
                                    break e
                                }
                                r = r.parentNode
                            }
                            r = void 0
                        }
                        r = tr(r)
                    }
                }

                function rr(e, t) {
                    return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? rr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
                }

                function ar(e) {
                    for (var t = mt((e = null != e && null != e.ownerDocument && null != e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window).document); t instanceof e.HTMLIFrameElement;) {
                        try {
                            var n = "string" === typeof t.contentWindow.location.href
                        } catch (r) {
                            n = !1
                        }
                        if (!n) break;
                        t = mt((e = t.contentWindow).document)
                    }
                    return t
                }

                function ir(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
                }
                var or = Ut && "documentMode" in document && 11 >= document.documentMode,
                    sr = null,
                    lr = null,
                    ur = null,
                    cr = !1;

                function dr(e, t, n) {
                    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                    cr || null == sr || sr !== mt(r) || ("selectionStart" in (r = sr) && ir(r) ? r = {
                        start: r.selectionStart,
                        end: r.selectionEnd
                    } : r = {
                        anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                        anchorOffset: r.anchorOffset,
                        focusNode: r.focusNode,
                        focusOffset: r.focusOffset
                    }, ur && er(ur, r) || (ur = r, 0 < (r = ad(lr, "onSelect")).length && (t = new rn("onSelect", "select", null, t, n), e.push({
                        event: t,
                        listeners: r
                    }), t.target = sr)))
                }

                function fr(e, t) {
                    var n = {};
                    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
                }
                var hr = {
                        animationend: fr("Animation", "AnimationEnd"),
                        animationiteration: fr("Animation", "AnimationIteration"),
                        animationstart: fr("Animation", "AnimationStart"),
                        transitionrun: fr("Transition", "TransitionRun"),
                        transitionstart: fr("Transition", "TransitionStart"),
                        transitioncancel: fr("Transition", "TransitionCancel"),
                        transitionend: fr("Transition", "TransitionEnd")
                    },
                    pr = {},
                    mr = {};

                function gr(e) {
                    if (pr[e]) return pr[e];
                    if (!hr[e]) return e;
                    var t, n = hr[e];
                    for (t in n)
                        if (n.hasOwnProperty(t) && t in mr) return pr[e] = n[t];
                    return e
                }
                Ut && (mr = document.createElement("div").style, "AnimationEvent" in window || (delete hr.animationend.animation, delete hr.animationiteration.animation, delete hr.animationstart.animation), "TransitionEvent" in window || delete hr.transitionend.transition);
                var vr = gr("animationend"),
                    yr = gr("animationiteration"),
                    br = gr("animationstart"),
                    xr = gr("transitionrun"),
                    wr = gr("transitionstart"),
                    Sr = gr("transitioncancel"),
                    kr = gr("transitionend"),
                    Er = new Map,
                    Tr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

                function Cr(e, t) {
                    Er.set(e, t), rt(t, [e])
                }
                Tr.push("scrollEnd");
                var Pr = "function" === typeof reportError ? reportError : function(e) {
                        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
                            var t = new window.ErrorEvent("error", {
                                bubbles: !0,
                                cancelable: !0,
                                message: "object" === typeof e && null !== e && "string" === typeof e.message ? String(e.message) : String(e),
                                error: e
                            });
                            if (!window.dispatchEvent(t)) return
                        } else if ("object" === typeof process && "function" === typeof process.emit) return void process.emit("uncaughtException", e);
                        console.error(e)
                    },
                    Nr = [],
                    Rr = 0,
                    jr = 0;

                function Ar() {
                    for (var e = Rr, t = jr = Rr = 0; t < e;) {
                        var n = Nr[t];
                        Nr[t++] = null;
                        var r = Nr[t];
                        Nr[t++] = null;
                        var a = Nr[t];
                        Nr[t++] = null;
                        var i = Nr[t];
                        if (Nr[t++] = null, null !== r && null !== a) {
                            var o = r.pending;
                            null === o ? a.next = a : (a.next = o.next, o.next = a), r.pending = a
                        }
                        0 !== i && Mr(n, a, i)
                    }
                }

                function Fr(e, t, n, r) {
                    Nr[Rr++] = e, Nr[Rr++] = t, Nr[Rr++] = n, Nr[Rr++] = r, jr |= r, e.lanes |= r, null !== (e = e.alternate) && (e.lanes |= r)
                }

                function Or(e, t, n, r) {
                    return Fr(e, t, n, r), Lr(e)
                }

                function Dr(e, t) {
                    return Fr(e, null, null, t), Lr(e)
                }

                function Mr(e, t, n) {
                    e.lanes |= n;
                    var r = e.alternate;
                    null !== r && (r.lanes |= n);
                    for (var a = !1, i = e.return; null !== i;) i.childLanes |= n, null !== (r = i.alternate) && (r.childLanes |= n), 22 === i.tag && (null === (e = i.stateNode) || 1 & e._visibility || (a = !0)), e = i, i = i.return;
                    return 3 === e.tag ? (i = e.stateNode, a && null !== t && (a = 31 - xe(n), null === (r = (e = i.hiddenUpdates)[a]) ? e[a] = [t] : r.push(t), t.lane = 536870912 | n), i) : null
                }

                function Lr(e) {
                    if (50 < qu) throw qu = 0, $u = null, Error(o(185));
                    for (var t = e.return; null !== t;) t = (e = t).return;
                    return 3 === e.tag ? e.stateNode : null
                }
                var _r = {};

                function zr(e, t, n, r) {
                    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
                }

                function Ir(e, t, n, r) {
                    return new zr(e, t, n, r)
                }

                function Br(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function Vr(e, t) {
                    var n = e.alternate;
                    return null === n ? ((n = Ir(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 65011712 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n
                }

                function Ur(e, t) {
                    e.flags &= 65011714;
                    var n = e.alternate;
                    return null === n ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = null === t ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }), e
                }

                function Hr(e, t, n, r, a, i) {
                    var s = 0;
                    if (r = e, "function" === typeof e) Br(e) && (s = 1);
                    else if ("string" === typeof e) s = function(e, t, n) {
                        if (1 === n || null != t.itemProp) return !1;
                        switch (e) {
                            case "meta":
                            case "title":
                                return !0;
                            case "style":
                                if ("string" !== typeof t.precedence || "string" !== typeof t.href || "" === t.href) break;
                                return !0;
                            case "link":
                                if ("string" !== typeof t.rel || "string" !== typeof t.href || "" === t.href || t.onLoad || t.onError) break;
                                return "stylesheet" !== t.rel || (e = t.disabled, "string" === typeof t.precedence && null == e);
                            case "script":
                                if (t.async && "function" !== typeof t.async && "symbol" !== typeof t.async && !t.onLoad && !t.onError && t.src && "string" === typeof t.src) return !0
                        }
                        return !1
                    }(e, n, W.current) ? 26 : "html" === e || "head" === e || "body" === e ? 27 : 5;
                    else e: switch (e) {
                        case P:
                            return (e = Ir(31, n, t, a)).elementType = P, e.lanes = i, e;
                        case v:
                            return Wr(n.children, a, i, t);
                        case y:
                            s = 8, a |= 24;
                            break;
                        case b:
                            return (e = Ir(12, n, t, 2 | a)).elementType = b, e.lanes = i, e;
                        case k:
                            return (e = Ir(13, n, t, a)).elementType = k, e.lanes = i, e;
                        case E:
                            return (e = Ir(19, n, t, a)).elementType = E, e.lanes = i, e;
                        default:
                            if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                                case w:
                                    s = 10;
                                    break e;
                                case x:
                                    s = 9;
                                    break e;
                                case S:
                                    s = 11;
                                    break e;
                                case T:
                                    s = 14;
                                    break e;
                                case C:
                                    s = 16, r = null;
                                    break e
                            }
                            s = 29, n = Error(o(130, null === e ? "null" : typeof e, "")), r = null
                    }
                    return (t = Ir(s, n, t, a)).elementType = e, t.type = r, t.lanes = i, t
                }

                function Wr(e, t, n, r) {
                    return (e = Ir(7, e, r, t)).lanes = n, e
                }

                function qr(e, t, n) {
                    return (e = Ir(6, e, null, t)).lanes = n, e
                }

                function $r(e) {
                    var t = Ir(18, null, null, 0);
                    return t.stateNode = e, t
                }

                function Yr(e, t, n) {
                    return (t = Ir(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation
                    }, t
                }
                var Kr = new WeakMap;

                function Xr(e, t) {
                    if ("object" === typeof e && null !== e) {
                        var n = Kr.get(e);
                        return void 0 !== n ? n : (t = {
                            value: e,
                            source: t,
                            stack: ne(t)
                        }, Kr.set(e, t), t)
                    }
                    return {
                        value: e,
                        source: t,
                        stack: ne(t)
                    }
                }
                var Qr = [],
                    Gr = 0,
                    Jr = null,
                    Zr = 0,
                    ea = [],
                    ta = 0,
                    na = null,
                    ra = 1,
                    aa = "";

                function ia(e, t) {
                    Qr[Gr++] = Zr, Qr[Gr++] = Jr, Jr = e, Zr = t
                }

                function oa(e, t, n) {
                    ea[ta++] = ra, ea[ta++] = aa, ea[ta++] = na, na = e;
                    var r = ra;
                    e = aa;
                    var a = 32 - xe(r) - 1;
                    r &= ~(1 << a), n += 1;
                    var i = 32 - xe(t) + a;
                    if (30 < i) {
                        var o = a - a % 5;
                        i = (r & (1 << o) - 1).toString(32), r >>= o, a -= o, ra = 1 << 32 - xe(t) + a | n << a | r, aa = i + e
                    } else ra = 1 << i | n << a | r, aa = e
                }

                function sa(e) {
                    null !== e.return && (ia(e, 1), oa(e, 1, 0))
                }

                function la(e) {
                    for (; e === Jr;) Jr = Qr[--Gr], Qr[Gr] = null, Zr = Qr[--Gr], Qr[Gr] = null;
                    for (; e === na;) na = ea[--ta], ea[ta] = null, aa = ea[--ta], ea[ta] = null, ra = ea[--ta], ea[ta] = null
                }

                function ua(e, t) {
                    ea[ta++] = ra, ea[ta++] = aa, ea[ta++] = na, ra = t.id, aa = t.overflow, na = e
                }
                var ca = null,
                    da = null,
                    fa = !1,
                    ha = null,
                    pa = !1,
                    ma = Error(o(519));

                function ga(e) {
                    throw Sa(Xr(Error(o(418, 1 < arguments.length && void 0 !== arguments[1] && arguments[1] ? "text" : "HTML", "")), e)), ma
                }

                function va(e) {
                    var t = e.stateNode,
                        n = e.type,
                        r = e.memoizedProps;
                    switch (t[Ve] = e, t[Ue] = r, n) {
                        case "dialog":
                            Gc("cancel", t), Gc("close", t);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Gc("load", t);
                            break;
                        case "video":
                        case "audio":
                            for (n = 0; n < Kc.length; n++) Gc(Kc[n], t);
                            break;
                        case "source":
                            Gc("error", t);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Gc("error", t), Gc("load", t);
                            break;
                        case "details":
                            Gc("toggle", t);
                            break;
                        case "input":
                            Gc("invalid", t), bt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
                            break;
                        case "select":
                            Gc("invalid", t);
                            break;
                        case "textarea":
                            Gc("invalid", t), kt(t, r.value, r.defaultValue, r.children)
                    }
                    "string" !== typeof(n = r.children) && "number" !== typeof n && "bigint" !== typeof n || t.textContent === "" + n || !0 === r.suppressHydrationWarning || cd(t.textContent, n) ? (null != r.popover && (Gc("beforetoggle", t), Gc("toggle", t)), null != r.onScroll && Gc("scroll", t), null != r.onScrollEnd && Gc("scrollend", t), null != r.onClick && (t.onclick = Ft), t = !0) : t = !1, t || ga(e, !0)
                }

                function ya(e) {
                    for (ca = e.return; ca;) switch (ca.tag) {
                        case 5:
                        case 31:
                        case 13:
                            return void(pa = !1);
                        case 27:
                        case 3:
                            return void(pa = !0);
                        default:
                            ca = ca.return
                    }
                }

                function ba(e) {
                    if (e !== ca) return !1;
                    if (!fa) return ya(e), fa = !0, !1;
                    var t, n = e.tag;
                    if ((t = 3 !== n && 27 !== n) && ((t = 5 === n) && (t = !("form" !== (t = e.type) && "button" !== t) || xd(e.type, e.memoizedProps)), t = !t), t && da && ga(e), ya(e), 13 === n) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
                        da = Ld(e)
                    } else if (31 === n) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
                        da = Ld(e)
                    } else 27 === n ? (n = da, Pd(e.type) ? (e = Md, Md = null, da = e) : da = n) : da = ca ? Dd(e.stateNode.nextSibling) : null;
                    return !0
                }

                function xa() {
                    da = ca = null, fa = !1
                }

                function wa() {
                    var e = ha;
                    return null !== e && (null === Au ? Au = e : Au.push.apply(Au, e), ha = null), e
                }

                function Sa(e) {
                    null === ha ? ha = [e] : ha.push(e)
                }
                var ka = I(null),
                    Ea = null,
                    Ta = null;

                function Ca(e, t, n) {
                    V(ka, t._currentValue), t._currentValue = n
                }

                function Pa(e) {
                    e._currentValue = ka.current, B(ka)
                }

                function Na(e, t, n) {
                    for (; null !== e;) {
                        var r = e.alternate;
                        if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                        e = e.return
                    }
                }

                function Ra(e, t, n, r) {
                    var a = e.child;
                    for (null !== a && (a.return = e); null !== a;) {
                        var i = a.dependencies;
                        if (null !== i) {
                            var s = a.child;
                            i = i.firstContext;
                            e: for (; null !== i;) {
                                var l = i;
                                i = a;
                                for (var u = 0; u < t.length; u++)
                                    if (l.context === t[u]) {
                                        i.lanes |= n, null !== (l = i.alternate) && (l.lanes |= n), Na(i.return, n, e), r || (s = null);
                                        break e
                                    }
                                i = l.next
                            }
                        } else if (18 === a.tag) {
                            if (null === (s = a.return)) throw Error(o(341));
                            s.lanes |= n, null !== (i = s.alternate) && (i.lanes |= n), Na(s, n, e), s = null
                        } else s = a.child;
                        if (null !== s) s.return = a;
                        else
                            for (s = a; null !== s;) {
                                if (s === e) {
                                    s = null;
                                    break
                                }
                                if (null !== (a = s.sibling)) {
                                    a.return = s.return, s = a;
                                    break
                                }
                                s = s.return
                            }
                        a = s
                    }
                }

                function ja(e, t, n, r) {
                    e = null;
                    for (var a = t, i = !1; null !== a;) {
                        if (!i)
                            if (0 !== (524288 & a.flags)) i = !0;
                            else if (0 !== (262144 & a.flags)) break;
                        if (10 === a.tag) {
                            var s = a.alternate;
                            if (null === s) throw Error(o(387));
                            if (null !== (s = s.memoizedProps)) {
                                var l = a.type;
                                Zn(a.pendingProps.value, s.value) || (null !== e ? e.push(l) : e = [l])
                            }
                        } else if (a === Y.current) {
                            if (null === (s = a.alternate)) throw Error(o(387));
                            s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (null !== e ? e.push(ff) : e = [ff])
                        }
                        a = a.return
                    }
                    null !== e && Ra(t, e, n, r), t.flags |= 262144
                }

                function Aa(e) {
                    for (e = e.firstContext; null !== e;) {
                        if (!Zn(e.context._currentValue, e.memoizedValue)) return !0;
                        e = e.next
                    }
                    return !1
                }

                function Fa(e) {
                    Ea = e, Ta = null, null !== (e = e.dependencies) && (e.firstContext = null)
                }

                function Oa(e) {
                    return Ma(Ea, e)
                }

                function Da(e, t) {
                    return null === Ea && Fa(e), Ma(e, t)
                }

                function Ma(e, t) {
                    var n = t._currentValue;
                    if (t = {
                            context: t,
                            memoizedValue: n,
                            next: null
                        }, null === Ta) {
                        if (null === e) throw Error(o(308));
                        Ta = t, e.dependencies = {
                            lanes: 0,
                            firstContext: t
                        }, e.flags |= 524288
                    } else Ta = Ta.next = t;
                    return n
                }
                var La = "undefined" !== typeof AbortController ? AbortController : function() {
                        var e = [],
                            t = this.signal = {
                                aborted: !1,
                                addEventListener: function(t, n) {
                                    e.push(n)
                                }
                            };
                        this.abort = function() {
                            t.aborted = !0, e.forEach(function(e) {
                                return e()
                            })
                        }
                    },
                    _a = r.unstable_scheduleCallback,
                    za = r.unstable_NormalPriority,
                    Ia = {
                        $$typeof: w,
                        Consumer: null,
                        Provider: null,
                        _currentValue: null,
                        _currentValue2: null,
                        _threadCount: 0
                    };

                function Ba() {
                    return {
                        controller: new La,
                        data: new Map,
                        refCount: 0
                    }
                }

                function Va(e) {
                    e.refCount--, 0 === e.refCount && _a(za, function() {
                        e.controller.abort()
                    })
                }
                var Ua = null,
                    Ha = 0,
                    Wa = 0,
                    qa = null;

                function $a() {
                    if (0 === --Ha && null !== Ua) {
                        null !== qa && (qa.status = "fulfilled");
                        var e = Ua;
                        Ua = null, Wa = 0, qa = null;
                        for (var t = 0; t < e.length; t++)(0, e[t])()
                    }
                }
                var Ya = D.S;
                D.S = function(e, t) {
                    Du = le(), "object" === typeof t && null !== t && "function" === typeof t.then && function(e, t) {
                        if (null === Ua) {
                            var n = Ua = [];
                            Ha = 0, Wa = Hc(), qa = {
                                status: "pending",
                                value: void 0,
                                then: function(e) {
                                    n.push(e)
                                }
                            }
                        }
                        Ha++, t.then($a, $a)
                    }(0, t), null !== Ya && Ya(e, t)
                };
                var Ka = I(null);

                function Xa() {
                    var e = Ka.current;
                    return null !== e ? e : mu.pooledCache
                }

                function Qa(e, t) {
                    V(Ka, null === t ? Ka.current : t.pool)
                }

                function Ga() {
                    var e = Xa();
                    return null === e ? null : {
                        parent: Ia._currentValue,
                        pool: e
                    }
                }
                var Ja = Error(o(460)),
                    Za = Error(o(474)),
                    ei = Error(o(542)),
                    ti = {
                        then: function() {}
                    };

                function ni(e) {
                    return "fulfilled" === (e = e.status) || "rejected" === e
                }

                function ri(e, t, n) {
                    switch (void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(Ft, Ft), t = n), t.status) {
                        case "fulfilled":
                            return t.value;
                        case "rejected":
                            throw si(e = t.reason), e;
                        default:
                            if ("string" === typeof t.status) t.then(Ft, Ft);
                            else {
                                if (null !== (e = mu) && 100 < e.shellSuspendCounter) throw Error(o(482));
                                (e = t).status = "pending", e.then(function(e) {
                                    if ("pending" === t.status) {
                                        var n = t;
                                        n.status = "fulfilled", n.value = e
                                    }
                                }, function(e) {
                                    if ("pending" === t.status) {
                                        var n = t;
                                        n.status = "rejected", n.reason = e
                                    }
                                })
                            }
                            switch (t.status) {
                                case "fulfilled":
                                    return t.value;
                                case "rejected":
                                    throw si(e = t.reason), e
                            }
                            throw ii = t, Ja
                    }
                }

                function ai(e) {
                    try {
                        return (0, e._init)(e._payload)
                    } catch (Lt) {
                        if (null !== Lt && "object" === typeof Lt && "function" === typeof Lt.then) throw ii = Lt, Ja;
                        throw Lt
                    }
                }
                var ii = null;

                function oi() {
                    if (null === ii) throw Error(o(459));
                    var e = ii;
                    return ii = null, e
                }

                function si(e) {
                    if (e === Ja || e === ei) throw Error(o(483))
                }
                var li = null,
                    ui = 0;

                function ci(e) {
                    var t = ui;
                    return ui += 1, null === li && (li = []), ri(li, e, t)
                }

                function di(e, t) {
                    t = t.props.ref, e.ref = void 0 !== t ? t : null
                }

                function fi(e, t) {
                    if (t.$$typeof === p) throw Error(o(525));
                    throw e = Object.prototype.toString.call(t), Error(o(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
                }

                function hi(e) {
                    function t(t, n) {
                        if (e) {
                            var r = t.deletions;
                            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                        }
                    }

                    function n(n, r) {
                        if (!e) return null;
                        for (; null !== r;) t(n, r), r = r.sibling;
                        return null
                    }

                    function r(e) {
                        for (var t = new Map; null !== e;) null !== e.key ? t.set(e.key, e) : t.set(e.index, e), e = e.sibling;
                        return t
                    }

                    function a(e, t) {
                        return (e = Vr(e, t)).index = 0, e.sibling = null, e
                    }

                    function i(t, n, r) {
                        return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 67108866, n) : r : (t.flags |= 67108866, n) : (t.flags |= 1048576, n)
                    }

                    function s(t) {
                        return e && null === t.alternate && (t.flags |= 67108866), t
                    }

                    function l(e, t, n, r) {
                        return null === t || 6 !== t.tag ? ((t = qr(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t)
                    }

                    function u(e, t, n, r) {
                        var i = n.type;
                        return i === v ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === i || "object" === typeof i && null !== i && i.$$typeof === C && ai(i) === t.type) ? (di(t = a(t, n.props), n), t.return = e, t) : (di(t = Hr(n.type, n.key, n.props, null, e.mode, r), n), t.return = e, t)
                    }

                    function c(e, t, n, r) {
                        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Yr(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t)
                    }

                    function d(e, t, n, r, i) {
                        return null === t || 7 !== t.tag ? ((t = Wr(n, e.mode, r, i)).return = e, t) : ((t = a(t, n)).return = e, t)
                    }

                    function f(e, t, n) {
                        if ("string" === typeof t && "" !== t || "number" === typeof t || "bigint" === typeof t) return (t = qr("" + t, e.mode, n)).return = e, t;
                        if ("object" === typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case m:
                                    return di(n = Hr(t.type, t.key, t.props, null, e.mode, n), t), n.return = e, n;
                                case g:
                                    return (t = Yr(t, e.mode, n)).return = e, t;
                                case C:
                                    return f(e, t = ai(t), n)
                            }
                            if (O(t) || j(t)) return (t = Wr(t, e.mode, n, null)).return = e, t;
                            if ("function" === typeof t.then) return f(e, ci(t), n);
                            if (t.$$typeof === w) return f(e, Da(e, t), n);
                            fi(e, t)
                        }
                        return null
                    }

                    function h(e, t, n, r) {
                        var a = null !== t ? t.key : null;
                        if ("string" === typeof n && "" !== n || "number" === typeof n || "bigint" === typeof n) return null !== a ? null : l(e, t, "" + n, r);
                        if ("object" === typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case m:
                                    return n.key === a ? u(e, t, n, r) : null;
                                case g:
                                    return n.key === a ? c(e, t, n, r) : null;
                                case C:
                                    return h(e, t, n = ai(n), r)
                            }
                            if (O(n) || j(n)) return null !== a ? null : d(e, t, n, r, null);
                            if ("function" === typeof n.then) return h(e, t, ci(n), r);
                            if (n.$$typeof === w) return h(e, t, Da(e, n), r);
                            fi(e, n)
                        }
                        return null
                    }

                    function p(e, t, n, r, a) {
                        if ("string" === typeof r && "" !== r || "number" === typeof r || "bigint" === typeof r) return l(t, e = e.get(n) || null, "" + r, a);
                        if ("object" === typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case m:
                                    return u(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                                case g:
                                    return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                                case C:
                                    return p(e, t, n, r = ai(r), a)
                            }
                            if (O(r) || j(r)) return d(t, e = e.get(n) || null, r, a, null);
                            if ("function" === typeof r.then) return p(e, t, n, ci(r), a);
                            if (r.$$typeof === w) return p(e, t, n, Da(t, r), a);
                            fi(t, r)
                        }
                        return null
                    }

                    function y(l, u, c, d) {
                        if ("object" === typeof c && null !== c && c.type === v && null === c.key && (c = c.props.children), "object" === typeof c && null !== c) {
                            switch (c.$$typeof) {
                                case m:
                                    e: {
                                        for (var b = c.key; null !== u;) {
                                            if (u.key === b) {
                                                if ((b = c.type) === v) {
                                                    if (7 === u.tag) {
                                                        n(l, u.sibling), (d = a(u, c.props.children)).return = l, l = d;
                                                        break e
                                                    }
                                                } else if (u.elementType === b || "object" === typeof b && null !== b && b.$$typeof === C && ai(b) === u.type) {
                                                    n(l, u.sibling), di(d = a(u, c.props), c), d.return = l, l = d;
                                                    break e
                                                }
                                                n(l, u);
                                                break
                                            }
                                            t(l, u), u = u.sibling
                                        }
                                        c.type === v ? ((d = Wr(c.props.children, l.mode, d, c.key)).return = l, l = d) : (di(d = Hr(c.type, c.key, c.props, null, l.mode, d), c), d.return = l, l = d)
                                    }
                                    return s(l);
                                case g:
                                    e: {
                                        for (b = c.key; null !== u;) {
                                            if (u.key === b) {
                                                if (4 === u.tag && u.stateNode.containerInfo === c.containerInfo && u.stateNode.implementation === c.implementation) {
                                                    n(l, u.sibling), (d = a(u, c.children || [])).return = l, l = d;
                                                    break e
                                                }
                                                n(l, u);
                                                break
                                            }
                                            t(l, u), u = u.sibling
                                        }(d = Yr(c, l.mode, d)).return = l,
                                        l = d
                                    }
                                    return s(l);
                                case C:
                                    return y(l, u, c = ai(c), d)
                            }
                            if (O(c)) return function(a, o, s, l) {
                                for (var u = null, c = null, d = o, m = o = 0, g = null; null !== d && m < s.length; m++) {
                                    d.index > m ? (g = d, d = null) : g = d.sibling;
                                    var v = h(a, d, s[m], l);
                                    if (null === v) {
                                        null === d && (d = g);
                                        break
                                    }
                                    e && d && null === v.alternate && t(a, d), o = i(v, o, m), null === c ? u = v : c.sibling = v, c = v, d = g
                                }
                                if (m === s.length) return n(a, d), fa && ia(a, m), u;
                                if (null === d) {
                                    for (; m < s.length; m++) null !== (d = f(a, s[m], l)) && (o = i(d, o, m), null === c ? u = d : c.sibling = d, c = d);
                                    return fa && ia(a, m), u
                                }
                                for (d = r(d); m < s.length; m++) null !== (g = p(d, a, m, s[m], l)) && (e && null !== g.alternate && d.delete(null === g.key ? m : g.key), o = i(g, o, m), null === c ? u = g : c.sibling = g, c = g);
                                return e && d.forEach(function(e) {
                                    return t(a, e)
                                }), fa && ia(a, m), u
                            }(l, u, c, d);
                            if (j(c)) {
                                if ("function" !== typeof(b = j(c))) throw Error(o(150));
                                return function(a, s, l, u) {
                                    if (null == l) throw Error(o(151));
                                    for (var c = null, d = null, m = s, g = s = 0, v = null, y = l.next(); null !== m && !y.done; g++, y = l.next()) {
                                        m.index > g ? (v = m, m = null) : v = m.sibling;
                                        var b = h(a, m, y.value, u);
                                        if (null === b) {
                                            null === m && (m = v);
                                            break
                                        }
                                        e && m && null === b.alternate && t(a, m), s = i(b, s, g), null === d ? c = b : d.sibling = b, d = b, m = v
                                    }
                                    if (y.done) return n(a, m), fa && ia(a, g), c;
                                    if (null === m) {
                                        for (; !y.done; g++, y = l.next()) null !== (y = f(a, y.value, u)) && (s = i(y, s, g), null === d ? c = y : d.sibling = y, d = y);
                                        return fa && ia(a, g), c
                                    }
                                    for (m = r(m); !y.done; g++, y = l.next()) null !== (y = p(m, a, g, y.value, u)) && (e && null !== y.alternate && m.delete(null === y.key ? g : y.key), s = i(y, s, g), null === d ? c = y : d.sibling = y, d = y);
                                    return e && m.forEach(function(e) {
                                        return t(a, e)
                                    }), fa && ia(a, g), c
                                }(l, u, c = b.call(c), d)
                            }
                            if ("function" === typeof c.then) return y(l, u, ci(c), d);
                            if (c.$$typeof === w) return y(l, u, Da(l, c), d);
                            fi(l, c)
                        }
                        return "string" === typeof c && "" !== c || "number" === typeof c || "bigint" === typeof c ? (c = "" + c, null !== u && 6 === u.tag ? (n(l, u.sibling), (d = a(u, c)).return = l, l = d) : (n(l, u), (d = qr(c, l.mode, d)).return = l, l = d), s(l)) : n(l, u)
                    }
                    return function(e, t, n, r) {
                        try {
                            ui = 0;
                            var a = y(e, t, n, r);
                            return li = null, a
                        } catch (Lt) {
                            if (Lt === Ja || Lt === ei) throw Lt;
                            var i = Ir(29, Lt, null, e.mode);
                            return i.lanes = r, i.return = e, i
                        }
                    }
                }
                var pi = hi(!0),
                    mi = hi(!1),
                    gi = !1;

                function vi(e) {
                    e.updateQueue = {
                        baseState: e.memoizedState,
                        firstBaseUpdate: null,
                        lastBaseUpdate: null,
                        shared: {
                            pending: null,
                            lanes: 0,
                            hiddenCallbacks: null
                        },
                        callbacks: null
                    }
                }

                function yi(e, t) {
                    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        callbacks: null
                    })
                }

                function bi(e) {
                    return {
                        lane: e,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }
                }

                function xi(e, t, n) {
                    var r = e.updateQueue;
                    if (null === r) return null;
                    if (r = r.shared, 0 !== (2 & pu)) {
                        var a = r.pending;
                        return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, t = Lr(e), Mr(e, null, n), t
                    }
                    return Fr(e, r, t, n), Lr(e)
                }

                function wi(e, t, n) {
                    if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194048 & n))) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, De(e, n)
                    }
                }

                function Si(e, t) {
                    var n = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && n === (r = r.updateQueue)) {
                        var a = null,
                            i = null;
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var o = {
                                    lane: n.lane,
                                    tag: n.tag,
                                    payload: n.payload,
                                    callback: null,
                                    next: null
                                };
                                null === i ? a = i = o : i = i.next = o, n = n.next
                            } while (null !== n);
                            null === i ? a = i = t : i = i.next = t
                        } else a = i = t;
                        return n = {
                            baseState: r.baseState,
                            firstBaseUpdate: a,
                            lastBaseUpdate: i,
                            shared: r.shared,
                            callbacks: r.callbacks
                        }, void(e.updateQueue = n)
                    }
                    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
                }
                var ki = !1;

                function Ei() {
                    if (ki) {
                        if (null !== qa) throw qa
                    }
                }

                function Ti(e, t, n, r) {
                    ki = !1;
                    var a = e.updateQueue;
                    gi = !1;
                    var i = a.firstBaseUpdate,
                        o = a.lastBaseUpdate,
                        s = a.shared.pending;
                    if (null !== s) {
                        a.shared.pending = null;
                        var l = s,
                            u = l.next;
                        l.next = null, null === o ? i = u : o.next = u, o = l;
                        var c = e.alternate;
                        null !== c && ((s = (c = c.updateQueue).lastBaseUpdate) !== o && (null === s ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = l))
                    }
                    if (null !== i) {
                        var d = a.baseState;
                        for (o = 0, c = u = l = null, s = i;;) {
                            var f = -536870913 & s.lane,
                                p = f !== s.lane;
                            if (p ? (vu & f) === f : (r & f) === f) {
                                0 !== f && f === Wa && (ki = !0), null !== c && (c = c.next = {
                                    lane: 0,
                                    tag: s.tag,
                                    payload: s.payload,
                                    callback: null,
                                    next: null
                                });
                                e: {
                                    var m = e,
                                        g = s;f = t;
                                    var v = n;
                                    switch (g.tag) {
                                        case 1:
                                            if ("function" === typeof(m = g.payload)) {
                                                d = m.call(v, d, f);
                                                break e
                                            }
                                            d = m;
                                            break e;
                                        case 3:
                                            m.flags = -65537 & m.flags | 128;
                                        case 0:
                                            if (null === (f = "function" === typeof(m = g.payload) ? m.call(v, d, f) : m) || void 0 === f) break e;
                                            d = h({}, d, f);
                                            break e;
                                        case 2:
                                            gi = !0
                                    }
                                }
                                null !== (f = s.callback) && (e.flags |= 64, p && (e.flags |= 8192), null === (p = a.callbacks) ? a.callbacks = [f] : p.push(f))
                            } else p = {
                                lane: f,
                                tag: s.tag,
                                payload: s.payload,
                                callback: s.callback,
                                next: null
                            }, null === c ? (u = c = p, l = d) : c = c.next = p, o |= f;
                            if (null === (s = s.next)) {
                                if (null === (s = a.shared.pending)) break;
                                s = (p = s).next, p.next = null, a.lastBaseUpdate = p, a.shared.pending = null
                            }
                        }
                        null === c && (l = d), a.baseState = l, a.firstBaseUpdate = u, a.lastBaseUpdate = c, null === i && (a.shared.lanes = 0), Tu |= o, e.lanes = o, e.memoizedState = d
                    }
                }

                function Ci(e, t) {
                    if ("function" !== typeof e) throw Error(o(191, e));
                    e.call(t)
                }

                function Pi(e, t) {
                    var n = e.callbacks;
                    if (null !== n)
                        for (e.callbacks = null, e = 0; e < n.length; e++) Ci(n[e], t)
                }
                var Ni = I(null),
                    Ri = I(0);

                function ji(e, t) {
                    V(Ri, e = ku), V(Ni, t), ku = e | t.baseLanes
                }

                function Ai() {
                    V(Ri, ku), V(Ni, Ni.current)
                }

                function Fi() {
                    ku = Ri.current, B(Ni), B(Ri)
                }
                var Oi = I(null),
                    Di = null;

                function Mi(e) {
                    var t = e.alternate;
                    V(Bi, 1 & Bi.current), V(Oi, e), null === Di && (null === t || null !== Ni.current || null !== t.memoizedState) && (Di = e)
                }

                function Li(e) {
                    V(Bi, Bi.current), V(Oi, e), null === Di && (Di = e)
                }

                function _i(e) {
                    22 === e.tag ? (V(Bi, Bi.current), V(Oi, e), null === Di && (Di = e)) : zi()
                }

                function zi() {
                    V(Bi, Bi.current), V(Oi, Oi.current)
                }

                function Ii(e) {
                    B(Oi), Di === e && (Di = null), B(Bi)
                }
                var Bi = I(0);

                function Vi(e) {
                    for (var t = e; null !== t;) {
                        if (13 === t.tag) {
                            var n = t.memoizedState;
                            if (null !== n && (null === (n = n.dehydrated) || Fd(n) || Od(n))) return t
                        } else if (19 !== t.tag || "forwards" !== t.memoizedProps.revealOrder && "backwards" !== t.memoizedProps.revealOrder && "unstable_legacy-backwards" !== t.memoizedProps.revealOrder && "together" !== t.memoizedProps.revealOrder) {
                            if (null !== t.child) {
                                t.child.return = t, t = t.child;
                                continue
                            }
                        } else if (0 !== (128 & t.flags)) return t;
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                    return null
                }
                var Ui = 0,
                    Hi = null,
                    Wi = null,
                    qi = null,
                    $i = !1,
                    Yi = !1,
                    Ki = !1,
                    Xi = 0,
                    Qi = 0,
                    Gi = null,
                    Ji = 0;

                function Zi() {
                    throw Error(o(321))
                }

                function eo(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++)
                        if (!Zn(e[n], t[n])) return !1;
                    return !0
                }

                function to(e, t, n, r, a, i) {
                    return Ui = i, Hi = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, D.H = null === e || null === e.memoizedState ? vs : ys, Ki = !1, i = n(r, a), Ki = !1, Yi && (i = ro(t, n, r, a)), no(e), i
                }

                function no(e) {
                    D.H = gs;
                    var t = null !== Wi && null !== Wi.next;
                    if (Ui = 0, qi = Wi = Hi = null, $i = !1, Qi = 0, Gi = null, t) throw Error(o(300));
                    null === e || Ds || null !== (e = e.dependencies) && Aa(e) && (Ds = !0)
                }

                function ro(e, t, n, r) {
                    Hi = e;
                    var a = 0;
                    do {
                        if (Yi && (Gi = null), Qi = 0, Yi = !1, 25 <= a) throw Error(o(301));
                        if (a += 1, qi = Wi = null, null != e.updateQueue) {
                            var i = e.updateQueue;
                            i.lastEffect = null, i.events = null, i.stores = null, null != i.memoCache && (i.memoCache.index = 0)
                        }
                        D.H = bs, i = t(n, r)
                    } while (Yi);
                    return i
                }

                function ao() {
                    var e = D.H,
                        t = e.useState()[0];
                    return t = "function" === typeof t.then ? co(t) : t, e = e.useState()[0], (null !== Wi ? Wi.memoizedState : null) !== e && (Hi.flags |= 1024), t
                }

                function io() {
                    var e = 0 !== Xi;
                    return Xi = 0, e
                }

                function oo(e, t, n) {
                    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n
                }

                function so(e) {
                    if ($i) {
                        for (e = e.memoizedState; null !== e;) {
                            var t = e.queue;
                            null !== t && (t.pending = null), e = e.next
                        }
                        $i = !1
                    }
                    Ui = 0, qi = Wi = Hi = null, Yi = !1, Qi = Xi = 0, Gi = null
                }

                function lo() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === qi ? Hi.memoizedState = qi = e : qi = qi.next = e, qi
                }

                function uo() {
                    if (null === Wi) {
                        var e = Hi.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = Wi.next;
                    var t = null === qi ? Hi.memoizedState : qi.next;
                    if (null !== t) qi = t, Wi = e;
                    else {
                        if (null === e) {
                            if (null === Hi.alternate) throw Error(o(467));
                            throw Error(o(310))
                        }
                        e = {
                            memoizedState: (Wi = e).memoizedState,
                            baseState: Wi.baseState,
                            baseQueue: Wi.baseQueue,
                            queue: Wi.queue,
                            next: null
                        }, null === qi ? Hi.memoizedState = qi = e : qi = qi.next = e
                    }
                    return qi
                }

                function co(e) {
                    var t = Qi;
                    return Qi += 1, null === Gi && (Gi = []), e = ri(Gi, e, t), t = Hi, null === (null === qi ? t.memoizedState : qi.next) && (t = t.alternate, D.H = null === t || null === t.memoizedState ? vs : ys), e
                }

                function fo(e) {
                    if (null !== e && "object" === typeof e) {
                        if ("function" === typeof e.then) return co(e);
                        if (e.$$typeof === w) return Oa(e)
                    }
                    throw Error(o(438, String(e)))
                }

                function ho(e) {
                    var t = null,
                        n = Hi.updateQueue;
                    if (null !== n && (t = n.memoCache), null == t) {
                        var r = Hi.alternate;
                        null !== r && (null !== (r = r.updateQueue) && (null != (r = r.memoCache) && (t = {
                            data: r.data.map(function(e) {
                                return e.slice()
                            }),
                            index: 0
                        })))
                    }
                    if (null == t && (t = {
                            data: [],
                            index: 0
                        }), null === n && (n = {
                            lastEffect: null,
                            events: null,
                            stores: null,
                            memoCache: null
                        }, Hi.updateQueue = n), n.memoCache = t, void 0 === (n = t.data[t.index]))
                        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = N;
                    return t.index++, n
                }

                function po(e, t) {
                    return "function" === typeof t ? t(e) : t
                }

                function mo(e) {
                    return go(uo(), Wi, e)
                }

                function go(e, t, n) {
                    var r = e.queue;
                    if (null === r) throw Error(o(311));
                    r.lastRenderedReducer = n;
                    var a = e.baseQueue,
                        i = r.pending;
                    if (null !== i) {
                        if (null !== a) {
                            var s = a.next;
                            a.next = i.next, i.next = s
                        }
                        t.baseQueue = a = i, r.pending = null
                    }
                    if (i = e.baseState, null === a) e.memoizedState = i;
                    else {
                        var l = s = null,
                            u = null,
                            c = t = a.next,
                            d = !1;
                        do {
                            var f = -536870913 & c.lane;
                            if (f !== c.lane ? (vu & f) === f : (Ui & f) === f) {
                                var h = c.revertLane;
                                if (0 === h) null !== u && (u = u.next = {
                                    lane: 0,
                                    revertLane: 0,
                                    gesture: null,
                                    action: c.action,
                                    hasEagerState: c.hasEagerState,
                                    eagerState: c.eagerState,
                                    next: null
                                }), f === Wa && (d = !0);
                                else {
                                    if ((Ui & h) === h) {
                                        c = c.next, h === Wa && (d = !0);
                                        continue
                                    }
                                    f = {
                                        lane: 0,
                                        revertLane: c.revertLane,
                                        gesture: null,
                                        action: c.action,
                                        hasEagerState: c.hasEagerState,
                                        eagerState: c.eagerState,
                                        next: null
                                    }, null === u ? (l = u = f, s = i) : u = u.next = f, Hi.lanes |= h, Tu |= h
                                }
                                f = c.action, Ki && n(i, f), i = c.hasEagerState ? c.eagerState : n(i, f)
                            } else h = {
                                lane: f,
                                revertLane: c.revertLane,
                                gesture: c.gesture,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            }, null === u ? (l = u = h, s = i) : u = u.next = h, Hi.lanes |= f, Tu |= f;
                            c = c.next
                        } while (null !== c && c !== t);
                        if (null === u ? s = i : u.next = l, !Zn(i, e.memoizedState) && (Ds = !0, d && null !== (n = qa))) throw n;
                        e.memoizedState = i, e.baseState = s, e.baseQueue = u, r.lastRenderedState = i
                    }
                    return null === a && (r.lanes = 0), [e.memoizedState, r.dispatch]
                }

                function vo(e) {
                    var t = uo(),
                        n = t.queue;
                    if (null === n) throw Error(o(311));
                    n.lastRenderedReducer = e;
                    var r = n.dispatch,
                        a = n.pending,
                        i = t.memoizedState;
                    if (null !== a) {
                        n.pending = null;
                        var s = a = a.next;
                        do {
                            i = e(i, s.action), s = s.next
                        } while (s !== a);
                        Zn(i, t.memoizedState) || (Ds = !0), t.memoizedState = i, null === t.baseQueue && (t.baseState = i), n.lastRenderedState = i
                    }
                    return [i, r]
                }

                function yo(e, t, n) {
                    var r = Hi,
                        a = uo(),
                        i = fa;
                    if (i) {
                        if (void 0 === n) throw Error(o(407));
                        n = n()
                    } else n = t();
                    var s = !Zn((Wi || a).memoizedState, n);
                    if (s && (a.memoizedState = n, Ds = !0), a = a.queue, Ho(wo.bind(null, r, a, e), [e]), a.getSnapshot !== t || s || null !== qi && 1 & qi.memoizedState.tag) {
                        if (r.flags |= 2048, zo(9, {
                                destroy: void 0
                            }, xo.bind(null, r, a, n, t), null), null === mu) throw Error(o(349));
                        i || 0 !== (127 & Ui) || bo(r, t, n)
                    }
                    return n
                }

                function bo(e, t, n) {
                    e.flags |= 16384, e = {
                        getSnapshot: t,
                        value: n
                    }, null === (t = Hi.updateQueue) ? (t = {
                        lastEffect: null,
                        events: null,
                        stores: null,
                        memoCache: null
                    }, Hi.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
                }

                function xo(e, t, n, r) {
                    t.value = n, t.getSnapshot = r, So(t) && ko(e)
                }

                function wo(e, t, n) {
                    return n(function() {
                        So(t) && ko(e)
                    })
                }

                function So(e) {
                    var t = e.getSnapshot;
                    e = e.value;
                    try {
                        var n = t();
                        return !Zn(e, n)
                    } catch (r) {
                        return !0
                    }
                }

                function ko(e) {
                    var t = Dr(e, 2);
                    null !== t && Xu(t, e, 2)
                }

                function Eo(e) {
                    var t = lo();
                    if ("function" === typeof e) {
                        var n = e;
                        if (e = n(), Ki) {
                            be(!0);
                            try {
                                n()
                            } finally {
                                be(!1)
                            }
                        }
                    }
                    return t.memoizedState = t.baseState = e, t.queue = {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: po,
                        lastRenderedState: e
                    }, t
                }

                function To(e, t, n, r) {
                    return e.baseState = n, go(e, Wi, "function" === typeof r ? r : po)
                }

                function Co(e, t, n, r, a) {
                    if (hs(e)) throw Error(o(485));
                    if (null !== (e = t.action)) {
                        var i = {
                            payload: a,
                            action: e,
                            next: null,
                            isTransition: !0,
                            status: "pending",
                            value: null,
                            reason: null,
                            listeners: [],
                            then: function(e) {
                                i.listeners.push(e)
                            }
                        };
                        null !== D.T ? n(!0) : i.isTransition = !1, r(i), null === (n = t.pending) ? (i.next = t.pending = i, Po(t, i)) : (i.next = n.next, t.pending = n.next = i)
                    }
                }

                function Po(e, t) {
                    var n = t.action,
                        r = t.payload,
                        a = e.state;
                    if (t.isTransition) {
                        var i = D.T,
                            o = {};
                        D.T = o;
                        try {
                            var s = n(a, r),
                                l = D.S;
                            null !== l && l(o, s), No(e, t, s)
                        } catch (u) {
                            jo(e, t, u)
                        } finally {
                            null !== i && null !== o.types && (i.types = o.types), D.T = i
                        }
                    } else try {
                        No(e, t, i = n(a, r))
                    } catch (c) {
                        jo(e, t, c)
                    }
                }

                function No(e, t, n) {
                    null !== n && "object" === typeof n && "function" === typeof n.then ? n.then(function(n) {
                        Ro(e, t, n)
                    }, function(n) {
                        return jo(e, t, n)
                    }) : Ro(e, t, n)
                }

                function Ro(e, t, n) {
                    t.status = "fulfilled", t.value = n, Ao(t), e.state = n, null !== (t = e.pending) && ((n = t.next) === t ? e.pending = null : (n = n.next, t.next = n, Po(e, n)))
                }

                function jo(e, t, n) {
                    var r = e.pending;
                    if (e.pending = null, null !== r) {
                        r = r.next;
                        do {
                            t.status = "rejected", t.reason = n, Ao(t), t = t.next
                        } while (t !== r)
                    }
                    e.action = null
                }

                function Ao(e) {
                    e = e.listeners;
                    for (var t = 0; t < e.length; t++)(0, e[t])()
                }

                function Fo(e, t) {
                    return t
                }

                function Oo(e, t) {
                    if (fa) {
                        var n = mu.formState;
                        if (null !== n) {
                            e: {
                                var r = Hi;
                                if (fa) {
                                    if (da) {
                                        t: {
                                            for (var a = da, i = pa; 8 !== a.nodeType;) {
                                                if (!i) {
                                                    a = null;
                                                    break t
                                                }
                                                if (null === (a = Dd(a.nextSibling))) {
                                                    a = null;
                                                    break t
                                                }
                                            }
                                            a = "F!" === (i = a.data) || "F" === i ? a : null
                                        }
                                        if (a) {
                                            da = Dd(a.nextSibling), r = "F!" === a.data;
                                            break e
                                        }
                                    }
                                    ga(r)
                                }
                                r = !1
                            }
                            r && (t = n[0])
                        }
                    }
                    return (n = lo()).memoizedState = n.baseState = t, r = {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: Fo,
                        lastRenderedState: t
                    }, n.queue = r, n = cs.bind(null, Hi, r), r.dispatch = n, r = Eo(!1), i = fs.bind(null, Hi, !1, r.queue), a = {
                        state: t,
                        dispatch: null,
                        action: e,
                        pending: null
                    }, (r = lo()).queue = a, n = Co.bind(null, Hi, a, i, n), a.dispatch = n, r.memoizedState = e, [t, n, !1]
                }

                function Do(e) {
                    return Mo(uo(), Wi, e)
                }

                function Mo(e, t, n) {
                    if (t = go(e, t, Fo)[0], e = mo(po)[0], "object" === typeof t && null !== t && "function" === typeof t.then) try {
                        var r = co(t)
                    } catch (Lt) {
                        if (Lt === Ja) throw ei;
                        throw Lt
                    } else r = t;
                    var a = (t = uo()).queue,
                        i = a.dispatch;
                    return n !== t.memoizedState && (Hi.flags |= 2048, zo(9, {
                        destroy: void 0
                    }, Lo.bind(null, a, n), null)), [r, i, e]
                }

                function Lo(e, t) {
                    e.action = t
                }

                function _o(e) {
                    var t = uo(),
                        n = Wi;
                    if (null !== n) return Mo(t, n, e);
                    uo(), t = t.memoizedState;
                    var r = (n = uo()).queue.dispatch;
                    return n.memoizedState = e, [t, r, !1]
                }

                function zo(e, t, n, r) {
                    return e = {
                        tag: e,
                        create: n,
                        deps: r,
                        inst: t,
                        next: null
                    }, null === (t = Hi.updateQueue) && (t = {
                        lastEffect: null,
                        events: null,
                        stores: null,
                        memoCache: null
                    }, Hi.updateQueue = t), null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
                }

                function Io() {
                    return uo().memoizedState
                }

                function Bo(e, t, n, r) {
                    var a = lo();
                    Hi.flags |= e, a.memoizedState = zo(1 | t, {
                        destroy: void 0
                    }, n, void 0 === r ? null : r)
                }

                function Vo(e, t, n, r) {
                    var a = uo();
                    r = void 0 === r ? null : r;
                    var i = a.memoizedState.inst;
                    null !== Wi && null !== r && eo(r, Wi.memoizedState.deps) ? a.memoizedState = zo(t, i, n, r) : (Hi.flags |= e, a.memoizedState = zo(1 | t, i, n, r))
                }

                function Uo(e, t) {
                    Bo(8390656, 8, e, t)
                }

                function Ho(e, t) {
                    Vo(2048, 8, e, t)
                }

                function Wo(e) {
                    var t = uo().memoizedState;
                    return function(e) {
                            Hi.flags |= 4;
                            var t = Hi.updateQueue;
                            if (null === t) t = {
                                lastEffect: null,
                                events: null,
                                stores: null,
                                memoCache: null
                            }, Hi.updateQueue = t, t.events = [e];
                            else {
                                var n = t.events;
                                null === n ? t.events = [e] : n.push(e)
                            }
                        }({
                            ref: t,
                            nextImpl: e
                        }),
                        function() {
                            if (0 !== (2 & pu)) throw Error(o(440));
                            return t.impl.apply(void 0, arguments)
                        }
                }

                function qo(e, t) {
                    return Vo(4, 2, e, t)
                }

                function $o(e, t) {
                    return Vo(4, 4, e, t)
                }

                function Yo(e, t) {
                    if ("function" === typeof t) {
                        e = e();
                        var n = t(e);
                        return function() {
                            "function" === typeof n ? n() : t(null)
                        }
                    }
                    if (null !== t && void 0 !== t) return e = e(), t.current = e,
                        function() {
                            t.current = null
                        }
                }

                function Ko(e, t, n) {
                    n = null !== n && void 0 !== n ? n.concat([e]) : null, Vo(4, 4, Yo.bind(null, t, e), n)
                }

                function Xo() {}

                function Qo(e, t) {
                    var n = uo();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== t && eo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
                }

                function Go(e, t) {
                    var n = uo();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    if (null !== t && eo(t, r[1])) return r[0];
                    if (r = e(), Ki) {
                        be(!0);
                        try {
                            e()
                        } finally {
                            be(!1)
                        }
                    }
                    return n.memoizedState = [r, t], r
                }

                function Jo(e, t, n) {
                    return void 0 === n || 0 !== (1073741824 & Ui) && 0 === (261930 & vu) ? e.memoizedState = t : (e.memoizedState = n, e = Ku(), Hi.lanes |= e, Tu |= e, n)
                }

                function Zo(e, t, n, r) {
                    return Zn(n, t) ? n : null !== Ni.current ? (e = Jo(e, n, r), Zn(e, t) || (Ds = !0), e) : 0 === (42 & Ui) || 0 !== (1073741824 & Ui) && 0 === (261930 & vu) ? (Ds = !0, e.memoizedState = n) : (e = Ku(), Hi.lanes |= e, Tu |= e, t)
                }

                function es(e, t, n, r, a) {
                    var i = M.p;
                    M.p = 0 !== i && 8 > i ? i : 8;
                    var o = D.T,
                        s = {};
                    D.T = s, fs(e, !1, t, n);
                    try {
                        var l = a(),
                            u = D.S;
                        if (null !== u && u(s, l), null !== l && "object" === typeof l && "function" === typeof l.then) ds(e, t, function(e, t) {
                            var n = [],
                                r = {
                                    status: "pending",
                                    value: null,
                                    reason: null,
                                    then: function(e) {
                                        n.push(e)
                                    }
                                };
                            return e.then(function() {
                                r.status = "fulfilled", r.value = t;
                                for (var e = 0; e < n.length; e++)(0, n[e])(t)
                            }, function(e) {
                                for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++)(0, n[e])(void 0)
                            }), r
                        }(l, r), Yu());
                        else ds(e, t, r, Yu())
                    } catch (c) {
                        ds(e, t, {
                            then: function() {},
                            status: "rejected",
                            reason: c
                        }, Yu())
                    } finally {
                        M.p = i, null !== o && null !== s.types && (o.types = s.types), D.T = o
                    }
                }

                function ts() {}

                function ns(e, t, n, r) {
                    if (5 !== e.tag) throw Error(o(476));
                    var a = rs(e).queue;
                    es(e, a, t, L, null === n ? ts : function() {
                        return as(e), n(r)
                    })
                }

                function rs(e) {
                    var t = e.memoizedState;
                    if (null !== t) return t;
                    var n = {};
                    return (t = {
                        memoizedState: L,
                        baseState: L,
                        baseQueue: null,
                        queue: {
                            pending: null,
                            lanes: 0,
                            dispatch: null,
                            lastRenderedReducer: po,
                            lastRenderedState: L
                        },
                        next: null
                    }).next = {
                        memoizedState: n,
                        baseState: n,
                        baseQueue: null,
                        queue: {
                            pending: null,
                            lanes: 0,
                            dispatch: null,
                            lastRenderedReducer: po,
                            lastRenderedState: n
                        },
                        next: null
                    }, e.memoizedState = t, null !== (e = e.alternate) && (e.memoizedState = t), t
                }

                function as(e) {
                    var t = rs(e);
                    null === t.next && (t = e.alternate.memoizedState), ds(e, t.next.queue, {}, Yu())
                }

                function is() {
                    return Oa(ff)
                }

                function os() {
                    return uo().memoizedState
                }

                function ss() {
                    return uo().memoizedState
                }

                function ls(e) {
                    for (var t = e.return; null !== t;) {
                        switch (t.tag) {
                            case 24:
                            case 3:
                                var n = Yu(),
                                    r = xi(t, e = bi(n), n);
                                return null !== r && (Xu(r, t, n), wi(r, t, n)), t = {
                                    cache: Ba()
                                }, void(e.payload = t)
                        }
                        t = t.return
                    }
                }

                function us(e, t, n) {
                    var r = Yu();
                    n = {
                        lane: r,
                        revertLane: 0,
                        gesture: null,
                        action: n,
                        hasEagerState: !1,
                        eagerState: null,
                        next: null
                    }, hs(e) ? ps(t, n) : null !== (n = Or(e, t, n, r)) && (Xu(n, e, r), ms(n, t, r))
                }

                function cs(e, t, n) {
                    ds(e, t, n, Yu())
                }

                function ds(e, t, n, r) {
                    var a = {
                        lane: r,
                        revertLane: 0,
                        gesture: null,
                        action: n,
                        hasEagerState: !1,
                        eagerState: null,
                        next: null
                    };
                    if (hs(e)) ps(t, a);
                    else {
                        var i = e.alternate;
                        if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer)) try {
                            var o = t.lastRenderedState,
                                s = i(o, n);
                            if (a.hasEagerState = !0, a.eagerState = s, Zn(s, o)) return Fr(e, t, a, 0), null === mu && Ar(), !1
                        } catch (l) {}
                        if (null !== (n = Or(e, t, a, r))) return Xu(n, e, r), ms(n, t, r), !0
                    }
                    return !1
                }

                function fs(e, t, n, r) {
                    if (r = {
                            lane: 2,
                            revertLane: Hc(),
                            gesture: null,
                            action: r,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        }, hs(e)) {
                        if (t) throw Error(o(479))
                    } else null !== (t = Or(e, n, r, 2)) && Xu(t, e, 2)
                }

                function hs(e) {
                    var t = e.alternate;
                    return e === Hi || null !== t && t === Hi
                }

                function ps(e, t) {
                    Yi = $i = !0;
                    var n = e.pending;
                    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                }

                function ms(e, t, n) {
                    if (0 !== (4194048 & n)) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, De(e, n)
                    }
                }
                var gs = {
                    readContext: Oa,
                    use: fo,
                    useCallback: Zi,
                    useContext: Zi,
                    useEffect: Zi,
                    useImperativeHandle: Zi,
                    useLayoutEffect: Zi,
                    useInsertionEffect: Zi,
                    useMemo: Zi,
                    useReducer: Zi,
                    useRef: Zi,
                    useState: Zi,
                    useDebugValue: Zi,
                    useDeferredValue: Zi,
                    useTransition: Zi,
                    useSyncExternalStore: Zi,
                    useId: Zi,
                    useHostTransitionStatus: Zi,
                    useFormState: Zi,
                    useActionState: Zi,
                    useOptimistic: Zi,
                    useMemoCache: Zi,
                    useCacheRefresh: Zi
                };
                gs.useEffectEvent = Zi;
                var vs = {
                        readContext: Oa,
                        use: fo,
                        useCallback: function(e, t) {
                            return lo().memoizedState = [e, void 0 === t ? null : t], e
                        },
                        useContext: Oa,
                        useEffect: Uo,
                        useImperativeHandle: function(e, t, n) {
                            n = null !== n && void 0 !== n ? n.concat([e]) : null, Bo(4194308, 4, Yo.bind(null, t, e), n)
                        },
                        useLayoutEffect: function(e, t) {
                            return Bo(4194308, 4, e, t)
                        },
                        useInsertionEffect: function(e, t) {
                            Bo(4, 2, e, t)
                        },
                        useMemo: function(e, t) {
                            var n = lo();
                            t = void 0 === t ? null : t;
                            var r = e();
                            if (Ki) {
                                be(!0);
                                try {
                                    e()
                                } finally {
                                    be(!1)
                                }
                            }
                            return n.memoizedState = [r, t], r
                        },
                        useReducer: function(e, t, n) {
                            var r = lo();
                            if (void 0 !== n) {
                                var a = n(t);
                                if (Ki) {
                                    be(!0);
                                    try {
                                        n(t)
                                    } finally {
                                        be(!1)
                                    }
                                }
                            } else a = t;
                            return r.memoizedState = r.baseState = a, e = {
                                pending: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: a
                            }, r.queue = e, e = e.dispatch = us.bind(null, Hi, e), [r.memoizedState, e]
                        },
                        useRef: function(e) {
                            return e = {
                                current: e
                            }, lo().memoizedState = e
                        },
                        useState: function(e) {
                            var t = (e = Eo(e)).queue,
                                n = cs.bind(null, Hi, t);
                            return t.dispatch = n, [e.memoizedState, n]
                        },
                        useDebugValue: Xo,
                        useDeferredValue: function(e, t) {
                            return Jo(lo(), e, t)
                        },
                        useTransition: function() {
                            var e = Eo(!1);
                            return e = es.bind(null, Hi, e.queue, !0, !1), lo().memoizedState = e, [!1, e]
                        },
                        useSyncExternalStore: function(e, t, n) {
                            var r = Hi,
                                a = lo();
                            if (fa) {
                                if (void 0 === n) throw Error(o(407));
                                n = n()
                            } else {
                                if (n = t(), null === mu) throw Error(o(349));
                                0 !== (127 & vu) || bo(r, t, n)
                            }
                            a.memoizedState = n;
                            var i = {
                                value: n,
                                getSnapshot: t
                            };
                            return a.queue = i, Uo(wo.bind(null, r, i, e), [e]), r.flags |= 2048, zo(9, {
                                destroy: void 0
                            }, xo.bind(null, r, i, n, t), null), n
                        },
                        useId: function() {
                            var e = lo(),
                                t = mu.identifierPrefix;
                            if (fa) {
                                var n = aa;
                                t = "_" + t + "R_" + (n = (ra & ~(1 << 32 - xe(ra) - 1)).toString(32) + n), 0 < (n = Xi++) && (t += "H" + n.toString(32)), t += "_"
                            } else t = "_" + t + "r_" + (n = Ji++).toString(32) + "_";
                            return e.memoizedState = t
                        },
                        useHostTransitionStatus: is,
                        useFormState: Oo,
                        useActionState: Oo,
                        useOptimistic: function(e) {
                            var t = lo();
                            t.memoizedState = t.baseState = e;
                            var n = {
                                pending: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: null,
                                lastRenderedState: null
                            };
                            return t.queue = n, t = fs.bind(null, Hi, !0, n), n.dispatch = t, [e, t]
                        },
                        useMemoCache: ho,
                        useCacheRefresh: function() {
                            return lo().memoizedState = ls.bind(null, Hi)
                        },
                        useEffectEvent: function(e) {
                            var t = lo(),
                                n = {
                                    impl: e
                                };
                            return t.memoizedState = n,
                                function() {
                                    if (0 !== (2 & pu)) throw Error(o(440));
                                    return n.impl.apply(void 0, arguments)
                                }
                        }
                    },
                    ys = {
                        readContext: Oa,
                        use: fo,
                        useCallback: Qo,
                        useContext: Oa,
                        useEffect: Ho,
                        useImperativeHandle: Ko,
                        useInsertionEffect: qo,
                        useLayoutEffect: $o,
                        useMemo: Go,
                        useReducer: mo,
                        useRef: Io,
                        useState: function() {
                            return mo(po)
                        },
                        useDebugValue: Xo,
                        useDeferredValue: function(e, t) {
                            return Zo(uo(), Wi.memoizedState, e, t)
                        },
                        useTransition: function() {
                            var e = mo(po)[0],
                                t = uo().memoizedState;
                            return ["boolean" === typeof e ? e : co(e), t]
                        },
                        useSyncExternalStore: yo,
                        useId: os,
                        useHostTransitionStatus: is,
                        useFormState: Do,
                        useActionState: Do,
                        useOptimistic: function(e, t) {
                            return To(uo(), 0, e, t)
                        },
                        useMemoCache: ho,
                        useCacheRefresh: ss
                    };
                ys.useEffectEvent = Wo;
                var bs = {
                    readContext: Oa,
                    use: fo,
                    useCallback: Qo,
                    useContext: Oa,
                    useEffect: Ho,
                    useImperativeHandle: Ko,
                    useInsertionEffect: qo,
                    useLayoutEffect: $o,
                    useMemo: Go,
                    useReducer: vo,
                    useRef: Io,
                    useState: function() {
                        return vo(po)
                    },
                    useDebugValue: Xo,
                    useDeferredValue: function(e, t) {
                        var n = uo();
                        return null === Wi ? Jo(n, e, t) : Zo(n, Wi.memoizedState, e, t)
                    },
                    useTransition: function() {
                        var e = vo(po)[0],
                            t = uo().memoizedState;
                        return ["boolean" === typeof e ? e : co(e), t]
                    },
                    useSyncExternalStore: yo,
                    useId: os,
                    useHostTransitionStatus: is,
                    useFormState: _o,
                    useActionState: _o,
                    useOptimistic: function(e, t) {
                        var n = uo();
                        return null !== Wi ? To(n, 0, e, t) : (n.baseState = e, [e, n.queue.dispatch])
                    },
                    useMemoCache: ho,
                    useCacheRefresh: ss
                };

                function xs(e, t, n, r) {
                    n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : h({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
                }
                bs.useEffectEvent = Wo;
                var ws = {
                    enqueueSetState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = Yu(),
                            a = bi(r);
                        a.payload = t, void 0 !== n && null !== n && (a.callback = n), null !== (t = xi(e, a, r)) && (Xu(t, e, r), wi(t, e, r))
                    },
                    enqueueReplaceState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = Yu(),
                            a = bi(r);
                        a.tag = 1, a.payload = t, void 0 !== n && null !== n && (a.callback = n), null !== (t = xi(e, a, r)) && (Xu(t, e, r), wi(t, e, r))
                    },
                    enqueueForceUpdate: function(e, t) {
                        e = e._reactInternals;
                        var n = Yu(),
                            r = bi(n);
                        r.tag = 2, void 0 !== t && null !== t && (r.callback = t), null !== (t = xi(e, r, n)) && (Xu(t, e, n), wi(t, e, n))
                    }
                };

                function Ss(e, t, n, r, a, i, o) {
                    return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, o) : !t.prototype || !t.prototype.isPureReactComponent || (!er(n, r) || !er(a, i))
                }

                function ks(e, t, n, r) {
                    e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ws.enqueueReplaceState(t, t.state, null)
                }

                function Es(e, t) {
                    var n = t;
                    if ("ref" in t)
                        for (var r in n = {}, t) "ref" !== r && (n[r] = t[r]);
                    if (e = e.defaultProps)
                        for (var a in n === t && (n = h({}, n)), e) void 0 === n[a] && (n[a] = e[a]);
                    return n
                }

                function Ts(e) {
                    Pr(e)
                }

                function Cs(e) {
                    console.error(e)
                }

                function Ps(e) {
                    Pr(e)
                }

                function Ns(e, t) {
                    try {
                        (0, e.onUncaughtError)(t.value, {
                            componentStack: t.stack
                        })
                    } catch (n) {
                        setTimeout(function() {
                            throw n
                        })
                    }
                }

                function Rs(e, t, n) {
                    try {
                        (0, e.onCaughtError)(n.value, {
                            componentStack: n.stack,
                            errorBoundary: 1 === t.tag ? t.stateNode : null
                        })
                    } catch (r) {
                        setTimeout(function() {
                            throw r
                        })
                    }
                }

                function js(e, t, n) {
                    return (n = bi(n)).tag = 3, n.payload = {
                        element: null
                    }, n.callback = function() {
                        Ns(e, t)
                    }, n
                }

                function As(e) {
                    return (e = bi(e)).tag = 3, e
                }

                function Fs(e, t, n, r) {
                    var a = n.type.getDerivedStateFromError;
                    if ("function" === typeof a) {
                        var i = r.value;
                        e.payload = function() {
                            return a(i)
                        }, e.callback = function() {
                            Rs(t, n, r)
                        }
                    }
                    var o = n.stateNode;
                    null !== o && "function" === typeof o.componentDidCatch && (e.callback = function() {
                        Rs(t, n, r), "function" !== typeof a && (null === _u ? _u = new Set([this]) : _u.add(this));
                        var e = r.stack;
                        this.componentDidCatch(r.value, {
                            componentStack: null !== e ? e : ""
                        })
                    })
                }
                var Os = Error(o(461)),
                    Ds = !1;

                function Ms(e, t, n, r) {
                    t.child = null === e ? mi(t, null, n, r) : pi(t, e.child, n, r)
                }

                function Ls(e, t, n, r, a) {
                    n = n.render;
                    var i = t.ref;
                    if ("ref" in r) {
                        var o = {};
                        for (var s in r) "ref" !== s && (o[s] = r[s])
                    } else o = r;
                    return Fa(t), r = to(e, t, n, o, i, a), s = io(), null === e || Ds ? (fa && s && sa(t), t.flags |= 1, Ms(e, t, r, a), t.child) : (oo(e, t, a), il(e, t, a))
                }

                function _s(e, t, n, r, a) {
                    if (null === e) {
                        var i = n.type;
                        return "function" !== typeof i || Br(i) || void 0 !== i.defaultProps || null !== n.compare ? ((e = Hr(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = i, zs(e, t, i, r, a))
                    }
                    if (i = e.child, !ol(e, a)) {
                        var o = i.memoizedProps;
                        if ((n = null !== (n = n.compare) ? n : er)(o, r) && e.ref === t.ref) return il(e, t, a)
                    }
                    return t.flags |= 1, (e = Vr(i, r)).ref = t.ref, e.return = t, t.child = e
                }

                function zs(e, t, n, r, a) {
                    if (null !== e) {
                        var i = e.memoizedProps;
                        if (er(i, r) && e.ref === t.ref) {
                            if (Ds = !1, t.pendingProps = r = i, !ol(e, a)) return t.lanes = e.lanes, il(e, t, a);
                            0 !== (131072 & e.flags) && (Ds = !0)
                        }
                    }
                    return qs(e, t, n, r, a)
                }

                function Is(e, t, n, r) {
                    var a = r.children,
                        i = null !== e ? e.memoizedState : null;
                    if (null === e && null === t.stateNode && (t.stateNode = {
                            _visibility: 1,
                            _pendingMarkers: null,
                            _retryCache: null,
                            _transitions: null
                        }), "hidden" === r.mode) {
                        if (0 !== (128 & t.flags)) {
                            if (i = null !== i ? i.baseLanes | n : n, null !== e) {
                                for (r = t.child = e.child, a = 0; null !== r;) a = a | r.lanes | r.childLanes, r = r.sibling;
                                r = a & ~i
                            } else r = 0, t.child = null;
                            return Vs(e, t, i, n, r)
                        }
                        if (0 === (536870912 & n)) return r = t.lanes = 536870912, Vs(e, t, null !== i ? i.baseLanes | n : n, n, r);
                        t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null
                        }, null !== e && Qa(0, null !== i ? i.cachePool : null), null !== i ? ji(t, i) : Ai(), _i(t)
                    } else null !== i ? (Qa(0, i.cachePool), ji(t, i), zi(), t.memoizedState = null) : (null !== e && Qa(0, null), Ai(), zi());
                    return Ms(e, t, a, n), t.child
                }

                function Bs(e, t) {
                    return null !== e && 22 === e.tag || null !== t.stateNode || (t.stateNode = {
                        _visibility: 1,
                        _pendingMarkers: null,
                        _retryCache: null,
                        _transitions: null
                    }), t.sibling
                }

                function Vs(e, t, n, r, a) {
                    var i = Xa();
                    return i = null === i ? null : {
                        parent: Ia._currentValue,
                        pool: i
                    }, t.memoizedState = {
                        baseLanes: n,
                        cachePool: i
                    }, null !== e && Qa(0, null), Ai(), _i(t), null !== e && ja(e, t, r, !0), t.childLanes = a, null
                }

                function Us(e, t) {
                    return (t = el({
                        mode: t.mode,
                        children: t.children
                    }, e.mode)).ref = e.ref, e.child = t, t.return = e, t
                }

                function Hs(e, t, n) {
                    return pi(t, e.child, null, n), (e = Us(t, t.pendingProps)).flags |= 2, Ii(t), t.memoizedState = null, e
                }

                function Ws(e, t) {
                    var n = t.ref;
                    if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
                    else {
                        if ("function" !== typeof n && "object" !== typeof n) throw Error(o(284));
                        null !== e && e.ref === n || (t.flags |= 4194816)
                    }
                }

                function qs(e, t, n, r, a) {
                    return Fa(t), n = to(e, t, n, r, void 0, a), r = io(), null === e || Ds ? (fa && r && sa(t), t.flags |= 1, Ms(e, t, n, a), t.child) : (oo(e, t, a), il(e, t, a))
                }

                function $s(e, t, n, r, a, i) {
                    return Fa(t), t.updateQueue = null, n = ro(t, r, n, a), no(e), r = io(), null === e || Ds ? (fa && r && sa(t), t.flags |= 1, Ms(e, t, n, i), t.child) : (oo(e, t, i), il(e, t, i))
                }

                function Ys(e, t, n, r, a) {
                    if (Fa(t), null === t.stateNode) {
                        var i = _r,
                            o = n.contextType;
                        "object" === typeof o && null !== o && (i = Oa(o)), i = new n(r, i), t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null, i.updater = ws, t.stateNode = i, i._reactInternals = t, (i = t.stateNode).props = r, i.state = t.memoizedState, i.refs = {}, vi(t), o = n.contextType, i.context = "object" === typeof o && null !== o ? Oa(o) : _r, i.state = t.memoizedState, "function" === typeof(o = n.getDerivedStateFromProps) && (xs(t, n, o, r), i.state = t.memoizedState), "function" === typeof n.getDerivedStateFromProps || "function" === typeof i.getSnapshotBeforeUpdate || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || (o = i.state, "function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), o !== i.state && ws.enqueueReplaceState(i, i.state, null), Ti(t, r, i, a), Ei(), i.state = t.memoizedState), "function" === typeof i.componentDidMount && (t.flags |= 4194308), r = !0
                    } else if (null === e) {
                        i = t.stateNode;
                        var s = t.memoizedProps,
                            l = Es(n, s);
                        i.props = l;
                        var u = i.context,
                            c = n.contextType;
                        o = _r, "object" === typeof c && null !== c && (o = Oa(c));
                        var d = n.getDerivedStateFromProps;
                        c = "function" === typeof d || "function" === typeof i.getSnapshotBeforeUpdate, s = t.pendingProps !== s, c || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (s || u !== o) && ks(t, i, r, o), gi = !1;
                        var f = t.memoizedState;
                        i.state = f, Ti(t, r, i, a), Ei(), u = t.memoizedState, s || f !== u || gi ? ("function" === typeof d && (xs(t, n, d, r), u = t.memoizedState), (l = gi || Ss(t, n, l, r, f, u, o)) ? (c || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || ("function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" === typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof i.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = o, r = l) : ("function" === typeof i.componentDidMount && (t.flags |= 4194308), r = !1)
                    } else {
                        i = t.stateNode, yi(e, t), c = Es(n, o = t.memoizedProps), i.props = c, d = t.pendingProps, f = i.context, u = n.contextType, l = _r, "object" === typeof u && null !== u && (l = Oa(u)), (u = "function" === typeof(s = n.getDerivedStateFromProps) || "function" === typeof i.getSnapshotBeforeUpdate) || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (o !== d || f !== l) && ks(t, i, r, l), gi = !1, f = t.memoizedState, i.state = f, Ti(t, r, i, a), Ei();
                        var h = t.memoizedState;
                        o !== d || f !== h || gi || null !== e && null !== e.dependencies && Aa(e.dependencies) ? ("function" === typeof s && (xs(t, n, s, r), h = t.memoizedState), (c = gi || Ss(t, n, c, r, f, h, l) || null !== e && null !== e.dependencies && Aa(e.dependencies)) ? (u || "function" !== typeof i.UNSAFE_componentWillUpdate && "function" !== typeof i.componentWillUpdate || ("function" === typeof i.componentWillUpdate && i.componentWillUpdate(r, h, l), "function" === typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, h, l)), "function" === typeof i.componentDidUpdate && (t.flags |= 4), "function" === typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof i.componentDidUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), i.props = r, i.state = h, i.context = l, r = c) : ("function" !== typeof i.componentDidUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
                    }
                    return i = r, Ws(e, t), r = 0 !== (128 & t.flags), i || r ? (i = t.stateNode, n = r && "function" !== typeof n.getDerivedStateFromError ? null : i.render(), t.flags |= 1, null !== e && r ? (t.child = pi(t, e.child, null, a), t.child = pi(t, null, n, a)) : Ms(e, t, n, a), t.memoizedState = i.state, e = t.child) : e = il(e, t, a), e
                }

                function Ks(e, t, n, r) {
                    return xa(), t.flags |= 256, Ms(e, t, n, r), t.child
                }
                var Xs = {
                    dehydrated: null,
                    treeContext: null,
                    retryLane: 0,
                    hydrationErrors: null
                };

                function Qs(e) {
                    return {
                        baseLanes: e,
                        cachePool: Ga()
                    }
                }

                function Gs(e, t, n) {
                    return e = null !== e ? e.childLanes & ~n : 0, t && (e |= Nu), e
                }

                function Js(e, t, n) {
                    var r, a = t.pendingProps,
                        i = !1,
                        s = 0 !== (128 & t.flags);
                    if ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & Bi.current)), r && (i = !0, t.flags &= -129), r = 0 !== (32 & t.flags), t.flags &= -33, null === e) {
                        if (fa) {
                            if (i ? Mi(t) : zi(), (e = da) ? null !== (e = null !== (e = Ad(e, pa)) && "&" !== e.data ? e : null) && (t.memoizedState = {
                                    dehydrated: e,
                                    treeContext: null !== na ? {
                                        id: ra,
                                        overflow: aa
                                    } : null,
                                    retryLane: 536870912,
                                    hydrationErrors: null
                                }, (n = $r(e)).return = t, t.child = n, ca = t, da = null) : e = null, null === e) throw ga(t);
                            return Od(e) ? t.lanes = 32 : t.lanes = 536870912, null
                        }
                        var l = a.children;
                        return a = a.fallback, i ? (zi(), l = el({
                            mode: "hidden",
                            children: l
                        }, i = t.mode), a = Wr(a, i, n, null), l.return = t, a.return = t, l.sibling = a, t.child = l, (a = t.child).memoizedState = Qs(n), a.childLanes = Gs(e, r, n), t.memoizedState = Xs, Bs(null, a)) : (Mi(t), Zs(t, l))
                    }
                    var u = e.memoizedState;
                    if (null !== u && null !== (l = u.dehydrated)) {
                        if (s) 256 & t.flags ? (Mi(t), t.flags &= -257, t = tl(e, t, n)) : null !== t.memoizedState ? (zi(), t.child = e.child, t.flags |= 128, t = null) : (zi(), l = a.fallback, i = t.mode, a = el({
                            mode: "visible",
                            children: a.children
                        }, i), (l = Wr(l, i, n, null)).flags |= 2, a.return = t, l.return = t, a.sibling = l, t.child = a, pi(t, e.child, null, n), (a = t.child).memoizedState = Qs(n), a.childLanes = Gs(e, r, n), t.memoizedState = Xs, t = Bs(null, a));
                        else if (Mi(t), Od(l)) {
                            if (r = l.nextSibling && l.nextSibling.dataset) var c = r.dgst;
                            r = c, (a = Error(o(419))).stack = "", a.digest = r, Sa({
                                value: a,
                                source: null,
                                stack: null
                            }), t = tl(e, t, n)
                        } else if (Ds || ja(e, t, n, !1), r = 0 !== (n & e.childLanes), Ds || r) {
                            if (null !== (r = mu) && (0 !== (a = Me(r, n)) && a !== u.retryLane)) throw u.retryLane = a, Dr(e, a), Xu(r, e, a), Os;
                            Fd(l) || sc(), t = tl(e, t, n)
                        } else Fd(l) ? (t.flags |= 192, t.child = e.child, t = null) : (e = u.treeContext, da = Dd(l.nextSibling), ca = t, fa = !0, ha = null, pa = !1, null !== e && ua(t, e), (t = Zs(t, a.children)).flags |= 4096);
                        return t
                    }
                    return i ? (zi(), l = a.fallback, i = t.mode, c = (u = e.child).sibling, (a = Vr(u, {
                        mode: "hidden",
                        children: a.children
                    })).subtreeFlags = 65011712 & u.subtreeFlags, null !== c ? l = Vr(c, l) : (l = Wr(l, i, n, null)).flags |= 2, l.return = t, a.return = t, a.sibling = l, t.child = a, Bs(null, a), a = t.child, null === (l = e.child.memoizedState) ? l = Qs(n) : (null !== (i = l.cachePool) ? (u = Ia._currentValue, i = i.parent !== u ? {
                        parent: u,
                        pool: u
                    } : i) : i = Ga(), l = {
                        baseLanes: l.baseLanes | n,
                        cachePool: i
                    }), a.memoizedState = l, a.childLanes = Gs(e, r, n), t.memoizedState = Xs, Bs(e.child, a)) : (Mi(t), e = (n = e.child).sibling, (n = Vr(n, {
                        mode: "visible",
                        children: a.children
                    })).return = t, n.sibling = null, null !== e && (null === (r = t.deletions) ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n)
                }

                function Zs(e, t) {
                    return (t = el({
                        mode: "visible",
                        children: t
                    }, e.mode)).return = e, e.child = t
                }

                function el(e, t) {
                    return (e = Ir(22, e, null, t)).lanes = 0, e
                }

                function tl(e, t, n) {
                    return pi(t, e.child, null, n), (e = Zs(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
                }

                function nl(e, t, n) {
                    e.lanes |= t;
                    var r = e.alternate;
                    null !== r && (r.lanes |= t), Na(e.return, t, n)
                }

                function rl(e, t, n, r, a, i) {
                    var o = e.memoizedState;
                    null === o ? e.memoizedState = {
                        isBackwards: t,
                        rendering: null,
                        renderingStartTime: 0,
                        last: r,
                        tail: n,
                        tailMode: a,
                        treeForkCount: i
                    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a, o.treeForkCount = i)
                }

                function al(e, t, n) {
                    var r = t.pendingProps,
                        a = r.revealOrder,
                        i = r.tail;
                    r = r.children;
                    var o = Bi.current,
                        s = 0 !== (2 & o);
                    if (s ? (o = 1 & o | 2, t.flags |= 128) : o &= 1, V(Bi, o), Ms(e, t, r, n), r = fa ? Zr : 0, !s && null !== e && 0 !== (128 & e.flags)) e: for (e = t.child; null !== e;) {
                        if (13 === e.tag) null !== e.memoizedState && nl(e, n, t);
                        else if (19 === e.tag) nl(e, n, t);
                        else if (null !== e.child) {
                            e.child.return = e, e = e.child;
                            continue
                        }
                        if (e === t) break e;
                        for (; null === e.sibling;) {
                            if (null === e.return || e.return === t) break e;
                            e = e.return
                        }
                        e.sibling.return = e.return, e = e.sibling
                    }
                    switch (a) {
                        case "forwards":
                            for (n = t.child, a = null; null !== n;) null !== (e = n.alternate) && null === Vi(e) && (a = n), n = n.sibling;
                            null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), rl(t, !1, a, n, i, r);
                            break;
                        case "backwards":
                        case "unstable_legacy-backwards":
                            for (n = null, a = t.child, t.child = null; null !== a;) {
                                if (null !== (e = a.alternate) && null === Vi(e)) {
                                    t.child = a;
                                    break
                                }
                                e = a.sibling, a.sibling = n, n = a, a = e
                            }
                            rl(t, !0, n, null, i, r);
                            break;
                        case "together":
                            rl(t, !1, null, null, void 0, r);
                            break;
                        default:
                            t.memoizedState = null
                    }
                    return t.child
                }

                function il(e, t, n) {
                    if (null !== e && (t.dependencies = e.dependencies), Tu |= t.lanes, 0 === (n & t.childLanes)) {
                        if (null === e) return null;
                        if (ja(e, t, n, !1), 0 === (n & t.childLanes)) return null
                    }
                    if (null !== e && t.child !== e.child) throw Error(o(153));
                    if (null !== t.child) {
                        for (n = Vr(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Vr(e, e.pendingProps)).return = t;
                        n.sibling = null
                    }
                    return t.child
                }

                function ol(e, t) {
                    return 0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !Aa(e))
                }

                function sl(e, t, n) {
                    if (null !== e)
                        if (e.memoizedProps !== t.pendingProps) Ds = !0;
                        else {
                            if (!ol(e, n) && 0 === (128 & t.flags)) return Ds = !1,
                                function(e, t, n) {
                                    switch (t.tag) {
                                        case 3:
                                            K(t, t.stateNode.containerInfo), Ca(0, Ia, e.memoizedState.cache), xa();
                                            break;
                                        case 27:
                                        case 5:
                                            Q(t);
                                            break;
                                        case 4:
                                            K(t, t.stateNode.containerInfo);
                                            break;
                                        case 10:
                                            Ca(0, t.type, t.memoizedProps.value);
                                            break;
                                        case 31:
                                            if (null !== t.memoizedState) return t.flags |= 128, Li(t), null;
                                            break;
                                        case 13:
                                            var r = t.memoizedState;
                                            if (null !== r) return null !== r.dehydrated ? (Mi(t), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? Js(e, t, n) : (Mi(t), null !== (e = il(e, t, n)) ? e.sibling : null);
                                            Mi(t);
                                            break;
                                        case 19:
                                            var a = 0 !== (128 & e.flags);
                                            if ((r = 0 !== (n & t.childLanes)) || (ja(e, t, n, !1), r = 0 !== (n & t.childLanes)), a) {
                                                if (r) return al(e, t, n);
                                                t.flags |= 128
                                            }
                                            if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), V(Bi, Bi.current), r) break;
                                            return null;
                                        case 22:
                                            return t.lanes = 0, Is(e, t, n, t.pendingProps);
                                        case 24:
                                            Ca(0, Ia, e.memoizedState.cache)
                                    }
                                    return il(e, t, n)
                                }(e, t, n);
                            Ds = 0 !== (131072 & e.flags)
                        }
                    else Ds = !1, fa && 0 !== (1048576 & t.flags) && oa(t, Zr, t.index);
                    switch (t.lanes = 0, t.tag) {
                        case 16:
                            e: {
                                var r = t.pendingProps;
                                if (e = ai(t.elementType), t.type = e, "function" !== typeof e) {
                                    if (void 0 !== e && null !== e) {
                                        var a = e.$$typeof;
                                        if (a === S) {
                                            t.tag = 11, t = Ls(null, t, e, r, n);
                                            break e
                                        }
                                        if (a === T) {
                                            t.tag = 14, t = _s(null, t, e, r, n);
                                            break e
                                        }
                                    }
                                    throw t = F(e) || e, Error(o(306, t, ""))
                                }
                                Br(e) ? (r = Es(e, r), t.tag = 1, t = Ys(null, t, e, r, n)) : (t.tag = 0, t = qs(null, t, e, r, n))
                            }
                            return t;
                        case 0:
                            return qs(e, t, t.type, t.pendingProps, n);
                        case 1:
                            return Ys(e, t, r = t.type, a = Es(r, t.pendingProps), n);
                        case 3:
                            e: {
                                if (K(t, t.stateNode.containerInfo), null === e) throw Error(o(387));r = t.pendingProps;
                                var i = t.memoizedState;a = i.element,
                                yi(e, t),
                                Ti(t, r, null, n);
                                var s = t.memoizedState;
                                if (r = s.cache, Ca(0, Ia, r), r !== i.cache && Ra(t, [Ia], n, !0), Ei(), r = s.element, i.isDehydrated) {
                                    if (i = {
                                            element: r,
                                            isDehydrated: !1,
                                            cache: s.cache
                                        }, t.updateQueue.baseState = i, t.memoizedState = i, 256 & t.flags) {
                                        t = Ks(e, t, r, n);
                                        break e
                                    }
                                    if (r !== a) {
                                        Sa(a = Xr(Error(o(424)), t)), t = Ks(e, t, r, n);
                                        break e
                                    }
                                    if (9 === (e = t.stateNode.containerInfo).nodeType) e = e.body;
                                    else e = "HTML" === e.nodeName ? e.ownerDocument.body : e;
                                    for (da = Dd(e.firstChild), ca = t, fa = !0, ha = null, pa = !0, n = mi(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                                } else {
                                    if (xa(), r === a) {
                                        t = il(e, t, n);
                                        break e
                                    }
                                    Ms(e, t, r, n)
                                }
                                t = t.child
                            }
                            return t;
                        case 26:
                            return Ws(e, t), null === e ? (n = $d(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : fa || (n = t.type, e = t.pendingProps, (r = vd($.current).createElement(n))[Ve] = t, r[Ue] = e, hd(r, n, e), et(r), t.stateNode = r) : t.memoizedState = $d(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
                        case 27:
                            return Q(t), null === e && fa && (r = t.stateNode = zd(t.type, t.pendingProps, $.current), ca = t, pa = !0, a = da, Pd(t.type) ? (Md = a, da = Dd(r.firstChild)) : da = a), Ms(e, t, t.pendingProps.children, n), Ws(e, t), null === e && (t.flags |= 4194304), t.child;
                        case 5:
                            return null === e && fa && ((a = r = da) && (null !== (r = function(e, t, n, r) {
                                for (; 1 === e.nodeType;) {
                                    var a = n;
                                    if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                                        if (!r && ("INPUT" !== e.nodeName || "hidden" !== e.type)) break
                                    } else if (r) {
                                        if (!e[Ke]) switch (t) {
                                            case "meta":
                                                if (!e.hasAttribute("itemprop")) break;
                                                return e;
                                            case "link":
                                                if ("stylesheet" === (i = e.getAttribute("rel")) && e.hasAttribute("data-precedence")) break;
                                                if (i !== a.rel || e.getAttribute("href") !== (null == a.href || "" === a.href ? null : a.href) || e.getAttribute("crossorigin") !== (null == a.crossOrigin ? null : a.crossOrigin) || e.getAttribute("title") !== (null == a.title ? null : a.title)) break;
                                                return e;
                                            case "style":
                                                if (e.hasAttribute("data-precedence")) break;
                                                return e;
                                            case "script":
                                                if (((i = e.getAttribute("src")) !== (null == a.src ? null : a.src) || e.getAttribute("type") !== (null == a.type ? null : a.type) || e.getAttribute("crossorigin") !== (null == a.crossOrigin ? null : a.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                                                return e;
                                            default:
                                                return e
                                        }
                                    } else {
                                        if ("input" !== t || "hidden" !== e.type) return e;
                                        var i = null == a.name ? null : "" + a.name;
                                        if ("hidden" === a.type && e.getAttribute("name") === i) return e
                                    }
                                    if (null === (e = Dd(e.nextSibling))) break
                                }
                                return null
                            }(r, t.type, t.pendingProps, pa)) ? (t.stateNode = r, ca = t, da = Dd(r.firstChild), pa = !1, a = !0) : a = !1), a || ga(t)), Q(t), a = t.type, i = t.pendingProps, s = null !== e ? e.memoizedProps : null, r = i.children, xd(a, i) ? r = null : null !== s && xd(a, s) && (t.flags |= 32), null !== t.memoizedState && (a = to(e, t, ao, null, null, n), ff._currentValue = a), Ws(e, t), Ms(e, t, r, n), t.child;
                        case 6:
                            return null === e && fa && ((e = n = da) && (null !== (n = function(e, t, n) {
                                if ("" === t) return null;
                                for (; 3 !== e.nodeType;) {
                                    if ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !n) return null;
                                    if (null === (e = Dd(e.nextSibling))) return null
                                }
                                return e
                            }(n, t.pendingProps, pa)) ? (t.stateNode = n, ca = t, da = null, e = !0) : e = !1), e || ga(t)), null;
                        case 13:
                            return Js(e, t, n);
                        case 4:
                            return K(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = pi(t, null, r, n) : Ms(e, t, r, n), t.child;
                        case 11:
                            return Ls(e, t, t.type, t.pendingProps, n);
                        case 7:
                            return Ms(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return Ms(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            return r = t.pendingProps, Ca(0, t.type, r.value), Ms(e, t, r.children, n), t.child;
                        case 9:
                            return a = t.type._context, r = t.pendingProps.children, Fa(t), r = r(a = Oa(a)), t.flags |= 1, Ms(e, t, r, n), t.child;
                        case 14:
                            return _s(e, t, t.type, t.pendingProps, n);
                        case 15:
                            return zs(e, t, t.type, t.pendingProps, n);
                        case 19:
                            return al(e, t, n);
                        case 31:
                            return function(e, t, n) {
                                var r = t.pendingProps,
                                    a = 0 !== (128 & t.flags);
                                if (t.flags &= -129, null === e) {
                                    if (fa) {
                                        if ("hidden" === r.mode) return e = Us(t, r), t.lanes = 536870912, Bs(null, e);
                                        if (Li(t), (e = da) ? null !== (e = null !== (e = Ad(e, pa)) && "&" === e.data ? e : null) && (t.memoizedState = {
                                                dehydrated: e,
                                                treeContext: null !== na ? {
                                                    id: ra,
                                                    overflow: aa
                                                } : null,
                                                retryLane: 536870912,
                                                hydrationErrors: null
                                            }, (n = $r(e)).return = t, t.child = n, ca = t, da = null) : e = null, null === e) throw ga(t);
                                        return t.lanes = 536870912, null
                                    }
                                    return Us(t, r)
                                }
                                var i = e.memoizedState;
                                if (null !== i) {
                                    var s = i.dehydrated;
                                    if (Li(t), a)
                                        if (256 & t.flags) t.flags &= -257, t = Hs(e, t, n);
                                        else {
                                            if (null === t.memoizedState) throw Error(o(558));
                                            t.child = e.child, t.flags |= 128, t = null
                                        }
                                    else if (Ds || ja(e, t, n, !1), a = 0 !== (n & e.childLanes), Ds || a) {
                                        if (null !== (r = mu) && 0 !== (s = Me(r, n)) && s !== i.retryLane) throw i.retryLane = s, Dr(e, s), Xu(r, e, s), Os;
                                        sc(), t = Hs(e, t, n)
                                    } else e = i.treeContext, da = Dd(s.nextSibling), ca = t, fa = !0, ha = null, pa = !1, null !== e && ua(t, e), (t = Us(t, r)).flags |= 4096;
                                    return t
                                }
                                return (e = Vr(e.child, {
                                    mode: r.mode,
                                    children: r.children
                                })).ref = t.ref, t.child = e, e.return = t, e
                            }(e, t, n);
                        case 22:
                            return Is(e, t, n, t.pendingProps);
                        case 24:
                            return Fa(t), r = Oa(Ia), null === e ? (null === (a = Xa()) && (a = mu, i = Ba(), a.pooledCache = i, i.refCount++, null !== i && (a.pooledCacheLanes |= n), a = i), t.memoizedState = {
                                parent: r,
                                cache: a
                            }, vi(t), Ca(0, Ia, a)) : (0 !== (e.lanes & n) && (yi(e, t), Ti(t, null, null, n), Ei()), a = e.memoizedState, i = t.memoizedState, a.parent !== r ? (a = {
                                parent: r,
                                cache: r
                            }, t.memoizedState = a, 0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = a), Ca(0, Ia, r)) : (r = i.cache, Ca(0, Ia, r), r !== a.cache && Ra(t, [Ia], n, !0))), Ms(e, t, t.pendingProps.children, n), t.child;
                        case 29:
                            throw t.pendingProps
                    }
                    throw Error(o(156, t.tag))
                }

                function ll(e) {
                    e.flags |= 4
                }

                function ul(e, t, n, r, a) {
                    if ((t = 0 !== (32 & e.mode)) && (t = !1), t) {
                        if (e.flags |= 16777216, (335544128 & a) === a)
                            if (e.stateNode.complete) e.flags |= 8192;
                            else {
                                if (!ac()) throw ii = ti, Za;
                                e.flags |= 8192
                            }
                    } else e.flags &= -16777217
                }

                function cl(e, t) {
                    if ("stylesheet" !== t.type || 0 !== (4 & t.state.loading)) e.flags &= -16777217;
                    else if (e.flags |= 16777216, ! of (t)) {
                        if (!ac()) throw ii = ti, Za;
                        e.flags |= 8192
                    }
                }

                function dl(e, t) {
                    null !== t && (e.flags |= 4), 16384 & e.flags && (t = 22 !== e.tag ? je() : 536870912, e.lanes |= t, Ru |= t)
                }

                function fl(e, t) {
                    if (!fa) switch (e.tailMode) {
                        case "hidden":
                            t = e.tail;
                            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                            null === n ? e.tail = null : n.sibling = null;
                            break;
                        case "collapsed":
                            n = e.tail;
                            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
                }

                function hl(e) {
                    var t = null !== e.alternate && e.alternate.child === e.child,
                        n = 0,
                        r = 0;
                    if (t)
                        for (var a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= 65011712 & a.subtreeFlags, r |= 65011712 & a.flags, a.return = e, a = a.sibling;
                    else
                        for (a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
                    return e.subtreeFlags |= r, e.childLanes = n, t
                }

                function pl(e, t, n) {
                    var r = t.pendingProps;
                    switch (la(t), t.tag) {
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                        case 1:
                            return hl(t), null;
                        case 3:
                            return n = t.stateNode, r = null, null !== e && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), Pa(Ia), X(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), null !== e && null !== e.child || (ba(t) ? ll(t) : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, wa())), hl(t), null;
                        case 26:
                            var a = t.type,
                                i = t.memoizedState;
                            return null === e ? (ll(t), null !== i ? (hl(t), cl(t, i)) : (hl(t), ul(t, a, 0, 0, n))) : i ? i !== e.memoizedState ? (ll(t), hl(t), cl(t, i)) : (hl(t), t.flags &= -16777217) : ((e = e.memoizedProps) !== r && ll(t), hl(t), ul(t, a, 0, 0, n)), null;
                        case 27:
                            if (G(t), n = $.current, a = t.type, null !== e && null != t.stateNode) e.memoizedProps !== r && ll(t);
                            else {
                                if (!r) {
                                    if (null === t.stateNode) throw Error(o(166));
                                    return hl(t), null
                                }
                                e = W.current, ba(t) ? va(t) : (e = zd(a, r, n), t.stateNode = e, ll(t))
                            }
                            return hl(t), null;
                        case 5:
                            if (G(t), a = t.type, null !== e && null != t.stateNode) e.memoizedProps !== r && ll(t);
                            else {
                                if (!r) {
                                    if (null === t.stateNode) throw Error(o(166));
                                    return hl(t), null
                                }
                                if (i = W.current, ba(t)) va(t);
                                else {
                                    var s = vd($.current);
                                    switch (i) {
                                        case 1:
                                            i = s.createElementNS("http://www.w3.org/2000/svg", a);
                                            break;
                                        case 2:
                                            i = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                                            break;
                                        default:
                                            switch (a) {
                                                case "svg":
                                                    i = s.createElementNS("http://www.w3.org/2000/svg", a);
                                                    break;
                                                case "math":
                                                    i = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                                                    break;
                                                case "script":
                                                    (i = s.createElement("div")).innerHTML = "<script><\/script>", i = i.removeChild(i.firstChild);
                                                    break;
                                                case "select":
                                                    i = "string" === typeof r.is ? s.createElement("select", {
                                                        is: r.is
                                                    }) : s.createElement("select"), r.multiple ? i.multiple = !0 : r.size && (i.size = r.size);
                                                    break;
                                                default:
                                                    i = "string" === typeof r.is ? s.createElement(a, {
                                                        is: r.is
                                                    }) : s.createElement(a)
                                            }
                                    }
                                    i[Ve] = t, i[Ue] = r;
                                    e: for (s = t.child; null !== s;) {
                                        if (5 === s.tag || 6 === s.tag) i.appendChild(s.stateNode);
                                        else if (4 !== s.tag && 27 !== s.tag && null !== s.child) {
                                            s.child.return = s, s = s.child;
                                            continue
                                        }
                                        if (s === t) break e;
                                        for (; null === s.sibling;) {
                                            if (null === s.return || s.return === t) break e;
                                            s = s.return
                                        }
                                        s.sibling.return = s.return, s = s.sibling
                                    }
                                    t.stateNode = i;
                                    e: switch (hd(i, a, r), a) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            r = !!r.autoFocus;
                                            break e;
                                        case "img":
                                            r = !0;
                                            break e;
                                        default:
                                            r = !1
                                    }
                                    r && ll(t)
                                }
                            }
                            return hl(t), ul(t, t.type, null === e || e.memoizedProps, t.pendingProps, n), null;
                        case 6:
                            if (e && null != t.stateNode) e.memoizedProps !== r && ll(t);
                            else {
                                if ("string" !== typeof r && null === t.stateNode) throw Error(o(166));
                                if (e = $.current, ba(t)) {
                                    if (e = t.stateNode, n = t.memoizedProps, r = null, null !== (a = ca)) switch (a.tag) {
                                        case 27:
                                        case 5:
                                            r = a.memoizedProps
                                    }
                                    e[Ve] = t, (e = !!(e.nodeValue === n || null !== r && !0 === r.suppressHydrationWarning || cd(e.nodeValue, n))) || ga(t, !0)
                                } else(e = vd(e).createTextNode(r))[Ve] = t, t.stateNode = e
                            }
                            return hl(t), null;
                        case 31:
                            if (n = t.memoizedState, null === e || null !== e.memoizedState) {
                                if (r = ba(t), null !== n) {
                                    if (null === e) {
                                        if (!r) throw Error(o(318));
                                        if (!(e = null !== (e = t.memoizedState) ? e.dehydrated : null)) throw Error(o(557));
                                        e[Ve] = t
                                    } else xa(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                    hl(t), e = !1
                                } else n = wa(), null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = n), e = !0;
                                if (!e) return 256 & t.flags ? (Ii(t), t) : (Ii(t), null);
                                if (0 !== (128 & t.flags)) throw Error(o(558))
                            }
                            return hl(t), null;
                        case 13:
                            if (r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                                if (a = ba(t), null !== r && null !== r.dehydrated) {
                                    if (null === e) {
                                        if (!a) throw Error(o(318));
                                        if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null)) throw Error(o(317));
                                        a[Ve] = t
                                    } else xa(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                    hl(t), a = !1
                                } else a = wa(), null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = a), a = !0;
                                if (!a) return 256 & t.flags ? (Ii(t), t) : (Ii(t), null)
                            }
                            return Ii(t), 0 !== (128 & t.flags) ? (t.lanes = n, t) : (n = null !== r, e = null !== e && null !== e.memoizedState, n && (a = null, null !== (r = t.child).alternate && null !== r.alternate.memoizedState && null !== r.alternate.memoizedState.cachePool && (a = r.alternate.memoizedState.cachePool.pool), i = null, null !== r.memoizedState && null !== r.memoizedState.cachePool && (i = r.memoizedState.cachePool.pool), i !== a && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), dl(t, t.updateQueue), hl(t), null);
                        case 4:
                            return X(), null === e && ed(t.stateNode.containerInfo), hl(t), null;
                        case 10:
                            return Pa(t.type), hl(t), null;
                        case 19:
                            if (B(Bi), null === (r = t.memoizedState)) return hl(t), null;
                            if (a = 0 !== (128 & t.flags), null === (i = r.rendering))
                                if (a) fl(r, !1);
                                else {
                                    if (0 !== Eu || null !== e && 0 !== (128 & e.flags))
                                        for (e = t.child; null !== e;) {
                                            if (null !== (i = Vi(e))) {
                                                for (t.flags |= 128, fl(r, !1), e = i.updateQueue, t.updateQueue = e, dl(t, e), t.subtreeFlags = 0, e = n, n = t.child; null !== n;) Ur(n, e), n = n.sibling;
                                                return V(Bi, 1 & Bi.current | 2), fa && ia(t, r.treeForkCount), t.child
                                            }
                                            e = e.sibling
                                        }
                                    null !== r.tail && le() > Mu && (t.flags |= 128, a = !0, fl(r, !1), t.lanes = 4194304)
                                }
                            else {
                                if (!a)
                                    if (null !== (e = Vi(i))) {
                                        if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, dl(t, e), fl(r, !0), null === r.tail && "hidden" === r.tailMode && !i.alternate && !fa) return hl(t), null
                                    } else 2 * le() - r.renderingStartTime > Mu && 536870912 !== n && (t.flags |= 128, a = !0, fl(r, !1), t.lanes = 4194304);
                                r.isBackwards ? (i.sibling = t.child, t.child = i) : (null !== (e = r.last) ? e.sibling = i : t.child = i, r.last = i)
                            }
                            return null !== r.tail ? (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = le(), e.sibling = null, n = Bi.current, V(Bi, a ? 1 & n | 2 : 1 & n), fa && ia(t, r.treeForkCount), e) : (hl(t), null);
                        case 22:
                        case 23:
                            return Ii(t), Fi(), r = null !== t.memoizedState, null !== e ? null !== e.memoizedState !== r && (t.flags |= 8192) : r && (t.flags |= 8192), r ? 0 !== (536870912 & n) && 0 === (128 & t.flags) && (hl(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : hl(t), null !== (n = t.updateQueue) && dl(t, n.retryQueue), n = null, null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool), r = null, null !== t.memoizedState && null !== t.memoizedState.cachePool && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), null !== e && B(Ka), null;
                        case 24:
                            return n = null, null !== e && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Pa(Ia), hl(t), null;
                        case 25:
                        case 30:
                            return null
                    }
                    throw Error(o(156, t.tag))
                }

                function ml(e, t) {
                    switch (la(t), t.tag) {
                        case 1:
                            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 3:
                            return Pa(Ia), X(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                        case 26:
                        case 27:
                        case 5:
                            return G(t), null;
                        case 31:
                            if (null !== t.memoizedState) {
                                if (Ii(t), null === t.alternate) throw Error(o(340));
                                xa()
                            }
                            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 13:
                            if (Ii(t), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                                if (null === t.alternate) throw Error(o(340));
                                xa()
                            }
                            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 19:
                            return B(Bi), null;
                        case 4:
                            return X(), null;
                        case 10:
                            return Pa(t.type), null;
                        case 22:
                        case 23:
                            return Ii(t), Fi(), null !== e && B(Ka), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 24:
                            return Pa(Ia), null;
                        default:
                            return null
                    }
                }

                function gl(e, t) {
                    switch (la(t), t.tag) {
                        case 3:
                            Pa(Ia), X();
                            break;
                        case 26:
                        case 27:
                        case 5:
                            G(t);
                            break;
                        case 4:
                            X();
                            break;
                        case 31:
                            null !== t.memoizedState && Ii(t);
                            break;
                        case 13:
                            Ii(t);
                            break;
                        case 19:
                            B(Bi);
                            break;
                        case 10:
                            Pa(t.type);
                            break;
                        case 22:
                        case 23:
                            Ii(t), Fi(), null !== e && B(Ka);
                            break;
                        case 24:
                            Pa(Ia)
                    }
                }

                function vl(e, t) {
                    try {
                        var n = t.updateQueue,
                            r = null !== n ? n.lastEffect : null;
                        if (null !== r) {
                            var a = r.next;
                            n = a;
                            do {
                                if ((n.tag & e) === e) {
                                    r = void 0;
                                    var i = n.create,
                                        o = n.inst;
                                    r = i(), o.destroy = r
                                }
                                n = n.next
                            } while (n !== a)
                        }
                    } catch (s) {
                        Ec(t, t.return, s)
                    }
                }

                function yl(e, t, n) {
                    try {
                        var r = t.updateQueue,
                            a = null !== r ? r.lastEffect : null;
                        if (null !== a) {
                            var i = a.next;
                            r = i;
                            do {
                                if ((r.tag & e) === e) {
                                    var o = r.inst,
                                        s = o.destroy;
                                    if (void 0 !== s) {
                                        o.destroy = void 0, a = t;
                                        var l = n,
                                            u = s;
                                        try {
                                            u()
                                        } catch (c) {
                                            Ec(a, l, c)
                                        }
                                    }
                                }
                                r = r.next
                            } while (r !== i)
                        }
                    } catch (c) {
                        Ec(t, t.return, c)
                    }
                }

                function bl(e) {
                    var t = e.updateQueue;
                    if (null !== t) {
                        var n = e.stateNode;
                        try {
                            Pi(t, n)
                        } catch (r) {
                            Ec(e, e.return, r)
                        }
                    }
                }

                function xl(e, t, n) {
                    n.props = Es(e.type, e.memoizedProps), n.state = e.memoizedState;
                    try {
                        n.componentWillUnmount()
                    } catch (r) {
                        Ec(e, t, r)
                    }
                }

                function wl(e, t) {
                    try {
                        var n = e.ref;
                        if (null !== n) {
                            switch (e.tag) {
                                case 26:
                                case 27:
                                case 5:
                                    var r = e.stateNode;
                                    break;
                                default:
                                    r = e.stateNode
                            }
                            "function" === typeof n ? e.refCleanup = n(r) : n.current = r
                        }
                    } catch (a) {
                        Ec(e, t, a)
                    }
                }

                function Sl(e, t) {
                    var n = e.ref,
                        r = e.refCleanup;
                    if (null !== n)
                        if ("function" === typeof r) try {
                            r()
                        } catch (a) {
                            Ec(e, t, a)
                        } finally {
                            e.refCleanup = null, null != (e = e.alternate) && (e.refCleanup = null)
                        } else if ("function" === typeof n) try {
                            n(null)
                        } catch (i) {
                            Ec(e, t, i)
                        } else n.current = null
                }

                function kl(e) {
                    var t = e.type,
                        n = e.memoizedProps,
                        r = e.stateNode;
                    try {
                        e: switch (t) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                n.autoFocus && r.focus();
                                break e;
                            case "img":
                                n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet)
                        }
                    }
                    catch (a) {
                        Ec(e, e.return, a)
                    }
                }

                function El(e, t, n) {
                    try {
                        var r = e.stateNode;
                        ! function(e, t, n, r) {
                            switch (t) {
                                case "div":
                                case "span":
                                case "svg":
                                case "path":
                                case "a":
                                case "g":
                                case "p":
                                case "li":
                                    break;
                                case "input":
                                    var a = null,
                                        i = null,
                                        s = null,
                                        l = null,
                                        u = null,
                                        c = null,
                                        d = null;
                                    for (p in n) {
                                        var f = n[p];
                                        if (n.hasOwnProperty(p) && null != f) switch (p) {
                                            case "checked":
                                            case "value":
                                                break;
                                            case "defaultValue":
                                                u = f;
                                            default:
                                                r.hasOwnProperty(p) || dd(e, t, p, null, r, f)
                                        }
                                    }
                                    for (var h in r) {
                                        var p = r[h];
                                        if (f = n[h], r.hasOwnProperty(h) && (null != p || null != f)) switch (h) {
                                            case "type":
                                                i = p;
                                                break;
                                            case "name":
                                                a = p;
                                                break;
                                            case "checked":
                                                c = p;
                                                break;
                                            case "defaultChecked":
                                                d = p;
                                                break;
                                            case "value":
                                                s = p;
                                                break;
                                            case "defaultValue":
                                                l = p;
                                                break;
                                            case "children":
                                            case "dangerouslySetInnerHTML":
                                                if (null != p) throw Error(o(137, t));
                                                break;
                                            default:
                                                p !== f && dd(e, t, h, p, r, f)
                                        }
                                    }
                                    return void yt(e, s, l, u, c, d, i, a);
                                case "select":
                                    for (i in p = s = l = h = null, n)
                                        if (u = n[i], n.hasOwnProperty(i) && null != u) switch (i) {
                                            case "value":
                                                break;
                                            case "multiple":
                                                p = u;
                                            default:
                                                r.hasOwnProperty(i) || dd(e, t, i, null, r, u)
                                        }
                                    for (a in r)
                                        if (i = r[a], u = n[a], r.hasOwnProperty(a) && (null != i || null != u)) switch (a) {
                                            case "value":
                                                h = i;
                                                break;
                                            case "defaultValue":
                                                l = i;
                                                break;
                                            case "multiple":
                                                s = i;
                                            default:
                                                i !== u && dd(e, t, a, i, r, u)
                                        }
                                    return t = l, n = s, r = p, void(null != h ? wt(e, !!n, h, !1) : !!r !== !!n && (null != t ? wt(e, !!n, t, !0) : wt(e, !!n, n ? [] : "", !1)));
                                case "textarea":
                                    for (l in p = h = null, n)
                                        if (a = n[l], n.hasOwnProperty(l) && null != a && !r.hasOwnProperty(l)) switch (l) {
                                            case "value":
                                            case "children":
                                                break;
                                            default:
                                                dd(e, t, l, null, r, a)
                                        }
                                    for (s in r)
                                        if (a = r[s], i = n[s], r.hasOwnProperty(s) && (null != a || null != i)) switch (s) {
                                            case "value":
                                                h = a;
                                                break;
                                            case "defaultValue":
                                                p = a;
                                                break;
                                            case "children":
                                                break;
                                            case "dangerouslySetInnerHTML":
                                                if (null != a) throw Error(o(91));
                                                break;
                                            default:
                                                a !== i && dd(e, t, s, a, r, i)
                                        }
                                    return void St(e, h, p);
                                case "option":
                                    for (var m in n)
                                        if (h = n[m], n.hasOwnProperty(m) && null != h && !r.hasOwnProperty(m))
                                            if ("selected" === m) e.selected = !1;
                                            else dd(e, t, m, null, r, h);
                                    for (u in r)
                                        if (h = r[u], p = n[u], r.hasOwnProperty(u) && h !== p && (null != h || null != p))
                                            if ("selected" === u) e.selected = h && "function" !== typeof h && "symbol" !== typeof h;
                                            else dd(e, t, u, h, r, p);
                                    return;
                                case "img":
                                case "link":
                                case "area":
                                case "base":
                                case "br":
                                case "col":
                                case "embed":
                                case "hr":
                                case "keygen":
                                case "meta":
                                case "param":
                                case "source":
                                case "track":
                                case "wbr":
                                case "menuitem":
                                    for (var g in n) h = n[g], n.hasOwnProperty(g) && null != h && !r.hasOwnProperty(g) && dd(e, t, g, null, r, h);
                                    for (c in r)
                                        if (h = r[c], p = n[c], r.hasOwnProperty(c) && h !== p && (null != h || null != p)) switch (c) {
                                            case "children":
                                            case "dangerouslySetInnerHTML":
                                                if (null != h) throw Error(o(137, t));
                                                break;
                                            default:
                                                dd(e, t, c, h, r, p)
                                        }
                                    return;
                                default:
                                    if (Nt(t)) {
                                        for (var v in n) h = n[v], n.hasOwnProperty(v) && void 0 !== h && !r.hasOwnProperty(v) && fd(e, t, v, void 0, r, h);
                                        for (d in r) h = r[d], p = n[d], !r.hasOwnProperty(d) || h === p || void 0 === h && void 0 === p || fd(e, t, d, h, r, p);
                                        return
                                    }
                            }
                            for (var y in n) h = n[y], n.hasOwnProperty(y) && null != h && !r.hasOwnProperty(y) && dd(e, t, y, null, r, h);
                            for (f in r) h = r[f], p = n[f], !r.hasOwnProperty(f) || h === p || null == h && null == p || dd(e, t, f, h, r, p)
                        }(r, e.type, n, t), r[Ue] = t
                    } catch (a) {
                        Ec(e, e.return, a)
                    }
                }

                function Tl(e) {
                    return 5 === e.tag || 3 === e.tag || 26 === e.tag || 27 === e.tag && Pd(e.type) || 4 === e.tag
                }

                function Cl(e) {
                    e: for (;;) {
                        for (; null === e.sibling;) {
                            if (null === e.return || Tl(e.return)) return null;
                            e = e.return
                        }
                        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                            if (27 === e.tag && Pd(e.type)) continue e;
                            if (2 & e.flags) continue e;
                            if (null === e.child || 4 === e.tag) continue e;
                            e.child.return = e, e = e.child
                        }
                        if (!(2 & e.flags)) return e.stateNode
                    }
                }

                function Pl(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? (9 === n.nodeType ? n.body : "HTML" === n.nodeName ? n.ownerDocument.body : n).insertBefore(e, t) : ((t = 9 === n.nodeType ? n.body : "HTML" === n.nodeName ? n.ownerDocument.body : n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Ft));
                    else if (4 !== r && (27 === r && Pd(e.type) && (n = e.stateNode, t = null), null !== (e = e.child)))
                        for (Pl(e, t, n), e = e.sibling; null !== e;) Pl(e, t, n), e = e.sibling
                }

                function Nl(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
                    else if (4 !== r && (27 === r && Pd(e.type) && (n = e.stateNode), null !== (e = e.child)))
                        for (Nl(e, t, n), e = e.sibling; null !== e;) Nl(e, t, n), e = e.sibling
                }

                function Rl(e) {
                    var t = e.stateNode,
                        n = e.memoizedProps;
                    try {
                        for (var r = e.type, a = t.attributes; a.length;) t.removeAttributeNode(a[0]);
                        hd(t, r, n), t[Ve] = e, t[Ue] = n
                    } catch (i) {
                        Ec(e, e.return, i)
                    }
                }
                var jl = !1,
                    Al = !1,
                    Fl = !1,
                    Ol = "function" === typeof WeakSet ? WeakSet : Set,
                    Dl = null;

                function Ml(e, t, n) {
                    var r = n.flags;
                    switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Xl(e, n), 4 & r && vl(5, n);
                            break;
                        case 1:
                            if (Xl(e, n), 4 & r)
                                if (e = n.stateNode, null === t) try {
                                    e.componentDidMount()
                                } catch (o) {
                                    Ec(n, n.return, o)
                                } else {
                                    var a = Es(n.type, t.memoizedProps);
                                    t = t.memoizedState;
                                    try {
                                        e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate)
                                    } catch (s) {
                                        Ec(n, n.return, s)
                                    }
                                }
                            64 & r && bl(n), 512 & r && wl(n, n.return);
                            break;
                        case 3:
                            if (Xl(e, n), 64 & r && null !== (e = n.updateQueue)) {
                                if (t = null, null !== n.child) switch (n.child.tag) {
                                    case 27:
                                    case 5:
                                    case 1:
                                        t = n.child.stateNode
                                }
                                try {
                                    Pi(e, t)
                                } catch (o) {
                                    Ec(n, n.return, o)
                                }
                            }
                            break;
                        case 27:
                            null === t && 4 & r && Rl(n);
                        case 26:
                        case 5:
                            Xl(e, n), null === t && 4 & r && kl(n), 512 & r && wl(n, n.return);
                            break;
                        case 12:
                            Xl(e, n);
                            break;
                        case 31:
                            Xl(e, n), 4 & r && Vl(e, n);
                            break;
                        case 13:
                            Xl(e, n), 4 & r && Ul(e, n), 64 & r && (null !== (e = n.memoizedState) && (null !== (e = e.dehydrated) && function(e, t) {
                                var n = e.ownerDocument;
                                if ("$~" === e.data) e._reactRetry = t;
                                else if ("$?" !== e.data || "loading" !== n.readyState) t();
                                else {
                                    var r = function() {
                                        t(), n.removeEventListener("DOMContentLoaded", r)
                                    };
                                    n.addEventListener("DOMContentLoaded", r), e._reactRetry = r
                                }
                            }(e, n = Nc.bind(null, n))));
                            break;
                        case 22:
                            if (!(r = null !== n.memoizedState || jl)) {
                                t = null !== t && null !== t.memoizedState || Al, a = jl;
                                var i = Al;
                                jl = r, (Al = t) && !i ? Gl(e, n, 0 !== (8772 & n.subtreeFlags)) : Xl(e, n), jl = a, Al = i
                            }
                            break;
                        case 30:
                            break;
                        default:
                            Xl(e, n)
                    }
                }

                function Ll(e) {
                    var t = e.alternate;
                    null !== t && (e.alternate = null, Ll(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && Xe(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
                }
                var _l = null,
                    zl = !1;

                function Il(e, t, n) {
                    for (n = n.child; null !== n;) Bl(e, t, n), n = n.sibling
                }

                function Bl(e, t, n) {
                    if (ye && "function" === typeof ye.onCommitFiberUnmount) try {
                        ye.onCommitFiberUnmount(ve, n)
                    } catch (i) {}
                    switch (n.tag) {
                        case 26:
                            Al || Sl(n, t), Il(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
                            break;
                        case 27:
                            Al || Sl(n, t);
                            var r = _l,
                                a = zl;
                            Pd(n.type) && (_l = n.stateNode, zl = !1), Il(e, t, n), Id(n.stateNode), _l = r, zl = a;
                            break;
                        case 5:
                            Al || Sl(n, t);
                        case 6:
                            if (r = _l, a = zl, _l = null, Il(e, t, n), zl = a, null !== (_l = r))
                                if (zl) try {
                                    (9 === _l.nodeType ? _l.body : "HTML" === _l.nodeName ? _l.ownerDocument.body : _l).removeChild(n.stateNode)
                                } catch (o) {
                                    Ec(n, t, o)
                                } else try {
                                    _l.removeChild(n.stateNode)
                                } catch (o) {
                                    Ec(n, t, o)
                                }
                            break;
                        case 18:
                            null !== _l && (zl ? (Nd(9 === (e = _l).nodeType ? e.body : "HTML" === e.nodeName ? e.ownerDocument.body : e, n.stateNode), $f(e)) : Nd(_l, n.stateNode));
                            break;
                        case 4:
                            r = _l, a = zl, _l = n.stateNode.containerInfo, zl = !0, Il(e, t, n), _l = r, zl = a;
                            break;
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            yl(2, n, t), Al || yl(4, n, t), Il(e, t, n);
                            break;
                        case 1:
                            Al || (Sl(n, t), "function" === typeof(r = n.stateNode).componentWillUnmount && xl(n, t, r)), Il(e, t, n);
                            break;
                        case 21:
                            Il(e, t, n);
                            break;
                        case 22:
                            Al = (r = Al) || null !== n.memoizedState, Il(e, t, n), Al = r;
                            break;
                        default:
                            Il(e, t, n)
                    }
                }

                function Vl(e, t) {
                    if (null === t.memoizedState && (null !== (e = t.alternate) && null !== (e = e.memoizedState))) {
                        e = e.dehydrated;
                        try {
                            $f(e)
                        } catch (n) {
                            Ec(t, t.return, n)
                        }
                    }
                }

                function Ul(e, t) {
                    if (null === t.memoizedState && (null !== (e = t.alternate) && (null !== (e = e.memoizedState) && null !== (e = e.dehydrated)))) try {
                        $f(e)
                    } catch (n) {
                        Ec(t, t.return, n)
                    }
                }

                function Hl(e, t) {
                    var n = function(e) {
                        switch (e.tag) {
                            case 31:
                            case 13:
                            case 19:
                                var t = e.stateNode;
                                return null === t && (t = e.stateNode = new Ol), t;
                            case 22:
                                return null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new Ol), t;
                            default:
                                throw Error(o(435, e.tag))
                        }
                    }(e);
                    t.forEach(function(t) {
                        if (!n.has(t)) {
                            n.add(t);
                            var r = Rc.bind(null, e, t);
                            t.then(r, r)
                        }
                    })
                }

                function Wl(e, t) {
                    var n = t.deletions;
                    if (null !== n)
                        for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                                i = e,
                                s = t,
                                l = s;
                            e: for (; null !== l;) {
                                switch (l.tag) {
                                    case 27:
                                        if (Pd(l.type)) {
                                            _l = l.stateNode, zl = !1;
                                            break e
                                        }
                                        break;
                                    case 5:
                                        _l = l.stateNode, zl = !1;
                                        break e;
                                    case 3:
                                    case 4:
                                        _l = l.stateNode.containerInfo, zl = !0;
                                        break e
                                }
                                l = l.return
                            }
                            if (null === _l) throw Error(o(160));
                            Bl(i, s, a), _l = null, zl = !1, null !== (i = a.alternate) && (i.return = null), a.return = null
                        }
                    if (13886 & t.subtreeFlags)
                        for (t = t.child; null !== t;) $l(t, e), t = t.sibling
                }
                var ql = null;

                function $l(e, t) {
                    var n = e.alternate,
                        r = e.flags;
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Wl(t, e), Yl(e), 4 & r && (yl(3, e, e.return), vl(3, e), yl(5, e, e.return));
                            break;
                        case 1:
                            Wl(t, e), Yl(e), 512 & r && (Al || null === n || Sl(n, n.return)), 64 & r && jl && (null !== (e = e.updateQueue) && (null !== (r = e.callbacks) && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = null === n ? r : n.concat(r))));
                            break;
                        case 26:
                            var a = ql;
                            if (Wl(t, e), Yl(e), 512 & r && (Al || null === n || Sl(n, n.return)), 4 & r) {
                                var i = null !== n ? n.memoizedState : null;
                                if (r = e.memoizedState, null === n)
                                    if (null === r)
                                        if (null === e.stateNode) {
                                            e: {
                                                r = e.type,
                                                n = e.memoizedProps,
                                                a = a.ownerDocument || a;t: switch (r) {
                                                    case "title":
                                                        (!(i = a.getElementsByTagName("title")[0]) || i[Ke] || i[Ve] || "http://www.w3.org/2000/svg" === i.namespaceURI || i.hasAttribute("itemprop")) && (i = a.createElement(r), a.head.insertBefore(i, a.querySelector("head > title"))), hd(i, r, n), i[Ve] = e, et(i), r = i;
                                                        break e;
                                                    case "link":
                                                        var s = rf("link", "href", a).get(r + (n.href || ""));
                                                        if (s)
                                                            for (var l = 0; l < s.length; l++)
                                                                if ((i = s[l]).getAttribute("href") === (null == n.href || "" === n.href ? null : n.href) && i.getAttribute("rel") === (null == n.rel ? null : n.rel) && i.getAttribute("title") === (null == n.title ? null : n.title) && i.getAttribute("crossorigin") === (null == n.crossOrigin ? null : n.crossOrigin)) {
                                                                    s.splice(l, 1);
                                                                    break t
                                                                }
                                                        hd(i = a.createElement(r), r, n), a.head.appendChild(i);
                                                        break;
                                                    case "meta":
                                                        if (s = rf("meta", "content", a).get(r + (n.content || "")))
                                                            for (l = 0; l < s.length; l++)
                                                                if ((i = s[l]).getAttribute("content") === (null == n.content ? null : "" + n.content) && i.getAttribute("name") === (null == n.name ? null : n.name) && i.getAttribute("property") === (null == n.property ? null : n.property) && i.getAttribute("http-equiv") === (null == n.httpEquiv ? null : n.httpEquiv) && i.getAttribute("charset") === (null == n.charSet ? null : n.charSet)) {
                                                                    s.splice(l, 1);
                                                                    break t
                                                                }
                                                        hd(i = a.createElement(r), r, n), a.head.appendChild(i);
                                                        break;
                                                    default:
                                                        throw Error(o(468, r))
                                                }
                                                i[Ve] = e,
                                                et(i),
                                                r = i
                                            }
                                            e.stateNode = r
                                        }
                                else af(a, e.type, e.stateNode);
                                else e.stateNode = Jd(a, r, e.memoizedProps);
                                else i !== r ? (null === i ? null !== n.stateNode && (n = n.stateNode).parentNode.removeChild(n) : i.count--, null === r ? af(a, e.type, e.stateNode) : Jd(a, r, e.memoizedProps)) : null === r && null !== e.stateNode && El(e, e.memoizedProps, n.memoizedProps)
                            }
                            break;
                        case 27:
                            Wl(t, e), Yl(e), 512 & r && (Al || null === n || Sl(n, n.return)), null !== n && 4 & r && El(e, e.memoizedProps, n.memoizedProps);
                            break;
                        case 5:
                            if (Wl(t, e), Yl(e), 512 & r && (Al || null === n || Sl(n, n.return)), 32 & e.flags) {
                                a = e.stateNode;
                                try {
                                    Et(a, "")
                                } catch (m) {
                                    Ec(e, e.return, m)
                                }
                            }
                            4 & r && null != e.stateNode && El(e, a = e.memoizedProps, null !== n ? n.memoizedProps : a), 1024 & r && (Fl = !0);
                            break;
                        case 6:
                            if (Wl(t, e), Yl(e), 4 & r) {
                                if (null === e.stateNode) throw Error(o(162));
                                r = e.memoizedProps, n = e.stateNode;
                                try {
                                    n.nodeValue = r
                                } catch (m) {
                                    Ec(e, e.return, m)
                                }
                            }
                            break;
                        case 3:
                            if (nf = null, a = ql, ql = Ud(t.containerInfo), Wl(t, e), ql = a, Yl(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                                $f(t.containerInfo)
                            } catch (m) {
                                Ec(e, e.return, m)
                            }
                            Fl && (Fl = !1, Kl(e));
                            break;
                        case 4:
                            r = ql, ql = Ud(e.stateNode.containerInfo), Wl(t, e), Yl(e), ql = r;
                            break;
                        case 12:
                        default:
                            Wl(t, e), Yl(e);
                            break;
                        case 31:
                        case 19:
                            Wl(t, e), Yl(e), 4 & r && (null !== (r = e.updateQueue) && (e.updateQueue = null, Hl(e, r)));
                            break;
                        case 13:
                            Wl(t, e), Yl(e), 8192 & e.child.flags && null !== e.memoizedState !== (null !== n && null !== n.memoizedState) && (Ou = le()), 4 & r && (null !== (r = e.updateQueue) && (e.updateQueue = null, Hl(e, r)));
                            break;
                        case 22:
                            a = null !== e.memoizedState;
                            var u = null !== n && null !== n.memoizedState,
                                c = jl,
                                d = Al;
                            if (jl = c || a, Al = d || u, Wl(t, e), Al = d, jl = c, Yl(e), 8192 & r) e: for (t = e.stateNode, t._visibility = a ? -2 & t._visibility : 1 | t._visibility, a && (null === n || u || jl || Al || Ql(e)), n = null, t = e;;) {
                                if (5 === t.tag || 26 === t.tag) {
                                    if (null === n) {
                                        u = n = t;
                                        try {
                                            if (i = u.stateNode, a) "function" === typeof(s = i.style).setProperty ? s.setProperty("display", "none", "important") : s.display = "none";
                                            else {
                                                l = u.stateNode;
                                                var f = u.memoizedProps.style,
                                                    h = void 0 !== f && null !== f && f.hasOwnProperty("display") ? f.display : null;
                                                l.style.display = null == h || "boolean" === typeof h ? "" : ("" + h).trim()
                                            }
                                        } catch (m) {
                                            Ec(u, u.return, m)
                                        }
                                    }
                                } else if (6 === t.tag) {
                                    if (null === n) {
                                        u = t;
                                        try {
                                            u.stateNode.nodeValue = a ? "" : u.memoizedProps
                                        } catch (m) {
                                            Ec(u, u.return, m)
                                        }
                                    }
                                } else if (18 === t.tag) {
                                    if (null === n) {
                                        u = t;
                                        try {
                                            var p = u.stateNode;
                                            a ? Rd(p, !0) : Rd(u.stateNode, !1)
                                        } catch (m) {
                                            Ec(u, u.return, m)
                                        }
                                    }
                                } else if ((22 !== t.tag && 23 !== t.tag || null === t.memoizedState || t === e) && null !== t.child) {
                                    t.child.return = t, t = t.child;
                                    continue
                                }
                                if (t === e) break e;
                                for (; null === t.sibling;) {
                                    if (null === t.return || t.return === e) break e;
                                    n === t && (n = null), t = t.return
                                }
                                n === t && (n = null), t.sibling.return = t.return, t = t.sibling
                            }
                            4 & r && (null !== (r = e.updateQueue) && (null !== (n = r.retryQueue) && (r.retryQueue = null, Hl(e, n))));
                        case 30:
                        case 21:
                    }
                }

                function Yl(e) {
                    var t = e.flags;
                    if (2 & t) {
                        try {
                            for (var n, r = e.return; null !== r;) {
                                if (Tl(r)) {
                                    n = r;
                                    break
                                }
                                r = r.return
                            }
                            if (null == n) throw Error(o(160));
                            switch (n.tag) {
                                case 27:
                                    var a = n.stateNode;
                                    Nl(e, Cl(e), a);
                                    break;
                                case 5:
                                    var i = n.stateNode;
                                    32 & n.flags && (Et(i, ""), n.flags &= -33), Nl(e, Cl(e), i);
                                    break;
                                case 3:
                                case 4:
                                    var s = n.stateNode.containerInfo;
                                    Pl(e, Cl(e), s);
                                    break;
                                default:
                                    throw Error(o(161))
                            }
                        } catch (l) {
                            Ec(e, e.return, l)
                        }
                        e.flags &= -3
                    }
                    4096 & t && (e.flags &= -4097)
                }

                function Kl(e) {
                    if (1024 & e.subtreeFlags)
                        for (e = e.child; null !== e;) {
                            var t = e;
                            Kl(t), 5 === t.tag && 1024 & t.flags && t.stateNode.reset(), e = e.sibling
                        }
                }

                function Xl(e, t) {
                    if (8772 & t.subtreeFlags)
                        for (t = t.child; null !== t;) Ml(e, t.alternate, t), t = t.sibling
                }

                function Ql(e) {
                    for (e = e.child; null !== e;) {
                        var t = e;
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                yl(4, t, t.return), Ql(t);
                                break;
                            case 1:
                                Sl(t, t.return);
                                var n = t.stateNode;
                                "function" === typeof n.componentWillUnmount && xl(t, t.return, n), Ql(t);
                                break;
                            case 27:
                                Id(t.stateNode);
                            case 26:
                            case 5:
                                Sl(t, t.return), Ql(t);
                                break;
                            case 22:
                                null === t.memoizedState && Ql(t);
                                break;
                            default:
                                Ql(t)
                        }
                        e = e.sibling
                    }
                }

                function Gl(e, t, n) {
                    for (n = n && 0 !== (8772 & t.subtreeFlags), t = t.child; null !== t;) {
                        var r = t.alternate,
                            a = e,
                            i = t,
                            o = i.flags;
                        switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Gl(a, i, n), vl(4, i);
                                break;
                            case 1:
                                if (Gl(a, i, n), "function" === typeof(a = (r = i).stateNode).componentDidMount) try {
                                    a.componentDidMount()
                                } catch (u) {
                                    Ec(r, r.return, u)
                                }
                                if (null !== (a = (r = i).updateQueue)) {
                                    var s = r.stateNode;
                                    try {
                                        var l = a.shared.hiddenCallbacks;
                                        if (null !== l)
                                            for (a.shared.hiddenCallbacks = null, a = 0; a < l.length; a++) Ci(l[a], s)
                                    } catch (u) {
                                        Ec(r, r.return, u)
                                    }
                                }
                                n && 64 & o && bl(i), wl(i, i.return);
                                break;
                            case 27:
                                Rl(i);
                            case 26:
                            case 5:
                                Gl(a, i, n), n && null === r && 4 & o && kl(i), wl(i, i.return);
                                break;
                            case 12:
                                Gl(a, i, n);
                                break;
                            case 31:
                                Gl(a, i, n), n && 4 & o && Vl(a, i);
                                break;
                            case 13:
                                Gl(a, i, n), n && 4 & o && Ul(a, i);
                                break;
                            case 22:
                                null === i.memoizedState && Gl(a, i, n), wl(i, i.return);
                                break;
                            case 30:
                                break;
                            default:
                                Gl(a, i, n)
                        }
                        t = t.sibling
                    }
                }

                function Jl(e, t) {
                    var n = null;
                    null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool), e = null, null !== t.memoizedState && null !== t.memoizedState.cachePool && (e = t.memoizedState.cachePool.pool), e !== n && (null != e && e.refCount++, null != n && Va(n))
                }

                function Zl(e, t) {
                    e = null, null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Va(e))
                }

                function eu(e, t, n, r) {
                    if (10256 & t.subtreeFlags)
                        for (t = t.child; null !== t;) tu(e, t, n, r), t = t.sibling
                }

                function tu(e, t, n, r) {
                    var a = t.flags;
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            eu(e, t, n, r), 2048 & a && vl(9, t);
                            break;
                        case 1:
                        case 31:
                        case 13:
                        default:
                            eu(e, t, n, r);
                            break;
                        case 3:
                            eu(e, t, n, r), 2048 & a && (e = null, null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Va(e)));
                            break;
                        case 12:
                            if (2048 & a) {
                                eu(e, t, n, r), e = t.stateNode;
                                try {
                                    var i = t.memoizedProps,
                                        o = i.id,
                                        s = i.onPostCommit;
                                    "function" === typeof s && s(o, null === t.alternate ? "mount" : "update", e.passiveEffectDuration, -0)
                                } catch (l) {
                                    Ec(t, t.return, l)
                                }
                            } else eu(e, t, n, r);
                            break;
                        case 23:
                            break;
                        case 22:
                            i = t.stateNode, o = t.alternate, null !== t.memoizedState ? 2 & i._visibility ? eu(e, t, n, r) : ru(e, t) : 2 & i._visibility ? eu(e, t, n, r) : (i._visibility |= 2, nu(e, t, n, r, 0 !== (10256 & t.subtreeFlags) || !1)), 2048 & a && Jl(o, t);
                            break;
                        case 24:
                            eu(e, t, n, r), 2048 & a && Zl(t.alternate, t)
                    }
                }

                function nu(e, t, n, r, a) {
                    for (a = a && (0 !== (10256 & t.subtreeFlags) || !1), t = t.child; null !== t;) {
                        var i = e,
                            o = t,
                            s = n,
                            l = r,
                            u = o.flags;
                        switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                nu(i, o, s, l, a), vl(8, o);
                                break;
                            case 23:
                                break;
                            case 22:
                                var c = o.stateNode;
                                null !== o.memoizedState ? 2 & c._visibility ? nu(i, o, s, l, a) : ru(i, o) : (c._visibility |= 2, nu(i, o, s, l, a)), a && 2048 & u && Jl(o.alternate, o);
                                break;
                            case 24:
                                nu(i, o, s, l, a), a && 2048 & u && Zl(o.alternate, o);
                                break;
                            default:
                                nu(i, o, s, l, a)
                        }
                        t = t.sibling
                    }
                }

                function ru(e, t) {
                    if (10256 & t.subtreeFlags)
                        for (t = t.child; null !== t;) {
                            var n = e,
                                r = t,
                                a = r.flags;
                            switch (r.tag) {
                                case 22:
                                    ru(n, r), 2048 & a && Jl(r.alternate, r);
                                    break;
                                case 24:
                                    ru(n, r), 2048 & a && Zl(r.alternate, r);
                                    break;
                                default:
                                    ru(n, r)
                            }
                            t = t.sibling
                        }
                }
                var au = 8192;

                function iu(e, t, n) {
                    if (e.subtreeFlags & au)
                        for (e = e.child; null !== e;) ou(e, t, n), e = e.sibling
                }

                function ou(e, t, n) {
                    switch (e.tag) {
                        case 26:
                            iu(e, t, n), e.flags & au && null !== e.memoizedState && function(e, t, n, r) {
                                if ("stylesheet" === n.type && ("string" !== typeof r.media || !1 !== matchMedia(r.media).matches) && 0 === (4 & n.state.loading)) {
                                    if (null === n.instance) {
                                        var a = Yd(r.href),
                                            i = t.querySelector(Kd(a));
                                        if (i) return null !== (t = i._p) && "object" === typeof t && "function" === typeof t.then && (e.count++, e = lf.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, void et(i);
                                        i = t.ownerDocument || t, r = Xd(r), (a = Bd.get(a)) && ef(r, a), et(i = i.createElement("link"));
                                        var o = i;
                                        o._p = new Promise(function(e, t) {
                                            o.onload = e, o.onerror = t
                                        }), hd(i, "link", r), n.instance = i
                                    }
                                    null === e.stylesheets && (e.stylesheets = new Map), e.stylesheets.set(n, t), (t = n.state.preload) && 0 === (3 & n.state.loading) && (e.count++, n = lf.bind(e), t.addEventListener("load", n), t.addEventListener("error", n))
                                }
                            }(n, ql, e.memoizedState, e.memoizedProps);
                            break;
                        case 5:
                        default:
                            iu(e, t, n);
                            break;
                        case 3:
                        case 4:
                            var r = ql;
                            ql = Ud(e.stateNode.containerInfo), iu(e, t, n), ql = r;
                            break;
                        case 22:
                            null === e.memoizedState && (null !== (r = e.alternate) && null !== r.memoizedState ? (r = au, au = 16777216, iu(e, t, n), au = r) : iu(e, t, n))
                    }
                }

                function su(e) {
                    var t = e.alternate;
                    if (null !== t && null !== (e = t.child)) {
                        t.child = null;
                        do {
                            t = e.sibling, e.sibling = null, e = t
                        } while (null !== e)
                    }
                }

                function lu(e) {
                    var t = e.deletions;
                    if (0 !== (16 & e.flags)) {
                        if (null !== t)
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                Dl = r, du(r, e)
                            }
                        su(e)
                    }
                    if (10256 & e.subtreeFlags)
                        for (e = e.child; null !== e;) uu(e), e = e.sibling
                }

                function uu(e) {
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            lu(e), 2048 & e.flags && yl(9, e, e.return);
                            break;
                        case 3:
                        case 12:
                        default:
                            lu(e);
                            break;
                        case 22:
                            var t = e.stateNode;
                            null !== e.memoizedState && 2 & t._visibility && (null === e.return || 13 !== e.return.tag) ? (t._visibility &= -3, cu(e)) : lu(e)
                    }
                }

                function cu(e) {
                    var t = e.deletions;
                    if (0 !== (16 & e.flags)) {
                        if (null !== t)
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                Dl = r, du(r, e)
                            }
                        su(e)
                    }
                    for (e = e.child; null !== e;) {
                        switch ((t = e).tag) {
                            case 0:
                            case 11:
                            case 15:
                                yl(8, t, t.return), cu(t);
                                break;
                            case 22:
                                2 & (n = t.stateNode)._visibility && (n._visibility &= -3, cu(t));
                                break;
                            default:
                                cu(t)
                        }
                        e = e.sibling
                    }
                }

                function du(e, t) {
                    for (; null !== Dl;) {
                        var n = Dl;
                        switch (n.tag) {
                            case 0:
                            case 11:
                            case 15:
                                yl(8, n, t);
                                break;
                            case 23:
                            case 22:
                                if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
                                    var r = n.memoizedState.cachePool.pool;
                                    null != r && r.refCount++
                                }
                                break;
                            case 24:
                                Va(n.memoizedState.cache)
                        }
                        if (null !== (r = n.child)) r.return = n, Dl = r;
                        else e: for (n = e; null !== Dl;) {
                            var a = (r = Dl).sibling,
                                i = r.return;
                            if (Ll(r), r === n) {
                                Dl = null;
                                break e
                            }
                            if (null !== a) {
                                a.return = i, Dl = a;
                                break e
                            }
                            Dl = i
                        }
                    }
                }
                var fu = {
                        getCacheForType: function(e) {
                            var t = Oa(Ia),
                                n = t.data.get(e);
                            return void 0 === n && (n = e(), t.data.set(e, n)), n
                        },
                        cacheSignal: function() {
                            return Oa(Ia).controller.signal
                        }
                    },
                    hu = "function" === typeof WeakMap ? WeakMap : Map,
                    pu = 0,
                    mu = null,
                    gu = null,
                    vu = 0,
                    yu = 0,
                    bu = null,
                    xu = !1,
                    wu = !1,
                    Su = !1,
                    ku = 0,
                    Eu = 0,
                    Tu = 0,
                    Cu = 0,
                    Pu = 0,
                    Nu = 0,
                    Ru = 0,
                    ju = null,
                    Au = null,
                    Fu = !1,
                    Ou = 0,
                    Du = 0,
                    Mu = 1 / 0,
                    Lu = null,
                    _u = null,
                    zu = 0,
                    Iu = null,
                    Bu = null,
                    Vu = 0,
                    Uu = 0,
                    Hu = null,
                    Wu = null,
                    qu = 0,
                    $u = null;

                function Yu() {
                    return 0 !== (2 & pu) && 0 !== vu ? vu & -vu : null !== D.T ? Hc() : ze()
                }

                function Ku() {
                    if (0 === Nu)
                        if (0 === (536870912 & vu) || fa) {
                            var e = Ee;
                            0 === (3932160 & (Ee <<= 1)) && (Ee = 262144), Nu = e
                        } else Nu = 536870912;
                    return null !== (e = Oi.current) && (e.flags |= 32), Nu
                }

                function Xu(e, t, n) {
                    (e !== mu || 2 !== yu && 9 !== yu) && null === e.cancelPendingCommit || (nc(e, 0), Zu(e, vu, Nu, !1)), Fe(e, n), 0 !== (2 & pu) && e === mu || (e === mu && (0 === (2 & pu) && (Cu |= n), 4 === Eu && Zu(e, vu, Nu, !1)), Lc(e))
                }

                function Qu(e, t, n) {
                    if (0 !== (6 & pu)) throw Error(o(327));
                    for (var r = !n && 0 === (127 & t) && 0 === (t & e.expiredLanes) || Ne(e, t), a = r ? function(e, t) {
                            var n = pu;
                            pu |= 2;
                            var r = ic(),
                                a = oc();
                            mu !== e || vu !== t ? (Lu = null, Mu = le() + 500, nc(e, t)) : wu = Ne(e, t);
                            e: for (;;) try {
                                if (0 !== yu && null !== gu) {
                                    t = gu;
                                    var i = bu;
                                    t: switch (yu) {
                                        case 1:
                                            yu = 0, bu = null, hc(e, t, i, 1);
                                            break;
                                        case 2:
                                        case 9:
                                            if (ni(i)) {
                                                yu = 0, bu = null, fc(t);
                                                break
                                            }
                                            t = function() {
                                                2 !== yu && 9 !== yu || mu !== e || (yu = 7), Lc(e)
                                            }, i.then(t, t);
                                            break e;
                                        case 3:
                                            yu = 7;
                                            break e;
                                        case 4:
                                            yu = 5;
                                            break e;
                                        case 7:
                                            ni(i) ? (yu = 0, bu = null, fc(t)) : (yu = 0, bu = null, hc(e, t, i, 7));
                                            break;
                                        case 5:
                                            var s = null;
                                            switch (gu.tag) {
                                                case 26:
                                                    s = gu.memoizedState;
                                                case 5:
                                                case 27:
                                                    var l = gu;
                                                    if (s ? of (s) : l.stateNode.complete) {
                                                        yu = 0, bu = null;
                                                        var u = l.sibling;
                                                        if (null !== u) gu = u;
                                                        else {
                                                            var c = l.return;
                                                            null !== c ? (gu = c, pc(c)) : gu = null
                                                        }
                                                        break t
                                                    }
                                            }
                                            yu = 0, bu = null, hc(e, t, i, 5);
                                            break;
                                        case 6:
                                            yu = 0, bu = null, hc(e, t, i, 6);
                                            break;
                                        case 8:
                                            tc(), Eu = 6;
                                            break e;
                                        default:
                                            throw Error(o(462))
                                    }
                                }
                                cc();
                                break
                            } catch (d) {
                                rc(e, d)
                            }
                            return Ta = Ea = null, D.H = r, D.A = a, pu = n, null !== gu ? 0 : (mu = null, vu = 0, Ar(), Eu)
                        }(e, t) : lc(e, t, !0), i = r;;) {
                        if (0 === a) {
                            wu && !r && Zu(e, t, 0, !1);
                            break
                        }
                        if (n = e.current.alternate, !i || Ju(n)) {
                            if (2 === a) {
                                if (i = t, e.errorRecoveryDisabledLanes & i) var s = 0;
                                else s = 0 !== (s = -536870913 & e.pendingLanes) ? s : 536870912 & s ? 536870912 : 0;
                                if (0 !== s) {
                                    t = s;
                                    e: {
                                        var l = e;a = ju;
                                        var u = l.current.memoizedState.isDehydrated;
                                        if (u && (nc(l, s).flags |= 256), 2 !== (s = lc(l, s, !1))) {
                                            if (Su && !u) {
                                                l.errorRecoveryDisabledLanes |= i, Cu |= i, a = 4;
                                                break e
                                            }
                                            i = Au, Au = a, null !== i && (null === Au ? Au = i : Au.push.apply(Au, i))
                                        }
                                        a = s
                                    }
                                    if (i = !1, 2 !== a) continue
                                }
                            }
                            if (1 === a) {
                                nc(e, 0), Zu(e, t, 0, !0);
                                break
                            }
                            e: {
                                switch (r = e, i = a) {
                                    case 0:
                                    case 1:
                                        throw Error(o(345));
                                    case 4:
                                        if ((4194048 & t) !== t) break;
                                    case 6:
                                        Zu(r, t, Nu, !xu);
                                        break e;
                                    case 2:
                                        Au = null;
                                        break;
                                    case 3:
                                    case 5:
                                        break;
                                    default:
                                        throw Error(o(329))
                                }
                                if ((62914560 & t) === t && 10 < (a = Ou + 300 - le())) {
                                    if (Zu(r, t, Nu, !xu), 0 !== Pe(r, 0, !0)) break e;
                                    Vu = t, r.timeoutHandle = Sd(Gu.bind(null, r, n, Au, Lu, Fu, t, Nu, Cu, Ru, xu, i, "Throttled", -0, 0), a)
                                } else Gu(r, n, Au, Lu, Fu, t, Nu, Cu, Ru, xu, i, null, -0, 0)
                            }
                            break
                        }
                        a = lc(e, t, !1), i = !1
                    }
                    Lc(e)
                }

                function Gu(e, t, n, r, a, i, o, s, l, u, c, d, f, h) {
                    if (e.timeoutHandle = -1, 8192 & (d = t.subtreeFlags) || 16785408 === (16785408 & d)) {
                        ou(t, i, d = {
                            stylesheets: null,
                            count: 0,
                            imgCount: 0,
                            imgBytes: 0,
                            suspenseyImages: [],
                            waitingForImages: !0,
                            waitingForViewTransition: !1,
                            unsuspend: Ft
                        });
                        var p = (62914560 & i) === i ? Ou - le() : (4194048 & i) === i ? Du - le() : 0;
                        if (null !== (p = function(e, t) {
                                return e.stylesheets && 0 === e.count && cf(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
                                    var r = setTimeout(function() {
                                        if (e.stylesheets && cf(e, e.stylesheets), e.unsuspend) {
                                            var t = e.unsuspend;
                                            e.unsuspend = null, t()
                                        }
                                    }, 6e4 + t);
                                    0 < e.imgBytes && 0 === sf && (sf = 62500 * function() {
                                        if ("function" === typeof performance.getEntriesByType) {
                                            for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
                                                var a = n[r],
                                                    i = a.transferSize,
                                                    o = a.initiatorType,
                                                    s = a.duration;
                                                if (i && s && pd(o)) {
                                                    for (o = 0, s = a.responseEnd, r += 1; r < n.length; r++) {
                                                        var l = n[r],
                                                            u = l.startTime;
                                                        if (u > s) break;
                                                        var c = l.transferSize,
                                                            d = l.initiatorType;
                                                        c && pd(d) && (o += c * ((l = l.responseEnd) < s ? 1 : (s - u) / (l - u)))
                                                    }
                                                    if (--r, t += 8 * (i + o) / (a.duration / 1e3), 10 < ++e) break
                                                }
                                            }
                                            if (0 < e) return t / e / 1e6
                                        }
                                        return navigator.connection && "number" === typeof(e = navigator.connection.downlink) ? e : 5
                                    }());
                                    var a = setTimeout(function() {
                                        if (e.waitingForImages = !1, 0 === e.count && (e.stylesheets && cf(e, e.stylesheets), e.unsuspend)) {
                                            var t = e.unsuspend;
                                            e.unsuspend = null, t()
                                        }
                                    }, (e.imgBytes > sf ? 50 : 800) + t);
                                    return e.unsuspend = n,
                                        function() {
                                            e.unsuspend = null, clearTimeout(r), clearTimeout(a)
                                        }
                                } : null
                            }(d, p))) return Vu = i, e.cancelPendingCommit = p(gc.bind(null, e, t, i, n, r, a, o, s, l, c, d, null, f, h)), void Zu(e, i, o, !u)
                    }
                    gc(e, t, i, n, r, a, o, s, l)
                }

                function Ju(e) {
                    for (var t = e;;) {
                        var n = t.tag;
                        if ((0 === n || 11 === n || 15 === n) && 16384 & t.flags && (null !== (n = t.updateQueue) && null !== (n = n.stores)))
                            for (var r = 0; r < n.length; r++) {
                                var a = n[r],
                                    i = a.getSnapshot;
                                a = a.value;
                                try {
                                    if (!Zn(i(), a)) return !1
                                } catch (o) {
                                    return !1
                                }
                            }
                        if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                        else {
                            if (t === e) break;
                            for (; null === t.sibling;) {
                                if (null === t.return || t.return === e) return !0;
                                t = t.return
                            }
                            t.sibling.return = t.return, t = t.sibling
                        }
                    }
                    return !0
                }

                function Zu(e, t, n, r) {
                    t &= ~Pu, t &= ~Cu, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
                    for (var a = t; 0 < a;) {
                        var i = 31 - xe(a),
                            o = 1 << i;
                        r[i] = -1, a &= ~o
                    }
                    0 !== n && Oe(e, n, t)
                }

                function ec() {
                    return 0 !== (6 & pu) || (_c(0, !1), !1)
                }

                function tc() {
                    if (null !== gu) {
                        if (0 === yu) var e = gu.return;
                        else Ta = Ea = null, so(e = gu), li = null, ui = 0, e = gu;
                        for (; null !== e;) gl(e.alternate, e), e = e.return;
                        gu = null
                    }
                }

                function nc(e, t) {
                    var n = e.timeoutHandle; - 1 !== n && (e.timeoutHandle = -1, kd(n)), null !== (n = e.cancelPendingCommit) && (e.cancelPendingCommit = null, n()), Vu = 0, tc(), mu = e, gu = n = Vr(e.current, null), vu = t, yu = 0, bu = null, xu = !1, wu = Ne(e, t), Su = !1, Ru = Nu = Pu = Cu = Tu = Eu = 0, Au = ju = null, Fu = !1, 0 !== (8 & t) && (t |= 32 & t);
                    var r = e.entangledLanes;
                    if (0 !== r)
                        for (e = e.entanglements, r &= t; 0 < r;) {
                            var a = 31 - xe(r),
                                i = 1 << a;
                            t |= e[a], r &= ~i
                        }
                    return ku = t, Ar(), n
                }

                function rc(e, t) {
                    Hi = null, D.H = gs, t === Ja || t === ei ? (t = oi(), yu = 3) : t === Za ? (t = oi(), yu = 4) : yu = t === Os ? 8 : null !== t && "object" === typeof t && "function" === typeof t.then ? 6 : 1, bu = t, null === gu && (Eu = 1, Ns(e, Xr(t, e.current)))
                }

                function ac() {
                    var e = Oi.current;
                    return null === e || ((4194048 & vu) === vu ? null === Di : ((62914560 & vu) === vu || 0 !== (536870912 & vu)) && e === Di)
                }

                function ic() {
                    var e = D.H;
                    return D.H = gs, null === e ? gs : e
                }

                function oc() {
                    var e = D.A;
                    return D.A = fu, e
                }

                function sc() {
                    Eu = 4, xu || (4194048 & vu) !== vu && null !== Oi.current || (wu = !0), 0 === (134217727 & Tu) && 0 === (134217727 & Cu) || null === mu || Zu(mu, vu, Nu, !1)
                }

                function lc(e, t, n) {
                    var r = pu;
                    pu |= 2;
                    var a = ic(),
                        i = oc();
                    mu === e && vu === t || (Lu = null, nc(e, t)), t = !1;
                    var o = Eu;
                    e: for (;;) try {
                        if (0 !== yu && null !== gu) {
                            var s = gu,
                                l = bu;
                            switch (yu) {
                                case 8:
                                    tc(), o = 6;
                                    break e;
                                case 3:
                                case 2:
                                case 9:
                                case 6:
                                    null === Oi.current && (t = !0);
                                    var u = yu;
                                    if (yu = 0, bu = null, hc(e, s, l, u), n && wu) {
                                        o = 0;
                                        break e
                                    }
                                    break;
                                default:
                                    u = yu, yu = 0, bu = null, hc(e, s, l, u)
                            }
                        }
                        uc(), o = Eu;
                        break
                    } catch (c) {
                        rc(e, c)
                    }
                    return t && e.shellSuspendCounter++, Ta = Ea = null, pu = r, D.H = a, D.A = i, null === gu && (mu = null, vu = 0, Ar()), o
                }

                function uc() {
                    for (; null !== gu;) dc(gu)
                }

                function cc() {
                    for (; null !== gu && !oe();) dc(gu)
                }

                function dc(e) {
                    var t = sl(e.alternate, e, ku);
                    e.memoizedProps = e.pendingProps, null === t ? pc(e) : gu = t
                }

                function fc(e) {
                    var t = e,
                        n = t.alternate;
                    switch (t.tag) {
                        case 15:
                        case 0:
                            t = $s(n, t, t.pendingProps, t.type, void 0, vu);
                            break;
                        case 11:
                            t = $s(n, t, t.pendingProps, t.type.render, t.ref, vu);
                            break;
                        case 5:
                            so(t);
                        default:
                            gl(n, t), t = sl(n, t = gu = Ur(t, ku), ku)
                    }
                    e.memoizedProps = e.pendingProps, null === t ? pc(e) : gu = t
                }

                function hc(e, t, n, r) {
                    Ta = Ea = null, so(t), li = null, ui = 0;
                    var a = t.return;
                    try {
                        if (function(e, t, n, r, a) {
                                if (n.flags |= 32768, null !== r && "object" === typeof r && "function" === typeof r.then) {
                                    if (null !== (t = n.alternate) && ja(t, n, a, !0), null !== (n = Oi.current)) {
                                        switch (n.tag) {
                                            case 31:
                                            case 13:
                                                return null === Di ? sc() : null === n.alternate && 0 === Eu && (Eu = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === ti ? n.flags |= 16384 : (null === (t = n.updateQueue) ? n.updateQueue = new Set([r]) : t.add(r), Tc(e, r, a)), !1;
                                            case 22:
                                                return n.flags |= 65536, r === ti ? n.flags |= 16384 : (null === (t = n.updateQueue) ? (t = {
                                                    transitions: null,
                                                    markerInstances: null,
                                                    retryQueue: new Set([r])
                                                }, n.updateQueue = t) : null === (n = t.retryQueue) ? t.retryQueue = new Set([r]) : n.add(r), Tc(e, r, a)), !1
                                        }
                                        throw Error(o(435, n.tag))
                                    }
                                    return Tc(e, r, a), sc(), !1
                                }
                                if (fa) return null !== (t = Oi.current) ? (0 === (65536 & t.flags) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== ma && Sa(Xr(e = Error(o(422), {
                                    cause: r
                                }), n))) : (r !== ma && Sa(Xr(t = Error(o(423), {
                                    cause: r
                                }), n)), (e = e.current.alternate).flags |= 65536, a &= -a, e.lanes |= a, r = Xr(r, n), Si(e, a = js(e.stateNode, r, a)), 4 !== Eu && (Eu = 2)), !1;
                                var i = Error(o(520), {
                                    cause: r
                                });
                                if (i = Xr(i, n), null === ju ? ju = [i] : ju.push(i), 4 !== Eu && (Eu = 2), null === t) return !0;
                                r = Xr(r, n), n = t;
                                do {
                                    switch (n.tag) {
                                        case 3:
                                            return n.flags |= 65536, e = a & -a, n.lanes |= e, Si(n, e = js(n.stateNode, r, e)), !1;
                                        case 1:
                                            if (t = n.type, i = n.stateNode, 0 === (128 & n.flags) && ("function" === typeof t.getDerivedStateFromError || null !== i && "function" === typeof i.componentDidCatch && (null === _u || !_u.has(i)))) return n.flags |= 65536, a &= -a, n.lanes |= a, Fs(a = As(a), e, n, r), Si(n, a), !1
                                    }
                                    n = n.return
                                } while (null !== n);
                                return !1
                            }(e, a, t, n, vu)) return Eu = 1, Ns(e, Xr(n, e.current)), void(gu = null)
                    } catch (i) {
                        if (null !== a) throw gu = a, i;
                        return Eu = 1, Ns(e, Xr(n, e.current)), void(gu = null)
                    }
                    32768 & t.flags ? (fa || 1 === r ? e = !0 : wu || 0 !== (536870912 & vu) ? e = !1 : (xu = e = !0, (2 === r || 9 === r || 3 === r || 6 === r) && (null !== (r = Oi.current) && 13 === r.tag && (r.flags |= 16384))), mc(t, e)) : pc(t)
                }

                function pc(e) {
                    var t = e;
                    do {
                        if (0 !== (32768 & t.flags)) return void mc(t, xu);
                        e = t.return;
                        var n = pl(t.alternate, t, ku);
                        if (null !== n) return void(gu = n);
                        if (null !== (t = t.sibling)) return void(gu = t);
                        gu = t = e
                    } while (null !== t);
                    0 === Eu && (Eu = 5)
                }

                function mc(e, t) {
                    do {
                        var n = ml(e.alternate, e);
                        if (null !== n) return n.flags &= 32767, void(gu = n);
                        if (null !== (n = e.return) && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && null !== (e = e.sibling)) return void(gu = e);
                        gu = e = n
                    } while (null !== e);
                    Eu = 6, gu = null
                }

                function gc(e, t, n, r, a, i, s, l, u) {
                    e.cancelPendingCommit = null;
                    do {
                        wc()
                    } while (0 !== zu);
                    if (0 !== (6 & pu)) throw Error(o(327));
                    if (null !== t) {
                        if (t === e.current) throw Error(o(177));
                        if (i = t.lanes | t.childLanes, function(e, t, n, r, a, i) {
                                var o = e.pendingLanes;
                                e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
                                var s = e.entanglements,
                                    l = e.expirationTimes,
                                    u = e.hiddenUpdates;
                                for (n = o & ~n; 0 < n;) {
                                    var c = 31 - xe(n),
                                        d = 1 << c;
                                    s[c] = 0, l[c] = -1;
                                    var f = u[c];
                                    if (null !== f)
                                        for (u[c] = null, c = 0; c < f.length; c++) {
                                            var h = f[c];
                                            null !== h && (h.lane &= -536870913)
                                        }
                                    n &= ~d
                                }
                                0 !== r && Oe(e, r, 0), 0 !== i && 0 === a && 0 !== e.tag && (e.suspendedLanes |= i & ~(o & ~t))
                            }(e, n, i |= jr, s, l, u), e === mu && (gu = mu = null, vu = 0), Bu = t, Iu = e, Vu = n, Uu = i, Hu = a, Wu = r, 0 !== (10256 & t.subtreeFlags) || 0 !== (10256 & t.flags) ? (e.callbackNode = null, e.callbackPriority = 0, ae(fe, function() {
                                return Sc(), null
                            })) : (e.callbackNode = null, e.callbackPriority = 0), r = 0 !== (13878 & t.flags), 0 !== (13878 & t.subtreeFlags) || r) {
                            r = D.T, D.T = null, a = M.p, M.p = 2, s = pu, pu |= 4;
                            try {
                                ! function(e, t) {
                                    if (e = e.containerInfo, md = wf, ir(e = ar(e))) {
                                        if ("selectionStart" in e) var n = {
                                            start: e.selectionStart,
                                            end: e.selectionEnd
                                        };
                                        else e: {
                                            var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                            if (r && 0 !== r.rangeCount) {
                                                n = r.anchorNode;
                                                var a = r.anchorOffset,
                                                    i = r.focusNode;
                                                r = r.focusOffset;
                                                try {
                                                    n.nodeType, i.nodeType
                                                } catch (g) {
                                                    n = null;
                                                    break e
                                                }
                                                var s = 0,
                                                    l = -1,
                                                    u = -1,
                                                    c = 0,
                                                    d = 0,
                                                    f = e,
                                                    h = null;
                                                t: for (;;) {
                                                    for (var p; f !== n || 0 !== a && 3 !== f.nodeType || (l = s + a), f !== i || 0 !== r && 3 !== f.nodeType || (u = s + r), 3 === f.nodeType && (s += f.nodeValue.length), null !== (p = f.firstChild);) h = f, f = p;
                                                    for (;;) {
                                                        if (f === e) break t;
                                                        if (h === n && ++c === a && (l = s), h === i && ++d === r && (u = s), null !== (p = f.nextSibling)) break;
                                                        h = (f = h).parentNode
                                                    }
                                                    f = p
                                                }
                                                n = -1 === l || -1 === u ? null : {
                                                    start: l,
                                                    end: u
                                                }
                                            } else n = null
                                        }
                                        n = n || {
                                            start: 0,
                                            end: 0
                                        }
                                    } else n = null;
                                    for (gd = {
                                            focusedElem: e,
                                            selectionRange: n
                                        }, wf = !1, Dl = t; null !== Dl;)
                                        if (e = (t = Dl).child, 0 !== (1028 & t.subtreeFlags) && null !== e) e.return = t, Dl = e;
                                        else
                                            for (; null !== Dl;) {
                                                switch (i = (t = Dl).alternate, e = t.flags, t.tag) {
                                                    case 0:
                                                        if (0 !== (4 & e) && null !== (e = null !== (e = t.updateQueue) ? e.events : null))
                                                            for (n = 0; n < e.length; n++)(a = e[n]).ref.impl = a.nextImpl;
                                                        break;
                                                    case 11:
                                                    case 15:
                                                    case 5:
                                                    case 26:
                                                    case 27:
                                                    case 6:
                                                    case 4:
                                                    case 17:
                                                        break;
                                                    case 1:
                                                        if (0 !== (1024 & e) && null !== i) {
                                                            e = void 0, n = t, a = i.memoizedProps, i = i.memoizedState, r = n.stateNode;
                                                            try {
                                                                var m = Es(n.type, a);
                                                                e = r.getSnapshotBeforeUpdate(m, i), r.__reactInternalSnapshotBeforeUpdate = e
                                                            } catch (v) {
                                                                Ec(n, n.return, v)
                                                            }
                                                        }
                                                        break;
                                                    case 3:
                                                        if (0 !== (1024 & e))
                                                            if (9 === (n = (e = t.stateNode.containerInfo).nodeType)) jd(e);
                                                            else if (1 === n) switch (e.nodeName) {
                                                            case "HEAD":
                                                            case "HTML":
                                                            case "BODY":
                                                                jd(e);
                                                                break;
                                                            default:
                                                                e.textContent = ""
                                                        }
                                                        break;
                                                    default:
                                                        if (0 !== (1024 & e)) throw Error(o(163))
                                                }
                                                if (null !== (e = t.sibling)) {
                                                    e.return = t.return, Dl = e;
                                                    break
                                                }
                                                Dl = t.return
                                            }
                                }(e, t)
                            } finally {
                                pu = s, M.p = a, D.T = r
                            }
                        }
                        zu = 1, vc(), yc(), bc()
                    }
                }

                function vc() {
                    if (1 === zu) {
                        zu = 0;
                        var e = Iu,
                            t = Bu,
                            n = 0 !== (13878 & t.flags);
                        if (0 !== (13878 & t.subtreeFlags) || n) {
                            n = D.T, D.T = null;
                            var r = M.p;
                            M.p = 2;
                            var a = pu;
                            pu |= 4;
                            try {
                                $l(t, e);
                                var i = gd,
                                    o = ar(e.containerInfo),
                                    s = i.focusedElem,
                                    l = i.selectionRange;
                                if (o !== s && s && s.ownerDocument && rr(s.ownerDocument.documentElement, s)) {
                                    if (null !== l && ir(s)) {
                                        var u = l.start,
                                            c = l.end;
                                        if (void 0 === c && (c = u), "selectionStart" in s) s.selectionStart = u, s.selectionEnd = Math.min(c, s.value.length);
                                        else {
                                            var d = s.ownerDocument || document,
                                                f = d && d.defaultView || window;
                                            if (f.getSelection) {
                                                var h = f.getSelection(),
                                                    p = s.textContent.length,
                                                    m = Math.min(l.start, p),
                                                    g = void 0 === l.end ? m : Math.min(l.end, p);
                                                !h.extend && m > g && (o = g, g = m, m = o);
                                                var v = nr(s, m),
                                                    y = nr(s, g);
                                                if (v && y && (1 !== h.rangeCount || h.anchorNode !== v.node || h.anchorOffset !== v.offset || h.focusNode !== y.node || h.focusOffset !== y.offset)) {
                                                    var b = d.createRange();
                                                    b.setStart(v.node, v.offset), h.removeAllRanges(), m > g ? (h.addRange(b), h.extend(y.node, y.offset)) : (b.setEnd(y.node, y.offset), h.addRange(b))
                                                }
                                            }
                                        }
                                    }
                                    for (d = [], h = s; h = h.parentNode;) 1 === h.nodeType && d.push({
                                        element: h,
                                        left: h.scrollLeft,
                                        top: h.scrollTop
                                    });
                                    for ("function" === typeof s.focus && s.focus(), s = 0; s < d.length; s++) {
                                        var x = d[s];
                                        x.element.scrollLeft = x.left, x.element.scrollTop = x.top
                                    }
                                }
                                wf = !!md, gd = md = null
                            } finally {
                                pu = a, M.p = r, D.T = n
                            }
                        }
                        e.current = t, zu = 2
                    }
                }

                function yc() {
                    if (2 === zu) {
                        zu = 0;
                        var e = Iu,
                            t = Bu,
                            n = 0 !== (8772 & t.flags);
                        if (0 !== (8772 & t.subtreeFlags) || n) {
                            n = D.T, D.T = null;
                            var r = M.p;
                            M.p = 2;
                            var a = pu;
                            pu |= 4;
                            try {
                                Ml(e, t.alternate, t)
                            } finally {
                                pu = a, M.p = r, D.T = n
                            }
                        }
                        zu = 3
                    }
                }

                function bc() {
                    if (4 === zu || 3 === zu) {
                        zu = 0, se();
                        var e = Iu,
                            t = Bu,
                            n = Vu,
                            r = Wu;
                        0 !== (10256 & t.subtreeFlags) || 0 !== (10256 & t.flags) ? zu = 5 : (zu = 0, Bu = Iu = null, xc(e, e.pendingLanes));
                        var a = e.pendingLanes;
                        if (0 === a && (_u = null), _e(n), t = t.stateNode, ye && "function" === typeof ye.onCommitFiberRoot) try {
                            ye.onCommitFiberRoot(ve, t, void 0, 128 === (128 & t.current.flags))
                        } catch (l) {}
                        if (null !== r) {
                            t = D.T, a = M.p, M.p = 2, D.T = null;
                            try {
                                for (var i = e.onRecoverableError, o = 0; o < r.length; o++) {
                                    var s = r[o];
                                    i(s.value, {
                                        componentStack: s.stack
                                    })
                                }
                            } finally {
                                D.T = t, M.p = a
                            }
                        }
                        0 !== (3 & Vu) && wc(), Lc(e), a = e.pendingLanes, 0 !== (261930 & n) && 0 !== (42 & a) ? e === $u ? qu++ : (qu = 0, $u = e) : qu = 0, _c(0, !1)
                    }
                }

                function xc(e, t) {
                    0 === (e.pooledCacheLanes &= t) && (null != (t = e.pooledCache) && (e.pooledCache = null, Va(t)))
                }

                function wc() {
                    return vc(), yc(), bc(), Sc()
                }

                function Sc() {
                    if (5 !== zu) return !1;
                    var e = Iu,
                        t = Uu;
                    Uu = 0;
                    var n = _e(Vu),
                        r = D.T,
                        a = M.p;
                    try {
                        M.p = 32 > n ? 32 : n, D.T = null, n = Hu, Hu = null;
                        var i = Iu,
                            s = Vu;
                        if (zu = 0, Bu = Iu = null, Vu = 0, 0 !== (6 & pu)) throw Error(o(331));
                        var l = pu;
                        if (pu |= 4, uu(i.current), tu(i, i.current, s, n), pu = l, _c(0, !1), ye && "function" === typeof ye.onPostCommitFiberRoot) try {
                            ye.onPostCommitFiberRoot(ve, i)
                        } catch (u) {}
                        return !0
                    } finally {
                        M.p = a, D.T = r, xc(e, t)
                    }
                }

                function kc(e, t, n) {
                    t = Xr(n, t), null !== (e = xi(e, t = js(e.stateNode, t, 2), 2)) && (Fe(e, 2), Lc(e))
                }

                function Ec(e, t, n) {
                    if (3 === e.tag) kc(e, e, n);
                    else
                        for (; null !== t;) {
                            if (3 === t.tag) {
                                kc(t, e, n);
                                break
                            }
                            if (1 === t.tag) {
                                var r = t.stateNode;
                                if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === _u || !_u.has(r))) {
                                    e = Xr(n, e), null !== (r = xi(t, n = As(2), 2)) && (Fs(n, r, t, e), Fe(r, 2), Lc(r));
                                    break
                                }
                            }
                            t = t.return
                        }
                }

                function Tc(e, t, n) {
                    var r = e.pingCache;
                    if (null === r) {
                        r = e.pingCache = new hu;
                        var a = new Set;
                        r.set(t, a)
                    } else void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a));
                    a.has(n) || (Su = !0, a.add(n), e = Cc.bind(null, e, t, n), t.then(e, e))
                }

                function Cc(e, t, n) {
                    var r = e.pingCache;
                    null !== r && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, mu === e && (vu & n) === n && (4 === Eu || 3 === Eu && (62914560 & vu) === vu && 300 > le() - Ou ? 0 === (2 & pu) && nc(e, 0) : Pu |= n, Ru === vu && (Ru = 0)), Lc(e)
                }

                function Pc(e, t) {
                    0 === t && (t = je()), null !== (e = Dr(e, t)) && (Fe(e, t), Lc(e))
                }

                function Nc(e) {
                    var t = e.memoizedState,
                        n = 0;
                    null !== t && (n = t.retryLane), Pc(e, n)
                }

                function Rc(e, t) {
                    var n = 0;
                    switch (e.tag) {
                        case 31:
                        case 13:
                            var r = e.stateNode,
                                a = e.memoizedState;
                            null !== a && (n = a.retryLane);
                            break;
                        case 19:
                            r = e.stateNode;
                            break;
                        case 22:
                            r = e.stateNode._retryCache;
                            break;
                        default:
                            throw Error(o(314))
                    }
                    null !== r && r.delete(t), Pc(e, n)
                }
                var jc = null,
                    Ac = null,
                    Fc = !1,
                    Oc = !1,
                    Dc = !1,
                    Mc = 0;

                function Lc(e) {
                    e !== Ac && null === e.next && (null === Ac ? jc = Ac = e : Ac = Ac.next = e), Oc = !0, Fc || (Fc = !0, Td(function() {
                        0 !== (6 & pu) ? ae(ce, zc) : Ic()
                    }))
                }

                function _c(e, t) {
                    if (!Dc && Oc) {
                        Dc = !0;
                        do {
                            for (var n = !1, r = jc; null !== r;) {
                                if (!t)
                                    if (0 !== e) {
                                        var a = r.pendingLanes;
                                        if (0 === a) var i = 0;
                                        else {
                                            var o = r.suspendedLanes,
                                                s = r.pingedLanes;
                                            i = (1 << 31 - xe(42 | e) + 1) - 1, i = 201326741 & (i &= a & ~(o & ~s)) ? 201326741 & i | 1 : i ? 2 | i : 0
                                        }
                                        0 !== i && (n = !0, Uc(r, i))
                                    } else i = vu, 0 === (3 & (i = Pe(r, r === mu ? i : 0, null !== r.cancelPendingCommit || -1 !== r.timeoutHandle))) || Ne(r, i) || (n = !0, Uc(r, i));
                                r = r.next
                            }
                        } while (n);
                        Dc = !1
                    }
                }

                function zc() {
                    Ic()
                }

                function Ic() {
                    Oc = Fc = !1;
                    var e = 0;
                    0 !== Mc && function() {
                        var e = window.event;
                        if (e && "popstate" === e.type) return e !== wd && (wd = e, !0);
                        return wd = null, !1
                    }() && (e = Mc);
                    for (var t = le(), n = null, r = jc; null !== r;) {
                        var a = r.next,
                            i = Bc(r, t);
                        0 === i ? (r.next = null, null === n ? jc = a : n.next = a, null === a && (Ac = n)) : (n = r, (0 !== e || 0 !== (3 & i)) && (Oc = !0)), r = a
                    }
                    0 !== zu && 5 !== zu || _c(e, !1), 0 !== Mc && (Mc = 0)
                }

                function Bc(e, t) {
                    for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = -62914561 & e.pendingLanes; 0 < i;) {
                        var o = 31 - xe(i),
                            s = 1 << o,
                            l = a[o]; - 1 === l ? 0 !== (s & n) && 0 === (s & r) || (a[o] = Re(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s
                    }
                    if (n = vu, n = Pe(e, e === (t = mu) ? n : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle), r = e.callbackNode, 0 === n || e === t && (2 === yu || 9 === yu) || null !== e.cancelPendingCommit) return null !== r && null !== r && ie(r), e.callbackNode = null, e.callbackPriority = 0;
                    if (0 === (3 & n) || Ne(e, n)) {
                        if ((t = n & -n) === e.callbackPriority) return t;
                        switch (null !== r && ie(r), _e(n)) {
                            case 2:
                            case 8:
                                n = de;
                                break;
                            case 32:
                            default:
                                n = fe;
                                break;
                            case 268435456:
                                n = pe
                        }
                        return r = Vc.bind(null, e), n = ae(n, r), e.callbackPriority = t, e.callbackNode = n, t
                    }
                    return null !== r && null !== r && ie(r), e.callbackPriority = 2, e.callbackNode = null, 2
                }

                function Vc(e, t) {
                    if (0 !== zu && 5 !== zu) return e.callbackNode = null, e.callbackPriority = 0, null;
                    var n = e.callbackNode;
                    if (wc() && e.callbackNode !== n) return null;
                    var r = vu;
                    return 0 === (r = Pe(e, e === mu ? r : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle)) ? null : (Qu(e, r, t), Bc(e, le()), null != e.callbackNode && e.callbackNode === n ? Vc.bind(null, e) : null)
                }

                function Uc(e, t) {
                    if (wc()) return null;
                    Qu(e, t, !0)
                }

                function Hc() {
                    if (0 === Mc) {
                        var e = Wa;
                        0 === e && (e = ke, 0 === (261888 & (ke <<= 1)) && (ke = 256)), Mc = e
                    }
                    return Mc
                }

                function Wc(e) {
                    return null == e || "symbol" === typeof e || "boolean" === typeof e ? null : "function" === typeof e ? e : At("" + e)
                }

                function qc(e, t) {
                    var n = t.ownerDocument.createElement("input");
                    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e
                }
                for (var $c = 0; $c < Tr.length; $c++) {
                    var Yc = Tr[$c];
                    Cr(Yc.toLowerCase(), "on" + (Yc[0].toUpperCase() + Yc.slice(1)))
                }
                Cr(vr, "onAnimationEnd"), Cr(yr, "onAnimationIteration"), Cr(br, "onAnimationStart"), Cr("dblclick", "onDoubleClick"), Cr("focusin", "onFocus"), Cr("focusout", "onBlur"), Cr(xr, "onTransitionRun"), Cr(wr, "onTransitionStart"), Cr(Sr, "onTransitionCancel"), Cr(kr, "onTransitionEnd"), at("onMouseEnter", ["mouseout", "mouseover"]), at("onMouseLeave", ["mouseout", "mouseover"]), at("onPointerEnter", ["pointerout", "pointerover"]), at("onPointerLeave", ["pointerout", "pointerover"]), rt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), rt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), rt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), rt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), rt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), rt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var Kc = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    Xc = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Kc));

                function Qc(e, t) {
                    t = 0 !== (4 & t);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            a = r.event;
                        r = r.listeners;
                        e: {
                            var i = void 0;
                            if (t)
                                for (var o = r.length - 1; 0 <= o; o--) {
                                    var s = r[o],
                                        l = s.instance,
                                        u = s.currentTarget;
                                    if (s = s.listener, l !== i && a.isPropagationStopped()) break e;
                                    i = s, a.currentTarget = u;
                                    try {
                                        i(a)
                                    } catch (c) {
                                        Pr(c)
                                    }
                                    a.currentTarget = null, i = l
                                } else
                                    for (o = 0; o < r.length; o++) {
                                        if (l = (s = r[o]).instance, u = s.currentTarget, s = s.listener, l !== i && a.isPropagationStopped()) break e;
                                        i = s, a.currentTarget = u;
                                        try {
                                            i(a)
                                        } catch (c) {
                                            Pr(c)
                                        }
                                        a.currentTarget = null, i = l
                                    }
                        }
                    }
                }

                function Gc(e, t) {
                    var n = t[We];
                    void 0 === n && (n = t[We] = new Set);
                    var r = e + "__bubble";
                    n.has(r) || (td(t, e, 2, !1), n.add(r))
                }

                function Jc(e, t, n) {
                    var r = 0;
                    t && (r |= 4), td(n, e, r, t)
                }
                var Zc = "_reactListening" + Math.random().toString(36).slice(2);

                function ed(e) {
                    if (!e[Zc]) {
                        e[Zc] = !0, tt.forEach(function(t) {
                            "selectionchange" !== t && (Xc.has(t) || Jc(t, !1, e), Jc(t, !0, e))
                        });
                        var t = 9 === e.nodeType ? e : e.ownerDocument;
                        null === t || t[Zc] || (t[Zc] = !0, Jc("selectionchange", !1, t))
                    }
                }

                function td(e, t, n, r) {
                    switch (Nf(t)) {
                        case 2:
                            var a = Sf;
                            break;
                        case 8:
                            a = kf;
                            break;
                        default:
                            a = Ef
                    }
                    n = a.bind(null, t, n, e), a = void 0, !Ht || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, {
                        capture: !0,
                        passive: a
                    }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
                        passive: a
                    }) : e.addEventListener(t, n, !1)
                }

                function nd(e, t, n, r, a) {
                    var i = r;
                    if (0 === (1 & t) && 0 === (2 & t) && null !== r) e: for (;;) {
                        if (null === r) return;
                        var o = r.tag;
                        if (3 === o || 4 === o) {
                            var s = r.stateNode.containerInfo;
                            if (s === a) break;
                            if (4 === o)
                                for (o = r.return; null !== o;) {
                                    var u = o.tag;
                                    if ((3 === u || 4 === u) && o.stateNode.containerInfo === a) return;
                                    o = o.return
                                }
                            for (; null !== s;) {
                                if (null === (o = Qe(s))) return;
                                if (5 === (u = o.tag) || 6 === u || 26 === u || 27 === u) {
                                    r = i = o;
                                    continue e
                                }
                                s = s.parentNode
                            }
                        }
                        r = r.return
                    }
                    Bt(function() {
                        var r = i,
                            a = Dt(n),
                            o = [];
                        e: {
                            var s = Er.get(e);
                            if (void 0 !== s) {
                                var u = rn,
                                    c = e;
                                switch (e) {
                                    case "keypress":
                                        if (0 === Xt(n)) break e;
                                    case "keydown":
                                    case "keyup":
                                        u = bn;
                                        break;
                                    case "focusin":
                                        c = "focus", u = cn;
                                        break;
                                    case "focusout":
                                        c = "blur", u = cn;
                                        break;
                                    case "beforeblur":
                                    case "afterblur":
                                        u = cn;
                                        break;
                                    case "click":
                                        if (2 === n.button) break e;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        u = ln;
                                        break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        u = un;
                                        break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        u = wn;
                                        break;
                                    case vr:
                                    case yr:
                                    case br:
                                        u = dn;
                                        break;
                                    case kr:
                                        u = Sn;
                                        break;
                                    case "scroll":
                                    case "scrollend":
                                        u = on;
                                        break;
                                    case "wheel":
                                        u = kn;
                                        break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        u = fn;
                                        break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        u = xn;
                                        break;
                                    case "toggle":
                                    case "beforetoggle":
                                        u = En
                                }
                                var d = 0 !== (4 & t),
                                    f = !d && ("scroll" === e || "scrollend" === e),
                                    h = d ? null !== s ? s + "Capture" : null : s;
                                d = [];
                                for (var p, m = r; null !== m;) {
                                    var g = m;
                                    if (p = g.stateNode, 5 !== (g = g.tag) && 26 !== g && 27 !== g || null === p || null === h || null != (g = Vt(m, h)) && d.push(rd(m, g, p)), f) break;
                                    m = m.return
                                }
                                0 < d.length && (s = new u(s, c, null, n, a), o.push({
                                    event: s,
                                    listeners: d
                                }))
                            }
                        }
                        if (0 === (7 & t)) {
                            if (u = "mouseout" === e || "pointerout" === e, (!(s = "mouseover" === e || "pointerover" === e) || n === Ot || !(c = n.relatedTarget || n.fromElement) || !Qe(c) && !c[He]) && (u || s) && (s = a.window === a ? a : (s = a.ownerDocument) ? s.defaultView || s.parentWindow : window, u ? (u = r, null !== (c = (c = n.relatedTarget || n.toElement) ? Qe(c) : null) && (f = l(c), d = c.tag, c !== f || 5 !== d && 27 !== d && 6 !== d) && (c = null)) : (u = null, c = r), u !== c)) {
                                if (d = ln, g = "onMouseLeave", h = "onMouseEnter", m = "mouse", "pointerout" !== e && "pointerover" !== e || (d = xn, g = "onPointerLeave", h = "onPointerEnter", m = "pointer"), f = null == u ? s : Je(u), p = null == c ? s : Je(c), (s = new d(g, m + "leave", u, n, a)).target = f, s.relatedTarget = p, g = null, Qe(a) === r && ((d = new d(h, m + "enter", c, n, a)).target = p, d.relatedTarget = f, g = d), f = g, u && c) e: {
                                    for (d = id, m = c, p = 0, g = h = u; g; g = d(g)) p++;g = 0;
                                    for (var v = m; v; v = d(v)) g++;
                                    for (; 0 < p - g;) h = d(h),
                                    p--;
                                    for (; 0 < g - p;) m = d(m),
                                    g--;
                                    for (; p--;) {
                                        if (h === m || null !== m && h === m.alternate) {
                                            d = h;
                                            break e
                                        }
                                        h = d(h), m = d(m)
                                    }
                                    d = null
                                }
                                else d = null;
                                null !== u && od(o, s, u, d, !1), null !== c && null !== f && od(o, f, c, d, !0)
                            }
                            if ("select" === (u = (s = r ? Je(r) : window).nodeName && s.nodeName.toLowerCase()) || "input" === u && "file" === s.type) var y = Un;
                            else if (Ln(s))
                                if (Hn) y = Jn;
                                else {
                                    y = Qn;
                                    var b = Xn
                                }
                            else !(u = s.nodeName) || "input" !== u.toLowerCase() || "checkbox" !== s.type && "radio" !== s.type ? r && Nt(r.elementType) && (y = Un) : y = Gn;
                            switch (y && (y = y(e, r)) ? _n(o, y, n, a) : (b && b(e, s, r), "focusout" === e && r && "number" === s.type && null != r.memoizedProps.value && xt(s, "number", s.value)), b = r ? Je(r) : window, e) {
                                case "focusin":
                                    (Ln(b) || "true" === b.contentEditable) && (sr = b, lr = r, ur = null);
                                    break;
                                case "focusout":
                                    ur = lr = sr = null;
                                    break;
                                case "mousedown":
                                    cr = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    cr = !1, dr(o, n, a);
                                    break;
                                case "selectionchange":
                                    if (or) break;
                                case "keydown":
                                case "keyup":
                                    dr(o, n, a)
                            }
                            var x;
                            if (Cn) e: {
                                switch (e) {
                                    case "compositionstart":
                                        var w = "onCompositionStart";
                                        break e;
                                    case "compositionend":
                                        w = "onCompositionEnd";
                                        break e;
                                    case "compositionupdate":
                                        w = "onCompositionUpdate";
                                        break e
                                }
                                w = void 0
                            }
                            else Dn ? Fn(e, n) && (w = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (w = "onCompositionStart");
                            w && (Rn && "ko" !== n.locale && (Dn || "onCompositionStart" !== w ? "onCompositionEnd" === w && Dn && (x = Kt()) : ($t = "value" in (qt = a) ? qt.value : qt.textContent, Dn = !0)), 0 < (b = ad(r, w)).length && (w = new hn(w, e, null, n, a), o.push({
                                    event: w,
                                    listeners: b
                                }), x ? w.data = x : null !== (x = On(n)) && (w.data = x))), (x = Nn ? function(e, t) {
                                    switch (e) {
                                        case "compositionend":
                                            return On(t);
                                        case "keypress":
                                            return 32 !== t.which ? null : (An = !0, jn);
                                        case "textInput":
                                            return (e = t.data) === jn && An ? null : e;
                                        default:
                                            return null
                                    }
                                }(e, n) : function(e, t) {
                                    if (Dn) return "compositionend" === e || !Cn && Fn(e, t) ? (e = Kt(), Yt = $t = qt = null, Dn = !1, e) : null;
                                    switch (e) {
                                        case "paste":
                                        default:
                                            return null;
                                        case "keypress":
                                            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                                if (t.char && 1 < t.char.length) return t.char;
                                                if (t.which) return String.fromCharCode(t.which)
                                            }
                                            return null;
                                        case "compositionend":
                                            return Rn && "ko" !== t.locale ? null : t.data
                                    }
                                }(e, n)) && (0 < (w = ad(r, "onBeforeInput")).length && (b = new hn("onBeforeInput", "beforeinput", null, n, a), o.push({
                                    event: b,
                                    listeners: w
                                }), b.data = x)),
                                function(e, t, n, r, a) {
                                    if ("submit" === t && n && n.stateNode === a) {
                                        var i = Wc((a[Ue] || null).action),
                                            o = r.submitter;
                                        o && null !== (t = (t = o[Ue] || null) ? Wc(t.formAction) : o.getAttribute("formAction")) && (i = t, o = null);
                                        var s = new rn("action", "action", null, r, a);
                                        e.push({
                                            event: s,
                                            listeners: [{
                                                instance: null,
                                                listener: function() {
                                                    if (r.defaultPrevented) {
                                                        if (0 !== Mc) {
                                                            var e = o ? qc(a, o) : new FormData(a);
                                                            ns(n, {
                                                                pending: !0,
                                                                data: e,
                                                                method: a.method,
                                                                action: i
                                                            }, null, e)
                                                        }
                                                    } else "function" === typeof i && (s.preventDefault(), e = o ? qc(a, o) : new FormData(a), ns(n, {
                                                        pending: !0,
                                                        data: e,
                                                        method: a.method,
                                                        action: i
                                                    }, i, e))
                                                },
                                                currentTarget: a
                                            }]
                                        })
                                    }
                                }(o, e, r, n, a)
                        }
                        Qc(o, t)
                    })
                }

                function rd(e, t, n) {
                    return {
                        instance: e,
                        listener: t,
                        currentTarget: n
                    }
                }

                function ad(e, t) {
                    for (var n = t + "Capture", r = []; null !== e;) {
                        var a = e,
                            i = a.stateNode;
                        if (5 !== (a = a.tag) && 26 !== a && 27 !== a || null === i || (null != (a = Vt(e, n)) && r.unshift(rd(e, a, i)), null != (a = Vt(e, t)) && r.push(rd(e, a, i))), 3 === e.tag) return r;
                        e = e.return
                    }
                    return []
                }

                function id(e) {
                    if (null === e) return null;
                    do {
                        e = e.return
                    } while (e && 5 !== e.tag && 27 !== e.tag);
                    return e || null
                }

                function od(e, t, n, r, a) {
                    for (var i = t._reactName, o = []; null !== n && n !== r;) {
                        var s = n,
                            l = s.alternate,
                            u = s.stateNode;
                        if (s = s.tag, null !== l && l === r) break;
                        5 !== s && 26 !== s && 27 !== s || null === u || (l = u, a ? null != (u = Vt(n, i)) && o.unshift(rd(n, u, l)) : a || null != (u = Vt(n, i)) && o.push(rd(n, u, l))), n = n.return
                    }
                    0 !== o.length && e.push({
                        event: t,
                        listeners: o
                    })
                }
                var sd = /\r\n?/g,
                    ld = /\u0000|\uFFFD/g;

                function ud(e) {
                    return ("string" === typeof e ? e : "" + e).replace(sd, "\n").replace(ld, "")
                }

                function cd(e, t) {
                    return t = ud(t), ud(e) === t
                }

                function dd(e, t, n, r, a, i) {
                    switch (n) {
                        case "children":
                            "string" === typeof r ? "body" === t || "textarea" === t && "" === r || Et(e, r) : ("number" === typeof r || "bigint" === typeof r) && "body" !== t && Et(e, "" + r);
                            break;
                        case "className":
                            ut(e, "class", r);
                            break;
                        case "tabIndex":
                            ut(e, "tabindex", r);
                            break;
                        case "dir":
                        case "role":
                        case "viewBox":
                        case "width":
                        case "height":
                            ut(e, n, r);
                            break;
                        case "style":
                            Pt(e, r, i);
                            break;
                        case "data":
                            if ("object" !== t) {
                                ut(e, "data", r);
                                break
                            }
                        case "src":
                        case "href":
                            if ("" === r && ("a" !== t || "href" !== n)) {
                                e.removeAttribute(n);
                                break
                            }
                            if (null == r || "function" === typeof r || "symbol" === typeof r || "boolean" === typeof r) {
                                e.removeAttribute(n);
                                break
                            }
                            r = At("" + r), e.setAttribute(n, r);
                            break;
                        case "action":
                        case "formAction":
                            if ("function" === typeof r) {
                                e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                                break
                            }
                            if ("function" === typeof i && ("formAction" === n ? ("input" !== t && dd(e, t, "name", a.name, a, null), dd(e, t, "formEncType", a.formEncType, a, null), dd(e, t, "formMethod", a.formMethod, a, null), dd(e, t, "formTarget", a.formTarget, a, null)) : (dd(e, t, "encType", a.encType, a, null), dd(e, t, "method", a.method, a, null), dd(e, t, "target", a.target, a, null))), null == r || "symbol" === typeof r || "boolean" === typeof r) {
                                e.removeAttribute(n);
                                break
                            }
                            r = At("" + r), e.setAttribute(n, r);
                            break;
                        case "onClick":
                            null != r && (e.onclick = Ft);
                            break;
                        case "onScroll":
                            null != r && Gc("scroll", e);
                            break;
                        case "onScrollEnd":
                            null != r && Gc("scrollend", e);
                            break;
                        case "dangerouslySetInnerHTML":
                            if (null != r) {
                                if ("object" !== typeof r || !("__html" in r)) throw Error(o(61));
                                if (null != (n = r.__html)) {
                                    if (null != a.children) throw Error(o(60));
                                    e.innerHTML = n
                                }
                            }
                            break;
                        case "multiple":
                            e.multiple = r && "function" !== typeof r && "symbol" !== typeof r;
                            break;
                        case "muted":
                            e.muted = r && "function" !== typeof r && "symbol" !== typeof r;
                            break;
                        case "suppressContentEditableWarning":
                        case "suppressHydrationWarning":
                        case "defaultValue":
                        case "defaultChecked":
                        case "innerHTML":
                        case "ref":
                        case "autoFocus":
                            break;
                        case "xlinkHref":
                            if (null == r || "function" === typeof r || "boolean" === typeof r || "symbol" === typeof r) {
                                e.removeAttribute("xlink:href");
                                break
                            }
                            n = At("" + r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
                            break;
                        case "contentEditable":
                        case "spellCheck":
                        case "draggable":
                        case "value":
                        case "autoReverse":
                        case "externalResourcesRequired":
                        case "focusable":
                        case "preserveAlpha":
                            null != r && "function" !== typeof r && "symbol" !== typeof r ? e.setAttribute(n, "" + r) : e.removeAttribute(n);
                            break;
                        case "inert":
                        case "allowFullScreen":
                        case "async":
                        case "autoPlay":
                        case "controls":
                        case "default":
                        case "defer":
                        case "disabled":
                        case "disablePictureInPicture":
                        case "disableRemotePlayback":
                        case "formNoValidate":
                        case "hidden":
                        case "loop":
                        case "noModule":
                        case "noValidate":
                        case "open":
                        case "playsInline":
                        case "readOnly":
                        case "required":
                        case "reversed":
                        case "scoped":
                        case "seamless":
                        case "itemScope":
                            r && "function" !== typeof r && "symbol" !== typeof r ? e.setAttribute(n, "") : e.removeAttribute(n);
                            break;
                        case "capture":
                        case "download":
                            !0 === r ? e.setAttribute(n, "") : !1 !== r && null != r && "function" !== typeof r && "symbol" !== typeof r ? e.setAttribute(n, r) : e.removeAttribute(n);
                            break;
                        case "cols":
                        case "rows":
                        case "size":
                        case "span":
                            null != r && "function" !== typeof r && "symbol" !== typeof r && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
                            break;
                        case "rowSpan":
                        case "start":
                            null == r || "function" === typeof r || "symbol" === typeof r || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
                            break;
                        case "popover":
                            Gc("beforetoggle", e), Gc("toggle", e), lt(e, "popover", r);
                            break;
                        case "xlinkActuate":
                            ct(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
                            break;
                        case "xlinkArcrole":
                            ct(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
                            break;
                        case "xlinkRole":
                            ct(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
                            break;
                        case "xlinkShow":
                            ct(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
                            break;
                        case "xlinkTitle":
                            ct(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
                            break;
                        case "xlinkType":
                            ct(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
                            break;
                        case "xmlBase":
                            ct(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
                            break;
                        case "xmlLang":
                            ct(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
                            break;
                        case "xmlSpace":
                            ct(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
                            break;
                        case "is":
                            lt(e, "is", r);
                            break;
                        case "innerText":
                        case "textContent":
                            break;
                        default:
                            (!(2 < n.length) || "o" !== n[0] && "O" !== n[0] || "n" !== n[1] && "N" !== n[1]) && lt(e, n = Rt.get(n) || n, r)
                    }
                }

                function fd(e, t, n, r, a, i) {
                    switch (n) {
                        case "style":
                            Pt(e, r, i);
                            break;
                        case "dangerouslySetInnerHTML":
                            if (null != r) {
                                if ("object" !== typeof r || !("__html" in r)) throw Error(o(61));
                                if (null != (n = r.__html)) {
                                    if (null != a.children) throw Error(o(60));
                                    e.innerHTML = n
                                }
                            }
                            break;
                        case "children":
                            "string" === typeof r ? Et(e, r) : ("number" === typeof r || "bigint" === typeof r) && Et(e, "" + r);
                            break;
                        case "onScroll":
                            null != r && Gc("scroll", e);
                            break;
                        case "onScrollEnd":
                            null != r && Gc("scrollend", e);
                            break;
                        case "onClick":
                            null != r && (e.onclick = Ft);
                            break;
                        case "suppressContentEditableWarning":
                        case "suppressHydrationWarning":
                        case "innerHTML":
                        case "ref":
                        case "innerText":
                        case "textContent":
                            break;
                        default:
                            nt.hasOwnProperty(n) || ("o" !== n[0] || "n" !== n[1] || (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), "function" === typeof(i = null != (i = e[Ue] || null) ? i[n] : null) && e.removeEventListener(t, i, a), "function" !== typeof r) ? n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : lt(e, n, r) : ("function" !== typeof i && null !== i && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, r, a)))
                    }
                }

                function hd(e, t, n) {
                    switch (t) {
                        case "div":
                        case "span":
                        case "svg":
                        case "path":
                        case "a":
                        case "g":
                        case "p":
                        case "li":
                            break;
                        case "img":
                            Gc("error", e), Gc("load", e);
                            var r, a = !1,
                                i = !1;
                            for (r in n)
                                if (n.hasOwnProperty(r)) {
                                    var s = n[r];
                                    if (null != s) switch (r) {
                                        case "src":
                                            a = !0;
                                            break;
                                        case "srcSet":
                                            i = !0;
                                            break;
                                        case "children":
                                        case "dangerouslySetInnerHTML":
                                            throw Error(o(137, t));
                                        default:
                                            dd(e, t, r, s, n, null)
                                    }
                                }
                            return i && dd(e, t, "srcSet", n.srcSet, n, null), void(a && dd(e, t, "src", n.src, n, null));
                        case "input":
                            Gc("invalid", e);
                            var l = r = s = i = null,
                                u = null,
                                c = null;
                            for (a in n)
                                if (n.hasOwnProperty(a)) {
                                    var d = n[a];
                                    if (null != d) switch (a) {
                                        case "name":
                                            i = d;
                                            break;
                                        case "type":
                                            s = d;
                                            break;
                                        case "checked":
                                            u = d;
                                            break;
                                        case "defaultChecked":
                                            c = d;
                                            break;
                                        case "value":
                                            r = d;
                                            break;
                                        case "defaultValue":
                                            l = d;
                                            break;
                                        case "children":
                                        case "dangerouslySetInnerHTML":
                                            if (null != d) throw Error(o(137, t));
                                            break;
                                        default:
                                            dd(e, t, a, d, n, null)
                                    }
                                }
                            return void bt(e, r, l, u, c, s, i, !1);
                        case "select":
                            for (i in Gc("invalid", e), a = s = r = null, n)
                                if (n.hasOwnProperty(i) && null != (l = n[i])) switch (i) {
                                    case "value":
                                        r = l;
                                        break;
                                    case "defaultValue":
                                        s = l;
                                        break;
                                    case "multiple":
                                        a = l;
                                    default:
                                        dd(e, t, i, l, n, null)
                                }
                            return t = r, n = s, e.multiple = !!a, void(null != t ? wt(e, !!a, t, !1) : null != n && wt(e, !!a, n, !0));
                        case "textarea":
                            for (s in Gc("invalid", e), r = i = a = null, n)
                                if (n.hasOwnProperty(s) && null != (l = n[s])) switch (s) {
                                    case "value":
                                        a = l;
                                        break;
                                    case "defaultValue":
                                        i = l;
                                        break;
                                    case "children":
                                        r = l;
                                        break;
                                    case "dangerouslySetInnerHTML":
                                        if (null != l) throw Error(o(91));
                                        break;
                                    default:
                                        dd(e, t, s, l, n, null)
                                }
                            return void kt(e, a, i, r);
                        case "option":
                            for (u in n)
                                if (n.hasOwnProperty(u) && null != (a = n[u]))
                                    if ("selected" === u) e.selected = a && "function" !== typeof a && "symbol" !== typeof a;
                                    else dd(e, t, u, a, n, null);
                            return;
                        case "dialog":
                            Gc("beforetoggle", e), Gc("toggle", e), Gc("cancel", e), Gc("close", e);
                            break;
                        case "iframe":
                        case "object":
                            Gc("load", e);
                            break;
                        case "video":
                        case "audio":
                            for (a = 0; a < Kc.length; a++) Gc(Kc[a], e);
                            break;
                        case "image":
                            Gc("error", e), Gc("load", e);
                            break;
                        case "details":
                            Gc("toggle", e);
                            break;
                        case "embed":
                        case "source":
                        case "link":
                            Gc("error", e), Gc("load", e);
                        case "area":
                        case "base":
                        case "br":
                        case "col":
                        case "hr":
                        case "keygen":
                        case "meta":
                        case "param":
                        case "track":
                        case "wbr":
                        case "menuitem":
                            for (c in n)
                                if (n.hasOwnProperty(c) && null != (a = n[c])) switch (c) {
                                    case "children":
                                    case "dangerouslySetInnerHTML":
                                        throw Error(o(137, t));
                                    default:
                                        dd(e, t, c, a, n, null)
                                }
                            return;
                        default:
                            if (Nt(t)) {
                                for (d in n) n.hasOwnProperty(d) && (void 0 !== (a = n[d]) && fd(e, t, d, a, n, void 0));
                                return
                            }
                    }
                    for (l in n) n.hasOwnProperty(l) && (null != (a = n[l]) && dd(e, t, l, a, n, null))
                }

                function pd(e) {
                    switch (e) {
                        case "css":
                        case "script":
                        case "font":
                        case "img":
                        case "image":
                        case "input":
                        case "link":
                            return !0;
                        default:
                            return !1
                    }
                }
                var md = null,
                    gd = null;

                function vd(e) {
                    return 9 === e.nodeType ? e : e.ownerDocument
                }

                function yd(e) {
                    switch (e) {
                        case "http://www.w3.org/2000/svg":
                            return 1;
                        case "http://www.w3.org/1998/Math/MathML":
                            return 2;
                        default:
                            return 0
                    }
                }

                function bd(e, t) {
                    if (0 === e) switch (t) {
                        case "svg":
                            return 1;
                        case "math":
                            return 2;
                        default:
                            return 0
                    }
                    return 1 === e && "foreignObject" === t ? 0 : e
                }

                function xd(e, t) {
                    return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "bigint" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
                }
                var wd = null;
                var Sd = "function" === typeof setTimeout ? setTimeout : void 0,
                    kd = "function" === typeof clearTimeout ? clearTimeout : void 0,
                    Ed = "function" === typeof Promise ? Promise : void 0,
                    Td = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Ed ? function(e) {
                        return Ed.resolve(null).then(e).catch(Cd)
                    } : Sd;

                function Cd(e) {
                    setTimeout(function() {
                        throw e
                    })
                }

                function Pd(e) {
                    return "head" === e
                }

                function Nd(e, t) {
                    var n = t,
                        r = 0;
                    do {
                        var a = n.nextSibling;
                        if (e.removeChild(n), a && 8 === a.nodeType)
                            if ("/$" === (n = a.data) || "/&" === n) {
                                if (0 === r) return e.removeChild(a), void $f(t);
                                r--
                            } else if ("$" === n || "$?" === n || "$~" === n || "$!" === n || "&" === n) r++;
                        else if ("html" === n) Id(e.ownerDocument.documentElement);
                        else if ("head" === n) {
                            Id(n = e.ownerDocument.head);
                            for (var i = n.firstChild; i;) {
                                var o = i.nextSibling,
                                    s = i.nodeName;
                                i[Ke] || "SCRIPT" === s || "STYLE" === s || "LINK" === s && "stylesheet" === i.rel.toLowerCase() || n.removeChild(i), i = o
                            }
                        } else "body" === n && Id(e.ownerDocument.body);
                        n = a
                    } while (n);
                    $f(t)
                }

                function Rd(e, t) {
                    var n = e;
                    e = 0;
                    do {
                        var r = n.nextSibling;
                        if (1 === n.nodeType ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", "" === n.getAttribute("style") && n.removeAttribute("style")) : 3 === n.nodeType && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && 8 === r.nodeType)
                            if ("/$" === (n = r.data)) {
                                if (0 === e) break;
                                e--
                            } else "$" !== n && "$?" !== n && "$~" !== n && "$!" !== n || e++;
                        n = r
                    } while (n)
                }

                function jd(e) {
                    var t = e.firstChild;
                    for (t && 10 === t.nodeType && (t = t.nextSibling); t;) {
                        var n = t;
                        switch (t = t.nextSibling, n.nodeName) {
                            case "HTML":
                            case "HEAD":
                            case "BODY":
                                jd(n), Xe(n);
                                continue;
                            case "SCRIPT":
                            case "STYLE":
                                continue;
                            case "LINK":
                                if ("stylesheet" === n.rel.toLowerCase()) continue
                        }
                        e.removeChild(n)
                    }
                }

                function Ad(e, t) {
                    for (; 8 !== e.nodeType;) {
                        if ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !t) return null;
                        if (null === (e = Dd(e.nextSibling))) return null
                    }
                    return e
                }

                function Fd(e) {
                    return "$?" === e.data || "$~" === e.data
                }

                function Od(e) {
                    return "$!" === e.data || "$?" === e.data && "loading" !== e.ownerDocument.readyState
                }

                function Dd(e) {
                    for (; null != e; e = e.nextSibling) {
                        var t = e.nodeType;
                        if (1 === t || 3 === t) break;
                        if (8 === t) {
                            if ("$" === (t = e.data) || "$!" === t || "$?" === t || "$~" === t || "&" === t || "F!" === t || "F" === t) break;
                            if ("/$" === t || "/&" === t) return null
                        }
                    }
                    return e
                }
                var Md = null;

                function Ld(e) {
                    e = e.nextSibling;
                    for (var t = 0; e;) {
                        if (8 === e.nodeType) {
                            var n = e.data;
                            if ("/$" === n || "/&" === n) {
                                if (0 === t) return Dd(e.nextSibling);
                                t--
                            } else "$" !== n && "$!" !== n && "$?" !== n && "$~" !== n && "&" !== n || t++
                        }
                        e = e.nextSibling
                    }
                    return null
                }

                function _d(e) {
                    e = e.previousSibling;
                    for (var t = 0; e;) {
                        if (8 === e.nodeType) {
                            var n = e.data;
                            if ("$" === n || "$!" === n || "$?" === n || "$~" === n || "&" === n) {
                                if (0 === t) return e;
                                t--
                            } else "/$" !== n && "/&" !== n || t++
                        }
                        e = e.previousSibling
                    }
                    return null
                }

                function zd(e, t, n) {
                    switch (t = vd(n), e) {
                        case "html":
                            if (!(e = t.documentElement)) throw Error(o(452));
                            return e;
                        case "head":
                            if (!(e = t.head)) throw Error(o(453));
                            return e;
                        case "body":
                            if (!(e = t.body)) throw Error(o(454));
                            return e;
                        default:
                            throw Error(o(451))
                    }
                }

                function Id(e) {
                    for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
                    Xe(e)
                }
                var Bd = new Map,
                    Vd = new Set;

                function Ud(e) {
                    return "function" === typeof e.getRootNode ? e.getRootNode() : 9 === e.nodeType ? e : e.ownerDocument
                }
                var Hd = M.d;
                M.d = {
                    f: function() {
                        var e = Hd.f(),
                            t = ec();
                        return e || t
                    },
                    r: function(e) {
                        var t = Ge(e);
                        null !== t && 5 === t.tag && "form" === t.type ? as(t) : Hd.r(e)
                    },
                    D: function(e) {
                        Hd.D(e), qd("dns-prefetch", e, null)
                    },
                    C: function(e, t) {
                        Hd.C(e, t), qd("preconnect", e, t)
                    },
                    L: function(e, t, n) {
                        Hd.L(e, t, n);
                        var r = Wd;
                        if (r && e && t) {
                            var a = 'link[rel="preload"][as="' + vt(t) + '"]';
                            "image" === t && n && n.imageSrcSet ? (a += '[imagesrcset="' + vt(n.imageSrcSet) + '"]', "string" === typeof n.imageSizes && (a += '[imagesizes="' + vt(n.imageSizes) + '"]')) : a += '[href="' + vt(e) + '"]';
                            var i = a;
                            switch (t) {
                                case "style":
                                    i = Yd(e);
                                    break;
                                case "script":
                                    i = Qd(e)
                            }
                            Bd.has(i) || (e = h({
                                rel: "preload",
                                href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                                as: t
                            }, n), Bd.set(i, e), null !== r.querySelector(a) || "style" === t && r.querySelector(Kd(i)) || "script" === t && r.querySelector(Gd(i)) || (hd(t = r.createElement("link"), "link", e), et(t), r.head.appendChild(t)))
                        }
                    },
                    m: function(e, t) {
                        Hd.m(e, t);
                        var n = Wd;
                        if (n && e) {
                            var r = t && "string" === typeof t.as ? t.as : "script",
                                a = 'link[rel="modulepreload"][as="' + vt(r) + '"][href="' + vt(e) + '"]',
                                i = a;
                            switch (r) {
                                case "audioworklet":
                                case "paintworklet":
                                case "serviceworker":
                                case "sharedworker":
                                case "worker":
                                case "script":
                                    i = Qd(e)
                            }
                            if (!Bd.has(i) && (e = h({
                                    rel: "modulepreload",
                                    href: e
                                }, t), Bd.set(i, e), null === n.querySelector(a))) {
                                switch (r) {
                                    case "audioworklet":
                                    case "paintworklet":
                                    case "serviceworker":
                                    case "sharedworker":
                                    case "worker":
                                    case "script":
                                        if (n.querySelector(Gd(i))) return
                                }
                                hd(r = n.createElement("link"), "link", e), et(r), n.head.appendChild(r)
                            }
                        }
                    },
                    X: function(e, t) {
                        Hd.X(e, t);
                        var n = Wd;
                        if (n && e) {
                            var r = Ze(n).hoistableScripts,
                                a = Qd(e),
                                i = r.get(a);
                            i || ((i = n.querySelector(Gd(a))) || (e = h({
                                src: e,
                                async: !0
                            }, t), (t = Bd.get(a)) && tf(e, t), et(i = n.createElement("script")), hd(i, "link", e), n.head.appendChild(i)), i = {
                                type: "script",
                                instance: i,
                                count: 1,
                                state: null
                            }, r.set(a, i))
                        }
                    },
                    S: function(e, t, n) {
                        Hd.S(e, t, n);
                        var r = Wd;
                        if (r && e) {
                            var a = Ze(r).hoistableStyles,
                                i = Yd(e);
                            t = t || "default";
                            var o = a.get(i);
                            if (!o) {
                                var s = {
                                    loading: 0,
                                    preload: null
                                };
                                if (o = r.querySelector(Kd(i))) s.loading = 5;
                                else {
                                    e = h({
                                        rel: "stylesheet",
                                        href: e,
                                        "data-precedence": t
                                    }, n), (n = Bd.get(i)) && ef(e, n);
                                    var l = o = r.createElement("link");
                                    et(l), hd(l, "link", e), l._p = new Promise(function(e, t) {
                                        l.onload = e, l.onerror = t
                                    }), l.addEventListener("load", function() {
                                        s.loading |= 1
                                    }), l.addEventListener("error", function() {
                                        s.loading |= 2
                                    }), s.loading |= 4, Zd(o, t, r)
                                }
                                o = {
                                    type: "stylesheet",
                                    instance: o,
                                    count: 1,
                                    state: s
                                }, a.set(i, o)
                            }
                        }
                    },
                    M: function(e, t) {
                        Hd.M(e, t);
                        var n = Wd;
                        if (n && e) {
                            var r = Ze(n).hoistableScripts,
                                a = Qd(e),
                                i = r.get(a);
                            i || ((i = n.querySelector(Gd(a))) || (e = h({
                                src: e,
                                async: !0,
                                type: "module"
                            }, t), (t = Bd.get(a)) && tf(e, t), et(i = n.createElement("script")), hd(i, "link", e), n.head.appendChild(i)), i = {
                                type: "script",
                                instance: i,
                                count: 1,
                                state: null
                            }, r.set(a, i))
                        }
                    }
                };
                var Wd = "undefined" === typeof document ? null : document;

                function qd(e, t, n) {
                    var r = Wd;
                    if (r && "string" === typeof t && t) {
                        var a = vt(t);
                        a = 'link[rel="' + e + '"][href="' + a + '"]', "string" === typeof n && (a += '[crossorigin="' + n + '"]'), Vd.has(a) || (Vd.add(a), e = {
                            rel: e,
                            crossOrigin: n,
                            href: t
                        }, null === r.querySelector(a) && (hd(t = r.createElement("link"), "link", e), et(t), r.head.appendChild(t)))
                    }
                }

                function $d(e, t, n, r) {
                    var a, i, s, l, u = (u = $.current) ? Ud(u) : null;
                    if (!u) throw Error(o(446));
                    switch (e) {
                        case "meta":
                        case "title":
                            return null;
                        case "style":
                            return "string" === typeof n.precedence && "string" === typeof n.href ? (t = Yd(n.href), (r = (n = Ze(u).hoistableStyles).get(t)) || (r = {
                                type: "style",
                                instance: null,
                                count: 0,
                                state: null
                            }, n.set(t, r)), r) : {
                                type: "void",
                                instance: null,
                                count: 0,
                                state: null
                            };
                        case "link":
                            if ("stylesheet" === n.rel && "string" === typeof n.href && "string" === typeof n.precedence) {
                                e = Yd(n.href);
                                var c = Ze(u).hoistableStyles,
                                    d = c.get(e);
                                if (d || (u = u.ownerDocument || u, d = {
                                        type: "stylesheet",
                                        instance: null,
                                        count: 0,
                                        state: {
                                            loading: 0,
                                            preload: null
                                        }
                                    }, c.set(e, d), (c = u.querySelector(Kd(e))) && !c._p && (d.instance = c, d.state.loading = 5), Bd.has(e) || (n = {
                                        rel: "preload",
                                        as: "style",
                                        href: n.href,
                                        crossOrigin: n.crossOrigin,
                                        integrity: n.integrity,
                                        media: n.media,
                                        hrefLang: n.hrefLang,
                                        referrerPolicy: n.referrerPolicy
                                    }, Bd.set(e, n), c || (a = u, i = e, s = n, l = d.state, a.querySelector('link[rel="preload"][as="style"][' + i + "]") ? l.loading = 1 : (i = a.createElement("link"), l.preload = i, i.addEventListener("load", function() {
                                        return l.loading |= 1
                                    }), i.addEventListener("error", function() {
                                        return l.loading |= 2
                                    }), hd(i, "link", s), et(i), a.head.appendChild(i))))), t && null === r) throw Error(o(528, ""));
                                return d
                            }
                            if (t && null !== r) throw Error(o(529, ""));
                            return null;
                        case "script":
                            return t = n.async, "string" === typeof(n = n.src) && t && "function" !== typeof t && "symbol" !== typeof t ? (t = Qd(n), (r = (n = Ze(u).hoistableScripts).get(t)) || (r = {
                                type: "script",
                                instance: null,
                                count: 0,
                                state: null
                            }, n.set(t, r)), r) : {
                                type: "void",
                                instance: null,
                                count: 0,
                                state: null
                            };
                        default:
                            throw Error(o(444, e))
                    }
                }

                function Yd(e) {
                    return 'href="' + vt(e) + '"'
                }

                function Kd(e) {
                    return 'link[rel="stylesheet"][' + e + "]"
                }

                function Xd(e) {
                    return h({}, e, {
                        "data-precedence": e.precedence,
                        precedence: null
                    })
                }

                function Qd(e) {
                    return '[src="' + vt(e) + '"]'
                }

                function Gd(e) {
                    return "script[async]" + e
                }

                function Jd(e, t, n) {
                    if (t.count++, null === t.instance) switch (t.type) {
                        case "style":
                            var r = e.querySelector('style[data-href~="' + vt(n.href) + '"]');
                            if (r) return t.instance = r, et(r), r;
                            var a = h({}, n, {
                                "data-href": n.href,
                                "data-precedence": n.precedence,
                                href: null,
                                precedence: null
                            });
                            return et(r = (e.ownerDocument || e).createElement("style")), hd(r, "style", a), Zd(r, n.precedence, e), t.instance = r;
                        case "stylesheet":
                            a = Yd(n.href);
                            var i = e.querySelector(Kd(a));
                            if (i) return t.state.loading |= 4, t.instance = i, et(i), i;
                            r = Xd(n), (a = Bd.get(a)) && ef(r, a), et(i = (e.ownerDocument || e).createElement("link"));
                            var s = i;
                            return s._p = new Promise(function(e, t) {
                                s.onload = e, s.onerror = t
                            }), hd(i, "link", r), t.state.loading |= 4, Zd(i, n.precedence, e), t.instance = i;
                        case "script":
                            return i = Qd(n.src), (a = e.querySelector(Gd(i))) ? (t.instance = a, et(a), a) : (r = n, (a = Bd.get(i)) && tf(r = h({}, n), a), et(a = (e = e.ownerDocument || e).createElement("script")), hd(a, "link", r), e.head.appendChild(a), t.instance = a);
                        case "void":
                            return null;
                        default:
                            throw Error(o(443, t.type))
                    } else "stylesheet" === t.type && 0 === (4 & t.state.loading) && (r = t.instance, t.state.loading |= 4, Zd(r, n.precedence, e));
                    return t.instance
                }

                function Zd(e, t, n) {
                    for (var r = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = r.length ? r[r.length - 1] : null, i = a, o = 0; o < r.length; o++) {
                        var s = r[o];
                        if (s.dataset.precedence === t) i = s;
                        else if (i !== a) break
                    }
                    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild)
                }

                function ef(e, t) {
                    null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.title && (e.title = t.title)
                }

                function tf(e, t) {
                    null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.integrity && (e.integrity = t.integrity)
                }
                var nf = null;

                function rf(e, t, n) {
                    if (null === nf) {
                        var r = new Map,
                            a = nf = new Map;
                        a.set(n, r)
                    } else(r = (a = nf).get(n)) || (r = new Map, a.set(n, r));
                    if (r.has(e)) return r;
                    for (r.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
                        var i = n[a];
                        if (!(i[Ke] || i[Ve] || "link" === e && "stylesheet" === i.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== i.namespaceURI) {
                            var o = i.getAttribute(t) || "";
                            o = e + o;
                            var s = r.get(o);
                            s ? s.push(i) : r.set(o, [i])
                        }
                    }
                    return r
                }

                function af(e, t, n) {
                    (e = e.ownerDocument || e).head.insertBefore(n, "title" === t ? e.querySelector("head > title") : null)
                }

                function of (e) {
                    return "stylesheet" !== e.type || 0 !== (3 & e.state.loading)
                }
                var sf = 0;

                function lf() {
                    if (this.count--, 0 === this.count && (0 === this.imgCount || !this.waitingForImages))
                        if (this.stylesheets) cf(this, this.stylesheets);
                        else if (this.unsuspend) {
                        var e = this.unsuspend;
                        this.unsuspend = null, e()
                    }
                }
                var uf = null;

                function cf(e, t) {
                    e.stylesheets = null, null !== e.unsuspend && (e.count++, uf = new Map, t.forEach(df, e), uf = null, lf.call(e))
                }

                function df(e, t) {
                    if (!(4 & t.state.loading)) {
                        var n = uf.get(e);
                        if (n) var r = n.get(null);
                        else {
                            n = new Map, uf.set(e, n);
                            for (var a = e.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < a.length; i++) {
                                var o = a[i];
                                "LINK" !== o.nodeName && "not all" === o.getAttribute("media") || (n.set(o.dataset.precedence, o), r = o)
                            }
                            r && n.set(null, r)
                        }
                        o = (a = t.instance).getAttribute("data-precedence"), (i = n.get(o) || r) === r && n.set(null, a), n.set(o, a), this.count++, r = lf.bind(this), a.addEventListener("load", r), a.addEventListener("error", r), i ? i.parentNode.insertBefore(a, i.nextSibling) : (e = 9 === e.nodeType ? e.head : e).insertBefore(a, e.firstChild), t.state.loading |= 4
                    }
                }
                var ff = {
                    $$typeof: w,
                    Provider: null,
                    Consumer: null,
                    _currentValue: L,
                    _currentValue2: L,
                    _threadCount: 0
                };

                function hf(e, t, n, r, a, i, o, s, l) {
                    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ae(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ae(0), this.hiddenUpdates = Ae(null), this.identifierPrefix = r, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = l, this.incompleteTransitions = new Map
                }

                function pf(e, t, n, r, a, i, o, s, l, u, c, d) {
                    return e = new hf(e, t, n, o, l, u, c, d, s), t = 1, !0 === i && (t |= 24), i = Ir(3, null, null, t), e.current = i, i.stateNode = e, (t = Ba()).refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
                        element: r,
                        isDehydrated: n,
                        cache: t
                    }, vi(i), e
                }

                function mf(e) {
                    return e ? e = _r : _r
                }

                function gf(e, t, n, r, a, i) {
                    a = mf(a), null === r.context ? r.context = a : r.pendingContext = a, (r = bi(t)).payload = {
                        element: n
                    }, null !== (i = void 0 === i ? null : i) && (r.callback = i), null !== (n = xi(e, r, t)) && (Xu(n, 0, t), wi(n, e, t))
                }

                function vf(e, t) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t
                    }
                }

                function yf(e, t) {
                    vf(e, t), (e = e.alternate) && vf(e, t)
                }

                function bf(e) {
                    if (13 === e.tag || 31 === e.tag) {
                        var t = Dr(e, 67108864);
                        null !== t && Xu(t, 0, 67108864), yf(e, 67108864)
                    }
                }

                function xf(e) {
                    if (13 === e.tag || 31 === e.tag) {
                        var t = Yu(),
                            n = Dr(e, t = Le(t));
                        null !== n && Xu(n, 0, t), yf(e, t)
                    }
                }
                var wf = !0;

                function Sf(e, t, n, r) {
                    var a = D.T;
                    D.T = null;
                    var i = M.p;
                    try {
                        M.p = 2, Ef(e, t, n, r)
                    } finally {
                        M.p = i, D.T = a
                    }
                }

                function kf(e, t, n, r) {
                    var a = D.T;
                    D.T = null;
                    var i = M.p;
                    try {
                        M.p = 8, Ef(e, t, n, r)
                    } finally {
                        M.p = i, D.T = a
                    }
                }

                function Ef(e, t, n, r) {
                    if (wf) {
                        var a = Tf(r);
                        if (null === a) nd(e, t, r, Cf, n), _f(e, r);
                        else if (function(e, t, n, r, a) {
                                switch (t) {
                                    case "focusin":
                                        return jf = zf(jf, e, t, n, r, a), !0;
                                    case "dragenter":
                                        return Af = zf(Af, e, t, n, r, a), !0;
                                    case "mouseover":
                                        return Ff = zf(Ff, e, t, n, r, a), !0;
                                    case "pointerover":
                                        var i = a.pointerId;
                                        return Of.set(i, zf(Of.get(i) || null, e, t, n, r, a)), !0;
                                    case "gotpointercapture":
                                        return i = a.pointerId, Df.set(i, zf(Df.get(i) || null, e, t, n, r, a)), !0
                                }
                                return !1
                            }(a, e, t, n, r)) r.stopPropagation();
                        else if (_f(e, r), 4 & t && -1 < Lf.indexOf(e)) {
                            for (; null !== a;) {
                                var i = Ge(a);
                                if (null !== i) switch (i.tag) {
                                    case 3:
                                        if ((i = i.stateNode).current.memoizedState.isDehydrated) {
                                            var o = Ce(i.pendingLanes);
                                            if (0 !== o) {
                                                var s = i;
                                                for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                                                    var l = 1 << 31 - xe(o);
                                                    s.entanglements[1] |= l, o &= ~l
                                                }
                                                Lc(i), 0 === (6 & pu) && (Mu = le() + 500, _c(0, !1))
                                            }
                                        }
                                        break;
                                    case 31:
                                    case 13:
                                        null !== (s = Dr(i, 2)) && Xu(s, 0, 2), ec(), yf(i, 2)
                                }
                                if (null === (i = Tf(r)) && nd(e, t, r, Cf, n), i === a) break;
                                a = i
                            }
                            null !== a && r.stopPropagation()
                        } else nd(e, t, r, null, n)
                    }
                }

                function Tf(e) {
                    return Pf(e = Dt(e))
                }
                var Cf = null;

                function Pf(e) {
                    if (Cf = null, null !== (e = Qe(e))) {
                        var t = l(e);
                        if (null === t) e = null;
                        else {
                            var n = t.tag;
                            if (13 === n) {
                                if (null !== (e = u(t))) return e;
                                e = null
                            } else if (31 === n) {
                                if (null !== (e = c(t))) return e;
                                e = null
                            } else if (3 === n) {
                                if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                                e = null
                            } else t !== e && (e = null)
                        }
                    }
                    return Cf = e, null
                }

                function Nf(e) {
                    switch (e) {
                        case "beforetoggle":
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
                        case "toggle":
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
                            return 2;
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
                        case "touchmove":
                        case "wheel":
                        case "mouseenter":
                        case "mouseleave":
                        case "pointerenter":
                        case "pointerleave":
                            return 8;
                        case "message":
                            switch (ue()) {
                                case ce:
                                    return 2;
                                case de:
                                    return 8;
                                case fe:
                                case he:
                                    return 32;
                                case pe:
                                    return 268435456;
                                default:
                                    return 32
                            }
                        default:
                            return 32
                    }
                }
                var Rf = !1,
                    jf = null,
                    Af = null,
                    Ff = null,
                    Of = new Map,
                    Df = new Map,
                    Mf = [],
                    Lf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

                function _f(e, t) {
                    switch (e) {
                        case "focusin":
                        case "focusout":
                            jf = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            Af = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            Ff = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            Of.delete(t.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            Df.delete(t.pointerId)
                    }
                }

                function zf(e, t, n, r, a, i) {
                    return null === e || e.nativeEvent !== i ? (e = {
                        blockedOn: t,
                        domEventName: n,
                        eventSystemFlags: r,
                        nativeEvent: i,
                        targetContainers: [a]
                    }, null !== t && (null !== (t = Ge(t)) && bf(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e)
                }

                function If(e) {
                    var t = Qe(e.target);
                    if (null !== t) {
                        var n = l(t);
                        if (null !== n)
                            if (13 === (t = n.tag)) {
                                if (null !== (t = u(n))) return e.blockedOn = t, void Ie(e.priority, function() {
                                    xf(n)
                                })
                            } else if (31 === t) {
                            if (null !== (t = c(n))) return e.blockedOn = t, void Ie(e.priority, function() {
                                xf(n)
                            })
                        } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                    }
                    e.blockedOn = null
                }

                function Bf(e) {
                    if (null !== e.blockedOn) return !1;
                    for (var t = e.targetContainers; 0 < t.length;) {
                        var n = Tf(e.nativeEvent);
                        if (null !== n) return null !== (t = Ge(n)) && bf(t), e.blockedOn = n, !1;
                        var r = new(n = e.nativeEvent).constructor(n.type, n);
                        Ot = r, n.target.dispatchEvent(r), Ot = null, t.shift()
                    }
                    return !0
                }

                function Vf(e, t, n) {
                    Bf(e) && n.delete(t)
                }

                function Uf() {
                    Rf = !1, null !== jf && Bf(jf) && (jf = null), null !== Af && Bf(Af) && (Af = null), null !== Ff && Bf(Ff) && (Ff = null), Of.forEach(Vf), Df.forEach(Vf)
                }

                function Hf(e, t) {
                    e.blockedOn === t && (e.blockedOn = null, Rf || (Rf = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, Uf)))
                }
                var Wf = null;

                function qf(e) {
                    Wf !== e && (Wf = e, r.unstable_scheduleCallback(r.unstable_NormalPriority, function() {
                        Wf === e && (Wf = null);
                        for (var t = 0; t < e.length; t += 3) {
                            var n = e[t],
                                r = e[t + 1],
                                a = e[t + 2];
                            if ("function" !== typeof r) {
                                if (null === Pf(r || n)) continue;
                                break
                            }
                            var i = Ge(n);
                            null !== i && (e.splice(t, 3), t -= 3, ns(i, {
                                pending: !0,
                                data: a,
                                method: n.method,
                                action: r
                            }, r, a))
                        }
                    }))
                }

                function $f(e) {
                    function t(t) {
                        return Hf(t, e)
                    }
                    null !== jf && Hf(jf, e), null !== Af && Hf(Af, e), null !== Ff && Hf(Ff, e), Of.forEach(t), Df.forEach(t);
                    for (var n = 0; n < Mf.length; n++) {
                        var r = Mf[n];
                        r.blockedOn === e && (r.blockedOn = null)
                    }
                    for (; 0 < Mf.length && null === (n = Mf[0]).blockedOn;) If(n), null === n.blockedOn && Mf.shift();
                    if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
                        for (r = 0; r < n.length; r += 3) {
                            var a = n[r],
                                i = n[r + 1],
                                o = a[Ue] || null;
                            if ("function" === typeof i) o || qf(n);
                            else if (o) {
                                var s = null;
                                if (i && i.hasAttribute("formAction")) {
                                    if (a = i, o = i[Ue] || null) s = o.formAction;
                                    else if (null !== Pf(a)) continue
                                } else s = o.action;
                                "function" === typeof s ? n[r + 1] = s : (n.splice(r, 3), r -= 3), qf(n)
                            }
                        }
                }

                function Yf() {
                    function e(e) {
                        e.canIntercept && "react-transition" === e.info && e.intercept({
                            handler: function() {
                                return new Promise(function(e) {
                                    return a = e
                                })
                            },
                            focusReset: "manual",
                            scroll: "manual"
                        })
                    }

                    function t() {
                        null !== a && (a(), a = null), r || setTimeout(n, 20)
                    }

                    function n() {
                        if (!r && !navigation.transition) {
                            var e = navigation.currentEntry;
                            e && null != e.url && navigation.navigate(e.url, {
                                state: e.getState(),
                                info: "react-transition",
                                history: "replace"
                            })
                        }
                    }
                    if ("object" === typeof navigation) {
                        var r = !1,
                            a = null;
                        return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100),
                            function() {
                                r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), null !== a && (a(), a = null)
                            }
                    }
                }

                function Kf(e) {
                    this._internalRoot = e
                }

                function Xf(e) {
                    this._internalRoot = e
                }
                Xf.prototype.render = Kf.prototype.render = function(e) {
                    var t = this._internalRoot;
                    if (null === t) throw Error(o(409));
                    gf(t.current, Yu(), e, t, null, null)
                }, Xf.prototype.unmount = Kf.prototype.unmount = function() {
                    var e = this._internalRoot;
                    if (null !== e) {
                        this._internalRoot = null;
                        var t = e.containerInfo;
                        gf(e.current, 2, null, e, null, null), ec(), t[He] = null
                    }
                }, Xf.prototype.unstable_scheduleHydration = function(e) {
                    if (e) {
                        var t = ze();
                        e = {
                            blockedOn: null,
                            target: e,
                            priority: t
                        };
                        for (var n = 0; n < Mf.length && 0 !== t && t < Mf[n].priority; n++);
                        Mf.splice(n, 0, e), 0 === n && If(e)
                    }
                };
                var Qf = a.version;
                if ("19.2.3" !== Qf) throw Error(o(527, Qf, "19.2.3"));
                M.findDOMNode = function(e) {
                    var t = e._reactInternals;
                    if (void 0 === t) {
                        if ("function" === typeof e.render) throw Error(o(188));
                        throw e = Object.keys(e).join(","), Error(o(268, e))
                    }
                    return e = function(e) {
                        var t = e.alternate;
                        if (!t) {
                            if (null === (t = l(e))) throw Error(o(188));
                            return t !== e ? null : e
                        }
                        for (var n = e, r = t;;) {
                            var a = n.return;
                            if (null === a) break;
                            var i = a.alternate;
                            if (null === i) {
                                if (null !== (r = a.return)) {
                                    n = r;
                                    continue
                                }
                                break
                            }
                            if (a.child === i.child) {
                                for (i = a.child; i;) {
                                    if (i === n) return d(a), e;
                                    if (i === r) return d(a), t;
                                    i = i.sibling
                                }
                                throw Error(o(188))
                            }
                            if (n.return !== r.return) n = a, r = i;
                            else {
                                for (var s = !1, u = a.child; u;) {
                                    if (u === n) {
                                        s = !0, n = a, r = i;
                                        break
                                    }
                                    if (u === r) {
                                        s = !0, r = a, n = i;
                                        break
                                    }
                                    u = u.sibling
                                }
                                if (!s) {
                                    for (u = i.child; u;) {
                                        if (u === n) {
                                            s = !0, n = i, r = a;
                                            break
                                        }
                                        if (u === r) {
                                            s = !0, r = i, n = a;
                                            break
                                        }
                                        u = u.sibling
                                    }
                                    if (!s) throw Error(o(189))
                                }
                            }
                            if (n.alternate !== r) throw Error(o(190))
                        }
                        if (3 !== n.tag) throw Error(o(188));
                        return n.stateNode.current === n ? e : t
                    }(t), e = null === (e = null !== e ? f(e) : null) ? null : e.stateNode
                };
                var Gf = {
                    bundleType: 0,
                    version: "19.2.3",
                    rendererPackageName: "react-dom",
                    currentDispatcherRef: D,
                    reconcilerVersion: "19.2.3"
                };
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    var Jf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (!Jf.isDisabled && Jf.supportsFiber) try {
                        ve = Jf.inject(Gf), ye = Jf
                    } catch (eh) {}
                }
                t.createRoot = function(e, t) {
                    if (!s(e)) throw Error(o(299));
                    var n = !1,
                        r = "",
                        a = Ts,
                        i = Cs,
                        l = Ps;
                    return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onUncaughtError && (a = t.onUncaughtError), void 0 !== t.onCaughtError && (i = t.onCaughtError), void 0 !== t.onRecoverableError && (l = t.onRecoverableError)), t = pf(e, 1, !1, null, 0, n, r, null, a, i, l, Yf), e[He] = t.current, ed(e), new Kf(t)
                }, t.hydrateRoot = function(e, t, n) {
                    if (!s(e)) throw Error(o(299));
                    var r = !1,
                        a = "",
                        i = Ts,
                        l = Cs,
                        u = Ps,
                        c = null;
                    return null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (r = !0), void 0 !== n.identifierPrefix && (a = n.identifierPrefix), void 0 !== n.onUncaughtError && (i = n.onUncaughtError), void 0 !== n.onCaughtError && (l = n.onCaughtError), void 0 !== n.onRecoverableError && (u = n.onRecoverableError), void 0 !== n.formState && (c = n.formState)), (t = pf(e, 1, !0, t, 0, r, a, c, i, l, u, Yf)).context = mf(null), n = t.current, (a = bi(r = Le(r = Yu()))).callback = null, xi(n, a, r), n = r, t.current.lanes = n, Fe(t, n), Lc(t), e[He] = t.current, ed(e), new Xf(t)
                }, t.version = "19.2.3"
            },
            43(e, t, n) {
                e.exports = n(288)
            },
            288(e, t) {
                var n = Symbol.for("react.transitional.element"),
                    r = Symbol.for("react.portal"),
                    a = Symbol.for("react.fragment"),
                    i = Symbol.for("react.strict_mode"),
                    o = Symbol.for("react.profiler"),
                    s = Symbol.for("react.consumer"),
                    l = Symbol.for("react.context"),
                    u = Symbol.for("react.forward_ref"),
                    c = Symbol.for("react.suspense"),
                    d = Symbol.for("react.memo"),
                    f = Symbol.for("react.lazy"),
                    h = Symbol.for("react.activity"),
                    p = Symbol.iterator;
                var m = {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    },
                    g = Object.assign,
                    v = {};

                function y(e, t, n) {
                    this.props = e, this.context = t, this.refs = v, this.updater = n || m
                }

                function b() {}

                function x(e, t, n) {
                    this.props = e, this.context = t, this.refs = v, this.updater = n || m
                }
                y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
                    if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
                    this.updater.enqueueSetState(this, e, t, "setState")
                }, y.prototype.forceUpdate = function(e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                }, b.prototype = y.prototype;
                var w = x.prototype = new b;
                w.constructor = x, g(w, y.prototype), w.isPureReactComponent = !0;
                var S = Array.isArray;

                function k() {}
                var E = {
                        H: null,
                        A: null,
                        T: null,
                        S: null
                    },
                    T = Object.prototype.hasOwnProperty;

                function C(e, t, r) {
                    var a = r.ref;
                    return {
                        $$typeof: n,
                        type: e,
                        key: t,
                        ref: void 0 !== a ? a : null,
                        props: r
                    }
                }

                function P(e) {
                    return "object" === typeof e && null !== e && e.$$typeof === n
                }
                var N = /\/+/g;

                function R(e, t) {
                    return "object" === typeof e && null !== e && null != e.key ? function(e) {
                        var t = {
                            "=": "=0",
                            ":": "=2"
                        };
                        return "$" + e.replace(/[=:]/g, function(e) {
                            return t[e]
                        })
                    }("" + e.key) : t.toString(36)
                }

                function j(e, t, a, i, o) {
                    var s = typeof e;
                    "undefined" !== s && "boolean" !== s || (e = null);
                    var l, u, c = !1;
                    if (null === e) c = !0;
                    else switch (s) {
                        case "bigint":
                        case "string":
                        case "number":
                            c = !0;
                            break;
                        case "object":
                            switch (e.$$typeof) {
                                case n:
                                case r:
                                    c = !0;
                                    break;
                                case f:
                                    return j((c = e._init)(e._payload), t, a, i, o)
                            }
                    }
                    if (c) return o = o(e), c = "" === i ? "." + R(e, 0) : i, S(o) ? (a = "", null != c && (a = c.replace(N, "$&/") + "/"), j(o, t, a, "", function(e) {
                        return e
                    })) : null != o && (P(o) && (l = o, u = a + (null == o.key || e && e.key === o.key ? "" : ("" + o.key).replace(N, "$&/") + "/") + c, o = C(l.type, u, l.props)), t.push(o)), 1;
                    c = 0;
                    var d, h = "" === i ? "." : i + ":";
                    if (S(e))
                        for (var m = 0; m < e.length; m++) c += j(i = e[m], t, a, s = h + R(i, m), o);
                    else if ("function" === typeof(m = null === (d = e) || "object" !== typeof d ? null : "function" === typeof(d = p && d[p] || d["@@iterator"]) ? d : null))
                        for (e = m.call(e), m = 0; !(i = e.next()).done;) c += j(i = i.value, t, a, s = h + R(i, m++), o);
                    else if ("object" === s) {
                        if ("function" === typeof e.then) return j(function(e) {
                            switch (e.status) {
                                case "fulfilled":
                                    return e.value;
                                case "rejected":
                                    throw e.reason;
                                default:
                                    switch ("string" === typeof e.status ? e.then(k, k) : (e.status = "pending", e.then(function(t) {
                                        "pending" === e.status && (e.status = "fulfilled", e.value = t)
                                    }, function(t) {
                                        "pending" === e.status && (e.status = "rejected", e.reason = t)
                                    })), e.status) {
                                        case "fulfilled":
                                            return e.value;
                                        case "rejected":
                                            throw e.reason
                                    }
                            }
                            throw e
                        }(e), t, a, i, o);
                        throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.")
                    }
                    return c
                }

                function A(e, t, n) {
                    if (null == e) return e;
                    var r = [],
                        a = 0;
                    return j(e, r, "", "", function(e) {
                        return t.call(n, e, a++)
                    }), r
                }

                function F(e) {
                    if (-1 === e._status) {
                        var t = e._result;
                        (t = t()).then(function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                        }, function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                        }), -1 === e._status && (e._status = 0, e._result = t)
                    }
                    if (1 === e._status) return e._result.default;
                    throw e._result
                }
                var O = "function" === typeof reportError ? reportError : function(e) {
                        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
                            var t = new window.ErrorEvent("error", {
                                bubbles: !0,
                                cancelable: !0,
                                message: "object" === typeof e && null !== e && "string" === typeof e.message ? String(e.message) : String(e),
                                error: e
                            });
                            if (!window.dispatchEvent(t)) return
                        } else if ("object" === typeof process && "function" === typeof process.emit) return void process.emit("uncaughtException", e);
                        console.error(e)
                    },
                    D = {
                        map: A,
                        forEach: function(e, t, n) {
                            A(e, function() {
                                t.apply(this, arguments)
                            }, n)
                        },
                        count: function(e) {
                            var t = 0;
                            return A(e, function() {
                                t++
                            }), t
                        },
                        toArray: function(e) {
                            return A(e, function(e) {
                                return e
                            }) || []
                        },
                        only: function(e) {
                            if (!P(e)) throw Error("React.Children.only expected to receive a single React element child.");
                            return e
                        }
                    };
                t.Activity = h, t.Children = D, t.Component = y, t.Fragment = a, t.Profiler = o, t.PureComponent = x, t.StrictMode = i, t.Suspense = c, t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = E, t.__COMPILER_RUNTIME = {
                    __proto__: null,
                    c: function(e) {
                        return E.H.useMemoCache(e)
                    }
                }, t.cache = function(e) {
                    return function() {
                        return e.apply(null, arguments)
                    }
                }, t.cacheSignal = function() {
                    return null
                }, t.cloneElement = function(e, t, n) {
                    if (null === e || void 0 === e) throw Error("The argument must be a React element, but you passed " + e + ".");
                    var r = g({}, e.props),
                        a = e.key;
                    if (null != t)
                        for (i in void 0 !== t.key && (a = "" + t.key), t) !T.call(t, i) || "key" === i || "__self" === i || "__source" === i || "ref" === i && void 0 === t.ref || (r[i] = t[i]);
                    var i = arguments.length - 2;
                    if (1 === i) r.children = n;
                    else if (1 < i) {
                        for (var o = Array(i), s = 0; s < i; s++) o[s] = arguments[s + 2];
                        r.children = o
                    }
                    return C(e.type, a, r)
                }, t.createContext = function(e) {
                    return (e = {
                        $$typeof: l,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null
                    }).Provider = e, e.Consumer = {
                        $$typeof: s,
                        _context: e
                    }, e
                }, t.createElement = function(e, t, n) {
                    var r, a = {},
                        i = null;
                    if (null != t)
                        for (r in void 0 !== t.key && (i = "" + t.key), t) T.call(t, r) && "key" !== r && "__self" !== r && "__source" !== r && (a[r] = t[r]);
                    var o = arguments.length - 2;
                    if (1 === o) a.children = n;
                    else if (1 < o) {
                        for (var s = Array(o), l = 0; l < o; l++) s[l] = arguments[l + 2];
                        a.children = s
                    }
                    if (e && e.defaultProps)
                        for (r in o = e.defaultProps) void 0 === a[r] && (a[r] = o[r]);
                    return C(e, i, a)
                }, t.createRef = function() {
                    return {
                        current: null
                    }
                }, t.forwardRef = function(e) {
                    return {
                        $$typeof: u,
                        render: e
                    }
                }, t.isValidElement = P, t.lazy = function(e) {
                    return {
                        $$typeof: f,
                        _payload: {
                            _status: -1,
                            _result: e
                        },
                        _init: F
                    }
                }, t.memo = function(e, t) {
                    return {
                        $$typeof: d,
                        type: e,
                        compare: void 0 === t ? null : t
                    }
                }, t.startTransition = function(e) {
                    var t = E.T,
                        n = {};
                    E.T = n;
                    try {
                        var r = e(),
                            a = E.S;
                        null !== a && a(n, r), "object" === typeof r && null !== r && "function" === typeof r.then && r.then(k, O)
                    } catch (i) {
                        O(i)
                    } finally {
                        null !== t && null !== n.types && (t.types = n.types), E.T = t
                    }
                }, t.unstable_useCacheRefresh = function() {
                    return E.H.useCacheRefresh()
                }, t.use = function(e) {
                    return E.H.use(e)
                }, t.useActionState = function(e, t, n) {
                    return E.H.useActionState(e, t, n)
                }, t.useCallback = function(e, t) {
                    return E.H.useCallback(e, t)
                }, t.useContext = function(e) {
                    return E.H.useContext(e)
                }, t.useDebugValue = function() {}, t.useDeferredValue = function(e, t) {
                    return E.H.useDeferredValue(e, t)
                }, t.useEffect = function(e, t) {
                    return E.H.useEffect(e, t)
                }, t.useEffectEvent = function(e) {
                    return E.H.useEffectEvent(e)
                }, t.useId = function() {
                    return E.H.useId()
                }, t.useImperativeHandle = function(e, t, n) {
                    return E.H.useImperativeHandle(e, t, n)
                }, t.useInsertionEffect = function(e, t) {
                    return E.H.useInsertionEffect(e, t)
                }, t.useLayoutEffect = function(e, t) {
                    return E.H.useLayoutEffect(e, t)
                }, t.useMemo = function(e, t) {
                    return E.H.useMemo(e, t)
                }, t.useOptimistic = function(e, t) {
                    return E.H.useOptimistic(e, t)
                }, t.useReducer = function(e, t, n) {
                    return E.H.useReducer(e, t, n)
                }, t.useRef = function(e) {
                    return E.H.useRef(e)
                }, t.useState = function(e) {
                    return E.H.useState(e)
                }, t.useSyncExternalStore = function(e, t, n) {
                    return E.H.useSyncExternalStore(e, t, n)
                }, t.useTransition = function() {
                    return E.H.useTransition()
                }, t.version = "19.2.3"
            },
            391(e, t, n) {
                ! function e() {
                    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (t) {
                        console.error(t)
                    }
                }(), e.exports = n(4)
            },
            579(e, t, n) {
                e.exports = n(799)
            },
            672(e, t, n) {
                var r = n(43);

                function a(e) {
                    var t = "https://react.dev/errors/" + e;
                    if (1 < arguments.length) {
                        t += "?args[]=" + encodeURIComponent(arguments[1]);
                        for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n])
                    }
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }

                function i() {}
                var o = {
                        d: {
                            f: i,
                            r: function() {
                                throw Error(a(522))
                            },
                            D: i,
                            C: i,
                            L: i,
                            m: i,
                            X: i,
                            S: i,
                            M: i
                        },
                        p: 0,
                        findDOMNode: null
                    },
                    s = Symbol.for("react.portal");
                var l = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

                function u(e, t) {
                    return "font" === e ? "" : "string" === typeof t ? "use-credentials" === t ? t : "" : void 0
                }
                t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, t.createPortal = function(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType) throw Error(a(299));
                    return function(e, t, n) {
                        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                        return {
                            $$typeof: s,
                            key: null == r ? null : "" + r,
                            children: e,
                            containerInfo: t,
                            implementation: n
                        }
                    }(e, t, null, n)
                }, t.flushSync = function(e) {
                    var t = l.T,
                        n = o.p;
                    try {
                        if (l.T = null, o.p = 2, e) return e()
                    } finally {
                        l.T = t, o.p = n, o.d.f()
                    }
                }, t.preconnect = function(e, t) {
                    "string" === typeof e && (t ? t = "string" === typeof(t = t.crossOrigin) ? "use-credentials" === t ? t : "" : void 0 : t = null, o.d.C(e, t))
                }, t.prefetchDNS = function(e) {
                    "string" === typeof e && o.d.D(e)
                }, t.preinit = function(e, t) {
                    if ("string" === typeof e && t && "string" === typeof t.as) {
                        var n = t.as,
                            r = u(n, t.crossOrigin),
                            a = "string" === typeof t.integrity ? t.integrity : void 0,
                            i = "string" === typeof t.fetchPriority ? t.fetchPriority : void 0;
                        "style" === n ? o.d.S(e, "string" === typeof t.precedence ? t.precedence : void 0, {
                            crossOrigin: r,
                            integrity: a,
                            fetchPriority: i
                        }) : "script" === n && o.d.X(e, {
                            crossOrigin: r,
                            integrity: a,
                            fetchPriority: i,
                            nonce: "string" === typeof t.nonce ? t.nonce : void 0
                        })
                    }
                }, t.preinitModule = function(e, t) {
                    if ("string" === typeof e)
                        if ("object" === typeof t && null !== t) {
                            if (null == t.as || "script" === t.as) {
                                var n = u(t.as, t.crossOrigin);
                                o.d.M(e, {
                                    crossOrigin: n,
                                    integrity: "string" === typeof t.integrity ? t.integrity : void 0,
                                    nonce: "string" === typeof t.nonce ? t.nonce : void 0
                                })
                            }
                        } else null == t && o.d.M(e)
                }, t.preload = function(e, t) {
                    if ("string" === typeof e && "object" === typeof t && null !== t && "string" === typeof t.as) {
                        var n = t.as,
                            r = u(n, t.crossOrigin);
                        o.d.L(e, n, {
                            crossOrigin: r,
                            integrity: "string" === typeof t.integrity ? t.integrity : void 0,
                            nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                            type: "string" === typeof t.type ? t.type : void 0,
                            fetchPriority: "string" === typeof t.fetchPriority ? t.fetchPriority : void 0,
                            referrerPolicy: "string" === typeof t.referrerPolicy ? t.referrerPolicy : void 0,
                            imageSrcSet: "string" === typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                            imageSizes: "string" === typeof t.imageSizes ? t.imageSizes : void 0,
                            media: "string" === typeof t.media ? t.media : void 0
                        })
                    }
                }, t.preloadModule = function(e, t) {
                    if ("string" === typeof e)
                        if (t) {
                            var n = u(t.as, t.crossOrigin);
                            o.d.m(e, {
                                as: "string" === typeof t.as && "script" !== t.as ? t.as : void 0,
                                crossOrigin: n,
                                integrity: "string" === typeof t.integrity ? t.integrity : void 0
                            })
                        } else o.d.m(e)
                }, t.requestFormReset = function(e) {
                    o.d.r(e)
                }, t.unstable_batchedUpdates = function(e, t) {
                    return e(t)
                }, t.useFormState = function(e, t, n) {
                    return l.H.useFormState(e, t, n)
                }, t.useFormStatus = function() {
                    return l.H.useHostTransitionStatus()
                }, t.version = "19.2.3"
            },
            799(e, t) {
                var n = Symbol.for("react.transitional.element");

                function r(e, t, r) {
                    var a = null;
                    if (void 0 !== r && (a = "" + r), void 0 !== t.key && (a = "" + t.key), "key" in t)
                        for (var i in r = {}, t) "key" !== i && (r[i] = t[i]);
                    else r = t;
                    return t = r.ref, {
                        $$typeof: n,
                        type: e,
                        key: a,
                        ref: void 0 !== t ? t : null,
                        props: r
                    }
                }
                Symbol.for("react.fragment"), t.jsx = r, t.jsxs = r
            },
            853(e, t, n) {
                e.exports = n(896)
            },
            896(e, t) {
                function n(e, t) {
                    var n = e.length;
                    e.push(t);
                    e: for (; 0 < n;) {
                        var r = n - 1 >>> 1,
                            a = e[r];
                        if (!(0 < i(a, t))) break e;
                        e[r] = t, e[n] = a, n = r
                    }
                }

                function r(e) {
                    return 0 === e.length ? null : e[0]
                }

                function a(e) {
                    if (0 === e.length) return null;
                    var t = e[0],
                        n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
                            var s = 2 * (r + 1) - 1,
                                l = e[s],
                                u = s + 1,
                                c = e[u];
                            if (0 > i(l, n)) u < a && 0 > i(c, l) ? (e[r] = c, e[u] = n, r = u) : (e[r] = l, e[s] = n, r = s);
                            else {
                                if (!(u < a && 0 > i(c, n))) break e;
                                e[r] = c, e[u] = n, r = u
                            }
                        }
                    }
                    return t
                }

                function i(e, t) {
                    var n = e.sortIndex - t.sortIndex;
                    return 0 !== n ? n : e.id - t.id
                }
                if (t.unstable_now = void 0, "object" === typeof performance && "function" === typeof performance.now) {
                    var o = performance;
                    t.unstable_now = function() {
                        return o.now()
                    }
                } else {
                    var s = Date,
                        l = s.now();
                    t.unstable_now = function() {
                        return s.now() - l
                    }
                }
                var u = [],
                    c = [],
                    d = 1,
                    f = null,
                    h = 3,
                    p = !1,
                    m = !1,
                    g = !1,
                    v = !1,
                    y = "function" === typeof setTimeout ? setTimeout : null,
                    b = "function" === typeof clearTimeout ? clearTimeout : null,
                    x = "undefined" !== typeof setImmediate ? setImmediate : null;

                function w(e) {
                    for (var t = r(c); null !== t;) {
                        if (null === t.callback) a(c);
                        else {
                            if (!(t.startTime <= e)) break;
                            a(c), t.sortIndex = t.expirationTime, n(u, t)
                        }
                        t = r(c)
                    }
                }

                function S(e) {
                    if (g = !1, w(e), !m)
                        if (null !== r(u)) m = !0, E || (E = !0, k());
                        else {
                            var t = r(c);
                            null !== t && F(S, t.startTime - e)
                        }
                }
                var k, E = !1,
                    T = -1,
                    C = 5,
                    P = -1;

                function N() {
                    return !!v || !(t.unstable_now() - P < C)
                }

                function R() {
                    if (v = !1, E) {
                        var e = t.unstable_now();
                        P = e;
                        var n = !0;
                        try {
                            e: {
                                m = !1,
                                g && (g = !1, b(T), T = -1),
                                p = !0;
                                var i = h;
                                try {
                                    t: {
                                        for (w(e), f = r(u); null !== f && !(f.expirationTime > e && N());) {
                                            var o = f.callback;
                                            if ("function" === typeof o) {
                                                f.callback = null, h = f.priorityLevel;
                                                var s = o(f.expirationTime <= e);
                                                if (e = t.unstable_now(), "function" === typeof s) {
                                                    f.callback = s, w(e), n = !0;
                                                    break t
                                                }
                                                f === r(u) && a(u), w(e)
                                            } else a(u);
                                            f = r(u)
                                        }
                                        if (null !== f) n = !0;
                                        else {
                                            var l = r(c);
                                            null !== l && F(S, l.startTime - e), n = !1
                                        }
                                    }
                                    break e
                                }
                                finally {
                                    f = null, h = i, p = !1
                                }
                                n = void 0
                            }
                        }
                        finally {
                            n ? k() : E = !1
                        }
                    }
                }
                if ("function" === typeof x) k = function() {
                    x(R)
                };
                else if ("undefined" !== typeof MessageChannel) {
                    var j = new MessageChannel,
                        A = j.port2;
                    j.port1.onmessage = R, k = function() {
                        A.postMessage(null)
                    }
                } else k = function() {
                    y(R, 0)
                };

                function F(e, n) {
                    T = y(function() {
                        e(t.unstable_now())
                    }, n)
                }
                t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                    e.callback = null
                }, t.unstable_forceFrameRate = function(e) {
                    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : C = 0 < e ? Math.floor(1e3 / e) : 5
                }, t.unstable_getCurrentPriorityLevel = function() {
                    return h
                }, t.unstable_next = function(e) {
                    switch (h) {
                        case 1:
                        case 2:
                        case 3:
                            var t = 3;
                            break;
                        default:
                            t = h
                    }
                    var n = h;
                    h = t;
                    try {
                        return e()
                    } finally {
                        h = n
                    }
                }, t.unstable_requestPaint = function() {
                    v = !0
                }, t.unstable_runWithPriority = function(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3
                    }
                    var n = h;
                    h = e;
                    try {
                        return t()
                    } finally {
                        h = n
                    }
                }, t.unstable_scheduleCallback = function(e, a, i) {
                    var o = t.unstable_now();
                    switch ("object" === typeof i && null !== i ? i = "number" === typeof(i = i.delay) && 0 < i ? o + i : o : i = o, e) {
                        case 1:
                            var s = -1;
                            break;
                        case 2:
                            s = 250;
                            break;
                        case 5:
                            s = 1073741823;
                            break;
                        case 4:
                            s = 1e4;
                            break;
                        default:
                            s = 5e3
                    }
                    return e = {
                        id: d++,
                        callback: a,
                        priorityLevel: e,
                        startTime: i,
                        expirationTime: s = i + s,
                        sortIndex: -1
                    }, i > o ? (e.sortIndex = i, n(c, e), null === r(u) && e === r(c) && (g ? (b(T), T = -1) : g = !0, F(S, i - o))) : (e.sortIndex = s, n(u, e), m || p || (m = !0, E || (E = !0, k()))), e
                }, t.unstable_shouldYield = N, t.unstable_wrapCallback = function(e) {
                    var t = h;
                    return function() {
                        var n = h;
                        h = t;
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            h = n
                        }
                    }
                }
            },
            950(e, t, n) {
                ! function e() {
                    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (t) {
                        console.error(t)
                    }
                }(), e.exports = n(672)
            }
        },
        t = {};

    function n(r) {
        var a = t[r];
        if (void 0 !== a) return a.exports;
        var i = t[r] = {
            exports: {}
        };
        return e[r](i, i.exports, n), i.exports
    }(() => {
        var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
        n.t = function(r, a) {
            if (1 & a && (r = this(r)), 8 & a) return r;
            if ("object" === typeof r && r) {
                if (4 & a && r.__esModule) return r;
                if (16 & a && "function" === typeof r.then) return r
            }
            var i = Object.create(null);
            n.r(i);
            var o = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var s = 2 & a && r;
                ("object" == typeof s || "function" == typeof s) && !~e.indexOf(s); s = t(s)) Object.getOwnPropertyNames(s).forEach(e => o[e] = () => r[e]);
            return o.default = () => r, n.d(i, o), i
        }
    })(), n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, n.g = function() {
        if ("object" === typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" === typeof window) return window
        }
    }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    var r = {};
    n.r(r), n.d(r, {
        hasBrowserEnv: () => Ef,
        hasStandardBrowserEnv: () => Cf,
        hasStandardBrowserWebWorkerEnv: () => Pf,
        navigator: () => Tf,
        origin: () => Nf
    });
    var a = n(43),
        i = n.t(a, 2),
        o = n(391);

    function s(e, t) {
        if (null == e) return {};
        var n, r, a = function(e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
                if ({}.hasOwnProperty.call(e, r)) {
                    if (-1 !== t.indexOf(r)) continue;
                    n[r] = e[r]
                }
            return n
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) n = i[r], -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
    }

    function l(e) {
        return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, l(e)
    }

    function u(e) {
        var t = function(e, t) {
            if ("object" != l(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != l(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == l(t) ? t : t + ""
    }

    function c(e, t, n) {
        return (t = u(t)) in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function f(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? d(Object(n), !0).forEach(function(t) {
                c(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    const h = ["sri"],
        p = ["page"],
        m = ["page", "matches"],
        g = ["onClick", "discover", "prefetch", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition", "unstable_defaultShouldRevalidate"],
        v = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"],
        y = ["discover", "fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition", "unstable_defaultShouldRevalidate"];
    var b = "popstate";

    function x() {
        return P(function(e, t) {
            let {
                pathname: n,
                search: r,
                hash: a
            } = e.location;
            return E("", {
                pathname: n,
                search: r,
                hash: a
            }, t.state && t.state.usr || null, t.state && t.state.key || "default")
        }, function(e, t) {
            return "string" === typeof t ? t : T(t)
        }, null, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
    }

    function w(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t)
    }

    function S(e, t) {
        if (!e) {
            "undefined" !== typeof console && console.warn(t);
            try {
                throw new Error(t)
            } catch (n) {}
        }
    }

    function k(e, t) {
        return {
            usr: e.state,
            key: e.key,
            idx: t
        }
    }

    function E(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            r = arguments.length > 3 ? arguments[3] : void 0;
        return f(f({
            pathname: "string" === typeof e ? e : e.pathname,
            search: "",
            hash: ""
        }, "string" === typeof t ? C(t) : t), {}, {
            state: n,
            key: t && t.key || r || Math.random().toString(36).substring(2, 10)
        })
    }

    function T(e) {
        let {
            pathname: t = "/",
            search: n = "",
            hash: r = ""
        } = e;
        return n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r), t
    }

    function C(e) {
        let t = {};
        if (e) {
            let n = e.indexOf("#");
            n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
            let r = e.indexOf("?");
            r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e)
        }
        return t
    }

    function P(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            {
                window: a = document.defaultView,
                v5Compat: i = !1
            } = r,
            o = a.history,
            s = "POP",
            l = null,
            u = c();

        function c() {
            return (o.state || {
                idx: null
            }).idx
        }

        function d() {
            s = "POP";
            let e = c(),
                t = null == e ? null : e - u;
            u = e, l && l({
                action: s,
                location: p.location,
                delta: t
            })
        }

        function h(e) {
            return N(e)
        }
        null == u && (u = 0, o.replaceState(f(f({}, o.state), {}, {
            idx: u
        }), ""));
        let p = {
            get action() {
                return s
            },
            get location() {
                return e(a, o)
            },
            listen(e) {
                if (l) throw new Error("A history only accepts one active listener");
                return a.addEventListener(b, d), l = e, () => {
                    a.removeEventListener(b, d), l = null
                }
            },
            createHref: e => t(a, e),
            createURL: h,
            encodeLocation(e) {
                let t = h(e);
                return {
                    pathname: t.pathname,
                    search: t.search,
                    hash: t.hash
                }
            },
            push: function(e, t) {
                s = "PUSH";
                let r = E(p.location, e, t);
                n && n(r, e), u = c() + 1;
                let d = k(r, u),
                    f = p.createHref(r);
                try {
                    o.pushState(d, "", f)
                } catch (h) {
                    if (h instanceof DOMException && "DataCloneError" === h.name) throw h;
                    a.location.assign(f)
                }
                i && l && l({
                    action: s,
                    location: p.location,
                    delta: 1
                })
            },
            replace: function(e, t) {
                s = "REPLACE";
                let r = E(p.location, e, t);
                n && n(r, e), u = c();
                let a = k(r, u),
                    d = p.createHref(r);
                o.replaceState(a, "", d), i && l && l({
                    action: s,
                    location: p.location,
                    delta: 0
                })
            },
            go: e => o.go(e)
        };
        return p
    }

    function N(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = "http://localhost";
        "undefined" !== typeof window && (n = "null" !== window.location.origin ? window.location.origin : window.location.href), w(n, "No window.location.(origin|href) available to create URL");
        let r = "string" === typeof e ? e : T(e);
        return r = r.replace(/ $/, "%20"), !t && r.startsWith("//") && (r = n + r), new URL(r, n)
    }
    new WeakMap;

    function R(e, t) {
        return j(e, t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/", !1)
    }

    function j(e, t, n, r) {
        let a = q(("string" === typeof t ? C(t) : t).pathname || "/", n);
        if (null == a) return null;
        let i = A(e);
        ! function(e) {
            e.sort((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
                let n = e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]);
                return n ? e[e.length - 1] - t[t.length - 1] : 0
            }(e.routesMeta.map(e => e.childrenIndex), t.routesMeta.map(e => e.childrenIndex)))
        }(i);
        let o = null;
        for (let s = 0; null == o && s < i.length; ++s) {
            let e = W(a);
            o = V(i[s], e, r)
        }
        return o
    }

    function A(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
            a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            i = function(e, i) {
                let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a,
                    s = arguments.length > 3 ? arguments[3] : void 0,
                    l = {
                        relativePath: void 0 === s ? e.path || "" : s,
                        caseSensitive: !0 === e.caseSensitive,
                        childrenIndex: i,
                        route: e
                    };
                if (l.relativePath.startsWith("/")) {
                    if (!l.relativePath.startsWith(r) && o) return;
                    w(l.relativePath.startsWith(r), 'Absolute route path "'.concat(l.relativePath, '" nested under path "').concat(r, '" is not valid. An absolute child route path must start with the combined path of all its parent routes.')), l.relativePath = l.relativePath.slice(r.length)
                }
                let u = Z([r, l.relativePath]),
                    c = n.concat(l);
                e.children && e.children.length > 0 && (w(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "'.concat(u, '".')), A(e.children, t, c, u, o)), (null != e.path || e.index) && t.push({
                    path: u,
                    score: B(u, e.index),
                    routesMeta: c
                })
            };
        return e.forEach((e, t) => {
            var n;
            if ("" !== e.path && null !== (n = e.path) && void 0 !== n && n.includes("?"))
                for (let r of F(e.path)) i(e, t, !0, r);
            else i(e, t)
        }), t
    }

    function F(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [n, ...r] = t, a = n.endsWith("?"), i = n.replace(/\?$/, "");
        if (0 === r.length) return a ? [i, ""] : [i];
        let o = F(r.join("/")),
            s = [];
        return s.push(...o.map(e => "" === e ? i : [i, e].join("/"))), a && s.push(...o), s.map(t => e.startsWith("/") && "" === t ? "/" : t)
    }
    var O = /^:[\w-]+$/,
        D = 3,
        M = 2,
        L = 1,
        _ = 10,
        z = -2,
        I = e => "*" === e;

    function B(e, t) {
        let n = e.split("/"),
            r = n.length;
        return n.some(I) && (r += z), t && (r += M), n.filter(e => !I(e)).reduce((e, t) => e + (O.test(t) ? D : "" === t ? L : _), r)
    }

    function V(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            {
                routesMeta: r
            } = e,
            a = {},
            i = "/",
            o = [];
        for (let s = 0; s < r.length; ++s) {
            let e = r[s],
                l = s === r.length - 1,
                u = "/" === i ? t : t.slice(i.length) || "/",
                c = U({
                    path: e.relativePath,
                    caseSensitive: e.caseSensitive,
                    end: l
                }, u),
                d = e.route;
            if (!c && l && n && !r[r.length - 1].route.index && (c = U({
                    path: e.relativePath,
                    caseSensitive: e.caseSensitive,
                    end: !1
                }, u)), !c) return null;
            Object.assign(a, c.params), o.push({
                params: a,
                pathname: Z([i, c.pathname]),
                pathnameBase: ee(Z([i, c.pathnameBase])),
                route: d
            }), "/" !== c.pathnameBase && (i = Z([i, c.pathnameBase]))
        }
        return o
    }

    function U(e, t) {
        "string" === typeof e && (e = {
            path: e,
            caseSensitive: !1,
            end: !0
        });
        let [n, r] = H(e.path, e.caseSensitive, e.end), a = t.match(n);
        if (!a) return null;
        let i = a[0],
            o = i.replace(/(.)\/+$/, "$1"),
            s = a.slice(1);
        return {
            params: r.reduce((e, t, n) => {
                let {
                    paramName: r,
                    isOptional: a
                } = t;
                if ("*" === r) {
                    let e = s[n] || "";
                    o = i.slice(0, i.length - e.length).replace(/(.)\/+$/, "$1")
                }
                const l = s[n];
                return e[r] = a && !l ? void 0 : (l || "").replace(/%2F/g, "/"), e
            }, {}),
            pathname: i,
            pathnameBase: o,
            pattern: e
        }
    }

    function H(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        S("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "'.concat(e, '" will be treated as if it were "').concat(e.replace(/\*$/, "/*"), '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "').concat(e.replace(/\*$/, "/*"), '".'));
        let r = [],
            a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (e, t, n) => (r.push({
                paramName: t,
                isOptional: null != n
            }), n ? "/?([^\\/]+)?" : "/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
        return e.endsWith("*") ? (r.push({
            paramName: "*"
        }), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), r]
    }

    function W(e) {
        try {
            return e.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
        } catch (t) {
            return S(!1, 'The URL path "'.concat(e, '" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (').concat(t, ").")), e
        }
    }

    function q(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith("/") ? t.length - 1 : t.length,
            r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/"
    }
    var $ = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Y = e => $.test(e);

    function K(e, t) {
        let n = t.replace(/\/+$/, "").split("/");
        return e.split("/").forEach(e => {
            ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e)
        }), n.length > 1 ? n.join("/") : "/"
    }

    function X(e, t, n, r) {
        return "Cannot include a '".concat(e, "' character in a manually specified `to.").concat(t, "` field [").concat(JSON.stringify(r), "].  Please separate it out to the `to.").concat(n, '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.')
    }

    function Q(e) {
        return e.filter((e, t) => 0 === t || e.route.path && e.route.path.length > 0)
    }

    function G(e) {
        let t = Q(e);
        return t.map((e, n) => n === t.length - 1 ? e.pathname : e.pathnameBase)
    }

    function J(e, t, n) {
        let r, a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        "string" === typeof e ? r = C(e) : (r = f({}, e), w(!r.pathname || !r.pathname.includes("?"), X("?", "pathname", "search", r)), w(!r.pathname || !r.pathname.includes("#"), X("#", "pathname", "hash", r)), w(!r.search || !r.search.includes("#"), X("#", "search", "hash", r)));
        let i, o = "" === e || "" === r.pathname,
            s = o ? "/" : r.pathname;
        if (null == s) i = n;
        else {
            let e = t.length - 1;
            if (!a && s.startsWith("..")) {
                let t = s.split("/");
                for (;
                    ".." === t[0];) t.shift(), e -= 1;
                r.pathname = t.join("/")
            }
            i = e >= 0 ? t[e] : "/"
        }
        let l = function(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/",
                    {
                        pathname: r,
                        search: a = "",
                        hash: i = ""
                    } = "string" === typeof e ? C(e) : e;
                if (r)
                    if (Y(r)) t = r;
                    else {
                        if (r.includes("//")) {
                            let e = r;
                            r = r.replace(/\/\/+/g, "/"), S(!1, "Pathnames cannot have embedded double slashes - normalizing ".concat(e, " -> ").concat(r))
                        }
                        t = r.startsWith("/") ? K(r.substring(1), "/") : K(r, n)
                    }
                else t = n;
                return {
                    pathname: t,
                    search: te(a),
                    hash: ne(i)
                }
            }(r, i),
            u = s && "/" !== s && s.endsWith("/"),
            c = (o || "." === s) && n.endsWith("/");
        return l.pathname.endsWith("/") || !u && !c || (l.pathname += "/"), l
    }
    var Z = e => e.join("/").replace(/\/\/+/g, "/"),
        ee = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        te = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
        ne = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "";
    var re = class {
        constructor(e, t, n) {
            let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n
        }
    };

    function ae(e) {
        return null != e && "number" === typeof e.status && "string" === typeof e.statusText && "boolean" === typeof e.internal && "data" in e
    }

    function ie(e) {
        return e.map(e => e.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/"
    }
    var oe = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement;

    function se(e, t) {
        let n = e;
        if ("string" !== typeof n || !$.test(n)) return {
            absoluteURL: void 0,
            isExternal: !1,
            to: n
        };
        let r = n,
            a = !1;
        if (oe) try {
            let e = new URL(window.location.href),
                r = n.startsWith("//") ? new URL(e.protocol + n) : new URL(n),
                i = q(r.pathname, t);
            r.origin === e.origin && null != i ? n = i + r.search + r.hash : a = !0
        } catch (i) {
            S(!1, '<Link to="'.concat(n, '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.'))
        }
        return {
            absoluteURL: r,
            isExternal: a,
            to: n
        }
    }
    Symbol("Uninstrumented");
    Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
    var le = ["POST", "PUT", "PATCH", "DELETE"],
        ue = (new Set(le), ["GET", ...le]);
    new Set(ue), Symbol("ResetLoaderData");
    var ce = a.createContext(null);
    ce.displayName = "DataRouter";
    var de = a.createContext(null);
    de.displayName = "DataRouterState";
    var fe = a.createContext(!1);

    function he() {
        return a.useContext(fe)
    }
    var pe = a.createContext({
        isTransitioning: !1
    });
    pe.displayName = "ViewTransition";
    var me = a.createContext(new Map);
    me.displayName = "Fetchers";
    var ge = a.createContext(null);
    ge.displayName = "Await";
    var ve = a.createContext(null);
    ve.displayName = "Navigation";
    var ye = a.createContext(null);
    ye.displayName = "Location";
    var be = a.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    });
    be.displayName = "Route";
    var xe = a.createContext(null);
    xe.displayName = "RouteError";
    var we = "REACT_ROUTER_ERROR";

    function Se() {
        return null != a.useContext(ye)
    }

    function ke() {
        return w(Se(), "useLocation() may be used only in the context of a <Router> component."), a.useContext(ye).location
    }
    var Ee = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";

    function Te(e) {
        a.useContext(ve).static || a.useLayoutEffect(e)
    }

    function Ce() {
        let {
            isDataRoute: e
        } = a.useContext(be);
        return e ? function() {
            let {
                router: e
            } = _e("useNavigate"), t = Ie("useNavigate"), n = a.useRef(!1);
            Te(() => {
                n.current = !0
            });
            let r = a.useCallback(async function(r) {
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                S(n.current, Ee), n.current && ("number" === typeof r ? await e.navigate(r) : await e.navigate(r, f({
                    fromRouteId: t
                }, a)))
            }, [e, t]);
            return r
        }() : function() {
            w(Se(), "useNavigate() may be used only in the context of a <Router> component.");
            let e = a.useContext(ce),
                {
                    basename: t,
                    navigator: n
                } = a.useContext(ve),
                {
                    matches: r
                } = a.useContext(be),
                {
                    pathname: i
                } = ke(),
                o = JSON.stringify(G(r)),
                s = a.useRef(!1);
            Te(() => {
                s.current = !0
            });
            let l = a.useCallback(function(r) {
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (S(s.current, Ee), !s.current) return;
                if ("number" === typeof r) return void n.go(r);
                let l = J(r, JSON.parse(o), i, "path" === a.relative);
                null == e && "/" !== t && (l.pathname = "/" === l.pathname ? t : Z([t, l.pathname])), (a.replace ? n.replace : n.push)(l, a.state, a)
            }, [t, n, o, i, e]);
            return l
        }()
    }
    a.createContext(null);

    function Pe(e) {
        let {
            relative: t
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
            matches: n
        } = a.useContext(be), {
            pathname: r
        } = ke(), i = JSON.stringify(G(n));
        return a.useMemo(() => J(e, JSON.parse(i), r, "path" === t), [e, i, r, t])
    }

    function Ne(e, t, n, r, i) {
        w(Se(), "useRoutes() may be used only in the context of a <Router> component.");
        let {
            navigator: o
        } = a.useContext(ve), {
            matches: s
        } = a.useContext(be), l = s[s.length - 1], u = l ? l.params : {}, c = l ? l.pathname : "/", d = l ? l.pathnameBase : "/", h = l && l.route; {
            let e = h && h.path || "";
            Ue(c, !h || e.endsWith("*") || e.endsWith("*?"), 'You rendered descendant <Routes> (or called `useRoutes()`) at "'.concat(c, '" (under <Route path="').concat(e, '">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won\'t match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="').concat(e, '"> to <Route path="').concat("/" === e ? "*" : "".concat(e, "/*"), '">.'))
        }
        let p, m = ke();
        if (t) {
            var g;
            let e = "string" === typeof t ? C(t) : t;
            w("/" === d || (null === (g = e.pathname) || void 0 === g ? void 0 : g.startsWith(d)), 'When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "'.concat(d, '" but pathname "').concat(e.pathname, '" was given in the `location` prop.')), p = e
        } else p = m;
        let v = p.pathname || "/",
            y = v;
        if ("/" !== d) {
            let e = d.replace(/^\//, "").split("/");
            y = "/" + v.replace(/^\//, "").split("/").slice(e.length).join("/")
        }
        let b = R(e, {
            pathname: y
        });
        S(h || null != b, 'No routes matched location "'.concat(p.pathname).concat(p.search).concat(p.hash, '" ')), S(null == b || void 0 !== b[b.length - 1].route.element || void 0 !== b[b.length - 1].route.Component || void 0 !== b[b.length - 1].route.lazy, 'Matched leaf route at location "'.concat(p.pathname).concat(p.search).concat(p.hash, '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'));
        let x = Me(b && b.map(e => Object.assign({}, e, {
            params: Object.assign({}, u, e.params),
            pathname: Z([d, o.encodeLocation ? o.encodeLocation(e.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathname]),
            pathnameBase: "/" === e.pathnameBase ? d : Z([d, o.encodeLocation ? o.encodeLocation(e.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathnameBase])
        })), s, n, r, i);
        return t && x ? a.createElement(ye.Provider, {
            value: {
                location: f({
                    pathname: "/",
                    search: "",
                    hash: "",
                    state: null,
                    key: "default"
                }, p),
                navigationType: "POP"
            }
        }, x) : x
    }

    function Re() {
        let e = Be(),
            t = ae(e) ? "".concat(e.status, " ").concat(e.statusText) : e instanceof Error ? e.message : JSON.stringify(e),
            n = e instanceof Error ? e.stack : null,
            r = "rgba(200,200,200, 0.5)",
            i = {
                padding: "0.5rem",
                backgroundColor: r
            },
            o = {
                padding: "2px 4px",
                backgroundColor: r
            },
            s = null;
        return console.error("Error handled by React Router default ErrorBoundary:", e), s = a.createElement(a.Fragment, null, a.createElement("p", null, "\ud83d\udcbf Hey developer \ud83d\udc4b"), a.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", a.createElement("code", {
            style: o
        }, "ErrorBoundary"), " or", " ", a.createElement("code", {
            style: o
        }, "errorElement"), " prop on your route.")), a.createElement(a.Fragment, null, a.createElement("h2", null, "Unexpected Application Error!"), a.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, t), n ? a.createElement("pre", {
            style: i
        }, n) : null, s)
    }
    var je = a.createElement(Re, null),
        Ae = class extends a.Component {
            constructor(e) {
                super(e), this.state = {
                    location: e.location,
                    revalidation: e.revalidation,
                    error: e.error
                }
            }
            static getDerivedStateFromError(e) {
                return {
                    error: e
                }
            }
            static getDerivedStateFromProps(e, t) {
                return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? {
                    error: e.error,
                    location: e.location,
                    revalidation: e.revalidation
                } : {
                    error: void 0 !== e.error ? e.error : t.error,
                    location: t.location,
                    revalidation: e.revalidation || t.revalidation
                }
            }
            componentDidCatch(e, t) {
                this.props.onError ? this.props.onError(e, t) : console.error("React Router caught the following error during render", e)
            }
            render() {
                let e = this.state.error;
                if (this.context && "object" === typeof e && e && "digest" in e && "string" === typeof e.digest) {
                    const t = function(e) {
                        if (e.startsWith("".concat(we, ":").concat("ROUTE_ERROR_RESPONSE", ":{"))) try {
                            let t = JSON.parse(e.slice(40));
                            if ("object" === typeof t && t && "number" === typeof t.status && "string" === typeof t.statusText) return new re(t.status, t.statusText, t.data)
                        } catch (t) {}
                    }(e.digest);
                    t && (e = t)
                }
                let t = void 0 !== e ? a.createElement(be.Provider, {
                    value: this.props.routeContext
                }, a.createElement(xe.Provider, {
                    value: e,
                    children: this.props.component
                })) : this.props.children;
                return this.context ? a.createElement(Oe, {
                    error: e
                }, t) : t
            }
        };
    Ae.contextType = fe;
    var Fe = new WeakMap;

    function Oe(e) {
        let {
            children: t,
            error: n
        } = e, {
            basename: r
        } = a.useContext(ve);
        if ("object" === typeof n && n && "digest" in n && "string" === typeof n.digest) {
            let e = function(e) {
                if (e.startsWith("".concat(we, ":").concat("REDIRECT", ":{"))) try {
                    let t = JSON.parse(e.slice(28));
                    if ("object" === typeof t && t && "number" === typeof t.status && "string" === typeof t.statusText && "string" === typeof t.location && "boolean" === typeof t.reloadDocument && "boolean" === typeof t.replace) return t
                } catch (t) {}
            }(n.digest);
            if (e) {
                let t = Fe.get(n);
                if (t) throw t;
                let i = se(e.location, r);
                if (oe && !Fe.get(n)) {
                    if (!i.isExternal && !e.reloadDocument) {
                        const t = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(i.to, {
                            replace: e.replace
                        }));
                        throw Fe.set(n, t), t
                    }
                    window.location.href = i.absoluteURL || i.to
                }
                return a.createElement("meta", {
                    httpEquiv: "refresh",
                    content: "0;url=".concat(i.absoluteURL || i.to)
                })
            }
        }
        return t
    }

    function De(e) {
        let {
            routeContext: t,
            match: n,
            children: r
        } = e, i = a.useContext(ce);
        return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), a.createElement(be.Provider, {
            value: t
        }, r)
    }

    function Me(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (null == e) {
            if (!n) return null;
            if (n.errors) e = n.matches;
            else {
                if (0 !== t.length || n.initialized || !(n.matches.length > 0)) return null;
                e = n.matches
            }
        }
        let i = e,
            o = null === n || void 0 === n ? void 0 : n.errors;
        if (null != o) {
            let e = i.findIndex(e => e.route.id && void 0 !== (null === o || void 0 === o ? void 0 : o[e.route.id]));
            w(e >= 0, "Could not find a matching route for errors on route IDs: ".concat(Object.keys(o).join(","))), i = i.slice(0, Math.min(i.length, e + 1))
        }
        let s = !1,
            l = -1;
        if (n)
            for (let a = 0; a < i.length; a++) {
                let e = i[a];
                if ((e.route.HydrateFallback || e.route.hydrateFallbackElement) && (l = a), e.route.id) {
                    let {
                        loaderData: t,
                        errors: r
                    } = n, a = e.route.loader && !t.hasOwnProperty(e.route.id) && (!r || void 0 === r[e.route.id]);
                    if (e.route.lazy || a) {
                        s = !0, i = l >= 0 ? i.slice(0, l + 1) : [i[0]];
                        break
                    }
                }
            }
        let u = n && r ? (e, t) => {
            var a, i;
            r(e, {
                location: n.location,
                params: null !== (a = null === (i = n.matches) || void 0 === i || null === (i = i[0]) || void 0 === i ? void 0 : i.params) && void 0 !== a ? a : {},
                unstable_pattern: ie(n.matches),
                errorInfo: t
            })
        } : void 0;
        return i.reduceRight((e, r, c) => {
            let d, f = !1,
                h = null,
                p = null;
            n && (d = o && r.route.id ? o[r.route.id] : void 0, h = r.route.errorElement || je, s && (l < 0 && 0 === c ? (Ue("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), f = !0, p = null) : l === c && (f = !0, p = r.route.hydrateFallbackElement || null)));
            let m = t.concat(i.slice(0, c + 1)),
                g = () => {
                    let t;
                    return t = d ? h : f ? p : r.route.Component ? a.createElement(r.route.Component, null) : r.route.element ? r.route.element : e, a.createElement(De, {
                        match: r,
                        routeContext: {
                            outlet: e,
                            matches: m,
                            isDataRoute: null != n
                        },
                        children: t
                    })
                };
            return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === c) ? a.createElement(Ae, {
                location: n.location,
                revalidation: n.revalidation,
                component: h,
                error: d,
                children: g(),
                routeContext: {
                    outlet: null,
                    matches: m,
                    isDataRoute: !0
                },
                onError: u
            }) : g()
        }, null)
    }

    function Le(e) {
        return "".concat(e, " must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.")
    }

    function _e(e) {
        let t = a.useContext(ce);
        return w(t, Le(e)), t
    }

    function ze(e) {
        let t = a.useContext(de);
        return w(t, Le(e)), t
    }

    function Ie(e) {
        let t = function(e) {
                let t = a.useContext(be);
                return w(t, Le(e)), t
            }(e),
            n = t.matches[t.matches.length - 1];
        return w(n.route.id, "".concat(e, ' can only be used on routes that contain a unique "id"')), n.route.id
    }

    function Be() {
        var e;
        let t = a.useContext(xe),
            n = ze("useRouteError"),
            r = Ie("useRouteError");
        return void 0 !== t ? t : null === (e = n.errors) || void 0 === e ? void 0 : e[r]
    }
    var Ve = {};

    function Ue(e, t, n) {
        t || Ve[e] || (Ve[e] = !0, S(!1, n))
    }
    var He = {};

    function We(e, t) {
        e || He[t] || (He[t] = !0, console.warn(t))
    }
    i.useOptimistic;
    a.memo(function(e) {
        let {
            routes: t,
            future: n,
            state: r,
            onError: a
        } = e;
        return Ne(t, void 0, r, a, n)
    });

    function qe(e) {
        w(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
    }

    function $e(e) {
        let {
            basename: t = "/",
            children: n = null,
            location: r,
            navigationType: i = "POP",
            navigator: o,
            static: s = !1,
            unstable_useTransitions: l
        } = e;
        w(!Se(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
        let u = t.replace(/^\/*/, "/"),
            c = a.useMemo(() => ({
                basename: u,
                navigator: o,
                static: s,
                unstable_useTransitions: l,
                future: {}
            }), [u, o, s, l]);
        "string" === typeof r && (r = C(r));
        let {
            pathname: d = "/",
            search: f = "",
            hash: h = "",
            state: p = null,
            key: m = "default"
        } = r, g = a.useMemo(() => {
            let e = q(d, u);
            return null == e ? null : {
                location: {
                    pathname: e,
                    search: f,
                    hash: h,
                    state: p,
                    key: m
                },
                navigationType: i
            }
        }, [u, d, f, h, p, m, i]);
        return S(null != g, '<Router basename="'.concat(u, '"> is not able to match the URL "').concat(d).concat(f).concat(h, "\" because it does not start with the basename, so the <Router> won't render anything.")), null == g ? null : a.createElement(ve.Provider, {
            value: c
        }, a.createElement(ye.Provider, {
            children: n,
            value: g
        }))
    }

    function Ye(e) {
        let {
            children: t,
            location: n
        } = e;
        return Ne(Ke(t), n)
    }
    a.Component;

    function Ke(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = [];
        return a.Children.forEach(e, (e, r) => {
            if (!a.isValidElement(e)) return;
            let i = [...t, r];
            if (e.type === a.Fragment) return void n.push.apply(n, Ke(e.props.children, i));
            w(e.type === qe, "[".concat("string" === typeof e.type ? e.type : e.type.name, "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>")), w(!e.props.index || !e.props.children, "An index route cannot have child routes.");
            let o = {
                id: e.props.id || i.join("-"),
                caseSensitive: e.props.caseSensitive,
                element: e.props.element,
                Component: e.props.Component,
                index: e.props.index,
                path: e.props.path,
                middleware: e.props.middleware,
                loader: e.props.loader,
                action: e.props.action,
                hydrateFallbackElement: e.props.hydrateFallbackElement,
                HydrateFallback: e.props.HydrateFallback,
                errorElement: e.props.errorElement,
                ErrorBoundary: e.props.ErrorBoundary,
                hasErrorBoundary: !0 === e.props.hasErrorBoundary || null != e.props.ErrorBoundary || null != e.props.errorElement,
                shouldRevalidate: e.props.shouldRevalidate,
                handle: e.props.handle,
                lazy: e.props.lazy
            };
            e.props.children && (o.children = Ke(e.props.children, i)), n.push(o)
        }), n
    }
    var Xe = "get",
        Qe = "application/x-www-form-urlencoded";

    function Ge(e) {
        return "undefined" !== typeof HTMLElement && e instanceof HTMLElement
    }
    var Je = null;
    var Ze = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

    function et(e) {
        return null == e || Ze.has(e) ? e : (S(!1, '"'.concat(e, '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` and will default to "').concat(Qe, '"')), null)
    }

    function tt(e, t) {
        let n, r, a, i, o;
        if (Ge(s = e) && "form" === s.tagName.toLowerCase()) {
            let o = e.getAttribute("action");
            r = o ? q(o, t) : null, n = e.getAttribute("method") || Xe, a = et(e.getAttribute("enctype")) || Qe, i = new FormData(e)
        } else if (function(e) {
                return Ge(e) && "button" === e.tagName.toLowerCase()
            }(e) || function(e) {
                return Ge(e) && "input" === e.tagName.toLowerCase()
            }(e) && ("submit" === e.type || "image" === e.type)) {
            let o = e.form;
            if (null == o) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
            let s = e.getAttribute("formaction") || o.getAttribute("action");
            if (r = s ? q(s, t) : null, n = e.getAttribute("formmethod") || o.getAttribute("method") || Xe, a = et(e.getAttribute("formenctype")) || et(o.getAttribute("enctype")) || Qe, i = new FormData(o, e), ! function() {
                    if (null === Je) try {
                        new FormData(document.createElement("form"), 0), Je = !1
                    } catch (e) {
                        Je = !0
                    }
                    return Je
                }()) {
                let {
                    name: t,
                    type: n,
                    value: r
                } = e;
                if ("image" === n) {
                    let e = t ? "".concat(t, ".") : "";
                    i.append("".concat(e, "x"), "0"), i.append("".concat(e, "y"), "0")
                } else t && i.append(t, r)
            }
        } else {
            if (Ge(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
            n = Xe, r = null, a = Qe, o = e
        }
        var s;
        return i && "text/plain" === a && (o = i, i = void 0), {
            action: r,
            method: n.toLowerCase(),
            encType: a,
            formData: i,
            body: o
        }
    }
    Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
    "undefined" !== typeof window ? window : "undefined" !== typeof globalThis && globalThis;

    function nt(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t)
    }
    Symbol("SingleFetchRedirect");

    function rt(e, t, n) {
        let r = "string" === typeof e ? new URL(e, "undefined" === typeof window ? "server://singlefetch/" : window.location.origin) : e;
        return "/" === r.pathname ? r.pathname = "_root.".concat(n) : t && "/" === q(r.pathname, t) ? r.pathname = "".concat(t.replace(/\/$/, ""), "/_root.").concat(n) : r.pathname = "".concat(r.pathname.replace(/\/$/, ""), ".").concat(n), r
    }
    async function at(e, t) {
        if (e.id in t) return t[e.id];
        try {
            let n = await
            import (e.module);
            return t[e.id] = n, n
        } catch (n) {
            return console.error("Error loading route module `".concat(e.module, "`, reloading page...")), console.error(n), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {})
        }
    }

    function it(e) {
        return null != e && "string" === typeof e.page
    }

    function ot(e) {
        return null != e && (null == e.href ? "preload" === e.rel && "string" === typeof e.imageSrcSet && "string" === typeof e.imageSizes : "string" === typeof e.rel && "string" === typeof e.href)
    }

    function st(e, t, n, r, a, i) {
        let o = (e, t) => !n[t] || e.route.id !== n[t].route.id,
            s = (e, t) => {
                var r;
                return n[t].pathname !== e.pathname || (null === (r = n[t].route.path) || void 0 === r ? void 0 : r.endsWith("*")) && n[t].params["*"] !== e.params["*"]
            };
        return "assets" === i ? t.filter((e, t) => o(e, t) || s(e, t)) : "data" === i ? t.filter((t, i) => {
            let l = r.routes[t.route.id];
            if (!l || !l.hasLoader) return !1;
            if (o(t, i) || s(t, i)) return !0;
            if (t.route.shouldRevalidate) {
                var u;
                let r = t.route.shouldRevalidate({
                    currentUrl: new URL(a.pathname + a.search + a.hash, window.origin),
                    currentParams: (null === (u = n[0]) || void 0 === u ? void 0 : u.params) || {},
                    nextUrl: new URL(e, window.origin),
                    nextParams: t.params,
                    defaultShouldRevalidate: !0
                });
                if ("boolean" === typeof r) return r
            }
            return !0
        }) : []
    }

    function lt(e, t) {
        let {
            includeHydrateFallback: n
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return r = e.map(e => {
            let r = t.routes[e.route.id];
            if (!r) return [];
            let a = [r.module];
            return r.clientActionModule && (a = a.concat(r.clientActionModule)), r.clientLoaderModule && (a = a.concat(r.clientLoaderModule)), n && r.hydrateFallbackModule && (a = a.concat(r.hydrateFallbackModule)), r.imports && (a = a.concat(r.imports)), a
        }).flat(1), [...new Set(r)];
        var r
    }

    function ut(e, t) {
        let n = new Set,
            r = new Set(t);
        return e.reduce((e, a) => {
            if (t && !it(a) && "script" === a.as && a.href && r.has(a.href)) return e;
            let i = JSON.stringify(function(e) {
                let t = {},
                    n = Object.keys(e).sort();
                for (let r of n) t[r] = e[r];
                return t
            }(a));
            return n.has(i) || (n.add(i), e.push({
                key: i,
                link: a
            })), e
        }, [])
    }

    function ct(e, t) {
        return "lazy" === e.mode && !0 === t
    }

    function dt() {
        let e = a.useContext(ce);
        return nt(e, "You must render this element inside a <DataRouterContext.Provider> element"), e
    }

    function ft() {
        let e = a.useContext(de);
        return nt(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e
    }
    var ht = a.createContext(void 0);

    function pt() {
        let e = a.useContext(ht);
        return nt(e, "You must render this element inside a <HydratedRouter> element"), e
    }

    function mt(e, t) {
        return n => {
            e && e(n), n.defaultPrevented || t(n)
        }
    }

    function gt(e, t, n) {
        if (n && !xt) return [e[0]];
        if (t) {
            let n = e.findIndex(e => void 0 !== t[e.route.id]);
            return e.slice(0, n + 1)
        }
        return e
    }
    ht.displayName = "FrameworkContext";

    function vt(e) {
        let {
            page: t
        } = e, n = s(e, p), {
            router: r
        } = dt(), i = a.useMemo(() => R(r.routes, t, r.basename), [r.routes, t, r.basename]);
        return i ? a.createElement(bt, f({
            page: t,
            matches: i
        }, n)) : null
    }

    function yt(e) {
        let {
            manifest: t,
            routeModules: n
        } = pt(), [r, i] = a.useState([]);
        return a.useEffect(() => {
            let r = !1;
            return async function(e, t, n) {
                return ut((await Promise.all(e.map(async e => {
                    let r = t.routes[e.route.id];
                    if (r) {
                        let e = await at(r, n);
                        return e.links ? e.links() : []
                    }
                    return []
                }))).flat(1).filter(ot).filter(e => "stylesheet" === e.rel || "preload" === e.rel).map(e => "stylesheet" === e.rel ? f(f({}, e), {}, {
                    rel: "prefetch",
                    as: "style"
                }) : f(f({}, e), {}, {
                    rel: "prefetch"
                })))
            }(e, t, n).then(e => {
                r || i(e)
            }), () => {
                r = !0
            }
        }, [e, t, n]), r
    }

    function bt(e) {
        let {
            page: t,
            matches: n
        } = e, r = s(e, m), i = ke(), {
            manifest: o,
            routeModules: l
        } = pt(), {
            basename: u
        } = dt(), {
            loaderData: c,
            matches: d
        } = ft(), h = a.useMemo(() => st(t, n, d, o, i, "data"), [t, n, d, o, i]), p = a.useMemo(() => st(t, n, d, o, i, "assets"), [t, n, d, o, i]), g = a.useMemo(() => {
            if (t === i.pathname + i.search + i.hash) return [];
            let e = new Set,
                r = !1;
            if (n.forEach(t => {
                    var n;
                    let a = o.routes[t.route.id];
                    a && a.hasLoader && (!h.some(e => e.route.id === t.route.id) && t.route.id in c && null !== (n = l[t.route.id]) && void 0 !== n && n.shouldRevalidate || a.hasClientLoader ? r = !0 : e.add(t.route.id))
                }), 0 === e.size) return [];
            let a = rt(t, u, "data");
            return r && e.size > 0 && a.searchParams.set("_routes", n.filter(t => e.has(t.route.id)).map(e => e.route.id).join(",")), [a.pathname + a.search]
        }, [u, c, i, o, h, n, t, l]), v = a.useMemo(() => lt(p, o), [p, o]), y = yt(p);
        return a.createElement(a.Fragment, null, g.map(e => a.createElement("link", f({
            key: e,
            rel: "prefetch",
            as: "fetch",
            href: e
        }, r))), v.map(e => a.createElement("link", f({
            key: e,
            rel: "modulepreload",
            href: e
        }, r))), y.map(e => {
            let {
                key: t,
                link: n
            } = e;
            return a.createElement("link", f({
                key: t,
                nonce: r.nonce
            }, n))
        }))
    }
    var xt = !1;

    function wt(e) {
        let {
            manifest: t,
            serverHandoffString: n,
            isSpaMode: r,
            renderMeta: i,
            routeDiscovery: o,
            ssr: l
        } = pt(), {
            router: u,
            static: c,
            staticContext: d
        } = dt(), {
            matches: p
        } = ft(), m = he(), g = ct(o, l);
        i && (i.didRenderScripts = !0);
        let v = gt(p, null, r);
        a.useEffect(() => {
            xt = !0
        }, []);
        let y = a.useMemo(() => {
                var r;
                if (m) return null;
                let i = d ? "window.__reactRouterContext = ".concat(n, ";").concat("window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());") : " ",
                    o = c ? "".concat(null !== (r = t.hmr) && void 0 !== r && r.runtime ? "import ".concat(JSON.stringify(t.hmr.runtime), ";") : "").concat(g ? "" : "import ".concat(JSON.stringify(t.url)), ";\n").concat(v.map((e, n) => {
                        let r = "route".concat(n),
                            a = t.routes[e.route.id];
                        nt(a, "Route ".concat(e.route.id, " not found in manifest"));
                        let {
                            clientActionModule: i,
                            clientLoaderModule: o,
                            clientMiddlewareModule: s,
                            hydrateFallbackModule: l,
                            module: u
                        } = a, c = [...i ? [{
                            module: i,
                            varName: "".concat(r, "_clientAction")
                        }] : [], ...o ? [{
                            module: o,
                            varName: "".concat(r, "_clientLoader")
                        }] : [], ...s ? [{
                            module: s,
                            varName: "".concat(r, "_clientMiddleware")
                        }] : [], ...l ? [{
                            module: l,
                            varName: "".concat(r, "_HydrateFallback")
                        }] : [], {
                            module: u,
                            varName: "".concat(r, "_main")
                        }];
                        return 1 === c.length ? "import * as ".concat(r, " from ").concat(JSON.stringify(u), ";") : [c.map(e => "import * as ".concat(e.varName, ' from "').concat(e.module, '";')).join("\n"), "const ".concat(r, " = {").concat(c.map(e => "...".concat(e.varName)).join(","), "};")].join("\n")
                    }).join("\n"), "\n  ").concat(g ? "window.__reactRouterManifest = ".concat(JSON.stringify(function(e, t) {
                        let {
                            sri: n
                        } = e, r = s(e, h), a = new Set(t.state.matches.map(e => e.route.id)), i = t.state.location.pathname.split("/").filter(Boolean), o = ["/"];
                        for (i.pop(); i.length > 0;) o.push("/".concat(i.join("/"))), i.pop();
                        o.forEach(e => {
                            let n = R(t.routes, e, t.basename);
                            n && n.forEach(e => a.add(e.route.id))
                        });
                        let l = [...a].reduce((e, t) => Object.assign(e, {
                            [t]: r.routes[t]
                        }), {});
                        return f(f({}, r), {}, {
                            routes: l,
                            sri: !!n || void 0
                        })
                    }(t, u), null, 2), ";") : "", "\n  window.__reactRouterRouteModules = {").concat(v.map((e, t) => "".concat(JSON.stringify(e.route.id), ":route").concat(t)).join(","), "};\n\nimport(").concat(JSON.stringify(t.entry.module), ");") : " ";
                return a.createElement(a.Fragment, null, a.createElement("script", f(f({}, e), {}, {
                    suppressHydrationWarning: !0,
                    dangerouslySetInnerHTML: {
                        __html: i
                    },
                    type: void 0
                })), a.createElement("script", f(f({}, e), {}, {
                    suppressHydrationWarning: !0,
                    dangerouslySetInnerHTML: {
                        __html: o
                    },
                    type: "module",
                    async: !0
                })))
            }, []),
            b = xt || m ? [] : (x = t.entry.imports.concat(lt(v, t, {
                includeHydrateFallback: !0
            })), [...new Set(x)]);
        var x;
        let w = "object" === typeof t.sri ? t.sri : {};
        return We(!m, "The <Scripts /> element is a no-op when using RSC and can be safely removed."), xt || m ? null : a.createElement(a.Fragment, null, "object" === typeof t.sri ? a.createElement("script", {
            "rr-importmap": "",
            type: "importmap",
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
                __html: JSON.stringify({
                    integrity: w
                })
            }
        }) : null, g ? null : a.createElement("link", {
            rel: "modulepreload",
            href: t.url,
            crossOrigin: e.crossOrigin,
            integrity: w[t.url],
            suppressHydrationWarning: !0
        }), a.createElement("link", {
            rel: "modulepreload",
            href: t.entry.module,
            crossOrigin: e.crossOrigin,
            integrity: w[t.entry.module],
            suppressHydrationWarning: !0
        }), b.map(t => a.createElement("link", {
            key: t,
            rel: "modulepreload",
            href: t,
            crossOrigin: e.crossOrigin,
            integrity: w[t],
            suppressHydrationWarning: !0
        })), y)
    }

    function St() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return e => {
            t.forEach(t => {
                "function" === typeof t ? t(e) : null != t && (t.current = e)
            })
        }
    }
    a.Component;

    function kt(e) {
        let {
            error: t,
            isOutsideRemixApp: n
        } = e;
        console.error(t);
        let r, i = a.createElement("script", {
            dangerouslySetInnerHTML: {
                __html: '\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      '
            }
        });
        if (ae(t)) return a.createElement(Et, {
            title: "Unhandled Thrown Response!"
        }, a.createElement("h1", {
            style: {
                fontSize: "24px"
            }
        }, t.status, " ", t.statusText), i);
        if (t instanceof Error) r = t;
        else {
            let e = null == t ? "Unknown Error" : "object" === typeof t && "toString" in t ? t.toString() : JSON.stringify(t);
            r = new Error(e)
        }
        return a.createElement(Et, {
            title: "Application Error!",
            isOutsideRemixApp: n
        }, a.createElement("h1", {
            style: {
                fontSize: "24px"
            }
        }, "Application Error"), a.createElement("pre", {
            style: {
                padding: "2rem",
                background: "hsla(10, 50%, 50%, 0.1)",
                color: "red",
                overflow: "auto"
            }
        }, r.stack), i)
    }

    function Et(e) {
        var t;
        let {
            title: n,
            renderScripts: r,
            isOutsideRemixApp: i,
            children: o
        } = e, {
            routeModules: s
        } = pt();
        return null !== (t = s.root) && void 0 !== t && t.Layout && !i ? o : a.createElement("html", {
            lang: "en"
        }, a.createElement("head", null, a.createElement("meta", {
            charSet: "utf-8"
        }), a.createElement("meta", {
            name: "viewport",
            content: "width=device-width,initial-scale=1,viewport-fit=cover"
        }), a.createElement("title", null, n)), a.createElement("body", null, a.createElement("main", {
            style: {
                fontFamily: "system-ui, sans-serif",
                padding: "2rem"
            }
        }, o, r ? a.createElement(wt, null) : null)))
    }
    var Tt = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement;
    try {
        Tt && (window.__reactRouterVersion = "7.11.0")
    } catch (qh) {}

    function Ct(e) {
        let {
            basename: t,
            children: n,
            unstable_useTransitions: r,
            window: i
        } = e, o = a.useRef();
        null == o.current && (o.current = x({
            window: i,
            v5Compat: !0
        }));
        let s = o.current,
            [l, u] = a.useState({
                action: s.action,
                location: s.location
            }),
            c = a.useCallback(e => {
                !1 === r ? u(e) : a.startTransition(() => u(e))
            }, [r]);
        return a.useLayoutEffect(() => s.listen(c), [s, c]), a.createElement($e, {
            basename: t,
            children: n,
            location: l.location,
            navigationType: l.action,
            navigator: s,
            unstable_useTransitions: r
        })
    }
    var Pt = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Nt = a.forwardRef(function(e, t) {
            let {
                onClick: n,
                discover: r = "render",
                prefetch: i = "none",
                relative: o,
                reloadDocument: l,
                replace: u,
                state: c,
                target: d,
                to: h,
                preventScrollReset: p,
                viewTransition: m,
                unstable_defaultShouldRevalidate: v
            } = e, y = s(e, g), {
                basename: b,
                unstable_useTransitions: x
            } = a.useContext(ve), S = "string" === typeof h && Pt.test(h), k = se(h, b);
            h = k.to;
            let E = function(e) {
                    let {
                        relative: t
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    w(Se(), "useHref() may be used only in the context of a <Router> component.");
                    let {
                        basename: n,
                        navigator: r
                    } = a.useContext(ve), {
                        hash: i,
                        pathname: o,
                        search: s
                    } = Pe(e, {
                        relative: t
                    }), l = o;
                    return "/" !== n && (l = "/" === o ? n : Z([n, o])), r.createHref({
                        pathname: l,
                        search: s,
                        hash: i
                    })
                }(h, {
                    relative: o
                }),
                [C, P, N] = function(e, t) {
                    let n = a.useContext(ht),
                        [r, i] = a.useState(!1),
                        [o, s] = a.useState(!1),
                        {
                            onFocus: l,
                            onBlur: u,
                            onMouseEnter: c,
                            onMouseLeave: d,
                            onTouchStart: f
                        } = t,
                        h = a.useRef(null);
                    a.useEffect(() => {
                        if ("render" === e && s(!0), "viewport" === e) {
                            let e = new IntersectionObserver(e => {
                                e.forEach(e => {
                                    s(e.isIntersecting)
                                })
                            }, {
                                threshold: .5
                            });
                            return h.current && e.observe(h.current), () => {
                                e.disconnect()
                            }
                        }
                    }, [e]), a.useEffect(() => {
                        if (r) {
                            let e = setTimeout(() => {
                                s(!0)
                            }, 100);
                            return () => {
                                clearTimeout(e)
                            }
                        }
                    }, [r]);
                    let p = () => {
                            i(!0)
                        },
                        m = () => {
                            i(!1), s(!1)
                        };
                    return n ? "intent" !== e ? [o, h, {}] : [o, h, {
                        onFocus: mt(l, p),
                        onBlur: mt(u, m),
                        onMouseEnter: mt(c, p),
                        onMouseLeave: mt(d, m),
                        onTouchStart: mt(f, p)
                    }] : [!1, h, {}]
                }(i, y),
                R = function(e) {
                    let {
                        target: t,
                        replace: n,
                        state: r,
                        preventScrollReset: i,
                        relative: o,
                        viewTransition: s,
                        unstable_defaultShouldRevalidate: l,
                        unstable_useTransitions: u
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, c = Ce(), d = ke(), f = Pe(e, {
                        relative: o
                    });
                    return a.useCallback(h => {
                        if (function(e, t) {
                                return 0 === e.button && (!t || "_self" === t) && ! function(e) {
                                    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                                }(e)
                            }(h, t)) {
                            h.preventDefault();
                            let t = void 0 !== n ? n : T(d) === T(f),
                                p = () => c(e, {
                                    replace: t,
                                    state: r,
                                    preventScrollReset: i,
                                    relative: o,
                                    viewTransition: s,
                                    unstable_defaultShouldRevalidate: l
                                });
                            u ? a.startTransition(() => p()) : p()
                        }
                    }, [d, c, f, n, r, t, e, i, o, s, l, u])
                }(h, {
                    replace: u,
                    state: c,
                    target: d,
                    preventScrollReset: p,
                    relative: o,
                    viewTransition: m,
                    unstable_defaultShouldRevalidate: v,
                    unstable_useTransitions: x
                });
            let j = a.createElement("a", f(f(f({}, y), N), {}, {
                href: k.absoluteURL || E,
                onClick: k.isExternal || l ? n : function(e) {
                    n && n(e), e.defaultPrevented || R(e)
                },
                ref: St(t, P),
                target: d,
                "data-discover": S || "render" !== r ? void 0 : "true"
            }));
            return C && !S ? a.createElement(a.Fragment, null, j, a.createElement(vt, {
                page: E
            })) : j
        });
    Nt.displayName = "Link", a.forwardRef(function(e, t) {
        let {
            "aria-current": n = "page",
            caseSensitive: r = !1,
            className: i = "",
            end: o = !1,
            style: l,
            to: u,
            viewTransition: c,
            children: d
        } = e, h = s(e, v), p = Pe(u, {
            relative: h.relative
        }), m = ke(), g = a.useContext(de), {
            navigator: y,
            basename: b
        } = a.useContext(ve), x = null != g && function(e) {
            let {
                relative: t
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = a.useContext(pe);
            w(null != n, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
            let {
                basename: r
            } = At("useViewTransitionState"), i = Pe(e, {
                relative: t
            });
            if (!n.isTransitioning) return !1;
            let o = q(n.currentLocation.pathname, r) || n.currentLocation.pathname,
                s = q(n.nextLocation.pathname, r) || n.nextLocation.pathname;
            return null != U(i.pathname, s) || null != U(i.pathname, o)
        }(p) && !0 === c, S = y.encodeLocation ? y.encodeLocation(p).pathname : p.pathname, k = m.pathname, E = g && g.navigation && g.navigation.location ? g.navigation.location.pathname : null;
        r || (k = k.toLowerCase(), E = E ? E.toLowerCase() : null, S = S.toLowerCase()), E && b && (E = q(E, b) || E);
        const T = "/" !== S && S.endsWith("/") ? S.length - 1 : S.length;
        let C, P = k === S || !o && k.startsWith(S) && "/" === k.charAt(T),
            N = null != E && (E === S || !o && E.startsWith(S) && "/" === E.charAt(S.length)),
            R = {
                isActive: P,
                isPending: N,
                isTransitioning: x
            },
            j = P ? n : void 0;
        C = "function" === typeof i ? i(R) : [i, P ? "active" : null, N ? "pending" : null, x ? "transitioning" : null].filter(Boolean).join(" ");
        let A = "function" === typeof l ? l(R) : l;
        return a.createElement(Nt, f(f({}, h), {}, {
            "aria-current": j,
            className: C,
            ref: t,
            style: A,
            to: u,
            viewTransition: c
        }), "function" === typeof d ? d(R) : d)
    }).displayName = "NavLink";
    var Rt = a.forwardRef((e, t) => {
        let {
            discover: n = "render",
            fetcherKey: r,
            navigate: i,
            reloadDocument: o,
            replace: l,
            state: u,
            method: c = Xe,
            action: d,
            onSubmit: h,
            relative: p,
            preventScrollReset: m,
            viewTransition: g,
            unstable_defaultShouldRevalidate: v
        } = e, b = s(e, y), {
            unstable_useTransitions: x
        } = a.useContext(ve), S = Dt(), k = function(e) {
            let {
                relative: t
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                basename: n
            } = a.useContext(ve), r = a.useContext(be);
            w(r, "useFormAction must be used inside a RouteContext");
            let [i] = r.matches.slice(-1), o = f({}, Pe(e || ".", {
                relative: t
            })), s = ke();
            if (null == e) {
                o.search = s.search;
                let e = new URLSearchParams(o.search),
                    t = e.getAll("index");
                if (t.some(e => "" === e)) {
                    e.delete("index"), t.filter(e => e).forEach(t => e.append("index", t));
                    let n = e.toString();
                    o.search = n ? "?".concat(n) : ""
                }
            }
            e && "." !== e || !i.route.index || (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index");
            "/" !== n && (o.pathname = "/" === o.pathname ? n : Z([n, o.pathname]));
            return T(o)
        }(d, {
            relative: p
        }), E = "get" === c.toLowerCase() ? "get" : "post", C = "string" === typeof d && Pt.test(d);
        return a.createElement("form", f(f({
            ref: t,
            method: E,
            action: k,
            onSubmit: o ? h : e => {
                if (h && h(e), e.defaultPrevented) return;
                e.preventDefault();
                let t = e.nativeEvent.submitter,
                    n = (null === t || void 0 === t ? void 0 : t.getAttribute("formmethod")) || c,
                    o = () => S(t || e.currentTarget, {
                        fetcherKey: r,
                        method: n,
                        navigate: i,
                        replace: l,
                        state: u,
                        relative: p,
                        preventScrollReset: m,
                        viewTransition: g,
                        unstable_defaultShouldRevalidate: v
                    });
                x && !1 !== i ? a.startTransition(() => o()) : o()
            }
        }, b), {}, {
            "data-discover": C || "render" !== n ? void 0 : "true"
        }))
    });

    function jt(e) {
        return "".concat(e, " must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.")
    }

    function At(e) {
        let t = a.useContext(ce);
        return w(t, jt(e)), t
    }
    Rt.displayName = "Form";
    var Ft = 0,
        Ot = () => "__".concat(String(++Ft), "__");

    function Dt() {
        let {
            router: e
        } = At("useSubmit"), {
            basename: t
        } = a.useContext(ve), n = Ie("useRouteId"), r = e.fetch, i = e.navigate;
        return a.useCallback(async function(e) {
            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                {
                    action: o,
                    method: s,
                    encType: l,
                    formData: u,
                    body: c
                } = tt(e, t);
            if (!1 === a.navigate) {
                let e = a.fetcherKey || Ot();
                await r(e, n, a.action || o, {
                    unstable_defaultShouldRevalidate: a.unstable_defaultShouldRevalidate,
                    preventScrollReset: a.preventScrollReset,
                    formData: u,
                    body: c,
                    formMethod: a.method || s,
                    formEncType: a.encType || l,
                    flushSync: a.flushSync
                })
            } else await i(a.action || o, {
                unstable_defaultShouldRevalidate: a.unstable_defaultShouldRevalidate,
                preventScrollReset: a.preventScrollReset,
                formData: u,
                body: c,
                formMethod: a.method || s,
                formEncType: a.encType || l,
                replace: a.replace,
                state: a.state,
                fromRouteId: n,
                flushSync: a.flushSync,
                viewTransition: a.viewTransition
            })
        }, [r, i, t, n])
    }
    var Mt = (e, t, n, r, a, i, o, s) => {
            let l = document.documentElement,
                u = ["light", "dark"];

            function c(t) {
                (Array.isArray(e) ? e : [e]).forEach(e => {
                        let n = "class" === e,
                            r = n && i ? a.map(e => i[e] || e) : a;
                        n ? (l.classList.remove(...r), l.classList.add(i && i[t] ? i[t] : t)) : l.setAttribute(e, t)
                    }),
                    function(e) {
                        s && u.includes(e) && (l.style.colorScheme = e)
                    }(t)
            }
            if (r) c(r);
            else try {
                let e = localStorage.getItem(t) || n;
                c(o && "system" === e ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : e)
            } catch (d) {}
        },
        Lt = a.createContext(void 0),
        _t = {
            setTheme: e => {},
            themes: []
        },
        zt = (a.memo(e => {
            let {
                forcedTheme: t,
                storageKey: n,
                attribute: r,
                enableSystem: i,
                enableColorScheme: o,
                defaultTheme: s,
                value: l,
                themes: u,
                nonce: c,
                scriptProps: d
            } = e, h = JSON.stringify([r, n, s, t, u, l, i, o]).slice(1, -1);
            return a.createElement("script", f(f({}, d), {}, {
                suppressHydrationWarning: !0,
                nonce: "undefined" == typeof window ? c : "",
                dangerouslySetInnerHTML: {
                    __html: "(".concat(Mt.toString(), ")(").concat(h, ")")
                }
            }))
        }), n(950));
    const It = ["message"];
    const Bt = Array(12).fill(0),
        Vt = e => {
            let {
                visible: t,
                className: n
            } = e;
            return a.createElement("div", {
                className: ["sonner-loading-wrapper", n].filter(Boolean).join(" "),
                "data-visible": t
            }, a.createElement("div", {
                className: "sonner-spinner"
            }, Bt.map((e, t) => a.createElement("div", {
                className: "sonner-loading-bar",
                key: "spinner-bar-".concat(t)
            }))))
        },
        Ut = a.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20"
        }, a.createElement("path", {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
            clipRule: "evenodd"
        })),
        Ht = a.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            height: "20",
            width: "20"
        }, a.createElement("path", {
            fillRule: "evenodd",
            d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
            clipRule: "evenodd"
        })),
        Wt = a.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20"
        }, a.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
            clipRule: "evenodd"
        })),
        qt = a.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20"
        }, a.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
            clipRule: "evenodd"
        })),
        $t = a.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "12",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, a.createElement("line", {
            x1: "18",
            y1: "6",
            x2: "6",
            y2: "18"
        }), a.createElement("line", {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "18"
        }));
    let Yt = 1;
    const Kt = new class {
            constructor() {
                this.subscribe = e => (this.subscribers.push(e), () => {
                    const t = this.subscribers.indexOf(e);
                    this.subscribers.splice(t, 1)
                }), this.publish = e => {
                    this.subscribers.forEach(t => t(e))
                }, this.addToast = e => {
                    this.publish(e), this.toasts = [...this.toasts, e]
                }, this.create = e => {
                    var t;
                    const {
                        message: n
                    } = e, r = s(e, It), a = "number" === typeof(null == e ? void 0 : e.id) || (null == (t = e.id) ? void 0 : t.length) > 0 ? e.id : Yt++, i = this.toasts.find(e => e.id === a), o = void 0 === e.dismissible || e.dismissible;
                    return this.dismissedToasts.has(a) && this.dismissedToasts.delete(a), i ? this.toasts = this.toasts.map(t => t.id === a ? (this.publish(f(f(f({}, t), e), {}, {
                        id: a,
                        title: n
                    })), f(f(f({}, t), e), {}, {
                        id: a,
                        dismissible: o,
                        title: n
                    })) : t) : this.addToast(f(f({
                        title: n
                    }, r), {}, {
                        dismissible: o,
                        id: a
                    })), a
                }, this.dismiss = e => (e ? (this.dismissedToasts.add(e), requestAnimationFrame(() => this.subscribers.forEach(t => t({
                    id: e,
                    dismiss: !0
                })))) : this.toasts.forEach(e => {
                    this.subscribers.forEach(t => t({
                        id: e.id,
                        dismiss: !0
                    }))
                }), e), this.message = (e, t) => this.create(f(f({}, t), {}, {
                    message: e
                })), this.error = (e, t) => this.create(f(f({}, t), {}, {
                    message: e,
                    type: "error"
                })), this.success = (e, t) => this.create(f(f({}, t), {}, {
                    type: "success",
                    message: e
                })), this.info = (e, t) => this.create(f(f({}, t), {}, {
                    type: "info",
                    message: e
                })), this.warning = (e, t) => this.create(f(f({}, t), {}, {
                    type: "warning",
                    message: e
                })), this.loading = (e, t) => this.create(f(f({}, t), {}, {
                    type: "loading",
                    message: e
                })), this.promise = (e, t) => {
                    if (!t) return;
                    let n;
                    void 0 !== t.loading && (n = this.create(f(f({}, t), {}, {
                        promise: e,
                        type: "loading",
                        message: t.loading,
                        description: "function" !== typeof t.description ? t.description : void 0
                    })));
                    const r = Promise.resolve(e instanceof Function ? e() : e);
                    let i, o = void 0 !== n;
                    const s = r.then(async e => {
                            i = ["resolve", e];
                            if (a.isValidElement(e)) o = !1, this.create({
                                id: n,
                                type: "default",
                                message: e
                            });
                            else if (Xt(e) && !e.ok) {
                                o = !1;
                                const r = "function" === typeof t.error ? await t.error("HTTP error! status: ".concat(e.status)) : t.error,
                                    i = "function" === typeof t.description ? await t.description("HTTP error! status: ".concat(e.status)) : t.description,
                                    s = "object" === typeof r && !a.isValidElement(r) ? r : {
                                        message: r
                                    };
                                this.create(f({
                                    id: n,
                                    type: "error",
                                    description: i
                                }, s))
                            } else if (e instanceof Error) {
                                o = !1;
                                const r = "function" === typeof t.error ? await t.error(e) : t.error,
                                    i = "function" === typeof t.description ? await t.description(e) : t.description,
                                    s = "object" === typeof r && !a.isValidElement(r) ? r : {
                                        message: r
                                    };
                                this.create(f({
                                    id: n,
                                    type: "error",
                                    description: i
                                }, s))
                            } else if (void 0 !== t.success) {
                                o = !1;
                                const r = "function" === typeof t.success ? await t.success(e) : t.success,
                                    i = "function" === typeof t.description ? await t.description(e) : t.description,
                                    s = "object" === typeof r && !a.isValidElement(r) ? r : {
                                        message: r
                                    };
                                this.create(f({
                                    id: n,
                                    type: "success",
                                    description: i
                                }, s))
                            }
                        }).catch(async e => {
                            if (i = ["reject", e], void 0 !== t.error) {
                                o = !1;
                                const r = "function" === typeof t.error ? await t.error(e) : t.error,
                                    i = "function" === typeof t.description ? await t.description(e) : t.description,
                                    s = "object" === typeof r && !a.isValidElement(r) ? r : {
                                        message: r
                                    };
                                this.create(f({
                                    id: n,
                                    type: "error",
                                    description: i
                                }, s))
                            }
                        }).finally(() => {
                            o && (this.dismiss(n), n = void 0), null == t.finally || t.finally.call(t)
                        }),
                        l = () => new Promise((e, t) => s.then(() => "reject" === i[0] ? t(i[1]) : e(i[1])).catch(t));
                    return "string" !== typeof n && "number" !== typeof n ? {
                        unwrap: l
                    } : Object.assign(n, {
                        unwrap: l
                    })
                }, this.custom = (e, t) => {
                    const n = (null == t ? void 0 : t.id) || Yt++;
                    return this.create(f({
                        jsx: e(n),
                        id: n
                    }, t)), n
                }, this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = new Set
            }
        },
        Xt = e => e && "object" === typeof e && "ok" in e && "boolean" === typeof e.ok && "status" in e && "number" === typeof e.status,
        Qt = (e, t) => {
            const n = (null == t ? void 0 : t.id) || Yt++;
            return Kt.addToast(f(f({
                title: e
            }, t), {}, {
                id: n
            })), n
        },
        Gt = Object.assign(Qt, {
            success: Kt.success,
            info: Kt.info,
            warning: Kt.warning,
            error: Kt.error,
            custom: Kt.custom,
            message: Kt.message,
            promise: Kt.promise,
            dismiss: Kt.dismiss,
            loading: Kt.loading
        }, {
            getHistory: () => Kt.toasts,
            getToasts: () => Kt.getActiveToasts()
        });

    function Jt(e) {
        return void 0 !== e.label
    }! function(e) {
        if (!e || "undefined" == typeof document) return;
        let t = document.head || document.getElementsByTagName("head")[0],
            n = document.createElement("style");
        n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e))
    }("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
    const Zt = 3,
        en = 14;

    function tn() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return t.filter(Boolean).join(" ")
    }
    const nn = e => {
        var t, n, r, i, o, s, l, u, c;
        const {
            invert: d,
            toast: h,
            unstyled: p,
            interacting: m,
            setHeights: g,
            visibleToasts: v,
            heights: y,
            index: b,
            toasts: x,
            expanded: w,
            removeToast: S,
            defaultRichColors: k,
            closeButton: E,
            style: T,
            cancelButtonStyle: C,
            actionButtonStyle: P,
            className: N = "",
            descriptionClassName: R = "",
            duration: j,
            position: A,
            gap: F,
            expandByDefault: O,
            classNames: D,
            icons: M,
            closeButtonAriaLabel: L = "Close toast"
        } = e, [_, z] = a.useState(null), [I, B] = a.useState(null), [V, U] = a.useState(!1), [H, W] = a.useState(!1), [q, $] = a.useState(!1), [Y, K] = a.useState(!1), [X, Q] = a.useState(!1), [G, J] = a.useState(0), [Z, ee] = a.useState(0), te = a.useRef(h.duration || j || 4e3), ne = a.useRef(null), re = a.useRef(null), ae = 0 === b, ie = b + 1 <= v, oe = h.type, se = !1 !== h.dismissible, le = h.className || "", ue = h.descriptionClassName || "", ce = a.useMemo(() => y.findIndex(e => e.toastId === h.id) || 0, [y, h.id]), de = a.useMemo(() => {
            var e;
            return null != (e = h.closeButton) ? e : E
        }, [h.closeButton, E]), fe = a.useMemo(() => h.duration || j || 4e3, [h.duration, j]), he = a.useRef(0), pe = a.useRef(0), me = a.useRef(0), ge = a.useRef(null), [ve, ye] = A.split("-"), be = a.useMemo(() => y.reduce((e, t, n) => n >= ce ? e : e + t.height, 0), [y, ce]), xe = (() => {
            const [e, t] = a.useState(document.hidden);
            return a.useEffect(() => {
                const e = () => {
                    t(document.hidden)
                };
                return document.addEventListener("visibilitychange", e), () => window.removeEventListener("visibilitychange", e)
            }, []), e
        })(), we = h.invert || d, Se = "loading" === oe;
        pe.current = a.useMemo(() => ce * F + be, [ce, be]), a.useEffect(() => {
            te.current = fe
        }, [fe]), a.useEffect(() => {
            U(!0)
        }, []), a.useEffect(() => {
            const e = re.current;
            if (e) {
                const t = e.getBoundingClientRect().height;
                return ee(t), g(e => [{
                    toastId: h.id,
                    height: t,
                    position: h.position
                }, ...e]), () => g(e => e.filter(e => e.toastId !== h.id))
            }
        }, [g, h.id]), a.useLayoutEffect(() => {
            if (!V) return;
            const e = re.current,
                t = e.style.height;
            e.style.height = "auto";
            const n = e.getBoundingClientRect().height;
            e.style.height = t, ee(n), g(e => e.find(e => e.toastId === h.id) ? e.map(e => e.toastId === h.id ? f(f({}, e), {}, {
                height: n
            }) : e) : [{
                toastId: h.id,
                height: n,
                position: h.position
            }, ...e])
        }, [V, h.title, h.description, g, h.id, h.jsx, h.action, h.cancel]);
        const ke = a.useCallback(() => {
            W(!0), J(pe.current), g(e => e.filter(e => e.toastId !== h.id)), setTimeout(() => {
                S(h)
            }, 200)
        }, [h, S, g, pe]);
        a.useEffect(() => {
            if (h.promise && "loading" === oe || h.duration === 1 / 0 || "loading" === h.type) return;
            let e;
            return w || m || xe ? (() => {
                if (me.current < he.current) {
                    const e = (new Date).getTime() - he.current;
                    te.current = te.current - e
                }
                me.current = (new Date).getTime()
            })() : te.current !== 1 / 0 && (he.current = (new Date).getTime(), e = setTimeout(() => {
                null == h.onAutoClose || h.onAutoClose.call(h, h), ke()
            }, te.current)), () => clearTimeout(e)
        }, [w, m, h, oe, xe, ke]), a.useEffect(() => {
            h.delete && (ke(), null == h.onDismiss || h.onDismiss.call(h, h))
        }, [ke, h.delete]);
        const Ee = h.icon || (null == M ? void 0 : M[oe]) || (e => {
            switch (e) {
                case "success":
                    return Ut;
                case "info":
                    return Wt;
                case "warning":
                    return Ht;
                case "error":
                    return qt;
                default:
                    return null
            }
        })(oe);
        var Te, Ce;
        return a.createElement("li", {
            tabIndex: 0,
            ref: re,
            className: tn(N, le, null == D ? void 0 : D.toast, null == h || null == (t = h.classNames) ? void 0 : t.toast, null == D ? void 0 : D.default, null == D ? void 0 : D[oe], null == h || null == (n = h.classNames) ? void 0 : n[oe]),
            "data-sonner-toast": "",
            "data-rich-colors": null != (Te = h.richColors) ? Te : k,
            "data-styled": !Boolean(h.jsx || h.unstyled || p),
            "data-mounted": V,
            "data-promise": Boolean(h.promise),
            "data-swiped": X,
            "data-removed": H,
            "data-visible": ie,
            "data-y-position": ve,
            "data-x-position": ye,
            "data-index": b,
            "data-front": ae,
            "data-swiping": q,
            "data-dismissible": se,
            "data-type": oe,
            "data-invert": we,
            "data-swipe-out": Y,
            "data-swipe-direction": I,
            "data-expanded": Boolean(w || O && V),
            "data-testid": h.testId,
            style: f(f({
                "--index": b,
                "--toasts-before": b,
                "--z-index": x.length - b,
                "--offset": "".concat(H ? G : pe.current, "px"),
                "--initial-height": O ? "auto" : "".concat(Z, "px")
            }, T), h.style),
            onDragEnd: () => {
                $(!1), z(null), ge.current = null
            },
            onPointerDown: e => {
                2 !== e.button && !Se && se && (ne.current = new Date, J(pe.current), e.target.setPointerCapture(e.pointerId), "BUTTON" !== e.target.tagName && ($(!0), ge.current = {
                    x: e.clientX,
                    y: e.clientY
                }))
            },
            onPointerUp: () => {
                var e, t, n;
                if (Y || !se) return;
                ge.current = null;
                const r = Number((null == (e = re.current) ? void 0 : e.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
                    a = Number((null == (t = re.current) ? void 0 : t.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
                    i = (new Date).getTime() - (null == (n = ne.current) ? void 0 : n.getTime()),
                    o = "x" === _ ? r : a,
                    s = Math.abs(o) / i;
                if (Math.abs(o) >= 45 || s > .11) return J(pe.current), null == h.onDismiss || h.onDismiss.call(h, h), B("x" === _ ? r > 0 ? "right" : "left" : a > 0 ? "down" : "up"), ke(), void K(!0);
                var l, u;
                null == (l = re.current) || l.style.setProperty("--swipe-amount-x", "0px"), null == (u = re.current) || u.style.setProperty("--swipe-amount-y", "0px"), Q(!1), $(!1), z(null)
            },
            onPointerMove: t => {
                var n, r, a;
                if (!ge.current || !se) return;
                if ((null == (n = window.getSelection()) ? void 0 : n.toString().length) > 0) return;
                const i = t.clientY - ge.current.y,
                    o = t.clientX - ge.current.x;
                var s;
                const l = null != (s = e.swipeDirections) ? s : function(e) {
                    const [t, n] = e.split("-"), r = [];
                    return t && r.push(t), n && r.push(n), r
                }(A);
                !_ && (Math.abs(o) > 1 || Math.abs(i) > 1) && z(Math.abs(o) > Math.abs(i) ? "x" : "y");
                let u = {
                    x: 0,
                    y: 0
                };
                const c = e => 1 / (1.5 + Math.abs(e) / 20);
                if ("y" === _) {
                    if (l.includes("top") || l.includes("bottom"))
                        if (l.includes("top") && i < 0 || l.includes("bottom") && i > 0) u.y = i;
                        else {
                            const e = i * c(i);
                            u.y = Math.abs(e) < Math.abs(i) ? e : i
                        }
                } else if ("x" === _ && (l.includes("left") || l.includes("right")))
                    if (l.includes("left") && o < 0 || l.includes("right") && o > 0) u.x = o;
                    else {
                        const e = o * c(o);
                        u.x = Math.abs(e) < Math.abs(o) ? e : o
                    }(Math.abs(u.x) > 0 || Math.abs(u.y) > 0) && Q(!0), null == (r = re.current) || r.style.setProperty("--swipe-amount-x", "".concat(u.x, "px")), null == (a = re.current) || a.style.setProperty("--swipe-amount-y", "".concat(u.y, "px"))
            }
        }, de && !h.jsx && "loading" !== oe ? a.createElement("button", {
            "aria-label": L,
            "data-disabled": Se,
            "data-close-button": !0,
            onClick: Se || !se ? () => {} : () => {
                ke(), null == h.onDismiss || h.onDismiss.call(h, h)
            },
            className: tn(null == D ? void 0 : D.closeButton, null == h || null == (r = h.classNames) ? void 0 : r.closeButton)
        }, null != (Ce = null == M ? void 0 : M.close) ? Ce : $t) : null, (oe || h.icon || h.promise) && null !== h.icon && (null !== (null == M ? void 0 : M[oe]) || h.icon) ? a.createElement("div", {
            "data-icon": "",
            className: tn(null == D ? void 0 : D.icon, null == h || null == (i = h.classNames) ? void 0 : i.icon)
        }, h.promise || "loading" === h.type && !h.icon ? h.icon || function() {
            var e, t;
            return (null == M ? void 0 : M.loading) ? a.createElement("div", {
                className: tn(null == D ? void 0 : D.loader, null == h || null == (t = h.classNames) ? void 0 : t.loader, "sonner-loader"),
                "data-visible": "loading" === oe
            }, M.loading) : a.createElement(Vt, {
                className: tn(null == D ? void 0 : D.loader, null == h || null == (e = h.classNames) ? void 0 : e.loader),
                visible: "loading" === oe
            })
        }() : null, "loading" !== h.type ? Ee : null) : null, a.createElement("div", {
            "data-content": "",
            className: tn(null == D ? void 0 : D.content, null == h || null == (o = h.classNames) ? void 0 : o.content)
        }, a.createElement("div", {
            "data-title": "",
            className: tn(null == D ? void 0 : D.title, null == h || null == (s = h.classNames) ? void 0 : s.title)
        }, h.jsx ? h.jsx : "function" === typeof h.title ? h.title() : h.title), h.description ? a.createElement("div", {
            "data-description": "",
            className: tn(R, ue, null == D ? void 0 : D.description, null == h || null == (l = h.classNames) ? void 0 : l.description)
        }, "function" === typeof h.description ? h.description() : h.description) : null), a.isValidElement(h.cancel) ? h.cancel : h.cancel && Jt(h.cancel) ? a.createElement("button", {
            "data-button": !0,
            "data-cancel": !0,
            style: h.cancelButtonStyle || C,
            onClick: e => {
                Jt(h.cancel) && se && (null == h.cancel.onClick || h.cancel.onClick.call(h.cancel, e), ke())
            },
            className: tn(null == D ? void 0 : D.cancelButton, null == h || null == (u = h.classNames) ? void 0 : u.cancelButton)
        }, h.cancel.label) : null, a.isValidElement(h.action) ? h.action : h.action && Jt(h.action) ? a.createElement("button", {
            "data-button": !0,
            "data-action": !0,
            style: h.actionButtonStyle || P,
            onClick: e => {
                Jt(h.action) && (null == h.action.onClick || h.action.onClick.call(h.action, e), e.defaultPrevented || ke())
            },
            className: tn(null == D ? void 0 : D.actionButton, null == h || null == (c = h.classNames) ? void 0 : c.actionButton)
        }, h.action.label) : null)
    };

    function rn() {
        if ("undefined" === typeof window) return "ltr";
        if ("undefined" === typeof document) return "ltr";
        const e = document.documentElement.getAttribute("dir");
        return "auto" !== e && e ? e : window.getComputedStyle(document.documentElement).direction
    }

    function an(e, t) {
        const n = {};
        return [e, t].forEach((e, t) => {
            const r = 1 === t,
                a = r ? "--mobile-offset" : "--offset",
                i = r ? "16px" : "24px";

            function o(e) {
                ["top", "right", "bottom", "left"].forEach(t => {
                    n["".concat(a, "-").concat(t)] = "number" === typeof e ? "".concat(e, "px") : e
                })
            }
            "number" === typeof e || "string" === typeof e ? o(e) : "object" === typeof e ? ["top", "right", "bottom", "left"].forEach(t => {
                void 0 === e[t] ? n["".concat(a, "-").concat(t)] = i : n["".concat(a, "-").concat(t)] = "number" === typeof e[t] ? "".concat(e[t], "px") : e[t]
            }) : o(i)
        }), n
    }
    const on = a.forwardRef(function(e, t) {
        const {
            id: n,
            invert: r,
            position: i = "bottom-right",
            hotkey: o = ["altKey", "KeyT"],
            expand: s,
            closeButton: l,
            className: u,
            offset: c,
            mobileOffset: d,
            theme: h = "light",
            richColors: p,
            duration: m,
            style: g,
            visibleToasts: v = Zt,
            toastOptions: y,
            dir: b = rn(),
            gap: x = en,
            icons: w,
            containerAriaLabel: S = "Notifications"
        } = e, [k, E] = a.useState([]), T = a.useMemo(() => n ? k.filter(e => e.toasterId === n) : k.filter(e => !e.toasterId), [k, n]), C = a.useMemo(() => Array.from(new Set([i].concat(T.filter(e => e.position).map(e => e.position)))), [T, i]), [P, N] = a.useState([]), [R, j] = a.useState(!1), [A, F] = a.useState(!1), [O, D] = a.useState("system" !== h ? h : "undefined" !== typeof window && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), M = a.useRef(null), L = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), _ = a.useRef(null), z = a.useRef(!1), I = a.useCallback(e => {
            E(t => {
                var n;
                return (null == (n = t.find(t => t.id === e.id)) ? void 0 : n.delete) || Kt.dismiss(e.id), t.filter(t => {
                    let {
                        id: n
                    } = t;
                    return n !== e.id
                })
            })
        }, []);
        return a.useEffect(() => Kt.subscribe(e => {
            e.dismiss ? requestAnimationFrame(() => {
                E(t => t.map(t => t.id === e.id ? f(f({}, t), {}, {
                    delete: !0
                }) : t))
            }) : setTimeout(() => {
                zt.flushSync(() => {
                    E(t => {
                        const n = t.findIndex(t => t.id === e.id);
                        return -1 !== n ? [...t.slice(0, n), f(f({}, t[n]), e), ...t.slice(n + 1)] : [e, ...t]
                    })
                })
            })
        }), [k]), a.useEffect(() => {
            if ("system" !== h) return void D(h);
            if ("system" === h && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? D("dark") : D("light")), "undefined" === typeof window) return;
            const e = window.matchMedia("(prefers-color-scheme: dark)");
            try {
                e.addEventListener("change", e => {
                    let {
                        matches: t
                    } = e;
                    D(t ? "dark" : "light")
                })
            } catch (t) {
                e.addListener(e => {
                    let {
                        matches: t
                    } = e;
                    try {
                        D(t ? "dark" : "light")
                    } catch (qh) {
                        console.error(qh)
                    }
                })
            }
        }, [h]), a.useEffect(() => {
            k.length <= 1 && j(!1)
        }, [k]), a.useEffect(() => {
            const e = e => {
                var t;
                var n;
                o.every(t => e[t] || e.code === t) && (j(!0), null == (n = M.current) || n.focus());
                "Escape" !== e.code || document.activeElement !== M.current && !(null == (t = M.current) ? void 0 : t.contains(document.activeElement)) || j(!1)
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
        }, [o]), a.useEffect(() => {
            if (M.current) return () => {
                _.current && (_.current.focus({
                    preventScroll: !0
                }), _.current = null, z.current = !1)
            }
        }, [M.current]), a.createElement("section", {
            ref: t,
            "aria-label": "".concat(S, " ").concat(L),
            tabIndex: -1,
            "aria-live": "polite",
            "aria-relevant": "additions text",
            "aria-atomic": "false",
            suppressHydrationWarning: !0
        }, C.map((t, n) => {
            var i;
            const [o, h] = t.split("-");
            return T.length ? a.createElement("ol", {
                key: t,
                dir: "auto" === b ? rn() : b,
                tabIndex: -1,
                ref: M,
                className: u,
                "data-sonner-toaster": !0,
                "data-sonner-theme": O,
                "data-y-position": o,
                "data-x-position": h,
                style: f(f({
                    "--front-toast-height": "".concat((null == (i = P[0]) ? void 0 : i.height) || 0, "px"),
                    "--width": "".concat(356, "px"),
                    "--gap": "".concat(x, "px")
                }, g), an(c, d)),
                onBlur: e => {
                    z.current && !e.currentTarget.contains(e.relatedTarget) && (z.current = !1, _.current && (_.current.focus({
                        preventScroll: !0
                    }), _.current = null))
                },
                onFocus: e => {
                    e.target instanceof HTMLElement && "false" === e.target.dataset.dismissible || z.current || (z.current = !0, _.current = e.relatedTarget)
                },
                onMouseEnter: () => j(!0),
                onMouseMove: () => j(!0),
                onMouseLeave: () => {
                    A || j(!1)
                },
                onDragEnd: () => j(!1),
                onPointerDown: e => {
                    e.target instanceof HTMLElement && "false" === e.target.dataset.dismissible || F(!0)
                },
                onPointerUp: () => F(!1)
            }, T.filter(e => !e.position && 0 === n || e.position === t).map((n, i) => {
                var o, u;
                return a.createElement(nn, {
                    key: n.id,
                    icons: w,
                    index: i,
                    toast: n,
                    defaultRichColors: p,
                    duration: null != (o = null == y ? void 0 : y.duration) ? o : m,
                    className: null == y ? void 0 : y.className,
                    descriptionClassName: null == y ? void 0 : y.descriptionClassName,
                    invert: r,
                    visibleToasts: v,
                    closeButton: null != (u = null == y ? void 0 : y.closeButton) ? u : l,
                    interacting: A,
                    position: t,
                    style: null == y ? void 0 : y.style,
                    unstyled: null == y ? void 0 : y.unstyled,
                    classNames: null == y ? void 0 : y.classNames,
                    cancelButtonStyle: null == y ? void 0 : y.cancelButtonStyle,
                    actionButtonStyle: null == y ? void 0 : y.actionButtonStyle,
                    closeButtonAriaLabel: null == y ? void 0 : y.closeButtonAriaLabel,
                    removeToast: I,
                    toasts: T.filter(e => e.position == n.position),
                    heights: P.filter(e => e.position == n.position),
                    setHeights: N,
                    expandByDefault: s,
                    gap: x,
                    expanded: R,
                    swipeDirections: e.swipeDirections
                })
            })) : null
        }))
    });
    var sn = n(579);
    const ln = e => {
            let t = Object.assign({}, (function(e) {
                if (null == e) throw new TypeError("Cannot destructure " + e)
            }(e), e));
            const {
                theme: n = "system"
            } = (() => {
                var e;
                return null != (e = a.useContext(Lt)) ? e : _t
            })();
            return (0, sn.jsx)(on, f({
                theme: n,
                className: "toaster group",
                toastOptions: {
                    classNames: {
                        toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                        description: "group-[.toast]:text-muted-foreground",
                        actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                        cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
                    }
                }
            }, t))
        },
        un = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return t.filter((e, t, n) => Boolean(e) && "" !== e.trim() && n.indexOf(e) === t).join(" ").trim()
        },
        cn = e => {
            const t = (e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()))(e);
            return t.charAt(0).toUpperCase() + t.slice(1)
        };
    var dn = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    };
    const fn = ["color", "size", "strokeWidth", "absoluteStrokeWidth", "className", "children", "iconNode"],
        hn = (0, a.forwardRef)((e, t) => {
            let {
                color: n = "currentColor",
                size: r = 24,
                strokeWidth: i = 2,
                absoluteStrokeWidth: o,
                className: l = "",
                children: u,
                iconNode: c
            } = e, d = s(e, fn);
            return (0, a.createElement)("svg", f(f(f({
                ref: t
            }, dn), {}, {
                width: r,
                height: r,
                stroke: n,
                strokeWidth: o ? 24 * Number(i) / Number(r) : i,
                className: un("lucide", l)
            }, !u && !(e => {
                for (const t in e)
                    if (t.startsWith("aria-") || "role" === t || "title" === t) return !0;
                return !1
            })(d) && {
                "aria-hidden": "true"
            }), d), [...c.map(e => {
                let [t, n] = e;
                return (0, a.createElement)(t, n)
            }), ...Array.isArray(u) ? u : [u]])
        }),
        pn = ["className"],
        mn = (e, t) => {
            const n = (0, a.forwardRef)((n, r) => {
                let {
                    className: i
                } = n, o = s(n, pn);
                return (0, a.createElement)(hn, f({
                    ref: r,
                    iconNode: t,
                    className: un("lucide-".concat((l = cn(e), l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase())), "lucide-".concat(e), i)
                }, o));
                var l
            });
            return n.displayName = cn(e), n
        },
        gn = mn("factory", [
            ["path", {
                d: "M12 16h.01",
                key: "1drbdi"
            }],
            ["path", {
                d: "M16 16h.01",
                key: "1f9h7w"
            }],
            ["path", {
                d: "M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",
                key: "1iv0i2"
            }],
            ["path", {
                d: "M8 16h.01",
                key: "18s6g9"
            }]
        ]),
        vn = e => {
            let {
                children: t
            } = e;
            const n = ke();
            return (0, sn.jsxs)("div", {
                className: "min-h-screen flex flex-col",
                children: [(0, sn.jsx)("nav", {
                    className: "fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100",
                    children: (0, sn.jsx)("div", {
                        className: "max-w-7xl mx-auto px-6 md:px-12",
                        children: (0, sn.jsxs)("div", {
                            className: "flex items-center justify-between h-20",
                            children: [(0, sn.jsxs)(Nt, {
                                to: "/",
                                className: "flex items-center gap-3",
                                "data-testid": "logo-link",
                                children: [(0, sn.jsx)("div", {
                                    className: "w-10 h-10 bg-industrial-blue flex items-center justify-center",
                                    children: (0, sn.jsx)(gn, {
                                        className: "w-6 h-6 text-white"
                                    })
                                }), (0, sn.jsx)("span", {
                                    className: "font-heading font-bold text-xl text-industrial-blue tracking-tight",
                                    children: "MACRO WIRING"
                                })]
                            }), (0, sn.jsx)("div", {
                                className: "hidden md:flex items-center gap-8",
                                children: [{
                                    path: "/",
                                    label: "HOME"
                                }, {
                                    path: "/products",
                                    label: "PRODUCTS"
                                }, {
                                    path: "/services",
                                    label: "SERVICES"
                                }, {
                                    path: "/about",
                                    label: "ABOUT"
                                }, {
                                    path: "/contact",
                                    label: "CONTACT"
                                }].map(e => (0, sn.jsx)(Nt, {
                                    to: e.path,
                                    "data-testid": "nav-".concat(e.label.toLowerCase()),
                                    className: "text-sm font-medium uppercase tracking-widest transition-colors ".concat(n.pathname === e.path ? "text-electric-blue" : "text-slate-600 hover:text-electric-blue"),
                                    children: e.label
                                }, e.path))
                            }), (0, sn.jsx)("button", {
                                className: "md:hidden text-slate-600",
                                "data-testid": "mobile-menu-btn",
                                children: (0, sn.jsx)("svg", {
                                    className: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, sn.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4 6h16M4 12h16M4 18h16"
                                    })
                                })
                            })]
                        })
                    })
                }), (0, sn.jsx)("main", {
                    className: "flex-1 mt-20",
                    children: t
                }), (0, sn.jsx)("footer", {
                    className: "bg-industrial-blue text-white",
                    children: (0, sn.jsxs)("div", {
                        className: "max-w-7xl mx-auto px-6 md:px-12 py-16",
                        children: [(0, sn.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-12",
                            children: [(0, sn.jsxs)("div", {
                                children: [(0, sn.jsxs)("div", {
                                    className: "flex items-center gap-3 mb-6",
                                    children: [(0, sn.jsx)("div", {
                                        className: "w-10 h-10 bg-electric-blue flex items-center justify-center",
                                        children: (0, sn.jsx)(gn, {
                                            className: "w-6 h-6 text-white"
                                        })
                                    }), (0, sn.jsx)("span", {
                                        className: "font-heading font-bold text-xl tracking-tight",
                                        children: "MACRO WIRING"
                                    })]
                                }), (0, sn.jsx)("p", {
                                    className: "text-slate-400 text-sm leading-relaxed",
                                    children: "With 20+ years in the industry, we are your trusted partner for precision wire harness solutions."
                                })]
                            }), (0, sn.jsxs)("div", {
                                children: [(0, sn.jsx)("h3", {
                                    className: "font-heading text-lg font-bold mb-4 uppercase tracking-wider",
                                    children: "CONTACT"
                                }), (0, sn.jsxs)("div", {
                                    className: "space-y-2 text-sm text-slate-400",
                                    children: [(0, sn.jsx)("p", {
                                        children: "Tel: (+63 46) 437-7204"
                                    }), (0, sn.jsx)("p", {
                                        children: "Tel: (+63 46) 477-2499"
                                    }), (0, sn.jsx)("p", {
                                        children: "Fax: (+63 46) 437-9272"
                                    }), (0, sn.jsx)("p", {
                                        children: "Email: sales@macrowiring.co"
                                    })]
                                })]
                            }), (0, sn.jsxs)("div", {
                                children: [(0, sn.jsx)("h3", {
                                    className: "font-heading text-lg font-bold mb-4 uppercase tracking-wider",
                                    children: "LOCATION"
                                }), (0, sn.jsxs)("p", {
                                    className: "text-sm text-slate-400 leading-relaxed",
                                    children: ["Lot 3 Block 17 Phase 4", (0, sn.jsx)("br", {}), "Cavite Economic Zone", (0, sn.jsx)("br", {}), "Rosario, Cavite", (0, sn.jsx)("br", {}), "Philippines 4106"]
                                })]
                            })]
                        }), (0, sn.jsx)("div", {
                            className: "border-t border-slate-700 mt-12 pt-8 text-center text-sm text-slate-500",
                            children: (0, sn.jsx)("p", {
                                children: "\xa9 2026 Macro Wiring Technologies Co. Inc. All Rights Reserved."
                            })
                        })]
                    })
                })]
            })
        },
        yn = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        bn = (() => new Set(yn))(),
        xn = (e, t, n) => n > t ? t : n < e ? e : n,
        wn = {
            test: e => "number" === typeof e,
            parse: parseFloat,
            transform: e => e
        },
        Sn = f(f({}, wn), {}, {
            transform: e => xn(0, 1, e)
        }),
        kn = f(f({}, wn), {}, {
            default: 1
        }),
        En = e => Math.round(1e5 * e) / 1e5,
        Tn = /-?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)/g;
    const Cn = /^(?:#[0-9a-f]{3,8}|(?:rgb|h[s\u017F]l)a?\((?:-?[\.0-9]+%?[\t-\r ,\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+){2}-?[\.0-9]+%?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:[,\/][\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(?:\b[0-9]+(?:\.[0-9]+)?|\.[0-9]+)?%?\))$/i,
        Pn = (e, t) => n => Boolean("string" === typeof n && Cn.test(n) && n.startsWith(e) || t && ! function(e) {
            return null == e
        }(n) && Object.prototype.hasOwnProperty.call(n, t)),
        Nn = (e, t, n) => r => {
            if ("string" !== typeof r) return r;
            const [a, i, o, s] = r.match(Tn);
            return {
                [e]: parseFloat(a),
                [t]: parseFloat(i),
                [n]: parseFloat(o),
                alpha: void 0 !== s ? parseFloat(s) : 1
            }
        },
        Rn = f(f({}, wn), {}, {
            transform: e => Math.round((e => xn(0, 255, e))(e))
        }),
        jn = {
            test: Pn("rgb", "red"),
            parse: Nn("red", "green", "blue"),
            transform: e => {
                let {
                    red: t,
                    green: n,
                    blue: r,
                    alpha: a = 1
                } = e;
                return "rgba(" + Rn.transform(t) + ", " + Rn.transform(n) + ", " + Rn.transform(r) + ", " + En(Sn.transform(a)) + ")"
            }
        };
    const An = {
            test: Pn("#"),
            parse: function(e) {
                let t = "",
                    n = "",
                    r = "",
                    a = "";
                return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), a = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), a = e.substring(4, 5), t += t, n += n, r += r, a += a), {
                    red: parseInt(t, 16),
                    green: parseInt(n, 16),
                    blue: parseInt(r, 16),
                    alpha: a ? parseInt(a, 16) / 255 : 1
                }
            },
            transform: jn.transform
        },
        Fn = e => ({
            test: t => "string" === typeof t && t.endsWith(e) && 1 === t.split(" ").length,
            parse: parseFloat,
            transform: t => "".concat(t).concat(e)
        }),
        On = Fn("deg"),
        Dn = Fn("%"),
        Mn = Fn("px"),
        Ln = Fn("vh"),
        _n = Fn("vw"),
        zn = (() => f(f({}, Dn), {}, {
            parse: e => Dn.parse(e) / 100,
            transform: e => Dn.transform(100 * e)
        }))(),
        In = {
            test: Pn("hsl", "hue"),
            parse: Nn("hue", "saturation", "lightness"),
            transform: e => {
                let {
                    hue: t,
                    saturation: n,
                    lightness: r,
                    alpha: a = 1
                } = e;
                return "hsla(" + Math.round(t) + ", " + Dn.transform(En(n)) + ", " + Dn.transform(En(r)) + ", " + En(Sn.transform(a)) + ")"
            }
        },
        Bn = {
            test: e => jn.test(e) || An.test(e) || In.test(e),
            parse: e => jn.test(e) ? jn.parse(e) : In.test(e) ? In.parse(e) : An.parse(e),
            transform: e => "string" === typeof e ? e : e.hasOwnProperty("red") ? jn.transform(e) : In.transform(e),
            getAnimatableNone: e => {
                const t = Bn.parse(e);
                return t.alpha = 0, Bn.transform(t)
            }
        },
        Vn = /(?:#[0-9a-f]{3,8}|(?:rgb|h[s\u017F]l)a?\((?:-?[\.0-9]+%?[\t-\r ,\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+){2}-?[\.0-9]+%?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:[,\/][\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(?:\b[0-9]+(?:\.[0-9]+)?|\.[0-9]+)?%?\))/gi;
    const Un = "number",
        Hn = "color",
        Wn = /var[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*--(?:[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*,(?:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:(?![\t-\r \(\)\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\((?:(?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|\((?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])*\))*\))+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)\)|#[0-9a-f]{3,8}|(?:rgb|h[s\u017F]l)a?\((?:-?[\.0-9]+%?[\t-\r ,\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+){2}-?[\.0-9]+%?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:[,\/][\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(?:\b[0-9]+(?:\.[0-9]+)?|\.[0-9]+)?%?\)|-?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)/gi;

    function qn(e) {
        const t = e.toString(),
            n = [],
            r = {
                color: [],
                number: [],
                var: []
            },
            a = [];
        let i = 0;
        const o = t.replace(Wn, e => (Bn.test(e) ? (r.color.push(i), a.push(Hn), n.push(Bn.parse(e))) : e.startsWith("var(") ? (r.var.push(i), a.push("var"), n.push(e)) : (r.number.push(i), a.push(Un), n.push(parseFloat(e))), ++i, "${}")).split("${}");
        return {
            values: n,
            split: o,
            indexes: r,
            types: a
        }
    }

    function $n(e) {
        return qn(e).values
    }

    function Yn(e) {
        const {
            split: t,
            types: n
        } = qn(e), r = t.length;
        return e => {
            let a = "";
            for (let i = 0; i < r; i++)
                if (a += t[i], void 0 !== e[i]) {
                    const t = n[i];
                    a += t === Un ? En(e[i]) : t === Hn ? Bn.transform(e[i]) : e[i]
                }
            return a
        }
    }
    const Kn = e => "number" === typeof e ? 0 : Bn.test(e) ? Bn.getAnimatableNone(e) : e;
    const Xn = {
            test: function(e) {
                var t, n;
                return isNaN(e) && "string" === typeof e && ((null === (t = e.match(Tn)) || void 0 === t ? void 0 : t.length) || 0) + ((null === (n = e.match(Vn)) || void 0 === n ? void 0 : n.length) || 0) > 0
            },
            parse: $n,
            createTransformer: Yn,
            getAnimatableNone: function(e) {
                const t = $n(e);
                return Yn(e)(t.map(Kn))
            }
        },
        Qn = new Set(["brightness", "contrast", "saturate", "opacity"]);

    function Gn(e) {
        const [t, n] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        const [r] = n.match(Tn) || [];
        if (!r) return e;
        const a = n.replace(r, "");
        let i = Qn.has(t) ? 1 : 0;
        return r !== n && (i *= 100), t + "(" + i + a + ")"
    }
    const Jn = /\b([\x2Da-z]*)\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\)/g,
        Zn = f(f({}, Xn), {}, {
            getAnimatableNone: e => {
                const t = e.match(Jn);
                return t ? t.map(Gn).join(" ") : e
            }
        }),
        er = f(f({}, Xn), {}, {
            getAnimatableNone: e => {
                const t = Xn.parse(e);
                return Xn.createTransformer(e)(t.map(e => "number" === typeof e ? 0 : "object" === typeof e ? f(f({}, e), {}, {
                    alpha: 1
                }) : e))
            }
        }),
        tr = f(f({}, wn), {}, {
            transform: Math.round
        }),
        nr = f(f({
            borderWidth: Mn,
            borderTopWidth: Mn,
            borderRightWidth: Mn,
            borderBottomWidth: Mn,
            borderLeftWidth: Mn,
            borderRadius: Mn,
            borderTopLeftRadius: Mn,
            borderTopRightRadius: Mn,
            borderBottomRightRadius: Mn,
            borderBottomLeftRadius: Mn,
            width: Mn,
            maxWidth: Mn,
            height: Mn,
            maxHeight: Mn,
            top: Mn,
            right: Mn,
            bottom: Mn,
            left: Mn,
            inset: Mn,
            insetBlock: Mn,
            insetBlockStart: Mn,
            insetBlockEnd: Mn,
            insetInline: Mn,
            insetInlineStart: Mn,
            insetInlineEnd: Mn,
            padding: Mn,
            paddingTop: Mn,
            paddingRight: Mn,
            paddingBottom: Mn,
            paddingLeft: Mn,
            paddingBlock: Mn,
            paddingBlockStart: Mn,
            paddingBlockEnd: Mn,
            paddingInline: Mn,
            paddingInlineStart: Mn,
            paddingInlineEnd: Mn,
            margin: Mn,
            marginTop: Mn,
            marginRight: Mn,
            marginBottom: Mn,
            marginLeft: Mn,
            marginBlock: Mn,
            marginBlockStart: Mn,
            marginBlockEnd: Mn,
            marginInline: Mn,
            marginInlineStart: Mn,
            marginInlineEnd: Mn,
            fontSize: Mn,
            backgroundPositionX: Mn,
            backgroundPositionY: Mn
        }, {
            rotate: On,
            rotateX: On,
            rotateY: On,
            rotateZ: On,
            scale: kn,
            scaleX: kn,
            scaleY: kn,
            scaleZ: kn,
            skew: On,
            skewX: On,
            skewY: On,
            distance: Mn,
            translateX: Mn,
            translateY: Mn,
            translateZ: Mn,
            x: Mn,
            y: Mn,
            z: Mn,
            perspective: Mn,
            transformPerspective: Mn,
            opacity: Sn,
            originX: zn,
            originY: zn,
            originZ: Mn
        }), {}, {
            zIndex: tr,
            fillOpacity: Sn,
            strokeOpacity: Sn,
            numOctaves: tr
        }),
        rr = f(f({}, nr), {}, {
            color: Bn,
            backgroundColor: Bn,
            outlineColor: Bn,
            fill: Bn,
            stroke: Bn,
            borderColor: Bn,
            borderTopColor: Bn,
            borderRightColor: Bn,
            borderBottomColor: Bn,
            borderLeftColor: Bn,
            filter: Zn,
            WebkitFilter: Zn,
            mask: er,
            WebkitMask: er
        }),
        ar = e => rr[e],
        ir = () => ({
            x: {
                min: 0,
                max: 0
            },
            y: {
                min: 0,
                max: 0
            }
        }),
        or = e => Boolean(e && e.getVelocity),
        sr = new Set(["width", "height", "top", "left", "right", "bottom", ...yn]),
        lr = e => t => t.test(e),
        ur = [wn, Mn, Dn, On, _n, Ln, {
            test: e => "auto" === e,
            parse: e => e
        }],
        cr = e => ur.find(lr(e));

    function dr(e, t) {
        return t ? "".concat(e, ". For more information and steps for solving, visit https://motion.dev/troubleshooting/").concat(t) : e
    }
    var fr;
    let hr = () => {},
        pr = () => {};
    "undefined" !== typeof process && "production" !== (null === (fr = {
        NODE_ENV: "production",
        PUBLIC_URL: "/pod-backups/pdf-web-builder-5/build",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: "443",
        FAST_REFRESH: !0,
        REACT_APP_BACKEND_URL: "https://pdf-web-builder-5.preview.emergentagent.com"
    }) || void 0 === fr ? void 0 : fr.NODE_ENV) && (hr = (e, t, n) => {
        e || "undefined" === typeof console || console.warn(dr(t, n))
    }, pr = (e, t, n) => {
        if (!e) throw new Error(dr(t, n))
    });
    const mr = e => /^-?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)$/.test(e),
        gr = e => t => "string" === typeof t && t.startsWith(e),
        vr = gr("--"),
        yr = gr("var(--"),
        br = e => !!yr(e) && xr.test(e.split("/*")[0].trim()),
        xr = /var\(--(?:[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*,(?:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:(?![\t-\r \(\)\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\((?:(?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|\((?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])*\))*\))+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)\)$/i;

    function wr(e) {
        return "string" === typeof e && e.split("/*")[0].includes("var(--")
    }
    const Sr = /^var\(--(?:([\x2D0-9A-Z_a-z]+)|([\x2D0-9A-Z_a-z]+), ?([ #%\(\),-\.0-9A-Za-z]+))\)/;

    function kr(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        pr(n <= 4, 'Max CSS variable fallback depth detected in property "'.concat(e, '". This may indicate a circular fallback dependency.'), "max-css-var-depth");
        const [r, a] = function(e) {
            const t = Sr.exec(e);
            if (!t) return [, ];
            const [, n, r, a] = t;
            return ["--".concat(null !== n && void 0 !== n ? n : r), a]
        }(e);
        if (!r) return;
        const i = window.getComputedStyle(t).getPropertyValue(r);
        if (i) {
            const e = i.trim();
            return mr(e) ? parseFloat(e) : e
        }
        return br(a) ? kr(a, t, n + 1) : a
    }
    const Er = e => 180 * e / Math.PI,
        Tr = e => {
            const t = Er(Math.atan2(e[1], e[0]));
            return Pr(t)
        },
        Cr = {
            x: 4,
            y: 5,
            translateX: 4,
            translateY: 5,
            scaleX: 0,
            scaleY: 3,
            scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
            rotate: Tr,
            rotateZ: Tr,
            skewX: e => Er(Math.atan(e[1])),
            skewY: e => Er(Math.atan(e[2])),
            skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
        },
        Pr = e => ((e %= 360) < 0 && (e += 360), e),
        Nr = e => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
        Rr = e => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
        jr = {
            x: 12,
            y: 13,
            z: 14,
            translateX: 12,
            translateY: 13,
            translateZ: 14,
            scaleX: Nr,
            scaleY: Rr,
            scale: e => (Nr(e) + Rr(e)) / 2,
            rotateX: e => Pr(Er(Math.atan2(e[6], e[5]))),
            rotateY: e => Pr(Er(Math.atan2(-e[2], e[0]))),
            rotateZ: Tr,
            rotate: Tr,
            skewX: e => Er(Math.atan(e[4])),
            skewY: e => Er(Math.atan(e[1])),
            skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
        };

    function Ar(e) {
        return e.includes("scale") ? 1 : 0
    }

    function Fr(e, t) {
        if (!e || "none" === e) return Ar(t);
        const n = e.match(/^matrix3d\(([\t-\r ,-\.0-9e\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+)\)$/);
        let r, a;
        if (n) r = jr, a = n;
        else {
            const t = e.match(/^matrix\(([\t-\r ,-\.0-9e\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+)\)$/);
            r = Cr, a = t
        }
        if (!a) return Ar(t);
        const i = r[t],
            o = a[1].split(",").map(Or);
        return "function" === typeof i ? i(o) : o[i]
    }

    function Or(e) {
        return parseFloat(e.trim())
    }
    const Dr = e => e === wn || e === Mn,
        Mr = new Set(["x", "y", "z"]),
        Lr = yn.filter(e => !Mr.has(e));
    const _r = {
        width: (e, t) => {
            let {
                x: n
            } = e, {
                paddingLeft: r = "0",
                paddingRight: a = "0"
            } = t;
            return n.max - n.min - parseFloat(r) - parseFloat(a)
        },
        height: (e, t) => {
            let {
                y: n
            } = e, {
                paddingTop: r = "0",
                paddingBottom: a = "0"
            } = t;
            return n.max - n.min - parseFloat(r) - parseFloat(a)
        },
        top: (e, t) => {
            let {
                top: n
            } = t;
            return parseFloat(n)
        },
        left: (e, t) => {
            let {
                left: n
            } = t;
            return parseFloat(n)
        },
        bottom: (e, t) => {
            let {
                y: n
            } = e, {
                top: r
            } = t;
            return parseFloat(r) + (n.max - n.min)
        },
        right: (e, t) => {
            let {
                x: n
            } = e, {
                left: r
            } = t;
            return parseFloat(r) + (n.max - n.min)
        },
        x: (e, t) => {
            let {
                transform: n
            } = t;
            return Fr(n, "x")
        },
        y: (e, t) => {
            let {
                transform: n
            } = t;
            return Fr(n, "y")
        }
    };
    _r.translateX = _r.x, _r.translateY = _r.y;
    const zr = e => e,
        Ir = {},
        Br = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"],
        Vr = {
            value: null,
            addProjectionMetrics: null
        };

    function Ur(e, t) {
        let n = !1,
            r = !0;
        const a = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            },
            i = () => n = !0,
            o = Br.reduce((e, n) => (e[n] = function(e, t) {
                let n = new Set,
                    r = new Set,
                    a = !1,
                    i = !1;
                const o = new WeakSet;
                let s = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    },
                    l = 0;

                function u(t) {
                    o.has(t) && (c.schedule(t), e()), l++, t(s)
                }
                const c = {
                    schedule: function(e) {
                        const t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && a ? n : r;
                        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && o.add(e), t.has(e) || t.add(e), e
                    },
                    cancel: e => {
                        r.delete(e), o.delete(e)
                    },
                    process: e => {
                        s = e, a ? i = !0 : (a = !0, [n, r] = [r, n], n.forEach(u), t && Vr.value && Vr.value.frameloop[t].push(l), l = 0, n.clear(), a = !1, i && (i = !1, c.process(e)))
                    }
                };
                return c
            }(i, t ? n : void 0), e), {}),
            {
                setup: s,
                read: l,
                resolveKeyframes: u,
                preUpdate: c,
                update: d,
                preRender: f,
                render: h,
                postRender: p
            } = o,
            m = () => {
                const i = Ir.useManualTiming ? a.timestamp : performance.now();
                n = !1, Ir.useManualTiming || (a.delta = r ? 1e3 / 60 : Math.max(Math.min(i - a.timestamp, 40), 1)), a.timestamp = i, a.isProcessing = !0, s.process(a), l.process(a), u.process(a), c.process(a), d.process(a), f.process(a), h.process(a), p.process(a), a.isProcessing = !1, n && t && (r = !1, e(m))
            },
            g = Br.reduce((t, i) => {
                const s = o[i];
                return t[i] = function(t) {
                    let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n || (n = !0, r = !0, a.isProcessing || e(m)), s.schedule(t, i, o)
                }, t
            }, {});
        return {
            schedule: g,
            cancel: e => {
                for (let t = 0; t < Br.length; t++) o[Br[t]].cancel(e)
            },
            state: a,
            steps: o
        }
    }
    const {
        schedule: Hr,
        cancel: Wr,
        state: qr,
        steps: $r
    } = Ur("undefined" !== typeof requestAnimationFrame ? requestAnimationFrame : zr, !0), Yr = new Set;
    let Kr = !1,
        Xr = !1,
        Qr = !1;

    function Gr() {
        if (Xr) {
            const e = Array.from(Yr).filter(e => e.needsMeasurement),
                t = new Set(e.map(e => e.element)),
                n = new Map;
            t.forEach(e => {
                const t = function(e) {
                    const t = [];
                    return Lr.forEach(n => {
                        const r = e.getValue(n);
                        void 0 !== r && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
                    }), t
                }(e);
                t.length && (n.set(e, t), e.render())
            }), e.forEach(e => e.measureInitialState()), t.forEach(e => {
                e.render();
                const t = n.get(e);
                t && t.forEach(t => {
                    var n;
                    let [r, a] = t;
                    null === (n = e.getValue(r)) || void 0 === n || n.set(a)
                })
            }), e.forEach(e => e.measureEndState()), e.forEach(e => {
                void 0 !== e.suspendedScrollY && window.scrollTo(0, e.suspendedScrollY)
            })
        }
        Xr = !1, Kr = !1, Yr.forEach(e => e.complete(Qr)), Yr.clear()
    }

    function Jr() {
        Yr.forEach(e => {
            e.readKeyframes(), e.needsMeasurement && (Xr = !0)
        })
    }
    class Zr {
        constructor(e, t, n, r, a) {
            let i = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = a, this.isAsync = i
        }
        scheduleResolve() {
            this.state = "scheduled", this.isAsync ? (Yr.add(this), Kr || (Kr = !0, Hr.read(Jr), Hr.resolveKeyframes(Gr))) : (this.readKeyframes(), this.complete())
        }
        readKeyframes() {
            const {
                unresolvedKeyframes: e,
                name: t,
                element: n,
                motionValue: r
            } = this;
            if (null === e[0]) {
                const a = null === r || void 0 === r ? void 0 : r.get(),
                    i = e[e.length - 1];
                if (void 0 !== a) e[0] = a;
                else if (n && t) {
                    const r = n.readValue(t, i);
                    void 0 !== r && null !== r && (e[0] = r)
                }
                void 0 === e[0] && (e[0] = i), r && void 0 === a && r.set(e[0])
            }! function(e) {
                for (let n = 1; n < e.length; n++) {
                    var t;
                    null !== (t = e[n]) && void 0 !== t || (e[n] = e[n - 1])
                }
            }(e)
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), Yr.delete(this)
        }
        cancel() {
            "scheduled" === this.state && (Yr.delete(this), this.state = "pending")
        }
        resume() {
            "pending" === this.state && this.scheduleResolve()
        }
    }
    const ea = e => /^0(?:[\0-\x08\x0E-\x1F!-\x2D\/-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+$/.test(e);

    function ta(e) {
        return "number" === typeof e ? 0 === e : null === e || ("none" === e || "0" === e || ea(e))
    }
    const na = new Set([Zn, er]);

    function ra(e, t) {
        let n = ar(e);
        return na.has(n) || (n = Xn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
    }
    const aa = new Set(["auto", "none", "0"]);
    class ia extends Zr {
        constructor(e, t, n, r, a) {
            super(e, t, n, r, a, !0)
        }
        readKeyframes() {
            const {
                unresolvedKeyframes: e,
                element: t,
                name: n
            } = this;
            if (!t || !t.current) return;
            super.readKeyframes();
            for (let s = 0; s < e.length; s++) {
                let n = e[s];
                if ("string" === typeof n && (n = n.trim(), br(n))) {
                    const r = kr(n, t.current);
                    void 0 !== r && (e[s] = r), s === e.length - 1 && (this.finalKeyframe = n)
                }
            }
            if (this.resolveNoneKeyframes(), !sr.has(n) || 2 !== e.length) return;
            const [r, a] = e, i = cr(r), o = cr(a);
            if (wr(r) !== wr(a) && _r[n]) this.needsMeasurement = !0;
            else if (i !== o)
                if (Dr(i) && Dr(o))
                    for (let s = 0; s < e.length; s++) {
                        const t = e[s];
                        "string" === typeof t && (e[s] = parseFloat(t))
                    } else _r[n] && (this.needsMeasurement = !0)
        }
        resolveNoneKeyframes() {
            const {
                unresolvedKeyframes: e,
                name: t
            } = this, n = [];
            for (let r = 0; r < e.length; r++)(null === e[r] || ta(e[r])) && n.push(r);
            n.length && function(e, t, n) {
                let r, a = 0;
                for (; a < e.length && !r;) {
                    const t = e[a];
                    "string" === typeof t && !aa.has(t) && qn(t).values.length && (r = e[a]), a++
                }
                if (r && n)
                    for (const i of t) e[i] = ra(n, r)
            }(e, n, t)
        }
        measureInitialState() {
            const {
                element: e,
                unresolvedKeyframes: t,
                name: n
            } = this;
            if (!e || !e.current) return;
            "height" === n && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = _r[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
            const r = t[t.length - 1];
            void 0 !== r && e.getValue(n, r).jump(r, !1)
        }
        measureEndState() {
            var e;
            const {
                element: t,
                name: n,
                unresolvedKeyframes: r
            } = this;
            if (!t || !t.current) return;
            const a = t.getValue(n);
            a && a.jump(this.measuredOrigin, !1);
            const i = r.length - 1,
                o = r[i];
            r[i] = _r[n](t.measureViewportBox(), window.getComputedStyle(t.current)), null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o), null !== (e = this.removedTransforms) && void 0 !== e && e.length && this.removedTransforms.forEach(e => {
                let [n, r] = e;
                t.getValue(n).set(r)
            }), this.resolveNoneKeyframes()
        }
    }
    const oa = e => 1e3 * e,
        sa = e => e / 1e3;

    function la(e, t) {
        -1 === e.indexOf(t) && e.push(t)
    }

    function ua(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    }
    class ca {
        constructor() {
            this.subscriptions = []
        }
        add(e) {
            return la(this.subscriptions, e), () => ua(this.subscriptions, e)
        }
        notify(e, t, n) {
            const r = this.subscriptions.length;
            if (r)
                if (1 === r) this.subscriptions[0](e, t, n);
                else
                    for (let a = 0; a < r; a++) {
                        const r = this.subscriptions[a];
                        r && r(e, t, n)
                    }
        }
        getSize() {
            return this.subscriptions.length
        }
        clear() {
            this.subscriptions.length = 0
        }
    }

    function da(e) {
        let t;
        return () => (void 0 === t && (t = e()), t)
    }
    const fa = {};

    function ha(e, t) {
        const n = da(e);
        return () => {
            var e;
            return null !== (e = fa[t]) && void 0 !== e ? e : n()
        }
    }
    const pa = ha(() => void 0 !== window.ScrollTimeline, "scrollTimeline"),
        ma = e => null !== e;

    function ga(e, t, n) {
        let {
            repeat: r,
            repeatType: a = "loop"
        } = t, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        const o = e.filter(ma),
            s = i < 0 || r && "loop" !== a && r % 2 === 1 ? 0 : o.length - 1;
        return s && void 0 !== n ? n : o[s]
    }
    class va {
        constructor() {
            this.updateFinished()
        }
        get finished() {
            return this._finished
        }
        updateFinished() {
            this._finished = new Promise(e => {
                this.resolve = e
            })
        }
        notifyFinished() {
            this.resolve()
        }
        then(e, t) {
            return this.finished.then(e, t)
        }
    }
    const ya = {
            layout: 0,
            mainThread: 0,
            waapi: 0
        },
        ba = e => Array.isArray(e) && "number" === typeof e[0],
        xa = ha(() => {
            try {
                document.createElement("div").animate({
                    opacity: 0
                }, {
                    easing: "linear(0, 1)"
                })
            } catch (qh) {
                return !1
            }
            return !0
        }, "linearEasing"),
        wa = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                r = "";
            const a = Math.max(Math.round(t / n), 2);
            for (let i = 0; i < a; i++) r += Math.round(1e4 * e(i / (a - 1))) / 1e4 + ", ";
            return "linear(".concat(r.substring(0, r.length - 2), ")")
        },
        Sa = e => {
            let [t, n, r, a] = e;
            return "cubic-bezier(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(a, ")")
        },
        ka = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: Sa([0, .65, .55, 1]),
            circOut: Sa([.55, 0, 1, .45]),
            backIn: Sa([.31, .01, .66, -.59]),
            backOut: Sa([.33, 1.53, .69, .99])
        };

    function Ea(e, t) {
        return e ? "function" === typeof e ? xa() ? wa(e, t) : "ease-out" : ba(e) ? Sa(e) : Array.isArray(e) ? e.map(e => Ea(e, t) || ka.easeOut) : ka[e] : void 0
    }

    function Ta(e, t, n) {
        let {
            delay: r = 0,
            duration: a = 300,
            repeat: i = 0,
            repeatType: o = "loop",
            ease: s = "easeOut",
            times: l
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0;
        const c = {
            [t]: n
        };
        l && (c.offset = l);
        const d = Ea(s, a);
        Array.isArray(d) && (c.easing = d), Vr.value && ya.waapi++;
        const f = {
            delay: r,
            duration: a,
            easing: Array.isArray(d) ? "linear" : d,
            fill: "both",
            iterations: i + 1,
            direction: "reverse" === o ? "alternate" : "normal"
        };
        u && (f.pseudoElement = u);
        const h = e.animate(c, f);
        return Vr.value && h.finished.finally(() => {
            ya.waapi--
        }), h
    }

    function Ca(e) {
        return "function" === typeof e && "applyToOptions" in e
    }
    const Pa = ["type"];
    class Na extends va {
        constructor(e) {
            if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e) return;
            const {
                element: t,
                name: n,
                keyframes: r,
                pseudoElement: a,
                allowFlatten: i = !1,
                finalKeyframe: o,
                onComplete: l
            } = e;
            this.isPseudoElement = Boolean(a), this.allowFlatten = i, this.options = e, pr("string" !== typeof e.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring");
            const u = function(e) {
                let {
                    type: t
                } = e, n = s(e, Pa);
                return Ca(t) && xa() ? t.applyToOptions(n) : (null !== (r = n.duration) && void 0 !== r || (n.duration = 300), null !== (a = n.ease) && void 0 !== a || (n.ease = "easeOut"), n);
                var r, a
            }(e);
            this.animation = Ta(t, n, r, u, a), !1 === u.autoplay && this.animation.pause(), this.animation.onfinish = () => {
                if (this.finishedTime = this.time, !a) {
                    const e = ga(r, this.options, o, this.speed);
                    this.updateMotionValue ? this.updateMotionValue(e) : function(e, t, n) {
                        (e => e.startsWith("--"))(t) ? e.style.setProperty(t, n): e.style[t] = n
                    }(t, n, e), this.animation.cancel()
                }
                null === l || void 0 === l || l(), this.notifyFinished()
            }
        }
        play() {
            this.isStopped || (this.manualStartTime = null, this.animation.play(), "finished" === this.state && this.updateFinished())
        }
        pause() {
            this.animation.pause()
        }
        complete() {
            var e, t;
            null === (e = (t = this.animation).finish) || void 0 === e || e.call(t)
        }
        cancel() {
            try {
                this.animation.cancel()
            } catch (qh) {}
        }
        stop() {
            if (this.isStopped) return;
            this.isStopped = !0;
            const {
                state: e
            } = this;
            "idle" !== e && "finished" !== e && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
        }
        commitStyles() {
            var e;
            const t = null === (e = this.options) || void 0 === e ? void 0 : e.element;
            var n, r;
            !this.isPseudoElement && null !== t && void 0 !== t && t.isConnected && (null === (n = (r = this.animation).commitStyles) || void 0 === n || n.call(r))
        }
        get duration() {
            var e, t;
            const n = (null === (e = this.animation.effect) || void 0 === e || null === (t = e.getComputedTiming) || void 0 === t ? void 0 : t.call(e).duration) || 0;
            return sa(Number(n))
        }
        get iterationDuration() {
            const {
                delay: e = 0
            } = this.options || {};
            return this.duration + sa(e)
        }
        get time() {
            return sa(Number(this.animation.currentTime) || 0)
        }
        set time(e) {
            this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = oa(e)
        }
        get speed() {
            return this.animation.playbackRate
        }
        set speed(e) {
            e < 0 && (this.finishedTime = null), this.animation.playbackRate = e
        }
        get state() {
            return null !== this.finishedTime ? "finished" : this.animation.playState
        }
        get startTime() {
            var e;
            return null !== (e = this.manualStartTime) && void 0 !== e ? e : Number(this.animation.startTime)
        }
        set startTime(e) {
            this.manualStartTime = this.animation.startTime = e
        }
        attachTimeline(e) {
            let {
                timeline: t,
                observe: n
            } = e;
            var r;
            this.allowFlatten && (null === (r = this.animation.effect) || void 0 === r || r.updateTiming({
                easing: "linear"
            }));
            return this.animation.onfinish = null, t && pa() ? (this.animation.timeline = t, zr) : n(this)
        }
    }
    const Ra = new Set(["opacity", "clipPath", "filter", "transform"]),
        {
            schedule: ja,
            cancel: Aa
        } = Ur(queueMicrotask, !1);
    let Fa;

    function Oa() {
        Fa = void 0
    }
    const Da = {
        now: () => (void 0 === Fa && Da.set(qr.isProcessing || Ir.useManualTiming ? qr.timestamp : performance.now()), Fa),
        set: e => {
            Fa = e, queueMicrotask(Oa)
        }
    };

    function Ma(e, t) {
        return t ? e * (1e3 / t) : 0
    }
    const La = {
        current: void 0
    };
    class _a {
        constructor(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = e => {
                const t = Da.now();
                var n;
                if ((this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev) && (null === (n = this.events.change) || void 0 === n || n.notify(this.current), this.dependents))
                    for (const r of this.dependents) r.dirty()
            }, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner
        }
        setCurrent(e) {
            var t;
            this.current = e, this.updatedAt = Da.now(), null === this.canTrackVelocity && void 0 !== e && (this.canTrackVelocity = (t = this.current, !isNaN(parseFloat(t))))
        }
        setPrevFrameValue() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.current;
            this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
        }
        onChange(e) {
            return this.on("change", e)
        }
        on(e, t) {
            this.events[e] || (this.events[e] = new ca);
            const n = this.events[e].add(t);
            return "change" === e ? () => {
                n(), Hr.read(() => {
                    this.events.change.getSize() || this.stop()
                })
            } : n
        }
        clearListeners() {
            for (const e in this.events) this.events[e].clear()
        }
        attach(e, t) {
            this.passiveEffect = e, this.stopPassiveEffect = t
        }
        set(e) {
            this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e)
        }
        setWithVelocity(e, t, n) {
            this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n
        }
        jump(e) {
            let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
        dirty() {
            var e;
            null === (e = this.events.change) || void 0 === e || e.notify(this.current)
        }
        addDependent(e) {
            this.dependents || (this.dependents = new Set), this.dependents.add(e)
        }
        removeDependent(e) {
            this.dependents && this.dependents.delete(e)
        }
        get() {
            return La.current && La.current.push(this), this.current
        }
        getPrevious() {
            return this.prev
        }
        getVelocity() {
            const e = Da.now();
            if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30) return 0;
            const t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
            return Ma(parseFloat(this.current) - parseFloat(this.prevFrameValue), t)
        }
        start(e) {
            return this.stop(), new Promise(t => {
                this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify()
            }).then(() => {
                this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
            })
        }
        stop() {
            this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
        }
        isAnimating() {
            return !!this.animation
        }
        clearAnimation() {
            delete this.animation
        }
        destroy() {
            var e, t;
            null === (e = this.dependents) || void 0 === e || e.clear(), null === (t = this.events.destroy) || void 0 === t || t.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
    }

    function za(e, t) {
        return new _a(e, t)
    }
    const Ia = [...ur, Bn, Xn],
        Ba = new WeakMap;

    function Va(e) {
        return null !== e && "object" === typeof e && "function" === typeof e.start
    }

    function Ua(e) {
        return "string" === typeof e || Array.isArray(e)
    }
    const Ha = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
        Wa = ["initial", ...Ha];

    function qa(e) {
        return Va(e.animate) || Wa.some(t => Ua(e[t]))
    }

    function $a(e) {
        return Boolean(qa(e) || e.variants)
    }
    const Ya = {
            current: null
        },
        Ka = {
            current: !1
        },
        Xa = "undefined" !== typeof window;

    function Qa(e) {
        const t = [{}, {}];
        return null === e || void 0 === e || e.values.forEach((e, n) => {
            t[0][n] = e.get(), t[1][n] = e.getVelocity()
        }), t
    }

    function Ga(e, t, n, r) {
        if ("function" === typeof t) {
            const [a, i] = Qa(r);
            t = t(void 0 !== n ? n : e.custom, a, i)
        }
        if ("string" === typeof t && (t = e.variants && e.variants[t]), "function" === typeof t) {
            const [a, i] = Qa(r);
            t = t(void 0 !== n ? n : e.custom, a, i)
        }
        return t
    }
    const Ja = ["willChange"],
        Za = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
    let ei = {};

    function ti(e) {
        ei = e
    }
    class ni {
        scrapeMotionValuesFromProps(e, t, n) {
            return {}
        }
        constructor(e) {
            let {
                parent: t,
                props: n,
                presenceContext: r,
                reducedMotionConfig: a,
                skipAnimations: i,
                blockInitialAnimation: o,
                visualState: l
            } = e, u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map, this.KeyframeResolver = Zr, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
            }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                const e = Da.now();
                this.renderScheduledAt < e && (this.renderScheduledAt = e, Hr.render(this.render, !1, !0))
            };
            const {
                latestValues: c,
                renderState: d
            } = l;
            this.latestValues = c, this.baseTarget = f({}, c), this.initialValues = n.initial ? f({}, c) : {}, this.renderState = d, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = a, this.skipAnimationsConfig = i, this.options = u, this.blockInitialAnimation = Boolean(o), this.isControllingVariants = qa(n), this.isVariantNode = $a(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(t && t.current);
            const h = this.scrapeMotionValuesFromProps(n, {}, this),
                {
                    willChange: p
                } = h,
                m = s(h, Ja);
            for (const s in m) {
                const e = m[s];
                void 0 !== c[s] && or(e) && e.set(c[s])
            }
        }
        mount(e) {
            var t, n;
            if (this.hasBeenMounted)
                for (const a in this.initialValues) {
                    var r;
                    null === (r = this.values.get(a)) || void 0 === r || r.jump(this.initialValues[a]), this.latestValues[a] = this.initialValues[a]
                }
            this.current = e, Ba.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), "never" === this.reducedMotionConfig ? this.shouldReduceMotion = !1 : "always" === this.reducedMotionConfig ? this.shouldReduceMotion = !0 : (Ka.current || function() {
                if (Ka.current = !0, Xa)
                    if (window.matchMedia) {
                        const e = window.matchMedia("(prefers-reduced-motion)"),
                            t = () => Ya.current = e.matches;
                        e.addEventListener("change", t), t()
                    } else Ya.current = !1
            }(), this.shouldReduceMotion = Ya.current), this.shouldSkipAnimations = null !== (t = this.skipAnimationsConfig) && void 0 !== t && t, null === (n = this.parent) || void 0 === n || n.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0
        }
        unmount() {
            var e;
            this.projection && this.projection.unmount(), Wr(this.notifyUpdate), Wr(this.render), this.valueSubscriptions.forEach(e => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), null === (e = this.parent) || void 0 === e || e.removeChild(this);
            for (const t in this.events) this.events[t].clear();
            for (const t in this.features) {
                const e = this.features[t];
                e && (e.unmount(), e.isMounted = !1)
            }
            this.current = null
        }
        addChild(e) {
            var t;
            this.children.add(e), null !== (t = this.enteringChildren) && void 0 !== t || (this.enteringChildren = new Set), this.enteringChildren.add(e)
        }
        removeChild(e) {
            this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e)
        }
        bindToMotionValue(e, t) {
            if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), t.accelerate && Ra.has(e) && this.current instanceof HTMLElement) {
                const {
                    factory: n,
                    keyframes: r,
                    times: a,
                    ease: i,
                    duration: o
                } = t.accelerate, s = new Na({
                    element: this.current,
                    name: e,
                    keyframes: r,
                    times: a,
                    ease: i,
                    duration: oa(o)
                }), l = n(s);
                return void this.valueSubscriptions.set(e, () => {
                    l(), s.cancel()
                })
            }
            const n = bn.has(e);
            n && this.onBindTransform && this.onBindTransform();
            const r = t.on("change", t => {
                this.latestValues[e] = t, this.props.onUpdate && Hr.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
            });
            let a;
            "undefined" !== typeof window && window.MotionCheckAppearSync && (a = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
                r(), a && a(), t.owner && t.stop()
            })
        }
        sortNodePosition(e) {
            return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
        }
        updateFeatures() {
            let e = "animation";
            for (e in ei) {
                const t = ei[e];
                if (!t) continue;
                const {
                    isEnabled: n,
                    Feature: r
                } = t;
                if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) {
                    const t = this.features[e];
                    t.isMounted ? t.update() : (t.mount(), t.isMounted = !0)
                }
            }
        }
        triggerBuild() {
            this.build(this.renderState, this.latestValues, this.props)
        }
        measureViewportBox() {
            return this.current ? this.measureInstanceViewportBox(this.current, this.props) : {
                x: {
                    min: 0,
                    max: 0
                },
                y: {
                    min: 0,
                    max: 0
                }
            }
        }
        getStaticValue(e) {
            return this.latestValues[e]
        }
        setStaticValue(e, t) {
            this.latestValues[e] = t
        }
        update(e, t) {
            (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
            for (let n = 0; n < Za.length; n++) {
                const t = Za[n];
                this.propEventSubscriptions[t] && (this.propEventSubscriptions[t](), delete this.propEventSubscriptions[t]);
                const r = e["on" + t];
                r && (this.propEventSubscriptions[t] = this.on(t, r))
            }
            this.prevMotionValues = function(e, t, n) {
                for (const r in t) {
                    const a = t[r],
                        i = n[r];
                    if (or(a)) e.addValue(r, a);
                    else if (or(i)) e.addValue(r, za(a, {
                        owner: e
                    }));
                    else if (i !== a)
                        if (e.hasValue(r)) {
                            const t = e.getValue(r);
                            !0 === t.liveStyle ? t.jump(a) : t.hasAnimated || t.set(a)
                        } else {
                            const t = e.getStaticValue(r);
                            e.addValue(r, za(void 0 !== t ? t : a, {
                                owner: e
                            }))
                        }
                }
                for (const r in n) void 0 === t[r] && e.removeValue(r);
                return t
            }(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
        }
        getProps() {
            return this.props
        }
        getVariant(e) {
            return this.props.variants ? this.props.variants[e] : void 0
        }
        getDefaultTransition() {
            return this.props.transition
        }
        getTransformPagePoint() {
            return this.props.transformPagePoint
        }
        getClosestVariantNode() {
            return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
        }
        addVariantChild(e) {
            const t = this.getClosestVariantNode();
            if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e)
        }
        addValue(e, t) {
            const n = this.values.get(e);
            t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get())
        }
        removeValue(e) {
            this.values.delete(e);
            const t = this.valueSubscriptions.get(e);
            t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
        }
        hasValue(e) {
            return this.values.has(e)
        }
        getValue(e, t) {
            if (this.props.values && this.props.values[e]) return this.props.values[e];
            let n = this.values.get(e);
            return void 0 === n && void 0 !== t && (n = za(null === t ? void 0 : t, {
                owner: this
            }), this.addValue(e, n)), n
        }
        readValue(e, t) {
            var n;
            let r = void 0 === this.latestValues[e] && this.current ? null !== (n = this.getBaseTargetFromProps(this.props, e)) && void 0 !== n ? n : this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e];
            var a;
            return void 0 !== r && null !== r && ("string" === typeof r && (mr(r) || ea(r)) ? r = parseFloat(r) : (a = r, !Ia.find(lr(a)) && Xn.test(t) && (r = ra(e, t))), this.setBaseTarget(e, or(r) ? r.get() : r)), or(r) ? r.get() : r
        }
        setBaseTarget(e, t) {
            this.baseTarget[e] = t
        }
        getBaseTarget(e) {
            const {
                initial: t
            } = this.props;
            let n;
            if ("string" === typeof t || "object" === typeof t) {
                var r;
                const a = Ga(this.props, t, null === (r = this.presenceContext) || void 0 === r ? void 0 : r.custom);
                a && (n = a[e])
            }
            if (t && void 0 !== n) return n;
            const a = this.getBaseTargetFromProps(this.props, e);
            return void 0 === a || or(a) ? void 0 !== this.initialValues[e] && void 0 === n ? void 0 : this.baseTarget[e] : a
        }
        on(e, t) {
            return this.events[e] || (this.events[e] = new ca), this.events[e].add(t)
        }
        notify(e) {
            if (this.events[e]) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                this.events[e].notify(...n)
            }
        }
        scheduleRenderMicrotask() {
            ja.render(this.render)
        }
    }
    class ri extends ni {
        constructor() {
            super(...arguments), this.KeyframeResolver = ia
        }
        sortInstanceNodePosition(e, t) {
            return 2 & e.compareDocumentPosition(t) ? 1 : -1
        }
        getBaseTargetFromProps(e, t) {
            const n = e.style;
            return n ? n[t] : void 0
        }
        removeValueFromRenderState(e, t) {
            let {
                vars: n,
                style: r
            } = t;
            delete n[e], delete r[e]
        }
        handleChildMotionValue() {
            this.childSubscription && (this.childSubscription(), delete this.childSubscription);
            const {
                children: e
            } = this.props;
            or(e) && (this.childSubscription = e.on("change", e => {
                this.current && (this.current.textContent = "".concat(e))
            }))
        }
    }

    function ai(e) {
        return e.replace(/([A-Z])/g, e => "-".concat(e.toLowerCase()))
    }
    const ii = (e, t) => t && "number" === typeof e ? t.transform(e) : e,
        oi = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        },
        si = yn.length;

    function li(e, t, n) {
        const {
            style: r,
            vars: a,
            transformOrigin: i
        } = e;
        let o = !1,
            s = !1;
        for (const l in t) {
            const e = t[l];
            if (bn.has(l)) o = !0;
            else if (vr(l)) a[l] = e;
            else {
                const t = ii(e, nr[l]);
                l.startsWith("origin") ? (s = !0, i[l] = t) : r[l] = t
            }
        }
        if (t.transform || (o || n ? r.transform = function(e, t, n) {
                let r = "",
                    a = !0;
                for (let i = 0; i < si; i++) {
                    const o = yn[i],
                        s = e[o];
                    if (void 0 === s) continue;
                    let l = !0;
                    if ("number" === typeof s) l = s === (o.startsWith("scale") ? 1 : 0);
                    else {
                        const e = parseFloat(s);
                        l = o.startsWith("scale") ? 1 === e : 0 === e
                    }
                    if (!l || n) {
                        const e = ii(s, nr[o]);
                        l || (a = !1, r += "".concat(oi[o] || o, "(").concat(e, ") ")), n && (t[o] = e)
                    }
                }
                return r = r.trim(), n ? r = n(t, a ? "" : r) : a && (r = "none"), r
            }(t, e.transform, n) : r.transform && (r.transform = "none")), s) {
            const {
                originX: e = "50%",
                originY: t = "50%",
                originZ: n = 0
            } = i;
            r.transformOrigin = "".concat(e, " ").concat(t, " ").concat(n)
        }
    }
    const ui = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        },
        ci = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };
    const di = ["attrX", "attrY", "attrScale", "pathLength", "pathSpacing", "pathOffset"],
        fi = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];

    function hi(e, t, n, r, a) {
        let {
            attrX: i,
            attrY: o,
            attrScale: l,
            pathLength: u,
            pathSpacing: c = 1,
            pathOffset: d = 0
        } = t;
        if (li(e, s(t, di), r), n) return void(e.style.viewBox && (e.attrs.viewBox = e.style.viewBox));
        e.attrs = e.style, e.style = {};
        const {
            attrs: f,
            style: h
        } = e;
        var p, m;
        (f.transform && (h.transform = f.transform, delete f.transform), h.transform || f.transformOrigin) && (h.transformOrigin = null !== (p = f.transformOrigin) && void 0 !== p ? p : "50% 50%", delete f.transformOrigin);
        h.transform && (h.transformBox = null !== (m = null === a || void 0 === a ? void 0 : a.transformBox) && void 0 !== m ? m : "fill-box", delete f.transformBox);
        for (const s of fi) void 0 !== f[s] && (h[s] = f[s], delete f[s]);
        void 0 !== i && (f.x = i), void 0 !== o && (f.y = o), void 0 !== l && (f.scale = l), void 0 !== u && function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
            e.pathLength = 1;
            const i = a ? ui : ci;
            e[i.offset] = "".concat(-r), e[i.array] = "".concat(t, " ").concat(n)
        }(f, u, c, d, !1)
    }
    const pi = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]),
        mi = e => "string" === typeof e && "svg" === e.toLowerCase();

    function gi(e, t, n, r) {
        let {
            style: a,
            vars: i
        } = t;
        const o = e.style;
        let s;
        for (s in a) o[s] = a[s];
        for (s in null === r || void 0 === r || r.applyProjectionStyles(o, n), i) o.setProperty(s, i[s])
    }

    function vi(e, t) {
        return t.max === t.min ? 0 : e / (t.max - t.min) * 100
    }
    const yi = {
            correct: (e, t) => {
                if (!t.target) return e;
                if ("string" === typeof e) {
                    if (!Mn.test(e)) return e;
                    e = parseFloat(e)
                }
                const n = vi(e, t.target.x),
                    r = vi(e, t.target.y);
                return "".concat(n, "% ").concat(r, "%")
            }
        },
        bi = (e, t, n) => e + (t - e) * n,
        xi = {
            correct: (e, t) => {
                let {
                    treeScale: n,
                    projectionDelta: r
                } = t;
                const a = e,
                    i = Xn.parse(e);
                if (i.length > 5) return a;
                const o = Xn.createTransformer(e),
                    s = "number" !== typeof i[0] ? 1 : 0,
                    l = r.x.scale * n.x,
                    u = r.y.scale * n.y;
                i[0 + s] /= l, i[1 + s] /= u;
                const c = bi(l, u, .5);
                return "number" === typeof i[2 + s] && (i[2 + s] /= c), "number" === typeof i[3 + s] && (i[3 + s] /= c), o(i)
            }
        },
        wi = {
            borderRadius: f(f({}, yi), {}, {
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            }),
            borderTopLeftRadius: yi,
            borderTopRightRadius: yi,
            borderBottomLeftRadius: yi,
            borderBottomRightRadius: yi,
            boxShadow: xi
        };

    function Si(e, t) {
        let {
            layout: n,
            layoutId: r
        } = t;
        return bn.has(e) || e.startsWith("origin") || (n || void 0 !== r) && (!!wi[e] || "opacity" === e)
    }

    function ki(e, t, n) {
        const r = e.style,
            a = null === t || void 0 === t ? void 0 : t.style,
            i = {};
        if (!r) return i;
        for (const s in r) {
            var o;
            (or(r[s]) || a && or(a[s]) || Si(s, e) || void 0 !== (null === n || void 0 === n || null === (o = n.getValue(s)) || void 0 === o ? void 0 : o.liveStyle)) && (i[s] = r[s])
        }
        return i
    }

    function Ei(e, t, n) {
        const r = ki(e, t, n);
        for (const a in e)
            if (or(e[a]) || or(t[a])) {
                r[-1 !== yn.indexOf(a) ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a] = e[a]
            }
        return r
    }
    class Ti extends ri {
        constructor() {
            super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ir
        }
        getBaseTargetFromProps(e, t) {
            return e[t]
        }
        readValueFromInstance(e, t) {
            if (bn.has(t)) {
                const e = ar(t);
                return e && e.default || 0
            }
            return t = pi.has(t) ? t : ai(t), e.getAttribute(t)
        }
        scrapeMotionValuesFromProps(e, t, n) {
            return Ei(e, t, n)
        }
        build(e, t, n) {
            hi(e, t, this.isSVGTag, n.transformTemplate, n.style)
        }
        renderInstance(e, t, n, r) {
            ! function(e, t, n, r) {
                gi(e, t, void 0, r);
                for (const a in t.attrs) e.setAttribute(pi.has(a) ? a : ai(a), t.attrs[a])
            }(e, t, 0, r)
        }
        mount(e) {
            this.isSVGTag = mi(e.tagName), super.mount(e)
        }
    }

    function Ci(e) {
        let {
            top: t,
            left: n,
            right: r,
            bottom: a
        } = e;
        return {
            x: {
                min: n,
                max: r
            },
            y: {
                min: t,
                max: a
            }
        }
    }

    function Pi(e) {
        return void 0 === e || 1 === e
    }

    function Ni(e) {
        let {
            scale: t,
            scaleX: n,
            scaleY: r
        } = e;
        return !Pi(t) || !Pi(n) || !Pi(r)
    }

    function Ri(e) {
        return Ni(e) || ji(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
    }

    function ji(e) {
        return Ai(e.x) || Ai(e.y)
    }

    function Ai(e) {
        return e && "0%" !== e
    }

    function Fi(e, t, n) {
        return n + t * (e - n)
    }

    function Oi(e, t, n, r, a) {
        return void 0 !== a && (e = Fi(e, a, r)), Fi(e, n, r) + t
    }

    function Di(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            r = arguments.length > 3 ? arguments[3] : void 0,
            a = arguments.length > 4 ? arguments[4] : void 0;
        e.min = Oi(e.min, t, n, r, a), e.max = Oi(e.max, t, n, r, a)
    }

    function Mi(e, t) {
        let {
            x: n,
            y: r
        } = t;
        Di(e.x, n.translate, n.scale, n.originPoint), Di(e.y, r.translate, r.scale, r.originPoint)
    }
    const Li = .999999999999,
        _i = 1.0000000000001;

    function zi(e, t) {
        e.min = e.min + t, e.max = e.max + t
    }

    function Ii(e, t, n, r) {
        let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .5;
        Di(e, t, n, bi(e.min, e.max, a), r)
    }

    function Bi(e, t) {
        Ii(e.x, t.x, t.scaleX, t.scale, t.originX), Ii(e.y, t.y, t.scaleY, t.scale, t.originY)
    }

    function Vi(e, t) {
        return Ci(function(e, t) {
            if (!t) return e;
            const n = t({
                    x: e.left,
                    y: e.top
                }),
                r = t({
                    x: e.right,
                    y: e.bottom
                });
            return {
                top: n.y,
                left: n.x,
                bottom: r.y,
                right: r.x
            }
        }(e.getBoundingClientRect(), t))
    }
    class Ui extends ri {
        constructor() {
            super(...arguments), this.type = "html", this.renderInstance = gi
        }
        readValueFromInstance(e, t) {
            var n, r;
            if (bn.has(t)) return null !== (n = this.projection) && void 0 !== n && n.isProjecting ? Ar(t) : ((e, t) => {
                const {
                    transform: n = "none"
                } = getComputedStyle(e);
                return Fr(n, t)
            })(e, t); {
                const n = (r = e, window.getComputedStyle(r)),
                    a = (vr(t) ? n.getPropertyValue(t) : n[t]) || 0;
                return "string" === typeof a ? a.trim() : a
            }
        }
        measureInstanceViewportBox(e, t) {
            let {
                transformPagePoint: n
            } = t;
            return Vi(e, n)
        }
        build(e, t, n) {
            li(e, t, n.transformTemplate)
        }
        scrapeMotionValuesFromProps(e, t, n) {
            return ki(e, t, n)
        }
    }
    const Hi = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

    function Wi(e) {
        return "string" === typeof e && !e.includes("-") && !!(Hi.indexOf(e) > -1 || /[A-Z]/.test(e))
    }
    const qi = (e, t) => {
            var n;
            return (null !== (n = t.isSVG) && void 0 !== n ? n : Wi(e)) ? new Ti(t) : new Ui(t, {
                allowProjection: e !== a.Fragment
            })
        },
        $i = (0, a.createContext)({}),
        Yi = (0, a.createContext)({
            strict: !1
        }),
        Ki = (0, a.createContext)({
            transformPagePoint: e => e,
            isStatic: !1,
            reducedMotion: "never"
        }),
        Xi = (0, a.createContext)({});

    function Qi(e) {
        const {
            initial: t,
            animate: n
        } = function(e, t) {
            if (qa(e)) {
                const {
                    initial: t,
                    animate: n
                } = e;
                return {
                    initial: !1 === t || Ua(t) ? t : void 0,
                    animate: Ua(n) ? n : void 0
                }
            }
            return !1 !== e.inherit ? t : {}
        }(e, (0, a.useContext)(Xi));
        return (0, a.useMemo)(() => ({
            initial: t,
            animate: n
        }), [Gi(t), Gi(n)])
    }

    function Gi(e) {
        return Array.isArray(e) ? e.join(" ") : e
    }
    const Ji = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    });

    function Zi(e, t, n) {
        for (const r in t) or(t[r]) || Si(r, n) || (e[r] = t[r])
    }

    function eo(e, t) {
        const n = {};
        return Zi(n, e.style || {}, e), Object.assign(n, function(e, t) {
            let {
                transformTemplate: n
            } = e;
            return (0, a.useMemo)(() => {
                const e = {
                    style: {},
                    transform: {},
                    transformOrigin: {},
                    vars: {}
                };
                return li(e, t, n), Object.assign({}, e.vars, e.style)
            }, [t])
        }(e, t)), n
    }

    function to(e, t) {
        const n = {},
            r = eo(e, t);
        return e.drag && !1 !== e.dragListener && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = !0 === e.drag ? "none" : "pan-".concat("x" === e.drag ? "y" : "x")), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n
    }
    const no = () => f(f({}, {
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    }), {}, {
        attrs: {}
    });

    function ro(e, t, n, r) {
        const i = (0, a.useMemo)(() => {
            const n = no();
            return hi(n, t, mi(r), e.transformTemplate, e.style), f(f({}, n.attrs), {}, {
                style: f({}, n.style)
            })
        }, [t]);
        if (e.style) {
            const t = {};
            Zi(t, e.style, e), i.style = f(f({}, t), i.style)
        }
        return i
    }
    const ao = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);

    function io(e) {
        return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || ao.has(e)
    }
    let oo = e => !io(e);
    try {
        "function" === typeof(so = require("@emotion/is-prop-valid").default) && (oo = e => e.startsWith("on") ? !io(e) : so(e))
    } catch ($h) {}
    var so;

    function lo(e, t, n, r, i) {
        let {
            latestValues: o
        } = r, s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5], l = arguments.length > 6 ? arguments[6] : void 0;
        const u = ((null !== l && void 0 !== l ? l : Wi(e)) ? ro : to)(t, o, i, e),
            c = function(e, t, n) {
                const r = {};
                for (const a in e) "values" === a && "object" === typeof e.values || (oo(a) || !0 === n && io(a) || !t && !io(a) || e.draggable && a.startsWith("onDrag")) && (r[a] = e[a]);
                return r
            }(t, "string" === typeof e, s),
            d = e !== a.Fragment ? f(f(f({}, c), u), {}, {
                ref: n
            }) : {},
            {
                children: h
            } = t,
            p = (0, a.useMemo)(() => or(h) ? h.get() : h, [h]);
        return (0, a.createElement)(e, f(f({}, d), {}, {
            children: p
        }))
    }

    function uo(e) {
        return or(e) ? e.get() : e
    }
    const co = (0, a.createContext)(null);
    const fo = ["transitionEnd", "transition"];

    function ho(e, t, n, r) {
        const a = {},
            i = r(e, {});
        for (const s in i) a[s] = uo(i[s]);
        let {
            initial: o,
            animate: l
        } = e;
        const u = qa(e),
            c = $a(e);
        t && c && !u && !1 !== e.inherit && (void 0 === o && (o = t.initial), void 0 === l && (l = t.animate));
        let d = !!n && !1 === n.initial;
        d = d || !1 === o;
        const f = d ? l : o;
        if (f && "boolean" !== typeof f && !Va(f)) {
            const t = Array.isArray(f) ? f : [f];
            for (let n = 0; n < t.length; n++) {
                const r = Ga(e, t[n]);
                if (r) {
                    const {
                        transitionEnd: e,
                        transition: t
                    } = r, n = s(r, fo);
                    for (const r in n) {
                        let e = n[r];
                        if (Array.isArray(e)) {
                            e = e[d ? e.length - 1 : 0]
                        }
                        null !== e && (a[r] = e)
                    }
                    for (const r in e) a[r] = e[r]
                }
            }
        }
        return a
    }
    const po = e => (t, n) => {
            const r = (0, a.useContext)(Xi),
                i = (0, a.useContext)(co),
                o = () => function(e, t, n, r) {
                    let {
                        scrapeMotionValuesFromProps: a,
                        createRenderState: i
                    } = e;
                    return {
                        latestValues: ho(t, n, r, a),
                        renderState: i()
                    }
                }(e, t, r, i);
            return n ? o() : function(e) {
                const t = (0, a.useRef)(null);
                return null === t.current && (t.current = e()), t.current
            }(o)
        },
        mo = po({
            scrapeMotionValuesFromProps: ki,
            createRenderState: Ji
        }),
        go = po({
            scrapeMotionValuesFromProps: Ei,
            createRenderState: no
        }),
        vo = "undefined" !== typeof window,
        yo = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        };
    let bo = !1;

    function xo() {
        return function() {
            if (bo) return;
            const e = {};
            for (const t in yo) e[t] = {
                isEnabled: e => yo[t].some(t => !!e[t])
            };
            ti(e), bo = !0
        }(), ei
    }
    const wo = Symbol.for("motionComponentSymbol");

    function So(e, t, n) {
        const r = (0, a.useRef)(n);
        (0, a.useInsertionEffect)(() => {
            r.current = n
        });
        const i = (0, a.useRef)(null);
        return (0, a.useCallback)(n => {
            var a;
            n && (null === (a = e.onMount) || void 0 === a || a.call(e, n));
            t && (n ? t.mount(n) : t.unmount());
            const o = r.current;
            if ("function" === typeof o)
                if (n) {
                    const e = o(n);
                    "function" === typeof e && (i.current = e)
                } else i.current ? (i.current(), i.current = null) : o(n);
            else o && (o.current = n)
        }, [t])
    }
    const ko = "data-" + ai("framerAppearId"),
        Eo = (0, a.createContext)({});

    function To(e) {
        return e && "object" === typeof e && Object.prototype.hasOwnProperty.call(e, "current")
    }
    const Co = vo ? a.useLayoutEffect : a.useEffect;

    function Po(e, t, n, r, i, o) {
        var s, l, u, c;
        const {
            visualElement: d
        } = (0, a.useContext)(Xi), f = (0, a.useContext)(Yi), h = (0, a.useContext)(co), p = (0, a.useContext)(Ki), m = p.reducedMotion, g = p.skipAnimations, v = (0, a.useRef)(null), y = (0, a.useRef)(!1);
        r = r || f.renderer, !v.current && r && (v.current = r(e, {
            visualState: t,
            parent: d,
            props: n,
            presenceContext: h,
            blockInitialAnimation: !!h && !1 === h.initial,
            reducedMotionConfig: m,
            skipAnimations: g,
            isSVG: o
        }), y.current && v.current && (v.current.manuallyAnimateOnMount = !0));
        const b = v.current,
            x = (0, a.useContext)(Eo);
        !b || b.projection || !i || "html" !== b.type && "svg" !== b.type || function(e, t, n, r) {
            const {
                layoutId: a,
                layout: i,
                drag: o,
                dragConstraints: s,
                layoutScroll: l,
                layoutRoot: u,
                layoutCrossfade: c
            } = t;
            e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : No(e.parent)), e.projection.setOptions({
                layoutId: a,
                layout: i,
                alwaysMeasureLayout: Boolean(o) || s && To(s),
                visualElement: e,
                animationType: "string" === typeof i ? i : "both",
                initialPromotionConfig: r,
                crossfade: c,
                layoutScroll: l,
                layoutRoot: u
            })
        }(v.current, n, i, x);
        const w = (0, a.useRef)(!1);
        (0, a.useInsertionEffect)(() => {
            b && w.current && b.update(n, h)
        });
        const S = n[ko],
            k = (0, a.useRef)(Boolean(S) && !(null !== (s = (l = window).MotionHandoffIsComplete) && void 0 !== s && s.call(l, S)) && (null === (u = (c = window).MotionHasOptimisedAnimation) || void 0 === u ? void 0 : u.call(c, S)));
        return Co(() => {
            y.current = !0, b && (w.current = !0, window.MotionIsMounted = !0, b.updateFeatures(), b.scheduleRenderMicrotask(), k.current && b.animationState && b.animationState.animateChanges())
        }), (0, a.useEffect)(() => {
            b && (!k.current && b.animationState && b.animationState.animateChanges(), k.current && (queueMicrotask(() => {
                var e, t;
                null === (e = (t = window).MotionHandoffMarkAsComplete) || void 0 === e || e.call(t, S)
            }), k.current = !1), b.enteringChildren = void 0)
        }), b
    }

    function No(e) {
        if (e) return !1 !== e.options.allowProjection ? e.projection : No(e.parent)
    }

    function Ro(e) {
        var t, n;
        let {
            forwardMotionProps: r = !1,
            type: i
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = arguments.length > 2 ? arguments[2] : void 0, s = arguments.length > 3 ? arguments[3] : void 0;
        o && function(e) {
            const t = xo();
            for (const n in e) t[n] = f(f({}, t[n]), e[n]);
            ti(t)
        }(o);
        const l = i ? "svg" === i : Wi(e),
            u = l ? go : mo;

        function c(t, n) {
            let i;
            const o = f(f(f({}, (0, a.useContext)(Ki)), t), {}, {
                    layoutId: jo(t)
                }),
                {
                    isStatic: c
                } = o,
                d = Qi(t),
                h = u(t, c);
            if (!c && vo) {
                ! function() {
                    (0, a.useContext)(Yi).strict;
                    0
                }();
                const t = function(e) {
                    const t = xo(),
                        {
                            drag: n,
                            layout: r
                        } = t;
                    if (!n && !r) return {};
                    const a = f(f({}, n), r);
                    return {
                        MeasureLayout: null !== n && void 0 !== n && n.isEnabled(e) || null !== r && void 0 !== r && r.isEnabled(e) ? a.MeasureLayout : void 0,
                        ProjectionNode: a.ProjectionNode
                    }
                }(o);
                i = t.MeasureLayout, d.visualElement = Po(e, h, o, s, t.ProjectionNode, l)
            }
            return (0, sn.jsxs)(Xi.Provider, {
                value: d,
                children: [i && d.visualElement ? (0, sn.jsx)(i, f({
                    visualElement: d.visualElement
                }, o)) : null, lo(e, t, So(h, d.visualElement, n), h, c, r, l)]
            })
        }
        c.displayName = "motion.".concat("string" === typeof e ? e : "create(".concat(null !== (t = null !== (n = e.displayName) && void 0 !== n ? n : e.name) && void 0 !== t ? t : "", ")"));
        const d = (0, a.forwardRef)(c);
        return d[wo] = e, d
    }

    function jo(e) {
        let {
            layoutId: t
        } = e;
        const n = (0, a.useContext)($i).id;
        return n && void 0 !== t ? n + "-" + t : t
    }

    function Ao(e, t) {
        if ("undefined" === typeof Proxy) return Ro;
        const n = new Map,
            r = (n, r) => Ro(n, r, e, t);
        return new Proxy((e, t) => r(e, t), {
            get: (a, i) => "create" === i ? r : (n.has(i) || n.set(i, Ro(i, void 0, e, t)), n.get(i))
        })
    }
    class Fo {
        constructor(e) {
            this.isMounted = !1, this.node = e
        }
        update() {}
    }

    function Oo(e, t, n) {
        const r = e.getProps();
        return Ga(r, t, void 0 !== n ? n : r.custom, e)
    }
    const Do = ["inherit"];

    function Mo(e, t) {
        if (null !== e && void 0 !== e && e.inherit && t) {
            const {
                inherit: n
            } = e, r = s(e, Do);
            return f(f({}, t), r)
        }
        return e
    }

    function Lo(e, t) {
        var n, r;
        const a = null !== (n = null !== (r = null === e || void 0 === e ? void 0 : e[t]) && void 0 !== r ? r : null === e || void 0 === e ? void 0 : e.default) && void 0 !== n ? n : e;
        return a !== e ? Mo(a, e) : a
    }
    const _o = e => Array.isArray(e),
        zo = ["transitionEnd", "transition"];

    function Io(e, t, n) {
        e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, za(n))
    }

    function Bo(e) {
        return _o(e) ? e[e.length - 1] || 0 : e
    }

    function Vo(e, t) {
        const n = e.getValue("willChange");
        if (r = n, Boolean(or(r) && r.add)) return n.add(t);
        if (!n && Ir.WillChange) {
            const n = new Ir.WillChange("auto");
            e.addValue("willChange", n), n.add(t)
        }
        var r
    }

    function Uo(e) {
        return e.props[ko]
    }
    const Ho = (e, t) => n => t(e(n)),
        Wo = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return t.reduce(Ho)
        };

    function qo(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    }

    function $o(e, t) {
        return n => n > 0 ? t : e
    }
    const Yo = (e, t, n) => {
            const r = e * e,
                a = n * (t * t - r) + r;
            return a < 0 ? 0 : Math.sqrt(a)
        },
        Ko = [An, jn, In];

    function Xo(e) {
        const t = (n = e, Ko.find(e => e.test(n)));
        var n;
        if (hr(Boolean(t), "'".concat(e, "' is not an animatable color. Use the equivalent color code instead."), "color-not-animatable"), !Boolean(t)) return !1;
        let r = t.parse(e);
        return t === In && (r = function(e) {
            let {
                hue: t,
                saturation: n,
                lightness: r,
                alpha: a
            } = e;
            t /= 360, n /= 100, r /= 100;
            let i = 0,
                o = 0,
                s = 0;
            if (n) {
                const e = r < .5 ? r * (1 + n) : r + n - r * n,
                    a = 2 * r - e;
                i = qo(a, e, t + 1 / 3), o = qo(a, e, t), s = qo(a, e, t - 1 / 3)
            } else i = o = s = r;
            return {
                red: Math.round(255 * i),
                green: Math.round(255 * o),
                blue: Math.round(255 * s),
                alpha: a
            }
        }(r)), r
    }
    const Qo = (e, t) => {
            const n = Xo(e),
                r = Xo(t);
            if (!n || !r) return $o(e, t);
            const a = f({}, n);
            return e => (a.red = Yo(n.red, r.red, e), a.green = Yo(n.green, r.green, e), a.blue = Yo(n.blue, r.blue, e), a.alpha = bi(n.alpha, r.alpha, e), jn.transform(a))
        },
        Go = new Set(["none", "hidden"]);

    function Jo(e, t) {
        return n => bi(e, t, n)
    }

    function Zo(e) {
        return "number" === typeof e ? Jo : "string" === typeof e ? br(e) ? $o : Bn.test(e) ? Qo : ns : Array.isArray(e) ? es : "object" === typeof e ? Bn.test(e) ? Qo : ts : $o
    }

    function es(e, t) {
        const n = [...e],
            r = n.length,
            a = e.map((e, n) => Zo(e)(e, t[n]));
        return e => {
            for (let t = 0; t < r; t++) n[t] = a[t](e);
            return n
        }
    }

    function ts(e, t) {
        const n = f(f({}, e), t),
            r = {};
        for (const a in n) void 0 !== e[a] && void 0 !== t[a] && (r[a] = Zo(e[a])(e[a], t[a]));
        return e => {
            for (const t in r) n[t] = r[t](e);
            return n
        }
    }
    const ns = (e, t) => {
        const n = Xn.createTransformer(t),
            r = qn(e),
            a = qn(t);
        return r.indexes.var.length === a.indexes.var.length && r.indexes.color.length === a.indexes.color.length && r.indexes.number.length >= a.indexes.number.length ? Go.has(e) && !a.values.length || Go.has(t) && !r.values.length ? function(e, t) {
            return Go.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
        }(e, t) : Wo(es(function(e, t) {
            const n = [],
                r = {
                    color: 0,
                    var: 0,
                    number: 0
                };
            for (let i = 0; i < t.values.length; i++) {
                var a;
                const o = t.types[i],
                    s = e.indexes[o][r[o]],
                    l = null !== (a = e.values[s]) && void 0 !== a ? a : 0;
                n[i] = l, r[o]++
            }
            return n
        }(r, a), a.values), n) : (hr(!0, "Complex values '".concat(e, "' and '").concat(t, "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."), "complex-values-different"), $o(e, t))
    };

    function rs(e, t, n) {
        if ("number" === typeof e && "number" === typeof t && "number" === typeof n) return bi(e, t, n);
        return Zo(e)(e, t)
    }
    const as = e => {
            const t = t => {
                let {
                    timestamp: n
                } = t;
                return e(n)
            };
            return {
                start: function() {
                    let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return Hr.update(t, e)
                },
                stop: () => Wr(t),
                now: () => qr.isProcessing ? qr.timestamp : Da.now()
            }
        },
        is = 2e4;

    function os(e) {
        let t = 0;
        let n = e.next(t);
        for (; !n.done && t < is;) t += 50, n = e.next(t);
        return t >= is ? 1 / 0 : t
    }

    function ss(e, t, n) {
        const r = Math.max(t - 5, 0);
        return Ma(n - e(r), t - r)
    }
    const ls = {
            stiffness: 100,
            damping: 10,
            mass: 1,
            velocity: 0,
            duration: 800,
            bounce: .3,
            visualDuration: .3,
            restSpeed: {
                granular: .01,
                default: 2
            },
            restDelta: {
                granular: .005,
                default: .5
            },
            minDuration: .01,
            maxDuration: 10,
            minDamping: .05,
            maxDamping: 1
        },
        us = .001;

    function cs(e) {
        let t, n, {
            duration: r = ls.duration,
            bounce: a = ls.bounce,
            velocity: i = ls.velocity,
            mass: o = ls.mass
        } = e;
        hr(r <= oa(ls.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
        let s = 1 - a;
        s = xn(ls.minDamping, ls.maxDamping, s), r = xn(ls.minDuration, ls.maxDuration, sa(r)), s < 1 ? (t = e => {
            const t = e * s,
                n = t * r,
                a = t - i,
                o = fs(e, s),
                l = Math.exp(-n);
            return us - a / o * l
        }, n = e => {
            const n = e * s * r,
                a = n * i + i,
                o = Math.pow(s, 2) * Math.pow(e, 2) * r,
                l = Math.exp(-n),
                u = fs(Math.pow(e, 2), s);
            return (-t(e) + us > 0 ? -1 : 1) * ((a - o) * l) / u
        }) : (t = e => Math.exp(-e * r) * ((e - i) * r + 1) - .001, n = e => Math.exp(-e * r) * (r * r * (i - e)));
        const l = function(e, t, n) {
            let r = n;
            for (let a = 1; a < ds; a++) r -= e(r) / t(r);
            return r
        }(t, n, 5 / r);
        if (r = oa(r), isNaN(l)) return {
            stiffness: ls.stiffness,
            damping: ls.damping,
            duration: r
        }; {
            const e = Math.pow(l, 2) * o;
            return {
                stiffness: e,
                damping: 2 * s * Math.sqrt(o * e),
                duration: r
            }
        }
    }
    const ds = 12;

    function fs(e, t) {
        return e * Math.sqrt(1 - t * t)
    }
    const hs = ["duration", "bounce"],
        ps = ["stiffness", "damping", "mass"];

    function ms(e, t) {
        return t.some(t => void 0 !== e[t])
    }

    function gs() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ls.visualDuration,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ls.bounce;
        const n = "object" !== typeof e ? {
            visualDuration: e,
            keyframes: [0, 1],
            bounce: t
        } : e;
        let {
            restSpeed: r,
            restDelta: a
        } = n;
        const i = n.keyframes[0],
            o = n.keyframes[n.keyframes.length - 1],
            s = {
                done: !1,
                value: i
            },
            {
                stiffness: l,
                damping: u,
                mass: c,
                duration: d,
                velocity: h,
                isResolvedFromDuration: p
            } = function(e) {
                let t = f({
                    velocity: ls.velocity,
                    stiffness: ls.stiffness,
                    damping: ls.damping,
                    mass: ls.mass,
                    isResolvedFromDuration: !1
                }, e);
                if (!ms(e, ps) && ms(e, hs))
                    if (t.velocity = 0, e.visualDuration) {
                        const n = e.visualDuration,
                            r = 2 * Math.PI / (1.2 * n),
                            a = r * r,
                            i = 2 * xn(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(a);
                        t = f(f({}, t), {}, {
                            mass: ls.mass,
                            stiffness: a,
                            damping: i
                        })
                    } else {
                        const n = cs(f(f({}, e), {}, {
                            velocity: 0
                        }));
                        t = f(f(f({}, t), n), {}, {
                            mass: ls.mass
                        }), t.isResolvedFromDuration = !0
                    }
                return t
            }(f(f({}, n), {}, {
                velocity: -sa(n.velocity || 0)
            })),
            m = h || 0,
            g = u / (2 * Math.sqrt(l * c)),
            v = o - i,
            y = sa(Math.sqrt(l / c)),
            b = Math.abs(v) < 5;
        let x;
        if (r || (r = b ? ls.restSpeed.granular : ls.restSpeed.default), a || (a = b ? ls.restDelta.granular : ls.restDelta.default), g < 1) {
            const e = fs(y, g);
            x = t => {
                const n = Math.exp(-g * y * t);
                return o - n * ((m + g * y * v) / e * Math.sin(e * t) + v * Math.cos(e * t))
            }
        } else if (1 === g) x = e => o - Math.exp(-y * e) * (v + (m + y * v) * e);
        else {
            const e = y * Math.sqrt(g * g - 1);
            x = t => {
                const n = Math.exp(-g * y * t),
                    r = Math.min(e * t, 300);
                return o - n * ((m + g * y * v) * Math.sinh(r) + e * v * Math.cosh(r)) / e
            }
        }
        const w = {
            calculatedDuration: p && d || null,
            next: e => {
                const t = x(e);
                if (p) s.done = e >= d;
                else {
                    let n = 0 === e ? m : 0;
                    g < 1 && (n = 0 === e ? oa(m) : ss(x, e, t));
                    const i = Math.abs(n) <= r,
                        l = Math.abs(o - t) <= a;
                    s.done = i && l
                }
                return s.value = s.done ? o : t, s
            },
            toString: () => {
                const e = Math.min(os(w), is),
                    t = wa(t => w.next(e * t).value, e, 30);
                return e + "ms " + t
            },
            toTransition: () => {}
        };
        return w
    }

    function vs(e) {
        let {
            keyframes: t,
            velocity: n = 0,
            power: r = .8,
            timeConstant: a = 325,
            bounceDamping: i = 10,
            bounceStiffness: o = 500,
            modifyTarget: s,
            min: l,
            max: u,
            restDelta: c = .5,
            restSpeed: d
        } = e;
        const f = t[0],
            h = {
                done: !1,
                value: f
            },
            p = e => void 0 === l ? u : void 0 === u || Math.abs(l - e) < Math.abs(u - e) ? l : u;
        let m = r * n;
        const g = f + m,
            v = void 0 === s ? g : s(g);
        v !== g && (m = v - f);
        const y = e => -m * Math.exp(-e / a),
            b = e => v + y(e),
            x = e => {
                const t = y(e),
                    n = b(e);
                h.done = Math.abs(t) <= c, h.value = h.done ? v : n
            };
        let w, S;
        const k = e => {
            var t;
            (t = h.value, void 0 !== l && t < l || void 0 !== u && t > u) && (w = e, S = gs({
                keyframes: [h.value, p(h.value)],
                velocity: ss(b, e, h.value),
                damping: i,
                stiffness: o,
                restDelta: c,
                restSpeed: d
            }))
        };
        return k(0), {
            calculatedDuration: null,
            next: e => {
                let t = !1;
                return S || void 0 !== w || (t = !0, x(e), k(e)), void 0 !== w && e >= w ? S.next(e - w) : (!t && x(e), h)
            }
        }
    }
    gs.applyToOptions = e => {
        const t = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
            const n = (arguments.length > 2 ? arguments[2] : void 0)(f(f({}, e), {}, {
                    keyframes: [0, t]
                })),
                r = Math.min(os(n), is);
            return {
                type: "keyframes",
                ease: e => n.next(r * e).value / t,
                duration: sa(r)
            }
        }(e, 100, gs);
        return e.ease = t.ease, e.duration = oa(t.duration), e.type = "keyframes", e
    };
    const ys = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;

    function bs(e, t, n, r) {
        if (e === t && n === r) return zr;
        const a = t => function(e, t, n, r, a) {
            let i, o, s = 0;
            do {
                o = t + (n - t) / 2, i = ys(o, r, a) - e, i > 0 ? n = o : t = o
            } while (Math.abs(i) > 1e-7 && ++s < 12);
            return o
        }(t, 0, 1, e, n);
        return e => 0 === e || 1 === e ? e : ys(a(e), t, r)
    }
    const xs = bs(.42, 0, 1, 1),
        ws = bs(0, 0, .58, 1),
        Ss = bs(.42, 0, .58, 1),
        ks = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        Es = e => t => 1 - e(1 - t),
        Ts = bs(.33, 1.53, .69, .99),
        Cs = Es(Ts),
        Ps = ks(Cs),
        Ns = e => (e *= 2) < 1 ? .5 * Cs(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
        Rs = e => 1 - Math.sin(Math.acos(e)),
        js = Es(Rs),
        As = ks(Rs),
        Fs = {
            linear: zr,
            easeIn: xs,
            easeInOut: Ss,
            easeOut: ws,
            circIn: Rs,
            circInOut: As,
            circOut: js,
            backIn: Cs,
            backInOut: Ps,
            backOut: Ts,
            anticipate: Ns
        },
        Os = e => {
            if (ba(e)) {
                pr(4 === e.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
                const [t, n, r, a] = e;
                return bs(t, n, r, a)
            }
            return "string" === typeof e ? (pr(void 0 !== Fs[e], "Invalid easing type '".concat(e, "'"), "invalid-easing-type"), Fs[e]) : e
        },
        Ds = (e, t, n) => {
            const r = t - e;
            return 0 === r ? 1 : (n - e) / r
        };

    function Ms(e, t) {
        let {
            clamp: n = !0,
            ease: r,
            mixer: a
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const i = e.length;
        if (pr(i === t.length, "Both input and output ranges must be the same length", "range-length"), 1 === i) return () => t[0];
        if (2 === i && t[0] === t[1]) return () => t[1];
        const o = e[0] === e[1];
        e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
        const s = function(e, t, n) {
                const r = [],
                    a = n || Ir.mix || rs,
                    i = e.length - 1;
                for (let o = 0; o < i; o++) {
                    let n = a(e[o], e[o + 1]);
                    if (t) {
                        const e = Array.isArray(t) ? t[o] || zr : t;
                        n = Wo(e, n)
                    }
                    r.push(n)
                }
                return r
            }(t, r, a),
            l = s.length,
            u = n => {
                if (o && n < e[0]) return t[0];
                let r = 0;
                if (l > 1)
                    for (; r < e.length - 2 && !(n < e[r + 1]); r++);
                const a = Ds(e[r], e[r + 1], n);
                return s[r](a)
            };
        return n ? t => u(xn(e[0], e[i - 1], t)) : u
    }

    function Ls(e) {
        const t = [0];
        return function(e, t) {
            const n = e[e.length - 1];
            for (let r = 1; r <= t; r++) {
                const a = Ds(0, t, r);
                e.push(bi(n, 1, a))
            }
        }(t, e.length - 1), t
    }

    function _s(e) {
        let {
            duration: t = 300,
            keyframes: n,
            times: r,
            ease: a = "easeInOut"
        } = e;
        const i = (e => Array.isArray(e) && "number" !== typeof e[0])(a) ? a.map(Os) : Os(a),
            o = {
                done: !1,
                value: n[0]
            },
            s = function(e, t) {
                return e.map(e => e * t)
            }(r && r.length === n.length ? r : Ls(n), t),
            l = Ms(s, n, {
                ease: Array.isArray(i) ? i : (u = n, c = i, u.map(() => c || Ss).splice(0, u.length - 1))
            });
        var u, c;
        return {
            calculatedDuration: t,
            next: e => (o.value = l(e), o.done = e >= t, o)
        }
    }
    const zs = {
        decay: vs,
        inertia: vs,
        tween: _s,
        keyframes: _s,
        spring: gs
    };

    function Is(e) {
        "string" === typeof e.type && (e.type = zs[e.type])
    }
    const Bs = e => e / 100;
    class Vs extends va {
        constructor(e) {
            super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
                var e, t;
                const {
                    motionValue: n
                } = this.options;
                n && n.updatedAt !== Da.now() && this.tick(Da.now()), this.isStopped = !0, "idle" !== this.state && (this.teardown(), null === (e = (t = this.options).onStop) || void 0 === e || e.call(t))
            }, ya.mainThread++, this.options = e, this.initAnimation(), this.play(), !1 === e.autoplay && this.pause()
        }
        initAnimation() {
            const {
                options: e
            } = this;
            Is(e);
            const {
                type: t = _s,
                repeat: n = 0,
                repeatDelay: r = 0,
                repeatType: a,
                velocity: i = 0
            } = e;
            let {
                keyframes: o
            } = e;
            const s = t || _s;
            s !== _s && "number" !== typeof o[0] && (this.mixKeyframes = Wo(Bs, rs(o[0], o[1])), o = [0, 100]);
            const l = s(f(f({}, e), {}, {
                keyframes: o
            }));
            "mirror" === a && (this.mirroredGenerator = s(f(f({}, e), {}, {
                keyframes: [...o].reverse(),
                velocity: -i
            }))), null === l.calculatedDuration && (l.calculatedDuration = os(l));
            const {
                calculatedDuration: u
            } = l;
            this.calculatedDuration = u, this.resolvedDuration = u + r, this.totalDuration = this.resolvedDuration * (n + 1) - r, this.generator = l
        }
        updateTime(e) {
            const t = Math.round(e - this.startTime) * this.playbackSpeed;
            null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = t
        }
        tick(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const {
                generator: n,
                totalDuration: r,
                mixKeyframes: a,
                mirroredGenerator: i,
                resolvedDuration: o,
                calculatedDuration: s
            } = this;
            if (null === this.startTime) return n.next(0);
            const {
                delay: l = 0,
                keyframes: u,
                repeat: c,
                repeatType: d,
                repeatDelay: f,
                type: h,
                onUpdate: p,
                finalKeyframe: m
            } = this.options;
            this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
            const g = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1),
                v = this.playbackSpeed >= 0 ? g < 0 : g > r;
            this.currentTime = Math.max(g, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = r);
            let y = this.currentTime,
                b = n;
            if (c) {
                const e = Math.min(this.currentTime, r) / o;
                let t = Math.floor(e),
                    n = e % 1;
                !n && e >= 1 && (n = 1), 1 === n && t--, t = Math.min(t, c + 1);
                Boolean(t % 2) && ("reverse" === d ? (n = 1 - n, f && (n -= f / o)) : "mirror" === d && (b = i)), y = xn(0, 1, n) * o
            }
            const x = v ? {
                done: !1,
                value: u[0]
            } : b.next(y);
            a && (x.value = a(x.value));
            let {
                done: w
            } = x;
            v || null === s || (w = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
            const S = null === this.holdTime && ("finished" === this.state || "running" === this.state && w);
            return S && h !== vs && (x.value = ga(u, this.options, m, this.speed)), p && p(x.value), S && this.finish(), x
        }
        then(e, t) {
            return this.finished.then(e, t)
        }
        get duration() {
            return sa(this.calculatedDuration)
        }
        get iterationDuration() {
            const {
                delay: e = 0
            } = this.options || {};
            return this.duration + sa(e)
        }
        get time() {
            return sa(this.currentTime)
        }
        set time(e) {
            var t;
            e = oa(e), this.currentTime = e, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), null === (t = this.driver) || void 0 === t || t.start(!1)
        }
        get speed() {
            return this.playbackSpeed
        }
        set speed(e) {
            this.updateTime(Da.now());
            const t = this.playbackSpeed !== e;
            this.playbackSpeed = e, t && (this.time = sa(this.currentTime))
        }
        play() {
            var e, t;
            if (this.isStopped) return;
            const {
                driver: n = as,
                startTime: r
            } = this.options;
            this.driver || (this.driver = n(e => this.tick(e))), null === (e = (t = this.options).onPlay) || void 0 === e || e.call(t);
            const a = this.driver.now();
            "finished" === this.state ? (this.updateFinished(), this.startTime = a) : null !== this.holdTime ? this.startTime = a - this.holdTime : this.startTime || (this.startTime = null !== r && void 0 !== r ? r : a), "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
        }
        pause() {
            this.state = "paused", this.updateTime(Da.now()), this.holdTime = this.currentTime
        }
        complete() {
            "running" !== this.state && this.play(), this.state = "finished", this.holdTime = null
        }
        finish() {
            var e, t;
            this.notifyFinished(), this.teardown(), this.state = "finished", null === (e = (t = this.options).onComplete) || void 0 === e || e.call(t)
        }
        cancel() {
            var e, t;
            this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), null === (e = (t = this.options).onCancel) || void 0 === e || e.call(t)
        }
        teardown() {
            this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, ya.mainThread--
        }
        stopDriver() {
            this.driver && (this.driver.stop(), this.driver = void 0)
        }
        sample(e) {
            return this.startTime = 0, this.tick(e, !0)
        }
        attachTimeline(e) {
            var t;
            return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), null === (t = this.driver) || void 0 === t || t.stop(), e.observe(this)
        }
    }
    const Us = {
        anticipate: Ns,
        backInOut: Ps,
        circInOut: As
    };

    function Hs(e) {
        "string" === typeof e.ease && e.ease in Us && (e.ease = Us[e.ease])
    }
    const Ws = ["motionValue", "onUpdate", "onComplete", "element"];
    class qs extends Na {
        constructor(e) {
            Hs(e), Is(e), super(e), void 0 !== e.startTime && (this.startTime = e.startTime), this.options = e
        }
        updateMotionValue(e) {
            const t = this.options,
                {
                    motionValue: n,
                    onUpdate: r,
                    onComplete: a,
                    element: i
                } = t,
                o = s(t, Ws);
            if (!n) return;
            if (void 0 !== e) return void n.set(e);
            const l = new Vs(f(f({}, o), {}, {
                    autoplay: !1
                })),
                u = Math.max(10, Da.now() - this.startTime),
                c = xn(0, 10, u - 10);
            n.setWithVelocity(l.sample(Math.max(0, u - c)).value, l.sample(u).value, c), l.stop()
        }
    }
    const $s = (e, t) => "zIndex" !== t && (!("number" !== typeof e && !Array.isArray(e)) || !("string" !== typeof e || !Xn.test(e) && "0" !== e || e.startsWith("url(")));

    function Ys(e) {
        e.duration = 0, e.type = "keyframes"
    }
    const Ks = new Set(["opacity", "clipPath", "filter", "transform"]),
        Xs = da(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
    const Qs = ["autoplay", "delay", "type", "repeat", "repeatDelay", "repeatType", "keyframes", "name", "motionValue", "element"];
    class Gs extends va {
        constructor(e) {
            var t;
            let {
                autoplay: n = !0,
                delay: r = 0,
                type: a = "keyframes",
                repeat: i = 0,
                repeatDelay: o = 0,
                repeatType: l = "loop",
                keyframes: u,
                name: c,
                motionValue: d,
                element: h
            } = e, p = s(e, Qs);
            super(), this.stop = () => {
                var e, t;
                this._animation && (this._animation.stop(), null === (t = this.stopTimeline) || void 0 === t || t.call(this));
                null === (e = this.keyframeResolver) || void 0 === e || e.cancel()
            }, this.createdAt = Da.now();
            const m = f({
                    autoplay: n,
                    delay: r,
                    type: a,
                    repeat: i,
                    repeatDelay: o,
                    repeatType: l,
                    name: c,
                    motionValue: d,
                    element: h
                }, p),
                g = (null === h || void 0 === h ? void 0 : h.KeyframeResolver) || Zr;
            this.keyframeResolver = new g(u, (e, t, n) => this.onKeyframesResolved(e, t, m, !n), c, d, h), null === (t = this.keyframeResolver) || void 0 === t || t.scheduleResolve()
        }
        onKeyframesResolved(e, t, n, r) {
            var a;
            this.keyframeResolver = void 0;
            const {
                name: i,
                type: o,
                velocity: s,
                delay: l,
                isHandoff: u,
                onUpdate: c
            } = n;
            this.resolvedAt = Da.now(),
                function(e, t, n, r) {
                    const a = e[0];
                    if (null === a) return !1;
                    if ("display" === t || "visibility" === t) return !0;
                    const i = e[e.length - 1],
                        o = $s(a, t),
                        s = $s(i, t);
                    return hr(o === s, "You are trying to animate ".concat(t, ' from "').concat(a, '" to "').concat(i, '". "').concat(o ? i : a, '" is not an animatable value.'), "value-not-animatable"), !(!o || !s) && (function(e) {
                        const t = e[0];
                        if (1 === e.length) return !0;
                        for (let n = 0; n < e.length; n++)
                            if (e[n] !== t) return !0
                    }(e) || ("spring" === n || Ca(n)) && r)
                }(e, i, o, s) || (!Ir.instantAnimations && l || null === c || void 0 === c || c(ga(e, n, t)), e[0] = e[e.length - 1], Ys(n), n.repeat = 0);
            const d = f(f({
                    startTime: r ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
                    finalKeyframe: t
                }, n), {}, {
                    keyframes: e
                }),
                h = !u && function(e) {
                    var t;
                    const {
                        motionValue: n,
                        name: r,
                        repeatDelay: a,
                        repeatType: i,
                        damping: o,
                        type: s
                    } = e;
                    if (!((null === n || void 0 === n || null === (t = n.owner) || void 0 === t ? void 0 : t.current) instanceof HTMLElement)) return !1;
                    const {
                        onUpdate: l,
                        transformTemplate: u
                    } = n.owner.getProps();
                    return Xs() && r && Ks.has(r) && ("transform" !== r || !u) && !l && !a && "mirror" !== i && 0 !== o && "inertia" !== s
                }(d),
                p = null === (a = d.motionValue) || void 0 === a || null === (a = a.owner) || void 0 === a ? void 0 : a.current,
                m = h ? new qs(f(f({}, d), {}, {
                    element: p
                })) : new Vs(d);
            m.finished.then(() => {
                this.notifyFinished()
            }).catch(zr), this.pendingTimeline && (this.stopTimeline = m.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = m
        }
        get finished() {
            return this._animation ? this.animation.finished : this._finished
        }
        then(e, t) {
            return this.finished.finally(e).then(() => {})
        }
        get animation() {
            var e;
            this._animation || (null === (e = this.keyframeResolver) || void 0 === e || e.resume(), Qr = !0, Jr(), Gr(), Qr = !1);
            return this._animation
        }
        get duration() {
            return this.animation.duration
        }
        get iterationDuration() {
            return this.animation.iterationDuration
        }
        get time() {
            return this.animation.time
        }
        set time(e) {
            this.animation.time = e
        }
        get speed() {
            return this.animation.speed
        }
        get state() {
            return this.animation.state
        }
        set speed(e) {
            this.animation.speed = e
        }
        get startTime() {
            return this.animation.startTime
        }
        attachTimeline(e) {
            return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop()
        }
        play() {
            this.animation.play()
        }
        pause() {
            this.animation.pause()
        }
        complete() {
            this.animation.complete()
        }
        cancel() {
            var e;
            this._animation && this.animation.cancel(), null === (e = this.keyframeResolver) || void 0 === e || e.cancel()
        }
    }
    const Js = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        },
        Zs = {
            type: "keyframes",
            duration: .8
        },
        el = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        },
        tl = (e, t) => {
            let {
                keyframes: n
            } = t;
            return n.length > 2 ? Zs : bn.has(e) ? e.startsWith("scale") ? {
                type: "spring",
                stiffness: 550,
                damping: 0 === n[1] ? 2 * Math.sqrt(550) : 30,
                restSpeed: 10
            } : Js : el
        },
        nl = e => null !== e;
    const rl = ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"];
    const al = function(e, t, n) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                a = arguments.length > 4 ? arguments[4] : void 0,
                i = arguments.length > 5 ? arguments[5] : void 0;
            return o => {
                const l = Lo(r, e) || {},
                    u = l.delay || r.delay || 0;
                let {
                    elapsed: c = 0
                } = r;
                c -= oa(u);
                const d = f(f({
                    keyframes: Array.isArray(n) ? n : [null, n],
                    ease: "easeOut",
                    velocity: t.getVelocity()
                }, l), {}, {
                    delay: -c,
                    onUpdate: e => {
                        t.set(e), l.onUpdate && l.onUpdate(e)
                    },
                    onComplete: () => {
                        o(), l.onComplete && l.onComplete()
                    },
                    name: e,
                    motionValue: t,
                    element: i ? void 0 : a
                });
                (function(e) {
                    let {
                        when: t,
                        delay: n,
                        delayChildren: r,
                        staggerChildren: a,
                        staggerDirection: i,
                        repeat: o,
                        repeatType: l,
                        repeatDelay: u,
                        from: c,
                        elapsed: d
                    } = e, f = s(e, rl);
                    return !!Object.keys(f).length
                })(l) || Object.assign(d, tl(e, d)), d.duration && (d.duration = oa(d.duration)), d.repeatDelay && (d.repeatDelay = oa(d.repeatDelay)), void 0 !== d.from && (d.keyframes[0] = d.from);
                let h = !1;
                if ((!1 === d.type || 0 === d.duration && !d.repeatDelay) && (Ys(d), 0 === d.delay && (h = !0)), (Ir.instantAnimations || Ir.skipAnimations || null !== a && void 0 !== a && a.shouldSkipAnimations) && (h = !0, Ys(d), d.delay = 0), d.allowFlatten = !l.type && !l.ease, h && !i && void 0 !== t.get()) {
                    const e = function(e, t, n) {
                        let {
                            repeat: r,
                            repeatType: a = "loop"
                        } = t;
                        const i = e.filter(nl),
                            o = r && "loop" !== a && r % 2 === 1 ? 0 : i.length - 1;
                        return o && void 0 !== n ? n : i[o]
                    }(d.keyframes, l);
                    if (void 0 !== e) return void Hr.update(() => {
                        d.onUpdate(e), d.onComplete()
                    })
                }
                return l.isSync ? new Vs(d) : new Gs(d)
            }
        },
        il = ["transition", "transitionEnd"];

    function ol(e, t) {
        let {
            protectedKeys: n,
            needsAnimating: r
        } = e;
        const a = n.hasOwnProperty(t) && !0 !== r[t];
        return r[t] = !1, a
    }

    function sl(e, t) {
        var n;
        let {
            delay: r = 0,
            transitionOverride: a,
            type: i
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
            transition: o,
            transitionEnd: l
        } = t, u = s(t, il);
        const c = e.getDefaultTransition();
        o = o ? Mo(o, c) : c;
        const d = null === (n = o) || void 0 === n ? void 0 : n.reduceMotion;
        a && (o = a);
        const h = [],
            p = i && e.animationState && e.animationState.getState()[i];
        for (const s in u) {
            var m;
            const t = e.getValue(s, null !== (m = e.latestValues[s]) && void 0 !== m ? m : null),
                n = u[s];
            if (void 0 === n || p && ol(p, s)) continue;
            const a = f({
                    delay: r
                }, Lo(o || {}, s)),
                i = t.get();
            if (void 0 !== i && !t.isAnimating && !Array.isArray(n) && n === i && !a.velocity) continue;
            let l = !1;
            if (window.MotionHandoffAnimation) {
                const t = Uo(e);
                if (t) {
                    const e = window.MotionHandoffAnimation(t, s, Hr);
                    null !== e && (a.startTime = e, l = !0)
                }
            }
            Vo(e, s);
            const c = null !== d && void 0 !== d ? d : e.shouldReduceMotion;
            t.start(al(s, t, n, c && sr.has(s) ? {
                type: !1
            } : a, e, l));
            const g = t.animation;
            g && h.push(g)
        }
        if (l) {
            const t = () => Hr.update(() => {
                l && function(e, t) {
                    let n = Oo(e, t) || {},
                        {
                            transitionEnd: r = {},
                            transition: a = {}
                        } = n,
                        i = s(n, zo);
                    i = f(f({}, i), r);
                    for (const o in i) Io(e, o, Bo(i[o]))
                }(e, l)
            });
            h.length ? Promise.all(h).then(t) : t()
        }
        return h
    }

    function ll(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
        const i = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t),
            o = e.size,
            s = (o - 1) * r;
        return "function" === typeof n ? n(i, o) : 1 === a ? i * r : s - i * r
    }

    function ul(e, t) {
        var n;
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const a = Oo(e, t, "exit" === r.type ? null === (n = e.presenceContext) || void 0 === n ? void 0 : n.custom : void 0);
        let {
            transition: i = e.getDefaultTransition() || {}
        } = a || {};
        r.transitionOverride && (i = r.transitionOverride);
        const o = a ? () => Promise.all(sl(e, a, r)) : () => Promise.resolve(),
            s = e.variantChildren && e.variantChildren.size ? function() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                const {
                    delayChildren: a = 0,
                    staggerChildren: o,
                    staggerDirection: s
                } = i;
                return function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                        i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
                        o = arguments.length > 6 ? arguments[6] : void 0;
                    const s = [];
                    for (const l of e.variantChildren) l.notify("AnimationStart", t), s.push(ul(l, t, f(f({}, o), {}, {
                        delay: n + ("function" === typeof r ? 0 : r) + ll(e.variantChildren, l, r, a, i)
                    })).then(() => l.notify("AnimationComplete", t)));
                    return Promise.all(s)
                }(e, t, n, a, o, s, r)
            } : () => Promise.resolve(),
            {
                when: l
            } = i;
        if (l) {
            const [e, t] = "beforeChildren" === l ? [o, s] : [s, o];
            return e().then(() => t())
        }
        return Promise.all([o(), s(r.delay)])
    }
    const cl = Wa.length;

    function dl(e) {
        if (!e) return;
        if (!e.isControllingVariants) {
            const t = e.parent && dl(e.parent) || {};
            return void 0 !== e.props.initial && (t.initial = e.props.initial), t
        }
        const t = {};
        for (let n = 0; n < cl; n++) {
            const r = Wa[n],
                a = e.props[r];
            (Ua(a) || !1 === a) && (t[r] = a)
        }
        return t
    }

    function fl(e, t) {
        if (!Array.isArray(t)) return !1;
        const n = t.length;
        if (n !== e.length) return !1;
        for (let r = 0; r < n; r++)
            if (t[r] !== e[r]) return !1;
        return !0
    }
    const hl = ["transition", "transitionEnd"],
        pl = [...Ha].reverse(),
        ml = Ha.length;

    function gl(e) {
        return t => Promise.all(t.map(t => {
            let {
                animation: n,
                options: r
            } = t;
            return function(e, t) {
                let n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (e.notify("AnimationStart", t), Array.isArray(t)) {
                    const a = t.map(t => ul(e, t, r));
                    n = Promise.all(a)
                } else if ("string" === typeof t) n = ul(e, t, r);
                else {
                    const a = "function" === typeof t ? Oo(e, t, r.custom) : t;
                    n = Promise.all(sl(e, a, r))
                }
                return n.then(() => {
                    e.notify("AnimationComplete", t)
                })
            }(e, n, r)
        }))
    }

    function vl(e) {
        let t = gl(e),
            n = xl(),
            r = !0;
        const a = t => (n, r) => {
            var a;
            const i = Oo(e, r, "exit" === t ? null === (a = e.presenceContext) || void 0 === a ? void 0 : a.custom : void 0);
            if (i) {
                const {
                    transition: e,
                    transitionEnd: t
                } = i, r = s(i, hl);
                n = f(f(f({}, n), r), t)
            }
            return n
        };

        function i(i) {
            const {
                props: o
            } = e, s = dl(e.parent) || {}, l = [], u = new Set;
            let c = {},
                d = 1 / 0;
            for (let t = 0; t < ml; t++) {
                const h = pl[t],
                    p = n[h],
                    m = void 0 !== o[h] ? o[h] : s[h],
                    g = Ua(m),
                    v = h === i ? p.isActive : null;
                !1 === v && (d = t);
                let y = m === s[h] && m !== o[h] && g;
                if (y && r && e.manuallyAnimateOnMount && (y = !1), p.protectedKeys = f({}, c), !p.isActive && null === v || !m && !p.prevProp || Va(m) || "boolean" === typeof m) continue;
                if ("exit" === h && p.isActive && !0 !== v) {
                    p.prevResolvedValues && (c = f(f({}, c), p.prevResolvedValues));
                    continue
                }
                const b = yl(p.prevProp, m);
                let x = b || h === i && p.isActive && !y && g || t > d && g,
                    w = !1;
                const S = Array.isArray(m) ? m : [m];
                let k = S.reduce(a(h), {});
                !1 === v && (k = {});
                const {
                    prevResolvedValues: E = {}
                } = p, T = f(f({}, E), k), C = t => {
                    x = !0, u.has(t) && (w = !0, u.delete(t)), p.needsAnimating[t] = !0;
                    const n = e.getValue(t);
                    n && (n.liveStyle = !1)
                };
                for (const e in T) {
                    const t = k[e],
                        n = E[e];
                    if (c.hasOwnProperty(e)) continue;
                    let r = !1;
                    r = _o(t) && _o(n) ? !fl(t, n) : t !== n, r ? void 0 !== t && null !== t ? C(e) : u.add(e) : void 0 !== t && u.has(e) ? C(e) : p.protectedKeys[e] = !0
                }
                p.prevProp = m, p.prevResolvedValues = k, p.isActive && (c = f(f({}, c), k)), r && e.blockInitialAnimation && (x = !1);
                const P = y && b;
                x && (!P || w) && l.push(...S.map(t => {
                    const n = {
                        type: h
                    };
                    if ("string" === typeof t && r && !P && e.manuallyAnimateOnMount && e.parent) {
                        const {
                            parent: r
                        } = e, a = Oo(r, t);
                        if (r.enteringChildren && a) {
                            const {
                                delayChildren: t
                            } = a.transition || {};
                            n.delay = ll(r.enteringChildren, e, t)
                        }
                    }
                    return {
                        animation: t,
                        options: n
                    }
                }))
            }
            if (u.size) {
                const t = {};
                if ("boolean" !== typeof o.initial) {
                    const n = Oo(e, Array.isArray(o.initial) ? o.initial[0] : o.initial);
                    n && n.transition && (t.transition = n.transition)
                }
                u.forEach(n => {
                    const r = e.getBaseTarget(n),
                        a = e.getValue(n);
                    a && (a.liveStyle = !0), t[n] = null !== r && void 0 !== r ? r : null
                }), l.push({
                    animation: t
                })
            }
            let h = Boolean(l.length);
            return !r || !1 !== o.initial && o.initial !== o.animate || e.manuallyAnimateOnMount || (h = !1), r = !1, h ? t(l) : Promise.resolve()
        }
        return {
            animateChanges: i,
            setActive: function(t, r) {
                var a;
                if (n[t].isActive === r) return Promise.resolve();
                null === (a = e.variantChildren) || void 0 === a || a.forEach(e => {
                    var n;
                    return null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(t, r)
                }), n[t].isActive = r;
                const o = i(t);
                for (const e in n) n[e].protectedKeys = {};
                return o
            },
            setAnimateFunction: function(n) {
                t = n(e)
            },
            getState: () => n,
            reset: () => {
                n = xl()
            }
        }
    }

    function yl(e, t) {
        return "string" === typeof t ? t !== e : !!Array.isArray(t) && !fl(t, e)
    }

    function bl() {
        return {
            isActive: arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {}
        }
    }

    function xl() {
        return {
            animate: bl(!0),
            whileInView: bl(),
            whileHover: bl(),
            whileTap: bl(),
            whileDrag: bl(),
            whileFocus: bl(),
            exit: bl()
        }
    }
    let wl = 0;
    const Sl = {
            animation: {
                Feature: class extends Fo {
                    constructor(e) {
                        super(e), e.animationState || (e.animationState = vl(e))
                    }
                    updateAnimationControlsSubscription() {
                        const {
                            animate: e
                        } = this.node.getProps();
                        Va(e) && (this.unmountControls = e.subscribe(this.node))
                    }
                    mount() {
                        this.updateAnimationControlsSubscription()
                    }
                    update() {
                        const {
                            animate: e
                        } = this.node.getProps(), {
                            animate: t
                        } = this.node.prevProps || {};
                        e !== t && this.updateAnimationControlsSubscription()
                    }
                    unmount() {
                        var e;
                        this.node.animationState.reset(), null === (e = this.unmountControls) || void 0 === e || e.call(this)
                    }
                }
            },
            exit: {
                Feature: class extends Fo {
                    constructor() {
                        super(...arguments), this.id = wl++
                    }
                    update() {
                        if (!this.node.presenceContext) return;
                        const {
                            isPresent: e,
                            onExitComplete: t
                        } = this.node.presenceContext, {
                            isPresent: n
                        } = this.node.prevPresenceContext || {};
                        if (!this.node.animationState || e === n) return;
                        const r = this.node.animationState.setActive("exit", !e);
                        t && !e && r.then(() => {
                            t(this.id)
                        })
                    }
                    mount() {
                        const {
                            register: e,
                            onExitComplete: t
                        } = this.node.presenceContext || {};
                        t && t(this.id), e && (this.unmount = e(this.id))
                    }
                    unmount() {}
                }
            }
        },
        kl = {
            x: !1,
            y: !1
        };

    function El() {
        return kl.x || kl.y
    }

    function Tl(e) {
        return [e("x"), e("y")]
    }

    function Cl(e) {
        return e.max - e.min
    }

    function Pl(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
        e.origin = r, e.originPoint = bi(t.min, t.max, e.origin), e.scale = Cl(n) / Cl(t), e.translate = bi(n.min, n.max, e.origin) - e.originPoint, (e.scale >= .9999 && e.scale <= 1.0001 || isNaN(e.scale)) && (e.scale = 1), (e.translate >= -.01 && e.translate <= .01 || isNaN(e.translate)) && (e.translate = 0)
    }

    function Nl(e, t, n, r) {
        Pl(e.x, t.x, n.x, r ? r.originX : void 0), Pl(e.y, t.y, n.y, r ? r.originY : void 0)
    }

    function Rl(e, t, n) {
        e.min = n.min + t.min, e.max = e.min + Cl(t)
    }

    function jl(e, t, n) {
        e.min = t.min - n.min, e.max = e.min + Cl(t)
    }

    function Al(e, t, n) {
        jl(e.x, t.x, n.x), jl(e.y, t.y, n.y)
    }
    const Fl = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
    const Ol = new Set(["INPUT", "SELECT", "TEXTAREA"]);

    function Dl(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
            passive: !0
        };
        return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
    }

    function Ml(e) {
        return "object" === typeof e && null !== e
    }

    function Ll(e) {
        return Ml(e) && "ownerSVGElement" in e
    }

    function _l(e, t, n) {
        if (null == e) return [];
        if (e instanceof EventTarget) return [e];
        if ("string" === typeof e) {
            var r;
            let a = document;
            t && (a = t.current);
            const i = null !== (r = null === n || void 0 === n ? void 0 : n[e]) && void 0 !== r ? r : a.querySelectorAll(e);
            return i ? Array.from(i) : []
        }
        return Array.from(e).filter(e => null != e)
    }
    const zl = new WeakMap;
    let Il;
    const Bl = (e, t, n) => (r, a) => a && a[0] ? a[0][e + "Size"] : Ll(r) && "getBBox" in r ? r.getBBox()[t] : r[n],
        Vl = Bl("inline", "width", "offsetWidth"),
        Ul = Bl("block", "height", "offsetHeight");

    function Hl(e) {
        var t;
        let {
            target: n,
            borderBoxSize: r
        } = e;
        null === (t = zl.get(n)) || void 0 === t || t.forEach(e => {
            e(n, {
                get width() {
                    return Vl(n, r)
                },
                get height() {
                    return Ul(n, r)
                }
            })
        })
    }

    function Wl(e) {
        e.forEach(Hl)
    }

    function ql(e, t) {
        Il || "undefined" !== typeof ResizeObserver && (Il = new ResizeObserver(Wl));
        const n = _l(e);
        return n.forEach(e => {
            var n;
            let r = zl.get(e);
            r || (r = new Set, zl.set(e, r)), r.add(t), null === (n = Il) || void 0 === n || n.observe(e)
        }), () => {
            n.forEach(e => {
                const n = zl.get(e);
                var r;
                (null === n || void 0 === n || n.delete(t), null !== n && void 0 !== n && n.size) || (null === (r = Il) || void 0 === r || r.unobserve(e))
            })
        }
    }
    const $l = new Set;
    let Yl;

    function Kl(e) {
        return $l.add(e), Yl || (Yl = () => {
            const e = {
                get width() {
                    return window.innerWidth
                },
                get height() {
                    return window.innerHeight
                }
            };
            $l.forEach(t => t(e))
        }, window.addEventListener("resize", Yl)), () => {
            $l.delete(e), $l.size || "function" !== typeof Yl || (window.removeEventListener("resize", Yl), Yl = void 0)
        }
    }

    function Xl(e, t) {
        return "function" === typeof e ? Kl(e) : ql(e, t)
    }
    const Ql = e => "mouse" === e.pointerType ? "number" !== typeof e.button || e.button <= 0 : !1 !== e.isPrimary;

    function Gl(e) {
        return {
            point: {
                x: e.pageX,
                y: e.pageY
            }
        }
    }

    function Jl(e, t, n, r) {
        return Dl(e, t, (e => t => Ql(t) && e(t, Gl(t)))(n), r)
    }
    const Zl = e => {
            let {
                current: t
            } = e;
            return t ? t.ownerDocument.defaultView : null
        },
        eu = (e, t) => Math.abs(e - t);
    const tu = new Set(["auto", "scroll"]);
    class nu {
        constructor(e, t) {
            let {
                transformPagePoint: n,
                contextWindow: r = window,
                dragSnapToOrigin: a = !1,
                distanceThreshold: i = 3,
                element: o
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map, this.removeScrollListeners = null, this.onElementScroll = e => {
                    this.handleScroll(e.target)
                }, this.onWindowScroll = () => {
                    this.handleScroll(window)
                }, this.updatePoint = () => {
                    if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
                    const e = iu(this.lastMoveEventInfo, this.history),
                        t = null !== this.startEvent,
                        n = function(e, t) {
                            const n = eu(e.x, t.x),
                                r = eu(e.y, t.y);
                            return Math.sqrt(n ** 2 + r ** 2)
                        }(e.offset, {
                            x: 0,
                            y: 0
                        }) >= this.distanceThreshold;
                    if (!t && !n) return;
                    const {
                        point: r
                    } = e, {
                        timestamp: a
                    } = qr;
                    this.history.push(f(f({}, r), {}, {
                        timestamp: a
                    }));
                    const {
                        onStart: i,
                        onMove: o
                    } = this.handlers;
                    t || (i && i(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, e)
                }, this.handlePointerMove = (e, t) => {
                    this.lastMoveEvent = e, this.lastMoveEventInfo = ru(t, this.transformPagePoint), Hr.update(this.updatePoint, !0)
                }, this.handlePointerUp = (e, t) => {
                    this.end();
                    const {
                        onEnd: n,
                        onSessionEnd: r,
                        resumeAnimation: a
                    } = this.handlers;
                    if (!this.dragSnapToOrigin && this.startEvent || a && a(), !this.lastMoveEvent || !this.lastMoveEventInfo) return;
                    const i = iu("pointercancel" === e.type ? this.lastMoveEventInfo : ru(t, this.transformPagePoint), this.history);
                    this.startEvent && n && n(e, i), r && r(e, i)
                }, !Ql(e)) return;
            this.dragSnapToOrigin = a, this.handlers = t, this.transformPagePoint = n, this.distanceThreshold = i, this.contextWindow = r || window;
            const s = ru(Gl(e), this.transformPagePoint),
                {
                    point: l
                } = s,
                {
                    timestamp: u
                } = qr;
            this.history = [f(f({}, l), {}, {
                timestamp: u
            })];
            const {
                onSessionStart: c
            } = t;
            c && c(e, iu(s, this.history)), this.removeListeners = Wo(Jl(this.contextWindow, "pointermove", this.handlePointerMove), Jl(this.contextWindow, "pointerup", this.handlePointerUp), Jl(this.contextWindow, "pointercancel", this.handlePointerUp)), o && this.startScrollTracking(o)
        }
        startScrollTracking(e) {
            let t = e.parentElement;
            for (; t;) {
                const e = getComputedStyle(t);
                (tu.has(e.overflowX) || tu.has(e.overflowY)) && this.scrollPositions.set(t, {
                    x: t.scrollLeft,
                    y: t.scrollTop
                }), t = t.parentElement
            }
            this.scrollPositions.set(window, {
                x: window.scrollX,
                y: window.scrollY
            }), window.addEventListener("scroll", this.onElementScroll, {
                capture: !0
            }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
                window.removeEventListener("scroll", this.onElementScroll, {
                    capture: !0
                }), window.removeEventListener("scroll", this.onWindowScroll)
            }
        }
        handleScroll(e) {
            const t = this.scrollPositions.get(e);
            if (!t) return;
            const n = e === window,
                r = n ? {
                    x: window.scrollX,
                    y: window.scrollY
                } : {
                    x: e.scrollLeft,
                    y: e.scrollTop
                },
                a = r.x - t.x,
                i = r.y - t.y;
            0 === a && 0 === i || (n ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += a, this.lastMoveEventInfo.point.y += i) : this.history.length > 0 && (this.history[0].x -= a, this.history[0].y -= i), this.scrollPositions.set(e, r), Hr.update(this.updatePoint, !0))
        }
        updateHandlers(e) {
            this.handlers = e
        }
        end() {
            this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Wr(this.updatePoint)
        }
    }

    function ru(e, t) {
        return t ? {
            point: t(e.point)
        } : e
    }

    function au(e, t) {
        return {
            x: e.x - t.x,
            y: e.y - t.y
        }
    }

    function iu(e, t) {
        let {
            point: n
        } = e;
        return {
            point: n,
            delta: au(n, su(t)),
            offset: au(n, ou(t)),
            velocity: lu(t, .1)
        }
    }

    function ou(e) {
        return e[0]
    }

    function su(e) {
        return e[e.length - 1]
    }

    function lu(e, t) {
        if (e.length < 2) return {
            x: 0,
            y: 0
        };
        let n = e.length - 1,
            r = null;
        const a = su(e);
        for (; n >= 0 && (r = e[n], !(a.timestamp - r.timestamp > oa(t)));) n--;
        if (!r) return {
            x: 0,
            y: 0
        };
        r === e[0] && e.length > 2 && a.timestamp - r.timestamp > 2 * oa(t) && (r = e[1]);
        const i = sa(a.timestamp - r.timestamp);
        if (0 === i) return {
            x: 0,
            y: 0
        };
        const o = {
            x: (a.x - r.x) / i,
            y: (a.y - r.y) / i
        };
        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
    }

    function uu(e, t, n) {
        return {
            min: void 0 !== t ? e.min + t : void 0,
            max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
        }
    }

    function cu(e, t) {
        let n = t.min - e.min,
            r = t.max - e.max;
        return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
            min: n,
            max: r
        }
    }
    const du = .35;

    function fu(e, t, n) {
        return {
            min: hu(e, t),
            max: hu(e, n)
        }
    }

    function hu(e, t) {
        return "number" === typeof e ? e : e[t] || 0
    }
    const pu = new WeakMap;
    class mu {
        constructor(e) {
            this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                x: 0,
                y: 0
            }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = {
                x: {
                    min: 0,
                    max: 0
                },
                y: {
                    min: 0,
                    max: 0
                }
            }, this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e
        }
        start(e) {
            let {
                snapToCursor: t = !1,
                distanceThreshold: n
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const {
                presenceContext: r
            } = this.visualElement;
            if (r && !1 === r.isPresent) return;
            const {
                dragSnapToOrigin: a
            } = this.getProps();
            this.panSession = new nu(e, {
                onSessionStart: e => {
                    t && this.snapToCursor(Gl(e).point), this.stopAnimation()
                },
                onStart: (e, t) => {
                    const {
                        drag: n,
                        dragPropagation: r,
                        onDragStart: a
                    } = this.getProps();
                    if (n && !r && (this.openDragLock && this.openDragLock(), this.openDragLock = "x" === (i = n) || "y" === i ? kl[i] ? null : (kl[i] = !0, () => {
                            kl[i] = !1
                        }) : kl.x || kl.y ? null : (kl.x = kl.y = !0, () => {
                            kl.x = kl.y = !1
                        }), !this.openDragLock)) return;
                    var i;
                    this.latestPointerEvent = e, this.latestPanInfo = t, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Tl(e => {
                        let t = this.getAxisMotionValue(e).get() || 0;
                        if (Dn.test(t)) {
                            const {
                                projection: n
                            } = this.visualElement;
                            if (n && n.layout) {
                                const r = n.layout.layoutBox[e];
                                if (r) {
                                    t = Cl(r) * (parseFloat(t) / 100)
                                }
                            }
                        }
                        this.originPoint[e] = t
                    }), a && Hr.update(() => a(e, t), !1, !0), Vo(this.visualElement, "transform");
                    const {
                        animationState: o
                    } = this.visualElement;
                    o && o.setActive("whileDrag", !0)
                },
                onMove: (e, t) => {
                    this.latestPointerEvent = e, this.latestPanInfo = t;
                    const {
                        dragPropagation: n,
                        dragDirectionLock: r,
                        onDirectionLock: a,
                        onDrag: i
                    } = this.getProps();
                    if (!n && !this.openDragLock) return;
                    const {
                        offset: o
                    } = t;
                    if (r && null === this.currentDirection) return this.currentDirection = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                            n = null;
                        Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x");
                        return n
                    }(o), void(null !== this.currentDirection && a && a(this.currentDirection));
                    this.updateAxis("x", t.point, o), this.updateAxis("y", t.point, o), this.visualElement.render(), i && Hr.update(() => i(e, t), !1, !0)
                },
                onSessionEnd: (e, t) => {
                    this.latestPointerEvent = e, this.latestPanInfo = t, this.stop(e, t), this.latestPointerEvent = null, this.latestPanInfo = null
                },
                resumeAnimation: () => {
                    const {
                        dragSnapToOrigin: e
                    } = this.getProps();
                    (e || this.constraints) && this.startAnimation({
                        x: 0,
                        y: 0
                    })
                }
            }, {
                transformPagePoint: this.visualElement.getTransformPagePoint(),
                dragSnapToOrigin: a,
                distanceThreshold: n,
                contextWindow: Zl(this.visualElement),
                element: this.visualElement.current
            })
        }
        stop(e, t) {
            const n = e || this.latestPointerEvent,
                r = t || this.latestPanInfo,
                a = this.isDragging;
            if (this.cancel(), !a || !r || !n) return;
            const {
                velocity: i
            } = r;
            this.startAnimation(i);
            const {
                onDragEnd: o
            } = this.getProps();
            o && Hr.postRender(() => o(n, r))
        }
        cancel() {
            this.isDragging = !1;
            const {
                projection: e,
                animationState: t
            } = this.visualElement;
            e && (e.isAnimationBlocked = !1), this.endPanSession();
            const {
                dragPropagation: n
            } = this.getProps();
            !n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), t && t.setActive("whileDrag", !1)
        }
        endPanSession() {
            this.panSession && this.panSession.end(), this.panSession = void 0
        }
        updateAxis(e, t, n) {
            const {
                drag: r
            } = this.getProps();
            if (!n || !vu(e, r, this.currentDirection)) return;
            const a = this.getAxisMotionValue(e);
            let i = this.originPoint[e] + n[e];
            this.constraints && this.constraints[e] && (i = function(e, t, n) {
                let {
                    min: r,
                    max: a
                } = t;
                return void 0 !== r && e < r ? e = n ? bi(r, e, n.min) : Math.max(e, r) : void 0 !== a && e > a && (e = n ? bi(a, e, n.max) : Math.min(e, a)), e
            }(i, this.constraints[e], this.elastic[e])), a.set(i)
        }
        resolveConstraints() {
            var e;
            const {
                dragConstraints: t,
                dragElastic: n
            } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout, a = this.constraints;
            t && To(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !r) && function(e, t) {
                let {
                    top: n,
                    left: r,
                    bottom: a,
                    right: i
                } = t;
                return {
                    x: uu(e.x, r, i),
                    y: uu(e.y, n, a)
                }
            }(r.layoutBox, t), this.elastic = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : du;
                return !1 === e ? e = 0 : !0 === e && (e = du), {
                    x: fu(e, "left", "right"),
                    y: fu(e, "top", "bottom")
                }
            }(n), a !== this.constraints && !To(t) && r && this.constraints && !this.hasMutatedConstraints && Tl(e => {
                !1 !== this.constraints && this.getAxisMotionValue(e) && (this.constraints[e] = function(e, t) {
                    const n = {};
                    return void 0 !== t.min && (n.min = t.min - e.min), void 0 !== t.max && (n.max = t.max - e.min), n
                }(r.layoutBox[e], this.constraints[e]))
            })
        }
        resolveRefConstraints() {
            const {
                dragConstraints: e,
                onMeasureDragConstraints: t
            } = this.getProps();
            if (!e || !To(e)) return !1;
            const n = e.current;
            pr(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
            const {
                projection: r
            } = this.visualElement;
            if (!r || !r.layout) return !1;
            const a = function(e, t, n) {
                const r = Vi(e, n),
                    {
                        scroll: a
                    } = t;
                return a && (zi(r.x, a.offset.x), zi(r.y, a.offset.y)), r
            }(n, r.root, this.visualElement.getTransformPagePoint());
            let i = function(e, t) {
                return {
                    x: cu(e.x, t.x),
                    y: cu(e.y, t.y)
                }
            }(r.layout.layoutBox, a);
            if (t) {
                const e = t(function(e) {
                    let {
                        x: t,
                        y: n
                    } = e;
                    return {
                        top: n.min,
                        right: t.max,
                        bottom: n.max,
                        left: t.min
                    }
                }(i));
                this.hasMutatedConstraints = !!e, e && (i = Ci(e))
            }
            return i
        }
        startAnimation(e) {
            const {
                drag: t,
                dragMomentum: n,
                dragElastic: r,
                dragTransition: a,
                dragSnapToOrigin: i,
                onDragTransitionEnd: o
            } = this.getProps(), s = this.constraints || {}, l = Tl(o => {
                if (!vu(o, t, this.currentDirection)) return;
                let l = s && s[o] || {};
                i && (l = {
                    min: 0,
                    max: 0
                });
                const u = r ? 200 : 1e6,
                    c = r ? 40 : 1e7,
                    d = f(f({
                        type: "inertia",
                        velocity: n ? e[o] : 0,
                        bounceStiffness: u,
                        bounceDamping: c,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10
                    }, a), l);
                return this.startAxisValueAnimation(o, d)
            });
            return Promise.all(l).then(o)
        }
        startAxisValueAnimation(e, t) {
            const n = this.getAxisMotionValue(e);
            return Vo(this.visualElement, e), n.start(al(e, n, 0, t, this.visualElement, !1))
        }
        stopAnimation() {
            Tl(e => this.getAxisMotionValue(e).stop())
        }
        getAxisMotionValue(e) {
            const t = "_drag".concat(e.toUpperCase()),
                n = this.visualElement.getProps(),
                r = n[t];
            return r || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
        }
        snapToCursor(e) {
            Tl(t => {
                const {
                    drag: n
                } = this.getProps();
                if (!vu(t, n, this.currentDirection)) return;
                const {
                    projection: r
                } = this.visualElement, a = this.getAxisMotionValue(t);
                if (r && r.layout) {
                    const {
                        min: n,
                        max: i
                    } = r.layout.layoutBox[t], o = a.get() || 0;
                    a.set(e[t] - bi(n, i, .5) + o)
                }
            })
        }
        scalePositionWithinConstraints() {
            if (!this.visualElement.current) return;
            const {
                drag: e,
                dragConstraints: t
            } = this.getProps(), {
                projection: n
            } = this.visualElement;
            if (!To(t) || !n || !this.constraints) return;
            this.stopAnimation();
            const r = {
                x: 0,
                y: 0
            };
            Tl(e => {
                const t = this.getAxisMotionValue(e);
                if (t && !1 !== this.constraints) {
                    const n = t.get();
                    r[e] = function(e, t) {
                        let n = .5;
                        const r = Cl(e),
                            a = Cl(t);
                        return a > r ? n = Ds(t.min, t.max - r, e.min) : r > a && (n = Ds(e.min, e.max - a, t.min)), xn(0, 1, n)
                    }({
                        min: n,
                        max: n
                    }, this.constraints[e])
                }
            });
            const {
                transformTemplate: a
            } = this.visualElement.getProps();
            this.visualElement.current.style.transform = a ? a({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.constraints = !1, this.resolveConstraints(), Tl(t => {
                if (!vu(t, e, null)) return;
                const n = this.getAxisMotionValue(t),
                    {
                        min: a,
                        max: i
                    } = this.constraints[t];
                n.set(bi(a, i, r[t]))
            }), this.visualElement.render()
        }
        addListeners() {
            if (!this.visualElement.current) return;
            pu.set(this.visualElement, this);
            const e = this.visualElement.current,
                t = Jl(e, "pointerdown", t => {
                    const {
                        drag: n,
                        dragListener: r = !0
                    } = this.getProps(), a = t.target, i = a !== e && function(e) {
                        return Ol.has(e.tagName) || !0 === e.isContentEditable
                    }(a);
                    n && r && !i && this.start(t)
                });
            let n;
            const r = () => {
                    const {
                        dragConstraints: t
                    } = this.getProps();
                    To(t) && t.current && (this.constraints = this.resolveRefConstraints(), n || (n = function(e, t, n) {
                        const r = Xl(e, gu(n)),
                            a = Xl(t, gu(n));
                        return () => {
                            r(), a()
                        }
                    }(e, t.current, () => this.scalePositionWithinConstraints())))
                },
                {
                    projection: a
                } = this.visualElement,
                i = a.addEventListener("measure", r);
            a && !a.layout && (a.root && a.root.updateScroll(), a.updateLayout()), Hr.read(r);
            const o = Dl(window, "resize", () => this.scalePositionWithinConstraints()),
                s = a.addEventListener("didUpdate", e => {
                    let {
                        delta: t,
                        hasLayoutChanged: n
                    } = e;
                    this.isDragging && n && (Tl(e => {
                        const n = this.getAxisMotionValue(e);
                        n && (this.originPoint[e] += t[e].translate, n.set(n.get() + t[e].translate))
                    }), this.visualElement.render())
                });
            return () => {
                o(), t(), i(), s && s(), n && n()
            }
        }
        getProps() {
            const e = this.visualElement.getProps(),
                {
                    drag: t = !1,
                    dragDirectionLock: n = !1,
                    dragPropagation: r = !1,
                    dragConstraints: a = !1,
                    dragElastic: i = du,
                    dragMomentum: o = !0
                } = e;
            return f(f({}, e), {}, {
                drag: t,
                dragDirectionLock: n,
                dragPropagation: r,
                dragConstraints: a,
                dragElastic: i,
                dragMomentum: o
            })
        }
    }

    function gu(e) {
        let t = !0;
        return () => {
            t ? t = !1 : e()
        }
    }

    function vu(e, t, n) {
        return (!0 === t || t === e) && (null === n || n === e)
    }
    const yu = e => (t, n) => {
        e && Hr.update(() => e(t, n), !1, !0)
    };
    const bu = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    };
    let xu = !1;
    class wu extends a.Component {
        componentDidMount() {
            const {
                visualElement: e,
                layoutGroup: t,
                switchLayoutGroup: n,
                layoutId: r
            } = this.props, {
                projection: a
            } = e;
            a && (t.group && t.group.add(a), n && n.register && r && n.register(a), xu && a.root.didUpdate(), a.addEventListener("animationComplete", () => {
                this.safeToRemove()
            }), a.setOptions(f(f({}, a.options), {}, {
                layoutDependency: this.props.layoutDependency,
                onExitComplete: () => this.safeToRemove()
            }))), bu.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(e) {
            const {
                layoutDependency: t,
                visualElement: n,
                drag: r,
                isPresent: a
            } = this.props, {
                projection: i
            } = n;
            return i ? (i.isPresent = a, e.layoutDependency !== t && i.setOptions(f(f({}, i.options), {}, {
                layoutDependency: t
            })), xu = !0, r || e.layoutDependency !== t || void 0 === t || e.isPresent !== a ? i.willUpdate() : this.safeToRemove(), e.isPresent !== a && (a ? i.promote() : i.relegate() || Hr.postRender(() => {
                const e = i.getStack();
                e && e.members.length || this.safeToRemove()
            })), null) : null
        }
        componentDidUpdate() {
            const {
                projection: e
            } = this.props.visualElement;
            e && (e.root.didUpdate(), ja.postRender(() => {
                !e.currentAnimation && e.isLead() && this.safeToRemove()
            }))
        }
        componentWillUnmount() {
            const {
                visualElement: e,
                layoutGroup: t,
                switchLayoutGroup: n
            } = this.props, {
                projection: r
            } = e;
            xu = !0, r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r))
        }
        safeToRemove() {
            const {
                safeToRemove: e
            } = this.props;
            e && e()
        }
        render() {
            return null
        }
    }

    function Su(e) {
        const [t, n] = function() {
            let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            const t = (0, a.useContext)(co);
            if (null === t) return [!0, null];
            const {
                isPresent: n,
                onExitComplete: r,
                register: i
            } = t, o = (0, a.useId)();
            (0, a.useEffect)(() => {
                if (e) return i(o)
            }, [e]);
            const s = (0, a.useCallback)(() => e && r && r(o), [o, r, e]);
            return !n && r ? [!1, s] : [!0]
        }(), r = (0, a.useContext)($i);
        return (0, sn.jsx)(wu, f(f({}, e), {}, {
            layoutGroup: r,
            switchLayoutGroup: (0, a.useContext)(Eo),
            isPresent: t,
            safeToRemove: n
        }))
    }

    function ku(e, t) {
        const n = Da.now(),
            r = a => {
                let {
                    timestamp: i
                } = a;
                const o = i - n;
                o >= t && (Wr(r), e(o - t))
            };
        return Hr.setup(r, !0), () => Wr(r)
    }
    const Eu = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        Tu = Eu.length,
        Cu = e => "string" === typeof e ? parseFloat(e) : e,
        Pu = e => "number" === typeof e || Mn.test(e);

    function Nu(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius
    }
    const Ru = Au(0, .5, js),
        ju = Au(.5, .95, zr);

    function Au(e, t, n) {
        return r => r < e ? 0 : r > t ? 1 : n(Ds(e, t, r))
    }

    function Fu(e, t) {
        e.min = t.min, e.max = t.max
    }

    function Ou(e, t) {
        Fu(e.x, t.x), Fu(e.y, t.y)
    }

    function Du(e, t) {
        e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin
    }

    function Mu(e, t, n, r, a) {
        return e = Fi(e -= t, 1 / n, r), void 0 !== a && (e = Fi(e, 1 / a, r)), e
    }

    function Lu(e, t, n, r, a) {
        let [i, o, s] = n;
        ! function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5,
                a = arguments.length > 4 ? arguments[4] : void 0,
                i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e,
                o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : e;
            Dn.test(t) && (t = parseFloat(t), t = bi(o.min, o.max, t / 100) - o.min);
            if ("number" !== typeof t) return;
            let s = bi(i.min, i.max, r);
            e === i && (s -= t), e.min = Mu(e.min, t, n, s, a), e.max = Mu(e.max, t, n, s, a)
        }(e, t[i], t[o], t[s], t.scale, r, a)
    }
    const _u = ["x", "scaleX", "originX"],
        zu = ["y", "scaleY", "originY"];

    function Iu(e, t, n, r) {
        Lu(e.x, t, _u, n ? n.x : void 0, r ? r.x : void 0), Lu(e.y, t, zu, n ? n.y : void 0, r ? r.y : void 0)
    }

    function Bu(e) {
        return 0 === e.translate && 1 === e.scale
    }

    function Vu(e) {
        return Bu(e.x) && Bu(e.y)
    }

    function Uu(e, t) {
        return e.min === t.min && e.max === t.max
    }

    function Hu(e, t) {
        return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
    }

    function Wu(e, t) {
        return Hu(e.x, t.x) && Hu(e.y, t.y)
    }

    function qu(e) {
        return Cl(e.x) / Cl(e.y)
    }

    function $u(e, t) {
        return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
    }
    class Yu {
        constructor() {
            this.members = []
        }
        add(e) {
            la(this.members, e);
            for (let t = this.members.length - 1; t >= 0; t--) {
                const n = this.members[t];
                if (n === e || n === this.lead || n === this.prevLead) continue;
                const r = n.instance;
                r && !1 === r.isConnected && !1 !== n.isPresent && !n.snapshot && ua(this.members, n)
            }
            e.scheduleRender()
        }
        remove(e) {
            if (ua(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
                const e = this.members[this.members.length - 1];
                e && this.promote(e)
            }
        }
        relegate(e) {
            const t = this.members.findIndex(t => e === t);
            if (0 === t) return !1;
            let n;
            for (let r = t; r >= 0; r--) {
                const e = this.members[r],
                    t = e.instance;
                if (!1 !== e.isPresent && (!t || !1 !== t.isConnected)) {
                    n = e;
                    break
                }
            }
            return !!n && (this.promote(n), !0)
        }
        promote(e, t) {
            const n = this.lead;
            if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
                n.instance && n.scheduleRender(), e.scheduleRender();
                const r = n.options.layoutDependency,
                    a = e.options.layoutDependency;
                if (!(void 0 !== r && void 0 !== a && r === a)) {
                    const r = n.instance;
                    r && !1 === r.isConnected && !n.snapshot || (e.resumeFrom = n, t && (e.resumeFrom.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0))
                }
                const {
                    crossfade: i
                } = e.options;
                !1 === i && n.hide()
            }
        }
        exitAnimationComplete() {
            this.members.forEach(e => {
                const {
                    options: t,
                    resumingFrom: n
                } = e;
                t.onExitComplete && t.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete()
            })
        }
        scheduleRender() {
            this.members.forEach(e => {
                e.instance && e.scheduleRender(!1)
            })
        }
        removeLeadSnapshot() {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
        }
    }
    const Ku = (e, t) => e.depth - t.depth;
    class Xu {
        constructor() {
            this.children = [], this.isDirty = !1
        }
        add(e) {
            la(this.children, e), this.isDirty = !0
        }
        remove(e) {
            ua(this.children, e), this.isDirty = !0
        }
        forEach(e) {
            this.isDirty && this.children.sort(Ku), this.isDirty = !1, this.children.forEach(e)
        }
    }
    const Qu = {
            nodes: 0,
            calculatedTargetDeltas: 0,
            calculatedProjections: 0
        },
        Gu = ["", "X", "Y", "Z"];
    let Ju = 0;

    function Zu(e, t, n, r) {
        const {
            latestValues: a
        } = t;
        a[e] && (n[e] = a[e], t.setStaticValue(e, 0), r && (r[e] = 0))
    }

    function ec(e) {
        if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
        const {
            visualElement: t
        } = e.options;
        if (!t) return;
        const n = Uo(t);
        if (window.MotionHasOptimisedAnimation(n, "transform")) {
            const {
                layout: t,
                layoutId: r
            } = e.options;
            window.MotionCancelOptimisedAnimation(n, "transform", Hr, !(t || r))
        }
        const {
            parent: r
        } = e;
        r && !r.hasCheckedOptimisedAppear && ec(r)
    }

    function tc(e) {
        let {
            attachResizeListener: t,
            defaultParent: n,
            measureScroll: r,
            checkIsScrollRoot: a,
            resetTransform: i
        } = e;
        return class {
            constructor() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === n || void 0 === n ? void 0 : n();
                this.id = Ju++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                    x: 1,
                    y: 1
                }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                    this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                }, this.updateProjection = () => {
                    this.projectionUpdateScheduled = !1, Vr.value && (Qu.nodes = Qu.calculatedTargetDeltas = Qu.calculatedProjections = 0), this.nodes.forEach(ac), this.nodes.forEach(dc), this.nodes.forEach(fc), this.nodes.forEach(ic), Vr.addProjectionMetrics && Vr.addProjectionMetrics(Qu)
                }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = e, this.root = t ? t.root || t : this, this.path = t ? [...t.path, t] : [], this.parent = t, this.depth = t ? t.depth + 1 : 0;
                for (let n = 0; n < this.path.length; n++) this.path[n].shouldResetTransform = !0;
                this.root === this && (this.nodes = new Xu)
            }
            addEventListener(e, t) {
                return this.eventHandlers.has(e) || this.eventHandlers.set(e, new ca), this.eventHandlers.get(e).add(t)
            }
            notifyListeners(e) {
                const t = this.eventHandlers.get(e);
                for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                t && t.notify(...r)
            }
            hasListeners(e) {
                return this.eventHandlers.has(e)
            }
            mount(e) {
                if (this.instance) return;
                var n;
                this.isSVG = Ll(e) && !(Ll(n = e) && "svg" === n.tagName), this.instance = e;
                const {
                    layoutId: r,
                    layout: a,
                    visualElement: i
                } = this.options;
                if (i && !i.current && i.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (a || r) && (this.isLayoutDirty = !0), t) {
                    let n, r = 0;
                    const a = () => this.root.updateBlockedByResize = !1;
                    Hr.read(() => {
                        r = window.innerWidth
                    }), t(e, () => {
                        const e = window.innerWidth;
                        e !== r && (r = e, this.root.updateBlockedByResize = !0, n && n(), n = ku(a, 250), bu.hasAnimatedSinceResize && (bu.hasAnimatedSinceResize = !1, this.nodes.forEach(cc)))
                    })
                }
                r && this.root.registerSharedNode(r, this), !1 !== this.options.animate && i && (r || a) && this.addEventListener("didUpdate", e => {
                    let {
                        delta: t,
                        hasLayoutChanged: n,
                        hasRelativeLayoutChanged: r,
                        layout: a
                    } = e;
                    if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
                    const o = this.options.transition || i.getDefaultTransition() || yc,
                        {
                            onLayoutAnimationStart: s,
                            onLayoutAnimationComplete: l
                        } = i.getProps(),
                        u = !this.targetLayout || !Wu(this.targetLayout, a),
                        c = !n && r;
                    if (this.options.layoutRoot || this.resumeFrom || c || n && (u || !this.currentAnimation)) {
                        this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                        const e = f(f({}, Lo(o, "layout")), {}, {
                            onPlay: s,
                            onComplete: l
                        });
                        (i.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e), this.setAnimationOrigin(t, c)
                    } else n || cc(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                    this.targetLayout = a
                })
            }
            unmount() {
                this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                const e = this.getStack();
                e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Wr(this.updateProjection)
            }
            blockUpdate() {
                this.updateManuallyBlocked = !0
            }
            unblockUpdate() {
                this.updateManuallyBlocked = !1
            }
            isUpdateBlocked() {
                return this.updateManuallyBlocked || this.updateBlockedByResize
            }
            isTreeAnimationBlocked() {
                return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
            }
            startUpdate() {
                this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(hc), this.animationId++)
            }
            getTransformTemplate() {
                const {
                    visualElement: e
                } = this.options;
                return e && e.getProps().transformTemplate
            }
            willUpdate() {
                let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) return void(this.options.onExitComplete && this.options.onExitComplete());
                if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && ec(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
                this.isLayoutDirty = !0;
                for (let a = 0; a < this.path.length; a++) {
                    const e = this.path[a];
                    e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                }
                const {
                    layoutId: t,
                    layout: n
                } = this.options;
                if (void 0 === t && !n) return;
                const r = this.getTransformTemplate();
                this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0, this.updateSnapshot(), e && this.notifyListeners("willUpdate")
            }
            update() {
                this.updateScheduled = !1;
                if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(sc);
                if (this.animationId <= this.animationCommitId) return void this.nodes.forEach(lc);
                this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(uc), this.nodes.forEach(nc), this.nodes.forEach(rc)) : this.nodes.forEach(lc), this.clearAllSnapshots();
                const e = Da.now();
                qr.delta = xn(0, 1e3 / 60, e - qr.timestamp), qr.timestamp = e, qr.isProcessing = !0, $r.update.process(qr), $r.preRender.process(qr), $r.render.process(qr), qr.isProcessing = !1
            }
            didUpdate() {
                this.updateScheduled || (this.updateScheduled = !0, ja.read(this.scheduleUpdate))
            }
            clearAllSnapshots() {
                this.nodes.forEach(oc), this.sharedNodes.forEach(pc)
            }
            scheduleUpdateProjection() {
                this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Hr.preRender(this.updateProjection, !1, !0))
            }
            scheduleCheckAfterUnmount() {
                Hr.postRender(() => {
                    this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                })
            }
            updateSnapshot() {
                !this.snapshot && this.instance && (this.snapshot = this.measure(), !this.snapshot || Cl(this.snapshot.measuredBox.x) || Cl(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
            }
            updateLayout() {
                if (!this.instance) return;
                if (this.updateScroll(), (!this.options.alwaysMeasureLayout || !this.isLead()) && !this.isLayoutDirty) return;
                if (this.resumeFrom && !this.resumeFrom.instance)
                    for (let n = 0; n < this.path.length; n++) {
                        this.path[n].updateScroll()
                    }
                const e = this.layout;
                this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected = {
                    x: {
                        min: 0,
                        max: 0
                    },
                    y: {
                        min: 0,
                        max: 0
                    }
                }, this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                const {
                    visualElement: t
                } = this.options;
                t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0)
            }
            updateScroll() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "measure",
                    t = Boolean(this.options.layoutScroll && this.instance);
                if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && this.instance) {
                    const t = a(this.instance);
                    this.scroll = {
                        animationId: this.root.animationId,
                        phase: e,
                        isRoot: t,
                        offset: r(this.instance),
                        wasRoot: this.scroll ? this.scroll.isRoot : t
                    }
                }
            }
            resetTransform() {
                if (!i) return;
                const e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                    t = this.projectionDelta && !Vu(this.projectionDelta),
                    n = this.getTransformTemplate(),
                    r = n ? n(this.latestValues, "") : void 0,
                    a = r !== this.prevTransformTemplateValue;
                e && this.instance && (t || Ri(this.latestValues) || a) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender())
            }
            measure() {
                let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                const t = this.measurePageBox();
                let n = this.removeElementScroll(t);
                var r;
                return e && (n = this.removeTransform(n)), wc((r = n).x), wc(r.y), {
                    animationId: this.root.animationId,
                    measuredBox: t,
                    layoutBox: n,
                    latestValues: {},
                    source: this.id
                }
            }
            measurePageBox() {
                var e;
                const {
                    visualElement: t
                } = this.options;
                if (!t) return {
                    x: {
                        min: 0,
                        max: 0
                    },
                    y: {
                        min: 0,
                        max: 0
                    }
                };
                const n = t.measureViewportBox();
                if (!((null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot) || this.path.some(kc))) {
                    const {
                        scroll: e
                    } = this.root;
                    e && (zi(n.x, e.offset.x), zi(n.y, e.offset.y))
                }
                return n
            }
            removeElementScroll(e) {
                var t;
                const n = {
                    x: {
                        min: 0,
                        max: 0
                    },
                    y: {
                        min: 0,
                        max: 0
                    }
                };
                if (Ou(n, e), null !== (t = this.scroll) && void 0 !== t && t.wasRoot) return n;
                for (let r = 0; r < this.path.length; r++) {
                    const t = this.path[r],
                        {
                            scroll: a,
                            options: i
                        } = t;
                    t !== this.root && a && i.layoutScroll && (a.wasRoot && Ou(n, e), zi(n.x, a.offset.x), zi(n.y, a.offset.y))
                }
                return n
            }
            applyTransform(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const n = {
                    x: {
                        min: 0,
                        max: 0
                    },
                    y: {
                        min: 0,
                        max: 0
                    }
                };
                Ou(n, e);
                for (let r = 0; r < this.path.length; r++) {
                    const e = this.path[r];
                    !t && e.options.layoutScroll && e.scroll && e !== e.root && Bi(n, {
                        x: -e.scroll.offset.x,
                        y: -e.scroll.offset.y
                    }), Ri(e.latestValues) && Bi(n, e.latestValues)
                }
                return Ri(this.latestValues) && Bi(n, this.latestValues), n
            }
            removeTransform(e) {
                const t = {
                    x: {
                        min: 0,
                        max: 0
                    },
                    y: {
                        min: 0,
                        max: 0
                    }
                };
                Ou(t, e);
                for (let n = 0; n < this.path.length; n++) {
                    const e = this.path[n];
                    if (!e.instance) continue;
                    if (!Ri(e.latestValues)) continue;
                    Ni(e.latestValues) && e.updateSnapshot();
                    const r = ir();
                    Ou(r, e.measurePageBox()), Iu(t, e.latestValues, e.snapshot ? e.snapshot.layoutBox : void 0, r)
                }
                return Ri(this.latestValues) && Iu(t, this.latestValues), t
            }
            setTargetDelta(e) {
                this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
            }
            setOptions(e) {
                this.options = f(f(f({}, this.options), e), {}, {
                    crossfade: void 0 === e.crossfade || e.crossfade
                })
            }
            clearMeasurements() {
                this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
            }
            forceRelativeParentToResolveTarget() {
                this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== qr.timestamp && this.relativeParent.resolveTargetDelta(!0)
            }
            resolveTargetDelta() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                const n = this.getLead();
                this.isProjectionDirty || (this.isProjectionDirty = n.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = n.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = n.isSharedProjectionDirty);
                const r = Boolean(this.resumingFrom) || this !== n;
                if (!(t || r && this.isSharedProjectionDirty || this.isProjectionDirty || null !== (e = this.parent) && void 0 !== e && e.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                const {
                    layout: a,
                    layoutId: i
                } = this.options;
                if (!this.layout || !a && !i) return;
                this.resolvedRelativeTargetAt = qr.timestamp;
                const o = this.getClosestProjectingParent();
                var s, l, u;
                (o && this.linkedParentVersion !== o.layoutVersion && !o.options.layoutRoot && this.removeRelativeTarget(), this.targetDelta || this.relativeTarget || (o && o.layout ? this.createRelativeTarget(o, this.layout.layoutBox, o.layout.layoutBox) : this.removeRelativeTarget()), this.relativeTarget || this.targetDelta) && (this.target || (this.target = {
                    x: {
                        min: 0,
                        max: 0
                    },
                    y: {
                        min: 0,
                        max: 0
                    }
                }, this.targetWithTransforms = {
                    x: {
                        min: 0,
                        max: 0
                    },
                    y: {
                        min: 0,
                        max: 0
                    }
                }), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), s = this.target, l = this.relativeTarget, u = this.relativeParent.target, Rl(s.x, l.x, u.x), Rl(s.y, l.y, u.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : Ou(this.target, this.layout.layoutBox), Mi(this.target, this.targetDelta)) : Ou(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, o && Boolean(o.resumingFrom) === Boolean(this.resumingFrom) && !o.options.layoutScroll && o.target && 1 !== this.animationProgress ? this.createRelativeTarget(o, this.target, o.target) : this.relativeParent = this.relativeTarget = void 0), Vr.value && Qu.calculatedTargetDeltas++)
            }
            getClosestProjectingParent() {
                if (this.parent && !Ni(this.parent.latestValues) && !ji(this.parent.latestValues)) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
            }
            isProjecting() {
                return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
            }
            createRelativeTarget(e, t, n) {
                this.relativeParent = e, this.linkedParentVersion = e.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = {
                    x: {
                        min: 0,
                        max: 0
                    },
                    y: {
                        min: 0,
                        max: 0
                    }
                }, this.relativeTargetOrigin = {
                    x: {
                        min: 0,
                        max: 0
                    },
                    y: {
                        min: 0,
                        max: 0
                    }
                }, Al(this.relativeTargetOrigin, t, n), Ou(this.relativeTarget, this.relativeTargetOrigin)
            }
            removeRelativeTarget() {
                this.relativeParent = this.relativeTarget = void 0
            }
            calcProjection() {
                var e;
                const t = this.getLead(),
                    n = Boolean(this.resumingFrom) || this !== t;
                let r = !0;
                if ((this.isProjectionDirty || null !== (e = this.parent) && void 0 !== e && e.isProjectionDirty) && (r = !1), n && (this.isSharedProjectionDirty || this.isTransformDirty) && (r = !1), this.resolvedRelativeTargetAt === qr.timestamp && (r = !1), r) return;
                const {
                    layout: a,
                    layoutId: i
                } = this.options;
                if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !a && !i) return;
                Ou(this.layoutCorrected, this.layout.layoutBox);
                const o = this.treeScale.x,
                    s = this.treeScale.y;
                ! function(e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    const a = n.length;
                    if (!a) return;
                    let i, o;
                    t.x = t.y = 1;
                    for (let s = 0; s < a; s++) {
                        i = n[s], o = i.projectionDelta;
                        const {
                            visualElement: a
                        } = i.options;
                        a && a.props.style && "contents" === a.props.style.display || (r && i.options.layoutScroll && i.scroll && i !== i.root && Bi(e, {
                            x: -i.scroll.offset.x,
                            y: -i.scroll.offset.y
                        }), o && (t.x *= o.x.scale, t.y *= o.y.scale, Mi(e, o)), r && Ri(i.latestValues) && Bi(e, i.latestValues))
                    }
                    t.x < _i && t.x > Li && (t.x = 1), t.y < _i && t.y > Li && (t.y = 1)
                }(this.layoutCorrected, this.treeScale, this.path, n), !t.layout || t.target || 1 === this.treeScale.x && 1 === this.treeScale.y || (t.target = t.layout.layoutBox, t.targetWithTransforms = {
                    x: {
                        min: 0,
                        max: 0
                    },
                    y: {
                        min: 0,
                        max: 0
                    }
                });
                const {
                    target: l
                } = t;
                l ? (this.projectionDelta && this.prevProjectionDelta ? (Du(this.prevProjectionDelta.x, this.projectionDelta.x), Du(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), Nl(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.treeScale.x === o && this.treeScale.y === s && $u(this.projectionDelta.x, this.prevProjectionDelta.x) && $u(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), Vr.value && Qu.calculatedProjections++) : this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender())
            }
            hide() {
                this.isVisible = !1
            }
            show() {
                this.isVisible = !0
            }
            scheduleRender() {
                var e;
                let t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (null === (e = this.options.visualElement) || void 0 === e || e.scheduleRender(), t) {
                    const e = this.getStack();
                    e && e.scheduleRender()
                }
                this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
            }
            createProjectionDeltas() {
                this.prevProjectionDelta = {
                    x: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    },
                    y: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    }
                }, this.projectionDelta = {
                    x: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    },
                    y: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    }
                }, this.projectionDeltaWithTransform = {
                    x: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    },
                    y: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    }
                }
            }
            setAnimationOrigin(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const n = this.snapshot,
                    r = n ? n.latestValues : {},
                    a = f({}, this.latestValues),
                    i = {
                        x: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        },
                        y: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        }
                    };
                this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
                const o = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    },
                    s = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
                    l = this.getStack(),
                    u = !l || l.members.length <= 1,
                    c = Boolean(s && !u && !0 === this.options.crossfade && !this.path.some(vc));
                let d;
                this.animationProgress = 0, this.mixTargetDelta = t => {
                    const n = t / 1e3;
                    var l, f, h, p;
                    mc(i.x, e.x, n), mc(i.y, e.y, n), this.setTargetDelta(i), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Al(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox), l = this.relativeTarget, f = this.relativeTargetOrigin, h = o, p = n, gc(l.x, f.x, h.x, p), gc(l.y, f.y, h.y, p), d && function(e, t) {
                        return Uu(e.x, t.x) && Uu(e.y, t.y)
                    }(this.relativeTarget, d) && (this.isProjectionDirty = !1), d || (d = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    }), Ou(d, this.relativeTarget)), s && (this.animationValues = a, function(e, t, n, r, a, i) {
                        var o, s;
                        if (a) e.opacity = bi(0, null !== (o = n.opacity) && void 0 !== o ? o : 1, Ru(r)), e.opacityExit = bi(null !== (s = t.opacity) && void 0 !== s ? s : 1, 0, ju(r));
                        else if (i) {
                            var l, u;
                            e.opacity = bi(null !== (l = t.opacity) && void 0 !== l ? l : 1, null !== (u = n.opacity) && void 0 !== u ? u : 1, r)
                        }
                        for (let c = 0; c < Tu; c++) {
                            const a = "border".concat(Eu[c], "Radius");
                            let i = Nu(t, a),
                                o = Nu(n, a);
                            void 0 === i && void 0 === o || (i || (i = 0), o || (o = 0), 0 === i || 0 === o || Pu(i) === Pu(o) ? (e[a] = Math.max(bi(Cu(i), Cu(o), r), 0), (Dn.test(o) || Dn.test(i)) && (e[a] += "%")) : e[a] = o)
                        }(t.rotate || n.rotate) && (e.rotate = bi(t.rotate || 0, n.rotate || 0, r))
                    }(a, r, this.latestValues, n, c, u)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
                }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
            }
            startAnimation(e) {
                var t, n;
                this.notifyListeners("animationStart"), null === (t = this.currentAnimation) || void 0 === t || t.stop(), null === (n = this.resumingFrom) || void 0 === n || null === (n = n.currentAnimation) || void 0 === n || n.stop(), this.pendingAnimation && (Wr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Hr.update(() => {
                    bu.hasAnimatedSinceResize = !0, ya.layout++, this.motionValue || (this.motionValue = za(0)), this.motionValue.jump(0, !1), this.currentAnimation = function(e, t, n) {
                        const r = or(e) ? e : za(e);
                        return r.start(al("", r, t, n)), r.animation
                    }(this.motionValue, [0, 1e3], f(f({}, e), {}, {
                        velocity: 0,
                        isSync: !0,
                        onUpdate: t => {
                            this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t)
                        },
                        onStop: () => {
                            ya.layout--
                        },
                        onComplete: () => {
                            ya.layout--, e.onComplete && e.onComplete(), this.completeAnimation()
                        }
                    })), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                })
            }
            completeAnimation() {
                this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                const e = this.getStack();
                e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
            }
            finishAnimation() {
                this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
            }
            applyTransformsToTarget() {
                const e = this.getLead();
                let {
                    targetWithTransforms: t,
                    target: n,
                    layout: r,
                    latestValues: a
                } = e;
                if (t && n && r) {
                    if (this !== e && this.layout && r && Sc(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                        n = this.target || {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        const t = Cl(this.layout.layoutBox.x);
                        n.x.min = e.target.x.min, n.x.max = n.x.min + t;
                        const r = Cl(this.layout.layoutBox.y);
                        n.y.min = e.target.y.min, n.y.max = n.y.min + r
                    }
                    Ou(t, n), Bi(t, a), Nl(this.projectionDeltaWithTransform, this.layoutCorrected, t, a)
                }
            }
            registerSharedNode(e, t) {
                this.sharedNodes.has(e) || this.sharedNodes.set(e, new Yu);
                this.sharedNodes.get(e).add(t);
                const n = t.options.initialPromotionConfig;
                t.promote({
                    transition: n ? n.transition : void 0,
                    preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0
                })
            }
            isLead() {
                const e = this.getStack();
                return !e || e.lead === this
            }
            getLead() {
                var e;
                const {
                    layoutId: t
                } = this.options;
                return t && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this
            }
            getPrevLead() {
                var e;
                const {
                    layoutId: t
                } = this.options;
                return t ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0
            }
            getStack() {
                const {
                    layoutId: e
                } = this.options;
                if (e) return this.root.sharedNodes.get(e)
            }
            promote() {
                let {
                    needsReset: e,
                    transition: t,
                    preserveFollowOpacity: n
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const r = this.getStack();
                r && r.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({
                    transition: t
                })
            }
            relegate() {
                const e = this.getStack();
                return !!e && e.relegate(this)
            }
            resetSkewAndRotation() {
                const {
                    visualElement: e
                } = this.options;
                if (!e) return;
                let t = !1;
                const {
                    latestValues: n
                } = e;
                if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0), !t) return;
                const r = {};
                n.z && Zu("z", e, r, this.animationValues);
                for (let a = 0; a < Gu.length; a++) Zu("rotate".concat(Gu[a]), e, r, this.animationValues), Zu("skew".concat(Gu[a]), e, r, this.animationValues);
                e.render();
                for (const a in r) e.setStaticValue(a, r[a]), this.animationValues && (this.animationValues[a] = r[a]);
                e.scheduleRender()
            }
            applyProjectionStyles(e, t) {
                if (!this.instance || this.isSVG) return;
                if (!this.isVisible) return void(e.visibility = "hidden");
                const n = this.getTransformTemplate();
                if (this.needsReset) return this.needsReset = !1, e.visibility = "", e.opacity = "", e.pointerEvents = uo(null === t || void 0 === t ? void 0 : t.pointerEvents) || "", void(e.transform = n ? n(this.latestValues, "") : "none");
                const r = this.getLead();
                if (!this.projectionDelta || !this.layout || !r.target) return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = uo(null === t || void 0 === t ? void 0 : t.pointerEvents) || ""), void(this.hasProjected && !Ri(this.latestValues) && (e.transform = n ? n({}, "") : "none", this.hasProjected = !1));
                e.visibility = "";
                const a = r.animationValues || r.latestValues;
                this.applyTransformsToTarget();
                let i = function(e, t, n) {
                    let r = "";
                    const a = e.x.translate / t.x,
                        i = e.y.translate / t.y,
                        o = (null === n || void 0 === n ? void 0 : n.z) || 0;
                    if ((a || i || o) && (r = "translate3d(".concat(a, "px, ").concat(i, "px, ").concat(o, "px) ")), 1 === t.x && 1 === t.y || (r += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") ")), n) {
                        const {
                            transformPerspective: e,
                            rotate: t,
                            rotateX: a,
                            rotateY: i,
                            skewX: o,
                            skewY: s
                        } = n;
                        e && (r = "perspective(".concat(e, "px) ").concat(r)), t && (r += "rotate(".concat(t, "deg) ")), a && (r += "rotateX(".concat(a, "deg) ")), i && (r += "rotateY(".concat(i, "deg) ")), o && (r += "skewX(".concat(o, "deg) ")), s && (r += "skewY(".concat(s, "deg) "))
                    }
                    const s = e.x.scale * t.x,
                        l = e.y.scale * t.y;
                    return 1 === s && 1 === l || (r += "scale(".concat(s, ", ").concat(l, ")")), r || "none"
                }(this.projectionDeltaWithTransform, this.treeScale, a);
                n && (i = n(a, i)), e.transform = i;
                const {
                    x: o,
                    y: s
                } = this.projectionDelta;
                var l, u;
                (e.transformOrigin = "".concat(100 * o.origin, "% ").concat(100 * s.origin, "% 0"), r.animationValues) ? e.opacity = r === this ? null !== (l = null !== (u = a.opacity) && void 0 !== u ? u : this.latestValues.opacity) && void 0 !== l ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit: e.opacity = r === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0;
                for (const c in wi) {
                    if (void 0 === a[c]) continue;
                    const {
                        correct: t,
                        applyTo: n,
                        isCSSVariable: o
                    } = wi[c], s = "none" === i ? a[c] : t(a[c], r);
                    if (n) {
                        const t = n.length;
                        for (let r = 0; r < t; r++) e[n[r]] = s
                    } else o ? this.options.visualElement.renderState.vars[c] = s : e[c] = s
                }
                this.options.layoutId && (e.pointerEvents = r === this ? uo(null === t || void 0 === t ? void 0 : t.pointerEvents) || "" : "none")
            }
            clearSnapshot() {
                this.resumeFrom = this.snapshot = void 0
            }
            resetTree() {
                this.root.nodes.forEach(e => {
                    var t;
                    return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop()
                }), this.root.nodes.forEach(sc), this.root.sharedNodes.clear()
            }
        }
    }

    function nc(e) {
        e.updateLayout()
    }

    function rc(e) {
        var t;
        const n = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
        if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
            const {
                layoutBox: t,
                measuredBox: r
            } = e.layout, {
                animationType: a
            } = e.options, i = n.source !== e.layout.source;
            "size" === a ? Tl(e => {
                const r = i ? n.measuredBox[e] : n.layoutBox[e],
                    a = Cl(r);
                r.min = t[e].min, r.max = r.min + a
            }) : Sc(a, n.layoutBox, t) && Tl(r => {
                const a = i ? n.measuredBox[r] : n.layoutBox[r],
                    o = Cl(t[r]);
                a.max = a.min + o, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + o)
            });
            const o = {
                x: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                },
                y: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }
            };
            Nl(o, t, n.layoutBox);
            const s = {
                x: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                },
                y: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }
            };
            i ? Nl(s, e.applyTransform(r, !0), n.measuredBox) : Nl(s, t, n.layoutBox);
            const l = !Vu(o);
            let u = !1;
            if (!e.resumeFrom) {
                const r = e.getClosestProjectingParent();
                if (r && !r.resumeFrom) {
                    const {
                        snapshot: a,
                        layout: i
                    } = r;
                    if (a && i) {
                        const o = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        Al(o, n.layoutBox, a.layoutBox);
                        const s = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        Al(s, t, i.layoutBox), Wu(o, s) || (u = !0), r.options.layoutRoot && (e.relativeTarget = s, e.relativeTargetOrigin = o, e.relativeParent = r)
                    }
                }
            }
            e.notifyListeners("didUpdate", {
                layout: t,
                snapshot: n,
                delta: s,
                layoutDelta: o,
                hasLayoutChanged: l,
                hasRelativeLayoutChanged: u
            })
        } else if (e.isLead()) {
            const {
                onExitComplete: t
            } = e.options;
            t && t()
        }
        e.options.transition = void 0
    }

    function ac(e) {
        Vr.value && Qu.nodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = Boolean(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
    }

    function ic(e) {
        e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
    }

    function oc(e) {
        e.clearSnapshot()
    }

    function sc(e) {
        e.clearMeasurements()
    }

    function lc(e) {
        e.isLayoutDirty = !1
    }

    function uc(e) {
        const {
            visualElement: t
        } = e.options;
        t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
    }

    function cc(e) {
        e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
    }

    function dc(e) {
        e.resolveTargetDelta()
    }

    function fc(e) {
        e.calcProjection()
    }

    function hc(e) {
        e.resetSkewAndRotation()
    }

    function pc(e) {
        e.removeLeadSnapshot()
    }

    function mc(e, t, n) {
        e.translate = bi(t.translate, 0, n), e.scale = bi(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
    }

    function gc(e, t, n, r) {
        e.min = bi(t.min, n.min, r), e.max = bi(t.max, n.max, r)
    }

    function vc(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit
    }
    const yc = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        },
        bc = e => "undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
        xc = bc("applewebkit/") && !bc("chrome/") ? Math.round : zr;

    function wc(e) {
        e.min = xc(e.min), e.max = xc(e.max)
    }

    function Sc(e, t, n) {
        return "position" === e || "preserve-aspect" === e && (r = qu(t), a = qu(n), i = .2, !(Math.abs(r - a) <= i));
        var r, a, i
    }

    function kc(e) {
        var t;
        return e !== e.root && (null === (t = e.scroll) || void 0 === t ? void 0 : t.wasRoot)
    }
    const Ec = tc({
            attachResizeListener: (e, t) => Dl(e, "resize", t),
            measureScroll: () => {
                var e, t;
                return {
                    x: document.documentElement.scrollLeft || (null === (e = document.body) || void 0 === e ? void 0 : e.scrollLeft) || 0,
                    y: document.documentElement.scrollTop || (null === (t = document.body) || void 0 === t ? void 0 : t.scrollTop) || 0
                }
            },
            checkIsScrollRoot: () => !0
        }),
        Tc = {
            current: void 0
        },
        Cc = tc({
            measureScroll: e => ({
                x: e.scrollLeft,
                y: e.scrollTop
            }),
            defaultParent: () => {
                if (!Tc.current) {
                    const e = new Ec({});
                    e.mount(window), e.setOptions({
                        layoutScroll: !0
                    }), Tc.current = e
                }
                return Tc.current
            },
            resetTransform: (e, t) => {
                e.style.transform = void 0 !== t ? t : "none"
            },
            checkIsScrollRoot: e => Boolean("fixed" === window.getComputedStyle(e).position)
        }),
        Pc = {
            pan: {
                Feature: class extends Fo {
                    constructor() {
                        super(...arguments), this.removePointerDownListener = zr
                    }
                    onPointerDown(e) {
                        this.session = new nu(e, this.createPanHandlers(), {
                            transformPagePoint: this.node.getTransformPagePoint(),
                            contextWindow: Zl(this.node)
                        })
                    }
                    createPanHandlers() {
                        const {
                            onPanSessionStart: e,
                            onPanStart: t,
                            onPan: n,
                            onPanEnd: r
                        } = this.node.getProps();
                        return {
                            onSessionStart: yu(e),
                            onStart: yu(t),
                            onMove: yu(n),
                            onEnd: (e, t) => {
                                delete this.session, r && Hr.postRender(() => r(e, t))
                            }
                        }
                    }
                    mount() {
                        this.removePointerDownListener = Jl(this.node.current, "pointerdown", e => this.onPointerDown(e))
                    }
                    update() {
                        this.session && this.session.updateHandlers(this.createPanHandlers())
                    }
                    unmount() {
                        this.removePointerDownListener(), this.session && this.session.end()
                    }
                }
            },
            drag: {
                Feature: class extends Fo {
                    constructor(e) {
                        super(e), this.removeGroupControls = zr, this.removeListeners = zr, this.controls = new mu(e)
                    }
                    mount() {
                        const {
                            dragControls: e
                        } = this.node.getProps();
                        e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || zr
                    }
                    update() {
                        const {
                            dragControls: e
                        } = this.node.getProps(), {
                            dragControls: t
                        } = this.node.prevProps || {};
                        e !== t && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)))
                    }
                    unmount() {
                        this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession()
                    }
                },
                ProjectionNode: Cc,
                MeasureLayout: Su
            }
        };

    function Nc(e, t) {
        const n = _l(e),
            r = new AbortController;
        return [n, f(f({
            passive: !0
        }, t), {}, {
            signal: r.signal
        }), () => r.abort()]
    }

    function Rc(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const [r, a, i] = Nc(e, n);
        return r.forEach(e => {
            let n, r = !1,
                i = !1;
            const o = t => {
                    n && (n(t), n = void 0), e.removeEventListener("pointerleave", l)
                },
                s = e => {
                    r = !1, window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", s), i && (i = !1, o(e))
                },
                l = e => {
                    "touch" !== e.pointerType && (r ? i = !0 : o(e))
                };
            e.addEventListener("pointerenter", r => {
                if ("touch" === r.pointerType || El()) return;
                i = !1;
                const o = t(e, r);
                "function" === typeof o && (n = o, e.addEventListener("pointerleave", l, a))
            }, a), e.addEventListener("pointerdown", () => {
                r = !0, window.addEventListener("pointerup", s, a), window.addEventListener("pointercancel", s, a)
            }, a)
        }), i
    }

    function jc(e, t, n) {
        const {
            props: r
        } = e;
        e.animationState && r.whileHover && e.animationState.setActive("whileHover", "Start" === n);
        const a = r["onHover" + n];
        a && Hr.postRender(() => a(t, Gl(t)))
    }
    const Ac = (e, t) => !!t && (e === t || Ac(e, t.parentElement)),
        Fc = new WeakSet;

    function Oc(e) {
        return t => {
            "Enter" === t.key && e(t)
        }
    }

    function Dc(e, t) {
        e.dispatchEvent(new PointerEvent("pointer" + t, {
            isPrimary: !0,
            bubbles: !0
        }))
    }

    function Mc(e) {
        return Ql(e) && !El()
    }
    const Lc = new WeakSet;

    function _c(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const [r, a, i] = Nc(e, n), o = e => {
            const r = e.currentTarget;
            if (!Mc(e)) return;
            if (Lc.has(e)) return;
            Fc.add(r), n.stopPropagation && Lc.add(e);
            const i = t(r, e),
                o = (e, t) => {
                    window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", l), Fc.has(r) && Fc.delete(r), Mc(e) && "function" === typeof i && i(e, {
                        success: t
                    })
                },
                s = e => {
                    o(e, r === window || r === document || n.useGlobalTarget || Ac(r, e.target))
                },
                l = e => {
                    o(e, !1)
                };
            window.addEventListener("pointerup", s, a), window.addEventListener("pointercancel", l, a)
        };
        return r.forEach(e => {
            var t;
            (n.useGlobalTarget ? window : e).addEventListener("pointerdown", o, a), Ml(t = e) && "offsetHeight" in t && (e.addEventListener("focus", e => ((e, t) => {
                const n = e.currentTarget;
                if (!n) return;
                const r = Oc(() => {
                    if (Fc.has(n)) return;
                    Dc(n, "down");
                    const e = Oc(() => {
                        Dc(n, "up")
                    });
                    n.addEventListener("keyup", e, t), n.addEventListener("blur", () => Dc(n, "cancel"), t)
                });
                n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
            })(e, a)), function(e) {
                return Fl.has(e.tagName) || !0 === e.isContentEditable
            }(e) || e.hasAttribute("tabindex") || (e.tabIndex = 0))
        }), i
    }

    function zc(e, t, n) {
        const {
            props: r
        } = e;
        if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
        e.animationState && r.whileTap && e.animationState.setActive("whileTap", "Start" === n);
        const a = r["onTap" + ("End" === n ? "" : n)];
        a && Hr.postRender(() => a(t, Gl(t)))
    }
    const Ic = ["root"],
        Bc = new WeakMap,
        Vc = new WeakMap,
        Uc = e => {
            const t = Bc.get(e.target);
            t && t(e)
        },
        Hc = e => {
            e.forEach(Uc)
        };

    function Wc(e, t, n) {
        const r = function(e) {
            let {
                root: t
            } = e, n = s(e, Ic);
            const r = t || document;
            Vc.has(r) || Vc.set(r, {});
            const a = Vc.get(r),
                i = JSON.stringify(n);
            return a[i] || (a[i] = new IntersectionObserver(Hc, f({
                root: t
            }, n))), a[i]
        }(t);
        return Bc.set(e, n), r.observe(e), () => {
            Bc.delete(e), r.unobserve(e)
        }
    }
    const qc = {
        some: 0,
        all: 1
    };
    const $c = {
            inView: {
                Feature: class extends Fo {
                    constructor() {
                        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                    }
                    startObserver() {
                        this.unmount();
                        const {
                            viewport: e = {}
                        } = this.node.getProps(), {
                            root: t,
                            margin: n,
                            amount: r = "some",
                            once: a
                        } = e, i = {
                            root: t ? t.current : void 0,
                            rootMargin: n,
                            threshold: "number" === typeof r ? r : qc[r]
                        };
                        return Wc(this.node.current, i, e => {
                            const {
                                isIntersecting: t
                            } = e;
                            if (this.isInView === t) return;
                            if (this.isInView = t, a && !t && this.hasEnteredView) return;
                            t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
                            const {
                                onViewportEnter: n,
                                onViewportLeave: r
                            } = this.node.getProps(), i = t ? n : r;
                            i && i(e)
                        })
                    }
                    mount() {
                        this.startObserver()
                    }
                    update() {
                        if ("undefined" === typeof IntersectionObserver) return;
                        const {
                            props: e,
                            prevProps: t
                        } = this.node, n = ["amount", "margin", "root"].some(function(e) {
                            let {
                                viewport: t = {}
                            } = e, {
                                viewport: n = {}
                            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return e => t[e] !== n[e]
                        }(e, t));
                        n && this.startObserver()
                    }
                    unmount() {}
                }
            },
            tap: {
                Feature: class extends Fo {
                    mount() {
                        const {
                            current: e
                        } = this.node;
                        if (!e) return;
                        const {
                            globalTapTarget: t,
                            propagate: n
                        } = this.node.props;
                        this.unmount = _c(e, (e, t) => (zc(this.node, t, "Start"), (e, t) => {
                            let {
                                success: n
                            } = t;
                            return zc(this.node, e, n ? "End" : "Cancel")
                        }), {
                            useGlobalTarget: t,
                            stopPropagation: !1 === (null === n || void 0 === n ? void 0 : n.tap)
                        })
                    }
                    unmount() {}
                }
            },
            focus: {
                Feature: class extends Fo {
                    constructor() {
                        super(...arguments), this.isActive = !1
                    }
                    onFocus() {
                        let e = !1;
                        try {
                            e = this.node.current.matches(":focus-visible")
                        } catch (qh) {
                            e = !0
                        }
                        e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                    }
                    onBlur() {
                        this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                    }
                    mount() {
                        this.unmount = Wo(Dl(this.node.current, "focus", () => this.onFocus()), Dl(this.node.current, "blur", () => this.onBlur()))
                    }
                    unmount() {}
                }
            },
            hover: {
                Feature: class extends Fo {
                    mount() {
                        const {
                            current: e
                        } = this.node;
                        e && (this.unmount = Rc(e, (e, t) => (jc(this.node, t, "Start"), e => jc(this.node, e, "End"))))
                    }
                    unmount() {}
                }
            }
        },
        Yc = {
            layout: {
                ProjectionNode: Cc,
                MeasureLayout: Su
            }
        },
        Kc = Ao(f(f(f(f({}, Sl), $c), Pc), Yc), qi),
        Xc = mn("cable", [
            ["path", {
                d: "M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z",
                key: "trhst0"
            }],
            ["path", {
                d: "M17 21v-2",
                key: "ds4u3f"
            }],
            ["path", {
                d: "M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10",
                key: "1mo9zo"
            }],
            ["path", {
                d: "M21 21v-2",
                key: "eo0ou"
            }],
            ["path", {
                d: "M3 5V3",
                key: "1k5hjh"
            }],
            ["path", {
                d: "M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z",
                key: "1dd30t"
            }],
            ["path", {
                d: "M7 5V3",
                key: "1t1388"
            }]
        ]),
        Qc = mn("shield-check", [
            ["path", {
                d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
                key: "oel41y"
            }],
            ["path", {
                d: "m9 12 2 2 4-4",
                key: "dzmm74"
            }]
        ]),
        Gc = mn("globe", [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10",
                key: "1mglay"
            }],
            ["path", {
                d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
                key: "13o1zl"
            }],
            ["path", {
                d: "M2 12h20",
                key: "9i4pu4"
            }]
        ]),
        Jc = mn("arrow-right", [
            ["path", {
                d: "M5 12h14",
                key: "1ays0h"
            }],
            ["path", {
                d: "m12 5 7 7-7 7",
                key: "xquz4c"
            }]
        ]),
        Zc = () => {
            const e = [{
                icon: gn,
                title: "20+ Years Experience",
                description: "Decades of expertise in wire harness manufacturing"
            }, {
                icon: Xc,
                title: "Precision Engineering",
                description: "High-quality components for branded electronics worldwide"
            }, {
                icon: Qc,
                title: "Certified Quality",
                description: "CSR & Sustainability compliance standards"
            }, {
                icon: Gc,
                title: "Global Reach",
                description: "Products sold all over the world"
            }];
            return (0, sn.jsxs)("div", {
                className: "min-h-screen",
                children: [(0, sn.jsxs)("section", {
                    className: "relative h-[90vh] flex items-center justify-center overflow-hidden",
                    children: [(0, sn.jsxs)("div", {
                        className: "absolute inset-0",
                        children: [(0, sn.jsx)("img", {
                            src: "https://images.pexels.com/photos/33559401/pexels-photo-33559401.jpeg",
                            alt: "Manufacturing facility",
                            className: "w-full h-full object-cover hero-image"
                        }), (0, sn.jsx)("div", {
                            className: "absolute inset-0 gradient-overlay"
                        })]
                    }), (0, sn.jsx)("div", {
                        className: "relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center text-white",
                        children: (0, sn.jsxs)(Kc.div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .8
                            },
                            children: [(0, sn.jsx)("p", {
                                className: "text-sm font-medium uppercase tracking-widest text-slate-300 mb-6",
                                children: "Precision Wire Harness Solutions"
                            }), (0, sn.jsxs)("h1", {
                                className: "font-heading text-5xl md:text-7xl font-bold tracking-tight uppercase mb-6",
                                children: ["MAKING OUR WIRE", (0, sn.jsx)("br", {}), "HARNESSES YOUR OWN"]
                            }), (0, sn.jsx)("p", {
                                className: "text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed",
                                children: "With 20 years in the industry, we deliver trusted partner solutions for branded electronic products worldwide."
                            }), (0, sn.jsxs)("div", {
                                className: "flex gap-4 justify-center",
                                children: [(0, sn.jsx)(Nt, {
                                    to: "/products",
                                    "data-testid": "hero-products-btn",
                                    className: "bg-slate-900 text-white hover:bg-electric-blue rounded-sm px-8 py-4 uppercase tracking-widest font-bold transition-all duration-300 industrial-shadow",
                                    children: "Our Products"
                                }), (0, sn.jsx)(Nt, {
                                    to: "/contact",
                                    "data-testid": "hero-contact-btn",
                                    className: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-industrial-blue rounded-sm px-8 py-4 uppercase tracking-widest font-bold transition-all duration-300",
                                    children: "Get In Touch"
                                })]
                            })]
                        })
                    })]
                }), (0, sn.jsx)("section", {
                    className: "py-20 md:py-32 bg-slate-50",
                    children: (0, sn.jsxs)("div", {
                        className: "max-w-7xl mx-auto px-6 md:px-12",
                        children: [(0, sn.jsxs)("div", {
                            className: "text-center mb-16",
                            children: [(0, sn.jsx)("p", {
                                className: "text-sm font-medium uppercase tracking-widest text-slate-500 mb-4",
                                children: "Why Choose Us"
                            }), (0, sn.jsxs)("h2", {
                                className: "font-heading text-4xl md:text-5xl font-bold tracking-tight uppercase text-industrial-blue",
                                children: ["THE BEST WIRING COMPANY", (0, sn.jsx)("br", {}), "IN THE COUNTRY"]
                            })]
                        }), (0, sn.jsx)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                            children: e.map((e, t) => (0, sn.jsxs)(Kc.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    delay: .1 * t
                                },
                                className: "bg-white border border-slate-200 p-8 hover:border-electric-blue transition-colors duration-300 group",
                                "data-testid": "feature-card-".concat(t),
                                children: [(0, sn.jsx)(e.icon, {
                                    className: "w-12 h-12 text-electric-blue mb-6 group-hover:scale-110 transition-transform"
                                }), (0, sn.jsx)("h3", {
                                    className: "font-heading text-xl font-semibold uppercase mb-3 text-industrial-blue",
                                    children: e.title
                                }), (0, sn.jsx)("p", {
                                    className: "text-slate-600 text-sm leading-relaxed",
                                    children: e.description
                                })]
                            }, t))
                        })]
                    })
                }), (0, sn.jsx)("section", {
                    className: "py-20 md:py-32",
                    children: (0, sn.jsxs)("div", {
                        className: "max-w-7xl mx-auto px-6 md:px-12",
                        children: [(0, sn.jsxs)("div", {
                            className: "text-center mb-16",
                            children: [(0, sn.jsx)("p", {
                                className: "text-sm font-medium uppercase tracking-widest text-slate-500 mb-4",
                                children: "Our Offerings"
                            }), (0, sn.jsx)("h2", {
                                className: "font-heading text-4xl md:text-5xl font-bold tracking-tight uppercase text-industrial-blue mb-4",
                                children: "FEATURED PRODUCTS"
                            }), (0, sn.jsx)("p", {
                                className: "text-slate-600 max-w-2xl mx-auto",
                                children: "Check out our hot products today - strong electrical wire solutions for your business needs"
                            })]
                        }), (0, sn.jsx)("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                            children: [{
                                title: "Automotive Wire Harnesses",
                                image: "https://images.pexels.com/photos/29109612/pexels-photo-29109612.jpeg",
                                description: "Reliable wiring solutions for automotive applications"
                            }, {
                                title: "Industrial Wire Systems",
                                image: "https://images.pexels.com/photos/31321047/pexels-photo-31321047.jpeg",
                                description: "Heavy-duty wire harnesses for industrial machinery"
                            }, {
                                title: "Consumer Electronics",
                                image: "https://images.pexels.com/photos/18510415/pexels-photo-18510415.jpeg",
                                description: "Precision components for electronic devices"
                            }].map((e, t) => (0, sn.jsxs)(Kc.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    delay: .1 * t
                                },
                                className: "bg-white border border-slate-100 overflow-hidden group card-hover-lift",
                                "data-testid": "product-card-".concat(t),
                                children: [(0, sn.jsx)("div", {
                                    className: "relative h-64 overflow-hidden",
                                    children: (0, sn.jsx)("img", {
                                        src: e.image,
                                        alt: e.title,
                                        className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    })
                                }), (0, sn.jsxs)("div", {
                                    className: "p-6",
                                    children: [(0, sn.jsx)("h3", {
                                        className: "font-heading text-xl font-bold uppercase mb-3 text-industrial-blue",
                                        children: e.title
                                    }), (0, sn.jsx)("p", {
                                        className: "text-slate-600 text-sm mb-4",
                                        children: e.description
                                    }), (0, sn.jsxs)(Nt, {
                                        to: "/products",
                                        className: "text-electric-blue font-medium uppercase tracking-wider text-sm inline-flex items-center gap-2 hover:gap-3 transition-all",
                                        "data-testid": "product-learn-more-".concat(t),
                                        children: ["Learn More ", (0, sn.jsx)(Jc, {
                                            className: "w-4 h-4"
                                        })]
                                    })]
                                })]
                            }, t))
                        }), (0, sn.jsx)("div", {
                            className: "text-center mt-12",
                            children: (0, sn.jsx)(Nt, {
                                to: "/products",
                                "data-testid": "view-all-products-btn",
                                className: "bg-slate-900 text-white hover:bg-electric-blue rounded-sm px-8 py-4 uppercase tracking-widest font-bold transition-all duration-300 industrial-shadow inline-block",
                                children: "View All Products"
                            })
                        })]
                    })
                }), (0, sn.jsxs)("section", {
                    className: "py-20 md:py-32 bg-industrial-blue text-white relative overflow-hidden",
                    children: [(0, sn.jsx)("div", {
                        className: "absolute inset-0 opacity-10",
                        children: (0, sn.jsx)("img", {
                            src: "https://images.pexels.com/photos/31047142/pexels-photo-31047142.jpeg",
                            alt: "Factory",
                            className: "w-full h-full object-cover"
                        })
                    }), (0, sn.jsxs)("div", {
                        className: "relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center",
                        children: [(0, sn.jsx)("h2", {
                            className: "font-heading text-4xl md:text-5xl font-bold tracking-tight uppercase mb-6",
                            children: "READY TO TRANSFORM YOUR BUSINESS?"
                        }), (0, sn.jsx)("p", {
                            className: "text-lg text-slate-300 mb-10 leading-relaxed",
                            children: "Let's discuss how our precision wire harness solutions can elevate your products"
                        }), (0, sn.jsx)(Nt, {
                            to: "/contact",
                            "data-testid": "cta-contact-btn",
                            className: "bg-white text-industrial-blue hover:bg-safety-orange hover:text-white rounded-sm px-8 py-4 uppercase tracking-widest font-bold transition-all duration-300 inline-block industrial-shadow",
                            children: "Contact Us Today"
                        })]
                    })]
                })]
            })
        },
        ed = mn("car", [
            ["path", {
                d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
                key: "5owen"
            }],
            ["circle", {
                cx: "7",
                cy: "17",
                r: "2",
                key: "u2ysq9"
            }],
            ["path", {
                d: "M9 17h6",
                key: "r8uit2"
            }],
            ["circle", {
                cx: "17",
                cy: "17",
                r: "2",
                key: "axvx0g"
            }]
        ]),
        td = mn("cpu", [
            ["path", {
                d: "M12 20v2",
                key: "1lh1kg"
            }],
            ["path", {
                d: "M12 2v2",
                key: "tus03m"
            }],
            ["path", {
                d: "M17 20v2",
                key: "1rnc9c"
            }],
            ["path", {
                d: "M17 2v2",
                key: "11trls"
            }],
            ["path", {
                d: "M2 12h2",
                key: "1t8f8n"
            }],
            ["path", {
                d: "M2 17h2",
                key: "7oei6x"
            }],
            ["path", {
                d: "M2 7h2",
                key: "asdhe0"
            }],
            ["path", {
                d: "M20 12h2",
                key: "1q8mjw"
            }],
            ["path", {
                d: "M20 17h2",
                key: "1fpfkl"
            }],
            ["path", {
                d: "M20 7h2",
                key: "1o8tra"
            }],
            ["path", {
                d: "M7 20v2",
                key: "4gnj0m"
            }],
            ["path", {
                d: "M7 2v2",
                key: "1i4yhu"
            }],
            ["rect", {
                x: "4",
                y: "4",
                width: "16",
                height: "16",
                rx: "2",
                key: "1vbyd7"
            }],
            ["rect", {
                x: "8",
                y: "8",
                width: "8",
                height: "8",
                rx: "1",
                key: "z9xiuo"
            }]
        ]),
        nd = mn("zap", [
            ["path", {
                d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
                key: "1xq2db"
            }]
        ]),
        rd = mn("house", [
            ["path", {
                d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
                key: "5wwlr5"
            }],
            ["path", {
                d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
                key: "r6nss1"
            }]
        ]),
        ad = () => {
            const e = [{
                icon: ed,
                title: "Automotive Wire Harnesses",
                image: "https://images.pexels.com/photos/29109612/pexels-photo-29109612.jpeg",
                description: "High-performance wire harnesses designed for automotive applications. Built to withstand harsh conditions and deliver reliable performance.",
                features: ["OEM Quality Standards", "High Temperature Resistance", "Custom Configurations", "ISO Certified"]
            }, {
                icon: td,
                title: "Consumer Electronics",
                image: "https://images.pexels.com/photos/18510415/pexels-photo-18510415.jpeg",
                description: "Precision wire harness components for branded electronic products. Designed for optimal signal integrity and durability.",
                features: ["Miniature Design", "EMI Shielding", "RoHS Compliant", "High Density Connections"]
            }, {
                icon: nd,
                title: "Industrial Solutions",
                image: "https://images.pexels.com/photos/31321047/pexels-photo-31321047.jpeg",
                description: "Heavy-duty wire harnesses for industrial machinery and equipment. Built for maximum reliability in demanding environments.",
                features: ["Heavy Current Capacity", "Vibration Resistant", "Chemical Resistant", "Extended Service Life"]
            }, {
                icon: rd,
                title: "Home Appliances",
                image: "https://images.pexels.com/photos/6524413/pexels-photo-6524413.jpeg",
                description: "Safe and reliable wiring solutions for home appliances. Engineered for efficiency and long-lasting performance.",
                features: ["Safety Certified", "Energy Efficient", "Easy Installation", "Maintenance Free"]
            }];
            return (0, sn.jsxs)("div", {
                className: "min-h-screen",
                children: [(0, sn.jsxs)("section", {
                    className: "relative h-[60vh] flex items-center justify-center overflow-hidden",
                    children: [(0, sn.jsxs)("div", {
                        className: "absolute inset-0",
                        children: [(0, sn.jsx)("img", {
                            src: "https://images.pexels.com/photos/31047142/pexels-photo-31047142.jpeg",
                            alt: "Products",
                            className: "w-full h-full object-cover hero-image"
                        }), (0, sn.jsx)("div", {
                            className: "absolute inset-0 gradient-overlay"
                        })]
                    }), (0, sn.jsx)("div", {
                        className: "relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center text-white",
                        children: (0, sn.jsxs)(Kc.div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .8
                            },
                            children: [(0, sn.jsx)("p", {
                                className: "text-sm font-medium uppercase tracking-widest text-slate-300 mb-4",
                                children: "Our Products"
                            }), (0, sn.jsx)("h1", {
                                className: "font-heading text-5xl md:text-7xl font-bold tracking-tight uppercase",
                                children: "USING ROBUST PRODUCTS"
                            })]
                        })
                    })]
                }), (0, sn.jsx)("section", {
                    className: "py-20 md:py-32",
                    children: (0, sn.jsxs)("div", {
                        className: "max-w-7xl mx-auto px-6 md:px-12",
                        children: [(0, sn.jsxs)("div", {
                            className: "text-center mb-16",
                            children: [(0, sn.jsx)("h2", {
                                className: "font-heading text-3xl md:text-4xl font-bold tracking-tight uppercase text-industrial-blue mb-4",
                                children: "STRONG ELECTRICAL WIRE FOR YOUR NEEDS"
                            }), (0, sn.jsx)("p", {
                                className: "text-slate-600 max-w-2xl mx-auto",
                                children: "Explore our comprehensive range of wire harness solutions designed for various industries and applications"
                            })]
                        }), (0, sn.jsx)("div", {
                            className: "space-y-16",
                            children: e.map((e, t) => (0, sn.jsxs)(Kc.div, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    delay: .2
                                },
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ".concat(t % 2 === 1 ? "lg:flex-row-reverse" : ""),
                                "data-testid": "product-category-".concat(t),
                                children: [(0, sn.jsx)("div", {
                                    className: t % 2 === 1 ? "lg:order-2" : "",
                                    children: (0, sn.jsxs)("div", {
                                        className: "relative h-[400px] overflow-hidden group",
                                        children: [(0, sn.jsx)("img", {
                                            src: e.image,
                                            alt: e.title,
                                            className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        }), (0, sn.jsx)("div", {
                                            className: "absolute top-6 left-6 bg-electric-blue p-4",
                                            children: (0, sn.jsx)(e.icon, {
                                                className: "w-8 h-8 text-white"
                                            })
                                        })]
                                    })
                                }), (0, sn.jsxs)("div", {
                                    className: t % 2 === 1 ? "lg:order-1" : "",
                                    children: [(0, sn.jsx)("h3", {
                                        className: "font-heading text-3xl md:text-4xl font-bold uppercase text-industrial-blue mb-4",
                                        children: e.title
                                    }), (0, sn.jsx)("p", {
                                        className: "text-slate-600 text-lg leading-relaxed mb-6",
                                        children: e.description
                                    }), (0, sn.jsxs)("div", {
                                        className: "space-y-3",
                                        children: [(0, sn.jsx)("p", {
                                            className: "text-sm font-medium uppercase tracking-widest text-slate-500 mb-3",
                                            children: "Key Features:"
                                        }), e.features.map((e, t) => (0, sn.jsxs)("div", {
                                            className: "flex items-center gap-3",
                                            children: [(0, sn.jsx)("div", {
                                                className: "w-2 h-2 bg-electric-blue"
                                            }), (0, sn.jsx)("span", {
                                                className: "text-slate-700",
                                                children: e
                                            })]
                                        }, t))]
                                    })]
                                })]
                            }, t))
                        })]
                    })
                }), (0, sn.jsx)("section", {
                    className: "py-20 bg-slate-50",
                    children: (0, sn.jsxs)("div", {
                        className: "max-w-4xl mx-auto px-6 md:px-12 text-center",
                        children: [(0, sn.jsx)(Xc, {
                            className: "w-16 h-16 text-electric-blue mx-auto mb-6"
                        }), (0, sn.jsx)("h2", {
                            className: "font-heading text-3xl md:text-4xl font-bold tracking-tight uppercase text-industrial-blue mb-4",
                            children: "NEED A CUSTOM SOLUTION?"
                        }), (0, sn.jsx)("p", {
                            className: "text-slate-600 text-lg mb-8",
                            children: "We specialize in creating custom wire harness solutions tailored to your specific requirements"
                        }), (0, sn.jsx)("a", {
                            href: "/contact",
                            "data-testid": "custom-solution-btn",
                            className: "bg-slate-900 text-white hover:bg-electric-blue rounded-sm px-8 py-4 uppercase tracking-widest font-bold transition-all duration-300 industrial-shadow inline-block",
                            children: "Request A Quote"
                        })]
                    })
                })]
            })
        },
        id = mn("settings", [
            ["path", {
                d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
                key: "1i5ecw"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "3",
                key: "1v7zrd"
            }]
        ]),
        od = mn("circle-check-big", [
            ["path", {
                d: "M21.801 10A10 10 0 1 1 17 3.335",
                key: "yps3ct"
            }],
            ["path", {
                d: "m9 11 3 3L22 4",
                key: "1pflzl"
            }]
        ]),
        sd = mn("cog", [
            ["path", {
                d: "M11 10.27 7 3.34",
                key: "16pf9h"
            }],
            ["path", {
                d: "m11 13.73-4 6.93",
                key: "794ttg"
            }],
            ["path", {
                d: "M12 22v-2",
                key: "1osdcq"
            }],
            ["path", {
                d: "M12 2v2",
                key: "tus03m"
            }],
            ["path", {
                d: "M14 12h8",
                key: "4f43i9"
            }],
            ["path", {
                d: "m17 20.66-1-1.73",
                key: "eq3orb"
            }],
            ["path", {
                d: "m17 3.34-1 1.73",
                key: "2wel8s"
            }],
            ["path", {
                d: "M2 12h2",
                key: "1t8f8n"
            }],
            ["path", {
                d: "m20.66 17-1.73-1",
                key: "sg0v6f"
            }],
            ["path", {
                d: "m20.66 7-1.73 1",
                key: "1ow05n"
            }],
            ["path", {
                d: "m3.34 17 1.73-1",
                key: "nuk764"
            }],
            ["path", {
                d: "m3.34 7 1.73 1",
                key: "1ulond"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "2",
                key: "1c9p78"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "8",
                key: "46899m"
            }]
        ]),
        ld = () => {
            const e = [{
                icon: gn,
                title: "Custom Manufacturing",
                description: "End-to-end wire harness manufacturing tailored to your specifications. From prototyping to mass production.",
                benefits: ["Rapid Prototyping", "Scalable Production", "Quality Assurance", "On-time Delivery"]
            }, {
                icon: id,
                title: "Engineering Support",
                description: "Expert engineering consultation to optimize your wire harness design for performance and manufacturability.",
                benefits: ["Design Optimization", "Material Selection", "Cost Reduction", "Technical Documentation"]
            }, {
                icon: Qc,
                title: "Quality Testing",
                description: "Comprehensive testing and validation to ensure your wire harnesses meet the highest quality standards.",
                benefits: ["Electrical Testing", "Environmental Testing", "Compliance Certification", "Performance Validation"]
            }, {
                icon: nd,
                title: "Assembly Services",
                description: "Professional assembly and integration services for complex wire harness systems.",
                benefits: ["Sub-assembly Integration", "System Testing", "Packaging Solutions", "Logistics Support"]
            }];
            return (0, sn.jsxs)("div", {
                className: "min-h-screen",
                children: [(0, sn.jsxs)("section", {
                    className: "relative h-[60vh] flex items-center justify-center overflow-hidden",
                    children: [(0, sn.jsxs)("div", {
                        className: "absolute inset-0",
                        children: [(0, sn.jsx)("img", {
                            src: "https://images.pexels.com/photos/6524413/pexels-photo-6524413.jpeg",
                            alt: "Services",
                            className: "w-full h-full object-cover hero-image"
                        }), (0, sn.jsx)("div", {
                            className: "absolute inset-0 gradient-overlay"
                        })]
                    }), (0, sn.jsx)("div", {
                        className: "relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center text-white",
                        children: (0, sn.jsxs)(Kc.div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .8
                            },
                            children: [(0, sn.jsx)("p", {
                                className: "text-sm font-medium uppercase tracking-widest text-slate-300 mb-4",
                                children: "Our Services"
                            }), (0, sn.jsx)("h1", {
                                className: "font-heading text-5xl md:text-7xl font-bold tracking-tight uppercase",
                                children: "COMPREHENSIVE SOLUTIONS"
                            })]
                        })
                    })]
                }), (0, sn.jsx)("section", {
                    className: "py-20 md:py-32",
                    children: (0, sn.jsxs)("div", {
                        className: "max-w-7xl mx-auto px-6 md:px-12",
                        children: [(0, sn.jsxs)("div", {
                            className: "text-center mb-16",
                            children: [(0, sn.jsx)("h2", {
                                className: "font-heading text-3xl md:text-4xl font-bold tracking-tight uppercase text-industrial-blue mb-4",
                                children: "TRANSFORM YOUR BUSINESS WITH OUR SERVICES"
                            }), (0, sn.jsx)("p", {
                                className: "text-slate-600 max-w-2xl mx-auto",
                                children: "Complete wire harness solutions from concept to delivery"
                            })]
                        }), (0, sn.jsx)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                            children: e.map((e, t) => (0, sn.jsxs)(Kc.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    delay: .1 * t
                                },
                                className: "bg-slate-50 border border-slate-200 p-8 hover:border-electric-blue transition-colors duration-300 group",
                                "data-testid": "service-card-".concat(t),
                                children: [(0, sn.jsx)(e.icon, {
                                    className: "w-12 h-12 text-electric-blue mb-6 group-hover:scale-110 transition-transform"
                                }), (0, sn.jsx)("h3", {
                                    className: "font-heading text-2xl font-bold uppercase text-industrial-blue mb-4",
                                    children: e.title
                                }), (0, sn.jsx)("p", {
                                    className: "text-slate-600 leading-relaxed mb-6",
                                    children: e.description
                                }), (0, sn.jsx)("div", {
                                    className: "space-y-3",
                                    children: e.benefits.map((e, t) => (0, sn.jsxs)("div", {
                                        className: "flex items-center gap-3",
                                        children: [(0, sn.jsx)(od, {
                                            className: "w-5 h-5 text-electric-blue flex-shrink-0"
                                        }), (0, sn.jsx)("span", {
                                            className: "text-slate-700",
                                            children: e
                                        })]
                                    }, t))
                                })]
                            }, t))
                        })]
                    })
                }), (0, sn.jsx)("section", {
                    className: "py-20 md:py-32 bg-slate-50",
                    children: (0, sn.jsxs)("div", {
                        className: "max-w-7xl mx-auto px-6 md:px-12",
                        children: [(0, sn.jsxs)("div", {
                            className: "text-center mb-16",
                            children: [(0, sn.jsx)("p", {
                                className: "text-sm font-medium uppercase tracking-widest text-slate-500 mb-4",
                                children: "Our Process"
                            }), (0, sn.jsx)("h2", {
                                className: "font-heading text-3xl md:text-4xl font-bold tracking-tight uppercase text-industrial-blue",
                                children: "HOW WE WORK"
                            })]
                        }), (0, sn.jsx)("div", {
                            className: "grid grid-cols-1 md:grid-cols-4 gap-8",
                            children: [{
                                step: "01",
                                title: "Consultation",
                                description: "Understanding your requirements and specifications"
                            }, {
                                step: "02",
                                title: "Design",
                                description: "Engineering and prototyping your wire harness solution"
                            }, {
                                step: "03",
                                title: "Manufacturing",
                                description: "Precision production with quality control"
                            }, {
                                step: "04",
                                title: "Delivery",
                                description: "On-time delivery and ongoing support"
                            }].map((e, t) => (0, sn.jsxs)(Kc.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    delay: .1 * t
                                },
                                className: "text-center",
                                "data-testid": "process-step-".concat(t),
                                children: [(0, sn.jsx)("div", {
                                    className: "font-heading text-6xl font-bold text-electric-blue/20 mb-4",
                                    children: e.step
                                }), (0, sn.jsx)("h3", {
                                    className: "font-heading text-xl font-bold uppercase text-industrial-blue mb-3",
                                    children: e.title
                                }), (0, sn.jsx)("p", {
                                    className: "text-slate-600 text-sm",
                                    children: e.description
                                })]
                            }, t))
                        })]
                    })
                }), (0, sn.jsx)("section", {
                    className: "py-20 bg-industrial-blue text-white",
                    children: (0, sn.jsxs)("div", {
                        className: "max-w-4xl mx-auto px-6 md:px-12 text-center",
                        children: [(0, sn.jsx)(sd, {
                            className: "w-16 h-16 text-white mx-auto mb-6"
                        }), (0, sn.jsx)("h2", {
                            className: "font-heading text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4",
                            children: "LET'S START YOUR PROJECT"
                        }), (0, sn.jsx)("p", {
                            className: "text-slate-300 text-lg mb-8",
                            children: "Contact us today to discuss your wire harness requirements"
                        }), (0, sn.jsx)("a", {
                            href: "/contact",
                            "data-testid": "services-contact-btn",
                            className: "bg-white text-industrial-blue hover:bg-safety-orange hover:text-white rounded-sm px-8 py-4 uppercase tracking-widest font-bold transition-all duration-300 inline-block industrial-shadow",
                            children: "Get Started"
                        })]
                    })
                })]
            })
        },
        ud = mn("award", [
            ["path", {
                d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
                key: "1yiouv"
            }],
            ["circle", {
                cx: "12",
                cy: "8",
                r: "6",
                key: "1vp47v"
            }]
        ]),
        cd = mn("users", [
            ["path", {
                d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
                key: "1yyitq"
            }],
            ["path", {
                d: "M16 3.128a4 4 0 0 1 0 7.744",
                key: "16gr8j"
            }],
            ["path", {
                d: "M22 21v-2a4 4 0 0 0-3-3.87",
                key: "kshegd"
            }],
            ["circle", {
                cx: "9",
                cy: "7",
                r: "4",
                key: "nufk8"
            }]
        ]),
        dd = mn("trending-up", [
            ["path", {
                d: "M16 7h6v6",
                key: "box55l"
            }],
            ["path", {
                d: "m22 7-8.5 8.5-5-5L2 17",
                key: "1t1m79"
            }]
        ]),
        fd = mn("leaf", [
            ["path", {
                d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
                key: "nnexq3"
            }],
            ["path", {
                d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
                key: "mt58a7"
            }]
        ]),
        hd = () => {
            const e = [{
                icon: ud,
                title: "Quality Excellence",
                description: "Committed to delivering the highest quality wire harness solutions that meet international standards."
            }, {
                icon: cd,
                title: "Customer Focus",
                description: "Building long-term partnerships through exceptional service and reliable product delivery."
            }, {
                icon: dd,
                title: "Continuous Innovation",
                description: "Investing in technology and processes to stay ahead in wire harness manufacturing."
            }, {
                icon: Qc,
                title: "Reliability",
                description: "Proven track record of on-time delivery and consistent product performance."
            }];
            return (0, sn.jsxs)("div", {
                className: "min-h-screen",
                children: [(0, sn.jsxs)("section", {
                    className: "relative h-[60vh] flex items-center justify-center overflow-hidden",
                    children: [(0, sn.jsxs)("div", {
                        className: "absolute inset-0",
                        children: [(0, sn.jsx)("img", {
                            src: "https://images.pexels.com/photos/31047142/pexels-photo-31047142.jpeg",
                            alt: "About Us",
                            className: "w-full h-full object-cover hero-image"
                        }), (0, sn.jsx)("div", {
                            className: "absolute inset-0 gradient-overlay"
                        })]
                    }), (0, sn.jsx)("div", {
                        className: "relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center text-white",
                        children: (0, sn.jsxs)(Kc.div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .8
                            },
                            children: [(0, sn.jsx)("p", {
                                className: "text-sm font-medium uppercase tracking-widest text-slate-300 mb-4",
                                children: "About Us"
                            }), (0, sn.jsx)("h1", {
                                className: "font-heading text-5xl md:text-7xl font-bold tracking-tight uppercase",
                                children: "EXCELLING IN THE FIELD"
                            })]
                        })
                    })]
                }), (0, sn.jsx)("section", {
                    className: "py-20 bg-industrial-blue text-white",
                    children: (0, sn.jsx)("div", {
                        className: "max-w-7xl mx-auto px-6 md:px-12",
                        children: (0, sn.jsx)("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-8",
                            children: [{
                                number: "20+",
                                label: "Years in Industry"
                            }, {
                                number: "1000+",
                                label: "Projects Completed"
                            }, {
                                number: "50+",
                                label: "Countries Served"
                            }, {
                                number: "100%",
                                label: "Quality Commitment"
                            }].map((e, t) => (0, sn.jsxs)(Kc.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    delay: .1 * t
                                },
                                className: "text-center",
                                "data-testid": "stat-".concat(t),
                                children: [(0, sn.jsx)("div", {
                                    className: "font-heading text-5xl md:text-6xl font-bold text-electric-blue mb-2",
                                    children: e.number
                                }), (0, sn.jsx)("p", {
                                    className: "text-slate-300 uppercase tracking-wider text-sm",
                                    children: e.label
                                })]
                            }, t))
                        })
                    })
                }), (0, sn.jsx)("section", {
                    className: "py-20 md:py-32",
                    children: (0, sn.jsx)("div", {
                        className: "max-w-7xl mx-auto px-6 md:px-12",
                        children: (0, sn.jsxs)("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-16",
                            children: [(0, sn.jsx)(Kc.div, {
                                initial: {
                                    opacity: 0,
                                    x: -30
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: !0
                                },
                                "data-testid": "mission-section",
                                children: (0, sn.jsxs)("div", {
                                    className: "bg-slate-50 p-8 h-full",
                                    children: [(0, sn.jsx)("h2", {
                                        className: "font-heading text-3xl md:text-4xl font-bold uppercase text-industrial-blue mb-6",
                                        children: "OUR MISSION"
                                    }), (0, sn.jsx)("p", {
                                        className: "text-slate-600 text-lg leading-relaxed mb-6",
                                        children: "The Company is a proud contributor of wire harness components and assemblies to branded electronic products sold all over the world, and will seek allied sectors where it can extend further service."
                                    }), (0, sn.jsx)("p", {
                                        className: "text-slate-600 leading-relaxed",
                                        children: "With 20 years of experience in the industry, we are committed to being the trusted partner behind numerous devices and systems that people use every day."
                                    })]
                                })
                            }), (0, sn.jsx)(Kc.div, {
                                initial: {
                                    opacity: 0,
                                    x: 30
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: !0
                                },
                                "data-testid": "vision-section",
                                children: (0, sn.jsxs)("div", {
                                    className: "bg-electric-blue text-white p-8 h-full",
                                    children: [(0, sn.jsx)("h2", {
                                        className: "font-heading text-3xl md:text-4xl font-bold uppercase mb-6",
                                        children: "OUR VISION"
                                    }), (0, sn.jsx)("p", {
                                        className: "text-slate-100 text-lg leading-relaxed mb-6",
                                        children: "To be the global leader in wire harness manufacturing, recognized for our commitment to quality, innovation, and sustainability."
                                    }), (0, sn.jsx)("p", {
                                        className: "text-slate-200 leading-relaxed",
                                        children: "We envision expanding our reach into allied sectors while maintaining our core values of precision, reliability, and customer satisfaction."
                                    })]
                                })
                            })]
                        })
                    })
                }), (0, sn.jsx)("section", {
                    className: "py-20 bg-slate-50",
                    children: (0, sn.jsxs)("div", {
                        className: "max-w-7xl mx-auto px-6 md:px-12",
                        children: [(0, sn.jsx)("div", {
                            className: "text-center mb-16",
                            children: (0, sn.jsx)("h2", {
                                className: "font-heading text-3xl md:text-4xl font-bold tracking-tight uppercase text-industrial-blue",
                                children: "OUR CORE VALUES"
                            })
                        }), (0, sn.jsx)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                            children: e.map((e, t) => (0, sn.jsxs)(Kc.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    delay: .1 * t
                                },
                                className: "bg-white p-6 text-center",
                                "data-testid": "value-card-".concat(t),
                                children: [(0, sn.jsx)(e.icon, {
                                    className: "w-12 h-12 text-electric-blue mx-auto mb-4"
                                }), (0, sn.jsx)("h3", {
                                    className: "font-heading text-lg font-bold uppercase text-industrial-blue mb-3",
                                    children: e.title
                                }), (0, sn.jsx)("p", {
                                    className: "text-slate-600 text-sm leading-relaxed",
                                    children: e.description
                                })]
                            }, t))
                        })]
                    })
                }), (0, sn.jsx)("section", {
                    className: "py-20",
                    children: (0, sn.jsxs)("div", {
                        className: "max-w-7xl mx-auto px-6 md:px-12",
                        children: [(0, sn.jsxs)("div", {
                            className: "text-center mb-16",
                            children: [(0, sn.jsxs)("div", {
                                className: "flex items-center justify-center gap-3 mb-4",
                                children: [(0, sn.jsx)(fd, {
                                    className: "w-8 h-8 text-electric-blue"
                                }), (0, sn.jsx)("p", {
                                    className: "text-sm font-medium uppercase tracking-widest text-slate-500",
                                    children: "CSR & Sustainability"
                                })]
                            }), (0, sn.jsx)("h2", {
                                className: "font-heading text-3xl md:text-4xl font-bold tracking-tight uppercase text-industrial-blue",
                                children: "CERTIFICATIONS & COMPLIANCE"
                            })]
                        }), (0, sn.jsx)("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-6",
                            children: [{
                                name: "ISO 9001",
                                description: "Quality Management"
                            }, {
                                name: "RoHS",
                                description: "Environmental Compliance"
                            }, {
                                name: "CSR",
                                description: "Corporate Social Responsibility"
                            }, {
                                name: "Sustainability",
                                description: "Environmental Standards"
                            }].map((e, t) => (0, sn.jsxs)(Kc.div, {
                                initial: {
                                    opacity: 0,
                                    scale: .9
                                },
                                whileInView: {
                                    opacity: 1,
                                    scale: 1
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    delay: .1 * t
                                },
                                className: "bg-slate-50 border-2 border-slate-200 p-6 text-center hover:border-electric-blue transition-colors",
                                "data-testid": "cert-".concat(t),
                                children: [(0, sn.jsx)(Qc, {
                                    className: "w-12 h-12 text-electric-blue mx-auto mb-3"
                                }), (0, sn.jsx)("h3", {
                                    className: "font-heading text-xl font-bold text-industrial-blue mb-2",
                                    children: e.name
                                }), (0, sn.jsx)("p", {
                                    className: "text-slate-600 text-sm",
                                    children: e.description
                                })]
                            }, t))
                        })]
                    })
                }), (0, sn.jsx)("section", {
                    className: "py-20 bg-industrial-blue text-white",
                    children: (0, sn.jsxs)("div", {
                        className: "max-w-4xl mx-auto px-6 md:px-12 text-center",
                        children: [(0, sn.jsx)(Gc, {
                            className: "w-16 h-16 text-white mx-auto mb-6"
                        }), (0, sn.jsx)("h2", {
                            className: "font-heading text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4",
                            children: "JOIN OUR GROWING NETWORK"
                        }), (0, sn.jsx)("p", {
                            className: "text-slate-300 text-lg mb-8",
                            children: "Become a part of our global partnership network"
                        }), (0, sn.jsx)("a", {
                            href: "/contact",
                            "data-testid": "about-contact-btn",
                            className: "bg-white text-industrial-blue hover:bg-safety-orange hover:text-white rounded-sm px-8 py-4 uppercase tracking-widest font-bold transition-all duration-300 inline-block industrial-shadow",
                            children: "Contact Us"
                        })]
                    })
                })]
            })
        },
        pd = mn("phone", [
            ["path", {
                d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
                key: "9njp5v"
            }]
        ]),
        md = mn("mail", [
            ["path", {
                d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
                key: "132q7q"
            }],
            ["rect", {
                x: "2",
                y: "4",
                width: "20",
                height: "16",
                rx: "2",
                key: "izxlao"
            }]
        ]),
        gd = mn("map-pin", [
            ["path", {
                d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
                key: "1r0f0z"
            }],
            ["circle", {
                cx: "12",
                cy: "10",
                r: "3",
                key: "ilqhr7"
            }]
        ]),
        vd = mn("send", [
            ["path", {
                d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
                key: "1ffxy3"
            }],
            ["path", {
                d: "m21.854 2.147-10.94 10.939",
                key: "12cjpa"
            }]
        ]);

    function yd(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    const {
        toString: bd
    } = Object.prototype, {
        getPrototypeOf: xd
    } = Object, {
        iterator: wd,
        toStringTag: Sd
    } = Symbol, kd = (Ed = Object.create(null), e => {
        const t = bd.call(e);
        return Ed[t] || (Ed[t] = t.slice(8, -1).toLowerCase())
    });
    var Ed;
    const Td = e => (e = e.toLowerCase(), t => kd(t) === e),
        Cd = e => t => typeof t === e,
        {
            isArray: Pd
        } = Array,
        Nd = Cd("undefined");

    function Rd(e) {
        return null !== e && !Nd(e) && null !== e.constructor && !Nd(e.constructor) && Fd(e.constructor.isBuffer) && e.constructor.isBuffer(e)
    }
    const jd = Td("ArrayBuffer");
    const Ad = Cd("string"),
        Fd = Cd("function"),
        Od = Cd("number"),
        Dd = e => null !== e && "object" === typeof e,
        Md = e => {
            if ("object" !== kd(e)) return !1;
            const t = xd(e);
            return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(Sd in e) && !(wd in e)
        },
        Ld = Td("Date"),
        _d = Td("File"),
        zd = Td("Blob"),
        Id = Td("FileList"),
        Bd = Td("URLSearchParams"),
        [Vd, Ud, Hd, Wd] = ["ReadableStream", "Request", "Response", "Headers"].map(Td);

    function qd(e, t) {
        let n, r, {
            allOwnKeys: a = !1
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null !== e && "undefined" !== typeof e)
            if ("object" !== typeof e && (e = [e]), Pd(e))
                for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
            else {
                if (Rd(e)) return;
                const r = a ? Object.getOwnPropertyNames(e) : Object.keys(e),
                    i = r.length;
                let o;
                for (n = 0; n < i; n++) o = r[n], t.call(null, e[o], o, e)
            }
    }

    function $d(e, t) {
        if (Rd(e)) return null;
        t = t.toLowerCase();
        const n = Object.keys(e);
        let r, a = n.length;
        for (; a-- > 0;)
            if (r = n[a], t === r.toLowerCase()) return r;
        return null
    }
    const Yd = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : n.g,
        Kd = e => !Nd(e) && e !== Yd;
    const Xd = (Qd = "undefined" !== typeof Uint8Array && xd(Uint8Array), e => Qd && e instanceof Qd);
    var Qd;
    const Gd = Td("HTMLFormElement"),
        Jd = (e => {
            let {
                hasOwnProperty: t
            } = e;
            return (e, n) => t.call(e, n)
        })(Object.prototype),
        Zd = Td("RegExp"),
        ef = (e, t) => {
            const n = Object.getOwnPropertyDescriptors(e),
                r = {};
            qd(n, (n, a) => {
                let i;
                !1 !== (i = t(n, a, e)) && (r[a] = i || n)
            }), Object.defineProperties(e, r)
        };
    const tf = Td("AsyncFunction"),
        nf = ((e, t) => {
            return e ? setImmediate : t ? (n = "axios@".concat(Math.random()), r = [], Yd.addEventListener("message", e => {
                let {
                    source: t,
                    data: a
                } = e;
                t === Yd && a === n && r.length && r.shift()()
            }, !1), e => {
                r.push(e), Yd.postMessage(n, "*")
            }) : e => setTimeout(e);
            var n, r
        })("function" === typeof setImmediate, Fd(Yd.postMessage)),
        rf = "undefined" !== typeof queueMicrotask ? queueMicrotask.bind(Yd) : "undefined" !== typeof process && process.nextTick || nf,
        af = {
            isArray: Pd,
            isArrayBuffer: jd,
            isBuffer: Rd,
            isFormData: e => {
                let t;
                return e && ("function" === typeof FormData && e instanceof FormData || Fd(e.append) && ("formdata" === (t = kd(e)) || "object" === t && Fd(e.toString) && "[object FormData]" === e.toString()))
            },
            isArrayBufferView: function(e) {
                let t;
                return t = "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && jd(e.buffer), t
            },
            isString: Ad,
            isNumber: Od,
            isBoolean: e => !0 === e || !1 === e,
            isObject: Dd,
            isPlainObject: Md,
            isEmptyObject: e => {
                if (!Dd(e) || Rd(e)) return !1;
                try {
                    return 0 === Object.keys(e).length && Object.getPrototypeOf(e) === Object.prototype
                } catch (qh) {
                    return !1
                }
            },
            isReadableStream: Vd,
            isRequest: Ud,
            isResponse: Hd,
            isHeaders: Wd,
            isUndefined: Nd,
            isDate: Ld,
            isFile: _d,
            isBlob: zd,
            isRegExp: Zd,
            isFunction: Fd,
            isStream: e => Dd(e) && Fd(e.pipe),
            isURLSearchParams: Bd,
            isTypedArray: Xd,
            isFileList: Id,
            forEach: qd,
            merge: function e() {
                const {
                    caseless: t,
                    skipUndefined: n
                } = Kd(this) && this || {}, r = {}, a = (a, i) => {
                    const o = t && $d(r, i) || i;
                    Md(r[o]) && Md(a) ? r[o] = e(r[o], a) : Md(a) ? r[o] = e({}, a) : Pd(a) ? r[o] = a.slice() : n && Nd(a) || (r[o] = a)
                };
                for (let i = 0, o = arguments.length; i < o; i++) arguments[i] && qd(arguments[i], a);
                return r
            },
            extend: function(e, t, n) {
                let {
                    allOwnKeys: r
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return qd(t, (t, r) => {
                    n && Fd(t) ? e[r] = yd(t, n) : e[r] = t
                }, {
                    allOwnKeys: r
                }), e
            },
            trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
            stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
            inherits: (e, t, n, r) => {
                e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
                    value: t.prototype
                }), n && Object.assign(e.prototype, n)
            },
            toFlatObject: (e, t, n, r) => {
                let a, i, o;
                const s = {};
                if (t = t || {}, null == e) return t;
                do {
                    for (a = Object.getOwnPropertyNames(e), i = a.length; i-- > 0;) o = a[i], r && !r(o, e, t) || s[o] || (t[o] = e[o], s[o] = !0);
                    e = !1 !== n && xd(e)
                } while (e && (!n || n(e, t)) && e !== Object.prototype);
                return t
            },
            kindOf: kd,
            kindOfTest: Td,
            endsWith: (e, t, n) => {
                e = String(e), (void 0 === n || n > e.length) && (n = e.length), n -= t.length;
                const r = e.indexOf(t, n);
                return -1 !== r && r === n
            },
            toArray: e => {
                if (!e) return null;
                if (Pd(e)) return e;
                let t = e.length;
                if (!Od(t)) return null;
                const n = new Array(t);
                for (; t-- > 0;) n[t] = e[t];
                return n
            },
            forEachEntry: (e, t) => {
                const n = (e && e[wd]).call(e);
                let r;
                for (;
                    (r = n.next()) && !r.done;) {
                    const n = r.value;
                    t.call(e, n[0], n[1])
                }
            },
            matchAll: (e, t) => {
                let n;
                const r = [];
                for (; null !== (n = e.exec(t));) r.push(n);
                return r
            },
            isHTMLForm: Gd,
            hasOwnProperty: Jd,
            hasOwnProp: Jd,
            reduceDescriptors: ef,
            freezeMethods: e => {
                ef(e, (t, n) => {
                    if (Fd(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) return !1;
                    const r = e[n];
                    Fd(r) && (t.enumerable = !1, "writable" in t ? t.writable = !1 : t.set || (t.set = () => {
                        throw Error("Can not rewrite read-only method '" + n + "'")
                    }))
                })
            },
            toObjectSet: (e, t) => {
                const n = {},
                    r = e => {
                        e.forEach(e => {
                            n[e] = !0
                        })
                    };
                return Pd(e) ? r(e) : r(String(e).split(t)), n
            },
            toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, n) {
                return t.toUpperCase() + n
            }),
            noop: () => {},
            toFiniteNumber: (e, t) => null != e && Number.isFinite(e = +e) ? e : t,
            findKey: $d,
            global: Yd,
            isContextDefined: Kd,
            isSpecCompliantForm: function(e) {
                return !!(e && Fd(e.append) && "FormData" === e[Sd] && e[wd])
            },
            toJSONObject: e => {
                const t = new Array(10),
                    n = (e, r) => {
                        if (Dd(e)) {
                            if (t.indexOf(e) >= 0) return;
                            if (Rd(e)) return e;
                            if (!("toJSON" in e)) {
                                t[r] = e;
                                const a = Pd(e) ? [] : {};
                                return qd(e, (e, t) => {
                                    const i = n(e, r + 1);
                                    !Nd(i) && (a[t] = i)
                                }), t[r] = void 0, a
                            }
                        }
                        return e
                    };
                return n(e, 0)
            },
            isAsyncFn: tf,
            isThenable: e => e && (Dd(e) || Fd(e)) && Fd(e.then) && Fd(e.catch),
            setImmediate: nf,
            asap: rf,
            isIterable: e => null != e && Fd(e[wd])
        };

    function of (e, t, n, r, a) {
        Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), a && (this.response = a, this.status = a.status ? a.status : null)
    }
    af.inherits( of , Error, {
        toJSON: function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: af.toJSONObject(this.config),
                code: this.code,
                status: this.status
            }
        }
    });
    const sf = of .prototype,
        lf = {};
    ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
        lf[e] = {
            value: e
        }
    }), Object.defineProperties( of , lf), Object.defineProperty(sf, "isAxiosError", {
        value: !0
    }), of .from = (e, t, n, r, a, i) => {
        const o = Object.create(sf);
        af.toFlatObject(e, o, function(e) {
            return e !== Error.prototype
        }, e => "isAxiosError" !== e);
        const s = e && e.message ? e.message : "Error",
            l = null == t && e ? e.code : t;
        return of.call(o, s, l, n, r, a), e && null == o.cause && Object.defineProperty(o, "cause", {
            value: e,
            configurable: !0
        }), o.name = e && e.name || "Error", i && Object.assign(o, i), o
    };
    const uf = of ;

    function cf(e) {
        return af.isPlainObject(e) || af.isArray(e)
    }

    function df(e) {
        return af.endsWith(e, "[]") ? e.slice(0, -2) : e
    }

    function ff(e, t, n) {
        return e ? e.concat(t).map(function(e, t) {
            return e = df(e), !n && t ? "[" + e + "]" : e
        }).join(n ? "." : "") : t
    }
    const hf = af.toFlatObject(af, {}, null, function(e) {
        return /^is[A-Z]/.test(e)
    });
    const pf = function(e, t, n) {
        if (!af.isObject(e)) throw new TypeError("target must be an object");
        t = t || new FormData;
        const r = (n = af.toFlatObject(n, {
                metaTokens: !0,
                dots: !1,
                indexes: !1
            }, !1, function(e, t) {
                return !af.isUndefined(t[e])
            })).metaTokens,
            a = n.visitor || u,
            i = n.dots,
            o = n.indexes,
            s = (n.Blob || "undefined" !== typeof Blob && Blob) && af.isSpecCompliantForm(t);
        if (!af.isFunction(a)) throw new TypeError("visitor must be a function");

        function l(e) {
            if (null === e) return "";
            if (af.isDate(e)) return e.toISOString();
            if (af.isBoolean(e)) return e.toString();
            if (!s && af.isBlob(e)) throw new uf("Blob is not supported. Use a Buffer instead.");
            return af.isArrayBuffer(e) || af.isTypedArray(e) ? s && "function" === typeof Blob ? new Blob([e]) : Buffer.from(e) : e
        }

        function u(e, n, a) {
            let s = e;
            if (e && !a && "object" === typeof e)
                if (af.endsWith(n, "{}")) n = r ? n : n.slice(0, -2), e = JSON.stringify(e);
                else if (af.isArray(e) && function(e) {
                    return af.isArray(e) && !e.some(cf)
                }(e) || (af.isFileList(e) || af.endsWith(n, "[]")) && (s = af.toArray(e))) return n = df(n), s.forEach(function(e, r) {
                !af.isUndefined(e) && null !== e && t.append(!0 === o ? ff([n], r, i) : null === o ? n : n + "[]", l(e))
            }), !1;
            return !!cf(e) || (t.append(ff(a, n, i), l(e)), !1)
        }
        const c = [],
            d = Object.assign(hf, {
                defaultVisitor: u,
                convertValue: l,
                isVisitable: cf
            });
        if (!af.isObject(e)) throw new TypeError("data must be an object");
        return function e(n, r) {
            if (!af.isUndefined(n)) {
                if (-1 !== c.indexOf(n)) throw Error("Circular reference detected in " + r.join("."));
                c.push(n), af.forEach(n, function(n, i) {
                    !0 === (!(af.isUndefined(n) || null === n) && a.call(t, n, af.isString(i) ? i.trim() : i, r, d)) && e(n, r ? r.concat(i) : [i])
                }), c.pop()
            }
        }(e), t
    };

    function mf(e) {
        const t = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(e) {
            return t[e]
        })
    }

    function gf(e, t) {
        this._pairs = [], e && pf(e, this, t)
    }
    const vf = gf.prototype;
    vf.append = function(e, t) {
        this._pairs.push([e, t])
    }, vf.toString = function(e) {
        const t = e ? function(t) {
            return e.call(this, t, mf)
        } : mf;
        return this._pairs.map(function(e) {
            return t(e[0]) + "=" + t(e[1])
        }, "").join("&")
    };
    const yf = gf;

    function bf(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
    }

    function xf(e, t, n) {
        if (!t) return e;
        const r = n && n.encode || bf;
        af.isFunction(n) && (n = {
            serialize: n
        });
        const a = n && n.serialize;
        let i;
        if (i = a ? a(t, n) : af.isURLSearchParams(t) ? t.toString() : new yf(t, n).toString(r), i) {
            const t = e.indexOf("#"); - 1 !== t && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + i
        }
        return e
    }
    const wf = class {
            constructor() {
                this.handlers = []
            }
            use(e, t, n) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t,
                    synchronous: !!n && n.synchronous,
                    runWhen: n ? n.runWhen : null
                }), this.handlers.length - 1
            }
            eject(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }
            clear() {
                this.handlers && (this.handlers = [])
            }
            forEach(e) {
                af.forEach(this.handlers, function(t) {
                    null !== t && e(t)
                })
            }
        },
        Sf = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1
        },
        kf = {
            isBrowser: !0,
            classes: {
                URLSearchParams: "undefined" !== typeof URLSearchParams ? URLSearchParams : yf,
                FormData: "undefined" !== typeof FormData ? FormData : null,
                Blob: "undefined" !== typeof Blob ? Blob : null
            },
            protocols: ["http", "https", "file", "blob", "url", "data"]
        },
        Ef = "undefined" !== typeof window && "undefined" !== typeof document,
        Tf = "object" === typeof navigator && navigator || void 0,
        Cf = Ef && (!Tf || ["ReactNative", "NativeScript", "NS"].indexOf(Tf.product) < 0),
        Pf = "undefined" !== typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" === typeof self.importScripts,
        Nf = Ef && window.location.href || "http://localhost",
        Rf = f(f({}, r), kf);
    const jf = function(e) {
        function t(e, n, r, a) {
            let i = e[a++];
            if ("__proto__" === i) return !0;
            const o = Number.isFinite(+i),
                s = a >= e.length;
            if (i = !i && af.isArray(r) ? r.length : i, s) return af.hasOwnProp(r, i) ? r[i] = [r[i], n] : r[i] = n, !o;
            r[i] && af.isObject(r[i]) || (r[i] = []);
            return t(e, n, r[i], a) && af.isArray(r[i]) && (r[i] = function(e) {
                const t = {},
                    n = Object.keys(e);
                let r;
                const a = n.length;
                let i;
                for (r = 0; r < a; r++) i = n[r], t[i] = e[i];
                return t
            }(r[i])), !o
        }
        if (af.isFormData(e) && af.isFunction(e.entries)) {
            const n = {};
            return af.forEachEntry(e, (e, r) => {
                t(function(e) {
                    return af.matchAll(/\w+|\[(\w*)]/g, e).map(e => "[]" === e[0] ? "" : e[1] || e[0])
                }(e), r, n, 0)
            }), n
        }
        return null
    };
    const Af = {
        transitional: Sf,
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [function(e, t) {
            const n = t.getContentType() || "",
                r = n.indexOf("application/json") > -1,
                a = af.isObject(e);
            a && af.isHTMLForm(e) && (e = new FormData(e));
            if (af.isFormData(e)) return r ? JSON.stringify(jf(e)) : e;
            if (af.isArrayBuffer(e) || af.isBuffer(e) || af.isStream(e) || af.isFile(e) || af.isBlob(e) || af.isReadableStream(e)) return e;
            if (af.isArrayBufferView(e)) return e.buffer;
            if (af.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
            let i;
            if (a) {
                if (n.indexOf("application/x-www-form-urlencoded") > -1) return function(e, t) {
                    return pf(e, new Rf.classes.URLSearchParams, f({
                        visitor: function(e, t, n, r) {
                            return Rf.isNode && af.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments)
                        }
                    }, t))
                }(e, this.formSerializer).toString();
                if ((i = af.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                    const t = this.env && this.env.FormData;
                    return pf(i ? {
                        "files[]": e
                    } : e, t && new t, this.formSerializer)
                }
            }
            return a || r ? (t.setContentType("application/json", !1), function(e, t, n) {
                if (af.isString(e)) try {
                    return (t || JSON.parse)(e), af.trim(e)
                } catch (qh) {
                    if ("SyntaxError" !== qh.name) throw qh
                }
                return (n || JSON.stringify)(e)
            }(e)) : e
        }],
        transformResponse: [function(e) {
            const t = this.transitional || Af.transitional,
                n = t && t.forcedJSONParsing,
                r = "json" === this.responseType;
            if (af.isResponse(e) || af.isReadableStream(e)) return e;
            if (e && af.isString(e) && (n && !this.responseType || r)) {
                const n = !(t && t.silentJSONParsing) && r;
                try {
                    return JSON.parse(e, this.parseReviver)
                } catch (qh) {
                    if (n) {
                        if ("SyntaxError" === qh.name) throw uf.from(qh, uf.ERR_BAD_RESPONSE, this, null, this.response);
                        throw qh
                    }
                }
            }
            return e
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
            FormData: Rf.classes.FormData,
            Blob: Rf.classes.Blob
        },
        validateStatus: function(e) {
            return e >= 200 && e < 300
        },
        headers: {
            common: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": void 0
            }
        }
    };
    af.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
        Af.headers[e] = {}
    });
    const Ff = Af,
        Of = af.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
        Df = Symbol("internals");

    function Mf(e) {
        return e && String(e).trim().toLowerCase()
    }

    function Lf(e) {
        return !1 === e || null == e ? e : af.isArray(e) ? e.map(Lf) : String(e)
    }

    function _f(e, t, n, r, a) {
        return af.isFunction(r) ? r.call(this, t, n) : (a && (t = n), af.isString(t) ? af.isString(r) ? -1 !== t.indexOf(r) : af.isRegExp(r) ? r.test(t) : void 0 : void 0)
    }
    class zf {
        constructor(e) {
            e && this.set(e)
        }
        set(e, t, n) {
            const r = this;

            function a(e, t, n) {
                const a = Mf(t);
                if (!a) throw new Error("header name must be a non-empty string");
                const i = af.findKey(r, a);
                (!i || void 0 === r[i] || !0 === n || void 0 === n && !1 !== r[i]) && (r[i || t] = Lf(e))
            }
            const i = (e, t) => af.forEach(e, (e, n) => a(e, n, t));
            if (af.isPlainObject(e) || e instanceof this.constructor) i(e, t);
            else if (af.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())) i((e => {
                const t = {};
                let n, r, a;
                return e && e.split("\n").forEach(function(e) {
                    a = e.indexOf(":"), n = e.substring(0, a).trim().toLowerCase(), r = e.substring(a + 1).trim(), !n || t[n] && Of[n] || ("set-cookie" === n ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
                }), t
            })(e), t);
            else if (af.isObject(e) && af.isIterable(e)) {
                let n, r, a = {};
                for (const t of e) {
                    if (!af.isArray(t)) throw TypeError("Object iterator must return a key-value pair");
                    a[r = t[0]] = (n = a[r]) ? af.isArray(n) ? [...n, t[1]] : [n, t[1]] : t[1]
                }
                i(a, t)
            } else null != e && a(t, e, n);
            return this
        }
        get(e, t) {
            if (e = Mf(e)) {
                const n = af.findKey(this, e);
                if (n) {
                    const e = this[n];
                    if (!t) return e;
                    if (!0 === t) return function(e) {
                        const t = Object.create(null),
                            n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                        let r;
                        for (; r = n.exec(e);) t[r[1]] = r[2];
                        return t
                    }(e);
                    if (af.isFunction(t)) return t.call(this, e, n);
                    if (af.isRegExp(t)) return t.exec(e);
                    throw new TypeError("parser must be boolean|regexp|function")
                }
            }
        }
        has(e, t) {
            if (e = Mf(e)) {
                const n = af.findKey(this, e);
                return !(!n || void 0 === this[n] || t && !_f(0, this[n], n, t))
            }
            return !1
        }
        delete(e, t) {
            const n = this;
            let r = !1;

            function a(e) {
                if (e = Mf(e)) {
                    const a = af.findKey(n, e);
                    !a || t && !_f(0, n[a], a, t) || (delete n[a], r = !0)
                }
            }
            return af.isArray(e) ? e.forEach(a) : a(e), r
        }
        clear(e) {
            const t = Object.keys(this);
            let n = t.length,
                r = !1;
            for (; n--;) {
                const a = t[n];
                e && !_f(0, this[a], a, e, !0) || (delete this[a], r = !0)
            }
            return r
        }
        normalize(e) {
            const t = this,
                n = {};
            return af.forEach(this, (r, a) => {
                const i = af.findKey(n, a);
                if (i) return t[i] = Lf(r), void delete t[a];
                const o = e ? function(e) {
                    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n)
                }(a) : String(a).trim();
                o !== a && delete t[a], t[o] = Lf(r), n[o] = !0
            }), this
        }
        concat() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return this.constructor.concat(this, ...t)
        }
        toJSON(e) {
            const t = Object.create(null);
            return af.forEach(this, (n, r) => {
                null != n && !1 !== n && (t[r] = e && af.isArray(n) ? n.join(", ") : n)
            }), t
        }[Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]()
        }
        toString() {
            return Object.entries(this.toJSON()).map(e => {
                let [t, n] = e;
                return t + ": " + n
            }).join("\n")
        }
        getSetCookie() {
            return this.get("set-cookie") || []
        }
        get[Symbol.toStringTag]() {
            return "AxiosHeaders"
        }
        static from(e) {
            return e instanceof this ? e : new this(e)
        }
        static concat(e) {
            const t = new this(e);
            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
            return r.forEach(e => t.set(e)), t
        }
        static accessor(e) {
            const t = (this[Df] = this[Df] = {
                    accessors: {}
                }).accessors,
                n = this.prototype;

            function r(e) {
                const r = Mf(e);
                t[r] || (! function(e, t) {
                    const n = af.toCamelCase(" " + t);
                    ["get", "set", "has"].forEach(r => {
                        Object.defineProperty(e, r + n, {
                            value: function(e, n, a) {
                                return this[r].call(this, t, e, n, a)
                            },
                            configurable: !0
                        })
                    })
                }(n, e), t[r] = !0)
            }
            return af.isArray(e) ? e.forEach(r) : r(e), this
        }
    }
    zf.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), af.reduceDescriptors(zf.prototype, (e, t) => {
        let {
            value: n
        } = e, r = t[0].toUpperCase() + t.slice(1);
        return {
            get: () => n,
            set(e) {
                this[r] = e
            }
        }
    }), af.freezeMethods(zf);
    const If = zf;

    function Bf(e, t) {
        const n = this || Ff,
            r = t || n,
            a = If.from(r.headers);
        let i = r.data;
        return af.forEach(e, function(e) {
            i = e.call(n, i, a.normalize(), t ? t.status : void 0)
        }), a.normalize(), i
    }

    function Vf(e) {
        return !(!e || !e.__CANCEL__)
    }

    function Uf(e, t, n) {
        uf.call(this, null == e ? "canceled" : e, uf.ERR_CANCELED, t, n), this.name = "CanceledError"
    }
    af.inherits(Uf, uf, {
        __CANCEL__: !0
    });
    const Hf = Uf;

    function Wf(e, t, n) {
        const r = n.config.validateStatus;
        n.status && r && !r(n.status) ? t(new uf("Request failed with status code " + n.status, [uf.ERR_BAD_REQUEST, uf.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)) : e(n)
    }
    const qf = function(e, t) {
        e = e || 10;
        const n = new Array(e),
            r = new Array(e);
        let a, i = 0,
            o = 0;
        return t = void 0 !== t ? t : 1e3,
            function(s) {
                const l = Date.now(),
                    u = r[o];
                a || (a = l), n[i] = s, r[i] = l;
                let c = o,
                    d = 0;
                for (; c !== i;) d += n[c++], c %= e;
                if (i = (i + 1) % e, i === o && (o = (o + 1) % e), l - a < t) return;
                const f = u && l - u;
                return f ? Math.round(1e3 * d / f) : void 0
            }
    };
    const $f = function(e, t) {
            let n, r, a = 0,
                i = 1e3 / t;
            const o = function(t) {
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                a = i, n = null, r && (clearTimeout(r), r = null), e(...t)
            };
            return [function() {
                const e = Date.now(),
                    t = e - a;
                for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++) l[u] = arguments[u];
                t >= i ? o(l, e) : (n = l, r || (r = setTimeout(() => {
                    r = null, o(n)
                }, i - t)))
            }, () => n && o(n)]
        },
        Yf = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
                r = 0;
            const a = qf(50, 250);
            return $f(n => {
                const i = n.loaded,
                    o = n.lengthComputable ? n.total : void 0,
                    s = i - r,
                    l = a(s);
                r = i;
                e({
                    loaded: i,
                    total: o,
                    progress: o ? i / o : void 0,
                    bytes: s,
                    rate: l || void 0,
                    estimated: l && o && i <= o ? (o - i) / l : void 0,
                    event: n,
                    lengthComputable: null != o,
                    [t ? "download" : "upload"]: !0
                })
            }, n)
        },
        Kf = (e, t) => {
            const n = null != e;
            return [r => t[0]({
                lengthComputable: n,
                total: e,
                loaded: r
            }), t[1]]
        },
        Xf = e => function() {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return af.asap(() => e(...n))
        },
        Qf = Rf.hasStandardBrowserEnv ? ((e, t) => n => (n = new URL(n, Rf.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(Rf.origin), Rf.navigator && /(msie|trident)/i.test(Rf.navigator.userAgent)) : () => !0,
        Gf = Rf.hasStandardBrowserEnv ? {
            write(e, t, n, r, a, i, o) {
                if ("undefined" === typeof document) return;
                const s = ["".concat(e, "=").concat(encodeURIComponent(t))];
                af.isNumber(n) && s.push("expires=".concat(new Date(n).toUTCString())), af.isString(r) && s.push("path=".concat(r)), af.isString(a) && s.push("domain=".concat(a)), !0 === i && s.push("secure"), af.isString(o) && s.push("SameSite=".concat(o)), document.cookie = s.join("; ")
            },
            read(e) {
                if ("undefined" === typeof document) return null;
                const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
                return t ? decodeURIComponent(t[1]) : null
            },
            remove(e) {
                this.write(e, "", Date.now() - 864e5, "/")
            }
        } : {
            write() {},
            read: () => null,
            remove() {}
        };

    function Jf(e, t, n) {
        let r = !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
        return e && (r || 0 == n) ? function(e, t) {
            return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
        }(e, t) : t
    }
    const Zf = e => e instanceof If ? f({}, e) : e;

    function eh(e, t) {
        t = t || {};
        const n = {};

        function r(e, t, n, r) {
            return af.isPlainObject(e) && af.isPlainObject(t) ? af.merge.call({
                caseless: r
            }, e, t) : af.isPlainObject(t) ? af.merge({}, t) : af.isArray(t) ? t.slice() : t
        }

        function a(e, t, n, a) {
            return af.isUndefined(t) ? af.isUndefined(e) ? void 0 : r(void 0, e, 0, a) : r(e, t, 0, a)
        }

        function i(e, t) {
            if (!af.isUndefined(t)) return r(void 0, t)
        }

        function o(e, t) {
            return af.isUndefined(t) ? af.isUndefined(e) ? void 0 : r(void 0, e) : r(void 0, t)
        }

        function s(n, a, i) {
            return i in t ? r(n, a) : i in e ? r(void 0, n) : void 0
        }
        const l = {
            url: i,
            method: i,
            data: i,
            baseURL: o,
            transformRequest: o,
            transformResponse: o,
            paramsSerializer: o,
            timeout: o,
            timeoutMessage: o,
            withCredentials: o,
            withXSRFToken: o,
            adapter: o,
            responseType: o,
            xsrfCookieName: o,
            xsrfHeaderName: o,
            onUploadProgress: o,
            onDownloadProgress: o,
            decompress: o,
            maxContentLength: o,
            maxBodyLength: o,
            beforeRedirect: o,
            transport: o,
            httpAgent: o,
            httpsAgent: o,
            cancelToken: o,
            socketPath: o,
            responseEncoding: o,
            validateStatus: s,
            headers: (e, t, n) => a(Zf(e), Zf(t), 0, !0)
        };
        return af.forEach(Object.keys(f(f({}, e), t)), function(r) {
            const i = l[r] || a,
                o = i(e[r], t[r], r);
            af.isUndefined(o) && i !== s || (n[r] = o)
        }), n
    }
    const th = e => {
            const t = eh({}, e);
            let {
                data: n,
                withXSRFToken: r,
                xsrfHeaderName: a,
                xsrfCookieName: i,
                headers: o,
                auth: s
            } = t;
            if (t.headers = o = If.from(o), t.url = xf(Jf(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), s && o.set("Authorization", "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))), af.isFormData(n))
                if (Rf.hasStandardBrowserEnv || Rf.hasStandardBrowserWebWorkerEnv) o.setContentType(void 0);
                else if (af.isFunction(n.getHeaders)) {
                const e = n.getHeaders(),
                    t = ["content-type", "content-length"];
                Object.entries(e).forEach(e => {
                    let [n, r] = e;
                    t.includes(n.toLowerCase()) && o.set(n, r)
                })
            }
            if (Rf.hasStandardBrowserEnv && (r && af.isFunction(r) && (r = r(t)), r || !1 !== r && Qf(t.url))) {
                const e = a && i && Gf.read(i);
                e && o.set(a, e)
            }
            return t
        },
        nh = "undefined" !== typeof XMLHttpRequest && function(e) {
            return new Promise(function(t, n) {
                const r = th(e);
                let a = r.data;
                const i = If.from(r.headers).normalize();
                let o, s, l, u, c, {
                    responseType: d,
                    onUploadProgress: f,
                    onDownloadProgress: h
                } = r;

                function p() {
                    u && u(), c && c(), r.cancelToken && r.cancelToken.unsubscribe(o), r.signal && r.signal.removeEventListener("abort", o)
                }
                let m = new XMLHttpRequest;

                function g() {
                    if (!m) return;
                    const r = If.from("getAllResponseHeaders" in m && m.getAllResponseHeaders());
                    Wf(function(e) {
                        t(e), p()
                    }, function(e) {
                        n(e), p()
                    }, {
                        data: d && "text" !== d && "json" !== d ? m.response : m.responseText,
                        status: m.status,
                        statusText: m.statusText,
                        headers: r,
                        config: e,
                        request: m
                    }), m = null
                }
                m.open(r.method.toUpperCase(), r.url, !0), m.timeout = r.timeout, "onloadend" in m ? m.onloadend = g : m.onreadystatechange = function() {
                    m && 4 === m.readyState && (0 !== m.status || m.responseURL && 0 === m.responseURL.indexOf("file:")) && setTimeout(g)
                }, m.onabort = function() {
                    m && (n(new uf("Request aborted", uf.ECONNABORTED, e, m)), m = null)
                }, m.onerror = function(t) {
                    const r = t && t.message ? t.message : "Network Error",
                        a = new uf(r, uf.ERR_NETWORK, e, m);
                    a.event = t || null, n(a), m = null
                }, m.ontimeout = function() {
                    let t = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
                    const a = r.transitional || Sf;
                    r.timeoutErrorMessage && (t = r.timeoutErrorMessage), n(new uf(t, a.clarifyTimeoutError ? uf.ETIMEDOUT : uf.ECONNABORTED, e, m)), m = null
                }, void 0 === a && i.setContentType(null), "setRequestHeader" in m && af.forEach(i.toJSON(), function(e, t) {
                    m.setRequestHeader(t, e)
                }), af.isUndefined(r.withCredentials) || (m.withCredentials = !!r.withCredentials), d && "json" !== d && (m.responseType = r.responseType), h && ([l, c] = Yf(h, !0), m.addEventListener("progress", l)), f && m.upload && ([s, u] = Yf(f), m.upload.addEventListener("progress", s), m.upload.addEventListener("loadend", u)), (r.cancelToken || r.signal) && (o = t => {
                    m && (n(!t || t.type ? new Hf(null, e, m) : t), m.abort(), m = null)
                }, r.cancelToken && r.cancelToken.subscribe(o), r.signal && (r.signal.aborted ? o() : r.signal.addEventListener("abort", o)));
                const v = function(e) {
                    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                    return t && t[1] || ""
                }(r.url);
                v && -1 === Rf.protocols.indexOf(v) ? n(new uf("Unsupported protocol " + v + ":", uf.ERR_BAD_REQUEST, e)) : m.send(a || null)
            })
        },
        rh = (e, t) => {
            const {
                length: n
            } = e = e ? e.filter(Boolean) : [];
            if (t || n) {
                let n, r = new AbortController;
                const a = function(e) {
                    if (!n) {
                        n = !0, o();
                        const t = e instanceof Error ? e : this.reason;
                        r.abort(t instanceof uf ? t : new Hf(t instanceof Error ? t.message : t))
                    }
                };
                let i = t && setTimeout(() => {
                    i = null, a(new uf("timeout ".concat(t, " of ms exceeded"), uf.ETIMEDOUT))
                }, t);
                const o = () => {
                    e && (i && clearTimeout(i), i = null, e.forEach(e => {
                        e.unsubscribe ? e.unsubscribe(a) : e.removeEventListener("abort", a)
                    }), e = null)
                };
                e.forEach(e => e.addEventListener("abort", a));
                const {
                    signal: s
                } = r;
                return s.unsubscribe = () => af.asap(o), s
            }
        };

    function ah(e, t) {
        this.v = e, this.k = t
    }

    function ih(e) {
        return function() {
            return new oh(e.apply(this, arguments))
        }
    }

    function oh(e) {
        var t, n;

        function r(t, n) {
            try {
                var i = e[t](n),
                    o = i.value,
                    s = o instanceof ah;
                Promise.resolve(s ? o.v : o).then(function(n) {
                    if (s) {
                        var l = "return" === t ? "return" : "next";
                        if (!o.k || n.done) return r(l, n);
                        n = e[l](n).value
                    }
                    a(i.done ? "return" : "normal", n)
                }, function(e) {
                    r("throw", e)
                })
            } catch (e) {
                a("throw", e)
            }
        }

        function a(e, a) {
            switch (e) {
                case "return":
                    t.resolve({
                        value: a,
                        done: !0
                    });
                    break;
                case "throw":
                    t.reject(a);
                    break;
                default:
                    t.resolve({
                        value: a,
                        done: !1
                    })
            }(t = t.next) ? r(t.key, t.arg): n = null
        }
        this._invoke = function(e, a) {
            return new Promise(function(i, o) {
                var s = {
                    key: e,
                    arg: a,
                    resolve: i,
                    reject: o,
                    next: null
                };
                n ? n = n.next = s : (t = n = s, r(e, a))
            })
        }, "function" != typeof e.return && (this.return = void 0)
    }

    function sh(e) {
        return new ah(e, 0)
    }

    function lh(e) {
        var t = {},
            n = !1;

        function r(t, r) {
            return n = !0, r = new Promise(function(n) {
                n(e[t](r))
            }), {
                done: !1,
                value: new ah(r, 1)
            }
        }
        return t["undefined" != typeof Symbol && Symbol.iterator || "@@iterator"] = function() {
            return this
        }, t.next = function(e) {
            return n ? (n = !1, e) : r("next", e)
        }, "function" == typeof e.throw && (t.throw = function(e) {
            if (n) throw n = !1, e;
            return r("throw", e)
        }), "function" == typeof e.return && (t.return = function(e) {
            return n ? (n = !1, e) : r("return", e)
        }), t
    }

    function uh(e) {
        var t, n, r, a = 2;
        for ("undefined" != typeof Symbol && (n = Symbol.asyncIterator, r = Symbol.iterator); a--;) {
            if (n && null != (t = e[n])) return t.call(e);
            if (r && null != (t = e[r])) return new ch(t.call(e));
            n = "@@asyncIterator", r = "@@iterator"
        }
        throw new TypeError("Object is not async iterable")
    }

    function ch(e) {
        function t(e) {
            if (Object(e) !== e) return Promise.reject(new TypeError(e + " is not an object."));
            var t = e.done;
            return Promise.resolve(e.value).then(function(e) {
                return {
                    value: e,
                    done: t
                }
            })
        }
        return ch = function(e) {
            this.s = e, this.n = e.next
        }, ch.prototype = {
            s: null,
            n: null,
            next: function() {
                return t(this.n.apply(this.s, arguments))
            },
            return: function(e) {
                var n = this.s.return;
                return void 0 === n ? Promise.resolve({
                    value: e,
                    done: !0
                }) : t(n.apply(this.s, arguments))
            },
            throw: function(e) {
                var n = this.s.return;
                return void 0 === n ? Promise.reject(e) : t(n.apply(this.s, arguments))
            }
        }, new ch(e)
    }
    oh.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function() {
        return this
    }, oh.prototype.next = function(e) {
        return this._invoke("next", e)
    }, oh.prototype.throw = function(e) {
        return this._invoke("throw", e)
    }, oh.prototype.return = function(e) {
        return this._invoke("return", e)
    };
    const dh = function*(e, t) {
            let n = e.byteLength;
            if (!t || n < t) return void(yield e);
            let r, a = 0;
            for (; a < n;) r = a + t, yield e.slice(a, r), a = r
        },
        fh = function() {
            var e = ih(function*(e, t) {
                var n, r = !1,
                    a = !1;
                try {
                    for (var i, o = uh(hh(e)); r = !(i = yield sh(o.next())).done; r = !1) {
                        const e = i.value;
                        yield* lh(uh(dh(e, t)))
                    }
                } catch (s) {
                    a = !0, n = s
                } finally {
                    try {
                        r && null != o.return && (yield sh(o.return()))
                    } finally {
                        if (a) throw n
                    }
                }
            });
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }(),
        hh = function() {
            var e = ih(function*(e) {
                if (e[Symbol.asyncIterator]) return void(yield* lh(uh(e)));
                const t = e.getReader();
                try {
                    for (;;) {
                        const {
                            done: e,
                            value: n
                        } = yield sh(t.read());
                        if (e) break;
                        yield n
                    }
                } finally {
                    yield sh(t.cancel())
                }
            });
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        ph = (e, t, n, r) => {
            const a = fh(e, t);
            let i, o = 0,
                s = e => {
                    i || (i = !0, r && r(e))
                };
            return new ReadableStream({
                async pull(e) {
                    try {
                        const {
                            done: t,
                            value: r
                        } = await a.next();
                        if (t) return s(), void e.close();
                        let i = r.byteLength;
                        if (n) {
                            let e = o += i;
                            n(e)
                        }
                        e.enqueue(new Uint8Array(r))
                    } catch (t) {
                        throw s(t), t
                    }
                },
                cancel: e => (s(e), a.return())
            }, {
                highWaterMark: 2
            })
        },
        {
            isFunction: mh
        } = af,
        gh = (e => {
            let {
                Request: t,
                Response: n
            } = e;
            return {
                Request: t,
                Response: n
            }
        })(af.global),
        {
            ReadableStream: vh,
            TextEncoder: yh
        } = af.global,
        bh = function(e) {
            try {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return !!e(...n)
            } catch (qh) {
                return !1
            }
        },
        xh = e => {
            e = af.merge.call({
                skipUndefined: !0
            }, gh, e);
            const {
                fetch: t,
                Request: n,
                Response: r
            } = e, a = t ? mh(t) : "function" === typeof fetch, i = mh(n), o = mh(r);
            if (!a) return !1;
            const s = a && mh(vh),
                l = a && ("function" === typeof yh ? (u = new yh, e => u.encode(e)) : async e => new Uint8Array(await new n(e).arrayBuffer()));
            var u;
            const c = i && s && bh(() => {
                    let e = !1;
                    const t = new n(Rf.origin, {
                        body: new vh,
                        method: "POST",
                        get duplex() {
                            return e = !0, "half"
                        }
                    }).headers.has("Content-Type");
                    return e && !t
                }),
                d = o && s && bh(() => af.isReadableStream(new r("").body)),
                h = {
                    stream: d && (e => e.body)
                };
            a && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(e => {
                !h[e] && (h[e] = (t, n) => {
                    let r = t && t[e];
                    if (r) return r.call(t);
                    throw new uf("Response type '".concat(e, "' is not supported"), uf.ERR_NOT_SUPPORT, n)
                })
            });
            const p = async (e, t) => {
                const r = af.toFiniteNumber(e.getContentLength());
                return null == r ? (async e => {
                    if (null == e) return 0;
                    if (af.isBlob(e)) return e.size;
                    if (af.isSpecCompliantForm(e)) {
                        const t = new n(Rf.origin, {
                            method: "POST",
                            body: e
                        });
                        return (await t.arrayBuffer()).byteLength
                    }
                    return af.isArrayBufferView(e) || af.isArrayBuffer(e) ? e.byteLength : (af.isURLSearchParams(e) && (e += ""), af.isString(e) ? (await l(e)).byteLength : void 0)
                })(t) : r
            };
            return async e => {
                let {
                    url: a,
                    method: o,
                    data: s,
                    signal: l,
                    cancelToken: u,
                    timeout: m,
                    onDownloadProgress: g,
                    onUploadProgress: v,
                    responseType: y,
                    headers: b,
                    withCredentials: x = "same-origin",
                    fetchOptions: w
                } = th(e), S = t || fetch;
                y = y ? (y + "").toLowerCase() : "text";
                let k = rh([l, u && u.toAbortSignal()], m),
                    E = null;
                const T = k && k.unsubscribe && (() => {
                    k.unsubscribe()
                });
                let C;
                try {
                    if (v && c && "get" !== o && "head" !== o && 0 !== (C = await p(b, s))) {
                        let e, t = new n(a, {
                            method: "POST",
                            body: s,
                            duplex: "half"
                        });
                        if (af.isFormData(s) && (e = t.headers.get("content-type")) && b.setContentType(e), t.body) {
                            const [e, n] = Kf(C, Yf(Xf(v)));
                            s = ph(t.body, 65536, e, n)
                        }
                    }
                    af.isString(x) || (x = x ? "include" : "omit");
                    const t = i && "credentials" in n.prototype,
                        l = f(f({}, w), {}, {
                            signal: k,
                            method: o.toUpperCase(),
                            headers: b.normalize().toJSON(),
                            body: s,
                            duplex: "half",
                            credentials: t ? x : void 0
                        });
                    E = i && new n(a, l);
                    let u = await (i ? S(E, w) : S(a, l));
                    const m = d && ("stream" === y || "response" === y);
                    if (d && (g || m && T)) {
                        const e = {};
                        ["status", "statusText", "headers"].forEach(t => {
                            e[t] = u[t]
                        });
                        const t = af.toFiniteNumber(u.headers.get("content-length")),
                            [n, a] = g && Kf(t, Yf(Xf(g), !0)) || [];
                        u = new r(ph(u.body, 65536, n, () => {
                            a && a(), T && T()
                        }), e)
                    }
                    y = y || "text";
                    let P = await h[af.findKey(h, y) || "text"](u, e);
                    return !m && T && T(), await new Promise((t, n) => {
                        Wf(t, n, {
                            data: P,
                            headers: If.from(u.headers),
                            status: u.status,
                            statusText: u.statusText,
                            config: e,
                            request: E
                        })
                    })
                } catch (P) {
                    if (T && T(), P && "TypeError" === P.name && /Load failed|fetch/i.test(P.message)) throw Object.assign(new uf("Network Error", uf.ERR_NETWORK, e, E), {
                        cause: P.cause || P
                    });
                    throw uf.from(P, P && P.code, e, E)
                }
            }
        },
        wh = new Map,
        Sh = e => {
            let t = e && e.env || {};
            const {
                fetch: n,
                Request: r,
                Response: a
            } = t, i = [r, a, n];
            let o, s, l = i.length,
                u = wh;
            for (; l--;) o = i[l], s = u.get(o), void 0 === s && u.set(o, s = l ? new Map : xh(t)), u = s;
            return s
        },
        kh = (Sh(), {
            http: null,
            xhr: nh,
            fetch: {
                get: Sh
            }
        });
    af.forEach(kh, (e, t) => {
        if (e) {
            try {
                Object.defineProperty(e, "name", {
                    value: t
                })
            } catch (qh) {}
            Object.defineProperty(e, "adapterName", {
                value: t
            })
        }
    });
    const Eh = e => "- ".concat(e),
        Th = e => af.isFunction(e) || null === e || !1 === e;
    const Ch = {
        getAdapter: function(e, t) {
            e = af.isArray(e) ? e : [e];
            const {
                length: n
            } = e;
            let r, a;
            const i = {};
            for (let o = 0; o < n; o++) {
                let n;
                if (r = e[o], a = r, !Th(r) && (a = kh[(n = String(r)).toLowerCase()], void 0 === a)) throw new uf("Unknown adapter '".concat(n, "'"));
                if (a && (af.isFunction(a) || (a = a.get(t)))) break;
                i[n || "#" + o] = a
            }
            if (!a) {
                const e = Object.entries(i).map(e => {
                    let [t, n] = e;
                    return "adapter ".concat(t, " ") + (!1 === n ? "is not supported by the environment" : "is not available in the build")
                });
                let t = n ? e.length > 1 ? "since :\n" + e.map(Eh).join("\n") : " " + Eh(e[0]) : "as no adapter specified";
                throw new uf("There is no suitable adapter to dispatch the request " + t, "ERR_NOT_SUPPORT")
            }
            return a
        },
        adapters: kh
    };

    function Ph(e) {
        if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Hf(null, e)
    }

    function Nh(e) {
        Ph(e), e.headers = If.from(e.headers), e.data = Bf.call(e, e.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1);
        return Ch.getAdapter(e.adapter || Ff.adapter, e)(e).then(function(t) {
            return Ph(e), t.data = Bf.call(e, e.transformResponse, t), t.headers = If.from(t.headers), t
        }, function(t) {
            return Vf(t) || (Ph(e), t && t.response && (t.response.data = Bf.call(e, e.transformResponse, t.response), t.response.headers = If.from(t.response.headers))), Promise.reject(t)
        })
    }
    const Rh = "1.13.2",
        jh = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
        jh[e] = function(n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
        }
    });
    const Ah = {};
    jh.transitional = function(e, t, n) {
        function r(e, t) {
            return "[Axios v" + Rh + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
        }
        return (n, a, i) => {
            if (!1 === e) throw new uf(r(a, " has been removed" + (t ? " in " + t : "")), uf.ERR_DEPRECATED);
            return t && !Ah[a] && (Ah[a] = !0, console.warn(r(a, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, a, i)
        }
    }, jh.spelling = function(e) {
        return (t, n) => (console.warn("".concat(n, " is likely a misspelling of ").concat(e)), !0)
    };
    const Fh = {
            assertOptions: function(e, t, n) {
                if ("object" !== typeof e) throw new uf("options must be an object", uf.ERR_BAD_OPTION_VALUE);
                const r = Object.keys(e);
                let a = r.length;
                for (; a-- > 0;) {
                    const i = r[a],
                        o = t[i];
                    if (o) {
                        const t = e[i],
                            n = void 0 === t || o(t, i, e);
                        if (!0 !== n) throw new uf("option " + i + " must be " + n, uf.ERR_BAD_OPTION_VALUE);
                        continue
                    }
                    if (!0 !== n) throw new uf("Unknown option " + i, uf.ERR_BAD_OPTION)
                }
            },
            validators: jh
        },
        Oh = Fh.validators;
    class Dh {
        constructor(e) {
            this.defaults = e || {}, this.interceptors = {
                request: new wf,
                response: new wf
            }
        }
        async request(e, t) {
            try {
                return await this._request(e, t)
            } catch (n) {
                if (n instanceof Error) {
                    let e = {};
                    Error.captureStackTrace ? Error.captureStackTrace(e) : e = new Error;
                    const t = e.stack ? e.stack.replace(/^.+\n/, "") : "";
                    try {
                        n.stack ? t && !String(n.stack).endsWith(t.replace(/^.+\n.+\n/, "")) && (n.stack += "\n" + t) : n.stack = t
                    } catch (qh) {}
                }
                throw n
            }
        }
        _request(e, t) {
            "string" === typeof e ? (t = t || {}).url = e : t = e || {}, t = eh(this.defaults, t);
            const {
                transitional: n,
                paramsSerializer: r,
                headers: a
            } = t;
            void 0 !== n && Fh.assertOptions(n, {
                silentJSONParsing: Oh.transitional(Oh.boolean),
                forcedJSONParsing: Oh.transitional(Oh.boolean),
                clarifyTimeoutError: Oh.transitional(Oh.boolean)
            }, !1), null != r && (af.isFunction(r) ? t.paramsSerializer = {
                serialize: r
            } : Fh.assertOptions(r, {
                encode: Oh.function,
                serialize: Oh.function
            }, !0)), void 0 !== t.allowAbsoluteUrls || (void 0 !== this.defaults.allowAbsoluteUrls ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), Fh.assertOptions(t, {
                baseUrl: Oh.spelling("baseURL"),
                withXsrfToken: Oh.spelling("withXSRFToken")
            }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
            let i = a && af.merge(a.common, a[t.method]);
            a && af.forEach(["delete", "get", "head", "post", "put", "patch", "common"], e => {
                delete a[e]
            }), t.headers = If.concat(i, a);
            const o = [];
            let s = !0;
            this.interceptors.request.forEach(function(e) {
                "function" === typeof e.runWhen && !1 === e.runWhen(t) || (s = s && e.synchronous, o.unshift(e.fulfilled, e.rejected))
            });
            const l = [];
            let u;
            this.interceptors.response.forEach(function(e) {
                l.push(e.fulfilled, e.rejected)
            });
            let c, d = 0;
            if (!s) {
                const e = [Nh.bind(this), void 0];
                for (e.unshift(...o), e.push(...l), c = e.length, u = Promise.resolve(t); d < c;) u = u.then(e[d++], e[d++]);
                return u
            }
            c = o.length;
            let f = t;
            for (; d < c;) {
                const e = o[d++],
                    t = o[d++];
                try {
                    f = e(f)
                } catch (h) {
                    t.call(this, h);
                    break
                }
            }
            try {
                u = Nh.call(this, f)
            } catch (h) {
                return Promise.reject(h)
            }
            for (d = 0, c = l.length; d < c;) u = u.then(l[d++], l[d++]);
            return u
        }
        getUri(e) {
            return xf(Jf((e = eh(this.defaults, e)).baseURL, e.url, e.allowAbsoluteUrls), e.params, e.paramsSerializer)
        }
    }
    af.forEach(["delete", "get", "head", "options"], function(e) {
        Dh.prototype[e] = function(t, n) {
            return this.request(eh(n || {}, {
                method: e,
                url: t,
                data: (n || {}).data
            }))
        }
    }), af.forEach(["post", "put", "patch"], function(e) {
        function t(t) {
            return function(n, r, a) {
                return this.request(eh(a || {}, {
                    method: e,
                    headers: t ? {
                        "Content-Type": "multipart/form-data"
                    } : {},
                    url: n,
                    data: r
                }))
            }
        }
        Dh.prototype[e] = t(), Dh.prototype[e + "Form"] = t(!0)
    });
    const Mh = Dh;
    class Lh {
        constructor(e) {
            if ("function" !== typeof e) throw new TypeError("executor must be a function.");
            let t;
            this.promise = new Promise(function(e) {
                t = e
            });
            const n = this;
            this.promise.then(e => {
                if (!n._listeners) return;
                let t = n._listeners.length;
                for (; t-- > 0;) n._listeners[t](e);
                n._listeners = null
            }), this.promise.then = e => {
                let t;
                const r = new Promise(e => {
                    n.subscribe(e), t = e
                }).then(e);
                return r.cancel = function() {
                    n.unsubscribe(t)
                }, r
            }, e(function(e, r, a) {
                n.reason || (n.reason = new Hf(e, r, a), t(n.reason))
            })
        }
        throwIfRequested() {
            if (this.reason) throw this.reason
        }
        subscribe(e) {
            this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
        }
        unsubscribe(e) {
            if (!this._listeners) return;
            const t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1)
        }
        toAbortSignal() {
            const e = new AbortController,
                t = t => {
                    e.abort(t)
                };
            return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal
        }
        static source() {
            let e;
            return {
                token: new Lh(function(t) {
                    e = t
                }),
                cancel: e
            }
        }
    }
    const _h = Lh;
    const zh = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
        WebServerIsDown: 521,
        ConnectionTimedOut: 522,
        OriginIsUnreachable: 523,
        TimeoutOccurred: 524,
        SslHandshakeFailed: 525,
        InvalidSslCertificate: 526
    };
    Object.entries(zh).forEach(e => {
        let [t, n] = e;
        zh[n] = t
    });
    const Ih = zh;
    const Bh = function e(t) {
        const n = new Mh(t),
            r = yd(Mh.prototype.request, n);
        return af.extend(r, Mh.prototype, n, {
            allOwnKeys: !0
        }), af.extend(r, n, null, {
            allOwnKeys: !0
        }), r.create = function(n) {
            return e(eh(t, n))
        }, r
    }(Ff);
    Bh.Axios = Mh, Bh.CanceledError = Hf, Bh.CancelToken = _h, Bh.isCancel = Vf, Bh.VERSION = Rh, Bh.toFormData = pf, Bh.AxiosError = uf, Bh.Cancel = Bh.CanceledError, Bh.all = function(e) {
        return Promise.all(e)
    }, Bh.spread = function(e) {
        return function(t) {
            return e.apply(null, t)
        }
    }, Bh.isAxiosError = function(e) {
        return af.isObject(e) && !0 === e.isAxiosError
    }, Bh.mergeConfig = eh, Bh.AxiosHeaders = If, Bh.formToJSON = e => jf(af.isHTMLForm(e) ? new FormData(e) : e), Bh.getAdapter = Ch.getAdapter, Bh.HttpStatusCode = Ih, Bh.default = Bh;
    const Vh = Bh,
        Uh = "".concat("https://pdf-web-builder-5.preview.emergentagent.com", "/api"),
        Hh = () => {
            const [e, t] = (0, a.useState)({
                name: "",
                email: "",
                company: "",
                phone: "",
                message: ""
            }), [n, r] = (0, a.useState)(!1), i = n => {
                t(f(f({}, e), {}, {
                    [n.target.name]: n.target.value
                }))
            }, o = [{
                icon: pd,
                title: "Phone",
                details: ["(+63 46) 437-7204", "(+63 46) 477-2499"]
            }, {
                icon: md,
                title: "Email",
                details: ["sales@macrowiring.co"]
            }, {
                icon: gd,
                title: "Location",
                details: ["Lot 3 Block 17 Phase 4", "Cavite Economic Zone", "Rosario, Cavite, Philippines 4106"]
            }];
            return (0, sn.jsxs)("div", {
                className: "min-h-screen",
                children: [(0, sn.jsxs)("section", {
                    className: "relative h-[50vh] flex items-center justify-center overflow-hidden",
                    children: [(0, sn.jsxs)("div", {
                        className: "absolute inset-0",
                        children: [(0, sn.jsx)("img", {
                            src: "https://images.pexels.com/photos/6524413/pexels-photo-6524413.jpeg",
                            alt: "Contact",
                            className: "w-full h-full object-cover hero-image"
                        }), (0, sn.jsx)("div", {
                            className: "absolute inset-0 gradient-overlay"
                        })]
                    }), (0, sn.jsx)("div", {
                        className: "relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center text-white",
                        children: (0, sn.jsxs)(Kc.div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .8
                            },
                            children: [(0, sn.jsx)("p", {
                                className: "text-sm font-medium uppercase tracking-widest text-slate-300 mb-4",
                                children: "Contact Us"
                            }), (0, sn.jsx)("h1", {
                                className: "font-heading text-5xl md:text-7xl font-bold tracking-tight uppercase",
                                children: "GET IN TOUCH"
                            })]
                        })
                    })]
                }), (0, sn.jsx)("section", {
                    className: "py-20 md:py-32",
                    children: (0, sn.jsx)("div", {
                        className: "max-w-7xl mx-auto px-6 md:px-12",
                        children: (0, sn.jsxs)("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-16",
                            children: [(0, sn.jsxs)(Kc.div, {
                                initial: {
                                    opacity: 0,
                                    x: -30
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: !0
                                },
                                children: [(0, sn.jsx)("h2", {
                                    className: "font-heading text-3xl md:text-4xl font-bold uppercase text-industrial-blue mb-6",
                                    children: "SEND US A MESSAGE"
                                }), (0, sn.jsx)("p", {
                                    className: "text-slate-600 mb-8 leading-relaxed",
                                    children: "Fill out the form below and our team will get back to you within 24 hours."
                                }), (0, sn.jsxs)("form", {
                                    onSubmit: async n => {
                                        n.preventDefault(), r(!0);
                                        try {
                                            await Vh.post("".concat(Uh, "/contact"), e), Gt.success("Message sent successfully! We'll get back to you soon."), t({
                                                name: "",
                                                email: "",
                                                company: "",
                                                phone: "",
                                                message: ""
                                            })
                                        } catch (a) {
                                            console.error("Error submitting form:", a), Gt.error("Failed to send message. Please try again.")
                                        } finally {
                                            r(!1)
                                        }
                                    },
                                    className: "space-y-6",
                                    "data-testid": "contact-form",
                                    children: [(0, sn.jsxs)("div", {
                                        children: [(0, sn.jsx)("label", {
                                            htmlFor: "name",
                                            className: "block text-sm font-medium uppercase tracking-wider text-slate-700 mb-2",
                                            children: "Name *"
                                        }), (0, sn.jsx)("input", {
                                            type: "text",
                                            id: "name",
                                            name: "name",
                                            "data-testid": "contact-name-input",
                                            required: !0,
                                            value: e.name,
                                            onChange: i,
                                            className: "w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:border-electric-blue transition-colors"
                                        })]
                                    }), (0, sn.jsxs)("div", {
                                        children: [(0, sn.jsx)("label", {
                                            htmlFor: "email",
                                            className: "block text-sm font-medium uppercase tracking-wider text-slate-700 mb-2",
                                            children: "Email *"
                                        }), (0, sn.jsx)("input", {
                                            type: "email",
                                            id: "email",
                                            name: "email",
                                            "data-testid": "contact-email-input",
                                            required: !0,
                                            value: e.email,
                                            onChange: i,
                                            className: "w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:border-electric-blue transition-colors"
                                        })]
                                    }), (0, sn.jsxs)("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                        children: [(0, sn.jsxs)("div", {
                                            children: [(0, sn.jsx)("label", {
                                                htmlFor: "company",
                                                className: "block text-sm font-medium uppercase tracking-wider text-slate-700 mb-2",
                                                children: "Company"
                                            }), (0, sn.jsx)("input", {
                                                type: "text",
                                                id: "company",
                                                name: "company",
                                                "data-testid": "contact-company-input",
                                                value: e.company,
                                                onChange: i,
                                                className: "w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:border-electric-blue transition-colors"
                                            })]
                                        }), (0, sn.jsxs)("div", {
                                            children: [(0, sn.jsx)("label", {
                                                htmlFor: "phone",
                                                className: "block text-sm font-medium uppercase tracking-wider text-slate-700 mb-2",
                                                children: "Phone"
                                            }), (0, sn.jsx)("input", {
                                                type: "tel",
                                                id: "phone",
                                                name: "phone",
                                                "data-testid": "contact-phone-input",
                                                value: e.phone,
                                                onChange: i,
                                                className: "w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:border-electric-blue transition-colors"
                                            })]
                                        })]
                                    }), (0, sn.jsxs)("div", {
                                        children: [(0, sn.jsx)("label", {
                                            htmlFor: "message",
                                            className: "block text-sm font-medium uppercase tracking-wider text-slate-700 mb-2",
                                            children: "Message *"
                                        }), (0, sn.jsx)("textarea", {
                                            id: "message",
                                            name: "message",
                                            "data-testid": "contact-message-input",
                                            required: !0,
                                            rows: 6,
                                            value: e.message,
                                            onChange: i,
                                            className: "w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:border-electric-blue transition-colors resize-none"
                                        })]
                                    }), (0, sn.jsxs)("button", {
                                        type: "submit",
                                        "data-testid": "contact-submit-btn",
                                        disabled: n,
                                        className: "bg-slate-900 text-white hover:bg-electric-blue rounded-sm px-8 py-4 uppercase tracking-widest font-bold transition-all duration-300 industrial-shadow inline-flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: [n ? "Sending..." : "Send Message", (0, sn.jsx)(vd, {
                                            className: "w-5 h-5"
                                        })]
                                    })]
                                })]
                            }), (0, sn.jsxs)(Kc.div, {
                                initial: {
                                    opacity: 0,
                                    x: 30
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: !0
                                },
                                children: [(0, sn.jsx)("h2", {
                                    className: "font-heading text-3xl md:text-4xl font-bold uppercase text-industrial-blue mb-6",
                                    children: "CONTACT INFORMATION"
                                }), (0, sn.jsx)("p", {
                                    className: "text-slate-600 mb-8 leading-relaxed",
                                    children: "Have questions? We're here to help. Reach out through any of these channels."
                                }), (0, sn.jsx)("div", {
                                    className: "space-y-8",
                                    children: o.map((e, t) => (0, sn.jsxs)("div", {
                                        className: "flex gap-4",
                                        "data-testid": "contact-info-".concat(t),
                                        children: [(0, sn.jsx)("div", {
                                            className: "w-12 h-12 bg-electric-blue flex items-center justify-center flex-shrink-0",
                                            children: (0, sn.jsx)(e.icon, {
                                                className: "w-6 h-6 text-white"
                                            })
                                        }), (0, sn.jsxs)("div", {
                                            children: [(0, sn.jsx)("h3", {
                                                className: "font-heading text-lg font-bold uppercase text-industrial-blue mb-2",
                                                children: e.title
                                            }), e.details.map((e, t) => (0, sn.jsx)("p", {
                                                className: "text-slate-600",
                                                children: e
                                            }, t))]
                                        })]
                                    }, t))
                                }), (0, sn.jsxs)("div", {
                                    className: "mt-12 bg-slate-50 p-8",
                                    children: [(0, sn.jsx)("h3", {
                                        className: "font-heading text-xl font-bold uppercase text-industrial-blue mb-4",
                                        children: "BUSINESS HOURS"
                                    }), (0, sn.jsxs)("div", {
                                        className: "space-y-2 text-slate-600",
                                        children: [(0, sn.jsxs)("p", {
                                            className: "flex justify-between",
                                            children: [(0, sn.jsx)("span", {
                                                children: "Monday - Friday:"
                                            }), (0, sn.jsx)("span", {
                                                className: "font-medium",
                                                children: "8:00 AM - 5:00 PM"
                                            })]
                                        }), (0, sn.jsxs)("p", {
                                            className: "flex justify-between",
                                            children: [(0, sn.jsx)("span", {
                                                children: "Saturday:"
                                            }), (0, sn.jsx)("span", {
                                                className: "font-medium",
                                                children: "9:00 AM - 1:00 PM"
                                            })]
                                        }), (0, sn.jsxs)("p", {
                                            className: "flex justify-between",
                                            children: [(0, sn.jsx)("span", {
                                                children: "Sunday:"
                                            }), (0, sn.jsx)("span", {
                                                className: "font-medium",
                                                children: "Closed"
                                            })]
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })
                }), (0, sn.jsx)("section", {
                    className: "py-20 bg-industrial-blue text-white",
                    children: (0, sn.jsxs)("div", {
                        className: "max-w-4xl mx-auto px-6 md:px-12 text-center",
                        children: [(0, sn.jsx)("h2", {
                            className: "font-heading text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4",
                            children: "READY TO START A PROJECT?"
                        }), (0, sn.jsx)("p", {
                            className: "text-slate-300 text-lg",
                            children: "Let's discuss how we can help bring your wire harness requirements to life"
                        })]
                    })
                })]
            })
        };
    const Wh = function() {
        return (0, sn.jsxs)("div", {
            className: "App",
            children: [(0, sn.jsx)(Ct, {
                children: (0, sn.jsx)(vn, {
                    children: (0, sn.jsxs)(Ye, {
                        children: [(0, sn.jsx)(qe, {
                            path: "/",
                            element: (0, sn.jsx)(Zc, {})
                        }), (0, sn.jsx)(qe, {
                            path: "/products",
                            element: (0, sn.jsx)(ad, {})
                        }), (0, sn.jsx)(qe, {
                            path: "/services",
                            element: (0, sn.jsx)(ld, {})
                        }), (0, sn.jsx)(qe, {
                            path: "/about",
                            element: (0, sn.jsx)(hd, {})
                        }), (0, sn.jsx)(qe, {
                            path: "/contact",
                            element: (0, sn.jsx)(Hh, {})
                        })]
                    })
                })
            }), (0, sn.jsx)(ln, {
                position: "top-right"
            })]
        })
    };
    o.createRoot(document.getElementById("root")).render((0, sn.jsx)(a.StrictMode, {
        children: (0, sn.jsx)(Wh, {})
    }))
})();
//# sourceMappingURL=main.0a7efda4.js.map