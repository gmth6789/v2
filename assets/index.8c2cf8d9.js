import {m as D, l as te, q as C, r as E, s as F, v as ne, x as I, y as M, k as oe, z as he, A as ve, B as A, C as re, D as se, e as h, E as ye, d as L, c as v, F as we, G as be} from "./index.f208d6e8.js";
const y = e=>e != null
  , R = e=>typeof e == "function"
  , V = e=>e !== null && typeof e == "object"
  , vt = e=>V(e) && R(e.then) && R(e.catch)
  , ae = e=>typeof e == "number" || /^\d+(\.\d+)?$/.test(e)
  , Ce = ()=>z ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1;
function yt() {}
const Be = Object.assign
  , z = typeof window < "u";
function W(e, t) {
    const n = t.split(".");
    let o = e;
    return n.forEach(r=>{
        var s;
        o = V(o) && (s = o[r]) != null ? s : ""
    }
    ),
    o
}
function wt(e, t, n) {
    return t.reduce((o,r)=>((!n || e[r] !== void 0) && (o[r] = e[r]),
    o), {})
}
const bt = e=>Array.isArray(e) ? e : [e]
  , Ct = null
  , w = [Number, String]
  , Te = {
    type: Boolean,
    default: !0
}
  , Bt = e=>({
    type: e,
    required: !0
})
  , Tt = ()=>({
    type: Array,
    default: ()=>[]
})
  , Ot = e=>({
    type: Number,
    default: e
})
  , xt = e=>({
    type: w,
    default: e
})
  , b = e=>({
    type: String,
    default: e
});
var p = typeof window < "u";
function x(e) {
    return p ? requestAnimationFrame(e) : -1
}
function Oe(e) {
    p && cancelAnimationFrame(e)
}
function Dt(e) {
    x(()=>x(e))
}
var xe = e=>e === window
  , H = (e,t)=>({
    top: 0,
    left: 0,
    right: e,
    bottom: t,
    width: e,
    height: t
})
  , De = e=>{
    const t = h(e);
    if (xe(t)) {
        const n = t.innerWidth
          , o = t.innerHeight;
        return H(n, o)
    }
    return t != null && t.getBoundingClientRect ? t.getBoundingClientRect() : H(0, 0)
}
;
function At(e) {
    const t = D(e, null);
    if (t) {
        const n = re()
          , {link: o, unlink: r, internalChildren: s} = t;
        o(n),
        te(()=>r(n));
        const c = C(()=>s.indexOf(n));
        return {
            parent: t,
            index: c
        }
    }
    return {
        parent: null,
        index: E(-1)
    }
}
function Ae(e) {
    const t = []
      , n = o=>{
        Array.isArray(o) && o.forEach(r=>{
            var s;
            ye(r) && (t.push(r),
            (s = r.component) != null && s.subTree && (t.push(r.component.subTree),
            n(r.component.subTree.children)),
            r.children && n(r.children))
        }
        )
    }
    ;
    return n(e),
    t
}
var Z = (e,t)=>{
    const n = e.indexOf(t);
    return n === -1 ? e.findIndex(o=>t.key !== void 0 && t.key !== null && o.type === t.type && o.key === t.key) : n
}
;
function Pe(e, t, n) {
    const o = Ae(e.subTree.children);
    n.sort((s,c)=>Z(o, s.vnode) - Z(o, c.vnode));
    const r = n.map(s=>s.proxy);
    t.sort((s,c)=>{
        const a = r.indexOf(s)
          , u = r.indexOf(c);
        return a - u
    }
    )
}
function Pt(e) {
    const t = F([])
      , n = F([])
      , o = re();
    return {
        children: t,
        linkChildren: s=>{
            se(e, Object.assign({
                link: u=>{
                    u.proxy && (n.push(u),
                    t.push(u.proxy),
                    Pe(o, t, n))
                }
                ,
                unlink: u=>{
                    const i = n.indexOf(u);
                    t.splice(i, 1),
                    n.splice(i, 1)
                }
                ,
                children: t,
                internalChildren: n
            }, s))
        }
    }
}
var $ = 1e3
  , _ = 60 * $
  , k = 60 * _
  , G = 24 * k;
