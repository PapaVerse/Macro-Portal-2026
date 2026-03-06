var Ot = Object.defineProperty;
var Et = (e, t, r) => t in e ? Ot(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var ce = (e, t, r) => Et(e, typeof t != "symbol" ? t + "" : t, r);
import {
    r as Pt,
    a as A
} from "./chunk-CMjeC7eR.js";

function P(e) {
    return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}
var Rt = typeof Symbol == "function" && Symbol.observable || "@@observable",
    ze = Rt,
    ae = () => Math.random().toString(36).substring(7).split("").join("."),
    Ct = {
        INIT: `@@redux/INIT${ae()}`,
        REPLACE: `@@redux/REPLACE${ae()}`,
        PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${ae()}`
    },
    re = Ct;

function Re(e) {
    if (typeof e != "object" || e === null) return !1;
    let t = e;
    for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null
}

function Ce(e, t, r) {
    if (typeof e != "function") throw new Error(P(2));
    if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function") throw new Error(P(0));
    if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
        if (typeof r != "function") throw new Error(P(1));
        return r(Ce)(e, t)
    }
    let n = e,
        i = t,
        o = new Map,
        s = o,
        c = 0,
        u = !1;

    function p() {
        s === o && (s = new Map, o.forEach((g, w) => {
            s.set(w, g)
        }))
    }

    function a() {
        if (u) throw new Error(P(3));
        return i
    }

    function f(g) {
        if (typeof g != "function") throw new Error(P(4));
        if (u) throw new Error(P(5));
        let w = !0;
        p();
        const _ = c++;
        return s.set(_, g),
            function() {
                if (w) {
                    if (u) throw new Error(P(6));
                    w = !1, p(), s.delete(_), o = null
                }
            }
    }

    function l(g) {
        if (!Re(g)) throw new Error(P(7));
        if (typeof g.type > "u") throw new Error(P(8));
        if (typeof g.type != "string") throw new Error(P(17));
        if (u) throw new Error(P(9));
        try {
            u = !0, i = n(i, g)
        } finally {
            u = !1
        }
        return (o = s).forEach(_ => {
            _()
        }), g
    }

    function y(g) {
        if (typeof g != "function") throw new Error(P(10));
        n = g, l({
            type: re.REPLACE
        })
    }

    function m() {
        const g = f;
        return {
            subscribe(w) {
                if (typeof w != "object" || w === null) throw new Error(P(11));

                function _() {
                    const h = w;
                    h.next && h.next(a())
                }
                return _(), {
                    unsubscribe: g(_)
                }
            },
            [ze]() {
                return this
            }
        }
    }
    return l({
        type: re.INIT
    }), {
        dispatch: l,
        subscribe: f,
        getState: a,
        replaceReducer: y,
        [ze]: m
    }
}

function At(e) {
    Object.keys(e).forEach(t => {
        const r = e[t];
        if (typeof r(void 0, {
                type: re.INIT
            }) > "u") throw new Error(P(12));
        if (typeof r(void 0, {
                type: re.PROBE_UNKNOWN_ACTION()
            }) > "u") throw new Error(P(13))
    })
}

function Dt(e) {
    const t = Object.keys(e),
        r = {};
    for (let o = 0; o < t.length; o++) {
        const s = t[o];
        typeof e[s] == "function" && (r[s] = e[s])
    }
    const n = Object.keys(r);
    let i;
    try {
        At(r)
    } catch (o) {
        i = o
    }
    return function(s = {}, c) {
        if (i) throw i;
        let u = !1;
        const p = {};
        for (let a = 0; a < n.length; a++) {
            const f = n[a],
                l = r[f],
                y = s[f],
                m = l(y, c);
            if (typeof m > "u") throw c && c.type, new Error(P(14));
            p[f] = m, u = u || m !== y
        }
        return u = u || n.length !== Object.keys(s).length, u ? p : s
    }
}

function ne(...e) {
    return e.length === 0 ? t => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)))
}

function xt(...e) {
    return t => (r, n) => {
        const i = t(r, n);
        let o = () => {
            throw new Error(P(15))
        };
        const s = {
                getState: i.getState,
                dispatch: (u, ...p) => o(u, ...p)
            },
            c = e.map(u => u(s));
        return o = ne(...c)(i.dispatch), { ...i,
            dispatch: o
        }
    }
}

function jt(e) {
    return Re(e) && "type" in e && typeof e.type == "string"
}
var Ae = Symbol.for("immer-nothing"),
    U = Symbol.for("immer-draftable"),
    C = Symbol.for("immer-state");

function R(e, ...t) {
    throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)
}
var k = Object.getPrototypeOf;

function T(e) {
    return !!e && !!e[C]
}

function x(e) {
    return e ? tt(e) || Array.isArray(e) || !!e[U] || !!e.constructor ? .[U] || W(e) || G(e) : !1
}
var Mt = Object.prototype.constructor.toString();

function tt(e) {
    if (!e || typeof e != "object") return !1;
    const t = k(e);
    if (t === null) return !0;
    const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === Mt
}

function dn(e) {
    return T(e) || R(15, e), e[C].base_
}

function V(e, t) {
    N(e) === 0 ? Reflect.ownKeys(e).forEach(r => {
        t(r, e[r], e)
    }) : e.forEach((r, n) => t(n, r, e))
}

function N(e) {
    const t = e[C];
    return t ? t.type_ : Array.isArray(e) ? 1 : W(e) ? 2 : G(e) ? 3 : 0
}

function K(e, t) {
    return N(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}

function fe(e, t) {
    return N(e) === 2 ? e.get(t) : e[t]
}

function rt(e, t, r) {
    const n = N(e);
    n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r
}

function Tt(e, t) {
    return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t
}

function W(e) {
    return e instanceof Map
}

function G(e) {
    return e instanceof Set
}

function z(e) {
    return e.copy_ || e.base_
}

function we(e, t) {
    if (W(e)) return new Map(e);
    if (G(e)) return new Set(e);
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    const r = tt(e);
    if (t === !0 || t === "class_only" && !r) {
        const n = Object.getOwnPropertyDescriptors(e);
        delete n[C];
        let i = Reflect.ownKeys(n);
        for (let o = 0; o < i.length; o++) {
            const s = i[o],
                c = n[s];
            c.writable === !1 && (c.writable = !0, c.configurable = !0), (c.get || c.set) && (n[s] = {
                configurable: !0,
                writable: !0,
                enumerable: c.enumerable,
                value: e[s]
            })
        }
        return Object.create(k(e), n)
    } else {
        const n = k(e);
        if (n !== null && r) return { ...e
        };
        const i = Object.create(n);
        return Object.assign(i, e)
    }
}

function De(e, t = !1) {
    return se(e) || T(e) || !x(e) || (N(e) > 1 && Object.defineProperties(e, {
        set: {
            value: Y
        },
        add: {
            value: Y
        },
        clear: {
            value: Y
        },
        delete: {
            value: Y
        }
    }), Object.freeze(e), t && Object.values(e).forEach(r => De(r, !0))), e
}

function Y() {
    R(2)
}

function se(e) {
    return Object.isFrozen(e)
}
var be = {};

function F(e) {
    const t = be[e];
    return t || R(0, e), t
}

function It(e, t) {
    be[e] || (be[e] = t)
}
var q;

function nt() {
    return q
}

function zt(e, t) {
    return {
        drafts_: [],
        parent_: e,
        immer_: t,
        canAutoFreeze_: !0,
        unfinalizedDrafts_: 0
    }
}

function ke(e, t) {
    t && (F("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t)
}

function ge(e) {
    _e(e), e.drafts_.forEach(kt), e.drafts_ = null
}

function _e(e) {
    e === q && (q = e.parent_)
}

function Ne(e) {
    return q = zt(q, e)
}

function kt(e) {
    const t = e[C];
    t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0
}

function Fe(e, t) {
    t.unfinalizedDrafts_ = t.drafts_.length;
    const r = t.drafts_[0];
    return e !== void 0 && e !== r ? (r[C].modified_ && (ge(t), R(4)), x(e) && (e = ie(t, e), t.parent_ || oe(t, e)), t.patches_ && F("Patches").generateReplacementPatches_(r[C].base_, e, t.patches_, t.inversePatches_)) : e = ie(t, r, []), ge(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Ae ? e : void 0
}

function ie(e, t, r) {
    if (se(t)) return t;
    const n = t[C];
    if (!n) return V(t, (i, o) => We(e, n, t, i, o, r)), t;
    if (n.scope_ !== e) return t;
    if (!n.modified_) return oe(e, n.base_, !0), n.base_;
    if (!n.finalized_) {
        n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
        const i = n.copy_;
        let o = i,
            s = !1;
        n.type_ === 3 && (o = new Set(i), i.clear(), s = !0), V(o, (c, u) => We(e, n, i, c, u, r, s)), oe(e, i, !1), r && e.patches_ && F("Patches").generatePatches_(n, r, e.patches_, e.inversePatches_)
    }
    return n.copy_
}

function We(e, t, r, n, i, o, s) {
    if (T(i)) {
        const c = o && t && t.type_ !== 3 && !K(t.assigned_, n) ? o.concat(n) : void 0,
            u = ie(e, i, c);
        if (rt(r, n, u), T(u)) e.canAutoFreeze_ = !1;
        else return
    } else s && r.add(i);
    if (x(i) && !se(i)) {
        if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
        ie(e, i), (!t || !t.scope_.parent_) && typeof n != "symbol" && (W(r) ? r.has(n) : Object.prototype.propertyIsEnumerable.call(r, n)) && oe(e, i)
    }
}

function oe(e, t, r = !1) {
    !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && De(t, r)
}

function Nt(e, t) {
    const r = Array.isArray(e),
        n = {
            type_: r ? 1 : 0,
            scope_: t ? t.scope_ : nt(),
            modified_: !1,
            finalized_: !1,
            assigned_: {},
            parent_: t,
            base_: e,
            draft_: null,
            copy_: null,
            revoke_: null,
            isManual_: !1
        };
    let i = n,
        o = xe;
    r && (i = [n], o = B);
    const {
        revoke: s,
        proxy: c
    } = Proxy.revocable(i, o);
    return n.draft_ = c, n.revoke_ = s, c
}
var xe = {
        get(e, t) {
            if (t === C) return e;
            const r = z(e);
            if (!K(r, t)) return Ft(e, r, t);
            const n = r[t];
            return e.finalized_ || !x(n) ? n : n === le(e.base_, t) ? (de(e), e.copy_[t] = Oe(n, e)) : n
        },
        has(e, t) {
            return t in z(e)
        },
        ownKeys(e) {
            return Reflect.ownKeys(z(e))
        },
        set(e, t, r) {
            const n = it(z(e), t);
            if (n ? .set) return n.set.call(e.draft_, r), !0;
            if (!e.modified_) {
                const i = le(z(e), t),
                    o = i ? .[C];
                if (o && o.base_ === r) return e.copy_[t] = r, e.assigned_[t] = !1, !0;
                if (Tt(r, i) && (r !== void 0 || K(e.base_, t))) return !0;
                de(e), Se(e)
            }
            return e.copy_[t] === r && (r !== void 0 || t in e.copy_) || Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0
        },
        deleteProperty(e, t) {
            return le(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, de(e), Se(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0
        },
        getOwnPropertyDescriptor(e, t) {
            const r = z(e),
                n = Reflect.getOwnPropertyDescriptor(r, t);
            return n && {
                writable: !0,
                configurable: e.type_ !== 1 || t !== "length",
                enumerable: n.enumerable,
                value: r[t]
            }
        },
        defineProperty() {
            R(11)
        },
        getPrototypeOf(e) {
            return k(e.base_)
        },
        setPrototypeOf() {
            R(12)
        }
    },
    B = {};
V(xe, (e, t) => {
    B[e] = function() {
        return arguments[0] = arguments[0][0], t.apply(this, arguments)
    }
});
B.deleteProperty = function(e, t) {
    return B.set.call(this, e, t, void 0)
};
B.set = function(e, t, r) {
    return xe.set.call(this, e[0], t, r, e[0])
};

function le(e, t) {
    const r = e[C];
    return (r ? z(r) : e)[t]
}

function Ft(e, t, r) {
    const n = it(t, r);
    return n ? "value" in n ? n.value : n.get ? .call(e.draft_) : void 0
}

function it(e, t) {
    if (!(t in e)) return;
    let r = k(e);
    for (; r;) {
        const n = Object.getOwnPropertyDescriptor(r, t);
        if (n) return n;
        r = k(r)
    }
}

function Se(e) {
    e.modified_ || (e.modified_ = !0, e.parent_ && Se(e.parent_))
}

function de(e) {
    e.copy_ || (e.copy_ = we(e.base_, e.scope_.immer_.useStrictShallowCopy_))
}
var Wt = class {
    constructor(e) {
        this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
            if (typeof t == "function" && typeof r != "function") {
                const o = r;
                r = t;
                const s = this;
                return function(u = o, ...p) {
                    return s.produce(u, a => r.call(this, a, ...p))
                }
            }
            typeof r != "function" && R(6), n !== void 0 && typeof n != "function" && R(7);
            let i;
            if (x(t)) {
                const o = Ne(this),
                    s = Oe(t, void 0);
                let c = !0;
                try {
                    i = r(s), c = !1
                } finally {
                    c ? ge(o) : _e(o)
                }
                return ke(o, n), Fe(i, o)
            } else if (!t || typeof t != "object") {
                if (i = r(t), i === void 0 && (i = t), i === Ae && (i = void 0), this.autoFreeze_ && De(i, !0), n) {
                    const o = [],
                        s = [];
                    F("Patches").generateReplacementPatches_(t, i, o, s), n(o, s)
                }
                return i
            } else R(1, t)
        }, this.produceWithPatches = (t, r) => {
            if (typeof t == "function") return (s, ...c) => this.produceWithPatches(s, u => t(u, ...c));
            let n, i;
            return [this.produce(t, r, (s, c) => {
                n = s, i = c
            }), n, i]
        }, typeof e ? .autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e ? .useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy)
    }
    createDraft(e) {
        x(e) || R(8), T(e) && (e = $t(e));
        const t = Ne(this),
            r = Oe(e, void 0);
        return r[C].isManual_ = !0, _e(t), r
    }
    finishDraft(e, t) {
        const r = e && e[C];
        (!r || !r.isManual_) && R(9);
        const {
            scope_: n
        } = r;
        return ke(n, t), Fe(void 0, n)
    }
    setAutoFreeze(e) {
        this.autoFreeze_ = e
    }
    setUseStrictShallowCopy(e) {
        this.useStrictShallowCopy_ = e
    }
    applyPatches(e, t) {
        let r;
        for (r = t.length - 1; r >= 0; r--) {
            const i = t[r];
            if (i.path.length === 0 && i.op === "replace") {
                e = i.value;
                break
            }
        }
        r > -1 && (t = t.slice(r + 1));
        const n = F("Patches").applyPatches_;
        return T(e) ? n(e, t) : this.produce(e, i => n(i, t))
    }
};

function Oe(e, t) {
    const r = W(e) ? F("MapSet").proxyMap_(e, t) : G(e) ? F("MapSet").proxySet_(e, t) : Nt(e, t);
    return (t ? t.scope_ : nt()).drafts_.push(r), r
}

function $t(e) {
    return T(e) || R(10, e), ot(e)
}

function ot(e) {
    if (!x(e) || se(e)) return e;
    const t = e[C];
    let r;
    if (t) {
        if (!t.modified_) return t.base_;
        t.finalized_ = !0, r = we(e, t.scope_.immer_.useStrictShallowCopy_)
    } else r = we(e, !0);
    return V(r, (n, i) => {
        rt(r, n, ot(i))
    }), t && (t.finalized_ = !1), r
}

function pn() {
    const t = "replace",
        n = "remove";

    function i(l, y, m, v) {
        switch (l.type_) {
            case 0:
            case 2:
                return s(l, y, m, v);
            case 1:
                return o(l, y, m, v);
            case 3:
                return c(l, y, m, v)
        }
    }

    function o(l, y, m, v) {
        let {
            base_: g,
            assigned_: w
        } = l, _ = l.copy_;
        _.length < g.length && ([g, _] = [_, g], [m, v] = [v, m]);
        for (let d = 0; d < g.length; d++)
            if (w[d] && _[d] !== g[d]) {
                const h = y.concat([d]);
                m.push({
                    op: t,
                    path: h,
                    value: f(_[d])
                }), v.push({
                    op: t,
                    path: h,
                    value: f(g[d])
                })
            }
        for (let d = g.length; d < _.length; d++) {
            const h = y.concat([d]);
            m.push({
                op: "add",
                path: h,
                value: f(_[d])
            })
        }
        for (let d = _.length - 1; g.length <= d; --d) {
            const h = y.concat([d]);
            v.push({
                op: n,
                path: h
            })
        }
    }

    function s(l, y, m, v) {
        const {
            base_: g,
            copy_: w
        } = l;
        V(l.assigned_, (_, d) => {
            const h = fe(g, _),
                b = fe(w, _),
                O = d ? K(g, _) ? t : "add" : n;
            if (h === b && O === t) return;
            const S = y.concat(_);
            m.push(O === n ? {
                op: O,
                path: S
            } : {
                op: O,
                path: S,
                value: b
            }), v.push(O === "add" ? {
                op: n,
                path: S
            } : O === n ? {
                op: "add",
                path: S,
                value: f(h)
            } : {
                op: t,
                path: S,
                value: f(h)
            })
        })
    }

    function c(l, y, m, v) {
        let {
            base_: g,
            copy_: w
        } = l, _ = 0;
        g.forEach(d => {
            if (!w.has(d)) {
                const h = y.concat([_]);
                m.push({
                    op: n,
                    path: h,
                    value: d
                }), v.unshift({
                    op: "add",
                    path: h,
                    value: d
                })
            }
            _++
        }), _ = 0, w.forEach(d => {
            if (!g.has(d)) {
                const h = y.concat([_]);
                m.push({
                    op: "add",
                    path: h,
                    value: d
                }), v.unshift({
                    op: n,
                    path: h,
                    value: d
                })
            }
            _++
        })
    }

    function u(l, y, m, v) {
        m.push({
            op: t,
            path: [],
            value: y === Ae ? void 0 : y
        }), v.push({
            op: t,
            path: [],
            value: l
        })
    }

    function p(l, y) {
        return y.forEach(m => {
            const {
                path: v,
                op: g
            } = m;
            let w = l;
            for (let b = 0; b < v.length - 1; b++) {
                const O = N(w);
                let S = v[b];
                typeof S != "string" && typeof S != "number" && (S = "" + S), (O === 0 || O === 1) && (S === "__proto__" || S === "constructor") && R(19), typeof w == "function" && S === "prototype" && R(19), w = fe(w, S), typeof w != "object" && R(18, v.join("/"))
            }
            const _ = N(w),
                d = a(m.value),
                h = v[v.length - 1];
            switch (g) {
                case t:
                    switch (_) {
                        case 2:
                            return w.set(h, d);
                        case 3:
                            R(16);
                        default:
                            return w[h] = d
                    }
                case "add":
                    switch (_) {
                        case 1:
                            return h === "-" ? w.push(d) : w.splice(h, 0, d);
                        case 2:
                            return w.set(h, d);
                        case 3:
                            return w.add(d);
                        default:
                            return w[h] = d
                    }
                case n:
                    switch (_) {
                        case 1:
                            return w.splice(h, 1);
                        case 2:
                            return w.delete(h);
                        case 3:
                            return w.delete(m.value);
                        default:
                            return delete w[h]
                    }
                default:
                    R(17, g)
            }
        }), l
    }

    function a(l) {
        if (!x(l)) return l;
        if (Array.isArray(l)) return l.map(a);
        if (W(l)) return new Map(Array.from(l.entries()).map(([m, v]) => [m, a(v)]));
        if (G(l)) return new Set(Array.from(l).map(a));
        const y = Object.create(k(l));
        for (const m in l) y[m] = a(l[m]);
        return K(l, U) && (y[U] = l[U]), y
    }

    function f(l) {
        return T(l) ? a(l) : l
    }
    It("Patches", {
        applyPatches_: p,
        generatePatches_: i,
        generateReplacementPatches_: u
    })
}
var H = new Wt,
    st = H.produce,
    yn = H.produceWithPatches.bind(H),
    hn = H.applyPatches.bind(H);

function Ut(e, t = `expected a function, instead received ${typeof e}`) {
    if (typeof e != "function") throw new TypeError(t)
}

function Lt(e, t = `expected an object, instead received ${typeof e}`) {
    if (typeof e != "object") throw new TypeError(t)
}

function Vt(e, t = "expected all items to be functions, instead received the following types: ") {
    if (!e.every(r => typeof r == "function")) {
        const r = e.map(n => typeof n == "function" ? `function ${n.name||"unnamed"}()` : typeof n).join(", ");
        throw new TypeError(`${t}[${r}]`)
    }
}
var $e = e => Array.isArray(e) ? e : [e];

function Kt(e) {
    const t = Array.isArray(e[0]) ? e[0] : e;
    return Vt(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t
}

function qt(e, t) {
    const r = [],
        {
            length: n
        } = e;
    for (let i = 0; i < n; i++) r.push(e[i].apply(null, t));
    return r
}
var Bt = class {
        constructor(e) {
            this.value = e
        }
        deref() {
            return this.value
        }
    },
    Ht = typeof WeakRef < "u" ? WeakRef : Bt,
    Gt = 0,
    Ue = 1;

function Q() {
    return {
        s: Gt,
        v: void 0,
        o: null,
        p: null
    }
}

function ut(e, t = {}) {
    let r = Q();
    const {
        resultEqualityCheck: n
    } = t;
    let i, o = 0;

    function s() {
        let c = r;
        const {
            length: u
        } = arguments;
        for (let f = 0, l = u; f < l; f++) {
            const y = arguments[f];
            if (typeof y == "function" || typeof y == "object" && y !== null) {
                let m = c.o;
                m === null && (c.o = m = new WeakMap);
                const v = m.get(y);
                v === void 0 ? (c = Q(), m.set(y, c)) : c = v
            } else {
                let m = c.p;
                m === null && (c.p = m = new Map);
                const v = m.get(y);
                v === void 0 ? (c = Q(), m.set(y, c)) : c = v
            }
        }
        const p = c;
        let a;
        if (c.s === Ue) a = c.v;
        else if (a = e.apply(null, arguments), o++, n) {
            const f = i ? .deref ? .() ? ? i;
            f != null && n(f, a) && (a = f, o !== 0 && o--), i = typeof a == "object" && a !== null || typeof a == "function" ? new Ht(a) : a
        }
        return p.s = Ue, p.v = a, a
    }
    return s.clearCache = () => {
        r = Q(), s.resetResultsCount()
    }, s.resultsCount = () => o, s.resetResultsCount = () => {
        o = 0
    }, s
}

function Xt(e, ...t) {
    const r = typeof e == "function" ? {
            memoize: e,
            memoizeOptions: t
        } : e,
        n = (...i) => {
            let o = 0,
                s = 0,
                c, u = {},
                p = i.pop();
            typeof p == "object" && (u = p, p = i.pop()), Ut(p, `createSelector expects an output function after the inputs, but received: [${typeof p}]`);
            const a = { ...r,
                    ...u
                },
                {
                    memoize: f,
                    memoizeOptions: l = [],
                    argsMemoize: y = ut,
                    argsMemoizeOptions: m = []
                } = a,
                v = $e(l),
                g = $e(m),
                w = Kt(i),
                _ = f(function() {
                    return o++, p.apply(null, arguments)
                }, ...v),
                d = y(function() {
                    s++;
                    const b = qt(w, arguments);
                    return c = _.apply(null, b), c
                }, ...g);
            return Object.assign(d, {
                resultFunc: p,
                memoizedResultFunc: _,
                dependencies: w,
                dependencyRecomputations: () => s,
                resetDependencyRecomputations: () => {
                    s = 0
                },
                lastResult: () => c,
                recomputations: () => o,
                resetRecomputations: () => {
                    o = 0
                },
                memoize: f,
                argsMemoize: y
            })
        };
    return Object.assign(n, {
        withTypes: () => n
    }), n
}
var Jt = Xt(ut),
    Yt = Object.assign((e, t = Jt) => {
        Lt(e, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);
        const r = Object.keys(e),
            n = r.map(o => e[o]);
        return t(n, (...o) => o.reduce((s, c, u) => (s[r[u]] = c, s), {}))
    }, {
        withTypes: () => Yt
    });

function ct(e) {
    return ({
        dispatch: r,
        getState: n
    }) => i => o => typeof o == "function" ? o(r, n, e) : i(o)
}
var Qt = ct(),
    Zt = ct,
    er = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
        if (arguments.length !== 0) return typeof arguments[0] == "object" ? ne : ne.apply(null, arguments)
    },
    tr = e => e && typeof e.match == "function";

function L(e, t) {
    function r(...n) {
        if (t) {
            let i = t(...n);
            if (!i) throw new Error(M(0));
            return {
                type: e,
                payload: i.payload,
                ..."meta" in i && {
                    meta: i.meta
                },
                ..."error" in i && {
                    error: i.error
                }
            }
        }
        return {
            type: e,
            payload: n[0]
        }
    }
    return r.toString = () => `${e}`, r.type = e, r.match = n => jt(n) && n.type === e, r
}
var at = class $ extends Array {
    constructor(...t) {
        super(...t), Object.setPrototypeOf(this, $.prototype)
    }
    static get[Symbol.species]() {
        return $
    }
    concat(...t) {
        return super.concat.apply(this, t)
    }
    prepend(...t) {
        return t.length === 1 && Array.isArray(t[0]) ? new $(...t[0].concat(this)) : new $(...t.concat(this))
    }
};

function Le(e) {
    return x(e) ? st(e, () => {}) : e
}

function Z(e, t, r) {
    return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t)
}

function rr(e) {
    return typeof e == "boolean"
}
var nr = () => function(t) {
        const {
            thunk: r = !0,
            immutableCheck: n = !0,
            serializableCheck: i = !0,
            actionCreatorCheck: o = !0
        } = t ? ? {};
        let s = new at;
        return r && (rr(r) ? s.push(Qt) : s.push(Zt(r.extraArgument))), s
    },
    ft = "RTK_autoBatch",
    mn = () => e => ({
        payload: e,
        meta: {
            [ft]: !0
        }
    }),
    Ve = e => t => {
        setTimeout(t, e)
    },
    ir = (e = {
        type: "raf"
    }) => t => (...r) => {
        const n = t(...r);
        let i = !0,
            o = !1,
            s = !1;
        const c = new Set,
            u = e.type === "tick" ? queueMicrotask : e.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Ve(10) : e.type === "callback" ? e.queueNotification : Ve(e.timeout),
            p = () => {
                s = !1, o && (o = !1, c.forEach(a => a()))
            };
        return Object.assign({}, n, {
            subscribe(a) {
                const f = () => i && a(),
                    l = n.subscribe(f);
                return c.add(a), () => {
                    l(), c.delete(a)
                }
            },
            dispatch(a) {
                try {
                    return i = !a ? .meta ? .[ft], o = !i, o && (s || (s = !0, u(p))), n.dispatch(a)
                } finally {
                    i = !0
                }
            }
        })
    },
    or = e => function(r) {
        const {
            autoBatch: n = !0
        } = r ? ? {};
        let i = new at(e);
        return n && i.push(ir(typeof n == "object" ? n : void 0)), i
    };

function vn(e) {
    const t = nr(),
        {
            reducer: r = void 0,
            middleware: n,
            devTools: i = !0,
            preloadedState: o = void 0,
            enhancers: s = void 0
        } = e || {};
    let c;
    if (typeof r == "function") c = r;
    else if (Re(r)) c = Dt(r);
    else throw new Error(M(1));
    let u;
    typeof n == "function" ? u = n(t) : u = t();
    let p = ne;
    i && (p = er({
        trace: !1,
        ...typeof i == "object" && i
    }));
    const a = xt(...u),
        f = or(a);
    let l = typeof s == "function" ? s(f) : f();
    const y = p(...l);
    return Ce(c, o, y)
}

function lt(e) {
    const t = {},
        r = [];
    let n;
    const i = {
        addCase(o, s) {
            const c = typeof o == "string" ? o : o.type;
            if (!c) throw new Error(M(28));
            if (c in t) throw new Error(M(29));
            return t[c] = s, i
        },
        addAsyncThunk(o, s) {
            return s.pending && (t[o.pending.type] = s.pending), s.rejected && (t[o.rejected.type] = s.rejected), s.fulfilled && (t[o.fulfilled.type] = s.fulfilled), s.settled && r.push({
                matcher: o.settled,
                reducer: s.settled
            }), i
        },
        addMatcher(o, s) {
            return r.push({
                matcher: o,
                reducer: s
            }), i
        },
        addDefaultCase(o) {
            return n = o, i
        }
    };
    return e(i), [t, r, n]
}

function sr(e) {
    return typeof e == "function"
}

function ur(e, t) {
    let [r, n, i] = lt(t), o;
    if (sr(e)) o = () => Le(e());
    else {
        const c = Le(e);
        o = () => c
    }

    function s(c = o(), u) {
        let p = [r[u.type], ...n.filter(({
            matcher: a
        }) => a(u)).map(({
            reducer: a
        }) => a)];
        return p.filter(a => !!a).length === 0 && (p = [i]), p.reduce((a, f) => {
            if (f)
                if (T(a)) {
                    const y = f(a, u);
                    return y === void 0 ? a : y
                } else {
                    if (x(a)) return st(a, l => f(l, u)); {
                        const l = f(a, u);
                        if (l === void 0) {
                            if (a === null) return a;
                            throw Error("A case reducer on a non-draftable value must not return undefined")
                        }
                        return l
                    }
                }
            return a
        }, c)
    }
    return s.getInitialState = o, s
}
var dt = (e, t) => tr(e) ? e.match(t) : e(t);

function X(...e) {
    return t => e.some(r => dt(r, t))
}

function Ke(...e) {
    return t => e.every(r => dt(r, t))
}

function ue(e, t) {
    if (!e || !e.meta) return !1;
    const r = typeof e.meta.requestId == "string",
        n = t.indexOf(e.meta.requestStatus) > -1;
    return r && n
}

function J(e) {
    return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0]
}

function cr(...e) {
    return e.length === 0 ? t => ue(t, ["pending"]) : J(e) ? X(...e.map(t => t.pending)) : cr()(e[0])
}

function Ee(...e) {
    return e.length === 0 ? t => ue(t, ["rejected"]) : J(e) ? X(...e.map(t => t.rejected)) : Ee()(e[0])
}

function ar(...e) {
    const t = r => r && r.meta && r.meta.rejectedWithValue;
    return e.length === 0 ? Ke(Ee(...e), t) : J(e) ? Ke(Ee(...e), t) : ar()(e[0])
}

function fr(...e) {
    return e.length === 0 ? t => ue(t, ["fulfilled"]) : J(e) ? X(...e.map(t => t.fulfilled)) : fr()(e[0])
}

function lr(...e) {
    return e.length === 0 ? t => ue(t, ["pending", "fulfilled", "rejected"]) : J(e) ? X(...e.flatMap(t => [t.pending, t.rejected, t.fulfilled])) : lr()(e[0])
}
var dr = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
    pr = (e = 21) => {
        let t = "",
            r = e;
        for (; r--;) t += dr[Math.random() * 64 | 0];
        return t
    },
    yr = ["name", "message", "stack", "code"],
    pe = class {
        constructor(e, t) {
            ce(this, "_type");
            this.payload = e, this.meta = t
        }
    },
    qe = class {
        constructor(e, t) {
            ce(this, "_type");
            this.payload = e, this.meta = t
        }
    },
    hr = e => {
        if (typeof e == "object" && e !== null) {
            const t = {};
            for (const r of yr) typeof e[r] == "string" && (t[r] = e[r]);
            return t
        }
        return {
            message: String(e)
        }
    },
    Be = "External signal was aborted",
    wn = (() => {
        function e(t, r, n) {
            const i = L(t + "/fulfilled", (u, p, a, f) => ({
                    payload: u,
                    meta: { ...f || {},
                        arg: a,
                        requestId: p,
                        requestStatus: "fulfilled"
                    }
                })),
                o = L(t + "/pending", (u, p, a) => ({
                    payload: void 0,
                    meta: { ...a || {},
                        arg: p,
                        requestId: u,
                        requestStatus: "pending"
                    }
                })),
                s = L(t + "/rejected", (u, p, a, f, l) => ({
                    payload: f,
                    error: (n && n.serializeError || hr)(u || "Rejected"),
                    meta: { ...l || {},
                        arg: a,
                        requestId: p,
                        rejectedWithValue: !!f,
                        requestStatus: "rejected",
                        aborted: u ? .name === "AbortError",
                        condition: u ? .name === "ConditionError"
                    }
                }));

            function c(u, {
                signal: p
            } = {}) {
                return (a, f, l) => {
                    const y = n ? .idGenerator ? n.idGenerator(u) : pr(),
                        m = new AbortController;
                    let v, g;

                    function w(d) {
                        g = d, m.abort()
                    }
                    p && (p.aborted ? w(Be) : p.addEventListener("abort", () => w(Be), {
                        once: !0
                    }));
                    const _ = (async function() {
                        let d;
                        try {
                            let b = n ? .condition ? .(u, {
                                getState: f,
                                extra: l
                            });
                            if (vr(b) && (b = await b), b === !1 || m.signal.aborted) throw {
                                name: "ConditionError",
                                message: "Aborted due to condition callback returning false."
                            };
                            const O = new Promise((S, E) => {
                                v = () => {
                                    E({
                                        name: "AbortError",
                                        message: g || "Aborted"
                                    })
                                }, m.signal.addEventListener("abort", v)
                            });
                            a(o(y, u, n ? .getPendingMeta ? .({
                                requestId: y,
                                arg: u
                            }, {
                                getState: f,
                                extra: l
                            }))), d = await Promise.race([O, Promise.resolve(r(u, {
                                dispatch: a,
                                getState: f,
                                extra: l,
                                requestId: y,
                                signal: m.signal,
                                abort: w,
                                rejectWithValue: (S, E) => new pe(S, E),
                                fulfillWithValue: (S, E) => new qe(S, E)
                            })).then(S => {
                                if (S instanceof pe) throw S;
                                return S instanceof qe ? i(S.payload, y, u, S.meta) : i(S, y, u)
                            })])
                        } catch (b) {
                            d = b instanceof pe ? s(null, y, u, b.payload, b.meta) : s(b, y, u)
                        } finally {
                            v && m.signal.removeEventListener("abort", v)
                        }
                        return n && !n.dispatchConditionRejection && s.match(d) && d.meta.condition || a(d), d
                    })();
                    return Object.assign(_, {
                        abort: w,
                        requestId: y,
                        arg: u,
                        unwrap() {
                            return _.then(mr)
                        }
                    })
                }
            }
            return Object.assign(c, {
                pending: o,
                rejected: s,
                fulfilled: i,
                settled: X(s, i),
                typePrefix: t
            })
        }
        return e.withTypes = () => e, e
    })();

function mr(e) {
    if (e.meta && e.meta.rejectedWithValue) throw e.payload;
    if (e.error) throw e.error;
    return e.payload
}

function vr(e) {
    return e !== null && typeof e == "object" && typeof e.then == "function"
}
var wr = Symbol.for("rtk-slice-createasyncthunk");

function br(e, t) {
    return `${e}/${t}`
}

function gr({
    creators: e
} = {}) {
    const t = e ? .asyncThunk ? .[wr];
    return function(n) {
        const {
            name: i,
            reducerPath: o = i
        } = n;
        if (!i) throw new Error(M(11));
        const s = (typeof n.reducers == "function" ? n.reducers(Sr()) : n.reducers) || {},
            c = Object.keys(s),
            u = {
                sliceCaseReducersByName: {},
                sliceCaseReducersByType: {},
                actionCreators: {},
                sliceMatchers: []
            },
            p = {
                addCase(d, h) {
                    const b = typeof d == "string" ? d : d.type;
                    if (!b) throw new Error(M(12));
                    if (b in u.sliceCaseReducersByType) throw new Error(M(13));
                    return u.sliceCaseReducersByType[b] = h, p
                },
                addMatcher(d, h) {
                    return u.sliceMatchers.push({
                        matcher: d,
                        reducer: h
                    }), p
                },
                exposeAction(d, h) {
                    return u.actionCreators[d] = h, p
                },
                exposeCaseReducer(d, h) {
                    return u.sliceCaseReducersByName[d] = h, p
                }
            };
        c.forEach(d => {
            const h = s[d],
                b = {
                    reducerName: d,
                    type: br(i, d),
                    createNotation: typeof n.reducers == "function"
                };
            Er(h) ? Rr(b, h, p, t) : Or(b, h, p)
        });

        function a() {
            const [d = {}, h = [], b = void 0] = typeof n.extraReducers == "function" ? lt(n.extraReducers) : [n.extraReducers], O = { ...d,
                ...u.sliceCaseReducersByType
            };
            return ur(n.initialState, S => {
                for (let E in O) S.addCase(E, O[E]);
                for (let E of u.sliceMatchers) S.addMatcher(E.matcher, E.reducer);
                for (let E of h) S.addMatcher(E.matcher, E.reducer);
                b && S.addDefaultCase(b)
            })
        }
        const f = d => d,
            l = new Map,
            y = new WeakMap;
        let m;

        function v(d, h) {
            return m || (m = a()), m(d, h)
        }

        function g() {
            return m || (m = a()), m.getInitialState()
        }

        function w(d, h = !1) {
            function b(S) {
                let E = S[d];
                return typeof E > "u" && h && (E = Z(y, b, g)), E
            }

            function O(S = f) {
                const E = Z(l, h, () => new WeakMap);
                return Z(E, S, () => {
                    const D = {};
                    for (const [Ie, St] of Object.entries(n.selectors ? ? {})) D[Ie] = _r(St, S, () => Z(y, S, g), h);
                    return D
                })
            }
            return {
                reducerPath: d,
                getSelectors: O,
                get selectors() {
                    return O(b)
                },
                selectSlice: b
            }
        }
        const _ = {
            name: i,
            reducer: v,
            actions: u.actionCreators,
            caseReducers: u.sliceCaseReducersByName,
            getInitialState: g,
            ...w(o),
            injectInto(d, {
                reducerPath: h,
                ...b
            } = {}) {
                const O = h ? ? o;
                return d.inject({
                    reducerPath: O,
                    reducer: v
                }, b), { ..._,
                    ...w(O, !0)
                }
            }
        };
        return _
    }
}

function _r(e, t, r, n) {
    function i(o, ...s) {
        let c = t(o);
        return typeof c > "u" && n && (c = r()), e(c, ...s)
    }
    return i.unwrapped = e, i
}
var bn = gr();

function Sr() {
    function e(t, r) {
        return {
            _reducerDefinitionType: "asyncThunk",
            payloadCreator: t,
            ...r
        }
    }
    return e.withTypes = () => e, {
        reducer(t) {
            return Object.assign({
                [t.name](...r) {
                    return t(...r)
                }
            }[t.name], {
                _reducerDefinitionType: "reducer"
            })
        },
        preparedReducer(t, r) {
            return {
                _reducerDefinitionType: "reducerWithPrepare",
                prepare: t,
                reducer: r
            }
        },
        asyncThunk: e
    }
}

function Or({
    type: e,
    reducerName: t,
    createNotation: r
}, n, i) {
    let o, s;
    if ("reducer" in n) {
        if (r && !Pr(n)) throw new Error(M(17));
        o = n.reducer, s = n.prepare
    } else o = n;
    i.addCase(e, o).exposeCaseReducer(t, o).exposeAction(t, s ? L(e, s) : L(e))
}

function Er(e) {
    return e._reducerDefinitionType === "asyncThunk"
}

function Pr(e) {
    return e._reducerDefinitionType === "reducerWithPrepare"
}

function Rr({
    type: e,
    reducerName: t
}, r, n, i) {
    if (!i) throw new Error(M(18));
    const {
        payloadCreator: o,
        fulfilled: s,
        pending: c,
        rejected: u,
        settled: p,
        options: a
    } = r, f = i(e, o, a);
    n.exposeAction(t, f), s && n.addCase(f.fulfilled, s), c && n.addCase(f.pending, c), u && n.addCase(f.rejected, u), p && n.addMatcher(f.settled, p), n.exposeCaseReducer(t, {
        fulfilled: s || ee,
        pending: c || ee,
        rejected: u || ee,
        settled: p || ee
    })
}

function ee() {}

function M(e) {
    return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}
var je = "persist:",
    pt = "persist/FLUSH",
    Me = "persist/REHYDRATE",
    yt = "persist/PAUSE",
    ht = "persist/PERSIST",
    mt = "persist/PURGE",
    vt = "persist/REGISTER",
    Cr = -1;

function te(e) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? te = function(r) {
        return typeof r
    } : te = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
    }, te(e)
}

function He(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Ar(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? He(r, !0).forEach(function(n) {
            Dr(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : He(r).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function Dr(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function xr(e, t, r, n) {
    n.debug;
    var i = Ar({}, r);
    return e && te(e) === "object" && Object.keys(e).forEach(function(o) {
        o !== "_persist" && t[o] === r[o] && (i[o] = e[o])
    }), i
}

function jr(e) {
    var t = e.blacklist || null,
        r = e.whitelist || null,
        n = e.transforms || [],
        i = e.throttle || 0,
        o = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : je).concat(e.key),
        s = e.storage,
        c;
    e.serialize === !1 ? c = function(b) {
        return b
    } : typeof e.serialize == "function" ? c = e.serialize : c = Mr;
    var u = e.writeFailHandler || null,
        p = {},
        a = {},
        f = [],
        l = null,
        y = null,
        m = function(b) {
            Object.keys(b).forEach(function(O) {
                w(O) && p[O] !== b[O] && f.indexOf(O) === -1 && f.push(O)
            }), Object.keys(p).forEach(function(O) {
                b[O] === void 0 && w(O) && f.indexOf(O) === -1 && p[O] !== void 0 && f.push(O)
            }), l === null && (l = setInterval(v, i)), p = b
        };

    function v() {
        if (f.length === 0) {
            l && clearInterval(l), l = null;
            return
        }
        var h = f.shift(),
            b = n.reduce(function(O, S) {
                return S.in(O, h, p)
            }, p[h]);
        if (b !== void 0) try {
            a[h] = c(b)
        } catch {} else delete a[h];
        f.length === 0 && g()
    }

    function g() {
        Object.keys(a).forEach(function(h) {
            p[h] === void 0 && delete a[h]
        }), y = s.setItem(o, c(a)).catch(_)
    }

    function w(h) {
        return !(r && r.indexOf(h) === -1 && h !== "_persist" || t && t.indexOf(h) !== -1)
    }

    function _(h) {
        u && u(h)
    }
    var d = function() {
        for (; f.length !== 0;) v();
        return y || Promise.resolve()
    };
    return {
        update: m,
        flush: d
    }
}

function Mr(e) {
    return JSON.stringify(e)
}

function Tr(e) {
    var t = e.transforms || [],
        r = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : je).concat(e.key),
        n = e.storage;
    e.debug;
    var i;
    return e.deserialize === !1 ? i = function(s) {
        return s
    } : typeof e.deserialize == "function" ? i = e.deserialize : i = Ir, n.getItem(r).then(function(o) {
        if (o) try {
            var s = {},
                c = i(o);
            return Object.keys(c).forEach(function(u) {
                s[u] = t.reduceRight(function(p, a) {
                    return a.out(p, u, c)
                }, i(c[u]))
            }), s
        } catch (u) {
            throw u
        } else return
    })
}

function Ir(e) {
    return JSON.parse(e)
}

function zr(e) {
    var t = e.storage,
        r = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : je).concat(e.key);
    return t.removeItem(r, kr)
}

function kr(e) {}

function Ge(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Ge(r, !0).forEach(function(n) {
            Nr(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ge(r).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function Nr(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function Fr(e, t) {
    if (e == null) return {};
    var r = Wr(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++) n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function Wr(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i, o;
    for (o = 0; o < n.length; o++) i = n[o], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r
}
var $r = 5e3;

function gn(e, t) {
    var r = e.version !== void 0 ? e.version : Cr;
    e.debug;
    var n = e.stateReconciler === void 0 ? xr : e.stateReconciler,
        i = e.getStoredState || Tr,
        o = e.timeout !== void 0 ? e.timeout : $r,
        s = null,
        c = !1,
        u = !0,
        p = function(f) {
            return f._persist.rehydrated && s && !u && s.update(f), f
        };
    return function(a, f) {
        var l = a || {},
            y = l._persist,
            m = Fr(l, ["_persist"]),
            v = m;
        if (f.type === ht) {
            var g = !1,
                w = function(E, D) {
                    g || (f.rehydrate(e.key, E, D), g = !0)
                };
            if (o && setTimeout(function() {
                    !g && w(void 0, new Error('redux-persist: persist timed out for persist key "'.concat(e.key, '"')))
                }, o), u = !1, s || (s = jr(e)), y) return j({}, t(v, f), {
                _persist: y
            });
            if (typeof f.rehydrate != "function" || typeof f.register != "function") throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");
            return f.register(e.key), i(e).then(function(S) {
                var E = e.migrate || function(D, Ie) {
                    return Promise.resolve(D)
                };
                E(S, r).then(function(D) {
                    w(D)
                }, function(D) {
                    w(void 0, D)
                })
            }, function(S) {
                w(void 0, S)
            }), j({}, t(v, f), {
                _persist: {
                    version: r,
                    rehydrated: !1
                }
            })
        } else {
            if (f.type === mt) return c = !0, f.result(zr(e)), j({}, t(v, f), {
                _persist: y
            });
            if (f.type === pt) return f.result(s && s.flush()), j({}, t(v, f), {
                _persist: y
            });
            if (f.type === yt) u = !0;
            else if (f.type === Me) {
                if (c) return j({}, v, {
                    _persist: j({}, y, {
                        rehydrated: !0
                    })
                });
                if (f.key === e.key) {
                    var _ = t(v, f),
                        d = f.payload,
                        h = n !== !1 && d !== void 0 ? n(d, a, _, e) : _,
                        b = j({}, h, {
                            _persist: j({}, y, {
                                rehydrated: !0
                            })
                        });
                    return p(b)
                }
            }
        }
        if (!y) return t(a, f);
        var O = t(v, f);
        return O === v ? a : p(j({}, O, {
            _persist: y
        }))
    }
}

function Xe(e) {
    return Vr(e) || Lr(e) || Ur()
}

function Ur() {
    throw new TypeError("Invalid attempt to spread non-iterable instance")
}

function Lr(e) {
    if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]") return Array.from(e)
}

function Vr(e) {
    if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
    }
}

function Je(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Pe(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Je(r, !0).forEach(function(n) {
            Kr(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Je(r).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function Kr(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}
var wt = {
        registry: [],
        bootstrapped: !1
    },
    qr = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : wt,
            r = arguments.length > 1 ? arguments[1] : void 0;
        switch (r.type) {
            case vt:
                return Pe({}, t, {
                    registry: [].concat(Xe(t.registry), [r.key])
                });
            case Me:
                var n = t.registry.indexOf(r.key),
                    i = Xe(t.registry);
                return i.splice(n, 1), Pe({}, t, {
                    registry: i,
                    bootstrapped: i.length === 0
                });
            default:
                return t
        }
    };

function _n(e, t, r) {
    var n = Ce(qr, wt, void 0),
        i = function(u) {
            n.dispatch({
                type: vt,
                key: u
            })
        },
        o = function(u, p, a) {
            var f = {
                type: Me,
                payload: p,
                err: a,
                key: u
            };
            e.dispatch(f), n.dispatch(f)
        },
        s = Pe({}, n, {
            purge: function() {
                var u = [];
                return e.dispatch({
                    type: mt,
                    result: function(a) {
                        u.push(a)
                    }
                }), Promise.all(u)
            },
            flush: function() {
                var u = [];
                return e.dispatch({
                    type: pt,
                    result: function(a) {
                        u.push(a)
                    }
                }), Promise.all(u)
            },
            pause: function() {
                e.dispatch({
                    type: yt
                })
            },
            persist: function() {
                e.dispatch({
                    type: ht,
                    register: i,
                    rehydrate: o
                })
            }
        });
    return s.persist(), s
}
var ye = {
        exports: {}
    },
    he = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;

function Br() {
    if (Ye) return he;
    Ye = 1;
    var e = Pt();

    function t(u, p) {
        return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p
    }
    var r = typeof Object.is == "function" ? Object.is : t,
        n = e.useSyncExternalStore,
        i = e.useRef,
        o = e.useEffect,
        s = e.useMemo,
        c = e.useDebugValue;
    return he.useSyncExternalStoreWithSelector = function(u, p, a, f, l) {
        var y = i(null);
        if (y.current === null) {
            var m = {
                hasValue: !1,
                value: null
            };
            y.current = m
        } else m = y.current;
        y = s(function() {
            function g(b) {
                if (!w) {
                    if (w = !0, _ = b, b = f(b), l !== void 0 && m.hasValue) {
                        var O = m.value;
                        if (l(O, b)) return d = O
                    }
                    return d = b
                }
                if (O = d, r(_, b)) return O;
                var S = f(b);
                return l !== void 0 && l(O, S) ? (_ = b, O) : (_ = b, d = S)
            }
            var w = !1,
                _, d, h = a === void 0 ? null : a;
            return [function() {
                return g(p())
            }, h === null ? void 0 : function() {
                return g(h())
            }]
        }, [p, a, f, l]);
        var v = n(u, y[0], y[1]);
        return o(function() {
            m.hasValue = !0, m.value = v
        }, [v]), c(v), v
    }, he
}
var Qe;

function Hr() {
    return Qe || (Qe = 1, ye.exports = Br()), ye.exports
}
var Gr = Hr();

function bt(e) {
    e()
}

function Xr() {
    let e = null,
        t = null;
    return {
        clear() {
            e = null, t = null
        },
        notify() {
            bt(() => {
                let r = e;
                for (; r;) r.callback(), r = r.next
            })
        },
        get() {
            const r = [];
            let n = e;
            for (; n;) r.push(n), n = n.next;
            return r
        },
        subscribe(r) {
            let n = !0;
            const i = t = {
                callback: r,
                next: null,
                prev: t
            };
            return i.prev ? i.prev.next = i : e = i,
                function() {
                    !n || e === null || (n = !1, i.next ? i.next.prev = i.prev : t = i.prev, i.prev ? i.prev.next = i.next : e = i.next)
                }
        }
    }
}
var Ze = {
    notify() {},
    get: () => []
};

function Jr(e, t) {
    let r, n = Ze,
        i = 0,
        o = !1;

    function s(v) {
        a();
        const g = n.subscribe(v);
        let w = !1;
        return () => {
            w || (w = !0, g(), f())
        }
    }

    function c() {
        n.notify()
    }

    function u() {
        m.onStateChange && m.onStateChange()
    }

    function p() {
        return o
    }

    function a() {
        i++, r || (r = e.subscribe(u), n = Xr())
    }

    function f() {
        i--, r && i === 0 && (r(), r = void 0, n.clear(), n = Ze)
    }

    function l() {
        o || (o = !0, a())
    }

    function y() {
        o && (o = !1, f())
    }
    const m = {
        addNestedSub: s,
        notifyNestedSubs: c,
        handleChangeWrapper: u,
        isSubscribed: p,
        trySubscribe: l,
        tryUnsubscribe: y,
        getListeners: () => n
    };
    return m
}
var Yr = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    Qr = Yr(),
    Zr = () => typeof navigator < "u" && navigator.product === "ReactNative",
    en = Zr(),
    tn = () => Qr || en ? A.useLayoutEffect : A.useEffect,
    rn = tn();

function et(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
}

function Sn(e, t) {
    if (et(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    const r = Object.keys(e),
        n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
        if (!Object.prototype.hasOwnProperty.call(t, r[i]) || !et(e[r[i]], t[r[i]])) return !1;
    return !0
}
var me = Symbol.for("react-redux-context"),
    ve = typeof globalThis < "u" ? globalThis : {};

function nn() {
    if (!A.createContext) return {};
    const e = ve[me] ? ? (ve[me] = new Map);
    let t = e.get(A.createContext);
    return t || (t = A.createContext(null), e.set(A.createContext, t)), t
}
var I = nn();

function on(e) {
    const {
        children: t,
        context: r,
        serverState: n,
        store: i
    } = e, o = A.useMemo(() => {
        const u = Jr(i);
        return {
            store: i,
            subscription: u,
            getServerState: n ? () => n : void 0
        }
    }, [i, n]), s = A.useMemo(() => i.getState(), [i]);
    rn(() => {
        const {
            subscription: u
        } = o;
        return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), s !== i.getState() && u.notifyNestedSubs(), () => {
            u.tryUnsubscribe(), u.onStateChange = void 0
        }
    }, [o, s]);
    const c = r || I;
    return A.createElement(c.Provider, {
        value: o
    }, t)
}
var On = on;

function Te(e = I) {
    return function() {
        return A.useContext(e)
    }
}
var gt = Te();

function _t(e = I) {
    const t = e === I ? gt : Te(e),
        r = () => {
            const {
                store: n
            } = t();
            return n
        };
    return Object.assign(r, {
        withTypes: () => r
    }), r
}
var sn = _t();

function un(e = I) {
    const t = e === I ? sn : _t(e),
        r = () => t().dispatch;
    return Object.assign(r, {
        withTypes: () => r
    }), r
}
var En = un(),
    cn = (e, t) => e === t;

function an(e = I) {
    const t = e === I ? gt : Te(e),
        r = (n, i = {}) => {
            const {
                equalityFn: o = cn
            } = typeof i == "function" ? {
                equalityFn: i
            } : i, s = t(), {
                store: c,
                subscription: u,
                getServerState: p
            } = s;
            A.useRef(!0);
            const a = A.useCallback({
                    [n.name](l) {
                        return n(l)
                    }
                }[n.name], [n]),
                f = Gr.useSyncExternalStoreWithSelector(u.addNestedSub, c.getState, p || c.getState, a, o);
            return A.useDebugValue(f), f
        };
    return Object.assign(r, {
        withTypes: () => r
    }), r
}
var Pn = an(),
    Rn = bt;
export {
    T as A, Rn as B, sn as C, Sn as D, vn as E, gn as F, pt as G, ht as H, mt as I, vt as J, _n as K, On as L, yt as P, Me as R, ft as S, Pn as a, Jt as b, L as c, wn as d, pn as e, M as f, bn as g, mn as h, Re as i, X as j, ar as k, fr as l, hn as m, pr as n, Dt as o, st as p, Ke as q, Ee as r, cr as s, x as t, En as u, yn as v, ut as w, jt as x, lr as y, dn as z
};