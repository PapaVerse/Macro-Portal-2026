import {
    r as br,
    a,
    R as Sr,
    b as ft,
    c as wc,
    d as Ne
} from "./chunk-CMjeC7eR.js";
var Tn = {
        exports: {}
    },
    ot = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wo;

function xc() {
    if (Wo) return ot;
    Wo = 1;
    var e = br(),
        t = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function i(c, l, u) {
        var f, d = {},
            m = null,
            v = null;
        u !== void 0 && (m = "" + u), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (v = l.ref);
        for (f in l) o.call(l, f) && !s.hasOwnProperty(f) && (d[f] = l[f]);
        if (c && c.defaultProps)
            for (f in l = c.defaultProps, l) d[f] === void 0 && (d[f] = l[f]);
        return {
            $$typeof: t,
            type: c,
            key: m,
            ref: v,
            props: d,
            _owner: r.current
        }
    }
    return ot.Fragment = n, ot.jsx = i, ot.jsxs = i, ot
}
var Ko;

function yc() {
    return Ko || (Ko = 1, Tn.exports = xc()), Tn.exports
}
var p = yc();

function R(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(r) {
        if (e ? .(r), n === !1 || !r.defaultPrevented) return t ? .(r)
    }
}

function Uo(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t)
}

function Kt(...e) {
    return t => {
        let n = !1;
        const o = e.map(r => {
            const s = Uo(r, t);
            return !n && typeof s == "function" && (n = !0), s
        });
        if (n) return () => {
            for (let r = 0; r < o.length; r++) {
                const s = o[r];
                typeof s == "function" ? s() : Uo(e[r], null)
            }
        }
    }
}

function j(...e) {
    return a.useCallback(Kt(...e), e)
}

function bc(e, t) {
    const n = a.createContext(t),
        o = s => {
            const {
                children: i,
                ...c
            } = s, l = a.useMemo(() => c, Object.values(c));
            return p.jsx(n.Provider, {
                value: l,
                children: i
            })
        };
    o.displayName = e + "Provider";

    function r(s) {
        const i = a.useContext(n);
        if (i) return i;
        if (t !== void 0) return t;
        throw new Error(`\`${s}\` must be used within \`${e}\``)
    }
    return [o, r]
}

function Z(e, t = []) {
    let n = [];

    function o(s, i) {
        const c = a.createContext(i),
            l = n.length;
        n = [...n, i];
        const u = d => {
            const {
                scope: m,
                children: v,
                ...w
            } = d, h = m ? .[e] ? .[l] || c, g = a.useMemo(() => w, Object.values(w));
            return p.jsx(h.Provider, {
                value: g,
                children: v
            })
        };
        u.displayName = s + "Provider";

        function f(d, m) {
            const v = m ? .[e] ? .[l] || c,
                w = a.useContext(v);
            if (w) return w;
            if (i !== void 0) return i;
            throw new Error(`\`${d}\` must be used within \`${s}\``)
        }
        return [u, f]
    }
    const r = () => {
        const s = n.map(i => a.createContext(i));
        return function(c) {
            const l = c ? .[e] || s;
            return a.useMemo(() => ({
                [`__scope${e}`]: { ...c,
                    [e]: l
                }
            }), [c, l])
        }
    };
    return r.scopeName = e, [o, Sc(r, ...t)]
}

