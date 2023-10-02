import {O as i, s as d} from "./index.77256579.js";
import {c as f, d as w, f as v, g as y} from "./consult.418db39a.js";
import {g as m} from "./order.525e2e12.js";
import {s as D} from "./user.de3a72ff.js";
import {a as n, b as u, s as O} from "./request.894b30ad.js";
import {r as o, k as g, l as p} from "./index.f208d6e8.js";
const b = (r="doc")=>{
    const a = o(!1);
    return {
        loading: a,
        follow: async s=>{
            a.value = !0;
            try {
                await v(s.id, r),
                s.likeFlag = s.likeFlag === 1 ? 0 : 1
            } finally {
                a.value = !1
            }
        }
    }
}
  , M = ()=>({
    onShowPrescription: async a=>{
        if (a) {
            const e = await y(a);
            d([e.data.url])
        }
    }
})
  , T = ()=>{
    const r = o(!1);
    return {
        loading: r,
        cancelConsultOrder: async e=>{
            try {
                r.value = !0,
                await f(e.id),
                e.status = i.ConsultCancel,
                e.statusValue = "\u5DF2\u53D6\u6D88",
                n("\u53D6\u6D88\u6210\u529F")
            } catch {
                u("\u53D6\u6D88\u5931\u8D25")
            } finally {
                r.value = !1
            }
        }
    }
}
  , k = r=>{
    const a = o(!1);
    return {
        loading: a,
        deleteConsultOrder: async s=>{
            try {
                a.value = !0,
                await w(s.id),
                n("\u5220\u9664\u6210\u529F"),
                r && r()
            } catch {
                u("\u5220\u9664\u5931\u8D25")
            } finally {
                a.value = !1
            }
        }
    }
}
  , U = r=>{
    const a = o()
      , e = o(!1);
    return g(async()=>{
        try {
            e.value = !0;
            const s = await m(r);
            a.value = s.data
        } finally {
            e.value = !1
        }
    }
    ),
    {
        loading: e,
        order: a
    }
}
  , x = (r,a="login")=>{
    const e = o(0)
      , s = o();
    let t;
    const c = async()=>{
        var l;
        e.value > 0 || (await ((l = s.value) == null ? void 0 : l.validate("mobile")),
        await D(r.value, a),
        O("\u53D1\u9001\u6210\u529F"),
        e.value = 60,
        t && clearInterval(t),
        t = window.setInterval(()=>{
            e.value--,
            e.value <= 0 && clearInterval(t)
        }
        , 1e3))
    }
    ;
    return p(()=>{
        clearInterval(t)
    }
    ),
    {
        onSend: c,
        time: e,
        form: s
    }
}
;
export {M as a, T as b, k as c, U as d, b as e, x as u};