function Se(e) {
    const t = Math.floor(e / G)
      , n = Math.floor(e % G / k)
      , o = Math.floor(e % k / _)
      , r = Math.floor(e % _ / $)
      , s = Math.floor(e % $);
    return {
        total: e,
        days: t,
        hours: n,
        minutes: o,
        seconds: r,
        milliseconds: s
    }
}
function Fe(e, t) {
    return Math.floor(e / 1e3) === Math.floor(t / 1e3)
}
function St(e) {
    let t, n, o, r;
    const s = E(e.time)
      , c = C(()=>Se(s.value))
      , a = ()=>{
        o = !1,
        Oe(t)
    }
      , u = ()=>Math.max(n - Date.now(), 0)
      , i = g=>{
        var Y, U;
        s.value = g,
        (Y = e.onChange) == null || Y.call(e, c.value),
        g === 0 && (a(),
        (U = e.onFinish) == null || U.call(e))
    }
      , d = ()=>{
        t = x(()=>{
            o && (i(u()),
            s.value > 0 && d())
        }
        )
    }
      , l = ()=>{
        t = x(()=>{
            if (o) {
                const g = u();
                (!Fe(g, s.value) || g === 0) && i(g),
                s.value > 0 && l()
            }
        }
        )
    }
      , f = ()=>{
        !p || (e.millisecond ? d() : l())
    }
      , pe = ()=>{
        o || (n = Date.now() + s.value,
        o = !0,
        f())
    }
      , Ee = (g=e.time)=>{
        a(),
        s.value = g
    }
    ;
    return ne(a),
    I(()=>{
        r && (o = !0,
        r = !1,
        f())
    }
    ),
    M(()=>{
        o && (a(),
        r = !0)
    }
    ),
    {
        start: pe,
        pause: a,
        reset: Ee,
        current: c
    }
}
function Re(e) {
    let t;
    oe(()=>{
        e(),
        he(()=>{
            t = !0
        }
        )
    }
    ),
    I(()=>{
        t && e()
    }
    )
}
function $e(e, t, n={}) {
    if (!p)
        return;
    const {target: o=window, passive: r=!1, capture: s=!1} = n;
    let c = !1, a;
    const u = l=>{
        if (c)
            return;
        const f = h(l);
        f && !a && (f.addEventListener(e, t, {
            capture: s,
            passive: r
        }),
        a = !0)
    }
      , i = l=>{
        if (c)
            return;
        const f = h(l);
        f && a && (f.removeEventListener(e, t, s),
        a = !1)
    }
    ;
    te(()=>i(o)),
    M(()=>i(o)),
    Re(()=>u(o));
    let d;
    return ve(o) && (d = A(o, (l,f)=>{
        i(f),
        u(l)
    }
    )),
    ()=>{
        d == null || d(),
        i(o),
        c = !0
    }
}
function Ft(e, t, n={}) {
    if (!p)
        return;
    const {eventName: o="click"} = n;
    $e(o, s=>{
        (Array.isArray(e) ? e : [e]).every(u=>{
            const i = h(u);
            return i && !i.contains(s.target)
        }
        ) && t(s)
    }
    , {
        target: document
    })
}
var T, P;
function _e() {
    if (!T && (T = E(0),
    P = E(0),
    p)) {
        const e = ()=>{
            T.value = window.innerWidth,
            P.value = window.innerHeight
        }
        ;
        e(),
        window.addEventListener("resize", e, {
            passive: !0
        }),
        window.addEventListener("orientationchange", e, {
            passive: !0
        })
    }
    return {
        width: T,
        height: P
    }
}
var ke = /scroll|auto|overlay/i
  , ue = p ? window : void 0;