function Sc(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const o = e.map(r => ({
            useScope: r(),
            scopeName: r.scopeName
        }));
        return function(s) {
            const i = o.reduce((c, {
                useScope: l,
                scopeName: u
            }) => {
                const d = l(s)[`__scope${u}`];
                return { ...c,
                    ...d
                }
            }, {});
            return a.useMemo(() => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    };
    return n.scopeName = t.scopeName, n
}
var z = globalThis ? .document ? a.useLayoutEffect : () => {},
    Cc = Sr[" useId ".trim().toString()] || (() => {}),
    Ec = 0;

function se(e) {
    const [t, n] = a.useState(Cc());
    return z(() => {
        n(o => o ? ? String(Ec++))
    }, [e]), t ? `radix-${t}` : ""
}
var Rc = Sr[" useInsertionEffect ".trim().toString()] || z;

function ae({
    prop: e,
    defaultProp: t,
    onChange: n = () => {},
    caller: o
}) {
    const [r, s, i] = Pc({
        defaultProp: t,
        onChange: n
    }), c = e !== void 0, l = c ? e : r; {
        const f = a.useRef(e !== void 0);
        a.useEffect(() => {
            const d = f.current;
            if (d !== c) {
                const m = d ? "controlled" : "uncontrolled",
                    v = c ? "controlled" : "uncontrolled"
            }
            f.current = c
        }, [c, o])
    }
    const u = a.useCallback(f => {
        if (c) {
            const d = Tc(f) ? f(e) : f;
            d !== e && i.current ? .(d)
        } else s(f)
    }, [c, e, s, i]);
    return [l, u]
}

function Pc({
    defaultProp: e,
    onChange: t
}) {
    const [n, o] = a.useState(e), r = a.useRef(n), s = a.useRef(t);
    return Rc(() => {
        s.current = t
    }, [t]), a.useEffect(() => {
        r.current !== n && (s.current ? .(n), r.current = n)
    }, [n, r]), [n, o, s]
}

function Tc(e) {
    return typeof e == "function"
}

function Pe(e) {
    const t = _c(e),
        n = a.forwardRef((o, r) => {
            const {
                children: s,
                ...i
            } = o, c = a.Children.toArray(s), l = c.find(Ic);
            if (l) {
                const u = l.props.children,
                    f = c.map(d => d === l ? a.Children.count(u) > 1 ? a.Children.only(null) : a.isValidElement(u) ? u.props.children : null : d);
                return p.jsx(t, { ...i,
                    ref: r,
                    children: a.isValidElement(u) ? a.cloneElement(u, void 0, f) : null
                })
            }
            return p.jsx(t, { ...i,
                ref: r,
                children: s
            })
        });
    return n.displayName = `${e}.Slot`, n
}
var Vm = Pe("Slot");

function _c(e) {
    const t = a.forwardRef((n, o) => {
        const {
            children: r,
            ...s
        } = n;
        if (a.isValidElement(r)) {
            const i = Dc(r),
                c = Mc(s, r.props);
            return r.type !== a.Fragment && (c.ref = o ? Kt(o, i) : i), a.cloneElement(r, c)
        }
        return a.Children.count(r) > 1 ? a.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var Cr = Symbol("radix.slottable");

function Ac(e) {
    const t = ({
        children: n
    }) => p.jsx(p.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`, t.__radixId = Cr, t
}

function Ic(e) {
    return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Cr
}

function Mc(e, t) {
    const n = { ...t
    };
    for (const o in t) {
        const r = e[o],
            s = t[o];
        /^on[A-Z]/.test(o) ? r && s ? n[o] = (...c) => {
            const l = s(...c);
            return r(...c), l
        } : r && (n[o] = r) : o === "style" ? n[o] = { ...r,
            ...s
        } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function Dc(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref") ? .get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var Oc = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    A = Oc.reduce((e, t) => {
        const n = Pe(`Primitive.${t}`),
            o = a.forwardRef((r, s) => {
                const {
                    asChild: i,
                    ...c
                } = r, l = i ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), p.jsx(l, { ...c,
                    ref: s
                })
            });
        return o.displayName = `Primitive.${t}`, { ...e,
            [t]: o
        }
    }, {});

function ao(e, t) {
    e && ft.flushSync(() => e.dispatchEvent(t))
}

function G(e) {
    const t = a.useRef(e);
    return a.useEffect(() => {
        t.current = e
    }), a.useMemo(() => (...n) => t.current ? .(...n), [])
}

function Nc(e, t = globalThis ? .document) {
    const n = G(e);
    a.useEffect(() => {
        const o = r => {
            r.key === "Escape" && n(r)
        };
        return t.addEventListener("keydown", o, {
            capture: !0
        }), () => t.removeEventListener("keydown", o, {
            capture: !0
        })
    }, [n, t])
}
var Lc = "DismissableLayer",
    Vn = "dismissableLayer.update",
    kc = "dismissableLayer.pointerDownOutside",
    jc = "dismissableLayer.focusOutside",
    Go, Er = a.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    $e = a.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: r,
            onFocusOutside: s,
            onInteractOutside: i,
            onDismiss: c,
            ...l
        } = e, u = a.useContext(Er), [f, d] = a.useState(null), m = f ? .ownerDocument ? ? globalThis ? .document, [, v] = a.useState({}), w = j(t, E => d(E)), h = Array.from(u.layers), [g] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), x = h.indexOf(g), y = f ? h.indexOf(f) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, S = y >= x, C = $c(E => {
            const I = E.target,
                D = [...u.branches].some(O => O.contains(I));
            !S || D || (r ? .(E), i ? .(E), E.defaultPrevented || c ? .())
        }, m), P = Bc(E => {
            const I = E.target;
            [...u.branches].some(O => O.contains(I)) || (s ? .(E), i ? .(E), E.defaultPrevented || c ? .())
        }, m);
        return Nc(E => {
            y === u.layers.size - 1 && (o ? .(E), !E.defaultPrevented && c && (E.preventDefault(), c()))
        }, m), a.useEffect(() => {
            if (f) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Go = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), zo(), () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Go)
            }
        }, [f, m, n, u]), a.useEffect(() => () => {
            f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), zo())
        }, [f, u]), a.useEffect(() => {
            const E = () => v({});
            return document.addEventListener(Vn, E), () => document.removeEventListener(Vn, E)
        }, []), p.jsx(A.div, { ...l,
            ref: w,
            style: {
                pointerEvents: b ? S ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: R(e.onFocusCapture, P.onFocusCapture),
            onBlurCapture: R(e.onBlurCapture, P.onBlurCapture),
            onPointerDownCapture: R(e.onPointerDownCapture, C.onPointerDownCapture)
        })
    });
$e.displayName = Lc;
var Fc = "DismissableLayerBranch",
    Rr = a.forwardRef((e, t) => {
        const n = a.useContext(Er),
            o = a.useRef(null),
            r = j(t, o);
        return a.useEffect(() => {
            const s = o.current;
            if (s) return n.branches.add(s), () => {
                n.branches.delete(s)
            }
        }, [n.branches]), p.jsx(A.div, { ...e,
            ref: r
        })
    });
Rr.displayName = Fc;

function $c(e, t = globalThis ? .document) {
    const n = G(e),
        o = a.useRef(!1),
        r = a.useRef(() => {});
    return a.useEffect(() => {
        const s = c => {
                if (c.target && !o.current) {
                    let l = function() {
                        Pr(kc, n, u, {
                            discrete: !0
                        })
                    };
                    const u = {
                        originalEvent: c
                    };
                    c.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = l, t.addEventListener("click", r.current, {
                        once: !0
                    })) : l()
                } else t.removeEventListener("click", r.current);
                o.current = !1
            },
            i = window.setTimeout(() => {
                t.addEventListener("pointerdown", s)
            }, 0);
        return () => {
            window.clearTimeout(i), t.removeEventListener("pointerdown", s), t.removeEventListener("click", r.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => o.current = !0
    }
}

function Bc(e, t = globalThis ? .document) {
    const n = G(e),
        o = a.useRef(!1);
    return a.useEffect(() => {
        const r = s => {
            s.target && !o.current && Pr(jc, n, {
                originalEvent: s
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r)
    }, [t, n]), {
        onFocusCapture: () => o.current = !0,
        onBlurCapture: () => o.current = !1
    }
}

function zo() {
    const e = new CustomEvent(Vn);
    document.dispatchEvent(e)
}

function Pr(e, t, n, {
    discrete: o
}) {
    const r = n.originalEvent.target,
        s = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && r.addEventListener(e, t, {
        once: !0
    }), o ? ao(r, s) : r.dispatchEvent(s)
}
var Vc = $e,
    Hc = Rr,
    _n = "focusScope.autoFocusOnMount",
    An = "focusScope.autoFocusOnUnmount",
    Yo = {
        bubbles: !1,
        cancelable: !0
    },
    Wc = "FocusScope",
    pt = a.forwardRef((e, t) => {
        const {
            loop: n = !1,
            trapped: o = !1,
            onMountAutoFocus: r,
            onUnmountAutoFocus: s,
            ...i
        } = e, [c, l] = a.useState(null), u = G(r), f = G(s), d = a.useRef(null), m = j(t, h => l(h)), v = a.useRef({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }).current;
        a.useEffect(() => {
            if (o) {
                let h = function(b) {
                        if (v.paused || !c) return;
                        const S = b.target;
                        c.contains(S) ? d.current = S : Ee(d.current, {
                            select: !0
                        })
                    },
                    g = function(b) {
                        if (v.paused || !c) return;
                        const S = b.relatedTarget;
                        S !== null && (c.contains(S) || Ee(d.current, {
                            select: !0
                        }))
                    },
                    x = function(b) {
                        if (document.activeElement === document.body)
                            for (const C of b) C.removedNodes.length > 0 && Ee(c)
                    };
                document.addEventListener("focusin", h), document.addEventListener("focusout", g);
                const y = new MutationObserver(x);
                return c && y.observe(c, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    document.removeEventListener("focusin", h), document.removeEventListener("focusout", g), y.disconnect()
                }
            }
        }, [o, c, v.paused]), a.useEffect(() => {
            if (c) {
                qo.add(v);
                const h = document.activeElement;
                if (!c.contains(h)) {
                    const x = new CustomEvent(_n, Yo);
                    c.addEventListener(_n, u), c.dispatchEvent(x), x.defaultPrevented || (Kc(Xc(Tr(c)), {
                        select: !0
                    }), document.activeElement === h && Ee(c))
                }
                return () => {
                    c.removeEventListener(_n, u), setTimeout(() => {
                        const x = new CustomEvent(An, Yo);
                        c.addEventListener(An, f), c.dispatchEvent(x), x.defaultPrevented || Ee(h ? ? document.body, {
                            select: !0
                        }), c.removeEventListener(An, f), qo.remove(v)
                    }, 0)
                }
            }
        }, [c, u, f, v]);
        const w = a.useCallback(h => {
            if (!n && !o || v.paused) return;
            const g = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey,
                x = document.activeElement;
            if (g && x) {
                const y = h.currentTarget,
                    [b, S] = Uc(y);
                b && S ? !h.shiftKey && x === S ? (h.preventDefault(), n && Ee(b, {
                    select: !0
                })) : h.shiftKey && x === b && (h.preventDefault(), n && Ee(S, {
                    select: !0
                })) : x === y && h.preventDefault()
            }
        }, [n, o, v.paused]);
        return p.jsx(A.div, {
            tabIndex: -1,
            ...i,
            ref: m,
            onKeyDown: w
        })
    });
pt.displayName = Wc;

function Kc(e, {
    select: t = !1
} = {}) {
    const n = document.activeElement;
    for (const o of e)
        if (Ee(o, {
                select: t
            }), document.activeElement !== n) return
}

function Uc(e) {
    const t = Tr(e),
        n = Xo(t, e),
        o = Xo(t.reverse(), e);
    return [n, o]
}

function Tr(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: o => {
                const r = o.tagName === "INPUT" && o.type === "hidden";
                return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function Xo(e, t) {
    for (const n of e)
        if (!Gc(n, {
                upTo: t
            })) return n
}

function Gc(e, {
    upTo: t
}) {
    if (getComputedStyle(e).visibility === "hidden") return !0;
    for (; e;) {
        if (t !== void 0 && e === t) return !1;
        if (getComputedStyle(e).display === "none") return !0;
        e = e.parentElement
    }
    return !1
}

function zc(e) {
    return e instanceof HTMLInputElement && "select" in e
}

function Ee(e, {
    select: t = !1
} = {}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }), e !== n && zc(e) && t && e.select()
    }
}
var qo = Yc();

function Yc() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && n ? .pause(), e = Zo(e, t), e.unshift(t)
        },
        remove(t) {
            e = Zo(e, t), e[0] ? .resume()
        }
    }
}

function Zo(e, t) {
    const n = [...e],
        o = n.indexOf(t);
    return o !== -1 && n.splice(o, 1), n
}

function Xc(e) {
    return e.filter(t => t.tagName !== "A")
}
var qc = "Portal",
    Be = a.forwardRef((e, t) => {
        const {
            container: n,
            ...o
        } = e, [r, s] = a.useState(!1);
        z(() => s(!0), []);
        const i = n || r && globalThis ? .document ? .body;
        return i ? wc.createPortal(p.jsx(A.div, { ...o,
            ref: t
        }), i) : null
    });
Be.displayName = qc;

function Zc(e, t) {
    return a.useReducer((n, o) => t[n][o] ? ? n, e)
}
var X = e => {
    const {
        present: t,
        children: n
    } = e, o = Jc(t), r = typeof n == "function" ? n({
        present: o.isPresent
    }) : a.Children.only(n), s = j(o.ref, Qc(r));
    return typeof n == "function" || o.isPresent ? a.cloneElement(r, {
        ref: s
    }) : null
};
X.displayName = "Presence";

function Jc(e) {
    const [t, n] = a.useState(), o = a.useRef(null), r = a.useRef(e), s = a.useRef("none"), i = e ? "mounted" : "unmounted", [c, l] = Zc(i, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return a.useEffect(() => {
        const u = Et(o.current);
        s.current = c === "mounted" ? u : "none"
    }, [c]), z(() => {
        const u = o.current,
            f = r.current;
        if (f !== e) {
            const m = s.current,
                v = Et(u);
            e ? l("MOUNT") : v === "none" || u ? .display === "none" ? l("UNMOUNT") : l(f && m !== v ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e
        }
    }, [e, l]), z(() => {
        if (t) {
            let u;
            const f = t.ownerDocument.defaultView ? ? window,
                d = v => {
                    const h = Et(o.current).includes(CSS.escape(v.animationName));
                    if (v.target === t && h && (l("ANIMATION_END"), !r.current)) {
                        const g = t.style.animationFillMode;
                        t.style.animationFillMode = "forwards", u = f.setTimeout(() => {
                            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g)
                        })
                    }
                },
                m = v => {
                    v.target === t && (s.current = Et(o.current))
                };
            return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
                f.clearTimeout(u), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d)
            }
        } else l("ANIMATION_END")
    }, [t, l]), {
        isPresent: ["mounted", "unmountSuspended"].includes(c),
        ref: a.useCallback(u => {
            o.current = u ? getComputedStyle(u) : null, n(u)
        }, [])
    }
}

function Et(e) {
    return e ? .animationName || "none"
}

function Qc(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref") ? .get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var In = 0;

function Ut() {
    a.useEffect(() => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ? ? Jo()), document.body.insertAdjacentElement("beforeend", e[1] ? ? Jo()), In++, () => {
            In === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()), In--
        }
    }, [])
}

function Jo() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
}
var he = function() {
    return he = Object.assign || function(t) {
        for (var n, o = 1, r = arguments.length; o < r; o++) {
            n = arguments[o];
            for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s])
        }
        return t
    }, he.apply(this, arguments)
};

function _r(e, t) {
    var n = {};
    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
    return n
}

function el(e, t, n) {
    if (n || arguments.length === 2)
        for (var o = 0, r = t.length, s; o < r; o++)(s || !(o in t)) && (s || (s = Array.prototype.slice.call(t, 0, o)), s[o] = t[o]);
    return e.concat(s || Array.prototype.slice.call(t))
}
var Mt = "right-scroll-bar-position",
    Dt = "width-before-scroll-bar",
    tl = "with-scroll-bars-hidden",
    nl = "--removed-body-scroll-bar-size";

function Mn(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t), e
}

function ol(e, t) {
    var n = a.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(o) {
                    var r = n.value;
                    r !== o && (n.value = o, n.callback(o, r))
                }
            }
        }
    })[0];
    return n.callback = t, n.facade
}
var rl = typeof window < "u" ? a.useLayoutEffect : a.useEffect,
    Qo = new WeakMap;

function sl(e, t) {
    var n = ol(null, function(o) {
        return e.forEach(function(r) {
            return Mn(r, o)
        })
    });
    return rl(function() {
        var o = Qo.get(n);
        if (o) {
            var r = new Set(o),
                s = new Set(e),
                i = n.current;
            r.forEach(function(c) {
                s.has(c) || Mn(c, null)
            }), s.forEach(function(c) {
                r.has(c) || Mn(c, i)
            })
        }
        Qo.set(n, e)
    }, [e]), n
}

function il(e) {
    return e
}

function al(e, t) {
    t === void 0 && (t = il);
    var n = [],
        o = !1,
        r = {
            read: function() {
                if (o) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return n.length ? n[n.length - 1] : e
            },
            useMedium: function(s) {
                var i = t(s, o);
                return n.push(i),
                    function() {
                        n = n.filter(function(c) {
                            return c !== i
                        })
                    }
            },
            assignSyncMedium: function(s) {
                for (o = !0; n.length;) {
                    var i = n;
                    n = [], i.forEach(s)
                }
                n = {
                    push: function(c) {
                        return s(c)
                    },
                    filter: function() {
                        return n
                    }
                }
            },
            assignMedium: function(s) {
                o = !0;
                var i = [];
                if (n.length) {
                    var c = n;
                    n = [], c.forEach(s), i = n
                }
                var l = function() {
                        var f = i;
                        i = [], f.forEach(s)
                    },
                    u = function() {
                        return Promise.resolve().then(l)
                    };
                u(), n = {
                    push: function(f) {
                        i.push(f), u()
                    },
                    filter: function(f) {
                        return i = i.filter(f), n
                    }
                }
            }
        };
    return r
}

function cl(e) {
    e === void 0 && (e = {});
    var t = al(null);
    return t.options = he({
        async: !0,
        ssr: !1
    }, e), t
}
var Ar = function(e) {
    var t = e.sideCar,
        n = _r(e, ["sideCar"]);
    if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var o = t.read();
    if (!o) throw new Error("Sidecar medium not found");
    return a.createElement(o, he({}, n))
};
Ar.isSideCarExport = !0;

function ll(e, t) {
    return e.useMedium(t), Ar
}
var Ir = cl(),
    Dn = function() {},
    Gt = a.forwardRef(function(e, t) {
        var n = a.useRef(null),
            o = a.useState({
                onScrollCapture: Dn,
                onWheelCapture: Dn,
                onTouchMoveCapture: Dn
            }),
            r = o[0],
            s = o[1],
            i = e.forwardProps,
            c = e.children,
            l = e.className,
            u = e.removeScrollBar,
            f = e.enabled,
            d = e.shards,
            m = e.sideCar,
            v = e.noRelative,
            w = e.noIsolation,
            h = e.inert,
            g = e.allowPinchZoom,
            x = e.as,
            y = x === void 0 ? "div" : x,
            b = e.gapMode,
            S = _r(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            C = m,
            P = sl([n, t]),
            E = he(he({}, S), r);
        return a.createElement(a.Fragment, null, f && a.createElement(C, {
            sideCar: Ir,
            removeScrollBar: u,
            shards: d,
            noRelative: v,
            noIsolation: w,
            inert: h,
            setCallbacks: s,
            allowPinchZoom: !!g,
            lockRef: n,
            gapMode: b
        }), i ? a.cloneElement(a.Children.only(c), he(he({}, E), {
            ref: P
        })) : a.createElement(y, he({}, E, {
            className: l,
            ref: P
        }), c))
    });
Gt.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
Gt.classNames = {
    fullWidth: Dt,
    zeroRight: Mt
};
var ul = function() {
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__
};

function dl() {
    if (!document) return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = ul();
    return t && e.setAttribute("nonce", t), e
}

function fl(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}

function pl(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var ml = function() {
        var e = 0,
            t = null;
        return {
            add: function(n) {
                e == 0 && (t = dl()) && (fl(t, n), pl(t)), e++
            },
            remove: function() {
                e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
        }
    },
    hl = function() {
        var e = ml();
        return function(t, n) {
            a.useEffect(function() {
                return e.add(t),
                    function() {
                        e.remove()
                    }
            }, [t && n])
        }
    },
    Mr = function() {
        var e = hl(),
            t = function(n) {
                var o = n.styles,
                    r = n.dynamic;
                return e(o, r), null
            };
        return t
    },
    vl = {
        left: 0,
        top: 0,
        right: 0,
        gap: 0
    },
    On = function(e) {
        return parseInt(e || "", 10) || 0
    },
    gl = function(e) {
        var t = window.getComputedStyle(document.body),
            n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
            o = t[e === "padding" ? "paddingTop" : "marginTop"],
            r = t[e === "padding" ? "paddingRight" : "marginRight"];
        return [On(n), On(o), On(r)]
    },
    wl = function(e) {
        if (e === void 0 && (e = "margin"), typeof window > "u") return vl;
        var t = gl(e),
            n = document.documentElement.clientWidth,
            o = window.innerWidth;
        return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, o - n + t[2] - t[0])
        }
    },
    xl = Mr(),
    Ge = "data-scroll-locked",
    yl = function(e, t, n, o) {
        var r = e.left,
            s = e.top,
            i = e.right,
            c = e.gap;
        return n === void 0 && (n = "margin"), `
  .`.concat(tl, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(c, "px ").concat(o, `;
  }
  body[`).concat(Ge, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(o, ";"), n === "margin" && `
    padding-left: `.concat(r, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(o, `;
    `), n === "padding" && "padding-right: ".concat(c, "px ").concat(o, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Mt, ` {
    right: `).concat(c, "px ").concat(o, `;
  }
  
  .`).concat(Dt, ` {
    margin-right: `).concat(c, "px ").concat(o, `;
  }
  
  .`).concat(Mt, " .").concat(Mt, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Dt, " .").concat(Dt, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(Ge, `] {
    `).concat(nl, ": ").concat(c, `px;
  }
`)
    },
    er = function() {
        var e = parseInt(document.body.getAttribute(Ge) || "0", 10);
        return isFinite(e) ? e : 0
    },
    bl = function() {
        a.useEffect(function() {
            return document.body.setAttribute(Ge, (er() + 1).toString()),
                function() {
                    var e = er() - 1;
                    e <= 0 ? document.body.removeAttribute(Ge) : document.body.setAttribute(Ge, e.toString())
                }
        }, [])
    },
    Sl = function(e) {
        var t = e.noRelative,
            n = e.noImportant,
            o = e.gapMode,
            r = o === void 0 ? "margin" : o;
        bl();
        var s = a.useMemo(function() {
            return wl(r)
        }, [r]);
        return a.createElement(xl, {
            styles: yl(s, !t, r, n ? "" : "!important")
        })
    },
    Hn = !1;
if (typeof window < "u") try {
    var Rt = Object.defineProperty({}, "passive", {
        get: function() {
            return Hn = !0, !0
        }
    });
    window.addEventListener("test", Rt, Rt), window.removeEventListener("test", Rt, Rt)
} catch {
    Hn = !1
}
var We = Hn ? {
        passive: !1
    } : !1,
    Cl = function(e) {
        return e.tagName === "TEXTAREA"
    },
    Dr = function(e, t) {
        if (!(e instanceof Element)) return !1;
        var n = window.getComputedStyle(e);
        return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Cl(e) && n[t] === "visible")
    },
    El = function(e) {
        return Dr(e, "overflowY")
    },
    Rl = function(e) {
        return Dr(e, "overflowX")
    },
    tr = function(e, t) {
        var n = t.ownerDocument,
            o = t;
        do {
            typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
            var r = Or(e, o);
            if (r) {
                var s = Nr(e, o),
                    i = s[1],
                    c = s[2];
                if (i > c) return !0
            }
            o = o.parentNode
        } while (o && o !== n.body);
        return !1
    },
    Pl = function(e) {
        var t = e.scrollTop,
            n = e.scrollHeight,
            o = e.clientHeight;
        return [t, n, o]
    },
    Tl = function(e) {
        var t = e.scrollLeft,
            n = e.scrollWidth,
            o = e.clientWidth;
        return [t, n, o]
    },
    Or = function(e, t) {
        return e === "v" ? El(t) : Rl(t)
    },
    Nr = function(e, t) {
        return e === "v" ? Pl(t) : Tl(t)
    },
    _l = function(e, t) {
        return e === "h" && t === "rtl" ? -1 : 1
    },
    Al = function(e, t, n, o, r) {
        var s = _l(e, window.getComputedStyle(t).direction),
            i = s * o,
            c = n.target,
            l = t.contains(c),
            u = !1,
            f = i > 0,
            d = 0,
            m = 0;
        do {
            if (!c) break;
            var v = Nr(e, c),
                w = v[0],
                h = v[1],
                g = v[2],
                x = h - g - s * w;
            (w || x) && Or(e, c) && (d += x, m += w);
            var y = c.parentNode;
            c = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y
        } while (!l && c !== document.body || l && (t.contains(c) || t === c));
        return (f && Math.abs(d) < 1 || !f && Math.abs(m) < 1) && (u = !0), u
    },
    Pt = function(e) {
        return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
    },
    nr = function(e) {
        return [e.deltaX, e.deltaY]
    },
    or = function(e) {
        return e && "current" in e ? e.current : e
    },
    Il = function(e, t) {
        return e[0] === t[0] && e[1] === t[1]
    },
    Ml = function(e) {
        return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
    },
    Dl = 0,
    Ke = [];

function Ol(e) {
    var t = a.useRef([]),
        n = a.useRef([0, 0]),
        o = a.useRef(),
        r = a.useState(Dl++)[0],
        s = a.useState(Mr)[0],
        i = a.useRef(e);
    a.useEffect(function() {
        i.current = e
    }, [e]), a.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(r));
            var h = el([e.lockRef.current], (e.shards || []).map(or), !0).filter(Boolean);
            return h.forEach(function(g) {
                    return g.classList.add("allow-interactivity-".concat(r))
                }),
                function() {
                    document.body.classList.remove("block-interactivity-".concat(r)), h.forEach(function(g) {
                        return g.classList.remove("allow-interactivity-".concat(r))
                    })
                }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var c = a.useCallback(function(h, g) {
            if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey) return !i.current.allowPinchZoom;
            var x = Pt(h),
                y = n.current,
                b = "deltaX" in h ? h.deltaX : y[0] - x[0],
                S = "deltaY" in h ? h.deltaY : y[1] - x[1],
                C, P = h.target,
                E = Math.abs(b) > Math.abs(S) ? "h" : "v";
            if ("touches" in h && E === "h" && P.type === "range") return !1;
            var I = tr(E, P);
            if (!I) return !0;
            if (I ? C = E : (C = E === "v" ? "h" : "v", I = tr(E, P)), !I) return !1;
            if (!o.current && "changedTouches" in h && (b || S) && (o.current = C), !C) return !0;
            var D = o.current || C;
            return Al(D, g, h, D === "h" ? b : S)
        }, []),
        l = a.useCallback(function(h) {
            var g = h;
            if (!(!Ke.length || Ke[Ke.length - 1] !== s)) {
                var x = "deltaY" in g ? nr(g) : Pt(g),
                    y = t.current.filter(function(C) {
                        return C.name === g.type && (C.target === g.target || g.target === C.shadowParent) && Il(C.delta, x)
                    })[0];
                if (y && y.should) {
                    g.cancelable && g.preventDefault();
                    return
                }
                if (!y) {
                    var b = (i.current.shards || []).map(or).filter(Boolean).filter(function(C) {
                            return C.contains(g.target)
                        }),
                        S = b.length > 0 ? c(g, b[0]) : !i.current.noIsolation;
                    S && g.cancelable && g.preventDefault()
                }
            }
        }, []),
        u = a.useCallback(function(h, g, x, y) {
            var b = {
                name: h,
                delta: g,
                target: x,
                should: y,
                shadowParent: Nl(x)
            };
            t.current.push(b), setTimeout(function() {
                t.current = t.current.filter(function(S) {
                    return S !== b
                })
            }, 1)
        }, []),
        f = a.useCallback(function(h) {
            n.current = Pt(h), o.current = void 0
        }, []),
        d = a.useCallback(function(h) {
            u(h.type, nr(h), h.target, c(h, e.lockRef.current))
        }, []),
        m = a.useCallback(function(h) {
            u(h.type, Pt(h), h.target, c(h, e.lockRef.current))
        }, []);
    a.useEffect(function() {
        return Ke.push(s), e.setCallbacks({
                onScrollCapture: d,
                onWheelCapture: d,
                onTouchMoveCapture: m
            }), document.addEventListener("wheel", l, We), document.addEventListener("touchmove", l, We), document.addEventListener("touchstart", f, We),
            function() {
                Ke = Ke.filter(function(h) {
                    return h !== s
                }), document.removeEventListener("wheel", l, We), document.removeEventListener("touchmove", l, We), document.removeEventListener("touchstart", f, We)
            }
    }, []);
    var v = e.removeScrollBar,
        w = e.inert;
    return a.createElement(a.Fragment, null, w ? a.createElement(s, {
        styles: Ml(r)
    }) : null, v ? a.createElement(Sl, {
        noRelative: e.noRelative,
        gapMode: e.gapMode
    }) : null)
}

function Nl(e) {
    for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
    return t
}
const Ll = ll(Ir, Ol);
var mt = a.forwardRef(function(e, t) {
    return a.createElement(Gt, he({}, e, {
        ref: t,
        sideCar: Ll
    }))
});
mt.classNames = Gt.classNames;
var kl = function(e) {
        if (typeof document > "u") return null;
        var t = Array.isArray(e) ? e[0] : e;
        return t.ownerDocument.body
    },
    Ue = new WeakMap,
    Tt = new WeakMap,
    _t = {},
    Nn = 0,
    Lr = function(e) {
        return e && (e.host || Lr(e.parentNode))
    },
    jl = function(e, t) {
        return t.map(function(n) {
            if (e.contains(n)) return n;
            var o = Lr(n);
            return o && e.contains(o) ? o : null
        }).filter(function(n) {
            return !!n
        })
    },
    Fl = function(e, t, n, o) {
        var r = jl(t, Array.isArray(e) ? e : [e]);
        _t[n] || (_t[n] = new WeakMap);
        var s = _t[n],
            i = [],
            c = new Set,
            l = new Set(r),
            u = function(d) {
                !d || c.has(d) || (c.add(d), u(d.parentNode))
            };
        r.forEach(u);
        var f = function(d) {
            !d || l.has(d) || Array.prototype.forEach.call(d.children, function(m) {
                if (c.has(m)) f(m);
                else try {
                    var v = m.getAttribute(o),
                        w = v !== null && v !== "false",
                        h = (Ue.get(m) || 0) + 1,
                        g = (s.get(m) || 0) + 1;
                    Ue.set(m, h), s.set(m, g), i.push(m), h === 1 && w && Tt.set(m, !0), g === 1 && m.setAttribute(n, "true"), w || m.setAttribute(o, "true")
                } catch {}
            })
        };
        return f(t), c.clear(), Nn++,
            function() {
                i.forEach(function(d) {
                    var m = Ue.get(d) - 1,
                        v = s.get(d) - 1;
                    Ue.set(d, m), s.set(d, v), m || (Tt.has(d) || d.removeAttribute(o), Tt.delete(d)), v || d.removeAttribute(n)
                }), Nn--, Nn || (Ue = new WeakMap, Ue = new WeakMap, Tt = new WeakMap, _t = {})
            }
    },
    zt = function(e, t, n) {
        n === void 0 && (n = "data-aria-hidden");
        var o = Array.from(Array.isArray(e) ? e : [e]),
            r = kl(e);
        return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live], script"))), Fl(o, r, n, "aria-hidden")) : function() {
            return null
        }
    },
    Yt = "Dialog",
    [kr] = Z(Yt),
    [$l, me] = kr(Yt),
    jr = e => {
        const {
            __scopeDialog: t,
            children: n,
            open: o,
            defaultOpen: r,
            onOpenChange: s,
            modal: i = !0
        } = e, c = a.useRef(null), l = a.useRef(null), [u, f] = ae({
            prop: o,
            defaultProp: r ? ? !1,
            onChange: s,
            caller: Yt
        });
        return p.jsx($l, {
            scope: t,
            triggerRef: c,
            contentRef: l,
            contentId: se(),
            titleId: se(),
            descriptionId: se(),
            open: u,
            onOpenChange: f,
            onOpenToggle: a.useCallback(() => f(d => !d), [f]),
            modal: i,
            children: n
        })
    };
jr.displayName = Yt;
var Fr = "DialogTrigger",
    $r = a.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...o
        } = e, r = me(Fr, n), s = j(t, r.triggerRef);
        return p.jsx(A.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": r.open,
            "aria-controls": r.contentId,
            "data-state": uo(r.open),
            ...o,
            ref: s,
            onClick: R(e.onClick, r.onOpenToggle)
        })
    });
$r.displayName = Fr;
var co = "DialogPortal",
    [Bl, Br] = kr(co, {
        forceMount: void 0
    }),
    Vr = e => {
        const {
            __scopeDialog: t,
            forceMount: n,
            children: o,
            container: r
        } = e, s = me(co, t);
        return p.jsx(Bl, {
            scope: t,
            forceMount: n,
            children: a.Children.map(o, i => p.jsx(X, {
                present: n || s.open,
                children: p.jsx(Be, {
                    asChild: !0,
                    container: r,
                    children: i
                })
            }))
        })
    };
Vr.displayName = co;
var Nt = "DialogOverlay",
    Hr = a.forwardRef((e, t) => {
        const n = Br(Nt, e.__scopeDialog),
            {
                forceMount: o = n.forceMount,
                ...r
            } = e,
            s = me(Nt, e.__scopeDialog);
        return s.modal ? p.jsx(X, {
            present: o || s.open,
            children: p.jsx(Hl, { ...r,
                ref: t
            })
        }) : null
    });
Hr.displayName = Nt;
var Vl = Pe("DialogOverlay.RemoveScroll"),
    Hl = a.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...o
        } = e, r = me(Nt, n);
        return p.jsx(mt, {
            as: Vl,
            allowPinchZoom: !0,
            shards: [r.contentRef],
            children: p.jsx(A.div, {
                "data-state": uo(r.open),
                ...o,
                ref: t,
                style: {
                    pointerEvents: "auto",
                    ...o.style
                }
            })
        })
    }),
    Le = "DialogContent",
    Wr = a.forwardRef((e, t) => {
        const n = Br(Le, e.__scopeDialog),
            {
                forceMount: o = n.forceMount,
                ...r
            } = e,
            s = me(Le, e.__scopeDialog);
        return p.jsx(X, {
            present: o || s.open,
            children: s.modal ? p.jsx(Wl, { ...r,
                ref: t
            }) : p.jsx(Kl, { ...r,
                ref: t
            })
        })
    });
Wr.displayName = Le;
var Wl = a.forwardRef((e, t) => {
        const n = me(Le, e.__scopeDialog),
            o = a.useRef(null),
            r = j(t, n.contentRef, o);
        return a.useEffect(() => {
            const s = o.current;
            if (s) return zt(s)
        }, []), p.jsx(Kr, { ...e,
            ref: r,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: R(e.onCloseAutoFocus, s => {
                s.preventDefault(), n.triggerRef.current ? .focus()
            }),
            onPointerDownOutside: R(e.onPointerDownOutside, s => {
                const i = s.detail.originalEvent,
                    c = i.button === 0 && i.ctrlKey === !0;
                (i.button === 2 || c) && s.preventDefault()
            }),
            onFocusOutside: R(e.onFocusOutside, s => s.preventDefault())
        })
    }),
    Kl = a.forwardRef((e, t) => {
        const n = me(Le, e.__scopeDialog),
            o = a.useRef(!1),
            r = a.useRef(!1);
        return p.jsx(Kr, { ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: s => {
                e.onCloseAutoFocus ? .(s), s.defaultPrevented || (o.current || n.triggerRef.current ? .focus(), s.preventDefault()), o.current = !1, r.current = !1
            },
            onInteractOutside: s => {
                e.onInteractOutside ? .(s), s.defaultPrevented || (o.current = !0, s.detail.originalEvent.type === "pointerdown" && (r.current = !0));
                const i = s.target;
                n.triggerRef.current ? .contains(i) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && r.current && s.preventDefault()
            }
        })
    }),
    Kr = a.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            trapFocus: o,
            onOpenAutoFocus: r,
            onCloseAutoFocus: s,
            ...i
        } = e, c = me(Le, n), l = a.useRef(null), u = j(t, l);
        return Ut(), p.jsxs(p.Fragment, {
            children: [p.jsx(pt, {
                asChild: !0,
                loop: !0,
                trapped: o,
                onMountAutoFocus: r,
                onUnmountAutoFocus: s,
                children: p.jsx($e, {
                    role: "dialog",
                    id: c.contentId,
                    "aria-describedby": c.descriptionId,
                    "aria-labelledby": c.titleId,
                    "data-state": uo(c.open),
                    ...i,
                    ref: u,
                    onDismiss: () => c.onOpenChange(!1)
                })
            }), p.jsxs(p.Fragment, {
                children: [p.jsx(Ul, {
                    titleId: c.titleId
                }), p.jsx(zl, {
                    contentRef: l,
                    descriptionId: c.descriptionId
                })]
            })]
        })
    }),
    lo = "DialogTitle",
    Ur = a.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...o
        } = e, r = me(lo, n);
        return p.jsx(A.h2, {
            id: r.titleId,
            ...o,
            ref: t
        })
    });
Ur.displayName = lo;
var Gr = "DialogDescription",
    zr = a.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...o
        } = e, r = me(Gr, n);
        return p.jsx(A.p, {
            id: r.descriptionId,
            ...o,
            ref: t
        })
    });
zr.displayName = Gr;
var Yr = "DialogClose",
    Xr = a.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...o
        } = e, r = me(Yr, n);
        return p.jsx(A.button, {
            type: "button",
            ...o,
            ref: t,
            onClick: R(e.onClick, () => r.onOpenChange(!1))
        })
    });
Xr.displayName = Yr;

function uo(e) {
    return e ? "open" : "closed"
}
var qr = "DialogTitleWarning",
    [Hm, Zr] = bc(qr, {
        contentName: Le,
        titleName: lo,
        docsSlug: "dialog"
    }),
    Ul = ({
        titleId: e
    }) => {
        const t = Zr(qr),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
        return a.useEffect(() => {
            if (e) {
                const o = document.getElementById(e)
            }
        }, [n, e]), null
    },
    Gl = "DialogDescriptionWarning",
    zl = ({
        contentRef: e,
        descriptionId: t
    }) => {
        const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Zr(Gl).contentName}}.`;
        return a.useEffect(() => {
            const r = e.current ? .getAttribute("aria-describedby");
            if (t && r) {
                const s = document.getElementById(t)
            }
        }, [o, e, t]), null
    },
    Wm = jr,
    Km = $r,
    Um = Vr,
    Gm = Hr,
    zm = Wr,
    Ym = Ur,
    Xm = zr,
    qm = Xr,
    Ln = {
        exports: {}
    },
    kn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rr;

function Yl() {
    if (rr) return kn;
    rr = 1;
    var e = br();

    function t(d, m) {
        return d === m && (d !== 0 || 1 / d === 1 / m) || d !== d && m !== m
    }
    var n = typeof Object.is == "function" ? Object.is : t,
        o = e.useState,
        r = e.useEffect,
        s = e.useLayoutEffect,
        i = e.useDebugValue;

    function c(d, m) {
        var v = m(),
            w = o({
                inst: {
                    value: v,
                    getSnapshot: m
                }
            }),
            h = w[0].inst,
            g = w[1];
        return s(function() {
            h.value = v, h.getSnapshot = m, l(h) && g({
                inst: h
            })
        }, [d, v, m]), r(function() {
            return l(h) && g({
                inst: h
            }), d(function() {
                l(h) && g({
                    inst: h
                })
            })
        }, [d]), i(v), v
    }

    function l(d) {
        var m = d.getSnapshot;
        d = d.value;
        try {
            var v = m();
            return !n(d, v)
        } catch {
            return !0
        }
    }

    function u(d, m) {
        return m()
    }
    var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : c;
    return kn.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, kn
}
var sr;

function Xl() {
    return sr || (sr = 1, Ln.exports = Yl()), Ln.exports
}
var ql = Xl();

function it(e, [t, n]) {
    return Math.min(n, Math.max(t, e))
}

function ht(e) {
    const t = e + "CollectionProvider",
        [n, o] = Z(t),
        [r, s] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        i = h => {
            const {
                scope: g,
                children: x
            } = h, y = Ne.useRef(null), b = Ne.useRef(new Map).current;
            return p.jsx(r, {
                scope: g,
                itemMap: b,
                collectionRef: y,
                children: x
            })
        };
    i.displayName = t;
    const c = e + "CollectionSlot",
        l = Pe(c),
        u = Ne.forwardRef((h, g) => {
            const {
                scope: x,
                children: y
            } = h, b = s(c, x), S = j(g, b.collectionRef);
            return p.jsx(l, {
                ref: S,
                children: y
            })
        });
    u.displayName = c;
    const f = e + "CollectionItemSlot",
        d = "data-radix-collection-item",
        m = Pe(f),
        v = Ne.forwardRef((h, g) => {
            const {
                scope: x,
                children: y,
                ...b
            } = h, S = Ne.useRef(null), C = j(g, S), P = s(f, x);
            return Ne.useEffect(() => (P.itemMap.set(S, {
                ref: S,
                ...b
            }), () => void P.itemMap.delete(S))), p.jsx(m, {
                [d]: "",
                ref: C,
                children: y
            })
        });
    v.displayName = f;

    function w(h) {
        const g = s(e + "CollectionConsumer", h);
        return Ne.useCallback(() => {
            const y = g.collectionRef.current;
            if (!y) return [];
            const b = Array.from(y.querySelectorAll(`[${d}]`));
            return Array.from(g.itemMap.values()).sort((P, E) => b.indexOf(P.ref.current) - b.indexOf(E.ref.current))
        }, [g.collectionRef, g.itemMap])
    }
    return [{
        Provider: i,
        Slot: u,
        ItemSlot: v
    }, w, o]
}
var Zl = a.createContext(void 0);

function Je(e) {
    const t = a.useContext(Zl);
    return e || t || "ltr"
}
const Jl = ["top", "right", "bottom", "left"],
    Te = Math.min,
    re = Math.max,
    Lt = Math.round,
    At = Math.floor,
    ge = e => ({
        x: e,
        y: e
    }),
    Ql = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    eu = {
        start: "end",
        end: "start"
    };

function Wn(e, t, n) {
    return re(e, Te(t, n))
}

function Se(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Ce(e) {
    return e.split("-")[0]
}

function Qe(e) {
    return e.split("-")[1]
}

function fo(e) {
    return e === "x" ? "y" : "x"
}

function po(e) {
    return e === "y" ? "height" : "width"
}
const tu = new Set(["top", "bottom"]);

function ve(e) {
    return tu.has(Ce(e)) ? "y" : "x"
}

function mo(e) {
    return fo(ve(e))
}

function nu(e, t, n) {
    n === void 0 && (n = !1);
    const o = Qe(e),
        r = mo(e),
        s = po(r);
    let i = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (i = kt(i)), [i, kt(i)]
}

function ou(e) {
    const t = kt(e);
    return [Kn(e), t, Kn(t)]
}

function Kn(e) {
    return e.replace(/start|end/g, t => eu[t])
}
const ir = ["left", "right"],
    ar = ["right", "left"],
    ru = ["top", "bottom"],
    su = ["bottom", "top"];

function iu(e, t, n) {
    switch (e) {
        case "top":
        case "bottom":
            return n ? t ? ar : ir : t ? ir : ar;
        case "left":
        case "right":
            return t ? ru : su;
        default:
            return []
    }
}

function au(e, t, n, o) {
    const r = Qe(e);
    let s = iu(Ce(e), n === "start", o);
    return r && (s = s.map(i => i + "-" + r), t && (s = s.concat(s.map(Kn)))), s
}

function kt(e) {
    return e.replace(/left|right|bottom|top/g, t => Ql[t])
}

function cu(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}

function Jr(e) {
    return typeof e != "number" ? cu(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function jt(e) {
    const {
        x: t,
        y: n,
        width: o,
        height: r
    } = e;
    return {
        width: o,
        height: r,
        top: n,
        left: t,
        right: t + o,
        bottom: n + r,
        x: t,
        y: n
    }
}

function cr(e, t, n) {
    let {
        reference: o,
        floating: r
    } = e;
    const s = ve(t),
        i = mo(t),
        c = po(i),
        l = Ce(t),
        u = s === "y",
        f = o.x + o.width / 2 - r.width / 2,
        d = o.y + o.height / 2 - r.height / 2,
        m = o[c] / 2 - r[c] / 2;
    let v;
    switch (l) {
        case "top":
            v = {
                x: f,
                y: o.y - r.height
            };
            break;
        case "bottom":
            v = {
                x: f,
                y: o.y + o.height
            };
            break;
        case "right":
            v = {
                x: o.x + o.width,
                y: d
            };
            break;
        case "left":
            v = {
                x: o.x - r.width,
                y: d
            };
            break;
        default:
            v = {
                x: o.x,
                y: o.y
            }
    }
    switch (Qe(t)) {
        case "start":
            v[i] -= m * (n && u ? -1 : 1);
            break;
        case "end":
            v[i] += m * (n && u ? -1 : 1);
            break
    }
    return v
}
const lu = async (e, t, n) => {
    const {
        placement: o = "bottom",
        strategy: r = "absolute",
        middleware: s = [],
        platform: i
    } = n, c = s.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let u = await i.getElementRects({
            reference: e,
            floating: t,
            strategy: r
        }),
        {
            x: f,
            y: d
        } = cr(u, o, l),
        m = o,
        v = {},
        w = 0;
    for (let h = 0; h < c.length; h++) {
        const {
            name: g,
            fn: x
        } = c[h], {
            x: y,
            y: b,
            data: S,
            reset: C
        } = await x({
            x: f,
            y: d,
            initialPlacement: o,
            placement: m,
            strategy: r,
            middlewareData: v,
            rects: u,
            platform: i,
            elements: {
                reference: e,
                floating: t
            }
        });
        f = y ? ? f, d = b ? ? d, v = { ...v,
            [g]: { ...v[g],
                ...S
            }
        }, C && w <= 50 && (w++, typeof C == "object" && (C.placement && (m = C.placement), C.rects && (u = C.rects === !0 ? await i.getElementRects({
            reference: e,
            floating: t,
            strategy: r
        }) : C.rects), {
            x: f,
            y: d
        } = cr(u, m, l)), h = -1)
    }
    return {
        x: f,
        y: d,
        placement: m,
        strategy: r,
        middlewareData: v
    }
};
async function at(e, t) {
    var n;
    t === void 0 && (t = {});
    const {
        x: o,
        y: r,
        platform: s,
        rects: i,
        elements: c,
        strategy: l
    } = e, {
        boundary: u = "clippingAncestors",
        rootBoundary: f = "viewport",
        elementContext: d = "floating",
        altBoundary: m = !1,
        padding: v = 0
    } = Se(t, e), w = Jr(v), g = c[m ? d === "floating" ? "reference" : "floating" : d], x = jt(await s.getClippingRect({
        element: (n = await (s.isElement == null ? void 0 : s.isElement(g))) == null || n ? g : g.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating)),
        boundary: u,
        rootBoundary: f,
        strategy: l
    })), y = d === "floating" ? {
        x: o,
        y: r,
        width: i.floating.width,
        height: i.floating.height
    } : i.reference, b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c.floating)), S = await (s.isElement == null ? void 0 : s.isElement(b)) ? await (s.getScale == null ? void 0 : s.getScale(b)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, C = jt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: c,
        rect: y,
        offsetParent: b,
        strategy: l
    }) : y);
    return {
        top: (x.top - C.top + w.top) / S.y,
        bottom: (C.bottom - x.bottom + w.bottom) / S.y,
        left: (x.left - C.left + w.left) / S.x,
        right: (C.right - x.right + w.right) / S.x
    }
}
const uu = e => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const {
                x: n,
                y: o,
                placement: r,
                rects: s,
                platform: i,
                elements: c,
                middlewareData: l
            } = t, {
                element: u,
                padding: f = 0
            } = Se(e, t) || {};
            if (u == null) return {};
            const d = Jr(f),
                m = {
                    x: n,
                    y: o
                },
                v = mo(r),
                w = po(v),
                h = await i.getDimensions(u),
                g = v === "y",
                x = g ? "top" : "left",
                y = g ? "bottom" : "right",
                b = g ? "clientHeight" : "clientWidth",
                S = s.reference[w] + s.reference[v] - m[v] - s.floating[w],
                C = m[v] - s.reference[v],
                P = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
            let E = P ? P[b] : 0;
            (!E || !await (i.isElement == null ? void 0 : i.isElement(P))) && (E = c.floating[b] || s.floating[w]);
            const I = S / 2 - C / 2,
                D = E / 2 - h[w] / 2 - 1,
                O = Te(d[x], D),
                N = Te(d[y], D),
                F = O,
                V = E - h[w] - N,
                _ = E / 2 - h[w] / 2 + I,
                B = Wn(F, _, V),
                k = !l.arrow && Qe(r) != null && _ !== B && s.reference[w] / 2 - (_ < F ? O : N) - h[w] / 2 < 0,
                $ = k ? _ < F ? _ - F : _ - V : 0;
            return {
                [v]: m[v] + $,
                data: {
                    [v]: B,
                    centerOffset: _ - B - $,
                    ...k && {
                        alignmentOffset: $
                    }
                },
                reset: k
            }
        }
    }),
    du = function(e) {
        return e === void 0 && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
                var n, o;
                const {
                    placement: r,
                    middlewareData: s,
                    rects: i,
                    initialPlacement: c,
                    platform: l,
                    elements: u
                } = t, {
                    mainAxis: f = !0,
                    crossAxis: d = !0,
                    fallbackPlacements: m,
                    fallbackStrategy: v = "bestFit",
                    fallbackAxisSideDirection: w = "none",
                    flipAlignment: h = !0,
                    ...g
                } = Se(e, t);
                if ((n = s.arrow) != null && n.alignmentOffset) return {};
                const x = Ce(r),
                    y = ve(c),
                    b = Ce(c) === c,
                    S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
                    C = m || (b || !h ? [kt(c)] : ou(c)),
                    P = w !== "none";
                !m && P && C.push(...au(c, h, w, S));
                const E = [c, ...C],
                    I = await at(t, g),
                    D = [];
                let O = ((o = s.flip) == null ? void 0 : o.overflows) || [];
                if (f && D.push(I[x]), d) {
                    const _ = nu(r, i, S);
                    D.push(I[_[0]], I[_[1]])
                }
                if (O = [...O, {
                        placement: r,
                        overflows: D
                    }], !D.every(_ => _ <= 0)) {
                    var N, F;
                    const _ = (((N = s.flip) == null ? void 0 : N.index) || 0) + 1,
                        B = E[_];
                    if (B && (!(d === "alignment" ? y !== ve(B) : !1) || O.every(M => ve(M.placement) === y ? M.overflows[0] > 0 : !0))) return {
                        data: {
                            index: _,
                            overflows: O
                        },
                        reset: {
                            placement: B
                        }
                    };
                    let k = (F = O.filter($ => $.overflows[0] <= 0).sort(($, M) => $.overflows[1] - M.overflows[1])[0]) == null ? void 0 : F.placement;
                    if (!k) switch (v) {
                        case "bestFit":
                            {
                                var V;
                                const $ = (V = O.filter(M => {
                                    if (P) {
                                        const T = ve(M.placement);
                                        return T === y || T === "y"
                                    }
                                    return !0
                                }).map(M => [M.placement, M.overflows.filter(T => T > 0).reduce((T, U) => T + U, 0)]).sort((M, T) => M[1] - T[1])[0]) == null ? void 0 : V[0];$ && (k = $);
                                break
                            }
                        case "initialPlacement":
                            k = c;
                            break
                    }
                    if (r !== k) return {
                        reset: {
                            placement: k
                        }
                    }
                }
                return {}
            }
        }
    };

function lr(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}

function ur(e) {
    return Jl.some(t => e[t] >= 0)
}
const fu = function(e) {
        return e === void 0 && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
                const {
                    rects: n
                } = t, {
                    strategy: o = "referenceHidden",
                    ...r
                } = Se(e, t);
                switch (o) {
                    case "referenceHidden":
                        {
                            const s = await at(t, { ...r,
                                    elementContext: "reference"
                                }),
                                i = lr(s, n.reference);
                            return {
                                data: {
                                    referenceHiddenOffsets: i,
                                    referenceHidden: ur(i)
                                }
                            }
                        }
                    case "escaped":
                        {
                            const s = await at(t, { ...r,
                                    altBoundary: !0
                                }),
                                i = lr(s, n.floating);
                            return {
                                data: {
                                    escapedOffsets: i,
                                    escaped: ur(i)
                                }
                            }
                        }
                    default:
                        return {}
                }
            }
        }
    },
    Qr = new Set(["left", "top"]);
