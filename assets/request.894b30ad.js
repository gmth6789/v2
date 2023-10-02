import {C as ze, c as b, d as ne, q as Me, r as R, y as He, v as Rt, B as F, T as $e, H as qe, I as Je, k as Ke, x as Ct, D as xt, J as At, K as vt, G as me, z as Tt, l as Pt, L as Nt, s as kt, u as Ve, M as Ae} from "./index.f208d6e8.js";
import {b as Bt, E as _t, f as k, c as re, G as Dt, n as N, m as B, k as Lt, w as se, t as I, h as ee, J as It, K as Ft, p as We, l as Xe, g as Ut, o as ye, P as jt, L as zt, H as Mt, I as Ye, M as Ht, A as $t, N as qt, i as Jt} from "./index.8c2cf8d9.js";
function Kt(e, {args: t=[], done: n, canceled: r}) {
    if (e) {
        const s = e.apply(null, t);
        Bt(s) ? s.then(o=>{
            o ? n() : r && r()
        }
        ).catch(_t) : s ? n() : r && r()
    } else
        n()
}
function Ge(e) {
    const t = ze();
    t && k(t.proxy, e)
}
const [Vt,H] = re("loading")
  , Wt = Array(12).fill(null).map((e,t)=>b("i", {
    class: H("line", String(t + 1))
}, null))
  , Xt = b("svg", {
    class: H("circular"),
    viewBox: "25 25 50 50"
}, [b("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
}, null)])
  , Yt = {
    size: N,
    type: B("circular"),
    color: String,
    vertical: Boolean,
    textSize: N,
    textColor: String
};
var Gt = ne({
    name: Vt,
    props: Yt,
    setup(e, {slots: t}) {
        const n = Me(()=>k({
            color: e.color
        }, Dt(e.size)))
          , r = ()=>{
            const o = e.type === "spinner" ? Wt : Xt;
            return b("span", {
                class: H("spinner", e.type),
                style: n.value
            }, [t.icon ? t.icon() : o])
        }
          , s = ()=>{
            var o;
            if (t.default)
                return b("span", {
                    class: H("text"),
                    style: {
                        fontSize: Lt(e.textSize),
                        color: (o = e.textColor) != null ? o : e.color
                    }
                }, [t.default()])
        }
        ;
        return ()=>{
            const {type: o, vertical: i} = e;
            return b("div", {
                class: H([o, {
                    vertical: i
                }]),
                "aria-live": "polite",
                "aria-busy": !0
            }, [r(), s()])
        }
    }
});
const Zt = se(Gt)
  , Ze = {
    show: Boolean,
    zIndex: N,
    overlay: I,
    duration: N,
    teleport: [String, Object],
    lockScroll: I,
    lazyRender: I,
    beforeClose: Function,
    overlayStyle: Object,
    overlayClass: ee,
    transitionAppear: Boolean,
    closeOnClickOverlay: I
}
  , Ur = Object.keys(Ze);
function Qt(e, t) {
    return e > t ? "horizontal" : t > e ? "vertical" : ""
}
function en() {
    const e = R(0)
      , t = R(0)
      , n = R(0)
      , r = R(0)
      , s = R(0)
      , o = R(0)
      , i = R("")
      , c = ()=>i.value === "vertical"
      , h = ()=>i.value === "horizontal"
      , l = ()=>{
        n.value = 0,
        r.value = 0,
        s.value = 0,
        o.value = 0,
        i.value = ""
    }
    ;
    return {
        move: y=>{
            const m = y.touches[0];
            n.value = (m.clientX < 0 ? 0 : m.clientX) - e.value,
            r.value = m.clientY - t.value,
            s.value = Math.abs(n.value),
            o.value = Math.abs(r.value);
            const f = 10;
            (!i.value || s.value < f && o.value < f) && (i.value = Qt(s.value, o.value))
        }
        ,
        start: y=>{
            l(),
            e.value = y.touches[0].clientX,
            t.value = y.touches[0].clientY
        }
        ,
        reset: l,
        startX: e,
        startY: t,
        deltaX: n,
        deltaY: r,
        offsetX: s,
        offsetY: o,
        direction: i,
        isVertical: c,
        isHorizontal: h
    }
}
let j = 0;
const ve = "van-overflow-hidden";
function tn(e, t) {
    const n = en()
      , r = "01"
      , s = "10"
      , o = u=>{
        n.move(u);
        const d = n.deltaY.value > 0 ? s : r
          , y = Ft(u.target, e.value)
          , {scrollHeight: m, offsetHeight: f, scrollTop: p} = y;
        let E = "11";
        p === 0 ? E = f >= m ? "00" : "01" : p + f >= m && (E = "10"),
        E !== "11" && n.isVertical() && !(parseInt(E, 2) & parseInt(d, 2)) && We(u, !0)
    }
      , i = ()=>{
        document.addEventListener("touchstart", n.start),
        document.addEventListener("touchmove", o, {
            passive: !1
        }),
        j || document.body.classList.add(ve),
        j++
    }
      , c = ()=>{
        j && (document.removeEventListener("touchstart", n.start),
        document.removeEventListener("touchmove", o),
        j--,
        j || document.body.classList.remove(ve))
    }
      , h = ()=>t() && i()
      , l = ()=>t() && c();
    It(h),
    He(l),
    Rt(l),
    F(t, u=>{
        u ? i() : c()
    }
    )
}
function Qe(e) {
    const t = R(!1);
    return F(e, n=>{
        n && (t.value = n)
    }
    , {
        immediate: !0
    }),
    n=>()=>t.value ? n() : null
}
const [nn,rn] = re("overlay")
  , sn = {
    show: Boolean,
    zIndex: N,
    duration: N,
    className: ee,
    lockScroll: I,
    lazyRender: I,
    customStyle: Object
};
var on = ne({
    name: nn,
    props: sn,
    setup(e, {slots: t}) {
        const n = R()
          , r = Qe(()=>e.show || !e.lazyRender)
          , s = i=>{
            e.lockScroll && We(i, !0)
        }
          , o = r(()=>{
            var i;
            const c = k(Ut(e.zIndex), e.customStyle);
            return ye(e.duration) && (c.animationDuration = `${e.duration}s`),
            qe(b("div", {
                ref: n,
                style: c,
                class: [rn(), e.className]
            }, [(i = t.default) == null ? void 0 : i.call(t)]), [[Je, e.show]])
        }
        );
        return Xe("touchmove", s, {
            target: n
        }),
        ()=>b($e, {
            name: "van-fade",
            appear: !0
        }, {
            default: o
        })
    }
});
const an = se(on)
  , cn = k({}, Ze, {
    round: Boolean,
    position: B("center"),
    closeIcon: B("cross"),
    closeable: Boolean,
    transition: String,
    iconPrefix: String,
    closeOnPopstate: Boolean,
    closeIconPosition: B("top-right"),
    safeAreaInsetTop: Boolean,
    safeAreaInsetBottom: Boolean
})
  , [ln,Te] = re("popup");
