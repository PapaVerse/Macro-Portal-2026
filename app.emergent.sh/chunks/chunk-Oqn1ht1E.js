import {
    aO as n,
    aP as r,
    aQ as e,
    aR as o
} from "../main-Cs0I_hm7.js";
import {
    V as s,
    a as f,
    f as m
} from "./chunk-CFCXJVxy.js";
const t = new s(f.TIME_TO_FIRST_BYTE);
if (n && typeof PerformanceNavigationTiming < "u" && !r && window === window.parent) m(({
    value: a,
    attribution: i
}) => {
    t.isValid || t.update({
        value: a,
        attrs: {
            navigationEntry: i.navigationEntry
        }
    })
});
else if (!t.isValid) {
    const a = {};
    for (let i in e ? .performance ? .timing || {}) a[i] = Math.max(e ? .performance ? .timing[i] - o, 0);
    t.update({
        value: a.responseStart,
        attrs: {
            navigationEntry: a
        }
    })
}
export {
    t
};