async function pu(e, t) {
    const {
        placement: n,
        platform: o,
        elements: r
    } = e, s = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), i = Ce(n), c = Qe(n), l = ve(n) === "y", u = Qr.has(i) ? -1 : 1, f = s && l ? -1 : 1, d = Se(t, e);
    let {
        mainAxis: m,
        crossAxis: v,
        alignmentAxis: w
    } = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return c && typeof w == "number" && (v = c === "end" ? w * -1 : w), l ? {
        x: v * f,
        y: m * u
    } : {
        x: m * u,
        y: v * f
    }
}
const mu = function(e) {
        return e === void 0 && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
                var n, o;
                const {
                    x: r,
                    y: s,
                    placement: i,
                    middlewareData: c
                } = t, l = await pu(t, e);
                return i === ((n = c.offset) == null ? void 0 : n.placement) && (o = c.arrow) != null && o.alignmentOffset ? {} : {
                    x: r + l.x,
                    y: s + l.y,
                    data: { ...l,
                        placement: i
                    }
                }
            }
        }
    },
    hu = function(e) {
        return e === void 0 && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
                const {
                    x: n,
                    y: o,
                    placement: r
                } = t, {
                    mainAxis: s = !0,
                    crossAxis: i = !1,
                    limiter: c = {
                        fn: g => {
                            let {
                                x,
                                y
                            } = g;
                            return {
                                x,
                                y
                            }
                        }
                    },
                    ...l
                } = Se(e, t), u = {
                    x: n,
                    y: o
                }, f = await at(t, l), d = ve(Ce(r)), m = fo(d);
                let v = u[m],
                    w = u[d];
                if (s) {
                    const g = m === "y" ? "top" : "left",
                        x = m === "y" ? "bottom" : "right",
                        y = v + f[g],
                        b = v - f[x];
                    v = Wn(y, v, b)
                }
                if (i) {
                    const g = d === "y" ? "top" : "left",
                        x = d === "y" ? "bottom" : "right",
                        y = w + f[g],
                        b = w - f[x];
                    w = Wn(y, w, b)
                }
                const h = c.fn({ ...t,
                    [m]: v,
                    [d]: w
                });
                return { ...h,
                    data: {
                        x: h.x - n,
                        y: h.y - o,
                        enabled: {
                            [m]: s,
                            [d]: i
                        }
                    }
                }
            }
        }
    },
    vu = function(e) {
        return e === void 0 && (e = {}), {
            options: e,
            fn(t) {
                const {
                    x: n,
                    y: o,
                    placement: r,
                    rects: s,
                    middlewareData: i
                } = t, {
                    offset: c = 0,
                    mainAxis: l = !0,
                    crossAxis: u = !0
                } = Se(e, t), f = {
                    x: n,
                    y: o
                }, d = ve(r), m = fo(d);
                let v = f[m],
                    w = f[d];
                const h = Se(c, t),
                    g = typeof h == "number" ? {
                        mainAxis: h,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...h
                    };
                if (l) {
                    const b = m === "y" ? "height" : "width",
                        S = s.reference[m] - s.floating[b] + g.mainAxis,
                        C = s.reference[m] + s.reference[b] - g.mainAxis;
                    v < S ? v = S : v > C && (v = C)
                }
                if (u) {
                    var x, y;
                    const b = m === "y" ? "width" : "height",
                        S = Qr.has(Ce(r)),
                        C = s.reference[d] - s.floating[b] + (S && ((x = i.offset) == null ? void 0 : x[d]) || 0) + (S ? 0 : g.crossAxis),
                        P = s.reference[d] + s.reference[b] + (S ? 0 : ((y = i.offset) == null ? void 0 : y[d]) || 0) - (S ? g.crossAxis : 0);
                    w < C ? w = C : w > P && (w = P)
                }
                return {
                    [m]: v,
                    [d]: w
                }
            }
        }
    },
    gu = function(e) {
        return e === void 0 && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
                var n, o;
                const {
                    placement: r,
                    rects: s,
                    platform: i,
                    elements: c
                } = t, {
                    apply: l = () => {},
                    ...u
                } = Se(e, t), f = await at(t, u), d = Ce(r), m = Qe(r), v = ve(r) === "y", {
                    width: w,
                    height: h
                } = s.floating;
                let g, x;
                d === "top" || d === "bottom" ? (g = d, x = m === (await (i.isRTL == null ? void 0 : i.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (x = d, g = m === "end" ? "top" : "bottom");
                const y = h - f.top - f.bottom,
                    b = w - f.left - f.right,
                    S = Te(h - f[g], y),
                    C = Te(w - f[x], b),
                    P = !t.middlewareData.shift;
                let E = S,
                    I = C;
                if ((n = t.middlewareData.shift) != null && n.enabled.x && (I = b), (o = t.middlewareData.shift) != null && o.enabled.y && (E = y), P && !m) {
                    const O = re(f.left, 0),
                        N = re(f.right, 0),
                        F = re(f.top, 0),
                        V = re(f.bottom, 0);
                    v ? I = w - 2 * (O !== 0 || N !== 0 ? O + N : re(f.left, f.right)) : E = h - 2 * (F !== 0 || V !== 0 ? F + V : re(f.top, f.bottom))
                }
                await l({ ...t,
                    availableWidth: I,
                    availableHeight: E
                });
                const D = await i.getDimensions(c.floating);
                return w !== D.width || h !== D.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function Xt() {
    return typeof window < "u"
}

function et(e) {
    return es(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function ie(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function xe(e) {
    var t;
    return (t = (es(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function es(e) {
    return Xt() ? e instanceof Node || e instanceof ie(e).Node : !1
}

function fe(e) {
    return Xt() ? e instanceof Element || e instanceof ie(e).Element : !1
}

function we(e) {
    return Xt() ? e instanceof HTMLElement || e instanceof ie(e).HTMLElement : !1
}

function dr(e) {
    return !Xt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ie(e).ShadowRoot
}
const wu = new Set(["inline", "contents"]);

function vt(e) {
    const {
        overflow: t,
        overflowX: n,
        overflowY: o,
        display: r
    } = pe(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !wu.has(r)
}
const xu = new Set(["table", "td", "th"]);

function yu(e) {
    return xu.has(et(e))
}
const bu = [":popover-open", ":modal"];

function qt(e) {
    return bu.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    })
}
const Su = ["transform", "translate", "scale", "rotate", "perspective"],
    Cu = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
    Eu = ["paint", "layout", "strict", "content"];

function ho(e) {
    const t = vo(),
        n = fe(e) ? pe(e) : e;
    return Su.some(o => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Cu.some(o => (n.willChange || "").includes(o)) || Eu.some(o => (n.contain || "").includes(o))
}

function Ru(e) {
    let t = _e(e);
    for (; we(t) && !Ye(t);) {
        if (ho(t)) return t;
        if (qt(t)) return null;
        t = _e(t)
    }
    return null
}

function vo() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const Pu = new Set(["html", "body", "#document"]);

function Ye(e) {
    return Pu.has(et(e))
}

function pe(e) {
    return ie(e).getComputedStyle(e)
}

function Zt(e) {
    return fe(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}

function _e(e) {
    if (et(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || dr(e) && e.host || xe(e);
    return dr(t) ? t.host : t
}

function ts(e) {
    const t = _e(e);
    return Ye(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : we(t) && vt(t) ? t : ts(t)
}

function ct(e, t, n) {
    var o;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const r = ts(e),
        s = r === ((o = e.ownerDocument) == null ? void 0 : o.body),
        i = ie(r);
    if (s) {
        const c = Un(i);
        return t.concat(i, i.visualViewport || [], vt(r) ? r : [], c && n ? ct(c) : [])
    }
    return t.concat(r, ct(r, [], n))
}

function Un(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function ns(e) {
    const t = pe(e);
    let n = parseFloat(t.width) || 0,
        o = parseFloat(t.height) || 0;
    const r = we(e),
        s = r ? e.offsetWidth : n,
        i = r ? e.offsetHeight : o,
        c = Lt(n) !== s || Lt(o) !== i;
    return c && (n = s, o = i), {
        width: n,
        height: o,
        $: c
    }
}

function go(e) {
    return fe(e) ? e : e.contextElement
}

function ze(e) {
    const t = go(e);
    if (!we(t)) return ge(1);
    const n = t.getBoundingClientRect(),
        {
            width: o,
            height: r,
            $: s
        } = ns(t);
    let i = (s ? Lt(n.width) : n.width) / o,
        c = (s ? Lt(n.height) : n.height) / r;
    return (!i || !Number.isFinite(i)) && (i = 1), (!c || !Number.isFinite(c)) && (c = 1), {
        x: i,
        y: c
    }
}
const Tu = ge(0);

function os(e) {
    const t = ie(e);
    return !vo() || !t.visualViewport ? Tu : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}

function _u(e, t, n) {
    return t === void 0 && (t = !1), !n || t && n !== ie(e) ? !1 : t
}

function ke(e, t, n, o) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const r = e.getBoundingClientRect(),
        s = go(e);
    let i = ge(1);
    t && (o ? fe(o) && (i = ze(o)) : i = ze(e));
    const c = _u(s, n, o) ? os(s) : ge(0);
    let l = (r.left + c.x) / i.x,
        u = (r.top + c.y) / i.y,
        f = r.width / i.x,
        d = r.height / i.y;
    if (s) {
        const m = ie(s),
            v = o && fe(o) ? ie(o) : o;
        let w = m,
            h = Un(w);
        for (; h && o && v !== w;) {
            const g = ze(h),
                x = h.getBoundingClientRect(),
                y = pe(h),
                b = x.left + (h.clientLeft + parseFloat(y.paddingLeft)) * g.x,
                S = x.top + (h.clientTop + parseFloat(y.paddingTop)) * g.y;
            l *= g.x, u *= g.y, f *= g.x, d *= g.y, l += b, u += S, w = ie(h), h = Un(w)
        }
    }
    return jt({
        width: f,
        height: d,
        x: l,
        y: u
    })
}

function Jt(e, t) {
    const n = Zt(e).scrollLeft;
    return t ? t.left + n : ke(xe(e)).left + n
}

function rs(e, t) {
    const n = e.getBoundingClientRect(),
        o = n.left + t.scrollLeft - Jt(e, n),
        r = n.top + t.scrollTop;
    return {
        x: o,
        y: r
    }
}

function Au(e) {
    let {
        elements: t,
        rect: n,
        offsetParent: o,
        strategy: r
    } = e;
    const s = r === "fixed",
        i = xe(o),
        c = t ? qt(t.floating) : !1;
    if (o === i || c && s) return n;
    let l = {
            scrollLeft: 0,
            scrollTop: 0
        },
        u = ge(1);
    const f = ge(0),
        d = we(o);
    if ((d || !d && !s) && ((et(o) !== "body" || vt(i)) && (l = Zt(o)), we(o))) {
        const v = ke(o);
        u = ze(o), f.x = v.x + o.clientLeft, f.y = v.y + o.clientTop
    }
    const m = i && !d && !s ? rs(i, l) : ge(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + f.x + m.x,
        y: n.y * u.y - l.scrollTop * u.y + f.y + m.y
    }
}

function Iu(e) {
    return Array.from(e.getClientRects())
}

function Mu(e) {
    const t = xe(e),
        n = Zt(e),
        o = e.ownerDocument.body,
        r = re(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
        s = re(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
    let i = -n.scrollLeft + Jt(e);
    const c = -n.scrollTop;
    return pe(o).direction === "rtl" && (i += re(t.clientWidth, o.clientWidth) - r), {
        width: r,
        height: s,
        x: i,
        y: c
    }
}
const fr = 25;

function Du(e, t) {
    const n = ie(e),
        o = xe(e),
        r = n.visualViewport;
    let s = o.clientWidth,
        i = o.clientHeight,
        c = 0,
        l = 0;
    if (r) {
        s = r.width, i = r.height;
        const f = vo();
        (!f || f && t === "fixed") && (c = r.offsetLeft, l = r.offsetTop)
    }
    const u = Jt(o);
    if (u <= 0) {
        const f = o.ownerDocument,
            d = f.body,
            m = getComputedStyle(d),
            v = f.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0,
            w = Math.abs(o.clientWidth - d.clientWidth - v);
        w <= fr && (s -= w)
    } else u <= fr && (s += u);
    return {
        width: s,
        height: i,
        x: c,
        y: l
    }
}
const Ou = new Set(["absolute", "fixed"]);

function Nu(e, t) {
    const n = ke(e, !0, t === "fixed"),
        o = n.top + e.clientTop,
        r = n.left + e.clientLeft,
        s = we(e) ? ze(e) : ge(1),
        i = e.clientWidth * s.x,
        c = e.clientHeight * s.y,
        l = r * s.x,
        u = o * s.y;
    return {
        width: i,
        height: c,
        x: l,
        y: u
    }
}

function pr(e, t, n) {
    let o;
    if (t === "viewport") o = Du(e, n);
    else if (t === "document") o = Mu(xe(e));
    else if (fe(t)) o = Nu(t, n);
    else {
        const r = os(e);
        o = {
            x: t.x - r.x,
            y: t.y - r.y,
            width: t.width,
            height: t.height
        }
    }
    return jt(o)
}

function ss(e, t) {
    const n = _e(e);
    return n === t || !fe(n) || Ye(n) ? !1 : pe(n).position === "fixed" || ss(n, t)
}

function Lu(e, t) {
    const n = t.get(e);
    if (n) return n;
    let o = ct(e, [], !1).filter(c => fe(c) && et(c) !== "body"),
        r = null;
    const s = pe(e).position === "fixed";
    let i = s ? _e(e) : e;
    for (; fe(i) && !Ye(i);) {
        const c = pe(i),
            l = ho(i);
        !l && c.position === "fixed" && (r = null), (s ? !l && !r : !l && c.position === "static" && !!r && Ou.has(r.position) || vt(i) && !l && ss(e, i)) ? o = o.filter(f => f !== i) : r = c, i = _e(i)
    }
    return t.set(e, o), o
}

function ku(e) {
    let {
        element: t,
        boundary: n,
        rootBoundary: o,
        strategy: r
    } = e;
    const i = [...n === "clippingAncestors" ? qt(t) ? [] : Lu(t, this._c) : [].concat(n), o],
        c = i[0],
        l = i.reduce((u, f) => {
            const d = pr(t, f, r);
            return u.top = re(d.top, u.top), u.right = Te(d.right, u.right), u.bottom = Te(d.bottom, u.bottom), u.left = re(d.left, u.left), u
        }, pr(t, c, r));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}

function ju(e) {
    const {
        width: t,
        height: n
    } = ns(e);
    return {
        width: t,
        height: n
    }
}

function Fu(e, t, n) {
    const o = we(t),
        r = xe(t),
        s = n === "fixed",
        i = ke(e, !0, s, t);
    let c = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = ge(0);

    function u() {
        l.x = Jt(r)
    }
    if (o || !o && !s)
        if ((et(t) !== "body" || vt(r)) && (c = Zt(t)), o) {
            const v = ke(t, !0, s, t);
            l.x = v.x + t.clientLeft, l.y = v.y + t.clientTop
        } else r && u();
    s && !o && r && u();
    const f = r && !o && !s ? rs(r, c) : ge(0),
        d = i.left + c.scrollLeft - l.x - f.x,
        m = i.top + c.scrollTop - l.y - f.y;
    return {
        x: d,
        y: m,
        width: i.width,
        height: i.height
    }
}

function jn(e) {
    return pe(e).position === "static"
}

function mr(e, t) {
    if (!we(e) || pe(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return xe(e) === n && (n = n.ownerDocument.body), n
}

function is(e, t) {
    const n = ie(e);
    if (qt(e)) return n;
    if (!we(e)) {
        let r = _e(e);
        for (; r && !Ye(r);) {
            if (fe(r) && !jn(r)) return r;
            r = _e(r)
        }
        return n
    }
    let o = mr(e, t);
    for (; o && yu(o) && jn(o);) o = mr(o, t);
    return o && Ye(o) && jn(o) && !ho(o) ? n : o || Ru(e) || n
}
const $u = async function(e) {
    const t = this.getOffsetParent || is,
        n = this.getDimensions,
        o = await n(e.floating);
    return {
        reference: Fu(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: o.width,
            height: o.height
        }
    }
};

function Bu(e) {
    return pe(e).direction === "rtl"
}
const Vu = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Au,
    getDocumentElement: xe,
    getClippingRect: ku,
    getOffsetParent: is,
    getElementRects: $u,
    getClientRects: Iu,
    getDimensions: ju,
    getScale: ze,
    isElement: fe,
    isRTL: Bu
};

function as(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}

function Hu(e, t) {
    let n = null,
        o;
    const r = xe(e);

    function s() {
        var c;
        clearTimeout(o), (c = n) == null || c.disconnect(), n = null
    }

    function i(c, l) {
        c === void 0 && (c = !1), l === void 0 && (l = 1), s();
        const u = e.getBoundingClientRect(),
            {
                left: f,
                top: d,
                width: m,
                height: v
            } = u;
        if (c || t(), !m || !v) return;
        const w = At(d),
            h = At(r.clientWidth - (f + m)),
            g = At(r.clientHeight - (d + v)),
            x = At(f),
            b = {
                rootMargin: -w + "px " + -h + "px " + -g + "px " + -x + "px",
                threshold: re(0, Te(1, l)) || 1
            };
        let S = !0;

        function C(P) {
            const E = P[0].intersectionRatio;
            if (E !== l) {
                if (!S) return i();
                E ? i(!1, E) : o = setTimeout(() => {
                    i(!1, 1e-7)
                }, 1e3)
            }
            E === 1 && !as(u, e.getBoundingClientRect()) && i(), S = !1
        }
        try {
            n = new IntersectionObserver(C, { ...b,
                root: r.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(C, b)
        }
        n.observe(e)
    }
    return i(!0), s
}

function Wu(e, t, n, o) {
    o === void 0 && (o = {});
    const {
        ancestorScroll: r = !0,
        ancestorResize: s = !0,
        elementResize: i = typeof ResizeObserver == "function",
        layoutShift: c = typeof IntersectionObserver == "function",
        animationFrame: l = !1
    } = o, u = go(e), f = r || s ? [...u ? ct(u) : [], ...ct(t)] : [];
    f.forEach(x => {
        r && x.addEventListener("scroll", n, {
            passive: !0
        }), s && x.addEventListener("resize", n)
    });
    const d = u && c ? Hu(u, n) : null;
    let m = -1,
        v = null;
    i && (v = new ResizeObserver(x => {
        let [y] = x;
        y && y.target === u && v && (v.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
            var b;
            (b = v) == null || b.observe(t)
        })), n()
    }), u && !l && v.observe(u), v.observe(t));
    let w, h = l ? ke(e) : null;
    l && g();

    function g() {
        const x = ke(e);
        h && !as(h, x) && n(), h = x, w = requestAnimationFrame(g)
    }
    return n(), () => {
        var x;
        f.forEach(y => {
            r && y.removeEventListener("scroll", n), s && y.removeEventListener("resize", n)
        }), d ? .(), (x = v) == null || x.disconnect(), v = null, l && cancelAnimationFrame(w)
    }
}
const Ku = mu,
    Uu = hu,
    Gu = du,
    zu = gu,
    Yu = fu,
    hr = uu,
    Xu = vu,
    qu = (e, t, n) => {
        const o = new Map,
            r = {
                platform: Vu,
                ...n
            },
            s = { ...r.platform,
                _c: o
            };
        return lu(e, t, { ...r,
            platform: s
        })
    };
var Zu = typeof document < "u",
    Ju = function() {},
    Ot = Zu ? a.useLayoutEffect : Ju;

function Ft(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, o, r;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (o = n; o-- !== 0;)
                if (!Ft(e[o], t[o])) return !1;
            return !0
        }
        if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length) return !1;
        for (o = n; o-- !== 0;)
            if (!{}.hasOwnProperty.call(t, r[o])) return !1;
        for (o = n; o-- !== 0;) {
            const s = r[o];
            if (!(s === "_owner" && e.$$typeof) && !Ft(e[s], t[s])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function cs(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function vr(e, t) {
    const n = cs(e);
    return Math.round(t * n) / n
}

function Fn(e) {
    const t = a.useRef(e);
    return Ot(() => {
        t.current = e
    }), t
}

function Qu(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: o = [],
        platform: r,
        elements: {
            reference: s,
            floating: i
        } = {},
        transform: c = !0,
        whileElementsMounted: l,
        open: u
    } = e, [f, d] = a.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [m, v] = a.useState(o);
    Ft(m, o) || v(o);
    const [w, h] = a.useState(null), [g, x] = a.useState(null), y = a.useCallback(M => {
        M !== P.current && (P.current = M, h(M))
    }, []), b = a.useCallback(M => {
        M !== E.current && (E.current = M, x(M))
    }, []), S = s || w, C = i || g, P = a.useRef(null), E = a.useRef(null), I = a.useRef(f), D = l != null, O = Fn(l), N = Fn(r), F = Fn(u), V = a.useCallback(() => {
        if (!P.current || !E.current) return;
        const M = {
            placement: t,
            strategy: n,
            middleware: m
        };
        N.current && (M.platform = N.current), qu(P.current, E.current, M).then(T => {
            const U = { ...T,
                isPositioned: F.current !== !1
            };
            _.current && !Ft(I.current, U) && (I.current = U, ft.flushSync(() => {
                d(U)
            }))
        })
    }, [m, t, n, N, F]);
    Ot(() => {
        u === !1 && I.current.isPositioned && (I.current.isPositioned = !1, d(M => ({ ...M,
            isPositioned: !1
        })))
    }, [u]);
    const _ = a.useRef(!1);
    Ot(() => (_.current = !0, () => {
        _.current = !1
    }), []), Ot(() => {
        if (S && (P.current = S), C && (E.current = C), S && C) {
            if (O.current) return O.current(S, C, V);
            V()
        }
    }, [S, C, V, O, D]);
    const B = a.useMemo(() => ({
            reference: P,
            floating: E,
            setReference: y,
            setFloating: b
        }), [y, b]),
        k = a.useMemo(() => ({
            reference: S,
            floating: C
        }), [S, C]),
        $ = a.useMemo(() => {
            const M = {
                position: n,
                left: 0,
                top: 0
            };
            if (!k.floating) return M;
            const T = vr(k.floating, f.x),
                U = vr(k.floating, f.y);
            return c ? { ...M,
                transform: "translate(" + T + "px, " + U + "px)",
                ...cs(k.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: T,
                top: U
            }
        }, [n, c, k.floating, f.x, f.y]);
    return a.useMemo(() => ({ ...f,
        update: V,
        refs: B,
        elements: k,
        floatingStyles: $
    }), [f, V, B, k, $])
}
const ed = e => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current")
        }
        return {
            name: "arrow",
            options: e,
            fn(n) {
                const {
                    element: o,
                    padding: r
                } = typeof e == "function" ? e(n) : e;
                return o && t(o) ? o.current != null ? hr({
                    element: o.current,
                    padding: r
                }).fn(n) : {} : o ? hr({
                    element: o,
                    padding: r
                }).fn(n) : {}
            }
        }
    },
    td = (e, t) => ({ ...Ku(e),
        options: [e, t]
    }),
    nd = (e, t) => ({ ...Uu(e),
        options: [e, t]
    }),
    od = (e, t) => ({ ...Xu(e),
        options: [e, t]
    }),
    rd = (e, t) => ({ ...Gu(e),
        options: [e, t]
    }),
    sd = (e, t) => ({ ...zu(e),
        options: [e, t]
    }),
    id = (e, t) => ({ ...Yu(e),
        options: [e, t]
    }),
    ad = (e, t) => ({ ...ed(e),
        options: [e, t]
    });
var cd = "Arrow",
    ls = a.forwardRef((e, t) => {
        const {
            children: n,
            width: o = 10,
            height: r = 5,
            ...s
        } = e;
        return p.jsx(A.svg, { ...s,
            ref: t,
            width: o,
            height: r,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : p.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
ls.displayName = cd;
var ld = ls;

function Qt(e) {
    const [t, n] = a.useState(void 0);
    return z(() => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const o = new ResizeObserver(r => {
                if (!Array.isArray(r) || !r.length) return;
                const s = r[0];
                let i, c;
                if ("borderBoxSize" in s) {
                    const l = s.borderBoxSize,
                        u = Array.isArray(l) ? l[0] : l;
                    i = u.inlineSize, c = u.blockSize
                } else i = e.offsetWidth, c = e.offsetHeight;
                n({
                    width: i,
                    height: c
                })
            });
            return o.observe(e, {
                box: "border-box"
            }), () => o.unobserve(e)
        } else n(void 0)
    }, [e]), t
}
var wo = "Popper",
    [us, Ae] = Z(wo),
    [ud, ds] = us(wo),
    fs = e => {
        const {
            __scopePopper: t,
            children: n
        } = e, [o, r] = a.useState(null);
        return p.jsx(ud, {
            scope: t,
            anchor: o,
            onAnchorChange: r,
            children: n
        })
    };
fs.displayName = wo;
var ps = "PopperAnchor",
    ms = a.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            virtualRef: o,
            ...r
        } = e, s = ds(ps, n), i = a.useRef(null), c = j(t, i), l = a.useRef(null);
        return a.useEffect(() => {
            const u = l.current;
            l.current = o ? .current || i.current, u !== l.current && s.onAnchorChange(l.current)
        }), o ? null : p.jsx(A.div, { ...r,
            ref: c
        })
    });
ms.displayName = ps;
var xo = "PopperContent",
    [dd, fd] = us(xo),
    hs = a.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            side: o = "bottom",
            sideOffset: r = 0,
            align: s = "center",
            alignOffset: i = 0,
            arrowPadding: c = 0,
            avoidCollisions: l = !0,
            collisionBoundary: u = [],
            collisionPadding: f = 0,
            sticky: d = "partial",
            hideWhenDetached: m = !1,
            updatePositionStrategy: v = "optimized",
            onPlaced: w,
            ...h
        } = e, g = ds(xo, n), [x, y] = a.useState(null), b = j(t, L => y(L)), [S, C] = a.useState(null), P = Qt(S), E = P ? .width ? ? 0, I = P ? .height ? ? 0, D = o + (s !== "center" ? "-" + s : ""), O = typeof f == "number" ? f : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...f
        }, N = Array.isArray(u) ? u : [u], F = N.length > 0, V = {
            padding: O,
            boundary: N.filter(md),
            altBoundary: F
        }, {
            refs: _,
            floatingStyles: B,
            placement: k,
            isPositioned: $,
            middlewareData: M
        } = Qu({
            strategy: "fixed",
            placement: D,
            whileElementsMounted: (...L) => Wu(...L, {
                animationFrame: v === "always"
            }),
            elements: {
                reference: g.anchor
            },
            middleware: [td({
                mainAxis: r + I,
                alignmentAxis: i
            }), l && nd({
                mainAxis: !0,
                crossAxis: !1,
                limiter: d === "partial" ? od() : void 0,
                ...V
            }), l && rd({ ...V
            }), sd({ ...V,
                apply: ({
                    elements: L,
                    rects: H,
                    availableWidth: ee,
                    availableHeight: W
                }) => {
                    const {
                        width: K,
                        height: Y
                    } = H.reference, ce = L.floating.style;
                    ce.setProperty("--radix-popper-available-width", `${ee}px`), ce.setProperty("--radix-popper-available-height", `${W}px`), ce.setProperty("--radix-popper-anchor-width", `${K}px`), ce.setProperty("--radix-popper-anchor-height", `${Y}px`)
                }
            }), S && ad({
                element: S,
                padding: c
            }), hd({
                arrowWidth: E,
                arrowHeight: I
            }), m && id({
                strategy: "referenceHidden",
                ...V
            })]
        }), [T, U] = ws(k), q = G(w);
        z(() => {
            $ && q ? .()
        }, [$, q]);
        const J = M.arrow ? .x,
            ne = M.arrow ? .y,
            Q = M.arrow ? .centerOffset !== 0,
            [be, oe] = a.useState();
        return z(() => {
            x && oe(window.getComputedStyle(x).zIndex)
        }, [x]), p.jsx("div", {
            ref: _.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...B,
                transform: $ ? B.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: be,
                "--radix-popper-transform-origin": [M.transformOrigin ? .x, M.transformOrigin ? .y].join(" "),
                ...M.hide ? .referenceHidden && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: p.jsx(dd, {
                scope: n,
                placedSide: T,
                onArrowChange: C,
                arrowX: J,
                arrowY: ne,
                shouldHideArrow: Q,
                children: p.jsx(A.div, {
                    "data-side": T,
                    "data-align": U,
                    ...h,
                    ref: b,
                    style: { ...h.style,
                        animation: $ ? void 0 : "none"
                    }
                })
            })
        })
    });
hs.displayName = xo;
var vs = "PopperArrow",
    pd = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    gs = a.forwardRef(function(t, n) {
        const {
            __scopePopper: o,
            ...r
        } = t, s = fd(vs, o), i = pd[s.placedSide];
        return p.jsx("span", {
            ref: s.onArrowChange,
            style: {
                position: "absolute",
                left: s.arrowX,
                top: s.arrowY,
                [i]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[s.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[s.placedSide],
                visibility: s.shouldHideArrow ? "hidden" : void 0
            },
            children: p.jsx(ld, { ...r,
                ref: n,
                style: { ...r.style,
                    display: "block"
                }
            })
        })
    });
gs.displayName = vs;

function md(e) {
    return e !== null
}
var hd = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        const {
            placement: n,
            rects: o,
            middlewareData: r
        } = t, i = r.arrow ? .centerOffset !== 0, c = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [u, f] = ws(n), d = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[f], m = (r.arrow ? .x ? ? 0) + c / 2, v = (r.arrow ? .y ? ? 0) + l / 2;
        let w = "",
            h = "";
        return u === "bottom" ? (w = i ? d : `${m}px`, h = `${-l}px`) : u === "top" ? (w = i ? d : `${m}px`, h = `${o.floating.height+l}px`) : u === "right" ? (w = `${-l}px`, h = i ? d : `${v}px`) : u === "left" && (w = `${o.floating.width+l}px`, h = i ? d : `${v}px`), {
            data: {
                x: w,
                y: h
            }
        }
    }
});

function ws(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n]
}
var en = fs,
    gt = ms,
    tn = hs,
    nn = gs;

function on(e) {
    const t = a.useRef({
        value: e,
        previous: e
    });
    return a.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
}
var xs = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
    }),
    vd = "VisuallyHidden",
    rn = a.forwardRef((e, t) => p.jsx(A.span, { ...e,
        ref: t,
        style: { ...xs,
            ...e.style
        }
    }));
rn.displayName = vd;
var gd = rn,
    wd = [" ", "Enter", "ArrowUp", "ArrowDown"],
    xd = [" ", "Enter"],
    je = "Select",
    [sn, an, yd] = ht(je),
    [tt] = Z(je, [yd, Ae]),
    cn = Ae(),
    [bd, Ie] = tt(je),
    [Sd, Cd] = tt(je),
    ys = e => {
        const {
            __scopeSelect: t,
            children: n,
            open: o,
            defaultOpen: r,
            onOpenChange: s,
            value: i,
            defaultValue: c,
            onValueChange: l,
            dir: u,
            name: f,
            autoComplete: d,
            disabled: m,
            required: v,
            form: w
        } = e, h = cn(t), [g, x] = a.useState(null), [y, b] = a.useState(null), [S, C] = a.useState(!1), P = Je(u), [E, I] = ae({
            prop: o,
            defaultProp: r ? ? !1,
            onChange: s,
            caller: je
        }), [D, O] = ae({
            prop: i,
            defaultProp: c,
            onChange: l,
            caller: je
        }), N = a.useRef(null), F = g ? w || !!g.closest("form") : !0, [V, _] = a.useState(new Set), B = Array.from(V).map(k => k.props.value).join(";");
        return p.jsx(en, { ...h,
            children: p.jsxs(bd, {
                required: v,
                scope: t,
                trigger: g,
                onTriggerChange: x,
                valueNode: y,
                onValueNodeChange: b,
                valueNodeHasChildren: S,
                onValueNodeHasChildrenChange: C,
                contentId: se(),
                value: D,
                onValueChange: O,
                open: E,
                onOpenChange: I,
                dir: P,
                triggerPointerDownPosRef: N,
                disabled: m,
                children: [p.jsx(sn.Provider, {
                    scope: t,
                    children: p.jsx(Sd, {
                        scope: e.__scopeSelect,
                        onNativeOptionAdd: a.useCallback(k => {
                            _($ => new Set($).add(k))
                        }, []),
                        onNativeOptionRemove: a.useCallback(k => {
                            _($ => {
                                const M = new Set($);
                                return M.delete(k), M
                            })
                        }, []),
                        children: n
                    })
                }), F ? p.jsxs(Ks, {
                    "aria-hidden": !0,
                    required: v,
                    tabIndex: -1,
                    name: f,
                    autoComplete: d,
                    value: D,
                    onChange: k => O(k.target.value),
                    disabled: m,
                    form: w,
                    children: [D === void 0 ? p.jsx("option", {
                        value: ""
                    }) : null, Array.from(V)]
                }, B) : null]
            })
        })
    };
ys.displayName = je;
var bs = "SelectTrigger",
    Ss = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            disabled: o = !1,
            ...r
        } = e, s = cn(n), i = Ie(bs, n), c = i.disabled || o, l = j(t, i.onTriggerChange), u = an(n), f = a.useRef("touch"), [d, m, v] = Gs(h => {
            const g = u().filter(b => !b.disabled),
                x = g.find(b => b.value === i.value),
                y = zs(g, h, x);
            y !== void 0 && i.onValueChange(y.value)
        }), w = h => {
            c || (i.onOpenChange(!0), v()), h && (i.triggerPointerDownPosRef.current = {
                x: Math.round(h.pageX),
                y: Math.round(h.pageY)
            })
        };
        return p.jsx(gt, {
            asChild: !0,
            ...s,
            children: p.jsx(A.button, {
                type: "button",
                role: "combobox",
                "aria-controls": i.contentId,
                "aria-expanded": i.open,
                "aria-required": i.required,
                "aria-autocomplete": "none",
                dir: i.dir,
                "data-state": i.open ? "open" : "closed",
                disabled: c,
                "data-disabled": c ? "" : void 0,
                "data-placeholder": Us(i.value) ? "" : void 0,
                ...r,
                ref: l,
                onClick: R(r.onClick, h => {
                    h.currentTarget.focus(), f.current !== "mouse" && w(h)
                }),
                onPointerDown: R(r.onPointerDown, h => {
                    f.current = h.pointerType;
                    const g = h.target;
                    g.hasPointerCapture(h.pointerId) && g.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (w(h), h.preventDefault())
                }),
                onKeyDown: R(r.onKeyDown, h => {
                    const g = d.current !== "";
                    !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && m(h.key), !(g && h.key === " ") && wd.includes(h.key) && (w(), h.preventDefault())
                })
            })
        })
    });
Ss.displayName = bs;
var Cs = "SelectValue",
    Es = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            className: o,
            style: r,
            children: s,
            placeholder: i = "",
            ...c
        } = e, l = Ie(Cs, n), {
            onValueNodeHasChildrenChange: u
        } = l, f = s !== void 0, d = j(t, l.onValueNodeChange);
        return z(() => {
            u(f)
        }, [u, f]), p.jsx(A.span, { ...c,
            ref: d,
            style: {
                pointerEvents: "none"
            },
            children: Us(l.value) ? p.jsx(p.Fragment, {
                children: i
            }) : s
        })
    });
Es.displayName = Cs;
var Ed = "SelectIcon",
    Rs = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            children: o,
            ...r
        } = e;
        return p.jsx(A.span, {
            "aria-hidden": !0,
            ...r,
            ref: t,
            children: o || "▼"
        })
    });
