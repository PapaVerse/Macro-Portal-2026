var Nt = Object.defineProperty;
var pt = (l, r, t) => r in l ? Nt(l, r, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : l[r] = t;
var tt = (l, r, t) => pt(l, typeof r != "symbol" ? r + "" : r, t);
import {
    bB as W,
    aS as mt,
    co as vt,
    cp as gt,
    b1 as c,
    cq as et,
    cr as Tt,
    b2 as it,
    cl as Et,
    cs as rt,
    ct as It,
    b4 as bt,
    b3 as nt,
    bY as xt,
    bv as Ct
} from "../main-Cs0I_hm7.js";
import {
    n as Ft
} from "./chunk-BJJZNqVX.js";
import {
    c as V,
    A as Lt
} from "./chunk-BjM568Jh.js";
import {
    g as at,
    n as v,
    a as x,
    b as st
} from "./chunk-CwfYvhot.js";
import {
    b as Pt,
    c as _t
} from "./chunk-CFCXJVxy.js";
import "./chunk-BPB3WYz4.js";
import "./chunk-CMjeC7eR.js";
import "./chunk-vO_5M3iW.js";
import "./chunk-JLrZeVHh.js";
import "./chunk-Cszvwt2r.js";
import "./chunk-DVijDBuK.js";
import "./chunk-DHmc-0SL.js";
import "./chunk-CXnPTvSO.js";
import "./chunk-CgwgwzaB.js";
import "./chunk-DD0HJyST.js";
import "./chunk-CxK0Lnx2.js";
var At = 128,
    jt = 0;

function Z(l, r, t, h) {
    Object.defineProperty(this, "interaction", {
        value: l,
        writable: !0
    }), this.parent = r, this.id = ++jt, this.type = t, this.children = [], this.end = null, this.jsEnd = this.start = h, this.jsTime = 0, this.attrs = {}, this.cancelled = !1
}
var J = Z.prototype;
J.child = function(r, t, h, s) {
    var o = this.interaction;
    if (o.end || o.nodes >= At) return null;
    o.onNodeAdded(this);
    var f = new Z(o, this, r, t);
    return f.attrs.name = h, o.nodes++, s || o.remaining++, f
};
J.callback = function(r, t) {
    var h = this;
    h.jsTime += r, t > h.jsEnd && (h.jsEnd = t, h.interaction.lastCb = t)
};
J.cancel = function() {
    this.cancelled = !0;
    var r = this.interaction;
    r.remaining--
};
J.finish = function(r) {
    var t = this;
    if (t.end) return;
    t.end = r;
    let h = t.parent;
    for (; h ? .cancelled;) h = h.parent;
    h && h.children.push(t), t.parent = null;
    var s = this.interaction;
    s.remaining--, s.lastFinish = r, s.checkFinish()
};
var ot = mt().o.ST,
    St = mt().o.CT,
    ct = {};

function G(l, r, t, h, s, o) {
    this.agentRef = o, ct[o.agentIdentifier] = 0, this.id = ++ct[o.agentIdentifier], this.eventName = l, this.nodes = 0, this.remaining = 0, this.finishTimer = null, this.checkingFinish = !1, this.lastCb = this.lastFinish = r, this.handlers = [], this.onFinished = s, this.done = !1;
    var f = this.root = new Z(this, null, "interaction", r),
        T = f.attrs;
    T.trigger = l, T.initialPageURL = W, T.oldRoute = h, T.newURL = t, T.oldURL = l === "initialPageLoad" ? document.referrer || void 0 : t, T.custom = {}, T.store = {}
}
var U = G.prototype;
U.checkFinish = function() {
    var r = this;
    if (r.remaining > 0) {
        r._resetFinishCheck();
        return
    }
    r.checkingFinish || r.root.end === null && (r._resetFinishCheck(), r.checkingFinish = !0, r.finishTimer = ot(() => {
        r.checkingFinish = !1, r.finishTimer = ot(() => {
            r.finishTimer = null, r.remaining <= 0 && r.finish()
        }, 1)
    }, 0))
};
U.setNewURL = function(r) {
    this.root.attrs.newURL = r
};
U.setNewRoute = function(r) {
    this.root.attrs.newRoute = r
};
U.onNodeAdded = function() {
    this._resetFinishCheck()
};
U._resetFinishCheck = function() {
    this.finishTimer && (St(this.finishTimer), this.finishTimer = null, this.checkingFinish = !1)
};
U.finish = function() {
    var r = this,
        t = r.root;
    if (t.end === null) {
        var h = Math.max(r.lastCb, r.lastFinish),
            s = t.attrs,
            o = s.custom;
        this.onFinished && this.onFinished(this), Object.entries(r.agentRef.info.jsAttributes || {}).forEach(([f, T]) => {
            f in o || (o[f] = T)
        }), t.end = h, r.agentRef.ee.emit("interaction", [this])
    }
};
class kt {
    constructor(r) {
        this.obfuscator = r.runtime.obfuscator, this.info = r.info, this.firstTimestamp = void 0
    }
    serializeMultiple(r, t, h) {
        var s = at(this.obfuscator),
            o = "bel.7";
        return r.forEach(f => {
            o += ";" + this.serializeInteraction(f.root, t, h, f.routeChange, s, this.info)
        }), this.firstTimestamp = void 0, o
    }
    serializeSingle(r, t, h, s) {
        var o = at(this.obfuscator),
            f = "bel.7;" + this.serializeInteraction(r, t, h, s, o, this.info);
        return this.firstTimestamp = void 0, f
    }
    serializeInteraction(r, t, h, s, o, f) {
        t = t || 0;
        var T = r.attrs.trigger === "initialPageLoad",
            X = {
                interaction: 1,
                ajax: 2,
                customTracer: 4
            },
            A = !0;
        const j = (u, b) => {
            if (u.type === "customEnd") return b.push([3, v(u.end - this.firstTimestamp)]);
            var z = u.type,
                L = X[z],
                S = u.start,
                k = u.children.length,
                w = 0,
                O = f.atts,
                M = T && h.length && L === 1,
                F = [],
                m = u.attrs,
                B = m.metrics,
                d = m.params,
                R = f.queueTime,
                Y = f.applicationTime;
            typeof this.firstTimestamp > "u" ? (S += t, this.firstTimestamp = S) : S -= this.firstTimestamp;
            var P = [v(S), v(u.end - u.start), v(u.jsEnd - u.end), v(u.jsTime)];
            switch (L) {
                case 1:
                    P[2] = v(u.jsEnd - this.firstTimestamp), P.push(o(m.trigger), o(V(m.initialPageURL, A)), o(V(m.oldURL, A)), o(V(m.newURL, A)), o(m.customName), T ? "" : s ? 1 : 2, x(T && R, v, !0) + x(T && Y, v, !0) + x(m.oldRoute, o, !0) + x(m.newRoute, o, !0) + o(m.id), o(u.id), x(m.firstPaint, v, !0) + x(m.firstContentfulPaint, v, !1));
                    var e = st(m.custom, o);
                    F = F.concat(e), w = e.length, O && (k++, F.push("a," + o(O)));
                    break;
                case 2:
                    if (P.push(o(d.method), v(d.status), o(d.host), o(d.pathname), v(B.txSize), v(B.rxSize), m.isFetch ? 1 : m.isJSONP ? 2 : "", o(u.id), x(u.dt && u.dt.spanId, o, !0) + x(u.dt && u.dt.traceId, o, !0) + x(u.dt && u.dt.timestamp, v, !1)), Object.keys(d ? .gql || {}).length) {
                        var i = st(d.gql, o);
                        F = F.concat(i), w = i.length
                    }
                    break;
                case 4:
                    var n = m.tracedTime;
                    P.push(o(m.name), x(n, v, !0) + o(u.id));
                    break
            }
            for (var a = 0; a < u.children.length; a++) j(u.children[a], F);
            if (P.unshift(v(L), v(k += w)), b.push(P), k && b.push(F.join(";")), M) {
                var p = ",",
                    E = "b",
                    y = 0;
                Object.values(h.slice(1, 21) || {}).forEach(K => {
                    K !== void 0 ? (E += p + v(K - y), p = ",", y = K) : (E += p + "!", p = "")
                }), b.push(E)
            } else L === 1 && b.push("");
            return b
        };
        return j(r, []).join(";")
    }
}
const {
    FEATURE_NAME: ut,
    INTERACTION_EVENTS: ht,
    MAX_TIMER_BUDGET: D,
    FN_START: _,
    FN_END: dt,
    CB_START: H,
    INTERACTION_API: C,
    REMAINING: I,
    INTERACTION: g,
    SPA_NODE: N,
    JSONP_NODE: q,
    FETCH_START: $,
    FETCH_DONE: lt,
    FETCH_BODY: ft,
    JSONP_END: Q,
    originalSetTimeout: wt
} = vt;
class Ut extends Lt {
    constructor(r) {
        super(r, ut);
        const t = this.state = {
            initialPageURL: W,
            lastSeenUrl: W,
            lastSeenRouteName: null,
            timerMap: {},
            timerBudget: D,
            currentNode: null,
            prevNode: null,
            nodeOnLastHashUpdate: null,
            initialPageLoad: null,
            pageLoaded: !1,
            childTime: 0,
            depth: 0,
            disableSpaFix: (r.init.feature_flags || []).indexOf("disable-spa-fix") > -1
        };
        this.spaSerializerClass = new kt(r);
        const h = this,
            s = gt.get(r.agentIdentifier),
            o = s.get("mutation"),
            f = s.get("promise"),
            T = s.get("history"),
            X = s.get("events"),
            A = s.get("timer"),
            j = s.get("fetch"),
            u = s.get("jsonp"),
            b = s.get("xhr"),
            z = s.get("tracer");
        let L;
        if (this.waitForFlags(["spa"]).then(([e]) => {
                e ? (L = r.runtime.harvester, this.drain()) : (this.blocked = !0, this.deregisterDrain())
            }), r.init.spa.enabled !== !0) return;
        t.initialPageLoad = new G("initialPageLoad", 0, t.lastSeenUrl, t.lastSeenRouteName, R, r), t.initialPageLoad.save = !0, r.runtime.session ? .isNew && (t.initialPageLoad.root.attrs.custom.isFirstOfSession = !0), t.prevInteraction = t.initialPageLoad, t.currentNode = t.initialPageLoad.root, t.initialPageLoad[I]++, c(_, k, this.featureName, s), c(H, k, this.featureName, f);
        var S = {
            getCurrentNode: B,
            setCurrentNode: d
        };
        c("spa-register", function(e) {
            typeof e == "function" && e(S)
        }, nt.spa, s);

        function k() {
            t.depth++, this.prevNode = t.currentNode, this.ct = t.childTime, t.childTime = 0, t.timerBudget = D
        }
        c(dt, w, this.featureName, s), c("cb-end", w, this.featureName, f);

        function w() {
            t.depth--;
            var e = this.jsTime || 0,
                i = e - t.childTime;
            t.childTime = this.ct + e, t.currentNode && (t.currentNode.callback(i, this[dt]), this.isTraced && (t.currentNode.attrs.tracedTime = i)), this.jsTime = t.currentNode ? 0 : i, d(this.prevNode), this.prevNode = null, t.timerBudget = D
        }
        c(_, function(e, i) {
            var n = e[0],
                a = n.type,
                p = n["__nrNode:".concat(et)];
            if (!t.pageLoaded && (a === "load" && i === window || Tt) && (t.pageLoaded = !0, this.prevNode = t.currentNode = null, t.initialPageLoad && (p = t.initialPageLoad.root, t.initialPageLoad[I] = 0, wt(function() {
                    ht.push("popstate")
                }))), p) d(p);
            else if (a === "hashchange") d(t.nodeOnLastHashUpdate), t.nodeOnLastHashUpdate = null;
            else if (i instanceof XMLHttpRequest) d(s.context(i).spaNode);
            else if (!t.currentNode && ht.indexOf(a) !== -1) {
                var E = new G(a, this[_], t.lastSeenUrl, t.lastSeenRouteName, R, r);
                if (t.prevInteraction = E, d(E.root), a === "click") {
                    var y = Y(n.target);
                    y && (t.currentNode.attrs.custom.actionText = y)
                }
            }
            n["__nrNode:".concat(et)] = t.currentNode
        }, this.featureName, X), c("setTimeout-end", function(i, n, a) {
            !t.currentNode || t.timerBudget - this.timerDuration < 0 || i && !(i[0] instanceof Function) || (t.currentNode[g][I]++, this.timerId = a, t.timerMap[a] = t.currentNode, this.timerBudget = t.timerBudget - 50)
        }, this.featureName, A), c("clearTimeout-start", function(i) {
            var n = i[0],
                a = t.timerMap[n];
            if (a) {
                var p = a[g];
                p[I]--, p.checkFinish(), delete t.timerMap[n]
            }
        }, this.featureName, A), c(_, function() {
            t.timerBudget = this.timerBudget || D;
            var e = this.timerId,
                i = t.timerMap[e];
            d(i), delete t.timerMap[e], i && i[g][I]--
        }, this.featureName, A), c(_, function() {
            d(this[N])
        }, this.featureName, b), c("new-xhr", function() {
            if (!t.disableSpaFix && !t.currentNode && t.prevInteraction && !t.prevInteraction.ignored) {
                const e = t.prevInteraction;
                t.currentNode = e.root, e.root.end = null
            }
            t.currentNode && (this[N] = t.currentNode.child("ajax", null, null, !0))
        }, this.featureName, b), c("send-xhr-start", function() {
            var e = this[N];
            e && !this.sent && (this.sent = !0, e.dt = this.dt, e.dt ? .timestamp && (e.dt.timestamp = r.runtime.timeKeeper.correctAbsoluteTimestamp(e.dt.timestamp)), e.jsEnd = e.start = this.startTime, e[g][I]++)
        }, this.featureName, b), c("xhr-resolved", function() {
            var e = this[N];
            if (e) {
                if (!it(this.params)) {
                    e.cancel();
                    return
                }
                var i = e.attrs;
                i.params = this.params, i.metrics = this.metrics, e.finish(this.endTime), this.currentNode && this.currentNode.interaction && this.currentNode.interaction.checkFinish()
            }
        }, this.featureName, s), c("new-jsonp", function(e) {
            if (t.currentNode) {
                var i = this[q] = t.currentNode.child("ajax", this[$]);
                i.start = this["new-jsonp"], this.url = e, this.status = null
            }
        }, this.featureName, u), c("cb-start", function(e) {
            var i = this[q];
            i && (d(i), this.status = 200)
        }, this.featureName, u), c("jsonp-error", function() {
            var e = this[q];
            e && (d(e), this.status = 0)
        }, this.featureName, u), c(Q, function() {
            var e = this[q];
            if (e) {
                if (this.status === null) {
                    e.cancel();
                    return
                }
                var i = e.attrs,
                    n = i.params = {},
                    a = Et(this.url);
                n.method = "GET", n.pathname = a.pathname, n.host = a.hostname + ":" + a.port, n.status = this.status, i.metrics = {
                    txSize: 0,
                    rxSize: 0
                }, i.isJSONP = !0, e.jsEnd = this[Q], e.jsTime = this[H] ? this[Q] - this[H] : 0, e.finish(e.jsEnd)
            }
        }, this.featureName, u), c($, function(e, i) {
            if (e) {
                if (!t.disableSpaFix && !t.currentNode && t.prevInteraction && !t.prevInteraction.ignored) {
                    const n = t.prevInteraction;
                    t.currentNode = n.root, n.root.end = null
                }
                t.currentNode && (this[N] = t.currentNode.child("ajax", this[$]), i && this[N] && (this[N].dt = i, this[N].dt ? .timestamp && (this[N].dt.timestamp = r.runtime.timeKeeper.correctAbsoluteTimestamp(this[N].dt.timestamp))))
            }
        }, this.featureName, j), c(ft + "start", function(e) {
            t.currentNode && (this[N] = t.currentNode, t.currentNode[g][I]++)
        }, this.featureName, j), c(ft + "end", function(e, i, n) {
            var a = this[N];
            a && a[g][I]--
        }, this.featureName, j), c(lt, function(e, i) {
            var n = this[N];
            if (n) {
                if (e || !it(this.params)) {
                    n.cancel();
                    return
                }
                var a = n.attrs;
                a.params = this.params, a.metrics = {
                    txSize: this.txSize,
                    rxSize: this.rxSize
                }, a.isFetch = !0, n.finish(this[lt])
            }
        }, this.featureName, j), c("newURL", function(e, i) {
            if (t.currentNode) t.currentNode[g].setNewURL(e);
            else if (t.prevInteraction && !t.prevInteraction.ignored) {
                const n = t.prevInteraction;
                n.setNewURL(e), n.root.end = null, d(n.root)
            }
            t.currentNode && (t.lastSeenUrl !== e && (t.currentNode[g].routeChange = !0), i && (t.nodeOnLastHashUpdate = t.currentNode)), t.lastSeenUrl = e
        }, this.featureName, T), u.on("dom-start", function(e) {
            if (!t.currentNode) return;
            var i = e[0],
                n = i && i.nodeName === "SCRIPT" && i.src !== "",
                a = t.currentNode.interaction;
            n && (a[I]++, i.addEventListener("load", p, rt(!1)), i.addEventListener("error", E, rt(!1)));

            function p() {
                a[I]--, a.checkFinish()
            }

            function E() {
                a[I]--, a.checkFinish()
            }
        }), c(_, function() {
            d(t.prevNode)
        }, this.featureName, o), c("resolve-start", m, this.featureName, f), c("executor-err", m, this.featureName, f), c("propagate", F, this.featureName, f), c(H, function() {
            var e = this.getCtx ? this.getCtx() : this;
            d(e[N])
        }, this.featureName, f), c(C + "get", function(e) {
            var i;
            t ? .currentNode ? .[g] ? i = this.ixn = t.currentNode[g] : t ? .prevNode ? .end === null && t ? .prevNode ? .[g] ? .root ? .[g] ? .eventName !== "initialPageLoad" ? i = this.ixn = t.prevNode[g] : i = this.ixn = new G("api", e, t.lastSeenUrl, t.lastSeenRouteName, R, r), t.currentNode || (i.checkFinish(), t.depth && d(i.root))
        }, this.featureName, s), c(C + "actionText", function(e, i) {
            var n = this.ixn.root.attrs.custom;
            i && (n.actionText = i)
        }, this.featureName, s), c(C + "setName", function(e, i, n) {
            var a = this.ixn.root.attrs;
            i && (a.customName = i), n && (a.trigger = n)
        }, this.featureName, s), c(C + "setAttribute", function(e, i, n) {
            this.ixn.root.attrs.custom[i] = n
        }, this.featureName, s), c(C + "end", function(e) {
            var i = this.ixn,
                n = M(i);
            d(null), n.child("customEnd", e) ? .finish(e), i.finish()
        }, this.featureName, s), c(C + "ignore", function(e) {
            this.ixn.ignored = !0
        }, this.featureName, s), c(C + "save", function(e) {
            this.ixn.save = !0
        }, this.featureName, s), c(C + "tracer", function(e, i, n) {
            var a = this.ixn,
                p = M(a),
                E = s.context(n);
            if (!i) return E.inc = ++a[I], E[N] = p;
            E[N] = p.child("customTracer", e, i)
        }, this.featureName, s), c(_, O, this.featureName, z), c("no-" + _, O, this.featureName, z);

        function O(e, i, n) {
            var a = this[N];
            if (a) {
                var p = a[g],
                    E = this.inc;
                this.isTraced = !0, E ? p[I]-- : a && a.finish(e), n ? d(a) : p.checkFinish()
            }
        }
        c(C + "getContext", function(e, i) {
            var n = this.ixn.root.attrs.store;
            setTimeout(function() {
                i(n)
            }, 0)
        }, this.featureName, s), c(C + "onEnd", function(e, i) {
            this.ixn.handlers.push(i)
        }, this.featureName, s), c("api-routeName", function(e, i) {
            t.lastSeenRouteName = i, t.currentNode && t.currentNode[g].setNewRoute(i)
        }, this.featureName, s);

        function M(e) {
            return t.currentNode && t.currentNode[g] === e ? t.currentNode : e.root
        }

        function F(e, i) {
            (i || !this[N]) && (this[N] = t.currentNode)
        }

        function m() {
            this.resolved || (this.resolved = !0, this[N] = t.currentNode)
        }

        function B() {
            return t.currentNode
        }

        function d(e) {
            !t.pageLoaded && !e && t.initialPageLoad && (e = t.initialPageLoad.root), t.currentNode && t.currentNode[g].checkFinish(), t.prevNode = t.currentNode, t.currentNode = e && !e[g].root.end ? e : null
        }

        function R(e) {
            e === t.initialPageLoad && (t.initialPageLoad = null);
            var i = e.root,
                n = i.attrs;
            t.currentNode = i, Object.values(e.handlers || {}).forEach(function(a) {
                a(n.store)
            }), d(null)
        }
        s.on("spa-jserror", function(e, i, n, a) {
            t.currentNode && (n._interactionId = t.currentNode.interaction.id, t.currentNode.type && t.currentNode.type !== "interaction" && (n._interactionNodeId = t.currentNode.id))
        }), c("function-err", function(e, i, n) {
            t.currentNode && (n.__newrelic ? ? (n.__newrelic = {}), n.__newrelic[r.agentIdentifier] = {
                interactionId: t.currentNode.interaction.id
            }, t.currentNode.type && t.currentNode.type !== "interaction" && (n.__newrelic[r.agentIdentifier].interactionNodeId = t.currentNode.id))
        }, this.featureName, s), s.on("interaction", P);

        function Y(e) {
            var i = e.tagName.toLowerCase(),
                n = ["a", "button", "input"],
                a = n.indexOf(i) !== -1;
            if (a) return e.title || e.value || e.innerText
        }

        function P(e) {
            if (e.ignored || !e.save && !e.routeChange) {
                s.emit("interactionDone", [e, !1]);
                return
            }
            t.prevInteraction === e && (t.prevInteraction = null), e.root.attrs.id = It(), e.root.attrs.trigger === "initialPageLoad" && (e.root.attrs.firstPaint = Pt.current.value, e.root.attrs.firstContentfulPaint = _t.current.value), s.emit("interactionDone", [e, !0]), h.events.add(e);
            let i;
            if (e.root ? .attrs ? .trigger === "initialPageLoad" ? i = "InitialPageLoad" : e.routeChange ? i = "RouteChange" : i = "Custom", bt(xt, ["Spa/Interaction/".concat(i, "/Duration/Ms"), Math.max((e.root ? .end || 0) - (e.root ? .start || 0), 0)], void 0, nt.metrics, s), !L) {
                Ct(19);
                return
            }
            L.triggerHarvestFor(h)
        }
    }
    serializer(r) {
        return this.spaSerializerClass.serializeMultiple(r, 0, Ft)
    }
}
tt(Ut, "featureName", ut);
export {
    Ut as Aggregate
};