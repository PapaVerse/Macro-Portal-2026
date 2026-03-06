import {
    aO as u,
    cB as S,
    cj as E,
    cp as y,
    cC as A,
    c2 as b,
    bq as o,
    bt as l,
    bD as T,
    bo as m,
    cD as w,
    cE as v,
    cF as M,
    cG as d,
    cH as I,
    bv as f,
    ag as c,
    b4 as D,
    b3 as O,
    bY as x,
    cI as k,
    cJ as F,
    b1 as g,
    cK as N
} from "../main-Cs0I_hm7.js";
import {
    T as p
} from "./chunk--QM2LZfv.js";
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
class R extends p {
    constructor(e, t) {
        super(e, t), this.onPause = typeof e.onPause == "function" ? e.onPause : () => {}, this.onRefresh = typeof e.onRefresh == "function" ? e.onRefresh : () => {}, this.onResume = typeof e.onResume == "function" ? e.onResume : () => {}, this.readStorage = e.readStorage, this.remainingMs = void 0, e.refreshEvents || (e.refreshEvents = ["click", "keydown", "scroll"]);
        try {
            this.abortController = new AbortController
        } catch {}
        if (u && e.ee) {
            if (e.ee) {
                this.ee = e.ee;
                const s = S(this.refresh.bind(this), 500, {
                    leading: !0
                });
                this.refreshHandler = n => {
                    e.refreshEvents.includes(n ? .[0] ? .type) && s()
                }, e.ee.on("fn-end", this.refreshHandler)
            }
            E(s => {
                s === "hidden" ? this.pause() : this.resume()
            }, !1, !1, this.abortController ? .signal)
        }
    }
    abort() {
        this.clear(), this.abortController ? .abort(), this.refreshHandler && (this.ee.removeEventListener("fn-end", this.refreshHandler), this.refreshHandler = this.ee = null)
    }
    pause() {
        this.onPause(), clearTimeout(this.timer), this.remainingMs = this.initialMs - (Date.now() - this.startTimestamp)
    }
    resume() {
        try {
            const t = this.readStorage(),
                s = typeof t == "string" ? JSON.parse(t) : t;
            e(s.expiresAt) || e(s.inactiveAt) ? this.end() : (this.refresh(), this.onResume())
        } catch {
            this.end()
        }

        function e(t) {
            return Date.now() > t
        }
    }
    refresh(e, t) {
        this.clear(), this.timer = this.create(e, t), this.startTimestamp = Date.now(), this.remainingMs = void 0, this.onRefresh()
    }
}
const h = {
    value: "",
    inactiveAt: 0,
    expiresAt: 0,
    updatedAt: Date.now(),
    sessionReplayMode: m.OFF,
    sessionReplaySentFirstChunk: !1,
    sessionTraceMode: m.OFF,
    traceHarvestStarted: !1,
    loggingMode: T.OFF,
    serverTimeDiff: null,
    custom: {},
    numOfResets: 0
};
class C {
    constructor(e) {
        const {
            agentIdentifier: t,
            key: s,
            storage: n
        } = e;
        if (!t || !s || !n) throw new Error("Missing required field(s):".concat(t ? "" : " agentID").concat(s ? "" : " key").concat(n ? "" : " storage"));
        this.agentIdentifier = t, this.storage = n, this.state = {}, this.key = s, this.ee = y.get(t), A(this.ee), this.setup(e), u && b("storage", i => {
            if (i.key === this.lookupKey) {
                const a = typeof i.newValue == "string" ? JSON.parse(i.newValue) : i.newValue;
                this.sync(a), this.ee.emit(o.UPDATE, [l.CROSS_TAB, this.state])
            }
        })
    }
    setup({
        value: e = w(16),
        expiresMs: t = v,
        inactiveMs: s = M,
        numOfResets: n = 0
    }) {
        const i = {
            serverTimeDiff: this.state.serverTimeDiff || h.serverTimeDiff
        };
        this.state = {}, this.sync({ ...h,
            ...i
        }), this.state.value = e, this.expiresMs = t, this.inactiveMs = s;
        const a = this.read();
        t ? (this.state.expiresAt = a ? .expiresAt || this.getFutureTimestamp(t), this.state.numOfResets = a ? .numOfResets || n, this.expiresTimer = new p({
            onEnd: () => {
                this.collectSM("expired"), this.collectSM("duration"), this.reset()
            }
        }, this.state.expiresAt - Date.now())) : this.state.expiresAt = 1 / 0, s ? (this.state.inactiveAt = a ? .inactiveAt || this.getFutureTimestamp(s), this.inactiveTimer = new R({
            onEnd: () => {
                this.collectSM("inactive"), this.collectSM("duration"), this.reset()
            },
            onRefresh: this.refresh.bind(this),
            onResume: () => {
                this.ee.emit(o.RESUME)
            },
            onPause: () => {
                this.initialized && this.ee.emit(o.PAUSE), this.write(d(this.state, h))
            },
            ee: this.ee,
            refreshEvents: ["click", "keydown", "scroll"],
            readStorage: () => this.storage.get(this.lookupKey)
        }, this.state.inactiveAt - Date.now())) : this.state.inactiveAt = 1 / 0, this.isNew || (this.isNew = !Object.keys(a).length), this.isNew ? this.write(d(this.state, h), !0) : this.sync(a), this.initialized = !0, this.ee.emit(o.STARTED, [this.isNew])
    }
    get lookupKey() {
        return "".concat(I, "_").concat(this.key)
    }
    sync(e) {
        Object.assign(this.state, e)
    }
    read() {
        try {
            const e = this.storage.get(this.lookupKey);
            if (!e) return {};
            const t = typeof e == "string" ? JSON.parse(e) : e;
            return this.isInvalid(t) ? {} : this.isExpired(t.expiresAt) ? (this.collectSM("expired"), this.collectSM("duration", t, !0), this.reset()) : this.isExpired(t.inactiveAt) ? (this.collectSM("inactive"), this.collectSM("duration", t, !0), this.reset()) : t
        } catch (e) {
            return f(10, e), {}
        }
    }
    write(e) {
        try {
            return !e || typeof e != "object" ? void 0 : (e.updatedAt = Date.now(), this.sync(e), this.storage.set(this.lookupKey, c(this.state)), this.ee.emit(o.UPDATE, [l.SAME_TAB, this.state]), e)
        } catch (t) {
            return f(11, t), null
        }
    }
    reset() {
        try {
            return this.initialized && (this.ee.emit(o.RESET), this.state.numOfResets++), this.storage.remove(this.lookupKey), this.inactiveTimer ? .abort ? .(), this.expiresTimer ? .clear ? .(), delete this.isNew, this.setup({
                agentIdentifier: this.agentIdentifier,
                key: this.key,
                storage: this.storage,
                expiresMs: this.expiresMs,
                inactiveMs: this.inactiveMs,
                numOfResets: this.state.numOfResets
            }), this.read()
        } catch {
            return {}
        }
    }
    refresh() {
        const e = this.read();
        this.write({ ...e,
            inactiveAt: this.getFutureTimestamp(this.inactiveMs)
        })
    }
    isExpired(e) {
        return Date.now() > e
    }
    isInvalid(e) {
        return !Object.keys(h).every(s => Object.keys(e).includes(s))
    }
    collectSM(e, t, s) {
        let n, i;
        e === "duration" && (n = this.getDuration(t, s), i = "Session/Duration/Ms"), e === "expired" && (i = "Session/Expired/Seen"), e === "inactive" && (i = "Session/Inactive/Seen"), i && D(x, [i, n], void 0, O.metrics, this.ee)
    }
    getDuration(e = this.state, t) {
        const s = e.expiresAt - this.expiresMs;
        return (t ? Date.now() : e.updatedAt) - s
    }
    getFutureTimestamp(e) {
        return Date.now() + e
    }
    syncCustomAttribute(e, t) {
        if (u)
            if (t === null) {
                const s = this.read();
                s.custom && (delete s.custom[e], this.write({ ...s
                }))
            } else {
                const s = this.read();
                this.custom = { ...s ? .custom || {},
                    [e] : t
                }, this.write({ ...s,
                    custom: this.custom
                })
            }
    }
}
class P {
    get(e) {
        try {
            return localStorage.getItem(e) || void 0
        } catch {
            return ""
        }
    }
    set(e, t) {
        try {
            return t == null ? this.remove(e) : localStorage.setItem(e, t)
        } catch {}
    }
    remove(e) {
        try {
            localStorage.removeItem(e)
        } catch {}
    }
}