Rs.displayName = Ed;
var Rd = "SelectPortal",
    Ps = e => p.jsx(Be, {
        asChild: !0,
        ...e
    });
Ps.displayName = Rd;
var Fe = "SelectContent",
    Ts = a.forwardRef((e, t) => {
        const n = Ie(Fe, e.__scopeSelect),
            [o, r] = a.useState();
        if (z(() => {
                r(new DocumentFragment)
            }, []), !n.open) {
            const s = o;
            return s ? ft.createPortal(p.jsx(_s, {
                scope: e.__scopeSelect,
                children: p.jsx(sn.Slot, {
                    scope: e.__scopeSelect,
                    children: p.jsx("div", {
                        children: e.children
                    })
                })
            }), s) : null
        }
        return p.jsx(As, { ...e,
            ref: t
        })
    });
Ts.displayName = Fe;
var de = 10,
    [_s, Me] = tt(Fe),
    Pd = "SelectContentImpl",
    Td = Pe("SelectContent.RemoveScroll"),
    As = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            position: o = "item-aligned",
            onCloseAutoFocus: r,
            onEscapeKeyDown: s,
            onPointerDownOutside: i,
            side: c,
            sideOffset: l,
            align: u,
            alignOffset: f,
            arrowPadding: d,
            collisionBoundary: m,
            collisionPadding: v,
            sticky: w,
            hideWhenDetached: h,
            avoidCollisions: g,
            ...x
        } = e, y = Ie(Fe, n), [b, S] = a.useState(null), [C, P] = a.useState(null), E = j(t, L => S(L)), [I, D] = a.useState(null), [O, N] = a.useState(null), F = an(n), [V, _] = a.useState(!1), B = a.useRef(!1);
        a.useEffect(() => {
            if (b) return zt(b)
        }, [b]), Ut();
        const k = a.useCallback(L => {
                const [H, ...ee] = F().map(Y => Y.ref.current), [W] = ee.slice(-1), K = document.activeElement;
                for (const Y of L)
                    if (Y === K || (Y ? .scrollIntoView({
                            block: "nearest"
                        }), Y === H && C && (C.scrollTop = 0), Y === W && C && (C.scrollTop = C.scrollHeight), Y ? .focus(), document.activeElement !== K)) return
            }, [F, C]),
            $ = a.useCallback(() => k([I, b]), [k, I, b]);
        a.useEffect(() => {
            V && $()
        }, [V, $]);
        const {
            onOpenChange: M,
            triggerPointerDownPosRef: T
        } = y;
        a.useEffect(() => {
            if (b) {
                let L = {
                    x: 0,
                    y: 0
                };
                const H = W => {
                        L = {
                            x: Math.abs(Math.round(W.pageX) - (T.current ? .x ? ? 0)),
                            y: Math.abs(Math.round(W.pageY) - (T.current ? .y ? ? 0))
                        }
                    },
                    ee = W => {
                        L.x <= 10 && L.y <= 10 ? W.preventDefault() : b.contains(W.target) || M(!1), document.removeEventListener("pointermove", H), T.current = null
                    };
                return T.current !== null && (document.addEventListener("pointermove", H), document.addEventListener("pointerup", ee, {
                    capture: !0,
                    once: !0
                })), () => {
                    document.removeEventListener("pointermove", H), document.removeEventListener("pointerup", ee, {
                        capture: !0
                    })
                }
            }
        }, [b, M, T]), a.useEffect(() => {
            const L = () => M(!1);
            return window.addEventListener("blur", L), window.addEventListener("resize", L), () => {
                window.removeEventListener("blur", L), window.removeEventListener("resize", L)
            }
        }, [M]);
        const [U, q] = Gs(L => {
            const H = F().filter(K => !K.disabled),
                ee = H.find(K => K.ref.current === document.activeElement),
                W = zs(H, L, ee);
            W && setTimeout(() => W.ref.current.focus())
        }), J = a.useCallback((L, H, ee) => {
            const W = !B.current && !ee;
            (y.value !== void 0 && y.value === H || W) && (D(L), W && (B.current = !0))
        }, [y.value]), ne = a.useCallback(() => b ? .focus(), [b]), Q = a.useCallback((L, H, ee) => {
            const W = !B.current && !ee;
            (y.value !== void 0 && y.value === H || W) && N(L)
        }, [y.value]), be = o === "popper" ? Gn : Is, oe = be === Gn ? {
            side: c,
            sideOffset: l,
            align: u,
            alignOffset: f,
            arrowPadding: d,
            collisionBoundary: m,
            collisionPadding: v,
            sticky: w,
            hideWhenDetached: h,
            avoidCollisions: g
        } : {};
        return p.jsx(_s, {
            scope: n,
            content: b,
            viewport: C,
            onViewportChange: P,
            itemRefCallback: J,
            selectedItem: I,
            onItemLeave: ne,
            itemTextRefCallback: Q,
            focusSelectedItem: $,
            selectedItemText: O,
            position: o,
            isPositioned: V,
            searchRef: U,
            children: p.jsx(mt, {
                as: Td,
                allowPinchZoom: !0,
                children: p.jsx(pt, {
                    asChild: !0,
                    trapped: y.open,
                    onMountAutoFocus: L => {
                        L.preventDefault()
                    },
                    onUnmountAutoFocus: R(r, L => {
                        y.trigger ? .focus({
                            preventScroll: !0
                        }), L.preventDefault()
                    }),
                    children: p.jsx($e, {
                        asChild: !0,
                        disableOutsidePointerEvents: !0,
                        onEscapeKeyDown: s,
                        onPointerDownOutside: i,
                        onFocusOutside: L => L.preventDefault(),
                        onDismiss: () => y.onOpenChange(!1),
                        children: p.jsx(be, {
                            role: "listbox",
                            id: y.contentId,
                            "data-state": y.open ? "open" : "closed",
                            dir: y.dir,
                            onContextMenu: L => L.preventDefault(),
                            ...x,
                            ...oe,
                            onPlaced: () => _(!0),
                            ref: E,
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                outline: "none",
                                ...x.style
                            },
                            onKeyDown: R(x.onKeyDown, L => {
                                const H = L.ctrlKey || L.altKey || L.metaKey;
                                if (L.key === "Tab" && L.preventDefault(), !H && L.key.length === 1 && q(L.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(L.key)) {
                                    let W = F().filter(K => !K.disabled).map(K => K.ref.current);
                                    if (["ArrowUp", "End"].includes(L.key) && (W = W.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(L.key)) {
                                        const K = L.target,
                                            Y = W.indexOf(K);
                                        W = W.slice(Y + 1)
                                    }
                                    setTimeout(() => k(W)), L.preventDefault()
                                }
                            })
                        })
                    })
                })
            })
        })
    });
As.displayName = Pd;
var _d = "SelectItemAlignedPosition",
    Is = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            onPlaced: o,
            ...r
        } = e, s = Ie(Fe, n), i = Me(Fe, n), [c, l] = a.useState(null), [u, f] = a.useState(null), d = j(t, E => f(E)), m = an(n), v = a.useRef(!1), w = a.useRef(!0), {
            viewport: h,
            selectedItem: g,
            selectedItemText: x,
            focusSelectedItem: y
        } = i, b = a.useCallback(() => {
            if (s.trigger && s.valueNode && c && u && h && g && x) {
                const E = s.trigger.getBoundingClientRect(),
                    I = u.getBoundingClientRect(),
                    D = s.valueNode.getBoundingClientRect(),
                    O = x.getBoundingClientRect();
                if (s.dir !== "rtl") {
                    const K = O.left - I.left,
                        Y = D.left - K,
                        ce = E.left - Y,
                        Oe = E.width + ce,
                        En = Math.max(Oe, I.width),
                        Rn = window.innerWidth - de,
                        Pn = it(Y, [de, Math.max(de, Rn - En)]);
                    c.style.minWidth = Oe + "px", c.style.left = Pn + "px"
                } else {
                    const K = I.right - O.right,
                        Y = window.innerWidth - D.right - K,
                        ce = window.innerWidth - E.right - Y,
                        Oe = E.width + ce,
                        En = Math.max(Oe, I.width),
                        Rn = window.innerWidth - de,
                        Pn = it(Y, [de, Math.max(de, Rn - En)]);
                    c.style.minWidth = Oe + "px", c.style.right = Pn + "px"
                }
                const N = m(),
                    F = window.innerHeight - de * 2,
                    V = h.scrollHeight,
                    _ = window.getComputedStyle(u),
                    B = parseInt(_.borderTopWidth, 10),
                    k = parseInt(_.paddingTop, 10),
                    $ = parseInt(_.borderBottomWidth, 10),
                    M = parseInt(_.paddingBottom, 10),
                    T = B + k + V + M + $,
                    U = Math.min(g.offsetHeight * 5, T),
                    q = window.getComputedStyle(h),
                    J = parseInt(q.paddingTop, 10),
                    ne = parseInt(q.paddingBottom, 10),
                    Q = E.top + E.height / 2 - de,
                    be = F - Q,
                    oe = g.offsetHeight / 2,
                    L = g.offsetTop + oe,
                    H = B + k + L,
                    ee = T - H;
                if (H <= Q) {
                    const K = N.length > 0 && g === N[N.length - 1].ref.current;
                    c.style.bottom = "0px";
                    const Y = u.clientHeight - h.offsetTop - h.offsetHeight,
                        ce = Math.max(be, oe + (K ? ne : 0) + Y + $),
                        Oe = H + ce;
                    c.style.height = Oe + "px"
                } else {
                    const K = N.length > 0 && g === N[0].ref.current;
                    c.style.top = "0px";
                    const ce = Math.max(Q, B + h.offsetTop + (K ? J : 0) + oe) + ee;
                    c.style.height = ce + "px", h.scrollTop = H - Q + h.offsetTop
                }
                c.style.margin = `${de}px 0`, c.style.minHeight = U + "px", c.style.maxHeight = F + "px", o ? .(), requestAnimationFrame(() => v.current = !0)
            }
        }, [m, s.trigger, s.valueNode, c, u, h, g, x, s.dir, o]);
        z(() => b(), [b]);
        const [S, C] = a.useState();
        z(() => {
            u && C(window.getComputedStyle(u).zIndex)
        }, [u]);
        const P = a.useCallback(E => {
            E && w.current === !0 && (b(), y ? .(), w.current = !1)
        }, [b, y]);
        return p.jsx(Id, {
            scope: n,
            contentWrapper: c,
            shouldExpandOnScrollRef: v,
            onScrollButtonChange: P,
            children: p.jsx("div", {
                ref: l,
                style: {
                    display: "flex",
                    flexDirection: "column",
                    position: "fixed",
                    zIndex: S
                },
                children: p.jsx(A.div, { ...r,
                    ref: d,
                    style: {
                        boxSizing: "border-box",
                        maxHeight: "100%",
                        ...r.style
                    }
                })
            })
        })
    });
Is.displayName = _d;
var Ad = "SelectPopperPosition",
    Gn = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            align: o = "start",
            collisionPadding: r = de,
            ...s
        } = e, i = cn(n);
        return p.jsx(tn, { ...i,
            ...s,
            ref: t,
            align: o,
            collisionPadding: r,
            style: {
                boxSizing: "border-box",
                ...s.style,
                "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
Gn.displayName = Ad;
var [Id, yo] = tt(Fe, {}), zn = "SelectViewport", Ms = a.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        nonce: o,
        ...r
    } = e, s = Me(zn, n), i = yo(zn, n), c = j(t, s.onViewportChange), l = a.useRef(0);
    return p.jsxs(p.Fragment, {
        children: [p.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: o
        }), p.jsx(sn.Slot, {
            scope: n,
            children: p.jsx(A.div, {
                "data-radix-select-viewport": "",
                role: "presentation",
                ...r,
                ref: c,
                style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...r.style
                },
                onScroll: R(r.onScroll, u => {
                    const f = u.currentTarget,
                        {
                            contentWrapper: d,
                            shouldExpandOnScrollRef: m
                        } = i;
                    if (m ? .current && d) {
                        const v = Math.abs(l.current - f.scrollTop);
                        if (v > 0) {
                            const w = window.innerHeight - de * 2,
                                h = parseFloat(d.style.minHeight),
                                g = parseFloat(d.style.height),
                                x = Math.max(h, g);
                            if (x < w) {
                                const y = x + v,
                                    b = Math.min(w, y),
                                    S = y - b;
                                d.style.height = b + "px", d.style.bottom === "0px" && (f.scrollTop = S > 0 ? S : 0, d.style.justifyContent = "flex-end")
                            }
                        }
                    }
                    l.current = f.scrollTop
                })
            })
        })]
    })
});
Ms.displayName = zn;
var Ds = "SelectGroup",
    [Md, Dd] = tt(Ds),
    Od = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...o
        } = e, r = se();
        return p.jsx(Md, {
            scope: n,
            id: r,
            children: p.jsx(A.div, {
                role: "group",
                "aria-labelledby": r,
                ...o,
                ref: t
            })
        })
    });
Od.displayName = Ds;
var Os = "SelectLabel",
    Ns = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...o
        } = e, r = Dd(Os, n);
        return p.jsx(A.div, {
            id: r.id,
            ...o,
            ref: t
        })
    });
Ns.displayName = Os;
var $t = "SelectItem",
    [Nd, Ls] = tt($t),
    ks = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            value: o,
            disabled: r = !1,
            textValue: s,
            ...i
        } = e, c = Ie($t, n), l = Me($t, n), u = c.value === o, [f, d] = a.useState(s ? ? ""), [m, v] = a.useState(!1), w = j(t, y => l.itemRefCallback ? .(y, o, r)), h = se(), g = a.useRef("touch"), x = () => {
            r || (c.onValueChange(o), c.onOpenChange(!1))
        };
        if (o === "") throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
        return p.jsx(Nd, {
            scope: n,
            value: o,
            disabled: r,
            textId: h,
            isSelected: u,
            onItemTextChange: a.useCallback(y => {
                d(b => b || (y ? .textContent ? ? "").trim())
            }, []),
            children: p.jsx(sn.ItemSlot, {
                scope: n,
                value: o,
                disabled: r,
                textValue: f,
                children: p.jsx(A.div, {
                    role: "option",
                    "aria-labelledby": h,
                    "data-highlighted": m ? "" : void 0,
                    "aria-selected": u && m,
                    "data-state": u ? "checked" : "unchecked",
                    "aria-disabled": r || void 0,
                    "data-disabled": r ? "" : void 0,
                    tabIndex: r ? void 0 : -1,
                    ...i,
                    ref: w,
                    onFocus: R(i.onFocus, () => v(!0)),
                    onBlur: R(i.onBlur, () => v(!1)),
                    onClick: R(i.onClick, () => {
                        g.current !== "mouse" && x()
                    }),
                    onPointerUp: R(i.onPointerUp, () => {
                        g.current === "mouse" && x()
                    }),
                    onPointerDown: R(i.onPointerDown, y => {
                        g.current = y.pointerType
                    }),
                    onPointerMove: R(i.onPointerMove, y => {
                        g.current = y.pointerType, r ? l.onItemLeave ? .() : g.current === "mouse" && y.currentTarget.focus({
                            preventScroll: !0
                        })
                    }),
                    onPointerLeave: R(i.onPointerLeave, y => {
                        y.currentTarget === document.activeElement && l.onItemLeave ? .()
                    }),
                    onKeyDown: R(i.onKeyDown, y => {
                        l.searchRef ? .current !== "" && y.key === " " || (xd.includes(y.key) && x(), y.key === " " && y.preventDefault())
                    })
                })
            })
        })
    });
ks.displayName = $t;
var rt = "SelectItemText",
    js = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            className: o,
            style: r,
            ...s
        } = e, i = Ie(rt, n), c = Me(rt, n), l = Ls(rt, n), u = Cd(rt, n), [f, d] = a.useState(null), m = j(t, x => d(x), l.onItemTextChange, x => c.itemTextRefCallback ? .(x, l.value, l.disabled)), v = f ? .textContent, w = a.useMemo(() => p.jsx("option", {
            value: l.value,
            disabled: l.disabled,
            children: v
        }, l.value), [l.disabled, l.value, v]), {
            onNativeOptionAdd: h,
            onNativeOptionRemove: g
        } = u;
        return z(() => (h(w), () => g(w)), [h, g, w]), p.jsxs(p.Fragment, {
            children: [p.jsx(A.span, {
                id: l.textId,
                ...s,
                ref: m
            }), l.isSelected && i.valueNode && !i.valueNodeHasChildren ? ft.createPortal(s.children, i.valueNode) : null]
        })
    });
js.displayName = rt;
var Fs = "SelectItemIndicator",
    $s = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...o
        } = e;
        return Ls(Fs, n).isSelected ? p.jsx(A.span, {
            "aria-hidden": !0,
            ...o,
            ref: t
        }) : null
    });
$s.displayName = Fs;
var Yn = "SelectScrollUpButton",
    Bs = a.forwardRef((e, t) => {
        const n = Me(Yn, e.__scopeSelect),
            o = yo(Yn, e.__scopeSelect),
            [r, s] = a.useState(!1),
            i = j(t, o.onScrollButtonChange);
        return z(() => {
            if (n.viewport && n.isPositioned) {
                let c = function() {
                    const u = l.scrollTop > 0;
                    s(u)
                };
                const l = n.viewport;
                return c(), l.addEventListener("scroll", c), () => l.removeEventListener("scroll", c)
            }
        }, [n.viewport, n.isPositioned]), r ? p.jsx(Hs, { ...e,
            ref: i,
            onAutoScroll: () => {
                const {
                    viewport: c,
                    selectedItem: l
                } = n;
                c && l && (c.scrollTop = c.scrollTop - l.offsetHeight)
            }
        }) : null
    });
Bs.displayName = Yn;
var Xn = "SelectScrollDownButton",
    Vs = a.forwardRef((e, t) => {
        const n = Me(Xn, e.__scopeSelect),
            o = yo(Xn, e.__scopeSelect),
            [r, s] = a.useState(!1),
            i = j(t, o.onScrollButtonChange);
        return z(() => {
            if (n.viewport && n.isPositioned) {
                let c = function() {
                    const u = l.scrollHeight - l.clientHeight,
                        f = Math.ceil(l.scrollTop) < u;
                    s(f)
                };
                const l = n.viewport;
                return c(), l.addEventListener("scroll", c), () => l.removeEventListener("scroll", c)
            }
        }, [n.viewport, n.isPositioned]), r ? p.jsx(Hs, { ...e,
            ref: i,
            onAutoScroll: () => {
                const {
                    viewport: c,
                    selectedItem: l
                } = n;
                c && l && (c.scrollTop = c.scrollTop + l.offsetHeight)
            }
        }) : null
    });
Vs.displayName = Xn;
var Hs = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            onAutoScroll: o,
            ...r
        } = e, s = Me("SelectScrollButton", n), i = a.useRef(null), c = an(n), l = a.useCallback(() => {
            i.current !== null && (window.clearInterval(i.current), i.current = null)
        }, []);
        return a.useEffect(() => () => l(), [l]), z(() => {
            c().find(f => f.ref.current === document.activeElement) ? .ref.current ? .scrollIntoView({
                block: "nearest"
            })
        }, [c]), p.jsx(A.div, {
            "aria-hidden": !0,
            ...r,
            ref: t,
            style: {
                flexShrink: 0,
                ...r.style
            },
            onPointerDown: R(r.onPointerDown, () => {
                i.current === null && (i.current = window.setInterval(o, 50))
            }),
            onPointerMove: R(r.onPointerMove, () => {
                s.onItemLeave ? .(), i.current === null && (i.current = window.setInterval(o, 50))
            }),
            onPointerLeave: R(r.onPointerLeave, () => {
                l()
            })
        })
    }),
    Ld = "SelectSeparator",
    Ws = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...o
        } = e;
        return p.jsx(A.div, {
            "aria-hidden": !0,
            ...o,
            ref: t
        })
    });
Ws.displayName = Ld;
var qn = "SelectArrow",
    kd = a.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...o
        } = e, r = cn(n), s = Ie(qn, n), i = Me(qn, n);
        return s.open && i.position === "popper" ? p.jsx(nn, { ...r,
            ...o,
            ref: t
        }) : null
    });
kd.displayName = qn;
var jd = "SelectBubbleInput",
    Ks = a.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...n
    }, o) => {
        const r = a.useRef(null),
            s = j(o, r),
            i = on(t);
        return a.useEffect(() => {
            const c = r.current;
            if (!c) return;
            const l = window.HTMLSelectElement.prototype,
                f = Object.getOwnPropertyDescriptor(l, "value").set;
            if (i !== t && f) {
                const d = new Event("change", {
                    bubbles: !0
                });
                f.call(c, t), c.dispatchEvent(d)
            }
        }, [i, t]), p.jsx(A.select, { ...n,
            style: { ...xs,
                ...n.style
            },
            ref: s,
            defaultValue: t
        })
    });
Ks.displayName = jd;

function Us(e) {
    return e === "" || e === void 0
}

function Gs(e) {
    const t = G(e),
        n = a.useRef(""),
        o = a.useRef(0),
        r = a.useCallback(i => {
            const c = n.current + i;
            t(c), (function l(u) {
                n.current = u, window.clearTimeout(o.current), u !== "" && (o.current = window.setTimeout(() => l(""), 1e3))
            })(c)
        }, [t]),
        s = a.useCallback(() => {
            n.current = "", window.clearTimeout(o.current)
        }, []);
    return a.useEffect(() => () => window.clearTimeout(o.current), []), [n, r, s]
}

function zs(e, t, n) {
    const r = t.length > 1 && Array.from(t).every(u => u === t[0]) ? t[0] : t,
        s = n ? e.indexOf(n) : -1;
    let i = Fd(e, Math.max(s, 0));
    r.length === 1 && (i = i.filter(u => u !== n));
    const l = i.find(u => u.textValue.toLowerCase().startsWith(r.toLowerCase()));
    return l !== n ? l : void 0
}

