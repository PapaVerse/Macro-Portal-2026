var fe = Object.defineProperty;
var Z = r => {
    throw TypeError(r)
};
var de = (r, e, t) => e in r ? fe(r, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : r[e] = t;
var $ = (r, e, t) => de(r, typeof e != "symbol" ? e + "" : e, t),
    I = (r, e, t) => e.has(r) || Z("Cannot " + t);
var c = (r, e, t) => (I(r, e, "read from private field"), t ? t.call(r) : e.get(r)),
    m = (r, e, t) => e.has(r) ? Z("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t),
    G = (r, e, t, s) => (I(r, e, "write to private field"), s ? s.call(r, t) : e.set(r, t), t),
    h = (r, e, t) => (I(r, e, "access private method"), t);
import {
    aQ as x,
    bv as T,
    d7 as A,
    ah as J,
    bG as le,
    aO as re,
    cj as ge,
    c1 as L,
    ag as se,
    d8 as pe,
    d9 as ve,
    da as me,
    db as ie,
    cs as be,
    b3 as R,
    b4 as K,
    dc as ye,
    dd as _,
    de as Se,
    df as Ee,
    bx as ke,
    dg as xe,
    bY as ae,
    dh as Ae,
    c7 as Re,
    cK as Oe,
    bV as De,
    di as we,
    dj as Me
} from "../main-Cs0I_hm7.js";
import {
    E as He
} from "./chunk-CxK0Lnx2.js";

function Te() {
    return x ? .location ? .protocol === "file:"
}
class Ce {
    constructor(e) {
        this.agentRef = e, this.warnedRegexMissing = !1, this.warnedInvalidRegex = !1, this.warnedInvalidReplacement = !1
    }
    get obfuscateConfigRules() {
        return this.agentRef.init.obfuscate || []
    }
    obfuscateString(e) {
        if (typeof e != "string" || e.trim().length === 0) return e;
        const t = this.obfuscateConfigRules.map(s => this.validateObfuscationRule(s));
        return Te() && t.push({
            regex: /^file:\/\/(.*)/,
            replacement: atob("ZmlsZTovL09CRlVTQ0FURUQ=")
        }), t.filter(s => s.isValid).reduce((s, i) => {
            const {
                rule: a
            } = i;
            return s.replace(a.regex, a.replacement || "*")
        }, e)
    }
    validateObfuscationRule(e) {
        const t = e.regex === void 0,
            s = e.regex !== void 0 && typeof e.regex != "string" && !(e.regex instanceof RegExp),
            i = !!(e.replacement && typeof e.replacement != "string");
        return t && !this.warnedRegexMissing ? (T(12, e), this.warnedRegexMissing = !0) : s && !this.warnedInvalidRegex && (T(13, e), this.warnedInvalidRegex = !0), i && !this.warnedInvalidReplacement && (T(14, e), this.warnedInvalidReplacement = !0), {
            rule: e,
            isValid: !t && !s && !i,
            errors: {
                regexMissingDetected: t,
                invalidRegexDetected: s,
                invalidReplacementDetected: i
            }
        }
    }
}
var f, l;
class ee {
    constructor(e, t, s, i) {
        m(this, f);
        this.agentRef = e, this.entityManager = e.runtime.entityManager, this.StorageClass = t, this.appStorageMap = new Map([
            [A, new this.StorageClass(J, i)]
        ]), this.featureAgg = i, this.setEventStore(s)
    }
    setEventStore(e) {
        if (!e) return;
        const t = le(this.entityManager.get(e), this.agentRef) ? this.appStorageMap.get(A) : new this.StorageClass(J, this.featureAgg);
        this.appStorageMap.set(e, t)
    }
    get length() {
        return h(this, f, l).call(this).length
    }
    merge(e, t, s) {
        return h(this, f, l).call(this, s).merge(e, t)
    }
    isEmpty(e, t) {
        if (t) return h(this, f, l).call(this, t).isEmpty(e);
        for (const s of this.appStorageMap.values())
            if (!s.isEmpty(e)) return !1;
        return !0
    }
    add(e, t) {
        return h(this, f, l).call(this, t).add(e)
    }
    addMetric(e, t, s, i) {
        return h(this, f, l).call(this).addMetric(e, t, s, i)
    }
    get(e, t) {
        if (t) return [{
            targetApp: this.entityManager.get(t),
            data: h(this, f, l).call(this, t).get(e)
        }];
        const s = [];
        return this.appStorageMap.forEach((i, a) => {
            if (a === A) return;
            const n = this.entityManager.get(a);
            n && s.push({
                targetApp: n,
                data: i.get(e)
            })
        }), s
    }
    byteSize(e) {
        return h(this, f, l).call(this, e).byteSize()
    }
    wouldExceedMaxSize(e, t) {
        return h(this, f, l).call(this, t).wouldExceedMaxSize(e)
    }
    save(e, t) {
        if (t) return h(this, f, l).call(this, t).save(e);
        this.appStorageMap.forEach(s => s.save(e))
    }
    clear(e, t) {
        if (t) return h(this, f, l).call(this, t).clear(e);
        this.appStorageMap.forEach(s => s.clear(e))
    }
    reloadSave(e, t) {
        return h(this, f, l).call(this, t).reloadSave(e)
    }
    clearSave(e, t) {
        return h(this, f, l).call(this, t).clearSave(e)
    }
}
f = new WeakSet, l = function(e = A) {
    return this.appStorageMap.has(e) || this.setEventStore(e), this.appStorageMap.get(e)
};
if (L) {
    x.cleanupTasks = [];
    const r = x.close;
    x.close = () => {
        for (let e of x.cleanupTasks) e();
        r()
    }
}

function je(r, e) {
    re ? ge(r, !0, e) : L && x.cleanupTasks.push(r)
}
var Be = /([^?#]*)[^#]*(#[^?]*|$).*/,
    Fe = /([^?#]*)().*/;

function Ne(r, e) {
    return r && r.replace(e ? Be : Fe, "$1$2")
}
var ne = {
        "%2C": ",",
        "%3A": ":",
        "%2F": "/",
        "%40": "@",
        "%24": "$",
        "%3B": ";"
    },
    Le = Object.keys(ne),
    ze = new RegExp(Le.join("|"), "g");

function Ue(r) {
    return ne[r]
}

function q(r) {
    return r == null ? "null" : encodeURIComponent(r).replace(ze, Ue)
}

function Pe(r, e) {
    var t = 0,
        s = "";
    return Object.entries(r || {}).forEach(([i, a]) => {
        var n = [],
            u, o;
        if (typeof a == "string" || !Array.isArray(a) && a !== null && a !== void 0 && a.toString().length) u = "&" + i + "=" + q(a), t += u.length, s += u;
        else if (Array.isArray(a) && a.length) {
            for (t += 9, o = 0; o < a.length && (u = q(se(a[o])), t += u.length, !(typeof e < "u" && t >= e)); o++) n.push(u);
            s += "&" + i + "=%5B" + n.join(",") + "%5D"
        }
    }), s
}

function b(r, e, t = {}) {
    return Object.keys(t).includes(r) ? "" : e && typeof e == "string" ? "&" + r + "=" + q(e) : ""
}

function Ie({
    isFinalHarvest: r = !1
} = {}) {
    return r && re ? _e : typeof XMLHttpRequest < "u" ? z : V
}

function V({
    url: r,
    body: e = null,
    method: t = "POST",
    headers: s = [{
        key: "content-type",
        value: "text/plain"
    }]
}) {
    const i = {};
    for (const a of s) i[a.key] = a.value;
    return fetch(r, {
        headers: i,
        method: t,
        body: e,
        credentials: "include"
    })
}

function z({
    url: r,
    body: e = null,
    sync: t,
    method: s = "POST",
    headers: i = [{
        key: "content-type",
        value: "text/plain"
    }]
}) {
    const a = new XMLHttpRequest;
    a.open(s, r, !t);
    try {
        "withCredentials" in a && (a.withCredentials = !0)
    } catch {}
    return i.forEach(n => {
        a.setRequestHeader(n.key, n.value)
    }), a.send(e), a
}

function _e({
    url: r,
    body: e
}) {
    try {
        return window.navigator.sendBeacon.bind(window.navigator)(r, e)
    } catch {
        return !1
    }
}
const qe = "Harvester/Retry/Failed/",
    Ve = "Harvester/Retry/Succeeded/";
var C;
class Ye {
    constructor(e) {
        m(this, C, !1);
        $(this, "initializedAggregates", []);
        this.agentRef = e, je(() => {
            this.initializedAggregates.forEach(t => {
                typeof t.harvestOpts.beforeUnload == "function" && t.harvestOpts.beforeUnload()
            }), this.initializedAggregates.forEach(t => this.triggerHarvestFor(t, {
                isFinalHarvest: !0
            }))
        }, !1)
    }
    startTimer(e = this.agentRef.init.harvest.interval) {
        if (c(this, C)) return;
        G(this, C, !0);
        const t = () => {
            this.initializedAggregates.forEach(s => this.triggerHarvestFor(s)), setTimeout(t, e * 1e3)
        };
        setTimeout(t, e * 1e3)
    }
    triggerHarvestFor(e, t = {}) {
        if (e.blocked) return !1;
        const s = Ie(t);
        if (!s) return !1;
        const i = !t.isFinalHarvest && s === z;
        let a, n = !1;
        if (t.directSend) a = [t.directSend];
        else if (a = e.makeHarvestPayload(i, t), !a) return !1;
        return a.forEach(({
            targetApp: o,
            payload: d
        }) => {
            d && (Ke(this.agentRef, {
                endpoint: pe[e.featureName],
                targetApp: o,
                payload: d,
                localOpts: t,
                submitMethod: s,
                cbFinished: u,
                raw: e.harvestOpts.raw,
                featureName: e.featureName
            }), n = !0)
        }), n;

        function u(o) {
            e.harvestOpts.prevAttemptCode && (K(ae, [(o.retry ? qe : Ve) + e.harvestOpts.prevAttemptCode], void 0, R.metrics, e.ee), delete e.harvestOpts.prevAttemptCode), o.retry && (e.harvestOpts.prevAttemptCode = o.status), t.forceNoRetry && (o.retry = !1), e.postHarvestCleanup(o)
        }
    }
}
C = new WeakMap;
const te = {};

function Ke(r, {
    endpoint: e,
    targetApp: t,
    payload: s,
    localOpts: i = {},
    submitMethod: a,
    cbFinished: n,
    raw: u,
    featureName: o
}) {
    if (!r.info.errorBeacon) return !1;
    let {
        body: d,
        qs: O
    } = Qe(s);
    if (Object.keys(d).length === 0 && !i.sendEmptyBody) return n && n({
        sent: !1,
        targetApp: t
    }), !1;
    const E = r.init.ssl === !1 ? "http" : "https",
        Q = r.init.proxy.beacon || r.info.errorBeacon,
        ue = u ? "".concat(E, "://").concat(Q, "/").concat(e) : "".concat(E, "://").concat(Q).concat(e !== ve ? "/" + e : "", "/1/").concat(t.licenseKey),
        j = u ? "" : We(r, O, e, t.applicationID);
    let B = Pe(O, r.runtime.maxBytes);
    j === "" && B.startsWith("&") && (B = B.substring(1));
    const P = "".concat(ue, "?").concat(j).concat(B);
    let k = !!O ? .attributes ? .includes("gzip") || e === me ? d : se(d);
    (!k || k.length === 0 || k === "{}" || k === "[]") && (k = ""), e !== ie && k.length > 75e4 && (te[e] = (te[e] || 0) + 1) === 1 && T(28, e);
    const W = [{
        key: "content-type",
        value: "text/plain"
    }];
    let X = a({
        url: P,
        body: k,
        sync: i.isFinalHarvest && L,
        headers: W
    });
    if (!i.isFinalHarvest && n) {
        let S = function() {
            try {
                if (o === R.jserrors && !d ? .err) return;
                const v = j.includes("hr=1"),
                    D = j.includes("ht=1"),
                    H = O ? .attributes ? .includes("hasError=true");
                K("harvest-metadata", [{
                    [o]: { ...v && {
                            hasReplay: v
                        },
                        ...D && {
                            hasTrace: D
                        },
                        ...H && {
                            hasError: H
                        }
                    }
                }], void 0, R.metrics, r.ee)
            } catch {}
        };
        a === z ? X.addEventListener("loadend", function() {
            const v = {
                sent: this.status !== 0,
                status: this.status,
                retry: F(this.status),
                fullUrl: P,
                xhr: this,
                targetApp: t
            };
            i.needResponse && (v.responseText = this.responseText), n(v), F(this.status) || S()
        }, be(!1)) : a === V && X.then(async function(v) {
            const D = v.status,
                H = {
                    sent: !0,
                    status: D,
                    retry: F(D),
                    fullUrl: P,
                    fetchResponse: v,
                    targetApp: t
                };
            i.needResponse && (H.responseText = await v.text()), n(H), F(D) || S()
        })
    }
    return ye({
        agentIdentifier: r.agentIdentifier,
        drained: !!_ ? .[r.agentIdentifier],
        type: "data",
        name: "harvest",
        feature: o,
        data: {
            endpoint: e,
            headers: W,
            targetApp: t,
            payload: s,
            submitMethod: he(),
            raw: u,
            synchronousXhr: !!(i.isFinalHarvest && L)
        }
    }), !0;

    function F(S) {
        switch (S) {
            case 408:
            case 429:
            case 500:
                return !0
        }
        return S >= 502 && S <= 504 || S >= 512 && S <= 530
    }

    function he() {
        return a === z ? "xhr" : a === V ? "fetch" : "beacon"
    }
}

function Qe(r = {}) {
    const e = t => typeof Uint8Array < "u" && t instanceof Uint8Array || Array.isArray(t) || typeof t == "string" ? t : Object.entries(t || {}).reduce((s, [i, a]) => ((typeof a == "number" || typeof a == "string" && a.length > 0 || typeof a == "object" && Object.keys(a || {}).length > 0) && (s[i] = a), s), {});
    return {
        body: e(r.body),
        qs: e(r.qs)
    }
}

function We(r, e, t, s) {
    const i = r.runtime.obfuscator.obfuscateString(Ne("" + x.location)),
        a = r.runtime.session ? .state.sessionReplayMode === 1 && t !== Se,
        n = r.runtime.session ? .state.sessionTraceMode === 1 && ![Ee, ie].includes(t),
        u = ["a=" + s, b("sa", r.info.sa ? "" + r.info.sa : ""), b("v", xe), o(), b("ct", r.runtime.customTransaction), "&rst=" + ke(), "&ck=0", "&s=" + (r.runtime.session ? .state.value || "0"), b("ref", i), b("ptid", r.runtime.ptid ? "" + r.runtime.ptid : "")];
    return a && u.push(b("hr", "1", e)), n && u.push(b("ht", "1", e)), u.join("");

    function o() {
        return r.info.transactionName ? b("to", r.info.transactionName) : b("t", r.info.tNamePlain || "Unnamed Transaction")
    }
}
var y, p;
class Xe {
    constructor(e) {
        m(this, y, new Map);
        m(this, p, {});
        this.agentRef = e, c(this, y).set(A, {
            licenseKey: e.info.licenseKey,
            applicationID: e.info.applicationID
        })
    }
    get(e = A) {
        return c(this, y).get(e)
    }
    getEntityGuidFor(e, t) {
        if (!(!c(this, p)[e] || !c(this, p)[t])) return c(this, p)[e].filter(s => c(this, p)[t].includes(s))[0]
    }
    set(e, t) {
        var s, i, a, n;
        c(this, y).has(e) || (c(this, y).set(e, t), (s = c(this, p))[i = t.licenseKey] ? ? (s[i] = []), c(this, p)[t.licenseKey].push(e), (a = c(this, p))[n = t.applicationID] ? ? (a[n] = []), c(this, p)[t.applicationID].push(e), this.agentRef.ee.emit("entity-added", [t]))
    }
    clear() {
        c(this, y).clear()
    }
    setDefaultEntity(e) {
        c(this, y).set(A, e)
    }
}
y = new WeakMap, p = new WeakMap;
var w, N;
class Ze {
    constructor() {
        m(this, w);
        this.aggregatedData = {}
    }
    store(e, t, s, i, a) {
        var n = h(this, w, N).call(this, e, t, s, a);
        return n.metrics = $e(i, n.metrics), n
    }
    merge(e, t, s, i, a, n = !1) {
        var u = h(this, w, N).call(this, e, t, i, a);
        if (n && (u.params = i), !u.metrics) {
            u.metrics = s;
            return
        }
        var o = u.metrics;
        o.count += s.count, Object.keys(s || {}).forEach(d => {
            if (d !== "count") {
                var O = o[d],
                    E = s[d];
                E && !E.c ? o[d] = Y(E.t, O) : o[d] = Je(E, o[d])
            }
        })
    }
    storeMetric(e, t, s, i) {
        var a = h(this, w, N).call(this, e, t, s);
        return a.stats = Y(i, a.stats), a
    }
    take(e, t = !0) {
        for (var s = {}, i = "", a = !1, n = 0; n < e.length; n++) i = e[n], s[i] = Object.values(this.aggregatedData[i] || {}), s[i].length && (a = !0), t && delete this.aggregatedData[i];
        return a ? s : null
    }
}
w = new WeakSet, N = function(e, t, s, i) {
    this.aggregatedData[e] || (this.aggregatedData[e] = {});
    var a = this.aggregatedData[e][t];
    return a || (a = this.aggregatedData[e][t] = {
        params: s || {}
    }, i && (a.custom = i)), a
};

function $e(r, e) {
    return e || (e = {
        count: 0
    }), e.count += 1, Object.entries(r || {}).forEach(([t, s]) => {
        e[t] = Y(s, e[t])
    }), e
}

function Y(r, e) {
    return r == null ? Ge(e) : e ? (e.c || (e = oe(e.t)), e.c += 1, e.t += r, e.sos += r * r, r > e.max && (e.max = r), r < e.min && (e.min = r), e) : {
        t: r
    }
}

function Ge(r) {
    return r ? r.c++ : r = {
        c: 1
    }, r
}

function Je(r, e) {
    return e ? (e.c || (e = oe(e.t)), e.min = Math.min(r.min, e.min), e.max = Math.max(r.max, e.max), e.t += r.t, e.sos += r.sos, e.c += r.c, e) : r
}

function oe(r) {
    return {
        t: r,
        min: r,
        max: r,
        sos: r * r,
        c: 1
    }
}
var g, M;
class et {
    constructor() {
        m(this, g, new Ze);
        m(this, M, {})
    }
    byteSize() {
        return 0
    }
    isEmpty({
        aggregatorTypes: e
    }) {
        return e ? e.every(t => !c(this, g).aggregatedData[t]) : Object.keys(c(this, g).aggregatedData).length === 0
    }
    add([e, t, s, i, a]) {
        return c(this, g).store(e, t, s, i, a), !0
    }
    addMetric(e, t, s, i) {
        return c(this, g).storeMetric(e, t, s, i), !0
    }
    save({
        aggregatorTypes: e
    }) {
        const t = e.toString(),
            s = {};
        e.forEach(i => s[i] = c(this, g).aggregatedData[i]), c(this, M)[t] = s
    }
    get(e) {
        const t = Array.isArray(e) ? e : e.aggregatorTypes;
        return c(this, g).take(t, !1)
    }
    clear({
        aggregatorTypes: e
    } = {}) {
        if (!e) {
            c(this, g).aggregatedData = {};
            return
        }
        e.forEach(t => delete c(this, g).aggregatedData[t])
    }
    reloadSave({
        aggregatorTypes: e
    }) {
        const t = e.toString(),
            s = c(this, M)[t];
        e.forEach(i => {
            Object.keys(s[i] || {}).forEach(a => {
                const n = s[i][a];
                c(this, g).merge(i, a, n.metrics, n.params, n.custom, !0)
            })
        })
    }
    clearSave({
        aggregatorTypes: e
    }) {
        const t = e.toString();
        delete c(this, M)[t]
    }
}
g = new WeakMap, M = new WeakMap;
var U, ce;
class at extends Ae {
    constructor(t, s) {
        super(t.agentIdentifier, s);
        m(this, U);
        this.agentRef = t, this.checkConfiguration(t), this.doOnceForAllAggregate(t), this.customAttributesAreSeparate = !1, this.canHarvestEarly = !0, this.isRetrying = !1, this.harvestOpts = {};
        const i = this.agentRef ? .runtime ? .appMetadata ? .agents ? .[0] ? .entityGuid;
        h(this, U, ce).call(this, i), i || this.ee.on("entity-added", a => {
            this.events ? .setEventStore ? .(a.entityGuid)
        })
    }
    decideEarlyHarvest() {
        if (!this.canHarvestEarly || this.blocked || this.isRetrying) return;
        const t = this.events.byteSize() + (this.customAttributesAreSeparate ? this.agentRef.runtime.jsAttributesMetadata.bytes : 0);
        t > Re && (this.agentRef.runtime.harvester.triggerHarvestFor(this), this.reportSupportabilityMetric("".concat(this.featureName, "/Harvest/Early/Seen"), t))
    }
    waitForFlags(t = []) {
        return new Promise((i, a) => {
            _[this.agentIdentifier] ? i(n(_[this.agentIdentifier])) : this.ee.on("rumresp", (u = {}) => {
                i(n(u))
            });

            function n(u) {
                return t.map(o => u[o] ? u[o] : 0)
            }
        }).catch(i => {
            this.ee.emit("internal-error", [i]), this.blocked = !0, this.deregisterDrain()
        })
    }
    drain() {
        Oe(this.agentIdentifier, this.featureName), this.drained = !0
    }
    preHarvestChecks(t) {
        return !this.blocked
    }
    makeHarvestPayload(t = !1, s = {}) {
        if (!this.events || this.events.isEmpty(this.harvestOpts, s.targetEntityGuid) || this.preHarvestChecks && !this.preHarvestChecks(s)) return;
        t && this.events.save(this.harvestOpts, s.targetEntityGuid);
        const i = this.events.get(this.harvestOpts, s.targetEntityGuid);
        return i.length ? (this.events.clear(this.harvestOpts, s.targetEntityGuid), i.map(({
            targetApp: a,
            data: n
        }) => {
            const o = {
                body: this.serializer ? this.serializer(n, a ? .entityGuid) : n
            };
            return this.queryStringsBuilder && (o.qs = this.queryStringsBuilder(n, a ? .entityGuid)), {
                targetApp: a,
                payload: o
            }
        })) : T(52)
    }
    postHarvestCleanup(t = {}) {
        this.isRetrying = t.sent && t.retry, this.isRetrying && this.events.reloadSave(this.harvestOpts, t.targetApp ? .entityGuid), this.events.clearSave(this.harvestOpts, t.targetApp ? .entityGuid)
    }
    checkConfiguration(t) {
        if (!De(t.info)) {
            const s = we();
            let i = { ...s.info ? .jsAttributes
            };
            try {
                i = { ...i,
                    ...t.info ? .jsAttributes
                }
            } catch {}
            Me(t, { ...s,
                info: { ...s.info,
                    jsAttributes: i
                },
                runtime: t.runtime
            }, t.runtime.loaderType)
        }
    }
    doOnceForAllAggregate(t) {
        t.runtime.obfuscator || (t.runtime.obfuscator = new Ce(t)), this.obfuscator = t.runtime.obfuscator, t.runtime.entityManager || (t.runtime.entityManager = new Xe(this.agentRef)), t.runtime.harvester || (t.runtime.harvester = new Ye(t))
    }
    reportSupportabilityMetric(t, s) {
        K(ae, [t, s], void 0, R.metrics, this.ee)
    }
}
U = new WeakSet, ce = function(t) {
    var s;
    if (!this.events) switch (this.featureName) {
        case R.sessionReplay:
            break;
        case R.jserrors:
        case R.metrics:
            this.events = (s = this.agentRef).sharedAggregator ? ? (s.sharedAggregator = new ee(this.agentRef, et, t, {
                featureName: "shared_aggregator"
            }));
            break;
        default:
            this.events = new ee(this.agentRef, He, t, this);
            break
    }
};
export {
    at as A, Ne as c, Te as i, Pe as o
};