function _(r, e) {
    const t = r[e] ? ? (r[e] = {}),
        s = {
            bytes: Object.keys(t).reduce((n, i) => n + i.length + c(t[i]).length, 0)
        };
    return r[e] = new Proxy(t, {
        set(n, i, a) {
            return s.bytes += i.length + c(a).length, n[i] = a, !0
        },
        deleteProperty(n, i) {
            return s.bytes -= i.length + c(n[i]).length, delete n[i]
        }
    }), s
}

function X(r) {
    if (r.runtime.session) return r.runtime.session;
    const e = r.init.session;
    r.runtime.session = new C({
        agentIdentifier: r.agentIdentifier,
        key: k,
        storage: new P,
        expiresMs: e ? .expiresMs,
        inactiveMs: e ? .inactiveMs
    });
    const t = r.runtime.session.state.custom;
    t && Object.keys(t).length && (r.info = F({ ...r.info,
        jsAttributes: { ...t,
            ...r.info.jsAttributes
        }
    })), r.runtime.jsAttributesMetadata = _(r.info, "jsAttributes");
    const s = y.get(r.agentIdentifier);
    return g("api-setCustomAttribute", (n, i, a) => {
        r.runtime.session.syncCustomAttribute(i, a)
    }, "session", s), g("api-setUserId", (n, i, a) => {
        r.runtime.session.syncCustomAttribute(i, a)
    }, "session", s), N(r.agentIdentifier, "session"), r.runtime.session
}
export {
    X as setupAgentSession
};