function Fd(e, t) {
    return e.map((n, o) => e[(t + o) % e.length])
}
var Zm = ys,
    Jm = Ss,
    Qm = Es,
    eh = Rs,
    th = Ps,
    nh = Ts,
    oh = Ms,
    rh = Ns,
    sh = ks,
    ih = js,
    ah = $s,
    ch = Bs,
    lh = Vs,
    uh = Ws,
    [ln] = Z("Tooltip", [Ae]),
    un = Ae(),
    Ys = "TooltipProvider",
    $d = 700,
    Zn = "tooltip.open",
    [Bd, bo] = ln(Ys),
    Xs = e => {
        const {
            __scopeTooltip: t,
            delayDuration: n = $d,
            skipDelayDuration: o = 300,
            disableHoverableContent: r = !1,
            children: s
        } = e, i = a.useRef(!0), c = a.useRef(!1), l = a.useRef(0);
        return a.useEffect(() => {
            const u = l.current;
            return () => window.clearTimeout(u)
        }, []), p.jsx(Bd, {
            scope: t,
            isOpenDelayedRef: i,
            delayDuration: n,
            onOpen: a.useCallback(() => {
                window.clearTimeout(l.current), i.current = !1
            }, []),
            onClose: a.useCallback(() => {
                window.clearTimeout(l.current), l.current = window.setTimeout(() => i.current = !0, o)
            }, [o]),
            isPointerInTransitRef: c,
            onPointerInTransitChange: a.useCallback(u => {
                c.current = u
            }, []),
            disableHoverableContent: r,
            children: s
        })
    };
Xs.displayName = Ys;
var lt = "Tooltip",
    [Vd, wt] = ln(lt),
    qs = e => {
        const {
            __scopeTooltip: t,
            children: n,
            open: o,
            defaultOpen: r,
            onOpenChange: s,
            disableHoverableContent: i,
            delayDuration: c
        } = e, l = bo(lt, e.__scopeTooltip), u = un(t), [f, d] = a.useState(null), m = se(), v = a.useRef(0), w = i ? ? l.disableHoverableContent, h = c ? ? l.delayDuration, g = a.useRef(!1), [x, y] = ae({
            prop: o,
            defaultProp: r ? ? !1,
            onChange: E => {
                E ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Zn))) : l.onClose(), s ? .(E)
            },
            caller: lt
        }), b = a.useMemo(() => x ? g.current ? "delayed-open" : "instant-open" : "closed", [x]), S = a.useCallback(() => {
            window.clearTimeout(v.current), v.current = 0, g.current = !1, y(!0)
        }, [y]), C = a.useCallback(() => {
            window.clearTimeout(v.current), v.current = 0, y(!1)
        }, [y]), P = a.useCallback(() => {
            window.clearTimeout(v.current), v.current = window.setTimeout(() => {
                g.current = !0, y(!0), v.current = 0
            }, h)
        }, [h, y]);
        return a.useEffect(() => () => {
            v.current && (window.clearTimeout(v.current), v.current = 0)
        }, []), p.jsx(en, { ...u,
            children: p.jsx(Vd, {
                scope: t,
                contentId: m,
                open: x,
                stateAttribute: b,
                trigger: f,
                onTriggerChange: d,
                onTriggerEnter: a.useCallback(() => {
                    l.isOpenDelayedRef.current ? P() : S()
                }, [l.isOpenDelayedRef, P, S]),
                onTriggerLeave: a.useCallback(() => {
                    w ? C() : (window.clearTimeout(v.current), v.current = 0)
                }, [C, w]),
                onOpen: S,
                onClose: C,
                disableHoverableContent: w,
                children: n
            })
        })
    };
qs.displayName = lt;
var Jn = "TooltipTrigger",
    Zs = a.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...o
        } = e, r = wt(Jn, n), s = bo(Jn, n), i = un(n), c = a.useRef(null), l = j(t, c, r.onTriggerChange), u = a.useRef(!1), f = a.useRef(!1), d = a.useCallback(() => u.current = !1, []);
        return a.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), p.jsx(gt, {
            asChild: !0,
            ...i,
            children: p.jsx(A.button, {
                "aria-describedby": r.open ? r.contentId : void 0,
                "data-state": r.stateAttribute,
                ...o,
                ref: l,
                onPointerMove: R(e.onPointerMove, m => {
                    m.pointerType !== "touch" && !f.current && !s.isPointerInTransitRef.current && (r.onTriggerEnter(), f.current = !0)
                }),
                onPointerLeave: R(e.onPointerLeave, () => {
                    r.onTriggerLeave(), f.current = !1
                }),
                onPointerDown: R(e.onPointerDown, () => {
                    r.open && r.onClose(), u.current = !0, document.addEventListener("pointerup", d, {
                        once: !0
                    })
                }),
                onFocus: R(e.onFocus, () => {
                    u.current || r.onOpen()
                }),
                onBlur: R(e.onBlur, r.onClose),
                onClick: R(e.onClick, r.onClose)
            })
        })
    });
Zs.displayName = Jn;
var So = "TooltipPortal",
    [Hd, Wd] = ln(So, {
        forceMount: void 0
    }),
    Js = e => {
        const {
            __scopeTooltip: t,
            forceMount: n,
            children: o,
            container: r
        } = e, s = wt(So, t);
        return p.jsx(Hd, {
            scope: t,
            forceMount: n,
            children: p.jsx(X, {
                present: n || s.open,
                children: p.jsx(Be, {
                    asChild: !0,
                    container: r,
                    children: o
                })
            })
        })
    };
Js.displayName = So;
var Xe = "TooltipContent",
    Qs = a.forwardRef((e, t) => {
        const n = Wd(Xe, e.__scopeTooltip),
            {
                forceMount: o = n.forceMount,
                side: r = "top",
                ...s
            } = e,
            i = wt(Xe, e.__scopeTooltip);
        return p.jsx(X, {
            present: o || i.open,
            children: i.disableHoverableContent ? p.jsx(ei, {
                side: r,
                ...s,
                ref: t
            }) : p.jsx(Kd, {
                side: r,
                ...s,
                ref: t
            })
        })
    }),
    Kd = a.forwardRef((e, t) => {
        const n = wt(Xe, e.__scopeTooltip),
            o = bo(Xe, e.__scopeTooltip),
            r = a.useRef(null),
            s = j(t, r),
            [i, c] = a.useState(null),
            {
                trigger: l,
                onClose: u
            } = n,
            f = r.current,
            {
                onPointerInTransitChange: d
            } = o,
            m = a.useCallback(() => {
                c(null), d(!1)
            }, [d]),
            v = a.useCallback((w, h) => {
                const g = w.currentTarget,
                    x = {
                        x: w.clientX,
                        y: w.clientY
                    },
                    y = Yd(x, g.getBoundingClientRect()),
                    b = Xd(x, y),
                    S = qd(h.getBoundingClientRect()),
                    C = Jd([...b, ...S]);
                c(C), d(!0)
            }, [d]);
        return a.useEffect(() => () => m(), [m]), a.useEffect(() => {
            if (l && f) {
                const w = g => v(g, f),
                    h = g => v(g, l);
                return l.addEventListener("pointerleave", w), f.addEventListener("pointerleave", h), () => {
                    l.removeEventListener("pointerleave", w), f.removeEventListener("pointerleave", h)
                }
            }
        }, [l, f, v, m]), a.useEffect(() => {
            if (i) {
                const w = h => {
                    const g = h.target,
                        x = {
                            x: h.clientX,
                            y: h.clientY
                        },
                        y = l ? .contains(g) || f ? .contains(g),
                        b = !Zd(x, i);
                    y ? m() : b && (m(), u())
                };
                return document.addEventListener("pointermove", w), () => document.removeEventListener("pointermove", w)
            }
        }, [l, f, i, u, m]), p.jsx(ei, { ...e,
            ref: s
        })
    }),
    [Ud, Gd] = ln(lt, {
        isInside: !1
    }),
    zd = Ac("TooltipContent"),
    ei = a.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            children: o,
            "aria-label": r,
            onEscapeKeyDown: s,
            onPointerDownOutside: i,
            ...c
        } = e, l = wt(Xe, n), u = un(n), {
            onClose: f
        } = l;
        return a.useEffect(() => (document.addEventListener(Zn, f), () => document.removeEventListener(Zn, f)), [f]), a.useEffect(() => {
            if (l.trigger) {
                const d = m => {
                    m.target ? .contains(l.trigger) && f()
                };
                return window.addEventListener("scroll", d, {
                    capture: !0
                }), () => window.removeEventListener("scroll", d, {
                    capture: !0
                })
            }
        }, [l.trigger, f]), p.jsx($e, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: s,
            onPointerDownOutside: i,
            onFocusOutside: d => d.preventDefault(),
            onDismiss: f,
            children: p.jsxs(tn, {
                "data-state": l.stateAttribute,
                ...u,
                ...c,
                ref: t,
                style: { ...c.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                },
                children: [p.jsx(zd, {
                    children: o
                }), p.jsx(Ud, {
                    scope: n,
                    isInside: !0,
                    children: p.jsx(gd, {
                        id: l.contentId,
                        role: "tooltip",
                        children: r || o
                    })
                })]
            })
        })
    });
Qs.displayName = Xe;
var ti = "TooltipArrow",
    ni = a.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...o
        } = e, r = un(n);
        return Gd(ti, n).isInside ? null : p.jsx(nn, { ...r,
            ...o,
            ref: t
        })
    });
ni.displayName = ti;

function Yd(e, t) {
    const n = Math.abs(t.top - e.y),
        o = Math.abs(t.bottom - e.y),
        r = Math.abs(t.right - e.x),
        s = Math.abs(t.left - e.x);
    switch (Math.min(n, o, r, s)) {
        case s:
            return "left";
        case r:
            return "right";
        case n:
            return "top";
        case o:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}

function Xd(e, t, n = 5) {
    const o = [];
    switch (t) {
        case "top":
            o.push({
                x: e.x - n,
                y: e.y + n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "bottom":
            o.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y - n
            });
            break;
        case "left":
            o.push({
                x: e.x + n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "right":
            o.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x - n,
                y: e.y + n
            });
            break
    }
    return o
}

function qd(e) {
    const {
        top: t,
        right: n,
        bottom: o,
        left: r
    } = e;
    return [{
        x: r,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: o
    }, {
        x: r,
        y: o
    }]
}

function Zd(e, t) {
    const {
        x: n,
        y: o
    } = e;
    let r = !1;
    for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
        const c = t[s],
            l = t[i],
            u = c.x,
            f = c.y,
            d = l.x,
            m = l.y;
        f > o != m > o && n < (d - u) * (o - f) / (m - f) + u && (r = !r)
    }
    return r
}

function Jd(e) {
    const t = e.slice();
    return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), Qd(t)
}

function Qd(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let o = 0; o < e.length; o++) {
        const r = e[o];
        for (; t.length >= 2;) {
            const s = t[t.length - 1],
                i = t[t.length - 2];
            if ((s.x - i.x) * (r.y - i.y) >= (s.y - i.y) * (r.x - i.x)) t.pop();
            else break
        }
        t.push(r)
    }
    t.pop();
    const n = [];
    for (let o = e.length - 1; o >= 0; o--) {
        const r = e[o];
        for (; n.length >= 2;) {
            const s = n[n.length - 1],
                i = n[n.length - 2];
            if ((s.x - i.x) * (r.y - i.y) >= (s.y - i.y) * (r.x - i.x)) n.pop();
            else break
        }
        n.push(r)
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var dh = Xs,
    fh = qs,
    ph = Zs,
    mh = Js,
    hh = Qs,
    vh = ni,
    dn = "Checkbox",
    [ef] = Z(dn),
    [tf, Co] = ef(dn);

function nf(e) {
    const {
        __scopeCheckbox: t,
        checked: n,
        children: o,
        defaultChecked: r,
        disabled: s,
        form: i,
        name: c,
        onCheckedChange: l,
        required: u,
        value: f = "on",
        internal_do_not_use_render: d
    } = e, [m, v] = ae({
        prop: n,
        defaultProp: r ? ? !1,
        onChange: l,
        caller: dn
    }), [w, h] = a.useState(null), [g, x] = a.useState(null), y = a.useRef(!1), b = w ? !!i || !!w.closest("form") : !0, S = {
        checked: m,
        disabled: s,
        setChecked: v,
        control: w,
        setControl: h,
        name: c,
        form: i,
        value: f,
        hasConsumerStoppedPropagationRef: y,
        required: u,
        defaultChecked: Re(r) ? !1 : r,
        isFormControl: b,
        bubbleInput: g,
        setBubbleInput: x
    };
    return p.jsx(tf, {
        scope: t,
        ...S,
        children: sf(d) ? d(S) : o
    })
}
var oi = "CheckboxTrigger",
    ri = a.forwardRef(({
        __scopeCheckbox: e,
        onKeyDown: t,
        onClick: n,
        ...o
    }, r) => {
        const {
            control: s,
            value: i,
            disabled: c,
            checked: l,
            required: u,
            setControl: f,
            setChecked: d,
            hasConsumerStoppedPropagationRef: m,
            isFormControl: v,
            bubbleInput: w
        } = Co(oi, e), h = j(r, f), g = a.useRef(l);
        return a.useEffect(() => {
            const x = s ? .form;
            if (x) {
                const y = () => d(g.current);
                return x.addEventListener("reset", y), () => x.removeEventListener("reset", y)
            }
        }, [s, d]), p.jsx(A.button, {
            type: "button",
            role: "checkbox",
            "aria-checked": Re(l) ? "mixed" : l,
            "aria-required": u,
            "data-state": ci(l),
            "data-disabled": c ? "" : void 0,
            disabled: c,
            value: i,
            ...o,
            ref: h,
            onKeyDown: R(t, x => {
                x.key === "Enter" && x.preventDefault()
            }),
            onClick: R(n, x => {
                d(y => Re(y) ? !0 : !y), w && v && (m.current = x.isPropagationStopped(), m.current || x.stopPropagation())
            })
        })
    });
ri.displayName = oi;
var of = a.forwardRef((e, t) => {
    const {
        __scopeCheckbox: n,
        name: o,
        checked: r,
        defaultChecked: s,
        required: i,
        disabled: c,
        value: l,
        onCheckedChange: u,
        form: f,
        ...d
    } = e;
    return p.jsx(nf, {
        __scopeCheckbox: n,
        checked: r,
        defaultChecked: s,
        disabled: c,
        required: i,
        onCheckedChange: u,
        name: o,
        form: f,
        value: l,
        internal_do_not_use_render: ({
            isFormControl: m
        }) => p.jsxs(p.Fragment, {
            children: [p.jsx(ri, { ...d,
                ref: t,
                __scopeCheckbox: n
            }), m && p.jsx(ai, {
                __scopeCheckbox: n
            })]
        })
    })
}); of .displayName = dn;
var si = "CheckboxIndicator",
    rf = a.forwardRef((e, t) => {
        const {
            __scopeCheckbox: n,
            forceMount: o,
            ...r
        } = e, s = Co(si, n);
        return p.jsx(X, {
            present: o || Re(s.checked) || s.checked === !0,
            children: p.jsx(A.span, {
                "data-state": ci(s.checked),
                "data-disabled": s.disabled ? "" : void 0,
                ...r,
                ref: t,
                style: {
                    pointerEvents: "none",
                    ...e.style
                }
            })
        })
    });
rf.displayName = si;
var ii = "CheckboxBubbleInput",
    ai = a.forwardRef(({
        __scopeCheckbox: e,
        ...t
    }, n) => {
        const {
            control: o,
            hasConsumerStoppedPropagationRef: r,
            checked: s,
            defaultChecked: i,
            required: c,
            disabled: l,
            name: u,
            value: f,
            form: d,
            bubbleInput: m,
            setBubbleInput: v
        } = Co(ii, e), w = j(n, v), h = on(s), g = Qt(o);
        a.useEffect(() => {
            const y = m;
            if (!y) return;
            const b = window.HTMLInputElement.prototype,
                C = Object.getOwnPropertyDescriptor(b, "checked").set,
                P = !r.current;
            if (h !== s && C) {
                const E = new Event("click", {
                    bubbles: P
                });
                y.indeterminate = Re(s), C.call(y, Re(s) ? !1 : s), y.dispatchEvent(E)
            }
        }, [m, h, s, r]);
        const x = a.useRef(Re(s) ? !1 : s);
        return p.jsx(A.input, {
            type: "checkbox",
            "aria-hidden": !0,
            defaultChecked: i ? ? x.current,
            required: c,
            disabled: l,
            name: u,
            value: f,
            form: d,
            ...t,
            tabIndex: -1,
            ref: w,
            style: { ...t.style,
                ...g,
                position: "absolute",
                pointerEvents: "none",
                opacity: 0,
                margin: 0,
                transform: "translateX(-100%)"
            }
        })
    });
ai.displayName = ii;

function sf(e) {
    return typeof e == "function"
}

function Re(e) {
    return e === "indeterminate"
}

function ci(e) {
    return Re(e) ? "indeterminate" : e ? "checked" : "unchecked"
}
var $n = "rovingFocusGroup.onEntryFocus",
    af = {
        bubbles: !1,
        cancelable: !0
    },
    xt = "RovingFocusGroup",
    [Qn, li, cf] = ht(xt),
    [lf, fn] = Z(xt, [cf]),
    [uf, df] = lf(xt),
    ui = a.forwardRef((e, t) => p.jsx(Qn.Provider, {
        scope: e.__scopeRovingFocusGroup,
        children: p.jsx(Qn.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: p.jsx(ff, { ...e,
                ref: t
            })
        })
    }));
ui.displayName = xt;
var ff = a.forwardRef((e, t) => {
        const {
            __scopeRovingFocusGroup: n,
            orientation: o,
            loop: r = !1,
            dir: s,
            currentTabStopId: i,
            defaultCurrentTabStopId: c,
            onCurrentTabStopIdChange: l,
            onEntryFocus: u,
            preventScrollOnEntryFocus: f = !1,
            ...d
        } = e, m = a.useRef(null), v = j(t, m), w = Je(s), [h, g] = ae({
            prop: i,
            defaultProp: c ? ? null,
            onChange: l,
            caller: xt
        }), [x, y] = a.useState(!1), b = G(u), S = li(n), C = a.useRef(!1), [P, E] = a.useState(0);
        return a.useEffect(() => {
            const I = m.current;
            if (I) return I.addEventListener($n, b), () => I.removeEventListener($n, b)
        }, [b]), p.jsx(uf, {
            scope: n,
            orientation: o,
            dir: w,
            loop: r,
            currentTabStopId: h,
            onItemFocus: a.useCallback(I => g(I), [g]),
            onItemShiftTab: a.useCallback(() => y(!0), []),
            onFocusableItemAdd: a.useCallback(() => E(I => I + 1), []),
            onFocusableItemRemove: a.useCallback(() => E(I => I - 1), []),
            children: p.jsx(A.div, {
                tabIndex: x || P === 0 ? -1 : 0,
                "data-orientation": o,
                ...d,
                ref: v,
                style: {
                    outline: "none",
                    ...e.style
                },
                onMouseDown: R(e.onMouseDown, () => {
                    C.current = !0
                }),
                onFocus: R(e.onFocus, I => {
                    const D = !C.current;
                    if (I.target === I.currentTarget && D && !x) {
                        const O = new CustomEvent($n, af);
                        if (I.currentTarget.dispatchEvent(O), !O.defaultPrevented) {
                            const N = S().filter(k => k.focusable),
                                F = N.find(k => k.active),
                                V = N.find(k => k.id === h),
                                B = [F, V, ...N].filter(Boolean).map(k => k.ref.current);
                            pi(B, f)
                        }
                    }
                    C.current = !1
                }),
                onBlur: R(e.onBlur, () => y(!1))
            })
        })
    }),
    di = "RovingFocusGroupItem",
    fi = a.forwardRef((e, t) => {
        const {
            __scopeRovingFocusGroup: n,
            focusable: o = !0,
            active: r = !1,
            tabStopId: s,
            children: i,
            ...c
        } = e, l = se(), u = s || l, f = df(di, n), d = f.currentTabStopId === u, m = li(n), {
            onFocusableItemAdd: v,
            onFocusableItemRemove: w,
            currentTabStopId: h
        } = f;
        return a.useEffect(() => {
            if (o) return v(), () => w()
        }, [o, v, w]), p.jsx(Qn.ItemSlot, {
            scope: n,
            id: u,
            focusable: o,
            active: r,
            children: p.jsx(A.span, {
                tabIndex: d ? 0 : -1,
                "data-orientation": f.orientation,
                ...c,
                ref: t,
                onMouseDown: R(e.onMouseDown, g => {
                    o ? f.onItemFocus(u) : g.preventDefault()
                }),
                onFocus: R(e.onFocus, () => f.onItemFocus(u)),
                onKeyDown: R(e.onKeyDown, g => {
                    if (g.key === "Tab" && g.shiftKey) {
                        f.onItemShiftTab();
                        return
                    }
                    if (g.target !== g.currentTarget) return;
                    const x = hf(g, f.orientation, f.dir);
                    if (x !== void 0) {
                        if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                        g.preventDefault();
                        let b = m().filter(S => S.focusable).map(S => S.ref.current);
                        if (x === "last") b.reverse();
                        else if (x === "prev" || x === "next") {
                            x === "prev" && b.reverse();
                            const S = b.indexOf(g.currentTarget);
                            b = f.loop ? vf(b, S + 1) : b.slice(S + 1)
                        }
                        setTimeout(() => pi(b))
                    }
                }),
                children: typeof i == "function" ? i({
                    isCurrentTabStop: d,
                    hasTabStop: h != null
                }) : i
            })
        })
    });
fi.displayName = di;
var pf = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};

function mf(e, t) {
    return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e
}

function hf(e, t, n) {
    const o = mf(e.key, n);
    if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o))) return pf[o]
}

function pi(e, t = !1) {
    const n = document.activeElement;
    for (const o of e)
        if (o === n || (o.focus({
                preventScroll: t
            }), document.activeElement !== n)) return
}

function vf(e, t) {
    return e.map((n, o) => e[(t + o) % e.length])
}
var mi = ui,
    hi = fi,
    eo = ["Enter", " "],
    gf = ["ArrowDown", "PageUp", "Home"],
    vi = ["ArrowUp", "PageDown", "End"],
    wf = [...gf, ...vi],
    xf = {
        ltr: [...eo, "ArrowRight"],
        rtl: [...eo, "ArrowLeft"]
    },
    yf = {
        ltr: ["ArrowLeft"],
        rtl: ["ArrowRight"]
    },
    yt = "Menu",
    [ut, bf, Sf] = ht(yt),
    [Ve, gi] = Z(yt, [Sf, Ae, fn]),
    pn = Ae(),
    wi = fn(),
    [Cf, He] = Ve(yt),
    [Ef, bt] = Ve(yt),
    xi = e => {
        const {
            __scopeMenu: t,
            open: n = !1,
            children: o,
            dir: r,
            onOpenChange: s,
            modal: i = !0
        } = e, c = pn(t), [l, u] = a.useState(null), f = a.useRef(!1), d = G(s), m = Je(r);
        return a.useEffect(() => {
            const v = () => {
                    f.current = !0, document.addEventListener("pointerdown", w, {
                        capture: !0,
                        once: !0
                    }), document.addEventListener("pointermove", w, {
                        capture: !0,
                        once: !0
                    })
                },
                w = () => f.current = !1;
            return document.addEventListener("keydown", v, {
                capture: !0
            }), () => {
                document.removeEventListener("keydown", v, {
                    capture: !0
                }), document.removeEventListener("pointerdown", w, {
                    capture: !0
                }), document.removeEventListener("pointermove", w, {
                    capture: !0
                })
            }
        }, []), p.jsx(en, { ...c,
            children: p.jsx(Cf, {
                scope: t,
                open: n,
                onOpenChange: d,
                content: l,
                onContentChange: u,
                children: p.jsx(Ef, {
                    scope: t,
                    onClose: a.useCallback(() => d(!1), [d]),
                    isUsingKeyboardRef: f,
                    dir: m,
                    modal: i,
                    children: o
                })
            })
        })
    };
xi.displayName = yt;
var Rf = "MenuAnchor",
    Eo = a.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            ...o
        } = e, r = pn(n);
        return p.jsx(gt, { ...r,
            ...o,
            ref: t
        })
    });
Eo.displayName = Rf;
var Ro = "MenuPortal",
    [Pf, yi] = Ve(Ro, {
        forceMount: void 0
    }),
    bi = e => {
        const {
            __scopeMenu: t,
            forceMount: n,
            children: o,
            container: r
        } = e, s = He(Ro, t);
        return p.jsx(Pf, {
            scope: t,
            forceMount: n,
            children: p.jsx(X, {
                present: n || s.open,
                children: p.jsx(Be, {
                    asChild: !0,
                    container: r,
                    children: o
                })
            })
        })
    };
bi.displayName = Ro;
var le = "MenuContent",
    [Tf, Po] = Ve(le),
    Si = a.forwardRef((e, t) => {
        const n = yi(le, e.__scopeMenu),
            {
                forceMount: o = n.forceMount,
                ...r
            } = e,
            s = He(le, e.__scopeMenu),
            i = bt(le, e.__scopeMenu);
        return p.jsx(ut.Provider, {
            scope: e.__scopeMenu,
            children: p.jsx(X, {
                present: o || s.open,
                children: p.jsx(ut.Slot, {
                    scope: e.__scopeMenu,
                    children: i.modal ? p.jsx(_f, { ...r,
                        ref: t
                    }) : p.jsx(Af, { ...r,
                        ref: t
                    })
                })
            })
        })
    }),
    _f = a.forwardRef((e, t) => {
        const n = He(le, e.__scopeMenu),
            o = a.useRef(null),
            r = j(t, o);
        return a.useEffect(() => {
            const s = o.current;
            if (s) return zt(s)
        }, []), p.jsx(To, { ...e,
            ref: r,
            trapFocus: n.open,
            disableOutsidePointerEvents: n.open,
            disableOutsideScroll: !0,
            onFocusOutside: R(e.onFocusOutside, s => s.preventDefault(), {
                checkForDefaultPrevented: !1
            }),
            onDismiss: () => n.onOpenChange(!1)
        })
    }),
    Af = a.forwardRef((e, t) => {
        const n = He(le, e.__scopeMenu);
        return p.jsx(To, { ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            onDismiss: () => n.onOpenChange(!1)
        })
    }),
    If = Pe("MenuContent.ScrollLock"),
    To = a.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            loop: o = !1,
            trapFocus: r,
            onOpenAutoFocus: s,
            onCloseAutoFocus: i,
            disableOutsidePointerEvents: c,
            onEntryFocus: l,
            onEscapeKeyDown: u,
            onPointerDownOutside: f,
            onFocusOutside: d,
            onInteractOutside: m,
            onDismiss: v,
            disableOutsideScroll: w,
            ...h
        } = e, g = He(le, n), x = bt(le, n), y = pn(n), b = wi(n), S = bf(n), [C, P] = a.useState(null), E = a.useRef(null), I = j(t, E, g.onContentChange), D = a.useRef(0), O = a.useRef(""), N = a.useRef(0), F = a.useRef(null), V = a.useRef("right"), _ = a.useRef(0), B = w ? mt : a.Fragment, k = w ? {
            as: If,
            allowPinchZoom: !0
        } : void 0, $ = T => {
            const U = O.current + T,
                q = S().filter(L => !L.disabled),
                J = document.activeElement,
                ne = q.find(L => L.ref.current === J) ? .textValue,
                Q = q.map(L => L.textValue),
                be = Hf(Q, U, ne),
                oe = q.find(L => L.textValue === be) ? .ref.current;
            (function L(H) {
                O.current = H, window.clearTimeout(D.current), H !== "" && (D.current = window.setTimeout(() => L(""), 1e3))
            })(U), oe && setTimeout(() => oe.focus())
        };
        a.useEffect(() => () => window.clearTimeout(D.current), []), Ut();
        const M = a.useCallback(T => V.current === F.current ? .side && Kf(T, F.current ? .area), []);
        return p.jsx(Tf, {
            scope: n,
            searchRef: O,
            onItemEnter: a.useCallback(T => {
                M(T) && T.preventDefault()
            }, [M]),
            onItemLeave: a.useCallback(T => {
                M(T) || (E.current ? .focus(), P(null))
            }, [M]),
            onTriggerLeave: a.useCallback(T => {
                M(T) && T.preventDefault()
            }, [M]),
            pointerGraceTimerRef: N,
            onPointerGraceIntentChange: a.useCallback(T => {
                F.current = T
            }, []),
            children: p.jsx(B, { ...k,
                children: p.jsx(pt, {
                    asChild: !0,
                    trapped: r,
                    onMountAutoFocus: R(s, T => {
                        T.preventDefault(), E.current ? .focus({
                            preventScroll: !0
                        })
                    }),
                    onUnmountAutoFocus: i,
                    children: p.jsx($e, {
                        asChild: !0,
                        disableOutsidePointerEvents: c,
                        onEscapeKeyDown: u,
                        onPointerDownOutside: f,
                        onFocusOutside: d,
                        onInteractOutside: m,
                        onDismiss: v,
                        children: p.jsx(mi, {
                            asChild: !0,
                            ...b,
                            dir: x.dir,
                            orientation: "vertical",
                            loop: o,
                            currentTabStopId: C,
                            onCurrentTabStopIdChange: P,
                            onEntryFocus: R(l, T => {
                                x.isUsingKeyboardRef.current || T.preventDefault()
                            }),
                            preventScrollOnEntryFocus: !0,
                            children: p.jsx(tn, {
                                role: "menu",
                                "aria-orientation": "vertical",
                                "data-state": Fi(g.open),
                                "data-radix-menu-content": "",
                                dir: x.dir,
                                ...y,
                                ...h,
                                ref: I,
                                style: {
                                    outline: "none",
                                    ...h.style
                                },
                                onKeyDown: R(h.onKeyDown, T => {
                                    const q = T.target.closest("[data-radix-menu-content]") === T.currentTarget,
                                        J = T.ctrlKey || T.altKey || T.metaKey,
                                        ne = T.key.length === 1;
                                    q && (T.key === "Tab" && T.preventDefault(), !J && ne && $(T.key));
                                    const Q = E.current;
                                    if (T.target !== Q || !wf.includes(T.key)) return;
                                    T.preventDefault();
                                    const oe = S().filter(L => !L.disabled).map(L => L.ref.current);
                                    vi.includes(T.key) && oe.reverse(), Bf(oe)
                                }),
                                onBlur: R(e.onBlur, T => {
                                    T.currentTarget.contains(T.target) || (window.clearTimeout(D.current), O.current = "")
                                }),
                                onPointerMove: R(e.onPointerMove, dt(T => {
                                    const U = T.target,
                                        q = _.current !== T.clientX;
                                    if (T.currentTarget.contains(U) && q) {
                                        const J = T.clientX > _.current ? "right" : "left";
                                        V.current = J, _.current = T.clientX
                                    }
                                }))
                            })
                        })
                    })
                })
            })
        })
    });