var un = ne({
    name: ln,
    inheritAttrs: !1,
    props: cn,
    emits: ["open", "close", "opened", "closed", "keydown", "update:show", "clickOverlay", "clickCloseIcon"],
    setup(e, {emit: t, attrs: n, slots: r}) {
        let s, o;
        const i = R()
          , c = R()
          , h = Qe(()=>e.show || !e.lazyRender)
          , l = Me(()=>{
            const O = {
                zIndex: i.value
            };
            if (ye(e.duration)) {
                const T = e.position === "center" ? "animationDuration" : "transitionDuration";
                O[T] = `${e.duration}s`
            }
            return O
        }
        )
          , u = ()=>{
            s || (s = !0,
            i.value = e.zIndex !== void 0 ? +e.zIndex : zt(),
            t("open"))
        }
          , d = ()=>{
            s && Kt(e.beforeClose, {
                done() {
                    s = !1,
                    t("close"),
                    t("update:show", !1)
                }
            })
        }
          , y = O=>{
            t("clickOverlay", O),
            e.closeOnClickOverlay && d()
        }
          , m = ()=>{
            if (e.overlay)
                return b(an, {
                    show: e.show,
                    class: e.overlayClass,
                    zIndex: i.value,
                    duration: e.duration,
                    customStyle: e.overlayStyle,
                    role: e.closeOnClickOverlay ? "button" : void 0,
                    tabindex: e.closeOnClickOverlay ? 0 : void 0,
                    onClick: y
                }, {
                    default: r["overlay-content"]
                })
        }
          , f = O=>{
            t("clickCloseIcon", O),
            d()
        }
          , p = ()=>{
            if (e.closeable)
                return b(Ye, {
                    role: "button",
                    tabindex: 0,
                    name: e.closeIcon,
                    class: [Te("close-icon", e.closeIconPosition), Mt],
                    classPrefix: e.iconPrefix,
                    onClick: f
                }, null)
        }
          , E = ()=>t("opened")
          , g = ()=>t("closed")
          , v = O=>t("keydown", O)
          , D = h(()=>{
            var O;
            const {round: T, position: W, safeAreaInsetTop: le, safeAreaInsetBottom: gt} = e;
            return qe(b("div", me({
                ref: c,
                style: l.value,
                role: "dialog",
                tabindex: 0,
                class: [Te({
                    round: T,
                    [W]: W
                }), {
                    "van-safe-area-top": le,
                    "van-safe-area-bottom": gt
                }],
                onKeydown: v
            }, n), [(O = r.default) == null ? void 0 : O.call(r), p()]), [[Je, e.show]])
        }
        )
          , V = ()=>{
            const {position: O, transition: T, transitionAppear: W} = e
              , le = O === "center" ? "van-fade" : `van-popup-slide-${O}`;
            return b($e, {
                name: T || le,
                appear: W,
                onAfterEnter: E,
                onAfterLeave: g
            }, {
                default: D
            })
        }
        ;
        return F(()=>e.show, O=>{
            O && !s && (u(),
            n.tabindex === 0 && Tt(()=>{
                var T;
                (T = c.value) == null || T.focus()
            }
            )),
            !O && s && (s = !1,
            t("close"))
        }
        ),
        Ge({
            popupRef: c
        }),
        tn(c, ()=>e.show && e.lockScroll),
        Xe("popstate", ()=>{
            e.closeOnPopstate && (d(),
            o = !1)
        }
        ),
        Ke(()=>{
            e.show && u()
        }
        ),
        Ct(()=>{
            o && (t("update:show", !0),
            o = !1)
        }
        ),
        He(()=>{
            e.show && e.teleport && (d(),
            o = !0)
        }
        ),
        xt(jt, ()=>e.show),
        ()=>e.teleport ? b(At, {
            to: e.teleport
        }, {
            default: ()=>[m(), V()]
        }) : b(vt, null, [m(), V()])
    }
});
const fn = se(un);
let z = 0;
function dn(e) {
    e ? (z || document.body.classList.add("van-toast--unclickable"),
    z++) : z && (z--,
    z || document.body.classList.remove("van-toast--unclickable"))
}
const [hn,L] = re("toast")
  , pn = ["show", "overlay", "teleport", "transition", "overlayClass", "overlayStyle", "closeOnClickOverlay"]
  , mn = {
    icon: String,
    show: Boolean,
    type: B("text"),
    overlay: Boolean,
    message: N,
    iconSize: N,
    duration: Ht(2e3),
    position: B("middle"),
    teleport: [String, Object],
    wordBreak: String,
    className: ee,
    iconPrefix: String,
    transition: B("van-fade"),
    loadingType: String,
    forbidClick: Boolean,
    overlayClass: ee,
    overlayStyle: Object,
    closeOnClick: Boolean,
    closeOnClickOverlay: Boolean
};
var et = ne({
    name: hn,
    props: mn,
    emits: ["update:show"],
    setup(e, {emit: t, slots: n}) {
        let r, s = !1;
        const o = ()=>{
            const d = e.show && e.forbidClick;
            s !== d && (s = d,
            dn(s))
        }
          , i = d=>t("update:show", d)
          , c = ()=>{
            e.closeOnClick && i(!1)
        }
          , h = ()=>clearTimeout(r)
          , l = ()=>{
            const {icon: d, type: y, iconSize: m, iconPrefix: f, loadingType: p} = e;
            if (d || y === "success" || y === "fail")
                return b(Ye, {
                    name: d || y,
                    size: m,
                    class: L("icon"),
                    classPrefix: f
                }, null);
            if (y === "loading")
                return b(Zt, {
                    class: L("loading"),
                    size: m,
                    type: p
                }, null)
        }
          , u = ()=>{
            const {type: d, message: y} = e;
            if (n.message)
                return b("div", {
                    class: L("text")
                }, [n.message()]);
            if (ye(y) && y !== "")
                return d === "html" ? b("div", {
                    key: 0,
                    class: L("text"),
                    innerHTML: String(y)
                }, null) : b("div", {
                    class: L("text")
                }, [y])
        }
        ;
        return F(()=>[e.show, e.forbidClick], o),
        F(()=>[e.show, e.type, e.message, e.duration], ()=>{
            h(),
            e.show && e.duration > 0 && (r = setTimeout(()=>{
                i(!1)
            }
            , e.duration))
        }
        ),
        Ke(o),
        Pt(o),
        ()=>b(fn, me({
            class: [L([e.position, e.wordBreak === "normal" ? "break-normal" : e.wordBreak, {
                [e.type]: !e.icon
            }]), e.className],
            lockScroll: !1,
            onClick: c,
            onClosed: h,
            "onUpdate:show": i
        }, $t(e, pn)), {
            default: ()=>[l(), u()]
        })
    }
});
function yn() {
    const e = kt({
        show: !1
    })
      , t = s=>{
        e.show = s
    }
      , n = s=>{
        k(e, s, {
            transitionAppear: !0
        }),
        t(!0)
    }
      , r = ()=>t(!1);
    return Ge({
        open: n,
        close: r,
        toggle: t
    }),
    {
        open: n,
        close: r,
        state: e,
        toggle: t
    }
}
function wn(e) {
    const t = Nt(e)
      , n = document.createElement("div");
    return document.body.appendChild(n),
    {
        instance: t.mount(n),
        unmount() {
            t.unmount(),
            document.body.removeChild(n)
        }
    }
}
const bn = {
    icon: "",
    type: "text",
    message: "",
    className: "",
    overlay: !1,
    onClose: void 0,
    onOpened: void 0,
    duration: 2e3,
    teleport: "body",
    iconSize: void 0,
    iconPrefix: void 0,
    position: "middle",
    transition: "van-fade",
    forbidClick: !1,
    loadingType: void 0,
    overlayClass: "",
    overlayStyle: void 0,
    closeOnClick: !1,
    closeOnClickOverlay: !1
};
let X = []
  , En = !1
  , Pe = k({}, bn);
