var K = Object.defineProperty;
var E = r => {
    throw TypeError(r)
};
var x = (r, e, t) => e in r ? K(r, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : r[e] = t;
var w = (r, e, t) => x(r, typeof e != "symbol" ? e + "" : e, t),
    B = (r, e, t) => e.has(r) || E("Cannot " + t);
var a = (r, e, t) => (B(r, e, "read from private field"), t ? t.call(r) : e.get(r)),
    T = (r, e, t) => e.has(r) ? E("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t),
    c = (r, e, t, i) => (B(r, e, "write to private field"), i ? i.call(r, t) : e.set(r, t), t);
import {
    bS as A,
    b3 as p,
    bT as O,
    aR as d,
    bU as D,
    b1 as j,
    bV as k,
    bv as b,
    aO as q,
    aQ as v,
    ag as S,
    bx as R,
    bG as N,
    bW as C
} from "../main-Cs0I_hm7.js";
import {
    a as F,
    b as M
} from "./chunk-BJJZNqVX.js";
import {
    A as P
} from "./chunk-BjM568Jh.js";
import {
    b as G,
    c as L
} from "./chunk-CFCXJVxy.js";
import {
    t as W
} from "./chunk-Oqn1ht1E.js";
import {
    a as I
} from "./chunk-eGeoT8Mx.js";
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

function U(r) {
    const e = [],
        t = A();
    try {
        Object.keys(t.initializedAgents[r].features).forEach(i => {
            switch (i) {
                case p.ajax:
                    e.push("xhr");
                    break;
                case p.jserrors:
                    e.push("err");
                    break;
                case p.genericEvents:
                    e.push("ins");
                    break;
                case p.sessionTrace:
                    e.push("stn");
                    break;
                case p.softNav:
                case p.spa:
                    e.push("spa");
                    break
            }
        })
    } catch {}
    return e
}
var g, h, f, u;
class H {
    constructor(e) {
        T(this, g);
        T(this, h);
        T(this, f);
        T(this, u, !1);
        c(this, g, e), this.processStoredDiff(), O(performance.now, Date.now)
    }
    get ready() {
        return a(this, u)
    }
    get correctedOriginTime() {
        return a(this, h)
    }
    get localTimeDiff() {
        return a(this, f)
    }
    processRumRequest(e, t, i, s) {
        if (this.processStoredDiff(), a(this, u)) return;
        if (!s) throw new Error("nrServerTime not found");
        const n = (i - t) / 2,
            o = t + n;
        if (c(this, h, Math.floor(s - o)), c(this, f, d - a(this, h)), isNaN(a(this, h))) throw new Error("Failed to correct browser time to server time");
        a(this, g) ? .write({
            serverTimeDiff: a(this, f)
        }), c(this, u, !0)
    }
    convertRelativeTimestamp(e) {
        return d + e
    }
    convertAbsoluteTimestamp(e) {
        return e - d
    }
    correctAbsoluteTimestamp(e) {
        return e - a(this, f)
    }
    correctRelativeTimestamp(e) {
        return this.correctAbsoluteTimestamp(this.convertRelativeTimestamp(e))
    }
    processStoredDiff() {
        if (a(this, u)) return;
        const e = a(this, g) ? .read() ? .serverTimeDiff;
        typeof e == "number" && !isNaN(e) && (c(this, f, e), c(this, h, d - a(this, f)), c(this, u, !0))
    }
}
g = new WeakMap, h = new WeakMap, f = new WeakMap, u = new WeakMap;
class V extends P {
    constructor(e) {
        if (super(e, D), this.timeToFirstByte = 0, this.firstByteToWindowLoad = 0, this.firstByteToDomContent = 0, j("send-rum", (t, i) => {
                this.sendRum(t, i)
            }, this.featureName, this.ee), !k(e.info)) return this.ee.abort(), b(43);
        e.runtime.timeKeeper = new H(e.runtime.session), q ? W.subscribe(({
            value: t,
            attrs: i
        }) => {
            const s = i.navigationEntry;
            this.timeToFirstByte = Math.max(t, this.timeToFirstByte), this.firstByteToWindowLoad = Math.max(Math.round(s.loadEventEnd - this.timeToFirstByte), this.firstByteToWindowLoad), this.firstByteToDomContent = Math.max(Math.round(s.domContentLoadedEventEnd - this.timeToFirstByte), this.firstByteToDomContent), this.sendRum()
        }) : this.sendRum()
    }
    sendRum(e = this.agentRef.info.jsAttributes, t = {
        licenseKey: this.agentRef.info.licenseKey,
        applicationID: this.agentRef.info.applicationID
    }) {
        const i = this.agentRef.info,
            s = {};
        i.queueTime && (s.qt = i.queueTime), i.applicationTime && (s.ap = i.applicationTime), s.be = this.timeToFirstByte, s.fe = this.firstByteToWindowLoad, s.dc = this.firstByteToDomContent;
        const n = {
            tt: i.ttGuid,
            us: i.user,
            ac: i.account,
            pr: i.product,
            af: U(this.agentIdentifier).join(","),
            ...s,
            xx: i.extra,
            ua: i.userAttributes,
            at: i.atts
        };
        this.agentRef.runtime.session && (n.fsh = Number(this.agentRef.runtime.session.isNew));
        let o;
        if (typeof e == "object" && Object.keys(e).length > 0 && (o = I({
                ja: e
            }, this.obfuscator.obfuscateString.bind(this.obfuscator), "string")), v.performance) {
            if (typeof PerformanceNavigationTiming < "u") {
                const m = v ? .performance ? .getEntriesByType("navigation") ? .[0],
                    l = {
                        timing: M(d, m, {}),
                        navigation: F(m, {})
                    };
                n.perf = S(l)
            } else if (typeof PerformanceTiming < "u") {
                const m = {
                    timing: M(d, v.performance.timing, {}, !0),
                    navigation: F(v.performance.navigation, {})
                };
                n.perf = S(m)
            }
        }
        n.fp = G.current.value, n.fcp = L.current.value;
        const y = this.agentRef.runtime.timeKeeper;
        y ? .ready && (n.timestamp = Math.floor(y.correctRelativeTimestamp(R()))), this.rumStartTime = R(), this.agentRef.runtime.harvester.triggerHarvestFor(this, {
            directSend: {
                targetApp: t,
                payload: {
                    qs: n,
                    body: o
                }
            },
            needResponse: !0,
            sendEmptyBody: !0
        })
    }
    postHarvestCleanup({
        status: e,
        responseText: t,
        xhr: i,
        targetApp: s
    }) {
        const n = R();
        let o, y;
        try {
            ({
                app: o,
                ...y
            } = JSON.parse(t)), this.processEntities(o.agents, s)
        } catch (m) {
            b(53, m)
        }
        if (N(s, this.agentRef)) {
            if (e >= 400 || e === 0) {
                b(18, e), this.ee.abort();
                return
            }
            try {
                const m = this.agentRef.runtime.timeKeeper.ready;
                if (this.agentRef.runtime.timeKeeper.processRumRequest(i, this.rumStartTime, n, o.nrServerTime), !this.agentRef.runtime.timeKeeper.ready) throw new Error("TimeKeeper not ready");
                const l = this.agentRef.runtime.timeKeeper.correctedOriginTime - o.nrServerTime;
                m && l > 0 && this.reportSupportabilityMetric("Generic/TimeKeeper/InvalidTimestamp/Seen", l)
            } catch (m) {
                this.ee.abort(), b(17, m);
                return
            }
            Object.keys(this.agentRef.runtime.appMetadata).length || (this.agentRef.runtime.appMetadata = o), this.drain(), this.agentRef.runtime.harvester.startTimer(), C(y, this.agentRef)
        }
    }
    processEntities(e, t) {
        !e || !t || e.forEach(i => {
            const s = this.agentRef.runtime.entityManager,
                n = i.entityGuid;
            s.get(n) || (N(t, this.agentRef) && s.setDefaultEntity({ ...t,
                entityGuid: n
            }), s.set(i.entityGuid, { ...t,
                entityGuid: n
            }))
        })
    }
}
w(V, "featureName", D);
export {
    V as Aggregate
};