Si.displayName = le;
var Mf = "MenuGroup",
    _o = a.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            ...o
        } = e;
        return p.jsx(A.div, {
            role: "group",
            ...o,
            ref: t
        })
    });
_o.displayName = Mf;
var Df = "MenuLabel",
    Ci = a.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            ...o
        } = e;
        return p.jsx(A.div, { ...o,
            ref: t
        })
    });
Ci.displayName = Df;
var Bt = "MenuItem",
    gr = "menu.itemSelect",
    mn = a.forwardRef((e, t) => {
        const {
            disabled: n = !1,
            onSelect: o,
            ...r
        } = e, s = a.useRef(null), i = bt(Bt, e.__scopeMenu), c = Po(Bt, e.__scopeMenu), l = j(t, s), u = a.useRef(!1), f = () => {
            const d = s.current;
            if (!n && d) {
                const m = new CustomEvent(gr, {
                    bubbles: !0,
                    cancelable: !0
                });
                d.addEventListener(gr, v => o ? .(v), {
                    once: !0
                }), ao(d, m), m.defaultPrevented ? u.current = !1 : i.onClose()
            }
        };
        return p.jsx(Ei, { ...r,
            ref: l,
            disabled: n,
            onClick: R(e.onClick, f),
            onPointerDown: d => {
                e.onPointerDown ? .(d), u.current = !0
            },
            onPointerUp: R(e.onPointerUp, d => {
                u.current || d.currentTarget ? .click()
            }),
            onKeyDown: R(e.onKeyDown, d => {
                const m = c.searchRef.current !== "";
                n || m && d.key === " " || eo.includes(d.key) && (d.currentTarget.click(), d.preventDefault())
            })
        })
    });
mn.displayName = Bt;
var Ei = a.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            disabled: o = !1,
            textValue: r,
            ...s
        } = e, i = Po(Bt, n), c = wi(n), l = a.useRef(null), u = j(t, l), [f, d] = a.useState(!1), [m, v] = a.useState("");
        return a.useEffect(() => {
            const w = l.current;
            w && v((w.textContent ? ? "").trim())
        }, [s.children]), p.jsx(ut.ItemSlot, {
            scope: n,
            disabled: o,
            textValue: r ? ? m,
            children: p.jsx(hi, {
                asChild: !0,
                ...c,
                focusable: !o,
                children: p.jsx(A.div, {
                    role: "menuitem",
                    "data-highlighted": f ? "" : void 0,
                    "aria-disabled": o || void 0,
                    "data-disabled": o ? "" : void 0,
                    ...s,
                    ref: u,
                    onPointerMove: R(e.onPointerMove, dt(w => {
                        o ? i.onItemLeave(w) : (i.onItemEnter(w), w.defaultPrevented || w.currentTarget.focus({
                            preventScroll: !0
                        }))
                    })),
                    onPointerLeave: R(e.onPointerLeave, dt(w => i.onItemLeave(w))),
                    onFocus: R(e.onFocus, () => d(!0)),
                    onBlur: R(e.onBlur, () => d(!1))
                })
            })
        })
    }),
    Of = "MenuCheckboxItem",
    Ri = a.forwardRef((e, t) => {
        const {
            checked: n = !1,
            onCheckedChange: o,
            ...r
        } = e;
        return p.jsx(Ii, {
            scope: e.__scopeMenu,
            checked: n,
            children: p.jsx(mn, {
                role: "menuitemcheckbox",
                "aria-checked": Vt(n) ? "mixed" : n,
                ...r,
                ref: t,
                "data-state": Io(n),
                onSelect: R(r.onSelect, () => o ? .(Vt(n) ? !0 : !n), {
                    checkForDefaultPrevented: !1
                })
            })
        })
    });
Ri.displayName = Of;
var Pi = "MenuRadioGroup",
    [Nf, Lf] = Ve(Pi, {
        value: void 0,
        onValueChange: () => {}
    }),
    Ti = a.forwardRef((e, t) => {
        const {
            value: n,
            onValueChange: o,
            ...r
        } = e, s = G(o);
        return p.jsx(Nf, {
            scope: e.__scopeMenu,
            value: n,
            onValueChange: s,
            children: p.jsx(_o, { ...r,
                ref: t
            })
        })
    });
Ti.displayName = Pi;
var _i = "MenuRadioItem",
    Ai = a.forwardRef((e, t) => {
        const {
            value: n,
            ...o
        } = e, r = Lf(_i, e.__scopeMenu), s = n === r.value;
        return p.jsx(Ii, {
            scope: e.__scopeMenu,
            checked: s,
            children: p.jsx(mn, {
                role: "menuitemradio",
                "aria-checked": s,
                ...o,
                ref: t,
                "data-state": Io(s),
                onSelect: R(o.onSelect, () => r.onValueChange ? .(n), {
                    checkForDefaultPrevented: !1
                })
            })
        })
    });
Ai.displayName = _i;
var Ao = "MenuItemIndicator",
    [Ii, kf] = Ve(Ao, {
        checked: !1
    }),
    Mi = a.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            forceMount: o,
            ...r
        } = e, s = kf(Ao, n);
        return p.jsx(X, {
            present: o || Vt(s.checked) || s.checked === !0,
            children: p.jsx(A.span, { ...r,
                ref: t,
                "data-state": Io(s.checked)
            })
        })
    });
Mi.displayName = Ao;
var jf = "MenuSeparator",
    Di = a.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            ...o
        } = e;
        return p.jsx(A.div, {
            role: "separator",
            "aria-orientation": "horizontal",
            ...o,
            ref: t
        })
    });
Di.displayName = jf;
var Ff = "MenuArrow",
    Oi = a.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            ...o
        } = e, r = pn(n);
        return p.jsx(nn, { ...r,
            ...o,
            ref: t
        })
    });
Oi.displayName = Ff;
var $f = "MenuSub",
    [gh, Ni] = Ve($f),
    st = "MenuSubTrigger",
    Li = a.forwardRef((e, t) => {
        const n = He(st, e.__scopeMenu),
            o = bt(st, e.__scopeMenu),
            r = Ni(st, e.__scopeMenu),
            s = Po(st, e.__scopeMenu),
            i = a.useRef(null),
            {
                pointerGraceTimerRef: c,
                onPointerGraceIntentChange: l
            } = s,
            u = {
                __scopeMenu: e.__scopeMenu
            },
            f = a.useCallback(() => {
                i.current && window.clearTimeout(i.current), i.current = null
            }, []);
        return a.useEffect(() => f, [f]), a.useEffect(() => {
            const d = c.current;
            return () => {
                window.clearTimeout(d), l(null)
            }
        }, [c, l]), p.jsx(Eo, {
            asChild: !0,
            ...u,
            children: p.jsx(Ei, {
                id: r.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": n.open,
                "aria-controls": r.contentId,
                "data-state": Fi(n.open),
                ...e,
                ref: Kt(t, r.onTriggerChange),
                onClick: d => {
                    e.onClick ? .(d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0))
                },
                onPointerMove: R(e.onPointerMove, dt(d => {
                    s.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !i.current && (s.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
                        n.onOpenChange(!0), f()
                    }, 100))
                })),
                onPointerLeave: R(e.onPointerLeave, dt(d => {
                    f();
                    const m = n.content ? .getBoundingClientRect();
                    if (m) {
                        const v = n.content ? .dataset.side,
                            w = v === "right",
                            h = w ? -5 : 5,
                            g = m[w ? "left" : "right"],
                            x = m[w ? "right" : "left"];
                        s.onPointerGraceIntentChange({
                            area: [{
                                x: d.clientX + h,
                                y: d.clientY
                            }, {
                                x: g,
                                y: m.top
                            }, {
                                x,
                                y: m.top
                            }, {
                                x,
                                y: m.bottom
                            }, {
                                x: g,
                                y: m.bottom
                            }],
                            side: v
                        }), window.clearTimeout(c.current), c.current = window.setTimeout(() => s.onPointerGraceIntentChange(null), 300)
                    } else {
                        if (s.onTriggerLeave(d), d.defaultPrevented) return;
                        s.onPointerGraceIntentChange(null)
                    }
                })),
                onKeyDown: R(e.onKeyDown, d => {
                    const m = s.searchRef.current !== "";
                    e.disabled || m && d.key === " " || xf[o.dir].includes(d.key) && (n.onOpenChange(!0), n.content ? .focus(), d.preventDefault())
                })
            })
        })
    });
Li.displayName = st;
var ki = "MenuSubContent",
    ji = a.forwardRef((e, t) => {
        const n = yi(le, e.__scopeMenu),
            {
                forceMount: o = n.forceMount,
                ...r
            } = e,
            s = He(le, e.__scopeMenu),
            i = bt(le, e.__scopeMenu),
            c = Ni(ki, e.__scopeMenu),
            l = a.useRef(null),
            u = j(t, l);
        return p.jsx(ut.Provider, {
            scope: e.__scopeMenu,
            children: p.jsx(X, {
                present: o || s.open,
                children: p.jsx(ut.Slot, {
                    scope: e.__scopeMenu,
                    children: p.jsx(To, {
                        id: c.contentId,
                        "aria-labelledby": c.triggerId,
                        ...r,
                        ref: u,
                        align: "start",
                        side: i.dir === "rtl" ? "left" : "right",
                        disableOutsidePointerEvents: !1,
                        disableOutsideScroll: !1,
                        trapFocus: !1,
                        onOpenAutoFocus: f => {
                            i.isUsingKeyboardRef.current && l.current ? .focus(), f.preventDefault()
                        },
                        onCloseAutoFocus: f => f.preventDefault(),
                        onFocusOutside: R(e.onFocusOutside, f => {
                            f.target !== c.trigger && s.onOpenChange(!1)
                        }),
                        onEscapeKeyDown: R(e.onEscapeKeyDown, f => {
                            i.onClose(), f.preventDefault()
                        }),
                        onKeyDown: R(e.onKeyDown, f => {
                            const d = f.currentTarget.contains(f.target),
                                m = yf[i.dir].includes(f.key);
                            d && m && (s.onOpenChange(!1), c.trigger ? .focus(), f.preventDefault())
                        })
                    })
                })
            })
        })
    });
ji.displayName = ki;

function Fi(e) {
    return e ? "open" : "closed"
}

function Vt(e) {
    return e === "indeterminate"
}

function Io(e) {
    return Vt(e) ? "indeterminate" : e ? "checked" : "unchecked"
}

function Bf(e) {
    const t = document.activeElement;
    for (const n of e)
        if (n === t || (n.focus(), document.activeElement !== t)) return
}

function Vf(e, t) {
    return e.map((n, o) => e[(t + o) % e.length])
}

function Hf(e, t, n) {
    const r = t.length > 1 && Array.from(t).every(u => u === t[0]) ? t[0] : t,
        s = n ? e.indexOf(n) : -1;
    let i = Vf(e, Math.max(s, 0));
    r.length === 1 && (i = i.filter(u => u !== n));
    const l = i.find(u => u.toLowerCase().startsWith(r.toLowerCase()));
    return l !== n ? l : void 0
}

function Wf(e, t) {
    const {
        x: n,
        y: o
    } = e;
    let r = !1;
    for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
        const c = t[s],
            l = t[i],
            u = c.x,
            f = c.y,
            d = l.x,
            m = l.y;
        f > o != m > o && n < (d - u) * (o - f) / (m - f) + u && (r = !r)
    }
    return r
}

function Kf(e, t) {
    if (!t) return !1;
    const n = {
        x: e.clientX,
        y: e.clientY
    };
    return Wf(n, t)
}

function dt(e) {
    return t => t.pointerType === "mouse" ? e(t) : void 0
}
var Uf = xi,
    Gf = Eo,
    zf = bi,
    Yf = Si,
    Xf = _o,
    qf = Ci,
    Zf = mn,
    Jf = Ri,
    Qf = Ti,
    ep = Ai,
    tp = Mi,
    np = Di,
    op = Oi,
    rp = Li,
    sp = ji,
    hn = "DropdownMenu",
    [ip] = Z(hn, [gi]),
    te = gi(),
    [ap, $i] = ip(hn),
    Bi = e => {
        const {
            __scopeDropdownMenu: t,
            children: n,
            dir: o,
            open: r,
            defaultOpen: s,
            onOpenChange: i,
            modal: c = !0
        } = e, l = te(t), u = a.useRef(null), [f, d] = ae({
            prop: r,
            defaultProp: s ? ? !1,
            onChange: i,
            caller: hn
        });
        return p.jsx(ap, {
            scope: t,
            triggerId: se(),
            triggerRef: u,
            contentId: se(),
            open: f,
            onOpenChange: d,
            onOpenToggle: a.useCallback(() => d(m => !m), [d]),
            modal: c,
            children: p.jsx(Uf, { ...l,
                open: f,
                onOpenChange: d,
                dir: o,
                modal: c,
                children: n
            })
        })
    };
Bi.displayName = hn;
var Vi = "DropdownMenuTrigger",
    Hi = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            disabled: o = !1,
            ...r
        } = e, s = $i(Vi, n), i = te(n);
        return p.jsx(Gf, {
            asChild: !0,
            ...i,
            children: p.jsx(A.button, {
                type: "button",
                id: s.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": s.open,
                "aria-controls": s.open ? s.contentId : void 0,
                "data-state": s.open ? "open" : "closed",
                "data-disabled": o ? "" : void 0,
                disabled: o,
                ...r,
                ref: Kt(t, s.triggerRef),
                onPointerDown: R(e.onPointerDown, c => {
                    !o && c.button === 0 && c.ctrlKey === !1 && (s.onOpenToggle(), s.open || c.preventDefault())
                }),
                onKeyDown: R(e.onKeyDown, c => {
                    o || (["Enter", " "].includes(c.key) && s.onOpenToggle(), c.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(c.key) && c.preventDefault())
                })
            })
        })
    });
Hi.displayName = Vi;
var cp = "DropdownMenuPortal",
    Wi = e => {
        const {
            __scopeDropdownMenu: t,
            ...n
        } = e, o = te(t);
        return p.jsx(zf, { ...o,
            ...n
        })
    };
Wi.displayName = cp;
var Ki = "DropdownMenuContent",
    Ui = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = $i(Ki, n), s = te(n), i = a.useRef(!1);
        return p.jsx(Yf, {
            id: r.contentId,
            "aria-labelledby": r.triggerId,
            ...s,
            ...o,
            ref: t,
            onCloseAutoFocus: R(e.onCloseAutoFocus, c => {
                i.current || r.triggerRef.current ? .focus(), i.current = !1, c.preventDefault()
            }),
            onInteractOutside: R(e.onInteractOutside, c => {
                const l = c.detail.originalEvent,
                    u = l.button === 0 && l.ctrlKey === !0,
                    f = l.button === 2 || u;
                (!r.modal || f) && (i.current = !0)
            }),
            style: { ...e.style,
                "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
Ui.displayName = Ki;
var lp = "DropdownMenuGroup",
    up = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = te(n);
        return p.jsx(Xf, { ...r,
            ...o,
            ref: t
        })
    });
up.displayName = lp;
var dp = "DropdownMenuLabel",
    Gi = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = te(n);
        return p.jsx(qf, { ...r,
            ...o,
            ref: t
        })
    });
Gi.displayName = dp;
var fp = "DropdownMenuItem",
    zi = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = te(n);
        return p.jsx(Zf, { ...r,
            ...o,
            ref: t
        })
    });
zi.displayName = fp;
var pp = "DropdownMenuCheckboxItem",
    Yi = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = te(n);
        return p.jsx(Jf, { ...r,
            ...o,
            ref: t
        })
    });
Yi.displayName = pp;
var mp = "DropdownMenuRadioGroup",
    hp = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = te(n);
        return p.jsx(Qf, { ...r,
            ...o,
            ref: t
        })
    });
hp.displayName = mp;
var vp = "DropdownMenuRadioItem",
    Xi = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = te(n);
        return p.jsx(ep, { ...r,
            ...o,
            ref: t
        })
    });
Xi.displayName = vp;
var gp = "DropdownMenuItemIndicator",
    qi = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = te(n);
        return p.jsx(tp, { ...r,
            ...o,
            ref: t
        })
    });
qi.displayName = gp;
var wp = "DropdownMenuSeparator",
    Zi = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = te(n);
        return p.jsx(np, { ...r,
            ...o,
            ref: t
        })
    });
Zi.displayName = wp;
var xp = "DropdownMenuArrow",
    yp = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = te(n);
        return p.jsx(op, { ...r,
            ...o,
            ref: t
        })
    });
yp.displayName = xp;
var bp = "DropdownMenuSubTrigger",
    Ji = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = te(n);
        return p.jsx(rp, { ...r,
            ...o,
            ref: t
        })
    });
Ji.displayName = bp;
var Sp = "DropdownMenuSubContent",
    Qi = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = te(n);
        return p.jsx(sp, { ...r,
            ...o,
            ref: t,
            style: { ...e.style,
                "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
Qi.displayName = Sp;
var wh = Bi,
    xh = Hi,
    yh = Wi,
    bh = Ui,
    Sh = Gi,
    Ch = zi,
    Eh = Yi,
    Rh = Xi,
    Ph = qi,
    Th = Zi,
    _h = Ji,
    Ah = Qi,
    vn = "Switch",
    [Cp] = Z(vn),
    [Ep, Rp] = Cp(vn),
    ea = a.forwardRef((e, t) => {
        const {
            __scopeSwitch: n,
            name: o,
            checked: r,
            defaultChecked: s,
            required: i,
            disabled: c,
            value: l = "on",
            onCheckedChange: u,
            form: f,
            ...d
        } = e, [m, v] = a.useState(null), w = j(t, b => v(b)), h = a.useRef(!1), g = m ? f || !!m.closest("form") : !0, [x, y] = ae({
            prop: r,
            defaultProp: s ? ? !1,
            onChange: u,
            caller: vn
        });
        return p.jsxs(Ep, {
            scope: n,
            checked: x,
            disabled: c,
            children: [p.jsx(A.button, {
                type: "button",
                role: "switch",
                "aria-checked": x,
                "aria-required": i,
                "data-state": ra(x),
                "data-disabled": c ? "" : void 0,
                disabled: c,
                value: l,
                ...d,
                ref: w,
                onClick: R(e.onClick, b => {
                    y(S => !S), g && (h.current = b.isPropagationStopped(), h.current || b.stopPropagation())
                })
            }), g && p.jsx(oa, {
                control: m,
                bubbles: !h.current,
                name: o,
                value: l,
                checked: x,
                required: i,
                disabled: c,
                form: f,
                style: {
                    transform: "translateX(-100%)"
                }
            })]
        })
    });
ea.displayName = vn;
var ta = "SwitchThumb",
    na = a.forwardRef((e, t) => {
        const {
            __scopeSwitch: n,
            ...o
        } = e, r = Rp(ta, n);
        return p.jsx(A.span, {
            "data-state": ra(r.checked),
            "data-disabled": r.disabled ? "" : void 0,
            ...o,
            ref: t
        })
    });
na.displayName = ta;
var Pp = "SwitchBubbleInput",
    oa = a.forwardRef(({
        __scopeSwitch: e,
        control: t,
        checked: n,
        bubbles: o = !0,
        ...r
    }, s) => {
        const i = a.useRef(null),
            c = j(i, s),
            l = on(n),
            u = Qt(t);
        return a.useEffect(() => {
            const f = i.current;
            if (!f) return;
            const d = window.HTMLInputElement.prototype,
                v = Object.getOwnPropertyDescriptor(d, "checked").set;
            if (l !== n && v) {
                const w = new Event("click", {
                    bubbles: o
                });
                v.call(f, n), f.dispatchEvent(w)
            }
        }, [l, n, o]), p.jsx("input", {
            type: "checkbox",
            "aria-hidden": !0,
            defaultChecked: n,
            ...r,
            tabIndex: -1,
            ref: c,
            style: { ...r.style,
                ...u,
                position: "absolute",
                pointerEvents: "none",
                opacity: 0,
                margin: 0
            }
        })
    });
oa.displayName = Pp;

function ra(e) {
    return e ? "checked" : "unchecked"
}
var Ih = ea,
    Mh = na,
    sa = "ToastProvider",
    [Mo, Tp, _p] = ht("Toast"),
    [ia] = Z("Toast", [_p]),
    [Ap, gn] = ia(sa),
    aa = e => {
        const {
            __scopeToast: t,
            label: n = "Notification",
            duration: o = 5e3,
            swipeDirection: r = "right",
            swipeThreshold: s = 50,
            children: i
        } = e, [c, l] = a.useState(null), [u, f] = a.useState(0), d = a.useRef(!1), m = a.useRef(!1);
        return n.trim(), p.jsx(Mo.Provider, {
            scope: t,
            children: p.jsx(Ap, {
                scope: t,
                label: n,
                duration: o,
                swipeDirection: r,
                swipeThreshold: s,
                toastCount: u,
                viewport: c,
                onViewportChange: l,
                onToastAdd: a.useCallback(() => f(v => v + 1), []),
                onToastRemove: a.useCallback(() => f(v => v - 1), []),
                isFocusedToastEscapeKeyDownRef: d,
                isClosePausedRef: m,
                children: i
            })
        })
    };
aa.displayName = sa;
var ca = "ToastViewport",
    Ip = ["F8"],
    to = "toast.viewportPause",
    no = "toast.viewportResume",
    la = a.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            hotkey: o = Ip,
            label: r = "Notifications ({hotkey})",
            ...s
        } = e, i = gn(ca, n), c = Tp(n), l = a.useRef(null), u = a.useRef(null), f = a.useRef(null), d = a.useRef(null), m = j(t, d, i.onViewportChange), v = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), w = i.toastCount > 0;
        a.useEffect(() => {
            const g = x => {
                o.length !== 0 && o.every(b => x[b] || x.code === b) && d.current ? .focus()
            };
            return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g)
        }, [o]), a.useEffect(() => {
            const g = l.current,
                x = d.current;
            if (w && g && x) {
                const y = () => {
                        if (!i.isClosePausedRef.current) {
                            const P = new CustomEvent(to);
                            x.dispatchEvent(P), i.isClosePausedRef.current = !0
                        }
                    },
                    b = () => {
                        if (i.isClosePausedRef.current) {
                            const P = new CustomEvent(no);
                            x.dispatchEvent(P), i.isClosePausedRef.current = !1
                        }
                    },
                    S = P => {
                        !g.contains(P.relatedTarget) && b()
                    },
                    C = () => {
                        g.contains(document.activeElement) || b()
                    };
                return g.addEventListener("focusin", y), g.addEventListener("focusout", S), g.addEventListener("pointermove", y), g.addEventListener("pointerleave", C), window.addEventListener("blur", y), window.addEventListener("focus", b), () => {
                    g.removeEventListener("focusin", y), g.removeEventListener("focusout", S), g.removeEventListener("pointermove", y), g.removeEventListener("pointerleave", C), window.removeEventListener("blur", y), window.removeEventListener("focus", b)
                }
            }
        }, [w, i.isClosePausedRef]);
        const h = a.useCallback(({
            tabbingDirection: g
        }) => {
            const y = c().map(b => {
                const S = b.ref.current,
                    C = [S, ...Kp(S)];
                return g === "forwards" ? C : C.reverse()
            });
            return (g === "forwards" ? y.reverse() : y).flat()
        }, [c]);
        return a.useEffect(() => {
            const g = d.current;
            if (g) {
                const x = y => {
                    const b = y.altKey || y.ctrlKey || y.metaKey;
                    if (y.key === "Tab" && !b) {
                        const C = document.activeElement,
                            P = y.shiftKey;
                        if (y.target === g && P) {
                            u.current ? .focus();
                            return
                        }
                        const D = h({
                                tabbingDirection: P ? "backwards" : "forwards"
                            }),
                            O = D.findIndex(N => N === C);
                        Bn(D.slice(O + 1)) ? y.preventDefault() : P ? u.current ? .focus() : f.current ? .focus()
                    }
                };
                return g.addEventListener("keydown", x), () => g.removeEventListener("keydown", x)
            }
        }, [c, h]), p.jsxs(Hc, {
            ref: l,
            role: "region",
            "aria-label": r.replace("{hotkey}", v),
            tabIndex: -1,
            style: {
                pointerEvents: w ? void 0 : "none"
            },
            children: [w && p.jsx(oo, {
                ref: u,
                onFocusFromOutsideViewport: () => {
                    const g = h({
                        tabbingDirection: "forwards"
                    });
                    Bn(g)
                }
            }), p.jsx(Mo.Slot, {
                scope: n,
                children: p.jsx(A.ol, {
                    tabIndex: -1,
                    ...s,
                    ref: m
                })
            }), w && p.jsx(oo, {
                ref: f,
                onFocusFromOutsideViewport: () => {
                    const g = h({
                        tabbingDirection: "backwards"
                    });
                    Bn(g)
                }
            })]
        })
    });
la.displayName = ca;
var ua = "ToastFocusProxy",
    oo = a.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            onFocusFromOutsideViewport: o,
            ...r
        } = e, s = gn(ua, n);
        return p.jsx(rn, {
            tabIndex: 0,
            ...r,
            ref: t,
            style: {
                position: "fixed"
            },
            onFocus: i => {
                const c = i.relatedTarget;
                !s.viewport ? .contains(c) && o()
            }
        })
    });
oo.displayName = ua;
var St = "Toast",
    Mp = "toast.swipeStart",
    Dp = "toast.swipeMove",
    Op = "toast.swipeCancel",
    Np = "toast.swipeEnd",
    da = a.forwardRef((e, t) => {
        const {
            forceMount: n,
            open: o,
            defaultOpen: r,
            onOpenChange: s,
            ...i
        } = e, [c, l] = ae({
            prop: o,
            defaultProp: r ? ? !0,
            onChange: s,
            caller: St
        });
        return p.jsx(X, {
            present: n || c,
            children: p.jsx(jp, {
                open: c,
                ...i,
                ref: t,
                onClose: () => l(!1),
                onPause: G(e.onPause),
                onResume: G(e.onResume),
                onSwipeStart: R(e.onSwipeStart, u => {
                    u.currentTarget.setAttribute("data-swipe", "start")
                }),
                onSwipeMove: R(e.onSwipeMove, u => {
                    const {
                        x: f,
                        y: d
                    } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`)
                }),
                onSwipeCancel: R(e.onSwipeCancel, u => {
                    u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }),
                onSwipeEnd: R(e.onSwipeEnd, u => {
                    const {
                        x: f,
                        y: d
                    } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`), l(!1)
                })
            })
        })
    });