const On = new Map;
function tt(e) {
    return Jt(e) ? e : {
        message: e
    }
}
function Sn() {
    const {instance: e, unmount: t} = wn({
        setup() {
            const n = R("")
              , {open: r, state: s, close: o, toggle: i} = yn()
              , c = ()=>{}
              , h = ()=>b(et, me(s, {
                onClosed: c,
                "onUpdate:show": i
            }), null);
            return F(n, l=>{
                s.message = l
            }
            ),
            ze().render = h,
            {
                open: r,
                close: o,
                message: n
            }
        }
    });
    return e
}
function gn() {
    if (!X.length || En) {
        const e = Sn();
        X.push(e)
    }
    return X[X.length - 1]
}
function nt(e={}) {
    if (!qt)
        return {};
    const t = gn()
      , n = tt(e);
    return t.open(k({}, Pe, On.get(n.type || Pe.type), n)),
    t
}
const we = e=>t=>nt(k({
    type: e
}, tt(t)))
  , jr = we("loading")
  , zr = we("success")
  , Mr = we("fail");
se(et);
function rt(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: st} = Object.prototype
  , {getPrototypeOf: be} = Object
  , Ee = (e=>t=>{
    const n = st.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , A = e=>(e = e.toLowerCase(),
t=>Ee(t) === e)
  , oe = e=>t=>typeof t === e
  , {isArray: U} = Array
  , $ = oe("undefined");
function Rn(e) {
    return e !== null && !$(e) && e.constructor !== null && !$(e.constructor) && _(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const ot = A("ArrayBuffer");
function Cn(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ot(e.buffer),
    t
}
const xn = oe("string")
  , _ = oe("function")
  , it = oe("number")
  , Oe = e=>e !== null && typeof e == "object"
  , An = e=>e === !0 || e === !1
  , Y = e=>{
    if (Ee(e) !== "object")
        return !1;
    const t = be(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
  , vn = A("Date")
  , Tn = A("File")
  , Pn = A("Blob")
  , Nn = A("FileList")
  , kn = e=>Oe(e) && _(e.pipe)
  , Bn = e=>{
    const t = "[object FormData]";
    return e && (typeof FormData == "function" && e instanceof FormData || st.call(e) === t || _(e.toString) && e.toString() === t)
}
  , _n = A("URLSearchParams")
  , Dn = e=>e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function J(e, t, {allOwnKeys: n=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let r, s;
    if (typeof e != "object" && (e = [e]),
    U(e))
        for (r = 0,
        s = e.length; r < s; r++)
            t.call(null, e[r], r, e);
    else {
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , i = o.length;
        let c;
        for (r = 0; r < i; r++)
            c = o[r],
            t.call(null, e[c], c, e)
    }
}
function at(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length, s;
    for (; r-- > 0; )
        if (s = n[r],
        t === s.toLowerCase())
            return s;
    return null
}
const ct = typeof self > "u" ? typeof global > "u" ? globalThis : global : self
  , lt = e=>!$(e) && e !== ct;
function de() {
    const {caseless: e} = lt(this) && this || {}
      , t = {}
      , n = (r,s)=>{
        const o = e && at(t, s) || s;
        Y(t[o]) && Y(r) ? t[o] = de(t[o], r) : Y(r) ? t[o] = de({}, r) : U(r) ? t[o] = r.slice() : t[o] = r
    }
    ;
    for (let r = 0, s = arguments.length; r < s; r++)
        arguments[r] && J(arguments[r], n);
    return t
}
const Ln = (e,t,n,{allOwnKeys: r}={})=>(J(t, (s,o)=>{
    n && _(s) ? e[o] = rt(s, n) : e[o] = s
}
, {
    allOwnKeys: r
}),
e)
  , In = e=>(e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
  , Fn = (e,t,n,r)=>{
    e.prototype = Object.create(t.prototype, r),
    e.prototype.constructor = e,
    Object.defineProperty(e, "super", {
        value: t.prototype
    }),
    n && Object.assign(e.prototype, n)
}
  , Un = (e,t,n,r)=>{
    let s, o, i;
    const c = {};
    if (t = t || {},
    e == null)
        return t;
    do {
        for (s = Object.getOwnPropertyNames(e),
        o = s.length; o-- > 0; )
            i = s[o],
            (!r || r(i, e, t)) && !c[i] && (t[i] = e[i],
            c[i] = !0);
        e = n !== !1 && be(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}
  , jn = (e,t,n)=>{
    e = String(e),
    (n === void 0 || n > e.length) && (n = e.length),
    n -= t.length;
    const r = e.indexOf(t, n);
    return r !== -1 && r === n
}
  , zn = e=>{
    if (!e)
        return null;
    if (U(e))
        return e;
    let t = e.length;
    if (!it(t))
        return null;
    const n = new Array(t);
    for (; t-- > 0; )
        n[t] = e[t];
    return n
}
  , Mn = (e=>t=>e && t instanceof e)(typeof Uint8Array < "u" && be(Uint8Array))
  , Hn = (e,t)=>{
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
        const o = s.value;
        t.call(e, o[0], o[1])
    }
}
  , $n = (e,t)=>{
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; )
        r.push(n);
    return r
}
  , qn = A("HTMLFormElement")
  , Jn = e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, function(n, r, s) {
    return r.toUpperCase() + s
})
  , Ne = (({hasOwnProperty: e})=>(t,n)=>e.call(t, n))(Object.prototype)
  , Kn = A("RegExp")
  , ut = (e,t)=>{
    const n = Object.getOwnPropertyDescriptors(e)
      , r = {};
    J(n, (s,o)=>{
        t(s, o, e) !== !1 && (r[o] = s)
    }
    ),
    Object.defineProperties(e, r)
}
  , Vn = e=>{
    ut(e, (t,n)=>{
        if (_(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
            return !1;
        const r = e[n];
        if (!!_(r)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = ()=>{
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            )
        }
    }
    )
}
  , Wn = (e,t)=>{
    const n = {}
      , r = s=>{
        s.forEach(o=>{
            n[o] = !0
        }
        )
    }
    ;
    return U(e) ? r(e) : r(String(e).split(t)),
    n
}
  , Xn = ()=>{}
  , Yn = (e,t)=>(e = +e,
Number.isFinite(e) ? e : t)
  , Gn = e=>{
    const t = new Array(10)
      , n = (r,s)=>{
        if (Oe(r)) {
            if (t.indexOf(r) >= 0)
                return;
            if (!("toJSON"in r)) {
                t[s] = r;
                const o = U(r) ? [] : {};
                return J(r, (i,c)=>{
                    const h = n(i, s + 1);
                    !$(h) && (o[c] = h)
                }
                ),
                t[s] = void 0,
                o
            }
        }
        return r
    }
    ;
    return n(e, 0)
}
  , a = {
    isArray: U,
    isArrayBuffer: ot,
    isBuffer: Rn,
    isFormData: Bn,
    isArrayBufferView: Cn,
    isString: xn,
    isNumber: it,
    isBoolean: An,
    isObject: Oe,
    isPlainObject: Y,
    isUndefined: $,
    isDate: vn,
    isFile: Tn,
    isBlob: Pn,
    isRegExp: Kn,
    isFunction: _,
    isStream: kn,
    isURLSearchParams: _n,
    isTypedArray: Mn,
    isFileList: Nn,
    forEach: J,
    merge: de,
    extend: Ln,
    trim: Dn,
    stripBOM: In,
    inherits: Fn,
    toFlatObject: Un,
    kindOf: Ee,
    kindOfTest: A,
    endsWith: jn,
    toArray: zn,
    forEachEntry: Hn,
    matchAll: $n,
    isHTMLForm: qn,
    hasOwnProperty: Ne,
    hasOwnProp: Ne,
    reduceDescriptors: ut,
    freezeMethods: Vn,
    toObjectSet: Wn,
    toCamelCase: Jn,
    noop: Xn,
    toFiniteNumber: Yn,
    findKey: at,
    global: ct,
    isContextDefined: lt,
    toJSONObject: Gn
};
function w(e, t, n, r, s) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && (this.response = s)
}
a.inherits(w, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: a.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const ft = w.prototype
  , dt = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e=>{
    dt[e] = {
        value: e
    }
}
);
Object.defineProperties(w, dt);
Object.defineProperty(ft, "isAxiosError", {
    value: !0
});
w.from = (e,t,n,r,s,o)=>{
    const i = Object.create(ft);
    return a.toFlatObject(e, i, function(h) {
        return h !== Error.prototype
    }, c=>c !== "isAxiosError"),
    w.call(i, e.message, t, n, r, s),
    i.cause = e,
    i.name = e.name,
    o && Object.assign(i, o),
    i
}
;
var Zn = typeof self == "object" ? self.FormData : window.FormData;
const Qn = Zn;
function he(e) {
    return a.isPlainObject(e) || a.isArray(e)
}
function ht(e) {
    return a.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function ke(e, t, n) {
    return e ? e.concat(t).map(function(s, o) {
        return s = ht(s),
        !n && o ? "[" + s + "]" : s
    }).join(n ? "." : "") : t
}
function er(e) {
    return a.isArray(e) && !e.some(he)
}
const tr = a.toFlatObject(a, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});
function nr(e) {
    return e && a.isFunction(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]
}
function ie(e, t, n) {
    if (!a.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new (Qn || FormData),
    n = a.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(p, E) {
        return !a.isUndefined(E[p])
    });
    const r = n.metaTokens
      , s = n.visitor || u
      , o = n.dots
      , i = n.indexes
      , h = (n.Blob || typeof Blob < "u" && Blob) && nr(t);
    if (!a.isFunction(s))
        throw new TypeError("visitor must be a function");
    function l(f) {
        if (f === null)
            return "";
        if (a.isDate(f))
            return f.toISOString();
        if (!h && a.isBlob(f))
            throw new w("Blob is not supported. Use a Buffer instead.");
        return a.isArrayBuffer(f) || a.isTypedArray(f) ? h && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f
    }
    function u(f, p, E) {
        let g = f;
        if (f && !E && typeof f == "object") {
            if (a.endsWith(p, "{}"))
                p = r ? p : p.slice(0, -2),
                f = JSON.stringify(f);
            else if (a.isArray(f) && er(f) || a.isFileList(f) || a.endsWith(p, "[]") && (g = a.toArray(f)))
                return p = ht(p),
                g.forEach(function(D, V) {
                    !(a.isUndefined(D) || D === null) && t.append(i === !0 ? ke([p], V, o) : i === null ? p : p + "[]", l(D))
                }),
                !1
        }
        return he(f) ? !0 : (t.append(ke(E, p, o), l(f)),
        !1)
    }
    const d = []
      , y = Object.assign(tr, {
        defaultVisitor: u,
        convertValue: l,
        isVisitable: he
    });
    function m(f, p) {
        if (!a.isUndefined(f)) {
            if (d.indexOf(f) !== -1)
                throw Error("Circular reference detected in " + p.join("."));
            d.push(f),
            a.forEach(f, function(g, v) {
                (!(a.isUndefined(g) || g === null) && s.call(t, g, a.isString(v) ? v.trim() : v, p, y)) === !0 && m(g, p ? p.concat(v) : [v])
            }),
            d.pop()
        }
    }
    if (!a.isObject(e))
        throw new TypeError("data must be an object");
    return m(e),
    t
}
function Be(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}
function Se(e, t) {
    this._pairs = [],
    e && ie(e, this, t)
}
const pt = Se.prototype;
pt.append = function(t, n) {
    this._pairs.push([t, n])
}
;
pt.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, Be)
    }
    : Be;
    return this._pairs.map(function(s) {
        return n(s[0]) + "=" + n(s[1])
    }, "").join("&")
}
;
function rr(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function mt(e, t, n) {
    if (!t)
        return e;
    const r = n && n.encode || rr
      , s = n && n.serialize;
    let o;
    if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new Se(t,n).toString(r),
    o) {
        const i = e.indexOf("#");
        i !== -1 && (e = e.slice(0, i)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + o
    }
    return e
}
class sr {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        a.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const _e = sr
  , yt = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , or = typeof URLSearchParams < "u" ? URLSearchParams : Se
  , ir = FormData
  , ar = (()=>{
    let e;
    return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u"
}
)()
  , C = {
    isBrowser: !0,
    classes: {
        URLSearchParams: or,
        FormData: ir,
        Blob
    },
    isStandardBrowserEnv: ar,
    protocols: ["http", "https", "file", "blob", "url", "data"]
};
function cr(e, t) {
    return ie(e, new C.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, s, o) {
            return C.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")),
            !1) : o.defaultVisitor.apply(this, arguments)
        }
    }, t))
}
function lr(e) {
    return a.matchAll(/\w+|\[(\w*)]/g, e).map(t=>t[0] === "[]" ? "" : t[1] || t[0])
}
function ur(e) {
    const t = {}
      , n = Object.keys(e);
    let r;
    const s = n.length;
    let o;
    for (r = 0; r < s; r++)
        o = n[r],
        t[o] = e[o];
    return t
}
function wt(e) {
    function t(n, r, s, o) {
        let i = n[o++];
        const c = Number.isFinite(+i)
          , h = o >= n.length;
        return i = !i && a.isArray(s) ? s.length : i,
        h ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r,
        !c) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []),
        t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = ur(s[i])),
        !c)
    }
    if (a.isFormData(e) && a.isFunction(e.entries)) {
        const n = {};
        return a.forEachEntry(e, (r,s)=>{
            t(lr(r), s, n, 0)
        }
        ),
        n
    }
    return null
}
const fr = {
    "Content-Type": void 0
};
function dr(e, t, n) {
    if (a.isString(e))
        try {
            return (t || JSON.parse)(e),
            a.trim(e)
        } catch (r) {
            if (r.name !== "SyntaxError")
                throw r
        }
    return (n || JSON.stringify)(e)
}
const ae = {
    transitional: yt,
    adapter: ["xhr", "http"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || ""
          , s = r.indexOf("application/json") > -1
          , o = a.isObject(t);
        if (o && a.isHTMLForm(t) && (t = new FormData(t)),
        a.isFormData(t))
            return s && s ? JSON.stringify(wt(t)) : t;
        if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t))
            return t;
        if (a.isArrayBufferView(t))
            return t.buffer;
        if (a.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            t.toString();
        let c;
        if (o) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return cr(t, this.formSerializer).toString();
            if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const h = this.env && this.env.FormData;
                return ie(c ? {
                    "files[]": t
                } : t, h && new h, this.formSerializer)
            }
        }
        return o || s ? (n.setContentType("application/json", !1),
        dr(t)) : t
    }
    ],
    transformResponse: [function(t) {
        const n = this.transitional || ae.transitional
          , r = n && n.forcedJSONParsing
          , s = this.responseType === "json";
        if (t && a.isString(t) && (r && !this.responseType || s)) {
            const i = !(n && n.silentJSONParsing) && s;
            try {
                return JSON.parse(t)
            } catch (c) {
                if (i)
                    throw c.name === "SyntaxError" ? w.from(c, w.ERR_BAD_RESPONSE, this, null, this.response) : c
            }
        }
        return t
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: C.classes.FormData,
        Blob: C.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*"
        }
    }
};
a.forEach(["delete", "get", "head"], function(t) {
    ae.headers[t] = {}
});
a.forEach(["post", "put", "patch"], function(t) {
    ae.headers[t] = a.merge(fr)
});
const ge = ae
  , hr = a.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , pr = e=>{
    const t = {};
    let n, r, s;
    return e && e.split(`
`).forEach(function(i) {
        s = i.indexOf(":"),
        n = i.substring(0, s).trim().toLowerCase(),
        r = i.substring(s + 1).trim(),
        !(!n || t[n] && hr[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
    }),
    t
}
  , De = Symbol("internals");
function M(e) {
    return e && String(e).trim().toLowerCase()
}
function G(e) {
    return e === !1 || e == null ? e : a.isArray(e) ? e.map(G) : String(e)
}
function mr(e) {
    const t = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e); )
        t[r[1]] = r[2];
    return t
}
function yr(e) {
    return /^[-_a-zA-Z]+$/.test(e.trim())
}
function Le(e, t, n, r) {
    if (a.isFunction(r))
        return r.call(this, t, n);
    if (!!a.isString(t)) {
        if (a.isString(r))
            return t.indexOf(r) !== -1;
        if (a.isRegExp(r))
            return r.test(t)
    }
}
function wr(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t,n,r)=>n.toUpperCase() + r)
}
function br(e, t) {
    const n = a.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r=>{
        Object.defineProperty(e, r + n, {
            value: function(s, o, i) {
                return this[r].call(this, t, s, o, i)
            },
            configurable: !0
        })
    }
    )
}
class ce {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const s = this;
        function o(c, h, l) {
            const u = M(h);
            if (!u)
                throw new Error("header name must be a non-empty string");
            const d = a.findKey(s, u);
            (!d || s[d] === void 0 || l === !0 || l === void 0 && s[d] !== !1) && (s[d || h] = G(c))
        }
        const i = (c,h)=>a.forEach(c, (l,u)=>o(l, u, h));
        return a.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : a.isString(t) && (t = t.trim()) && !yr(t) ? i(pr(t), n) : t != null && o(n, t, r),
        this
    }
    get(t, n) {
        if (t = M(t),
        t) {
            const r = a.findKey(this, t);
            if (r) {
                const s = this[r];
                if (!n)
                    return s;
                if (n === !0)
                    return mr(s);
                if (a.isFunction(n))
                    return n.call(this, s, r);
                if (a.isRegExp(n))
                    return n.exec(s);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = M(t),
        t) {
            const r = a.findKey(this, t);
            return !!(r && (!n || Le(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let s = !1;
        function o(i) {
            if (i = M(i),
            i) {
                const c = a.findKey(r, i);
                c && (!n || Le(r, r[c], c, n)) && (delete r[c],
                s = !0)
            }
        }
        return a.isArray(t) ? t.forEach(o) : o(t),
        s
    }
    clear() {
        return Object.keys(this).forEach(this.delete.bind(this))
    }
    normalize(t) {
        const n = this
          , r = {};
        return a.forEach(this, (s,o)=>{
            const i = a.findKey(r, o);
            if (i) {
                n[i] = G(s),
                delete n[o];
                return
            }
            const c = t ? wr(o) : String(o).trim();
            c !== o && delete n[o],
            n[c] = G(s),
            r[c] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return a.forEach(this, (r,s)=>{
            r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r)
        }
        ),
        n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t,n])=>t + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(s=>r.set(s)),
        r
    }
    static accessor(t) {
        const r = (this[De] = this[De] = {
            accessors: {}
        }).accessors
          , s = this.prototype;
        function o(i) {
            const c = M(i);
            r[c] || (br(s, i),
            r[c] = !0)
        }
        return a.isArray(t) ? t.forEach(o) : o(t),
        this
    }
}
ce.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent"]);
a.freezeMethods(ce.prototype);
a.freezeMethods(ce);
const x = ce;
function ue(e, t) {
    const n = this || ge
      , r = t || n
      , s = x.from(r.headers);
    let o = r.data;
    return a.forEach(e, function(c) {
        o = c.call(n, o, s.normalize(), t ? t.status : void 0)
    }),
    s.normalize(),
    o
}
function bt(e) {
    return !!(e && e.__CANCEL__)
}
function K(e, t, n) {
    w.call(this, e == null ? "canceled" : e, w.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
a.inherits(K, w, {
    __CANCEL__: !0
});
const Er = null;
function Or(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new w("Request failed with status code " + n.status,[w.ERR_BAD_REQUEST, w.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
const Sr = C.isStandardBrowserEnv ? function() {
    return {
        write: function(n, r, s, o, i, c) {
            const h = [];
            h.push(n + "=" + encodeURIComponent(r)),
            a.isNumber(s) && h.push("expires=" + new Date(s).toGMTString()),
            a.isString(o) && h.push("path=" + o),
            a.isString(i) && h.push("domain=" + i),
            c === !0 && h.push("secure"),
            document.cookie = h.join("; ")
        },
        read: function(n) {
            const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
            return r ? decodeURIComponent(r[3]) : null
        },
        remove: function(n) {
            this.write(n, "", Date.now() - 864e5)
        }
    }
}() : function() {
    return {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}();
function gr(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function Rr(e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function Et(e, t) {
    return e && !gr(t) ? Rr(e, t) : t
}
const Cr = C.isStandardBrowserEnv ? function() {
    const t = /(msie|trident)/i.test(navigator.userAgent)
      , n = document.createElement("a");
    let r;
    function s(o) {
        let i = o;
        return t && (n.setAttribute("href", i),
        i = n.href),
        n.setAttribute("href", i),
        {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }
    return r = s(window.location.href),
    function(i) {
        const c = a.isString(i) ? s(i) : i;
        return c.protocol === r.protocol && c.host === r.host
    }
}() : function() {
    return function() {
        return !0
    }
}();
function xr(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
function Ar(e, t) {
    e = e || 10;
    const n = new Array(e)
      , r = new Array(e);
    let s = 0, o = 0, i;
    return t = t !== void 0 ? t : 1e3,
    function(h) {
        const l = Date.now()
          , u = r[o];
        i || (i = l),
        n[s] = h,
        r[s] = l;
        let d = o
          , y = 0;
        for (; d !== s; )
            y += n[d++],
            d = d % e;
        if (s = (s + 1) % e,
        s === o && (o = (o + 1) % e),
        l - i < t)
            return;
        const m = u && l - u;
        return m ? Math.round(y * 1e3 / m) : void 0
    }
}
function Ie(e, t) {
    let n = 0;
    const r = Ar(50, 250);
    return s=>{
        const o = s.loaded
          , i = s.lengthComputable ? s.total : void 0
          , c = o - n
          , h = r(c)
          , l = o <= i;
        n = o;
        const u = {
            loaded: o,
            total: i,
            progress: i ? o / i : void 0,
            bytes: c,
            rate: h || void 0,
            estimated: h && i && l ? (i - o) / h : void 0,
            event: s
        };
        u[t ? "download" : "upload"] = !0,
        e(u)
    }
}
const vr = typeof XMLHttpRequest < "u"
  , Tr = vr && function(e) {
    return new Promise(function(n, r) {
        let s = e.data;
        const o = x.from(e.headers).normalize()
          , i = e.responseType;
        let c;
        function h() {
            e.cancelToken && e.cancelToken.unsubscribe(c),
            e.signal && e.signal.removeEventListener("abort", c)
        }
        a.isFormData(s) && C.isStandardBrowserEnv && o.setContentType(!1);
        let l = new XMLHttpRequest;
        if (e.auth) {
            const m = e.auth.username || ""
              , f = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
            o.set("Authorization", "Basic " + btoa(m + ":" + f))
        }
        const u = Et(e.baseURL, e.url);
        l.open(e.method.toUpperCase(), mt(u, e.params, e.paramsSerializer), !0),
        l.timeout = e.timeout;
        function d() {
            if (!l)
                return;
            const m = x.from("getAllResponseHeaders"in l && l.getAllResponseHeaders())
              , p = {
                data: !i || i === "text" || i === "json" ? l.responseText : l.response,
                status: l.status,
                statusText: l.statusText,
                headers: m,
                config: e,
                request: l
            };
            Or(function(g) {
                n(g),
                h()
            }, function(g) {
                r(g),
                h()
            }, p),
            l = null
        }
        if ("onloadend"in l ? l.onloadend = d : l.onreadystatechange = function() {
            !l || l.readyState !== 4 || l.status === 0 && !(l.responseURL && l.responseURL.indexOf("file:") === 0) || setTimeout(d)
        }
        ,
        l.onabort = function() {
            !l || (r(new w("Request aborted",w.ECONNABORTED,e,l)),
            l = null)
        }
        ,
        l.onerror = function() {
            r(new w("Network Error",w.ERR_NETWORK,e,l)),
            l = null
        }
        ,
        l.ontimeout = function() {
            let f = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
            const p = e.transitional || yt;
            e.timeoutErrorMessage && (f = e.timeoutErrorMessage),
            r(new w(f,p.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,e,l)),
            l = null
        }
        ,
        C.isStandardBrowserEnv) {
            const m = (e.withCredentials || Cr(u)) && e.xsrfCookieName && Sr.read(e.xsrfCookieName);
            m && o.set(e.xsrfHeaderName, m)
        }
        s === void 0 && o.setContentType(null),
        "setRequestHeader"in l && a.forEach(o.toJSON(), function(f, p) {
            l.setRequestHeader(p, f)
        }),
        a.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials),
        i && i !== "json" && (l.responseType = e.responseType),
        typeof e.onDownloadProgress == "function" && l.addEventListener("progress", Ie(e.onDownloadProgress, !0)),
        typeof e.onUploadProgress == "function" && l.upload && l.upload.addEventListener("progress", Ie(e.onUploadProgress)),
        (e.cancelToken || e.signal) && (c = m=>{
            !l || (r(!m || m.type ? new K(null,e,l) : m),
            l.abort(),
            l = null)
        }
        ,
        e.cancelToken && e.cancelToken.subscribe(c),
        e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
        const y = xr(u);
        if (y && C.protocols.indexOf(y) === -1) {
            r(new w("Unsupported protocol " + y + ":",w.ERR_BAD_REQUEST,e));
            return
        }
        l.send(s || null)
    }
    )
}
  , Z = {
    http: Er,
    xhr: Tr
};
a.forEach(Z, (e,t)=>{
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
);
const Pr = {
    getAdapter: e=>{
        e = a.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, r;
        for (let s = 0; s < t && (n = e[s],
        !(r = a.isString(n) ? Z[n.toLowerCase()] : n)); s++)
            ;
        if (!r)
            throw r === !1 ? new w(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT") : new Error(a.hasOwnProp(Z, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`);
        if (!a.isFunction(r))
            throw new TypeError("adapter is not a function");
        return r
    }
    ,
    adapters: Z
};
function fe(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new K
}
function Fe(e) {
    return fe(e),
    e.headers = x.from(e.headers),
    e.data = ue.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Pr.getAdapter(e.adapter || ge.adapter)(e).then(function(r) {
        return fe(e),
        r.data = ue.call(e, e.transformResponse, r),
        r.headers = x.from(r.headers),
        r
    }, function(r) {
        return bt(r) || (fe(e),
        r && r.response && (r.response.data = ue.call(e, e.transformResponse, r.response),
        r.response.headers = x.from(r.response.headers))),
        Promise.reject(r)
    })
}
const Ue = e=>e instanceof x ? e.toJSON() : e;
function q(e, t) {
    t = t || {};
    const n = {};
    function r(l, u, d) {
        return a.isPlainObject(l) && a.isPlainObject(u) ? a.merge.call({
            caseless: d
        }, l, u) : a.isPlainObject(u) ? a.merge({}, u) : a.isArray(u) ? u.slice() : u
    }
    function s(l, u, d) {
        if (a.isUndefined(u)) {
            if (!a.isUndefined(l))
                return r(void 0, l, d)
        } else
            return r(l, u, d)
    }
    function o(l, u) {
        if (!a.isUndefined(u))
            return r(void 0, u)
    }
    function i(l, u) {
        if (a.isUndefined(u)) {
            if (!a.isUndefined(l))
                return r(void 0, l)
        } else
            return r(void 0, u)
    }
    function c(l, u, d) {
        if (d in t)
            return r(l, u);
        if (d in e)
            return r(void 0, l)
    }
    const h = {
        url: o,
        method: o,
        data: o,
        baseURL: i,
        transformRequest: i,
        transformResponse: i,
        paramsSerializer: i,
        timeout: i,
        timeoutMessage: i,
        withCredentials: i,
        adapter: i,
        responseType: i,
        xsrfCookieName: i,
        xsrfHeaderName: i,
        onUploadProgress: i,
        onDownloadProgress: i,
        decompress: i,
        maxContentLength: i,
        maxBodyLength: i,
        beforeRedirect: i,
        transport: i,
        httpAgent: i,
        httpsAgent: i,
        cancelToken: i,
        socketPath: i,
        responseEncoding: i,
        validateStatus: c,
        headers: (l,u)=>s(Ue(l), Ue(u), !0)
    };
    return a.forEach(Object.keys(e).concat(Object.keys(t)), function(u) {
        const d = h[u] || s
          , y = d(e[u], t[u], u);
        a.isUndefined(y) && d !== c || (n[u] = y)
    }),
    n
}
const Ot = "1.2.0"
  , Re = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e,t)=>{
    Re[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
);
const je = {};
Re.transitional = function(t, n, r) {
    function s(o, i) {
        return "[Axios v" + Ot + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "")
    }
    return (o,i,c)=>{
        if (t === !1)
            throw new w(s(i, " has been removed" + (n ? " in " + n : "")),w.ERR_DEPRECATED);
        return n && !je[i] && (je[i] = !0,
        console.warn(s(i, " has been deprecated since v" + n + " and will be removed in the near future"))),
        t ? t(o, i, c) : !0
    }
}
;
function Nr(e, t, n) {
    if (typeof e != "object")
        throw new w("options must be an object",w.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let s = r.length;
    for (; s-- > 0; ) {
        const o = r[s]
          , i = t[o];
        if (i) {
            const c = e[o]
              , h = c === void 0 || i(c, o, e);
            if (h !== !0)
                throw new w("option " + o + " must be " + h,w.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new w("Unknown option " + o,w.ERR_BAD_OPTION)
    }
}
const pe = {
    assertOptions: Nr,
    validators: Re
}
  , P = pe.validators;
class te {
    constructor(t) {
        this.defaults = t,
        this.interceptors = {
            request: new _e,
            response: new _e
        }
    }
    request(t, n) {
        typeof t == "string" ? (n = n || {},
        n.url = t) : n = t || {},
        n = q(this.defaults, n);
        const {transitional: r, paramsSerializer: s, headers: o} = n;
        r !== void 0 && pe.assertOptions(r, {
            silentJSONParsing: P.transitional(P.boolean),
            forcedJSONParsing: P.transitional(P.boolean),
            clarifyTimeoutError: P.transitional(P.boolean)
        }, !1),
        s !== void 0 && pe.assertOptions(s, {
            encode: P.function,
            serialize: P.function
        }, !0),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let i;
        i = o && a.merge(o.common, o[n.method]),
        i && a.forEach(["delete", "get", "head", "post", "put", "patch", "common"], f=>{
            delete o[f]
        }
        ),
        n.headers = x.concat(i, o);
        const c = [];
        let h = !0;
        this.interceptors.request.forEach(function(p) {
            typeof p.runWhen == "function" && p.runWhen(n) === !1 || (h = h && p.synchronous,
            c.unshift(p.fulfilled, p.rejected))
        });
        const l = [];
        this.interceptors.response.forEach(function(p) {
            l.push(p.fulfilled, p.rejected)
        });
        let u, d = 0, y;
        if (!h) {
            const f = [Fe.bind(this), void 0];
            for (f.unshift.apply(f, c),
            f.push.apply(f, l),
            y = f.length,
            u = Promise.resolve(n); d < y; )
                u = u.then(f[d++], f[d++]);
            return u
        }
        y = c.length;
        let m = n;
        for (d = 0; d < y; ) {
            const f = c[d++]
              , p = c[d++];
            try {
                m = f(m)
            } catch (E) {
                p.call(this, E);
                break
            }
        }
        try {
            u = Fe.call(this, m)
        } catch (f) {
            return Promise.reject(f)
        }
        for (d = 0,
        y = l.length; d < y; )
            u = u.then(l[d++], l[d++]);
        return u
    }
    getUri(t) {
        t = q(this.defaults, t);
        const n = Et(t.baseURL, t.url);
        return mt(n, t.params, t.paramsSerializer)
    }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
    te.prototype[t] = function(n, r) {
        return this.request(q(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
a.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(o, i, c) {
            return this.request(q(c || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: o,
                data: i
            }))
        }
    }
    te.prototype[t] = n(),
    te.prototype[t + "Form"] = n(!0)
});
const Q = te;
class Ce {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(o) {
            n = o
        }
        );
        const r = this;
        this.promise.then(s=>{
            if (!r._listeners)
                return;
            let o = r._listeners.length;
            for (; o-- > 0; )
                r._listeners[o](s);
            r._listeners = null
        }
        ),
        this.promise.then = s=>{
            let o;
            const i = new Promise(c=>{
                r.subscribe(c),
                o = c
            }
            ).then(s);
            return i.cancel = function() {
                r.unsubscribe(o)
            }
            ,
            i
        }
        ,
        t(function(o, i, c) {
            r.reason || (r.reason = new K(o,i,c),
            n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    static source() {
        let t;
        return {
            token: new Ce(function(s) {
                t = s
            }
            ),
            cancel: t
        }
    }
}
const kr = Ce;
function Br(e) {
    return function(n) {
        return e.apply(null, n)
    }
}
function _r(e) {
    return a.isObject(e) && e.isAxiosError === !0
}
function St(e) {
    const t = new Q(e)
      , n = rt(Q.prototype.request, t);
    return a.extend(n, Q.prototype, t, {
        allOwnKeys: !0
    }),
    a.extend(n, t, null, {
        allOwnKeys: !0
    }),
    n.create = function(s) {
        return St(q(e, s))
    }
    ,
    n
}
const S = St(ge);
S.Axios = Q;
S.CanceledError = K;
S.CancelToken = kr;
S.isCancel = bt;
S.VERSION = Ot;
S.toFormData = ie;
S.AxiosError = w;
S.Cancel = S.CanceledError;
S.all = function(t) {
    return Promise.all(t)
}
;
S.spread = Br;
S.isAxiosError = _r;
S.AxiosHeaders = x;
S.formToJSON = e=>wt(a.isHTMLForm(e) ? new FormData(e) : e);
S.default = S;
const Dr = S
  , Lr = "https://consult-api.itheima.net/"
  , xe = Dr.create({
    baseURL: Lr,
    timeout: 1e4
});
xe.interceptors.request.use(e=>{
    var n;
    const t = Ve();
    return ((n = t.user) == null ? void 0 : n.token) && e.headers && (e.headers.Authorization = `Bearer ${t.user.token}`),
    e
}
, e=>Promise.reject(e));
xe.interceptors.response.use(e=>e.data.code !== 1e4 ? (nt(e.data.message || "\u4E1A\u52A1\u5931\u8D25"),
Promise.reject(e.data)) : e.data, e=>{
    var t;
    return ((t = e.response) == null ? void 0 : t.status) === 401 && (Ve().delUser(),
    Ae.push({
        path: "/login",
        query: {
            returnUrl: Ae.currentRoute.value.fullPath
        }
    })),
    Promise.reject(e)
}
);
const Hr = (e,t="GET",n)=>xe.request({
    url: e,
    method: t,
    [t.toUpperCase() === "GET" ? "params" : "data"]: n
});
export {Zt as L, fn as P, zr as a, Mr as b, en as c, Kt as d, yn as e, Ur as f, jr as g, Lr as h, wn as m, Ze as p, Hr as r, nt as s, Ge as u};
