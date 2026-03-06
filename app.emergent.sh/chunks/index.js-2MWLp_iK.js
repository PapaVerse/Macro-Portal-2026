var w = Object.defineProperty;
var b = (e, t, r) => t in e ? w(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var d = (e, t, r) => b(e, typeof t != "symbol" ? t + "" : t, r);
import {
    aO as u,
    bX as f,
    b1 as l,
    bY as O,
    bZ as S,
    b_ as E,
    b$ as m,
    c0 as g,
    c1 as R,
    c2 as T
} from "../main-Cs0I_hm7.js";
import {
    A,
    i as v
} from "./chunk-BjM568Jh.js";
import {
    i as M
} from "./chunk-PalxAwQ_.js";
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
const i = {
    REACT: "React",
    NEXTJS: "NextJS",
    VUE: "Vue",
    NUXTJS: "NuxtJS",
    ANGULAR: "Angular",
    ANGULARUNIVERSAL: "AngularUniversal",
    SVELTE: "Svelte",
    SVELTEKIT: "SvelteKit",
    PREACT: "Preact",
    PREACTSSR: "PreactSSR",
    ANGULARJS: "AngularJS",
    BACKBONE: "Backbone",
    EMBER: "Ember",
    METEOR: "Meteor",
    ZEPTO: "Zepto",
    JQUERY: "Jquery",
    MOOTOOLS: "MooTools",
    QWIK: "Qwik",
    FLUTTER: "Flutter",
    ELECTRON: "Electron"
};

function P() {
    if (!u) return [];
    const e = [];
    try {
        C() && (e.push(i.REACT), _() && e.push(i.NEXTJS)), N() && (e.push(i.VUE), j() && e.push(i.NUXTJS)), L() && (e.push(i.ANGULAR), U() && e.push(i.ANGULARUNIVERSAL)), I() && (e.push(i.SVELTE), G() && e.push(i.SVELTEKIT)), D() && (e.push(i.PREACT), k() && e.push(i.PREACTSSR)), F() && e.push(i.ANGULARJS), Object.prototype.hasOwnProperty.call(window, "Backbone") && e.push(i.BACKBONE), Object.prototype.hasOwnProperty.call(window, "Ember") && e.push(i.EMBER), Object.prototype.hasOwnProperty.call(window, "Meteor") && e.push(i.METEOR), Object.prototype.hasOwnProperty.call(window, "Zepto") && e.push(i.ZEPTO), Object.prototype.hasOwnProperty.call(window, "jQuery") && e.push(i.JQUERY), Object.prototype.hasOwnProperty.call(window, "MooTools") && e.push(i.MOOTOOLS), Object.prototype.hasOwnProperty.call(window, "qwikevents") && e.push(i.QWIK), Object.hasOwn(window, "_flutter") && e.push(i.FLUTTER), x() && e.push(i.ELECTRON)
    } catch {}
    return e
}

function C() {
    try {
        return Object.prototype.hasOwnProperty.call(window, "React") || Object.prototype.hasOwnProperty.call(window, "ReactDOM") || Object.prototype.hasOwnProperty.call(window, "ReactRedux") || document.querySelector("[data-reactroot], [data-reactid]") || (() => {
            const e = document.querySelectorAll("body > div");
            for (let t = 0; t < e.length; t++)
                if (Object.prototype.hasOwnProperty.call(e[t], "_reactRootContainer")) return !0
        })()
    } catch {
        return !1
    }
}

function _() {
    try {
        return Object.prototype.hasOwnProperty.call(window, "next") && Object.prototype.hasOwnProperty.call(window.next, "version")
    } catch {
        return !1
    }
}

function N() {
    try {
        return Object.prototype.hasOwnProperty.call(window, "Vue")
    } catch {
        return !1
    }
}

function j() {
    try {
        return Object.prototype.hasOwnProperty.call(window, "$nuxt") && Object.prototype.hasOwnProperty.call(window.$nuxt, "nuxt")
    } catch {
        return !1
    }
}

function L() {
    try {
        return Object.prototype.hasOwnProperty.call(window, "ng") || document.querySelector("[ng-version]")
    } catch {
        return !1
    }
}

function U() {
    try {
        return document.querySelector("[ng-server-context]")
    } catch {
        return !1
    }
}

function I() {
    try {
        return Object.prototype.hasOwnProperty.call(window, "__svelte")
    } catch {
        return !1
    }
}

function G() {
    try {
        return !!Object.keys(window).find(e => e.startsWith("__sveltekit"))
    } catch {
        return !1
    }
}

function D() {
    try {
        return Object.prototype.hasOwnProperty.call(window, "preact")
    } catch {
        return !1
    }
}

function k() {
    try {
        return document.querySelector('script[type="__PREACT_CLI_DATA__"]')
    } catch {
        return !1
    }
}

function F() {
    try {
        return Object.prototype.hasOwnProperty.call(window, "angular") || document.querySelector(".ng-binding, [ng-app], [data-ng-app], [ng-controller], [data-ng-controller], [ng-repeat], [data-ng-repeat]") || document.querySelector('script[src*="angular.js"], script[src*="angular.min.js"]')
    } catch {
        return !1
    }
}

function x() {
    try {
        return typeof navigator == "object" && typeof navigator.userAgent == "string" && navigator.userAgent.indexOf("Electron") >= 0
    } catch {
        return !1
    }
}

function B(e) {
    try {
        let n = function(o, s, c, a) {
            const p = "audit";
            c ? a ? t.push(r(p, o, s, "true", "positive")) : t.push(r(p, o, s, "false", "positive")) : a ? t.push(r(p, o, s, "false", "negative")) : t.push(r(p, o, s, "true", "negative"))
        };
        const t = [],
            r = (...o) => o.join("/");
        return e.page_view_event && (n("page_view", "hasReplay", e.page_view_event.hasReplay, !!e.session_replay), n("page_view", "hasTrace", e.page_view_event.hasTrace, !!e.session_trace)), e.session_replay && n("session_replay", "hasError", e.session_replay.hasError, !!e.jserrors), t
    } catch {
        return []
    }
}
class J extends A {
    constructor(t) {
        super(t, f), this.harvestOpts.aggregatorTypes = ["cm", "sm"], this.harvestMetadata = {}, this.harvestOpts.beforeUnload = () => {
            B(this.harvestMetadata).forEach(r => {
                this.storeSupportabilityMetrics(r)
            })
        }, this.agentNonce = u && document.currentScript ? .nonce, this.waitForFlags(["err"]).then(([r]) => {
            r ? (this.singleChecks(), this.eachSessionChecks(), this.drain()) : (this.blocked = !0, this.deregisterDrain())
        }), l(O, this.storeSupportabilityMetrics.bind(this), this.featureName, this.ee), l(S, this.storeEventMetrics.bind(this), this.featureName, this.ee)
    }
    preHarvestChecks(t) {
        return this.drained && t.isFinalHarvest
    }
    storeSupportabilityMetrics(t, r) {
        if (this.blocked) return;
        const n = E,
            o = {
                name: t
            };
        this.events.addMetric(n, t, o, r)
    }
    storeEventMetrics(t, r) {
        if (this.blocked) return;
        const n = m,
            o = {
                name: t
            };
        this.events.add([n, t, o, r])
    }
    singleChecks() {
        const {
            distMethod: t,
            loaderType: r
        } = this.agentRef.runtime, {
            proxy: n,
            privacy: o
        } = this.agentRef.init;
        if (r && this.storeSupportabilityMetrics("Generic/LoaderType/".concat(r, "/Detected")), t && this.storeSupportabilityMetrics("Generic/DistMethod/".concat(t, "/Detected")), u ? (this.storeSupportabilityMetrics("Generic/Runtime/Browser/Detected"), this.agentNonce && this.agentNonce !== "" && this.storeSupportabilityMetrics("Generic/Runtime/Nonce/Detected"), g(() => {
                P().forEach(s => {
                    this.storeSupportabilityMetrics("Framework/" + s + "/Detected")
                })
            }), o.cookies_enabled || this.storeSupportabilityMetrics("Config/SessionTracking/Disabled")) : R ? this.storeSupportabilityMetrics("Generic/Runtime/Worker/Detected") : this.storeSupportabilityMetrics("Generic/Runtime/Unknown/Detected"), v() && this.storeSupportabilityMetrics("Generic/FileProtocol/Detected"), this.obfuscator.obfuscateConfigRules.length > 0 && this.storeSupportabilityMetrics("Generic/Obfuscate/Detected"), n.assets && this.storeSupportabilityMetrics("Config/AssetsUrl/Changed"), n.beacon && this.storeSupportabilityMetrics("Config/BeaconUrl/Changed"), u && window.MutationObserver) {
            M(window) && this.storeSupportabilityMetrics("Generic/Runtime/IFrame/Detected");
            const s = window.document.querySelectorAll("video").length;
            s && this.storeSupportabilityMetrics("Generic/VideoElement/Added", s);
            const c = window.document.querySelectorAll("iframe").length;
            c && this.storeSupportabilityMetrics("Generic/IFrame/Added", c), new MutationObserver(p => {
                p.forEach(y => {
                    y.addedNodes.forEach(h => {
                        h instanceof HTMLVideoElement && this.storeSupportabilityMetrics("Generic/VideoElement/Added", 1), h instanceof HTMLIFrameElement && this.storeSupportabilityMetrics("Generic/IFrame/Added", 1)
                    })
                })
            }).observe(window.document.body, {
                childList: !0,
                subtree: !0
            })
        }
        navigator.webdriver && this.storeSupportabilityMetrics("Generic/WebDriver/Detected"), l("harvest-metadata", (s = {}) => {
            try {
                Object.keys(s).forEach(c => {
                    var a;
                    Object.assign((a = this.harvestMetadata)[c] ? ? (a[c] = {}), s[c])
                })
            } catch {}
        }, this.featureName, this.ee)
    }
    eachSessionChecks() {
        u && T("pageshow", t => {
            t ? .persisted && this.storeSupportabilityMetrics("Generic/BFCache/PageRestored")
        })
    }
}
d(J, "featureName", f);
export {
    J as Aggregate
};