da.displayName = St;
var [Lp, kp] = ia(St, {
    onClose() {}
}), jp = a.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: o = "foreground",
        duration: r,
        open: s,
        onClose: i,
        onEscapeKeyDown: c,
        onPause: l,
        onResume: u,
        onSwipeStart: f,
        onSwipeMove: d,
        onSwipeCancel: m,
        onSwipeEnd: v,
        ...w
    } = e, h = gn(St, n), [g, x] = a.useState(null), y = j(t, _ => x(_)), b = a.useRef(null), S = a.useRef(null), C = r || h.duration, P = a.useRef(0), E = a.useRef(C), I = a.useRef(0), {
        onToastAdd: D,
        onToastRemove: O
    } = h, N = G(() => {
        g ? .contains(document.activeElement) && h.viewport ? .focus(), i()
    }), F = a.useCallback(_ => {
        !_ || _ === 1 / 0 || (window.clearTimeout(I.current), P.current = new Date().getTime(), I.current = window.setTimeout(N, _))
    }, [N]);
    a.useEffect(() => {
        const _ = h.viewport;
        if (_) {
            const B = () => {
                    F(E.current), u ? .()
                },
                k = () => {
                    const $ = new Date().getTime() - P.current;
                    E.current = E.current - $, window.clearTimeout(I.current), l ? .()
                };
            return _.addEventListener(to, k), _.addEventListener(no, B), () => {
                _.removeEventListener(to, k), _.removeEventListener(no, B)
            }
        }
    }, [h.viewport, C, l, u, F]), a.useEffect(() => {
        s && !h.isClosePausedRef.current && F(C)
    }, [s, C, h.isClosePausedRef, F]), a.useEffect(() => (D(), () => O()), [D, O]);
    const V = a.useMemo(() => g ? ga(g) : null, [g]);
    return h.viewport ? p.jsxs(p.Fragment, {
        children: [V && p.jsx(Fp, {
            __scopeToast: n,
            role: "status",
            "aria-live": o === "foreground" ? "assertive" : "polite",
            children: V
        }), p.jsx(Lp, {
            scope: n,
            onClose: N,
            children: ft.createPortal(p.jsx(Mo.ItemSlot, {
                scope: n,
                children: p.jsx(Vc, {
                    asChild: !0,
                    onEscapeKeyDown: R(c, () => {
                        h.isFocusedToastEscapeKeyDownRef.current || N(), h.isFocusedToastEscapeKeyDownRef.current = !1
                    }),
                    children: p.jsx(A.li, {
                        tabIndex: 0,
                        "data-state": s ? "open" : "closed",
                        "data-swipe-direction": h.swipeDirection,
                        ...w,
                        ref: y,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: R(e.onKeyDown, _ => {
                            _.key === "Escape" && (c ? .(_.nativeEvent), _.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, N()))
                        }),
                        onPointerDown: R(e.onPointerDown, _ => {
                            _.button === 0 && (b.current = {
                                x: _.clientX,
                                y: _.clientY
                            })
                        }),
                        onPointerMove: R(e.onPointerMove, _ => {
                            if (!b.current) return;
                            const B = _.clientX - b.current.x,
                                k = _.clientY - b.current.y,
                                $ = !!S.current,
                                M = ["left", "right"].includes(h.swipeDirection),
                                T = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max,
                                U = M ? T(0, B) : 0,
                                q = M ? 0 : T(0, k),
                                J = _.pointerType === "touch" ? 10 : 2,
                                ne = {
                                    x: U,
                                    y: q
                                },
                                Q = {
                                    originalEvent: _,
                                    delta: ne
                                };
                            $ ? (S.current = ne, It(Dp, d, Q, {
                                discrete: !1
                            })) : wr(ne, h.swipeDirection, J) ? (S.current = ne, It(Mp, f, Q, {
                                discrete: !1
                            }), _.target.setPointerCapture(_.pointerId)) : (Math.abs(B) > J || Math.abs(k) > J) && (b.current = null)
                        }),
                        onPointerUp: R(e.onPointerUp, _ => {
                            const B = S.current,
                                k = _.target;
                            if (k.hasPointerCapture(_.pointerId) && k.releasePointerCapture(_.pointerId), S.current = null, b.current = null, B) {
                                const $ = _.currentTarget,
                                    M = {
                                        originalEvent: _,
                                        delta: B
                                    };
                                wr(B, h.swipeDirection, h.swipeThreshold) ? It(Np, v, M, {
                                    discrete: !0
                                }) : It(Op, m, M, {
                                    discrete: !0
                                }), $.addEventListener("click", T => T.preventDefault(), {
                                    once: !0
                                })
                            }
                        })
                    })
                })
            }), h.viewport)
        })]
    }) : null
}), Fp = e => {
    const {
        __scopeToast: t,
        children: n,
        ...o
    } = e, r = gn(St, t), [s, i] = a.useState(!1), [c, l] = a.useState(!1);
    return Hp(() => i(!0)), a.useEffect(() => {
        const u = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }, []), c ? null : p.jsx(Be, {
        asChild: !0,
        children: p.jsx(rn, { ...o,
            children: s && p.jsxs(p.Fragment, {
                children: [r.label, " ", n]
            })
        })
    })
}, $p = "ToastTitle", fa = a.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        ...o
    } = e;
    return p.jsx(A.div, { ...o,
        ref: t
    })
});
fa.displayName = $p;
var Bp = "ToastDescription",
    pa = a.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...o
        } = e;
        return p.jsx(A.div, { ...o,
            ref: t
        })
    });
pa.displayName = Bp;
var Vp = "ToastAction",
    ma = a.forwardRef((e, t) => {
        const {
            altText: n,
            ...o
        } = e;
        return n.trim() ? p.jsx(va, {
            altText: n,
            asChild: !0,
            children: p.jsx(Do, { ...o,
                ref: t
            })
        }) : null
    });
ma.displayName = Vp;
var ha = "ToastClose",
    Do = a.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...o
        } = e, r = kp(ha, n);
        return p.jsx(va, {
            asChild: !0,
            children: p.jsx(A.button, {
                type: "button",
                ...o,
                ref: t,
                onClick: R(e.onClick, r.onClose)
            })
        })
    });
Do.displayName = ha;
var va = a.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        altText: o,
        ...r
    } = e;
    return p.jsx(A.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": o || void 0,
        ...r,
        ref: t
    })
});

function ga(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(o => {
        if (o.nodeType === o.TEXT_NODE && o.textContent && t.push(o.textContent), Wp(o)) {
            const r = o.ariaHidden || o.hidden || o.style.display === "none",
                s = o.dataset.radixToastAnnounceExclude === "";
            if (!r)
                if (s) {
                    const i = o.dataset.radixToastAnnounceAlt;
                    i && t.push(i)
                } else t.push(...ga(o))
        }
    }), t
}

function It(e, t, n, {
    discrete: o
}) {
    const r = n.originalEvent.currentTarget,
        s = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n
        });
    t && r.addEventListener(e, t, {
        once: !0
    }), o ? ao(r, s) : r.dispatchEvent(s)
}
var wr = (e, t, n = 0) => {
    const o = Math.abs(e.x),
        r = Math.abs(e.y),
        s = o > r;
    return t === "left" || t === "right" ? s && o > n : !s && r > n
};

function Hp(e = () => {}) {
    const t = G(e);
    z(() => {
        let n = 0,
            o = 0;
        return n = window.requestAnimationFrame(() => o = window.requestAnimationFrame(t)), () => {
            window.cancelAnimationFrame(n), window.cancelAnimationFrame(o)
        }
    }, [t])
}

function Wp(e) {
    return e.nodeType === e.ELEMENT_NODE
}

function Kp(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: o => {
                const r = o.tagName === "INPUT" && o.type === "hidden";
                return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function Bn(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(), document.activeElement !== t))
}
var Dh = aa,
    Oh = la,
    Nh = da,
    Lh = fa,
    kh = pa,
    jh = ma,
    Fh = Do,
    wn = "Popover",
    [wa] = Z(wn, [Ae]),
    Ct = Ae(),
    [Up, De] = wa(wn),
    xa = e => {
        const {
            __scopePopover: t,
            children: n,
            open: o,
            defaultOpen: r,
            onOpenChange: s,
            modal: i = !1
        } = e, c = Ct(t), l = a.useRef(null), [u, f] = a.useState(!1), [d, m] = ae({
            prop: o,
            defaultProp: r ? ? !1,
            onChange: s,
            caller: wn
        });
        return p.jsx(en, { ...c,
            children: p.jsx(Up, {
                scope: t,
                contentId: se(),
                triggerRef: l,
                open: d,
                onOpenChange: m,
                onOpenToggle: a.useCallback(() => m(v => !v), [m]),
                hasCustomAnchor: u,
                onCustomAnchorAdd: a.useCallback(() => f(!0), []),
                onCustomAnchorRemove: a.useCallback(() => f(!1), []),
                modal: i,
                children: n
            })
        })
    };
xa.displayName = wn;
var ya = "PopoverAnchor",
    Gp = a.forwardRef((e, t) => {
        const {
            __scopePopover: n,
            ...o
        } = e, r = De(ya, n), s = Ct(n), {
            onCustomAnchorAdd: i,
            onCustomAnchorRemove: c
        } = r;
        return a.useEffect(() => (i(), () => c()), [i, c]), p.jsx(gt, { ...s,
            ...o,
            ref: t
        })
    });
Gp.displayName = ya;
var ba = "PopoverTrigger",
    Sa = a.forwardRef((e, t) => {
        const {
            __scopePopover: n,
            ...o
        } = e, r = De(ba, n), s = Ct(n), i = j(t, r.triggerRef), c = p.jsx(A.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": r.open,
            "aria-controls": r.contentId,
            "data-state": _a(r.open),
            ...o,
            ref: i,
            onClick: R(e.onClick, r.onOpenToggle)
        });
        return r.hasCustomAnchor ? c : p.jsx(gt, {
            asChild: !0,
            ...s,
            children: c
        })
    });
Sa.displayName = ba;
var Oo = "PopoverPortal",
    [zp, Yp] = wa(Oo, {
        forceMount: void 0
    }),
    Ca = e => {
        const {
            __scopePopover: t,
            forceMount: n,
            children: o,
            container: r
        } = e, s = De(Oo, t);
        return p.jsx(zp, {
            scope: t,
            forceMount: n,
            children: p.jsx(X, {
                present: n || s.open,
                children: p.jsx(Be, {
                    asChild: !0,
                    container: r,
                    children: o
                })
            })
        })
    };
Ca.displayName = Oo;
var qe = "PopoverContent",
    Ea = a.forwardRef((e, t) => {
        const n = Yp(qe, e.__scopePopover),
            {
                forceMount: o = n.forceMount,
                ...r
            } = e,
            s = De(qe, e.__scopePopover);
        return p.jsx(X, {
            present: o || s.open,
            children: s.modal ? p.jsx(qp, { ...r,
                ref: t
            }) : p.jsx(Zp, { ...r,
                ref: t
            })
        })
    });
