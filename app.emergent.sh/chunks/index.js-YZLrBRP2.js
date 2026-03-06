var l = Object.defineProperty;
var m = (r, t, i) => t in r ? l(r, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: i
}) : r[t] = i;
var n = (r, t, i) => m(r, typeof t != "symbol" ? t + "" : t, i);
import {
    bA as d,
    bB as b,
    bC as p,
    bp as S,
    bq as u,
    br as c,
    bt as E,
    bD as o,
    b1 as M,
    bE as R,
    bv as g,
    bF as y,
    ag as T,
    bG as L
} from "../main-Cs0I_hm7.js";
import {
    c as F,
    A as N
} from "./chunk-BjM568Jh.js";
import {
    a as O
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
class A {
    constructor(t, i, e = {}, s = d.INFO) {
        n(this, "timestamp");
        n(this, "message");
        n(this, "attributes");
        n(this, "level");
        this.timestamp = t, this.message = i, this.attributes = { ...e,
            pageUrl: F("" + b)
        }, this.level = s.toUpperCase()
    }
}
class _ extends N {
    constructor(t) {
        super(t, p), this.isSessionTrackingEnabled = S(t.init) && t.runtime.session, super.customAttributesAreSeparate = !0, this.ee.on(u.RESET, () => {
            this.abort(c.RESET)
        }), this.ee.on(u.UPDATE, (i, e) => {
            this.blocked || i !== E.CROSS_TAB || (this.loggingMode !== o.OFF && e.loggingMode === o.OFF ? this.abort(c.CROSS_TAB) : this.loggingMode = e.loggingMode)
        }), this.harvestOpts.raw = !0, this.waitForFlags(["log"]).then(([i]) => {
            const e = this.agentRef.runtime.session ? ? {};
            if (this.loggingMode === o.OFF || e.isNew && i === o.OFF) {
                this.blocked = !0, this.deregisterDrain();
                return
            }
            e.isNew || !this.isSessionTrackingEnabled ? this.updateLoggingMode(i) : this.loggingMode = e.state.loggingMode, M(R, this.handleLog.bind(this), this.featureName, this.ee), this.drain(), t.runtime.harvester.triggerHarvestFor(this)
        })
    }
    updateLoggingMode(t) {
        this.loggingMode = t, this.syncWithSessionManager({
            loggingMode: this.loggingMode
        })
    }
    handleLog(t, i, e = {}, s = d.INFO, h) {
        if (!this.agentRef.runtime.entityManager.get(h)) return g(56, this.featureName);
        if (this.blocked || !this.loggingMode) return;
        if ((!e || typeof e != "object") && (e = {}), typeof s == "string" && (s = s.toUpperCase()), !y(s)) return g(30, s);
        if (this.loggingMode < (o[s] || 1 / 0)) {
            this.reportSupportabilityMetric("Logging/Event/Dropped/Sampling");
            return
        }
        try {
            if (typeof i != "string") {
                const a = T(i);
                a && a !== "{}" ? i = a : i = String(i)
            }
        } catch {
            g(16, i), this.reportSupportabilityMetric("Logging/Event/Dropped/Casting");
            return
        }
        if (typeof i != "string" || !i) return g(32);
        const f = new A(Math.floor(this.agentRef.runtime.timeKeeper.correctRelativeTimestamp(t)), i, e, s);
        this.events.add(f, h)
    }
    serializer(t, i) {
        const e = this.agentRef.runtime.entityManager.get(i),
            s = this.agentRef.runtime.session;
        return [{
            common: {
                attributes: {
                    "entity.guid": e.entityGuid,
                    ...s && {
                        session: s.state.value || "0",
                        hasReplay: s.state.sessionReplayMode === 1 && L(e, this.agentRef),
                        hasTrace: s.state.sessionTraceMode === 1
                    },
                    ptid: this.agentRef.runtime.ptid,
                    appId: e.applicationID || this.agentRef.info.applicationID,
                    standalone: !!this.agentRef.info.sa,
                    agentVersion: this.agentRef.runtime.version,
                    "instrumentation.provider": "browser",
                    "instrumentation.version": this.agentRef.runtime.version,
                    "instrumentation.name": this.agentRef.runtime.loaderType,
                    ...this.agentRef.info.jsAttributes
                }
            },
            logs: O(t, this.obfuscator.obfuscateString.bind(this.obfuscator), "string")
        }]
    }
    queryStringsBuilder(t, i) {
        return {
            browser_monitoring_key: this.agentRef.runtime.entityManager.get(i).licenseKey
        }
    }
    abort(t = {}) {
        this.reportSupportabilityMetric("Logging/Abort/".concat(t.sm)), this.blocked = !0, this.events && (this.events.clear(), this.events.clearSave()), this.updateLoggingMode(o.OFF), this.deregisterDrain()
    }
    syncWithSessionManager(t = {}) {
        this.isSessionTrackingEnabled && this.agentRef.runtime.session.write(t)
    }
}
n(_, "featureName", p);
export {
    _ as Aggregate
};