function Ne(e) {
    return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1
}
function Ie(e, t=ue) {
    let n = e;
    for (; n && n !== t && Ne(n); ) {
        const {overflowY: o} = window.getComputedStyle(n);
        if (ke.test(o))
            return n;
        n = n.parentNode
    }
    return t
}
function Rt(e, t=ue) {
    const n = E();
    return oe(()=>{
        e.value && (n.value = Ie(e.value, t))
    }
    ),
    n
}
var O;
function $t() {
    if (!O && (O = E("visible"),
    p)) {
        const e = ()=>{
            O.value = document.hidden ? "hidden" : "visible"
        }
        ;
        e(),
        window.addEventListener("visibilitychange", e)
    }
    return O
}
var Me = Symbol("van-field");
function _t(e) {
    const t = D(Me, null);
    t && !t.customValue.value && (t.customValue.value = e,
    A(e, ()=>{
        t.resetValidation(),
        t.validateWithTrigger("onChange")
    }
    ))
}
function Le(e) {
    const t = "scrollTop"in e ? e.scrollTop : e.pageYOffset;
    return Math.max(t, 0)
}
function K(e, t) {
    "scrollTop"in e ? e.scrollTop = t : e.scrollTo(e.scrollX, t)
}
function ie() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
}
function Ve(e) {
    K(window, e),
    K(document.body, e)
}
function kt(e, t) {
    if (e === window)
        return 0;
    const n = t ? Le(t) : ie();
    return De(e).top + n
}
const ze = Ce();
function Nt() {
    ze && Ve(ie())
}
const je = e=>e.stopPropagation();
function It(e, t) {
    (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(),
    t && je(e)
}
function Mt(e) {
    const t = h(e);
    if (!t)
        return !1;
    const n = window.getComputedStyle(t)
      , o = n.display === "none"
      , r = t.offsetParent === null && n.position !== "fixed";
    return o || r
}
const {width: Ye, height: Ue} = _e();
function m(e) {
    if (y(e))
        return ae(e) ? `${e}px` : String(e)
}
function Lt(e) {
    if (y(e)) {
        if (Array.isArray(e))
            return {
                width: m(e[0]),
                height: m(e[1])
            };
        const t = m(e);
        return {
            width: t,
            height: t
        }
    }
}
function Vt(e) {
    const t = {};
    return e !== void 0 && (t.zIndex = +e),
    t
}
let S;
function We() {
    if (!S) {
        const e = document.documentElement
          , t = e.style.fontSize || window.getComputedStyle(e).fontSize;
        S = parseFloat(t)
    }
    return S
}
function He(e) {
    return e = e.replace(/rem/g, ""),
    +e * We()
}
function Ze(e) {
    return e = e.replace(/vw/g, ""),
    +e * Ye.value / 100
}
function Ge(e) {
    return e = e.replace(/vh/g, ""),
    +e * Ue.value / 100
}
function zt(e) {
    if (typeof e == "number")
        return e;
    if (z) {
        if (e.includes("rem"))
            return He(e);
        if (e.includes("vw"))
            return Ze(e);
        if (e.includes("vh"))
            return Ge(e)
    }
    return parseFloat(e)
}
const Ke = /-(\w)/g
  , ce = e=>e.replace(Ke, (t,n)=>n.toUpperCase())
  , qe = e=>e.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
function jt(e, t=2) {
    let n = e + "";
    for (; n.length < t; )
        n = "0" + n;
    return n
}
const Yt = (e,t,n)=>Math.min(Math.max(e, t), n);
function q(e, t, n) {
    const o = e.indexOf(t);
    return o === -1 ? e : t === "-" && o !== 0 ? e.slice(0, o) : e.slice(0, o + 1) + e.slice(o).replace(n, "")
}
function Ut(e, t=!0, n=!0) {
    t ? e = q(e, ".", /\./g) : e = e.split(".")[0],
    n ? e = q(e, "-", /-/g) : e = e.replace(/-/, "");
    const o = t ? /[^-0-9.]/g : /[^-0-9]/g;
    return e.replace(o, "")
}
const {hasOwnProperty: Xe} = Object.prototype;
function Je(e, t, n) {
    const o = t[n];
    !y(o) || (!Xe.call(e, n) || !V(o) ? e[n] = o : e[n] = le(Object(e[n]), o))
}
function le(e, t) {
    return Object.keys(t).forEach(n=>{
        Je(e, t, n)
    }
    ),
    e
}
var Qe = {
    name: "\u59D3\u540D",
    tel: "\u7535\u8BDD",
    save: "\u4FDD\u5B58",
    clear: "\u6E05\u7A7A",
    cancel: "\u53D6\u6D88",
    confirm: "\u786E\u8BA4",
    delete: "\u5220\u9664",
    loading: "\u52A0\u8F7D\u4E2D...",
    noCoupon: "\u6682\u65E0\u4F18\u60E0\u5238",
    nameEmpty: "\u8BF7\u586B\u5199\u59D3\u540D",
    addContact: "\u6DFB\u52A0\u8054\u7CFB\u4EBA",
    telInvalid: "\u8BF7\u586B\u5199\u6B63\u786E\u7684\u7535\u8BDD",
    vanCalendar: {
        end: "\u7ED3\u675F",
        start: "\u5F00\u59CB",
        title: "\u65E5\u671F\u9009\u62E9",
        weekdays: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"],
        monthTitle: (e,t)=>`${e}\u5E74 ${t}\u6708`,
        rangePrompt: e=>`\u6700\u591A\u9009\u62E9 ${e} \u5929`
    },
    vanCascader: {
        select: "\u8BF7\u9009\u62E9"
    },
    vanPagination: {
        prev: "\u4E0A\u4E00\u9875",
        next: "\u4E0B\u4E00\u9875"
    },
    vanPullRefresh: {
        pulling: "\u4E0B\u62C9\u5373\u53EF\u5237\u65B0...",
        loosing: "\u91CA\u653E\u5373\u53EF\u5237\u65B0..."
    },
    vanSubmitBar: {
        label: "\u5408\u8BA1:"
    },
    vanCoupon: {
        unlimited: "\u65E0\u95E8\u69DB",
        discount: e=>`${e}\u6298`,
        condition: e=>`\u6EE1 ${e}\u5143\u53EF\u7528`
    },
    vanCouponCell: {
        title: "\u4F18\u60E0\u5238",
        count: e=>`${e}\u5F20\u53EF\u7528`
    },
    vanCouponList: {
        exchange: "\u5151\u6362",
        close: "\u4E0D\u4F7F\u7528",
        enable: "\u53EF\u7528",
        disabled: "\u4E0D\u53EF\u7528",
        placeholder: "\u8F93\u5165\u4F18\u60E0\u7801"
    },
    vanAddressEdit: {
        area: "\u5730\u533A",
        areaEmpty: "\u8BF7\u9009\u62E9\u5730\u533A",
        addressEmpty: "\u8BF7\u586B\u5199\u8BE6\u7EC6\u5730\u5740",
        addressDetail: "\u8BE6\u7EC6\u5730\u5740",
        defaultAddress: "\u8BBE\u4E3A\u9ED8\u8BA4\u6536\u8D27\u5730\u5740"
    },
    vanAddressList: {
        add: "\u65B0\u589E\u5730\u5740"
    }
};
const X = E("zh-CN")
  , J = F({
    "zh-CN": Qe
})
  , et = {
    messages() {
        return J[X.value]
    },
    use(e, t) {
        X.value = e,
        this.add({
            [e]: t
        })
    },
    add(e={}) {
        le(J, e)
    }
};
var tt = et;
function nt(e) {
    const t = ce(e) + ".";
    return (n,...o)=>{
        const r = tt.messages()
          , s = W(r, t + n) || W(r, n);
        return R(s) ? s(...o) : s
    }
}
function N(e, t) {
    return t ? typeof t == "string" ? ` ${e}--${t}` : Array.isArray(t) ? t.reduce((n,o)=>n + N(e, o), "") : Object.keys(t).reduce((n,o)=>n + (t[o] ? N(e, o) : ""), "") : ""
}
function ot(e) {
    return (t,n)=>(t && typeof t != "string" && (n = t,
    t = ""),
    t = t ? `${e}__ ${t}` : e,
    `${t}${N(t, n)}`)
}
function j(e) {
    const t = `van-${e}`;
    return [t, ot(t), nt(t)]
}
const B = "van-hairline"
  , Wt = `${B}--top`
  , Ht = `${B}--left`
  , Zt = `${B}--bottom`
  , Gt = `${B}--surround`
  , Kt = `${B}--top-bottom`
  , qt = "van-haptics-feedback"
  , Xt = Symbol("van-form")
  , Jt = 500;
function fe(e) {
    return e.install = t=>{
        const {name: n} = e;
        n && (t.component(n, e),
        t.component(ce(`-${n}`), e))
    }
    ,
    e
}
const rt = Symbol();
function Qt(e) {
    const t = D(rt, null);
    t && A(t, n=>{
        n && e()
    }
    )
}
const [st,Q] = j("badge")
  , at = {
    dot: Boolean,
    max: w,
    tag: b("div"),
    color: String,
    offset: Array,
    content: w,
    showZero: Te,
    position: b("top-right")
};
var ut = L({
    name: st,
    props: at,
    setup(e, {slots: t}) {
        const n = ()=>{
            if (t.content)
                return !0;
            const {content: a, showZero: u} = e;
            return y(a) && a !== "" && (u || a !== 0 && a !== "0")
        }
          , o = ()=>{
            const {dot: a, max: u, content: i} = e;
            if (!a && n())
                return t.content ? t.content() : y(u) && ae(i) && +i > +u ? `${u}+` : i
        }
          , r = a=>a.startsWith("-") ? a.replace("-", "") : `-${a}`
          , s = C(()=>{
            const a = {
                background: e.color
            };
            if (e.offset) {
                const [u,i] = e.offset
                  , {position: d} = e
                  , [l,f] = d.split("-");
                t.default ? (typeof i == "number" ? a[l] = m(l === "top" ? i : -i) : a[l] = l === "top" ? m(i) : r(i),
                typeof u == "number" ? a[f] = m(f === "left" ? u : -u) : a[f] = f === "left" ? m(u) : r(u)) : (a.marginTop = m(i),
                a.marginLeft = m(u))
            }
            return a
        }
        )
          , c = ()=>{
            if (n() || e.dot)
                return v("div", {
                    class: Q([e.position, {
                        dot: e.dot,
                        fixed: !!t.default
                    }]),
                    style: s.value
                }, [o()])
        }
        ;
        return ()=>{
            if (t.default) {
                const {tag: a} = e;
                return v(a, {
                    class: Q("wrapper")
                }, {
                    default: ()=>[t.default(), c()]
                })
            }
            return c()
        }
    }
});
const it = fe(ut);
let de = 2e3;
const en = ()=>++de
  , ct = e=>{
    de = e
}
  , [me,lt] = j("config-provider")
  , ge = Symbol(me)
  , ft = {
    tag: b("div"),
    theme: b("light"),
    zIndex: Number,
    themeVars: Object,
    themeVarsDark: Object,
    themeVarsLight: Object,
    iconPrefix: String
};
function dt(e) {
    const t = {};
    return Object.keys(e).forEach(n=>{
        t[`--van-${qe(n)}`] = e[n]
    }
    ),
    t
}
L({
    name: me,
    props: ft,
    setup(e, {slots: t}) {
        const n = C(()=>dt(Be({}, e.themeVars, e.theme === "dark" ? e.themeVarsDark : e.themeVarsLight)));
        if (z) {
            const o = ()=>{
                document.documentElement.classList.add(`van-theme-${e.theme}`)
            }
              , r = (s=e.theme)=>{
                document.documentElement.classList.remove(`van-theme-${s}`)
            }
            ;
            A(()=>e.theme, (s,c)=>{
                c && r(c),
                o()
            }
            , {
                immediate: !0
            }),
            I(o),
            M(r),
            ne(r)
        }
        return se(ge, e),
        we(()=>{
            e.zIndex !== void 0 && ct(e.zIndex)
        }
        ),
        ()=>v(e.tag, {
            class: lt(),
            style: n.value
        }, {
            default: ()=>{
                var o;
                return [(o = t.default) == null ? void 0 : o.call(t)]
            }
        })
    }
});
const [mt,ee] = j("icon")
  , gt = e=>e == null ? void 0 : e.includes("/")
  , pt = {
    dot: Boolean,
    tag: b("i"),
    name: String,
    size: w,
    badge: w,
    color: String,
    badgeProps: Object,
    classPrefix: String
};
var Et = L({
    name: mt,
    props: pt,
    setup(e, {slots: t}) {
        const n = D(ge, null)
          , o = C(()=>e.classPrefix || (n == null ? void 0 : n.iconPrefix) || ee());
        return ()=>{
            const {tag: r, dot: s, name: c, size: a, badge: u, color: i} = e
              , d = gt(c);
            return v(it, be({
                dot: s,
                tag: r,
                class: [o.value, d ? "" : `${o.value}-${c}`],
                style: {
                    color: i,
                    fontSize: m(a)
                },
                content: u
            }, e.badgeProps), {
                default: ()=>{
                    var l;
                    return [(l = t.default) == null ? void 0 : l.call(t), d && v("img", {
                        class: ee("image"),
                        src: c
                    }, null)]
                }
            })
        }
    }
});
const tn = fe(Et);
export {Kt as $, wt as A, Zt as B, Me as C, Gt as D, yt as E, Xt as F, Lt as G, qt as H, tn as I, Re as J, Ie as K, en as L, Ot as M, z as N, Ye as O, rt as P, Ue as Q, $t as R, Qt as S, Mt as T, Dt as U, Yt as V, De as W, Jt as X, Ht as Y, Wt as Z, it as _, ie as a, Rt as a0, Le as a1, jt as a2, St as a3, Oe as a4, x as a5, K as a6, zt as a7, kt as a8, Ft as a9, B as aa, vt as b, j as c, R as d, xt as e, Be as f, Vt as g, Ct as h, V as i, At as j, m as k, $e as l, b as m, w as n, y as o, It as p, Ut as q, bt as r, Ve as s, Te as t, Pt as u, Nt as v, fe as w, Bt as x, _t as y, Tt as z};