Ea.displayName = qe;
var Xp = Pe("PopoverContent.RemoveScroll"),
    qp = a.forwardRef((e, t) => {
        const n = De(qe, e.__scopePopover),
            o = a.useRef(null),
            r = j(t, o),
            s = a.useRef(!1);
        return a.useEffect(() => {
            const i = o.current;
            if (i) return zt(i)
        }, []), p.jsx(mt, {
            as: Xp,
            allowPinchZoom: !0,
            children: p.jsx(Ra, { ...e,
                ref: r,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: R(e.onCloseAutoFocus, i => {
                    i.preventDefault(), s.current || n.triggerRef.current ? .focus()
                }),
                onPointerDownOutside: R(e.onPointerDownOutside, i => {
                    const c = i.detail.originalEvent,
                        l = c.button === 0 && c.ctrlKey === !0,
                        u = c.button === 2 || l;
                    s.current = u
                }, {
                    checkForDefaultPrevented: !1
                }),
                onFocusOutside: R(e.onFocusOutside, i => i.preventDefault(), {
                    checkForDefaultPrevented: !1
                })
            })
        })
    }),
    Zp = a.forwardRef((e, t) => {
        const n = De(qe, e.__scopePopover),
            o = a.useRef(!1),
            r = a.useRef(!1);
        return p.jsx(Ra, { ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: s => {
                e.onCloseAutoFocus ? .(s), s.defaultPrevented || (o.current || n.triggerRef.current ? .focus(), s.preventDefault()), o.current = !1, r.current = !1
            },
            onInteractOutside: s => {
                e.onInteractOutside ? .(s), s.defaultPrevented || (o.current = !0, s.detail.originalEvent.type === "pointerdown" && (r.current = !0));
                const i = s.target;
                n.triggerRef.current ? .contains(i) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && r.current && s.preventDefault()
            }
        })
    }),
    Ra = a.forwardRef((e, t) => {
        const {
            __scopePopover: n,
            trapFocus: o,
            onOpenAutoFocus: r,
            onCloseAutoFocus: s,
            disableOutsidePointerEvents: i,
            onEscapeKeyDown: c,
            onPointerDownOutside: l,
            onFocusOutside: u,
            onInteractOutside: f,
            ...d
        } = e, m = De(qe, n), v = Ct(n);
        return Ut(), p.jsx(pt, {
            asChild: !0,
            loop: !0,
            trapped: o,
            onMountAutoFocus: r,
            onUnmountAutoFocus: s,
            children: p.jsx($e, {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onInteractOutside: f,
                onEscapeKeyDown: c,
                onPointerDownOutside: l,
                onFocusOutside: u,
                onDismiss: () => m.onOpenChange(!1),
                children: p.jsx(tn, {
                    "data-state": _a(m.open),
                    role: "dialog",
                    id: m.contentId,
                    ...v,
                    ...d,
                    ref: t,
                    style: { ...d.style,
                        "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                })
            })
        })
    }),
    Pa = "PopoverClose",
    Jp = a.forwardRef((e, t) => {
        const {
            __scopePopover: n,
            ...o
        } = e, r = De(Pa, n);
        return p.jsx(A.button, {
            type: "button",
            ...o,
            ref: t,
            onClick: R(e.onClick, () => r.onOpenChange(!1))
        })
    });
Jp.displayName = Pa;
var Qp = "PopoverArrow",
    Ta = a.forwardRef((e, t) => {
        const {
            __scopePopover: n,
            ...o
        } = e, r = Ct(n);
        return p.jsx(nn, { ...r,
            ...o,
            ref: t
        })
    });
Ta.displayName = Qp;

function _a(e) {
    return e ? "open" : "closed"
}
var $h = xa,
    Bh = Sa,
    Vh = Ca,
    Hh = Ea,
    Wh = Ta;

function em(e, t) {
    return a.useReducer((n, o) => t[n][o] ? ? n, e)
}
var No = "ScrollArea",
    [Aa] = Z(No),
    [tm, ue] = Aa(No),
    Ia = a.forwardRef((e, t) => {
        const {
            __scopeScrollArea: n,
            type: o = "hover",
            dir: r,
            scrollHideDelay: s = 600,
            ...i
        } = e, [c, l] = a.useState(null), [u, f] = a.useState(null), [d, m] = a.useState(null), [v, w] = a.useState(null), [h, g] = a.useState(null), [x, y] = a.useState(0), [b, S] = a.useState(0), [C, P] = a.useState(!1), [E, I] = a.useState(!1), D = j(t, N => l(N)), O = Je(r);
        return p.jsx(tm, {
            scope: n,
            type: o,
            dir: O,
            scrollHideDelay: s,
            scrollArea: c,
            viewport: u,
            onViewportChange: f,
            content: d,
            onContentChange: m,
            scrollbarX: v,
            onScrollbarXChange: w,
            scrollbarXEnabled: C,
            onScrollbarXEnabledChange: P,
            scrollbarY: h,
            onScrollbarYChange: g,
            scrollbarYEnabled: E,
            onScrollbarYEnabledChange: I,
            onCornerWidthChange: y,
            onCornerHeightChange: S,
            children: p.jsx(A.div, {
                dir: O,
                ...i,
                ref: D,
                style: {
                    position: "relative",
                    "--radix-scroll-area-corner-width": x + "px",
                    "--radix-scroll-area-corner-height": b + "px",
                    ...e.style
                }
            })
        })
    });
Ia.displayName = No;
var Ma = "ScrollAreaViewport",
    Da = a.forwardRef((e, t) => {
        const {
            __scopeScrollArea: n,
            children: o,
            nonce: r,
            ...s
        } = e, i = ue(Ma, n), c = a.useRef(null), l = j(t, c, i.onViewportChange);
        return p.jsxs(p.Fragment, {
            children: [p.jsx("style", {
                dangerouslySetInnerHTML: {
                    __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
                },
                nonce: r
            }), p.jsx(A.div, {
                "data-radix-scroll-area-viewport": "",
                ...s,
                ref: l,
                style: {
                    overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
                    overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
                    ...e.style
                },
                children: p.jsx("div", {
                    ref: i.onContentChange,
                    style: {
                        minWidth: "100%",
                        display: "table"
                    },
                    children: o
                })
            })]
        })
    });
Da.displayName = Ma;
var ye = "ScrollAreaScrollbar",
    nm = a.forwardRef((e, t) => {
        const {
            forceMount: n,
            ...o
        } = e, r = ue(ye, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: s,
            onScrollbarYEnabledChange: i
        } = r, c = e.orientation === "horizontal";
        return a.useEffect(() => (c ? s(!0) : i(!0), () => {
            c ? s(!1) : i(!1)
        }), [c, s, i]), r.type === "hover" ? p.jsx(om, { ...o,
            ref: t,
            forceMount: n
        }) : r.type === "scroll" ? p.jsx(rm, { ...o,
            ref: t,
            forceMount: n
        }) : r.type === "auto" ? p.jsx(Oa, { ...o,
            ref: t,
            forceMount: n
        }) : r.type === "always" ? p.jsx(Lo, { ...o,
            ref: t
        }) : null
    });
nm.displayName = ye;
var om = a.forwardRef((e, t) => {
        const {
            forceMount: n,
            ...o
        } = e, r = ue(ye, e.__scopeScrollArea), [s, i] = a.useState(!1);
        return a.useEffect(() => {
            const c = r.scrollArea;
            let l = 0;
            if (c) {
                const u = () => {
                        window.clearTimeout(l), i(!0)
                    },
                    f = () => {
                        l = window.setTimeout(() => i(!1), r.scrollHideDelay)
                    };
                return c.addEventListener("pointerenter", u), c.addEventListener("pointerleave", f), () => {
                    window.clearTimeout(l), c.removeEventListener("pointerenter", u), c.removeEventListener("pointerleave", f)
                }
            }
        }, [r.scrollArea, r.scrollHideDelay]), p.jsx(X, {
            present: n || s,
            children: p.jsx(Oa, {
                "data-state": s ? "visible" : "hidden",
                ...o,
                ref: t
            })
        })
    }),
    rm = a.forwardRef((e, t) => {
        const {
            forceMount: n,
            ...o
        } = e, r = ue(ye, e.__scopeScrollArea), s = e.orientation === "horizontal", i = yn(() => l("SCROLL_END"), 100), [c, l] = em("hidden", {
            hidden: {
                SCROLL: "scrolling"
            },
            scrolling: {
                SCROLL_END: "idle",
                POINTER_ENTER: "interacting"
            },
            interacting: {
                SCROLL: "interacting",
                POINTER_LEAVE: "idle"
            },
            idle: {
                HIDE: "hidden",
                SCROLL: "scrolling",
                POINTER_ENTER: "interacting"
            }
        });
        return a.useEffect(() => {
            if (c === "idle") {
                const u = window.setTimeout(() => l("HIDE"), r.scrollHideDelay);
                return () => window.clearTimeout(u)
            }
        }, [c, r.scrollHideDelay, l]), a.useEffect(() => {
            const u = r.viewport,
                f = s ? "scrollLeft" : "scrollTop";
            if (u) {
                let d = u[f];
                const m = () => {
                    const v = u[f];
                    d !== v && (l("SCROLL"), i()), d = v
                };
                return u.addEventListener("scroll", m), () => u.removeEventListener("scroll", m)
            }
        }, [r.viewport, s, l, i]), p.jsx(X, {
            present: n || c !== "hidden",
            children: p.jsx(Lo, {
                "data-state": c === "hidden" ? "hidden" : "visible",
                ...o,
                ref: t,
                onPointerEnter: R(e.onPointerEnter, () => l("POINTER_ENTER")),
                onPointerLeave: R(e.onPointerLeave, () => l("POINTER_LEAVE"))
            })
        })
    }),
    Oa = a.forwardRef((e, t) => {
        const n = ue(ye, e.__scopeScrollArea),
            {
                forceMount: o,
                ...r
            } = e,
            [s, i] = a.useState(!1),
            c = e.orientation === "horizontal",
            l = yn(() => {
                if (n.viewport) {
                    const u = n.viewport.offsetWidth < n.viewport.scrollWidth,
                        f = n.viewport.offsetHeight < n.viewport.scrollHeight;
                    i(c ? u : f)
                }
            }, 10);
        return Ze(n.viewport, l), Ze(n.content, l), p.jsx(X, {
            present: o || s,
            children: p.jsx(Lo, {
                "data-state": s ? "visible" : "hidden",
                ...r,
                ref: t
            })
        })
    }),
    Lo = a.forwardRef((e, t) => {
        const {
            orientation: n = "vertical",
            ...o
        } = e, r = ue(ye, e.__scopeScrollArea), s = a.useRef(null), i = a.useRef(0), [c, l] = a.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
                size: 0,
                paddingStart: 0,
                paddingEnd: 0
            }
        }), u = ja(c.viewport, c.content), f = { ...o,
            sizes: c,
            onSizesChange: l,
            hasThumb: u > 0 && u < 1,
            onThumbChange: m => s.current = m,
            onThumbPointerUp: () => i.current = 0,
            onThumbPointerDown: m => i.current = m
        };

        function d(m, v) {
            return dm(m, i.current, c, v)
        }
        return n === "horizontal" ? p.jsx(sm, { ...f,
            ref: t,
            onThumbPositionChange: () => {
                if (r.viewport && s.current) {
                    const m = r.viewport.scrollLeft,
                        v = xr(m, c, r.dir);
                    s.current.style.transform = `translate3d(${v}px, 0, 0)`
                }
            },
            onWheelScroll: m => {
                r.viewport && (r.viewport.scrollLeft = m)
            },
            onDragScroll: m => {
                r.viewport && (r.viewport.scrollLeft = d(m, r.dir))
            }
        }) : n === "vertical" ? p.jsx(im, { ...f,
            ref: t,
            onThumbPositionChange: () => {
                if (r.viewport && s.current) {
                    const m = r.viewport.scrollTop,
                        v = xr(m, c);
                    s.current.style.transform = `translate3d(0, ${v}px, 0)`
                }
            },
            onWheelScroll: m => {
                r.viewport && (r.viewport.scrollTop = m)
            },
            onDragScroll: m => {
                r.viewport && (r.viewport.scrollTop = d(m))
            }
        }) : null
    }),
    sm = a.forwardRef((e, t) => {
        const {
            sizes: n,
            onSizesChange: o,
            ...r
        } = e, s = ue(ye, e.__scopeScrollArea), [i, c] = a.useState(), l = a.useRef(null), u = j(t, l, s.onScrollbarXChange);
        return a.useEffect(() => {
            l.current && c(getComputedStyle(l.current))
        }, [l]), p.jsx(La, {
            "data-orientation": "horizontal",
            ...r,
            ref: u,
            sizes: n,
            style: {
                bottom: 0,
                left: s.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
                right: s.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
                "--radix-scroll-area-thumb-width": xn(n) + "px",
                ...e.style
            },
            onThumbPointerDown: f => e.onThumbPointerDown(f.x),
            onDragScroll: f => e.onDragScroll(f.x),
            onWheelScroll: (f, d) => {
                if (s.viewport) {
                    const m = s.viewport.scrollLeft + f.deltaX;
                    e.onWheelScroll(m), $a(m, d) && f.preventDefault()
                }
            },
            onResize: () => {
                l.current && s.viewport && i && o({
                    content: s.viewport.scrollWidth,
                    viewport: s.viewport.offsetWidth,
                    scrollbar: {
                        size: l.current.clientWidth,
                        paddingStart: Wt(i.paddingLeft),
                        paddingEnd: Wt(i.paddingRight)
                    }
                })
            }
        })
    }),
    im = a.forwardRef((e, t) => {
        const {
            sizes: n,
            onSizesChange: o,
            ...r
        } = e, s = ue(ye, e.__scopeScrollArea), [i, c] = a.useState(), l = a.useRef(null), u = j(t, l, s.onScrollbarYChange);
        return a.useEffect(() => {
            l.current && c(getComputedStyle(l.current))
        }, [l]), p.jsx(La, {
            "data-orientation": "vertical",
            ...r,
            ref: u,
            sizes: n,
            style: {
                top: 0,
                right: s.dir === "ltr" ? 0 : void 0,
                left: s.dir === "rtl" ? 0 : void 0,
                bottom: "var(--radix-scroll-area-corner-height)",
                "--radix-scroll-area-thumb-height": xn(n) + "px",
                ...e.style
            },
            onThumbPointerDown: f => e.onThumbPointerDown(f.y),
            onDragScroll: f => e.onDragScroll(f.y),
            onWheelScroll: (f, d) => {
                if (s.viewport) {
                    const m = s.viewport.scrollTop + f.deltaY;
                    e.onWheelScroll(m), $a(m, d) && f.preventDefault()
                }
            },
            onResize: () => {
                l.current && s.viewport && i && o({
                    content: s.viewport.scrollHeight,
                    viewport: s.viewport.offsetHeight,
                    scrollbar: {
                        size: l.current.clientHeight,
                        paddingStart: Wt(i.paddingTop),
                        paddingEnd: Wt(i.paddingBottom)
                    }
                })
            }
        })
    }),
    [am, Na] = Aa(ye),
    La = a.forwardRef((e, t) => {
        const {
            __scopeScrollArea: n,
            sizes: o,
            hasThumb: r,
            onThumbChange: s,
            onThumbPointerUp: i,
            onThumbPointerDown: c,
            onThumbPositionChange: l,
            onDragScroll: u,
            onWheelScroll: f,
            onResize: d,
            ...m
        } = e, v = ue(ye, n), [w, h] = a.useState(null), g = j(t, D => h(D)), x = a.useRef(null), y = a.useRef(""), b = v.viewport, S = o.content - o.viewport, C = G(f), P = G(l), E = yn(d, 10);

        function I(D) {
            if (x.current) {
                const O = D.clientX - x.current.left,
                    N = D.clientY - x.current.top;
                u({
                    x: O,
                    y: N
                })
            }
        }
        return a.useEffect(() => {
            const D = O => {
                const N = O.target;
                w ? .contains(N) && C(O, S)
            };
            return document.addEventListener("wheel", D, {
                passive: !1
            }), () => document.removeEventListener("wheel", D, {
                passive: !1
            })
        }, [b, w, S, C]), a.useEffect(P, [o, P]), Ze(w, E), Ze(v.content, E), p.jsx(am, {
            scope: n,
            scrollbar: w,
            hasThumb: r,
            onThumbChange: G(s),
            onThumbPointerUp: G(i),
            onThumbPositionChange: P,
            onThumbPointerDown: G(c),
            children: p.jsx(A.div, { ...m,
                ref: g,
                style: {
                    position: "absolute",
                    ...m.style
                },
                onPointerDown: R(e.onPointerDown, D => {
                    D.button === 0 && (D.target.setPointerCapture(D.pointerId), x.current = w.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", v.viewport && (v.viewport.style.scrollBehavior = "auto"), I(D))
                }),
                onPointerMove: R(e.onPointerMove, I),
                onPointerUp: R(e.onPointerUp, D => {
                    const O = D.target;
                    O.hasPointerCapture(D.pointerId) && O.releasePointerCapture(D.pointerId), document.body.style.webkitUserSelect = y.current, v.viewport && (v.viewport.style.scrollBehavior = ""), x.current = null
                })
            })
        })
    }),
    Ht = "ScrollAreaThumb",
    cm = a.forwardRef((e, t) => {
        const {
            forceMount: n,
            ...o
        } = e, r = Na(Ht, e.__scopeScrollArea);
        return p.jsx(X, {
            present: n || r.hasThumb,
            children: p.jsx(lm, {
                ref: t,
                ...o
            })
        })
    }),
    lm = a.forwardRef((e, t) => {
        const {
            __scopeScrollArea: n,
            style: o,
            ...r
        } = e, s = ue(Ht, n), i = Na(Ht, n), {
            onThumbPositionChange: c
        } = i, l = j(t, d => i.onThumbChange(d)), u = a.useRef(void 0), f = yn(() => {
            u.current && (u.current(), u.current = void 0)
        }, 100);
        return a.useEffect(() => {
            const d = s.viewport;
            if (d) {
                const m = () => {
                    if (f(), !u.current) {
                        const v = fm(d, c);
                        u.current = v, c()
                    }
                };
                return c(), d.addEventListener("scroll", m), () => d.removeEventListener("scroll", m)
            }
        }, [s.viewport, f, c]), p.jsx(A.div, {
            "data-state": i.hasThumb ? "visible" : "hidden",
            ...r,
            ref: l,
            style: {
                width: "var(--radix-scroll-area-thumb-width)",
                height: "var(--radix-scroll-area-thumb-height)",
                ...o
            },
            onPointerDownCapture: R(e.onPointerDownCapture, d => {
                const v = d.target.getBoundingClientRect(),
                    w = d.clientX - v.left,
                    h = d.clientY - v.top;
                i.onThumbPointerDown({
                    x: w,
                    y: h
                })
            }),
            onPointerUp: R(e.onPointerUp, i.onThumbPointerUp)
        })
    });
cm.displayName = Ht;
var ko = "ScrollAreaCorner",
    ka = a.forwardRef((e, t) => {
        const n = ue(ko, e.__scopeScrollArea),
            o = !!(n.scrollbarX && n.scrollbarY);
        return n.type !== "scroll" && o ? p.jsx(um, { ...e,
            ref: t
        }) : null
    });
ka.displayName = ko;
var um = a.forwardRef((e, t) => {
    const {
        __scopeScrollArea: n,
        ...o
    } = e, r = ue(ko, n), [s, i] = a.useState(0), [c, l] = a.useState(0), u = !!(s && c);
    return Ze(r.scrollbarX, () => {
        const f = r.scrollbarX ? .offsetHeight || 0;
        r.onCornerHeightChange(f), l(f)
    }), Ze(r.scrollbarY, () => {
        const f = r.scrollbarY ? .offsetWidth || 0;
        r.onCornerWidthChange(f), i(f)
    }), u ? p.jsx(A.div, { ...o,
        ref: t,
        style: {
            width: s,
            height: c,
            position: "absolute",
            right: r.dir === "ltr" ? 0 : void 0,
            left: r.dir === "rtl" ? 0 : void 0,
            bottom: 0,
            ...e.style
        }
    }) : null
});

function Wt(e) {
    return e ? parseInt(e, 10) : 0
}

function ja(e, t) {
    const n = e / t;
    return isNaN(n) ? 0 : n
}

function xn(e) {
    const t = ja(e.viewport, e.content),
        n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
        o = (e.scrollbar.size - n) * t;
    return Math.max(o, 18)
}

function dm(e, t, n, o = "ltr") {
    const r = xn(n),
        s = r / 2,
        i = t || s,
        c = r - i,
        l = n.scrollbar.paddingStart + i,
        u = n.scrollbar.size - n.scrollbar.paddingEnd - c,
        f = n.content - n.viewport,
        d = o === "ltr" ? [0, f] : [f * -1, 0];
    return Fa([l, u], d)(e)
}

function xr(e, t, n = "ltr") {
    const o = xn(t),
        r = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
        s = t.scrollbar.size - r,
        i = t.content - t.viewport,
        c = s - o,
        l = n === "ltr" ? [0, i] : [i * -1, 0],
        u = it(e, l);
    return Fa([0, i], [0, c])(u)
}

function Fa(e, t) {
    return n => {
        if (e[0] === e[1] || t[0] === t[1]) return t[0];
        const o = (t[1] - t[0]) / (e[1] - e[0]);
        return t[0] + o * (n - e[0])
    }
}

function $a(e, t) {
    return e > 0 && e < t
}
var fm = (e, t = () => {}) => {
    let n = {
            left: e.scrollLeft,
            top: e.scrollTop
        },
        o = 0;
    return (function r() {
        const s = {
                left: e.scrollLeft,
                top: e.scrollTop
            },
            i = n.left !== s.left,
            c = n.top !== s.top;
        (i || c) && t(), n = s, o = window.requestAnimationFrame(r)
    })(), () => window.cancelAnimationFrame(o)
};

function yn(e, t) {
    const n = G(e),
        o = a.useRef(0);
    return a.useEffect(() => () => window.clearTimeout(o.current), []), a.useCallback(() => {
        window.clearTimeout(o.current), o.current = window.setTimeout(n, t)
    }, [n, t])
}

function Ze(e, t) {
    const n = G(t);
    z(() => {
        let o = 0;
        if (e) {
            const r = new ResizeObserver(() => {
                cancelAnimationFrame(o), o = window.requestAnimationFrame(n)
            });
            return r.observe(e), () => {
                window.cancelAnimationFrame(o), r.unobserve(e)
            }
        }
    }, [e, n])
}
var Kh = Ia,
    Uh = Da,
    Gh = ka,
    bn = "Tabs",
    [pm] = Z(bn, [fn]),
    Ba = fn(),
    [mm, jo] = pm(bn),
    Va = a.forwardRef((e, t) => {
        const {
            __scopeTabs: n,
            value: o,
            onValueChange: r,
            defaultValue: s,
            orientation: i = "horizontal",
            dir: c,
            activationMode: l = "automatic",
            ...u
        } = e, f = Je(c), [d, m] = ae({
            prop: o,
            onChange: r,
            defaultProp: s ? ? "",
            caller: bn
        });
        return p.jsx(mm, {
            scope: n,
            baseId: se(),
            value: d,
            onValueChange: m,
            orientation: i,
            dir: f,
            activationMode: l,
            children: p.jsx(A.div, {
                dir: f,
                "data-orientation": i,
                ...u,
                ref: t
            })
        })
    });
Va.displayName = bn;
var Ha = "TabsList",
    Wa = a.forwardRef((e, t) => {
        const {
            __scopeTabs: n,
            loop: o = !0,
            ...r
        } = e, s = jo(Ha, n), i = Ba(n);
        return p.jsx(mi, {
            asChild: !0,
            ...i,
            orientation: s.orientation,
            dir: s.dir,
            loop: o,
            children: p.jsx(A.div, {
                role: "tablist",
                "aria-orientation": s.orientation,
                ...r,
                ref: t
            })
        })
    });
Wa.displayName = Ha;
var Ka = "TabsTrigger",
    Ua = a.forwardRef((e, t) => {
        const {
            __scopeTabs: n,
            value: o,
            disabled: r = !1,
            ...s
        } = e, i = jo(Ka, n), c = Ba(n), l = Ya(i.baseId, o), u = Xa(i.baseId, o), f = o === i.value;
        return p.jsx(hi, {
            asChild: !0,
            ...c,
            focusable: !r,
            active: f,
            children: p.jsx(A.button, {
                type: "button",
                role: "tab",
                "aria-selected": f,
                "aria-controls": u,
                "data-state": f ? "active" : "inactive",
                "data-disabled": r ? "" : void 0,
                disabled: r,
                id: l,
                ...s,
                ref: t,
                onMouseDown: R(e.onMouseDown, d => {
                    !r && d.button === 0 && d.ctrlKey === !1 ? i.onValueChange(o) : d.preventDefault()
                }),
                onKeyDown: R(e.onKeyDown, d => {
                    [" ", "Enter"].includes(d.key) && i.onValueChange(o)
                }),
                onFocus: R(e.onFocus, () => {
                    const d = i.activationMode !== "manual";
                    !f && !r && d && i.onValueChange(o)
                })
            })
        })
    });
Ua.displayName = Ka;
var Ga = "TabsContent",
    za = a.forwardRef((e, t) => {
        const {
            __scopeTabs: n,
            value: o,
            forceMount: r,
            children: s,
            ...i
        } = e, c = jo(Ga, n), l = Ya(c.baseId, o), u = Xa(c.baseId, o), f = o === c.value, d = a.useRef(f);
        return a.useEffect(() => {
            const m = requestAnimationFrame(() => d.current = !1);
            return () => cancelAnimationFrame(m)
        }, []), p.jsx(X, {
            present: r || f,
            children: ({
                present: m
            }) => p.jsx(A.div, {
                "data-state": f ? "active" : "inactive",
                "data-orientation": c.orientation,
                role: "tabpanel",
                "aria-labelledby": l,
                hidden: !m,
                id: u,
                tabIndex: 0,
                ...i,
                ref: t,
                style: { ...e.style,
                    animationDuration: d.current ? "0s" : void 0
                },
                children: m && s
            })
        })
    });
za.displayName = Ga;

function Ya(e, t) {
    return `${e}-trigger-${t}`
}

function Xa(e, t) {
    return `${e}-content-${t}`
}
var zh = Va,
    Yh = Wa,
    Xh = Ua,
    qh = za;

function hm() {
    return ql.useSyncExternalStore(vm, () => !0, () => !1)
}

function vm() {
    return () => {}
}
var Fo = "Avatar",
    [gm] = Z(Fo),
    [wm, qa] = gm(Fo),
    Za = a.forwardRef((e, t) => {
        const {
            __scopeAvatar: n,
            ...o
        } = e, [r, s] = a.useState("idle");
        return p.jsx(wm, {
            scope: n,
            imageLoadingStatus: r,
            onImageLoadingStatusChange: s,
            children: p.jsx(A.span, { ...o,
                ref: t
            })
        })
    });
Za.displayName = Fo;
var Ja = "AvatarImage",
    Qa = a.forwardRef((e, t) => {
        const {
            __scopeAvatar: n,
            src: o,
            onLoadingStatusChange: r = () => {},
            ...s
        } = e, i = qa(Ja, n), c = xm(o, s), l = G(u => {
            r(u), i.onImageLoadingStatusChange(u)
        });
        return z(() => {
            c !== "idle" && l(c)
        }, [c, l]), c === "loaded" ? p.jsx(A.img, { ...s,
            ref: t,
            src: o
        }) : null
    });
Qa.displayName = Ja;
var ec = "AvatarFallback",
    tc = a.forwardRef((e, t) => {
        const {
            __scopeAvatar: n,
            delayMs: o,
            ...r
        } = e, s = qa(ec, n), [i, c] = a.useState(o === void 0);
        return a.useEffect(() => {
            if (o !== void 0) {
                const l = window.setTimeout(() => c(!0), o);
                return () => window.clearTimeout(l)
            }
        }, [o]), i && s.imageLoadingStatus !== "loaded" ? p.jsx(A.span, { ...r,
            ref: t
        }) : null
    });
tc.displayName = ec;

function yr(e, t) {
    return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
}

function xm(e, {
    referrerPolicy: t,
    crossOrigin: n
}) {
    const o = hm(),
        r = a.useRef(null),
        s = o ? (r.current || (r.current = new window.Image), r.current) : null,
        [i, c] = a.useState(() => yr(s, e));
    return z(() => {
        c(yr(s, e))
    }, [s, e]), z(() => {
        const l = d => () => {
            c(d)
        };
        if (!s) return;
        const u = l("loaded"),
            f = l("error");
        return s.addEventListener("load", u), s.addEventListener("error", f), t && (s.referrerPolicy = t), typeof n == "string" && (s.crossOrigin = n), () => {
            s.removeEventListener("load", u), s.removeEventListener("error", f)
        }
    }, [s, n, t]), i
}
var Zh = Za,
    Jh = Qa,
    Qh = tc,
    Sn = "Collapsible",
    [ym] = Z(Sn),
    [bm, $o] = ym(Sn),
    nc = a.forwardRef((e, t) => {
        const {
            __scopeCollapsible: n,
            open: o,
            defaultOpen: r,
            disabled: s,
            onOpenChange: i,
            ...c
        } = e, [l, u] = ae({
            prop: o,
            defaultProp: r ? ? !1,
            onChange: i,
            caller: Sn
        });
        return p.jsx(bm, {
            scope: n,
            disabled: s,
            contentId: se(),
            open: l,
            onOpenToggle: a.useCallback(() => u(f => !f), [u]),
            children: p.jsx(A.div, {
                "data-state": Vo(l),
                "data-disabled": s ? "" : void 0,
                ...c,
                ref: t
            })
        })
    });
nc.displayName = Sn;
var oc = "CollapsibleTrigger",
    Sm = a.forwardRef((e, t) => {
        const {
            __scopeCollapsible: n,
            ...o
        } = e, r = $o(oc, n);
        return p.jsx(A.button, {
            type: "button",
            "aria-controls": r.contentId,
            "aria-expanded": r.open || !1,
            "data-state": Vo(r.open),
            "data-disabled": r.disabled ? "" : void 0,
            disabled: r.disabled,
            ...o,
            ref: t,
            onClick: R(e.onClick, r.onOpenToggle)
        })
    });
Sm.displayName = oc;
var Bo = "CollapsibleContent",
    Cm = a.forwardRef((e, t) => {
        const {
            forceMount: n,
            ...o
        } = e, r = $o(Bo, e.__scopeCollapsible);
        return p.jsx(X, {
            present: n || r.open,
            children: ({
                present: s
            }) => p.jsx(Em, { ...o,
                ref: t,
                present: s
            })
        })
    });
Cm.displayName = Bo;
var Em = a.forwardRef((e, t) => {
    const {
        __scopeCollapsible: n,
        present: o,
        children: r,
        ...s
    } = e, i = $o(Bo, n), [c, l] = a.useState(o), u = a.useRef(null), f = j(t, u), d = a.useRef(0), m = d.current, v = a.useRef(0), w = v.current, h = i.open || c, g = a.useRef(h), x = a.useRef(void 0);
    return a.useEffect(() => {
        const y = requestAnimationFrame(() => g.current = !1);
        return () => cancelAnimationFrame(y)
    }, []), z(() => {
        const y = u.current;
        if (y) {
            x.current = x.current || {
                transitionDuration: y.style.transitionDuration,
                animationName: y.style.animationName
            }, y.style.transitionDuration = "0s", y.style.animationName = "none";
            const b = y.getBoundingClientRect();
            d.current = b.height, v.current = b.width, g.current || (y.style.transitionDuration = x.current.transitionDuration, y.style.animationName = x.current.animationName), l(o)
        }
    }, [i.open, o]), p.jsx(A.div, {
        "data-state": Vo(i.open),
        "data-disabled": i.disabled ? "" : void 0,
        id: i.contentId,
        hidden: !h,
        ...s,
        ref: f,
        style: {
            "--radix-collapsible-content-height": m ? `${m}px` : void 0,
            "--radix-collapsible-content-width": w ? `${w}px` : void 0,
            ...e.style
        },
        children: h && r
    })
});

function Vo(e) {
    return e ? "open" : "closed"
}
var ev = nc,
    rc = ["PageUp", "PageDown"],
    sc = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
    ic = {
        "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
        "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
        "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
        "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
    },
    nt = "Slider",
    [ro, Rm, Pm] = ht(nt),
    [ac] = Z(nt, [Pm]),
    [Tm, Cn] = ac(nt),
    cc = a.forwardRef((e, t) => {
        const {
            name: n,
            min: o = 0,
            max: r = 100,
            step: s = 1,
            orientation: i = "horizontal",
            disabled: c = !1,
            minStepsBetweenThumbs: l = 0,
            defaultValue: u = [o],
            value: f,
            onValueChange: d = () => {},
            onValueCommit: m = () => {},
            inverted: v = !1,
            form: w,
            ...h
        } = e, g = a.useRef(new Set), x = a.useRef(0), b = i === "horizontal" ? _m : Am, [S = [], C] = ae({
            prop: f,
            defaultProp: u,
            onChange: N => {
                [...g.current][x.current] ? .focus(), d(N)
            }
        }), P = a.useRef(S);

        function E(N) {
            const F = Nm(S, N);
            O(N, F)
        }

        function I(N) {
            O(N, x.current)
        }

        function D() {
            const N = P.current[x.current];
            S[x.current] !== N && m(S)
        }

        function O(N, F, {
            commit: V
        } = {
            commit: !1
        }) {
            const _ = Fm(s),
                B = $m(Math.round((N - o) / s) * s + o, _),
                k = it(B, [o, r]);
            C(($ = []) => {
                const M = Dm($, k, F);
                if (jm(M, l * s)) {
                    x.current = M.indexOf(k);
                    const T = String(M) !== String($);
                    return T && V && m(M), T ? M : $
                } else return $
            })
        }
        return p.jsx(Tm, {
            scope: e.__scopeSlider,
            name: n,
            disabled: c,
            min: o,
            max: r,
            valueIndexToChangeRef: x,
            thumbs: g.current,
            values: S,
            orientation: i,
            form: w,
            children: p.jsx(ro.Provider, {
                scope: e.__scopeSlider,
                children: p.jsx(ro.Slot, {
                    scope: e.__scopeSlider,
                    children: p.jsx(b, {
                        "aria-disabled": c,
                        "data-disabled": c ? "" : void 0,
                        ...h,
                        ref: t,
                        onPointerDown: R(h.onPointerDown, () => {
                            c || (P.current = S)
                        }),
                        min: o,
                        max: r,
                        inverted: v,
                        onSlideStart: c ? void 0 : E,
                        onSlideMove: c ? void 0 : I,
                        onSlideEnd: c ? void 0 : D,
                        onHomeKeyDown: () => !c && O(o, 0, {
                            commit: !0
                        }),
                        onEndKeyDown: () => !c && O(r, S.length - 1, {
                            commit: !0
                        }),
                        onStepKeyDown: ({
                            event: N,
                            direction: F
                        }) => {
                            if (!c) {
                                const B = rc.includes(N.key) || N.shiftKey && sc.includes(N.key) ? 10 : 1,
                                    k = x.current,
                                    $ = S[k],
                                    M = s * B * F;
                                O($ + M, k, {
                                    commit: !0
                                })
                            }
                        }
                    })
                })
            })
        })
    });
cc.displayName = nt;
var [lc, uc] = ac(nt, {
    startEdge: "left",
    endEdge: "right",
    size: "width",
    direction: 1
}), _m = a.forwardRef((e, t) => {
    const {
        min: n,
        max: o,
        dir: r,
        inverted: s,
        onSlideStart: i,
        onSlideMove: c,
        onSlideEnd: l,
        onStepKeyDown: u,
        ...f
    } = e, [d, m] = a.useState(null), v = j(t, b => m(b)), w = a.useRef(void 0), h = Je(r), g = h === "ltr", x = g && !s || !g && s;

    function y(b) {
        const S = w.current || d.getBoundingClientRect(),
            C = [0, S.width],
            E = Ho(C, x ? [n, o] : [o, n]);
        return w.current = S, E(b - S.left)
    }
    return p.jsx(lc, {
        scope: e.__scopeSlider,
        startEdge: x ? "left" : "right",
        endEdge: x ? "right" : "left",
        direction: x ? 1 : -1,
        size: "width",
        children: p.jsx(dc, {
            dir: h,
            "data-orientation": "horizontal",
            ...f,
            ref: v,
            style: { ...f.style,
                "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: b => {
                const S = y(b.clientX);
                i ? .(S)
            },
            onSlideMove: b => {
                const S = y(b.clientX);
                c ? .(S)
            },
            onSlideEnd: () => {
                w.current = void 0, l ? .()
            },
            onStepKeyDown: b => {
                const C = ic[x ? "from-left" : "from-right"].includes(b.key);
                u ? .({
                    event: b,
                    direction: C ? -1 : 1
                })
            }
        })
    })
}), Am = a.forwardRef((e, t) => {
    const {
        min: n,
        max: o,
        inverted: r,
        onSlideStart: s,
        onSlideMove: i,
        onSlideEnd: c,
        onStepKeyDown: l,
        ...u
    } = e, f = a.useRef(null), d = j(t, f), m = a.useRef(void 0), v = !r;

    function w(h) {
        const g = m.current || f.current.getBoundingClientRect(),
            x = [0, g.height],
            b = Ho(x, v ? [o, n] : [n, o]);
        return m.current = g, b(h - g.top)
    }
    return p.jsx(lc, {
        scope: e.__scopeSlider,
        startEdge: v ? "bottom" : "top",
        endEdge: v ? "top" : "bottom",
        size: "height",
        direction: v ? 1 : -1,
        children: p.jsx(dc, {
            "data-orientation": "vertical",
            ...u,
            ref: d,
            style: { ...u.style,
                "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: h => {
                const g = w(h.clientY);
                s ? .(g)
            },
            onSlideMove: h => {
                const g = w(h.clientY);
                i ? .(g)
            },
            onSlideEnd: () => {
                m.current = void 0, c ? .()
            },
            onStepKeyDown: h => {
                const x = ic[v ? "from-bottom" : "from-top"].includes(h.key);
                l ? .({
                    event: h,
                    direction: x ? -1 : 1
                })
            }
        })
    })
}), dc = a.forwardRef((e, t) => {
    const {
        __scopeSlider: n,
        onSlideStart: o,
        onSlideMove: r,
        onSlideEnd: s,
        onHomeKeyDown: i,
        onEndKeyDown: c,
        onStepKeyDown: l,
        ...u
    } = e, f = Cn(nt, n);
    return p.jsx(A.span, { ...u,
        ref: t,
        onKeyDown: R(e.onKeyDown, d => {
            d.key === "Home" ? (i(d), d.preventDefault()) : d.key === "End" ? (c(d), d.preventDefault()) : rc.concat(sc).includes(d.key) && (l(d), d.preventDefault())
        }),
        onPointerDown: R(e.onPointerDown, d => {
            const m = d.target;
            m.setPointerCapture(d.pointerId), d.preventDefault(), f.thumbs.has(m) ? m.focus() : o(d)
        }),
        onPointerMove: R(e.onPointerMove, d => {
            d.target.hasPointerCapture(d.pointerId) && r(d)
        }),
        onPointerUp: R(e.onPointerUp, d => {
            const m = d.target;
            m.hasPointerCapture(d.pointerId) && (m.releasePointerCapture(d.pointerId), s(d))
        })
    })
}), fc = "SliderTrack", pc = a.forwardRef((e, t) => {
    const {
        __scopeSlider: n,
        ...o
    } = e, r = Cn(fc, n);
    return p.jsx(A.span, {
        "data-disabled": r.disabled ? "" : void 0,
        "data-orientation": r.orientation,
        ...o,
        ref: t
    })
});
pc.displayName = fc;
var so = "SliderRange",
    mc = a.forwardRef((e, t) => {
        const {
            __scopeSlider: n,
            ...o
        } = e, r = Cn(so, n), s = uc(so, n), i = a.useRef(null), c = j(t, i), l = r.values.length, u = r.values.map(m => gc(m, r.min, r.max)), f = l > 1 ? Math.min(...u) : 0, d = 100 - Math.max(...u);
        return p.jsx(A.span, {
            "data-orientation": r.orientation,
            "data-disabled": r.disabled ? "" : void 0,
            ...o,
            ref: c,
            style: { ...e.style,
                [s.startEdge]: f + "%",
                [s.endEdge]: d + "%"
            }
        })
    });
mc.displayName = so;
var io = "SliderThumb",
    hc = a.forwardRef((e, t) => {
        const n = Rm(e.__scopeSlider),
            [o, r] = a.useState(null),
            s = j(t, c => r(c)),
            i = a.useMemo(() => o ? n().findIndex(c => c.ref.current === o) : -1, [n, o]);
        return p.jsx(Im, { ...e,
            ref: s,
            index: i
        })
    }),
    Im = a.forwardRef((e, t) => {
        const {
            __scopeSlider: n,
            index: o,
            name: r,
            ...s
        } = e, i = Cn(io, n), c = uc(io, n), [l, u] = a.useState(null), f = j(t, y => u(y)), d = l ? i.form || !!l.closest("form") : !0, m = Qt(l), v = i.values[o], w = v === void 0 ? 0 : gc(v, i.min, i.max), h = Om(o, i.values.length), g = m ? .[c.size], x = g ? Lm(g, w, c.direction) : 0;
        return a.useEffect(() => {
            if (l) return i.thumbs.add(l), () => {
                i.thumbs.delete(l)
            }
        }, [l, i.thumbs]), p.jsxs("span", {
            style: {
                transform: "var(--radix-slider-thumb-transform)",
                position: "absolute",
                [c.startEdge]: `calc(${w}% + ${x}px)`
            },
            children: [p.jsx(ro.ItemSlot, {
                scope: e.__scopeSlider,
                children: p.jsx(A.span, {
                    role: "slider",
                    "aria-label": e["aria-label"] || h,
                    "aria-valuemin": i.min,
                    "aria-valuenow": v,
                    "aria-valuemax": i.max,
                    "aria-orientation": i.orientation,
                    "data-orientation": i.orientation,
                    "data-disabled": i.disabled ? "" : void 0,
                    tabIndex: i.disabled ? void 0 : 0,
                    ...s,
                    ref: f,
                    style: v === void 0 ? {
                        display: "none"
                    } : e.style,
                    onFocus: R(e.onFocus, () => {
                        i.valueIndexToChangeRef.current = o
                    })
                })
            }), d && p.jsx(vc, {
                name: r ? ? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0),
                form: i.form,
                value: v
            }, o)]
        })
    });
hc.displayName = io;
var Mm = "RadioBubbleInput",
    vc = a.forwardRef(({
        __scopeSlider: e,
        value: t,
        ...n
    }, o) => {
        const r = a.useRef(null),
            s = j(r, o),
            i = on(t);
        return a.useEffect(() => {
            const c = r.current;
            if (!c) return;
            const l = window.HTMLInputElement.prototype,
                f = Object.getOwnPropertyDescriptor(l, "value").set;
            if (i !== t && f) {
                const d = new Event("input", {
                    bubbles: !0
                });
                f.call(c, t), c.dispatchEvent(d)
            }
        }, [i, t]), p.jsx(A.input, {
            style: {
                display: "none"
            },
            ...n,
            ref: s,
            defaultValue: t
        })
    });
vc.displayName = Mm;

function Dm(e = [], t, n) {
    const o = [...e];
    return o[n] = t, o.sort((r, s) => r - s)
}

function gc(e, t, n) {
    const s = 100 / (n - t) * (e - t);
    return it(s, [0, 100])
}

function Om(e, t) {
    return t > 2 ? `Value ${e+1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0
}

function Nm(e, t) {
    if (e.length === 1) return 0;
    const n = e.map(r => Math.abs(r - t)),
        o = Math.min(...n);
    return n.indexOf(o)
}

function Lm(e, t, n) {
    const o = e / 2,
        s = Ho([0, 50], [0, o]);
    return (o - s(t) * n) * n
}

function km(e) {
    return e.slice(0, -1).map((t, n) => e[n + 1] - t)
}

function jm(e, t) {
    if (t > 0) {
        const n = km(e);
        return Math.min(...n) >= t
    }
    return !0
}

function Ho(e, t) {
    return n => {
        if (e[0] === e[1] || t[0] === t[1]) return t[0];
        const o = (t[1] - t[0]) / (e[1] - e[0]);
        return t[0] + o * (n - e[0])
    }
}

function Fm(e) {
    return (String(e).split(".")[1] || "").length
}

function $m(e, t) {
    const n = Math.pow(10, t);
    return Math.round(e * n) / n
}
var tv = cc,
    nv = pc,
    ov = mc,
    rv = hc;
export {
    Hh as $, Th as A, wh as B, zm as C, Xm as D, xh as E, fh as F, ph as G, mh as H, eh as I, hh as J, vh as K, rh as L, dh as M, Ih as N, Gm as O, Um as P, Mh as Q, Wm as R, ch as S, Km as T, Dh as U, oh as V, Oh as W, Nh as X, kh as Y, Fh as Z, Vh as _, qm as a, $h as a0, Bh as a1, Wh as a2, Kh as a3, Uh as a4, Gh as a5, nm as a6, cm as a7, Yh as a8, Xh as a9, qh as aa, zh as ab, A as ac, Zh as ad, Jh as ae, Qh as af, ev as ag, Sm as ah, Cm as ai, tv as aj, nv as ak, ov as al, rv as am, qu as an, td as ao, rd as ap, nd as aq, sd as ar, gd as as, jh as at, Lh as au, Ym as b, Jm as c, lh as d, th as e, nh as f, sh as g, ah as h, ih as i, p as j, uh as k, Zm as l, Qm as m, Vm as n, of as o, rf as p, _h as q, Ah as r, ql as s, yh as t, bh as u, Ch as v, Eh as w, Ph as x, Rh as y, Sh as z
};