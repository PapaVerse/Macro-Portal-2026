var v = Object.defineProperty;
var x = (t, e, r) => e in t ? v(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : t[e] = r;
var y = (t, e, r) => x(t, typeof e != "symbol" ? e + "" : e, r);
import {
    a$ as A,
    b0 as R,
    b1 as b,
    aS as T,
    ag as c,
    b2 as L,
    b3 as l,
    b4 as E
} from "../main-Cs0I_hm7.js";
import {
    A as M
} from "./chunk-BjM568Jh.js";
import {
    i as G
} from "./chunk-BVQCr-HH.js";
import {
    g as I,
    n as p,
    a as m,
    b as Q
} from "./chunk-CwfYvhot.js";
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

function q({
    body: t,
    query: e
} = {}) {
    if (!(!t && !e)) try {
        const r = U(N(t));
        if (r) return r;
        const s = j(z(e));
        if (s) return s
    } catch {}
}

function j(t) {
    if (typeof t != "object" || !t.query || typeof t.query != "string") return;
    const e = t.query.trim().match(/^(query|mutation|subscription)\s?(\w*)/),
        r = e ? .[1];
    return r ? {
        operationName: t.operationName || e ? .[2] || "Anonymous",
        operationType: r,
        operationFramework: "GraphQL"
    } : void 0
}

function U(t) {
    if (!t) return;
    Array.isArray(t) || (t = [t]);
    const e = [],
        r = [];
    for (let s of t) {
        const n = j(s);
        n && (e.push(n.operationName), r.push(n.operationType))
    }
    if (r.length) return {
        operationName: e.join(","),
        operationType: r.join(","),
        operationFramework: "GraphQL"
    }
}

function N(t) {
    let e;
    if (!t || typeof t != "string" && typeof t != "object" || (typeof t == "string" ? e = JSON.parse(t) : e = t, !G(e) && !Array.isArray(e))) return;
    let r = !1;
    if (Array.isArray(e) ? r = e.some(s => S(s)) : r = S(e), !!r) return e
}

function z(t) {
    if (!t || typeof t != "string") return;
    const e = new URLSearchParams(t);
    return N(Object.fromEntries(e))
}

function S(t) {
    return !(typeof t != "object" || !t.query || typeof t.query != "string")
}
class O extends M {
    constructor(e) {
        super(e, A), R(e.runtime.denyList), this.underSpaEvents = {};
        const r = this;
        e.init.ajax.block_internal ? super.customAttributesAreSeparate = !0 : super.canHarvestEarly = !1, this.ee.on("interactionDone", (s, n) => {
            this.underSpaEvents[s.id] && (n || this.underSpaEvents[s.id].forEach(i => this.events.add(i)), delete this.underSpaEvents[s.id])
        }), b("returnAjax", s => this.events.add(s), this.featureName, this.ee), b("xhr", function() {
            r.storeXhr(...arguments, this)
        }, this.featureName, this.ee), this.ee.on("long-task", (s, n) => {
            if (n instanceof T().o.XHR) {
                const i = this.ee.context(n);
                i.latestLongtaskEnd = s.end
            }
        }), this.waitForFlags([]).then(() => this.drain())
    }
    storeXhr(e, r, s, n, i, a) {
        var g;
        r.time = s;
        let o;
        e.cat ? o = c([e.status, e.cat]) : o = c([e.status, e.host, e.pathname]);
        const f = L(e),
            h = this.agentRef.init.feature_flags ? .includes("ajax_metrics_deny_list");
        if (!!this.agentRef.features ? .[l.jserrors] && (f || !h) && this.agentRef.sharedAggregator ? .add(["xhr", o, e, r]), !f) {
            e.hostname === this.agentRef.info.errorBeacon || this.agentRef.init.proxy ? .beacon && e.hostname === this.agentRef.init.proxy.beacon ? (this.reportSupportabilityMetric("Ajax/Events/Excluded/Agent"), h && this.reportSupportabilityMetric("Ajax/Metrics/Excluded/Agent")) : (this.reportSupportabilityMetric("Ajax/Events/Excluded/App"), h && this.reportSupportabilityMetric("Ajax/Metrics/Excluded/App"));
            return
        }
        E("bstXhrAgg", ["xhr", o, e, r], void 0, l.sessionTrace, this.ee);
        const u = {
            method: e.method,
            status: e.status,
            domain: e.host,
            path: e.pathname,
            requestSize: r.txSize,
            responseSize: r.rxSize,
            type: i,
            startTime: s,
            endTime: n,
            callbackDuration: r.cbTime
        };
        if (a.dt && (u.spanId = a.dt.spanId, u.traceId = a.dt.traceId, u.spanTimestamp = Math.floor(this.agentRef.runtime.timeKeeper.correctAbsoluteTimestamp(a.dt.timestamp))), u.gql = e.gql = q({
                body: a.body,
                query: a.parsedOrigin ? .search
            }), u.gql && this.reportSupportabilityMetric("Ajax/Events/GraphQL/Bytes-Added", c(u.gql).length), !!this.agentRef.features ? .[l.softNav]) E("ajax", [u, a], void 0, l.softNav, this.ee);
        else if (a.spaNode) {
            const d = a.spaNode.interaction.id;
            (g = this.underSpaEvents)[d] ? ? (g[d] = []), this.underSpaEvents[d].push(u)
        } else this.events.add(u)
    }
    serializer(e) {
        if (!e.length) return;
        const r = I(this.agentRef.runtime.obfuscator);
        let s = "bel.7;";
        for (let n = 0; n < e.length; n++) {
            const i = e[n],
                a = [p(i.startTime), p(i.endTime - i.startTime), p(0), p(0), r(i.method), p(i.status), r(i.domain), r(i.path), p(i.requestSize), p(i.responseSize), i.type === "fetch" ? 1 : "", r(0), m(i.spanId, r, !0) + m(i.traceId, r, !0) + m(i.spanTimestamp, p, !1)];
            let o = "2,";
            const f = this.agentRef.info.jsAttributes,
                h = Q({ ...f || {},
                    ...i.gql || {}
                }, r);
            a.unshift(p(h.length)), o += a.join(","), h && h.length > 0 && (o += ";" + h.join(";")), n + 1 < e.length && (o += ";"), s += o
        }
        return s
    }
}
y(O, "featureName", A);
export {
    O as Aggregate
};